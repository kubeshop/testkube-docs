```yaml showLineNumbers title="Basic LM Evaluation Harness Workflow"
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: lm-eval-harness-getting-started
  namespace: testkube
  labels:
    docs: example
    type: ai
spec:
  config:
    model:
      type: string
      default: gpt-4o-mini
    limit:
      type: integer
      default: 5
  content:
    files:
      - path: /data/requirements.txt
        content: |
          lm-eval[api]
  container:
    workingDir: /data
    image: python:3.12-slim
    env:
      - name: HOME
        value: /data
      - name: PIP_CACHE_DIR
        value: /root/.cache/pip
      - name: HF_HOME
        value: /data/hf
      - name: HF_HUB_DISABLE_TELEMETRY
        value: "1"
      - name: OPENAI_API_KEY
        value: '{{credential("OPENAI_API_KEY")}}'
    resources:
      requests:
        cpu: "1"
        memory: 2Gi
  steps:
    - name: Install and run lm-eval
      cache:
        key: 'pip-{{ hash_files("requirements.txt") }}'
        restoreKeys:
          - "pip-"
        paths:
          - /root/.cache/pip
      shell: |
        set -e
        pip install -r requirements.txt
        lm_eval --model local-chat-completions \
          --model_args model={{config.model}},base_url=https://api.openai.com/v1/chat/completions,num_concurrent=1 \
          --tasks gsm8k \
          --apply_chat_template \
          --num_fewshot 0 \
          --limit {{config.limit}} \
          --output_path ./results
    - name: Export metrics
      condition: always
      container:
        image: docker.io/kubeshop/testkube-ai-metrics-parser:latest
      shell: testkube-ai-metrics-parser lm-eval -i 'results/**/*.json' -o results/metrics.lp --tag model={{config.model}} --stdout
    - name: Save results
      condition: always
      artifacts:
        paths:
          - results/**/*.json
          - results/metrics.lp
```
