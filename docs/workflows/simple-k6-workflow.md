```yaml showLineNumbers title="Basic K6 Workflow"
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: k6-sample
  namespace: testkube
spec:
  // highlight-next-line
  content:
    files:
    - path: /data/example.js
      content: |-
        import http from 'k6/http';
        import { sleep } from 'k6';
        export default function () {
            http.get('https://test.k6.io');
            sleep(1);
        };
  // highlight-next-line
  steps:
    - name: Run Tests
      workingDir: /data
      run:
        image: grafana/k6:0.49.0
        env:
          - name: K6_WEB_DASHBOARD
            value: "true"
          - name: K6_WEB_DASHBOARD_EXPORT
            value: k6-test-report.html
        args:
          - run
          - example.js
      artifacts:
        paths:
          - k6-test-report.html
```
