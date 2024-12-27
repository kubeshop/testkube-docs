```yaml showLineNumbers title="Ollama HuggingFace test with Gradle and TestContainers Workflow"
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: gradle-with-testcontainers
  namespace: testkube
spec:
  content:
    git:
      uri: https://github.com/testcontainers/testcontainers-java
      revision: main
  container:
    workingDir: /data/repo/examples/ollama-hugging-face
    resources:
      requests:
        cpu: 512m
        memory: 512Mi
  services:
    dind:
      logs: always
      timeout: 5m
      image: docker:27.4.0-dind
      env:
        - name: DOCKER_TLS_CERTDIR
      securityContext:
        privileged: true
      readinessProbe:
        tcpSocket:
          port: 2375
  steps:
    - name: Run tests
      run:
        image: gradle:8.5.0-jdk11
        env:
          - name: TESTKUBE_GRADLE
            value: "true"
          - name: DOCKER_HOST
            value: tcp://{{ services.dind.0.ip }}:2375
        command:
          - gradle
          - --no-daemon
          - test
      artifacts:
        paths:
        - reports/**/*
        - test-results/**/*
```
