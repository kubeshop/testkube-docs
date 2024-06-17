```yaml showLineNumbers title="Basic Pytest Workflow"
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: sample-pytest
  namespace: testkube
spec:
  content:
    git:
      uri: https://github.com/kubeshop/testkube-examples.git
      revision: main
      paths:
        - Pytest-Test-Workflow
  container:
    workingDir: /data/repo/Pytest-Test-Workflow
    image: kubeshop/testkube-pytest:latest
  steps:
    - name: Run test
      shell: pytest test-api-endpoint.py
```
