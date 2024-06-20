# Installation with S3 Storage and IAM Authentication

To use S3 as storage, the steps are as follows:

1. Configure IAM role with the following permissions:

  ```yaml
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
          "s3:ListBucket",
          "s3:GetBucketLocation"
      ],
      "Resource": "arn:aws:s3:::testkube-test-irsa"
    },
    {
      "Effect": "Allow",
      "Action": [
          "s3:GetObject",
          "s3:PutObject"
      ],
      "Resource": "arn:aws:s3:::testkube-test-irsa/*"
    }
  ]
}
  ```  
Replace `testkube-test-irsa` with the name of your own bucket.

3. A Trust Relationship needs to be established in the IAM role to allow the Testkube Enterprise API's ServiceAccount to assume it:

```yaml
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::<ACCOUNT_ID>:oidc-provider/oidc.eks.us-east-1.amazonaws.com/id/<CLUSTER_ID>"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "oidc.eks.us-east-1.amazonaws.com/id/<CLUSTER_ID>:sub": "system:serviceaccount:testkube-enterprise:testkube-enterprise-api"
        }
      }
    }
  ]
}
```
This will grant the Enterprise API’s Service Account (testkube-enterprise-api Service Account in the namespace testkube-enterprise) to assume the created Role which grants access to AWS S3.

4. The following configuration should be provided to the testkube-enterprise Helm chart to configure Enterprise API to use AWS S3 for storage:

```yaml
testkube-cloud-api:
  api:
    minio:
      endpoint: s3.amazonaws.com
      region: <AWS_REGION>
      accessKeyId: ""
      secretAccessKey: ""
      secure: true
  serviceAccount:
    create: true
    name: testkube-enterprise-api
    annotations:
      eks.amazonaws.com/role-arn: arn:aws:iam::<ACCOUNT_ID>:role/<ROLE_NAME>

minio:
  enabled: false
 ```

You may also provide your own Service Account and in that case `testkube-cloud-api.serviceAccount.create` should be set to `false` and `testkube-cloud-api.serviceAccount.name` should be set to the name of the external Service Account.

NOTE: `accessKeyId` and `secretAccessKey` must be set to `""` in order auth to be defaulted to IAM-based.