# Centralized GitHub App

The centralized GitHub App lets a single Testkube organization authenticate to GitHub
through **one shared Testkube GitHub App** instead of configuring a separate app or
personal access token per repository. One Testkube organization can connect to
**multiple GitHub organizations** and clone private repositories across all of them
from your Test Workflows — no long-lived secrets stored in workflow specs.

- **What you connect:** GitHub organizations (each maps to a GitHub App *installation*).
- **What you get:** short-lived, per-repository GitHub App installation tokens minted
  on demand when a Test Workflow clones a repo from a connected org.
- **Who can manage it:** organization **Admins/Owners** (see [Permissions](#permissions)).

---

## How it works

```
TestWorkflow (content.git: https://github.com/<connected-org>/<repo>)
        │
        ▼
Testkube Agent  ──(GetGitHubToken, repo URL)──►  Control plane
        ▲                                              │
        │                                              │ 1. derive org from the authenticated agent
        │                                              │ 2. find the installation for <connected-org>
        │                                              │ 3. verify the installation can access <repo>
        └──────────  short-lived token  ◄─────────────┘ 4. mint an installation access token
        │
        ▼
git clone with the installation token
```

The control plane never trusts a caller-supplied organization id — the organization is
derived from the authenticated agent, and the installation token is scoped to the
specific repository being cloned.

**Token resolution order** (first match wins):

1. The org's connected installations (`githubInstallations`) — the installation whose
   GitHub org matches the repository's owner.
2. The instance-level static installation id(s) (`GITHUB_INSTALLATION_ID`), if configured.

---

## Prerequisites

### Testkube Cloud
The Testkube GitHub App is already provisioned for you. Skip to
[Connect a GitHub organization](#connect-a-github-organization).

### Self-hosted / Enterprise
A platform admin must configure the GitHub App once, via Helm
(`testkube-cloud-api` → `api.github`):

| Helm value (`api.github.*`) | Env var | Description |
| --- | --- | --- |
| `appId` | `GITHUB_APP_ID` | Numeric GitHub App ID. |
| `appSlug` | `GITHUB_APP_SLUG` | App slug used to build the installation URL (`github.com/apps/<slug>`). |
| `privateKeyPath` | `GITHUB_PRIVATE_KEY_FILE` | Path to the mounted GitHub App private key (`.pem`). |
| `installationId` | `GITHUB_INSTALLATION_ID` | Optional. Comma-separated static installation id(s) used as a fallback. |

```yaml
# values.yaml (excerpt)
testkube-cloud-api:
  api:
    github:
      appId: '123456'
      appSlug: 'my-testkube-app'
      privateKeyPath: '/tmp/github/private-key.pem'
      # installationId: '987654'   # optional static fallback
```

---

## Connect a GitHub organization

### Option A — Dashboard (recommended)

1. Open **Settings → GitHub** in the organization management area.
2. Click **Connect**. You are redirected to GitHub to install the Testkube GitHub App.
3. On GitHub, choose the **organization** to install into and select **All repositories**
   or the specific repositories Testkube should access, then **Install**.
4. GitHub redirects you back to Testkube and the installation is recorded automatically.
   The connected org appears in the **GitHub** tab with its **Installation ID**.

To connect additional GitHub orgs, click **Connect** again and install into another org.

#### Add an existing installation manually

If the app is already installed on a GitHub org, you can register it without re-running
the install flow:

1. In **Settings → GitHub**, click **Add GitHub Organization**.
2. Enter the **GitHub Organization** name and its **Installation ID**
   (GitHub → Org → *Settings → GitHub Apps → Configure*; the installation ID is the
   trailing number in the configure URL, e.g. `.../installations/12345678`).
3. Submit. The org is added to the list (a duplicate org returns a conflict).

### Option B — API

All endpoints are scoped to the organization id and require a Bearer token with org
admin privileges.

```bash
# 1. Get a signed installation URL, then open it in a browser to install the app
curl -H "Authorization: Bearer $TK_TOKEN" \
  https://$TK_API/organizations/$ORG_ID/integrations/github/connect
# -> { "connectUrl": "https://github.com/apps/<slug>/installations/new?state=..." }

# 2. List connected installations
curl -H "Authorization: Bearer $TK_TOKEN" \
  https://$TK_API/organizations/$ORG_ID/integrations/github/installations

# 3. Add an installation manually (409 if the GitHub org is already connected)
curl -X POST -H "Authorization: Bearer $TK_TOKEN" -H "Content-Type: application/json" \
  -d '{"githubOrg":"my-github-org","installationId":12345678}' \
  https://$TK_API/organizations/$ORG_ID/integrations/github/installations

# 4. Remove a connected org
curl -X DELETE -H "Authorization: Bearer $TK_TOKEN" \
  https://$TK_API/organizations/$ORG_ID/integrations/github/installations/my-github-org
```

| Method & path | Operation |
| --- | --- |
| `GET /organizations/{id}/integrations/github/connect` | Get signed installation URL |
| `GET /organizations/{id}/integrations/github/installations` | List connected installations |
| `POST /organizations/{id}/integrations/github/installations` | Add an installation manually |
| `DELETE /organizations/{id}/integrations/github/installations/{githubOrg}` | Remove a connected org |

---

## Use it in a Test Workflow

Once a GitHub org is connected, reference its repositories by URL in `content.git`.
**Do not** put a token or username in the spec — when the repository belongs to a
connected GitHub org and no credentials are supplied, the Testkube agent automatically
requests a short-lived installation token scoped to that repo and uses it to clone.

```yaml
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: tests-from-private-repo
spec:
  content:
    git:
      # Repository owned by a connected GitHub organization
      uri: https://github.com/my-github-org/my-private-repo
      revision: main
      # Optional: only fetch part of the repo
      paths:
        - tests/e2e
  container:
    workingDir: /data/repo
  steps:
    - shell: ls -la && ./run-tests.sh
```

Cloning private repos across **multiple** connected GitHub orgs works the same way —
each repo URL resolves to the installation for its owning org:

```yaml
spec:
  content:
    git:
      uri: https://github.com/another-connected-org/shared-tests
      revision: v1.2.3
```

> Tip: the same mechanism applies anywhere a workflow resolves a `github.com` URL for a
> connected org (e.g. workflow `content.git`), so private sources clone without embedding
> credentials.

---

## Permissions

Managing the GitHub integration (connect / add / remove installations) requires the
organization **Admin** or **Owner** role. Admins whose effective permissions are capped
to read-only (via the `maxRole` cap) cannot modify the integration. Reading the list of
connected installations follows the same admin requirement.

---

## Troubleshooting

| Symptom | Cause / fix |
| --- | --- |
| `GitHub App has not been configured.` | The instance has no GitHub App configured. Set `api.github.appId`, `appSlug`, and the private key (self-hosted/Enterprise). |
| Connect button does nothing / no install URL | `appSlug` is not set, so the installation URL cannot be built. |
| Clone fails with auth / not-found on a private repo | The repo's GitHub org isn't connected, **or** the installation wasn't granted access to that repository. Re-run **Connect** and grant the repo, or add the repo to the installation in GitHub. |
| `409 Conflict` when adding an org | That GitHub org is already connected (matching is case-insensitive). |
| Wrong/None token for a repo | The repository owner doesn't match any connected installation and no static `GITHUB_INSTALLATION_ID` fallback is configured. |

---

## Notes

- Installation tokens are **short-lived** and minted per clone; nothing long-lived is
  stored in your Test Workflow specs.
- A connection is per **Testkube organization**; connecting an org does not grant other
  Testkube orgs access to it.
- Removing a connected org stops Testkube from using that installation immediately;
  in-flight workflows that already obtained a token are unaffected.
