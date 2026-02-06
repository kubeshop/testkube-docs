# Control Plane Source of Truth (v2.7)

Starting in Testkube `v2.7`, connected deployments use the Control Plane as the default source of truth for orchestration state.

This is enabled by default with the following configuration:

```yaml
# Control Plane
env:
  - name: CAPABILITY_SOURCE_OF_TRUTH
    value: "true"
```

```yaml
# Agent (Standalone Agent / SuperAgent)
env:
  - name: WARNING_UNSAFE_FORCE_SUPERAGENT_MODE
    value: "false"
```

## What Changes in v2.7

When `CAPABILITY_SOURCE_OF_TRUTH=true`, state ownership moves from the Agent to the Control Plane for connected environments.

On upgrade, the Agent runs the SuperAgent migration so existing data can be aligned with the new control-plane-driven model.

## Workflow Definitions and GitOps

By default, Workflow CRDs are no longer synced from Kubernetes into the connected environment state.

If you want Kubernetes manifests to remain the source for Workflow definitions, configure GitOps capability and workflows accordingly:

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

Control Plane Prometheus metrics are enabled by default in `v2.7`:

```yaml
env:
  - name: TK_CLOUD_METRICS_ENABLED
    value: "true"
```

Metrics coverage (including scheduler metrics) is documented in:

- [Control Plane Metrics](/articles/control-plane-metrics)

## Upgrade Checklist

1. Ensure `CAPABILITY_SOURCE_OF_TRUTH=true` on Control Plane.
2. Ensure `WARNING_UNSAFE_FORCE_SUPERAGENT_MODE=false` on Agent.
3. Confirm whether you need GitOps-driven Workflow sync and enable/configure it explicitly if required.
4. Scrape the Control Plane `/metrics` endpoint and verify `TK_CLOUD_METRICS_ENABLED=true`.
