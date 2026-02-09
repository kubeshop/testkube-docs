# Testkube AI Assistant Overview

The **Testkube AI Assistant** is an AI-powered assistant integrated into the Testkube Dashboard which  
can help you streamline your Testkube tasks by providing intelligent assistance in areas such as test result analysis, dashboard navigation,
YAML configuration, and general Testkube guidance.

:::info
Check out the [AI Configuration Quick Start](/articles/ai-enabling) on how to enable the AI Assistant for your Testkube instance.
:::

The AI Assistant is different from external AI tools that interact with Testkubes MCP Server in several ways:

- **Contextual Awareness:**  
  AI Assistant continuously enriches its context based on the current page you’re viewing on the Testkube Dashboard.

- **Direct Control Plane Interaction:**  
  The AI Assistance has access to real-time information directly from the Testkube Control Plane, ensuring that the 
  data and recommendations are up to date.

## How Can the AI Assistant Help?

Testkube AI Assistant is designed to enhance your Testkube experience by catering to a number of use-cases, including:

### 1. Execution Result Analysis & Debugging

- Ask questions such as "why did this execution fail?" or "write a short summary of what failed" to get detailed insights.
- The AI Assistant can help pinpoint issues by examining log outputs and execution details.

:::tip
Use [AI Agents](/articles/ai-agents) if you want troubleshooting to pull context from external tools like GitHub, DataDog, etc.
:::

### 2. Environment Analysis
  
Ask questions like:

- "Show me a summary of all yesterday failed Workflow Executions"
- "Which Workflows are showing signs of Flakiness over the last week?"
- "What docker images are all my Workflows using?"

### 3. Dashboard Navigation Assistance

AI Assistant simplifies navigation within the Testkube Dashboard in two key ways:

- **Page Finder:**  
  - Request guidance like "where do I create an API token?" or "where do I check the audit log?"  
  - The AI Assistant will respond with direct links to the relevant pages.
- **Workflow Search:**  
  - Ask queries such as "find all workflows that failed" or "find all successful cypress workflows and failed postman workflows" to quickly navigate to pages with pre-applied filters.

### 4. YAML Configuration Assistance

- Request examples or ask for help writing YAML configurations for Test Workflows and Test Workflow Templates.
- Inquire about how to configure specific settings like services, workers, or parallelism within your YAML files.

### 5. General Testkube Guidance

Whether you have questions about the Testkube Control Plane, Agents, or Dashboard functionalities, AI Assistant provides answers using our comprehensive documentation, complete with source links.

## Accessing the AI Assistant

The AI Assistant is integrated into the Testkube Dashboard via a corresponding button in the bottom left corner.

![img_1.png](images/ai-assistant-button.png)

Clicking it opens the prompt interface where you can interact with the Assistant any of the features described above.

![img.png](images/ai-assistant-interface.png)

The buttons in the top right corner of the AI Assistant allow you to maximize/minimize the interface, clear the prompt history or close the Assistant.

:::tip
The Testkube Dashboard provides shortcuts to the AI Assistant for the execution results of your Workflow 
Executions - [Read More](/articles/AI-test-insights).
:::

## Testkube Tool Access

The AI Assistant has read-only access to all tools of the Testkube MCP Server, allowing it to query and analyze Testkube data accordingly. 

If you want to modify/create Testkube resources via Testkubes AI functionality, or interact with external MCP Servers, you will need to create an [AI Agent](/articles/ai-agents) with read/write access to Testkube and external MCP Tools.

## Security Consideration

AI functionality operates within your existing security framework and respects all authentication, authorization, and audit logging policies:

- **Authentication**: Uses the JWT token of the logged-in user
- **Authorization**: Respects all [Role-Based Access Control](/articles/environments-best-practices) (RBAC) policies
- **Read-Only Operations**: AI Assistant tools are limited to read-only operations
- **Audit Logging**: All actions are logged in [Audit Logs](/articles/audit-logs) under the user's identity

This means AI Assistant has the same access as the user — no more, no less. If a user has read-only permissions in an environment, AI Assistant will be similarly restricted.

## Further reading

- [AI Configuration Reference](./ai-configuration.mdx)
