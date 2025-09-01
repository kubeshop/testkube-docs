# Configuring SSO / Identity Providers

You can configure Testkube On-Prem to authenticate users for SSO using different identity providers.

:::info
Testkube uses [Dex](https://dexidp.io/) for SSO, for a list of all supported identity providers and example configurations,
see the [Dex connectors guide](https://dexidp.io/docs/connectors/).
:::

### Static Users

For a quickstart or if you do not have an identity provider, you can configure
Testkube to use static users.

```yaml
dex:
  configTemplate:
    additionalConfig: |
      enablePasswordDB: true
      staticPasswords:
        - email: <user email>
          hash: <bcrypt hash of user password>
          username: <username>
```

Replace `<user email>`, `<bcrypt hash of user password>`, and `<username>` with
the actual values for your user(s).

The hash for your password can be optained as follows:

```
echo password | htpasswd -BinC 10 admin | cut -d: -f2
```

### OIDC

To configure an OIDC provider, set the appropriate values in the
`testkube-enterprise` chart as shown in the Google example below.

:::info
Examples of OIDC providers include: Okta, Google, Salesforce, and Azure AD v2.
:::

A secret containing credentials for the identity provider may need to be
created. Replace the `<oidc-credentials-secret-name>`, `<client-id-key`, and
`<client-secret-key>` placeholders with the corresponding values from the
secret. Additionally, you need to replace the `<dex endpoint>` placeholder with
the URI of exposed Dex endpoint.

:::tip

You should be able to see information about your Dex OpenID configuration by
performing a GET request to `<dex endpoint>/.well-known/openid-configuration`.

:::

```yaml
dex:
  envVars:
    - name: GOOGLE_CLIENT_ID
      valueFrom:
        secretKeyRef:
          name: <oidc-credentials-secret-name>
          key: <client-id-key>
    - name: GOOGLE_CLIENT_SECRET
      valueFrom:
        secretKeyRef:
          name: <oidc-credentials-secret-name>
          key: <client-secret-key>
  configTemplate:
    additionalConfig: |
    connectors:
      - type: oidc
        id: google
        name: Google
        config:
          # Canonical URL of the provider, also used for configuration discovery.
          # This value MUST match the value returned in the provider config discovery.
          #
          # See: https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig
          issuer: https://accounts.google.com

          # Connector config values starting with a "$" will read from the environment.
          clientID: $GOOGLE_CLIENT_ID
          clientSecret: $GOOGLE_CLIENT_SECRET

          # Dex's issuer URL + "/callback"
          redirectURI: <dex endpoint>/callback
```

:::tip
Once SSO is configured, you can further configure default user permission mapping using either [SCIM](/articles/scim) or 
[Bootstrap Member Mapping](/articles/install/advanced-install#bootstrap-member-mapping).
:::
