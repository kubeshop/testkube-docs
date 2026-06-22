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

Test Insights are available from the top menu, which will take you to a default "Execution Analysis" Board with
premade charts.

![Test Insights Overview](images/insights-overview.png)

The "Your Boards" section contains all Boards created within your Organization.

:::note
There is currently no way to limit access to individual boards for Organization members; everyone has access
to all boards and can thus see all data within (which is read-only).

If this is a concern you can disable Insights entirely for from the [Product Features Panel](/articles/organization-management#product-features).
:::

## Boards

### Default Board: Execution Analysis

The default Execution Analysis board has three sections which all show data over the last month:

![Test Insights Execution Analysis by Workflows](images/insights-default-board.jpg)

The top part of the Execution Analysis module shows high-level execution metrics.

Underneath you can find you can find a quick overview of execution count duration.
You can either group your executions by status or workflow by using the selector.

Lastly, the execution efficiency analysis shows tests by execution time and frequency. Tests that
frequently run and take longer to execute appear in the top right quadrant, highlighting them as prime
candidates for optimization to reduce testing bottlenecks, improve cycle times and optimize infrastructure costs

### Managing Custom Boards

You can add as many boards as you need to Insights under an Organization and each board can in turn contain
as many analysis charts as needed, allowing you to group your analysis in any way that aligns
with your testing activities.

You can manage a board as follows:

- **Create Board**: You can create a board by clicking on "Create new board".
  After filling in details such as name and description, you can add your first analysis.

- **Rearrange board**: Hover an analysis insight and in the top-right corner you can find a handle to drag and drop your analysis.
  You can move it around to a new row or put it in front or behind another analysis. You can only add up to three analysis per row.
  Responsiveness of boards are limited to larger screen sizes.

- **Update Board**: You can go to the board's setting by clicking on the dotted menu. Here you can update both the name and the description.

- **Delete Board**: You can go to the board's setting and delete the board in the danger zone at the bottom.
  Your board and all analysis will be removed, no execution data will be deleted.

## Working with Analyses

You can add as many analyses to a board as needed; use the "Add a new analysis" button on the top right to do so:

![Test Insights add Analysis](images/insights-add-analysis.png)

Adding a board takes you to the Analysis editor where you can configure what data to show and how to show it.

### The anatomy of the Analysis Editor

![The analysis editor](images/insights-analysis-editor.jpg)

At the top you can see a Period Selector for selecting the last day, week, month, quarter or any custom period.
The interval is automatically inferred depending on the size of the period.
A period less than two days will have an hourly interval, then daily, and up to weekly when looking at a quarter.

More to the right, you can see the Analysis Selector: it defaults to **Executions** time series, but you can also
select **Executions Bar Chart**, **Efficiency Quadrant Analysis** and **Pass/Fail Statistics** (all described below).

When **Executions** is selected, a **Chart Type** selector appears next to the Analysis Selector. It lets you choose
how the time series is rendered (stacked bars, lines, heatmap, and more). Your choice is saved with the analysis.

![Test Insights Select Analysis](images/insights-select-analysis.png)

Under the period and analysis selector, you will find your selected chart with its controls on the right side.
The controls vary depending on the selected chart and include the ability to filter executions on **Workflow name**,
**environment**, **status**, **labels**, and measure specific fields (such as test case name).

![Test Insights Executions Filter](images/insights-executions-filter.png)

:::tip
Workflow name, labels, and measure identity fields, support multiple filter operators such as `IS` (exact match) and `CONTAINS` for partial matches. Just click on the operator to switch.
:::

## Executions Time Series

The execution time series allows you to analyse your executions over time.

### Executions Measure

The x-axis will always be the time, whereas the y-axis is defined by your **Measure**. There are three categories of measures that are supported.

- **Execution measures**: These measures give high level summary information about your executions.
  - **Execution count**: Use this to see how many Workflows were executed
  - **Execution duration**: Use this to understand how much time your tests are taking.
  - **JUnit Case count**: The number of JUnit tests execution based on extracted [JUnit Reports](/articles/test-workflows-reports).
- **Resource measures**: See resource usage across executions. Read more about [Resource Aggregates in Insights](/articles/resource-metrics#resource-aggregates-in-insights).
  - **CPU Usage**: Use this to analyze CPU consumption of your Workflow executions.
  - **Memory Usage**: Use this to analyze Memory consumption of your Workflow executions.
  - **Network Usage**: Use this to analyze Network usage of your Workflow executions.
  - **Disk Usage**: Use this to analyze Disk usage of your Workflow executions.
- **Granular Metrics**: When [granular metrics](/articles/granular-metrics) are enable you will see additional measure options depending on the types of reports your workflows produce.

![Test Insights Executions Measure](images/insights-executions-measure.png)

### Executions Aggregate

You can use the **Aggregate** to decide how to treat multiple executions of the same workflow within
each interval. For example, for the **Execution duration** you can aggregate on **sum**, **average**, **minimum** or **maximum**.

:::note
The actual aggregate(s) available will depend on which Executions Measure you selected.
:::

![Test Insights Executions Aggregate](images/insights-executions-aggregate.png)

### Executions Segment

Lastly, you can set a **Segment** which will break down your executions.
You can do this by the **status** to see which executions passed or failed,
by **workflow name** or by any of the **labels** found on the executions.

![Test Insights Executions Segment](images/insights-executions-segment.png)

### Chart Types

The **Chart Type** selector in the analysis editor header controls how segmented execution data is visualized over time.
Eight chart types are available:

| Chart Type            | Description                                                                                                                                               |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Stacked Bar**       | The default. Segments are stacked within each time bucket to show totals and composition.                                                                 |
| **Grouped Bar**       | Segments are drawn side-by-side within each bucket, making it easier to compare individual segment values.                                                |
| **100% Stacked Bar**  | Each bucket is normalized to 100%, showing the relative share of each segment rather than absolute values.                                                |
| **Stacked Line**      | A stacked area chart — the line equivalent of stacked bars. Useful for seeing how segment composition changes over time.                                  |
| **Line**              | One independent line per segment. Each segment is scaled to its own peak, which highlights trends for individual segments.                                |
| **100% Stacked Area** | A normalized area chart where each time bucket sums to 100%, showing segment share over time.                                                             |
| **Heatmap**           | A time-by-segment grid where color intensity encodes value. Works well when you have many segments and stacked bars or lines become hard to read.         |
| **Horizon**           | One small area chart per segment, stacked vertically as small multiples. All segments share a common scale so you can compare magnitudes across segments. |

:::tip
Use **100% Stacked Bar** or **100% Stacked Area** when you care about proportions (for example, the pass/fail mix) rather than absolute counts. Use **Heatmap** or **Horizon** when segmenting by a high-cardinality dimension such as workflow name or test case.
:::

Segmented charts display a color legend above the chart. Hovering a legend entry, a chart segment, or a row in the
drilldown table cross-highlights that segment across every time bucket (dimming the rest), making it easy to follow a
single segment through the full period.

### Success Rate Overlay

When your analysis is specifically looking at test counts (using the measure **Execution count** and segmenting by **Status**) an **Overlay** option appears in
the controls panel. This will include an overlay showing the pass rate over time on top of the raw counts.

### Executions Table and Drill Down

Besides a graph view, the Executions time series analysis also comes with a table view.
This is useful to see trend across a single segment.
Currently, segmentation within a graph is also limited to 25 largest segments.
For segmentation with a high cardinality, you can view the remaining segments within the table, which are
most often too tiny to see within the Graph View.

You can click on either the segment name or a table cell value to drill down on the execution references that relate to this.
Imagine that you filter on failed executions for a certain label, and you wonder which executions are failing.
Drilling down easily allows you to analyse and troubleshoot these executions.

For example - the following Analysis shows all Executions labeled `junit=true`, with February 7th highlighted when there
were 12 failed executions:

![Test Insights Select Drill-Down](images/insights-select-drilldown.png)

Clicking on the "12" in the table will show those 12 executions in a table:

![Test Insights Drilldown Table](images/insights-drilldown-table.png)

- Selecting an execution will open the corresponding [Workflow Execution Details](/articles/testkube-dashboard-execution-details) panel.
- Selecting the "Back to overview" link on the top right of the table will take you back to the table view above.

## Executions Bar Chart

This shows a bar chart with the number of executions for each selected segment. For example, the below Analysis
shows the top failing Workflows over the last week:

![Test Insights Bar Chart](images/insights-executions-bar-chart.png)

## Efficiency Quadrant Analysis

The execution efficiency analysis shows tests by execution time and frequency. Tests that
frequently run and take longer to execute appear in the top right quadrant, highlighting them as prime
candidates for optimization to reduce testing bottlenecks, improve cycle times and optimize infrastructure costs:

![Test Insights - Efficiency Quadrant Analysis](images/test-insights-quadrant-analysis.png)

Hovering a marker in the chart reveals the corresponding Workflow.

The table below the chart shows plotted Workflows sortable by a number of attributes.

## Pass/Fail Stats

The pass/fail stats shows details about workflow executions that failed or passed.
These analysis are useful to quickly understand if certain workflows need attention.

![Test Insights - Efficiency Quadrant Analysis](images/insights-pass-fail.jpg)
