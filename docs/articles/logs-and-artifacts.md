# Logs & Artifacts

## Log Collection

Testkube automatically collects logs from containers running tests within a Workflow and makes these available in
the Dashboard when open an execution and selecting the "Log Output" tab (which is the default):

![Workflow Log output](../img/workflows-log-output.png)

Logs are collected individually for each executed container within a workflow, and can thus be inspected separately:

![Workflow Multi-log output](../img/workflows-multilog-output.png)

## Artifact Collection

Workflows that produce artifacts can be configured to upload those to Testkubes Artifact storage - [Read More](test-workflows-artifacts). These 
could be, for example, videos, logs, html-reports, JUnit XML reports, etc. - anything that you want to make available
for inspecting or troubleshooting a test execution. 

Uploaded artifacts are available under the "Artifacts" folder:

![Workflow Artifacts](../img/workflows-artifacts-tab.png)

Clicking an individual artifact will either display that artifact inline or download it - depending on its content type.
For example, below shows the HTML report available in the screenshot above:

![Rendered Workflow HTLM Artifact](../img/workflows-htlm-artifact.png)

:::tip

You can retrieve logs and artifacts using the Testkube CLI also using the [get testworkflowexecution](/cli/testkube_get_testworkflowexecution).
and [get artifact](/cli/testkube_get_artifact) commands.
:::





