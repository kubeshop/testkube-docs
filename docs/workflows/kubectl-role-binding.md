```yaml showLineNumbers title="Role and RoleBinding for Kubectl Access"
# Create a ClusterRole with necessary permissions
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: testkube-kubectl-role
rules:
- apiGroups: [""]
  resources: ["pods", "services", "deployments", "nodes", "namespaces", "configmaps", "secrets"]
  verbs: ["get", "list", "watch"]
- apiGroups: ["apps"]
  resources: ["deployments", "replicasets", "daemonsets", "statefulsets"]
  verbs: ["get", "list", "watch"]
- apiGroups: ["extensions"]
  resources: ["deployments", "replicasets", "daemonsets", "statefulsets"]
  verbs: ["get", "list", "watch"]
- apiGroups: ["networking.k8s.io"]
  resources: ["ingresses", "networkpolicies"]
  verbs: ["get", "list", "watch"]
- apiGroups: ["batch"]
  resources: ["jobs", "cronjobs"]
  verbs: ["get", "list", "watch"]
---
# Create a RoleBinding for the testkube namespace
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: testkube-kubectl-binding
  namespace: testkube
subjects:
- kind: ServiceAccount
  name: testkube-api-server-tests-job
  namespace: testkube
roleRef:
  kind: ClusterRole
  name: testkube-kubectl-role
  apiGroup: rbac.authorization.k8s.io
---
# Alternative: Create a ClusterRoleBinding for cluster-wide access
# Uncomment the following if you need cluster-wide access instead of namespace-specific
# apiVersion: rbac.authorization.k8s.io/v1
# kind: ClusterRoleBinding
# metadata:
#   name: testkube-kubectl-cluster-binding
# subjects:
# - kind: ServiceAccount
#   name: testkube-api-server-tests-job
#   namespace: testkube
# roleRef:
#   kind: ClusterRole
#   name: testkube-kubectl-role
#   apiGroup: rbac.authorization.k8s.io
```
