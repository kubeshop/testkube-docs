# Explore the Testkube Dashboard

The Testkube Dashboard displays the current status of tests workflows executed in your environment.

![Testkube Dashboard](../img/dashboard-072024.png)

The toggles a the top of the screen (1) make it easy to choose the Organization and Environment you are working in.

The navigation on the left (2) of the screen includes links to toggle between:

- Home
- Test Workflows
- Integrations
- Insights
- Status Page
- Tests
- Test Suites
- Executors
- Sources
- Settings

Each of these will be described further in other pages.

You will see an overview of the Pass/Fail Ratio (3), the number of Failed Executions and the Total Executions.

Scroll to see the list of most recent executions (4).

These can be filtered by Test Workflow, Test and Test Suite (5).

Select a test from the list to see its details.

The modal that opens has the following tabs:

**Log Output:**

![Log Output](../img/workflows-log-output-072024.png)

**Artifacts:**

![Artifacts](../img/workflows-artifacts-tab-072024.png)

**Workflow:**

![Code](../img/workflows-code-072024.png)

Closing the modal reveals additional details about the workflow.

The **Overview** tab outlines the steps of the selected workflow.

![Overview](../img/workflows-overview-072024.png)

The **Executions** tab has the list of executions. A green checkmark denotes a successful execution, a red 'x' denotes a failed execution and circling dots denotes a current run.

![Executions](../img/workflows-execution-072024.png)

The **CI/CD Integration** tab shows any integrations used in the workflow.

![CI/CD Integration](../img/workflows-cicd-integrations-072024.png)

The **CLI Commands** tab shows the commands used to perform the selected test:

![CLI Commands](../img/workflows-cli-commands-072024.png)

Use the **Settings** tab to view or change the local settings of the workflow.

![Settings](../img/workflows-settings-072024.png)
