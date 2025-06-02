```yaml showLineNumbers title="Rerun Failed Tests with Playwright Workflow"
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: playwright-rerun-demo
  namespace: testkube
spec:
  config:
    executionId:
      type: string
      default: ""
    failOnMissing:
      type: boolean
      default: "false"
    rerunFailed:
      type: boolean
      default: "false"
  content:
    git:
      uri: https://github.com/kubeshop/testkube
      revision: olelensmar/fix/playwright-test-update
      paths:
        - test/playwright/executor-tests/playwright-project
  container:
    workingDir: /data/repo/test/playwright/executor-tests/playwright-project
    image: mcr.microsoft.com/playwright:v1.52.0-noble
    resources:
      requests:
        cpu: 2
        memory: 1Gi
  steps:
    - name: Get last execution results
      condition: config.rerunFailed && config.executionId == ""
      optional: true
      run:
        image: kubeshop/testkube-cli:2.1.153
        shell: |
          testkube set context \
            --api-key tkcapi_XXXX \
            --org-id {{organization.id}} \
            --env-id {{environment.id}} \
            --namespace testkube

          # retrieve ID of previous execution
          data=$(testkube get testworkflowexecution --limit 2 --testworkflow {{workflow.name}} --output go)
          id=$(echo "$data" | grep -o '[a-fA-F0-9]\{24\}' | sed -n '3p')

          echo "Found Execution ID: $id, downloading latest result"

          testkube download artifact "$id" test-results/.last-run.json /data/repo/test/playwright/executor-tests/playwright-project --verbose
    - name: Get specified execution results
      condition: config.rerunFailed && config.executionId != ""
      optional: true
      run:
        image: kubeshop/testkube-cli:2.1.153
        shell: |
          testkube set context 
            --api-key tkcapi_XXXX \
            --org-id {{organization.id}} \
            --env-id {{environment.id}} \
            --namespace testkube

          echo "Retrieving last results for executionId: {{config.executionId}}"

          testkube download artifact {{config.executionId}} test-results/.last-run.json /data/repo/test/playwright/executor-tests/playwright-project --verbose
    - name: Fail if no previous results are Found
      condition: config.rerunFailed && config.failOnMissing
      run:
        shell: cat /data/repo/test/playwright/executor-tests/playwright-project/test-results/.last-run.json
    - name: Install dependencies
      shell: npm ci
    - name: Run last failed tests
      condition: config.rerunFailed
      shell: npx playwright@1.52.0 test --last-failed --pass-with-no-tests
    - name: Run all tests
      condition: '!config.rerunFailed'
      shell: npx playwright@1.52.0 test
    - name: Upload artifacts
      artifacts:
        paths:
          - playwright-report/**/*
          - test-results/**/*
```
