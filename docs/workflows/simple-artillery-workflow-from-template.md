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
    workingDir: /data/repo/test/artillery
  steps:
  - name: Run from template
    content:
      git:
        uri: https://github.com/kubeshop/testkube
        revision: main
        paths:
        - test/artillery/artillery-smoke-test.yaml
    workingDir: /data/repo/test/artillery
    template:
      name: official/artillery/v1
      config:
        version: 2.0.9
        run: "artillery run artillery-smoke-test.yaml"
```
