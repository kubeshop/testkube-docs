# The Testkube Open Source Agent

As Testkube Agent described in [Reference Architectures](install/reference-architectures) is
100% Open Source and can be [deployed in standalone mode](install/standalone-agent) without being managed
by the commercial Control Plane.

Once deployed, you can interact with the agent through the [Testkube CLI](install/cli) or directly via the
[Agent API](/openapi/overview#agent-api)

## Agent Functionality

As shown in [Reference Architectures](install/reference-architectures), the main difference between a commercial deployment of
Testkube and the standalone Agent is the Testkube Control Plane, which adds a User Interface (the [Testkube Dashboard](testkube-dashboard-explore))
and an underlying management layer for multiple agents ("Environments"), Org/User Mgmt, Insights/Reporting, etc.

That being said, many of the core features of Testkube are available directly in the agent via the aforementioned CLI or API:

- **Test Workflows** : Manage Workflows and Templates, Run/Schedule executions (see below for limitations)
- **Logs/Artifacts** : Retrieve Workflow executions, logs, artifacts
- **Webhooks** : Manage Webhooks that the
- **Event Triggers** : Manage Event Triggers
- **Tests, TestSuites, Sources** : Deprecated - but still available during a transition period.

### Workflow Limitations

The following Workflow features are not available when running a Workflow via the Standalone Agent:

- `execute` - see [Test Suites](test-workflows-test-suites)
- `parallel` - see [Parallelization](test-workflows-parallel)
- `matrix` (and `count`, `shards`, `maxCount`) - see [Sharding & Matrix Params](test-workflows-matrix-and-sharding)
- `services` - see [Services](test-workflows-services)

## Source Code and Licensing

The source-code for the agent is available in the [testkube GitHub repo](https://github.com/kubeshop/testkube)
and is dual-licensed under the MIT license and the Testkube Community License (TCL),
read more in our [Licensing FAQ](testkube-licensing-FAQ).
