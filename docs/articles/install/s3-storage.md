# Installation with S3 Storage and IAM Authentication

To use S3 as storage, the steps are as follows:

## 1. Configure IAM role

Configure IAM role with the following permissions:

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
      "Resource": "arn:aws:s3:::<BUCKET>"
    },
    {
      "Effect": "Allow",
      "Action": [
          "s3:GetObject",
          "s3:PutObject"
      ],
      "Resource": "arn:aws:s3:::<BUCKET>/*"
    }
  ]
}
  ```  

## 2. Establish Trust Relationship

A Trust Relationship needs to be established in the IAM role to allow the Testkube API's ServiceAccount to assume it:

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
          "oidc.eks.us-east-1.amazonaws.com/id/<CLUSTER_ID>:sub": [
              "system:serviceaccount:testkube-enterprise:testkube-enterprise-api",
              "system:serviceaccount:testkube-enterprise:testkube-worker-service"
          ]
        }
      }
    }
  ]
}
```

This will grant the Testkube API’s and Worker Service Accounts (testkube-enterprise-api and testkube-worker-service Service Account in the namespace testkube-enterprise) to assume the created Role which grants access to AWS S3.

## 3. Configure for AWS S3

The following configuration should be provided to the testkube-enterprise Helm chart to configure 
the Testkube API and Worker service to use AWS S3 for storage:

```yaml
global:
  storage:
    endpoint: s3.amazonaws.com
    region: <AWS_REGION>
    outputsBucket: <BUCKET>
    secure: true
    accessKeyId: ""
    secretAccessKey: ""
    
testkube-cloud-api:
  serviceAccount:
    create: true
    name: testkube-enterprise-api
    annotations:
      eks.amazonaws.com/role-arn: arn:aws:iam::<ACCOUNT_ID>:role/<ROLE_NAME>

testkube-worker-service:
  serviceAccount:
  create: true
  name: testkube-worker-service
  annotations:
    eks.amazonaws.com/role-arn: arn:aws:iam::<ACCOUNT_ID>:role/<ROLE_NAME>

minio:
  enabled: false
 ```

You may also provide your own Service Account and in that case `testkube-cloud-api.serviceAccount.create` should be set to `false` and `testkube-cloud-api.serviceAccount.name` should be set to the name of the external Service Account.

:::note
`accessKeyId` and `secretAccessKey` must be set to `""` in order auth to be defaulted to IAM-based.
:::

## Configure CORS for S3
To allow the Testkube Dashboard to retrieve TestWorkflow artifacts directly from your S3 bucket, you must configure Cross-Origin Resource Sharing (CORS) for that bucket.

*Allowed Origins:* Specify only the Testkube UI domain that will access your bucket.

*Allowed methods:* GET, OPTIONS.

*Allowed Headers:* `*` is fine (or specific `Authorization`, `Range`, `Content-Type` ), expose `Content-Length`, `Content-Type`, `ETag`

*Max age:* 3600s (1 hour)