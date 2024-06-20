```yaml showLineNumbers title="Basic K6 Workflow from Template"
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: k6-sample-from-template
  namespace: testkube
  labels:
    docs: example
spec:
  container:
    workingDir: /data/repo/test/k6/executor-tests
    env:
    - name: K6_SYSTEM_ENV
      value: K6_SYSTEM_ENV_value
  steps:
  - name: Run from template
    workingDir: /data/repo/test/k6/executor-tests
    content:
      git:
        uri: https://github.com/kubeshop/testkube
        revision: main
        paths:
        - test/k6/executor-tests/k6-smoke-test.js
    template:
      name: official/k6/v1
      config:
        version: 0.49.0
        run: "k6 run k6-smoke-test.js -e K6_ENV_FROM_PARAM=K6_ENV_FROM_PARAM_value"
```
