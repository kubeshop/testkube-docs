# Commercial Licensing Overview

This page explains Testkube's commercial licensing model for Cloud and On-Prem Control Plane deployments. For Open Source licensing, including the MIT license and the Testkube Community License, see the [Open Source Licensing FAQ](/articles/testkube-licensing-FAQ).

Commercial licensing is based on how your organization uses the Testkube Control Plane and the agents that execute work in your infrastructure. The exact limits and commercial terms depend on your plan, but the model is built around two main dimensions:

- **Users**: people who can access your Testkube organization.
- **Runner Agents**: agents that execute Test Workflows in your clusters or namespaces. Runner Agents are always deployed on-prem in your infrastructure.

## Control Plane Deployment Options

### Cloud Hosted Control Plane

With Testkube Cloud, the Testkube team operates the Control Plane at [app.testkube.io](https://app.testkube.io). You create organizations, environments, workflows, and other resources in the hosted Dashboard, then deploy Testkube Runner Agents into your own infrastructure when you need to execute workflows or connect to Kubernetes events.

Cloud licensing is managed by Testkube and applied to your organization. Depending on your plan, user licensing can be based on fixed seat limits or usage at the end of the billing period. See [Member Management](/articles/member-management#member-licensing-with-the-testkube-cloud-control-plane) for the current behavior described in the product documentation.

### On-Prem Control Plane

With Testkube On-Prem, you host the commercial Testkube Control Plane in your own infrastructure. This model is commonly used when you need stricter control over data residency, networking, identity, or platform operations.

On-prem deployments use a license key during installation. By default, the Control Plane validates that license through the Testkube license service, so the Control Plane API must be able to reach:

```text
https://license.testkube.io
```

Allow outbound HTTPS traffic to `license.testkube.io` on port `443` from the Testkube Control Plane API unless you are using an offline license. For restricted or air-gapped environments, contact Testkube to discuss offline licensing. See the [advanced installation guide](/articles/install/advanced-install#offline-license) for the current offline license configuration flow.

### Testkube Open Source

The Testkube Agent can also run in standalone mode without connecting to the commercial Control Plane. In this mode, the agent stores and manages resources in the Kubernetes cluster where it runs and can be used through the CLI or Agent API.

Standalone mode is the open source path for running Testkube without a commercial Control Plane. It is not licensed by commercial users, seats, or Runner Agent limits. Some advanced features require the commercial Control Plane or are covered by the Testkube Community License. See [Testkube Open Source](/articles/open-source) and the [Open Source Licensing FAQ](/articles/testkube-licensing-FAQ) for more details.

## User Licensing

Commercial Testkube organizations count members as either **full users** or **read-only users**.

- **Full users** have write access to at least one Testkube resource, resource group, or environment.
- **Read-only users** do not have write access to any Testkube resource, resource group, or environment.

This classification is based on the effective permissions assigned to the member. For example, a user who is added directly or through a team to an environment with write permissions counts as a full user. A user who can only view resources and results counts as read-only.

If a read-only user is later granted write access, Testkube counts that user against the full user quota when a full user seat is available. If the organization has no available full user seats, Testkube prevents the permission change or sign-in flow that would exceed the licensed limit.

For the detailed rules, constraints, and Cloud-specific member licensing options, see [Member Management](/articles/member-management#member-types).

Org-wide Read tokens & the Read-only user cap keep the user/identity on a **read-only users** rather than consuming a full user.

## Runner Agent Licensing

Testkube uses agents to connect the Control Plane to your infrastructure. Only **Runner Agents** require an agent license because they execute Test Workflows.

Other agent capabilities do not require a Runner Agent license:

- **Listener Agents** listen for Kubernetes events.
- **GitOps Agents** synchronize Testkube resources from Kubernetes into the Control Plane.
- **Webhook Agents** emit webhooks, CDEvents, and Kubernetes events.

Runner Agent licenses can be assigned as **fixed** or **floating**.

### Fixed Runner Agents

A fixed Runner Agent license is assigned to a specific Runner Agent. That agent can run workflows independently whenever it is online and available.

Fixed licenses are useful for long-lived agents that represent stable execution capacity, such as a runner dedicated to a production, staging, or shared platform cluster.

### Floating Runner Agents

A floating Runner Agent license is shared across multiple Runner Agents and controls how many of those agents can execute workflows concurrently. For example, if an organization has two floating Runner Agent licenses assigned across several agents, two floating agents can execute workflows at the same time and additional executions will queue until capacity is available.

Floating licenses are useful for dynamic infrastructure, ephemeral environments, preview environments, and other cases where the number of connected agents changes over time.

See [Licensing for Runner Agents](/articles/agents-overview#licensing-for-runner-agents) for the current Runner Agent behavior, including how to assign floating licenses.

## What Counts Toward a License

At a high level:

| Licensed item | Counted when |
| --- | --- |
| Full user | A member has write access to at least one Testkube resource, resource group, or environment. |
| Read-only user | A member has access to Testkube but does not have write access. |
| Fixed Runner Agent | A Runner Agent is created with a fixed license. |
| Floating Runner Agent | A floating license is available for concurrent workflow execution by Runner Agents assigned to floating mode. |

The exact limits shown in the Dashboard come from your Testkube plan or license key.

## Planning Your License

When sizing a Testkube license, consider:

- How many people need to create, update, run, or administer workflows.
- How many people only need to view workflow definitions, executions, reports, or dashboards.
- How many stable clusters or namespaces need dedicated workflow execution capacity.
- Whether you use ephemeral environments or dynamic runner fleets that benefit from floating Runner Agent licenses.
- Whether your organization will use Testkube Cloud, an on-prem Control Plane, standalone OSS agents, or a mix of these models.

If you are not sure which model fits your setup, [contact Testkube](https://testkube.io/contact) to review your deployment architecture and license requirements.
