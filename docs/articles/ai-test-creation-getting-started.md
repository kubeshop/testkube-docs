---
title: Create your first test with AI
slug: /articles/ai-test-creation-getting-started
---

# Create your first test with AI

In this guide, you will use AI Test Creation to write a Playwright test, run it with Testkube, and add another test case through chat. You will test the public [Playwright TodoMVC demo](https://demo.playwright.dev/todomvc/), so you do not need an application or GitHub repository of your own to get started.

## Before you start

You need:

- Access to AI Test Creation in your Testkube organization. If your organization uses Test Creation seats, ask an administrator to assign one to you.
- An environment where you can create and run Test Workflows, with a connected runner available to execute the test.
- Network access from the test environment to the demo application and the package and container registries used by Playwright.

For a self-hosted installation, an administrator must first [enable AI Test Creation](/articles/ai-test-creation#install-ai-test-creation-on-testkube-on-prem).

## 1. Describe the test you want to create

Open the Testkube Dashboard, select your environment, and open **Test Catalog** from the navigation menu.

Enter the following prompt in **Describe your test**:

```text
Create a Playwright test in TypeScript for https://demo.playwright.dev/todomvc/.

Add a todo called "Write my first AI test", verify it appears in the list,
mark it complete, and verify that no active todos remain.

Use Chromium, create the Testkube workflow needed to run it, and run the test.
Use a fresh browser context so the test can run repeatedly.
```

![Test Catalog with a Playwright test request entered in the Describe your test field](../img/ai-test-creation-getting-started-prompt.png)

Select the arrow button (**Create test**) to submit your request.

:::tip Write a specific first prompt

Include the application URL, the testing framework, the actions to perform, and the result to verify. Start with one small scenario; you can add more coverage after the first test runs.

:::

## 2. Follow the AI's progress

Testkube creates a **Test Bundle** and opens its first chat. The bundle groups your test authoring work; the chat is where you ask the AI to create or change tests. A **Test Workflow** defines how Testkube runs those tests.

The AI may ask you to confirm details before it proceeds. For example, if it asks for a workflow name, use `todomvc-playwright-tests` or another name that is not already used in your environment.

Follow the progress in the chat as the AI creates the test files and workflow. If it asks a question, answer it in the same chat. Wait for the requested work to finish before starting a separate run.

## 3. Review the generated test and workflow

In the **Navigator**, expand the file tree and select the generated Playwright test file. File names can vary between sessions.

![Navigator showing the generated Playwright files and the selected test in the file viewer](../img/ai-test-creation-getting-started-files.png)

Check that the test:

- Opens `https://demo.playwright.dev/todomvc/`.
- Creates the todo with the text from your prompt.
- Asserts that the todo appears.
- Marks it complete and checks that no active todos remain.

Select **Workflow** in the Navigator to inspect how the test is executed. Check the container image, dependency installation, and Playwright command.

Use the chat to request changes to the generated files. For example:

```text
Explain the assertions in this test and how it starts with an empty todo list.
```

## 4. Run the test and inspect the result

The first prompt asks the AI to run the test. Review that execution before running it again.

To start another execution yourself:

1. Select **Run tests** at the top of the bundle. Use the adjacent dropdown if you need to select a runner.
2. Open **Execution Logs** in the Navigator to follow the output.
3. Select **Open Workflow** to inspect the workflow's executions and confirm the execution status.

A successful run should show that the Playwright test passed. Read the result and assertions as well as the status to confirm that the test checked the behaviour you requested.

![Execution log showing the TodoMVC test passing in Chromium](../img/ai-test-creation-getting-started-result.png)

The generated code and number of iterations can vary. If the run fails, ask the AI to investigate the actual execution:

```text
Inspect the latest failed execution and explain why it failed. Fix the cause
and run the test again. Keep the assertions that check the requested behaviour.
```

:::note If Run tests is unavailable

Wait for the workflow to be created and any current execution to finish. If no runner is available, connect a runner to the environment before trying again.

:::

## 5. Add another test case

Continue in the same chat to extend the test:

```text
Add a second Playwright test that creates a todo called "Review the results",
deletes it, and verifies that the todo list is empty. Keep the first test.
Run both tests and show me the results.
```

Review the updated file, then inspect the new execution and confirm that both tests pass. If the new case fails, repeat the inspection and repair step above. You should now have coverage for both completing and deleting a todo.

## Continue with your own application

Once the example works, start a new bundle for your own application. Replace the demo URL and describe a specific user journey and its expected result.

- Use **Attached Context** to add reusable project guidance, such as test conventions, business rules, and test data requirements.
- To work with existing tests, follow [Work with a GitHub repository](/articles/ai-test-creation-github) to import a repository, review changes, and open a pull request.
- Use **Open Workflow** to continue configuring execution. See [scheduling](/articles/scheduling-tests), [GitHub Actions](/articles/github-actions), and the [Playwright workflow example](/articles/examples/playwright-basic).

For the architecture and self-hosted configuration behind this workflow, see [AI Test Creation](/articles/ai-test-creation).
