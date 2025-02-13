# Defining Tests

## Overview

To run your tests, you must define your test executions. This involves specifying:

- The testing tool or script.
- The test repository and file(s).
- Required arguments/parameters.
- Underlying infrastructure.

## Methods for Defining Test Executions

Test executions can be defined using various approaches:

- **Declarative Mechanisms:**  
  e.g., YAML Workflows in GitHub.

- **Scripting Languages:**  
  e.g., Jenkins pipeline scripts (Groovy).

- **Visual Tools/Plugins:**  
  Tools specific to your testing system and CI/CD setup.

- **Hybrid Approaches:**  
  Combining native plugins with custom scripts/YAML for different tools.

_Note:_ It's common to have multiple CI/CD tools in one infrastructure (e.g., Jenkins for backend microservices and GitLab/GitOps for front-end applications), which can add complexity.

> **Tip:** Typically, DevOps/Build engineers define these executions based on requirements from development and QA teams.

## Defining Test Execution in Testkube

Testkube leverages **[Test Workflows](../articles/test-workflows.md)** as a generic abstraction to define and execute tests.

### Key Features of Test Workflows

Test Workflows use a declarative YAML vocabulary and offer built-in functionality for:

- **Test Retrieval:**  
  Fetch tests from Git repositories, inline files, or external volumes.

- **Test Execution:**  
  Run any test or testing tool available as a Docker image.

- **Parameter Passing:**  
  Provide variables and arguments to your tests.

- **Results Collection:**  
  Gather test results, artifacts, and logs.

- **Customization:**  
  Adjust the underlying pod/job resource configurations.

- **Orchestration:**  
  Execute multiple tests in sequence or in parallel, including:

  - **Parallel Execution:** For generating massive load.
  - **Distributed Execution:** To save time.

- **Setup/Teardown:**  
  Manage services your tests depend on before and after execution.

### Workflow Templates

Testkube also provides **[Workflow Templates](../articles/test-workflow-templates.md)** that allow you to:

- Define common traits (e.g., Git access, resource allocation, Docker image settings).
- Share these traits across multiple workflows.
- Ensure consistency across your testing processes.

### Dashboard and Labeling

Testkube lets you label your Test Workflows by:

- Target release.
- Application.
- Testing tool.

This flexible labeling enables centralized management via a single dashboard, where you can view all workflows and their executions.

![Dashboard](../img/concepts-dashboard.png)

## Further Reading

- See our **[Examples](../articles/test-workflows-examples-basics.md)** for running specific tests with common tools.
- Learn more about **[Triggering Tests](../articles/triggering-tests.md)**.
