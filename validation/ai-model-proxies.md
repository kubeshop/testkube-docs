# Alternative model providers: local validation

Tested on 2026-09-25. Companion to [the guide](../docs/articles/ai-model-proxies.md).

## Environment and versions

- Context `kind-kind`; namespace `llm-proxy-doc-test`; Kubernetes v1.36.1.
- One ARM64 node, 8 CPUs, 8,126,756 KiB allocatable memory; no advertised GPU.
- vLLM `v0.27.0-arm64`, image digest `sha256:d8ad98d4aa9ae41674b825d505184d55c2ef1f4a9c77e732e53c5caf9a9e5d51`.
- Model `Qwen/Qwen2.5-0.5B-Instruct`, downloaded revision `7ae557604adf67be50417f59c2c2f167def9a775`, exposed as `local-chat`. The manifest follows the model repository's default revision; use `--revision` with this commit to reproduce the tested weights exactly.
- LiteLLM `1.102.1`, multi-platform image digest `sha256:87f34979b9f8cb274fac90ca8a4fdda07d8480de22755562a26adeb95ce20d02`; model `anthropic/claude-sonnet-5`, exposed as `claude-sonnet-5`.
- Local Enterprise chart `2.335.0`, AI service subchart `1.36.0`, appVersion `2.12.0`. Charts were rendered only.
- Docs base commit `e6a5700a6c5d518270018398c8c955e4bf7fe4c5`; Node v26.5.0; Docusaurus 3.10.1.

## Results

| Check                                                                | vLLM                                             | LiteLLM → Anthropic          |
| -------------------------------------------------------------------- | ------------------------------------------------ | ---------------------------- |
| Deployment readiness                                                 | Passed                                           | Passed                       |
| In-cluster Service DNS and authenticated `/v1/models`                | Passed                                           | Passed                       |
| Exposed model listed                                                 | `local-chat`                                     | `claude-sonnet-5`            |
| Invalid client key rejected                                          | HTTP 401                                         | HTTP 400, `no_db_connection` |
| Unknown model rejected                                               | HTTP 404                                         | HTTP 400                     |
| Real chat completion                                                 | Passed                                           | Passed                       |
| Streaming content followed by `[DONE]`                               | Passed                                           | Passed                       |
| Harmless `echo` tool call, JSON arguments, tool result, final answer | Not tested; fixture has no automatic tool parser | Passed                       |
| Full Testkube AI conversation                                        | Not tested                                       | Not tested                   |
| Production concurrency/load                                          | Not tested                                       | Not tested                   |

The Claude tests used a real Anthropic credential supplied for this run. No mock backend was used. The credential is not included in these artifacts.

The stdlib [smoke test](../static/examples/ai-model-proxies/smoke.py) asserts the checks above. Model listing and probes alone would not establish inference success.

## Reproduction

Use the guide's Secret setup and the manifests in `static/examples/ai-model-proxies/`. Commands below run from `testkube-docs`; `PROXY_API_KEY` must be available to the test process. Each port-forward runs in another terminal.

```bash
kubectl --context kind-kind -n llm-proxy-doc-test apply -f static/examples/ai-model-proxies/vllm.yaml
kubectl --context kind-kind -n llm-proxy-doc-test rollout status deployment/vllm --timeout=15m
kubectl --context kind-kind -n llm-proxy-doc-test port-forward service/vllm 18000:8000
python3 static/examples/ai-model-proxies/smoke.py http://127.0.0.1:18000/v1 local-chat
```

Stop the port-forward and delete vLLM before deploying LiteLLM:

```bash
kubectl --context kind-kind -n llm-proxy-doc-test delete -f static/examples/ai-model-proxies/vllm.yaml
kubectl --context kind-kind -n llm-proxy-doc-test wait --for=delete pod -l app=vllm --timeout=60s
kubectl --context kind-kind -n llm-proxy-doc-test apply -f static/examples/ai-model-proxies/litellm.yaml
kubectl --context kind-kind -n llm-proxy-doc-test rollout status deployment/litellm --timeout=10m
kubectl --context kind-kind -n llm-proxy-doc-test port-forward service/litellm 14000:4000
python3 static/examples/ai-model-proxies/smoke.py http://127.0.0.1:14000/v1 claude-sonnet-5 --tools
```

Successful smoke output:

```text
PASS model listing
PASS rejection: HTTP 401       # vLLM; LiteLLM returned 400
PASS rejection: HTTP 404       # vLLM; LiteLLM returned 400
PASS chat
PASS streaming
PASS tool round trip           # LiteLLM only
```

Both Service DNS names were additionally requested from their respective pods using the pod's key environment variable; `/v1/models` returned the expected alias.

For Helm, save the guide's Enterprise values block to `/tmp/testkube-proxy-values.yaml`:

```bash
helm template proxy-doc ../testkube-enterprise --namespace testkube \
  -f /tmp/testkube-proxy-values.yaml \
  --set global.certManager.issuerRef=doc-test \
  --show-only charts/testkube-ai-service/templates/configmap.yaml \
  --show-only charts/testkube-ai-service/templates/deployment.yaml
```

The placeholder issuer satisfies unrelated Enterprise templates; no issuer or Testkube resources were created. Assertions confirmed the `/v1` URL, `claude-sonnet-5`, `INFERENCE_CONFIG_FILE`, and `INFERENCE_DEFAULT_API_KEY` sourced from `proxy-auth/api-key`; tasks and embeddings were absent. The equivalent vLLM URL/model substitutions were also rendered and checked.

## Findings and limits

- Initial vLLM startup failed because Kubernetes injected `VLLM_PORT=tcp://…` for the Service named `vllm`. `enableServiceLinks: false` fixed it. `Recreate` avoids overlapping large model pods during this single-replica demo's updates.
- LiteLLM without a database rejects unknown client keys with `400 no_db_connection`; the master key works. The smoke test explicitly recognizes this error type, rather than accepting arbitrary authentication errors. Production virtual keys need persistent storage.
- `env -u DEBUG npm run build` passed. The inherited `DEBUG=release` variable caused an initial generated-server-bundle syntax error. The successful build still reports existing DocCard import and broken-anchor warnings; neither requires disabling build checks.
- Changed-file Prettier checks passed. The generated page and downloadable artifact targets were inspected.
- This establishes model endpoint behavior and chart wiring, not compatibility of every Testkube AI feature or production capacity.

Cleanup: stopped port-forwards, removed the dedicated namespace (including both Secrets), and deleted the temporary proxy key file. Downloaded container images remain cached in kind. Rotate the supplied Anthropic credential because it was shared in chat.
