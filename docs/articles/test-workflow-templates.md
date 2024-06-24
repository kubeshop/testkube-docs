# Test Workflow Templates

Test Workflow Templates allow you to define common properties/traits that you can reuse 
consistently across your TestWorkflows. 

For example, with Test Workflow Templates you can easily 
- define specific ENV variables to be passed to all containers.
- define a common Git Source for your tests.
- define common setup or tearDown steps for your tests.
- define specific commands or images to use for your tests, while still allowing a Test Workflow to set
  the version of the testing tool.
- etc.

## How do they work?

A TestWorkflowTemplate definition follows the same structure as a Test Workflow, with the additional
ability to define configuration parameters that can be specified when the template is used.

TestWorkflowTemplates are "merged" into a referring Test Workflow at run-time and the 
resulting Test Workflow is executed by Testkube.

For example, the template below defines the basics for running a k6 test, with parameters for which
k6 version to use and which parameters to pass to k6:

```yaml
kind: TestWorkflowTemplate
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: example-template--k6 # Template name (mandatory) - example-template/k6
spec:
  config: # default config values
    version:
      description: k6 version to use
      type: string
      default: 0.49.0
    params:
      description: Additional params for the k6 run command
      type: string
      default: ""
  steps: # steps to be executed
  - name: Run k6 tests
    container:
      image: grafana/k6:{{ config.version }} # default values are assigned
    shell: k6 run {{ config.params }}
```

The template can then be "used" in a corresponding Test Workflow step:

```yaml
steps:
  - name: Run from template
    workingDir: /data/repo/test/k6/executor-tests
    template: # template will be executed here
      name: example-template/k6 # template name
      config: # template config - values passed to Test Workflow Template
        version: 0.48.0 # version override
        params: "k6-smoke-test-without-envs.js"
```

Full example:

```yaml
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: k6-example-from-template
spec:
  container:
    resources:
      requests:
        cpu: 128m
        memory: 128Mi
    workingDir: /data/repo/test/k6/executor-tests
  content:
    git:
      uri: https://github.com/kubeshop/testkube
      revision: main
      paths:
      - test/k6/executor-tests/k6-smoke-test-without-envs.js
  steps:
  - name: Run from template
    workingDir: /data/repo/test/k6/executor-tests
    template: # template will be executed here
      name: example-template/k6 # template name
      config: # template config - values passed to Test Workflow Template
        version: 0.48.0 # version override
        params: "k6-smoke-test-without-envs.js"
```

## Usage / Expansion

*There are 3 ways to include the TestWorkflowTemplate, that differ with the level of isolation (or rather - expansion).*

### Top Level - `Use`

A template can be included with the top-level use (array) clause - this way it will be included in the TestWorkflow, and all its defaults will be available in the whole TestWorkflow.

*This is the only place where constructs like Job and Pod setup can be specified.*

### Step Level - `Use`

When the template is included with use (array) on step level, all its defaults and steps will be included only for the step it’s included in.

### Step Level - `Template`

If you want to have a full isolation, so that no defaults will be expanded anywhere else (i.e., common envs for execution), you can use template (object) instruction. It’s not expanding any defaults outside the step.

## Multiple Inheritance

You may use multiple templates in a single TestWorkflow. Thanks to that, you can reuse each behavior 
separately. As an example, you may want to:

- Provide a template for common Cypress usage.
- Provide a template for closing Istio sidecar.
- Provide a template to attach labels per company department.
- Provide access to a data source.

<!-- # Example Test Workflow Templates // TODO: update (official templates are moved to helm-charts repository with helm-specific escaping)
Example Test Workflow Templates can be found in the Testkube repository:

- [Cypress](https://github.com/kubeshop/testkube/blob/develop/test/test-workflow-templates/cypress.yaml)
- [k6](https://github.com/kubeshop/testkube/blob/develop/test/test-workflow-templates/k6.yaml)
- [postman](https://github.com/kubeshop/testkube/blob/develop/test/test-workflow-templates/cypress.yaml) -->

## Official Test Workflow Templates

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

## More examples

### Close Istio Sidecar

This template adds a step after the steps in the including Workflow to close the Istio Sidecar

```yaml
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflowTemplate
metadata:
  name: close-istio
spec:
  after:
  - name: 'Close Istio sidecar'
    condition: always
    shell: 'touch /pod_control/job_finished'
```    

Use as follows:

```yaml
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: overview--example-15
spec:
  use:
  - name: 'close-istio'

  steps:
  - shell: 'tree /usr/bin'
```

