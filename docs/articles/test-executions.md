# Testkube Execution CRDs

Testkube allows you to automatically trigger the execution of a Test Workflow by creating or 
updating a corresponding Test Workflow Execution CRD.

## Usage

The below example **TestWorkflowExecutionn** `testworkflowexecution-example` runs the **Test Workflow** `testworkflow-example`
when the **TestWorkflowExecution** is created or updated

```yaml
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflowExecution
metadata:
  name: testworkflowexecution-example
spec:
  testWorkflow:
    name: testworkflow-example
```

:::tip
Check out the [TestWorkflowExecution CRD Reference](/articles/crds/testworkflows.testkube.io-v1#testworkflowexecution)
:::

## Specifying Configuration Parameters

Add configuration parameters to the execution request to override the default values set in the Test Workflow using
the `spec.executionRequest.config` field. 

The below example runs the TestWorkflow with the `browser` configuration parameter set to `chrome`

```yaml
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflowExecution
metadata:
  name: testworkflowexecution-example
spec:
  testWorkflow:
    name: testworkflow-example
  executionRequest:
    config:
      browser: "chrome"
```

Read more about configuration parameters at [Test Workflow Parameterization](/articles/test-workflows-examples-configuration).

## Adding Execution Tags

The below example adds a tag `source: ci` to the Test Workflow Execution.

```yaml
apiVersion: tests.testkube.io/v1
kind: TestSuiteExecution
metadata:
  name: testsuiteexecution-example
spec:
  testSuite:
    name: testsuite-example
  executionRequest:
    tags:
      source: "ci"
```

Read more about execution tags at [Filtering Test Workflow Executions Using Tags](/articles/filtering-test-workflow-executions-using-tags).


## Targeting specific Runner Agents

With the introduction of [Runner Agents](/articles/agents-overview#runner-agents) you can optionally specify
which Runner(s) a Workflow should execute on. For example

```yaml
...
spec:
  executionRequest:
    target:
      match:
        application:
          - accounting
...
```

Will run on any Global Runner Agent with the `application: accounting` label, For more details, see our guide on [Runner Agent Targeting](/articles/test-workflows-running#runner-agent-targeting).

