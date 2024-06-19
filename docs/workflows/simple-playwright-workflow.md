```yaml showLineNumbers title="Basic Playwright Workflow"
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: playwright-sample
  namespace: testkube
  labels:
    docs: example
spec:
  content:
    git:
      uri: https://github.com/kubeshop/testkube
      revision: main
      paths:
      - test/playwright/executor-tests/playwright-project
  container:
    workingDir: /data/repo/test/playwright/executor-tests/playwright-project
  steps:
  - name: Install dependencies
    run:
      image: mcr.microsoft.com/playwright:v1.32.3-focal
      command:
      - npm
      args:
      - ci
  - name: Run tests
    run:
      image: mcr.microsoft.com/playwright:v1.32.3-focal
      command:
      - "npx"
      args:
      - "--yes"
      - "playwright@1.32.3"
      - "test"
    artifacts:
      paths:
      - playwright-report/**/*
```
