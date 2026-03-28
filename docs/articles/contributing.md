# Contributing to Testkube Open Source

Testkube is open source and we welcome contributions of all kinds — code, documentation, bug reports, feature requests, and ideas. Whether you're fixing a typo or building a new feature, we'd love to have you involved!

:::tip New to open source?
Check out [First Contributions](https://github.com/firstcontributions/first-contributions) for a gentle introduction to the contribution workflow.
:::

## The Testkube Agent Repository

The [Testkube Agent](https://github.com/kubeshop/testkube) is the core open-source component that runs inside Kubernetes clusters. It contains:

- **API Server** — the main service that manages Test Workflows, executions, webhooks, and storage
- **CLI** (`kubectl-testkube`) — the command-line interface for interacting with Testkube - [Read More](/articles/cli)
- **TestWorkflow Runtime** — init containers and toolkit utilities that orchestrate [Test Workflow](/articles/test-workflows) execution
- **Helm Chart** — Kubernetes deployment configuration with all dependencies

The repository includes detailed guides that cover everything you need to contribute effectively:

| Guide | What it covers |
|-------|---------------|
| [CONTRIBUTING.md](https://github.com/kubeshop/testkube/blob/main/CONTRIBUTING.md) | Contribution workflow, coding standards, commit conventions, PR process, and a codebase walkthrough |
| [DEVELOPMENT.md](https://github.com/kubeshop/testkube/blob/main/DEVELOPMENT.md) | Local development setup with Tilt, live reload, debugging, and day-to-day workflows |
| [ARCHITECTURE.md](https://github.com/kubeshop/testkube/blob/main/ARCHITECTURE.md) | High-level system design — API server, controllers, storage layer, event system, CRDs, and CLI |

## Finding Something to Work On

- Browse [open issues](https://github.com/kubeshop/testkube/issues) — look for labels like `good first issue` or `help wanted`.
- Have an idea? Share it on [Slack](https://bit.ly/testkube-slack) or open a GitHub issue to discuss before diving in.
- Documentation improvements are always welcome — the documentation lives in the [testkube-docs](https://github.com/kubeshop/testkube-docs) repository.

## Quick Overview of the Contribution Workflow

1. **Fork** the [testkube repository](https://github.com/kubeshop/testkube) and create a feature branch from `main`
2. **Set up your environment** — the [Development Guide](https://github.com/kubeshop/testkube/blob/main/DEVELOPMENT.md) walks you through local setup with [Tilt](https://tilt.dev), which gives you live reload, a local Kubernetes cluster, and all dependencies (PostgreSQL, MinIO, NATS) running out of the box
3. **Make your changes** — follow the coding standards and conventions described in the [Contributing Guide](https://github.com/kubeshop/testkube/blob/main/CONTRIBUTING.md)
4. **Verify locally**:

```bash
make build    # Ensure compilation succeeds
make lint     # Run golangci-lint
make test     # Run unit tests
make generate # Regenerate any generated code if needed
```

5. **Commit** using [Conventional Commits](https://www.conventionalcommits.org/) format (e.g., `feat: ...`, `fix: ...`, `docs: ...`) — CI enforces this on PR titles
6. **Open a Pull Request** against `main` with a clear description and links to related issues

## Coding Standards at a Glance

The full details are in the repo's [CONTRIBUTING.md](https://github.com/kubeshop/testkube/blob/main/CONTRIBUTING.md), but here are the highlights:

- **Go** 1.26+ with `gofmt` / `goimports` formatting
- **Linting** via [golangci-lint](https://golangci-lint.run/) v2 — run `make lint` before pushing
- **Imports** ordered as: stdlib, third-party, then `github.com/kubeshop/testkube`
- **Tests** are expected for new features — use `make test` to run the suite
- **Generated code** (OpenAPI models, mocks, SQL client, CRDs) must be committed alongside source changes

## Using AI to Contribute

Feel free to use AI coding assistants. The repository includes an [AGENTS.md](https://github.com/kubeshop/testkube/blob/main/AGENTS.md) file that provides context and guidelines for AI tools — point your IDE or agent at it to ensure generated code follows project conventions.

## Getting Help

- **Slack**: Join the [Testkube community](https://bit.ly/testkube-slack) for real-time discussions and questions
- **GitHub Issues**: Search [existing issues](https://github.com/kubeshop/testkube/issues) or open a new one
- **Documentation**: Browse [docs.testkube.io](https://docs.testkube.io) for user-facing documentation

Thank you for contributing to Testkube!
