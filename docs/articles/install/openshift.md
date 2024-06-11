# Installation on OpenShift Deployed on GCP

To install Testkube you need an empty OpenShift cluster. Once the cluster is up and running update `values.yaml` file, including the configuration below.

1. Add security context for MongoDB to `values.yaml`:

```yaml
mongodb:
  securityContext:
    enabled: true
    fsGroup: 1000650001
    runAsUser: 1000650001
  podSecurityContext:
    enabled: false
  containerSecurityContext:
    enabled: true
    runAsUser: 1000650001
    runAsNonRoot: true
  volumePermissions:
    enabled: false
  auth:
    enabled: false
```

2. Add security context for `Patch` and `Migrate` jobs that are a part of Testkube Operator configuration to `values.yaml`:

```yaml
testkube-operator:
  webhook:
    migrate:
      enabled: true
      securityContext:
        allowPrivilegeEscalation: false
        capabilities:
          drop: ["ALL"]

    patch:
      enabled: true
      securityContext:
        runAsNonRoot: true
        runAsUser: 1000650000
        fsGroup: 1000650000
```

3. Install Testkube specifying the path to the new `values.yaml` file

```
helm install testkube kubeshop/testkube --create-namespace --namespace testkube --values values.yaml
```

Please notice that since we've just installed MongoDB with a `testkube-mongodb` Helm release name, you are not required to reconfigure the Testkube API MongoDB connection URI. If you've installed with a different name/namespace, please adjust `--set testkube-api.mongodb.dsn: "mongodb://testkube-mongodb:27017"` to your MongoDB service.
