```yaml showLineNumbers title="Sharded Playwright Workflow"
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: example-sharded-playwright-with-merged-report
spec:
  content:
    git:
      uri: https://github.com/kubeshop/testkube
      paths:
        - test/playwright/executor-tests/playwright-project
  container:
    image: mcr.microsoft.com/playwright:v1.38.0-focal
    workingDir: /data/repo/test/playwright/executor-tests/playwright-project
  steps:
    - name: Install dependencies
      shell: 'npm install --save-dev @playwright/test@1.38.0 && npm ci'
    - name: Run tests
      parallel:
        count: 2
        transfer:
          - from: /data/repo
        fetch:
          - from: /data/repo/test/playwright/executor-tests/playwright-project/blob-report
            to: /data/reports
        container:
          resources:
            requests:
              cpu: 1
              memory: 1Gi
        shell: |
          npx playwright test --reporter blob --shard {{ index + 1 }}/{{ count }} --trace on
    - name: Merge reports
      condition: always
      shell: 'npx playwright merge-reports --reporter=html /data/reports'
      artifacts:
        paths:
          - 'playwright-report/**'
```
