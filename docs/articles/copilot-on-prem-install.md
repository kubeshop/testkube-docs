# Testkube Copilot On-Prem Installation

[Testkube Copilot](./copilot-overview) relies on the [OpenAI
API](https://openai.com/index/openai-api/), so to get started one needs to
create account there and obtain an API key.

## Configurations

:::tip

Make sure to allow traffic to the OpenAI API within your firewall
configurations.

:::

Create a secret containing the API key in the namespace with the Testkube
control plane release:

```sh
kubectl -n <namespace> create secret generic <secret name> --from-literal=OPENAI_API_KEY=<openai api key>
```

Configure the following values in the `testkube-enterprise` chart:

```yaml
testkube-ai-service:
  enabled: true
  openAi:
    secretRef: <secret name>
```

If internet access is restringed with a Http Proxy, use the `extraEnvVars` property to configure the required environment variables:

```yaml
testkube-ai-service:
  enabled: true
  openAi:
    secretRef: <secret name>
  extraEnvVars:
    - name: HTTP_PROXY
      value: "http://proxy.domain:8080"
    - name: HTTPS_PROXY
      value: "https://proxy.domain:8043"
    - name: NO_PROXY
      value: ""
```