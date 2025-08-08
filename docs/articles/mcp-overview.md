# Testkube MCP (Model Context Protocol) Overview

The **Testkube Model Context Protocol (MCP)** integration enables AI assistants and agents to interact directly with your Testkube workflows, executions, and artifacts through a standardized protocol. This powerful integration brings Testkube's test orchestration capabilities directly into your development environment.

## What is Model Context Protocol?

[Model Context Protocol (MCP)](https://modelcontextprotocol.io) is an open standard that enables AI assistants to connect with external systems and data sources. With Testkube's MCP integration, your AI assistant can:

- **Execute and Monitor Test Workflows:** Run workflows, check execution status, and retrieve results
- **Analyze Test Results:** Access execution logs, artifacts, and failure details
- **Navigate Test History:** Search through past executions and analyze trends
- **Manage Test Resources:** List workflows, view configurations, and access metadata

## Key Capabilities

The Testkube MCP server provides the same powerful tools available in the Testkube AI Assistant, with additional capabilities when used with agentic AI tools:

### Core Features

- **Workflow Management:** List, create, and execute test workflows
- **Execution Monitoring:** Track test runs, view logs, and analyze results
- **Artifact Access:** Download and examine test outputs, reports, and logs
- **Resource Discovery:** Find workflows by labels, resource groups, or search terms

### Enhanced with AI Agents

When used with agentic AI tools like GitHub Copilot with Claude Sonnet 4 in VS Code or Cursor, MCP enables:

- **Multi-step Problem Solving:** AI agents can run multiple tools in sequence to solve complex testing scenarios
- **Automated Debugging:** Agents can analyze failures, examine logs, and suggest fixes
- **Intelligent Test Management:** Automated workflow creation, execution, and result analysis

## Quick Start

To get started with Testkube MCP:

1. **Install Testkube CLI** - [Installation Guide](/cli/testkube)
2. **Authenticate** - Run `testkube login` and set your context ([Managing CLI Context](/testkube-pro/articles/managing-cli-context))
3. **Test MCP Server** - Run `testkube mcp serve` to verify it works
4. **[Configure Your AI Tools](./mcp-configuration)** - Set up VS Code, Cursor, or other MCP-compatible tools

:::info Testkube Pro Required
MCP requires OAuth authentication and only works with Testkube Pro environments. You must use `testkube login` to authenticate with the Control Plane.
:::

## Supported AI Tools

Testkube MCP works with any tool that supports the Model Context Protocol standard, including:

- **GitHub Copilot** (with Agent mode in VS Code)
- **Cursor**
- **Claude Desktop**
- **Custom MCP clients**

:::tip Best Results
We've found the best results using **Agent mode in VS Code with Claude Sonnet 4**, which provides sophisticated multi-step reasoning for complex testing scenarios.
:::

## Learn More

- [Setup & Authentication](./mcp-setup)
- [Configuration Examples](./mcp-configuration)
- [Model Context Protocol Documentation](https://modelcontextprotocol.io/)
