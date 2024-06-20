# Testkube Architecture

The below diagrams explain the Testkube architecture using [C4 diagrams](https://c4model.com/) - please
don't hesitate to reach out on our Slack if you have questions.

Also check out the [Reference Architectures](install/reference-architectures) document for more details on
how Testkube can be deployed.

## Context

High level overview of Testkube components when running Testkube entirely on-prem. When using Testkube 
Cloud the dashboard and control-plane are hosted and entitlement is done internally (without a License Server).

![Testkube Context Diagram](../img/testkube-context-diagram.png)

## Containers

Breakdown of Testkube containers and their network connections/dependencies when running Testkube entirely on-prem.
(As in the previous diagram, the License Server does not apply when using Testkube Cloud)

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
