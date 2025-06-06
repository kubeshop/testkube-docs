```yaml showLineNumbers title="Distributed K6 Workflow"
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: distributed-k6
  namespace: testkube
  labels:
    docs: example
spec:
  config:
    duration:
      type: string
      default: 5s
    vus:
      type: integer
      default: 10
    workers:
      type: integer
      default: 3
  content:
    git:
      uri: https://github.com/kubeshop/testkube
      paths:
        - test/k6/k6-smoke-test.js
  steps:
    - name: Run test
      parallel:
        count: config.workers
        transfer:
          - from: /data/repo
        use:
          - name: distribute/evenly
        container:
          workingDir: /data/repo/test/k6
          env:
            - name: K6_SYSTEM_ENV
              value: K6_SYSTEM_ENV_value
            - name: K6_WEB_DASHBOARD
              value: "true"
            - name: K6_WEB_DASHBOARD_EXPORT
              value: /data/k6-test-report.html
          resources:
            requests:
              cpu: 128m
              memory: 128Mi
        paused: true
        run:
          image: grafana/k6:0.49.0
          shell: |
            k6 run k6-smoke-test.js \
              -e K6_ENV_FROM_PARAM=K6_ENV_FROM_PARAM_value \
              --vus {{ config.vus }} \
              --duration {{ shellquote(config.duration) }} \
              --execution-segment {{ index }}/{{ count }}:{{ index + 1 }}/{{ count }}
        artifacts:
          workingDir: /data
          paths:
            - '*.html'

```
