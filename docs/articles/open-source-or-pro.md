# The Testkube Open Source Agent

The Testkube Agent described in the [Deployment Architectures](install/deployment-architectures) is
100% Open Source and can be [deployed in standalone mode](install/standalone-agent) without being managed
by the commercial Control Plane.

Once deployed, you can interact with the agent through the [Testkube CLI](install/cli) or directly via the
[Agent API](/openapi/overview#agent-api).

## Agent Functionality

As shown in [Deployment Architectures](install/deployment-architectures), the main difference between a commercial deployment of
Testkube and the standalone Agent is the Testkube Control Plane, which adds a User Interface (the [Testkube Dashboard](testkube-dashboard-explore))
and an underlying management layer for multiple agents ("Environments"), Org/User Mgmt, Insights/Reporting, etc.

That being said, many of the core features of Testkube are available directly in the agent via the aforementioned CLI or API:

- **Test Workflows** : Manage Workflows and Templates, Run/Schedule executions (see below for limitations).
- **Logs/Artifacts** : Retrieve Workflow executions, logs, artifacts.
- **Webhooks** : Manage Webhooks that the Agent executes.
- **Event Triggers** : Manage Event Triggers that the Agent reacts to.
- **Tests, TestSuites, Sources, Executors** : Deprecated - but still available during a transition period - [Read More](legacy-features).

See a complete feature-comparison table between OSS and Commercial below.

### Workflow Limitations in Standalone Mode

The following Workflow features are not available when using the Standalone Agent, they require
the Agent to be connected to the Testkube Control Plane, either on-prem or in the cloud.

- `execute` - see [Test Suites](test-workflows-test-suites)
- `parallel` - see [Parallelization](test-workflows-parallel)
- `matrix` (and `count`, `shards`, `maxCount`) - see [Sharding & Matrix Params](test-workflows-matrix-and-sharding)
- `services` - see [Services](test-workflows-services)

## Feature Comparison - Open Source vs Commercial

This table shows a more complete feature comparison between the Agent Standalone and the 
Testkube Orchestration Platform (Agent + Control Plane). 

| Features                             |                Testkube Agent                 |                              Testkube Orchestration Platform                               | Read More                                              |
|:-------------------------------------|:---------------------------------------------:|:------------------------------------------------------------------------------------------:|:-------------------------------------------------------|
| **TestWorkflows**                    | X (with [limitations](#workflow-limitations)) |                                             X                                              | [Docs](test-workflows)                                 |
| **Test Logs/Artifacts**              |                       X                       |                                             X                                              | [Docs](logs-and-artifacts)                             |
| **Webhooks**                         |                       X                       |                                             X                                              | [Docs](webhooks)                                       |
| **Test Triggers**                    |                       X                       |                                             X                                              | [Docs](triggering-overview)                            |
| **Test, Suites, Sources, Executors** |                       X                       |                                             X                                              | Deprecated - [Read More](legacy-features)              |
| **Testkube CLI**                     |                       X                       |                                             X                                              | [Docs](cli)                                            |
| **REST API**                         |                Unauthenticated                | Authenticated with [API Tokens](/testkube-pro/articles/organization-management#api-tokens) | [Docs](/openapi/overview)                              |
| **Dashboard / Control Plane**        |                                               |                  X  ([Hosted/On-Prem](install/deployment-architectures))                   | [Docs](testkube-dashboard-explore)                     |
| **Multi-environment Mgmt**           |                                               |                                             X                                              | [Docs](/testkube-pro/articles/environment-management)  |
| **RBAC / User Mgmt**                 |                                               |                                             X                                              | [Docs](/testkube-pro/articles/organization-management) |
| **Reporting / Insights**             |                                               |                                             X                                              | [Docs](test-insights)                                  |
| **Status Pages**                     |                                               |                                             X                                              | [Docs](/testkube-pro/articles/status-pages)            |
| **AI Troubleshooting**               |                                               |                                             X                                              | [Docs](/testkube-pro/articles/AI-test-insights)        |
| **Advanced Log/Results Debugging**   |                                               |                                             X                                              | [Docs](/testkube-pro/articles/log-highlighting)        |
| **Cached Test Results**              |                                               |                                             X                                              | [Docs](/testkube-pro/articles/cached-results)          |

## Source Code and Licensing

The source-code for the agent is available in the [testkube GitHub repo](https://github.com/kubeshop/testkube)
and is dual-licensed under the MIT license and the Testkube Community License (TCL).
Read more in our [Licensing FAQ](testkube-licensing-FAQ).
