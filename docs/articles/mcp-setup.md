# Testkube MCP Hosted Endpoint

The Testkube Control Plane provides a hosted MCP endpoint that allows you to connect directly to Testkube without running a local MCP server. This is the recommended approach for most users.

:::tip
This is the easiest way to get started with the Testkube MCP Server - no local installation required!
:::

## Why Use the Hosted Endpoint?

- **No local setup** - No need to install the Testkube CLI or Docker
- **Remote access** - Connect to Testkube from any location without local setup
- **Always available** - The endpoint is always running and accessible
- **Simplified deployment** - No need to manage a local MCP server process
- **Centralized configuration** - Manage authentication and permissions through the Control Plane
- **Team collaboration** - Multiple users can connect to the same endpoint
- **Automatic updates** - Control Plane updates are handled automatically
- **Consistent performance** - Leverages the Control Plane's infrastructure

## Prerequisites

- **Access to a Testkube Environment** - You need an active Testkube organization and environment
- **API Token** - A valid Testkube API token with appropriate permissions
- **An AI tool that supports MCP with SSE transport** - Such as Claude Desktop, Cursor, VS Code with GitHub Copilot, or custom MCP clients

## Endpoint URL Structure

The hosted MCP endpoint follows this URL pattern:

```
https://api.testkube.io/organizations/{organization_id}/environments/{environment_id}/mcp
```

Replace:
- `{organization_id}` with your Testkube organization ID (e.g., `tkcorg_076487a004a7f6fb`)
- `{environment_id}` with your environment ID (e.g., `tkcenv_d19e797ff2c1449b`)

:::tip Finding Your IDs
You can find your organization and environment IDs in the Testkube Dashboard URL or by running:
```bash
testkube get context
```
:::

## Configuration Example

To use the hosted endpoint with an AI tool that supports SSE (Server-Sent Events) transport:

```json
{
  "mcpServers": {
    "testkube": {
      "url": "https://api.testkube.io/organizations/tkcorg_076487a004a7f6fb/environments/tkcenv_d19e797ff2c1449b/mcp",
      "transport": {
        "type": "sse"
      },
      "headers": {
        "Authorization": "Bearer YOUR_API_TOKEN_HERE"
      }
    }
  }
}
```

Replace:
- `tkcorg_076487a004a7f6fb` with your actual organization ID
- `tkcenv_d19e797ff2c1449b` with your actual environment ID
- `YOUR_API_TOKEN_HERE` with your Testkube API token

## Obtaining an API Token

1. Log in to your Testkube Dashboard
2. Navigate to **Organization Settings** → **API Tokens**
3. Create a new API token with appropriate permissions
4. Copy the generated API token (you won't be able to see it again)

See [API Token Management](/testkube-pro/articles/organization-management#api-tokens) for more details.

## Self-Hosted Deployments

For self-hosted Testkube instances, use your custom control plane URL:

```json
{
  "mcpServers": {
    "testkube": {
      "url": "https://your-control-plane.example.com/organizations/{organization_id}/environments/{environment_id}/mcp",
      "transport": {
        "type": "sse"
      },
      "headers": {
        "Authorization": "Bearer YOUR_API_TOKEN_HERE"
      }
    }
  }
}
```

## AI Tool Configuration

See [Configuration Examples](./mcp-configuration) for detailed setup instructions for:

- **GitHub Copilot** (VS Code)
- **Cursor**
- **Claude Desktop**
- **Custom MCP clients**

## Troubleshooting

### Connection Errors

- Verify your organization and environment IDs are correct
- Ensure your API token is valid and not expired
- Check that your API token has sufficient permissions

### Authentication Failures

- Verify the Authorization header is properly formatted: `Bearer YOUR_API_TOKEN_HERE`
- Ensure the API token has access to the specified organization and environment

### Network Issues

- Check connectivity to the Control Plane URL
- Verify firewall rules allow outbound HTTPS connections
- For self-hosted deployments, ensure the control plane is accessible

:::info
Don't hesitate to reach out to us on [Slack](https://bit.ly/testkube-slack) if you run into any issues!
:::

## Available Tools

The MCP server provides 17 tools for comprehensive Testkube management:

### Workflow Management

- `list_workflows` - List workflows with filtering
- `get_workflow` - Get workflow details
- `get_workflow_definition` - Get workflow YAML
- `get_workflow_metrics` - Get workflow performance metrics
- `create_workflow` - Create new workflow
- `update_workflow` - Update existing workflow
- `run_workflow` - Execute workflow

### Execution Management

- `list_executions` - List workflow executions
- `get_execution_info` - Get execution details
- `fetch_execution_logs` - Get execution logs
- `lookup_execution_id` - Resolve execution name to ID
- `abort_workflow_execution` - Cancel running execution

### Artifact Management

- `list_artifacts` - List execution artifacts
- `read_artifact` - Read artifact content

### Utility Tools

- `build_dashboard_url` - Generate dashboard URLs
- `list_labels` - List available labels
- `list_resource_groups` - List resource groups
