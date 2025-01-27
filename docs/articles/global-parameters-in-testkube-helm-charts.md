# Using Global Parameters in Testkube Helm Charts  

Currently it is possible to use `global` setting for `imageRegistry`, `imagePullSecrets`, `labels`, `containerSecurityContext`, `podSecurityContext` for both Control Plane and Agent charts. The list may extend so please check `global` section of  `values.yaml` file in the charts.

Please note you may pass both list of maps and list of strings for `imagePullSecrets` option in Testkube Control Plane and Agent charts.

Example of using `imagePullSecrets` for Testkube Control Plane helm chart:
```yaml
global:
  imagePullSecrets: 
    - name: secret1
    - name: secret2
```

```yaml
global:
  imagePullSecrets: 
    - secret1
    - secret2
```

:::caution

Please mind that `global` parameters override all local values, so if it is required to set different registries or secret names, please use `registry` and `pullSecret` parameter for each Testkube service. For example `testkube-api`:
```yaml
testkube-api:
   image: 
     registry: your-registry-name
     repository: kubeshop/testkube-api-server
     tag: "latest"
     pullPolicy: IfNotPresent
     pullSecret: 
       - your-secret-name

```
:::
