# Deploying on AWS EKS

This guide walks through deploying Testkube On-Prem on an existing **Amazon EKS** cluster. It covers
prerequisites, S3 storage configuration with two authentication methods (EKS Pod Identity and IRSA),
ingress setup, and production hardening.

:::info
A ready-to-use reference repository with all configuration files, IAM templates, and install scripts
is available at [testkube-aws-deployment](https://github.com/kubeshop/testkube-aws-deployment).
You can clone it and customise the values files for your environment.
:::

## Prerequisites

| Requirement | Version |
|---|---|
| Amazon EKS | 1.21+ (1.24+ for Pod Identity) |
| Helm | 3+ |
| kubectl | configured for the target cluster |
| [cert-manager](https://cert-manager.io/docs/installation/) *(recommended)* | 1.11+ |
| [NGINX Ingress Controller](https://kubernetes.github.io/ingress-nginx/) *(recommended)* | 1.8+ |

:::warning IMPORTANT
Use the community [kubernetes/ingress-nginx](https://artifacthub.io/packages/helm/ingress-nginx/ingress-nginx) chart —
**not** `nginx/nginx-ingress` from NGINX Inc. Using the wrong chart causes Dex or API Ingresses to be
silently ignored when they share the same hostname.
:::

### Cluster Sizing

- At least **3 nodes**
- At least **2 CPU cores** per node
- At least **8 GB RAM** per node

## 1. Configure kubectl

```bash
aws eks update-kubeconfig --region <AWS_REGION> --name <EKS_CLUSTER_NAME>
```

## 2. Install Dependencies

### cert-manager

```bash
helm repo add jetstack https://charts.jetstack.io && helm repo update
helm install cert-manager jetstack/cert-manager \
  --namespace cert-manager --create-namespace \
  --set crds.enabled=true
```

### NGINX Ingress Controller

```bash
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx && helm repo update
helm install ingress-nginx ingress-nginx/ingress-nginx \
  --namespace ingress-nginx --create-namespace
```

## 3. Create Kubernetes Secrets

Create the target namespace first:

```bash
kubectl create namespace testkube
```

**License key:**

```bash
kubectl create secret generic testkube-license \
  --from-literal=LICENSE_KEY=<YOUR_LICENSE_KEY> \
  -n testkube
```

**Master password** for [credentials encryption](/articles/install/advanced-install#master-password-for-encryption):

```bash
kubectl create secret generic testkube-master-password \
  --from-literal=password=$(openssl rand -base64 48) \
  -n testkube
```

:::warning
The master password **cannot be recovered** if lost. Store it in a secrets manager such as AWS Secrets Manager
or Parameter Store before proceeding.
:::

## 4. Configure Helm Values

Start from the base values file in the
[reference repository](https://github.com/kubeshop/testkube-aws-deployment) and customise at minimum:

```yaml
global:
  enterpriseLicenseSecretRef: "testkube-license"

  domain: "testkube.example.com"

  ingress:
    enabled: true

  credentials:
    masterPassword:
      secretKeyRef:
        name: testkube-master-password
        key: password

  certificateProvider: "cert-manager"
  certManager:
    issuerRef: "letsencrypt-prod"
```

Configure your identity provider connector under `dex.configTemplate.additionalConfig`.
See [SSO / Identity Providers](/articles/auth) for detailed examples.

## 5. Configure S3 Storage

Using AWS S3 instead of the default in-cluster MinIO is recommended for production EKS
deployments. Two authentication methods are available — choose one:

| Method | When to use |
|---|---|
| **EKS Pod Identity** *(recommended)* | EKS 1.24+. Simpler setup, no OIDC provider needed. |
| **IRSA** (IAM Roles for Service Accounts) | EKS 1.21+, legacy clusters, or when the Pod Identity Agent cannot be installed. |

### Common Steps

#### Create the S3 Bucket

```bash
aws s3 mb s3://<S3_BUCKET_NAME> --region <AWS_REGION>
```

#### Create the IAM Policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:ListBucket", "s3:GetBucketLocation"],
      "Resource": "arn:aws:s3:::<S3_BUCKET_NAME>"
    },
    {
      "Effect": "Allow",
      "Action": ["s3:GetObject", "s3:PutObject", "s3:DeleteObject"],
      "Resource": "arn:aws:s3:::<S3_BUCKET_NAME>/*"
    }
  ]
}
```

```bash
aws iam create-policy \
  --policy-name TestkubeS3Access \
  --policy-document file://iam-policy-s3.json
```

#### Configure CORS

To allow the Dashboard to retrieve workflow artifacts directly from S3:

```bash
aws s3api put-bucket-cors --bucket <S3_BUCKET_NAME> --cors-configuration '{
  "CORSRules": [{
    "AllowedOrigins": ["https://dashboard.testkube.example.com"],
    "AllowedMethods": ["GET", "OPTIONS"],
    "AllowedHeaders": ["*"],
    "ExposeHeaders": ["Content-Length", "Content-Type", "ETag"],
    "MaxAgeSeconds": 3600
  }]
}'
```

#### Helm Values for S3

Both methods share the same storage configuration. Add or merge this into your values:

```yaml
global:
  storage:
    endpoint: "s3.amazonaws.com"
    region: "<AWS_REGION>"
    outputsBucket: "<S3_BUCKET_NAME>"
    secure: true
    accessKeyId: ""
    secretAccessKey: ""

minio:
  enabled: false
```

:::note
`accessKeyId` and `secretAccessKey` **must** be set to `""` (empty string, not omitted) so that the
SDK falls back to IAM-based authentication.
:::

### Option A — EKS Pod Identity

EKS Pod Identity eliminates the need for OIDC provider configuration and service account annotations.
The Pod Identity Agent runs as a DaemonSet and injects credentials directly into pods.

**Step 1 — Install the Pod Identity Agent addon:**

```bash
aws eks create-addon \
  --cluster-name <EKS_CLUSTER_NAME> \
  --addon-name eks-pod-identity-agent
```

**Step 2 — Create the IAM Role:**

The trust policy only needs to trust the `pods.eks.amazonaws.com` service — no cluster-specific OIDC ID required:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "pods.eks.amazonaws.com"
      },
      "Action": ["sts:AssumeRole", "sts:TagSession"]
    }
  ]
}
```

```bash
aws iam create-role \
  --role-name TestkubeS3Role \
  --assume-role-policy-document file://iam-trust-policy-pod-identity.json

aws iam attach-role-policy \
  --role-name TestkubeS3Role \
  --policy-arn arn:aws:iam::<AWS_ACCOUNT_ID>:policy/TestkubeS3Access
```

**Step 3 — Create Pod Identity Associations:**

```bash
aws eks create-pod-identity-association \
  --cluster-name <EKS_CLUSTER_NAME> \
  --namespace testkube \
  --service-account testkube-enterprise-api \
  --role-arn arn:aws:iam::<AWS_ACCOUNT_ID>:role/TestkubeS3Role

aws eks create-pod-identity-association \
  --cluster-name <EKS_CLUSTER_NAME> \
  --namespace testkube \
  --service-account testkube-worker-service \
  --role-arn arn:aws:iam::<AWS_ACCOUNT_ID>:role/TestkubeS3Role
```

No service account annotations are needed — Pod Identity handles credential injection through the associations.

### Option B — IRSA (IAM Roles for Service Accounts)

IRSA uses the cluster's OIDC provider to establish trust between Kubernetes service accounts and IAM roles.

**Step 1 — Get the OIDC provider ID:**

```bash
aws eks describe-cluster --name <EKS_CLUSTER_NAME> \
  --query "cluster.identity.oidc.issuer" --output text | cut -d/ -f5
```

**Step 2 — Create the IAM Role with an OIDC trust policy:**

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::<AWS_ACCOUNT_ID>:oidc-provider/oidc.eks.<AWS_REGION>.amazonaws.com/id/<OIDC_ID>"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "oidc.eks.<AWS_REGION>.amazonaws.com/id/<OIDC_ID>:sub": [
            "system:serviceaccount:testkube:testkube-enterprise-api",
            "system:serviceaccount:testkube:testkube-worker-service"
          ],
          "oidc.eks.<AWS_REGION>.amazonaws.com/id/<OIDC_ID>:aud": "sts.amazonaws.com"
        }
      }
    }
  ]
}
```

```bash
aws iam create-role \
  --role-name TestkubeS3Role \
  --assume-role-policy-document file://iam-trust-policy-s3.json

aws iam attach-role-policy \
  --role-name TestkubeS3Role \
  --policy-arn arn:aws:iam::<AWS_ACCOUNT_ID>:policy/TestkubeS3Access
```

**Step 3 — Annotate service accounts in your Helm values:**

```yaml
testkube-cloud-api:
  serviceAccount:
    create: true
    name: testkube-enterprise-api
    annotations:
      eks.amazonaws.com/role-arn: "arn:aws:iam::<AWS_ACCOUNT_ID>:role/TestkubeS3Role"

testkube-worker-service:
  serviceAccount:
    create: true
    name: testkube-worker-service
    annotations:
      eks.amazonaws.com/role-arn: "arn:aws:iam::<AWS_ACCOUNT_ID>:role/TestkubeS3Role"
```

## 6. Deploy

```bash
helm upgrade --install \
  --create-namespace \
  --namespace testkube \
  -f values.yaml \
  testkube oci://us-east1-docker.pkg.dev/testkube-cloud-372110/testkube/testkube-enterprise
```

:::tip
The [reference repository](https://github.com/kubeshop/testkube-aws-deployment) includes an `install.sh`
script that supports composable flags:

```bash
./install.sh --with-pod-identity --production
./install.sh --with-s3 --with-alb --production
```
:::

## 7. DNS Setup

Create DNS records (CNAME or Alias) pointing to your NGINX Ingress load balancer for each service:

| Record | Default subdomain |
|---|---|
| Dashboard | `dashboard.<domain>` |
| REST API | `api.<domain>` |
| gRPC API | `agent.<domain>` |
| WebSockets | `websockets.<domain>` |
| Storage | `storage.<domain>` |

Get the load balancer hostname:

```bash
kubectl get svc -n ingress-nginx ingress-nginx-controller \
  -o jsonpath='{.status.loadBalancer.ingress[0].hostname}'
```

## 8. Verify the Installation

```bash
kubectl get pods -n testkube
kubectl get ingress -n testkube
```

All pods should reach `Running` status. The Dashboard should be accessible at `https://dashboard.<domain>`.

## Using AWS ALB Instead of NGINX

If you prefer the AWS Load Balancer Controller over NGINX Ingress, you need to configure ALB annotations
for each Ingress resource. Testkube exposes the gRPC endpoint (`agent.<domain>`) through a **separate
Ingress** from the REST API, so it needs its own ALB configuration with `backend-protocol-version: "GRPC"`.

```yaml
testkube-cloud-api:
  # REST API Ingress (api.<domain>)
  ingress:
    className: "alb"
    annotations:
      alb.ingress.kubernetes.io/scheme: "internet-facing"
      alb.ingress.kubernetes.io/target-type: "ip"
      alb.ingress.kubernetes.io/listen-ports: '[{"HTTPS":443}]'
      alb.ingress.kubernetes.io/certificate-arn: "<ACM_CERTIFICATE_ARN>"
      alb.ingress.kubernetes.io/ssl-policy: "ELBSecurityPolicy-TLS13-1-2-2021-06"

  # gRPC Ingress (agent.<domain>) — requires GRPC backend protocol
  grpcIngress:
    enabled: true
    annotations:
      alb.ingress.kubernetes.io/scheme: "internet-facing"
      alb.ingress.kubernetes.io/target-type: "ip"
      alb.ingress.kubernetes.io/listen-ports: '[{"HTTPS":443}]'
      alb.ingress.kubernetes.io/certificate-arn: "<ACM_CERTIFICATE_ARN>"
      alb.ingress.kubernetes.io/ssl-policy: "ELBSecurityPolicy-TLS13-1-2-2021-06"
      alb.ingress.kubernetes.io/backend-protocol-version: "GRPC"

testkube-cloud-ui:
  ingress:
    className: "alb"
    annotations:
      alb.ingress.kubernetes.io/scheme: "internet-facing"
      alb.ingress.kubernetes.io/target-type: "ip"
      alb.ingress.kubernetes.io/listen-ports: '[{"HTTPS":443}]'
      alb.ingress.kubernetes.io/certificate-arn: "<ACM_CERTIFICATE_ARN>"
      alb.ingress.kubernetes.io/ssl-policy: "ELBSecurityPolicy-TLS13-1-2-2021-06"

dex:
  ingress:
    className: "alb"
    annotations:
      alb.ingress.kubernetes.io/scheme: "internet-facing"
      alb.ingress.kubernetes.io/target-type: "ip"
      alb.ingress.kubernetes.io/listen-ports: '[{"HTTPS":443}]'
      alb.ingress.kubernetes.io/certificate-arn: "<ACM_CERTIFICATE_ARN>"
      alb.ingress.kubernetes.io/ssl-policy: "ELBSecurityPolicy-TLS13-1-2-2021-06"
```

:::warning
The `grpcIngress` section is critical — without `backend-protocol-version: "GRPC"`, ALB defaults to
HTTP/1.1 which breaks gRPC communication. Agents will fail to connect to the control plane.
:::

### TLS Certificates with ALB

ALB **does not** read TLS certificates from Kubernetes Secrets, so **cert-manager cannot be used** for
TLS termination at the ALB. You must use [AWS Certificate Manager (ACM)](https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html) instead.

Two approaches are available:

**Option 1 — Explicit ACM ARN (shown above)**

Provision a certificate in ACM (or request one via DNS/email validation), then reference it by ARN
in each Ingress annotation:

```yaml
alb.ingress.kubernetes.io/certificate-arn: "arn:aws:acm:<REGION>:<ACCOUNT>:certificate/<CERT_ID>"
```

:::tip
A single ACM wildcard certificate (e.g. `*.testkube.example.com`) can be shared across all Ingress
resources — use the same ARN for the API, gRPC, UI, and Dex Ingresses.
:::

**Option 2 — ACM certificate auto-discovery**

When the `certificate-arn` annotation is omitted, ALB automatically discovers ACM certificates whose
domain names match the Ingress hostnames. To use this approach, remove the `certificate-arn` annotation
and ensure a matching ACM certificate exists for your domain:

```bash
# Request a wildcard certificate
aws acm request-certificate \
  --domain-name "*.testkube.example.com" \
  --validation-method DNS \
  --region <AWS_REGION>
```

Then complete the DNS validation. Once issued, ALB will pick it up automatically — no ARN annotations needed.

:::note
When using ALB, **disable `certificateProvider` in your base values** to prevent the Helm chart from
creating unnecessary cert-manager Certificate resources:

```yaml
global:
  certificateProvider: ""
```
:::

## Production Hardening

For production deployments, consider the following settings. A complete production overlay is provided
in the [reference repository](https://github.com/kubeshop/testkube-aws-deployment).

**Replicas and Pod Disruption Budgets:**

```yaml
testkube-cloud-api:
  replicaCount: 2
  podDisruptionBudget:
    enabled: true
    minAvailable: 1

testkube-worker-service:
  replicaCount: 2
  podDisruptionBudget:
    enabled: true
    minAvailable: 1
```

**Pod anti-affinity** to spread replicas across nodes:

```yaml
testkube-cloud-api:
  affinity:
    podAntiAffinity:
      preferredDuringSchedulingIgnoredDuringExecution:
        - weight: 100
          podAffinityTerm:
            labelSelector:
              matchExpressions:
                - key: app.kubernetes.io/name
                  operator: In
                  values: ["testkube-cloud-api"]
            topologyKey: "kubernetes.io/hostname"
```

**Storage class:** Use `gp3` for EBS-backed PersistentVolumes (MongoDB, NATS):

```yaml
mongodb:
  persistence:
    storageClass: "gp3"
    size: 50Gi
```

## Troubleshooting

**Pods not starting:**

```bash
kubectl describe pod <pod-name> -n testkube
kubectl logs <pod-name> -n testkube
```

**S3 permission errors (Pod Identity):**

```bash
# Verify the addon is running
kubectl get ds -n kube-system eks-pod-identity-agent

# Check associations
aws eks list-pod-identity-associations \
  --cluster-name <EKS_CLUSTER_NAME> --namespace testkube
```

**S3 permission errors (IRSA):**

```bash
# Verify the annotation is present
kubectl get sa testkube-enterprise-api -n testkube -o yaml

# Verify the OIDC provider ID matches
aws eks describe-cluster --name <EKS_CLUSTER_NAME> \
  --query "cluster.identity.oidc.issuer" --output text
```

**gRPC connection issues:**
- Verify HTTP/2 is supported end-to-end through your ingress / load balancer.
- If using ALB, confirm the target group protocol and check for HTTP/2 support.

**License issues:**

```bash
kubectl get secret testkube-license -n testkube \
  -o jsonpath='{.data.LICENSE_KEY}' | base64 -d
```
