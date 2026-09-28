# Use Alternative Models with Testkube AI

Testkube's **OpenAI Compatible** provider can connect to models beyond OpenAI when a gateway or model server exposes the expected API. Choose the service according to where inference runs:

| Service     | Use it for                                                    | Request path                   |
| ----------- | ------------------------------------------------------------- | ------------------------------ |
| **LiteLLM** | Hosted providers with different APIs, such as Claude Sonnet 5 | Testkube → LiteLLM → Anthropic |
| **vLLM**    | Serving downloadable model weights on your infrastructure     | Testkube → vLLM → local model  |

vLLM cannot host Claude or translate requests to Anthropic. LiteLLM performs that translation. Neither option guarantees every model supports Testkube's tools, streaming, or structured output requirements; test your intended AI workflow before adoption.

## Prerequisites

For Testkube, first [enable AI](/articles/ai-configuration). The examples below independently test the model endpoint on Kubernetes; they do not install Testkube. You need `kubectl`, Python 3, registry access, and outbound HTTPS. LiteLLM additionally needs an Anthropic API key with access to `claude-sonnet-5`; inference is billable.

The vLLM example targets an ARM64 CPU cluster with approximately 8 GiB available memory. Its tiny `Qwen/Qwen2.5-0.5B-Instruct` model is a connectivity fixture, not a recommended Testkube agent model. For other hardware, use the corresponding [vLLM image and installation instructions](https://docs.vllm.ai/en/latest/getting_started/installation/).

Download [litellm.yaml](/examples/ai-model-proxies/litellm.yaml), [vllm.yaml](/examples/ai-model-proxies/vllm.yaml), and [smoke.py](/examples/ai-model-proxies/smoke.py) into your working directory, saving them with the filenames shown. The manifests pin image versions/digests and include resource limits, startup/readiness probes, and internal Services. Run one server at a time on small clusters. These single-replica resource limits are for testing, not production sizing.

Select your target Kubernetes context before running the commands:

```bash
kubectl config get-contexts
export KUBE_CONTEXT="<your-context>"
kubectl --context "$KUBE_CONTEXT" create namespace llm-proxy-doc-test
export PROXY_API_KEY="sk-$(openssl rand -hex 24)"
printf '%s' "$PROXY_API_KEY" |
  kubectl --context "$KUBE_CONTEXT" -n llm-proxy-doc-test create secret generic proxy-auth \
    --from-file=api-key=/dev/stdin
```

Keep shell tracing disabled. These commands pass secret values through stdin rather than command arguments. Do not commit keys or rendered Secrets.

## Option 1: LiteLLM for Claude

Make `ANTHROPIC_API_KEY` available in your shell through your secret manager. The proxy keeps this upstream credential separate from the client-facing proxy key.

```bash
: "${ANTHROPIC_API_KEY:?Set ANTHROPIC_API_KEY securely first}"
printf '%s' "$ANTHROPIC_API_KEY" |
  kubectl --context "$KUBE_CONTEXT" -n llm-proxy-doc-test create secret generic anthropic-api \
    --from-file=api-key=/dev/stdin
kubectl --context "$KUBE_CONTEXT" -n llm-proxy-doc-test apply -f litellm.yaml
kubectl --context "$KUBE_CONTEXT" -n llm-proxy-doc-test rollout status deployment/litellm --timeout=10m
kubectl --context "$KUBE_CONTEXT" -n llm-proxy-doc-test port-forward service/litellm 4000:4000
```

The manifest contains this mapping, following [LiteLLM's Anthropic integration](https://docs.litellm.ai/docs/providers/anthropic):

```yaml
model_list:
  - model_name: claude-sonnet-5 # Identifier clients send
    litellm_params:
      model: anthropic/claude-sonnet-5 # Upstream provider/model
      api_key: os.environ/ANTHROPIC_API_KEY
```

In another shell with `PROXY_API_KEY` available, run:

```bash
python3 smoke.py http://127.0.0.1:4000/v1 claude-sonnet-5 --tools
```

This checks authentication, model listing, unknown-model rejection, real chat, complete streaming, and a harmless tool-call round trip. Readiness and model listing alone do not prove Anthropic access. This database-free demo rejects unknown proxy keys with HTTP 400 (`no_db_connection`); scoped virtual keys require a database.

## Option 2: vLLM for local inference

Stop the LiteLLM port-forward and remove its deployment before starting vLLM on a memory-limited cluster:

```bash
kubectl --context "$KUBE_CONTEXT" -n llm-proxy-doc-test delete -f litellm.yaml --ignore-not-found
kubectl --context "$KUBE_CONTEXT" -n llm-proxy-doc-test apply -f vllm.yaml
kubectl --context "$KUBE_CONTEXT" -n llm-proxy-doc-test rollout status deployment/vllm --timeout=15m
kubectl --context "$KUBE_CONTEXT" -n llm-proxy-doc-test port-forward service/vllm 8000:8000
```

The server downloads public weights, exposes `local-chat`, limits context to 2,048 tokens, and reserves 1 GiB for KV cache. Keep `enableServiceLinks: false`: Kubernetes otherwise injects a conflicting `VLLM_PORT` variable from the Service name. In another shell:

```bash
python3 smoke.py http://127.0.0.1:8000/v1 local-chat
```

This fixture tests chat and streaming, not automatic tool calling. Production agent models require a suitable chat template and [model-specific tool parser](https://docs.vllm.ai/en/latest/features/tool_calling/), followed by application-level testing.

## Connect Testkube

In the Dashboard's [model settings](/articles/ai-models), choose **OpenAI Compatible**, add the proxy credential, and enter the appropriate base URL and exposed model name:

| Service | Base URL inside this cluster                                  | Model             |
| ------- | ------------------------------------------------------------- | ----------------- |
| LiteLLM | `http://litellm.llm-proxy-doc-test.svc.cluster.local:4000/v1` | `claude-sonnet-5` |
| vLLM    | `http://vllm.llm-proxy-doc-test.svc.cluster.local:8000/v1`    | `local-chat`      |

The endpoint must be reachable from Testkube's AI service. Cluster DNS addresses work only within the connected cluster/network; a SaaS control plane needs network connectivity to reach a private cluster Service. The examples assume the default `cluster.local` DNS domain; adjust it if your cluster uses another domain. Use a reachable, authenticated HTTPS endpoint for remote deployments.

For self-hosted platform defaults, merge this into your existing Enterprise Helm values. Create `proxy-auth` containing the proxy key in the **Testkube control-plane namespace**, even when the proxy runs elsewhere:

```yaml
testkube-ai-service:
  enabled: true
  inference:
    defaults:
      url: http://litellm.llm-proxy-doc-test.svc.cluster.local:4000/v1
      secretRef: proxy-auth
      secretRefKey: api-key
    agent:
      - model: claude-sonnet-5
        default: true
```

For vLLM, substitute its URL and `local-chat`. Tasks fall back to the default agent; embeddings are disabled by omission. When merging existing values, remove any inherited `tasks`/`embeddings` overrides explicitly. Claude is not an embeddings model.

## Production notes and troubleshooting

- **LiteLLM:** provider quotas remain shared across replicas. Bound concurrency, output tokens, retries, and timeouts; repeated retries can multiply costs. Use scoped client keys instead of distributing the demo's administrative master key. Add shared Redis for distributed routing/rate-limit state and PostgreSQL when using persistent virtual keys/budgets; follow [production guidance](https://docs.litellm.ai/docs/proxy/prod).
- **vLLM:** size weights, KV cache, context length, and concurrency together. Production generally needs appropriately sized accelerators and persistent model storage. The demo's ephemeral cache redownloads weights after pod replacement; additional replicas duplicate memory and can create download spikes.
- **Both:** use private networking, TLS where traffic crosses trust boundaries, restricted access, and credential rotation. Restart pods after changing environment-backed Secrets. Monitor latency, queue depth, errors, token usage, and memory; CPU-only scaling signals miss inference bottlenecks. Configure ingress streaming without buffering and with sufficient idle timeouts. Avoid logging prompts, tool results, or credentials; hosted inference sends data to the upstream provider.
- **Failures:** 401/403 suggests credentials/access; 404 suggests the URL or model alias; 429 indicates quota/concurrency limits. Inspect pod events for image, architecture, or OOM failures. A healthy proxy can still fail upstream requests. Do not silently drop unsupported parameters to make requests succeed.

After testing, stop port-forwards and remove only the dedicated namespace:

```bash
kubectl --context "$KUBE_CONTEXT" delete namespace llm-proxy-doc-test
unset PROXY_API_KEY ANTHROPIC_API_KEY KUBE_CONTEXT
```
