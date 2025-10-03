# SSO Configuration with External OIDC Providers - Advanced Setup

This guide explains how to configure SSO (Single Sign-On) authentication in Testkube On-Prem using external OIDC providers, including direct Okta integration, Azure AD, Auth0, Keycloak, and other OIDC-compatible identity providers.

## Introduction

While Testkube On-Prem includes Dex as a default identity provider, you can also configure it to work directly with external OIDC providers. This approach eliminates the Dex proxy layer and provides direct integration with your existing identity infrastructure.

:::tip
For basic setup using the included Dex with Okta, see our [Basic SSO Configuration guide](/testkube-pro-on-prem/articles/okta-oidc-basic-setup).
:::

## Supported OIDC Providers

Testkube supports any OIDC-compatible identity provider, including:

- **Okta** (direct integration)
- **Azure AD** (with OIDC configuration)
- **Google Workspace** (with OIDC configuration)
- **Auth0** (with OIDC configuration)
- **Keycloak** (with OIDC configuration)
- **External Dex** (externally managed)
- **Any other OIDC-compatible provider**

## When to Use External OIDC Providers

**Advantages:**
- Centralized identity management
- Full control over identity provider configuration
- Reuse of existing infrastructure
- Direct integration without additional proxy layer
- Simplified architecture (no Dex layer)

**When to use this option:**
- You already have a centrally managed identity provider
- You need to share authentication across multiple applications
- You want to eliminate the Dex proxy layer for simplicity
- Compliance requirements that demand full control over the IDP
- You're using enterprise identity solutions

---

## Configuration Overview

The configuration involves:

1. **Disabling the included Dex** in Testkube
2. **Configuring your external OIDC provider** (Okta, Azure AD, etc.)
3. **Pointing Testkube** to your external OIDC issuer
4. **Setting up proper redirect URIs** and client credentials

---

## Okta Direct Integration

### Step 1: Create OIDC Application in Okta

1. Access the Okta Admin Console: `https://<your-domain>.okta.com/admin`

2. Navigate to **Applications** → **Applications** → **Create App Integration**

3. Configure the following values:

   | Field | Value |
   |-------|-------|
   | **Sign-in method** | OIDC - OpenID Connect |
   | **Application type** | Web Application |

4. Click **Next**

### Step 2: Configure Application Details

1. **Application name**: `Testkube On-Prem` (or your preferred name)

2. **Grant types**: Check the following options
   - ☑ Authorization Code
   - ☑ Refresh Token

3. **Sign-in redirect URIs**: 
   ```
   https://<your-testkube-domain>/auth/callback
   ```
   
   :::tip
   Note: For direct integration, the redirect URI points directly to Testkube, not to Dex.
   :::

4. **Sign-out redirect URIs** (optional):
   ```
   https://<your-testkube-domain>
   ```

5. **Controlled access**: Select who can use this application

6. Click **Save**

### Step 3: Obtain Credentials

Copy the **Client ID** and **Client Secret** from the application details page.

### Step 4: Configure Testkube

Create a Kubernetes secret:

```bash
kubectl create secret generic testkube-oauth-credentials \
  --from-literal=client-secret='<YOUR_CLIENT_SECRET>' \
  -n testkube
```

Configure your `values.yaml`:

```yaml
# Disable included Dex
dex:
  enabled: false

# Configure external OIDC issuer
global:
  dex:
    issuer: https://<your-domain>.okta.com/oauth2/default

# OAuth configuration for Testkube API
testkube-cloud-api:
  api:
    oauth:
      issuerUrl: https://<your-domain>.okta.com/oauth2/default
      clientId: <YOUR_CLIENT_ID>
      clientSecretRef:
        secretKeyRef:
          name: testkube-oauth-credentials
          key: client-secret
      redirectUri: https://<your-testkube-domain>/auth/callback
```

---

## Azure AD Integration

### Step 1: Register Application in Azure AD

1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to **Azure Active Directory** → **App registrations** → **New registration**
3. Configure:
   - **Name**: `Testkube On-Prem`
   - **Supported account types**: Choose based on your needs
   - **Redirect URI**: `https://<your-testkube-domain>/auth/callback`

### Step 2: Configure Application

1. Go to **Authentication** and add the redirect URI
2. Go to **API permissions** and add:
   - `openid`
   - `profile`
   - `email`
   - `User.Read` (if needed)

### Step 3: Get Credentials

1. Go to **Overview** and copy the **Application (client) ID**
2. Go to **Certificates & secrets** → **New client secret** and copy the secret

### Step 4: Configure Testkube

```yaml
dex:
  enabled: false

global:
  dex:
    issuer: https://login.microsoftonline.com/<tenant-id>/v2.0

testkube-cloud-api:
  api:
    oauth:
      issuerUrl: https://login.microsoftonline.com/<tenant-id>/v2.0
      clientId: <YOUR_CLIENT_ID>
      clientSecretRef:
        secretKeyRef:
          name: testkube-oauth-credentials
          key: client-secret
      redirectUri: https://<your-testkube-domain>/auth/callback
```

---

## Auth0 Integration

### Step 1: Create Application in Auth0

1. Go to [Auth0 Dashboard](https://manage.auth0.com)
2. Navigate to **Applications** → **Create Application**
3. Configure:
   - **Name**: `Testkube On-Prem`
   - **Type**: Regular Web Application

### Step 2: Configure Application

1. Go to **Settings** and add:
   - **Allowed Callback URLs**: `https://<your-testkube-domain>/auth/callback`
   - **Allowed Logout URLs**: `https://<your-testkube-domain>`

### Step 3: Get Credentials

Copy the **Client ID** and **Client Secret** from the Settings tab.

### Step 4: Configure Testkube

```yaml
dex:
  enabled: false

global:
  dex:
    issuer: https://<your-domain>.auth0.com/

testkube-cloud-api:
  api:
    oauth:
      issuerUrl: https://<your-domain>.auth0.com/
      clientId: <YOUR_CLIENT_ID>
      clientSecretRef:
        secretKeyRef:
          name: testkube-oauth-credentials
          key: client-secret
      redirectUri: https://<your-testkube-domain>/auth/callback
```

---

## Keycloak Integration

### Step 1: Create Client in Keycloak

1. Go to your Keycloak Admin Console
2. Navigate to your realm → **Clients** → **Create**
3. Configure:
   - **Client ID**: `testkube`
   - **Client Protocol**: `openid-connect`
   - **Access Type**: `confidential`

### Step 2: Configure Client

1. Go to **Settings** and add:
   - **Valid Redirect URIs**: `https://<your-testkube-domain>/auth/callback`
   - **Web Origins**: `https://<your-testkube-domain>`

### Step 3: Get Credentials

1. Go to **Credentials** tab and copy the **Secret**

### Step 4: Configure Testkube

```yaml
dex:
  enabled: false

global:
  dex:
    issuer: https://<your-keycloak-domain>/realms/<realm-name>

testkube-cloud-api:
  api:
    oauth:
      issuerUrl: https://<your-keycloak-domain>/realms/<realm-name>
      clientId: testkube
      clientSecretRef:
        secretKeyRef:
          name: testkube-oauth-credentials
          key: client-secret
      redirectUri: https://<your-testkube-domain>/auth/callback
```

---

## External Dex Integration

If you have an externally managed Dex instance, you can configure Testkube to use it.

### Step 1: Configure External Dex

In your external Dex instance, configure the desired connector (Okta, Google, etc.):

```yaml
# Your external Dex configuration (config.yaml)
issuer: https://dex.mycompany.com

connectors:
  - type: oidc
    id: okta
    name: Okta
    config:
      issuer: https://<your-domain>.okta.com/oauth2/default
      clientID: <YOUR_CLIENT_ID>
      clientSecret: <YOUR_CLIENT_SECRET>
      redirectURI: https://dex.mycompany.com/callback
      scopes:
        - openid
        - profile
        - email
      getUserInfo: true
```

### Step 2: Configure Testkube

```yaml
dex:
  enabled: false

global:
  dex:
    issuer: https://dex.mycompany.com

testkube-cloud-api:
  api:
    oauth:
      issuerUrl: https://dex.mycompany.com
      clientId: testkube-client
      clientSecretRef:
        secretKeyRef:
          name: testkube-oauth-credentials
          key: client-secret
      redirectUri: https://<your-testkube-domain>/auth/callback
```

---

## Advanced Configuration

### Group Support

To enable group mapping, configure your OIDC provider to include group claims and enable group support in Testkube:

```yaml
testkube-cloud-api:
  additionalEnv:
    OAUTH_GROUPS_SCOPE: "true"
  api:
    oauth:
      # ... your OIDC configuration
      # Groups will be automatically mapped if available in the ID token
```

### Bootstrap Member Mapping

Configure automatic user mapping to organizations and roles:

```yaml
testkube-cloud-api:
  api:
    bootstrapOrg:
      name: "My Organization"
      defaultRole: "member"
    oauth:
      # ... your OIDC configuration
```

### Custom Claims Mapping

If your OIDC provider uses custom claim names, you can map them:

```yaml
testkube-cloud-api:
  api:
    oauth:
      # ... your OIDC configuration
      # Custom claim mapping (if supported by your provider)
      claimMapping:
        groups: "custom_groups_claim"
        email: "email_address"
```

---

## Verification

### 1. Verify OIDC Discovery

Test that your OIDC provider's discovery endpoint is accessible:

```bash
curl https://<your-oidc-provider-domain>/.well-known/openid-configuration
```

You should receive a JSON response with authentication endpoints.

### 2. Test Login Flow

1. Access your Testkube installation URL: `https://<your-testkube-domain>`

2. You'll be redirected to your OIDC provider's login page

3. Enter your credentials

4. You'll be redirected back to Testkube

5. You should see the Testkube dashboard

### 3. Check Logs

If you encounter issues, check the Testkube API logs:

```bash
kubectl logs -n testkube deployment/testkube-cloud-api -f | grep -i oauth
```

---

## Troubleshooting

### Error: "Invalid redirect URI"

**Symptom:** OIDC provider shows an invalid redirect URI error after login.

**Solution:**

1. Verify that the redirect URI in your OIDC provider exactly matches: `https://<your-testkube-domain>/auth/callback`

2. Redirect URIs are case-sensitive and must include the protocol (`https://`)

3. Check the redirect URI configuration in your OIDC provider's application settings

### Error: "Discovery failed"

**Symptom:** Testkube cannot connect to the OIDC issuer.

**Solution:**

1. Verify that the issuer URL is correct and accessible from the cluster:

   ```bash
   kubectl run -it --rm debug --image=curlimages/curl --restart=Never -- \
     curl https://<your-oidc-provider-domain>/.well-known/openid-configuration
   ```

2. Verify that there are no firewall rules blocking the connection

3. Check if your OIDC provider requires specific network access

### Error: "Client authentication failed"

**Symptom:** 401 error when trying to authenticate.

**Solution:**

1. Verify that the Client ID is correct
2. Verify that the Client Secret doesn't have spaces or extra characters
3. Re-create the Kubernetes secret with correct credentials:
   ```bash
   kubectl delete secret testkube-oauth-credentials -n testkube
   kubectl create secret generic testkube-oauth-credentials \
     --from-literal=client-secret='<NEW_CLIENT_SECRET>' \
     -n testkube
   ```
4. Restart the Testkube API pod:
   ```bash
   kubectl rollout restart deployment/testkube-cloud-api -n testkube
   ```

### Error: "Groups claim not present"

**Symptom:** Users authenticate correctly but groups are not reflected in Testkube.

**Solution:**

1. Verify that your OIDC provider is configured to include group claims in the ID token
2. Enable group support in Testkube:
   ```yaml
   testkube-cloud-api:
     additionalEnv:
       OAUTH_GROUPS_SCOPE: "true"
   ```
3. Check the OIDC provider's documentation for group claim configuration

---

## Complete Examples

### Okta Direct Integration

```yaml
# values.yaml for Testkube Enterprise with Direct Okta

# Global configuration
global:
  domain: testkube.mycompany.com
  dex:
    issuer: https://mycompany.okta.com/oauth2/default

# Disable included Dex
dex:
  enabled: false

# OAuth configuration with direct Okta
testkube-cloud-api:
  additionalEnv:
    OAUTH_GROUPS_SCOPE: "true"
  api:
    oauth:
      issuerUrl: https://mycompany.okta.com/oauth2/default
      clientId: <YOUR_OKTA_CLIENT_ID>
      clientSecretRef:
        secretKeyRef:
          name: testkube-oauth-credentials
          key: client-secret
      redirectUri: https://testkube.mycompany.com/auth/callback
    bootstrapOrg:
      name: "My Company"
      defaultRole: "member"
```

### Azure AD Integration

```yaml
# values.yaml for Testkube Enterprise with Azure AD

# Global configuration
global:
  domain: testkube.mycompany.com
  dex:
    issuer: https://login.microsoftonline.com/<tenant-id>/v2.0

# Disable included Dex
dex:
  enabled: false

# OAuth configuration with Azure AD
testkube-cloud-api:
  additionalEnv:
    OAUTH_GROUPS_SCOPE: "true"
  api:
    oauth:
      issuerUrl: https://login.microsoftonline.com/<tenant-id>/v2.0
      clientId: <YOUR_AZURE_CLIENT_ID>
      clientSecretRef:
        secretKeyRef:
          name: testkube-oauth-credentials
          key: client-secret
      redirectUri: https://testkube.mycompany.com/auth/callback
    bootstrapOrg:
      name: "My Company"
      defaultRole: "member"
```

---

## Command Summary

### Create Secret for Credentials

```bash
kubectl create secret generic testkube-oauth-credentials \
  --from-literal=client-secret='<YOUR_CLIENT_SECRET>' \
  -n testkube
```

### Deploy with Helm

```bash
helm upgrade --install testkube kubeshop/testkube-enterprise \
  --namespace testkube \
  --create-namespace \
  -f values.yaml
```

### Check Status

```bash
# Check pods
kubectl get pods -n testkube

# Check API logs
kubectl logs -n testkube deployment/testkube-cloud-api -f
```

### Connectivity Testing

```bash
# Test OIDC discovery
curl https://<your-oidc-provider-domain>/.well-known/openid-configuration
```

---

## Provider-Specific Notes

### Okta
- Use the authorization server URL as the issuer
- Default server: `https://<domain>.okta.com/oauth2/default`
- Custom server: `https://<domain>.okta.com/oauth2/<server-name>`

### Azure AD
- Use the tenant-specific endpoint: `https://login.microsoftonline.com/<tenant-id>/v2.0`
- Ensure the application has the correct API permissions

### Auth0
- Use your Auth0 domain: `https://<domain>.auth0.com/`
- Configure the application type as "Regular Web Application"

### Keycloak
- Use the realm-specific endpoint: `https://<keycloak-domain>/realms/<realm-name>`
- Ensure the client is configured as "confidential"

---

## Next Steps

- For basic setup using included Dex, see [Basic SSO Configuration](/testkube-pro-on-prem/articles/okta-oidc-basic-setup)
- For general SSO information, see [SSO Configuration](/testkube-pro-on-prem/articles/auth)
- For SCIM integration, see [SCIM Configuration](/articles/scim)

---

Need additional help? Check our [general SSO documentation](/testkube-pro-on-prem/articles/auth) or contact the support team.
