```yaml showLineNumbers title="Sharded Cypress Workflow"
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: example-sharded-cypress
spec:
  content:
    git:
      uri: https://github.com/kubeshop/testkube
      paths:
        - test/cypress/cypress-13
  container:
    image: cypress/included:13.6.4
    workingDir: /data/repo/test/cypress/cypress-13

  steps:
    - name: Install dependencies
      shell: 'npm ci'

    - name: Run tests
      parallel:
        maxCount: 5
        shards:
          testFiles: 'glob("cypress/e2e/**/*.js")'
        description: '{{ join(map(shard.testFiles, "relpath(_.value, \"cypress/e2e\")"), ", ") }}'
        transfer:
          - from: /data/repo
        container:
          resources:
            requests:
              cpu: 1
              memory: 1Gi
          env:
            - name: CYPRESS_CUSTOM_ENV
              value: CYPRESS_CUSTOM_ENV_value
        run:
          args:
            - --env
            - NON_CYPRESS_ENV=NON_CYPRESS_ENV_value
            - --spec
            - '{{ join(shard.testFiles, ",") }}'
```
