# Testkube Agent Metrics

The Testkube Agent API Server exposes a `/metrics` endpoint that can be consumed by Prometheus, Grafana, etc.
These metrics are available on Standalone Agents and Connected Agents with the runner and webhooks capability enabled as outlined below - [Read More](/articles/agents-overview).

In standalone mode, metrics reflect local executions. In connected mode, metrics reflect executions
performed in the associated Environment. Runner and Webhook Agents expose the execution-related metrics listed below, while
the Control Plane exposes its own metrics for centralized observability - see [Control Plane Metrics](/articles/control-plane-metrics).

:::note
No metrics are produced until at least one Workflow has been executed since the last Agent API server restart.
:::

## Available Metrics

| Metric | Agent Capabilities* | Description | Labels |
|--------|------------|-------------|--------|
| **Workflow Executions** | | | |
| `testkube_testworkflow_executions_count` | Webhook + Runner | Total number of test workflow executions | `name`, `result`, `labels`, `testworkflow_uri`, `triggered_by`, `tags` |
| `testkube_testworkflow_executions_duration_ms` | Webhook + Runner | Duration of test workflow executions | `name`, `result`, `labels`, `testworkflow_uri`, `triggered_by`, `tags` |
| `testkube_testworkflow_aborts_count` | Runner | Total number of test workflow aborts | `result` |
| **Workflow Execution Steps** | | | |
| `testkube_testworkflow_execution_steps_count` | Webhook + Runner | Total number of test workflow execution steps | `workflow_name`, `step_name`, `status` |
| `testkube_testworkflow_execution_steps_duration_ms` | Webhook + Runner | Duration of test workflow execution steps | `workflow_name`, `step_name`, `status` |
| `testkube_testworkflow_execution_steps_start_time_ms` | Runner | Start time of test workflow execution steps | `workflow_name`, `step_name`, `status` |
| `testkube_testworkflow_execution_steps_finish_time_ms` | Runner | Finish time of test workflow execution steps | `workflow_name`, `step_name`, `status` |
| **Workflow Lifecycle (CRUD)** | | | |
| `testkube_testworkflow_creations_count` | Runner | Total number of test workflows created | `result` |
| `testkube_testworkflow_updates_count` | Runner | Total number of test workflows updated | `result` |
| `testkube_testworkflow_deletes_count` | Runner | Total number of test workflows deleted | `result` |
| **Workflow Templates** | | | |
| `testkube_testworkflowtemplate_creations_count` | Runner | Total number of test workflow templates created | `result` |
| `testkube_testworkflowtemplate_updates_count` | Runner | Total number of test workflow templates updated | `result` |
| `testkube_testworkflowtemplate_deletes_count` | Runner | Total number of test workflow templates deleted | `result` |
| **Triggers** | | | |
| `testkube_testtriggers_creations_count` | Runner | Total number of test trigger created events | `result` |
| `testkube_testtriggers_updates_count` | Runner | Total number of test trigger updated events | `result` |
| `testkube_testtriggers_deletes_count` | Runner | Total number of test trigger deleted events | `result` |
| `testkube_testtriggers_bulk_updates_count` | Runner | Total number of test trigger bulk update events | `result` |
| `testkube_testtriggers_bulk_deletes_count` | Runner | Total number of test trigger bulk delete events | `result` |
| `testkube_testtrigger_event_count` | Runner | Total number of test trigger events | `name`, `resource`, `eventType`, `causes` |
| **Webhooks** | | | |
| `testkube_webhook_executions_count` | Runner + Webhook | Total number of webhook executions | `name`, `eventType`, `result` |

(* = these are the Agent capabilities required for the metric to be available and updated.)

### Example Prometheus Output

```promql
# HELP testkube_testworkflow_executions_count The total number of test executions
# TYPE testkube_testworkflow_executions_count counter
testkube_testworkflow_executions_count{name="test-website",result="passed",type="curl-container/test"} 1
```

## Installation

If a Prometheus operator is not installed, please follow the steps here: [https://grafana.com/docs/grafana-cloud/quickstart/prometheus_operator/](https://grafana.com/docs/grafana-cloud/quickstart/prometheus_operator/).

Then, add a `ServiceMonitor` custom resource to your cluster which will scrape metrics from our
Testkube API server:

```yaml
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: testkube-api-server
  labels:
    app: prometheus
spec:
  endpoints:
  - interval: 10s
    port: http
  selector:
    matchLabels:
      app.kubernetes.io/name: api-server
```

If you're installing Testkube manually with our Helm chart, you can pass the `prometheus.enabled` value to the install command.

## Grafana Dashboard

To use the Grafana dashboard, import this JSON definition:

[https://github.com/kubeshop/testkube/blob/main/assets/grafana-dasboard.json](https://github.com/kubeshop/testkube/blob/main/assets/grafana-dasboard.json)
