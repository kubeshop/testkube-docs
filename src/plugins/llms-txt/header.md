# Testkube Documentation

> Testkube is the open testing platform for AI-driven engineering teams. It provides a single platform for creating, running and analyzing tests across any testing tool, any environment and any pipeline, with tests executed inside your own Kubernetes clusters.

Key concepts for working with Testkube:

- **Test Workflows** define how a test runs: the testing tool and its container image, the steps, the sources to check out, the artifacts to collect and the resources to use. They are written in YAML and work with any testing tool, such as k6, Playwright, Cypress, Postman or pytest. See [Test Workflows](https://docs.testkube.io/articles/test-workflows).
- **The Control Plane** stores Testkube resources and execution results, and exposes the Testkube Dashboard. It runs either in the cloud, hosted by Testkube, or on-prem in your own infrastructure. See [Installation overview](https://docs.testkube.io/articles/install/overview).
- **Testkube Runners** are deployed in your infrastructure to run tests, listen to Kubernetes events, sync resources and send webhooks. The Runner is open source and can also run standalone, without a Control Plane. See [Testkube Runners](https://docs.testkube.io/articles/agents-overview) and [Testkube Open Source](https://docs.testkube.io/articles/open-source).
- **The Testkube CLI** (`testkube`) manages a Testkube installation and its resources, and runs Test Workflows. See [Installing the Testkube CLI](https://docs.testkube.io/articles/install/cli) and the [CLI Commands Reference](https://docs.testkube.io/cli/testkube).
- **The Testkube MCP Server** lets AI assistants and agents work with Test Workflows, executions and artifacts. See [Testkube MCP Server](https://docs.testkube.io/articles/mcp-overview).

Some features are available only in Testkube Commercial. The [Feature Comparison](https://docs.testkube.io/articles/install/feature-comparison) lists the differences between Testkube Commercial and Testkube Open Source.
