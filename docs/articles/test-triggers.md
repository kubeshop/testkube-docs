# Kubernetes Event Triggers

Testkube allows you to automate the execution of Test Workflows by defining triggers on certain events for various Kubernetes resources.

## What is a Testkube Event Trigger?

In generic terms, a _Trigger_ defines an _action_ which will be executed for a given _execution_ when a certain _event_ on a specific _resource_ occurs.
For example, we could define a _TestTrigger_ which _runs_ a _Test_ when a _ConfigMap_ gets _modified_.

In Testkube, Event Triggers allow you to trigger the execution of a Workflow based on Kubernetes Events - for example, when a Deployment is updated
or an Ingress gets deleted.

You can currently create/manage Event Triggers in the Testkube Dashboard or by interacting with corresponding Trigger custom resources
via `kubectl`.

## Creating Test Triggers 

Select the Integrations tab (lightning bolt icon) on the left on the Testkube Dashboard to access the "Triggers"
panel which shows a list of Triggers in your Environment.

The "Create a new trigger" on the right allows you to create a new
trigger as described at [create Test Triggers](/articles/integrations-triggers#creating-a-new-trigger).

![Triggers](../img/integrations-triggers.png)

:::tip
Triggers are ultimately defined as Customer Resources in your cluster - [TestTrigger Reference](/articles/crds/tests.testkube.io-v1#testtrigger)
:::

## Listener Agents with TestTriggers

Testkube uses [Listener Agents](/articles/agents-overview#listener-agents) or the [Standalone Agent](/articles/agents-overview#the-standalone-agent) 
to listen for Kubernetes events that will be matched against your TestTriggers. Your Testkube Environment can have any number of 
Listener Agents, deployed to whichever namespaces/clusters you need to listen for events.

The Listener Agent and Standalone Agent by default behave somewhat differently when it comes to listening for events:
- Listener Agents by default listen for events only in the namespace they are deployed to, if you need to listen for events from 
  additional namespaces, you can configure this as described at [Listening in additional namespaces](/articles/multi-agent-runner-helm-chart#listening-in-additional-namespaces).
- The Standalone Agent listens for events in all namespaces, you can configure this as described at 
  [Multi-namespace Agent Installation](/articles/install/advanced-install#multi-namespace-agent-installation).

### Listener Agent Event Labels

Events captured by a specific Listener Agents are annotated with a number of testkube.io specific labels:

- `testkube.io/agent-name` - the name of the Listener Agent
- `testkube.io/agent-namespace` - the namespace of the Listener Agent
- `testkube.io/resource-name` - the name of the resource triggering the event
- `testkube.io/resource-namespace` - the namespace of the resource triggering the event
- `testkube.io/resource-kind` - the kind (i.e. `Deployment`) of the resource triggering the event
- `testkube.io/resource-group` - the API group (i.e. `apps`) of the resource triggering the event
- `testkube.io/resource-version` - the API version (i.e. `v1`) of the resource triggering the event

See below how you can select on these labels to define Listener-specific trigger rules.

### Custom Event Labels

During agent installation one can also specify custom labels which will be emitted with each event from the
Listener Agent by using the following values in the `testkube-runner` Helm chart:

```yaml
listener:
  eventLabels:
    # highlight-next-line
    deployment-location: eastern-usa
```

## Selectors

Triggers use selectors to determine which events should trigger the action and which workflows should be the target of the trigger action.

### Event Selector

Each event that is emitted by a listener agent has labels on it which could be
used for selection of a triggering event using the `selector` field:

```yaml
selector:
  matchLabels: map of key-value pairs
  matchExpressions:
    - key: label name
      operator: [In | NotIn | Exists | DoesNotExist
      values: list of values
```

### Resource Selector

:::warning

The `resource` and `resourceSelector` will be deprecated eventually but are still supported for now, please use the
`selector` field to match on the builtin labels such as `teskube.io/resource-kind` and `testkube.io/resource-name` to achieve similar
outcomes.

:::

Using the fields `resource` and `resourceSelector` one can select the triggering
event by the source resource.

```yaml
resource: Kinds of resources to match (possible values, `pod`, `deployment`, `statefulset`, `daemonset`, `service`, `ingress`, `event`, `configmap`)
resourceSelector:
  name: Kubernetes object name
  nameRegex: Kubernetes object name regex (for example, "app.*")
  namespace: Kubernetes object namespace (default is agent's namespace)
  namespaceRegex: Kubernetes object namespace regex( for example, "test.*")
  labelSelector:
    matchLabels: map of key-value pairs
    matchExpressions:
      - key: label name
        operator: [In | NotIn | Exists | DoesNotExist
        values: list of values
```

### Test Selector

The `testSelector` field could be used to select the target Workflow of the
trigger action.

```yaml
testSelector:
  name: TestWorkflow name
  nameRegex: TestWorkflow name regex (for example, "test.*")
  labelSelector:
    matchLabels: map of key-value pairs
    matchExpressions:
      - key: label name
        operator: [In | NotIn | Exists | DoesNotExist
        values: list of values
```

## Resource Conditions

Resource Conditions allows triggers to be defined based on the status conditions for a specific resource.

```yaml
spec:
  conditionSpec:
    timeout: Duration in seconds the test trigger waits for conditions, until its stopped.
    delay: Duration in seconds the test trigger waits between condition checks.
    conditions:
      - type: test trigger condition type
        status: test trigger condition status, supported values - True, False, Unknown
        reason: test trigger condition reason
        ttl: test trigger condition ttl
```

## Resource Probes

Resource Probes allows triggers to be defined based on the probe status.

```yaml
spec:
  probeSpec:
    timeout: Duration in seconds the test trigger waits for probes, until its stopped.
    delay: Duration in seconds the test trigger waits between probes.
    probes:
      - scheme: test trigger condition probe scheme to connect to host, default is http
        host: test trigger condition probe host, default is pod ip or service name
        path: test trigger condition probe path to check, default is /
        port: test trigger condition probe port to connect
        headers: test trigger condition probe headers to submit
```

## Targeting specific Runner Agents

With the introduction of [Runner Agents](/articles/agents-overview#runner-agents) you can optionally specify
which Runner Agent(s) a Triggered execution should run on. For example

```yaml
spec:
  ...
  target:
    match:
     - application: accounting
...
```

Will trigger an Execution on any Global Runner Agent with the `application: accounting` label, For more details,
see our guide on [Runner Agent Targeting](/articles/test-workflows-running#runner-agent-targeting).

### Template-based target selection

You can resolve values in `target.match` at runtime using Go templates or JSONPath.

- Run on the same agent that handled the event:

```yaml
spec:
  action: run
  actionParameters:
    target:
      match:
        name:
          - '{{ .Agent.Name }}'
```

- Target by agent labels (e.g., environment):

```yaml
spec:
  action: run
  actionParameters:
    target:
      match:
        group:
          - '{{ index .Agent.Labels "env" }}'
```

Note: Add/update agent labels via CLI: `testkube update agent <agent-name> --label env=eu-west1`.

- Provide custom event labels via environment variable and reference them in templates:

```yaml
env:
  - name: EVENT_LABELS
    value: cluster:dev
```

Then reference in a template as `{{ index .EventLabels "cluster" }}`.

Tip: To inspect the full event data, run the agent with `DEBUG=true`.

Available template fields (Go templates and JSONPath):

- `Agent.Name` (string)
- `Agent.Labels` (map) — access with `{{ index .Agent.Labels "<key>" }}`
- `EventLabels` (map) — includes auto-populated keys:
    - `testkube.io/agent-name`, `testkube.io/agent-namespace`
    - `testkube.io/resource-name`, `testkube.io/resource-namespace`
    - `testkube.io/resource-kind`, `testkube.io/resource-group`, `testkube.io/resource-version`
    - plus any pairs from `EVENT_LABELS`, e.g., `cluster:dev` → `{{ index .EventLabels "cluster" }}`
- `Namespace` (string) — namespace of the resource that emitted the event
- `Object` — the full Kubernetes object for the event

JSONPath scope:

- In `actionParameters`, JSONPath is evaluated against the resource object, so fields can be referenced directly, e.g., `jsonpath={.metadata.name}`.
- In `target.match`, JSONPath is evaluated against the full event. To reach resource fields, prefix with `.Object`, e.g., `jsonpath={.Object.metadata.name}`. To reach agent or labels: `jsonpath={.Agent.Name}` or `jsonpath={.EventLabels.cluster}`.

## Action Parameters

Action parameters are used to pass config and tag values to the workflow execution. You can specify either text values or
jsonpath expression in a form of `jsonpath={.metadata.name}`. The data will be taken from the resource object of the trigger event.
Check the kubernets docs [JsonPath Expression](https://kubernetes.io/docs/reference/kubectl/jsonpath/).
Also you can use Golang template syntax we support for Webhook processing and take data from Golang object fields.

```yaml
spec:
  actionParameters:
    config: map of key-value pairs
    tags: map of key-value pairs
```

for example:

```yaml
spec:
  actionParameters:
    config:
      environment: production
      datavalue: jsonpath={.data.test} # if the resource object is a configmap with key `test`
      labels: "{{ .ObjectMeta.Labels }}"
    tags:
      workflow: core
      trigger: jsonpath={.metadata.namespace} # namespace of the resource object
      name: "{{ .ObjectMeta.Name }}"
```

### Supported Values

- **Resource** - `pod`, `deployment`, `statefulset`, `daemonset`, `service`, `ingress`, `event`, `configmap`
- **Action** - `run`
- **Event** - `created`, `modified`, `deleted`
- **Cause** (can be used instead of **Event**)
  - For deployments - `deployment-scale-update`, `deployment-image-update`, `deployment-env-update`, `deployment-containers-modified`,
    `deployment-generation-modified`, `deployment-resource-modified`
  - For Testkube events - `event-start-test`, `event-end-test-success`, `event-end-test-failed`, `event-end-test-aborted`, `event-end-test-timeout`,
    `event-start-testsuite`, `event-end-testsuite-success`, `event-end-testsuite-failed`, `event-end-testsuite-aborted`, `event-end-testsuite-timeout`,
    `event-queue-testworkflow`, `event-start-testworkflow`, `event-end-testworkflow-success`, `event-end-testworkflow-failed`, `event-end-testworkflow-aborted`,
    `event-created`, `event-updated`, `event-deleted`
- **Execution** - `test`, `testsuite`, `testworkflow`
- **ConcurrencyPolicy** - `allow`, `forbid`, `replace`

:::info
Events and values related to Tests and Test Suites have been deprecated and will be removed - [Read More](/articles/legacy-features)
:::

## Examples

### On Deployment Update

Here is an example for a **Test Trigger** _default/testtrigger-example_ which
runs the **TestSuite** _frontend/sanity-test_ when a **deployment** containing
the label **testkube.io/tier: backend** gets **modified** and also has the
conditions **Progressing: True: NewReplicaSetAvailable** and **Available:
True**.

```yaml
apiVersion: tests.testkube.io/v1
kind: TestTrigger
metadata:
  name: testtrigger-example
  namespace: default
spec:
  selector:
    matchLabels:
      testkube.io/resource-kind: Deployment
      testkube.io/tier: backend
  event: modified
  conditionSpec:
    timeout: 100
    delay: 2
    conditions:
      - type: Progressing
        status: "True"
        reason: "NewReplicaSetAvailable"
        ttl: 60
      - type: Available
        status: "True"
  probeSpec:
    timeout: 50
    delay: 1
    probes:
      - scheme: http
        host: testkube-api-server
        path: /health
        port: 8088
        headers:
          X-Token: "12345"
      - host: testkube-dashboard
        port: 8080
  action: run
  execution: testworkflow
  concurrencyPolicy: allow
  testSelector:
    name: sanity-test
    namespace: frontend
  disabled: false
```
### On Testkube Cluster Event

You can define **Test Trigger** for Testkube cluster events. In below example,
if **TestWorkflow** `k6-executor-smoke` is completed succesfully, then we run
**TestWorkflow** `postman-smoke-tests`

```yaml
apiVersion: tests.testkube.io/v1
kind: TestTrigger
metadata:
  name: testtrigger-event
  namespace: testkube
spec:
  selector:
    matchLabels:
      testkube.io/resource-kind: Event
      testkube.io/resource-name: k6-smoke-test
  event: event-end-test-success
  action: run
  actionParameters:
     config:
      environment: production
    tags:
      trigger: jsonpath={.metadata.name}
 execution: testworkflow
  testSelector:
    name: postman-smoke-tests
    namespace: testkube
```

## Disabling Test Triggers

Disabling test triggers can be helpful to test your configuration during the development. Testkube lets you disable them via
the API or modifying the CRD directly specifying `disabled` field value as `true`.

By default, test triggers are enabled on creation.

## Architecture

Testkube uses [Informers](https://pkg.go.dev/k8s.io/client-go/informers) to watch Kubernetes resources and register handlers
on certain actions on the watched Kubernetes resources.

Informers are a reliable, scalable and fault-tolerant Kubernetes concept where each informer registers handlers with the
Kubernetes API and gets notified by Kubernetes on each event on the watched resources. Only the super-agent is able to register handlers with a Kubernetes API server, limiting our watched resources to the cluster in which the super-agent is deployed.

## API

Testkube exposes CRUD operations on test triggers in the REST API. Check out the [OpenAPI docs](../openapi/overview) for more info.

## Injected Environment Variables

:::info
Injected Environment Variables are supported when triggering legacy Tests / Suites only (see [Legacy Features](/articles/legacy-features)).

You can use [Action Parameters](#action-parameters) instead when triggering Workflows.
:::

The following environment variables are automatically injected into each triggered test pod:

- `WATCHER_EVENT_RESOURCE`: resource type
- `WATCHER_EVENT_NAME`: resource name
- `WATCHER_EVENT_NAMESPACE`: resource namespace
- `WATCHER_EVENT_EVENT_TYPE`: event type
