# Scheduler Metrics (Control Plane)

The Testkube control plane exposes scheduler metrics that help you monitor queue depth, active work, and scheduling performance for Test Workflows. These metrics are useful for answering questions like:

- Are workflows backing up in a specific environment?
- How many executions are actively running right now?
- Is the scheduler spending more time assigning work than usual?

This page covers how to enable these metrics and what each metric means. For agent-level Prometheus metrics, see [Prometheus Metrics](/articles/metrics).

## Availability and Enablement

Scheduler metrics are available in Testkube Cloud and Enterprise control plane deployments. They are exposed on the control plane `/metrics` endpoint.

Enablement is controlled by:

- `TK_SCHEDULER_METRICS_ENABLED` (defaults to `true`).

## Metric Reference

All scheduler metrics include `environment_name` (if the environment has no name, its ID is used). Runner-level gauges add `runner_id` and `runner_name`.

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

