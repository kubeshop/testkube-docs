```yaml showLineNumbers title="NUnit Workflow"
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: nunit-sample
  namespace: testkube
spec:
  content:
    git:
      uri: https://github.com/kubeshop/testkube
      revision: main
      paths:
        - test/nunit/nunit-project/ExampleProject
  container:
    workingDir: /data/repo/test/nunit/nunit-project/ExampleProject
    image: bitnami/dotnet-sdk:8-debian-12
    resources:
      requests:
        cpu: 512m
        memory: 512Mi
  steps:
    - name: Run tests
      shell: dotnet test --logger:"junit;LogFilePath=nunit-report/nunit-junit-report.xml"
      artifacts:
        paths:
          - nunit-report/*
```
