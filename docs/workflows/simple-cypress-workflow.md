```yaml showLineNumbers title="Basic Cypress Workflow"
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: cypress-sample
  namespace: testkube
  labels:
    docs: example
spec:
  content:
    git:
      uri: https://github.com/kubeshop/testkube
      revision: main
      paths:
      - test/cypress/executor-tests/cypress-13
  container:
    workingDir: /data/repo/test/cypress/executor-tests/cypress-13
  steps:
  - name: Run tests
    run:
      image: cypress/included:13.6.4
      args:
      - --env
      - NON_CYPRESS_ENV=NON_CYPRESS_ENV_value
      - --config
      - video=true # video recording emabled
      env:
      - name: CYPRESS_CUSTOM_ENV
        value: CYPRESS_CUSTOM_ENV_value
    artifacts:
      paths:
        - 'cypress/videos/**/*'
```
