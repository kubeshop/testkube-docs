---
description: View, filter and export the Organization Audit Log, see how AI and MCP tool calls are recorded, and set retention and console logging for Testkube On-Prem.
---

# Testkube Audit Logs

**Testkube** records significant events in its internal **Audit Log**,
providing **Organization Owners** and **Admins** with valuable insights into
how **Organization Members** are using the platform.

These logs can help monitor usage patterns, identify security risks, and ensure compliance with internal policies.

## Accessing Audit Logs

**Audit Logs** can be accessed via the **Audit log** menu item under the **Organization Management** page.

Here, **Organization Owners** and **Admins** can review detailed records of user actions.

![Audit log](../img/audit-log.png "Audit log")

## Filtering Audit Logs

Events in the Audit Log can be filtered using various parameters to focus on specific actions or time frames:

- **Search**: Find events by the name or ID of the resource they changed.
- **Date Range**: Filter by the time period during which the events were recorded.
- **Event Type**: For example, filter for actions like **Environment Deleted** or **Test Workflow Executed**.
- **Environment**: Focus on a specific environment within the organization.
- **Actor**: Filter by the specific user or service that initiated the event.
- **Source**: Filter by where the event came from: **UI**, **CLI**, **API Token**, **GitOps Agent**, **MCP**, **A2A** or **AI Agent**. A call made with an API token through MCP has the **MCP** source. A tool an AI Agent called on an MCP Server has the **AI Agent** source.
- **AI Agent** and **MCP Server**: Filter to the tool calls of one AI Agent, or to one MCP Server. Both are scoped to an Environment, so pick the Environment first; until you do, the dashboard shows them as **pick an Environment first**.

### Sharing a filtered view

The filters and the page you're on are kept in the URL, so a bookmarked or shared link opens the same view. For example, adding `?source=mcp` to the Audit log's address shows only the events that came through MCP. **Organization Management** → **AI Governance** → **Audit** opens that view. That tab is only there for people who can see both AI Governance and the Audit log.

## AI and MCP events

Each tool call through an Environment's [MCP endpoint](/articles/mcp-hosted) is recorded as an **MCP Tool Called** event. It records:

- The tool that was called, who called it, and the Environment.
- Whether the call succeeded, failed, or was refused before it ran (for example over a limit), and the reason, cut to 500 characters.
- How long the call took, for calls that ran.
- How the caller signed in: an API token or OAuth.
- The tool's identifier arguments, such as workflow, template, execution, file, Resource Group, report, board and insight series names or IDs, cut to 200 characters.

Workflow YAML, run configuration, tags, filters and log searches can hold secrets, so they're never recorded.

In the list, the event reads **Executed MCP Tool** followed by the tool's name, and ends with **which failed** when the call failed. Hover it for the reason. Refused calls don't show **which failed**.

Every event recorded while serving a tool call has the **MCP** source, including the actions the tool takes. A workflow run started through MCP is recorded as **Test Workflow Executed** with the **MCP** source, next to its **MCP Tool Called** event.

![Audit log filtered to the MCP source](images/audit-log-mcp.png "Audit log filtered to the MCP source")

## AI Agent tool calls

The section above covers calls that come **in** through an Environment's MCP endpoint. An
[AI Agent](/articles/ai-agents) also calls **out**, to the [MCP Servers](/articles/mcp-servers-for-ai-agents)
it was given. Those calls are recorded as **MCP Tool Called** events too, with the **AI Agent** source.

### What a record contains

- The **tool** that was called and the **MCP Server** it reached, including the built-in Testkube one.
- The **AI Agent** that called it.
- The **identity whose token was presented**, which is the actor of the event. For a run nobody
  started, such as an AI Trigger, that is the trigger's own token rather than a person.
- Whether it **succeeded, failed or was cut short**, how long it took, and the reason when it failed.
- **How the run started**: from the dashboard, the API, a trigger, a Git integration, MCP or A2A.
- **What was presented to the MCP Server**: no sign-in, the agent's own key, the person who asked,
  or your [identity provider](/articles/ai-identity-provider-sign-in).
- The **argument key names**, so a reviewer can see the shape of the call.

In the list, a row reads **Executed MCP Tool** followed by the tool, the MCP Server and the AI Agent,
and ends with how the run started and what was presented, for example _run from the dashboard through
the identity provider_. Use **Open details** on the row for the full record.

### What it deliberately omits, and why

**Argument values and the result body are not recorded.** For an MCP Server you connected, Testkube
does not know its tools, so it cannot decide in advance which of their arguments are safe to keep.
Recording the argument **key names** gives a reviewer the shape of a call without its contents.

This is also what keeps the trail readable by administrators without opening up the AI chats
themselves: the trail says **that** a tool was called, never what was said.

### When a trail is known to be incomplete

Recording a tool call is best effort, so that auditing never stops an agent from working. When a
record could not be written, the chat is marked, and every event of that chat then says
**this chat's trail has known gaps**, in the list, through the API and in the export.

Treat it as it reads. A chat without the mark is one where no gap is known, which is not the same as
a chat where one is impossible.

### Who may read it

Only **Organization Owners**, **Admins** and **Billers**, the same people who can already read the
rest of the Audit Log. Configuring an AI Agent is an Environment permission, so somebody can create
an agent and give it MCP Servers without being able to read its trail. An AI Agent's page carries an
**Audit log** link, filtered to that agent, and it is shown only to people who can follow it.

### Reading it outside the dashboard

`GET /organizations/{id}/audit` and `/audit/export` take `aiAgentId` and `mcpServerId`, so
"everything this agent did" is a query rather than a separate report. The CSV export carries the
same fields, with the incomplete-trail mark in a `trail_incomplete` column.

### What the trail does not answer

The trail answers what ran, where, under whose authority, and how slowly. It does not answer which
**arguments** caused a failure, because it does not keep them. That belongs to the trace Testkube
forwards to your own observability backend, which comes from the same instrumentation point. Use the
trail for who and whether, and the trace for why.

## Exporting Audit Logs

**Audit Logs** can also be exported for further analysis. Supported formats are:

- **CSV**
- **JSON**

This makes it easy to integrate the audit log events with other reporting or analysis tools.

![Export Audit Logs](../img/audit-log-export.png "Export Audit Logs")

## Retention Period

By default, audit log events are retained for **30 days**. After this period, the logs are automatically cleaned up to optimize storage. Change it with `audit.cleanup.retentionPeriod`, described under [Configuration](#configuration).

## Console Logging

By default, Testkube does **not** emit audit events to the console. Turning this on can help with real-time debugging and monitoring—but may expose sensitive user data.

- **Enable Console Logging**  
  Streams audit events to stdout.

- **Anonymize User Information**  
  When console logging is enabled, log only the user’s internal ID (not their username/email).

> ⚠️ Console logs can leak sensitive details. If you need privacy, enable anonymization.

See the **Configuration** section for the corresponding Helm parameters or environment variables.

## Configuration

If you are using **Testkube On-Prem**, audit log settings can be configured during installation via **Helm** parameters:

- **Retention Period**: Customize the number of days to retain audit log events - `audit.cleanup.retentionPeriod` (default: `30`)
- **Audit Log Cleanup**: Control whether automatic cleanup is enabled - `audit.cleanup.enabled` (default: `true`)
- **Cleanup Interval**: Define how often the cleanup job runs, using a cron expression - `audit.cleanup.cronInterval` (default: `0 3 * * *`)
- **Enable Console Logging**: Toggle whether audit log events should also be logged to console - `audit.logger.enabled` (default: `false`)
- **Anonymize User Information**: If console logging is enabled and this toggle is enabled, audit log events console logs will only contain user ID and not username/email - `audit.logger.forceIdentifyUsersById` (default: `false`)
