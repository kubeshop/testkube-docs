# Deploying on OpenShift

When deploying Testkube in an OpenShift cluster, you can expose its public endpoints using OpenShift Routes while securing them with custom certificates.

## Prerequisites
- OpenShift cluster (version 4.5 and later)
- OpenShift CLI installed with the same version of the cluster (or later).
- HAProxy router
- A valid certificate chain, including a leaf certificate, an intermediate certificate, and a CA certificate
- [HTTP/2](https://docs.openshift.com/container-platform/4.17/networking/networking_operators/ingress-operator.html#nw-enable-http2_configuring-ingress) enabled on the Ingress Controller (required for GRPC connections)
- DNS records for Testkube endpoints configured in your domain provider

If you're using [ExternalDNS](https://kubernetes-sigs.github.io/external-dns/v0.14.0/tutorials/openshift/#for-ocp-4x), update its deployment by adding `--source` and `--openshift-router-name`. In our case we use default router, so the configuration will look like the following:
```yaml
spec:
  containers:
  - args:
    - --source=openshift-route
    - --openshift-router-name=default
    - --metrics-address=:7979
    - --log-level=info
    - --log-format=text
    - --domain-filter=testkube.dev
    - --policy=upsert-only
    - --provider=cloudflare
    - --registry=txt
    - --interval=1m
    - --txt-owner-id=external-dns-testkube-cloud
    - --cloudflare-proxied
    - --cloudflare-dns-records-per-page=100
```

## Creating secrets with the certificates
To get started, we need to create Kubernetes secrets containing the required certificates. This includes:
- A leaf certificate (also known as an end-entity certificate).
- A CA certificate bundle containing the intermediate and root CA certificates for trust validation.

The leaf certificate must be valid for the hostnames you have selected to expose Control Plane interfaces, or it can be a wildcard certificate to cover all hostnames under a subdomain.

### Creating a Secret for the Leaf Certificate
The leaf certificate must be stored in a Kubernetes secret with the keys `tls.crt` (certificate) and `tls.key` (private key).
Run the following command to create the secret:
```
kubectl create secret tls my-tls-secret --cert=/path/to/certs/tls.crt --key=/path/to/certs/tls.key
```
The secret must be created in the namespace where the **Control Plane** is deployed.

### Creating a Certificate Bundle for CA Trust
In addition to the leaf certificate, we need a certificate bundle that includes both the **intermediate** and **root CA** certificates. This bundle is required for validating the chain of trust.
:::note

When creating the bundle, ensure that the intermediate CA is listed **first**, followed by the root CA:

:::

✅ Intermediate CA first, then Root CA:

```editorconfig
-----BEGIN CERTIFICATE-----
(Intermediate CA certificate)
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
(Root CA certificate)
-----END CERTIFICATE-----
```

To create the bundle file, run:
```yaml
cat intermediate.crt rootCA.crt > ca.crt
```
Then, create a Kubernetes secret containing the CA bundle:
```yaml
kubectl -n <namespace> create secret generic <secret-name> --from-file=ca.crt=<path-to-ca-bundle>
```

Ensure this secret is created in the namespace where the **Control Plane** and **Agent** are running, so they can use it for secure communication.

## Prepare Testkube Helm Charts for Deployment 
Since we are using OpenShift Routes instead of Ingress, we need to **disable** the Ingress configuration in the Helm chart and ensure that TLS is properly configured using our leaf certificate.
Add this configuration to your Control Plane `values.yaml` file:

```yaml
## Disable Ingress configurations
global:
  ingress:
    enabled: false
dex:
  ingress:
    enabled: false #dex has to be disabled separately for now

## Enable https for the API
testkube-cloud-api:
  api:
    tls:
      serveHTTPS: true
      tlsSecret: my-tls-secret
```
As we are using a private CA, we need to ensure that Testkube trusts the certificate chain. Please refer to the following guide for detailed steps on adding a CA bundle to the `values.yaml`:
[Testkube Private CA Configuration](https://docs.testkube.io/articles/private-ca#configurations)

## Creating OpenShift Routes

Once we deploy Testkube helm charts we need to create Openshift Routes to point to Testkube specific endpoints.
For the dashboard, MinIo and Dex we may use **Edge** termination as they do not need to terminate TLS at application level. For this we need a leaf certificate with a key and a CA bundle containing intermediate and a CA certificate. More on creating an edge route can be found [here](https://docs.openshift.com/container-platform/4.8/networking/routes/secured-routes.html#nw-ingress-creating-an-edge-route-with-a-custom-certificate_secured-routes).

**_Dashboard_**
```yaml
oc create route edge testkube-enterprise-ui --service=testkube-enterprise-ui --port=8080 --cert=tls.crt --key=tls.key --ca-cert=ca-chain.crt --hostname=dashboard.openshift.testkube.dev --namespace testkube-control-plane
```

**_Minio_**
```yaml
oc create route edge testkube-enterprise-minio --service=testkube-enterprise-minio --port=minio-api --cert=tls.crt --key=tls.key --ca-cert=ca-chain.crt  --hostname=storage.openshift.testkube.dev --namespace testkube-control-plane
```

**_Dex_**
```yaml
 oc create route edge testkube-enterprise-dex --service=testkube-enterprise-dex --port=5556 --cert=tls.crt --key=tls.key --ca-cert=ca-chain.crt  --hostname=api.openshift.testkube.dev --namespace testkube-control-plane --path=/idp
```

**_GRPC (Agent endpoint)_**

The [gRPC protocol relies on HTTP/2](https://www.redhat.com/en/blog/grpc-or-http/2-ingress-connectivity-in-openshift) for communication. The connection from HAProxy to the application pod can use HTTP/2 only for re-encrypt or passthrough routes and not for edge-terminated or insecure routes.
```yaml
oc create route passthrough testkube-enterprise-grpc --service=testkube-enterprise-api --port=grpcs -n testkube-control-plane --hostname agent.openshift.testkube.dev
```

**_API_**

As Testkube uses the same hostname for the Dex and the API, therefore, we need to use the reencrypt route to avoid _HostAlreadyClaimed_ error.
```yaml
oc create route reencrypt testkube-enterprise-api --service=testkube-enterprise-api --port=https --cert=tls.crt --key=tls.key --ca-cert=ca-chain.crt --dest-ca-cert=ca-chain.crt --hostname=api.openshift.testkube.dev --namespace testkube-control-plane
```
Now try accessing the Control Plane Dashboard and configuring an environment to verify that OpenShift Routes are working properly.

Check more information on Openshift Routes [here](https://www.redhat.com/en/blog/encryption-secure-routes-openshift).