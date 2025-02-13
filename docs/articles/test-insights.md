# Test Insights

Insights turns your Testkube executions into a real-time dataset you can analyze to better understand how you work.
This feature allows teams to track key performance indicators including the number
of test executions, pass/fail rates, execution durations, and more, all within a user-friendly Dashboard.

With Test Insights, DevOps and QA managers can quickly answer crucial questions that impact the testing
cycle and overall software quality, such as:

- Which tests take the longest to execute and why?
- Which tests have the highest failure rates?
- How do test performance metrics vary by type of test or by the tools used?
- How do key test execution metrics change over time?

By integrating Test Insights into your testing workflow, your team can leverage several benefits:

- **Enhanced Visibility:** Gain a clear overview of testing activities and outcomes, helping
  you manage and prioritize testing resources more effectively.
- **Data-Driven Decisions:** Make informed decisions about where to allocate efforts for improving
  test efficiency and reliability.
- **Improved Test Efficiency:** Identify and address inefficiencies in your testing process, leading
  to faster development cycles and higher quality software releases.

## Using Test Insights

The Insights is available in the top menu.
You will land on a default board with premade charts.
In the left bar you will find all your boards which contain your analysis.

## Boards

### Default Board: Execution Analysis

The default boards has three sections which all show data over the last month:

![Test Insights Execution Analysis by Workflows](images/insights-default-board.jpg)

The top part of the Execution Analysis module shows high-level execution metrics.

Underneath it you can find you can find a quick oerview of execution count duration.
You can either group your executions by status or workflow by using the selector.

Lastly, the execution efficiency analysis shows tests by execution time and frequency. Tests that
frequently run and take longer to execute appear in the top right quadrant, highlighting them as prime
candidates for optimization to reduce testing bottlenecks, improve cycle times and optimize infrastructure costs

### Organization Boards

Boards allows you to make a dashboard with many charts.
The benefit is that boards allows you to group your analysis.
From this quick overview you can quickly identify relevant analysis and drill down.

You can manage a board as follows:

**Create Board**: You can create a board by clicking on "Create new board".
After filling in details such as name and description, you can add your first analysis.

**Rearrange board**: Hover an analysis insight and in the top-right corner you can find a handle to drag and drop your analysis.
You can move it around to a new row or put it in front or behind another analysis. You can only add up to three analysis per row.
Responsiveness of boards are limited to larger screen sizes.

**Update Board**: You can go to the board's setting by clicking on the dotted menu. Here you can update both the name and the description.

**Delete Board**: You can go to the board's setting and delete the board in the danger zone at the bottom.
Your board and all analysis will be removed, no execution data will be deleted.

## Analysis

### The anatomy of the analysis editor

![The analysis editor](images/insights-analysis-editor.jpg)

At the top you can see a Period Selector.
You can choose to see the last day, week, month, quarter or any custom period.
The interval is automatically inferred depending on the size of the period.
A period less than two days will have an hourly interval, then daily, and up to weekly when looking at a quarter.

More to the right, you can see the Analysis Selector: it defaults to execution time series, but you can also use it for a scatterplot to analyse efficiency, pass/fail statistics and more.
Under the period and analysis selector you will find your selected chart with its controls on the right side.
The controls vary depending on the selected chart.

One shared control is the ability to filter executions. charts can however be filtered on workflow name, environment, status and labels.
The workflow names support regexes, so you could perfectly filter all workflows prefixed with `performance` by adding a `performancy.*` filter.
One limitation is that you currently cannot negate a filter literal yet.

### Executions Time Series

The execution time series allows you to analyse your executions over time.

**Controls**

The Executions Time Series chart allows you to filter your executions.
The x-axis will always be the time, whereas the y-axis is defined by your **Measure**. Currently, you can measure the execution count, duration or the JUnit case count.

You can use the **Aggregate** to decide how to treat multiple executions of the same workflow within each interval. For example, for the duration you can take the sum, average, minimum or maximum.

Lastly you can set a **Segment** which will break down your executions.
You can do this by the status to see which executions passed or failed,
by workflow name or by any of the labels found on the executions.

Let's put all of these controls together with an example:
You want to see if the content service is having more tests created over time.
You will want to **measure** the _JUnit Case Count_ and filter on the _app.kubernetes.io/component=content-service_ label.
Take a look at the resulting chart and see if there is an upwards trend. You can hover each individual segment to see which the biggest contributors are.

**Table View and Executions Drill Down**

Besides a graph view, the executions time series analysis also comes with a table view.
This is useful to see trend across a single segment.
Currently, segmentation within a graph is also limited to 25 largest segments.
For segmentation's with a high cardinality you can view the remaining segments within the table, which are most often too tiny too see within the Graph View.

You can click on either the segment name or a table cell value to drill down on the executions references that relate to this.
Imagine that you filter on failed executions for a certain label and you wonder which executions are failing.
Drilling down easily allows you to analyse and troubleshoot these executions.

### Efficiency Quadrant Analysis

The execution efficiency analysis shows tests by execution time and frequency. Tests that
frequently run and take longer to execute appear in the top right quadrant, highlighting them as prime
candidates for optimization to reduce testing bottlenecks, improve cycle times and optimize infrastructure costs:

![Test Insights - Efficiency Quadrant Analysis](images/test-insights-quadrant-analysis.png)

Hovering a marker in the chart reveals the corresponding Workflow.

The table below the chart shows plotted Workflows sortable by a number of attributes.

### Pass/Fail Stats

The pass/fail stats shows details about workflow executions that failed or passed.
These analysis are useful to quickly understand if certain workflows need attention.

![Test Insights - Efficiency Quadrant Analysis](images/insights-pass-fail.jpg)

## Advanced

### Privacy and disabling insights

Insights work across your organization and could thus reveal data which you prefer to keep private.
All insights are read-only and only execution's workflow name, labels, duration and status might be revealed.
You will never be able to see other execution details, logs and artifacts through insights.
Insights can be disabled if this is a concern to you. Go to your Organization Settings > Product Features and toggle Global Insights.
