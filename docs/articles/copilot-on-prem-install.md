# Testkube Copilot On-Prem Installation

[Testkube Copilot](./copilot-overview) relies on the [OpenAI
API](https://openai.com/index/openai-api/), so to get started one needs to
create account there and obtain an API key.

## Configurations

:::tip

Make sure to allow traffic to the OpenAI API within your firewall
configurations.

:::

Create a secret containing that API key in the namespace with the Testkube
control plane release:

```sh
kubectl -n <namespace> create secret generic <secret name> --from-literal=OPENAI_API_KEY=<openai api key>
```

Configure the following value in the `testkube-enterprise` chart:

```yaml
testkube-ai-service:
  enabled: true
  openAi:
    secretRef: <secret name>
```
