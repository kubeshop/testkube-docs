# Helm Components

The Testkube On-Prem Helm Chart consists of the following components.

:::tip
Check out the [Installation Overview](/articles/install/overview) to see how these components fit into the 
Testkube architecture and the [Custom Installation](/articles/install/advanced-install) guide for how to configure these components 
for your specific needs.
:::

## Testkube Control Plane

The central component that manages connected Agents.
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
* PostgeSQL - It is a database that is used for storing the data.
    * Helm chart - Used as a bitnami subchart in the [testkube-enterprise](https://github.com/kubeshop/testkube-cloud-charts/tree/main/charts/testkube-enterprise) Helm chart.
    * Docker image - [PostgreSQL](https://hub.docker.com/r/bitnami/postgresql/tags)   
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

## Testkube Agent

A lightweight component that connects to the Control Plane and executes test runs.

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
