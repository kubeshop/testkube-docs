# Working with Test Workflows

Test Workflows can be created and managed either through the [Testkube CLI](/articles/cli) or from the 
[Dashboard](/articles/testkube-dashboard-explore).

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

## Testkube Dashboard

The Testkube Dashboard provides an easy management interface for your Workflows; select 
Test Workflows icon in the left toolbar:

![menu test workflow icon](../img/dashboard-menu-workflows.png)

which takes you to the [Test Workflows Overview](/articles/testkube-dashboard-workflows-overview) which allows you to browse, run and manage
your available Workflows.

There is also a dedicated wizard for creating Workflows: 

![Workflow Creation Wizard](../img/create-test-workflow.png)

The wizard is described in detail in the [Dashboard Documentation](/articles/testkube-dashboard-workflows-overview#creating-a-new-workflow)
