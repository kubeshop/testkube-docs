```yaml showLineNumbers title="Basic LM Evaluation Harness Workflow"
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: lm-eval-harness-getting-started
  namespace: testkube
  labels:
    type: ai
spec:
  container:
    workingDir: /data
    image: python:3.12-slim
    env:
      - name: HOME
        value: /data
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
      shell: |
        set -e
        pip install --no-cache-dir "lm-eval[api]"
        lm_eval --model local-chat-completions \
          --model_args model=gpt-4o-mini,base_url=https://api.openai.com/v1/chat/completions,num_concurrent=1 \
          --tasks gsm8k \
          --apply_chat_template \
          --num_fewshot 0 \
          --limit 5 \
          --output_path ./results
    - name: Save results
      condition: always
      artifacts:
        paths:
          - results/**/*.json
```
