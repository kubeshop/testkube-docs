# SCIM Integration Guide

## Overview

SCIM (System for Cross-domain Identity Management) is a standard protocol that automates user and group management between your identity provider (IdP) — like Okta or Azure AD — and Testkube.  
With SCIM, user provisioning and deprovisioning happen automatically:

- When a user is added to your organization in your IdP, they immediately receive access to Testkube.
- When a user is removed from your IdP, their Testkube access is revoked right away.

This removes the need for manual account management and ensures your organization stays in sync.

### Key Benefits

- **Automated provisioning** – Users and groups are created and updated automatically.
- **Team synchronization** – IdP groups map directly to Testkube teams.
- **Granular access control** – Assign permissions to organizations, environments, and resource groups.
- **Security compliance** – Automatic deprovisioning keeps your org secure when users leave.

---

## Quick Start

If you are using the on-prem version of Testkube, ensure SCIM is enabled in your deployment (see [Configuration Reference](#on-prem) below).

### Step 1: Enable SCIM in Testkube

SCIM is configured per organization.

1. In the Testkube dashboard, go to **Organization Management → Product Features**.
2. Enable **SCIM**.
3. Copy the **SCIM API token** that is generated — keep it safe, you’ll need it for authentication.
4. Note your organization’s **SCIM endpoint URL**:
   ```
   https://<testkube-domain>/organizations/<org_id>/scim
   ```

### Step 2: Configure Your Identity Provider

In your IdP’s SCIM configuration:

- **Base URL**:
  ```
  https://<testkube-domain>/organizations/<org_id>/scim
  ```
- **Authentication**: Bearer Token (use the SCIM API token from Step 1)

> ⚠️ The SCIM endpoint is organization-specific and will only manage users and teams for that organization.

> ⚠️ Testkube identifies users by email. Map your IdP's `userName` to the user's email address (for example, `userPrincipalName` in Entra ID, or the Email field in Okta). If `userName` is set to anything else, Testkube can't reliably match users, and you end up with duplicate accounts or updates that silently do nothing.

> 📘 The settings above are enough to connect. For full step-by-step setup — including how to assign roles and entitlements and which response format to use — follow the guide for your provider: [Okta](#okta) or [Microsoft Entra ID (Azure AD)](#microsoft-entra-id-azure-ad).

---

## Manage Permissions in Testkube

When SCIM is enabled, roles and resource assignments are controlled by your IdP via the `roles` and `entitlements` custom attributes.
The **Manage permissions in Testkube** checkbox lets admins manage these directly in Testkube instead, while SCIM still handles user and team provisioning.

Enable this in **Organization Management → Product Features** after enabling SCIM.

With this option enabled:
- SCIM still provisions/deprovisions users and syncs team membership.
- `roles` and `entitlements` attributes from SCIM requests are ignored.
- Admins assign organization roles, environment access, and resource group access in the Testkube dashboard.

This is useful in cases where custom attributes `roles` and `entitlements` cannot be defined on the IdP side.

---

## Role Management

Testkube uses **URNs (Uniform Resource Names)** to define roles. A role URN specifies what permissions a user has for a particular resource.

All of the settings below are configured on your Identity Provider side, so each user should have a `roles` attribute containing an array of strings.

> 💡 Always reference environments and resource groups by their **ID or slug**, never their display name. A URN built from a display name won't match an existing resource, so the role is dropped. For entitlements it's worse: Testkube creates a brand-new resource with that name instead of using the one you meant.

### Organization Roles

Example:
```json
{
  "roles": [
    "urn:testkube:role:organization:my-org:admin"
  ]
}
```

Here `my-org` is your organization's ID or slug. Because the SCIM endpoint already targets a single organization, you can use `*` instead to mean "this organization" (see [Wildcards](#wildcards) below).

Available roles:
- **owner** – Full control over the organization and all resources
- **admin** – Manage organization settings, members, and teams
- **biller** – Manage billing and subscriptions
- **member** – Basic access without administrative privileges

#### Wildcards

You can use `*` for organization-wide roles:

```json
{
  "roles": [
    "urn:testkube:role:organization:*:admin"
  ]
}
```

This grants `admin` in the current organization.

---

### Environment Roles

Example:
```json
{
  "roles": [
    "urn:testkube:role:environment:production:admin",
    "urn:testkube:role:environment:staging:write",
    "urn:testkube:role:environment:development:read"
  ]
}
```

Available roles:
- **admin** – Full control of the environment
- **write** – Run tests, edit configs, view results
- **read** – View-only access

#### Wildcards

Grant the same role in all environments:

```json
{
  "roles": [
    "urn:testkube:role:environment:*:read"
  ]
}
```

Useful for:
- Auditors (read-only across all envs)
- Managers (visibility into all envs)
- New team members (default safe access)
- Service accounts (automation across environments)

---

### Resource Group Roles

Example:
```json
{
  "roles": [
    "urn:testkube:role:resourcegroup:infrastructure-tests:admin",
    "urn:testkube:role:resourcegroup:api-tests:write"
  ]
}
```

#### Wildcards

```json
{
  "roles": [
    "urn:testkube:role:resourcegroup:*:write"
  ]
}
```

---

### Role Resolution Priority

If multiple roles could apply, Testkube uses this order:

1. Exact ID match (highest priority) – `environment:env-123:admin`
2. Slug match – `environment:production:write`
3. Wildcard – `environment:*:read`
4. System default (lowest) – usually `member` or `read`

Example:
```json
{
  "roles": [
    "urn:testkube:role:environment:*:read",
    "urn:testkube:role:environment:production:admin",
    "urn:testkube:role:organization:*:member"
  ]
}
```

Result: User has read access everywhere, but full admin in `production`.

---

## Entitlements

Entitlements assign users or teams to environments or resource groups. An entitlement grants membership with read access. For more than read access, also assign an environment or resource group role from [Role Management](#role-management).

All of the settings below are configured on your Identity Provider side, so each user should have an `entitlements` attribute containing an array of strings.

Example:
```json
{
  "entitlements": [
    "urn:testkube:entitlement:environment:staging",
    "urn:testkube:entitlement:environment:production",
    "urn:testkube:entitlement:resourcegroup:api-tests"
  ]
}
```

> 💡 If an entitlement points to an environment or resource group that doesn't exist yet, Testkube creates it. To attach to an existing resource instead of creating a duplicate, reference it by its ID or slug, not its display name.

---

## Roles and Entitlements Format

Identity providers don't agree on how to send multi-valued attributes like `roles` and `entitlements`. Testkube understands both shapes:

| Shape | Example | Used by |
|-------|---------|---------|
| Simple (default) | `["urn:testkube:role:organization:*:admin"]` | Okta and most providers |
| Complex ([RFC 7643](https://datatracker.ietf.org/doc/html/rfc7643#section-2.4)) | `[{"value": "urn:testkube:role:organization:*:admin"}]` | Microsoft Entra ID |

Testkube accepts **both shapes on input**, so creating and updating users always works. The setting only changes the shape Testkube uses in its **responses** — the shape your IdP reads back when it imports users or reconciles state.

**Pick the shape your IdP expects**, because the IdP parses Testkube's responses against its own schema and the wrong one breaks that read-back:

- **Okta** expects strings, so keep the default (simple). If you switch an Okta organization to complex, Okta's user import fails with `Invalid value data type` — it receives objects where it expects strings.
- **Entra ID** expects objects, so turn complex on. With the simple shape, Entra can't reconcile what it reads back against what it provisioned.

Turn complex on under **Organization Management → Product Features → SCIM** by checking **Use RFC 7643 complex format for roles & entitlements**. The setting is per organization, so point Okta at a simple-format organization and Entra at a complex-format one.

Example response with complex format on:

```json
{
  "roles": [
    {"value": "urn:testkube:role:organization:*:admin"}
  ],
  "entitlements": [
    {"value": "urn:testkube:entitlement:environment:staging"}
  ]
}
```

---

## Team (Group) Management

SCIM groups map directly to Testkube teams.

Example:
```json
{
  "schemas": ["urn:ietf:params:scim:schemas:core:2.0:Group"],
  "displayName": "QA Team",
  "members": [
    {"value": "user-id-1"},
    {"value": "user-id-2"}
  ],
  "roles": [
    "urn:testkube:role:environment:*:write",
    "urn:testkube:role:resourcegroup:*:write"
  ]
}
```

- All team members inherit the team’s roles.
- Adding/removing a user in the IdP updates their access in Testkube automatically.

---

## Supported Operations

Testkube supports **SCIM 2.0** with these operations:

### User Operations
- **CREATE** – Add new users
- **READ** – Get user info
- **UPDATE (PUT)** – Replace all user data
- **UPDATE (PATCH)** – Update specific attributes
- **DELETE** – Remove users

### Group Operations
- **CREATE** – Create new teams
- **READ** – Get team info
- **UPDATE (PUT)** – Replace all team data
- **UPDATE (PATCH)** – Add/remove team members
- **DELETE** – Delete teams

---

## Configuration Reference

### SaaS (Cloud)

- Enable SCIM in **Organization Management → Product Features**
- Copy your API Token
- Endpoint format:
  ```
  https://<testkube-domain>/organizations/<org_id>/scim
  ```

### On-Prem

Enable SCIM in your deployment.

**Helm values:**
```yaml
testkube-cloud-api:
  scim:
    enabled: true
```

**Environment variable:**
```env
SCIM_SERVER_ENABLED=true
```

Afterwards enable SCIM integration in the desired organization via the dashboard.

---

## Troubleshooting

### Users cannot log in
- Ensure user is provisioned via SCIM
- Check email matches IdP credentials
- Review IdP provisioning logs

### Roles or entitlements not applied
- Make sure **Manage permissions in Testkube** is turned off. While it's on, Testkube ignores the `roles` and `entitlements` attributes from SCIM.
- Check the URN format: `urn:testkube:role:<scope>:<id-or-slug>:<role>` and `urn:testkube:entitlement:<scope>:<id-or-slug>`.
- Reference environments and resource groups by ID or slug, not display name.
- Look for `ignoring all SCIM roles: no value matched the expected format` in the control plane API logs. The warning lists the values it rejected and the format it expected, which usually points straight at a malformed URN.
- Entra ID only: if a role comes through as a friendly name like `Admin` instead of the URN, the app role's display name is still the friendly name. Entra sends the display name, not the value, so set the display name to the URN.

### SCIM request failures
- Confirm bearer token is correct
- Review SCIM server logs in control plane api
- Verify endpoint is accessible from your network

---

## Additional Resources

- [SCIM RFC 7644 Specification](https://datatracker.ietf.org/doc/html/rfc7644)

---

## Integration Guides

### Okta

This guide walks you through integrating Okta with Testkube for **SCIM provisioning**.

### Prerequisites
- A Testkube Organization with SCIM enabled (SCIM Server Endpoint Bearer Token available in Testkube UI).
- Admin access to your Okta tenant.

#### Step 1. Log in to Okta Admin Portal
1. Go to [Okta Admin Console](https://login.okta.com/).
2. Use an administrator account to sign in.

#### Step 2. Create a New Application Integration
1. In the left sidebar, navigate to **Applications** → **Applications**.
2. Click **Create App Integration**.
3. Choose **SWA – Secure Web Authentication**.
4. Set the **Application username** to **Email**.
5. Save the new application.

#### Step 3. Enable SCIM Provisioning
1. Open the newly created application in Okta.
2. Go to **General** → click **Edit**.
3. Under **App Settings**, enable **SCIM Provisioning**.
4. Save changes.

#### Step 4. Configure SCIM Connector
1. Navigate to the **Provisioning** tab.
2. Click **Integration** then **Edit**.
3. Enter the following details:
  - **SCIM connector base URL** → copy from the Testkube SCIM settings.
  - **Authentication Mode** → select **HTTP Header**.
  - **Bearer Token** → paste the token from Testkube.
4. Select all supported provisioning actions (Import New Users and Profile Updates, Push New Users, Push Profile Updates, Push Groups, Import Groups).
5. Set **Unique identifier field for users** to **email**.

#### Step 5. Test Connector Configuration
1. Click **Test Connector Configuration**.
2. The test should be successful. If not, verify the SCIM URL and token from Testkube.

#### Step 6. Save & Finish
1. Save the configuration.
2. SCIM provisioning between Okta and Testkube is now active.
3. You can now assign users and groups to this application, and they will be provisioned into Testkube automatically.

### Defining Roles and Entitlements in Okta

When integrating Okta with Testkube via SCIM, you may want to assign additional `roles` (permissions) and `entitlements` (resource memberships) to users or groups.
This is done by defining extra attributes in Okta and mapping them to Testkube.

#### Step 1. Add Custom Attributes in Okta
1. In the **Okta Admin Console**, go to **Directory** → **Profile Editor**.
2. Select the **SCIM Application** you created.
3. Click **Add Attribute**.
4. Create the following attributes:
   * **roles** (type: string, array supported)
   * **entitlements** (type: string, array supported)

> 💡 When creating the additional attributes, make sure the `external namespace` is set to `urn:ietf:params:scim:schemas:core:2.0:User`.

> 💡 You can also edit an individual user under **Directory** → **People** → **Select a User** → **Profile** → **Edit Attributes** and 
> directly add these fields there for testing.

#### Step 2. Map Attributes to the SCIM App
1. Still in **Profile Editor**, select the **Mappings** tab.
2. Ensure the new attributes are mapped:
   * From **Okta User** → **Created SCIM Application**
   * And optionally back from **Created SCIM Application** → **Okta User** (if you want to sync values both ways).
3. Save the mappings.

#### Step 3. Set the Values on Users or Groups
Mapping the attributes only tells Okta where to send them — you still set the actual URN values:

- **Per user:** go to **Directory** → **People**, open a user, then **Profile** → **Edit Attributes**, and set `roles` and `entitlements` to the Testkube URNs (for example, `urn:testkube:role:organization:*:admin` and `urn:testkube:entitlement:environment:staging`).
- **For many users at once:** set the values on an Okta **group**, then push the group to the app so everyone in it inherits the same roles and entitlements.

Okta sends the values to Testkube on the next sync, or right away when you assign the user to the app.

### Microsoft Entra ID (Azure AD)

This guide integrates Microsoft Entra ID with Testkube for **SCIM provisioning**. Entra sends the complex attribute format, so turn on complex format for the organization first (see [Roles and Entitlements Format](#roles-and-entitlements-format)).

#### Prerequisites
- A Testkube Organization with SCIM enabled and **Use RFC 7643 complex format** turned on.
- The organization's SCIM endpoint URL and bearer token from the Testkube UI.
- Admin access to your Entra tenant.

#### Step 1. Create the Enterprise Application
1. In the **Microsoft Entra admin center**, go to **Enterprise applications** → **New application**.
2. Click **Create your own application**, name it (for example, `Testkube SCIM`), and choose **Integrate any other application you don't find in the gallery (Non-gallery)**.

#### Step 2. Connect Provisioning
1. Open the app, go to **Provisioning**, and set **Provisioning Mode** to **Automatic**.
2. Under **Admin Credentials**, enter:
   - **Tenant URL** → your Testkube SCIM endpoint: `https://<testkube-domain>/organizations/<org_id>/scim`
   - **Secret Token** → the Testkube SCIM bearer token.
3. Click **Test Connection**. It should succeed; then save the configuration.

#### Step 3. Match Users by Email
Go to **Provisioning** → **Mappings** → **Provision Microsoft Entra ID Users** and confirm that `userName` is mapped from `userPrincipalName` and is set as the matching attribute. Testkube matches users by email, so this mapping is required.

#### Step 4. Send Roles
Entra builds the `roles` value from a user's **app role assignment**, and it sends the app role's **display name**, not its value. So the display name has to be the Testkube role URN.

1. In **App registrations**, open your app (the non-gallery app you created also appears here), go to **App roles**, and create a role:
   - **Display name** → the Testkube URN, for example `urn:testkube:role:organization:*:admin`
   - **Value** → the same URN
   - **Allowed member types** → Users/Groups
2. Back in the app's **Provisioning** → **Mappings**, click **Add New Mapping**:
   - **Mapping type** → Expression
   - **Expression** → `SingleAppRoleAssignment([appRoleAssignments])`
   - **Target attribute** → `roles[primary eq "True"].value`
3. Go to **Users and groups**, add a user, and assign the app role you created.

#### Step 5. Send Entitlements (optional)
Entra has no built-in source for `entitlements`, and `entitlements` isn't in its default attribute list. To send them, open **Provisioning** → **Mappings** → **Show advanced options** → **Edit attribute list**, add `entitlements`, then map it from a constant value or a directory extension attribute that holds the URN. For most setups, granting environment and resource group access through **roles** (Step 4) is simpler than entitlements.

#### Step 6. Provision
Use **Provision on demand** to push a single user immediately, or **Start provisioning** for the scheduled sync. Confirm the user appears in Testkube with the expected role.