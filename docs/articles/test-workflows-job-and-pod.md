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

### fsGroup and runAsGroup defaulting

Testkube applies a small amount of security-context defaulting for TestWorkflow execution pods.
This matters most for [parallel workers](./test-workflows-parallel.mdx), because they run as separate Jobs and Pods.

The effective logic is:

1. If you explicitly set `pod.securityContext.fsGroup`, Testkube uses that value as-is.
2. If `fsGroup` is not set, Testkube may inspect the image metadata for the main non-Testkube container.
   If the image has a numeric group in its `USER` declaration, for example `USER 1001:1001`,
   Testkube can reuse that group.
3. If Testkube still cannot resolve a group, it defaults pod `fsGroup` to `1001`.
4. When an effective pod `fsGroup` exists, missing container `securityContext.runAsGroup` values may be backfilled from it.

This means that an image with a root group, or an image that resolves to group `0`, can produce:

```yaml
pod:
  securityContext:
    fsGroup: 0
```

For clusters such as OpenShift, that may be undesirable because the platform is expected to inject the runtime group automatically.

### Disabling fsGroup defaulting

Testkube supports disabling automatic pod `fsGroup` injection with `disableFsGroupDefaulting`.

Use it when you want Testkube to leave pod `securityContext.fsGroup` unset unless you explicitly provide one.

```yaml
spec:
  pod:
    disableFsGroupDefaulting: true
```

With this setting:

* explicit `pod.securityContext.fsGroup` still wins
* Testkube stops inferring pod `fsGroup` from image metadata
* Testkube stops injecting the fallback default `fsGroup: 1001`

This is especially useful on OpenShift when the Security Context Constraints should assign the group automatically.

### What about runAsUser and runAsNonRoot?

`runAsUser` and `runAsNonRoot` follow different rules than `fsGroup`.

Testkube does **not** currently infer or default:

* pod `securityContext.runAsUser`
* pod `securityContext.runAsNonRoot`
* container `securityContext.runAsUser`
* container `securityContext.runAsNonRoot`

For these fields, Testkube only passes through what you define explicitly in the workflow.

```yaml
spec:
  pod:
    securityContext:
      runAsUser: 1000650001
      runAsNonRoot: true
```

If you do not set those fields:

* Testkube does not synthesize values for them
* the container image's own default `USER` may still apply at runtime
* your cluster policy, such as OpenShift SCCs or other admission controls, may also inject or enforce them

Testkube does inspect image metadata, but for this security-context path it only uses the numeric **group** portion of the image `USER` field when calculating `runAsGroup` / `fsGroup`.
It does **not** take the image user ID and copy it into `runAsUser`.

In other words:

* image `USER 1001:1001` can influence `runAsGroup` / `fsGroup`
* it does not cause Testkube to write `runAsUser: 1001`
* static files or other workflow content are not used for security-context inference

### Examples

#### Set a fixed fsGroup explicitly

```yaml
spec:
  pod:
    securityContext:
      fsGroup: 1000650001
```

#### Leave fsGroup unset for the whole workflow

This affects the main execution pod and is also inherited by parallel worker pods unless a parallel step overrides it.

```yaml
spec:
  pod:
    disableFsGroupDefaulting: true
```

#### Disable fsGroup defaulting only for a parallel step

```yaml
spec:
  steps:
  - name: Run shards
    parallel:
      count: 4
      pod:
        disableFsGroupDefaulting: true
      shell: |
        echo "worker {{ index + 1 }}/{{ count }}"
```

If you define both `spec.pod` and `steps[].parallel.pod`, the parallel step pod settings override the inherited root pod settings for those workers.

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
