```yaml showLineNumbers title="Basic Locust Workflow"
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: locust-workflow-smoke
  namespace: testkube
  labels:
    docs: example
spec:
  content:
    git:
      uri: https://github.com/kubeshop/testkube
      revision: main
      paths:
      - test/locust/locust-project
  container:
    workingDir: /data/repo/test/locust/locust-project
  steps:
  - name: Run test
    run:
      image: locustio/locust:2.32.3
      shell: |
        mkdir /data/artifacts
        locust -f locust_test.py --host https://testkube-test-page-lipsum.pages.dev/ --headless --users 6 --spawn-rate 3 --run-time 10s --html=/data/artifacts/report.html
    artifacts:
      paths:
      - /data/artifacts/**
```
