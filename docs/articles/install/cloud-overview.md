# Testkube Cloud Control Plane

When using Testkube Cloud, the Testkube team hosts the Testkube Control Plane and you only have to install 
Testkube Agent(s) in your infrastructure wherever you want to run your tests. 

## Getting Started

To get started with Testkube Cloud, go to https://app.testkube.io and sign up for a trial account. During the onboarding you will be
prompted to create an initial Testkube Environment, which will provide you with the required CLI/Helm commands to
deploy the corresponding Testkube Agent in your infrastructure. You can then add as many Environments as you need 
to execute your Tests in your infrastructure accordingly - [Read More](/testkube-pro/articles/environment-management#creating-a-new-environment).

For a production deployment of the Agent it is recommended to deploy the Agent using the Helm or CLI commands shown in the Dashboard. 
For local deployment of the Agent (for example during evaluation) you can either use the [Testkube Docker Agent](docker-agent) or
create your own local Kubernetes cluster - [Read More](quickstart-no-k8s).

## Deployment Architecture

A high-level deployment architecture for Testkube Cloud is shown below.

![Deployment with managed control plane](../../img/architecture-managed.jpeg)

## Network traffic control

### Egress

To allow the agent to connect to the control plane, you will need to allow
egress connections to the `agent.testkube.io` host on port `443`. If this
connection is proxied, make sure the proxy supports HTTP/2 as the agent uses
a bidirectional gRPC connection to communicate with the control plane and that
works best over HTTP/2.

Test executions will need to send artifacts and logs to a Cloud Storage bucket
on GCP so egress traffic to the `storage.googleapis.com` host on port `443`
should also be allowed.

### Ingress

When using Testkube Cloud, all network traffic is initiated from the Agent to
the Control Plane. If you are utilizing a stateful firewall you will not need
to add any additional ingress rules, but if not then you will need to allow
ingres connections on the ephemeral ports for your particular OS.
