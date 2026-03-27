# Control Plane Metrics

This page consolidates Testkube Control Plane Prometheus metrics, including scheduler metrics.

In `v2.7+`, Control Plane metrics are enabled by default with:

- `TK_CLOUD_METRICS_ENABLED=true`

For context on the source-of-truth migration in `v2.7`, see [Testkube Resource Management](/articles/testkube-resource-management).

## Availability and Enablement

Control Plane metrics are available in Testkube Cloud and Enterprise connected deployments and are exposed on the control plane `/metrics` endpoint.

- Path: `/metrics` on the Control Plane API service.
- `TK_CLOUD_METRICS_ENABLED` controls control-plane metrics emission (default `true` in `v2.7+`).
- `TK_SCHEDULER_METRICS_ENABLED` controls scheduler metrics emission (default `true`).

## Label Model (Control Plane)

- `environment_name`.
- `runner_id` (stable), `runner_name` (readable).
- No dynamic maps/arrays: dropped `labels`, `tags`, `testworkflow_uri`, trigger `causes`.
- `triggered_by` is normalized to `manual`, `schedule`, or `trigger`.
- CRUD counters drop resource names to keep cardinality bounded.

## Available Metrics

| Metric | Type | Description | Labels |
|--------|------|-------------|--------|
| **Scheduler** | | | |
| `testkube_scheduler_environment_queue_limit` | gauge | Configured queue limit for the environment | `environment_name` |
| `testkube_scheduler_queued_executions` | gauge | Number of queued executions awaiting assignment | `environment_name` |
| `testkube_scheduler_active_executions` | gauge | Number of currently active executions | `environment_name` |
| `testkube_scheduler_queue_oldest_age_seconds` | gauge | Age in seconds of the oldest queued execution (0 when none) | `environment_name` |
| `testkube_scheduler_runner_active_executions` | gauge | Active executions attributed to each runner | `environment_name`, `runner_id`, `runner_name` |
| **Workflow Executions** | | | |
| `testkube_testworkflow_executions_total` | counter | Total number of test workflow executions | `environment_name`, `workflow_name`, `workflow_result`, `triggered_by`, `runner_id`, `runner_name` |
| `testkube_testworkflow_executions_duration_seconds` | histogram | Duration of test workflow executions | `environment_name`, `workflow_name`, `workflow_result`, `triggered_by`, `runner_id`, `runner_name` |
| `testkube_testworkflow_aborts_total` | counter | Total number of test workflow aborts | `environment_name`, `workflow_name`, `workflow_result`, `triggered_by`, `runner_id`, `runner_name` |
| **Workflow Execution Steps** | | | |
| `testkube_testworkflow_execution_steps_total` | counter | Total number of test workflow execution steps | execution labels + `step_name`, `step_status` |
| `testkube_testworkflow_execution_steps_duration_seconds` | histogram | Duration of test workflow execution steps | execution labels + `step_name`, `step_status` |
| `testkube_testworkflow_execution_steps_start_time_seconds` | histogram | Start time of test workflow execution steps | execution labels + `step_name`, `step_status` |
| `testkube_testworkflow_execution_steps_finish_time_seconds` | histogram | Finish time of test workflow execution steps | execution labels + `step_name`, `step_status` |
| **Workflow Lifecycle (CRUD)** | | | |
| `testkube_testworkflow_creations_total` | counter | Total number of test workflows created | `environment_name`, `result` |
| `testkube_testworkflow_updates_total` | counter | Total number of test workflows updated | `environment_name`, `result` |
| `testkube_testworkflow_deletes_total` | counter | Total number of test workflows deleted | `environment_name`, `result` |
| **Workflow Templates** | | | |
| `testkube_testworkflowtemplate_creations_total` | counter | Total number of test workflow templates created | `environment_name`, `workflow_template`, `result` |
| `testkube_testworkflowtemplate_updates_total` | counter | Total number of test workflow templates updated | `environment_name`, `workflow_template`, `result` |
| `testkube_testworkflowtemplate_deletes_total` | counter | Total number of test workflow templates deleted | `environment_name`, `workflow_template`, `result` |
| **Triggers** | | | |
| `testkube_testtrigger_creations_total` | counter | Total number of test trigger created events | `environment_name`, `result` |
| `testkube_testtrigger_updates_total` | counter | Total number of test trigger updated events | `environment_name`, `result` |
| `testkube_testtrigger_deletes_total` | counter | Total number of test trigger deleted events | `environment_name`, `result` |
| `testkube_testtrigger_bulk_updates_total` | counter | Total number of test trigger bulk update events | `environment_name`, `result` |
| `testkube_testtrigger_bulk_deletes_total` | counter | Total number of test trigger bulk delete events | `environment_name`, `result` |
| **Webhooks** | | | |
| `testkube_webhook_executions_total` | counter | Total number of webhook executions | `environment_name`, `webhook_name`, `event_type`, `result` |

## Examples

```text
# scheduler queue depth
testkube_scheduler_queued_executions{environment_name="prod-env"} 4

# workflow execution (control plane)
testkube_testworkflow_executions_total{
  environment_name="prod-env",
  workflow_name="metrics-demo",
  workflow_result="passed",
  triggered_by="manual",
  runner_id="tkc_run_123",
  runner_name="runner-a"
} 1

# workflow step duration (seconds, histogram)
testkube_testworkflow_execution_steps_duration_seconds_bucket{
  environment_name="prod-env",
  workflow_name="metrics-demo",
  workflow_result="passed",
  triggered_by="manual",
  runner_id="tkc_run_123",
  runner_name="runner-a",
  step_name="build",
  step_status="passed",
  le="1"
} 0

# webhook execution
testkube_webhook_executions_total{
  environment_name="prod-env",
  webhook_name="notify",
  event_type="END_TESTWORKFLOW_SUCCESS",
  result="success"
} 3
```

## Agent to Control-Plane Mapping

Every [Agent metric](/articles/metrics) has a corresponding Control Plane metric. The mapping follows a small set of
consistent conventions described below.

### Naming Conventions

- **Counter suffix**: Agent metrics ending in `_count` become `_total` on the Control Plane (e.g. `testkube_testworkflow_executions_count` → `testkube_testworkflow_executions_total`).
- **Trigger name normalization**: Agent trigger metrics using the plural `testtriggers` become singular `testtrigger` on the Control Plane (e.g. `testkube_testtriggers_updates_count` → `testkube_testtrigger_updates_total`).
- **Duration units**: Agent timing metrics in milliseconds (`_ms`) become histograms in seconds (`_seconds`) on the Control Plane for cross-replica aggregation (e.g. `testkube_testworkflow_executions_duration_ms` → `testkube_testworkflow_executions_duration_seconds`).

### Label Changes

All Control Plane metrics gain `environment_name` for environment-level scoping. Beyond that:

- **Workflow execution and step metrics** gain `runner_id` and `runner_name` for runner-level scoping, and rename agent labels for clarity: `name` → `workflow_name`, `result` → `workflow_result`, `status` → `step_status`.
- **`triggered_by`** is normalized to one of `manual`, `schedule`, or `trigger`.
- To count executions started by a TestTrigger, query `testkube_testworkflow_executions_total{triggered_by="trigger"}`.
- **High-cardinality labels are dropped**: `labels`, `tags`, `testworkflow_uri`, and trigger `causes` are not carried to the Control Plane.
- **CRUD counters** use only `environment_name` and `result` (workflow names are omitted to keep cardinality bounded). Template metrics additionally include `workflow_template`.
- **Webhook metrics** rename `name` → `webhook_name` and `eventType` → `event_type`.

### Metrics Not Mapped

Agent-only legacy test and test-suite metric families (`testkube_test_*`, `testkube_testsuite_*`) do not have Control Plane equivalents.

### Full Mapping Reference

| Agent Metric | Control-Plane Metric |
|---|---|
| `testkube_testworkflow_executions_count` | `testkube_testworkflow_executions_total` |
| `testkube_testworkflow_executions_duration_ms` | `testkube_testworkflow_executions_duration_seconds` |
| `testkube_testworkflow_aborts_count` | `testkube_testworkflow_aborts_total` |
| `testkube_testworkflow_execution_steps_count` | `testkube_testworkflow_execution_steps_total` |
| `testkube_testworkflow_execution_steps_duration_ms` | `testkube_testworkflow_execution_steps_duration_seconds` |
| `testkube_testworkflow_execution_steps_start_time_ms` | `testkube_testworkflow_execution_steps_start_time_seconds` |
| `testkube_testworkflow_execution_steps_finish_time_ms` | `testkube_testworkflow_execution_steps_finish_time_seconds` |
| `testkube_testworkflow_creations_count` | `testkube_testworkflow_creations_total` |
| `testkube_testworkflow_updates_count` | `testkube_testworkflow_updates_total` |
| `testkube_testworkflow_deletes_count` | `testkube_testworkflow_deletes_total` |
| `testkube_testworkflowtemplate_creations_count` | `testkube_testworkflowtemplate_creations_total` |
| `testkube_testworkflowtemplate_updates_count` | `testkube_testworkflowtemplate_updates_total` |
| `testkube_testworkflowtemplate_deletes_count` | `testkube_testworkflowtemplate_deletes_total` |
| `testkube_testtrigger_creations_count` | `testkube_testtrigger_creations_total` |
| `testkube_testtriggers_updates_count` | `testkube_testtrigger_updates_total` |
| `testkube_testtriggers_deletes_count` | `testkube_testtrigger_deletes_total` |
| `testkube_testtriggers_bulk_updates_count` | `testkube_testtrigger_bulk_updates_total` |
| `testkube_testtriggers_bulk_deletes_count` | `testkube_testtrigger_bulk_deletes_total` |
| `testkube_webhook_executions_count` | `testkube_webhook_executions_total` |

Migration note: `testkube_testtrigger_event_count` does not have a direct Control Plane equivalent yet. If you used it to count executions started by a TestTrigger, query `testkube_testworkflow_executions_total{triggered_by="trigger"}` instead. That gives you workflow executions started by any trigger, but it does not preserve the per-trigger `name`, `resource`, `eventType`, or `causes` dimensions from the agent metric.
