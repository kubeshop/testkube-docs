# The Testkube Open Source Agent

The Testkube Agent is
100% Open Source and can be [deployed in standalone mode](install/standalone-agent) without being managed
by the commercial Control Plane.

Once deployed, you can interact with the agent through the [Testkube CLI](install/cli) or directly via the
[Agent API](/openapi/overview#agent-api).

## Agent Functionality

As described in the [Installation Overview](/articles/install/overview), the main difference between a commercial deployment of
Testkube and the standalone Agent is the Testkube Control Plane, which adds a User Interface (the [Testkube Dashboard](testkube-dashboard-explore))
and an underlying management layer for multiple agents ("Environments"), Org/User Mgmt, Insights/Reporting, etc.

That being said, many of the core features of Testkube are available directly in the agent via the aforementioned CLI or API:

- **Test Workflows** : Manage Workflows and Templates, Run/Schedule executions (see below for limitations).
- **Logs/Artifacts** : Retrieve Workflow executions, logs, artifacts via CLI or API.
- **Webhooks** : Manage Webhooks that the Agent executes.
- **Event Triggers** : Manage Event Triggers that the Agent reacts to.
- **Tests, TestSuites, Sources, Executors** : Deprecated - but still available during a transition period - [Read More](legacy-features).

See a complete feature-comparison table between OSS and Commercial below.

### Workflow Limitations in Standalone Mode

The following Workflow features are _not_ available when using the Open Source Agent without connecting it to a
Testkube Control Plane:

- **Complex Test Orchestration** with `execute` - see [Test Suites](test-workflows-test-suites.mdx)
- **Parallel execution** with `parallel` - see [Parallelization](test-workflows-parallel.mdx)
- **Parameterization** with `matrix` (and `count`, `shards`, `maxCount`) - see [Sharding & Matrix Params](test-workflows-matrix-and-sharding.mdx)
- **Spawning dependencies** for your tests with `services` - see [Services](test-workflows-services.mdx)

## Testkube Feature Comparison - Open Source vs Commercial

This table shows a more complete feature comparison between using just the Standalone Agent and the 
complete Testkube Orchestration Platform (Agent + Control Plane). 

| Features                             |                  Open Source Agent                   |                      Commercial Control Plane                      |                       Read More                        |
|:-------------------------------------|:----------------------------------------------------:|:------------------------------------------------------------------:|:------------------------------------------------------:|
| **TestWorkflows**                    | :white_check_mark: - :warning: see limitations above |                         :white_check_mark:                         |                 [Docs](test-workflows)                 |
| **Test Logs/Artifacts**              |   :white_check_mark: -  :warning: via CLI/API only   |                         :white_check_mark:                         |               [Docs](logs-and-artifacts)               |
| **Webhooks**                         |                  :white_check_mark:                  |                         :white_check_mark:                         |                    [Docs](webhooks)                    |
| **Test Triggers**                    |                  :white_check_mark:                  |                         :white_check_mark:                         |              [Docs](triggering-overview)               |
| **Test, Suites, Sources, Executors** |                  :white_check_mark:                  |                         :white_check_mark:                         |       Deprecated - [Read More](legacy-features)        |
| **Testkube CLI**                     |                  :white_check_mark:                  |                         :white_check_mark:                         |                      [Docs](cli)                       |
| **REST API**                         |    :white_check_mark: -:warning: Unauthenticated     |                         :white_check_mark:                         |               [Docs](/openapi/overview)                |
| **Dashboard / Control Plane**        |                         :x:                          | :white_check_mark:  ([Hosted/On-Prem](/articles/install/overview)) |           [Docs](testkube-dashboard-explore)           |
| **Multi-environment Mgmt**           |                         :x:                          |                         :white_check_mark:                         | [Docs](/testkube-pro/articles/environment-management)  |
| **RBAC / SSO / User Mgmt**           |                         :x:                          |                         :white_check_mark:                         | [Docs](/testkube-pro/articles/organization-management) |
| **Reporting / Insights**             |                         :x:                          |                         :white_check_mark:                         |                 [Docs](test-insights)                  |
| **Status Pages**                     |                         :x:                          |                         :white_check_mark:                         |      [Docs](/testkube-pro/articles/status-pages)       |
| **Advanced Log/Results Debugging**   |                         :x:                          |                         :white_check_mark:                         |    [Docs](/testkube-pro/articles/log-highlighting)     |
| **Cached Test Results**              |                         :x:                          |                         :white_check_mark:                         |     [Docs](/testkube-pro/articles/cached-results)      |
| **Teams**                            |                         :x:                          |                         :white_check_mark:                         |                [Docs](/articles/teams)                 |
| **Resource Groups**                  |                         :x:                          |                         :white_check_mark:                         |           [Docs](/articles/resource-groups)            |
| **JUnit Reports**                    |                         :x:                          |                         :white_check_mark:                         |        [Docs](/articles/test-workflows-reports)        |
| **Audit Logs**                       |                         :x:                          |                         :white_check_mark:                         |       [Docs](/testkube-pro/articles/audit-logs)        |
| **Testkube Copilot**                 |                         :x:                          |                         :white_check_mark:                         |                                                        |
| **Test Discovery**                   |                         :x:                          |                         :white_check_mark:                         |                                                        |

## Source Code and Licensing

The source-code for the agent is available in the [Testkube GitHub repo](https://github.com/kubeshop/testkube)
and is dual-licensed under the MIT license and the Testkube Community License (TCL).
Read more in our [Licensing FAQ](testkube-licensing-FAQ).
