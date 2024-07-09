# Installation Using Vault

This guide covers an installation of Testkube utilizing [Vault's sidecar
injector](https://developer.hashicorp.com/vault/docs/platform/k8s/injector), but
we also support enterprise customers utilizing the secrets operator or
the CSI provider.

:::info

Throughout this guide:

- The examples will assume that your Vault has a v2
key-value secrets engine mounted at `kv/`.
- The specified Helm values will be from the root of the specified chart.
- Configurations that will need to be replaced with actual values can be
  identified by the use of `<>`.
- Secret values are masked with `*` characters.

:::

## Dex

Dex is the identity provider for Testkube and its configuration could contain
sensitive information.

Start by storing the Dex config at `kv/dex/config`:

```json
{
  "config": "********"
}
```

The value of the `config` field would be a [Dex
config](https://dexidp.io/docs/configuration/) as shown below, but customized for your needs:

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

Create a service account, `vault-dex`, then bind it to a Vault role, `dex`, which
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

Minio is the default object storage for Testkube used to store logs and
artifacts.

Store the root username and password to `kv/minio/credentials`:

```json
{
  "root_password": "********",
  "root_user": "********"
}
```

Create a Vault policy to allow reading of the Minio credentials:

```hcl
path "kv/data/minio/credentials" {
  capabilities = ["read"]
}
```

Create a service account, `vault-minio`, then bind it to a Vault role, `minio`, which
has the above policy attached to it.

In the `testkube-enterprise` chart configure the following values to properly
inject and consume the secret Minio credentials:

```yaml
minio:
  auth:
    useCredentialsFiles: true
    useSecret: false
  serviceAccount:
    create: false
    name: "vault-minio"
  automountServiceAccountToken: true
  podAnnotations:
    vault.hashicorp.com/agent-inject: "true"
    vault.hashicorp.com/secret-volume-path: /opt/bitnami/minio/secrets
    vault.hashicorp.com/role: 'minio'
    vault.hashicorp.com/agent-inject-secret-root-user: kv/minio/credentials
    vault.hashicorp.com/agent-inject-secret-root-password: kv/minio/credentials
    # NOTE: These templates need to be double escaped as Minio runs this through tpl.
    vault.hashicorp.com/agent-inject-template-root-user: |
      {{"{{"}}"{{"{{"}}"}}- with secret "kv/minio/credentials" }}{{"{{"}}"{{"{{"}}"}} .Data.data.root_user }}{{"{{"}}"{{"{{"}}"}} end -}}
    vault.hashicorp.com/agent-inject-template-root-password: |
      {{"{{"}}"{{"{{"}}"}}- with secret "kv/minio/credentials" }}{{"{{"}}"{{"{{"}}"}} .Data.data.root_password }}{{"{{"}}"{{"{{"}}"}} end -}}
```

## Control Plane

The control plane, AKA enterprise API, exposes the central API for the agents and
the dashboard. The worker service is a part of the control plane which performs
long-running tasks such as processing artifacts.

Depending on your needs the control plane might need the following secrets to be
injected from a Vault:

- License key
- License file (only for offline licenses)
- Minio credentials
- Private certificate authority (CA) certificate

To keep this guide simple we will have one service account for both
components of the control plane (enterprise API and worker service) which will
need to have access to the Vault secrets, but to enforce least privilege one
could create individual service accounts and policies for each component.

Start by creating a service account, `vault-control-plane`, for the control
plane. Bind the service account to a Vault role, `control_plane`.

### Online License

Create a secret `kv/control-plane/license` with the license key:

```json
{
  "key": "********",
}
```

To the `control_plane` role, add a policy that allows reading the above secret:

```hcl
path "kv/data/control-plane/license" {
  capabilities = ["read"]
}
```

In the `testkube-enterprise` chart configure the following values to properly
inject and consume the secret license key:

```yaml
testkube-cloud-api:
  enterpriseLicenseKeyPath: /etc/testkube/secrets/license.key
  serviceAccount:
    name: vault-control-plane
  podAnnotations:
    vault.hashicorp.com/agent-inject: "true"
    vault.hashicorp.com/role: 'control_plane'
    vault.hashicorp.com/secret-volume-path-license.key: /etc/testkube/secrets
    vault.hashicorp.com/agent-inject-secret-license.key: kv/control-plane/license
    vault.hashicorp.com/agent-inject-template-license.key: |
      {{`{{- with secret "kv/control-plane/license" }}{{ .Data.data.key }}{{ end -}}`}}
```

### Offline License

Create a secret `kv/control-plane/license` with the license key and license
file:

```json
{
  "key": "********",
  "license": "********"
}
```

To the `control_plane` role, add a policy that allows reading the above secret:

```hcl
path "kv/data/control-plane/license" {
  capabilities = ["read"]
}
```

In the `testkube-enterprise` chart configure the following values to properly
inject and consume the secret license key:

```yaml
testkube-cloud-api:
  enterpriseLicenseKeyPath: /etc/testkube/secrets/license.key
  enterpriseLicenseFilePath: /etc/testkube/secrets/license.lic
  serviceAccount:
    name: vault-control-plane
  podAnnotations:
    vault.hashicorp.com/agent-inject: "true"
    vault.hashicorp.com/role: 'control_plane'
    vault.hashicorp.com/secret-volume-path-license.key: /etc/testkube/secrets
    vault.hashicorp.com/agent-inject-secret-license.key: kv/control-plane/license
    vault.hashicorp.com/agent-inject-template-license.key: |
      {{`{{- with secret "kv/control-plane/license" }}{{ .Data.data.key }}{{ end -}}`}}
    vault.hashicorp.com/secret-volume-path-license.lic: /etc/testkube/secrets
    vault.hashicorp.com/agent-inject-secret-license.lic: kv/control-plane/license
    vault.hashicorp.com/agent-inject-template-license.lic: |
      {{`{{- with secret "kv/control-plane/license" }}{{ .Data.data.license }}{{ end -}}`}}
```

### Minio Credentials

To the `control_plane` role, add a policy that allows reading the previously
created secret containing the password and username for the root Minio user:

```hcl
path "kv/data/minio/credentials" {
  capabilities = ["read"]
}
```

In the `testkube-enterprise` chart, configure the following values to properly
inject and consume the Minio credentials:

```yaml
testkube-cloud-api:
  serviceAccount:
    name: vault-control-plane
  podAnnotations:
    vault.hashicorp.com/agent-inject: "true"
    vault.hashicorp.com/role: 'control_plane'
    vault.hashicorp.com/secret-volume-path-minio-config.json: /etc/testkube/secrets
    vault.hashicorp.com/agent-inject-secret-minio-config.json: kv/minio/credentials
    vault.hashicorp.com/agent-inject-secret-minio-config.json: kv/minio/credentials
    vault.hashicorp.com/agent-inject-template-minio-config.json: |
      {{`{{- with secret "kv/minio/credentials" }}{"aliases":{"s3":{"accessKey":"{{ .Data.data.root_user }}","secretKey":"{{ .Data.data.root_password }}","api":"S3v4"}},"version":"10"}{{ end -}}`}}
  api:
    minio:
      credsFilePath: /etc/testkube/secrets/minio-config.json
testkube-worker-service:
  serviceAccount:
    name: vault-control-plane
  podAnnotations:
    vault.hashicorp.com/agent-inject: "true"
    vault.hashicorp.com/role: 'control_plane'
    vault.hashicorp.com/secret-volume-path-minio-config.json: /etc/testkube/secrets
    vault.hashicorp.com/agent-inject-secret-minio-config.json: kv/minio/credentials
    vault.hashicorp.com/agent-inject-secret-minio-config.json: kv/minio/credentials
    vault.hashicorp.com/agent-inject-template-minio-config.json: |
      {{`{{- with secret "kv/minio/credentials" }}{"aliases":{"s3":{"accessKey":"{{ .Data.data.root_user }}","secretKey":"{{ .Data.data.root_password }}","api":"S3v4"}},"version":"10"}{{ end -}}`}}
  api:
    minio:
      credsFilePath: /etc/testkube/secrets/minio-config.json
```

### Private Certificate Authority (CA)

Create a secret `kv/certs/ca` with the `ca` field holding the PEM-encoded
certificate for the private certificate authority (CA) signing the certificates
for the various Testkube components:

```json
{
  "ca": "********"
}
```

:::warning

For simplicity, this guide uses the same key-value secrets engine to hold the
CA certificate, but in all likelihood the CA certificate would come from a PKI
secrets engine in Vault.

:::

To the `control_plane` role, add a policy that allows reading the above created
secret.


```hcl
path "kv/data/certs/ca" {
  capabilities = ["read"]
}
```

In the `testkube-enterprise` chart, configure the following values to properly
inject the private CA certificate:

```yaml
testkube-cloud-api:
  customCaDirPath: /etc/testkube/certs
  serviceAccount:
    name: vault-control-plane
  podAnnotations:
    vault.hashicorp.com/agent-inject: "true"
    vault.hashicorp.com/role: 'control_plane'
    vault.hashicorp.com/secret-volume-path-ca.pem: /etc/testkube/certs
    vault.hashicorp.com/agent-inject-secret-ca.pem: kv/certs/ca
    vault.hashicorp.com/agent-inject-template-ca.pem: |
      {{`{{- with secret "kv/certs/ca" }}{{ .Data.data.ca }}{{ end -}}`}}
```

## Agent

### Private Certificate Authority (CA)

Assuming the agent has access to the same Vault as the control plane, to build
on the above direction for injection of the private CA into the control plane,
create a service account, `vault-agent`, bound to a Vault
role, and `agent` with a policy that allows reading the CA secret.

In the `testkube` chart, configure the following values to properly inject the
private CA certificate into the agent workload:

```yaml
testkube-api:
  cloud:
    tls:
      customCaDirPath: /etc/testkube/certs
  serviceAccount:
    name: vault-agent
  podAnnotations:
    vault.hashicorp.com/agent-inject: "true"
    vault.hashicorp.com/role: 'agent'
    vault.hashicorp.com/secret-volume-path-ca.pem: /etc/testkube/certs
    vault.hashicorp.com/agent-inject-secret-ca.pem: kv/certs/ca
    vault.hashicorp.com/agent-inject-template-ca.pem: |
      {{`{{- with secret "kv/certs/ca" }}{{ .Data.data.ca }}{{ end -}}`}}
```

Test workflow executions will need to trust the private CA storage endpoint to
send logs and artifacts to the object store. The global template can be
configured to inject the CA certificate and have these processes trust it by
setting the following values in the `testkube` chart:

```yaml
global:
  testWorkflows:
    globalTemplate:
      enabled: true
      spec:
        pod:
          serviceAccountName: vault-agent
          annotations:
            vault.hashicorp.com/agent-inject: "true"
            vault.hashicorp.com/agent-init-first: "true"
            vault.hashicorp.com/agent-enable-quit: "true"
            vault.hashicorp.com/agent-cache-listener-port: "8200"
            vault.hashicorp.com/role: 'agent'
            vault.hashicorp.com/secret-volume-path-ca.pem: /etc/testkube/certs
            vault.hashicorp.com/agent-inject-secret-ca.pem: kv/certs/ca
            # NOTE: These templates need to be double escaped as workflows will run this through a template engine.
            vault.hashicorp.com/agent-inject-template-ca.pem: '{{`{{"{{- with secret \"kv/certs/ca\" -}}{{ .Data.data.ca }}{{- end -}}"}}`}}'
        container:
          env:
          - name: SSL_CERT_DIR
            value: /etc/testkube/certs/
          # If your Git repositories are also served using certificates from the same private CA
          # then include the following environment variable also.
          - name: GIT_SSL_CAINFO
            value: /etc/testkube/certs/ca.pem
        after:
        - name: 'Send quit signal to Vault agent'
          condition: always
          shell: 'while ! wget --post-data "" -O - http://localhost:8200/agent/v1/quit; do sleep 1; done'
```

:::warning

Prebuilt and container executors are deprecated so we do not officially support
their usage with Vault, please [migrate to
workflows](./test-workflow-migration).

:::

## Troubleshooting

### Istio Compatibility

In setups utilizing a combination of Vault and Istio, we recommend explicitly
excluding outgoing traffic to Vault's agent from being routed through Istio's
proxy. Otherwise, the workload could be put in a dead-locked state where one
init container is waiting on another which cannot start till the latter
completes.

:::info

To read more about Istio's compatibility with Testkube please read the following
[guide](./istio).

:::

This can be configured by adding the following annotation to any workloads that
have Vault injection enabled:

```yaml
traffic.sidecar.istio.io/excludeOutboundPorts: "8200"
```

:::warning

The default Vault agent cache listener port is 8200, make sure to modify the
annotation above if you have configured the Vault agent to listen on a different
port.

:::
