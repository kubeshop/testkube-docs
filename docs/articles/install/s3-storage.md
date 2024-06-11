# Installation with S3 Storage and IAM Authentication

To use S3 as storage, the steps are as follows:

1. Configure IAM role with the following permissions:

  s3:DeleteObject
  s3:GetObject
  s3:ListBucket
  s3:PutObject


2. Create a ServiceAccount with the ARN specified.
   e.g.

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  annotations:
    eks.amazonaws.com/role-arn: arn:aws:iam::265500248336:role/minio-example
  name: s3-access
  namespace: testkube
```
In the Helm values.yaml file:
3. Add the ARN annotation from above to `testkube-api.serviceAccount.annotations`.
4. Link the ServiceAccount to the `testkube-api.minio.serviceAccountName` and to `testkube-api.jobServiceAccountName`.
5. Leave `minio.minioRootUser`, `minio.minioRootPassword` and `storage.port` empty.
6. Set `storage.endpoint` to `s3.amazonaws.com`.

7. Install using Helm and the values file with the above modifications.

