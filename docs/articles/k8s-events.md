# Kubernetes Events

Testkube can emit native [Kubernetes Events](https://kubernetes.io/docs/reference/kubernetes-api/cluster-resources/event-v1/)
for TestWorkflow lifecycle changes and resource operations. This allows you to integrate with CD tools,
monitoring systems, or any automation that watches Kubernetes Events.

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
| **InvolvedObject** | References the `TestWorkflow` resource that triggered the event |
| **Labels** | Inherited from the TestWorkflow's labels |

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
