```yaml showLineNumbers title="Basic Promptfoo Workflow"
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: promptfoo-getting-started
  namespace: testkube
  labels:
    type: ai
spec:
  content:
    git:
      uri: https://github.com/promptfoo/promptfoo.git
      revision: main
      cone: true
      paths:
        - examples/getting-started
  container:
    workingDir: /data/repo/examples/getting-started
    image: node:22-bookworm-slim
    env:
      - name: HOME
        value: /data
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
    - name: Run promptfoo eval
      shell: npx --yes promptfoo@latest eval -o results.json -o results.html
    - name: Save report
      condition: always
      artifacts:
        paths:
          - results.json
          - results.html
```
