```yaml showLineNumbers title="Basic Maven Workflow from Template"
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: maven-sample-from-template
  namespace: testkube
  labels:
    docs: example
spec:
  content:
    git:
      uri: https://github.com/kubeshop/testkube
      revision: main
      paths:
      - contrib/executor/maven/examples/hello-maven
  container:
    workingDir: /data/repo/contrib/executor/maven/examples/hello-maven
    env:
    - name: TESTKUBE_MAVEN
      value: "true"
  steps:
  - name: Run from template
    template:
      name: official/maven/v1
      config:
        version: 3.9.6-eclipse-temurin-11-focal
```
