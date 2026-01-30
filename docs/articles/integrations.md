# Testkube Integrations Overview

Testkube can be integrated into existing workflows and infrastructure in several ways, including 
- Native integrations
- The [Testkube CLI](/articles/install/cli).
- The [Testkube API](/openapi/overview).
- The [WebHooks functionality](/articles/webhooks).

All these are described/used as applicable in the articles below.

:::tip
If your favorite tool isn't covered here, have a look at [General Steps for CI/CD Integration](/articles/cicd-overview#general-steps-for-cicd-integration) or let us know on our [Slack Channel](https://bit.ly/testkube-slack)
or open an issue on our [GitHub Repository](https://github.com/kubeshop/testkube-docs/issues).
:::

## CI/CD Pipelines

Integrate Testkube into your continuous integration and delivery pipelines:

- [GitHub](/articles/github-actions) - Learn to integrate Testkube with GitHub Workflows.
- [GitLab](/articles/gitlab) - Learn how to integrate Testkube with GitLab CI.
- [Jenkins Pipelines](/articles/jenkins) - Learn how to integrate Testkube with Jenkins Pipelines.
- [Jenkins UI](/articles/jenkins-ui) - Learn how to integrate Testkube from the Jenkins UI.
- [Azure DevOps](/articles/azure) - Learn how to integrate Testkube with Azure DevOps.
- [BitBucket](https://testkube.io/learn/unleashing-the-power-of-ci-cd-testing-with-bitbucket-and-testkube) - Learn how to integrate Testkube with BitBucket.
- [CircleCI](/articles/circleci) - Learn how to integrate Testkube with CircleCI.
- [Tekton](/articles/tekton) - Learn how to integrate Testkube with Tekton.

## GitOps

Use Testkube in GitOps-managed Kubernetes environments:

- [GitOps Overview](/articles/gitops-overview) - High-level guide to using Testkube with GitOps tooling.
- [ArgoCD](/articles/argocd-integration) - Learn how to integrate Testkube with ArgoCD.
- [Flux](/articles/flux-integration) - Learn how to integrate Testkube with Flux.

## Progressive Delivery

Use Testkube for validation in progressive delivery strategies:

- [Argo Rollouts](/articles/argorollouts-integration) - Learn how to use Testkube with Progressive Delivery in Argo Rollouts.
- [Keptn](https://testkube.io/learn/leveraging-testkube-as-a-quality-gate-in-multi-stage-deployments-with-keptn) - Leveraging Testkube as a Quality Gate in Multi-Stage Deployments with Keptn.

## Event-Driven Automation

Trigger and respond to events for automated test execution:

- [Argo Events](/articles/argoevents-integration) - Learn how to trigger Testkube from Argo Events.
- [Argo Workflows](/articles/argoworkflows-integration) - Learn how to run Testkube CLI commands from Argo Workflows.
- [CDEvents](/articles/cd-events) - Learn about CDEvents emitted by Testkube.
- [Kubernetes Events](/articles/k8s-events) - Learn about events emitted by Testkube.
- [Webhooks](/articles/webhooks) - Learn how to configure webhooks to notify external systems.

## Collaboration & Alerting

Connect Testkube to your team communication and incident management tools:

- [Slack](/articles/slack-integration) - Learn about how to configure Slack integration with Testkube.
- [Microsoft Teams](/articles/teams-integration) - Learn about how to integrate with Microsoft Teams.
- [Atlassian Jira](/articles/jira-integration) - Learn about how to integrate with Atlassian Jira.
- [PagerDuty](https://testkube.io/learn/critical-test-based-alerting-with-pagerduty-and-testkube) - Learn about how to integrate Testkube with PagerDuty for alerting.
- [Zapier](https://testkube.io/learn/integrating-testkube-and-zapier-for-instant-email-alerts) - Learn about how to integrate Testkube with Zapier.

## Observability & Reporting

Monitor and visualize your test results:

- [Prometheus](/articles/metrics) - Learn about metrics exposed by Testkube.
- [Grafana](/articles/grafana) - Learn about how to integrate with Grafana.
- [Datadog](/articles/datadog-junit) - Learn how to send JUnit results to Datadog.
- [Allure Reports](/articles/allure-reports) - Learn how to generate Allure Reports as artifacts in your Workflows.

## Identity Mgmt

Manage user provisioning and authentication:

- [SCIM](/articles/scim) - Learn how to integrate Testkube with your Identity Provider using SCIM for automated user provisioning and deprovisioning.
