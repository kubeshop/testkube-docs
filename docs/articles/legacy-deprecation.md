# Legacy Deprecations

As of the [December 2025 Testkube Release (v1.21.1)](/changelog#monthly-release-v1211-2025-12-10), legacy functionality
related to Tests, Test Suites, Executors and Sources has been removed from both the Testkube Control Plane and the
Open Source Agent, in line with the notice given [early 2025](/articles/legacy-features).

This has the following implications:

- CLI commands related to legacy functionality have been removed — legacy CLI docs remain available [here](/legacy-cli/testkube).
- API operations related to legacy functionality have been removed, and the corresponding legacy API docs have been removed accordingly.
- Documentation for these features has been removed from the navigation and is no longer maintained.

CRDs related to legacy functionality described in the [Testkube CRDs](/articles/crds) reference are still part of the
installation to avoid deletion of corresponding resources in automated/GitOps usage scenarios.

## Removed in v1.21.1 (December 2025)

The following legacy features were removed in this release:

- **Tests** — creating, running, results, variables, secrets and timeouts.
- **Test Suites** — creating, running and results.
- **Test Sources** and **Templates**.
- **Executors / Test Types** — all built-in executors (Artillery, cURL, Cypress, Ginkgo, Gradle, JMeter, k6, Kubepug,
  Kubent, Maven, Playwright, Postman, Pytest, SoapUI, Tracetest, ZAP) as well as the Container Executor, Pre-built
  Executor and Distributed JMeter.
- **Cached Test Results**, **legacy Artifact Management** and legacy **Dashboard Settings**.
- **Generating Test CRDs** and the **legacy Architecture** documentation.
- **Legacy CLI commands** (the legacy CLI reference remains available [here](/legacy-cli/testkube)).

:::note
If you are still using legacy functionality, you will need to stay on previous Testkube releases and migrate your
Tests/Suites to TestWorkflows before upgrading, as described in the [migration guide](/articles/test-workflow-migration).
:::

For background on why these features were deprecated and how they map to their TestWorkflow replacements, see
[Legacy Feature Deprecation & Documentation](/articles/legacy-features). For deprecations unrelated to the legacy
Tests/Suites removal, see the [Deprecations](/articles/deprecations) page.
