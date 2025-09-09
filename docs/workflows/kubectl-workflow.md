```yaml showLineNumbers title="Kubectl Workflow"
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: kubectl-sample
  namespace: testkube
  labels:
    docs: example
spec:
  steps:
  - name: Check cluster connectivity
    container:
      image: bitnami/kubectl:1.28
    shell: |
      kubectl cluster-info
      kubectl get nodes
  - name: List pods in default namespace
    container:
      image: bitnami/kubectl:1.28
    shell: |
      kubectl get pods -n default
  - name: Check service status
    container:
      image: bitnami/kubectl:1.28
    shell: |
      kubectl get services -A
      kubectl get deployments -A
```
