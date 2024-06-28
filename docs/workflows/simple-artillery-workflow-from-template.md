```yaml showLineNumbers title="Basic Artillery Workflow from Template"
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: artillery-sample-from-template
  namespace: testkube
  labels:
    docs: example
spec:
  container:
    workingDir: /data/repo/test/artillery/executor-smoke
  steps:
  - name: Run from template
    content:
      git:
        uri: https://github.com/kubeshop/testkube
        revision: main
        paths:
        - test/artillery/executor-smoke/artillery-smoke-test.yaml
    workingDir: /data/repo/test/artillery/executor-smoke
    template:
      name: official/artillery/v1
      config:
        version: 2.0.9
        run: "artillery run artillery-smoke-test.yaml"
```
