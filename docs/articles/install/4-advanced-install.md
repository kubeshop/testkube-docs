# Customized Installation

A variety of advanced topics to further customize your Testkube On Prem deployment.

:::tip
See [Components](/articles/helm-components) for a list of all included components and links to their corresponding
Helm Charts with a list of their available properties.
:::

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

## Organization Management

### Bootstrap User Mapping

By default, Testkube will automatically add users to the default organizations when they get invited. You can change the bootstrap configuration to change this behaviour programmatically.

The simplified configuration is as follows. It creates a default org and environment and users will automatically join as admin:

```yaml
testkube-cloud-api:
  api:
    features:
      bootstrapOrg: <your-org>
      bootstrapEnv: "Your first environment"
      bootstrapAdmin: <you@example.com>
```

Alternatively, you can use the full advanced configuration for more options. The following example creates an organization with two environments.
New users will automatically join default organizations, environments and teams.
Note that this will only happen on the first sign in. Afterwards, you can manage users through Testkube's dashboard.

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

The team's groups claim works well with Dex. Dex includes a non-standard `groups` claim which is widely supported by its upstream providers.
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

Users will now have to be invited within the Dashboard. You can configure the SMTP server and Testkube will send e-mail invitations, alternatively new users will join the organization without explicitly accepting the invitation.

```yaml
testkube-cloud-api:
  inviteMode: `email`
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

To use your own ingress controller, reach out to our support team and we’ll gladly investigate your ingress of choice. Alternatively, you can give it a try yourself by deploying Testkube and seeing whether gRPC and WebSockets are working properly.

## Kubernetes Namespaces

### Namespaces for Test Execution

The Testkube agent creates Kubernetes jobs when executing a test workflow. By default, the job will be spawned within the namespace where Testkube is installed. You can opt to [run tests in a different namespace](/articles/creating-tests/#run-the-test-in-a-different-execution-namespace), in which case you will have to allow this by configuring these namespaces in `executionNamespaces`.

```yaml {3}
testkube-agent:
  testkube-api:
    executionNamespaces: ["my-namespace"]
```

### Namespaces for Kubernetes Trigger Events

Testkube's Kubernetes triggers allow you to execute a test workflow. By default, Testkube watches events across the whole cluster. You might want to limit the namespaces that Testkube observes due to security restrictions, in which case you can use the multinamespace configuration:

```yaml {3-7}
testkube-agent:
  testkube-api:
    multinamespace:
      enable: true
    additionalNamespaces:
      - namespace2
      - namespace3
```

Note: The naming is a bit counterintuitive but this instructs Testkube to stop watching all namespaces and to only observe the namespaces listed on top of the namespace where Testkube is installed. No ClusterRole will be created, instead you will have Roles for each specified namespace.

### Namespaces for Testkube Custom Resources

Testkube enables GitOps practices by storing configuration within custom resources, such as the TestWorkflow CRD. By default, Testkube will only watch for custom Testkube resources within the namespace where it is installed. It is currently unsupported to change this behaviour.

## Bring Your Own Infra

Testkube Enterprise supports integrating with existing infrastructure components such as MongoDB, NATS, Dex, etc. For production environments, it's recommended to use your own infra or to harden the sub-charts.

### MongoDB

Testkube Enterprise uses MongoDB as a database for storing all the data.
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

### NATS

Testkube Enterprise uses NATS as a message broker for communication between API and Agents.

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

Testkube Enterprise uses MinIO as a storage backend for storing artifacts.

If you wish to use an existing MinIO instance, you can configure the following values:

```yaml
testkube-cloud-api:
  minio:
    enabled: false
  api:
    minio: {} # check out the `testkube-cloud-api.api.minio` block in the values.yaml for all available settings
```

### Dex

Testkube Enterprise uses Dex as an identity provider.

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

Once you obtained an offline license, you should create a Shared Secret and afterwards

```yaml
global:
  enterpriseOfflineAccess: true
  enterpriseLicenseSecretRef: testkube-enterprise-license
```

### Artifactory and Other Registry Proxies

By default, Testkube will pull images from the [docker.io](https://docker.io) registry. You can override the image of each individual service.

[contact]: https://testkube.io/contact
[guide-mongo-ssl]: /articles/testkube-dependencies
