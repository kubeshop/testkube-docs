/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

const agentRedocSidebar = require('./src/openapi/agent/redoc-sidebar');
const cloudRedocSidebar = require('./src/openapi/cloud/redoc-sidebar');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: "category",
      label: "Introduction",
      collapsed: false,
      collapsible: false,
      items: [
        "index",
        "articles/testkube-benefits",
        "articles/tutorial/quickstart",
        "articles/tutorial/example",
      ],
    },
    {
      type: "category",
      label: "Installing",
      items: [
        "articles/install/overview",
        "articles/install/cli",
        "articles/install/install-with-cli",
        {
          type: "category",
          label: "Install with Helm",
          items: [
            "articles/install/install-with-helm",
            "articles/install/advanced-install",
            "articles/install/auth",
          ],
        },
        "articles/install/reference-architectures",
        "articles/install/faq",
        {
          type: "category",
          label: "More guides",
          items: [
            "articles/install/multi-cluster",
            "articles/install/standalone-agent",
            "articles/install/quickstart-no-k8s",
            "articles/install/uninstall",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Core Concepts",
      items: [
        "articles/test-workflows",
        "articles/test-workflows-creating",
        "articles/test-workflow-templates",
        "articles/test-workflows-examples-basics",
        "articles/test-workflows-examples-configuration",
        "articles/test-workflows-expressions",
        "articles/test-workflows-examples-templates",
      ],
    },
    {
      type: "category",
      label: "Using Testkube",
      link: {
        type: "doc",
        id: "articles/testkube-dashboard",
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
            {
              type: "doc",
              label: "Settings",
              id: "articles/testkube-dashboard-general-settings",
            },
          ],
        },
        {
          type: "doc",
          label: "Creating Your First Test",
          id: "articles/creating-first-test",
        },
        {
          type: "category",
          label: "Test Workflows",
          items: [
            { type: "doc", label: "Overview", id: "articles/test-workflows" },
            {
              type: "doc",
              label: "Content",
              id: "articles/test-workflows-content",
            },
            //  { type: "doc", label: "Defining", id: "" },
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
              label: "Sharding",
              id: "articles/test-workflows-matrix-and-sharding",
            },
            //  { type: "doc", label: "Modularizing", id: "" },
            {
              type: "doc",
              label: "Paramterization",
              id: "articles/test-workflows-examples-configuration",
            },
            {
              type: "doc",
              label: "Expression Language",
              id: "articles/test-workflows-expressions",
            },
            //  { type: "doc", label: "Recipes", id: "articles/test-workflows-creating" },
            {
              type: "doc",
              label: "Variables and Secrets",
              id: "articles/adding-tests-secrets",
            },
            {
              type: "doc",
              label: "Scheduling",
              id: "articles/scheduling-tests",
            },
            {
              type: "doc",
              label: "Test Suites",
              id: "articles/test-workflows-test-suites",
            },
            {
              type: "doc",
              label: "Migrating to Workflows",
              id: "articles/test-workflows-creating",
            },
          ],
        },
        {
          type: "category",
          label: "Workflow Templates",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "articles/test-workflow-templates",
            },
            { type: "doc", label: "Defining", id: "articles/test-workflows" },
            {
              type: "doc",
              label: "Using",
              id: "articles/test-workflows-examples-templates",
            },
            //  { type: "doc", label: "Official Templates", id: "" },
          ],
        },
        {
          type: "category",
          label: "Logs & Artifacts",
          items: [
            { type: "doc", label: "Log Collection", id: "articles/logging" },
            {
              type: "doc",
              label: "Highlighting & Comparing",
              id: "testkube-pro/articles/log-highlighting",
            },
            {
              type: "doc",
              label: "AI Analysis",
              id: "testkube-pro/articles/AI-test-insights",
            },
            { type: "doc", label: "Artifacts", id: "articles/artifacts" },
          ],
        },
        {
          type: "category",
          label: "Test Insights",
          items: [
            {
              type: "doc",
              label: "Operational Insights",
              id: "testkube-pro/articles/AI-test-insights",
            },
            { type: "doc", label: "Quality Metrics", id: "articles/metrics" },
            {
              type: "doc",
              label: "Status Pages",
              id: "testkube-pro/articles/status-pages",
            },
          ],
        },
        {
          type: "category",
          label: "Triggers",
          items: [
            {
              type: "doc",
              label: "Test Triggers",
              id: "articles/test-triggers",
            },
            // { type: "doc", label: "K8 Eventss", id: "" },
            // { type: "doc", label: "Testkube Events", id: "" },
          ],
        },
        { type: "doc", label: "Webhooks", id: "articles/webhooks" },
        { type: "doc", label: "Source", id: "articles/test-sources" },
        { type: "doc", label: "Executions", id: "articles/test-executions" },
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
              label: "Install Testkube with the CLI",
              id: "articles/install/install-with-cli",
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
          ],
        },
        {
          type: "category",
          label: "Advanced Features",
          items: [
            {
              type: "doc",
              label: "Cached Test Results",
              id: "testkube-pro/articles/cached-results",
            },
            { type: "doc", label: "Templates", id: "articles/templates" },
            {
              type: "doc",
              label: "Emitting Standard CDEvents",
              id: "articles/cd-events",
            },
            {
              type: "doc",
              label: "Emitting Kubernetes Events",
              id: "articles/k8s-events",
            },
            {
              type: "doc",
              label: "Generating Test CRDs",
              id: "articles/generate-test-crds",
            },
          ],
        },
        {
          type: "category",
          label: "Legacy Features",
          items: [
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
            { type: "doc", label: "Deprecations", id: "articles/deprecations" },
            { type: "doc", label: "Sources", id: "articles/test-sources" },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Administration",
      items: [
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
          type: "category",
          label: "User Management & RBAC",
          items: [
            {
              type: "doc",
              label: "Organization Members",
              id: "testkube-pro/articles/organization-management",
            },
            {
              type: "doc",
              label: "Environment Members",
              id: "testkube-pro/articles/environment-management",
            },
            {
              type: "doc",
              label: "API Tokens",
              id: "testkube-pro/articles/organization-management",
            },
          ],
        },
        {
          type: "category",
          label: "SSO",
          items: [
            // { type: "doc", label: "Default User Mapping", id: "" },
            { type: "doc", label: "OAuth for CLI", id: "articles/oauth-cli" },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Examples & Use Cases",
      items: [
        {
          type: "category",
          label: "Load Testing",
          items: [
            { type: "doc", label: "k6", id: "test-types/executor-k6" },
            { type: "doc", label: "JMeter", id: "test-types/executor-jmeter" },
            {
              type: "doc",
              label: "Artillery",
              id: "test-types/executor-artillery",
            },
            {
              type: "doc",
              label: "Parallelization for Massive Load",
              id: "articles/test-workflows-examples-basics",
            },
          ],
        },
        {
          type: "category",
          label: "E2E/FE Testing",
          items: [
            {
              type: "doc",
              label: "Cypress",
              id: "test-types/executor-cypress",
            },
            {
              type: "doc",
              label: "Playwright",
              id: "test-types/executor-playwright",
            },
            // { type: "doc", label: "Robot Framework", id: "" },
            // { type: "doc", label: "Selenium", id: "" },
            {
              type: "doc",
              label: "Parallelized Execution",
              id: "articles/test-workflows-examples-basics",
            },
          ],
        },
        {
          type: "category",
          label: "API Testing",
          items: [
            {
              type: "doc",
              label: "Postman",
              id: "test-types/executor-postman",
            },
            { type: "doc", label: "SoapUI", id: "test-types/executor-soapui" },
            { type: "doc", label: "cURL", id: "test-types/executor-curl" },
            {
              type: "doc",
              label: "Tracetest",
              id: "test-types/executor-tracetest",
            },
          ],
        },
        {
          type: "category",
          label: "Unit Testing",
          items: [
            { type: "doc", label: "Ginkgo", id: "test-types/executor-ginkgo" },
            { type: "doc", label: "pytest", id: "test-types/executor-pytest" },
          ],
        },
        {
          type: "category",
          label: "Automation Framework",
          items: [
            { type: "doc", label: "Maven", id: "test-types/executor-maven" },
            { type: "doc", label: "Gradle", id: "test-types/executor-gradle" },
          ],
        },
        {
          type: "category",
          label: "Compliance Testing",
          items: [
            { type: "doc", label: "Kubent", id: "test-types/executor-kubent" },
            {
              type: "doc",
              label: "Kubepug",
              id: "test-types/executor-kubepug",
            },
            { type: "doc", label: "Zap", id: "test-types/executor-zap" },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Integrations",
      items: [
        { type: "doc", label: "GitHub", id: "articles/github-actions" },
        { type: "doc", label: "Jenkins", id: "articles/jenkins" },
        { type: "doc", label: "Azure DevOps", id: "articles/azure" },
        { type: "doc", label: "GitLab", id: "articles/gitlab" },
        // { type: "doc", label: "Tekton", id: "" },
        { type: "doc", label: "ArgoCD", id: "articles/argocd-integration" },
        { type: "doc", label: "Flux", id: "articles/flux-integration" },
        // { type: "doc", label: "Argo Rollouts", id: "" },
        // { type: "doc", label: "Flagger", id: "" },
        { type: "doc", label: "CDEvents", id: "articles/cd-events" },
        {
          type: "doc",
          label: "Slack Integration",
          id: "articles/slack-integration",
        },
        { type: "doc", label: "Prometheus Metrics", id: "articles/metrics" },
      ],
    },
    {
      type: "category",
      label: "Guides",
      items: [
        {
          type: "category",
          label: "CI/CD Integration",
          link: {
            type: "doc",
            id: "articles/cicd-overview",
          },
          items: [
            {
              type: "category",
              label: "Github Actions",
              link: {
                type: "doc",
                id: "articles/github-actions",
              },
              items: [
                {
                  type: "doc",
                  id: "articles/run-tests-with-github-actions",
                  label: "Migrate from testkube-run-action",
                },
              ],
            },
            { type: "doc", label: "Testkube GitLab CI", id: "articles/gitlab" },
            {
              type: "doc",
              label: "Testkube Jenkins Pipelines",
              id: "articles/jenkins",
            },
            {
              type: "doc",
              label: "Testkube Jenkins UI",
              id: "articles/jenkins-ui",
            },
            {
              type: "doc",
              label: "Testkube Azure DevOps Pipelines",
              id: "articles/azure",
            },
            {
              type: "doc",
              label: "Testkube CircleCI",
              id: "articles/circleci",
            },
            {
              type: "doc",
              label: "Testkube Docker CLI",
              id: "articles/testkube-cli-docker",
            },
            {
              type: "doc",
              label: "Using a Private Certificate Authority (CA)",
              id: "articles/private-ca",
            },
            { type: "doc", label: "Using Vault", id: "articles/vault" },
            { type: "doc", label: "Upgrade Testkube", id: "articles/upgrade" },
            {
              type: "category",
              label: "GitOps",
              link: {
                type: "doc",
                id: "articles/gitops-overview",
              },
              items: [
                {
                  type: "doc",
                  id: "articles/flux-integration",
                  label: "Flux",
                },
                {
                  type: "doc",
                  id: "articles/argocd-integration",
                  label: "ArgoCD",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Reference",
      items: [
        "articles/architecture",
        {
          type: "category",
          label: "CRDs",
          items: [
            {
              type: "doc",
              label: "TestWorkflow",
              id: "articles/test-workflows",
            },
            { type: "doc", label: "Trigger", id: "articles/crds-reference" },
          ],
        },
        {
          type: "doc",
          id: "articles/helm-chart",
          label: "Helm Chart",
        },
        {
          type: "category",
          label: "OpenAPI References",
          items:[
            "openapi/overview",
            {
              type: "category",
              label: "Agent OpenAPI",
              items: agentRedocSidebar
            },
            {
              type: "category",
              label: "Control Plane OpenAPI",
              items: cloudRedocSidebar
            }
          ]
        },

        {
          type: "category",
          label: "CLI",
          items: [
            {
              type: "autogenerated",
              dirName: "cli",
            },
          ],
        },
      ],
    },
    "articles/telemetry",
    "articles/common-issues",

    {
      type: "html",
      value: "<hr />",
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
    {
      type: "category",
      label: "Contributing",
      items: [
        "articles/contributing",
        {
          type: "category",
          label: "Development",
          link: {
            type: "doc",
            id: "articles/development",
          },
          items: ["articles/crds"],
        },
      ],
    },
    {
      type: "category",
      label: "FAQs",
      items: ["articles/testkube-licensing-FAQ"],
    },
  ],

  /*
   {
      type: "html",
      value: "<hr />",
    },
   */

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
