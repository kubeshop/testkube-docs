# Testkube MCP Server

:::tip
Check out [https://testkube.io/blog/building-ai-assisted-test-workflows-testkube-mcp-github-copilot](https://testkube.io/blog/building-ai-assisted-test-workflows-testkube-mcp-github-copilot) for a complete example on
AI-driven remediation using the Testkube MCP Server with Github and Vs-Code.
:::

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

- **Multi-step Problem Solving:** AI agents can run multiple tools in sequence to solve complex testing scenarios.
- **Automated Debugging:** Agents can analyze failures, examine logs, and suggest fixes.
- **Intelligent Test Management:** Automated workflow creation, execution, and result analysis.

:::

## Getting Started

There are 2 ways to run the Testkube MCP Server:

1. Via the **Testkube CLI** as described below.
2. Via the **MCP Server Docker Container** as described at [Docker MCP Server](mcp-docker).

## Using the Testkube CLI

### Prerequisites

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

:::note
If you're using SSO or a self-hosted Testkube instance, you can use the `--email` flag with the login
command - [Read More](/testkube-pro/articles/managing-cli-context#sso-authentication), or authenticate with an
API Key as [described below](#api-key-authentication).
:::

### Step 2: Validate the MCP Server

Start the MCP Server to make sure it works, run

```bash
testkube mcp serve --verbose
```

You should see output similar to:

```text
➜  ~ testkube mcp serve --verbose
✔ loading config
Starting MCP server with configuration:
  Organization: Testkube Internal Demo (tkcorg_XXX)
  Environment: Paris (tkcenv_YYY)
  API URL: https://api.testkube.io
  Dashboard URL: https://app.testkube.io

Configure AI tools: https://docs.testkube.io/articles/mcp-configuration
Feedback welcome: https://bit.ly/testkube-slack
```

If you plan to use the MCP Server with an existing AI tool you can terminate the above with Ctrl-C and integrate
it with your tool(s) as described below.

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

## API-Key Authentication

For scenarios where OAuth authentication is not suitable (such as CI/CD pipelines, automated systems, or when using SSO), you can authenticate using an API key instead.

### Step 1: Obtain an API Key

1. Log in to your Testkube Dashboard
2. Navigate to **Organization Settings** → **API Tokens** - [Read More](/testkube-pro/articles/organization-management#api-tokens)
3. Create a new API key with appropriate permissions for your use case
4. Copy the generated API key (you won't be able to see it again)

### Step 2: Configure the API Key

Set the API key in your Testkube configuration:

```bash
testkube set context --api-key <your-api-key> --org-id <organization-id> --env-id <environment-id>
```

Replace:

- `<your-api-key>` with the API key you obtained from the dashboard
- `<organization-id>` with your organization ID
- `<environment-id>` with your environment ID

### Step 3: Verify Configuration

Check that your context is properly configured:

```bash
testkube get context
```

You should see output similar to:

```text
Organization   : Your Organization (tkcorg_xxx)
Environment    : Your Environment (tkcenv_yyy)
API Key        : tk_xxx...xxx
API URI        : https://api.testkube.io
Namespace      : testkube
```

### Step 4: Start the MCP Server

Start the MCP server with API key authentication:

```bash
testkube mcp serve --verbose
```

You should see output confirming API key authentication:

```text
Starting MCP server with configuration:
  Organization: Your Organization (tkcorg_xxx)
  Environment: Your Environment (tkcenv_yyy)
  API URL: https://api.testkube.io
  Dashboard URL: https://app.testkube.io
  API Key: tk_xxx...xxx
```

### Troubleshooting API Key Authentication

- **Invalid API key**: Verify the API key is correct and hasn't expired
- **Wrong organization/environment**: Ensure the organization and environment IDs match your API key's scope
- **Network issues**: Verify connectivity to your Testkube API endpoint
- **Permissions**: Ensure your API key has sufficient permissions for the operations you're trying to perform

## MCP Server Transport Modes

Regardless of if the Testkube MCP Server is running from the CLI or from inside Docker, it supports two transport modes for communication with AI tools:

### Standard I/O (stdio) Mode

**Default transport mode** - Uses standard input/output streams for communication.

**Configuration:**
```json
{
  "servers": {
    "testkube": {
      "command": "testkube",
      "args": ["mcp", "serve"],
      "type": "stdio"
    }
  }
}
```

**Use cases:**

- Local development environments
- Desktop AI applications (Claude Desktop, Cursor)
- VS Code with GitHub Copilot
- Most MCP-compatible tools

**Advantages:**

- Simple configuration
- No network setup required
- Secure local communication
- Works with most AI tools out of the box

### SHTTP (Streaming HTTP) Mode

**Network-based transport** - Uses streaming HTTP for communication over the network.

**Configuration:**

```json
{
  "servers": {
    "testkube": {
      "command": "testkube",
      "args": ["mcp", "serve", "--transport", "shttp", "--shttp-host", "localhost", "--shttp-port", "8080"],
      "type": "shttp"
    }
  }
}
```

**Use cases:**

- Containerized deployments
- Remote AI tools
- Multi-user environments
- CI/CD pipelines
- Network-based integrations

**Advantages:**

- Network accessible
- Streaming communication for real-time data
- Supports TLS encryption
- Scalable for multiple clients
- Works across different machines

### Starting the MCP Server

**stdio mode (default):**

```bash
testkube mcp serve
```

**shttp mode:**

```bash
testkube mcp serve --transport shttp --shttp-host localhost --shttp-port 8080
```

**shttp with TLS:**

```bash
testkube mcp serve --transport shttp --shttp-host localhost --shttp-port 8080 --shttp-tls --shttp-cert-file cert.pem --shttp-key-file key.pem
```

:::tip
When starting the MCP Server with shttp - the mcp endpoint is available at `http://{shttp-host}:{shttp-port}/mcp`
:::

### Transport Mode Selection

Choose the transport mode based on your use case:

| Use Case | Recommended Mode | Reason |
|----------|------------------|---------|
| Local development | stdio | Simple, secure, no network setup |
| Desktop AI tools | stdio | Native support, better performance |
| Docker containers | shttp | Network accessible, container-friendly |
| Remote AI tools | shttp | Network communication required |
| Production deployments | shttp + TLS | Secure, scalable, enterprise-ready |
| CI/CD pipelines | shttp | Network accessible, automation-friendly |

### Environment Variable Mode

For automated deployments, you can use environment variables to configure the MCP server:

```bash
export TK_MCP_ENV_MODE=true
export TK_ACCESS_TOKEN=<your-api-key>
export TK_ORG_ID=<organization-id>
export TK_ENV_ID=<environment-id>
export TK_CONTROL_PLANE_URL=https://api.testkube.io
export TK_DASHBOARD_URL=https://app.testkube.io

# For stdio mode
testkube mcp serve

# For shttp mode
testkube mcp serve --transport shttp --shttp-host 0.0.0.0 --shttp-port 8080
```

### Security Considerations

**stdio mode:**

- Communication stays within the local process
- No network exposure
- Suitable for trusted local environments

**shttp mode:**

- Network accessible - consider firewall rules
- Streaming communication enables real-time updates
- Use TLS for production deployments
- Consider authentication for multi-user environments
- Monitor network access logs

### Troubleshooting Transport Issues

**stdio mode issues:**

- Ensure the AI tool supports stdio transport
- Check that the testkube binary is in PATH
- Verify authentication with `testkube get context`

**shttp mode issues:**

- Check network connectivity to the MCP server
- Verify firewall rules allow the configured port
- For TLS issues, verify certificate validity
- Check server logs with `--debug` flag

**Debug commands:**

```bash
# Test stdio mode
testkube mcp serve --debug

# Test shttp mode
testkube mcp serve --transport shttp --shttp-host localhost --shttp-port 8080 --debug

# Check if server is running (shttp mode)
curl http://localhost:8080/health
```

## Troubleshooting

### Common Issues

**MCP server not starting:**

- Check that `testkube` binary is accessible
- Verify that you have logged in to Testkube with: `testkube login`
- Try running `testkube mcp serve --verbose` manually

**No response from AI tools:**

- Restart your AI application after configuration changes
- Verify JSON configuration syntax
- Check application logs for MCP connection errors

**Authentication errors:**

- Ensure you're logged in: `testkube get context`
- Refresh your login: `testkube login`
- Verify correct context is set
- For API key authentication: `testkube set context --api-key <key> --org-id <org> --env-id <env>`

### Debug Commands

```bash
# Test MCP server manually
testkube mcp serve --debug

# Verify CLI authentication
testkube get workflows

# Check current context
testkube get context
```

:::info
Don't hesitate to reach out to us on [Slack](https://bit.ly/testkube-slack) if you run into any issues!
:::

## Available Tools

The MCP server provides 20 tools for comprehensive Testkube management:

### Workflow Management

- `list_workflows` - List workflows with filtering
- `get_workflow` - Get workflow details
- `get_workflow_definition` - Get workflow YAML
- `get_workflow_metrics` - Get workflow performance metrics
- `create_workflow` - Create new workflow
- `update_workflow` - Update existing workflow
- `run_workflow` - Execute workflow

### Agent Management

- `list_agents` - List available agents for workflow execution targeting - [Read More](/articles/agents-overview)

### Execution Management

- `list_executions` - List workflow executions
- `get_execution_info` - Get execution details
- `get_workflow_execution_metrics` - Get detailed resource consumption metrics for a specific execution
- `fetch_execution_logs` - Get execution logs
- `lookup_execution_id` - Resolve execution name to ID
- `wait_for_executions` - Wait for executions to complete
- `abort_workflow_execution` - Cancel running execution

### Artifact Management

- `list_artifacts` - List execution artifacts
- `read_artifact` - Read artifact content

### Utility Tools

- `build_dashboard_url` - Generate dashboard URLs
- `list_labels` - List available labels
- `list_resource_groups` - List resource groups
