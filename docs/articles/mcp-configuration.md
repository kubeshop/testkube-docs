# MCP Server Configuration Examples

This guide provides configuration examples for integrating the [Testkube MCP Server](/articles/mcp-overview) with various 
AI tools and development environments.

## GitHub Copilot (VS Code)

GitHub Copilot with Agent mode in VS Code provides excellent agentic capabilities for multi-step testing workflows.

### Configuration

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

### Configuration

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

### Usage Examples

```text
Create a test workflow that checks my REST API endpoints, then run it and show me the results.
```

```text
Look at my recent test failures and help me understand what's causing them. Check the logs and artifacts.
```

## Claude Desktop

For direct interaction with Claude through the desktop application.

### Configuration

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

### Debug Commands

```bash
# Test MCP server manually
testkube mcp serve --debug

# Verify CLI authentication
testkube get workflows

# Check current context
testkube get context
```
