```yaml showLineNumbers title="Basic Inspect AI Workflow"
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: inspect-ai-getting-started
  namespace: testkube
  labels:
    type: ai
spec:
  content:
    files:
      - path: /data/task.py
        content: |
          from inspect_ai import Task, task
          from inspect_ai.dataset import Sample
          from inspect_ai.scorer import includes
          from inspect_ai.solver import generate

          @task
          def capitals():
              return Task(
                  dataset=[
                      Sample(input="What is the capital of France? Reply with only the city name.", target="Paris"),
                      Sample(input="What is the capital of Japan? Reply with only the city name.", target="Tokyo"),
                      Sample(input="What is the capital of Sweden? Reply with only the city name.", target="Stockholm"),
                  ],
                  solver=generate(),
                  scorer=includes(),
              )
      - path: /data/gate.py
        content: |
          import glob, json, sys

          THRESHOLD = 0.5   # fail the workflow below this accuracy

          files = sorted(glob.glob("logs/*.json"))
          if not files:
              print("No Inspect log found"); sys.exit(1)
          data = json.load(open(files[-1]))

          def find_accuracy(o):
              out = []
              if isinstance(o, dict):
                  for k, v in o.items():
                      if k == "accuracy" and isinstance(v, dict) and "value" in v:
                          out.append(v["value"])
                      else:
                          out += find_accuracy(v)
              elif isinstance(o, list):
                  for x in o:
                      out += find_accuracy(x)
              return out

          accs = find_accuracy(data)
          acc = accs[0] if accs else None
          print(f"accuracy={acc} threshold={THRESHOLD}")
          if acc is None or acc < THRESHOLD:
              print("Quality gate FAILED"); sys.exit(1)
          print("Quality gate PASSED")
  container:
    workingDir: /data
    image: python:3.12-slim
    env:
      - name: HOME
        value: /data
      - name: OPENAI_API_KEY
        value: '{{credential("OPENAI_API_KEY")}}'
    resources:
      requests:
        cpu: 500m
        memory: 1Gi
  steps:
    - name: Install, eval and gate
      shell: |
        set -e
        pip install --no-cache-dir inspect-ai openai
        inspect eval task.py --model openai/gpt-5.4-mini --log-dir ./logs --log-format json
        python gate.py
    - name: Save logs
      condition: always
      artifacts:
        paths:
          - logs/*.json
```
