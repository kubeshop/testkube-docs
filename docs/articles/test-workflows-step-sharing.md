# Sharing Data Between Steps

Workflow steps run sequentially in the same pod, so they share a filesystem (see [Content](/articles/test-workflows-content) for volume-based sharing). But when you want to explicitly pass a value or a file from one step to another, Testkube provides two dedicated mechanisms: **output values** and **step results directories**. A later step can also read how an earlier step ended.

:::tip
Give your steps an explicit `id` so you can reference them by name. Without an `id`, you'd have to use the auto-generated step identifier, which is harder to read.
:::

## Output Values

Write a value to `/testkube/outputs/<key>` in any step. Later steps can read it with `{{step.<id>.outputs.<key>}}`.

```yaml
steps:
  - name: Setup
    id: setup
    shell: |
      echo "my-generated-token" > /testkube/outputs/token
  - name: Test
    id: test
    shell: |
      echo "Using token: {{step.setup.outputs.token}}"
```

One file per key — the entire file content becomes the string value of the expression, up to 4096 bytes. A larger file is skipped with a warning; use a step results directory or an artifact for those.

Output values also cross the execution boundary: a Workflow that ran this one reads them with `execution()`. See [Sharing Data Between Executions](/articles/test-workflows-execution-sharing).

## Step Results Directories

Each step has a results directory at `{{step.results}}`. Files written there are accessible to later steps at `{{step.<id>.results}}/`.

```yaml
steps:
  - name: Build
    id: build
    shell: |
      echo '#!/bin/sh' > {{step.results}}/app
      echo 'echo "running"' >> {{step.results}}/app
      chmod +x {{step.results}}/app
  - name: Run
    id: run
    shell: |
      {{step.build.results}}/app
```

Use this for larger data — binaries, config files, test fixtures.

## The Result of an Earlier Step

A later step can read how an earlier step ended, with `{{step.<id>.status}}` and `{{step.<id>.exitCode}}`.

```yaml
steps:
  - name: Run the tests
    id: run_tests
    optional: true
    shell: ./run.sh
  - name: Report
    condition: always
    shell: |
      echo "the tests ended with {{step.run_tests.exitCode}} and status {{step.run_tests.status}}"
```

The status is one of `passed`, `failed`, `timeout`, `aborted`, `canceled`, or `skipped`. The exit code is the code that the process of the step returned.

Three rules apply:

- A step that did not run leaves both expressions unresolved.
- A step that a condition skipped has the status `skipped` and no exit code, because it ran no command. An exit code of `0` would read as a success.
- The step that reads the result needs `condition: always`, or another condition that is true after a failure. The default condition, `passed`, skips a step after a failure. Set `optional: true` on the earlier step when its failure must not fail the workflow.

A step with a `timeout` that runs out ends as `timeout` with the exit code `137`, because Testkube stops the process with a kill signal. A step whose command exits with a code ends as `failed` with that code:

```yaml
steps:
  - name: Load test
    id: load_test
    optional: true
    timeout: 5m
    shell: ./load.sh
  - name: Explain the result
    condition: always
    shell: |
      if [ '{{step.load_test.status}}' = 'timeout' ]; then
        echo "the load test ran longer than 5 minutes"
      elif [ '{{step.load_test.status}}' = 'failed' ]; then
        echo "the load test failed with exit code {{step.load_test.exitCode}}"
      fi
```

Two events end the whole execution, so no later step runs and no step can read their result: a signal that kills the process of a step, and Kubernetes that kills the container, for example when it uses more memory than its limit. Testkube then records the cause in the result of the execution, as the reason code `process-killed` or `oom-killed`. A cause that Kubernetes reports before the pod starts, for example a pod that no node can run, is also in the result of the execution. See [Failure Reasons](/articles/test-workflows-failure-reasons).

The function `execution()` reads another execution. It resolves in a `shell`, in a command, and in a `retry` condition, but not in the `condition` of a step. To branch on the result of another execution, read it in a `shell` step, write the answer to `/testkube/outputs`, and use that output in the condition of the next step.

## Full Example

A step can use both mechanisms at once, and any later step can read from any earlier step.

```yaml
steps:
  - name: Produce
    id: produce
    shell: |
      echo "my_token" > /testkube/outputs/token
      echo '#!/bin/sh' > {{step.results}}/app
      echo 'echo "running"' >> {{step.results}}/app
      chmod +x {{step.results}}/app
  - name: Consume
    id: consume
    shell: |
      test "{{step.produce.outputs.token}}" = "my_token"
      {{step.produce.results}}/app
      echo "consumed" > /testkube/outputs/status
  - name: Verify
    id: verify
    shell: |
      test "{{step.consume.outputs.status}}" = "consumed"
      test "{{step.produce.outputs.token}}" = "my_token"
      {{step.produce.results}}/app
```

## Notes

- Output values are strings. Write JSON if you need structured data and parse it in the consuming step.
- `{{step.<id>.exitCode}}` is a number. The other step expressions are strings.
- Step results directories work within a single pod. They are not available across parallel workers in separate pods — use the `transfer` property for that (see [Parallelization](/articles/test-workflows-parallel)).
- An output value holding a secret stays inside the Workflow that produced it. Later steps read it in full; a Workflow that ran this one cannot — see [Sensitive Values](/articles/test-workflows-execution-sharing#sensitive-values).
