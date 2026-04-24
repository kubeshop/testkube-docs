# Viewing OSS Execution Results in the Cloud

OSS users can now view execution details from their local client directly in the Testkube Cloud UI. Open the execution data (step tree, logs, and artifacts) in a lightweight, read-only page. No login or Cloud account required.

:::note
This feature is available to OSS / Standalone Agent users connecting out to Testkube Cloud. It is not available in Enterprise or on-prem dedicated deployments.
:::

## Quickstart

Run the `testkube view` command from a kubeconfig-connected CLI:

```bash
testkube view <executionId|executionName>
```

The command accepts either the execution UUID or its name (for example `my-workflow-12345`). It prints a tokenized URL on `view.testkube.io` and opens it in your default browser.

When the CLI is already connected to a Testkube Cloud / Control Plane context, `testkube view` opens the execution in the dashboard directly — no upload is performed.

## What's in an execution view

An execution viewer page is read-only and includes:

- Execution metadata (workflow name, status, started / finished times, duration, labels, tags).
- The step tree with per-step status and duration.
- Finished execution logs for each step.
- Artifacts uploaded by the execution (click to download).

## Command flags

| Flag               | Short | Default                    | Description                                              |
| ------------------ | ----- | -------------------------- | -------------------------------------------------------- |
| `--skip-artifacts` |       | `false`                    | Upload execution metadata and logs only, skip artifacts. |
| `--force`          | `-f`  | `false`                    | Skip the confirmation prompt.                            |
| `--wait`           | `-w`  | `false`                    | Wait for the execution to finish before uploading.       |
| `--shares-api-url` |       | `https://api.testkube.io`  | Override the public executions API endpoint.             |
| `--viewer-url`     |       | `https://view.testkube.io` | Override the viewer base URL.                            |

Example — view a still-running execution after it completes, without the artifact bundle, and skipping the confirmation:

```bash
testkube view my-k6-test-12345 --wait --skip-artifacts --force
```

## Size limits

A single public execution is capped at **10 MB** total for logs and artifacts combined. If your execution exceeds the limit, use `--skip-artifacts` to upload logs and metadata only, or trim the artifact set before running the command.

## Privacy and security

- **Anyone with the link can view it.** The page is public — no login or Cloud account required. Don't open a public execution page for data that's sensitive unless the recipients of the link are trusted.
- **Links are time-limited.** Each public execution is reachable for a few hours, after which the page returns `410 Gone`.
- **Read-only.** The recipient can view the execution but cannot re-run or modify it from the execution page.

## Troubleshooting

**The upload fails with "bundle too large".**
The execution's logs + artifacts exceed 10 MB. Re-run with `--skip-artifacts` or pick a smaller execution.

**`testkube view` opens the Cloud dashboard instead of generating a public link.**
Your CLI is connected to a Testkube Cloud / Control Plane context. In that case the command opens the execution directly in the dashboard — no public execution is created. Switch the CLI context to a standalone (kubeconfig) environment if you want a public link.

**The command asks to confirm that the execution data will be made public.**
The execution page is reachable by anyone with the link. Confirm only if that's acceptable for your data. Use `--force` to skip the prompt in scripted environments.

## Related

- [Testkube Open Source Overview](/articles/open-source)
- [Getting Started with Open Source](/articles/getting-started-with-open-source)
- [Standalone Agent Installation](/articles/install/standalone-agent)
