# Triggering Tests

## Overview

Once your test execution is defined, the next step is to trigger your tests. This can be done in various ways—automatically or manually—depending on your process and infrastructure.

## General Test Triggering Scenarios

Consider the following methods to trigger tests:

- **CI/CD Pipelines:**  
  If tests are part of a workflow or pipeline, your CI/CD solution will trigger them automatically.

- **GitOps Approach:**  
  Trigger tests in response to Kubernetes events (e.g., when a pod is updated).

- **Non-Functional Tests:**  
  For load, security, or compliance tests, you might:

  - Run tests manually when your infrastructure is ready.
  - Schedule tests to run on a regular basis (e.g., daily security scans), decoupled from your CI/CD.

- **Manual Execution:**  
  You may also trigger tests manually to run acceptance tests or to rerun failed automated tests after system updates, without executing the entire CI/CD pipeline.

_Note:_ In many cases, a combination of automated and manual triggering is required. DevOps teams typically handle automated triggers (like non-functional tests), while Dev/QA might trigger tests as needed.

## Triggering Tests with Testkube

Testkube decouples test definition from execution, providing flexibility to trigger tests in multiple ways:

- **From CI/CD Workflows:**  
  Utilize one of our [CI/CD integrations](../articles/cicd-overview.mdx).

- **Kubernetes Event Triggers:**  
  React to Kubernetes events using [Triggers](../articles/test-triggers).

- **Manual Execution:**  
  Run tests manually via the [CLI](../articles/install/1-cli.mdx) or the [Testkube Dashboard](../articles/testkube-dashboard-explore.md).

- **Recurring Schedules:**  
  Execute tests at set intervals using [Test Workflow Scheduling](../articles/test-workflows.md).

- **Via the REST API:**  
  Trigger tests from any tool using the [Testkube REST API](/openapi/overview).

- **Using Execution CRDs:**
  Trigger tests by creating corresponding [Execution CRDs](/articles/test-executions).

![CI/CD Integrations](../img/concepts-cicd-integrations.png)

## Further Reading

For more details on running and scaling tests, see our article on [Running Tests](../articles/running-scaling-tests.md).
