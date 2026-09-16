# Failure Reasons

When an execution does not pass, the result holds a message that a person reads and a reason code that a program reads. The code is short and stable, so a suite or a dashboard can act on it while the words of the message change.

You read the message in the execution detail of the dashboard, and both values in the API. A workflow reads them from another execution with `execution()`.

## Where to Find the Cause

| Field                                | Content                                                                                               |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| `result.initialization.errorMessage` | The message of the initialization step. A cause that stops the pod before the first step appears here |
| `result.initialization.errorReason`  | The reason code of that message, empty when the cause has no code                                     |
| `result.steps.<ref>.errorMessage`    | The message of one step, for example the cause that a toolkit step reported                           |
| `result.steps.<ref>.errorReason`     | The reason code of that step message                                                                  |
| `result.steps.<ref>.attempts`        | The number of times the step ran. A step with `retry` reports more than one attempt                   |

Testkube generates the step reference `<ref>` for each execution, so it is different in every run. The dashboard shows the name of the step instead. To read these fields from another execution, see [Sharing Data Between Executions](/articles/test-workflows-execution-sharing).

## The Message of a Stop

When something stops an execution, the result holds one sentence:

```
The execution has been aborted. (by the runner: the first step did not start before the initialization timeout of the workflow: no node can run the pod: 0/2 nodes are available)
```

The sentence starts with the final status, `aborted` or `canceled`. The brackets hold the actor that decided the stop, then the reason in words, then the cause that Kubernetes or the test process reported.

A cancel by a person carries only the actor: `The execution has been canceled. (by the user)`.

## Actors

| Actor           | Who stopped the execution                                 |
| --------------- | --------------------------------------------------------- |
| `user`          | A person, through the dashboard, the CLI, or the API      |
| `control-plane` | The control plane, for example after a timeout            |
| `trigger`       | The cleanup of a trigger that no longer exists            |
| `fail-fast`     | A parallel step, after the first worker failed            |
| `runner`        | The runner, for example after the initialization timeout  |
| `quality-loop`  | The quality loop, after a newer commit superseded the run |
| `api`           | The abort endpoint of a standalone agent                  |
| `system`        | A caller that does not name itself                        |

## Reason Codes

The message always names the cause in words. The field `errorReason` carries the code for a cause that Kubernetes reported while the pod waited, for a stop that the control plane decided, and for the two causes that the init process reports, `process-killed` and `step-timeout`. The code of the initialization timeout appears in the message only, because the step keeps the code of the cause that made the pod wait.

### The Execution Does Not Start

These codes come from the runner, before the first step runs.

| Code                     | Meaning                                                             | What to check                                                                                              |
| ------------------------ | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `image-pull-failed`      | The image could not be pulled                                       | The image name and tag, and the pull secret of a private registry                                          |
| `definition-invalid`     | The workflow definition is invalid                                  | The specification, the expressions, and the configuration values                                           |
| `job-create-failed`      | Kubernetes did not accept the Job                                   | The pod specification, and the admission policies of the cluster. The message holds the text of the policy |
| `resource-create-failed` | Kubernetes did not accept a secret, a config map, or a volume claim | The quotas and the policies of the namespace                                                               |
| `start-failed`           | The runner could not start the execution, with no finer signal      | The log of the runner. Ask the team that operates the runner when you have no access to it                 |

### The Pod Waits or Cannot Start

These codes come from the pod and from the events of the pod and the Job.

| Code                     | Meaning                                                                        | What to check                                                                                 |
| ------------------------ | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| `unschedulable`          | No node can run the pod                                                        | The resource requests, the node selectors, and the taints                                     |
| `config-missing`         | A secret or a config map that a container needs is not available               | The name of the secret or the config map, in the namespace of the execution                   |
| `volume-mount-failed`    | Kubernetes cannot mount a volume of the pod                                    | The volume claim and the secret that the volume names                                         |
| `admission-denied`       | The cluster did not accept the pod                                             | The message, which holds the text of the policy that rejected it                              |
| `initialization-timeout` | The first step did not start before the initialization timeout of the workflow | The cause that follows in the same message. See [Timeouts](/articles/test-workflows-timeouts) |

### The Test Runs

| Code                   | Meaning                                                        | What to check                                                                                                  |
| ---------------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `process-killed`       | The test process was killed, possibly by an out-of-memory kill | The memory limit of the container                                                                              |
| `step-timeout`         | The step did not finish within its timeout                     | The `timeout` of the step                                                                                      |
| `execution-timeout`    | The execution ran for too long                                 | The duration of the test, and the limits of the installation                                                   |
| `execution-stuck`      | The execution is stuck in the running state                    | The log of the runner, and the state of the pod. Ask the team that operates the runner when you have no access |
| `worker-resume-failed` | The runner could not resume a parallel worker                  | The log of the runner, for the reason of the failed resume                                                     |

### The Control Plane Stops the Execution

| Code                 | Meaning                                                                                                           |
| -------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `queue-timeout`      | The execution passed the queue timeout of the workflow                                                            |
| `queued-too-long`    | The execution stayed queued past the limit of the installation, see [Timeouts](/articles/test-workflows-timeouts) |
| `transition-timeout` | The execution stayed in a transitional state for too long                                                         |
| `stop-not-confirmed` | The runner did not confirm the stop in time                                                                       |
| `abort-all`          | A person or the API stopped all executions of the workflow                                                        |
| `superseded`         | A newer commit superseded the run                                                                                 |

## Messages on a Step

Some steps run a Testkube command and not your test: the clone of a repository, the upload of artifacts, the services of a step, and a nested execution. When such a step fails, the step message names the cause, for example the `fatal:` line of git. So a failure of the tooling reads differently from a failure of your test.

## Attempts

A step with `retry` reports the number of attempts in `attempts`. A step that ran one time reports `1`. A suite reads the count of another execution through `execution("ref").stepAttempts`.

## Related Documentation

- [Timeouts](/articles/test-workflows-timeouts)
- [Sharing Data Between Executions](/articles/test-workflows-execution-sharing)
- [Analyzing Results](/articles/analyzing-results)
