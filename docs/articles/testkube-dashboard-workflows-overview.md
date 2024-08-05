# Workflows Overview

:::info

Test Workflows are Testkubes way of defining how to execute your tests - [Read More](/articles/test-workflows)

:::

The Workflows Overview displays all Workflows in your currently selected Environment, including
their latest and overall execution status.

Use the Search box and the Labels and Status filters to easily locate certain workflows.

![Workflow Search Filter](../img/workflow-search-filter-072024.png)

You can also switch from the Grid view to a Table view of all workflows in the selected environment.

![Workflow Search Filter](../img/workflow-table-view-072024.png)

## Creating a New Workflow

Selecting the "Add new test workflow" button on the top right opens the following dialog:

![Create Test Workflow](../img/create-test-workflow.png)


The different options are described below.

### Creating a Workflow Using the Wizard

This wizard will walk you through creating a Workflow to run your tests, broken down into the following 4 steps:

1) The Name and testing tool/template to use, with corresponding settings
2) The Content of the test to run
3) The actual command to run your test and from where Testkube should scrape the generated artifacts
4) A Summary showing the creating Workflow YAML

#### Workflow Name & Type

The first page shown below prompts you for:

- **Name**: the name of your workflow
- **Labels**: optional labels you want to add to your workflow, helpful for searching/filtering/reporting
- **Template**: which testing tool to use in this workflow 

![Create Test Workflow Wizard](../img/create-test-workflow-wizard.png)

The options below this will depend on which Testing Tool you select, default values are shown in grey - override
if you need to (for example the default Artillery version is 2.0.9 in the screenshot above)

Selecting **Next** moves you to the next page of the Wizard.

#### Workflow Content

This page allows you to optionally specify the testing script/content that will be executed by the Testing Tool/Template
selected in the first step. Selecting one of the options will show its corresponding settings, for example in 
the screenshot below the Git option has been selected, prompting for the corresponding Git properties.

![Workflow Git Option](../img/workflow-git-option.png)


Selecting Next moves you to the next page of the Wizard.

#### Workflow Run Command and Artifacts

This page specifies which command to use to actually run your tests with the specified testing tool
and test content.

![Test Workflow Wizard Run Page](images/testworkflow-wizard-run-page.png)

Here you can also specify: 

- **Execution Directory**: in which directory of the retrieved content to run the command (only applies if you used a Git Source)
- **Artifacts**: where Testkube can find artifacts created by your testing tool (reports, videos, etc.).
- **Environment Variables**: any environment variables that need to be passed to your testing tool for test execution

Selecting Next moves you to the last page of the Wizard.

#### Worklow Summary

This shows the generated Workflow YAML based on all the input provided in the previous steps. You can 
make adjustments to the YAML as needed, or go back to the previous steps to update accordingly.

![Test Workflow Wizard Summary](images/testworkflow-wizard-summary-page.png)

Use the "Inline Template Definitions" checkbox in the bottom left to inline any used Templates into the generated YAML

![Test Workflow Wizard Summary with inline Template](images/testworkflow-wizard-summary-expanded-template.png)

:::tip

Use this option if you want to make more detailed changes to how the underlying testing tool is used and that won't 
affect other workflows using the same template.

:::

When you're happy with the created Workflow select either "Create & Run" or just "Create" from the button in the bottom 
right to create your Workflow.

### Creating a Workflow from an Example

Use this option if you want to start from one of Testkubes many example Workflows which you can then further modify
for your specific needs.

![Workflow from Example](../img/workflow-from-example.png)


- The selector at the top allows you to filter which examples are shown
- The list in the middle shows the available examples
- The YAML at the bottom shows the selected example 

You can edit the selected example before using either the Create or Create & Run option to create it. 

:::tip

You will most likely want to change the name of the created workflow, do this by updating the 
`metadata.name` property in the YAML example before creating the Workflow.

:::

### Creating a Workflow by Combining Existing Workflows

This Wizard allows you to create a Workflow that orchestrates multiple existing Workflows to run either in sequence or parallel. 

![Combine Existing Workflows](../img/combine-existing-workflows.png)

Start by specifying the name and optional labels that you want to add to this workflow, then select the 
"Add the first workflow" button to select an initial workflow. Once added you can add more existing Workflows
and organize them to execute in any desired order/combination:

![Test Workflow Composite Workflow Wizard](images/testworkflow-composite-wizard.png)

Once done, select the Next button to see the corresponding YAML for your Workflow.

![Test Workflow Composite Workflow Wizard Summary](images/testworkflow-composite-wizard-summary.png)

Select either the Create or Create & Run option to create your workflow accordingly.

### Creating a Workflow from YAML

This final option allows you to paste/edit your Workflow YAML from scratch:

![Import from YAML Template Wizard](../img/import-from-yaml-template-wizard.png)

Once done, select either the Create or Create & Run option to create your workflow accordingly.
