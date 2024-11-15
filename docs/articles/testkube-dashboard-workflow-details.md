# Workflow Details

Selecting a Workflow in the Workflows Overview reveals a number of tabs to work with the selected Workflow.

## Overview Tab

Shows details for the latest execution of the Workflow, selecting an item will open the corresponding log tab in 
the [Execution Details](testkube-dashboard-execution-details).

![Overview](../img/workflow-details-overview-092024.png)

Click **Open Detail & Logs** to see the [Execution Details](testkube-dashboard-execution-details).

## Executions Tab

The **Executions** tab has the list of the workflow executions together with corresponding high-level
execution metrics. 

A green checkmark denotes a successful execution, a red 'x' denotes a failed execution and circling dots denotes a current run.

![Executions](../img/workflow-details-executions-092024.png)

Selecting a specific execution will open the corresponding [Execution Details](testkube-dashboard-execution-details)
panels.

## CLI Commands Tab

The **CLI Commands** tab shows commands you can run to interact with the Workflow using the [Testkube CLI](/articles/cli):

![CLI Commands](../img/workflows-cli-commands-092024.png)

## Workflow Settings Tabs

The **Settings** tab contains a number of panels for configuring your Workflow.

:::info
Most of the settings in these panels can be configured directly in the Workflow YAML under the Definition panel (see below). 
:::

### General Settings

The General Settings allow you to update the following for your Workflow:

- **Test Workflow name**: Update the description for this Workflow.
- **Labels**: Labels that you want to add to this Workflow for filtering/searching/etc.
- **Timeout**: The execution timeout for this Workflow.

:::info
Due to Kubernetes constraints, it is not possible to change the name of a Workflow.
You need to create a copy of the Workflow with the new name and delete the old Workflow instead.
:::

Below these settings there are actions to:

- Delete the Workflow
- Purge past executions: frees up database/storage space if you have a large number old executions for this Workflow

![Settings](../img/workflows-settings-092024.png)

### Execution Settings

:::warning

The execution settings only apply for Workflows that use a single image and step. It is generally recommended to
edit the Workflow YAML directly in the Definition panel to ensure that changes are compatible with any 
other constructs in your Workflow

:::

The execution settings allow you to define which Docker image/tag, corresponding command and working directory to use to run your tests.

![Execution Settings](../img/execution-settings-092024.png)

### Test Content Settings

:::tip

These settings only apply for Workflows that use a content source for their tests. Use the Definition panel to 
edit the Workflow YAML directly if your Workflow uses more than one source for it's tests.

:::


![Test Content Settings](../img/test-content-settings-092024.png)

### Resource Usage Settings

:::tip

These settings set global limits for resource usage within your Workflow - if you want to fine-tune these
limits per image or Workflow step you can do this directly in the Workflow YAML under the Definition panel.

:::

![Resource Usage Settings](../img/resource-usage-settings-092024.png)

### Variables and Secrets

This panel allows you to configure global variables and secrets used by your Workflow.

![Variables & Secrets Settings](../img/variables-and-secrets-settings-092024.png)

### Resource Group

This panel allows you to assign this Workflow to a Resource Group - [Read More](/articles/resource-groups#managing-resources-in-a-resource-group)

![Workflow Resource Group](images/workflow-resource-group.png)

### Scheduling

:::tip

This panel allows you to configure a single schedule for your Workflow - if you want to define
multiple schedules you can do this directly in the Workflow YAML under the Definition panel.

Read more about Workflow Scheduling in the [Scheduling Workflows](/articles/scheduling-tests) article.
:::

Use this panel to define a single execution schedule for your Workflow.

![Scheduling Settings](../img/scheduling-settings-092024.png)

### Definition

This panel provides a powerful YAML editor for editing your Workflows - [Read More](testkube-dashboard-workflow-editor). 

![Definition Settings](../img/definition-settings-092024.png)

## CI/CD Integrations Tab

The **CI/CD Integration** tab shows how to integrate the Workflow with common CI/CD tools, with 
ready-to-use examples for each tool.

![CI/CD Integration](../img/workflows-cicd-integrations-092024.png)

:::tip
Read more about these and other available integrations under the [Integrations](/articles/integrations) section.
:::
