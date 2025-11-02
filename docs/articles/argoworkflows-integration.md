# Using Testkube with Argo Workflows

This document describes how you can use Testkube with [Argo Workflows](https://argo-workflows.readthedocs.io/). As a prerequisite, you should have a good understanding
of both Testkube and Argo Workflows.

:::tip
Have a look at the [Cloud Native Test Execution with Argo Workflows and Testkube](https://testkube.io/learn/cloud-native-test-execution-with-argo-workflows-and-testkube)
blog-post for an overview of Argo Workflows and how to integrate it with Testkube.
:::

## Creating a WorkflowTemplate for Testkube

Argo Workflows provides the concept of [WorkflowTemplates](https://argo-workflows.readthedocs.io/en/latest/workflow-templates/) to define reusable templates 
that you can use in Argo Workflows. 

The below WorkflowTemplate can be used to trigger any [Testkube CLI](/articles/cli) command:

```yaml
apiVersion: argoproj.io/v1alpha1
kind: WorkflowTemplate
metadata:
  name: testkube-template
spec:
  templates:
    - name: run-testkube
      container:
        image: "kubeshop/testkube-cli:latest"
        command: ["sh", "-c"]
        args:
          - |
            testkube set context --org-id {{workflow.parameters.org-id}} --env-id {{workflow.parameters.env-id}} -c cloud -k {{workflow.parameters.api-key}}
            testkube {{workflow.parameters.testkube-cli-command}}
```

In this WorkflowTemplate, we have defined:

- `templates.container.image`: the Testkube CLI image that will allow the execution of the Testkube command.
- `templates.container.args`: runs two commands:
  - `testkube set context` to set the correct Testkube context for your organization and environment.
  - `testkube <testkube-cli-command>` : runs a provided Testkube CLI command. 

The WorkflowTemplate expects the following parameters to be provided (see example below):
- `org-id`, `env-id` : Organization and Environment IDs for the Environment containing the Workflow to run, you can get these from
  the Agent Information section of the Environment Settings - [Read More](/articles/environment-management#environment-connection).
- `api-key` : An API Token required to call the Testkube API through the CLI - [Read More](/articles/api-token-management).
- `testkube-cli-command` : the Testkube CLI command you want to run.

## Using the WorkflowTemplate

The below Argo Workflows Workflow uses the WorkflowTemplate defined above with corresponding parameters:

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Workflow
metadata:
  name: run-testkube-from-template
  generateName: testkube-test-1-
spec:
  entrypoint: get-testworkflow
  arguments:
    parameters:
    - name: org-id
      value: tkcorg_xxx  # Replace with your org-id
    - name: env-id
      value: tkcenv_xxx  # Replace with your env-id
    - name: api-key
      value: tkcapi_xxx  # Replace with your api-key
    - name: testkube-cli-command
      value: run testworkflow advanced-acceptance-test --watch # Replace with command to be run
  templates:
    - name: get-testworkflow
      steps:
        - - name: execute-testkube
            templateRef:
              name: testkube-template
              template: run-testkube
```

The actual Testkube CLI command specified will run the `advanced-acceptance-test` Workflow and wait for it to
finish, allowing Argo Workflows to capture the output of the test execution for further processing.
