# Test Workflow Timeouts

Testkube supports timeout controls at two levels:

- Installation-level scheduler defaults
- Per-workflow timeout configuration

## Queue timeout behavior

`spec.timeouts.queue` controls how long a Test Workflow execution can stay in the queue before it is aborted.

This is enforced by the scheduler cleanup loop. If an execution remains queued longer than the configured queue timeout, it is marked as aborted.

## Installation-level configuration

At the installation level, scheduler cleanup is controlled by:

- `SCHEDULER_CLEANUP_INTERVAL` - how often cleanup runs
- `SCHEDULER_MAX_QUEUED_TIME` - maximum queued duration allowed before abort

Use these to set the default queue timeout behavior for your environment.

## Per-workflow configuration

You can override queue timeout per workflow using `spec.timeouts.queue`.

```yaml
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: my-workflow
spec:
  timeouts:
    queue: 10m
  steps:
    - name: run-tests
      shell: echo "hello"
```

Duration values follow Go duration format (for example: `30s`, `5m`, `1h`).

## Precedence

When `spec.timeouts.queue` is set, it takes precedence over installation-level defaults for that workflow.

If `spec.timeouts.queue` is not set, scheduler cleanup falls back to the installation-level setting (`SCHEDULER_MAX_QUEUED_TIME`).
