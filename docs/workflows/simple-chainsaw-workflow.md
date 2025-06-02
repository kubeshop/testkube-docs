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
  pod:
    serviceAccountName: chainsaw-service-account  
  steps:
  - name: Run test
    shell: |
      chainsaw test --report-format XML --report-path /data/repo --report-name chainsaw-report /data/repo/chainsaw-test/basic-test
    artifacts:
      paths:
        - /data/repo/chainsaw-report.xml
status: {}
```
