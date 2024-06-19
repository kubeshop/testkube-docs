import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import SimpleCurl from "../../workflows/simple-curl-workflow.md"

# Basic Curl Example

Below is a basic workflow for executing a Curl command. You can paste this directly into the YAML of an existing or new test, just make
sure to update the `name` and `namespace` for your environment if needed.

- the `spec.steps` property defines a single step that runs the `curl` command.

<SimpleCurl/>

After execution, you can see the output from the executions under the executions panel tabs:

<Tabs>
<TabItem value="logs" label="Log Output" default>

The log output from the Curl execution:

![Curl Log Output](images/basic-curl-log-output.png)

</TabItem>
</Tabs>

