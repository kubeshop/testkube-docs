# AI Assistant Security & Compliance

The **Testkube AI Assistant** operates within your existing security framework and respects all authentication, authorization, and audit logging policies.

## How AI Assistant Works Securely

AI Assistant performs actions on behalf of authenticated users using their existing credentials and permissions:

- **Authentication**: Uses the JWT token of the logged-in user
- **Authorization**: Respects all [Role-Based Access Control](/articles/environments-best-practices) (RBAC) policies
- **Read-Only Operations**: AI Assistant tools are limited to read-only operations
- **Audit Logging**: All actions are logged in [Audit Logs](/articles/audit-logs) under the user's identity

This means AI Assistant has the same access as the user - no more, no less. If a user has read-only permissions in an environment, AI Assistant will be similarly restricted.

## Data Privacy & LLM Configuration

Where your data is processed depends on how you configure the AI Assistant:

### Self-Hosted LLM (Full Control)

When using your own LLM infrastructure, all data stays within your environment:

```yaml
testkube-ai-service:
  enabled: true
  llmApi:
    url: "http://your-llm-service:8000/v1"
    secretRef: "<secret name>"
```

- Data never leaves your infrastructure
- Supports air-gapped deployments
- Full compliance with data residency requirements

See [AI Configuration Reference](/articles/ai-configuration) for setup details.

### Third-Party LLM Providers

When using external providers (OpenAI, Azure OpenAI, etc.) with your API keys:

```yaml
testkube-ai-service:
  enabled: true
  llmApi:
    secretRef: "<secret with your API key>"
```

:::warning Data Sharing
Your queries and Testkube context (logs, workflow names, execution details) will be sent to the LLM provider's API. Review the provider's data handling policies to ensure they meet your requirements.
:::

### Testkube Hosted Proxy (Evaluation Only)

The hosted proxy is for trials and demos only:

```yaml
testkube-ai-service:
  enabled: true
  llmApi:
    url: "https://llm.testkube.io"
```

:::danger Not for Production
Do not use the hosted proxy for production or sensitive environments.
:::

## Disabling Telemetry

To disable diagnostic telemetry collection:

```yaml
testkube-ai-service:
  enabled: true
  extraEnvVars:
    - name: DO_NOT_TRACK
      value: "true"
```

See [Telemetry Configuration](/articles/telemetry) for more details.

## Network Configuration

### Corporate Proxy

```yaml
testkube-ai-service:
  enabled: true
  extraEnvVars:
    - name: HTTP_PROXY
      value: "http://proxy.domain:8080"
    - name: HTTPS_PROXY
      value: "https://proxy.domain:8443"
```

### Air-Gapped Environments

AI Assistant supports fully disconnected deployments when using self-hosted LLM infrastructure. See [Repackaging Testkube](/articles/repackaging-testkube) for air-gapped setup guidance.

## Additional Resources

- [AI Assistant Overview](/articles/ai-assistant-overview)
- [AI Configuration Reference](/articles/ai-configuration)
- [Audit Logs](/articles/audit-logs)
- [Environments & Access Control](/articles/environments-best-practices)
