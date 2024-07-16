# Test Workflow Templates

Test Workflow Templates allow you to define building blocks which you can reuse across your workflows.
Strategically, templates can bring standardization across your organization. You can define a tool chain which is easy to discover across teams.
At a more tactical level, templates avoid repetition and can be used to hide implementation details.

Templates are flexible and can be used is various ways:

- Template testing tools: Define a common usage of Cypress across your organization.
- Template setup: Run scripts before your tests or tear down steps.
- Template test sources: Define credentials once to make it easy to update them.
- Template common labels: Attach labels per company department.
- Template technical details: Define an abstraction which handles closing Istio sidecar.
- Template integrations: Run anything after tests fail.

## Basics

### Create a Template

You can manage your templates under _Workflows > Workflow Templates_ within the dashboard or apply a TestWorkflowTemplate Custom Resource to your Kubernetes cluster with the CLI. This custom resources follows the same structure as a Test Workflow, with the additional ability to define configuration parameters that can be specified when the template is used.

The example below templates a testing tool. More specifically, it defines a k6 test with parameters for the
k6 version to use and the parameters to pass to k6.

```yaml
kind: TestWorkflowTemplate
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: example-template--k6
spec:
  config:
    version:
      description: k6 version to use
      type: string
      default: 0.49.0
    params:
      description: Additional params for the k6 run command
      type: string
      default: ""
  steps:
    - name: Run k6 tests
      container:
        image: grafana/k6:{{ config.version }}
      shell: k6 run {{ config.params }}
```

Or another example would be to set resources:

```yaml
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflowTemplate
metadata:
  name: run-size-lg
spec:
  container:
    resources:
      requests:
        cpu: 2
        mem: 1Gb
      limits:
        cpu: 3
        mem: 2Gb
```

### Using a Template

Your workflows can use one or multiple templates.
You can use a template within the workflow as a whole or within a step.
When you run a workflow with templates, then our workflow engine will first inline the templates before executing.
To learn how templates are inlined, you can [see this advanced section][inlining].

#### `use` at the Top-level

A template can be included with the top-level use (array) clause - this way it will be included in the TestWorkflow, and all its defaults will be available in the whole TestWorkflow.

_This is the only place where constructs like Job and Pod setup can be specified._

```yaml {27-29}
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: k6-example-from-template
spec:
  use:
    - name: run-size-lg
  steps:
    - shell: echo 1
```

#### `use` at the step-level

When the template is included with use (array) on step level, all its defaults and steps will be included only for the step it’s included in.

```yaml {21-25}
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: k6-example-from-template
spec:
  steps:
    - name: Run from template
      workingDir: /data/repo/test/k6/executor-tests
      use:
        name: example-template/k6
        config:
          version: 0.48.0
          params: "k6-smoke-test-without-envs.js"
```

## Advanced

### Understand Inlining

Our workflow engine will inline all the workflow templates before moving on to execution.

**Inlining a template**

The previously shown `use` example would look like this:

```yaml
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: k6-example-from-template-inlined
spec:
  container:
    resources:
      requests:
        cpu: 2
        mem: 1Gb
      limits:
        cpu: 3
        mem: 2Gb
  steps:
    - shell: echo 1
```

**Inlining the same property will cause it to be overriden.**
To illustrate, the `serviceAccountName` within workflow will always be `test-restricted`.
Since the template is fully merged before executions starts, its not that the service account name
would update halfway throughout the execution.

```yaml title="Example merging the same property"
# my-template-a
spec:
  pod:
    serviceAccountName: tests-unrestricted

# my-template-b
spec:
  pod:
    serviceAccountName: tests-restricted

# my-workflow-w
spec:
  use:
  - name: my-template-a
  - name: my-template-b
  steps:
  - shell: echo 1

# Merged workflow
spec:
  pod:
    serviceAccountName: tests-restricted
  steps:
  - shell: echo 1

```

**Inlining the same list will cause items to be added.**
To illustrate, the `serviceAccountName` within workflow will always be `test-restricted`.
Note that the workflow is the base on which templates gets added.
This implicates that items on the workflow are always located before those of templates.

```yaml title="Example inlining the same list"
# my-template-a
spec:
  steps:
  - shell: echo 1

# my-template-b
spec:
  pod:
  - shell: echo 2

# my-workflow-w
spec:
  use:
  - name: my-template-a
  - name: my-template-b
  steps:
  - shell: echo 3

# Merged workflow
spec:
  steps:
  - shell: echo 3
  - shell: echo 1
  - shell: echo 2
```

**Inlining within run will work (almost) exactly the same as top-level.**

It will take the spec and put it at the place where the template is used.
One exeception is that the whole `pod` object will be removed beforehand.

```yaml title="Example inlining the same list"
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: my-template
spec:
  container:
    env:
      - name: DEBUG
        value: "true"
  steps:
    - shell: echo 1
---
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: example-workflow
spec:
  steps:
    - name: Using my template
      use: my-template
---
# Merged workflow
spec:
  steps:
    - name: Using my template
      container:
        env:
          - name: DEBUG
            value: "true"
      steps:
        - shell: echo 1
```

### Isolate Templates

Template details are hidden which might cause unexpected trouble for the steps that run after it.
Let's take a look at the following example:

```yaml
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflowTemplate
metadata:
  name: run-tool
spec:
  container:
    env:
      - name: DEBUG
        value: "true"
  steps:
    - name: Run testing tool
      shell: tool test # Gives more logs because DEBUG is set.
---
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: example-workflow
spec:
  steps:
    - name: Run testing tool
      use:
        name: run-tool
    - name: Validate weak isolation
      shell: echo $DEBUG # Prints "true" and might impact steps after it.
```

This behaviour is great in case you want the template to configure following steps or expose data.
However, in other cases it might lead to unexpected consequences as the template has undesired side-effects.
You can run a step in isolation by running it within its own group:

```yaml
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: example-workflow
spec:
  steps:
    - name: Run testing tool isolated
      steps:
        - use:
            name: run-tool
```

It's common to want to create a group with a single step to run a template in isolation.
That's why Workflows comes with syntactical sugar for this through `template`.
The example below is exactly the same as the one above:

```yaml
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: example-workflow
spec:
  steps:
    - name: Run testing tool isolated
      template:
        name: run-tool
```

Next time when using a template within a step, start by thinking whether you want your workflow to expose data / share config with `use` or isolate with `template`.

### Control Ordering

Template merging adds items to lists.
This means that templates steps will run after workflow steps.
Workflows and Templates provide `setup` and `after` to help you further control that order.
It allows your templates to setup or tear down.

To illustrate, the resulting execution order below is: w1, b1, a1, b2, w2, a2, b3

```yaml title="Example with setup and after"
# my-template-a
spec:
  steps:
  - shell: echo a1
  after:
  - shell: echo a2

# my-template-b
spec:
  setup:
  - shell: echo b1
  steps:
  - shell: echo b2
  after:
  - shell: echo b3

# my-workflow-w
spec:
  use:
  - name: my-template-a
  - name: my-template-b
  setup:
  - shell: echo w1
  steps:
  - shell: echo w2
```

## Examples

### Official Templates

Testkube provides a set of official, ready to use Test Workflow Templates, which simplify running tests
using various popular tools. Below you can find a list of official Test Workflow Templates along with
example Test Workflows using them:

- Artillery [See Example](examples/artillery-basic.md#basic-artillery-from-template)
- Cypress [See Example](examples/cypress-basic.md#basic-cypress-from-template)
- Gradle [See Example](examples/gradle-basic.md#basic-gradle-from-template)
- JMeter
- K6 [See Example](examples/k6-basic.md#basic-k6-from-template)
- Maven [See Example](examples/maven-basic.md#basic-maven-from-template)
- Playwright [See Example](examples/playwright-basic.md#basic-playwright-from-template)
- Postman [See Example](examples/postman-basic.md#basic-postman-from-template)

### Close Istio Sidecar

This template adds a step after the steps in the including Workflow to close the Istio Sidecar

```yaml
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflowTemplate
metadata:
  name: close-istio
spec:
  after:
    - name: "Close Istio sidecar"
      condition: always
      shell: "touch /pod_control/job_finished"
```

Use as follows:

```yaml
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: overview--example-15
spec:
  use:
    - name: "close-istio"

  steps:
    - shell: "tree /usr/bin"
```

[inlining]: /articles/test-workflow-templates#understand-template-inlining
