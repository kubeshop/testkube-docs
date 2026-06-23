# Read access controls: Org-wide Read tokens & the Read-only user cap

Testkube provides two related RBAC controls for **read-only access** at the organization
level:

| Feature | Applies to | Effect |
| --- | --- | --- |
| **Org-wide Read role** | API tokens | *Grants* read access to **everything** in the org (all environments and resource groups), without per-resource grants. |
| **Read-only cap (`maxRole`)** | Users / invites | *Limits* a member's effective permission to a ceiling (read), no matter what env/team roles they hold — including org admins. |

One **grants** broad read access to a machine identity; the other **constrains** a human
member. They can be used independently.

---

## 1. Org-wide Read role (API tokens)

The **Org-wide Read** organization role grants automatic, read-only access to every
environment and resource group in the organization. It is intended for **API tokens** —
CI jobs, dashboards, observability/integrations, and scripts that need to read across the
whole org without being granted access to each environment individually. It is **not**
assignable to human members from the dashboard (members use Owner / Admin / Member).

### What an Org-wide Read token can and cannot do

- **Can:** list/get organizations, environments, teams, invites, resource groups,
  collaborators, executions, logs, artifacts, agents, views, boards, insights, status
  pages/incidents, and AI/MCP resources (read).
- **Cannot:** any create/update/delete (write) or admin operation, and — notably —
  **API token management** (listing/creating/deleting tokens is admin-only).

### Create an Org-wide Read token

**Dashboard**

1. Open **Settings → API Tokens** and start creating a token.
2. Set the **Organization role** to **Org-wide Read**.
3. Create the token and copy the secret.

**API** — the token carries an organization scope with the `org-wide-read` role:

```jsonc
// POST /organizations/{id}/integrations/... (Add API token)
{
  "name": "ci-readonly",
  "scopes": [
    { "resource": "org", "identifier": "<orgId>", "role": "org-wide-read" }
  ]
}
```

### Scope rules

An `org-wide-read` **org** scope automatically **synthesizes read access to all
environments and resource groups** — you do not need to add explicit `env`/`grp` scopes.
The control plane also normalizes scopes so the org-wide-read org scope **dominates** any
other scope for that org (it can't be silently widened).

If you do combine scopes, they must stay read-only. The API rejects invalid combinations:

- `org-wide-read token cannot be combined with non-org-wide-read organization scopes`
- `org-wide-read organization scope only supports read environment scopes`
- `org-wide-read organization scope only supports read resource group scopes`
- `org-wide-read organization scope only supports read artifact scopes`

### Seat usage

An Org-wide Read token counts against **read-only seats**, not full (write) user seats.

---

## 2. Read-only cap for users (`maxRole`)

The **read-only cap** sets a per-member *ceiling* on effective permissions. When a member
is capped to read, their effective role on every environment and resource group is
reduced to **read**, regardless of:

- direct environment/group roles they were granted,
- roles inherited from team membership, and
- the org **admin/owner** bypass (a capped admin is still limited to read).

Effective role = **min(granted role, cap)**. This is enforced everywhere access is
checked, so you can lock a member down to read without editing each individual grant —
useful for auditors, temporary read-only access, or revoking write access in one place.

### Set the cap

**Dashboard** — toggle **Read-only capped** in any of:

- **Invite** a member — *Settings → Members → invite* (the cap is stored on the invite and
  applied when the invite is accepted).
- **Edit a pending invite** — *Members → Invites → edit*.
- **Edit an existing member** — *Members → ⋯ → edit member*.

Capped members show a **Read-only** tag in the Members list, Team members, and
Collaborator lists. A team's collaborator row also shows how many of its members are
capped, e.g. `… | 2 read-only capped`.

**API** — `maxRole` travels through the member and invite flows:

```bash
# Invite a member capped to read-only
curl -X POST -H "Authorization: Bearer $TK_TOKEN" -H "Content-Type: application/json" \
  -d '{"emails":["auditor@acme.com"],"role":"member","maxRole":"read"}' \
  https://$TK_API/organizations/$ORG_ID/invites

# Update an existing member to read-only capped
curl -X PUT -H "Authorization: Bearer $TK_TOKEN" -H "Content-Type: application/json" \
  -d '{"role":"member","maxRole":"read"}' \
  https://$TK_API/organizations/$ORG_ID/members/auditor@acme.com

# Remove the cap: send an empty maxRole
#   -d '{"role":"member","maxRole":""}'
```

The dashboard exposes the cap as a binary **read-only** toggle (`maxRole: "read"` or
empty). The API additionally accepts `run`, `write`, or `admin` as the ceiling value if
you need a higher cap; an empty value means **no cap**.

### Visibility

The collaborator/member APIs expose two read-only fields:

- `maxRole` — the cap on an individual user collaborator (e.g. `"read"`).
- `readOnlyCappedCount` — the number of members in a team whose permissions are capped to
  read-only.

### Seat usage

A capped member counts as a **read-only seat** even if they still carry stale `write`
grants from before the cap was applied — the cap, not the stale grant, determines the
seat type.

---

## Choosing between them

- Need a **machine identity that can read the whole org**? → issue an **Org-wide Read**
  API token.
- Need to **restrict a person** (including an admin) to read-only without touching each
  grant? → apply the **read-only cap** to that member/invite.

Both keep the user/identity on a **read-only seat** rather than consuming a full seat.
