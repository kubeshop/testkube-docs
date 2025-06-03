```yaml showLineNumbers title="Basic Postman Workflow from Template"
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: postman-sample-from-template
  namespace: testkube
  labels:
    docs: example
spec:
  content:
    git:
      uri: https://github.com/kubeshop/testkube
      revision: main
      paths:
      - test/postman/postman-executor-smoke.postman_collection.json
  container:
    workingDir: /data/repo/test/postman
  steps:
  - name: Run from
    template:
      name: official/postman/v1
      config:
        run: "newman run postman-executor-smoke.postman_collection.json --env-var TESTKUBE_POSTMAN_PARAM=TESTKUBE_POSTMAN_PARAM_value"
```
