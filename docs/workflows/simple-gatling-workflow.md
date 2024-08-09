```yaml showLineNumbers title="Gatling Workflow"
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: gatling-sample
  namespace: testkube
spec:
  use:
    - name: official--gradle--v1
      config:
        run: ./gradlew gatlingRun
        version: 8.7.0-jdk21-alpine
  content:
    git:
      uri: https://github.com/techmaharaj/Gatling-Gradle-Sample.git
      revision: main
  container:
    workingDir: /data/repo/
  steps:
    - condition: always
      workingDir: /data/repo/build/reports
      artifacts:
        paths:
          - '**/*'
```
