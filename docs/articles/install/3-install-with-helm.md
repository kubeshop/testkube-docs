# Testkube Production Install with Helm

The main Testkube Helm Charts includes both the Testkube Control Plane and Testkube Agent charts and 
let you set up a customized Testkube instance tailored to your environment. See the list of 
included [components](/articles/helm-components).

:::info
You can learn more about Testkube deployment options in the [Installation Overview](/articles/install/overview).
:::

## Prerequisites

Before you proceed with the installation, please ensure that you have the following prerequisites in place:

- A Kubernetes cluster (version 1.21+)
- [Helm](https://helm.sh/docs/intro/quickstart/) (version 3+)
- (RECOMMENDED) [cert-manager](https://cert-manager.io/docs/installation/) (version 1.11+) - Used for TLS certificate management.
- (RECOMMENDED) [NGINX Controller](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/) (version v1.8+) - Used for Ingress configuration.
- (OPTIONAL) [Prometheus Operator](https://github.com/prometheus-operator/prometheus-operator) (version 0.49+) - used for metrics collection
- Own a public/private domain for creating Ingress rules.
- License Key and/or License File, if offline access is required.

## Installing

1. Add the Testkube Helm repository:

```bash
helm repo add testkubeenterprise https://kubeshop.github.io/testkube-cloud-charts
```

2. Create and configure your values.yaml:

```bash
helm show values testkubeenterprise/testkube-enterprise > values.yaml
```

Alternatively, export one of our profiles:

```
testkube init <profile> --export > values.yaml
```

Currently available profiles are: `demo`.

3. Install the Testkube Helm Chart:

```bash
helm upgrade --install \
  --create-namespace \
  --namespace testkube \
   -f values.yaml \
  testkube testkubeenterprise/testkube-enterprise
```

## General Settings

### License

You will have to set a license key to get started with Testkube. You can also opt to use [a shared secret for your license][secret-license]. 
You can request a trial license on the [Testkube website](https://testkube.io/download), no up-front credit card required.

```yaml {2}
global:
  enterpriseLicenseKey: XXXXXX-XXXXXX-XXXXXX-XXXXXX-XXXXXX-V3
```

### Domain

You should enable ingress and configure your domain to access Testkube services:

```yaml {3,4}
global:
  ingress:
    enabled: true
  domain: "example.com"
```

By default, the following services will be exposed. You can also choose to override the subdomain for each service.

| Service        | Default            | Override                      |
|----------------|--------------------|-------------------------------|
| Dashboard      | dashboard.$domain  | global.uiSubdomain            |
| REST API       | api.$domain        | global.restApiSubdomain       |
| Dex            | api.$domain/idp    | global.restApiSubdomain       |
| gRPC API       | agent.$domain      | global.grpcApiSubdomain       |
| WebSockets API | websockets.$domain | global.websocketsApiSubdomain |
| Storage API    | storage.$domain    | global.storageApiSubdomain    |

TLS can either be handled through cert-manager or a manually defined secret. While custom TLS certificates are possible, we strongly recommend using `cert-manager` for simplified certificate manager.

:::note
TLS should be terminated at the application-level instead of the ingress-level as it will drastically enhance the performance of the gRPC and Websocket protocols. Be mindful that NGINX defaults to a downgrade from HTTP2 to HTTP1.1 when the backend service is using an insecure port.
:::

Ensure that your gateway or proxy fully supports HTTP/2, as this is a fundamental requirement for enabling gRPC endpoints. Without HTTP/2 support, gRPC communication will not function properly.
If you are deploying Testkube in an Azure environment, it is essential to use [Application Gateway for Containers](https://learn.microsoft.com/en-us/azure/application-gateway/for-containers/overview#load-balancing-features) rather than the standard Azure Application Gateway, as the latter [does not support gRPC protocol](https://github.com/Azure/application-gateway-kubernetes-ingress/issues/1015#issuecomment-2379609889).

### Auth

You will have to configure how your users can access Testkube. Testkube uses Dex which supports [the most popular identity providers](https://dexidp.io/docs/connectors/). You can find a OIDC example for Google below:

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
          issuer: https://accounts.google.com
          clientID: $GOOGLE_CLIENT_ID
          clientSecret: $GOOGLE_CLIENT_SECRET
          redirectURI: <dex endpoint>/idp/callback
```

Another example of using Google’s OpenID Connect provider that performs authorization based on groups membership:
```yaml
testkube-cloud-api:
  additionalEnv:
    OAUTH_GROUPS_SCOPE: "true"
  
dex:
  volumes:
  - name: google-auth-volume
    secret:
      secretName: google-auth-secret #secret with the SA JSON key file
  volumeMounts:
    - name: google-auth-volume
      readOnly: true
      mountPath: /home
  configTemplate:
    additionalConfig: |
    connectors:
    - type: google
      id: google
      name: Google
      config:
      clientID: $GOOGLE_CLIENT_ID
      clientSecret: $GOOGLE_CLIENT_SECRET
      redirectURI: <dex endpoint>/idp/callback
      serviceAccountFilePath: /home/googleAuth.json #path from volumeMount
      groups:
        - <group-name>
      domainToAdminEmail:
        "*": <email of a Google Workspace user>
      
```
Please note that it is required to create a k8s secret with a service account JSON key file and mount it to Dex pod. Follow official [documentation](https://dexidp.io/docs/connectors/google/) to see full configuration.


Alternatively, you can use [a local database with static users](/testkube-pro-on-prem/articles/auth#static-users) which acts as a virtual identity provider for evaluations.

Once authenticated, users will also need to be invited to org. By default, new users will automatically join the default organization. You can change this behaviour by changing [the bootstrap and invitation configuration][advanced-bootstrap].

### Prometheus Metrics

Testkube exposes Prometheus metrics on the `/metrics` endpoint and uses a `ServiceMonitor` resource to expose 
them to Prometheus. In order for this to work, you need to have `Prometheus Operator` installed in your cluster 
so that the `ServiceMonitor` resource can be created.

Use the following configuration to enable metrics:

```yaml
testkube-cloud-api:
  prometheus:
    enabled: true
```

## Shared Secrets

Testkube requires a variety of secrets to operate. Any required secret that is not provided manually will be automatically generated. You can optionally choose to specify your own secrets. For shared secrets without additional info, it’s recommended to use auto generation.

- [testkube-license][ss-license]
- testkube-default-agent-token
- testkube-minio-credentials

### Testkube License

Enter your license key which can be either an offline or online license. Replace «license» with your license.

For an online license, the format is `XXXXXX-XXXXXX-XXXXXX-XXXXXX-XXXXXX-V3`.

```
kubectl create secret generic testkube-license --from-literal=LICENSE_KEY=«license»
```

For an offline license, the format is a long string prefixed with `key/`. You will also need a license file which starts with `-----BEGIN LICENSE FILE-----`.

```
kubectl create secret generic testkube-license --from-file=LICENSE_KEY=«license key» --from-file=license.lic=license file»
```

This secret is referenced by the `global.enterpriseLicenseRef` setting. For offline licences, you will also have to set `global.enterpriseOfflineAccess: true`.

[license]: https://testkube.io/download

## Advanced Settings

Check out the [custom installation][advanced] guide to learn more about our advanced settings, including 
organization management, custom ingress controllers, production environments, and more.

[advanced]: /articles/install/advanced-install
[secret-license]: /articles/install/install-with-helm#testkube-license
[advanced-bootstrap]: /articles/install/advanced-install#organization-management
[ss-license]: /articles/install/install-with-helm#testkube-license

