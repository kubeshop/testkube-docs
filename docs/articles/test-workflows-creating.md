# Test Workflows CLI Commands 

Test Workflows can be created and managed either through the [Testkube CLI](/articles/cli) or from the 
[Dashboard](/articles/testkube-dashboard-workflows-overview).

:::tip

Since Workflows are ultimately stored as custom resources in your clusters ([Read More](/articles/crds)), you can
also manipulate them directly using `kubectl`, for example `kubectl apply` can be used
to create a Workflow:

```shell
kubectl apply -f EXAMPLE_FILE.yaml
```
:::

## Create

```shell
testkube create testworkflow -f EXAMPLE_FILE.yaml
```

:::tip
Check out the [Create Workflow Wizard](/articles/test-workflows-create-wizard) to help you create new Workflows
for your existing tests using in your Git Repositories.
:::

## Get
The Test Workflow details can be displayed using `testkube get testworkflow` command using the Test Workflow name:

```shell
testkube get testworkflow TEST_WORKFLOW_NAME
```

### Filtering by Labels
Test Workflows can also be filtered using labels with `--label`:

```shell
testkube get testworkflow --label example=label
```

## Run
The Test Workflow can be run using the `testkube run testworkflow` command using Test Workflow name:

```shell
testkube run testworkflow TEST_WORKFLOW_NAME
```

Optionally, the follow option can be used to watch execution and get the log summary directly:

```shell
testkube run testworkflow TEST_WORKFLOW_NAME -f
```

## ReRun 
The Test Workflow can be rerun using the `testkube rerun twe` command providing Test Workflow execution id:

```shell
testkube rerun twe EXECUTION_ID
```

## Workflow Execution Status

Check the status of your Test Workflow execution using the Testkube CLI. For example:

```sh
kubectl describe testworkflow k6-workflow -n testkube
```

A sample output might look like this:

```
Name:         k6-workflow
Namespace:    testkube
Labels:       core-tests=workflows
Annotations:  <none>
API Version:  testworkflows.testkube.io/v1
Kind:         TestWorkflow
Metadata:
  Creation Timestamp:  2024-05-13T17:28:05Z
  Generation:          1
  Resource Version:    1077632
  UID:                 ec1b58af-6226-4100-8b3c-d15f855f5a89
Spec:
  Container:
    Resources:
      Requests:
        Cpu:      128m
        Memory:   128Mi
    Working Dir:  /data/repo/test/k6/executor-tests
  Content:
    Git:
      Paths:
        test/k6/executor-tests/k6-smoke-test.js
      Revision:  main
      Uri:       https://github.com/kubeshop/testkube
  Steps:
    Name:  Run test
    Run:
      Args:
        run
        k6-smoke-test.js
        -e
        K6_ENV_FROM_PARAM=K6_ENV_FROM_PARAM_value
      Env:
        Name:   K6_SYSTEM_ENV
        Value:  K6_SYSTEM_ENV_value
      Image:    grafana/k6:0.43.1
Status:
  Latest Execution:
    Id:      6659fd8455d94f735273fa95
    Name:    k6-workflow-15
    Number:  15
    Result:
      Duration:           7.824s
      Duration Ms:        7824
      Finished At:        2024-05-31T16:40:44Z
      Paused Ms:          0
      Predicted Status:   passed
      Queued At:          2024-05-31T16:40:36Z
      Started At:         2024-05-31T16:40:36Z
      Status:             passed
      Total Duration:     7.824s
      Total Duration Ms:  7824
    Scheduled At:         2024-05-31T16:40:36Z
    Status At:            2024-05-31T16:40:44Z
    Workflow:
      Labels:
        Core - Tests:  workflows
      Name:            k6-workflow
      Namespace:       testkube
```

## Delete
The Test Workflow can be deleted using the `testkube delete testworkflow` command using the Test Workflow name:

```shell
testkube delete testworkflow TEST_WORKFLOW_NAME
```

## Using `tw` Alias

The `tw` alias can be used instead of `testworkflow` in all of the commands shown above, for example:

```shell
testkube get tw
```
