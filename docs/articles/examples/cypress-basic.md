import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import SimpleCypress from "../../workflows/simple-cypress-workflow.md"

# Basic Cypress Framework Example

Below is a basic workflow for executing a Cypress project which is available
on GitHub. You can paste this directly into the YAML of an existing or new test, just make
sure to update the `name` and `namespace` for your environment if needed.

- The `spec.content` property defines the location of the GitHub project
- the `spec.steps` property defines a single step that runs the test and uploads the created reports.

<SimpleCypressFramework/>

After execution, you can see the output from the test executions under the executions panel tabs:

<Tabs>
<TabItem value="logs" label="Log Output" default>

The log output from the Cypress Framework execution:

![Cypress Framework Log Output](images/basic-cypress-framework-log-output.png)

</TabItem>
<TabItem value="artifacts" label="Artifacts" default>

The uploaded report is available in the Artifacts tab:

![Cypress Framework Artifacts](images/basic-cypress-framework-artifacts.png)

</TabItem>

</Tabs>

