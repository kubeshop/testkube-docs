# Setup & Authentication

This guide covers the setup and authentication requirements specific to Testkube MCP (Model Context Protocol) integration.

## Prerequisites

- **Testkube CLI installed** - [Installation Guide](/cli/testkube)
- **Access to a Testkube Pro environment** - MCP requires a Testkube Pro environment with Control Plane access
- **An AI tool that supports MCP** - Such as VS Code with GitHub Copilot, Cursor, Claude Desktop or Gemini CLI

## Authentication & Context

Testkube MCP requires OAuth authentication through the CLI and works exclusively with Testkube Pro environments.

### Step 1: Login and Set Context

1. **Login to Testkube:**

   ```bash
   testkube login
   ```

2. **Set your CLI context:**
   - Follow the [Managing CLI Context](/testkube-pro/articles/managing-cli-context) guide to configure your organization and environment details

### Step 2: Verify Setup

Test that your authentication and context are working:

```bash
# Check current context
testkube get context

# Test API access
testkube get workflows

# Start MCP server
testkube mcp serve
```

:::info Testkube Pro Required
MCP requires OAuth authentication and only works with Testkube Pro environments. You must use `testkube login` to authenticate with the Control Plane.
:::

## Troubleshooting

### Authentication Issues

- **Session expired**: Run `testkube login` to re-authenticate
- **Wrong context**: Check with `testkube get context` and reconfigure if needed
- **Network issues**: Ensure access to `api.testkube.io` for Testkube Pro

### MCP Server Issues

- **Use debug mode**: `testkube mcp serve --debug` for detailed logging
- **Check workflows**: Verify you can list workflows before configuring AI tools

## Next Steps

Once authentication is working, proceed to [configure your AI tools](./mcp-configuration) to connect with Testkube MCP.
