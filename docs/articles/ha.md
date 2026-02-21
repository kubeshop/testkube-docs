# High Availability Configuration

Follow this guide to ensure the highest availability possible for a Testkube
deployment.

## Replicas

Most of the components support multiple replicas. Specify the proper
`topologySpreadConstraints` to schedule each pod in a different
availability/fault zone within your infrastructure to provide fault tolerance
against zonal failure.

## Priority Class

To ensure that Testkube pods are not preempted by other less important
workloads, make sure to create an appropriate [priority
class](https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/)
for the Testkube pods and specify it in the corresponding `priorityClassName` values.

## Dedicated Nodes

Resources must be available across multiple availibility/fault zones to ensure
Testkube pods can always respawn on a different node/zone in case of failure.

The example configurations below contain
[tolerations](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/)
which assume dedicated nodes have been allocated in several availability zones
for Testkube. The examples assume the nodes were tainted with a `testkube` key and
a `NoSchedule` effect.

## Example Configuration

### Agent

Example values for the `testkube` chart for the agent:

```yaml {2-3,10-14}
testkube-api:
  # Create a priority class for Testkube, i.e. high
  priorityClassName: high
  tolerations:
  - key: testkube
    operator: Exists
    effect: NoSchedule
nats:
  config:
    cluster:
      enabled: true
      replicas: 3
  podTemplate:
    topologySpreadConstraints:
    - maxSkew: 1
      topologyKey: zone
      whenUnsatisfiable: DoNotSchedule
```

### Control Plane

Values example for the `testkube-enterprise` chart for the control plane:

```yaml {3-10}
testkube-cloud-api:
  replicaCount: 3
  # Spread replicas across zones
  topologySpreadConstraints:
  - maxSkew: 1
    topologyKey: zone
    whenUnsatisfiable: DoNotSchedule
    labelSelector:
      matchLabels:
        app.kubernetes.io/name: testkube-cloud-api
  priorityClassName: high
  tolerations:
  - key: testkube
    operator: Exists
    effect: NoSchedule
testkube-cloud-ui:
  replicaCount: 3
  topologySpreadConstraints:
  - maxSkew: 1
    topologyKey: zone
    whenUnsatisfiable: DoNotSchedule
    labelSelector:
      matchLabels:
        app.kubernetes.io/name: testkube-cloud-ui
  priorityClassName: high
  tolerations:
  - key: testkube
    operator: Exists
    effect: NoSchedule
testkube-worker-service:
  priorityClassName: high
  tolerations:
  - key: testkube
    operator: Exists
    effect: NoSchedule
dex:
  replicaCount: 3
  topologySpreadConstraints:
  - maxSkew: 1
    topologyKey: zone
    whenUnsatisfiable: DoNotSchedule
    labelSelector:
      matchLabels:
        app.kubernetes.io/name: dex
  priorityClassName: high
  tolerations:
  - key: testkube
    operator: Exists
    effect: NoSchedule
nats:
  config:
    cluster:
      enabled: true
      replicas: 3
  podTemplate:
    topologySpreadConstraints:
    - maxSkew: 1
      topologyKey: zone
      whenUnsatisfiable: DoNotSchedule
```

## Caveats

- The agent under the current architecture can only run as a single instance.
  Coordinating multiple replicas would require implementing leader election, but
electing a new leader would mostly likely take longer than spawning a new pod on
a different node and reconnecting.
- Setting up MongoDB for high availability is outside of the scope of this
  guide, but in production deployments we highly recommend utilizing a managed service
such as [MongoDB
Atlas](https://www.mongodb.com/products/platform/atlas-database) as an [external
MongoDB cluster](./mongodb-administration#using-an-external-mongodb-instance).
- Dex should be backed by an highly available data storage like
  [etcd](https://dexidp.io/docs/configuration/storage/#etcd).
- The NATS chart is currently missing the ability to specify `tolerations` and
  `priorityClassName`.
- The worker service could possibly work with multiple replicas, but this has
  not been verified in a production environment.
