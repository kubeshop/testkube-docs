---
title: Work with a GitLab repository
slug: /articles/ai-test-creation-gitlab
---

# Work with a GitLab repository

Connect GitLab to import an existing repository into AI Test Creation, author tests, and manually push changes to a branch for review.

You need AI Test Creation and GitLab integration enabled in Testkube. A Testkube organization Admin or Owner configures the connection and selects the repositories the organization can use.

If the GitLab settings page is unavailable, ask your Testkube administrator to enable the integration. Self-managed instances must also be reachable and permitted by your Testkube installation.

## 1. Connect with OAuth (recommended)

Use a group-owned OAuth application so your team manages the application in GitLab. OAuth is available on GitLab.com Free and on self-managed GitLab. Testkube renews OAuth access tokens automatically.

1. In Testkube, open **Organization Management → GitLab → Connect GitLab** and select **OAuth**.
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
8. After returning to Testkube, enable the repositories the organization should be allowed to use.

The scopes allow Testkube to discover repositories (`read_api`) and clone, pull, and push over HTTPS (`write_repository`). The broader `api` scope is unnecessary for this flow. See [GitLab OAuth application setup](https://docs.gitlab.com/integration/oauth_provider/#create-a-group-owned-application) and [OAuth availability](https://docs.gitlab.com/api/oauth2/).

The group owns the application, but the connection uses the authorizing user's permissions. Application ownership does not restrict access to that group's repositories; select the repositories Testkube can use in its GitLab settings. GitLab's branch protection and user permissions still apply.

### Alternative: connect with an access token

If you cannot create or use an OAuth application, connect with an access token instead.

Choose a token for the repositories you want to connect:

| Token                 | Use it for                                | Create it in GitLab                                         |
| --------------------- | ----------------------------------------- | ----------------------------------------------------------- |
| Group access token    | Repositories in a group and its subgroups | Group → **Settings → Access tokens**                        |
| Project access token  | One project                               | Project → **Settings → Access tokens**                      |
| Personal access token | Repositories your user account can access | Avatar → **Edit profile → Access → Personal access tokens** |

Group and project tokens use a GitLab bot identity. On **GitLab.com**, they require Premium or Ultimate; on **GitLab Self-Managed**, they are available with any license. See GitLab's [group token](https://docs.gitlab.com/user/group/settings/group_access_tokens/) and [project token](https://docs.gitlab.com/user/project/settings/project_access_tokens/) documentation.

Create a token with a descriptive name, an expiration date, and these scopes:

- **`read_api`** — list repositories and read their metadata.
- **`write_repository`** — clone, pull, and push using Git over HTTPS. This includes repository read access; a separate `read_repository` scope is unnecessary.

For a group or project token, select the **Developer** role to push to ordinary branches. Protected-branch rules still apply. For a personal token, choose **Legacy token** if GitLab offers a token-type choice. Copy the generated token before leaving the page.

The broader `api` scope is unnecessary for this import and push flow. See [GitLab token scopes](https://docs.gitlab.com/security/tokens/access_token_scopes/).

1. Open your organization's **GitLab** settings, select **Connect GitLab**, and choose **Use an access token**.
2. Enter a **Connection name** and **GitLab instance URL**: `https://gitlab.com`, or your self-managed GitLab HTTPS URL.
3. Paste the token into **Access token** and select **Connect with token**.
4. Enable the repositories Testkube should be allowed to use.

## 2. Import, author, and push

From **Test Catalog**, start a task such as:

```text
Import my GitLab repository, review its existing tests, and help me add a test.
```

In **Set up Git repository**, choose **GitLab** if a provider selector is shown, select the repository, and check **Branch/ref**. Testkube selects the connection automatically.

**Test directory (optional)** is a folder inside the repository, such as `tests` or `e2e`. Leave it empty to use the repository root. Select **Set up & Continue**.

Ask the AI to make a focused change, review the files, and run the tests. When ready, select **Push changes**, review the publishing branch and commits, then select **Push**. Open the GitLab merge request link to create a merge request and follow your team's review process. Pushing does not merge changes into the target branch.

If a repository is missing, check the authorizing user's or access token's GitLab permissions and the repositories enabled in Testkube's GitLab settings. Use **Reconnect** if an OAuth connection needs authorization again, or **Replace token** if an access token expires.
