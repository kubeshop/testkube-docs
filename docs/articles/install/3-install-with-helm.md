# Install with Helm

The Testkube Helm Charts consist of Testkube Control Plane and Testkube Agent charts and let you set up a customized Testkube instance that is tailored to your environment.
You can learn more about the deployment architectures [here][deployment-architecture].

## Components

Testkube On-Prem consists of the following components:
* Testkube Control Plane - The central component that manages connected Agents.
  * API - A service which runs the REST, Agent gRPC and Websocket APIs for interacting with the Control Plane.
    * Helm chart - Bundled as a subchart in the [testkube-enterprise](https://github.com/kubeshop/testkube-cloud-charts/tree/main/charts/testkube-enterprise) Helm chart.
    * Docker image - [kubeshop/testkube-enterprise-api](https://hub.docker.com/r/kubeshop/testkube-enterprise-api)
  * Dashboard - The web-based UI for managing tests, environments, and users.
    * Helm chart - Bundled as a subchart in the [testkube-enterprise](https://github.com/kubeshop/testkube-cloud-charts/tree/main/charts/testkube-enterprise) Helm chart.
    * Docker image - [kubeshop/testkube-enterprise-ui](https://hub.docker.com/r/kubeshop/testkube-enterprise-ui)
  * Worker Service - A service which handles async operations for artifacts and test executions.
    * Helm chart - Bundled as a subchart in the [testkube-enterprise](https://github.com/kubeshop/testkube-cloud-charts/tree/main/charts/testkube-enterprise) Helm chart.
    * Docker image - [kubeshop/testkube-enterprise-worker-service](https://hub.docker.com/r/kubeshop/testkube-enterprise-worker-service)
  * Dex - A service that is used as an identity provider.
    * Helm chart - Bundled as a subchart in the [testkube-enterprise](https://github.com/kubeshop/testkube-cloud-charts/tree/main/charts/testkube-enterprise) Helm chart.
    * Docker image - [dex](https://github.com/dexidp/dex/pkgs/container/dex)
  * Minio - It is a database that is used for storing artifacts.
    * Helm chart - Used as a bitnami subchart in the [testkube-enterprise](https://github.com/kubeshop/testkube-cloud-charts/tree/main/charts/testkube-enterprise) Helm chart.
    * Docker image - [MinIo](https://hub.docker.com/r/bitnami/minio/tags)
  * MongoDB - It is a database that is used for storing the data.
    * Helm chart - Used as a bitnami subchart in the [testkube-enterprise](https://github.com/kubeshop/testkube-cloud-charts/tree/main/charts/testkube-enterprise) Helm chart.
    * Docker image - [MongoDB](https://hub.docker.com/r/bitnami/mongodb/tags)
  * NATS - It is a service that is used as a message broker for communication between API and Agents.
    * Helm chart - Used as a NATS subchart in the [testkube-enterprise](https://github.com/kubeshop/testkube-cloud-charts/tree/main/charts/testkube-enterprise) Helm chart.
    * Docker image - [NATS](https://hub.docker.com/_/nats/tags)
  * Additional images used for running jobs during the chart install:
    * [kubectl](https://hub.docker.com/r/bitnami/kubectl)
    * [mongosh](https://hub.docker.com/r/alpine/mongosh)
    * [db-migrations](https://hub.docker.com/repository/docker/kubeshop/testkube-enterprise-api-migrations/tags)
    * [nats-reloader](https://hub.docker.com/r/natsio/nats-server-config-reloader)
    * [natsBox](https://hub.docker.com/r/natsio/nats-box)
    * [promExporter](https://hub.docker.com/r/natsio/prometheus-nats-exporter)
* Testkube Agent - A lightweight component that connects to the Control Plane and executes test runs.
  * API - a service that runs REST APIs and establishes a connection between Agent and a Control Plane 
    * Helm chart - Bundled as a subchart in the [kubeshop/testkube](https://github.com/kubeshop/helm-charts/tree/main/charts/testkube) Helm charts
    * Docker image - [kubeshop/testkube-api-server](https://hub.docker.com/r/kubeshop/testkube-api-server)
  * NATS - a message broker.
    * Helm chart - Used as a NATS subchart in the [kubeshop/testkube](https://github.com/kubeshop/helm-charts/tree/main/charts/testkube) Helm chart.
    * Docker image - [NATS](https://hub.docker.com/_/nats/tags)
  * Operator - is a Testkube service that reconciles Test, Test Suite and Test Workflow Execution CRDs state and runs the corresponding test, test suite and test workflow when resource generation is changed.
    * Helm chart - Bundled as a subchart in the [kubeshop/testkube](https://github.com/kubeshop/helm-charts/tree/main/charts/testkube) Helm chart.
    * Docker image - [kubeshop/testkube-operator](https://hub.docker.com/repository/docker/kubeshop/testkube-operator/tags)
  * Additional images used for running jobs during the chart install:
    * [kubectl](https://hub.docker.com/r/bitnami/kubectl)
    * [nats-reloader](https://hub.docker.com/r/natsio/nats-server-config-reloader)
    * [kube-rbac-proxy](https://console.cloud.google.com/gcr/images/kubebuilder/GLOBAL/kube-rbac-proxy:v0.8.0/details)
    * [webhook-operator](https://hub.docker.com/r/rancher/kubectl)
    * [patch-operator](https://hub.docker.com/r/kubeshop/kube-webhook-certgen)
  * Images used to run TestWorkflows:
    * [testkube-tw-toolkit](https://hub.docker.com/r/kubeshop/testkube-tw-toolkit)
    * [testkube-tw-init](https://hub.docker.com/r/kubeshop/testkube-tw-init)

## Prerequisites

Before you proceed with the installation, please ensure that you have the following prerequisites in place:

- Kubernetes cluster (version 1.21+)
- [Helm](https://helm.sh/docs/intro/quickstart/) (version 3+)
- (RECOMMENDED) [cert-manager](https://cert-manager.io/docs/installation/) (version 1.11+) - Used for TLS certificate management.
- (RECOMMENDED) [NGINX Controller](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/) (version v1.8+) - Used for Ingress configuration.
- (OPTIONAL) [Prometheus Operator](https://github.com/prometheus-operator/prometheus-operator) (version 0.49+) - used for metrics collection
- Own a public/private domain for creating Ingress rules.
- License Key and/or License File, if offline access is required.

## Installing

1. Add the Testkube Helm repository:

```bash
helm repo add testkubeenterprise https://kubeshop.github.io/testkube-cloud-charts
```

2. Create and configure your values.yaml:

```bash
helm show values testkubeenterprise/testkube-enterprise > values.yaml
```

Alternatively, export one of our profiles:

```
testkube init <profile> --export > values.yaml
```

Currently available profiles are: `demo`.

3. Install the Testkube Helm Chart:

```bash
helm upgrade --install \
  --create-namespace \
  --namespace testkube \
   -f values.yaml \
  testkube testkubeenterprise/testkube-enterprise
```

## General Settings

### License

You will have to set a license key to get started with Testkube. You can also opt to use [a shared secret for your license][secret-license]. 
You can request a free trial license on the [Testkube website](https://testkube.io/download), no up-front credit card required.

```yaml {2}
global:
  enterpriseLicenseKey: XXXXXX-XXXXXX-XXXXXX-XXXXXX-XXXXXX-V3
```

### Domain

You should enable ingress and configure your domain to access Testkube services:

```yaml {3,4}
global:
  ingress:
    enabled: true
  domain: "example.com"
```

By default, the following services will be exposed. You can also choose to override the subdomain for each service.

| Service          | Default            | Override                       |
| ---------------- |--------------------| ------------------------------ |
| Dashboard        | dashboard.$domain  | global.uiSubdomain             |
| REST API         | api.$domain        | global.restApiSubdomain        |
| Dex              | api.$domain/idp    | global.restApiSubdomain        |
| gRPC API         | agent.$domain      | global.grpcApiSubdomain        |
| WebSockets API   | websockets.$domain | global.websocketsApiSubdomain  |
| Storage API      | storage.$domain    | global.storageApiSubdomain     |

TLS can either be handled through cert-manager or a manually defined secret. While custom TLS certificates are possible, we strongly recommend using `cert-manager` for simplified certificate manager.

:::info
TLS should be terminated at the application-level instead of the ingress-level as it will drastically enhance the performance of the gRPC and Websocket protocols. Be mindful that NGINX defaults to a downgrade from HTTP2 to HTTP1.1 when the backend service is using an insecure port.
:::

### Auth

You will have to configure how your users can access Testkube. Testkube uses Dex which supports [the most popular identity providers](https://dexidp.io/docs/connectors/). You can find a OIDC example for Google below:

```yaml
dex:
  envVars:
    - name: GOOGLE_CLIENT_ID
      valueFrom:
        secretKeyRef:
          name: <oidc-credentials-secret-name>
          key: <client-id-key>
    - name: GOOGLE_CLIENT_SECRET
      valueFrom:
        secretKeyRef:
          name: <oidc-credentials-secret-name>
          key: <client-secret-key>
  configTemplate:
    additionalConfig: |
    connectors:
      - type: oidc
        id: google
        name: Google
        config:
          issuer: https://accounts.google.com
          clientID: $GOOGLE_CLIENT_ID
          clientSecret: $GOOGLE_CLIENT_SECRET
          redirectURI: <dex endpoint>/callback
```

Alternatively, you can use [a local database with static users](/testkube-pro-on-prem/articles/auth/#static-users) which acts as a virtual identity provider for evaluations.

Once authenticated, users will also need to be invited to org. By default, new users will automatically join the default organization. You can change this behaviour by changing [the bootstrap and invitation configuration][advanced-bootstrap].

### Telemetry

Testkube exposes Prometheus metrics on the `/metrics` endpoint and uses a `ServiceMonitor` resource to expose them to Prometheus. In order for this to work, you need to have `Prometheus Operator` installed in your cluster so that the `ServiceMonitor` resource can be created.

Use the following configuration to enable metrics:

```yaml
testkube-cloud-api:
  prometheus:
    enabled: true
```

## Shared Secrets

Testkube requires a variety of secrets to operate. Any required secret that is not provided manually will be automatically generated. You can optionally choose to specify your own secrets. For shared secrets without additional info, it’s recommended to use auto generation.

- [testkube-license][ss-license]
- testkube-default-agent-token
- testkube-minio-credentials

### Testkube License

Enter your license key which can be either an offline or online license. Replace «license» with your license.

For an online license, the format is `XXXXXX-XXXXXX-XXXXXX-XXXXXX-XXXXXX-V3`.

```
kubectl create secret generic testkube-license --from-literal=LICENSE_KEY=«license»
```

For an offline license, the format is a long string prefixed with `key/`. You will also need a license file which starts with `-----BEGIN LICENSE FILE-----`.

```
kubectl create secret generic testkube-license --from-file=LICENSE_KEY=«license key» --from-file=license.lic=license file»
```

This secret is referenced by the `global.enterpriseLicenseRef` setting. For offline licences, you will also have to set `global.enterpriseOfflineAccess: true`.

[license]: https://testkube.io/download

## Advanced Settings

Check out [this article][advanced] to learn more about our advanced settings. You can learn about organization management, custom ingress controllers, production environments and more.

[advanced]: /articles/install/advanced-install
[secret-license]: /articles/install/install-with-helm#testkube-license
[advanced-bootstrap]: /articles/install/advanced-install#organization-management
[ss-license]: /articles/install/install-with-helm#testkube-license
[deployment-architecture]: /articles/install/deployment-architectures
