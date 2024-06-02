/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: "category",
      label: "Getting Started",
      link: {
        type: "doc",
        id: "articles/getting-started",
      },
      items: [
        {
          type: "category",
          label: "Welcome",
          items: [
            { type: "doc", id: "articles/supported-tests" },
            { type: "doc", id: "articles/testkube-benefits" },
            { type: "doc", id: "articles/open-source-or-pro" },
          ],
        },
        {
          type: "category",
          label: "Installation",
          items: [
            { type: "doc", id: "articles/install/overview" },
            { type: "doc", id: "articles/install/cli" },
            { type: "doc", id: "articles/install/quickstart-install" },
            { type: "doc", id: "articles/install/reference-architectures" },
            { type: "doc", id: "articles/install/install-with-cli" },
            { type: "doc", id: "articles/install/install-with-helm" },
            { type: "doc", id: "articles/install/advanced-install" },
            { type: "doc", id: "articles/install/quickstart-no-k8s" },
            { type: "doc", id: "articles/install/uninstall" },
            { type: "doc", id: "articles/install/faq" },
          ],
        },
      ]
    },
    {
      type: "category",
      label: "Installing",
      items: [
        { type: "doc", label: "Deploying on AWS", id: "articles/deploying-in-aws" },
        { type: "doc", label: "Deploying with Private Registries", id: "articles/deploying-from-private-registries" },
      //  { type: "doc", label: "Using with Istio", id: "" },
        { type: "doc", label: "Deploying in Air-gapped Environments", id: "articles/install/advanced-install" },
      //  { type: "doc", label: "Auto-updating the Agent", id: "" },
      //  { type: "doc", label: "Configuring S3 with AWS", id: "" },
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
            "articles/test-workflows-examples-expressions",
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
                 { type: "doc", label: "Overview", id: "articles/testkube-dashboard-explore" },
                 { type: "doc", label: "Settings", id: "articles/testkube-dashboard-general-settings" },
              ],
            },  
            {
              type: "category",
              label: "Test Workflows",
              items: [
                 { type: "doc", label: "Overview", id: "articles/test-workflows" },
               //  { type: "doc", label: "Defining", id: "" },
               //  { type: "doc", label: "Parallelization", id: "" },
               //  { type: "doc", label: "Sharding", id: "" },
               //  { type: "doc", label: "Modularizing", id: "" },
                 { type: "doc", label: "Paramterization", id: "articles/test-workflows-examples-configuration" },
                 { type: "doc", label: "Expression Language", id: "articles/test-workflows-examples-expressions" },
               //  { type: "doc", label: "Recipes", id: "articles/test-workflows-creating" },
                 { type: "doc", label: "Variables and Secrets", id: "articles/adding-tests-secrets" },
                 { type: "doc", label: "Scheduling", id: "articles/scheduling-tests" },
               //  { type: "doc", label: "Migrating to Workflows", id: "articles/test-workflows-creating" },
              ],
            },
            {
              type: "category",
              label: "Workflow Templates",
              items: [
                { type: "doc", label: "Overview", id: "articles/test-workflows-templates" },
                { type: "doc", label: "Defining", id: "articles/test-workflows" },
                { type: "doc", label: "Using", id: "articles/test-workflows-examples-template" },
              //  { type: "doc", label: "Official Templates", id: "" },
              ],
            },
            {
              type: "category",
              label: "Logs & Artifacts",
              items: [
                { type: "doc", label: "Log Collection", id: "articles/logging" },
                { type: "doc", label: "Highlighting & Comparing", id: "testkube-pro/articles/log-highlighting" },
                { type: "doc", label: "AI Analysis", id: "testkube-pro/articles/AI-test-insights" },
                { type: "doc", label: "Artifacts", id: "articles/artifacts" },
              ],
            },
            {
              type: "category",
              label: "Test Insights",
              items: [
                { type: "doc", label: "Operational Insights", id: "testkube-pro/articles/AI-test-insights" },
                { type: "doc", label: "Quality Metrics", id: "/articles/metrics" },
                { type: "doc", label: "Status Pages", id: "testkube-pro/articles/status-pages" },
              ],
            },
            {
              type: "category",
              label: "Triggers",
              items: [
                { type: "doc", label: "Test Triggers", id: "articles/test-triggers" },
                // { type: "doc", label: "K8 Eventss", id: "" },
                // { type: "doc", label: "Testkube Events", id: "" },
              ],
            },
            { type: "doc", label: "Webhooks", id: "articles/webhooks" },
            {
              type: "category",
              label: "Testkube CLI",
              items: [
                { type: "doc", label: "Install the Testkube CLI", id: "articles/install/cli" },
                { type: "doc", label: "Install Testkube with the CLI", id: "/articles/install/install-with-cli" },
                { type: "doc", label: "Managing CLI Context", id: "testkube-pro/articles/managing-cli-context" },
                { type: "doc", label: "Docker CLI", id: "articles/testkube-cli-docker" },
                { type: "doc", label: "OAuth for CLI", id: "articles/oauth-cli" },
              ],
            },
            {
              type: "category",
              label: "Advanced Features",
              items: [
                { type: "doc", label: "Cached Test Results", id: "testkube-pro/articles/cached-results" },
                { type: "doc", label: "Templates", id: "/articles/templates" },
                { type: "doc", label: "CDEvents", id: "articles/cd-events" },
                { type: "doc", label: "Generating Test CRDs", id: "articles/generate-test-crds" },
              ],
            },
            // { type: "doc", label: "Deprecated Features", id: "" },
          ]  
    },
    {
      type: "category",
      label: "Administration",
      items: [
        { type: "doc", label: "Organizations", id: "testkube-pro/articles/organization-management" },
        { type: "doc", label: "Environments", id: "testkube-pro/articles/environment-management" },
        {
          type: "category",
          label: "User Management & RBAC",
          items: [
            { type: "doc", label: "Organization Members", id: "testkube-pro/articles/organization-management/#members" },
            { type: "doc", label: "Environment Members", id: "testkube-pro/articles/environment-management/#managing-environment-member-roles" },
            { type: "doc", label: "API Tokens", id: "testkube-pro/articles/organization-management/api-tokens" },
          ],
        },
        {
          type: "category",
          label: "SSO",
          items: [
           // { type: "doc", label: "Default User Mapping", id: "" },
            { type: "doc", label: "OAuth for CLI", id: "/articles/oauth-cli" },
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
            { type: "doc", label: "Artillery", id: "test-types/executor-artillery" },
            { type: "doc", label: "Parallelization for Massive Load", id: "articles/test-workflows-examples-basics" },
          ],
        },
        {
          type: "category",
          label: "E2E/FE Testing",
          items: [
            { type: "doc", label: "Cypress", id: "test-types/executor-cypress" },
            { type: "doc", label: "Playwright", id: "test-types/executor-playwright" },
            // { type: "doc", label: "Robot Framework", id: "" },
            // { type: "doc", label: "Selenium", id: "" },
            { type: "doc", label: "Parallelized Execution", id: "articles/test-workflows-examples-basics" },
          ],
        },
        {
          type: "category",
          label: "API Testing",
          items: [
            { type: "doc", label: "Postman", id: "test-types/executor-postman" },
            { type: "doc", label: "SoapUI", id: "test-types/executor-soapui" },
          ],
        },
        // { type: "doc", label: "Unit Testing", id: "" },
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
        { type: "doc", label: "CDEvents", id: "articles/cdevents" },
        { type: "doc", label: "Slack Integration", id: "articles/slack-integration" },
        { type: "doc", label: "Prometheus Metrics", id: "articles/metrics" },
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
            { type: "doc", label: "TestWorkflow", id: "articles/test-workflows" },
            { type: "doc", label: "Trigger", id: "articles/crd-reference" },
          ],
        },
        {
          type: "doc",
          id: "articles/helm-chart",
          label: "Helm Chart",
        },
        {
          type: "category",
          label: "OpenAPI Definition",
          items: [
            { type: "doc", label: "OSS", id: "articles/openapi" },
            { type: "doc", label: "PRO", id: "articles/openapi" },
          ],
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

    {
      type: "html",
      value: "<hr />",
    },
    
    "articles/testkube-oss",
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
