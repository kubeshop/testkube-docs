```yaml showLineNumbers title="Basic Gradle Workflow from Template"
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: gradle-sample-from-template
  namespace: testkube
  labels:
    docs: example
spec:
  content:
    git:
      uri: https://github.com/kubeshop/testkube
      revision: main
      paths:
      - contrib/executor/gradle/examples/hello-gradle
  container:
    workingDir: /data/repo/contrib/executor/gradle/examples/hello-gradle
    env:
    - name: TESTKUBE_GRADLE
      value: "true"
  steps:
  - name: Run from template
    template:
      name: official/gradle/v1
      config:
        version: 8.5.0-jdk11
```
