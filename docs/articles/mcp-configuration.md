# MCP Server Configuration Examples

This guide provides configuration examples for integrating the [Testkube MCP Server](/articles/mcp-overview) with various
AI tools and development environments.

## GitHub Copilot (VS Code)

GitHub Copilot with Agent mode in VS Code provides excellent agentic capabilities for multi-step testing workflows.

### Configuration

There are two ways to configure GitHub Copilot with Testkube MCP:

#### Option 1: Using the Testkube CLI (stdio)

1. **Create or edit your MCP configuration file:**

   **Location:** `~/Library/Application Support/Code/User/mcp.json` (macOS) or `%APPDATA%\Code\User\mcp.json` (Windows)

   ```json
   {
     "servers": {
       "testkube": {
         "command": "testkube",
         "args": ["mcp", "serve"],
         "type": "stdio"
       }
     },
     "inputs": []
   }
   ```

2. **Restart VS Code** to load the new configuration

3. **Test the integration:**
   - Open GitHub Copilot Agent mode
   - Try a prompt like: `list my testkube workflows`

#### Option 2: Using the Hosted MCP Endpoint (SSE)

1. **Create or edit your MCP configuration file:**

   **Location:** `~/Library/Application Support/Code/User/mcp.json` (macOS) or `%APPDATA%\Code\User\mcp.json` (Windows)

   ```json
   {
     "mcpServers": {
       "testkube": {
         "url": "https://api.testkube.io/organizations/tkcorg_YOUR_ORG_ID/environments/tkcenv_YOUR_ENV_ID/mcp",
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
   - `tkcorg_YOUR_ORG_ID` with your Testkube organization ID
   - `tkcenv_YOUR_ENV_ID` with your Testkube environment ID
   - `YOUR_API_TOKEN_HERE` with your Testkube API token

2. **Restart VS Code** to load the new configuration

3. **Test the integration:**
   - Open GitHub Copilot Agent mode
   - Try a prompt like: `list my testkube workflows`

:::tip
The hosted endpoint option is ideal for remote access and doesn't require the Testkube CLI to be installed locally.
:::

### Recommended Usage

With GitHub Copilot Agent mode, you can perform complex multi-step operations:

```text
Help me debug the last failed execution of my api-tests workflow.
Show me the logs, check for any artifacts, and suggest what might be wrong.
```

:::tip Best Experience
We recommend using **Claude Sonnet 4** with GitHub Copilot for the most sophisticated reasoning capabilities.
:::

## Cursor

Cursor provides powerful AI assistance with built-in MCP support.

### Option 1: Using the Testkube CLI (stdio)

**Add Testkube server configuration to your Cursor MCP settings:**

```json
{
  "mcpServers": {
    "testkube": {
      "command": "testkube",
      "args": ["mcp", "serve"],
      "type": "stdio"
    }
  }
}
```

### Option 2: Using the Hosted MCP Endpoint (SSE)

**Add the hosted endpoint configuration to your Cursor MCP settings:**

```json
{
  "mcpServers": {
    "testkube": {
      "url": "https://api.testkube.io/organizations/tkcorg_YOUR_ORG_ID/environments/tkcenv_YOUR_ENV_ID/mcp",
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
- `tkcorg_YOUR_ORG_ID` with your Testkube organization ID
- `tkcenv_YOUR_ENV_ID` with your Testkube environment ID
- `YOUR_API_TOKEN_HERE` with your Testkube API token

### Usage Examples

```text
Create a test workflow that checks my REST API endpoints, then run it and show me the results.
```

```text
Look at my recent test failures and help me understand what's causing them. Check the logs and artifacts.
```

## Claude 

### Claude Desktop

For direct interaction with Claude through the desktop application.

#### Option 1: Using the Testkube CLI (stdio)

1. **Create or edit Claude Desktop config:**

   **Location:** `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS)

   ```json
   {
     "mcpServers": {
       "testkube": {
         "command": "testkube",
         "args": ["mcp", "serve"]
       }
     }
   }
   ```

2. **Restart Claude Desktop**

#### Option 2: Using the Hosted MCP Endpoint (SSE)

1. **Create or edit Claude Desktop config:**

   **Location:** `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS)

   ```json
   {
     "mcpServers": {
       "testkube": {
         "url": "https://api.testkube.io/organizations/tkcorg_YOUR_ORG_ID/environments/tkcenv_YOUR_ENV_ID/mcp",
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
   - `tkcorg_YOUR_ORG_ID` with your Testkube organization ID
   - `tkcenv_YOUR_ENV_ID` with your Testkube environment ID
   - `YOUR_API_TOKEN_HERE` with your Testkube API token

2. **Restart Claude Desktop**

### Claude Code

Use the following to add the Docker MCP Server to Claude Code

```bash
claude mcp add testkube -- docker run --rm -i \ 
   -e TK_ACCESS_TOKEN=${TK_ACCESS_TOKEN} \
   -e TK_ORG_ID=${TK_ORG_ID} \
   -e TK_ENV_ID=${TK_ENV_ID} \
   testkube/mcp-server:latest mcp serve
```

### Usage

Claude Desktop provides conversational access to your Testkube resources:

```text
Can you show me all my test workflows and their recent execution status?

I need to create a new workflow for testing my Python application.
Can you help me set this up?
```



## Example Claude Workflows

### Automated Debugging Session

```text
I need help with my failed test execution "api-tests-123".
Can you:
1. Get the execution details
2. Show me the logs
3. Check if there are any artifacts
4. Analyze what went wrong
5. Suggest next steps
```

### Test Analysis and Reporting

```text
Analyze my test execution trends for the last week.
Show me which workflows are failing most often and help me create a summary report for my team.
```
