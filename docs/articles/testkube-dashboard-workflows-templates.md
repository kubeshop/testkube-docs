# Workflow Templates

:::info

Workflow Templates provide a powerful mechanism for defining shared / reusable Workflow configurations - [Read More](/articles/test-workflow-templates)

:::

Under the **Workflow Templates** tab, you will find a list of available Workflow Templates in your environment.

![Workflow Templates](../img/workflow-templates-072024.png)

Just like with Workflow - you can toggle between grid and list layouts:

TODO: screenshot of Workflow Templates list layout

## Workflow Template Settings

Selecting a Workflow Template opens the Settings tab for the Template:

TODO: screenshot of Workflow Template Settings

The General settings shown above allow you to specify the name and description of the template, and below that
shows an example of how to use this template in a workflow.

The Definition pane allows you to edit the Workflow Template.

TODO: screenshot of Workflow Template Definition panel 

:::warn

Remember that changing your templates will affect all Workflows that use them - be sure to not break any usage!

:::

## Adding a new Workflow Template

Click the **Add a new template** button in the Workflows Template overview (shown above) to create a new Workflow Template. 
The options are:

- **Git content**: Create a template to use a git source across multiple test workflows.
- **Static content**: Create a template to use a static file across multiple test workflows.
- **Testing tool**: Create a template with a
container/runnable testing tool across to base your test workflows on.
- **Import from YAML**: Create a template from scratch or copy/paste YAML examples.

![Add a New Template](../img/add-new-workflow-template-072024.png)

### Creating a Git Content Template

The Git Content template wizard helps you create a Workflow Template that you can use across your workflows to ensure
they are all using the same Git Source as their content.

TODO: screenshot of the Git Content Template wizard

### Creating a Static Content Template

The Static content template wizard helps you create a Workflow Template that you can use across your workflows to ensure 
they are all using the same static content in corresponding scenarios.

TODO: screenshot of the Static Content Template wizard

### Creating a Testing Tool Template

The Testing Tool template wizard helps you create a Workflow Template that you can use across your workflows to ensure
they are all using a specific testing tool or script in a consistent way.

TODO: screenshot of the Testing Tool Template wizard

### Creating a Template from YAML Content 

This wizard allows you to paste or create any Workflow Template from YAML.

TODO: screenshot of the Import from YAML Template wizard
