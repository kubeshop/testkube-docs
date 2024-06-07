# Test Workflows - Job and Pod

You may need to configure the Job and Pod used for execution. It can be also used for [**parallel workers**](./test-workflows-parallel.md) and [**services**](./test-workflows-services.md).

## Job

### Labels & Annotations

You may simply add labels and annotations for the Job using `labels` and `annotations` properties:

```yaml
spec:
  job:
    labels:
      some-label: some-value
      variadic-label: '{{ execution.id }}'
    annotations:
      example.io/some-annotation: some-text
```

### Timeout

To configure maximum time for a job to live, you can use `activeDeadlineSeconds` property:

```yaml
spec:
  job:
    # kill the TestWorkflow if it's not finished 10 minutes after scheduled
    activeDeadlineSeconds: 600
```

### Execution Namespace

You may select a different namespace for execution, if the Testkube is [**configured to work with it**](https://docs.testkube.io/articles/helm-chart/#testkube-multi-namespace-feature).

```yaml
spec:
  job:
    # schedule the execution in `another-testkube-zone` namespace
    namespace: another-testkube-zone
```

## Pod

To pass custom Pod configuration, you may pass it in the `pod` property. It supports most of the native Kubernetes' [**PodSpec**](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.26/#podspec-v1-core) configuration.

### Labels & Annotations

You may simply add labels and annotations for the Pod using `labels` and `annotations` properties:

```yaml
spec:
  pod:
    labels:
      some-label: some-value
      variadic-label: '{{ execution.id }}'
    annotations:
      example.io/some-annotation: some-text
```

### Security Context

You may configure [**PodSecurityContext**](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-the-security-context-for-a-pod) using `securityContext` to override the defaults.

```yaml
pod:
  runAsNonRoot: true
  runAsUser: 100690000
```

### Service Account

By default, Testkube creates and uses a service account that will allow you to use all Testkube features.
If you need to use custom service account, you may configure it:

```yaml
pod:
  serviceAccountName: some-account
```

### Example: Single Execution Per Node

You can design Kubernetes' [**Affinity and anti-affinity**](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity) to choose where the pod should be scheduled.

```yaml
pod:
  labels:
    sync-execution: '{{ workflow.name }}-execution'
  affinity:
    # Ensure no other {{ workflow.name }} execution on same node
    podAntiAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
      - topologyKey: kubernetes.io/hostname
        labelSelector:
          matchExpressions:
          - key: sync-execution
            operator: In
            values:
            - '{{ workflow.name }}-execution'
```

### Example: Distribute Evenly Across Nodes

To ensure that multiple executions will be distributed evenly across Kubernetes nodes in the cluster,
you may use [**Pod Topology Spread Constraints**](https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/):

```yaml
pod:
  topologySpreadConstraints:
  - maxSkew: 1
    topologyKey: kubernetes.io/hostname
    whenUnsatisfiable: ScheduleAnyway
    labelSelector:
      matchLabels:
        # execution level - for distributing parallel workers of execution
        distribute-evenly: '{{execution.id}}-worker'
        # Test Workflow level - for distributing parallel executions
        # distribute-evenly: '{{workflow.name}}-execution'
```

### Example: Mount Custom Volume

You can easily attach [**Volumes**](https://kubernetes.io/docs/concepts/storage/volumes/) for the Pod and mount them to Containers.

```yaml
pod:
  volumes:
  - name: some-name
    ephemeral:
      volumeClaimTemplate:
        storageClassName: standard
        resources:
          requests:
            storage: 1Gi
container:
  volumeMounts:
  - name: some-name
    mountPath: /mnt/some/name
```

## Global Template

Sometimes, you may want to prepare company-wide configuration that will be applied to all Test Workflows.
In example, it may be used to add proper labels, security, or other infrastructure setup.

To configure global template, you need to adjust [**Helm Chart values**](https://github.com/kubeshop/helm-charts/blob/main/charts/testkube/values.yaml#L36-L46) of Agent installation, specifically `global.testWorkflows.globalTemplate`:

```yaml
global:
  testWorkflows:
    globalTemplate:
      enabled: true
      spec:
        pod:
          labels:
            key: value
          securityContext:
            runAsNonRoot: true
```
