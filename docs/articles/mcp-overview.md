# Testkube MCP Server

## Overview

The **Testkube MCP Server** brings Testkube's test orchestration capabilities directly into your 
development environment and AI-powered workflows, enabling AI assistants and agents to interact directly 
with your Testkube workflows, executions, and artifacts. 

More specifically, it allows you and your AI agents to:

- **Execute and Monitor Test Workflows:** Run workflows, check execution status, and retrieve results
- **Analyze Test Results:** Access execution logs, artifacts, and failure details
- **Navigate Test History:** Search through past executions and analyze trends
- **Create and Manage Test Resources:** List workflows, view configurations, create workflows and access metadata

:::note
[Model Context Protocol (MCP)](https://modelcontextprotocol.io) is an open standard that enables AI assistants to connect with external systems and data sources. 
:::

:::tip

When used with agentic AI tools like GitHub Copilot with Claude Sonnet 4 in VS Code or Cursor, the Testkube MCP enables:

- **Multi-step Problem Solving:** AI agents can run multiple tools in sequence to solve complex testing scenarios
- **Automated Debugging:** Agents can analyze failures, examine logs, and suggest fixes
- **Intelligent Test Management:** Automated workflow creation, execution, and result analysis
:::

## Prerequisites

- **Testkube CLI installed** - [Installation Guide](/articles/install/cli)
- **Access to a Testkube Environment** - The MCP Server requires you to have access to a Testkube Environment.
- **An AI tool that supports MCP** - Such as VS Code with GitHub Copilot, Cursor, Claude Desktop or Gemini CLI.

### Step 1: Authenticate

Once the CLI is installed, authenticate with Testkube:

```bash
testkube login
```

This will open a browser window to sign in and authenticate with the Testkube Dashboard,
which ensures that the MCP Server operates within the security context of your Testkube account and Environment.

### Step 2: Validate the MCP Server

2. Start the MCP Server to make sure it works, run

```bash
testkube mcp serve --verbose
``` 

You should see output similar to:

```
➜  ~ testkube mcp serve --verbose
✔ loading config
Starting MCP server with configuration:
  Organization: Testkube Internal Demo (tkcorg_0f382d90e81ea228)
  Environment: Paris (tkcenv_943fe797cb48b4d2)
  API URL: https://api.testkube.io
  Dashboard URL: https://app.testkube.io

Configure AI tools: https://docs.testkube.io/articles/mcp-configuration
Feedback welcome: https://bit.ly/testkube-slack
```

### Step 3: Configure your AI Tools 

Testkube MCP works with any tool that supports the Model Context Protocol standard, including:

- **GitHub Copilot** (with Agent mode in VS Code)
- **Cursor**
- **Claude Desktop**
- **Custom MCP clients**

Have a look at [Configure Your AI Tools](./mcp-configuration) for detailed instructions and examples.

:::tip Best Results
We've found the best results using **Agent mode in VS Code with Claude Sonnet 4**, which provides sophisticated multi-step reasoning for complex testing scenarios.
:::

### Step 4: Start interacting with Testkube

Once you've configured your AI tools, you can start using Testkube MCP in AI Chat windows or other AI assistants.

Here are some example prompts to get you started:

```text
List my test workflows and their recent execution status
```

```text
Help me debug my last failed workflow execution
```

```text
Create a new test workflow for my Python API and run it
```

```text
Show me test execution trends for the past week and identify failing patterns
```

```text
Analyze the logs of execution "api-tests-123" and suggest fixes
```

Check out the [Configuration Examples](./mcp-configuration) document for more detailed usage samples and multi-step workflows.

## MCP Server Troubleshooting

### Authentication Issues

- **Session expired**: Run `testkube login` to re-authenticate
- **Wrong context**: Check with `testkube get context` and reconfigure if needed
- **Network issues**: Ensure access to `api.testkube.io` or the corresponding api endpoint if you're hosting the Testkube
  Control Plane on premise.

### MCP Server Issues

- **Use debug mode**: `testkube mcp serve --debug` for detailed logging
- **Check workflows**: Verify you can list workflows before configuring AI tools

:::info
Don't hesitate to reach out to us on [Slack](https://bit.ly/testkube-slack) if you run into any issues!
:::



