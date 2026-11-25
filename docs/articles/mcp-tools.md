---
description: Every tool the Testkube MCP Server offers, for workflows, workflow templates, Runners, executions, artifacts, queries, schemas, Insights metrics and Insights boards, with what each one does.
---

# Testkube MCP Server Tools

The [Testkube MCP Server](/articles/mcp-overview) offers the same tools whether you connect to the [hosted endpoint](/articles/mcp-hosted) or run it with the [CLI](/articles/mcp-cli) or [Docker](/articles/mcp-docker). Each tool call acts with the permissions of the user or API token you connected with; see [Security & Compliance](/articles/mcp-security).

## Workflow Management

- `list_workflows` - List workflows with filtering
- `get_workflow` - Get workflow details
- `get_workflow_definition` - Get workflow YAML
- `get_workflow_metrics` - Get workflow performance metrics
- `create_workflow` - Create new workflow
- `update_workflow` - Update existing workflow
- `run_workflow` - Execute workflow

## Workflow Template Management

- `list_workflowtemplates` - List all workflow templates with optional label filtering
- `get_workflowtemplate_definition` - Get workflow template YAML definition
- `create_workflowtemplate` - Create new workflow template
- `update_workflowtemplate` - Update existing workflow template

## Runner Management {#agent-management}

- `list_agents` - List available runners for workflow execution targeting - [Read More](/articles/test-workflows-running#runner-agent-targeting)

## Execution Management

- `list_executions` - List workflow executions
- `get_execution_info` - Get execution details
- `get_workflow_execution_metrics` - Get detailed resource consumption metrics for a specific execution
- `get_workflow_resource_history` - Analyze resource consumption patterns across multiple executions (trends, outliers, statistics)
- `fetch_execution_logs` - Get execution logs
- `lookup_execution_id` - Resolve execution name to ID
- `wait_for_executions` - Wait for executions to complete
- `abort_workflow_execution` - Cancel running execution
- `update_execution_tags` - Update tags on an execution (replace semantics)

## Artifact Management

- `list_artifacts` - List execution artifacts
- `read_artifact` - Read artifact content

## Query Tools

- `query_workflows` - Query multiple workflow definitions using JSONPath expressions
- `query_executions` - Query multiple execution records using JSONPath expressions

## Schema Tools

- `get_workflow_schema` - Get the YAML schema for TestWorkflow definitions
- `get_execution_schema` - Get the YAML schema for TestWorkflowExecution data

## Insights Metrics

Read the [Granular Metrics](/articles/test-insights#granular-metrics) that Testkube extracts from k6, JMeter, Artillery, JUnit and InfluxDB reports. These tools only cover the MCP session's environment. Granular metrics need PostgreSQL as the Testkube database, and on a Control Plane too old to serve them, the tools are listed but return an error when called.

- `list_insight_series` - Find the metric series that exist, with the `seriesId` and metric key of each, filtered by workflow, report source, metric key or identity (such as a test case or a k6 request)
- `list_insight_metric_keys` - List the distinct metric keys, such as `http_req_duration_p95_ms` or `test_duration_ms`
- `get_insight_metric_series` - Get a metric as a time series, for a metric key (`measure`) or for chosen `seriesId` values, optionally broken down (`segment`) by workflow, status or an identity field. It covers the last 7 days unless you pass `startDate` and `endDate`. Besides metric keys, `measure` accepts `latency_p95_ms`, `throughput_rps` and `errors_rate`, which combine performance metrics across tools
- `list_insight_executions` - List the executions behind a metric, most recent first, with the same filters as `get_insight_metric_series`

## Insights Boards

Create, view and update [Insights boards](/articles/test-insights). Boards belong to the organization rather than to one environment, and a report narrows itself to environments through its own filters.

- `list_boards` - List the boards visible to you (shared and private)
- `get_board` - Get a board with its reports and layout
- `create_board` - Create an empty board, shared with the organization by default
- `update_board` - Change a board's name, description, slug, visibility or layout
- `add_board_report` - Add a Pass/Fail, Executions, Workflows or Time Series report
- `update_board_report` - Change a report's name, description, kind or settings
- `remove_board_report` - Remove a report from a board
- `delete_board` - Delete a board and all of its reports
- `render_board` - Return the numbers each report shows. By default every report uses its own environment filter, as in the Dashboard; set `scope` to `environment` to limit every report to the MCP session's environment. Relative ranges (a day, week, month or quarter) end at midnight in `timeZone`, an IANA name such as `Europe/Berlin` that defaults to UTC; the Dashboard ends them at midnight in your browser's time zone, so pass yours to get the same numbers

:::note
Board tools require a signed-in user. They work with the hosted MCP endpoint when you connect with your user account, and with the CLI after `testkube login`. They do not work with an API token, including an API token passed to the Docker container as `TK_ACCESS_TOKEN`.
:::

Deleting a shared board requires the organization admin role, as it does in the Dashboard.

Changes to a board made through MCP never overwrite a change someone else made in the meantime. Each change is applied only to the version of the board the tool read. If the board changed first, for example because someone edited it in the Dashboard, the tool reads it again and reapplies your change on top, and it reports an error without changing anything if the board keeps changing. This needs a Control Plane that tracks board versions; with an older one, a change overwrites the board as it was read. Deleting a board is different: it removes the board and everything on it, including changes made since the tool read it, as deleting in the Dashboard does.

## Utility Tools

- `build_dashboard_url` - Generate dashboard URLs
- `list_labels` - List available labels
- `list_resource_groups` - List resource groups
