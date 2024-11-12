# Installation Overview

Testkube contains two main components:

- The **Testkube Control Plane** which includes the [Dashboard](/articles/testkube-dashboard-explore), Storage for Results/Artifacts, User/Role mgmt, Insights, etc.
- The **Testkube Agent** which executes your tests, collects test execution logs/results and listens for Kubernetes Events. The agent is _always_ 
  deployed in your own infrastructure. 

:::note
You can install as many agents as needed, they can all be managed from a single instance of the Control Plane.
:::

## Deployment Options

You can deploy Testkube in one of the following ways:

- **Testkube On-Prem** - the Control Plane is installed and managed by you in your own infrastructure.
- **Testkube Cloud** - the Control Plane runs in the cloud and managed by the Testkube Team.
- **Testkube Open Source** - the Agent runs without a Control Plane for single cluster usage scenarios.

High-level deployment architecture and how to get started with each of these is described below.

:::note
An architectural overview of Testkube and its components is available in the [Architecture Reference](../architecture).
:::

## Testkube On-Prem 

Testkube On-Prem runs entirely in your infrastructure and can also run in air-gapped environments.
The default installation deploys both the Control Plane and a single Testkube Agent within the same namespace.

You can install a preconfigured version of Testkube On-Prem [with the CLI][install-cli] for an out-of-the-box experience
or install [with Helm][install-helm] for more configurability in production scenarios.

In either case, you will need to [request a trial license](https://testkube.io/download) that will be required 
during the installation process.

A high-level deployment architecture for Testkube On-Prem is shown below.

![Deployment with single agent](../../img/architecture-default.jpeg)

:::tip
Check out [Helm Components](/articles/helm-components) to see all the actual components used by Testkube.
:::

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

To get started, visit https://app.testkube.io and sign up for a trial account. During the onboarding you will be 
prompted to create an initial Testkube Environment, which will provide you with the required CLI/Helm commands to 
deploy the corresponding Testkube Agent in your infrastructure - [Read More](/testkube-pro/articles/environment-management#creating-a-new-environment)

A high-level deployment architecture for Testkube Cloud is shown below.

![Deployment with managed control plane](../../img/architecture-managed.jpeg)

:::info
Even when using Testkube Cloud, your actual tests are never run or stored on our servers, only test 
logs and artifacts will be stored.
:::

## Testkube Open Source

The Testkube Agent is in itself Open Source and can be deployed without a
control plane or Dashboard. All management and test execution tasks are done through the [Testkube CLI](/articles/cli).

- Learn more about how the [Standalone Agent compares](/articles/open-source-or-pro)
- Learn more about how to [deploy the Standalone Agent][deploy-standalone].

![Deployment with standalone agent](../../img/architecture-standalone.jpeg)

[cloud]: https://app.testkube.io/
[install-cli]: /articles/install/install-with-cli
[install-helm]: /articles/install/install-with-helm
[deploy-standalone]: /articles/install/standalone-agent
[deploy-minimal]: /articles/install/multi-cluster#deploy-a-control-plane-without-an-agent
[deploy-agent]: /articles/install/multi-cluster#deploy-an-agent-that-will-join-testkube
[deploy-demo]: /articles/install/install-with-cli#deploy-an-on-prem-demo
[testkube-repo]: https://github.com/kubeshop/testkube
