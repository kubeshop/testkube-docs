# Installation FAQ

## Can Testkube be deployed on OpenShift?

Yes, OpenShift is supported - [Read More](/articles/install/standalone-agent#deploying-on-openshift). 
You might need to tweak the configuration a bit to fit the security requirements. 
Feel free to contact us on Slack if it does not work out so we can help.

## Can Testkube OSS be migrated to join a control plane?

Yes, you can choose to get started with just the standalone agent. Once you are ready to use a control plane, 
you can join it with a control plane as described [here][migrate-oss].

## Do I have to have my own Kubernetes Cluster to evaluate Testkube

No, for evaluation you can use our Cloud offering at app.testkube.io which includes a Demo environment for you to explore
Testkube functionality. For your running your own tests you can either use the [Testkube Docker Agent](docker-agent) or
install your own [Kubernetes Cluster](quickstart-no-k8s.mdx).

## Do I have to provide any infrastructure of my own to run Testkube in production

Yes, the Testkube Agent _always_ runs in your own cluster(s)/infrastructure for managing and executing your tests.
The Control Plane containing the Dashboard can be hosted either by us or by you. Read more about the
Testkube deployment options at [Installation Overview](/articles/install/overview)

## Can I run Testkube in an air-gapped environment

Yes, you can download and install Testkube in your air-gapped environment as long as it has access to dockerhub (for example via artifactory) to retrieve the Testkube images.
If that doesn't work for you please [get in touch](https://testkube.io/contact), and we will help you install Testkube as required.

## Can I use Testkube to test applications or services that are not running in Kubernetes

Yes, you can use Testkube to test any applications or components as long as the cluster the Testkube agent 
is running in has network access to the applications or components to be tested.

## How do I expose Testkube to the Internet?

To expose Testkube to the Internet, you will need to create an Ingress for both the Testkube API and the 
Testkube Dashboard. Check the installation instructions [here][install-ingress] for different configurations.

## Access the Service Under Test (SUT) Using Testkube

- Services inside the same Kubernetes cluster can be accessed using the address `\<service-name\>.\<service-namespace\>.svc.cluster.local:\<port-number\>`. If there are network restrictions configured, Testkube will need permissions to access the SUT over the local network of the cluster.
- If Testkube and the SUT are not in the same cluster, SUT will have to be exposed to Testkube using an Ingress or a Load Balancer.

[migrate-oss]: /articles/install/standalone-agent#connecting-to-the-testkube-control-plane
[install-ingress]: /articles/install/install-with-helm#domain
