```yaml showLineNumbers title="Basic Cypress Workflow from Template"
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: cypress-sample-from-template
  namespace: testkube
  labels:
    docs: example
spec:
  container:
    workingDir: /data/repo/test/cypress/executor-tests/cypress-13
    env:
    - name: CYPRESS_CUSTOM_ENV
      value: "CYPRESS_CUSTOM_ENV_value"
  content:
    git:
      uri: https://github.com/kubeshop/testkube
      revision: main
      paths:
      - test/cypress/executor-tests/cypress-13
  steps:
  - name: Run from template
    workingDir: /data/repo/test/cypress/executor-tests/cypress-13
    template:
      name: official/cypress/v1
      config:
        version: 13.6.4
        run: "npx cypress run --env NON_CYPRESS_ENV=NON_CYPRESS_ENV_value"
    artifacts:
      paths:
        - 'cypress/videos/**/*'
        - 'cypress/screenshots/**/*'
```
