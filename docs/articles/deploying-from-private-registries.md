# Using Global Parameters in Testkube Helm Charts  

Currently it is possible to use `global` setting for `imageRegistry`, `imagePullSecrets`, `labels`, `containerSecurityContext`, `podSecurityContext` for both Enterprise (Control Plane) and Agent charts. The list may extend so please check `global` section of  `values.yaml` file in the charts.

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
