# SSO Configuration with Okta using OIDC - Basic Setup

This guide explains how to configure SSO (Single Sign-On) authentication in Testkube On-Prem using Okta as an identity provider through OIDC (OpenID Connect) with the included Dex.

## Introduction

Testkube On-Prem uses [Dex](https://dexidp.io/) as a federated authentication layer. Dex acts as an OIDC proxy that allows connecting Testkube with multiple identity providers, including Okta, Google, Azure AD, and others.

This guide covers the **basic setup** using the Dex instance that comes integrated with the Testkube Helm chart and connects it to Okta through an OIDC connector.

:::tip
For advanced configurations with external OIDC providers (direct Okta, Azure AD, Auth0, etc.), see our [Advanced SSO Configuration guide](/testkube-pro-on-prem/articles/okta-oidc-advanced-setup).
:::

## When to Use This Approach

**Advantages:**
- Simpler configuration
- Automated maintenance with Testkube updates
- Ideal for dedicated Testkube installations
- No need to manage external identity infrastructure

**When to use this option:**
- First-time Testkube installation
- You don't have an existing identity provider infrastructure
- You prefer Testkube to manage the identity layer lifecycle
- You want a straightforward setup process

---

## Okta Configuration

Before configuring Testkube, you need to create an OIDC application in Okta.

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
   https://<your-testkube-domain>/idp/callback
   ```
   
   :::tip
   Replace `<your-testkube-domain>` with the actual domain where Dex is exposed in your installation.
   For example: `https://testkube.mycompany.com/idp/callback`
   :::

4. **Sign-out redirect URIs** (optional):
   ```
   https://<your-testkube-domain>
   ```

5. **Controlled access**: Select who can use this application
   - **Allow everyone in your organization to access** (for general access)
   - Or limit to specific groups according to your policies

6. Click **Save**

### Step 3: Obtain Credentials

Once the application is created, you'll be redirected to the details page. Here you'll find:

- **Client ID**: Copy this value, you'll need it for Helm configuration
- **Client Secret**: Click the eye icon to reveal the secret and copy it

:::warning
The Client Secret is sensitive. Store it securely and never include it directly in source code.
:::

### Step 4: Configure Scopes and Claims (Optional)

#### Basic Scopes

By default, Okta includes standard OIDC scopes:
- `openid`: Required for OIDC
- `profile`: Basic user information
- `email`: User's email address

These are sufficient for basic authentication.

#### Group Claims (Optional)

If you want to map Okta groups to Testkube roles:

1. Go to **Security** → **API** → **Authorization Servers**
2. Select the authorization server (usually `default`)
3. Go to **Claims** tab → **Add Claim**

   | Field | Value |
   |-------|-------|
   | **Name** | `groups` |
   | **Include in token type** | ID Token, Always |
   | **Value type** | Groups |
   | **Filter** | Matches regex: `.*` (or a specific filter) |
   | **Include in** | The following scopes: `openid` |

4. Save the claim

5. Make sure users are assigned to groups in Okta (**Directory** → **Groups**)

---

## Testkube Configuration

### Step 1: Create Kubernetes Secret

First, create a secret to store Okta credentials:

```bash
kubectl create secret generic okta-credentials \
  --from-literal=client-id='<YOUR_CLIENT_ID>' \
  --from-literal=client-secret='<YOUR_CLIENT_SECRET>' \
  -n testkube
```

Replace `<YOUR_CLIENT_ID>` and `<YOUR_CLIENT_SECRET>` with the values obtained from Okta.

### Step 2: Configure values.yaml for Helm

Create or update your `values.yaml` file for the `testkube-enterprise` chart:

```yaml
# Basic Dex configuration with Okta
dex:
  # References to credentials from secret
  envVars:
    - name: OKTA_CLIENT_ID
      valueFrom:
        secretKeyRef:
          name: okta-credentials
          key: client-id
    - name: OKTA_CLIENT_SECRET
      valueFrom:
        secretKeyRef:
          name: okta-credentials
          key: client-secret
  
  # OIDC connector configuration for Okta
  configTemplate:
    additionalConfig: |
      connectors:
        - type: oidc
          id: okta
          name: Okta
          config:
            # Okta issuer URL
            # Format: https://<your-domain>.okta.com/oauth2/default
            issuer: https://<your-domain>.okta.com/oauth2/default
            
            # Application credentials (from environment variables)
            clientID: $OKTA_CLIENT_ID
            clientSecret: $OKTA_CLIENT_SECRET
            
            # Redirect URI (must match the one configured in Okta)
            redirectURI: https://<your-testkube-domain>/idp/callback
            
            # Requested scopes
            scopes:
              - openid
              - profile
              - email
            
            # Additional configuration (optional)
            getUserInfo: true
```

:::info Issuer URL
The issuer format depends on the authorization server you use in Okta:
- **Default server**: `https://<your-domain>.okta.com/oauth2/default`
- **Custom server**: `https://<your-domain>.okta.com/oauth2/<server-name>`
- **Org server**: `https://<your-domain>.okta.com`

To verify the correct issuer, check **Security** → **API** → **Authorization Servers** in Okta.
:::

### Step 3: Configuration with Groups (Optional)

If you configured group claims in Okta, add group support in Testkube:

```yaml
testkube-cloud-api:
  additionalEnv:
    OAUTH_GROUPS_SCOPE: "true"

dex:
  envVars:
    - name: OKTA_CLIENT_ID
      valueFrom:
        secretKeyRef:
          name: okta-credentials
          key: client-id
    - name: OKTA_CLIENT_SECRET
      valueFrom:
        secretKeyRef:
          name: okta-credentials
          key: client-secret
  
  configTemplate:
    additionalConfig: |
      connectors:
        - type: oidc
          id: okta
          name: Okta
          config:
            issuer: https://<your-domain>.okta.com/oauth2/default
            clientID: $OKTA_CLIENT_ID
            clientSecret: $OKTA_CLIENT_SECRET
            redirectURI: https://<your-testkube-domain>/idp/callback
            scopes:
              - openid
              - profile
              - email
              - groups
            claimMapping:
              groups: groups
            getUserInfo: true
```

### Step 4: Apply Configuration

Deploy or update your Testkube installation:

```bash
helm upgrade --install testkube kubeshop/testkube-enterprise \
  --namespace testkube \
  --create-namespace \
  -f values.yaml
```

---

## Verification

### 1. Verify Dex Deployment

Confirm that the Dex pod is running:

```bash
kubectl get pods -n testkube | grep dex
```

You should see something like:

```
testkube-enterprise-dex-7d9c4b5f8d-xk2lm   1/1     Running   0          2m
```

### 2. Verify OIDC Discovery Configuration

Verify that the discovery endpoint is accessible:

```bash
curl https://<your-testkube-domain>/idp/.well-known/openid-configuration
```

You should receive a JSON response with authentication endpoints.

### 3. Test Login Flow

1. Access your Testkube installation URL: `https://<your-testkube-domain>`

2. You'll be redirected to the login page

3. Select "Okta" as the authentication provider

4. Enter your Okta credentials

5. Okta will redirect you back to Testkube

6. You should see the Testkube dashboard

### 4. Check Logs

If you encounter issues, check the logs:

**Dex logs:**
```bash
kubectl logs -n testkube deployment/testkube-enterprise-dex -f
```

**Testkube API logs:**
```bash
kubectl logs -n testkube deployment/testkube-cloud-api -f | grep -i oauth
```

---

## Troubleshooting

### Error: "Invalid redirect URI"

**Symptom:** Okta shows an invalid redirect URI error after login.

**Solution:**

1. Verify that the redirect URI in Okta exactly matches: `https://<your-testkube-domain>/idp/callback`

2. Redirect URIs are case-sensitive and must include the protocol (`https://`)

3. Check in Okta: **Applications** → **Your Application** → **General** → **Sign-in redirect URIs**

### Error: "Consent required" or Consent Screen

**Symptom:** Okta shows a consent screen asking for permission to share information.

**Solution:**

1. **Application-level configuration in Okta:**
   - Go to **Applications** → **Your Application** → **General**
   - **User Consent** section
   - Select **Require consent** = `Never` (for internal applications)

2. **Authorization server-level configuration:**
   - Go to **Security** → **API** → **Authorization Servers**
   - Select your authorization server → **Access Policies**
   - Edit the policy → **Consent** = `Not required`

3. **Add application to trusted list:**
   - Go to **Security** → **API** → **Trusted Origins**
   - Add your Testkube domain as a Trusted Origin

### Error: "Discovery failed" or "Failed to fetch provider metadata"

**Symptom:** Dex cannot connect to the Okta issuer.

**Solution:**

1. Verify that the issuer URL is correct and accessible from the cluster:

   ```bash
   kubectl run -it --rm debug --image=curlimages/curl --restart=Never -- \
     curl https://<your-domain>.okta.com/oauth2/default/.well-known/openid-configuration
   ```

2. Verify that there are no firewall rules blocking the connection

3. If you're in a proxy environment, configure HTTP_PROXY and HTTPS_PROXY environment variables in the Dex deployment

### Error: "Groups claim not present"

**Symptom:** Users authenticate correctly but groups are not reflected in Testkube.

**Solution:**

1. Verify that the groups claim is configured in Okta:
   - **Security** → **API** → **Authorization Servers** → **Claims**
   - There must be a claim named `groups`

2. Verify that the `groups` scope is included in the Dex configuration:
   ```yaml
   scopes:
     - groups
   ```

3. Enable group support in Testkube:
   ```yaml
   testkube-cloud-api:
     additionalEnv:
       OAUTH_GROUPS_SCOPE: "true"
   ```

4. Verify that users are assigned to groups in Okta:
   - **Directory** → **Groups**
   - Select a group → **People** → Assign users

### Error: "Client authentication failed"

**Symptom:** 401 error when trying to authenticate with Okta.

**Solution:**

1. Verify that the Client ID is correct
2. Verify that the Client Secret doesn't have spaces or extra characters
3. Re-create the Kubernetes secret with correct credentials:
   ```bash
   kubectl delete secret okta-credentials -n testkube
   kubectl create secret generic okta-credentials \
     --from-literal=client-id='<NEW_CLIENT_ID>' \
     --from-literal=client-secret='<NEW_CLIENT_SECRET>' \
     -n testkube
   ```
4. Restart the Dex pod:
   ```bash
   kubectl rollout restart deployment/testkube-enterprise-dex -n testkube
   ```

---

## Post-Authentication Configuration

Once authentication is working, you can configure user and permission mapping:

### Bootstrap Member Mapping

Configure automatic user mapping to organizations and roles:

```yaml
testkube-cloud-api:
  api:
    bootstrapOrg:
      name: "My Organization"
      defaultRole: "member"
```

For more details, see the [Bootstrap Member Mapping documentation](/articles/install/advanced-install#bootstrap-member-mapping).

### SCIM Integration

For automatic user and group synchronization, consider configuring SCIM:

1. Enable SCIM in Testkube:
   ```yaml
   testkube-cloud-api:
     scim:
       enabled: true
   ```

2. Configure SCIM in Okta following our [SCIM guide](/articles/scim)

---

## Complete Example: values.yaml

### Basic Configuration

```yaml
# values.yaml for Testkube Enterprise with Okta (Included Dex)

# Global configuration
global:
  domain: testkube.mycompany.com

# Okta groups support (optional)
testkube-cloud-api:
  additionalEnv:
    OAUTH_GROUPS_SCOPE: "true"
  api:
    bootstrapOrg:
      name: "My Company"
      defaultRole: "member"

# Dex configuration
dex:
  # Credentials from secret
  envVars:
    - name: OKTA_CLIENT_ID
      valueFrom:
        secretKeyRef:
          name: okta-credentials
          key: client-id
    - name: OKTA_CLIENT_SECRET
      valueFrom:
        secretKeyRef:
          name: okta-credentials
          key: client-secret
  
  # Connector configuration
  configTemplate:
    additionalConfig: |
      logger:
        level: info
        format: json
      connectors:
        - type: oidc
          id: okta
          name: Okta
          config:
            issuer: https://mycompany.okta.com/oauth2/default
            clientID: $OKTA_CLIENT_ID
            clientSecret: $OKTA_CLIENT_SECRET
            redirectURI: https://testkube.mycompany.com/idp/callback
            scopes:
              - openid
              - profile
              - email
              - groups
            claimMapping:
              groups: groups
            getUserInfo: true
            insecureSkipEmailVerified: false
  
  # Recommended resources
  resources:
    requests:
      cpu: 100m
      memory: 128Mi
    limits:
      cpu: 500m
      memory: 512Mi
```

---

## Command Summary

### Create Secret for Credentials

```bash
kubectl create secret generic okta-credentials \
  --from-literal=client-id='<YOUR_CLIENT_ID>' \
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

# Check Dex logs
kubectl logs -n testkube deployment/testkube-enterprise-dex -f

# Check API logs
kubectl logs -n testkube deployment/testkube-cloud-api -f
```

### Connectivity Testing

```bash
# Test Okta discovery
curl https://<your-domain>.okta.com/oauth2/default/.well-known/openid-configuration

# Test Dex discovery
curl https://<your-testkube-domain>/idp/.well-known/openid-configuration
```

---

## Next Steps

- For advanced configurations with external OIDC providers, see [Advanced SSO Configuration](/testkube-pro-on-prem/articles/okta-oidc-advanced-setup)
- For general SSO information, see [SSO Configuration](/testkube-pro-on-prem/articles/auth)
- For SCIM integration, see [SCIM Configuration](/articles/scim)

---

Need additional help? Check our [general SSO documentation](/testkube-pro-on-prem/articles/auth) or contact the support team.
