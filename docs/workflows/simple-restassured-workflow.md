```yaml showLineNumbers title="Basic RestAssured Workflow"
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: rest-assured-sample
spec:
  content:
    git:
      uri: https://github.com/kubeshop/testkube-examples
      revision: main
      paths:
        - Gradle/RestAssured
  container:
    workingDir: /data/repo/Gradle/RestAssured
    resources:
      requests:
        cpu: 512m
        memory: 512Mi
  steps:
    - name: Run tests
      run:
        image: gradle:8.5.0-jdk11
        command:
          - gradle
          - --no-daemon
          - test
      artifacts:
        paths:
          - app/build/reports/**/*
          - app/build/test-results/**/*
```
