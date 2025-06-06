# Test Workflows - Job and Pod Configuration

You may need to configure the Job and Pod used for execution. It can be also used for [**parallel workers**](./test-workflows-parallel.mdx) and [**services**](./test-workflows-services.mdx).

:::tip

Read more about the [Workflow Architecture](test-workflows-high-level-architecture.md) to understand how Testkube
creates Jobs and Pods to execute your Workflows.

:::

## Job

Allows you to configure the underlying Kubernetes Job generated for a Workflow - [Schema Reference](/articles/crds/testworkflows.testkube.io-v1#jobconfig).

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

You may select a different namespace for execution, if Testkube is [**configured to work with it**](/articles/install/advanced-install#namespaces-for-test-execution).

```yaml
spec:
  job:
    # schedule the execution in `another-testkube-zone` namespace
    namespace: another-testkube-zone
```

:::tip
Check out [Ephemeral Namespaces](/articles/ephemeral-environments) for an example of how to use 
the `namespace` property in an ephemeral environment scenario.
:::

## Pod

To pass custom Pod configuration, you may pass it in the `pod` property. It supports most of the native Kubernetes' [**PodSpec**](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.26/#podspec-v1-core) configuration.

### Labels & Annotations

You can add labels and annotations for the Pod using `labels` and `annotations` properties:

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
  securityContext:
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

:::tip
See the [Chainsaw Example](/articles/examples/chainsaw-basic) to see how a custom ServiceAccount can be used.
:::

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

### Example: Use PersistentVolumeClaim

You can create [**PersistentVolumeClaims**](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims), add them to the Pod and mount them to Containers and they will be automatically cleaned after execution is completed.

```yaml
pvcs:
  someName:
    storageClassName: standard
    accessModes:
      - ReadWriteOnce
    resources:
      requests:
        storage: 10Mi

pod:
  volumes:
  - name: some-name
    persistentVolumeClaim:
      claimName: "{{ pvcs.someName.name }}"

container:
  volumeMounts:
  - name: some-name
    mountPath: /mnt/some/name
```

