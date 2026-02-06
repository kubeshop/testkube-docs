# Triggering Test Workflows

Workflows defined in Testkube can be triggered by a number of mechanisms:

1. Manually in the Dashboard
2. [From your CI/CD pipeline](cicd-overview) using one of our available integrations
3. By a [fixed Schedule](scheduling-tests)
4. In response to a [Kubernetes Event](test-triggers)
5. By creating an [Execution CRD](test-executions)
6. Via the [Testkube CLI](../cli/testkube-run)
7. Via the [REST API](/openapi/overview)
8. From another Workflow - as described in [Test Workflows - Test Suites](/articles/test-workflows-test-suites) and [Remote Workflow Execution](/articles/remote-workflow-execution)

For connected environments in `v2.7`, see [Control Plane Source of Truth](/articles/control-plane-source-of-truth) for details on ownership changes, listener-based triggers, and scheduling behavior.
