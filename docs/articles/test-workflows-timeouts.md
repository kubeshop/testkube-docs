# Test Workflow Timeouts

Testkube supports multiple timeout mechanisms, each handling a different stage of execution:

- Queue timeout for waiting executions
- Step timeout for individual workflow steps
- Job/pod runtime limits at the Kubernetes layer
- System-level safeguards for very long-running executions

Use these together to avoid stuck or runaway workflows.

## Queue timeout

`spec.timeouts.queue` controls how long a Test Workflow execution can stay in the queue before it is aborted.

This is enforced by the scheduler cleanup loop. If an execution remains queued longer than the configured queue timeout, it is marked as aborted.

### Installation-level defaults

At the installation level, scheduler cleanup is controlled by:

- `SCHEDULER_CLEANUP_INTERVAL` - how often cleanup runs (default 1h)
- `SCHEDULER_MAX_QUEUED_TIME` - maximum queued duration allowed before abort (default: 24h)

Use these to set the default queue timeout behavior for your environment.

### Per-workflow override

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

When `spec.timeouts.queue` is set, it takes precedence over installation-level defaults for that workflow.

If `spec.timeouts.queue` is not set, scheduler cleanup falls back to the installation-level setting (`SCHEDULER_MAX_QUEUED_TIME`).

## Step timeout

Use `steps[*].timeout` to limit how long an individual step can run before that step is aborted.

```yaml
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: step-timeout-example
spec:
  steps:
    - name: long-step
      timeout: 30s
      shell: |
        sleep 120
```

This is useful when one step is expected to finish quickly, and you want fast failure if it hangs.

## Job and pod runtime limits

At the Kubernetes layer, you can use `spec.job.activeDeadlineSeconds` (and related pod settings) to enforce a wall-clock runtime limit for the underlying execution workload.

This is broader than step timeout and applies to the execution infrastructure itself.

For details and examples, see [Job & Pod Configuration](/articles/test-workflows-job-and-pod).

## System-level execution safeguards

Testkube also includes system-level safeguards for executions that remain ongoing for very long periods.

For the current behavior and lifecycle details, see [Concurrency & Queueing](/articles/test-workflows-concurrency-queueing).

## Which timeout to use

- Use `spec.timeouts.queue` for waiting time before execution starts.
- Use `steps[*].timeout` for per-step runtime control.
- Use `spec.job.activeDeadlineSeconds` for Kubernetes wall-clock enforcement.
- Keep installation defaults (`SCHEDULER_*`) as environment-wide guardrails.

## Related documentation

- [Workflow Best Practices](/articles/test-workflows-best-practices)
- [Concurrency & Queueing](/articles/test-workflows-concurrency-queueing)
- [Job & Pod Configuration](/articles/test-workflows-job-and-pod)
