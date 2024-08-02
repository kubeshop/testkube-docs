```yaml showLineNumbers title="Basic JMeter Workflow"
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: jmeter-sample
  namespace: testkube
  labels:
    docs: example
spec:
  content:
    git:
      uri: https://github.com/kubeshop/testkube
      revision: main
      paths:
      - test/jmeter/executor-tests/jmeter-executor-smoke.jmx
  container:
    workingDir: /data/repo/test/jmeter/executor-tests
  steps:
  - name: Run tests
    shell: jmeter -n -t jmeter-executor-smoke.jmx -j /data/artifacts/jmeter.log -o /data/artifacts/report -l /data/artifacts/jtl-report.jtl -e
    container:
      image: anasoid/jmeter:5.6-plugins-21-jre
    artifacts:
      paths:
      - '/data/artifacts/**/*'
```
