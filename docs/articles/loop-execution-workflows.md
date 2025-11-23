# Looping Test Workflow Executions from Workflows

For certain testing scenarios, teams may desire a workflow to run continuously, looped, until some timeout condition occurs (the workflow is manually ended, or a time limit is reached). This continuously looping workflow can be useful for driving specific activity against a system under test while a second Test Workflow performs the actual tests. 

The [Services](./test-workflows-services) feature of Test Workflows allows for this type of looping behavior. A service is a testing dependency like a Selenium Grid, a database with test data, the service under test itself, or in this case a simple script that loops indefinitely. A service is started at the beginning of a workflow or step and stopped at the end, making it a convinient solution to our use case. Additionally, we can ensure the loooping workflow does not pollute dashboards or trigger webhooks by triggering it as a [Silenet Execution](./test-workflows-running#when-to-use-silent-executions) via the `--silent` flag. We take this simple approach to achieve our goal: 

```yaml
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: loop-driver
  namespace: testkube
spec:
  services:
    cli-runner:
      logs: always
      content:
        files:
        - path: /scripts/loop.sh
          content: |
            #!/bin/sh
            set -eu
            testkube set context --api-key tkcapi_### --org tkcorg_### --env tkcenv_###
            while true; do
              echo "Triggering workflow..."
              testkube run tw loop-target --silent
              sleep 20
            done
      image: kubeshop/testkube-cli:latest
      command:
      - /bin/sh
      - -lc
      - |
        exec /bin/sh /scripts/loop.sh
  steps:
  - name: keep-alive
    run:
      image: bash:devel-alpine3.22
      shell: sleep 300
```



