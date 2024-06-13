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
  main: [
    {
      type: "doc",
      label: "Welcome!",
      id: "index"
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
        {type: "doc", label: "Upgrading", id: "articles/upgrade"},
        "articles/install/reference-architectures",
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
              id: "testkube-pro/articles/transition-from-oss"
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
              label: "Using a Private CA",
              id: "articles/private-ca",
            }
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Core Concepts",
      items: [
        "articles/core-concepts",
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
            {type: "doc", label: "Overview", id: "articles/test-workflows"},
            {
              type: "doc",
              label: "Basic Examples",
              id: "articles/test-workflows-examples-basics",
            },
            {type: "doc", label: "Creating", id: "articles/test-workflows-creating"},
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
            {
              type: "doc",
              label: "Examples",
              id: "articles/test-workflows-examples-templates",
            },
            //  { type: "doc", label: "Official Templates", id: "" },
          ],
        },
        {
          type: "category",
          label: "Triggering Test Workflows",
          collapsible: true,
          link: {
            type: "doc",
            id: "articles/triggering-overview",
          },
          items: [
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
            {type: "doc", label: "Execution CRDs", id: "articles/test-executions"},
          ],
        },
        {
          type: "category",
          label: "Working with Results",
          items: [
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
            {type: "doc", label: "Artifacts", id: "articles/artifacts"},
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
              type: "doc",
              label: "API Tokens",
              id: "testkube-pro/articles/organization-management",
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
        id: "articles/examples",
      },
      items: [
        {
          type: "category",
          label: "Load Testing",
          items: [
            {type: "doc", label: "k6", id: "test-types/executor-k6"},
            {type: "doc", label: "JMeter", id: "test-types/executor-jmeter"},
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
            {type: "doc", label: "SoapUI", id: "test-types/executor-soapui"},
            {type: "doc", label: "cURL", id: "test-types/executor-curl"},
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
            {type: "doc", label: "Ginkgo", id: "test-types/executor-ginkgo"},
            {type: "doc", label: "pytest", id: "test-types/executor-pytest"},
          ],
        },
        {
          type: "category",
          label: "Automation Framework",
          items: [
            {type: "doc", label: "Maven", id: "test-types/executor-maven"},
            {type: "doc", label: "Gradle", id: "test-types/executor-gradle"},
          ],
        },
        {
          type: "category",
          label: "Compliance Testing",
          items: [
            {type: "doc", label: "Kubent", id: "test-types/executor-kubent"},
            {
              type: "doc",
              label: "Kubepug",
              id: "test-types/executor-kubepug",
            },
            {type: "doc", label: "Zap", id: "test-types/executor-zap"},
          ],
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
        {type: "doc", label: "GitHub", id: "articles/github-actions"},
        {type: "doc", label: "GitLab", id: "articles/gitlab"},
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
        {type: "doc", label: "Azure DevOps", id: "articles/azure"},
        {
          type: "doc",
          label: "CircleCI",
          id: "articles/circleci",
        },
        {type: "doc", label: "ArgoCD", id: "articles/argocd-integration"},
        {type: "doc", label: "Flux", id: "articles/flux-integration"},
        {type: "doc", label: "Vault", id: "articles/vault"},
        {type: "doc", label: "CDEvents", id: "articles/cd-events"},
        {
          type: "doc",
          label: "Slack Integration",
          id: "articles/slack-integration",
        },
        {type: "doc", label: "Prometheus", id: "articles/metrics"},
        {
          type: "doc",
          label: "Kubernetes Events",
          id: "articles/k8s-events",
        },
        {type: "doc", label: "Webhooks", id: "articles/webhooks"},

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
        "articles/architecture",
        {type: "doc", label: "Log Collection", id: "articles/logging"},
        "articles/telemetry",
        {
          type: "doc",
          label: "Dependencies",
          id: "articles/testkube-dependencies"
        },
        {
          type: "category",
          label: "CRDs",
          items: [
            {
              type: "doc",
              label: "TestWorkflow",
              id: "articles/test-workflows",
            },
            {type: "doc", label: "Trigger", id: "articles/crds-reference"},
          ],
        },
        {
          type: "category",
          label: "Helm Chart",
          items: [
            {
              type: "doc",
              id: "articles/helm-chart",
              label: "Installation",
            },
            {
              type: "doc",
              id: "testkube-pro-on-prem/articles/usage-guide",
              label: "Usage",
            },
          ]
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
              items: agentRedocSidebar
            },
            {
              type: "category",
              label: "Control Plane API",
              items: cloudRedocSidebar
            }
          ]
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
            {type: "doc", label: "OAuth for CLI", id: "articles/oauth-cli"},
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
          id: "articles/open-source-or-pro"
        },
        {
          type: "doc",
          label: "Licensing FAQ",
          id: "articles/testkube-licensing-FAQ"
        },
        {
          type: "category",
          label: "Contributing",
          link: {
            type: "doc",
            id: "articles/contributing"
          },
          items: [
            "articles/development",
            {
              type: "doc",
              label: "Testkube CRDs",
              id: "articles/crds"
            }
          ]
        }
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
          id: "articles/test-sources"
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
            "articles/gitlab",
            "articles/jenkins",
            "articles/jenkins-ui",
            "articles/azure",
            "articles/circleci",
            "articles/testkube-cli-docker",
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
        {type: "doc", label: "Deprecations", id: "articles/deprecations"},
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

        {type: "doc", label: "Templates", id: "articles/templates"},
      ],
    }
  ],
};

module.exports = sidebars;
