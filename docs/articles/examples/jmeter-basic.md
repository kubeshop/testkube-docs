import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import SimpleJMeter from "../../workflows/simple-jmeter-workflow.md"

# Basic JMeter Framework Example

Below is a basic workflow for executing a JMeter test which is available
on GitHub. You can paste this directly into the YAML of an existing or new test, just make
sure to update the `name` and `namespace` for your environment if needed.

- The `spec.content` property defines the location of the GitHub project
- the `spec.steps` property defines a single step that runs the test and uploads the created reports.

<SimpleJMeterFramework/>

After execution, you can see the output from the test executions under the executions panel tabs:

<Tabs>
<TabItem value="logs" label="Log Output" default>

The log output from the JMeter Framework execution:

![JMeter Framework Log Output](images/basic-jmeter-framework-log-output.png)

</TabItem>
<TabItem value="artifacts" label="Artifacts" default>

The uploaded report is available in the Artifacts tab:

![JMeter Framework Artifacts](images/basic-jmeter-framework-artifacts.png)

</TabItem>
</Tabs>

