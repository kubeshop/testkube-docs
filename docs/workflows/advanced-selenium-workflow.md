```yaml showLineNumbers title="Advanced Selenium Workflow"
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: selenium-multiple-browser-parallel-test
  namespace: testkube
spec:
  content:
    git:
      uri: https://github.com/cerebro1/selenium-testkube.git
      paths:
      - selenium-java
  services:
    chrome:
      logs: always
      image: selenium/standalone-chrome:4.21.0-20240517
      readinessProbe:
        httpGet:
          path: /wd/hub/status
          port: 4444
        periodSeconds: 1
    edge:
      logs: always
      image: selenium/standalone-edge:4.21.0-20240517
      readinessProbe:
        httpGet:
          path: /wd/hub/status
          port: 4444
        periodSeconds: 1
    firefox:
      logs: always
      image: selenium/standalone-firefox:4.21.0-20240517
      readinessProbe:
        httpGet:
          path: /wd/hub/status
          port: 4444
        periodSeconds: 1
  steps:
  - name: Run Cross-browser tests
    parallel:
      matrix:
        browser:
        - ip: '{{ services.chrome.0.ip }}'
          name: chrome
        - ip: '{{ services.firefox.0.ip }}'
          name: firefox
        - ip: '{{ services.edge.0.ip }}'
          name: edge
      transfer:
      - from: /data/repo/selenium-java
      fetch:
      - from: /data/repo/selenium-java/target
        to: /data/artifacts/{{ matrix.browser.name }}
      container:
        workingDir: /data/repo/selenium-java
        image: maven:3.9.6-eclipse-temurin-22-alpine
      steps:
      - run:
          env:
          - name: SELENIUM_BROWSER
            value: '{{ matrix.browser.name }}'
          - name: SELENIUM_HOST
            value: '{{ matrix.browser.ip }}:4444'
          shell: |
            mvn test
            mvn surefire-report:report
  - condition: always
    workingDir: /data/artifacts
    artifacts:
      paths:
      - '**/*'
```
