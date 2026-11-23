```yaml showLineNumbers title="Basic Inspect AI Workflow"
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: inspect-ai-getting-started
  namespace: testkube
  labels:
    docs: example
    type: ai
spec:
  config:
    model:
      type: string
      default: gpt-5.4-mini
    minAccuracy:
      type: string
      default: "0.5"
  content:
    files:
      - path: /data/requirements.txt
        content: |
          inspect-ai
          openai
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
          import glob, json, os, sys

          THRESHOLD = float(os.environ["MIN_ACCURACY"])

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
      - name: PIP_CACHE_DIR
        value: /root/.cache/pip
      - name: MIN_ACCURACY
        value: "{{config.minAccuracy}}"
      - name: OPENAI_API_KEY
        value: '{{credential("OPENAI_API_KEY")}}'
    resources:
      requests:
        cpu: 500m
        memory: 1Gi
  steps:
    - name: Run evaluation and quality gate
      cache:
        key: 'pip-{{ hash_files("requirements.txt") }}'
        restoreKeys:
          - "pip-"
        paths:
          - /root/.cache/pip
      shell: |
        set -e
        pip install -r requirements.txt
        inspect eval task.py --model openai/{{config.model}} --log-dir ./logs --log-format json
        python gate.py
    - name: Export metrics
      condition: always
      container:
        image: docker.io/kubeshop/testkube-ai-metrics-parser:latest
      shell: testkube-ai-metrics-parser inspect-ai -i 'logs/*.json' -o metrics/eval.lp --tag model={{config.model}} --stdout
    - name: Save logs and metrics
      condition: always
      artifacts:
        paths:
          - logs/*.json
          - metrics/*.lp
```
