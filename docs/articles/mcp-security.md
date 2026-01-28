# Testkube MCP Server Security & Compliance

The **Testkube MCP Server** integrates with your existing Testkube security infrastructure, ensuring all operations are authenticated, authorized, and auditable.

## How MCP Server Works Securely

The MCP Server performs actions on behalf of users or services using API tokens or user credentials:

- **Authentication**: Uses API tokens or user JWT tokens
- **Authorization**: Respects all [Role-Based Access Control](/articles/environments-best-practices) (RBAC) policies
- **Audit Logging**: All actions are logged in [Audit Logs](/articles/audit-logs)
- **Token Scopes**: API tokens can be scoped to specific environments and permissions

This means the MCP Server operates within your existing security boundaries - it cannot access resources the user or API token doesn't have permission for.

## Authentication Methods

### API Tokens (Recommended for MCP)

[API Tokens](/articles/api-token-management) provide machine-to-machine authentication ideal for MCP Server usage:

```json
{
  "mcpServers": {
    "testkube": {
      "url": "https://api.testkube.io/organizations/{org_id}/environments/{env_id}/mcp",
      "transport": {
        "type": "sse"
      },
      "headers": {
        "Authorization": "Bearer YOUR_API_TOKEN"
      }
    }
  }
}
```

API tokens support two roles:

- **Admin tokens**: Full access to all environments in the organization
- **Member tokens**: Limited access with specific environment permissions (Read, Run, or Write)

:::tip Token Security
Use member tokens with minimal required permissions. Tokens can be time-limited and rotated as needed.
:::

### User JWT Tokens (CLI/Docker)

When using the CLI or Docker setup, the MCP Server uses the authenticated user's credentials from their Testkube context.

## Data Flow & Privacy

### Hosted MCP Endpoint

When using the hosted MCP endpoint (`https://api.testkube.io/.../mcp`):

- Requests are authenticated using your API token
- Data flows through Testkube's Control Plane infrastructure
- All standard security controls apply (authentication, authorization, audit logging)

### Local MCP Server (CLI/Docker)

When running MCP Server locally via CLI or Docker:

- The MCP Server connects to your Testkube Control Plane using configured credentials
- Your AI tool communicates with the local MCP Server process
- Data flows: AI Tool ↔ Local MCP Server ↔ Testkube Control Plane

The AI tool you're using (VS Code, Cursor, Claude Desktop, etc.) may send MCP data to its own LLM provider. Review your AI tool's privacy policies to understand how data is handled.

## Access Control Best Practices

### Limit Token Permissions

Create API tokens with the minimum required permissions:

- Use **Read** permissions for analysis and monitoring use cases
- Use **Run** permissions when you need to execute workflows
- Use **Write** permissions only when creating or modifying resources

### Environment Segmentation

Use separate API tokens for different environments:

- Development environments: Broader permissions for experimentation
- Production environments: Restricted read-only access

### Token Rotation

Regularly rotate API tokens and set expiration dates to limit exposure if a token is compromised.

## Audit & Compliance

All MCP Server operations are logged in [Audit Logs](/articles/audit-logs):

- API calls are attributed to the user or API token
- Logs include action type, timestamp, and affected resources
- Audit logs can be exported for compliance reviews
- Default retention: 180 days (configurable)

This provides full visibility into what actions are being performed through the MCP Server and by whom.

## Network Security

### Firewall Requirements

The MCP Server needs outbound HTTPS access to:

- `api.testkube.io` (or your On-Prem Control Plane URL)

No inbound connections are required when using CLI or Docker setups.

### Corporate Proxies

MCP Server respects standard HTTP proxy environment variables:

```bash
export HTTP_PROXY=http://proxy.domain:8080
export HTTPS_PROXY=https://proxy.domain:8443
testkube mcp serve
```

## Additional Resources

- [MCP Server Overview](/articles/mcp-overview)
- [API Token Management](/articles/api-token-management)
- [Audit Logs](/articles/audit-logs)
- [Environments & Access Control](/articles/environments-best-practices)
