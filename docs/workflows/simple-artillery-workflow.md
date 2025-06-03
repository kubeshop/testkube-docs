```yaml showLineNumbers title="Basic Artillery Workflow"
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: artillery-sample
  namespace: testkube
  labels:
    docs: example
spec:
  content:
    git:
      uri: https://github.com/kubeshop/testkube
      revision: main
      paths:
      - test/artillery/artillery-smoke-test.yaml
  container:
    workingDir: /data/repo/test/artillery
  steps:
  - name: Run Artillery tests
    run:
      image: artilleryio/artillery:2.0.9
      shell: /home/node/artillery/bin/run run artillery-smoke-test.yaml
```
