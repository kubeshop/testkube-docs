```yaml showLineNumbers title="Basic Robot Framework Workflow"
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: robotframework-browser-smoke
  labels:
    tool: robotframework-browser
    category: e2e-ui-testing
    junit: "true"
    artifacts: "true"
spec:
  content:
    git:
      uri: https://github.com/kubeshop/testkube
      revision: main
      paths:
        - test/robotframework/robotframework-project
  container:
    image: marketsquare/robotframework-browser:19.10
    resources:
      requests:
        cpu: 1000m
        memory: 1000Mi
    workingDir: /data/repo/test/robotframework/robotframework-project
  job:
    activeDeadlineSeconds: 180
  steps:
    - name: Run Robot Framework tests
      run:
        shell: |
          mkdir -p /data/artifacts && \
          robot --outputdir /data/artifacts \
            --xunit /data/artifacts/junit.xml \
            --exclude negative \
            tests/
        env:
          - name: ROBOT_SYSLOG_FILE
            value: /data/artifacts/robot-syslog.txt
    - name: Save artifacts
      artifacts:
        workingDir: /data/artifacts/
        paths:
          - '**/*'
```

This workflow demonstrates several key features:

- **[Content Fetching](../articles/test-workflows-content.mdx)**: Uses `git` with `paths` to fetch only specific directories from the repository, reducing clone time and disk usage.
- **[Resource Management](../articles/test-workflows-job-and-pod.md)**: Configures CPU and memory requests to ensure adequate resources for browser-based testing.
- **Working Directory**: Sets `workingDir` to run tests from the correct location in the repository.
- **[Job Timeout](../articles/test-workflows-job-and-pod.md)**: Uses `activeDeadlineSeconds` to limit test execution time and prevent hanging tests.
- **[Multiple Steps](../articles/test-workflows-examples-basics.md)**: Separates test execution from artifact collection for better organization and reliability.
- **[Environment Variables](../articles/test-workflows-examples-basics.md)**: Configures Robot Framework logging using environment variables.
- **JUnit Reports**: Generates JUnit-compatible XML reports with the `--xunit` flag for integration with CI/CD systems.
- **[Artifacts](../articles/test-workflows-artifacts.md)**: Collects all test outputs (reports, logs, screenshots) using wildcard patterns for easy access and analysis.
