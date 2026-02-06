# Control Plane Source of Truth (v2.7)

Starting in Testkube `v2.7`, connected deployments use the Control Plane as the default source of truth for orchestration state.

## What Changes in v2.7

State ownership moves from the Agent to the Control Plane for connected environments.

On upgrade, the Agent runs the SuperAgent migration so existing data can be aligned with the new control-plane-driven model.

## What This Means for Users

For most users, this change simplifies day-to-day operations:

- Workflow updates made in the Control Plane are the authoritative connected state.
- Scheduling is managed centrally from the Control Plane.
- Webhooks and Kubernetes-event triggers continue to execute through agents.
- Control Plane metrics are available by default for observability.

## Workflow Definitions and GitOps

By default, Workflow CRDs are no longer synced from Kubernetes into the connected environment state.

If your team manages workflows as Kubernetes CRDs, you should enable and validate the GitOps capability/agent flow so Git-managed CRD updates are reconciled as intended.

If you do not enable GitOps, CRD-side workflow edits are not expected to become the active connected state.

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
