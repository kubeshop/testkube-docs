---
title: Work with a GitLab repository
slug: /articles/ai-test-creation-gitlab
---

# Work with a GitLab repository

Connect GitLab to import an existing repository into AI Test Creation, author tests, and manually push changes to a branch for review.

You need AI Test Creation and GitLab integration enabled in Testkube. A Testkube organization Admin or Owner configures the connection and selects the repositories the organization can use.

If the GitLab settings page is unavailable, ask your Testkube administrator to enable the integration. Self-managed instances must also be reachable and permitted by your Testkube installation.

## 1. Connect with OAuth (recommended)

Use a group-owned OAuth application so your team manages the application in GitLab. Testkube renews OAuth access tokens automatically.

1. In Testkube, open the organization selector in the top bar and choose **Organization Management**. Select **Git** in the sidebar, open the **GitLab** tab, then select **Connect GitLab → OAuth**.
2. Copy the displayed **Callback URL**. Keep this form open.
3. In GitLab, open your **group → Settings → Applications** and select **Add new application**.
4. Configure the application:

   | Field            | Value                                           |
   | ---------------- | ----------------------------------------------- |
   | **Name**         | A descriptive name, such as `Testkube`          |
   | **Redirect URI** | The exact **Callback URL** copied from Testkube |
   | **Confidential** | Checked                                         |
   | **Scopes**       | `read_api` and `write_repository`               |

5. Select **Save application** and copy the **Application ID** and **Secret**. Store the secret securely when GitLab displays it.
6. Return to Testkube. Enter a **Connection name**, your **GitLab instance URL** (`https://gitlab.com` or your self-managed HTTPS URL), the **Application ID**, and the **Client secret**.
7. Select **Connect with OAuth**. Sign in to GitLab with the account whose repository access you want to use, then authorize the application.
8. After returning to Testkube, follow [Enable repositories](#2-enable-repositories) below.

The scopes allow Testkube to discover repositories (`read_api`) and clone, pull, and push over HTTPS (`write_repository`). The broader `api` scope is unnecessary for this flow. See [GitLab OAuth application setup](https://docs.gitlab.com/integration/oauth_provider/#create-a-group-owned-application) and [OAuth availability](https://docs.gitlab.com/api/oauth2/).

Sign in with a GitLab account that can access the repositories you want to use. Pushes follow that account's permissions and GitLab's branch protection rules.

### Alternative: connect with an access token

If you cannot create or use an OAuth application, connect with an access token instead.

Choose a token for the repositories you want to connect:

| Token                 | Use it for                                | Create it in GitLab                                         |
| --------------------- | ----------------------------------------- | ----------------------------------------------------------- |
| Group access token    | Repositories in a group and its subgroups | Group → **Settings → Access tokens**                        |
| Project access token  | One project                               | Project → **Settings → Access tokens**                      |
| Personal access token | Repositories your user account can access | Avatar → **Edit profile → Access → Personal access tokens** |

Create a token with a descriptive name, an expiration date, and the scopes listed in Testkube's **Access token** form:

- **`read_api`** — list repositories and read their metadata.
- **`read_repository`** — clone and pull repository contents.
- **`write_repository`** — push changes using Git over HTTPS.

For a group or project token, select the **Developer** role to push to ordinary branches. Protected-branch rules still apply. For a personal token, choose **Legacy token** if GitLab offers a token-type choice. Copy the generated token before leaving the page.

The broader `api` scope is unnecessary for this import and push flow. See [GitLab token scopes](https://docs.gitlab.com/security/tokens/access_token_scopes/).

1. Open **Organization Management → Git → GitLab**, select **Connect GitLab**, and choose **Access token**.
2. Enter a **Connection name** and **GitLab instance URL**: `https://gitlab.com`, or your self-managed GitLab HTTPS URL.
3. Paste the token into **Access token** and select **Connect with token**.
4. Follow [Enable repositories](#2-enable-repositories) below.

## 2. Enable repositories

Connecting GitLab does not automatically enable its repositories. You must manually enable each repository you want to use in Test Creation. This applies to both OAuth and access-token connections.

1. Open **Organization Management → Git → GitLab**. If you have multiple connections, select the one you just added under **Connection**.
2. Check the selected connection's **GitLab instance** and **Access**. To push changes, **Access** must show **Read and write**. OAuth connections show **Token renewal: Automatic**; access-token connections show **Expires**.
3. Under **Repositories**, find the repository you want to use. Use the search field to filter the list, or select **Refresh** to reload it after repository access changes in GitLab.
4. In the **Repository access** column, turn on the repository's switch and confirm it shows **Enabled**. The change is saved automatically.
5. Repeat for each repository you want to make available.

Enabled repositories appear in Test Creation's repository picker. Repositories left **Disabled** are unavailable through this connection.

## 3. Import, author, and push

Select your environment in the top bar and open **Test Catalog**. Under **Or start from**, select **Git repository** to open **Create a Test Bundle**.

1. In **Details**, enter a **Name** and an optional **Description**, then select **Next**.
2. In **Repository**, choose **GitLab** under **Git provider** if the selector is shown. Select an enabled repository and check **Target branch/ref**, then select **Next**. Testkube selects the connection automatically.
3. In **Context**, optionally add a **Title** and **Context** with background or guidance for the AI. You can add more context later in the Test Bundle's settings.
4. Select **Create Test Bundle**.

A repository is set up once per Test Bundle and cannot be changed later. Confirm the repository and target branch before creating the bundle.

In the bundle's chat, start with a task such as:

```text
Review this repository's existing tests and help me add a test.
```

Ask the AI to make a focused change, review the files, and run the tests. When ready, select **Push changes**, review the publishing branch and commits, then select **Push**. Open the GitLab merge request link to create a merge request and follow your team's review process. Pushing does not merge changes into the target branch.

## 4. Manage the connection

Open **Organization Management → Git → GitLab** and select the connection under **Connection**. Open **Connection actions** (the three-dot menu in the Connection card) to maintain that connection:

- **Reconnect** — authorize an OAuth connection again when its authorization expires or is revoked.
- **Replace token** — provide a new access token when an access-token connection's token expires or is revoked.
- **Refresh connections** — reload the connection list and status.
- **Disconnect** — remove the selected connection from Testkube and stop repository access through it. Repositories in GitLab are preserved.

The menu shows **Reconnect** for OAuth connections and **Replace token** for access-token connections. Reconnecting or replacing a token stops active Git transfers and preserves your selected repositories.

If a repository is missing, check the authorizing user's or access token's GitLab permissions. Under **Repositories**, select **Refresh**, then confirm the repository's **Repository access** switch is **Enabled**. If a connection is missing or its status looks out of date, use **Connection actions → Refresh connections**.
