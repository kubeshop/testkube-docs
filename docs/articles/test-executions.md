# Testkube Execution CRDs

Testkube allows you to automatically trigger the execution of Test, Suites and Test Workflows by creating or 
updating corresponding Test, Test Suite or Test Workflow Execution CRDs.

:::info
Please note that Tests and Test Suites are being deprecated - [Read more](/articles/legacy-features)
:::

## What are Testkube Execution CRDs?

In generic terms, an _Execution_ defines a _test_, _testsuite_ or _testworkflow_ which will be executed when 
CRD is created or updated. For example, we could define a _TestExecution_ which _runs_ a _Test_ when 
a _TestExecution_ gets _modified_.

#### Selecting Resource

Names are used when we want to select a specific resource. 

```yaml
test:
  name: Testkube test name
```

or 

```yaml
testSuite:
  name: Testkube test suite name
```

or 

```yaml
testWorkflow:
  name: Testkube test workflow name
```

### Execution Request

An Execution Request defines execution parameters for each specific resource.

## Example

Here are examples for a **Test Execution** *testexecution-example* which runs the **Test** *test-example*
when the **Test Execution** is created or updated, a **Test Suite Execution** *testsuiteexecution-example* 
which runs the **Test Suite** *testsuite-example* when the **Test Suite Execution** is created or updated
and a **Test Workflow Execution** *testworkflowexecution-example* which runs the **Test Workflow** *testworkflow-example*
when the **Test Workflow Execution** is created or updated

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

:::tip
Check out the [TestWorkflowExecution CRD Reference](/articles/crds/testworkflows.testkube.io-v1#testworkflowexecution)
:::

```yaml
apiVersion: tests.testkube.io/v1
kind: TestExecution
metadata:
  name: testexecution-example
spec:
  test:
    name: test-example
  executionRequest:
    variables:
      VAR_TEST:
        name: VAR_TEST
        value: "ANY"
        type: basic
```

```yaml
apiVersion: tests.testkube.io/v1
kind: TestSuiteExecution
metadata:
  name: testsuiteexecution-example
spec:
  testSuite:
    name: testsuite-example
  executionRequest:
    variables:
      VAR_TEST:
        name: VAR_TEST
        value: "ANY"
        type: basic
```

### Targeting specific Runners

With the introduction of [Multi-Agent Environments](/articles/install/multi-agent) you can optionally specify
which Runner(s) a Workflow should execute on. For example

```yaml
...
spec:
  executionRequest:
    target:
      match: 
       - application: accounting
...
```

Will run on any Global Runner with the `application: accounting` label, For more details,
see our guide on [Runner Targeting](/articles/install/multi-agent#targeting-runners-in-testkube-resources).

:::note
This is only supported for `TestWorkflowExecution` CRDs since the Multi-Agent Runners do not support Tests or Suites.
:::

## Architecture

Testkube uses a Kubernetes Operator to reconcile Test, Test Suite and Test Workflow Execution CRDs state and run the corresponding test, test suite and test workflow when resource generation is changed.
