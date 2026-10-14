---
title: Work with a GitLab repository
slug: /articles/ai-test-creation-gitlab
---

# Work with a GitLab repository

Connect GitLab to import an existing repository into AI Test Creation, author tests, and manually push changes to a branch for review.

You need AI Test Creation and GitLab integration enabled in Testkube. A Testkube organization Admin or Owner configures the connection and selects the repositories the organization can use.

## 1. Create an access token

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

## 2. Connect GitLab in Testkube

1. Open your organization's **GitLab** settings and select **Connect GitLab**.
2. Enter a **Connection name** and **GitLab instance URL**: `https://gitlab.com`, or your self-managed GitLab HTTPS URL.
3. Paste the token into **Access token** and select **Connect with token**.
4. Enable the repositories Testkube should be allowed to use.

If the GitLab settings page is unavailable, ask your Testkube administrator to enable the integration. Self-managed instances must also be reachable and permitted by your Testkube installation.

## 3. Import, author, and push

From **Test Catalog**, start a task such as:

```text
Import my GitLab repository, review its existing tests, and help me add a test.
```

In **Set up Git repository**, choose **GitLab**, select the repository, and check **Branch/ref**. Testkube selects the connection automatically.

**Test directory (optional)** is a folder inside the repository, such as `tests` or `e2e`. Leave it empty to use the repository root. Select **Set up & Continue**.

Ask the AI to make a focused change, review the files, and run the tests. When ready, select **Push changes**, review the publishing branch and commits, then select **Push**. Open the GitLab merge request link to create a merge request and follow your team's review process. Pushing does not merge changes into the target branch.

If a repository is missing, check both the token's GitLab access and the repositories enabled in Testkube's GitLab settings. If the token expires, use **Replace token** on the connection.
