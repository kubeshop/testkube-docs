# Legacy Feature Deprecation

As of the December 2025 Testkube Release (see [changelog](/changelog#monthly-release-v1211-2025-12-10)), legacy functionality related to Tests, TestSuites, Executors and 
Sources has been removed from both the Testkube Control Plane and the Open Source Agent, in line with the notice given [early 2025](/articles/legacy-features).

This has the following implications:
- CLI Commands related to legacy functionality have been removed, legacy CLI docs are available [here](/legacy-cli/testkube).
- API Operations related to legacy functionality have been removed, legacy API docs have been removed accordingly. 

CRDs related to legacy functionality described in the [Testkube CRDs](/articles/crds) are still part of the installation to avoid deletion
of corresponding resources in automated/GitOps usage scenarios.

:::note
If you are still using legacy functionality, you will need to stay on previous Testkube releases and migrate your Tests/Suites to
TestWorkflows before upgrading, as described in the [migration guide](/articles/test-workflow-migration).
:::


