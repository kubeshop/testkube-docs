# Installation Overview

Testkube contains two main components:

- A **Control Plane** which includes the Dashboard, Storage for Results/Artifacts, Cluster Federation, etc.
- An **Agent** that _always_ runs in your own infrastructure that executes your tests and gathers results. You
  can install as many agents as needed, they can all be managed from a single instance of the Control Plane.

You can deploy Testkube in one of the following ways:

- **Testkube On-Prem** - the Control Plane is installed and managed by you in your own infrastructure.
- **Testkube Cloud** - the Control Plane runs in the cloud and managed by the Testkube Team.
- **Testkube Agent Standalone** - the Agent runs without a Control Plane or Dashboard for single cluster usage scenarios.

:::note
An architectural overview of Testkube and its components is available in the [Architecture Reference](../architecture).
:::

Installation for each of these is described below.

## Testkube On-Prem 

Testkube On-Prem runs entirely in your infrastructure and can also run in air-gapped environments.
The default installation deploys both the Control Plane and a single Testkube Agent within the same namespace.

You can install a preconfigured version of Testkube On-Prem [with the CLI][install-cli] for an out-of-the-box experience
or install [with Helm][install-helm] for more configurability in production scenarios.

![Deployment with single agent](../../img/architecture-default.jpeg)

### Testkube On-Prem Multicluster

If you want to install Testkube On-Prem with the Control Plane in one namespace and multiple agents in any number of 
other namespaces or clusters, you can first install [the control plane without an agent][deploy-minimal] and then [an agent that joins Testkube][deploy-agent].

![Deployment with federated agents](../../img/architecture-federated.jpeg)

:::info
Read more about Multi-cluster deployments at [Multicluster](/articles/install/multi-cluster)
:::

## Testkube Cloud

When using Testkube Cloud, the Control Plane is managed by the Testkube team, you only have to install the 
Testkube Agent in your infrastructure wherever you want to run your tests.

To get started, visit https://app.testkube.io and sign up for an account. During the onboarding you will be 
prompted to create an initial Testkube Environment, which will provide you with the required CLI/Helm commands to 
deploy the corresponding Testkube Agent in your infrastructure - [Read More](/testkube-pro/articles/environment-management#creating-a-new-environment)

:::info
Your proprietary tests are never run or stored on our servers, only test logs and artifacts will be stored.
:::

![Deployment with managed control plane](../../img/architecture-managed.jpeg)

## Testkube Agent Standalone (Open Source)

The Testkube Agent is in itself Open Source and can be deployed without a
control plane or Dashboard. All interactions and test execution is done through the [Testkube CLI](/articles/cli).

- Learn more about how the [Standalone Agent compares](/articles/open-source-or-pro)
- Learn more about how to [deploy the standalong agent][deploy-standalone].

![Deployment with standalone agent](../../img/architecture-standalone.jpeg)

[cloud]: https://app.testkube.io/
[install-cli]: /articles/install/install-with-cli
[install-helm]: /articles/install/install-with-helm
[deploy-standalone]: /articles/install/standalone-agent
[deploy-minimal]: /articles/install/multi-cluster#deploy-a-control-plane-without-an-agent
[deploy-agent]: /articles/install/multi-cluster#deploy-an-agent-that-will-join-testkube
[deploy-demo]: /articles/install/install-with-cli#deploy-an-on-prem-demo
[testkube-repo]: https://github.com/kubeshop/testkube
