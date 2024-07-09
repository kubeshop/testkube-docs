# Installation Using Vault

This guide specifically covers an installation of Testkube utilizing [Vault's sidecar
injector](https://developer.hashicorp.com/vault/docs/platform/k8s/injector), but
we are ready to support enterprise customers utilizing the secrets operator or
the CSI provider.

:::info

Throughout this guide:

- The examples will assume that your Vault has a v2
key-value secrets engine mounted at `kv/`.
- The specified Helm values will be from the root of the specified chart.
- Configurations which will need to be replaced with actual values can be
  identified by the use of `<>`.

:::

## Dex

Dex is the identity provider for Testkube and it's configuration could contain
sensitive information.

Start by storing the Dex config at `kv/dex/config`:

```json
{
  "config": "********"
}
```

The value of the `config` field would be a [Dex
config](https://dexidp.io/docs/configuration/), such as below, but customized for your needs:

```yaml
logger:
  level: debug
  format: json
storage:
    type: kubernetes
    config:
      inCluster: true
issuer: <idp url>
enablePasswordDB: true
staticPasswords:
  - email: "admin@testkube.com"
    # bcrypt hash of the string "password": $(echo password | htpasswd -BinC 10 admin | cut -d: -f2)
    hash: "$2a$10$2b2cU8CPhOTaGrs1HRQuAueS7JTT5ZHsHSzYiFPm1leZck7Mc8T4W"
    username: "admin"
    userID: "4761be60-0ae4-45e6-a21d-2196e911e010"
```

Create a Vault policy to allow reading of the Dex config:

```hcl
path "kv/data/dex/config" {
  capabilities = ["read"]
}
```

Create service account, `vault-dex`, then bind it to a Vault role, `dex`, which
has the above policy attached to it.

In the `testkube-enterprise` chart configure the following values to properly
inject and consume the secret Dex config:

```yaml
dex:
  serviceAccount:
    create: false
    name: "vault-dex"
  podAnnotations:
    vault.hashicorp.com/agent-inject: "true"
    vault.hashicorp.com/secret-volume-path: /etc/dex
    vault.hashicorp.com/role: 'dex'
    vault.hashicorp.com/agent-inject-secret-config.yaml: kv/dex/config
    vault.hashicorp.com/agent-inject-template-config.yaml: |
      {{`{{- with secret "kv/dex/config" }}{{ .Data.data.config }}{{ end -}}`}}
  configSecret:
    create: false
    use: false
    createCustom: false
    name: ""
```

## Minio

:::warning

TODO(emil)

:::

- Create service account and bind it to role and policy.

## Control Plane

- Create service account and bind it to role and policy.

### License

:::warning

TODO(emil)

:::

### Private CA

:::warning

TODO(emil)

:::


## Agent

- Create service account and bind it to role and policy.

### Private CA

:::warning

TODO(emil)

:::

### Troubleshooting

#### Istio Compatibility

:::warning

TODO(emil)

:::
