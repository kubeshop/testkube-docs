```yaml showLineNumbers title="Basic Promptfoo Workflow"
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: promptfoo-getting-started
  namespace: testkube
  labels:
    docs: example
    type: ai
spec:
  content:
    git:
      uri: https://github.com/promptfoo/promptfoo.git
      revision: 0.126.0
      cone: true
      paths:
        - examples/getting-started
  container:
    workingDir: /data/repo/examples/getting-started
    image: node:22-bookworm-slim
    env:
      - name: HOME
        value: /data
      - name: npm_config_cache
        value: /root/.npm
      - name: PROMPTFOO_DISABLE_TELEMETRY
        value: "1"
      - name: CI
        value: "true"
      - name: OPENAI_API_KEY
        value: '{{credential("OPENAI_API_KEY")}}'
    resources:
      requests:
        cpu: 500m
        memory: 1Gi
  steps:
    - name: Run Promptfoo evaluation
      cache:
        key: npm-promptfoo-0.126.0
        paths:
          - /root/.npm/_cacache
      shell: |
        set -e
        npm install --global promptfoo@0.126.0
        promptfoo eval -o results.json -o results.html
    - name: Export metrics
      condition: always
      container:
        image: docker.io/kubeshop/testkube-ai-metrics-parser:latest
      shell: testkube-ai-metrics-parser promptfoo -i results.json -o results.lp --stdout
    - name: Save report
      condition: always
      artifacts:
        paths:
          - results.json
          - results.html
          - results.lp
```
