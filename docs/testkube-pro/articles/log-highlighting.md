# Log Highlighting

## Overview

Testkube can automatically highlight relevant keywords in your logs to help you with faster debugging. 
To use this feature, open execution details.

On this screen, all the lines that may be relevant will be highlighted in the interface.

![log-highlighting.png](../../img/log-highlighting.png)

You may navigate through the highlighted lines with the arrows on top of the interface
or use the scrollbar where all relevant lines are marked.

## Filtering

To decide on the active highlight categories, you may click the "Highlight for keywords" button.
By default, all the categories are active.

![log-highlighting-filtering.png](../../img/log-highlighting-filtering.png)

:::tip
You can manage filter Categories and Keywords under the corresponding 
[Environment Keyword Handling](/testkube-pro/articles/environment-management#keyword-handling) tab.
:::

## Example Configuration

![keyword-highlights-configuration.png](../../img/keyword-highlights-configuration.png)

In the example above, there are default categories along with a new one:

- **Custom Category** (New):
  - **Color**: Green
  - **Group Name**: Custom Category
  - **Keywords**: [CustomKeyword1, CustomKeyword2, CustomKeyword3]

These keywords will be highlighted in logs when the custom category is active.
