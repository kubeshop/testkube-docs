# Testkube On-Prem Installation Overview 

Testkube contains two main components:

- The **Testkube Control Plane** which includes the [Dashboard](/articles/testkube-dashboard-explore), Storage for Results/Artifacts, User/Role mgmt, Insights, etc.
- The **Testkube Agent** which executes your tests, collects test execution logs/results and listens for Kubernetes Events. The agent is _always_
  deployed in your own infrastructure.

Testkube On-Prem runs both of these components in your infrastructure and can also be deployed in air-gapped environments.

## Getting Started

You can install a preconfigured version of Testkube On-Prem [with the CLI][install-cli] for an out-of-the-box experience
or install [with Helm][install-helm] for more configurability in production scenarios.

The default installation deploys both the Control Plane and a single Testkube Agent within the same namespace.

In either case, you will need to [request a trial license](https://testkube.io/download) that will be required during the installation process.

## Deployment Architecture

A high-level deployment architecture for Testkube On-Prem is shown below.

![Deployment with single agent](../../img/architecture-default.jpeg)

:::tip
Check out [Helm Components](/articles/helm-components) to see all the actual components used by Testkube.
:::

## Testkube On-Prem Multicluster

If you want to install Testkube On-Prem with the Control Plane in one namespace and multiple agents in any number of 
other namespaces or clusters, you can first install [the control plane without an agent][deploy-minimal] and then [an agent that joins Testkube][deploy-agent].

![Deployment with federated agents](../../img/architecture-federated.jpeg)

:::info
Read more about Multi-cluster deployments at [Multicluster](/articles/install/multi-cluster)
:::

[install-cli]: /articles/install/install-with-cli
[install-helm]: /articles/install/install-with-helm
[deploy-standalone]: /articles/install/standalone-agent
[deploy-minimal]: /articles/install/multi-cluster#deploy-a-control-plane-without-an-agent
[deploy-agent]: /articles/install/multi-cluster#deploy-an-agent-that-will-join-testkube
[deploy-demo]: /articles/install/install-with-cli#deploy-an-on-prem-demo
[testkube-repo]: https://github.com/kubeshop/testkube
