```yaml showLineNumbers title="Basic Pytest Workflow"
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: pytest
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
    image: python:3.8.17-alpine3.18
  steps:
    - name: Run test
      shell: pip install pipenv requests pytest && pytest test-api-endpoint.py
```
