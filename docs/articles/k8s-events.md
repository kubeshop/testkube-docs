# Kubernetes Events

Testkube can emit native [Kubernetes Events](https://kubernetes.io/docs/reference/kubernetes-api/cluster-resources/event-v1/)
for TestWorkflow lifecycle changes and resource operations. This allows you to integrate with CD tools,
monitoring systems, or any automation that watches Kubernetes Events.

:::note
As of Testkube 2.7.0, you need a **Webhook Agent** in your Testkube Environment to emit Kubernetes Events - [Read More](/articles/agents-overview#webhook-agents)
:::


## Enabling Kubernetes Events

Kubernetes Events are **enabled by default**. To explicitly enable or disable them, set the
`testkube-api.enableK8sEvents` Helm value:

```sh
helm upgrade \
  --install \
  --create-namespace \
  --namespace testkube \
  testkube \
  oci://us-east1-docker.pkg.dev/testkube-cloud-372110/testkube/testkube --version <version> \
  --set testkube-api.enableK8sEvents=true
```

Set the value to `false` to disable event emission.

## Emitted Events

Testkube emits Kubernetes Events for the following event types:

### TestWorkflow Execution Events

| Event Type | Action | Description |
|---|---|---|
| `queue-testworkflow` | `queued` | A TestWorkflow execution has been queued |
| `start-testworkflow` | `started` | A TestWorkflow execution has started running |
| `end-testworkflow-success` | `succeed` | A TestWorkflow execution completed successfully |
| `end-testworkflow-failed` | `failed` | A TestWorkflow execution has failed |
| `end-testworkflow-aborted` | `aborted` | A TestWorkflow execution was aborted |
| `end-testworkflow-canceled` | | A TestWorkflow execution was canceled |

### Resource Lifecycle Events

| Event Type | Action | Description |
|---|---|---|
| `created` | `created` | A Testkube resource was created |
| `updated` | `updated` | A Testkube resource was updated |
| `deleted` | `deleted` | A Testkube resource was deleted |

### Supported resource types

Not all event types apply to every resource. Events are emitted as follows:

- **TestWorkflow execution events** (queued, started, succeed, failed, aborted, canceled) are emitted for **TestWorkflows** only. Each event is tied to a specific TestWorkflow and its execution. The Kubernetes Event’s **InvolvedObject** points to that TestWorkflow resource so you can correlate events with a workflow by name and namespace.

- **Resource lifecycle events** (created, updated, deleted) are emitted when the following Testkube resources change:
  - **TestWorkflows** — when a workflow is created, updated, or deleted (via the **agent’s** API or CLI). The Kubernetes Event’s **InvolvedObject** references the TestWorkflow resource (name, namespace).
  - **TestWorkflow templates** — when a workflow template is created, updated, or deleted. The Kubernetes Event’s **InvolvedObject** references the TestWorkflowTemplate resource (name, namespace).
  - **Triggers** (TestTrigger) — when a trigger is created, updated, or deleted
  - **Webhooks** — when a webhook is created, updated, or deleted
  - **Webhook templates** — when a webhook template is created, updated, or deleted

  For **TestWorkflow** and **TestWorkflowTemplate** lifecycle events, **InvolvedObject** points to the specific resource so you can correlate by name and namespace. For **Trigger**, **Webhook**, and **WebhookTemplate** lifecycle events, **InvolvedObject** is a generic Testkube object; use the event **Name**, **Reason**, and **Message** together with your own tooling or labels to correlate with a particular resource.

:::warning As of Testkube 2.7.0
In 2.7.0, resources are stored in the Control Plane database. Kubernetes lifecycle events (and similarly [CDEvents](/articles/cd-events) and webhooks for resource lifecycle) are **not** emitted when workflows or other resources are created, updated, or deleted via the Control Plane (e.g. the dashboard). See the [Changelog — v2.7.0](/changelog#monthly-release-v270-2026-03-04) for details and the planned fix in the next monthly release.
:::

## Event Structure

Each Kubernetes Event created by Testkube has the following structure:

| Field | Value |
|---|---|
| **Name** | `testkube-event-<event-id>` |
| **Namespace** | The Testkube agent namespace |
| **Type** | `Normal` |
| **Reason** | The Testkube event type (e.g. `start-testworkflow`) |
| **Action** | A human-readable action (e.g. `started`) |
| **Message** | `executionId=<execution-id>` for workflow executions |
| **ReportingController** | `testkube.io/services` |
| **ReportingInstance** | `testkube.io/services/testkube-api-server` |
| **InvolvedObject** | For **TestWorkflow execution events**: references the TestWorkflow resource (name, namespace, labels). For **TestWorkflow** and **TestWorkflowTemplate** lifecycle events: references the specific resource (name, namespace). For **Trigger**, **Webhook**, and **WebhookTemplate** lifecycle events: references a generic Testkube object. |
| **Labels** | For workflow execution events: inherited from the TestWorkflow's labels. For lifecycle events: not set from the resource. |

## Querying Events

To see Testkube events in your cluster, run:

```sh
kubectl get events -n testkube --field-selector reportingComponent=testkube.io/services
```

You can also use `kubectl describe` to see full event details:

```sh
kubectl describe events -n testkube
```

## Testing the Integration

Create and run a sample TestWorkflow, then check for the emitted events:

```sh
testkube create testworkflow -f EXAMPLE_FILE.yaml
testkube run testworkflow TEST_WORKFLOW_NAME -f
kubectl get events -n testkube --field-selector reportingComponent=testkube.io/services
```

You should see events corresponding to the workflow execution lifecycle
(queued, started, and a terminal state such as succeed or failed).

## Reference

For more information about Kubernetes Events, see the
[Kubernetes Event API reference](https://kubernetes.io/docs/reference/kubernetes-api/cluster-resources/event-v1/).
