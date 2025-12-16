# Workflow Details

**Workflow Details** provides a central location to run, monitor, and configure the Workflows in your **Environmwent**.

![Workflow Details](../articles/images/workflow-details-select-workflow.png)


## Running a Workflow

After you select a Workflow, you can view its details via the **Overview**, **Executions**, **CLI Commands**, **CI/CD Integration**, and **Settings** tabs.
You can also access **Run now** (top right) to run the Workflow immediately. The **Run now** drop-down list box
includes **Run as silent execution**. You can select this checkbox to run silent executions, which do not trigger webhooks, events, or metrics collection.

![Run Now](images/workflow-details-run-now.png)

:::tip
A **Runner Agent** acts as the test execution engine and runs within the Kubernetes cluster to spin up pods, facilitate the testing defined in Testkube, 
and report results. You can use multiple **Runner Agents** in your **Environment**. For additional information, read [Runner Agents](/articles/agents-overview#runner-agents). 
:::

## Overview Tab

The **Overview** tab displays **Test Execution Insights for the Last Week** to include the **Pass/Fail Ratio**, **Failed Executions**, **Total Executions**, **Average Duration**, and **P95 Duration**.

![Overview](../articles/images/workflow-details-overview.png)

Upon selection, the **Resource Usage**, **Artifacts** and **Content Sources** icons (middle page) display additional Workflow details.

![Resource Usage, Artifacts, Content Sources](../articles/images/workflow-details-overview-icons-middle.png)

More results are available (lower page) along with a Reports visualization option.

![Overview More Results](../articles/images/workflow-details-overview-lower-more-results.png)

## Executions Tab

The **Executions** tab displays **Test Execution Insights for the Last Week** along with **Search** and **Add a filter**. You can hover over each
bar within the bar chart to reveal additional metrics.

![Execution Details](../articles/images/workflow-details-executions.png)

You can identify and select a Workflow execution then choose More Options (three vertical dots) to view and make other selections.

![Execution – More Options](../articles/images/workflow-details-executions-more-options.png)

You can also select an Execution from the list to view Execution-specific details. These details open in a new modal that contains **Log Output**, **JUnit Reports**, **Artifacts**, **Resource Usage**, **Flowchart**, **CLI Commands**,
**Events**, and **Workflow Definition** tabs. **Run again** allows you to re-execute the Workflow.

![Executions – Select More Tabs](../articles/images/workflow-details-executions-select-for-more-tabs.png) 

### Multi-Agent Executions

For executions run on multiple agents using [Runner Agents](/articles/agents-overview#runner-agents),
an expandable section includes those executions. Use the arrows to expand and collapse the contained executions. 

![Multi-agent Executions List](images/multi-agent-executions-list.png)


## CLI Commands Tab

The **CLI Commands** tab displays CLI commands you can run to interact with the Workflow directly from the command line. You can execute **Run Test Workflow**, **Get Test Workflow**,
**List Executions**, and **Delete Test Workflow**. For additional information, read [Testkube CLI](/articles/cli).

![CLI Commands](../articles/images/workflow-details-cli-commands.png)

## CI/CD Integrations Tab

The **CI/CD Integration** tab provides insight into how to trigger the Workflow from common CI/CD tools and includes ready-to-use examples for each.
For additional information, read [Testkube Integrations Overview](/articles/integrations).

![CI/CD Integration](../articles/images/workflow-details-ci-cd-integration.png)

## Workflow Settings Tabs

The **Settings** tab comprises **General**, **Execution**, **Test Content**, **Resource Usage**, **Variables & Secrets**, **Resource Group**,
**Scheduling**, and **Definition**. You can leverage each setting to configure the Workflow, impacting its behavior. You can configure most **Settings**
directly in the Workflow via **Definition**.

![General](../articles/images/workflow-details-settings-general.png)

### General

The **General** setting allows you to update:

* **Test Workflow name** – Title or designation you use to identify Workflow.
* **Labels** – Tag you add to Workflow for actions such as filtering and searching.
* **Timeout** – Workflow execution expiration.

**General** also allows you to **Delete this Test Workflow** and **Purge Past Executions**; the latter makes database/storage space available
if you have a large number of old executions for this Workflow.

Due to Kubernetes constraints, it is not possible to change the Workflow name.
Instead, you must create a copy of the Workflow with the new name and delete the old one.

### Execution

:::warning

The **Execution** setting only applies to Workflows that use a single image and a single step – generally recommended when
editing the Workflow YAML directly in the **Definition** setting to ensure changes are compatible with 
other constructs in your Workflow.

:::

The **Execution** setting allows you to define **Container configuration** which includes the **Image**, **Tag**, **Command**, and **Args** along with the **Working directory**.
Collectively, you can use these settings to run your tests.

![Execution Settings](../articles/images/workflow-details-settings-execution.png)

### Test Content

The **Test Content** setting only applies to Workflows that use a content Source for their tests. Use the **Definition** setting to 
edit the Workflow YAML directly if your Workflow uses more than one Source for its tests.

![Test Content Settings](../articles/images/workflow-details-settings-test-content.png)

### Resource Usage

The **Resource Usage** setting allows you to establish **CPU**, **Memory**, and **Ephemeral Storage** for **Resource Limits** and **Resource Requests**.

The **Resource Usage** setting establishes global limits for resource usage within your Workflow. If you want to fine-tune these
limits per image or Workflow step, you can do so directly in the Workflow YAML via the **Definition** setting.

![Resource Usage Settings](../articles/images/workflow-details-settings-resource-usage.png)

### Variables and Secrets

The **Variables & Secrets** setting allows you to define global variables and secrets that are used throughout the Workflow.
You can also reference global credentials created at the **Organization** or **Environment** level.

![Variables & Secrets Settings](../articles/images/workflow-details-settings-variables-and-secrets.png)

### Resource Group

The **Resource Group** setting allows you to assign this Workflow to a Resource Group. For additional information, read [Resource Groups](/articles/resource-groups#managing-resources-in-a-resource-group).

![Resource Group](../articles/images/workflow-details-settings-resource-group.png)

### Scheduling

The **Scheduling** setting allows you to configure a single schedule for your Workflow. If you want to define
multiple schedules, you can do so directly in the Workflow YAML via the **Definition** setting.

For additional information, read [Scheduling Workflows](/articles/scheduling-tests).

![Scheduling Settings](../articles/images/workflow-details-settings-scheduling.png)

### Definition

The **Definition** setting provides a powerful YAML editor for editing your Workflows. For additional information, read [Workflow YAML Editor](testkube-dashboard-workflow-editor). 

![Definition Settings](../articles/images/workflow-details-settings-definition.png)
