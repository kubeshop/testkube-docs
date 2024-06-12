# Logs & Artifacts

## Log Collection

Testkube automatically collects logs from containers running tests within a Workflow and makes these available in
the Dashboard when open an execution and selecting the "Log Output" tab (which is default):

![Workflow Log output](../img/workflows-log-output.png)

Logs are collected individually for each executed container within a workflow, and can thus be inspected separately:

![Workflow Multi-log output](../img/workflows-multilog-output.png)

## Artifact Collection

Workflows that produce artifact can be configured to upload those to Testkubes Artifact storage - read more. These 
could for example be videos, logs, html-reports, JUnit XML reports, etc. - anything that you want to make available
for inspecting / troubleshooting a test execution. 

Uploaded artifacts are available under the "Artifacts" folder:

![Workflow Artifacts](../img/workflows-artifacts-tab.png)

Clicking an individual artifact will either display that artifact inline or download it - depending on its content type.
For example, below shows the HTML report available in the screen-shot above:

![Rendered Workflow HTLM Artifact](../img/workflows-htlm-artifact.png)






