```yaml showLineNumbers title="Distributed JMeter Workflow"
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: distributed-jmeter-example-config-artifacts
  namespace: testkube
  labels:
    docs: example
spec:
  config:
    slavecount:
      type: integer
      default: 3
  content:
    git:
      uri: https://github.com/kubeshop/testkube
      revision: main
      paths:
      - test/jmeter/executor-tests/jmeter-executor-smoke.jmx
  container:
    workingDir: /data/repo/test/jmeter/executor-tests
  services:
    slave:
      use:
      - name: distribute/evenly
      count: config.slavecount
      logs: always
      timeout: 30s
      image: anasoid/jmeter:5.6-plugins-21-jre
      command:
      - jmeter-server
      - -Dserver.rmi.localport=60000
      - -Dserver_port=1099
      - -Jserver.rmi.ssl.disable=true
      readinessProbe:
        tcpSocket:
          port: 1099
        periodSeconds: 1
  steps:
  - name: Run tests
    run:
      image: anasoid/jmeter:5.6-plugins-21-jre
      shell: |
        jmeter -n \
          -X -Jserver.rmi.ssl.disable=true -Jclient.rmi.localport=7000 \
          -R {{ services.slave.*.ip }} \
          -t jmeter-executor-smoke.jmx \
          -j /data/artifacts/jmeter.log \
          -o /data/artifacts/report \
          -l /data/artifacts/jtl-report.jtl -e
    artifacts:
      paths:
      - /data/artifacts/**/*
status: {}
```
