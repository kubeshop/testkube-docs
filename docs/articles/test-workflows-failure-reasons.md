# Failure Reasons

When an execution does not pass, Testkube records two things: a message for you and a reason code for your tools. The message says in words what happened. The code is short and does not change between versions, so a workflow, a webhook, or a dashboard filter can act on it.

You see the message in the execution detail of the dashboard. The API returns the message and the code. A workflow reads both from another execution with `execution()`.

## Where to Find the Cause

| Field                                | Content                                                                                          |
| ------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `result.initialization.errorMessage` | The message of the initialization step. A cause that stops the pod before the first step is here |
| `result.initialization.errorReason`  | The reason code of that message. Empty when the cause has no code                                |
| `result.steps.<ref>.errorMessage`    | The message of one step, for example the cause that a Testkube step reported                     |
| `result.steps.<ref>.errorReason`     | The reason code of that message                                                                  |
| `result.steps.<ref>.attempts`        | How many times the step ran. A step with `retry` can report more than one attempt                |

Testkube generates the step reference `<ref>` for each execution, so it changes from run to run. The dashboard shows the name of the step instead. To read these fields from another execution, see [Sharing Data Between Executions](/articles/test-workflows-execution-sharing).

## The Message of a Stop

When something stops an execution, the message is one sentence:

```
The execution has been aborted. (by the runner: the first step did not start before the initialization timeout of the workflow: no node can run the pod: 0/2 nodes are available)
```

The sentence starts with the final status, `aborted` or `canceled`. The part in parentheses names who decided the stop, then the reason in words, then the text that Kubernetes or the test process reported.

When a person cancels an execution, the sentence names only the person: `The execution has been canceled. (by the user)`.

When Kubernetes ends the container, nobody decided a stop. The parentheses then hold the reason that Kubernetes gave, for example `The execution has been aborted. (OOMKilled)`.

## Actors

The actor is the component that decided the stop.

| Actor           | Who stopped the execution                                    |
| --------------- | ------------------------------------------------------------ |
| `user`          | A person, through the dashboard, the CLI, or the API         |
| `control-plane` | The control plane, for example after a timeout               |
| `trigger`       | The cleanup of a trigger that no longer exists               |
| `fail-fast`     | A parallel step, after the first worker failed               |
| `runner`        | The runner, for example after the initialization timeout     |
| `quality-loop`  | The quality loop, after a newer commit replaced the run      |
| `api`           | A call to the abort endpoint of a standalone agent           |
| `system`        | A caller that did not name itself, for example a deleted Job |

## Reason Codes

The message always names the cause in words. The field `errorReason` holds a code when Testkube knows one: a cause that Kubernetes reported while the pod waited, a stop that the control plane decided, or one of the two causes that Testkube reports from inside the container, `process-killed` and `step-timeout`.

An initialization timeout is a special case. The step keeps the code of the cause that made the pod wait, for example `unschedulable`, and the message names the timeout. So you read the timeout in the message and the cause in the code.

### The Execution Does Not Start

Testkube reports these codes before the first step runs.

| Code                     | Meaning                                                             | What to check                                                                                              |
| ------------------------ | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `image-pull-failed`      | Kubernetes could not pull the image                                 | The image name and tag, and the pull secret of a private registry                                          |
| `definition-invalid`     | The workflow definition is not valid                                | The specification, the expressions, and the configuration values                                           |
| `job-create-failed`      | Kubernetes did not accept the Job                                   | The pod specification, and the admission policies of the cluster. The message holds the text of the policy |
| `resource-create-failed` | Kubernetes did not accept a secret, a config map, or a volume claim | The quotas and the policies of the namespace                                                               |
| `start-failed`           | The runner could not start the execution, and has no finer signal   | The log of the runner. Ask the team that operates the runner when you have no access to it                 |

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

| Code                   | Meaning                                                                                   | What to check                                                                                                  |
| ---------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `process-killed`       | A signal killed the test process. The execution stops                                     | What sends signals to the process, and the memory limit of the container                                       |
| `step-timeout`         | The step did not finish within its timeout. It ends as `timeout` with the exit code `137` | The `timeout` of the step                                                                                      |
| `execution-timeout`    | The execution ran for too long                                                            | The duration of the test, and the limits of the installation                                                   |
| `execution-stuck`      | The execution stayed in the running state with no progress                                | The log of the runner, and the state of the pod. Ask the team that operates the runner when you have no access |
| `worker-resume-failed` | The runner could not resume a parallel worker                                             | The log of the runner, for the reason of the failed resume                                                     |

### The Control Plane Stops the Execution

| Code                 | Meaning                                                                                                           |
| -------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `queue-timeout`      | The execution waited longer than the queue timeout of the workflow                                                |
| `queued-too-long`    | The execution waited longer than the limit of the installation, see [Timeouts](/articles/test-workflows-timeouts) |
| `transition-timeout` | The execution stayed in a transitional state for too long                                                         |
| `stop-not-confirmed` | The runner did not confirm the stop in time                                                                       |
| `abort-all`          | A person or the API stopped all executions of the workflow                                                        |
| `superseded`         | A newer commit replaced the run                                                                                   |

## Messages on a Step

Some steps run a Testkube command and not your test: the clone of a repository, the upload of artifacts, the services of a step, and a nested execution. When such a step fails, its message names the cause, for example the `fatal:` line of git. So you can tell a failure of the tooling from a failure of your test.

## Attempts

A step with `retry` reports the number of attempts in `attempts`. A step that ran one time reports `1`. A workflow reads the count of another execution through `execution("ref").stepAttempts`.

## Related Documentation

- [Timeouts](/articles/test-workflows-timeouts)
- [Sharing Data Between Executions](/articles/test-workflows-execution-sharing)
- [Analyzing Results](/articles/analyzing-results)
