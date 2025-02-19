# Working with Test Workflows

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

## Using the CLI

The Testkube CLI allows managing Test Workflows in the similar way as was previously possible for Tests and TestSuites.

### Create

```shell
testkube create testworkflow -f EXAMPLE_FILE.yaml
```

### Get
The Test Workflow details can be displayed using `testkube get testworkflow` command using the Test Workflow name:

```shell
testkube get testworkflow TEST_WORKFLOW_NAME
```

#### Filtering by Labels
Test Workflows can also be filtered using labels with `--label`:

```shell
testkube get testworkflow --label example=label
```

### Run
The Test Workflow can be run using the `testkube run testworkflow` command using Test Workflow name:

```shell
testkube run testworkflow TEST_WORKFLOW_NAME
```

Optionally, the follow option can be used to watch execution and get the log summary directly:

```shell
testkube run testworkflow TEST_WORKFLOW_NAME -f
```

### ReRun 
The Test Workflow can be rerun using the `testkube rerun twe` command providing Test Workflow execution id:

```shell
testkube rerun twe EXECUTION_ID
```

### Delete
The Test Workflow can be deleted using the `testkube delete testworkflow` command using the Test Workflow name:

```shell
testkube delete testworkflow TEST_WORKFLOW_NAME
```

### Alias
`tw` alias can be used instead of `testworkflow` - for example:

```shell
testkube get tw
```

:::tip
Check out the [Create Workflow Wizard](/articles/test-workflows-create-wizard) to help you create new Workflows
for your existing tests using in your Git Repositories.
:::
