# Testkube Agent 

## Overview

The Testkube Agent is 100% Open Source and includes the Testkube execution and orchestration engine 
(with some [limitations](#agent-limitations-in-standalone-mode)). It is _always_ hosted in your infrastructure and 
can be deployed in two modes:

- **Standalone Mode** - not connected to a Testkube Control Plane.
- **Connected Mode** - connected to a Testkube Control Plane.

This document shows how to use the Agent in Standalone mode, see the corresponding documentation for 
[On Prem](/articles/install/onprem-overview) and [Cloud](/articles/install/cloud-overview)
deployment of the Testkube Control Plane to learn how to use the Agent in Connected Mode.

:::tip
See the [Feature Comparison](feature-comparison) to understand the differences in functionality between these two modes.
:::

## Running in Standalone Mode

When running the Agent in Standalone Mode there is no [Dashboard](/articles/testkube-dashboard-explore) and is has to be managed entirely through the [Testkube CLI](/articles/cli). 

The following functionality is available directly in the agent in Standalone Mode

- **Test Workflows** : Manage Workflows and Templates, Run/Schedule executions (see below for limitations).
- **Logs/Artifacts** : Retrieve Workflow executions, logs, artifacts via CLI or API.
- **Webhooks** : Manage Webhooks that the Agent executes.
- **Event Triggers** : Manage Event Triggers that the Agent reacts to.
- **Tests, TestSuites, Sources, Executors** : Deprecated - but still available during a transition period - [Read More](/articles/legacy-features).

### Agent Limitations in Standalone Mode

The following Workflow features are _not_ available when using the Open Source Agent without connecting it to a
Testkube Control Plane:

- **Complex Test Orchestration** with `execute` - see [Test Suites](/articles/test-workflows-test-suites.mdx)
- **Parallel execution** with `parallel` - see [Parallelization](/articles/test-workflows-parallel.mdx)
- **Parameterization** with `matrix` (and `count`, `shards`, `maxCount`) - see [Sharding & Matrix Params](/articles/test-workflows-matrix-and-sharding.mdx)
- **Spawning dependencies** for your tests with `services` - see [Services](/articles/test-workflows-services.mdx)

## Installing the Standalone Agent

The following steps are required to install the Standalone Agent into a Kubernetes Cluster:

- Create a Testkube namespace.
- Deploy the Testkube API (see below).
- Use MongoDB for test results and Minio for artifact storage (optional; disable with --no-minio).
- Testkube will listen and manage all the CRDs for TestWorkflows, Triggers, Webhooks, etc… inside the Testkube namespace.

Once installed you can verify your installation and check that Testkube is up and running with
`kubectl get all -n testkube`. Once validated, you're ready to unleash the full potential of Testkube in your environment.
Testkube OSS is here to help you to powering your development and testing workflows seamlessly.

### With the CLI

You can install the standalone agent by executing the following command.
By default it will install within the `testkube` namespace for your
current Kubernetes context.

```sh
testkube init
```

### With Helm

Add the Kubeshop Helm repository:

```sh
helm repo add kubeshop https://kubeshop.github.io/helm-charts
```

If this repo already exists, run `helm repo update` to retrieve
the `latest` versions of the packages. You can then run `helm search repo
testkube` to see the charts.

Install the Helm Chart with defaults:

```sh
helm upgrade --install \
  --create-namespace \
  --namespace testkube \
  testkube kubeshop/testkube
```

By default, the namespace for the installation will be `testkube`. If the `testkube` namespace does not exist, it will be created for you.

Alternatively, you can customize by fetching the default values.yaml and modifying it afterward:

```sh
helm show values kubeshop/testkube > values.yaml
```

In this case you can install the Helm Chart as follows:

```sh
helm upgrade --install \
  --create-namespace \
  --namespace testkube \
  -f values.yaml \
  testkube kubeshop/testkube
```

:::tip
The [Helm Chart Docs](https://github.com/kubeshop/helm-charts/tree/main/charts/testkube#testkube) include a list of all available
[values properties](https://github.com/kubeshop/helm-charts/tree/main/charts/testkube#values).
:::

## Upgrading

See [upgrade][upgrade] for instructions on how to upgrade the standalone agent.

## Uninstalling

### With the CLI

```sh
testkube uninstall
```

### With Helm

```sh
helm delete --namespace testkube testkube kubeshop/testkube
```

## Deployment Architecture

A high-level deployment architecture for Standalone Agent is shown below. 

![Deployment with standalone agent](../../img/architecture-standalone.jpeg)

The Testkube CRDs managed by the Operator are described in [Testkube Custom Resources](/articles/crds).

## Connecting to the Testkube Control Plane

You can connect a standalone Agent to an instance of the Testkube Control Plane to leverage 
corresponding functionality (see [Feature Comparison](feature-comparison)).
All Workflow/Trigger/Webhook definitions will be preserved, but historical test execution results and 
artifacts won't be copied to the control plane.

The following command which will guide you through the migration process:

```
testkube pro connect
```

To complete the procedure, you will finally have to [set your CLI Context to talk to Testkube][cli-context].

## Advanced

### Log Storage

Testkube can be configured to use different storage for test logs output that can be specified in the Helm values.

```yaml
## Logs storage for Testkube API.
logs:
  ## where the logs should be stored there are 2 possible valuse : minio|mongo
  storage: "minio"
  ## if storage is set to minio then the bucket must be specified, if minio with s3 is used make sure to use a unique name
  bucket: "testkube-logs"
```

When [mongo](https://www.mongodb.com/kubernetes) is specified, logs will be stored in a separate collection so the execution handling performance is not affected.

When [minio](https://min.io/) is specified, logs will be stored as separate files in the configured bucket of the MinIO instance or the S3 bucket if MinIO is configured to work with S3.

### Artifact Storage

Testkube allows you to save supported files generated by your tests, which we call **Artifacts**.

The engine will scrape the files and store them in [Minio](https://min.io/) in a bucket named by execution ID and collect all files
that are stored in the location specific to each workflow.

The available configuration parameters in Helm charts are:

| Parameter                        | Is optional | Default                              | Default                                               |
| -------------------------------- | ----------- | ------------------------------------ | ----------------------------------------------------- |
| testkube-api.storage.endpoint    | yes         | testkube-minio-service-testkube:9000 | URL of the S3 bucket                                  |
| testkube-api.storage.accessKeyId | yes         | minio                                | Access Key ID                                         |
| testkube-api.storage.accessKey   | yes         | minio123                             | Access Key                                            |
| testkube-api.storage.location    | yes         |                                      | Region                                                |
| testkube-api.storage.token       | yes         |                                      | S3 Token                                              |
| testkube-api.storage.SSL         | yes         | false                                | Indicates whether SSL communication is to be enabled. |

The API Server accepts the following environment variables:

```sh
STORAGE_ENDPOINT
STORAGE_BUCKET
STORAGE_ACCESSKEYID
STORAGE_SECRETACCESSKEY
STORAGE_LOCATION
STORAGE_REGION
STORAGE_TOKEN
STORAGE_SSL
```

Which can be set while installing with Helm:

```sh
helm install --create-namespace my-testkube kubeshop/testkube --set STORAGE_ENDPOINT=custom_value
```

Alternatively, these values can be read from Kubernetes secrets and set:

```yaml
- env:
 - name: STORAGE_ENDPOINT
   secret:
  secretName: test-secret
```

### Deploying on OpenShift

To install the standalone agent Testkube on an Openshift cluster you will need to include the following configuration:

1. Add security context for MongoDB to `values.yaml`:

```yaml
mongodb:
  securityContext:
    enabled: true
    fsGroup: 1000650001
    runAsUser: 1000650001
  podSecurityContext:
    enabled: false
  containerSecurityContext:
    enabled: true
    runAsUser: 1000650001
    runAsNonRoot: true
  volumePermissions:
    enabled: false
  auth:
    enabled: false
```

2. Add security context for `Patch` and `Migrate` jobs that are a part of Testkube Operator configuration to `values.yaml`:

```yaml
testkube-operator:
  webhook:
    migrate:
      enabled: true
      securityContext:
        allowPrivilegeEscalation: false
        capabilities:
          drop: ["ALL"]

    patch:
      enabled: true
      securityContext:
        runAsNonRoot: true
        runAsUser: 1000650000
        fsGroup: 1000650000
```

3. Install Testkube specifying the path to the new `values.yaml` file

```
helm install testkube kubeshop/testkube --create-namespace --namespace testkube --values values.yaml
```

Please notice that since we've just installed MongoDB with a `testkube-mongodb` Helm release name, you are not required to reconfigure the Testkube API MongoDB connection URI. If you've installed with a different name/namespace, please adjust `--set testkube-api.mongodb.dsn: "mongodb://testkube-mongodb:27017"` to your MongoDB service.

### Deploying on AWS

If you are using **Amazon Web Services**, this tutorial will show you how to deploy Testkube OSS in EKS and expose its API to the Internet with the AWS Load Balancer Controller.

#### Prerequisites

First, we will need an existing Kubernetes cluster. Please see the official documentation on how to get started with an Amazon EKS cluster [here](https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html).

Once the cluster is up and running we need to deploy the AWS Load Balancer Controller. For more information, see [Installing the AWS Load Balancer Controller add-on](https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html).

Another important point is [ExternalDNS](https://github.com/kubernetes-sigs/external-dns). It is not compulsory to deploy it into your cluster, but it helps you dynamically manage your DNS records via k8s resources.

And last, but not least - install the Testkube CLI. You can download a binary file from our [installation][install-cli] page. For how to deploy Testkube to your cluster with all the necessary changes, please see the next section.

:::caution

Please mind that is it necessary to install [EBS CSI driver](https://docs.aws.amazon.com/eks/latest/userguide/ebs-csi.html) to mount PV into your k8s cluster.

:::

#### Ingress and Service Resources Configuration

To deploy and expose Testkube API to the outside world, you will need to create an Ingress resource for Testkube's API server. In this tutorial, we will be updating `values.yaml` that later will be passed to the `helm install` command.

In order to use the AWS Load Balancer Controller we need to create a `values.yaml` file and add the following annotation to the Ingress resources:

```yaml
annotations:
  kubernetes.io/ingress.class: alb
```

Once this annotation is added, Controller creates an ALB and the necessary supporting AWS resources.

The example configuration using HTTPS protocol might look like the following:

**Testkube API Ingress:**

```yaml
uiIngress:
  enabled: true
  annotations:
    kubernetes.io/ingress.class: alb
    alb.ingress.kubernetes.io/load-balancer-name: testkube-api
    alb.ingress.kubernetes.io/target-type: ip
    alb.ingress.kubernetes.io/backend-protocol: HTTP
    alb.ingress.kubernetes.io/listen-ports: '[{"HTTP": 80},{"HTTPS": 443}]'
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/healthcheck-path: "/health"
    alb.ingress.kubernetes.io/healthcheck-port: "8088"
    alb.ingress.kubernetes.io/ssl-redirect: "443"
    alb.ingress.kubernetes.io/certificate-arn: "arn:aws:acm:us-east-1:*******:certificate/*****"
  path: /v1
  hosts:
    - test-api.aws.testkube.io
```

Once we are ready with the `values.yaml` file, we can deploy Testkube into our cluster:

```sh
helm repo add kubeshop https://kubeshop.github.io/helm-chart

helm repo update

helm install --create-namespace testkube kubeshop/testkube --namespace testkube --values values.yaml
```

After the installation command is complete, you will see the following resources created into your AWS Console.

![AWS Console2](../../img/aws-resource-console-2.png)

Please note that the annotations may vary, depending on your Load Balancer schema type, backend-protocols, target-type, etc. However, this is the bare minimum that should be applied to your configuration.

Except for the Ingress annotation, you need to update the Service manifests with a healthcheck configuration as well. Include the lines below into your `values.yaml` file.

**Testkube API Service:**

```yaml
service:
  type: ClusterIP
  port: 8088
  annotations:
    alb.ingress.kubernetes.io/healthcheck-path: "/health"
    alb.ingress.kubernetes.io/healthcheck-port: "8088"
```

#### Examples of AWS S3 Bucket configuration

If you plan to use AWS S3 Bucket for storing test artifacts, you can follow below examples

**Terraform aws iam policy:**

```yaml
data "aws_iam_policy_document" "testkube" {
  statement {
    sid    = "S3Buckets"
    effect = "Allow"
    actions = [
      "s3:ListAllMyBuckets", # see https://github.com/kubeshop/testkube/issues/3965
    ]
    resources = [
      "arn:aws:s3:::*",
    ]
  }
  statement {
    sid    = "S3Bucket"
    effect = "Allow"
    actions = [
      "s3:ListBucket",
      "s3:GetBucketLocation",
    ]
    resources = [
      "arn:aws:s3:::*-testkube-${terraform.workspace}",
    ]
  }
  statement {
    sid    = "S3Object"
    effect = "Allow"
    actions = [
      "s3:GetObject*",
      "s3:PutObject*",
      "s3:DeleteObject",
    ]
    resources = [
      "arn:aws:s3:::*-testkube-${terraform.workspace}/*",
    ]
  }
}
```

**Teskube helm values:**

```yaml
testkube-api:
  jobServiceAccountName: testkube-api-server # reuse the service-account from testkube-api
  minio:
    enabled: true # required to be able to access AWS S3 (minio is used as a proxy)
    minioRootUser: ""
    minioRootPassword: ""
    serviceAccountName: testkube-api-server # reuse the service-account from testkube-api
  serviceAccount:
    annotations:
      eks.amazonaws.com/role-arn: arn:aws:iam::111111111111:role/my-dev-testkube
  storage:
    endpoint: s3.amazonaws.com
    accessKeyId: ""
    accessKey: ""
    location: eu-central-1
    bucket: my-testkube-dev
    SSL: true
    endpoint_port: ""
  logs:
    storage: "minio"
    bucket: my-testkube-dev
```

[secrets-endpoint]: /articles/secrets-enable-endpoint
[secrets-creation]: /articles/secrets-disable-creation
[upgrade]: /articles/upgrade-uninstall
[mongo-config]: https://github.com/bitnami/charts/tree/master/bitnami/mongodb#parameters
[nats-config]: https://docs.nats.io/running-a-nats-service/nats-kubernetes/helm-charts
[install-cli]: /articles/install/cli
[cli-context]: /cli/testkube_set_context
