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
- Environment health no longer depends on continuous connection to the Standalone Agent (SuperAgent).
- Environments no longer automatically switch to read-only mode when the SuperAgent connection is unavailable.
- Scheduling is managed centrally from the Control Plane.
- Webhooks and Kubernetes-event triggers continue to execute through agents via the agent capability model (for triggers, see [Listener Agents](/articles/agents-overview#listener-agents)).
- Control Plane metrics are available by default for observability (see [Control Plane Metrics](/articles/control-plane-metrics)).

## Workflow Definitions and GitOps

By default, Workflow CRDs are no longer synced from Kubernetes into the connected environment state.

If your team manages workflows as Kubernetes CRDs, you should enable and validate the GitOps capability/agent flow so Git-managed CRD updates are reconciled as intended.

If you do not enable GitOps, CRD-side workflow edits are not expected to become the active connected state.

### Enable GitOps agent flow via Helm

Enable Kubernetes-to-Control-Plane sync in your agent Helm values.

If you install the full `testkube` chart:

```yaml
testkube-api:
  next:
    gitops:
      syncKubernetesToCloud: true
```

If you install the `testkube-api` chart directly:

```yaml
next:
  gitops:
    syncKubernetesToCloud: true
```

Or set it inline during upgrade:

```sh
helm upgrade --install <release> <chart> \
  --set 'testkube-api.next.gitops.syncKubernetesToCloud=true'
```

For `testkube-api` chart directly, use:

```sh
helm upgrade --install <release> <chart> \
  --set 'next.gitops.syncKubernetesToCloud=true'
```

In other words:

- Migration backfills existing CRD-based configuration into Control Plane.
- Ongoing Kubernetes-to-Control-Plane synchronization is an explicit GitOps capability choice.

Start here:

- [GitOps Overview](/articles/gitops-overview)

## Scheduling Changes

Scheduled Workflows are now managed by the Control Plane by default in connected mode.

See [Scheduling Workflows](/articles/scheduling-tests) for schedule syntax and usage, and [Control Plane Metrics](/articles/control-plane-metrics) for scheduler observability.

## Webhooks and Triggers

The execution model for Webhooks and Trigger listeners remains agent-based:

- Webhooks are still executed by Agents.
- Test Triggers are still handled by Listener Agents (or the Standalone Agent with listener behavior).

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

## Upgrade Checklist

1. Validate that workflow changes in Control Plane are used as the active connected state.
2. If you use workflow CRDs, enable and validate GitOps capability/agent flow before rollout.
3. Validate schedules are managed from Control Plane (no missed or duplicate runs).
4. Validate webhooks and trigger flows still execute through agents/listener agents.
5. Scrape and verify Control Plane `/metrics` for workflow, scheduler, and webhook metrics.
