# Sharing Data Between Steps

Workflow steps run sequentially in the same pod, so they share a filesystem (see [Content](/articles/test-workflows-content) for volume-based sharing). But when you want to explicitly pass a value or a file from one step to another, Testkube provides two dedicated mechanisms: **output values** and **step results directories**.

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

One file per key — the entire file content becomes the string value of the expression.

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
- Both mechanisms work within a single pod. They are not available across parallel workers in separate pods — use the `transfer` property for that (see [Parallelization](/articles/test-workflows-parallel)).
