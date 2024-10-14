# JUnit Processing and Visualization

Testkube provides comprehensive support for processing and visualizing JUnit XML reports generated during Test Workflows.  
This page explains how Testkube handles these reports and presents the information to users.

## JUnit Report Extraction

Testkube automatically scans all artifacts for `.xml` files that are valid [JUnit XML reports](https://github.com/testmoapp/junitxml).  
It then parses their contents to make them available for various reporting and visualization features. [Read more](/articles/test-workflows-artifacts#junit-report-extraction).

## Artifact Collection

To ensure that your JUnit reports are processed, you need to collect them as artifacts.  
For detailed information on artifact collection in Test Workflows, please refer to our [Test Workflows Artifacts](/articles/test-workflows-artifacts) page.

## Visualization Features

Testkube provides multiple ways to visualize and interact with the processed JUnit reports:

### 1. Execution Overview Tab

On the Overview tab of an Execution page, you'll find a new section dedicated to JUnit reports. This section is located below the execution flowchart and provides:

- A summary of all processed JUnit reports
- The overall status of the tests
- Immediate visibility of any errors and their associated logs

This at-a-glance view allows for quick assessment of test results and easy identification of any issues that require attention.

![Overview tab showing JUnit report summary](../img/junit-overview-success.png)

![Example of error display in the Overview tab](../img/junit-overview-failure.png)

### 2. Reports Tab

For a more detailed examination of your JUnit reports, navigate to the Reports tab of the execution. Here, you'll find:

- A comprehensive view of all processed reports
- A search bar for filtering test suites and test cases
- Options to filter results by "passed" or "failed" status

This detailed view allows for in-depth analysis of test results and easy navigation through large sets of test data.

![Reports tab showing detailed JUnit report information](../img/junit-detailed-success.png)

![Example of filtering options in the Reports tab](../img/junit-detailed-failure.png)

## Benefits of JUnit Report Visualization

The enhanced visualization of JUnit reports in Testkube offers several advantages:

1. **Quick Overview**: Easily assess the overall health of your tests from the Execution Overview tab.
2. **Detailed Analysis**: Dive deep into test results using the comprehensive Reports tab.
3. **Efficient Troubleshooting**: Quickly identify and focus on failed tests or error messages.
4. **Improved Workflow**: Seamlessly integrate JUnit report analysis into your testing and development process.

By leveraging these visualization features, teams can more effectively monitor test outcomes, identify issues, and maintain the quality of their software throughout the development lifecycle.

## Conclusion

Testkube's JUnit report processing and visualization features provide a powerful toolset for managing and analyzing test results.  
By automatically extracting data from JUnit XML reports and presenting it in both summary and detailed views, Testkube enables teams to gain valuable insights into their test workflows quickly and efficiently.

For more information on related features, check out our [Test Insights Reporting](/articles/test-insights#test-reports) documentation.
