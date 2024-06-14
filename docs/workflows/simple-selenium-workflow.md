```yaml showLineNumbers title="Basic Selenium Workflow"
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: selenium-test
  namespace: testkube
  labels:
    docs: example
spec:
  content:
    git:
      uri: https://github.com/olensmar/selenium-testkube.git
      paths:
        - selenium-java
  container:
    workingDir: /data/repo/selenium-java
    image: maven:3.9.6-eclipse-temurin-22-alpine
  services:
    chrome:
      image: selenium/standalone-chrome:4.21.0-20240517
      readinessProbe:
        httpGet:
          path: /wd/hub/status
          port: 4444
        periodSeconds: 1
  steps:
    - name: Run Chrome Test
      run:
        env:
          - name: SELENIUM_BROWSER
            value: chrome
          - name: SELENIUM_HOST
            value: '{{ services.chrome.0.ip }}:4444'
        shell: |
          mvn test
          mvn surefire-report:report
      artifacts:
        paths:
          - target/site/**/*
          - target/surefire-reports/**/*

```
