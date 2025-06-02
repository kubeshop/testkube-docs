```yaml showLineNumbers title="Basic Postman Workflow"
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: postman-sample
  namespace: testkube
  labels:
    docs: example
spec:
  // highlight-next-line
  content:
    git:
      uri: https://github.com/kubeshop/testkube
      revision: main
      paths:
        - test/postman/postman-executor-smoke-without-envs.postman_collection.json
  container:
    workingDir: /data/repo/test/postman
    resources:
      requests:
        cpu: 256m
        memory: 128Mi
  // highlight-next-line
  steps:
    - name: Run test
      run:
        image: postman/newman:6-alpine
        args:
          - run
          - postman-executor-smoke-without-envs.postman_collection.json
```
