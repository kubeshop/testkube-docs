```yaml showLineNumbers title="Curl Workflow"
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: curl-sample
  namespace: testkube
  labels:
    docs: example
spec:
  steps:
  - name: Run curl
    container:
      image: curlimages/curl:8.7.1
    shell: curl https://testkube.io
```
