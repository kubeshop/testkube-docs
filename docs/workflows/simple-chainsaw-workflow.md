```yaml showLineNumbers title="Chainsaw Workflow"
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: simple-chainsaw-test
  namespace: testkube
spec:
  content:
    git:
      uri: https://github.com/cerebro1/chainsaw-testkube-demo.git
  container:
    image: ghcr.io/kyverno/chainsaw:latest
  steps:
  - name: Run test
    shell: |
      chainsaw test /data/repo/chainsaw-test/basic-test
status: {}
```
