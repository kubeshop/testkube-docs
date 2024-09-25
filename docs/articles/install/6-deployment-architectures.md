# Deployment Architectures

Testkube contains two sub-systems:

- A **Control Plane** which includes the Dashboard, Storage for Results/Artifacts, Cluster Federation, etc
- An **Agent** running in your cluster that manages Testkube resources, runs tests, gathers results, etc.

The two sub-systems can be deployed in variety of ways to give flexibility into where your tests
are executed and where test logs and artifacts are stored.

A more detailed overview is available in the [Architecture Reference](../architecture) document.

## Testkube On-Prem

Testkube On-Prem is the default architecture and has both the control plane and a single agent within the same namespace. You will have one single environment.

To deploy this you will want to look at either [installing with CLI][install-cli] or [installing with Helm][install-helm], respectively for an out-of-the-box experience or more configurability.

![Deployment with single agent](../../img/architecture-default.jpeg)

## Testkube Cloud

Testkube Cloud has a control plane that is managed by the Testkube team.
You only have to run a stateless agent which makes operations a breeze.
To get started simply visit https://app.testkube.io.

:::info
Your proprietory code never touches our servers, only test logs and artifacts will be stored.
:::

![Deployment with managed control plane](../../img/architecture-managed.jpeg)

## Testkube On-Prem Multicluster

A Testkube On-Prem variant which has the control plane in one namespace with multiple agents in other namespaces or clusters. You will create an environment for each of your clusters.

To deploy this you will first want to [deploy a control plane without an agent][deploy-minimal] and afterwards [deploy an agent that joins Testkube][deploy-agent].

![Deployment with federated agents](../../img/architecture-federated.jpeg)

## Testkube Standalone Agent

The Testkube standalone agent includes the core Testkube engine and can be deployed without a 
control plane or Dashboard, all management and test execution is done through the [Testkube CLI](/articles/cli). 

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
