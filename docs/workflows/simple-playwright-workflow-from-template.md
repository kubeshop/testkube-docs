```yaml showLineNumbers title="Basic Playwright Workflow from Template"
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: playwright-sample-from-template
  namespace: testkube
  labels:
    docs: example
spec:
  container:
    workingDir: /data/repo/test/playwright/playwright-project
  steps:
  - name: Run from template
    content:
      git:
        uri: https://github.com/kubeshop/testkube
        revision: main
        paths:
        - test/playwright/playwright-project
    workingDir: /data/repo/test/playwright/playwright-project
    template:
      name: official/playwright/v1
      config:
        version: v1.32.3-jammy
```
