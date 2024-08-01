# Workflow YAML Editor

This Definition panel under the Workflow settings provides a powerful YAML editor for editing your Workflows. 

:::tip
The editor uses the same editing component as VS-Code, so any editing features you are
familiar with from there should apply here also.
:::

TODO: Screenshot of the Definition Settings panel

## Editor actions

The toolbar at the top right provides the following actions (left to right):

- Search - global search and replace functionality, with regex, capitalization, etc.
- Undo / Redo / Copy
- Inline templates - to help you understand how used templates "play into" your Workflow by showing a side-by-side
  diff view of your Workflow with and without expanded templates (see example below).
- Full-screen mode - opens the editor in a larger panel, helpful for editing larger Workflows.

Furthermore, the editor provides an F1-popup menu with an extensive list of editor actions:

TODO: screenshot of popup menu shown when F1 is pressed

Once you're happy with your changes, use the Save & Run option to the top right to immediately trigger an execution
after saving, the corresponding Execution Details will be opened automatically.

## Template Inlining

The below screenshot shows the Inline-Templates view in Full-screen mode

TODO: screenshot of inline templates in full-screen mode

## Workflow specific editor intelligence

The Workflow YAML editor in the Definition panel described above the has a number of 
features that help you work specifically with Workflow YAML:

### Documentation hovers 

Helps you understand the purpose/usage of the corresponding Workflow property.

TODO: screenshot for documentation hover in editor

### Autocomplete for applicable properties

Helps you craft valid Workflow YAMLs

TODO: screenshot for autocomplete for Workflow properties

### Error indicators for invalid properties

Helps you find and correct Workflow YAML errors

TODO: corresponding screenshot

### Autocomplete for template names

Helps you select valid template(s) used in your Workflows.

TODO: screenshot for template autocomplete

### Clickable Template references

Helps you navigate/open used templates for editing

TODO: corresponding screenshot

