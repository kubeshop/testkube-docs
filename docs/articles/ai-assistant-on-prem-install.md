# Testkube AI Assistant On-Prem Installation

[Testkube AI Assistant](./ai-assistant-overview) supports any LLM service that implements the OpenAI API specification, giving you full flexibility in where and how you run the model.

## Configurations

:::tip
Ensure that traffic to **both** your LLM endpoint _and_ the Testkube AI Service API is allowed by your firewalls.
:::

### Setting Up API Access

First, create a Kubernetes secret that holds the API key in the same namespace where the Testkube control-plane is installed:

```sh
kubectl -n <namespace> create secret generic <secret name> \
  --from-literal=LLM_API_KEY=<api key>
```

### Configuring the Helm Chart

In the `testkube-enterprise` chart you configure **two** components:

1. **testkube-ai-service** – the backend that communicates with the LLM.
2. **testkube-cloud-ui** – the web UI that surfaces AI Assistant features.

```yaml
# Activate and wire the AI service
testkube-ai-service:
  enabled: true
  llmApi:
    # Optional URL for custom LLM API services
    # (defaults to OpenAI API when omitted)
    url: ""
    # K8s secret that stores your LLM_API_KEY
    secretRef: "<secret name>"

# Enable AI Assistant features in the UI and tell it
# where the ai-service is reachable
testkube-cloud-ui:
  ai:
    # -- Enable Testkube AI features
    enabled: true
    # -- Testkube AI service API URI
    aiServiceApiUri: "https://ai.<your-domain>"
```

### Using OpenAI

If you are connecting directly to OpenAI, leave `llmApi.url` empty and only reference the secret:

```yaml
testkube-ai-service:
  enabled: true
  llmApi:
    secretRef: "<secret name>"
```

### Using Self-Hosted LLMs or Third-Party Proxies

For self-hosted models (e.g., vLLM, LiteLLM, OpenLLM) or commercial gateways that expose the OpenAI API:

```yaml
testkube-ai-service:
  enabled: true
  llmApi:
    url: "http://your-llm-service:8000/v1"
    secretRef: "<secret name>"
```

### Trying AI Assistant with the Testkube Hosted LLM Proxy (Trials & Demos)

If you just want to explore AI Assistant without operating your own model, you can use our hosted LLM proxy at **llm.testkube.io**.  
Request an evaluation license from [testkube.io](https://testkube.io) and point the AI service to the proxy:

```yaml
testkube-ai-service:
  enabled: true
  llmApi:
    url: "https://llm.testkube.io" # hosted proxy
    # No secretRef needed – authentication is handled
    # via the Testkube license key you already supplied
```

:::warning
The hosted proxy is intended **only for trials, demos, and onboarding**. It has usage limits and is **not** recommended for production workloads.
:::

### Operating Behind an HTTP Proxy

If egress traffic is routed through a corporate proxy, inject the proxy variables into the AI service pod:

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
