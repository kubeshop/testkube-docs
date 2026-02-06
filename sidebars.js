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
    {
      type: "category",
      label: "Quickstart",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "articles/tutorial/quickstart/overview",
        },
        {
          type: "doc",
          label: "Individual Evaluation",
          id: "articles/tutorial/quickstart/individual-evaluation",
        },
        {
          type: "doc",
          label: "Team Evaluation",
          id: "articles/tutorial/quickstart/team-evaluation",
        },
        {
          type: "doc",
          label: "Enterprise POC",
          id: "articles/tutorial/quickstart/enterprise-poc",
        },
      ],
    },
    {
      type: "doc",
      label: "Changelog",
      id: "changelog",
    },
    {
      type: "html",
      value: "<hr class='sidebar-hr'/>",
    },
    {
      type: "category",
      label: "Installation",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "articles/install/overview",
        },
        {
          type: "category",
          label: "On-Prem Control Plane",
          collapsed: false,
          items: [
            {
              type: "category",
              label: "Introductory Guides",
              items: [
                {
                  type: "doc",
                  label: "Base Install",
                  id: "articles/install/install-with-helm",
                },
                {
                  type: "doc",
                  label: "Custom Installation",
                  id: "articles/install/advanced-install",
                },
              ],
            },
            {
              type: "category",
              label: "Advanced Guides",
              items: [
                {
                  type: "doc",
                  label: "SSO / Identity Provides",
                  id: "articles/auth",
                },
                {
                  type: "doc",
                  label: "S3 with IAM Authentication",
                  id: "articles/install/s3-storage",
                },
                {
                  type: "doc",
                  label: "Using Istio",
                  id: "articles/istio",
                },
                {
                  type: "doc",
                  label: "Using Vault",
                  id: "articles/vault-install",
                },
                {
                  type: "doc",
                  label: "Using a Private CA",
                  id: "articles/private-ca",
                },
                {
                  type: "doc",
                  label: "Using an external MongoDB",
                  id: "articles/mongodb-administration",
                },
                {
                  type: "doc",
                  label: "High Availability Configuration",
                  id: "articles/ha",
                },
                {
                  type: "doc",
                  label: "Pod Security Standards",
                  id: "articles/pod-security-standards",
                },
                {
                  type: "doc",
                  label: "Deploying on OpenShift",
                  id: "articles/deploying-on-openshift",
                },
                {
                  type: "doc",
                  label: "Repackaging Testkube",
                  id: "articles/repackaging-testkube",
                },
                {
                  type: "doc",
                  label: "Using Global Parameters",
                  id: "articles/global-parameters-in-testkube-helm-charts",
                },
                {
                  type: "doc",
                  label: "Image Inventory",
                  id: "articles/inventory/images",
                },
                {
                  type: "doc",
                  label: "Distributed Tracing",
                  id: "articles/tracing",
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Standalone Agent",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "articles/install/standalone-agent",
            },
            {
              type: "doc",
              label: "Feature Comparison",
              id: "articles/install/feature-comparison",
            },
            {
              type: "doc",
              label: "Docker Install",
              id: "articles/install/docker-agent",
            },
            {
              type: "doc",
              label: "Local Kubernetes Install",
              id: "articles/install/quickstart-no-k8s",
            },
          ],
        },
        {
          type: "category",
          label: "Cloud Control Plane",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "articles/install/cloud-overview",
            },
            {
              type: "doc",
              label: "Custom SSO",
              id: "articles/custom-sso",
            },
          ]
        },
        "articles/install/faq",
        {
          type: "doc",
          label: "Upgrade & Uninstall",
          id: "articles/upgrade-uninstall",
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
          label: "Testkube Environments",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "articles/environment-management",
            },
            {
              type: "doc",
              label: "Testkube Agents",
              id: "articles/agents-overview",
            },
            {
              type: "doc",
              label: "Control Plane Source of Truth",
              id: "articles/control-plane-source-of-truth",
            },
            {
              type: "doc",
              label: "Agent Helm Chart",
              id: "articles/multi-agent-runner-helm-chart",
            },
            {
              type: "doc",
              label: "Agent CLI Commands",
              id: "articles/multi-agent-cli",
            },
            {
              type: "doc",
              label: "Ephemeral Environments",
              id: "articles/ephemeral-environments",
            },
          ],
        },
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
              type: "category",
              label: "Workflows",
              collapsed: false,
              items: [
                {
                  type: "doc",
                  label: "Workflows Overview",
                  id: "articles/testkube-dashboard-workflows-overview",
                },
                {
                  type: "doc",
                  label: "Workflow Wizard",
                  id: "articles/test-workflows-create-wizard",
                },
                {
                  type: "doc",
                  label: "Workflow Details",
                  id: "articles/testkube-dashboard-workflow-details",
                },
                {
                  type: "doc",
                  label: "Workflow Editor",
                  id: "articles/testkube-dashboard-workflow-editor",
                },
                {
                  type: "doc",
                  label: "Execution Details",
                  id: "articles/testkube-dashboard-execution-details",
                },
                {
                  type: "doc",
                  label: "Workflow Templates",
                  id: "articles/testkube-dashboard-workflows-templates",
                },
              ],
            },
            {
              type: "doc",
              label: "Executions",
              id: "articles/testkube-dashboard-executions",
            },
            {
              type: "category",
              label: "Integrations",
              collapsed: false,
              items: [
                {
                  type: "doc",
                  label: "Overview",
                  id: "articles/integrations-dashboard-explore",
                },
                {
                  type: "doc",
                  label: "Triggers",
                  id: "articles/integrations-triggers",
                },
                {
                  type: "doc",
                  label: "Webhooks",
                  id: "articles/integrations-webhooks",
                },
              ],
            },
            {
              type: "doc",
              label: "Custom Views",
              id: "articles/testkube-dashboard-custom-views",
            },
            {
              type: "doc",
              label: "Global Settings",
              id: "articles/settings-dashboard-explore",
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
            {
              type: "doc",
              label: "Running Workflows",
              id: "articles/test-workflows-running",
            },
            {
              type: "doc",
              label: "CLI Commands",
              id: "articles/test-workflows-creating",
            },
            {
              type: "doc",
              label: "Content",
              id: "articles/test-workflows-content",
            },
            {
              type: "doc",
              label: "Artifacts",
              id: "articles/test-workflows-artifacts",
            },
            {
              type: "doc",
              label: "Expression Language",
              id: "articles/test-workflows-expressions",
            },
            {
              type: "doc",
              label: "Parameterization",
              id: "articles/test-workflows-examples-configuration",
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
              label: "Concurrency & Queueing",
              id: "articles/test-workflows-concurrency-queueing",
            },
            {
              type: "doc",
              label: "Job & Pod Configuration",
              id: "articles/test-workflows-job-and-pod",
            },
            {
              type: "doc",
              label: "Execution Tags",
              id: "articles/filtering-test-workflow-executions-using-tags",
            },
            {
              type: "doc",
              label: "Workflow Orchestration",
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
            {
              type: "doc",
              label: "High-level Architecture",
              id: "articles/test-workflows-high-level-architecture",
            },
            {
              type: "category",
              label: "Cookbook",
              items: [
                {
                  type: "doc",
                  label: "Using Vault",
                  id: "articles/vault",
                },
                {
                  type: "doc",
                  label: "Capturing Application Logs",
                  id: "articles/tw-capture-logs",
                },
                {
                  type: "doc",
                  label: "Remote Workflow Execution",
                  id: "articles/remote-workflow-execution",
                },
                {
                  type: "doc",
                  label: "Uploading Artifacts to Custom S3 Bucket",
                  id: "articles/custom-minio-artifact-upload",
                },
                {
                  type: "doc",
                  label: "Enforcing Workflow Policies",
                  id: "articles/enforcing-workflow-policies",
                },
                {
                  type: "doc",
                  label: "Looping Test Workflow Executions from Workflows",
                  id: "articles/loop-execution-workflows",
                },
                {
                  type: "doc",
                  label: "Creating your own Workflow Templates",
                  id: "articles/examples/create-your-own-examples",
                },
              ],
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
              label: "Kubernetes Events",
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
            {
              type: "doc",
              label: "Workflow Health & Flakiness",
              id: "articles/workflow-health",
            },
            {
              type: "category",
              label: "Individual Execution Results",
              collapsed: false,
              items: [
                "articles/logs-and-artifacts",
                {
                  type: "doc",
                  label: "Log Highlighting",
                  id: "articles/log-highlighting",
                },
                {
                  type: "doc",
                  label: "JUnit Reports",
                  id: "articles/test-workflows-reports",
                },
                {
                  type: "doc",
                  label: "Resource Metrics",
                  id: "articles/resource-metrics",
                },
                {
                  type: "doc",
                  label: "AI Analysis",
                  id: "articles/AI-test-insights",
                },
                {
                  type: "doc",
                  label: "Cached Test Results",
                  id: "articles/cached-results",
                },
              ],
            },
            {
              type: "category",
              label: "Aggregated Results Analysis",
              collapsed: false,
              items: [
                {
                  type: "doc",
                  label: "Test Insights",
                  id: "articles/test-insights",
                },
                {
                  type: "doc",
                  label: "Status Pages",
                  id: "articles/status-pages",
                },
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
              label: "Overview",
              id: "articles/administration-overview",
            },
            {
              type: "doc",
              label: "Organizations",
              id: "articles/organization-management",
            },
            {
              type: "doc",
              label: "Members",
              id: "articles/member-management",
            },
            {
              type: "doc",
              label: "Teams",
              id: "articles/teams",
            },
            {
              type: "doc",
              label: "Resource Groups",
              id: "articles/resource-groups",
            },
            {
              type: "doc",
              label: "Resource Access Mgmt",
              id: "articles/resource-access-management",
            },
            {
              type: "doc",
              label: "API Tokens",
              id: "articles/api-token-management",
            },
            {
              type: "doc",
              label: "Audit Logs",
              id: "articles/audit-logs",
            },
            {
              type: "doc",
              label: "Credential Management",
              id: "articles/credential-management",
            },
          ],
        },
        ,
        {
          type: "category",
          label: "Testkube CLI",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "articles/cli",
            },
            {
              type: "doc",
              label: "Installing the CLI",
              id: "articles/install/cli",
            },
            {
              type: "doc",
              label: "Managing CLI Context",
              id: "articles/managing-cli-context",
            },
            {
              type: "doc",
              label: "Docker CLI",
              id: "articles/testkube-cli-docker",
            },
          ],
        },
        {
          type: "category",
          label: "Testkube AI",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "articles/testkube-ai-overview",
            },
            {
              type: "doc",
              label: "Configuration Quick Start",
              id: "articles/ai-enabling",
            },
            {
              type: "category",
              label: "AI Agents",
              items: [
                {
                  type: "doc",
                  label: "Overview",
                  id: "articles/ai-agents",
                },
                {
                  type: "doc",
                  label: "AI Agent Chats",
                  id: "articles/using-ai-agents",
                },
                {
                  type: "doc",
                  label: "Defining AI Agents",
                  id: "articles/defining-ai-agents",
                },
                {
                  type: "doc",
                  label: "Connected MCP Servers",
                  id: "articles/mcp-servers-for-ai-agents",
                },
                {
                  type: "category",
                  label: "Example Agents",
                  items: [
                    {
                      type: "doc",
                      label: "Remediation",
                      id: "articles/remediation-agent",
                    },
                    {
                      type: "doc",
                      label: "Flakiness Analysis",
                      id: "articles/flakiness-analysis-agent",
                    }
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "AI Assistant",
              items: [
                {
                  type: "doc",
                  label: "Overview",
                  id: "articles/ai-assistant-overview",
                },
                {
                  type: "doc",
                  label: "How AI Assistant can help",
                  id: "articles/ai-assistant-can-help",
                },
                {
                  type: "doc",
                  label: "How AI Assistant is different",
                  id: "articles/ai-assistant-is-different",
                },
                {
                  type: "doc",
                  label: "Security & Compliance",
                  id: "articles/ai-assistant-security",
                },
              ],
            },
            {
              type: "category",
              label: "Testkube MCP Server",
              items: [
                {
                  type: "doc",
                  label: "Overview",
                  id: "articles/mcp-overview",
                },
                {
                  type: "doc",
                  label: "Hosted Endpoint",
                  id: "articles/mcp-hosted",
                },
                {
                  type: "doc",
                  label: "CLI Setup",
                  id: "articles/mcp-cli",
                },
                {
                  type: "doc",
                  label: "Docker Setup",
                  id: "articles/mcp-docker",
                },
                {
                  type: "doc",
                  label: "Configuration Examples",
                  id: "articles/mcp-configuration",
                },
                {
                  type: "doc",
                  label: "Security & Compliance",
                  id: "articles/mcp-security",
                },
              ],
            },
            {
              type: "category",
              label: "Reference",
              items: [
                {
                  type: "doc",
                  label: "Configuration",
                  id: "articles/ai-configuration",
                },
                {
                  type: "doc",
                  label: "Architecture",
                  id: "articles/ai-architecture",
                }
              ],
            }
          ],
        },
        {
          type: "category",
          label: "Best Practices",
          items: [
            {
              type: "doc",
              label: "Environments and Access Control",
              id: "articles/environments-best-practices",
            },
            {
              type: "doc",
              label: "Local Development Loop",
              id: "articles/local-dev-loop",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Examples & Guides",
      link: {
        type: "doc",
        id: "articles/examples/overview",
      },
      items: [
        {
          type: "category",
          label: "Load & Performance Testing",
          items: [
            {
              type: "category",
              label: "K6",
              items: [
                {type: "doc", label: "Basic", id: "articles/examples/k6-basic"},
                {type: "doc", label: "Distributed", id: "articles/examples/k6-distributed"},
                {
                  type: "link",
                  label: "Testkube K6 Introduction",
                  href: "https://testkube.io/blog/load-testing-in-kubernetes-with-k6-and-testkube",
                },
                {
                  type: "link",
                  label: "Testkube vs K6-operator",
                  href: "https://testkube.io/learn/comparing-the-k6-operator-vs-testkube-for-load-testing",
                },
                {
                  type: "link",
                  label: "Generating Massive Load",
                  href: "https://testkube.io/learn/a-guide-to-scalable-and-heavy-load-testing-with-k6-and-testkube",
                },
              ],
            },
            {
              type: "category",
              label: "JMeter",
              items: [
                {type: "doc", label: "Basic", id: "articles/examples/jmeter-basic"},
                {type: "doc", label: "Distributed", id: "articles/examples/jmeter-distributed"},
                {type: "doc", label: "Plugins", id: "articles/examples/jmeter-plugins"},
              ],
            },
            {type: "doc", label: "Gatling", id: "articles/examples/gatling-basic"},
            {
              type: "category",
              label: "Locust",
              items: [
                {type: "doc", label: "Basic", id: "articles/examples/locust-basic"},
                {type: "doc", label: "Distributed", id: "articles/examples/locust-distributed"},
              ],
            },
            {type: "doc", label: "Artillery", id: "articles/examples/artillery-basic"},
          ],
        },
        {
          type: "category",
          label: "End-to-End & Browser Testing",
          items: [
            {
              type: "category",
              label: "Cypress",
              items: [
                {type: "doc", label: "Basic", id: "articles/examples/cypress-basic"},
                {type: "doc", label: "Sharded", id: "articles/examples/cypress-sharded"},
                {
                  type: "link",
                  label: "Scaling Cypress Tests",
                  href: "https://testkube.io/learn/scaling-cypress-tests-parallelise-your-end-to-end-tests-with-testkube",
                },
              ],
            },
            {
              type: "category",
              label: "Playwright",
              items: [
                {type: "doc", label: "Basic", id: "articles/examples/playwright-basic"},
                {type: "doc", label: "Sharded", id: "articles/examples/playwright-sharded"},
                {type: "doc", label: "Rerun Failed Tests", id: "articles/examples/playwright-rerun"},
              ],
            },
            {
              type: "category",
              label: "Selenium",
              items: [
                {type: "doc", label: "Basic", id: "articles/examples/selenium-basic"},
                {type: "doc", label: "Advanced", id: "articles/examples/selenium-advanced"},
                {
                  type: "link",
                  label: "Functional Testing with Selenium",
                  href: "https://testkube.io/learn/functional-testing-with-selenium-in-testkube",
                },
                {
                  type: "link",
                  label: "Selenium Grid with Testkube",
                  href: "https://testkube.io/learn/faster-smarter-selenium-testing-with-testkube-on-kubernetes",
                },
              ],
            },
            {
              type: "category",
              label: "Robot Framework",
              items: [
                {type: "doc", label: "Basic", id: "articles/examples/robot-framework-basic"},
                {type: "doc", label: "Parallelized", id: "articles/examples/robot-framework-parallel"},
                {
                  type: "link",
                  label: "Automated Acceptance Testing",
                  href: "https://testkube.io/learn/automated-acceptance-testing-with-robot-framework-and-testkube",
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "API Testing",
          items: [
            {
              type: "category",
              label: "Postman",
              items: [
                {type: "doc", label: "Basic", id: "articles/examples/postman-basic"},
                {
                  type: "link",
                  label: "API Test Automation with Postman",
                  href: "https://testkube.io/blog/api-testing-in-kubernetes-with-postman",
                },
              ],
            },
            {type: "doc", label: "SoapUI", id: "articles/examples/soapui-basic"},
            {type: "doc", label: "REST Assured", id: "articles/examples/rest-assured-basic"},
            {type: "doc", label: "cURL", id: "articles/examples/curl-basic"},
          ],
        },
        {
          type: "category",
          label: "Unit & Integration Testing",
          items: [
            {
              type: "category",
              label: "Pytest",
              items: [
                {type: "doc", label: "Basic", id: "articles/examples/pytest-basic"},
                {
                  type: "link",
                  label: "Pytest and Testkube",
                  href: "https://testkube.io/learn/testing-kubernetes-applications-with-pytest-and-testkube-a-complete-guide",
                },
              ],
            },
            {type: "doc", label: "Maven", id: "articles/examples/maven-basic"},
            {type: "doc", label: "Gradle", id: "articles/examples/gradle-basic"},
            {type: "doc", label: "NUnit", id: "articles/examples/nunit-basic"},
            {type: "doc", label: "TestContainers", id: "articles/examples/test-containers-basic"},
            {
              type: "link",
              label: "Cucumber",
              href: "https://testkube.io/learn/simplify-bdd-testing-for-distributed-java-applications-with-testkube",
            },
          ],
        },
        {
          type: "category",
          label: "Infrastructure Testing",
          items: [
            {type: "doc", label: "Chainsaw", id: "articles/examples/chainsaw-basic"},
            {type: "doc", label: "Validating Kubernetes Clusters", id: "articles/examples/kubectl-basic"},
            {
              type: "link",
              label: "Testing Hardware Components",
              href: "https://testkube.io/blog/implementing-kubernetes-native-hardware-testing-with-testkube",
            },
          ],
        },
        {
          type: "category",
          label: "Tutorials",
          items: [
            {
              type: "doc",
              label: "Testing a Sample Application",
              id: "articles/tutorial/example",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Integrations",
      link: {
        type: "doc",
        id: "articles/integrations",
      },
      items: [
        {
          type: "category",
          label: "CI/CD Pipelines",
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
              type: "link",
              label: "BitBucket",
              href: "https://testkube.io/learn/unleashing-the-power-of-ci-cd-testing-with-bitbucket-and-testkube",
              description: "Integrate Testkube with Bitbucket Pipelines",
            },
            {type: "doc", label: "CircleCI", id: "articles/circleci"},
            {type: "doc", label: "Tekton", id: "articles/tekton"},
          ],
        },
        {
          type: "category",
          label: "GitOps",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "articles/gitops-overview",
            },
            {type: "doc", label: "ArgoCD", id: "articles/argocd-integration"},
            {type: "doc", label: "Flux", id: "articles/flux-integration"},
          ],
        },
        {
          type: "category",
          label: "Progressive Delivery",
          items: [
            {
              type: "doc",
              label: "Argo Rollouts",
              id: "articles/argorollouts-integration",
            },
            {
              type: "link",
              label: "Keptn",
              href: "https://testkube.io/learn/leveraging-testkube-as-a-quality-gate-in-multi-stage-deployments-with-keptn",
              description: "Leveraging Testkube as a Quality Gate in Multi-Stage Deployments with Keptn",
            },
          ],
        },
        {
          type: "category",
          label: "Event-Driven Automation",
          items: [
            {
              type: "doc",
              label: "Argo Events",
              id: "articles/argoevents-integration",
            },
            {
              type: "doc",
              label: "Argo Workflows",
              id: "articles/argoworkflows-integration",
            },
            {type: "doc", label: "CDEvents", id: "articles/cd-events"},
            {type: "doc", label: "Kubernetes Events", id: "articles/k8s-events"},
            {type: "doc", label: "Webhooks", id: "articles/webhooks"},
          ],
        },
        {
          type: "category",
          label: "Collaboration & Alerting",
          items: [
            {type: "doc", label: "Slack", id: "articles/slack-integration"},
            {type: "doc", label: "Microsoft Teams", id: "articles/teams-integration"},
            {type: "doc", label: "Atlassian Jira", id: "articles/jira-integration"},
            {
              type: "link",
              label: "PagerDuty",
              href: "https://testkube.io/learn/critical-test-based-alerting-with-pagerduty-and-testkube",
              description: "Critical Test Based Alerting with PagerDuty and Testkube",
            },
            {
              type: "link",
              label: "Zapier",
              href: "https://testkube.io/learn/integrating-testkube-and-zapier-for-instant-email-alerts",
              description: "Integrating Testkube and Zapier for Instant Email Alerts",
            },
          ],
        },
        {
          type: "category",
          label: "Observability & Reporting",
          items: [
            {type: "doc", label: "Prometheus", id: "articles/metrics"},
            {
              type: "doc",
              label: "Control Plane Metrics",
              id: "articles/control-plane-metrics",
            },
            {type: "doc", label: "Grafana", id: "articles/grafana"},
            {type: "doc", label: "Datadog", id: "articles/datadog-junit"},
            {type: "doc", label: "Allure Reports", id: "articles/allure-reports"},
          ],
        },
        {
          type: "category",
          label: "Identity Mgmt",
          items: [
            {type: "doc", label: "SCIM", id: "articles/scim"},
          ],
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
        "articles/helm-components",
        "articles/telemetry",
        {
          type: "category",
          label: "Testkube CRDs",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "articles/crds",
            },
            {
              type: "doc",
              label: "testworkflows.testkube.io/v1",
              id: "articles/crds/testworkflows.testkube.io-v1",
            },
            {
              type: "doc",
              label: "tests.testkube.io/v1",
              id: "articles/crds/tests.testkube.io-v1",
            },
            {
              type: "doc",
              label: "tests.testkube.io/v2",
              id: "articles/crds/tests.testkube.io-v2",
            },
            {
              type: "doc",
              label: "tests.testkube.io/v3",
              id: "articles/crds/tests.testkube.io-v3",
            },
            {
              type: "doc",
              label: "executor.testkube.io/v1",
              id: "articles/crds/executor.testkube.io-v1",
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
              label: "Configuration",
              id: "articles/cli-config-reference",
            },
            {
              type: "category",
              label: "CLI Commands",
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
          id: "articles/open-source",
        },
        {
          type: "doc",
          label: "Getting Started",
          id: "articles/getting-started-with-open-source",
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
          items: ["articles/development"],
        },
      ],
    },
    {
      type: "html",
      value: "<hr class='sidebar-hr'/>",
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
          label: "Legacy Deprecation",
          id: "articles/legacy-deprecation",
        },
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
        "articles/legacy-architecture",
        {
          type: "doc",
          label: "Integrating with Slack Using Helm",
          id: "articles/slack-integration-helm",
        },
        {
          type: "category",
          label: "Legacy CLI Commands",
          items: [
            {
              type: "autogenerated",
              dirName: "legacy-cli",
            },
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
