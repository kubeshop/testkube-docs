# Testkube Installation Overview

**Testkube** can be deployed in multiple ways. The Testkube Agent that manages and runs your tests is 
always deployed and running in your own infrastructure. Whether the Control Plane is self-hosted, managed 
by Testkube Cloud, or not used at all is up to you - check out [deployment architectures](deployment-architectures) to learn more.

You can install Testkube in your own infrastructure by using one of the following options:

- Use [the Testkube CLI][testkube-cli] for an out-of-the-box experience.
- Use [the Testkube Helm Chart][testkube-helm] to further customize deployment.
- Use [the Testkube Docker Agent][docker-agent] for a quick way to install the Testkube Agent for usage with Testkube Cloud.

:::tip
If you're just interested in getting an initial overview of Testkube, please check out the 
[cloud version](https://app.testkube.io/) which includes a demo environment (hosted by us) that 
can be explored without having to install anything.
:::

[testkube-cli]: /articles/install/install-with-cli
[testkube-helm]: /articles/install/install-with-helm
[testkube-architectures]: /articles/install/deployment-architectures
[docker-agent]: /articles/install/docker-agent
