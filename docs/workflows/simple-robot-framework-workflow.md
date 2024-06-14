```yaml showLineNumbers title="Basic Robot Framework Workflow"
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: basic-robot-framework-test
  namespace: testkube
spec:
  content:
    git:
      uri: https://github.com/cerebro1/robot-framework-test.git
  container:
    image: ppodgorsek/robot-framework:7.1.0
  steps:
    - name: Run test
      shell: robot --outputdir /data/repo/output /data/repo/test-restful.robot
      artifacts:
        paths:
          - /data/repo/output/*
```
