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

## Role Management

Testkube uses **URNs (Uniform Resource Names)** to define roles. A role URN specifies what permissions a user has for a particular resource.

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

> 💡 If the environment doesn’t exist, Testkube creates it automatically.

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
