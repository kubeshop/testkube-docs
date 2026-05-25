# Using Seaweed

This guide explains how to run Testkube with embedded SeaweedFS as the S3-compatible storage backend for artifacts.

## Overview

By default, Testkube uses embedded MinIO for object storage.  
With SeaweedFS support, you can switch the embedded storage provider while keeping the same S3-based artifact flow.

## On-Prem Control Plane (OSS chart)

For the `testkube` Helm chart, enable SeaweedFS and set it as the storage provider:

```yaml
global:
  storageProvider: seaweedfs
  # Optional: default SeaweedFS S3 port used by API endpoint fallback
  seaweedfsS3Port: 8333

seaweedfs:
  enabled: true
  global:
    seaweedfs:
      image:
        name: kubeshop/testkube-seaweedfs
  master:
    replicas: 1
  volume:
    replicas: 1
  filer:
    replicas: 1
    s3:
      enabled: true
      port: 8333
      enableAuth: true
      existingConfigSecret: testkube-seaweedfs-s3-config
      createBuckets: []

testkube-api:
  minio:
    enabled: false
  storage:
    # SeaweedFS S3 endpoint (internal service or TLS ingress endpoint).
    endpoint: "<SEAWEED_ENDPOINT>"
    accessKeyId: "<ACCESS_KEY_ID>"
    accessKey: "<SECRET_ACCESS_KEY>"
    bucket: "testkube-artifacts"
    SSL: false
    skipVerify: false
```

### Notes

- If `testkube-api.storage.endpoint` is left empty, Testkube API uses the embedded SeaweedFS endpoint automatically.
- Endpoint examples:
  - Internal service: `<RELEASE_NAME>-seaweedfs-filer:8333`
  - Cross-namespace: `<RELEASE_NAME>-seaweedfs-filer.<NAMESPACE>.svc.cluster.local:8333`
  - TLS ingress: `seaweed.<YOUR_DOMAIN>:443` (set `SSL: true`)
- Set `testkube-api.minio.enabled: false` when using SeaweedFS.
- If you use credential secrets (`secretNameAccessKeyId` / `secretNameSecretAccessKey`), the SeaweedFS S3 config secret follows those credentials as well.

## TLS configuration

If your Seaweed endpoint is exposed over HTTPS (for example through Ingress), configure storage TLS in `testkube-api.storage`.

### Public CA certificate (recommended when possible)

```yaml
testkube-api:
  storage:
    endpoint: "seaweed.<YOUR_DOMAIN>:443"
    SSL: true
    skipVerify: false
```

### Private/self-signed CA

1. Create a secret containing the CA certificate (and optionally cert/key if you need mTLS):

```bash
kubectl -n testkube create secret generic storage-client-cert \
  --from-file=ca.crt=./ca.crt
```

2. Reference it in values:

```yaml
testkube-api:
  storage:
    endpoint: "seaweed.<YOUR_DOMAIN>:443"
    SSL: true
    skipVerify: false
    mountCACertificate: true
    certSecret:
      enabled: true
      name: storage-client-cert
      baseMountPath: /etc/client-certs/storage
      certFile: cert.crt
      keyFile: cert.key
      caFile: ca.crt
```

## Install / Upgrade example

```bash
helm upgrade --install testkube kubeshop/testkube \
  -n testkube --create-namespace \
  -f values.yaml
```

## Verify SeaweedFS is being used

1. Confirm SeaweedFS components are running:

```bash
kubectl get pods -n testkube | grep seaweed
```

2. Confirm Testkube API storage endpoint points to SeaweedFS (rendered values/env):

```bash
kubectl get deploy testkube-api-server -n testkube -o yaml | grep STORAGE_ENDPOINT -A1
```

## Credentials

You can provide storage credentials either directly in values or from Kubernetes Secrets.
For production environments, using Secrets is recommended.

### Option 1: Set credentials directly in values

```yaml
testkube-api:
  storage:
    accessKeyId: "<ACCESS_KEY_ID>"
    accessKey: "<SECRET_ACCESS_KEY>"
```

### Option 2: Use Kubernetes Secret (recommended)

1. Generate credentials:

```bash
ACCESS_KEY_ID="testkube"
SECRET_ACCESS_KEY="$(openssl rand -base64 32 | tr -d '\n')"
```

2. Create a Secret:

```bash
kubectl -n testkube create secret generic testkube-storage-creds \
  --from-literal=accessKeyId="$ACCESS_KEY_ID" \
  --from-literal=secretAccessKey="$SECRET_ACCESS_KEY"
```

3. Reference the Secret in Helm values:

```yaml
testkube-api:
  storage:
    secretNameAccessKeyId: testkube-storage-creds
    secretKeyAccessKeyId: accessKeyId
    secretNameSecretAccessKey: testkube-storage-creds
    secretKeySecretAccessKey: secretAccessKey
```

## Migration from MinIO to SeaweedFS

If you are switching an existing installation from MinIO to SeaweedFS, include a migration step for artifact data.

1. Keep your existing MinIO deployment running (source of truth during migration).
2. Deploy SeaweedFS and validate S3 connectivity/authentication.
3. Run a one-time migration job to copy objects from MinIO bucket(s) to SeaweedFS bucket(s).
4. Verify artifact read/write in Testkube.
5. Switch `global.storageProvider` to `seaweedfs` and disable MinIO.

:::note
For large datasets, run migration in a maintenance window and monitor pod resources during copy.
:::

