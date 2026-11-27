```yaml showLineNumbers title="ServiceAccount and ClusterRole for kube-burner"
apiVersion: v1
kind: ServiceAccount
metadata:
  name: kube-burner
  namespace: testkube
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: kube-burner
rules:
  # kube-burner creates a namespace per iteration and deletes them when done
  - apiGroups: [""]
    resources: ["namespaces"]
    verbs: ["get", "list", "watch", "create", "patch", "update", "delete"]
  # The objects the workload creates, and the podLatency measurement watches
  - apiGroups: [""]
    resources: ["pods"]
    verbs: ["get", "list", "watch", "create", "delete"]
  # The podLatency measurement watches pod events
  - apiGroups: [""]
    resources: ["events"]
    verbs: ["get", "list", "watch"]
  # kube-burner reads node information for its cluster metadata
  - apiGroups: [""]
    resources: ["nodes"]
    verbs: ["get", "list"]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: kube-burner
subjects:
  - kind: ServiceAccount
    name: kube-burner
    namespace: testkube
roleRef:
  kind: ClusterRole
  name: kube-burner
  apiGroup: rbac.authorization.k8s.io
```
