# Testkube Agent Feature Comparison

The below table shows a feature comparison between deploying the Testkube Agent in Standalone Mode vs Connected Mode - [Read More](/articles/install/standalone-agent).

The Control Plane column applies to both On-Prem and Cloud deployments of the Control Plane.

| Features                             |       Testkube Agent <br/> in standalone mode        | Testkube Agent(s) <br/>connected to Control Plane |                                Read More                                |
| :----------------------------------- | :--------------------------------------------------: | :-----------------------------------------------: | :---------------------------------------------------------------------: |
| **TestWorkflows**                    | :white_check_mark: - :warning: see limitations above |                :white_check_mark:                 |                    [Docs](/articles/test-workflows)                     |
| **Test Logs/Artifacts**              |   :white_check_mark: - :warning: via CLI/API only    |                :white_check_mark:                 |                  [Docs](/articles/logs-and-artifacts)                   |
| **Webhooks**                         |                  :white_check_mark:                  |                :white_check_mark:                 |                       [Docs](/articles/webhooks)                        |
| **Kubernetes Event Triggers**        |                  :white_check_mark:                  |                :white_check_mark:                 |                  [Docs](/articles/triggering-overview)                  |
| **Test, Suites, Sources, Executors** |                  :white_check_mark:                  |                :white_check_mark:                 |           Deprecated - [Read More](/articles/legacy-features)           |
| **Testkube CLI**                     |                  :white_check_mark:                  |                :white_check_mark:                 |                          [Docs](/articles/cli)                          |
| **REST API**                         |    :white_check_mark: -:warning: Unauthenticated     |                :white_check_mark:                 |                        [Docs](/openapi/overview)                        |
| **Dashboard**                        |                         :x:                          |                :white_check_mark:                 |              [Docs](/articles/testkube-dashboard-explore)               |
| **Environment Management**           |                         :x:                          |                :white_check_mark:                 |          [Docs](/testkube-pro/articles/environment-management)          |
| **Multi-Agent Environments**         |                         :x:                          |                :white_check_mark:                 |                  [Docs](/articles/install/multi-agent)                  |
| **SSO Integration**                  |                         :x:                          |                :white_check_mark:                 |               [Docs](/testkube-pro-on-prem/articles/auth)               |
| **SCIM Integration**                 |                         :x:                          |                :white_check_mark:                 |               [Docs](/articles/scim)               |
| **RBAC/User Mgmt**                   |                         :x:                          |                :white_check_mark:                 |         [Docs](/testkube-pro/articles/organization-management)          |
| **Resource Metrics**                 |                         :x:                          |                :white_check_mark:                 |                   [Docs](/articles/resource-metrics)                    |
| **Reporting/Insights**               |                         :x:                          |                :white_check_mark:                 |                     [Docs](/articles/test-insights)                     |
| **Status Pages**                     |                         :x:                          |                :white_check_mark:                 |               [Docs](/testkube-pro/articles/status-pages)               |
| **Advanced Log/Results Debugging**   |                         :x:                          |                :white_check_mark:                 |             [Docs](/testkube-pro/articles/log-highlighting)             |
| **Resource Metrics**                 |                         :x:                          |                :white_check_mark:                 |                   [Docs](/articles/resource-metrics)                    |
| **Teams**                            |                         :x:                          |                :white_check_mark:                 |                         [Docs](/articles/teams)                         |
| **Resource Groups**                  |                         :x:                          |                :white_check_mark:                 |                    [Docs](/articles/resource-groups)                    |
| **JUnit Reports**                    |                         :x:                          |                :white_check_mark:                 |                [Docs](/articles/test-workflows-reports)                 |
| **Audit Logs**                       |                         :x:                          |                :white_check_mark:                 |                [Docs](/testkube-pro/articles/audit-logs)                |
| **AI Assistant**                     |                         :x:                          |                :white_check_mark:                 |                 [Docs](/articles/ai-assistant-overview)                 |
| **Test Discovery**                   |                         :x:                          |                :white_check_mark:                 | [Docs](/articles/test-workflows-create-wizard#automatic-test-discovery) |
