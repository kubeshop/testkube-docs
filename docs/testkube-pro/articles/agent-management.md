# Agent Management

With the introduction of [Multi-Agent support](/articles/multi-agent), Testkube Environments can now contain
two types of agents:

- Lightweight **Runner Agents**, of which there can be as many as needed. 
- A single **Environment Agent**, of which there needs to exactly one in every Environment.

:::note
The Environment Agent will over time be replaced with separate lightweight agents for different functionality.
:::

The Agent Management panel shows a graph of concurrent Runner Agent usage over time and below that a 
table of currently registered Agents, with columns for their different attributes.

The Environment Agent is always shown last in this table with the label "superagent":

![Agents Management Panel](images/agents-list.png)

## Adding a Runner Agent

Use the "Connect New Runner Agent" button to add a new Runner Agent to your Environment. This will open the following
dialog:

- connect screenshot -

## Managing an existing Agent

Existing agents are currently managed via the Testkube CLI, use the popup menu to the right in the table 
to see corresponding CLI commands:

- commands screenshot -
