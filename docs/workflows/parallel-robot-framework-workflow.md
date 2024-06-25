```yaml showLineNumbers title="Distributed Robot Framework Workflow"
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: parallel-robot
  namespace: testkube
spec:
  content:
    git:
      uri: https://github.com/olensmar/robot-framework-test.git
  steps:
    - name: Run tests
      parallel:
        matrix:
          browser:
            - firefox
            - chromium
            - webkit
        transfer:
          - from: /data/repo
        container:
          image: marketsquare/robotframework-browser:latest
        steps:
          - shell: robot --variable BROWSER:{{ matrix.browser }} --outputdir /data/output-{{matrix.browser}}
              --reporttitle "{{ matrix.browser }} Report" /data/repo/testkube_io.robot
            artifacts:
              paths:
                - /data/output-{{matrix.browser}}/*
```
