# Testkube Cloud Installation Overview

When using Testkube Cloud, the Testkube Control Plane is managed by the Testkube team and you only have to install the
Testkube Agent in your infrastructure wherever you want to run your tests.

To get started with Testkube Cloud, go to https://app.testkube.io and sign up for a trial account. During the onboarding you will be
prompted to create an initial Testkube Environment, which will provide you with the required CLI/Helm commands to
deploy the corresponding Testkube Agent in your infrastructure. You can then add as many Environments as you need 
to execute your Tests in your infrastructure accordingly - [Read More](/testkube-pro/articles/environment-management#creating-a-new-environment).

For a production deployment of the Agent it is recommended to deploy the Agent using the Helm or CLI commands shown in the Dashboard. 
For local deployment of the Agent (for example during evaluation) you can either use the [Testkube Docker Agent](docker-agent) or
create your own local Kubernetes cluster - [Read More](quickstart-no-k8s). 
