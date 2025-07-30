# Test Workflows

## Introduction

Test Workflows are an easy and extremely powerful way to define and run your tests in
your Kubernetes clusters. Thanks to their flexibility, Test Workflows solve many of the
problems that can occur with standard Tests, including:

- Running Tests using different testing tool versions and dependencies.
- Defining multiple steps for the execution of the tests.
- Having more control over how your tests are executed, including resource consumption and setup/tearDown processes.
- Being able to configure tool-specific commands and arguments.

:::note
Most of the test execution functionality provided by the Test Workflows engine is available for free using the
Open Source Testkube Agent in Standalone Mode - [Read More](/articles/install/standalone-agent).  
:::

## Test Workflow Structure Overview

Test Workflows are defined via a Kubernetes Custom Resource Definition (CRD) that uses a custom workflow language.
Below is a high-level outline of a Test Workflow definition:

```yaml title="testworkflows-outline.yaml"
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: ... # Name of the Test Workflow
spec:
  content: # Where to find the test definitions
    git: # Checkout from a Git repository
      ...
    files: # Inline file definitions
      ...
  container: # Global container settings (can be overridden)
    resources: # Resource requests and limits
      requests: ...
      limits: ...
    workingDir: # Default working directory
    env: # Global environment variables
      ...
  execution: # Optional execution properties
    tags: # execution tags
      ...
    target: # target specific Runner Agents
      ...
  steps: # Ordered steps for execution (supports nesting)
    - name: ... # name of step
      run:
        image: ...
        command: [...]
        args: [...]
```

The different properties are described with examples and in more detail below.

:::tip
The [Schema Reference for Test Workflows](/articles/crds/testworkflows.testkube.io-v1#testworkflow) describes all available properties and constructs
:::

## Metadata

The **metadata** section follows [standard Kubernetes convention.](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.30/#objectmeta-v1-meta)

### Name

- **`metadata.name`**: _(Required)_ The name of the Test Workflow (e.g. `example-workflow`).

### Labels

- **`metadata.labels`**: _(Optional)_ Labels help with filtering and organizing workflows.

```yaml
metadata:
  name: example-workflow
  labels:
    example: label
    another: one
    one: more
```

## Content Sources

[Content Schema Reference](/articles/crds/testworkflows.testkube.io-v1#content)

The **content** section specifies the test scripts or files to run.

### Git Repositories

You can check out tests from a Git repository:

```yaml
spec:
  content:
    git:
      uri: https://github.com/kubeshop/testkube
      revision: main
      paths:
        - test/cypress/cypress-13
```

### Files

Alternatively, you can define test files directly:

```yaml
spec:
  content:
    files:
      - path: k6.js # File created in the working directory
        content: |
          import http from 'k6/http';
          export const options = {
            thresholds: { http_req_failed: ['rate<0.01'] },
          };
          export default function () {
            http.get('https://testkube.io/');
          }
      - path: /example-file.js # File created in the root directory
        content: Another file content
```

## Container Configuration

[Container Schema Reference](/articles/crds/testworkflows.testkube.io-v1#containerconfig)

The **container** section sets up the environment where steps run. These settings can be applied globally or overridden on a per-step basis.

### Container Image

The `container.image` field specifies the Docker image that will execute your step. **Important:**

- The image **must** be stored in a Docker registry (public or private).
- Local images are not supported unless they are hosted in a registry.
- For guidance on setting up a private registry, see [this Docker guide](https://www.docker.com/blog/how-to-use-your-own-registry-2/).

#### Example

```yaml
steps:
  - name: Run tests
    shell: jmeter -n -t jmeter-executor-smoke.jmx -j /data/artifacts/jmeter.log -o /data/artifacts/report -l /data/artifacts/jtl-report.jtl -e
    container:
      image: alpine/jmeter:5.6
```

**Note:** Our system retrieves image metadata exclusively from the Docker registry. It does not access metadata from local container storage or the Docker daemon.

### Resources

[Resources Schema Reference](/articles/crds/testworkflows.testkube.io-v1#resources).

Define resource requests and limits:

```yaml
spec:
  container:
    resources:
      requests:
        cpu: 256m
        memory: 128Mi
      limits:
        cpu: 512m
        memory: 256Mi
```

### Working Directory

Set the default working directory:

```yaml
spec:
  container:
    workingDir: /data/repo/test/cypress/cypress-13
```

## Environment Variables

Environment variables can be defined at different levels to tailor your test execution.

### Global Environment Variables

Set environment variables globally for all steps:

```yaml
spec:
  container:
    env:
      - name: GLOBAL_ENV
        value: global_value
```

### Step-Level Environment Variables

Override or add environment variables for a specific step:

```yaml
steps:
  - name: Run tests
    run:
      image: cypress/included:13.6.4
      env:
        - name: CYPRESS_CUSTOM_ENV
          value: custom_value
```

## Steps

[Steps Schema Reference](/articles/crds/testworkflows.testkube.io-v1#step)

Steps are the individual actions that make up a Test Workflow.  
They run in order and can be nested.

### Defining Steps

A basic step that runs a command:

```yaml
steps:
  - name: Run test
    run:
      image: postman/newman:6-alpine
      args:
        - run
        - collection.json
```

For nested steps:

```yaml
steps:
  - name: Parent Step
    run:
      image: some-image
    steps:
      - name: Sub-step 1
        shell: echo "Running sub-step 1"
      - name: Sub-step 2
        shell: echo "Running sub-step 2"
```

### Running Commands and Shell Scripts

[Run Schema Reference](https://github.com/kubeshop/testkube-docs/blob/main/articles/crds/testworkflows.testkube.io-v1#steprun)

There are multiple ways to execute commands:

- **Using `command` and `args`:**

  ```yaml
  steps:
    - name: Run tests
      run:
        image: mcr.microsoft.com/playwright:v1.32.3-focal
        command:
          - "npx"
        args:
          - "--yes"
          - "playwright@1.32.3"
          - "test"
  ```

- **Using `shell`:**  
  For convenience, you can run shell commands directly:

  ```yaml
  steps:
    - shell: mkdir ~/some-directory && echo "Directory created"
  ```

## Artifacts

Workflows can capture artifacts (such as logs or reports) generated during execution.
[Learn more about artifacts.](https://github.com/kubeshop/testkube-docs/blob/main/docs/articles/test-workflows-artifacts.md)

### Saving Artifacts from the Working Directory

Example for saving files from a specific directory:

```yaml
steps:
  - name: Save artifacts
    workingDir: /data/artifacts
    artifacts:
      paths:
        - "*"
```

### Recursive Artifact Saving

To save all files in nested directories:

```yaml
steps:
  - name: Save artifacts
    workingDir: /data/artifacts
    artifacts:
      paths:
        - "**/*"
```

> **Tip:** When artifacts are added directly to a step, they are scraped even if that step fails (the default is `condition: always`). When using separate or nested steps, you may need to set `condition: always` explicitly.

#### Cypress Example with Artifacts

```yaml
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: cypress-example-video-artifact
  labels:
    core-tests: workflows
spec:
  content:
    git:
      uri: https://github.com/kubeshop/testkube
      revision: main
      paths:
        - test/cypress/cypress-13
  container:
    resources:
      requests:
        cpu: 2
        memory: 2Gi
    workingDir: /data/repo/test/cypress/cypress-13
  steps:
    - name: Run tests
      run:
        image: cypress/included:13.6.4
        args:
          - --env
          - NON_CYPRESS_ENV=NON_CYPRESS_ENV_value
          - --config
          - video=true
        env:
          - name: CYPRESS_CUSTOM_ENV
            value: CYPRESS_CUSTOM_ENV_value
      steps:
        - name: Save artifacts
          workingDir: /data/repo/test/cypress/cypress-13/cypress/videos
          artifacts:
            paths:
              - "**/*"
```

## Events and Scheduling

[Events Schema Reference](/articles/crds/testworkflows.testkube.io-v1#event)

Test Workflows can be triggered automatically using events such as cronjobs.

### CronJob Trigger

Define one or more cron schedules for your workflow:

```yaml
spec:
  events:
    - cronjob:
        cron: "*/20 * * * *"
        labels:
          key1: value1
        annotations:
          key2: value2
        config:
          myParameter: param1
        timezone: Etc/GMT+5
    - cronjob:
        cron: "*/5 * * * *"
        labels:
          key3: value3
        annotations:
          key4: value4
        config:
          myParameter: param2
```

> **Info:** Testkube uses the standard Kubernetes Cron format. See [Cron Format on Wikipedia](https://en.wikipedia.org/wiki/Cron) and [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) for details. If no timezone is specified, Testkube will use the cluster’s local time.

### Targeting specific Runner Agents in CronJobs

With the introduction of [Multi-Agent Environments](/articles/install/multi-agent) you can optionally specify
which Runner Agent(s) a CronJob execution should run on. For example

```yaml
---
- cronjob:
    cron: "*/5 * * * *"
    labels:
      key3: value3
    annotations:
      key4: value4
    config:
      myParameter: param2
    target:
      match:
        application:
          - accounting
```

Will run this CronJob on any Global Runner Agent with the `application: accounting` label, for more details,
see our guide on [Runner Agent Targeting](/articles/install/multi-agent#targeting-runner-agents-in-testkube-resources).

## Tags

Tags help in filtering and organizing workflow executions. Add tags as follows:

```yaml
spec:
  execution:
    tags:
      name1: value1
      name2: value2
```

For more details, see our guide on [Filtering Test Workflow Executions Using Tags](/articles/filtering-test-workflow-executions-using-tags).

## Runner Agent Target

With the introduction of [Multi-Agent Environments](/articles/install/multi-agent) you can optionally specify
which Runner Agent(s) this Workflow should run on. For example:

```yaml
spec:
  execution:
    target:
      match:
        application:
          - accounting
```

Will run on any Global Runner Agent with the `application: accounting` label. You can use this targeting with either Workflows or Workflow Templates.

- A Workflow target will have priority over targets within Workflow Templates.
- A Workflow using Workflow Templates may only target Runner Agents with at most one template, or an error will occur when scheduled.

For more details, see our guide on [Runner Agent Targeting](/articles/install/multi-agent#targeting-runner-agents-in-testkube-resources).

## Templates

You can run a Test Workflow from a predefined [Test Workflow Template](./test-workflow-templates.md):

```yaml
steps:
  - name: Run from template
    template:
      name: example-template/cypress
      config:
        version: 13.5.0
        params: '--env NON_CYPRESS_ENV=NON_CYPRESS_ENV_value --config ''{"screenshotsFolder":"/data/artifacts/screenshots","videosFolder":"/data/artifacts/videos"}'''
```
