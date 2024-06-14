```yaml showLineNumbers title="Basic Maven Workflow"
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: maven-sample
  namespace: testkube
spec:
  content:
    git:
      uri: https://github.com/kubeshop/testkube
      revision: main
      paths:
        - contrib/executor/maven/examples/hello-maven
  container:
    workingDir: /data/repo/contrib/executor/maven/examples/hello-maven
    resources:
      requests:
        cpu: 256m
        memory: 256Mi
  steps:
    - name: Run tests
      run:
        image: maven:3.9.6-eclipse-temurin-11-focal
        env:
          - name: TESTKUBE_MAVEN
            value: "true"
        shell: |
          mvn test
```
