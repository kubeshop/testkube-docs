```yaml showLineNumbers title="Basic SoapUI Workflow"
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: soapui-sample
  namespace: testkube
  labels:
    docs: example
spec:
  content:
    git:
      uri: https://github.com/kubeshop/testkube
      revision: main
      paths:
        - test/soapui/soapui-smoke-test.xml
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
            value: -r /data/repo/test/soapui/soapui-smoke-test.xml 

```
