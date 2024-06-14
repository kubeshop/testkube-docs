```yaml showLineNumbers title="Basic K6 Workflow"
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: soapui-sample
  namespace: testkube
spec:
  content:
    git:
      uri: https://github.com/kubeshop/testkube
      revision: main
      paths:
        - test/soapui/executor-smoke/soapui-smoke-test.xml
  container:
    resources:
      requests:
        cpu: 512m
        memory: 256Mi
  steps:
    - name: Run tests
      run:
        image: smartbear/soapuios-testrunner:5.7.2
        env:
          - name: COMMAND_LINE
            value: -r /data/repo/test/soapui/executor-smoke/soapui-smoke-test.xml 

```
