# Customizing your Testkube On-Prem Installation

A variety of advanced topics to further customize your Testkube On Prem deployment.

:::tip
See [Components](/articles/helm-components) for a list of all included components and links to their corresponding
Helm Charts with a list of their available properties.
:::

<a id="credentials-encryption"></a>

## Master Password for Encryption

Testkube requires a **master password** to enable encrypted [Credential](/articles/credential-management) storage
and to sign the tokens that allow runners to securely retrieve credentials during workflow execution.

:::warning Important
Without a master password configured:
- Only plaintext **Variable** credentials can be created — encrypted **Secret** credentials will be rejected.
- Workflow executions that use credentials will fail because the runner cannot obtain a valid execution token.

The master password cannot be recovered. If it is lost, all previously encrypted secrets will become unreadable
and will need to be recreated. Store it securely.
:::

### What the master password protects

In on-premise setups, the master password became a hard requirement for credentials and runner execution flows
starting with v1.13.0, when execution-token based runner authentication was introduced.

It is used in multiple control-plane paths, not just secret storage:

* Deriving encryption keys for **Secret** credential values
* Creating and validating **Agent secret keys** for Runner and GitOps agent authentication
* Signing execution tokens that runners use during workflow execution

All of these use the same runtime secret value:

* Environment variable: `CREDENTIALS_MASTER_PASSWORD`
* Helm values:
  * `global.credentials.masterPassword.secretKeyRef` (recommended)
  * `global.credentials.masterPassword.value` (not recommended for production)

If you see the following log message:

```text
cannot fetch agent ... error="missing master password for secret keys"
```

the control plane attempted to create or read agent secret-key crypto state without the password being set.

### Configuring the Master Password

The recommended approach is to store the master password in a Kubernetes Secret and reference it in your Helm values.

First, create the secret (the password must be at least 32 characters):

```bash
kubectl create secret generic testkube-master-password \
  --from-literal=password=$(openssl rand -base64 48) \
  -n testkube
```

Then reference it in your `values.yaml`:

```yaml
global:
  credentials:
    masterPassword:
      secretKeyRef:
        name: testkube-master-password
        key: password
```

Alternatively, you can set the password directly in your Helm values using `global.credentials.masterPassword.value`,
but this is not recommended for production environments.

```yaml
global:
  credentials:
    masterPassword:
      value: "<your-strong-password>"
```

### Storage and recovery considerations

`masterPassword` is not stored in a database as a plain field that can be inspected. It is a runtime secret used to
derive crypto material, and without it existing encrypted records cannot be decrypted.

For on-prem, this is a critical operational dependency:

* Never rotate it casually
* If it is lost, encrypted secrets must be recreated and agent secrets reissued

`POST /organizations/<organizationId>/agents/<agentIdOrName>/regenerate` regenerates an agent secret key for
affected agents.

## Disabling Credentials

You can turn off the built-in credentials feature entirely, or disable just the encrypted (Secret) backend
if you manage secrets through an external tool such as HashiCorp Vault.

### Disable All Credentials

Turns off all credential operations. The Dashboard will not allow creating or editing credentials, and workflows
will not be able to resolve them. All credential endpoints return `403 Forbidden`.

```yaml
testkube-cloud-api:
  credentials:
    enabled: false
```

Environment variable: `CREDENTIALS_ENABLED=false`

:::note
The master password is still required at startup even when credentials are disabled — it is used to sign
execution tokens that runners need to communicate with the control plane.
:::

### Disable Encrypted Credentials Only

Keeps plaintext **Variable** credentials and **Vault** references working, but blocks encrypted **Secret** credentials.

```yaml
testkube-cloud-api:
  credentials:
    backends:
      encrypted:
        enabled: false
```

Environment variable: `CREDENTIALS_BACKEND_ENCRYPTED_ENABLED=false`

## Artifact storage & cleanup

Testkube uses MinIO or any S3-compatible storage to store test artifacts by default.
Over time, as the number of test executions increases, storage space may become filled with artifacts that are no longer required.

To manage storage efficiently, Testkube provides an automatic cleanup feature.
You can configure the cleanup policy using the following Helm parameters:
```yaml
testkube-cloud-api:
  api:
    storage:
      cleanup:
        retentionDays: 90
        maxStorageSizeGb: 10
```

* `retentionDays`: Defines the number of days to retain artifacts. Artifacts older than this period will be automatically deleted.
* `maxStorageSizeGb`: Sets the maximum allowable storage size in gigabytes. When the storage exceeds this limit, the oldest artifacts will be removed until the storage size is within the specified limit.

## TLS

### Self-signed certificates

If the Testkube On-Prem Control Plane components are behind a Load Balancer utilizing self-signed certificates, additional configuration must be provided to the Agent Helm chart during installation.
Use one of the following methods to configure the Agent Helm chart to trust the self-signed certificates:

1. Inject the custom CA certificate

```helm
# testkube chart
global:
  tls:
    caCertPath: /etc/testkube/certs
  volumes:
    additionalVolumes:
      - name: custom-ca
        secret:
          secretName: custom-cert
    additionalVolumeMounts:
      - name: custom-ca
        mountPath: /etc/testkube/certs
        readOnly: true
```

2. Skip TLS verification (not recommended in a production setup)

```helm
# testkube chart
global:
  tls:
    skipVerify: true
```

## Security Headers

Security headers are an essential component of web security, providing protection against various types of attacks and enhancing the overall security posture of the web application. If you are exposing the Testkube On-Prem Control Plane components using the default Nginx Ingress Controller, inject the recommended security headers using the following snippet:

:::note
It requires the ingress controller configuration `allow-snippet-annotations` set as `true`, by default from version v1.9.0 it's set as `false` by default. Check [here](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/configmap/#allow-snippet-annotations) for more information.
:::

```yaml
testkube-cloud-api:
  ingress:
    annotations:
      nginx.ingress.kubernetes.io/configuration-snippet: |
        more_set_headers "X-Content-Type-Options: nosniff"
        more_set_headers "X-Frame-Options: DENY"
        more_set_headers "X-XSS-Protection: 1; mode=block"
        more_set_headers "Referrer-Policy: strict-origin-when-cross-origin"
        more_set_headers "Permissions-Policy: "
        more_set_headers "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload"

testkube-cloud-ui:
  ingress:
    annotations: &securityHeaders
      nginx.ingress.kubernetes.io/configuration-snippet: &securityHeaders |
        more_set_headers "X-Content-Type-Options: nosniff"
        more_set_headers "X-Frame-Options: SAMEORIGIN"
        more_set_headers "X-XSS-Protection: 1; mode=block"
        more_set_headers "Referrer-Policy: strict-origin-when-cross-origin"
        more_set_headers "Permissions-Policy: fullscreen=(self)"
        more_set_headers "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload"
        more_set_headers "Content-Security-Policy: default-src 'self' https: wss:; style-src 'self' 'unsafe-inline' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; worker-src https: wss: blob:; connect-src 'self' https: wss:"

testkube-ai-service:
  ingress:
    annotations: 
      nginx.ingress.kubernetes.io/configuration-snippet: *securityHeaders
```

It's possible to implement same headers with other ingress controllers or traffic managers, check the annotations or CRDs of the solution selected to expose Testkube On-Prem Control Plane components in your setup.

## Organization Management

### Bootstrap Member Mapping

By default, Testkube will automatically add new users as members to the default Organizations when they get invited. 
You can change the bootstrap configuration to change this behavior programmatically.

The simplified configuration is as follows. It creates a default org and environment and new users will automatically join as admin members:

```yaml
testkube-cloud-api:
  api:
    features:
      bootstrapOrg: <your-org>
      bootstrapEnv: "Your first environment"
      bootstrapAdmin: <you@example.com>
```

Alternatively, you can use the full advanced configuration for more options. The following example creates an organization with 
two environments. New users will automatically join as members of the default organizations and be added to specified environments 
and teams. Note that this will only happen on the first sign in. Afterwards, you can manage users through Testkube's dashboard, unless
you use SCIM to manage your SSO integration - [Read More](/articles/scim).

```yaml
testkube-cloud-api:
  api:
    features:
      bootstrapConfig:
        enabled: true
        config:
          # New users will automatically be added to these organizations
          default_organizations:
            - prod_organization
          # These organizations will be created when Testkube boots.
          organizations:
            - name: prod_organization
              # New users added will automatically receive this organization role
              default_role: member
              # New users will automatically be added to these environments
              default_environments:
                - production_1
              # These environments will be created when Testkube boots.
              environments:
                - name: production_1
                  # New users added will automatically receive this environment role
                  default_role: run
                - name: production_2
              # These teams will be created when Testkube boots.
              teams:
                - name: Frontend
                  # New users will conditionally join teams based on a groups claim found within the JWT
                  # You will be added if the claim contains at least one of the groups you configure here.
                  # IMPORTANT: You must opt-in for groups by setting the OAUTH_GROUPS_SCOPE env to "true" in the testkube-cloud-api chart.
                  groups_claim: ["my-org:group-1", "my-org:group-2"]
```

The teams' groups claim works well with Dex. Dex includes a non-standard `groups` claim which is widely supported by its upstream providers.
Check out [Dex's connector documentation](https://dexidp.io/docs/connectors/) to learn how to configure it for your identity provider.

:::tip
For advanced automated User onboarding you can use the [REST API](/openapi/overview) to assign Users to Teams, Environments, Resource-Groups, etc.
:::

**Disabling personal organizations**

Testkube creates an organization for every new user which acts as a personal workspace. When using the default organization and environment configuration, it makes sense to turn off personal organizations using the following config:

```yaml
testkube-cloud-api:
  api:
    features:
      disablePersonalOrgs: true
```

### Invitations

Users will now have to be invited within the Dashboard. You can configure the SMTP server and Testkube will send e-mail invitations.

```yaml
testkube-cloud-api:
  api:
    email:
      fromEmail: "no-reply@example.com"
      fromName: "Testkube On-prem"
    inviteMode: email
    smtp:
      host: <smtp host>
      port: <smtp port>
      username: <smtp username>
      password: <smtp password>
      # passwordSecretRef: <secret name>
```

## Custom Ingress Controller

By default, Testkube uses the NGINX Ingress Controller to ensure the reliable functioning of gRPC and Websockets protocols.

More specifically, these annotations are added to configure NGINX and should not be changed:

```yaml
# gRPC Ingress:
annotations:
  nginx.ingress.kubernetes.io/proxy-body-size: 8m
  nginx.ingress.kubernetes.io/client-header-timeout: "10800"
  nginx.ingress.kubernetes.io/client-body-timeout: "10800"

# WebSockets ingress:
annotations:
  nginx.ingress.kubernetes.io/proxy-read-timeout: "3600"
  nginx.ingress.kubernetes.io/proxy-send-timeout: "3600"
```

To use your own ingress controller, reach out to our support team and we'll gladly investigate your ingress of choice. Alternatively, you can give it a try yourself by deploying Testkube and seeing whether gRPC and WebSockets are working properly.

### Contour Ingress Controller

Testkube can be exposed using [Contour](https://projectcontour.io/) as an ingress controller, which supports gRPC and HTTP/2 natively. When configuring Contour, you will typically use an `HTTPProxy` resource. For gRPC streaming APIs (such as those used by the Testkube Agent), it is critical to set `timeoutPolicy.response` to `infinity` to avoid breaking long-lived gRPC streams. Users **cannot** set a finite `timeoutPolicy.response`, as this will cause Envoy (used by Contour) to terminate gRPC streams prematurely.

Example configuration:

```yaml
apiVersion: projectcontour.io/v1
kind: HTTPProxy
metadata:
  name: testkube-api-grpc
  namespace: testkube
spec:
  virtualhost:
    fqdn: testkube-grpc.local
  routes:
    - conditions:
        - prefix: /
      timeoutPolicy:
        idle: 60s        # OK to set
        response: infinity  # MUST be infinity for gRPC streaming
      services:
        - name: testkube-enterprise-api
          port: 8089
          protocol: h2c
```

**Why?**
- `timeoutPolicy.response` covers the time from the end of the client request to the end of the upstream response. Envoy defaults this to 15s, which is not compatible with streaming responses (like gRPC streams) and will kill the connection.
- See [Contour HTTPProxy docs](https://projectcontour.io/docs/v1.4.0/httpproxy/) and [Envoy timeout FAQ](https://www.envoyproxy.io/docs/envoy/latest/faq/configuration/timeouts#route-timeouts) for more details.


## Multi-namespace Agent Installation 

It is possible to deploy multiple Testkube Agent instances into the same Kubernetes cluster. Please put the following configuration to your `values.yaml` when deploying another agent:

```yaml
testkube-api:
  multinamespace:
     enabled: true
```

By default, a [Listener Agent](/articles/agents-overview#listener-agents) monitors events across the entire Kubernetes cluster to trigger the execution of a Test Workflow with the [Kubernetes Event Triggers](/articles/test-triggers)
functionality. You might want to limit the namespaces that the Listener Agent observes due to security restrictions, in which case you can use the `multinamespace` configuration:

```yaml {3-7}
testkube-agent:
  testkube-api:
    multinamespace:
      enable: true
    additionalNamespaces:
      - namespace2
      - namespace3
```

Note: The naming is a bit counterintuitive, but this instructs Testkube to stop watching all namespaces and to only observe the namespaces listed under `additionalNamespaces` _in 
addition to_ the namespace where Testkube is installed. No ClusterRole will be created, instead you will have Roles for each specified namespace.

## Kubernetes Namespaces

### Namespaces for Test Execution

The Testkube agent creates Kubernetes jobs when executing a test workflow. By default, the job will be spawned within the namespace where Testkube is installed. You can opt to [run tests in a different namespace](/articles/creating-tests#run-the-test-in-a-different-execution-namespace), in which case you will have to allow this by configuring these namespaces in `executionNamespaces`.

```yaml {3}
testkube-agent:
  testkube-api:
    executionNamespaces:
      - namespace: ns1 
      - namespace: ns2 
```

### Namespaces for Testkube Custom Resources

As of Testkube v2.7, Testkube Resources are stored in the Control Plane - [Read More](/articles/testkube-resource-management). If you are using a [GitOps Agent](/articles/agents-overview#gitops-agents) to sync Testkube CRDs from your cluster into the Control Plane, the agent will watch for custom Testkube resources within the namespace where it is installed. It is currently unsupported to change this behaviour.

## Bring Your Own Infra

Testkube supports integrating with existing infrastructure components such as PostgreSQL, NATS, Dex, etc. For production environments, it's recommended to use your own infra or to harden the sub-charts.

### PostgreSQL

Starting with release `3.0`, PostgreSQL will be used as the primary database instead of MongoDB. Since both options are currently supported, you must first disable MongoDB and then enable PostgreSQL in your `values.yaml` file. We strongly recommend using `CloudNativePG` instead of plain PostgreSQL, as it offloads much of the database management, and the installation of PostgreSQL by Bitnami will be deprecated by the end of 2026.
The operator-based path has two parts:

1. The `cloudnative-pg` operator, which manages PostgreSQL lifecycle in Kubernetes.
2. A `Cluster` custom resource, created by the `postgresqlOperatorCluster` chart values.

To enable this, update your `values.yaml` as follows:

```yaml
global:
  mongo:
    enabled: false #disable MongoDB for API and Worker services
  postgres:
    enabled: true #use Postgres as a database for API, AI and Worker service
    secretRef: #credentials k8s secret that connects the services to Postgres database
      name: 'testkube-enterprise-postgresql-app'
      endpointKey: 'host'
      usernameKey: 'username'
      passwordKey: 'password'
      
cloudnative-pg:
  enabled: true #install the CloudNativePG operator
  
postgresqlOperatorCluster:
  enabled: true #creates a CloudNativePG Cluster resource
  
mongodb:
  enabled: false #disables MongoDB chart installation
```
If you deploy the CloudNativePG operator separately, or you already have it running in your k8s cluster, set `postgresqlOperatorCluster.enabled=false` in the `values.yaml`.

:::warning

Do not enable both `postgresql.enabled` (standard chart installation) and `postgresqlOperatorCluster.enabled` at the same time as you will have 2 databases in the cluster.

:::

### Migrating Testkube Enterprise PostgreSQL to the CloudNativePG Operator
Moving from the bundled Bitnami PostgreSQL chart to CloudNativePG is a breaking infrastructure change for existing installations. 

The resource model changes from a Helm-managed PostgreSQL `StatefulSet` to an operator-managed PostgreSQL `Cluster`, so this is not a direct in-place database upgrade.

### Recommended Migration Strategy

1. Keep the existing bundled PostgreSQL deployment running.
2. Install the CloudNativePG operator and create a new PostgreSQL cluster.
3. Copy data from the existing database to the new operator-managed database with `pg_dump`/`pg_restore`.
4. Switch Testkube services to the operator-managed database.
5. Observe the system and keep the old database available in case rollback is needed.
6. Remove the old database only after the migration is confirmed stable.

**Treat this migration as a database migration, not just a Helm upgrade.**

### Using an external PostgreSQL instance 

You can easily connect PostgreSQL to an external database by creating a Kubernetes secret with the database connection details and wiring it into `global.postgres.secretRef`. Optionally, you can also use `global.postgres.dsn` instead of separate secret-based fields.

## MongoDB

:::warning Important

MongoDB has been deprecated as the primary database and will be removed from Testkube by the end of 2026. Please plan your migration to PostgreSQL at your earliest convenience.

:::

Testkube uses [MongoDB](https://www.mongodb.com/) as a database for storing all the data.
By default, it will install a MongoDB instance using the Bitnami MongoDB Helm chart.

If you wish to use an existing MongoDB instance, you can configure the following values:

```yaml
mongodb:
  enabled: false

testkube-cloud-api:
  api:
    mongo:
      dsn: <mongodb dsn (mongodb://...)>
```

You can follow [these instructions][guide-mongo-ssl] in case you want to work with SSL Connections.

If you want to use MongoDB with ReplicaSet, the below configuration is needed:

```yaml
mongodb:
  architecture: replicaset

testkube-api:
  mongodb:
    dsn: <mongodb dsn (mongodb://...)>
```

#### MongoDB upgrade from 8.0.15 to 8.2.5
Starting with chart version `2.329.0`, MongoDB is upgraded to `8.2.3` and in the later versions to `8.2.5`.  This is a **breaking change** for installations that are not already running MongoDB `8.0.x`, because MongoDB requires the upgrade path to go through `8.0` before moving to `8.2.x`.

To upgrade safely, you must first ensure they you on at least chart version `2.326.3`, which includes MongoDB `8.0.15`. Only after that should you upgrade to the latest chart version.

**Required upgrade path**

1. Upgrade to chart version `2.326.3`: this moves MongoDB to `8.0.15`

2. Upgrade from `2.326.3` to the latest chart version.

3. Enable the MongoDB FCV jobs in your chart values so the compatibility version is updated during the upgrade:

```yaml
mongodb:
  preUpgradeFCVJob:
    enabled: true
```
**How it works**

When the FCV jobs are enabled:

- the pre-upgrade job connects to the current MongoDB instance and checks the current compatibility version; if needed, it updates it to the configured pre-upgrade target – `8.0` before the image upgrade starts
- Helm upgrades the MongoDB image to `8.2.5`
- the post-upgrade job waits for the upgraded MongoDB instance to become ready and then updates the MongoDB Feature Compatibility Version to `8.2`

:::warning Important
If your installation is still on MongoDB `7.x`, do not upgrade directly to a chart version that includes MongoDB `8.2.5`. MongoDB does not support a direct 7.x -> 8.2.x upgrade in a single step. You must first upgrade to chart version `2.326.3`, and only then continue to the latest version.
:::

The FCV jobs are configurable and can also be used for future supported MongoDB upgrades by changing the compatibility values in the chart.

### NATS

Testkube uses [NATS](https://nats.io/) as a message broker for communication between API and Agents.

If you wish to use an existing NATS instance, you can configure the following values:

```yaml
nats:
  enabled: false

testkube-cloud-api:
  api:
    nats:
      uri: <nats uri (nats://...)>
```

### MinIO

Testkube uses [MinIO](https://min.io/) as a storage backend for storing artifacts.

If you wish to use an existing MinIO instance, you can configure the following values:

```yaml
testkube-cloud-api:
  minio:
    enabled: false
  api:
    minio: {} # check out the `testkube-cloud-api.api.minio` block in the values.yaml for all available settings
```

### Dex

Testkube uses [Dex](https://dexidp.io/) as an identity provider.

If you wish to use an existing Dex instance, you can configure the following values:

```yaml
global:
  dex:
    issuer: <dex issuer url>
dex:
  enabled: false
testkube-cloud-api:
  api:
    oauth: {} # check out the `testkube-cloud-api.api.oauth` block in the values.yaml for all available settings
```

## Air-gapped Environments

### Offline License

By default, Testkube will work with licenses that require internet connectivity. These licenses have the following format: `XXXXXX-XXXXXX-XXXXXX-XXXXXX-XXXXXX-V3`. However, if you want to use Testkube in offline environments you will need to use an offline license.

[Contact support][contact] if you need an offline license.

Once you have obtained an offline license, you should create a Shared Secret and afterwards

```yaml
global:
  enterpriseOfflineAccess: true
  enterpriseLicenseSecretRef: testkube-enterprise-license
```

### Artifactory and Other Registry Proxies

By default, Testkube will pull images from the [docker.io](https://docker.io) registry. You can override the image of each individual service.

[contact]: https://testkube.io/contact
[guide-mongo-ssl]: /articles/mongodb-administration
