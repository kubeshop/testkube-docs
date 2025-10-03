# Customizing your Testkube On-Prem Installation

A variety of advanced topics to further customize your Testkube On Prem deployment.

:::tip
See [Components](/articles/helm-components) for a list of all included components and links to their corresponding
Helm Charts with a list of their available properties.
:::

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

### Agent Tokens in Bootstrap Configuration

When using the Bootstrap configuration to create environments programmatically, you can also configure **Agent Join Tokens** as part of the "as code" deployment. Agent Join Tokens allow agents to self-register when they are deployed, enabling fully automated environment setup.

#### How It Works

Each environment can have an Agent Join Token that allows new agents to automatically register themselves without manual intervention. This is particularly useful for:

- **GitOps workflows**: Where infrastructure is managed declaratively
- **Ephemeral environments**: That are programmatically created and destroyed
- **CI/CD pipelines**: That need to spin up testing environments on-demand
- **Multi-tenant deployments**: Where environments are created automatically for each tenant

#### Configuration

Agent Join Tokens are created automatically when you create an environment through the Bootstrap configuration. Once the environment is created, you can retrieve the token and use it to deploy agents.

**Step 1: Create environment with Bootstrap**

```yaml
testkube-cloud-api:
  api:
    features:
      bootstrapConfig:
        enabled: true
        config:
          organizations:
            - name: prod_organization
              environments:
                - name: production_1
                  default_role: run
```

**Step 2: Retrieve the Agent Join Token**

After the environment is created during bootstrap, you can retrieve the Agent Join Token using the Testkube API:

```bash
# Get the Agent Join Token for an environment
curl -X GET \
  "https://<your-testkube-domain>/api/organizations/<org-id>/environments/<env-id>/agent-token" \
  -H "Authorization: Bearer <your-api-token>"
```

Or using the CLI (after the initial deployment):

```bash
testkube get environment <env-name> --org <org-name>
```

**Step 3: Use the token for agent deployment**

Once you have the Agent Join Token, you can use it to deploy agents automatically:

```yaml
# Agent values.yaml
runner:
  enabled: true
  orgId: "<your:tkcorg_:organization_id>"
  register: 
    token: "<agent-join-token>"
  
listener:
  enabled: true

cloud:
  url: "<your-testkube-domain>:443"
```

:::tip
For more details on self-registering agents, see the [Multi-Agent Runner Helm Chart documentation](/articles/multi-agent-runner-helm-chart#self-registering-agent-helm-install).
:::

:::warning
**Security Note**: Agent Join Tokens should be treated as sensitive credentials. Store them securely using Kubernetes secrets, vault systems, or your CI/CD platform's secret management.
:::

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

testkube-operator:
  enabled: false
```

By default, Testkube monitors events across the entire Kubernetes cluster to trigger the execution of a Test Workflow with the [Kubernetes Event Triggers](/articles/test-triggers)
functionality. You might want to limit the namespaces that Testkube observes due to security restrictions, in which case you can use the `multinamespace` configuration:

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

Testkube enables GitOps practices by storing configuration within custom resources, such as the TestWorkflow CRD. By default, Testkube will only watch for custom Testkube resources within the namespace where it is installed. It is currently unsupported to change this behaviour.

## Bring Your Own Infra

Testkube supports integrating with existing infrastructure components such as MongoDB, NATS, Dex, etc. For production environments, it's recommended to use your own infra or to harden the sub-charts.

### MongoDB

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
