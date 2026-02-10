# Control Plane Source of Truth (v2.7)

Starting in Testkube `v2.7`, connected deployments use the Control Plane as the default source of truth for orchestration state.

## What Changes in v2.7

State ownership moves from the Agent to the Control Plane for connected environments.

On upgrade, the Agent runs the SuperAgent migration so existing data can be aligned with the new control-plane-driven model.

As part of that migration, the agent sync path covers the CRDs used for connected orchestration configuration:

- `TestWorkflow` (`testworkflows.testkube.io/v1`)
- `TestWorkflowTemplate` (`testworkflows.testkube.io/v1`)
- `TestTrigger` (`tests.testkube.io/v1`)
- `Webhook` (`executor.testkube.io/v1`)
- `WebhookTemplate` (`executor.testkube.io/v1`)

This gives existing environments a consistent starting point when moving to Control Plane ownership.

## What This Means for Users

For most users, this change simplifies day-to-day operations:

- Workflow updates made in the Control Plane are the authoritative connected state.
- Environment health no longer depends on continuous connection to SuperAgent.
- Environments no longer automatically switch to read-only mode when the SuperAgent connection is unavailable.
- Scheduling is managed centrally from the Control Plane.
- Webhooks and Kubernetes-event triggers continue to execute through agents via the agent capability model (for triggers, see [Listener Agents](/articles/agents-overview#listener-agents)).
- Control Plane metrics are available by default for observability (see [Control Plane Metrics](/articles/control-plane-metrics)).

## Workflow Definitions and GitOps

By default, Workflow CRDs are no longer synced from Kubernetes into the connected environment state.

If your team manages workflows as Kubernetes CRDs, you should enable and validate the GitOps capability/agent flow so Git-managed CRD updates are reconciled as intended.

Without GitOps, workflow CRD edits are not synced to the connected state.

### Enable GitOps agent flow via Helm

Enable Kubernetes-to-Control-Plane sync in your agent Helm values.

If you install the full `testkube` chart:

```yaml
testkube-api:
  next:
    gitops:
      syncKubernetesToCloud: true
```

Notes:

- Migration backfills existing CRD-based configuration into Control Plane.
- Ongoing Kubernetes-to-Control-Plane synchronization is an explicit GitOps capability choice.

## Agent Capability Cookbook (v2.7)

In `v2.7`, connected environments still use agent capabilities for eventing and optional sync paths.

Use this section as a practical cookbook when deciding which capabilities to enable on each connected agent.

### Listener capability

Use Listener capability when you need Kubernetes-event triggers (`TestTrigger`) to be evaluated from cluster events.

For self-registering Runner Agents (`testkube-runner` chart):

```yaml
listener:
  enabled: true
```

For namespace-scoped and cluster-wide listening patterns, see [Listener Agent Cookbook](/articles/multi-agent-runner-helm-chart#listener-agent-cookbook).

CLI example:

```bash
testkube install agent <name> --create --listener
```

### GitOps capability

Use GitOps capability when your source of truth for Workflows/Triggers/Webhooks remains in Kubernetes manifests and you want those CRD changes synchronized into connected Control Plane state.

For self-registering Runner Agents (`testkube-runner` chart):

```yaml
gitops:
  enabled: true
```

CLI example:

```bash
testkube install agent <name> --create --gitops
```

### Webhooks capability

Use Webhooks capability when webhook-triggered execution should run through the agent path in connected mode.

For self-registering Runner Agents (`testkube-runner` chart):

```yaml
webhooks:
  enabled: true
```

CLI example:

```bash
testkube install agent <name> --create --webhooks
```

:::note
During SuperAgent migration, webhook capability is preserved so existing webhook behavior continues after upgrading to `v2.7`.
:::

### Combined capability example

A common connected setup keeps Runner + Listener enabled and adds GitOps and Webhooks explicitly:

```yaml
runner:
  enabled: true

listener:
  enabled: true

gitops:
  enabled: true

webhooks:
  enabled: true
```

Equivalent CLI flow:

```bash
testkube install agent <name> --create --runner --listener --gitops --webhooks
```

## Scheduling Changes

Scheduled Workflows are now managed by the Control Plane by default in connected mode.

See [Scheduling Workflows](/articles/scheduling-tests) for schedule syntax and usage, and [Control Plane Metrics](/articles/control-plane-metrics) for scheduler observability.

## Webhooks and Triggers

The execution model for Webhooks and Trigger listeners remains agent-based:

- During SuperAgent migration, SuperAgent keeps the webhook capability so webhook-driven workflow execution continues through the agent path.
- Test Triggers are still handled by Listener Agents.

Related docs:

- [Webhooks](/articles/webhooks)
- [Kubernetes Event Triggers](/articles/test-triggers)
- [Listener Agents](/articles/agents-overview#listener-agents)

:::note
The "webhook capability" naming is currently an internal implementation detail and may change in future releases.
:::

## Metrics Default

Control Plane Prometheus metrics are enabled by default in `v2.7`.

Metrics coverage (including scheduler metrics) is documented in:

- [Control Plane Metrics](/articles/control-plane-metrics)
