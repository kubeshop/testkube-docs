```yaml showLineNumbers title="kube-burner Workflow"
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: kube-burner-pod-density
  namespace: testkube
  labels:
    docs: example
spec:
  config:
    iterations:
      type: integer
      default: 10
      description: Number of job iterations; each iteration creates one namespace with one pod
    qps:
      type: integer
      default: 5
      description: Maximum number of API requests per second kube-burner sends
    readyThreshold:
      type: string
      default: 30s
      description: Maximum P99 latency for a pod to become Ready before the test fails
  pod:
    serviceAccountName: kube-burner
  content:
    files:
      - path: /data/config.yml
        content: |
          global:
            gc: true
            measurements:
              - name: podLatency
                thresholds:
                  - conditionType: Ready
                    metric: P99
                    threshold: {{ config.readyThreshold }}
          metricsEndpoints:
            - indexer:
                type: local
                metricsDirectory: /data/metrics
          jobs:
            - name: pod-density
              jobType: create
              jobIterations: {{ config.iterations }}
              qps: {{ config.qps }}
              burst: {{ config.qps }}
              namespace: kube-burner-pod-density
              namespacedIterations: true
              preLoadImages: false
              podWait: false
              waitWhenFinished: true
              maxWaitTimeout: 5m
              objects:
                - objectTemplate: /data/pod.yml
                  replicas: 1
                  inputVars:
                    containerImage: registry.k8s.io/pause:3.10
      - path: /data/pod.yml
        content: |
          apiVersion: v1
          kind: Pod
          metadata:
            name: pod-density-{{ "{{.Iteration}}" }}-{{ "{{.Replica}}" }}
          spec:
            containers:
              - name: pause
                image: {{ "{{.containerImage}}" }}
                resources:
                  requests:
                    cpu: 1m
                    memory: 8Mi
                  limits:
                    memory: 16Mi
      - path: /data/kube-burner-to-lp.py
        content: |
          import glob
          import json
          import os
          import sys

          metrics_dir, output = sys.argv[1], sys.argv[2]


          def tag(value):
              # Escape the characters that line protocol treats as separators in tag values
              return str(value).replace(",", r"\,").replace("=", r"\=").replace(" ", r"\ ")


          lines = []

          # One record per pod condition, with its latency quantiles in milliseconds
          for path in glob.glob(os.path.join(metrics_dir, "podLatencyQuantilesMeasurement-*.json")):
              for doc in json.load(open(path)):
                  fields = ",".join(
                      f"{key.lower()}={float(doc[key])}"
                      for key in ("P50", "P95", "P99", "max", "avg")
                      if key in doc
                  )
                  lines.append(
                      f"kube_burner_pod_latency_ms,job={tag(doc['jobName'])},"
                      f"condition={tag(doc['quantileName'])} {fields}"
                  )

          # One record per job, with its duration and settings
          summary = os.path.join(metrics_dir, "jobSummary.json")
          if os.path.exists(summary):
              for doc in json.load(open(summary)):
                  config = doc.get("jobConfig", {})
                  lines.append(
                      f"kube_burner_job,job={tag(config.get('name', 'unknown'))} "
                      f"elapsed_seconds={float(doc.get('elapsedTime', 0))},"
                      f"iterations={int(config.get('jobIterations', 0))}i,"
                      f"qps={int(config.get('qps', 0))}i,"
                      f"nodes={int(doc.get('totalNodes', 0))}i,"
                      f"passed={1 if doc.get('passed') else 0}i"
                  )

          with open(output, "w") as f:
              f.write("\n".join(lines) + "\n")
          print(f"Wrote {len(lines)} records to {output}")
          print("\n".join(lines))
  steps:
    - name: Run kube-burner
      workingDir: /data
      container:
        image: quay.io/kube-burner/kube-burner:v2.8.6
      run:
        args:
          - init
          - --config=/data/config.yml
          - --uuid={{ execution.id }}
          - --timeout=15m
    - name: Convert metrics to line protocol
      condition: always
      workingDir: /data
      container:
        image: python:3.13-alpine
      run:
        args:
          - python
          - /data/kube-burner-to-lp.py
          - /data/metrics
          - /data/metrics/kube-burner.lp
      artifacts:
        paths:
          - metrics/**
```
