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

Every code belongs to one of the five types of the [status details](#the-status-details-of-an-execution). The type says which layer failed, so you know where to look first.

### The Execution Does Not Start

Testkube reports these codes before the test runs. Their type is `init-failure`.

| Code                     | Meaning                                                             | What to check                                                                                              |
| ------------------------ | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `image-pull-failed`      | Kubernetes could not pull the image                                 | The image name and tag, and the pull secret of a private registry                                          |
| `definition-invalid`     | The workflow definition is not valid                                | The specification, the expressions, and the configuration values                                           |
| `job-create-failed`      | Kubernetes did not accept the Job                                   | The pod specification, and the admission policies of the cluster. The message holds the text of the policy |
| `resource-create-failed` | Kubernetes did not accept a secret, a config map, or a volume claim | The quotas and the policies of the namespace                                                               |
| `start-failed`           | The runner could not start the execution, and has no finer signal   | The log of the runner. Ask the team that operates the runner when you have no access to it                 |
| `queue-limit-exceeded`   | The environment reached its limit of queued executions              | The limit of the environment, and how many executions wait                                                 |
| `template-missing`       | A template that the workflow uses does not exist                    | The name of the template, in this environment                                                              |
| `git-auth-failed`        | The repository refused the credentials                              | The token, and the scope that the repository needs                                                         |
| `git-clone-failed`       | The repository could not be cloned                                  | The address of the repository, and the revision                                                            |

### The Pod Waits or Cannot Start

These codes come from the pod and from the events of the pod and the Job. Their type is `init-failure`.

| Code                     | Meaning                                                                        | What to check                                                                                 |
| ------------------------ | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| `unschedulable`          | No node can run the pod                                                        | The resource requests, the node selectors, and the taints                                     |
| `config-missing`         | A secret or a config map that a container needs is not available               | The name of the secret or the config map, in the namespace of the execution                   |
| `volume-mount-failed`    | Kubernetes cannot mount a volume of the pod                                    | The volume claim and the secret that the volume names                                         |
| `admission-denied`       | The cluster did not accept the pod                                             | The message, which holds the text of the policy that rejected it                              |
| `initialization-timeout` | The first step did not start before the initialization timeout of the workflow | The cause that follows in the same message. See [Timeouts](/articles/test-workflows-timeouts) |

### The Test Runs

These codes name a problem of the infrastructure while the test ran. Their type is `execution-failure`.

| Code                     | Meaning                                                                                         | What to check                                                                                                  |
| ------------------------ | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `process-killed`         | A signal killed the test process. The execution stops                                           | What sends signals to the process, and the memory limit of the container                                       |
| `step-timeout`           | The step did not finish within its timeout. It ends as `timeout` with the exit code `137`       | The `timeout` of the step                                                                                      |
| `execution-timeout`      | The execution ran for too long                                                                  | The duration of the test, and the limits of the installation                                                   |
| `execution-stuck`        | The execution stayed in the running state with no progress                                      | The log of the runner, and the state of the pod. Ask the team that operates the runner when you have no access |
| `worker-resume-failed`   | The runner could not resume a parallel worker                                                   | The log of the runner, for the reason of the failed resume                                                     |
| `oom-killed`             | Kubernetes killed the container because it used more memory than its limit. The execution stops | The memory limit of the container, and what the test allocates                                                 |
| `evicted`                | Kubernetes evicted the pod from its node                                                        | The pressure on the node, usually disk or memory                                                               |
| `preempted`              | A pod with a higher priority took the place of this one                                         | The priority class of the workflow                                                                             |
| `node-shutdown`          | The node that ran the pod shut down                                                             | The lifecycle of the node pool, for example a spot instance                                                    |
| `container-error`        | A container of the pod could not run                                                            | The log of the step, and the exit code of the container                                                        |
| `deadline-exceeded`      | The pod ran longer than the deadline of the Job                                                 | `activeDeadlineSeconds` of the workflow, and the duration of the test                                          |
| `job-deleted`            | Something deleted the Job of the execution while it ran                                         | Who deletes Jobs in the namespace, for example a cleanup policy                                                |
| `service-not-ready`      | A service of a step did not become ready                                                        | The readiness probe of the service, and its log                                                                |
| `artifact-upload-failed` | The artifacts could not be uploaded                                                             | The object storage of the installation, and its credentials                                                    |
| `fail-fast`              | Another parallel worker failed, so this one stopped                                             | The worker that failed first                                                                                   |

### The Test Decides the Result

These codes mean that your test ran and reported a failure. Their type is `step-failure`.

| Code                    | Meaning                                             | What to check                       |
| ----------------------- | --------------------------------------------------- | ----------------------------------- |
| `exit-code`             | A step ended with an exit code that is not zero     | The log of the step                 |
| `child-workflow-failed` | A workflow that this execution started did not pass | The execution of the child workflow |

### The Control Plane Stops the Execution

These codes name a stop that a component decided from outside the pod. Their type is `execution-failure`. The exception is `abort-all`: when a person stops all executions of a workflow, the type is `user-cancel`.

| Code                 | Meaning                                                                                                           |
| -------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `queue-timeout`      | The execution waited longer than the queue timeout of the workflow                                                |
| `queued-too-long`    | The execution waited longer than the limit of the installation, see [Timeouts](/articles/test-workflows-timeouts) |
| `transition-timeout` | The execution stayed in a transitional state for too long                                                         |
| `stop-not-confirmed` | The runner did not confirm the stop in time                                                                       |
| `abort-all`          | A person or the API stopped all executions of the workflow                                                        |
| `superseded`         | A newer commit replaced the run                                                                                   |
| `trigger-abort`      | The trigger that started the execution was deleted                                                                |

### A Person Stops the Execution

A stop that a person asked for is not a failure. Its type is `user-cancel`.

| Code           | Meaning                                                                        |
| -------------- | ------------------------------------------------------------------------------ |
| `user-cancel`  | A person canceled the execution                                                |
| `force-cancel` | A person canceled the execution by force, so the runner did not report a cause |

### No Signal Explains the Result

| Code      | Meaning                                                                |
| --------- | ---------------------------------------------------------------------- |
| `unknown` | No signal explains the result. Its type is `unknown`. Read the message |

## Messages on a Step

Some steps run a Testkube command and not your test: the clone of a repository, the upload of artifacts, the services of a step, and a nested execution. When such a step fails, its message names the cause, for example the `fatal:` line of git. So you can tell a failure of the tooling from a failure of your test.

## Attempts

A step with `retry` reports the number of attempts in `attempts`. A step that ran one time reports `1`. A workflow reads the count of another execution through `execution("ref").stepAttempts`.

## The Status Details of an Execution

An execution that does not pass carries `result.statusDetails`. The object says which layer failed, names the cause with a code, and keeps the message that explains it. The runner or the control plane writes it once, when the execution ends.

| Field     | Meaning                                                                                       |
| --------- | --------------------------------------------------------------------------------------------- |
| `type`    | The layer that failed. One of the five values in the table below                              |
| `reason`  | The code of the cause. One of the codes in the Reason Codes section above                     |
| `message` | The text that explains the cause, as Testkube wrote it                                        |
| `step`    | The reference of the step that holds the cause. Empty when the initialization step holds it   |
| `actor`   | The component that decided the stop. Empty when no component decided it                       |
| `user`    | The name and the email of the person who asked for the stop. Present only when a person asked |

### Types

The dashboard shows the type and the reason in a tooltip on the status icon of an execution, in the executions list and in the execution detail.

| Type                | Label in the dashboard | Meaning                                                                                   |
| ------------------- | ---------------------- | ----------------------------------------------------------------------------------------- |
| `init-failure`      | Configuration error    | The execution failed before the test ran. In most cases you can fix it yourself           |
| `execution-failure` | Infrastructure failure | The infrastructure stopped the execution while the test ran                               |
| `step-failure`      | Test failure           | The test ran and reported a failure                                                       |
| `user-cancel`       | Canceled by the user   | A person stopped the execution. The health of the workflow does not count it as a failure |
| `unknown`           | Unknown cause          | No signal explains the result                                                             |

### Filtering a List by the Type

The executions page of the dashboard has a `Failure type` filter with the five types. The API has the same filter as the query parameter `statusDetailsType`, which takes one or more types separated by commas. An execution without the object never matches.

The parameter works on the two list endpoints of the agent API:

```
GET /test-workflow-executions?statusDetailsType=init-failure,execution-failure
GET /test-workflows/{id}/executions?statusDetailsType=step-failure
```

And on the executions endpoint of the control plane:

```
GET /organizations/{id}/environments/{environmentID}/executions?statusDetailsType=init-failure
```

### Reading the Type in a Suite

A workflow reads the type, the code, and the step of another execution with `execution()`. The example runs a child workflow, then explains in one line why it did not start:

```yaml
- name: Run the build
  execute:
    workflows:
      - name: build
        as: build

- name: Report the cause
  condition: always
  shell: |
    if [ '{{ execution("build").statusType }}' = 'init-failure' ]; then
      echo "the build could not start: {{ execution("build").statusReason }}"
    fi
```

`execution()` does not resolve in the `condition` of a step. Read the value in a `shell` step, as above. See [Sharing Data Between Executions](/articles/test-workflows-execution-sharing).

### Reading the Type in a Webhook Template

The payload of a webhook carries the whole execution, so a template reads the object with no change to the webhook. In a template, the field of the type is `Type_`, with the underscore:

```
{{ .TestWorkflowExecution.Result.StatusDetails.Type_ }}
{{ .TestWorkflowExecution.Result.StatusDetails.Reason }}
```

## Related Documentation

- [Timeouts](/articles/test-workflows-timeouts)
- [Sharing Data Between Executions](/articles/test-workflows-execution-sharing)
- [Analyzing Results](/articles/analyzing-results)
