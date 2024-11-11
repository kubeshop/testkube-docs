const redirects = [
  // /docs/oldDoc -> /docs/newDoc
  {
    from: "/executor-cypress",
    to: "/test-types/executor-cypress",
  },
  {
    from: "/executor-postman",
    to: "/test-types/executor-postman",
  },
  {
    from: "/executor-soapui",
    to: "/test-types/executor-soapui",
  },
  {
    from: "/executor-k6",
    to: "/test-types/executor-k6",
  },
  {
    from: "/executor-jmeter",
    to: "/test-types/executor-jmeter",
  },
  {
    from: "/executor-kubepug",
    to: "/test-types/executor-kubepug",
  },
  {
    from: "/executor-artillery",
    to: "/test-types/executor-artillery",
  },
  {
    from: "/executor-maven",
    to: "/test-types/executor-maven",
  },
  {
    from: "/executor-gradle",
    to: "/test-types/executor-gradle",
  },
  {
    from: "/executor-ginkgo",
    to: "/test-types/executor-ginkgo",
  },
  {
    from: ["/executor-curl", "/test-types/curl"],
    to: "/test-types/executor-curl",
  },
  {
    from: ["/test-types/executor-custom", "/executor-custom"],
    to: "/test-types/container-executor",
  },
  {
    from: "/UI",
    to: "/articles/testkube-dashboard-explore",
  },
  {
    from: "/articles/testkube-dashboard",
    to: "/articles/testkube-dashboard-explore",
  },
  {
    from: "/tests-running",
    to: "/articles/running-tests",
  },
  {
    from: "/testsuites-running",
    to: "/articles/running-test-suites",
  },
  {
    from: [
      "/testsuites-creating",
      "/concepts/test-suites/testsuites-creating",
      "/using-testkube/test-suites/testsuites-creating",
    ],
    to: "/articles/creating-test-suites",
  },
  {
    from: ["/helm-charts", "/helm"],
    to: "/articles/install/install-with-helm",
  },
  {
    from: "/telemetry",
    to: "/articles/telemetry",
  },
  {
    from: "/guides/test-suites/testsuites-getting-results",
    to: "/articles/getting-test-suites-results",
  },
  {
    from: "/using-testkube/UI",
    to: "/articles/testkube-dashboard-explore",
  },
  {
    from: "/FAQ",
    to: "/articles/install/faq",
  },
  {
    from: ["/integrations/testkube-automation", "/testkube-automation"],
    to: "/articles/cicd-overview",
  },
  {
    from: [
      "/guides/tests/tests-creating",
      "/category/tests",
      "/concepts/tests/tests-creating",
      "/tests-creating",
      "/using-testkube/tests/tests-creating",
    ],
    to: "/articles/creating-tests",
  },
  {
    from: "/architecture",
    to: "/articles/architecture",
  },
  {
    from: "/integrations/slack-integration",
    to: "/articles/slack-integration",
  },
  {
    from: "/overview/supported-tests",
    to: "/articles/supported-tests",
  },
  {
    from: "/overview/testkube-benefits",
    to: "/articles/testkube-benefits",
  },
  {
    from: [
      "/getting-started/index",
      "/getting-started/installation",
      "/getting-started",
      "/integrations",
      "/installing",
      "/articles/getting-started-overview",
      "/getting-started/step2-installing-cluster-components",
      "/articles/step2-installing-cluster-components",
      "/getting-started/step3-creating-first-test",
      "/articles/step3-creating-first-test",
    ],
    to: "/articles/tutorial/quickstart",
  },
  {
    from: [
      "/cli/installation",
      "/getting-started/installing-cli",
      "/articles/step1-installing-cli",
      "/getting-started/step1-installing-cli",
    ],
    to: "/articles/install/cli",
  },
  {
    from: "/concepts/tests/tests-running",
    to: "/articles/running-tests",
  },
  {
    from: "/concepts/tests/tests-getting-results",
    to: "/articles/getting-tests-results",
  },
  {
    from: [
      "/concepts/tests/tests-variables",
      "/tests-variables",
      "/using-testkube/tests/tests-variables",
    ],
    to: "/articles/adding-tests-variables",
  },
  {
    from: "/concepts/test-suites/testsuites-running",
    to: "/articles/running-test-suites",
  },
  {
    from: "/concepts/test-suites/testsuites-getting-results",
    to: "/articles/getting-test-suites-results",
  },
  {
    from: "/concepts/dashboard",
    to: "/articles/testkube-dashboard-explore",
  },
  {
    from: "/concepts/secrets",
    to: "/articles/adding-tests-secrets",
  },
  {
    from: "/concepts/scheduling",
    to: "/articles/scheduling-tests",
  },
  {
    from: ["/concepts/artifacts", "/using-testkube/artifacts"],
    to: "/articles/artifacts",
  },
  {
    from: "/concepts/metrics",
    to: "/articles/metrics",
  },
  {
    from: ["/concepts/triggers", "/using-testkube/triggers"],
    to: "/articles/test-triggers",
  },
  {
    from: "/concepts/dependencies",
    to: "/articles/testkube-dependencies",
  },
  {
    from: "/concepts/test-sources",
    to: "/articles/test-sources",
  },
  {
    from: "/concepts/test-executions",
    to: "/articles/test-executions",
  },
  {
    from: [
      "/guides/going-to-production/exposing-testkube/overview",
      "/guides/exposing-testkube/overview",
      "/articles/exposing-testkube",
    ],
    to: "/articles/testkube-dashboard-explore",
  },
  {
    from: [
      "/guides/going-to-production/authentication/oauth-cli",
      "/guides/authentication/oauth-cli",
    ],
    to: "/articles/oauth-cli",
  },
  {
    from: [
      "/guides/going-to-production/authentication/oauth-ui",
      "/articles/oauth-dashboard",
    ],
    to: "/articles/testkube-dashboard-explore",
  },
  {
    from: "/guides/cicd",
    to: "/articles/cicd-overview",
  },
  {
    from: "/guides/cicd/github-actions",
    to: "/articles/github-actions",
  },
  {
    from: "/guides/cicd/gitops",
    to: "/articles/gitops-overview",
  },
  {
    from: "/guides/cicd/gitops/flux",
    to: "/articles/flux-integration",
  },
  {
    from: "/guides/cicd/gitops/argocd",
    to: "/articles/argocd-integration",
  },
  {
    from: "/guides/webhooks",
    to: "/articles/webhooks",
  },
  {
    from: "/guides/slack-integration",
    to: "/articles/slack-integration",
  },
  {
    from: "/guides/generate-test-crds",
    to: "/articles/generate-test-crds",
  },
  {
    from: ["/guides/logging", "/articles/logging"],
    to: "/articles/install/standalone-agent",
  },
  {
    from: "/guides/uninstall",
    to: "/articles/uninstall",
  },
  {
    from: "/guides/templates",
    to: "/articles/templates",
  },
  {
    from: [
      "/testkube-cloud/intro",
      "/testkube-cloud",
      "/testkube-cloud/articles/intro",
      "/testkube-pro/intro",
    ],
    to: "/articles/using-testkube",
  },
  {
    from: [
      "/testkube-cloud/installing-agent",
      "/testkube-cloud/articles/installing-agent",
      "/testkube-pro/installing-agent",
      "/testkube-pro/articles/installing-agent",
      "/articles/install/advanced-multi-cluster",
      "/testkube-cloud/transition-from-oss",
      "/testkube-cloud/articles/transition-from-oss",
      "/testkube-pro/transition-from-oss",
      "/testkube-pro/articles/transition-from-oss",
    ],
    to: "/articles/install/multi-cluster",
  },
  {
    from: [
      "/testkube-cloud/organization-management",
      "/testkube-cloud/articles/organization-management",
      "/testkube-pro/organization-management",
    ],
    to: "/testkube-pro/articles/organization-management",
  },
  {
    from: [
      "/testkube-cloud/environment-management",
      "/testkube-cloud/articles/environment-management",
      "/testkube-pro/environment-management",
    ],
    to: "/testkube-pro/articles/environment-management",
  },
  {
    from: [
      "/testkube-cloud/managing-cli-context",
      "/testkube-cloud/articles/managing-cli-context",
      "/testkube-pro/managing-cli-context",
    ],
    to: "/testkube-pro/articles/managing-cli-context",
  },
  {
    from: [
      "/testkube-cloud/architecture",
      "/testkube-cloud/articles/architecture",
      "/testkube-pro/architecture",
    ],
    to: "/testkube-pro/articles/architecture",
  },
  {
    from: [
      "/testkube-cloud/articles/running-parallel-tests-with-test-suite",
      "/testkube-pro/running-parallel-tests-with-test-suite",
    ],
    to: "/testkube-pro/articles/running-parallel-tests-with-test-suite",
  },
  {
    from: [
      "/testkube-cloud/articles/AI-test-insights",
      "/testkube-pro/AI-test-insights",
    ],
    to: "/testkube-pro/articles/AI-test-insights",
  },
  {
    from: [
      "/testkube-cloud/articles/status-pages",
      "/testkube-pro/status-pages",
    ],
    to: "/testkube-pro/articles/status-pages",
  },
  {
    from: [
      "/testkube-cloud/articles/cached-results",
      "/testkube-pro/cached-results",
    ],
    to: "/testkube-pro/articles/cached-results",
  },
  {
    from: "/reference/helm-chart",
    to: "/articles/install/install-with-helm",
  },
  {
    from: "/reference/openapi",
    to: "/openapi/overview",
  },
  {
    from: "/reference/architecture",
    to: "/articles/architecture",
  },
  {
    from: "/reference/telemetry",
    to: "/articles/telemetry",
  },
  {
    from: ["/contributing", "/contributing/contributing"],
    to: "/articles/contributing",
  },
  {
    from: "/contributing/development",
    to: "/articles/development",
  },
  {
    from: [
      "/contributing/development/crds",
      "/contributing/development/development-crds/",
      "/articles/operator-api-reference",
      "/articles/crds-reference"
    ],
    to: "/articles/crds",
  },
  {
    from: "/guides/upgrade",
    to: "/articles/upgrade-uninstall",
  },
  {
    from: "/articles/install/deployment-architectures",
    to: "/articles/install/overview",
  },
  {
    from: ["/testkube-enterprise/articles/auth", "/articles/install/auth"],
    to: "/testkube-pro-on-prem/articles/auth",
  },
  {
    from: [
      "/testkube-enterprise/articles/testkube-enterprise",
      "/testkube-pro-on-prem/articles/testkube-pro-on-prem",
      "/articles/install/quickstart-install",
    ],
    to: "/articles/install/install-with-cli",
  },
  {
    from: [
      "/testkube-enterprise/articles/usage-guide",
      "/testkube-pro-on-prem/articles/usage-guide",
    ],
    to: "/articles/install/install-with-helm",
  },
  {
    from: [
      "/articles/supported-tests",
      "/articles/testkube-benefits",
      "/articles/open-source-or-pro",
      "/testkube-pro-on-prem/articles/migrating-from-oss-to-pro",
      "/testkube-enterprise/articles/migrating-from-oss-to-pro",
    ],
    to: "/articles/migrate-from-oss",
  },
  {
    from: ["/articles/testkube-oss", "/articles/install/install-oss"],
    to: "/articles/install/standalone-agent",
  },
  {
    from: "/articles/install/reference-architectures",
    to: "/articles/install/deployment-architectures",
  },
  {
    from: [
      "/articles/artifact-storage",
      "/articles/install/openshift",
      "/articles/deploying-in-aws",
      "/guides/going-to-production/aws",
    ],
    to: "/articles/install/standalone-agent",
  },
  {
    from: "/openapi",
    to: "/openapi/overview",
  },
  {
    from: "/category/integrations",
    to: "/articles/integrations",
  },
  {
    from: "/articles/install-cli",
    to: "/articles/install/cli",
  },
  {
    from: "/articles/getting-started",
    to: "/articles/tutorial/quickstart",
  },
  {
    from: "/articles/helm-chart",
    to: "/articles/install/install-with-helm",
  },
  {
    from: "/k6",
    to: "/articles/examples/k6-basic",
  },
  {
    from: "/jmeter",
    to: "/articles/examples/jmeter-basic",
  },
  {
    from: "/playwright",
    to: "/articles/examples/playwright-basic",
  },
  {
    from: "/cypress",
    to: "/articles/examples/cypress-basic",
  },
  {
    from: "/postman",
    to: "/articles/examples/postman-basic",
  },
  {
    from: "/soapui",
    to: "/articles/examples/soapui-basic",
  },
  {
    from: "/pytest",
    to: "/articles/examples/pytest-basic",
  },
  {
    from: "/selenium",
    to: "/articles/examples/selenium-basic",
  },
  {
    from: "/artillery",
    to: "/articles/examples/artillery-basic",
  },
  {
    from: "/gradle",
    to: "/articles/examples/gradle-basic",
  },
  {
    from: "/maven",
    to: "/articles/examples/maven-basic",
  },
  {
    from: "/github",
    to: "/articles/github-actions",
  },
  {
    from: "/gitlab",
    to: "/articles/gitlab",
  },
  {
    from: "/jenkins",
    to: "/articles/jenkins",
  },
  {
    from: "/azure",
    to: "/articles/azure",
  },
  {
    from: "/circleci",
    to: "/articles/circleci",
  },
  {
    from: ["/argocd","/argo"],
    to: "/articles/argocd-integration",
  },
  {
    from: "/flux",
    to: "/articles/flux-integration",
  },
  {
    from: "/tekton",
    to: "/articles/tekton",
  },
  {
    from: "/slack",
    to: "/articles/slack-integration",
  },
  {
    from: "/prometheus",
    to: "/articles/metrics",
  },
  {
    from: "/articles/slack-integration-webhooks",
    to: "/articles/slack-integration",
  },
  {
    from: "/cli",
    to: "/articles/cli",
  },
  {
    from: "/workflows",
    to: "/articles/examples/overview",
  },
];

module.exports = redirects;
