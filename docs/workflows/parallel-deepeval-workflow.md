```yaml showLineNumbers title="Parallel DeepEval Workflow"
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: deepeval-model-comparison
  namespace: testkube
  labels:
    docs: example
    type: ai
spec:
  content:
    files:
      - path: /data/tests/requirements.txt
        content: |
          deepeval
          openai
      - path: /data/tests/test_answers.py
        content: |
          import os

          from deepeval import assert_test
          from deepeval.metrics import AnswerRelevancyMetric
          from deepeval.test_case import LLMTestCase
          from openai import OpenAI

          client = OpenAI()
          MODEL = os.environ["MODEL_UNDER_TEST"]

          def ask(question):
              response = client.chat.completions.create(
                  model=MODEL, messages=[{"role": "user", "content": question}]
              )
              return response.choices[0].message.content

          def check(question, context):
              case = LLMTestCase(input=question, actual_output=ask(question), retrieval_context=context)
              assert_test(case, [AnswerRelevancyMetric(threshold=0.5)])

          def test_refund_policy():
              check("What if these shoes don't fit?",
                    ["All customers are eligible for a 30 day full refund at no extra cost."])

          def test_shipping_time():
              check("How long does shipping take?",
                    ["Standard shipping takes 3 to 5 business days."])
  container:
    workingDir: /data/tests
    image: python:3.12-slim
    env:
      - name: HOME
        value: /data
      - name: PIP_CACHE_DIR
        value: /root/.cache/pip
      - name: DEEPEVAL_RESULTS_FOLDER
        value: /data/tests/results
      - name: DEEPEVAL_TELEMETRY_OPT_OUT
        value: "YES"
      - name: OPENAI_API_KEY
        value: '{{credential("OPENAI_API_KEY")}}'
    resources:
      requests:
        cpu: 500m
        memory: 1Gi
  steps:
    - name: Compare models
      parallel:
        matrix:
          model:
            - gpt-4o
            - gpt-5
            - gpt-5.2
        description: "Model: {{matrix.model}}"
        transfer:
          - from: /data/tests
        container:
          env:
            - name: MODEL_UNDER_TEST
              value: "{{matrix.model}}"
        steps:
          - name: Run DeepEval
            cache:
              key: 'pip-{{ hash_files("requirements.txt") }}'
              restoreKeys:
                - "pip-"
              paths:
                - /root/.cache/pip
            shell: |
              set -e
              pip install -r requirements.txt
              deepeval test run test_answers.py
          - name: Export metrics
            condition: always
            container:
              image: docker.io/kubeshop/testkube-ai-metrics-parser:latest
            shell: testkube-ai-metrics-parser deepeval -i 'results/test_run_*.json' -o results/metrics.lp --tag model={{matrix.model}} --stdout
          - name: Save results
            condition: always
            artifacts:
              paths:
                - results/*.json
                - results/*.lp
```
