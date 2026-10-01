# Testkube Runner Feature Comparison {#testkube-agent-feature-comparison}

The below table shows a feature comparison between deploying the Testkube Runner in Standalone Mode vs when it is connected to the
Testkube Control Plane - [Read More](/articles/install/standalone-agent).

The Control Plane column applies to both On-Prem and Cloud deployments of the Control Plane.

In standalone mode, a single Runner provides execution, listener, and webhook behavior. The ❌ for the listener, GitOps, and webhooks rows means those capabilities are only available as separately deployed Runners when connected to the Control Plane.

| Features                             |       Testkube Runner <br/> in standalone mode       | Testkube Runner(s) <br/>connected to Control Plane |                                Read More                                |
| :----------------------------------- | :--------------------------------------------------: | :------------------------------------------------: | :---------------------------------------------------------------------: |
| **TestWorkflows**                    | :white_check_mark: - :warning: see limitations above |                 :white_check_mark:                 |                    [Docs](/articles/test-workflows)                     |
| **Test Logs/Artifacts**              |   :white_check_mark: - :warning: via CLI/API only    |                 :white_check_mark:                 |                  [Docs](/articles/logs-and-artifacts)                   |
| **Webhooks**                         |                  :white_check_mark:                  |                 :white_check_mark:                 |                       [Docs](/articles/webhooks)                        |
| **Kubernetes Event Triggers**        |                  :white_check_mark:                  |                 :white_check_mark:                 |                  [Docs](/articles/triggering-overview)                  |
| **Test, Suites, Sources, Executors** |                  :white_check_mark:                  |                 :white_check_mark:                 |           Deprecated - [Read More](/articles/legacy-features)           |
| **Testkube CLI**                     |                  :white_check_mark:                  |                 :white_check_mark:                 |                          [Docs](/articles/cli)                          |
| **REST API**                         |    :white_check_mark: -:warning: Unauthenticated     |                 :white_check_mark:                 |                        [Docs](/openapi/overview)                        |
| **Dashboard**                        |                         :x:                          |                 :white_check_mark:                 |              [Docs](/articles/testkube-dashboard-explore)               |
| **Environment Management**           |                         :x:                          |                 :white_check_mark:                 |                [Docs](/articles/environment-management)                 |
| **Multi-runner Environments**        |                         :x:                          |                 :white_check_mark:                 |                    [Docs](/articles/agents-overview)                    |
| **Concurrency and Queuing**          |                         :x:                          |                 :white_check_mark:                 |          [Docs](/articles/test-workflows-concurrency-queueing)          |
| **Listener capability**              |                         :x:                          |                 :white_check_mark:                 |            [Docs](/articles/agents-overview#listener-agents)            |
| **GitOps capability**                |                         :x:                          |                 :white_check_mark:                 |             [Docs](/articles/agents-overview#gitops-agents)             |
| **Webhooks capability**              |                         :x:                          |                 :white_check_mark:                 |            [Docs](/articles/agents-overview#webhook-agents)             |
| **Control Plane Resource Storage**   |                         :x:                          |                 :white_check_mark:                 |             [Docs](/articles/testkube-resource-management)              |
| **SSO Integration**                  |                         :x:                          |                 :white_check_mark:                 |                         [Docs](/articles/auth)                          |
| **SCIM Integration**                 |                         :x:                          |                 :white_check_mark:                 |                         [Docs](/articles/scim)                          |
| **RBAC/User Mgmt**                   |                         :x:                          |                 :white_check_mark:                 |                [Docs](/articles/organization-management)                |
| **Resource Metrics**                 |                         :x:                          |                 :white_check_mark:                 |                   [Docs](/articles/resource-metrics)                    |
| **Reporting/Insights**               |                         :x:                          |                 :white_check_mark:                 |                     [Docs](/articles/test-insights)                     |
| **Workflow Health & Flakiness**      |                         :x:                          |                 :white_check_mark:                 |                    [Docs](/articles/workflow-health)                    |
| **Status Pages**                     |                         :x:                          |                 :white_check_mark:                 |                     [Docs](/articles/status-pages)                      |
| **Advanced Log/Results Debugging**   |                         :x:                          |                 :white_check_mark:                 |                   [Docs](/articles/log-highlighting)                    |
| **Teams**                            |                         :x:                          |                 :white_check_mark:                 |                         [Docs](/articles/teams)                         |
| **Resource Groups**                  |                         :x:                          |                 :white_check_mark:                 |                    [Docs](/articles/resource-groups)                    |
| **JUnit Reports**                    |                         :x:                          |                 :white_check_mark:                 |                [Docs](/articles/test-workflows-reports)                 |
| **Audit Logs**                       |                         :x:                          |                 :white_check_mark:                 |                      [Docs](/articles/audit-logs)                       |
| **AI Agents**                        |                         :x:                          |                 :white_check_mark:                 |                       [Docs](/articles/ai-agents)                       |
| **AI Assistant**                     |                         :x:                          |                 :white_check_mark:                 |                 [Docs](/articles/ai-assistant-overview)                 |
| **MCP Server**                       |                         :x:                          |                 :white_check_mark:                 |                     [Docs](/articles/mcp-overview)                      |
| **Test Discovery**                   |                         :x:                          |                 :white_check_mark:                 | [Docs](/articles/test-workflows-create-wizard#automatic-test-discovery) |
