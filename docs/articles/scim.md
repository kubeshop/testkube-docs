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

### Organization Roles

Example:
```json
{
  "roles": [
    "urn:testkube:role:organization:my-org:admin"
  ]
}
```

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

Entitlements assign users or teams to environments or resource groups.

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

> 💡 If a resource, configured by an entitlement, doesn’t exist, Testkube creates it automatically.

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

### Roles not applied
- Verify URN format (colons, segments)
- Match environment/resource names exactly (case-sensitive)
- Check wildcard usage

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