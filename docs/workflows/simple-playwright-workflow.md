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
      - test/playwright/playwright-project
  container:
    workingDir: /data/repo/test/playwright/playwright-project
    image: mcr.microsoft.com/playwright:v1.32.3-focal
    resources:
      requests:
        cpu: 2
        memory: 2Gi
  steps:
    - name: Install dependencies
      shell: npm ci
    - name: Run tests
      shell: npx --yes playwright@1.32.3 test --trace on
      artifacts:
        paths:
          - playwright-report/**/*
```
