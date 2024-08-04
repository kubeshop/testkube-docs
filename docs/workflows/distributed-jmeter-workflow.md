```yaml showLineNumbers title="Distributed JMeter Workflow"
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: distributed-jmeter-example
spec:
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
      count: 5
      logs: always
      timeout: 30s
      image: anasoid/jmeter:5.6-plugins-21-jre
      command:
        - jmeter-server
        - -Dserver.rmi.localport=60000
        - -Dserver_port=1099
        - -Jserver.rmi.ssl.disable=true
      container:
        resources:
          requests:
            cpu: 128m
            memory: 128Mi
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
            -t jmeter-executor-smoke.jmx
```
