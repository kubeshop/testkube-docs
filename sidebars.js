/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

const agentRedocSidebar = require("./src/openapi/agent/redoc-sidebar");
const cloudRedocSidebar = require("./src/openapi/cloud/redoc-sidebar");

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  main: [
    {
      type: "doc",
      label: "Welcome!",
      id: "index",
    },
    "articles/tutorial/quickstart",
    "articles/tutorial/example",
    {
      type: "html",
      value: "<hr />",
    },
    {
      type: "category",
      label: "Installing",
      items: [
        "articles/install/overview",
        "articles/install/install-with-cli",
        {
          type: "category",
          label: "Install with Helm",
          items: [
            "articles/install/install-with-helm",
            "articles/install/advanced-install",
          ],
        },
        { type: "doc", label: "Upgrading", id: "articles/upgrade" },
        "articles/install/deployment-architectures",
        "articles/install/faq",
        {
          type: "category",
          label: "More guides",
          items: [
            "articles/install/multi-cluster",
            "articles/install/standalone-agent",
            "articles/install/quickstart-no-k8s",
            {
              type: "doc",
              label: "Migrating from OSS",
              id: "testkube-pro/articles/transition-from-oss",
            },
            "articles/install/uninstall",
            {
              type: "doc",
              label: "Configure Identity Providers",
              id: "testkube-pro-on-prem/articles/auth",
            },
            {
              type: "doc",
              label: "OpenShift on GCP",
              id: "articles/install/openshift",
            },
            {
              type: "doc",
              label: "S3 with IAM Authentication",
              id: "articles/install/s3-storage",
            },
            {
              type: "doc",
              label: "Deploying on AWS",
              id: "articles/deploying-in-aws",
            },
            {
              type: "doc",
              label: "Using Istio",
              id: "articles/istio",
            },
            {
              type: "doc",
              label: "Using Vault",
              id: "articles/vault",
            },
            {
              type: "doc",
              label: "Using a Private CA",
              id: "articles/private-ca",
            },
            {
              type: "doc",
              label: "Using an external MongoDB",
              id: "articles/testkube-dependencies",
            },
            { type: "doc", label: "Log Collection", id: "articles/logging" },
            {
              type: "doc",
              label: "Artifact Storage",
              id: "articles/artifact-storage",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Core Concepts",
      items: [
        "articles/testing-pipeline",
        "articles/defining-tests",
        "articles/triggering-tests",
        "articles/running-scaling-tests",
        "articles/troubleshooting-tests",
        "articles/analyzing-results",
      ],
    },
    {
      type: "category",
      label: "Using Testkube",
      link: {
        type: "doc",
        id: "articles/using-testkube",
      },
      items: [
        {
          type: "category",
          label: "Testkube Dashboard",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "articles/testkube-dashboard-explore",
            },
          ],
        },
        {
          type: "category",
          label: "Test Workflows",
          items: [
            { type: "doc", label: "Overview", id: "articles/test-workflows" },
            {
              type: "doc",
              label: "Basic Examples",
              id: "articles/test-workflows-examples-basics",
            },
            {
              type: "doc",
              label: "Creating",
              id: "articles/test-workflows-creating",
            },
            {
              type: "doc",
              label: "Content",
              id: "articles/test-workflows-content",
            },
            {
              type: "doc",
              label: "Services",
              id: "articles/test-workflows-services",
            },
            {
              type: "doc",
              label: "Parallelization",
              id: "articles/test-workflows-parallel",
            },
            {
              type: "doc",
              label: "Sharding & Matrix Params",
              id: "articles/test-workflows-matrix-and-sharding",
            },
            {
              type: "doc",
              label: "Parameterization",
              id: "articles/test-workflows-examples-configuration",
            },
            {
              type: "doc",
              label: "Expression Language",
              id: "articles/test-workflows-expressions",
            },
            {
              type: "doc",
              label: "Pod & Job",
              id: "articles/test-workflows-job-and-pod",
            },
            {
              type: "doc",
              label: "Test Suites",
              id: "articles/test-workflows-test-suites",
            },
            {
              type: "doc",
              label: "Tests and Test Suites Migration",
              id: "articles/test-workflow-migration",
            },
            {
              type: "doc",
              label: "Test Workflow Templates",
              id: "articles/test-workflow-templates",
            },
          ],
        },
        {
          type: "category",
          label: "Triggering Test Workflows",
          collapsible: true,
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "articles/triggering-overview",
            },
            {
              type: "doc",
              label: "From CI/CD",
              id: "articles/cicd-overview",
            },
            {
              type: "doc",
              label: "K8s Event Triggers",
              id: "articles/test-triggers",
            },
            {
              type: "doc",
              label: "Scheduled Execution",
              id: "articles/scheduling-tests",
            },
            {
              type: "doc",
              label: "Execution CRDs",
              id: "articles/test-executions",
            },
          ],
        },
        {
          type: "category",
          label: "Working with Results",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "articles/results-overview",
            },
            "articles/logs-and-artifacts",
            {
              type: "doc",
              label: "Log Highlighting",
              id: "testkube-pro/articles/log-highlighting",
            },
            {
              type: "doc",
              label: "AI Analysis",
              id: "testkube-pro/articles/AI-test-insights",
            },
            {
              type: "doc",
              label: "Cached Test Results",
              id: "testkube-pro/articles/cached-results",
            },
          ],
        },
        {
          type: "category",
          label: "Reporting & Analysis",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "articles/reporting-overview",
            },
            {
              type: "doc",
              label: "Status Pages",
              id: "testkube-pro/articles/status-pages",
            },
            {
              type: "doc",
              label: "Test Insights",
              id: "articles/test-insights",
            },
          ],
        },
        {
          type: "category",
          label: "Administration",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "articles/administration-overview",
            },
            {
              type: "doc",
              label: "Organizations",
              id: "testkube-pro/articles/organization-management",
            },
            {
              type: "doc",
              label: "Environments",
              id: "testkube-pro/articles/environment-management",
            },
            {
              type: "doc",
              label: "API Tokens",
              id: "testkube-pro/articles/api-token-management",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Examples & Use Cases",
      link: {
        type: "doc",
        id: "articles/examples/overview",
      },
      items: [
        {
          type: "category",
          label: "K6",
          items: [
            {
              type: "doc",
              label: "Basic",
              id: "articles/examples/k6-basic",
            },
            {
              type: "doc",
              label: "Distributed",
              id: "articles/examples/k6-distributed",
            },
          ],
        },
        {
          type: "category",
          label: "Cypress",
          items: [
            {
              type: "doc",
              label: "Basic",
              id: "articles/examples/cypress-basic",
            },
            {
              type: "doc",
              label: "Sharded",
              id: "articles/examples/cypress-sharded",
            },
          ],
        },
        {
          type: "category",
          label: "Playwright",
          items: [
            {
              type: "doc",
              label: "Basic",
              id: "articles/examples/playwright-basic",
            },
            {
              type: "doc",
              label: "Sharded",
              id: "articles/examples/playwright-sharded",
            },
          ],
        },
        {
          type: "doc",
          label: "Selenium",
          id: "articles/examples/selenium-basic",
        },
        {
          type: "doc",
          label: "Postman",
          id: "articles/examples/postman-basic",
        },
        {
          type: "doc",
          label: "SoapUI",
          id: "articles/examples/soapui-basic",
        },
        {
          type: "doc",
          label: "Maven",
          id: "articles/examples/maven-basic",
        },
        {
          type: "doc",
          label: "Gradle",
          id: "articles/examples/gradle-basic",
        },
        {
          type: "doc",
          label: "Pytest",
          id: "articles/examples/pytest-basic",
        },
        {
          type: "category",
          label: "JMeter",
          items: [
            {
              type: "doc",
              label: "Basic",
              id: "articles/examples/jmeter-basic",
            },
            {
              type: "doc",
              label: "Distributed",
              id: "articles/examples/jmeter-distributed",
            },
          ],
        },
        {
          type: "category",
          label: "Robot Framework",
          items: [
            {
              type: "doc",
              label: "Basic",
              id: "articles/examples/robot-framework-basic",
            },
            {
              type: "doc",
              label: "Parallelized",
              id: "articles/examples/robot-framework-parallel",
            },
          ],
        },
        {
          type: "doc",
          label: "Artillery",
          id: "articles/examples/artillery-basic",
        },
        {
          type: "doc",
          label: "cURL",
          id: "articles/examples/curl-basic",
        },
        {
          type: "link",
          label: "Hardware Testing",
          href: "https://testkube.io/blog/implementing-kubernetes-native-hardware-testing-with-testkube",
          description: "Test for hardware components and infrastructure.",
        },
      ],
    },
    {
      type: "category",
      label: "Integrations",
      link: {
        type: "generated-index",
        description: "Testkube Integrations",
      },
      items: [
        { type: "doc", label: "GitHub", id: "articles/github-actions" },
        { type: "doc", label: "GitLab", id: "articles/gitlab" },
        {
          type: "doc",
          label: "Jenkins Pipelines",
          id: "articles/jenkins",
        },
        {
          type: "doc",
          label: "Jenkins UI",
          id: "articles/jenkins-ui",
        },
        { type: "doc", label: "Azure DevOps", id: "articles/azure" },
        {
          type: "doc",
          label: "CircleCI",
          id: "articles/circleci",
        },
        { type: "doc", label: "ArgoCD", id: "articles/argocd-integration" },
        { type: "doc", label: "Flux", id: "articles/flux-integration" },
        { type: "doc", label: "CDEvents", id: "articles/cd-events" },
        {
          type: "doc",
          label: "Slack Integration",
          id: "articles/slack-integration",
        },
        { type: "doc", label: "Prometheus", id: "articles/metrics" },
        {
          type: "doc",
          label: "Kubernetes Events",
          id: "articles/k8s-events",
        },
        { type: "doc", label: "Webhooks", id: "articles/webhooks" },
        {
          type: "link",
          label: "PagerDuty",
          href: "https://testkube.io/learn/critical-test-based-alerting-with-pagerduty-and-testkube",
          description:
            "Critical Test Based Alerting with PagerDuty and Testkube",
        },
        {
          type: "link",
          label: "Zapier",
          href: "https://testkube.io/learn/integrating-testkube-and-zapier-for-instant-email-alerts",
          description:
            "Integrating Testkube and Zapier for Instant Email Alerts",
        },
      ],
    },
    {
      type: "category",
      label: "Reference",
      link: {
        type: "doc",
        id: "articles/reference",
      },
      items: [
        {
          type: "doc",
          label: "Architecture",
          id: "articles/architecture",
        },
        "articles/telemetry",
        {
          type: "category",
          label: "Testkube CRD",
          items: [
            {
              type: "doc",
              label: "CRDs Reference",
              id: "articles/crds-reference",
            },
          ],
        },
        {
          type: "category",
          label: "OpenAPI Definitions",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "openapi/overview",
            },
            {
              type: "category",
              label: "Agent API",
              items: agentRedocSidebar,
            },
            {
              type: "category",
              label: "Control Plane API",
              items: cloudRedocSidebar,
            },
          ],
        },
        {
          type: "category",
          label: "Testkube CLI",
          items: [
            {
              type: "doc",
              label: "Install the Testkube CLI",
              id: "articles/install/cli",
            },
            {
              type: "doc",
              label: "Managing CLI Context",
              id: "testkube-pro/articles/managing-cli-context",
            },
            {
              type: "doc",
              label: "Docker CLI",
              id: "articles/testkube-cli-docker",
            },
            { type: "doc", label: "OAuth for CLI", id: "articles/oauth-cli" },
            {
              type: "category",
              label: "Command Reference",
              items: [
                {
                  type: "autogenerated",
                  dirName: "cli",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Open Source",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "articles/open-source-or-pro",
        },
        {
          type: "doc",
          label: "Licensing FAQ",
          id: "articles/testkube-licensing-FAQ",
        },
        {
          type: "category",
          label: "Contributing",
          link: {
            type: "doc",
            id: "articles/contributing",
          },
          items: [
            "articles/development",
            {
              type: "doc",
              label: "Testkube CRDs",
              id: "articles/crds",
            },
          ],
        },
      ],
    },
    {
      type: "html",
      value: "<hr />",
    },
    {
      type: "category",
      label: "Legacy Documentation",
      link: {
        type: "doc",
        id: "articles/legacy-features",
      },
      items: [
        {
          type: "doc",
          label: "Creating Your First Test",
          id: "articles/creating-first-test",
        },
        {
          type: "doc",
          label: "Test Sources",
          id: "articles/test-sources",
        },
        {
          type: "doc",
          label: "Artifact Mgmt",
          id: "articles/artifacts",
        },
        {
          type: "category",
          label: "Tests",
          items: [
            "articles/creating-tests",
            "articles/running-tests",
            "articles/getting-tests-results",
            "articles/adding-tests-variables",
            "articles/adding-timeout",
          ],
        },
        {
          type: "category",
          label: "Test Suites",
          items: [
            "articles/creating-test-suites",
            "articles/running-test-suites",
            "articles/getting-test-suites-results",
          ],
        },
        {
          type: "category",
          label: "Test Types",
          link: {
            type: "generated-index",
            description: "Supported Test Types / Executors within Testkube",
          },
          items: [
            "test-types/executor-artillery",
            "test-types/executor-curl",
            "test-types/executor-cypress",
            "test-types/executor-ginkgo",
            "test-types/executor-gradle",
            "test-types/executor-jmeter",
            "test-types/executor-k6",
            "test-types/executor-kubepug",
            "test-types/executor-kubent",
            "test-types/executor-maven",
            "test-types/executor-playwright",
            "test-types/executor-postman",
            "test-types/executor-pytest",
            "test-types/executor-soapui",
            "test-types/executor-tracetest",
            "test-types/executor-zap",
            "test-types/prebuilt-executor",
            "test-types/container-executor",
            "test-types/executor-distributed-jmeter",
          ],
        },
        {
          type: "category",
          label: "Legacy Tests",
          items: [
            {
              type: "doc",
              label: "Distributed JMeter",
              id: "test-types/executor-distributed-jmeter",
            },
            {
              type: "doc",
              label: "Container Executor",
              id: "test-types/container-executor",
            },
            {
              type: "doc",
              label: "Pre-built Executor",
              id: "test-types/prebuilt-executor",
            },
          ],
        },
        { type: "doc", label: "Deprecations", id: "articles/deprecations" },
        {
          type: "doc",
          label: "Generating Test CRDs",
          id: "articles/generate-test-crds",
        },
        {
          type: "doc",
          label: "Variables and Secrets",
          id: "articles/adding-tests-secrets",
        },

        {
          type: "doc",
          label: "Dashboard Settings",
          id: "articles/testkube-dashboard-general-settings",
        },

        { type: "doc", label: "Templates", id: "articles/templates" },
        "articles/legacy-architecture",
      ],
    },
  ],
};

module.exports = sidebars;
