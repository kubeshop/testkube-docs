---
description: What the Testkube MCP Server lets AI tools do, the hosted, CLI and Docker setup options, and example prompts.
---

# Testkube MCP Server

:::tip
Check out [https://testkube.io/blog/building-ai-assisted-test-workflows-testkube-mcp-github-copilot](https://testkube.io/blog/building-ai-assisted-test-workflows-testkube-mcp-github-copilot) for a complete example on
AI-driven remediation using the Testkube MCP Server with Github and Vs-Code.
:::

## Overview

The **Testkube MCP Server** brings Testkube's test orchestration capabilities directly into your
development environment and AI-powered workflows, enabling AI assistants and runners to interact directly
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
The MCP Server gives your runner access to Testkube. To also teach a runner _how_ to use Testkube — discovering
tests in a repository, authoring valid TestWorkflow YAML, diagnosing failed executions — install the
[Testkube Agent Skills](/articles/testkube-skills). The two work well together.
:::

:::tip
When used with agentic AI tools like GitHub Copilot with Claude Sonnet 4 in VS Code or Cursor, the Testkube MCP enables:

- **Multi-step Problem Solving:** AI agents can run multiple tools in sequence to solve complex testing scenarios.
- **Automated Debugging:** Runners can analyze failures, examine logs, and suggest fixes.
- **Intelligent Test Management:** Automated workflow creation, execution, and result analysis.

:::

## Getting Started

Choose the setup method that works best for you:

### 1. Hosted MCP Endpoint (Recommended)

**The easiest way to get started** - Connect directly to the Testkube Control Plane without any local installation.

- ✅ No installation required
- ✅ OAuth authentication — just log in via browser, no API keys needed
- ✅ Always available
- ✅ Best for remote access and team collaboration
- ✅ Works with Claude Code, VS Code, Cursor, and other MCP clients

**[Get Started with Hosted Endpoint →](./mcp-hosted)**

### 2. Testkube CLI

Run the MCP Server locally using the Testkube CLI for full control and local development.

- 🔧 Full control over the MCP server process
- 🔧 Best for local development
- 🔧 Supports stdio and shttp transports
- 🔧 Works with all MCP-compatible tools

**[Get Started with CLI →](./mcp-cli)**

### 3. Docker Container

Run the MCP Server in a Docker container for containerized deployments.

- 🐳 Container-friendly deployment
- 🐳 Ideal for CI/CD pipelines
- 🐳 Easy to integrate with existing Docker workflows
- 🐳 Supports both stdio and shttp transports

**[Get Started with Docker →](./mcp-docker)**

## Configuration Examples

Once you've set up the Testkube MCP Server, configure your AI tools:

- **[GitHub Copilot (VS Code)](./mcp-configuration#github-copilot-vs-code)**
- **[Cursor](./mcp-configuration#cursor)**
- **[Claude Desktop](./mcp-configuration#claude)**
- **[Custom MCP clients](./mcp-configuration)**

## Available Tools

The MCP Server offers tools for workflows, workflow templates, Runners, executions, artifacts, queries, schemas, Insights metrics and Insights boards. See [Testkube MCP Server Tools](/articles/mcp-tools) for the full list.

## Example Prompts

Once configured, you can interact with Testkube using natural language:

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

```text
How has the p95 latency of my k6 tests changed over the last two weeks, and which executions had the worst values?
```

```text
Create an Insights board with the pass/fail ratio and average duration of my API workflows over the last month
```

## Need Help?

:::info
Don't hesitate to reach out to us on [Slack](https://join.slack.com/t/testkubeworkspace/shared_invite/zt-3kfpny0gx-apPMq9_Swu4KG3uwz6Bk2g) if you run into any issues!
:::
