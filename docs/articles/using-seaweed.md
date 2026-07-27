# Using Seaweed

This guide explains how to run the **Testkube On-Prem Control Plane** with embedded SeaweedFS as the S3-compatible storage backend.

## Scope

This page is focused on the `testkube-enterprise` Helm chart.

- Applies to: On-Prem Control Plane deployments (Enterprise chart).
- Not covered here: Standalone Agent (OSS) storage setup.

## Overview

By default, the Enterprise chart uses embedded MinIO for object storage.
SeaweedFS can be enabled as an embedded S3-compatible alternative with the same artifact and log storage flow.

At a minimum, switch these toggles:

- `minio.enabled: false`
- `seaweedfs.enabled: true`
- `global.storage.provider: seaweedfs`
- `global.storage.endpoint: <seaweedfs-s3-endpoint>`

## Enterprise configuration (embedded SeaweedFS)

Use this as the baseline values override for `testkube-enterprise`:

```yaml
minio:
  enabled: false
  customIngress:
    enabled: false

seaweedfs:
  enabled: true
  filer:
    s3:
      enabled: true
      enableAuth: true

global:
  storage:
    provider: seaweedfs
    endpoint: "testkube-seaweedfs-s3.testkube.svc.cluster.local:8333"
    outputsBucket: "testkube-cloud-outputs"
    secure: false
    skipVerify: false
    # Use inline access key/secret from global.storage for SeaweedFS auth.
    credsSecretRef: ""

testkube-cloud-api:
  api:
    minio:
      signing:
        hostname: "testkube-seaweedfs-s3.testkube.svc.cluster.local:8333"
        secure: false

testkube-agent:
  testkube-api:
    nats:
      enabled: false
    minio:
      enabled: false

testkube-worker-service:
  additionalEnv:
    # `USE_MINIO` here means "use S3-compatible storage driver", not "deploy embedded MinIO".
    USE_MINIO: true
```

## TLS configuration

If SeaweedFS S3 is exposed over HTTPS, enable TLS in both storage and signing settings.

### Public CA certificate

```yaml
global:
  storage:
    endpoint: "testkube-seaweedfs-filer.testkube.svc.cluster.local:8443"
    secure: true
    skipVerify: false
```

### Private or self-signed CA

1. Create a secret with your CA certificate:

```bash
kubectl -n testkube create secret generic seaweed-ca \
  --from-file=ca.crt=./ca.crt
```

2. Reference it in values:

```yaml
global:
  customCaSecretRef: seaweed-ca
  customCaSecretKey: ca.crt
  storage:
    endpoint: "testkube-seaweedfs-filer.testkube.svc.cluster.local:8443"
    secure: true
    skipVerify: false
    accessKeyId: "testkube-enterprise"
    secretAccessKey: "t3stkub3-3nt3rpr1s3"

seaweedfs:
  enabled: true
  global:
    seaweedfs:
      enableSecurity: true
  filer:
    s3:
      enabled: true
      enableAuth: true
      port: 8333
      httpsPort: 8443
      existingConfigSecret: testkube-seaweedfs-s3-config
```

## Credentials

You can provide S3 credentials inline under `global.storage` or from an existing secret via `global.storage.credsSecretRef`.

For production, use Kubernetes secrets and avoid storing secrets directly in values files.

## Install or upgrade

```bash
helm upgrade --install testkube testkube-enterprise/testkube-enterprise \
  -n testkube --create-namespace \
  -f values.yaml
```

If you maintain a separate Seaweed override, include both files:

```bash
helm upgrade --install testkube testkube-enterprise/testkube-enterprise \
  -n testkube --create-namespace \
  -f values.yaml \
  -f values-seaweedfs-embedded.yaml
```

## Verify SeaweedFS is in use

1. Confirm SeaweedFS components are running:

```bash
kubectl get pods -n testkube | grep seaweed
```

2. Confirm storage settings on the API deployment:

```bash
kubectl get deploy testkube-enterprise-api -n testkube -o yaml | grep STORAGE_ -A4
```

3. Confirm signing endpoint points to Seaweed:

```bash
kubectl get deploy testkube-enterprise-api -n testkube -o yaml | grep MINIO_SIGNING_ -A2
```

## Notes

- Keep `testkube-worker-service.additionalEnv.USE_MINIO=true` because the worker uses the S3-compatible storage integration path.
- Disable embedded MinIO whenever SeaweedFS is the active storage backend.
- Set `global.storage.endpoint` to a reachable Seaweed S3 service address from control-plane pods.

## On-Prem Control Plane (OSS chart)

For the `testkube` Helm chart, enable SeaweedFS and set it as the storage provider:

```yaml
global:
  storageProvider: seaweedfs
  # Optional: default SeaweedFS S3 port used by API endpoint fallback
  seaweedfsS3Port: 8333

seaweedfs:
  enabled: true
  global:
    seaweedfs:
      image:
        name: kubeshop/testkube-seaweedfs
  master:
    replicas: 1
  volume:
    replicas: 1
  filer:
    replicas: 1
    s3:
      enabled: true
      port: 8333
      enableAuth: true
      existingConfigSecret: testkube-seaweedfs-s3-config
      createBuckets: []

testkube-api:
  minio:
    enabled: false
  storage:
    # SeaweedFS S3 endpoint (internal service or TLS ingress endpoint).
    endpoint: "<SEAWEED_ENDPOINT>"
    accessKeyId: "<ACCESS_KEY_ID>"
    accessKey: "<SECRET_ACCESS_KEY>"
    bucket: "testkube-artifacts"
    SSL: false
    skipVerify: false
```

### Notes

- If `testkube-api.storage.endpoint` is left empty, Testkube API uses the embedded SeaweedFS endpoint automatically.
- Endpoint examples:
  - Internal service: `<RELEASE_NAME>-seaweedfs-filer:8333`
  - Cross-namespace: `<RELEASE_NAME>-seaweedfs-filer.<NAMESPACE>.svc.cluster.local:8333`
  - TLS ingress: `seaweed.<YOUR_DOMAIN>:443` (set `SSL: true`)
- Set `testkube-api.minio.enabled: false` when using SeaweedFS.
- If you use credential secrets (`secretNameAccessKeyId` / `secretNameSecretAccessKey`), the SeaweedFS S3 config secret follows those credentials as well.

## TLS configuration

If your Seaweed endpoint is exposed over HTTPS (for example through Ingress), configure storage TLS in `testkube-api.storage`.

### Public CA certificate (recommended when possible)

```yaml
testkube-api:
  storage:
    endpoint: "seaweed.<YOUR_DOMAIN>:443"
    SSL: true
    skipVerify: false
```

### Private/self-signed CA

1. Create a secret containing the CA certificate (and optionally cert/key if you need mTLS):

```bash
kubectl -n testkube create secret generic storage-client-cert \
  --from-file=ca.crt=./ca.crt
```

2. Reference it in values:

```yaml
testkube-api:
  storage:
    endpoint: "seaweed.<YOUR_DOMAIN>:443"
    SSL: true
    skipVerify: false
    mountCACertificate: true
    certSecret:
      enabled: true
      name: storage-client-cert
      baseMountPath: /etc/client-certs/storage
      certFile: cert.crt
      keyFile: cert.key
      caFile: ca.crt
```

## Install / Upgrade example

```bash
helm upgrade --install testkube kubeshop/testkube \
  -n testkube --create-namespace \
  -f values.yaml
```

## Verify SeaweedFS is being used

1. Confirm SeaweedFS components are running:

```bash
kubectl get pods -n testkube | grep seaweed
```

2. Confirm Testkube API storage endpoint points to SeaweedFS (rendered values/env):

```bash
kubectl get deploy testkube-api-server -n testkube -o yaml | grep STORAGE_ENDPOINT -A1
```

## Credentials

You can provide storage credentials either directly in values or from Kubernetes Secrets.
For production environments, using Secrets is recommended.

### Option 1: Set credentials directly in values

```yaml
testkube-api:
  storage:
    accessKeyId: "<ACCESS_KEY_ID>"
    accessKey: "<SECRET_ACCESS_KEY>"
```

### Option 2: Use Kubernetes Secret (recommended)

1. Generate credentials:

```bash
ACCESS_KEY_ID="testkube"
SECRET_ACCESS_KEY="$(openssl rand -base64 32 | tr -d '\n')"
```

2. Create a Secret:

```bash
kubectl -n testkube create secret generic testkube-storage-creds \
  --from-literal=accessKeyId="$ACCESS_KEY_ID" \
  --from-literal=secretAccessKey="$SECRET_ACCESS_KEY"
```

3. Reference the Secret in Helm values:

```yaml
testkube-api:
  storage:
    secretNameAccessKeyId: testkube-storage-creds
    secretKeyAccessKeyId: accessKeyId
    secretNameSecretAccessKey: testkube-storage-creds
    secretKeySecretAccessKey: secretAccessKey
```

