# Audit Logs

**Testkube** records events into its internal Audit Log so **Organization Owners** and **Admins** can have insights how are the **Organization Members** using the product.

**Audit Logs** can be accessed via the **Audit log** menu item in the **Organization Management** page.

Events in the **Audit Log** can be filtered by date range of recorded events, by event type (i.e. **Environment Deleted**), by a specific **Environment** or by the subject/actor who initiated the event.

In addition to querying, **Audit Log** can also be exported into **CSV** or **JSON** format.

Default retention period for **Audit Log** events is **180 days**.

## Configuration

In **Testkube On-Prem**, following settings can be configured during installation via Helm parameters:
* retention period of Audit Log events - `audit.cleanup.retentionPeriod` (default: `30`)
* enable/disable Audit Log cleanup - `audit.cleanup.enabled` (default: `true`)
* cleanup interval of Audit Log events - `audit.cleanup.cronInterval` (default: `0 3 * * *`)