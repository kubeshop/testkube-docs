```yaml showLineNumbers title="Parallel DeepEval Workflow"
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: deepeval-junit-reporter-test
  namespace: testkube
  labels:
    type: ai
spec:
  content:
    git:
      uri: https://github.com/olensmar/deepeval-junit-reporter
  container:
    workingDir: /data/repo
    image: python:3.12.6-alpine3.20
    env:
      - name: OPENAI_API_KEY
        value: '{{credential("OPENAI_API_KEY")}}'
    resources:
      requests:
        cpu: 256m
        memory: 256Mi
  job:
    activeDeadlineSeconds: 180
  steps:
    - name: Run tests
      parallel:
        matrix:
          model:
            - gpt-4o
            - gpt-5
            - gpt-5.2
        description: "Model: {{matrix.model}}"
        transfer:
          - from: /data/repo
        container:
          env:
            - name: OPENAI_MODEL_NAME
              value: "{{matrix.model}}"
        shell: |
          pip install --upgrade pip
          pip install -U deepeval
          deepeval test run test_junitreport.py
        artifacts:
          paths:
            - test_reports/*.xml
```
