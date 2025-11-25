# Docker MCP Server

The Testkube MCP Server is available on [DockerHub](https://hub.docker.com/repository/docker/kubeshop/testkube-mcp-server) and can
be used in IDEs via stdio and remotely over shttp in local agent scenarios.

:::tip Hosted Alternative
If you don't want to run a local Docker container, consider using the [Hosted MCP Endpoint](./mcp-hosted) from the Testkube Control Plane, which provides direct access without local setup.
:::

## Running the Container

### Prerequisites

The MCP Server Container is always started with `TK_MCP_ENV_MODE=true` and requires an API-Token for authentication since it has no Testkube Context configured.

Either set required environment variables (or pass them directly when starting the container):

```bash
export TK_ACCESS_TOKEN="your_testkube_access_token"
export TK_ORG_ID="your_organization_id"
export TK_ENV_ID="your_environment_id"
```

### Required Environment Variables

- `TK_ACCESS_TOKEN` - Testkube API access token
- `TK_ORG_ID` - Testkube organization ID
- `TK_ENV_ID` - Testkube environment ID

### Optional Environment Variables

- `TK_CONTROL_PLANE_URL` - Testkube API URL (default: https://api.testkube.io), override this for on-prem deployments.
- `TK_DASHBOARD_URL` - Testkube dashboard URL (auto-derived from control plane URL).
- `TK_DEBUG` - Enable debug output (default: false).

## MCP Client Configuration

The Testkube Docker MCP Server can run using both stdio and shttp transports - [Read More](/articles/mcp-cli#mcp-server-transport-modes)

### VSCode / Cursor

Using `stdio` transport:

<!-- prettier-ignore -->
```json
{
  "servers": {
    "testkube": {
      "command": "docker",
      "args": [
        "run", "--rm", "-i",
        "-e", "TK_ACCESS_TOKEN=${TK_ACCESS_TOKEN}",
        "-e", "TK_ORG_ID=${TK_ORG_ID}",
        "-e", "TK_ENV_ID=${TK_ENV_ID}",
        "kubeshop/testkube-mcp-server:latest",
        "mcp", "serve"
      ],
      "type": "stdio"
    }
  }
}
```

Using `shttp` transport:

<!-- prettier-ignore -->
```json
{
  "servers": {
    "testkube": {
      "command": "docker",
      "args": [
        "run", "--rm", "-p", "8080:8080",
        "-e", "TK_ACCESS_TOKEN=${TK_ACCESS_TOKEN}",
        "-e", "TK_ORG_ID=${TK_ORG_ID}",
        "-e", "TK_ENV_ID=${TK_ENV_ID}",
        "kubeshop/testkube-mcp-server:latest",
        "mcp", "serve", "--transport=shttp"
      ],
      "type": "shttp"
    }
  }
}
```

### Claude Desktop Configuration

Using `stdio` transport:

<!-- prettier-ignore -->
```json
{
  "mcpServers": {
    "testkube": {
      "command": "docker",
      "args": [
        "run", "--rm", "-i",
        "-e", "TK_ACCESS_TOKEN=${TK_ACCESS_TOKEN}",
        "-e", "TK_ORG_ID=${TK_ORG_ID}",
        "-e", "TK_ENV_ID=${TK_ENV_ID}",
        "kubeshop/testkube-mcp-server:latest",
        "mcp", "serve"
      ]
    }
  }
}
```

Using `shttp` transport:

<!-- prettier-ignore -->
```json
{
  "mcpServers": {
    "testkube": {
      "command": "docker",
      "args": [
        "run", "--rm", "-p", "8080:8080",
        "-e", "TK_ACCESS_TOKEN=${TK_ACCESS_TOKEN}",
        "-e", "TK_ORG_ID=${TK_ORG_ID}",
        "-e", "TK_ENV_ID=${TK_ENV_ID}",
        "kubeshop/testkube-mcp-server:latest",
        "mcp", "serve",
        "--transport=shttp"
      ]
    }
  }
}
```

### Claude Code Configuration

Use the following to add the Testkube MCP Server to Claude Code

```bash
claude mcp add testkube -- docker run --rm -i \
   -e TK_ACCESS_TOKEN=${TK_ACCESS_TOKEN} \
   -e TK_ORG_ID=${TK_ORG_ID} \
   -e TK_ENV_ID=${TK_ENV_ID} \
   kubeshop/testkube-mcp-server:latest mcp serve
```

## Troubleshooting

### Common Issues

1. **Authentication Errors**: Verify `TK_ACCESS_TOKEN`, `TK_ORG_ID`, and `TK_ENV_ID` are correct.
2. **Network Issues**: Check `TK_CONTROL_PLANE_URL` is accessible.
3. **Permission Errors**: Ensure environment variables are properly set and the provided token has the correct role(s).

### Debug Mode

Enable debug output for troubleshooting:

```bash
docker run --rm -it \
  -e TK_ACCESS_TOKEN="$TK_ACCESS_TOKEN" \
  -e TK_ORG_ID="$TK_ORG_ID" \
  -e TK_ENV_ID="$TK_ENV_ID" \
  -e TK_DEBUG=true \
  kubeshop/testkube-mcp-server:latest
```

## Image Tags

The MCP Server Docker image is released alongside the Testkube CLI. You can use:

- `kubeshop/testkube-mcp-server:latest` - Latest stable release
- `kubeshop/testkube-mcp-server:<version>` - Specific version (e.g., `1.0.0`)

The image supports both `linux/amd64` and `linux/arm64` platforms.
