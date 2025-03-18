# Testkube Copilot On-Prem Installation

[Testkube Copilot](./copilot-overview) supports LLM services that implement the OpenAI API specification, giving you flexibility in your deployment options.

## Configurations

:::tip

Make sure to allow traffic to your chosen LLM API endpoint within your firewall configurations.

:::

### Setting Up API Access

First, create a secret containing the API key in the namespace with the Testkube control plane release:

```sh
kubectl -n <namespace> create secret generic <secret name> --from-literal=LLM_API_KEY=<api key>
```

### Configuring the Helm Chart

Configure the following values in the `testkube-enterprise` chart:

```yaml
testkube-ai-service:
  enabled: true
  llmApi:
    # Optional URL for custom LLM API services (defaults to OpenAI if not provided)
    url: ""
    # Reference to the secret containing the LLM API token
    secretRef: "<secret name>"
```

### Using OpenAI

If you're using OpenAI directly, simply provide the secret reference without specifying a URL:

```yaml
testkube-ai-service:
  enabled: true
  llmApi:
    secretRef: "<secret name>"
```

### Using Self-Hosted LLMs or Proxies

For self-hosted LLMs or services like LiteLLM, vLLM, or OpenLLM that implement the OpenAI API specification:

```yaml
testkube-ai-service:
  enabled: true
  llmApi:
    url: "http://your-llm-service:8000/v1"
    secretRef: "<secret name>"
```

### Proxy Configuration

If internet access is restricted with an HTTP proxy, use the `extraEnvVars` property:

```yaml
testkube-ai-service:
  enabled: true
  llmApi:
    secretRef: "<secret name>"
  extraEnvVars:
    - name: HTTP_PROXY
      value: "http://proxy.domain:8080"
    - name: HTTPS_PROXY
      value: "https://proxy.domain:8043"
    - name: NO_PROXY
      value: ""
```
