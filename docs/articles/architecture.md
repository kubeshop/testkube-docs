# Testkube Architecture

Testkube contains two sub-systems:

- A **Control Plane** which includes the Dashboard, Storage for Results/Artifacts, Cluster Federation, etc
- An **Agent** running in your cluster that manages Testkube resources, runs tests, gathers results, etc.

The below diagrams explain this architecture using [C4 diagrams](https://c4model.com/) - please
don't hesitate to reach out on our Slack if you have questions.

Also check out the [Installation Overview](/articles/install/overview) document for more details on
how Testkube can be deployed, and the [Workflow Architecture](/articles/test-workflows-high-level-architecture)
document for an overview of how the Workflow engine works.

## Context

High level overview of Testkube components when running Testkube entirely on-prem. When using Testkube
Cloud, the Dashboard and control-plane are hosted and entitlement is done internally (without a License Server).

![Testkube Context Diagram](../img/testkube-context-diagram.png)

## Testkube Containers

The diagram below shows a breakdown of Testkube components and their network connections/dependencies
when running Testkube entirely on-prem. As in the previous diagram, the License Server does not
apply when using the Testkube Cloud Control Plane.

The Testkube Dashboard connects to the Control Plane API via an L7 Load Balancer that needs to
expose ports for both HTTPS and WSS endpoints.

The main 3rd party dependencies that are required by the Control Plane are:

- NATS
- MongoDB - [Read more](mongodb-administration)
- S3 (via Minio)
- Dex for federated authentication

These are all installed by the Testkube Helm Chart and configured accordingly.

![Testkube Containers Diagram](../img/testkube-containers-diagram.png)

## Components - Workflow Job

Description of components/interactions when Testkube runs a Test Workflow.

![Testkube Workflow Job Components](../img/workflow-job-components.png)
(This applies to both on-prem and cloud deployments.)

## Components - Worker Service

The Worker service is responsible for

- unpacking artifact tarballs and uploads individual files
- cleaning up Test Workflow logs and artifacts when deleting Test Workflow executions

This processing is done asynchronously and triggered via NATS events.

![Testkube Worker Service Components](../img/worker-service-components.png)
(This applies to both on-prem and cloud deployments.)
