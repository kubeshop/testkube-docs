import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import SimplePlaywright from "../../workflows/simple-playwright-workflow.md"

# Basic Playwright Framework Example

Below is a basic workflow for executing a Playwright project which is available
on GitHub. You can paste this directly into the YAML of an existing or new test, just make
sure to update the `name` and `namespace` for your environment if needed.

- The `spec.content` property defines the location of the GitHub project
- the `spec.steps` property defines a single step that runs the test and uploads the created reports.

<SimplePlaywright/>

After execution, you can see the output from the test executions under the executions panel tabs:

<Tabs>
<TabItem value="logs" label="Log Output" default>

The log output from the Playwright Framework execution:

![Playwright Framework Log Output](images/basic-playwright-log-output.png)

</TabItem>
<TabItem value="artifacts" label="Artifacts" default>

The uploaded report is available in the Artifacts tab:

![Playwright Framework Artifacts](images/basic-playwright-artifacts.png)

</TabItem>

<TabItem value="htlm-report" label="HTLM Report" default>

Clicking the HTLM report opens it in your browser:

![Playwright Framework HTLM Report](images/basic-playwright-html-report.png)

</TabItem>
</Tabs>

