# Testkube Executions

A Testkube execution is an automated test (written in a language or syntax aligned with your preferred tools such as Cypress, JMeter, 
Playwright, Postman, and Selenium) that consists of a script that runs in a Pod within the Kubernetes environment. The Pod comprises 
the dependencies the script requires to run successfully. The Pod runs each test and returns results to Testkube, which provides
a safe and reliable Kubernetes environment to run tests, track logs, and analyze data.

The Executions dashboard is the central repository for all executions that run in your **Environment**.
Since this insight is contained in a single location, you can troubleshoot issues more quickly. Leveraging the dashboard ensures 
less clicks through less pages to access the information you need. This increased efficiency also extends itself to an improved user experience.

![Testkube Executions](../articles/images/testkube-dashboard-executions-all.png)

**Search** and **Add a filter** allow you to narrow your output. You can also save and share views of the parameters you use 
to search and filter data. For example, if you conduct similar searches or routinely use the same filters, you can now save these views
in the left pane. You can save them as **Private** or **Shared** views. 

**Live data** allows you to view running executions. ON is the default setting. Toggle the setting left or OFF to operate 
in a seemingly offline mode, where you will not see running executions. This mode is helpful if, for example, you are debugging or analyzing
a specific execution and need to focus solely on this test without visual distractions from running executions. Toggle the setting
right or ON to resume viewing live data.

The three vertical dots associated with each test – **More Options/Quick Actions** – provide immediate access to details such as **Download Logs**, 
**Open Execution Logs**, and **View Artifacts**.

As its name suggests, **Workflow health** (**Perfect**, **Excellent**, **Good**, **Fair**, **Poor**, **Critical**) provides insight into the fitness or state of each workflow. 
These symbols mirror a weather forecast. While the sun aligns with **Perfect** workflow health, a cloud with a bolt of thunder aligns with **Critical** workflow health.
After execution completion, calculations track flakiness (pass/fail flip rate or inconsistency), overall health, and other metrics that combine to determine 
the workflow's health. As a matter of information, flakiness is not test specific. For example, there could be flakiness in your infrastructure.

Test execution **Status** symbols:

* A green checkmark denotes a successful execution.
* An encircled red 'x' represents a failed execution.
* A group of revolving circles depicts a current run.
* A red warning sign (exclamation mark enclosed in a triangle) indicates an aborted execution.

## Pending Executions

A Testkube **Pending execution** is a test that is slated to run. There could be several reasons
a test execution has a pending status. For example, the test could be awaiting other executions because 
there are too many tests running. There might also be resource issues specific CPU space or memory. For additional
information, read [Pending Executions](../articles/testkube-dashboard-executions-pending.md).

![Pending Executions](../articles/images/testkube-dashboard-executions-pending.png)

## Running Executions

A Testkube **Running execution** is a test in progress. For additional
information, read [Running Executions](../articles/testkube-dashboard-executions-running.md).

![Running Executions](../articles/images/testkube-dashboard-executions-running.png)

## Passed Executions

A Testkube **Passed execution** is a test that has run, satisfied required checks, and completed successfully. For additional
information, read [Passed Executions](../articles/testkube-dashboard-executions-passed.md).

![Passed Executions](../articles/images/testkube-dashboard-executions-passed.png)

## Failed Executions

A Testkube **Failed execution** is a test that has completed but did not pass all required checks. For additional
information, read [Failed Executions](../articles/testkube-dashboard-executions-failed.md).

![Failed Executions](../articles/images/testkube-dashboard-executions-failed.png)

## Aborted Executions

A Testkube **Aborted execution** is a test purposely interrupted or stopped before completion. For additional
information, read [Aborted Executions](../articles/testkube-dashboard-executions-aborted.md).

![Aborted Executions](../articles/images/testkube-dashboard-executions-aborted.png)
