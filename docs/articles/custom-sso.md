# Custom SSO

[Testkube Cloud Control Plane](https://app.testkube.io) supports login via GitHub, GitLab and email magic links.

If you want a custom SSO solution for your organization or domain, reach out to [us](https://testkube.io/contact).

## IDP-initiated login

If your identity provider supports IDP-initiated login, you can use it to log in to Testkube SaaS directly from your IDP dashboard.

### Okta

Follow these steps to configure Okta with Testkube using **OIDC (OpenID Connect)**:

1. **Create a new application integration**
  - In the Okta Admin Console, go to **Applications** → **Applications** → **Create App Integration**.
  - Choose **OIDC – OpenID Connect** as the **Sign-in method**.
  - Select **Single-Page Application** as the **Application type**.

2. **Set up application details**
  - Set the **App integration name** to **Testkube**.
  - Click **Create**.

3. **Configure General Settings**
  - Scroll down to **General Settings** and click **Edit**.
  - Set **Login initiated by** to **Either Okta or App**.
  - Under **Application visibility**, check **Display application icon to users**.
  - For **Login flow**, choose **Redirect to app to initiate login (OIDC Compliant)**.
  - Set the **Initiate login URL** to:
    ```
    https://app.testkube.io/login/idp-initiated?c=<domain>&o=<organization-slug>
    ```

  - Replace `<domain>` with your company domain, removing special characters like `.` and `-`.
    - Example: `example-domain.com` → `exampledomaincom`
  - (Optional) Add the `o=<organization-slug>` query parameter if you want users to land on a specific organization.

4. **Assign users**
  - Go to the **Assignments** tab.
  - Assign the application to your desired users or groups.

---