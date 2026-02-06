# Control Plane Metrics

This page consolidates Testkube Control Plane Prometheus metrics, including scheduler metrics.

In `v2.7+`, Control Plane metrics are enabled by default with:

- `TK_CLOUD_METRICS_ENABLED=true`

For context on the source-of-truth migration in `v2.7`, see [Control Plane Source of Truth](/articles/control-plane-source-of-truth).

## Availability and Enablement

Control Plane metrics are available in Testkube Cloud and Enterprise connected deployments and are exposed on the control plane `/metrics` endpoint.

- Path: `/metrics` on the Control Plane API service.
- `TK_CLOUD_METRICS_ENABLED` controls control-plane metrics emission (default `true` in `v2.7+`).
- `TK_SCHEDULER_METRICS_ENABLED` controls scheduler metrics emission (default `true`).

## Label Model (Control Plane)

- `environment_name` (if environment has no name, its ID is used).
- `runner_id` (stable), `runner_name` (readable).
- No dynamic maps/arrays: dropped `labels`, `tags`, `testworkflow_uri`, trigger `causes`.
- `triggered_by` is normalized to `manual|schedule|trigger`.
- CRUD counters drop resource names to keep cardinality bounded.
- Trigger event counter is currently disabled in control plane (`testkube_testtrigger_event_total` is not emitted).

## Scheduler Metrics

All scheduler metrics include `environment_name`. Runner-level gauges also include `runner_id` and `runner_name`.

- `testkube_scheduler_environment_queue_limit` (gauge; `environment_name`)  
  Configured queue limit for the environment.

- `testkube_scheduler_queued_executions` (gauge; `environment_name`)  
  Number of queued Test Workflow executions awaiting assignment.

- `testkube_scheduler_active_executions` (gauge; `environment_name`)  
  Number of executions currently active (assigned/starting/running/pausing/resuming/stopping).

- `testkube_scheduler_queue_oldest_age_seconds` (gauge; `environment_name`)  
  Age in seconds of the oldest queued execution (0 when none).

- `testkube_scheduler_runner_active_executions` (gauge; `environment_name`, `runner_id`, `runner_name`)  
  Active executions attributed to each runner.

## Workflow, Trigger, and Webhook Metric Families

- **Workflow executions**  
  - `testkube_testworkflow_executions_total` (counter)  
  - `testkube_testworkflow_executions_duration_seconds` (histogram)  
  - `testkube_testworkflow_aborts_total` (counter)  
  Labels: `environment_name`, `workflow_name`, `workflow_result`, `triggered_by`, `runner_id`, `runner_name`

- **Workflow steps**  
  - `testkube_testworkflow_execution_steps_total` (counter)  
  - `testkube_testworkflow_execution_steps_duration_seconds` (histogram)  
  - `testkube_testworkflow_execution_steps_start_time_seconds` (histogram)  
  - `testkube_testworkflow_execution_steps_finish_time_seconds` (histogram)  
  Labels: execution labels above + `step_name`, `step_status`

- **Workflow CRUD**  
  - `testkube_testworkflow_creations_total`, `..._updates_total`, `..._deletes_total` (counters)  
  Labels: `environment_name`, `result` (`created|updated|deleted|error`)

- **Workflow templates**  
  - `testkube_testworkflowtemplate_creations_total`, `..._updates_total`, `..._deletes_total` (counters)  
  Labels: `environment_name`, `workflow_template`, `result`

- **Triggers**  
  - `testkube_testtrigger_creations_total`, `..._updates_total`, `..._deletes_total`, `..._bulk_updates_total`, `..._bulk_deletes_total` (counters)  
  Labels: `environment_name`, `result`
  - `testkube_testtrigger_event_total` is currently not emitted by control plane.

- **Webhooks**  
  - `testkube_webhook_executions_total` (counter)  
  Labels: `environment_name`, `webhook_name`, `event_type`, `result`

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

## Notes vs Agent Metrics

- Agent metrics keep legacy labels (`labels`, `tags`, URIs) and no environment scoping; control-plane metrics use fixed labels and add `environment_name`.
- Durations are histograms in seconds (agent used summaries/gauges in milliseconds).
