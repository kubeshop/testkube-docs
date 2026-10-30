# Identity Tokens

## What Are Identity Tokens?

An identity token is a short-lived, signed JSON Web Token (JWT) that the Testkube Control Plane issues for a running Workflow execution.
It states which Organization, Environment and Workflow the execution belongs to, and it is scoped to an audience that you choose.

Cloud providers such as AWS, Google Cloud and Azure can trust Testkube as an OpenID Connect (OIDC) identity provider.
A Workflow then exchanges its identity token for temporary cloud credentials, instead of reading a long-lived access key
from a [credential](/articles/credential-management).

**Benefits**:

- No long-lived cloud keys stored in Testkube, so there is nothing to rotate or leak
- The cloud credentials expire on their own, shortly after the execution needs them
- Access is granted in the cloud provider, per Organization, Environment or Workflow, based on the token's claims
- A new token is issued every time a step asks for one

## Usage

Request a token with the `identity_token()` expression, passing the audience that the cloud provider expects:

```yaml
spec:
  steps:
    - name: Show AWS identity
      container:
        image: amazon/aws-cli:2.27.0
        env:
          - name: AWS_WEB_IDENTITY_TOKEN
            value: '{{ identity_token("sts.amazonaws.com") }}'
      shell: |
        aws sts assume-role-with-web-identity \
          --role-arn arn:aws:iam::123456789012:role/testkube-e2e \
          --role-session-name testkube \
          --web-identity-token "$AWS_WEB_IDENTITY_TOKEN" \
          --query 'AssumedRoleUser.Arn' \
          --output text
```

:::warning Keep Exchanged Credentials Out of the Logs
Testkube masks the identity token, but not the cloud credentials you exchange it for.
`assume-role-with-web-identity` returns an access key, secret key and session token, so print only non-secret fields
with `--query`, or capture the response in a variable as in [Exchange the Token](#aws-exchange-the-token).
:::

- `identity_token()` takes exactly one argument: the audience, as a non-empty string.
- The expression is resolved inside the step's pod when the step starts, never while the Workflow is processed.
  The token is therefore never part of the pod specification.
- Each call issues a new token. Each step that calls `identity_token()` gets its own fresh token.
- The token is valid for **10 minutes**. Exchange it for cloud credentials early in the step.
- The token is masked in the logs, like the values of `credential()`.

> Make sure the audience is quoted inside the `identity_token()` function.

:::info Control Plane Only
Identity tokens are issued by the Testkube Control Plane. In a [Standalone Runner](/articles/install/standalone-agent)
the expression fails with `identity tokens are not supported in the standalone version`.

If the Control Plane has no signing key configured, the expression fails with
`identity tokens are not configured in this Control Plane`. Testkube Enterprise (on-prem) users enable the feature
as described in [Self-Managed Enterprise Configuration](#self-managed-enterprise-configuration).
:::

## Token Contents

The token is signed with RS256, and its header carries the `kid` of the signing key. It is only issued for an execution that is still running.

| Claim             | Value                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------ |
| `iss`             | The issuer URL of the Control Plane: its public API URL, such as `https://api.testkube.io` |
| `sub`             | `organization:<organization ID>:environment:<environment ID>:workflow:<workflow name>`     |
| `aud`             | The audience passed to `identity_token()`                                                  |
| `iat`, `nbf`      | The time the token was issued                                                              |
| `exp`             | 10 minutes after `iat`                                                                     |
| `jti`             | A unique ID of the token                                                                   |
| `organization_id` | The ID of the Organization                                                                 |
| `environment_id`  | The ID of the Environment                                                                  |
| `workflow`        | The name of the Workflow                                                                   |
| `execution_id`    | The ID of the execution                                                                    |
| `runner_id`       | The ID of the Runner that runs the execution                                               |

A decoded payload looks like this:

```json
{
  "iss": "https://api.testkube.io",
  "sub": "organization:tkcorg_0123456789abcdef:environment:tkcenv_0123456789abcdef:workflow:e2e-tests",
  "aud": "sts.amazonaws.com",
  "iat": 1761811200,
  "nbf": 1761811200,
  "exp": 1761811800,
  "jti": "5c1f0a52-8a0e-4f4e-9d8e-2b6f1a7c3d90",
  "organization_id": "tkcorg_0123456789abcdef",
  "environment_id": "tkcenv_0123456789abcdef",
  "workflow": "e2e-tests",
  "execution_id": "6902f7c0a1b2c3d4e5f60718",
  "runner_id": "<runner ID>"
}
```

The cloud provider verifies the signature with the public keys that the Control Plane publishes, without authentication, at:

- `<issuer>/.well-known/openid-configuration`
- `<issuer>/.well-known/jwks.json`

To find the exact issuer URL to register in the cloud provider, open `<API URL>/.well-known/openid-configuration` and copy its `issuer` field.
The examples below use `https://api.testkube.io`.

:::tip Narrow the Subject
The workflow name alone is not unique: two Environments can each have a Workflow with the same name.
Always match the full `sub` claim, or at least the Organization and Environment IDs, when granting access.
You can find both IDs in the Dashboard URL (`/organization/<organization ID>/environment/<environment ID>/`).
:::

## AWS

### 1. Create the OIDC Identity Provider

Register the Control Plane as an IAM OIDC identity provider, with `sts.amazonaws.com` as the audience:

```bash
aws iam create-open-id-connect-provider \
  --url https://api.testkube.io \
  --client-id-list sts.amazonaws.com
```

### 2. Create a Role That Trusts It

Create an IAM role with a trust policy that only accepts tokens for your Environment.
The condition keys are the issuer host followed by `:aud` and `:sub`:

```json title="trust-policy.json"
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::123456789012:oidc-provider/api.testkube.io"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "api.testkube.io:aud": "sts.amazonaws.com"
        },
        "StringLike": {
          "api.testkube.io:sub": "organization:tkcorg_0123456789abcdef:environment:tkcenv_0123456789abcdef:workflow:*"
        }
      }
    }
  ]
}
```

```bash
aws iam create-role \
  --role-name testkube-e2e \
  --assume-role-policy-document file://trust-policy.json
```

Use `StringEquals` on `:sub` to allow a single Workflow, or `StringLike` with a `*` to allow every Workflow in the Environment.
IAM only offers `aud` and `sub` as condition keys for an OIDC provider, so the custom claims such as `workflow` cannot be used here.
Then attach the permission policies that the role needs.

### 3. Exchange the Token {#aws-exchange-the-token}

The simplest option is to exchange the token once, at the start of the step, and export the temporary credentials:

```yaml
spec:
  steps:
    - name: Run tests against AWS
      container:
        image: amazon/aws-cli:2.27.0
        env:
          - name: TK_IDENTITY_TOKEN
            value: '{{ identity_token("sts.amazonaws.com") }}'
      shell: |
        set -e
        creds=$(aws sts assume-role-with-web-identity \
          --role-arn arn:aws:iam::123456789012:role/testkube-e2e \
          --role-session-name "testkube-{{ execution.id }}" \
          --web-identity-token "$TK_IDENTITY_TOKEN" \
          --duration-seconds 3600 \
          --query 'Credentials.[AccessKeyId,SecretAccessKey,SessionToken]' \
          --output text)
        export AWS_ACCESS_KEY_ID=$(printf '%s' "$creds" | cut -f1)
        export AWS_SECRET_ACCESS_KEY=$(printf '%s' "$creds" | cut -f2)
        export AWS_SESSION_TOKEN=$(printf '%s' "$creds" | cut -f3)
        aws sts get-caller-identity
```

`--duration-seconds` can go up to the role's maximum session duration, so this option also suits steps that run for a long time.

Alternatively, let the AWS CLI or SDK assume the role itself. Their web identity provider reads the token from the file in
`AWS_WEB_IDENTITY_TOKEN_FILE`, so write the token to that file when the step starts:

```yaml
spec:
  steps:
    - name: Run tests against AWS
      container:
        image: amazon/aws-cli:2.27.0
        env:
          - name: TK_IDENTITY_TOKEN
            value: '{{ identity_token("sts.amazonaws.com") }}'
          - name: AWS_ROLE_ARN
            value: arn:aws:iam::123456789012:role/testkube-e2e
          - name: AWS_ROLE_SESSION_NAME
            value: testkube
          - name: AWS_WEB_IDENTITY_TOKEN_FILE
            value: /tmp/aws-web-identity-token
      shell: |
        printf '%s' "$TK_IDENTITY_TOKEN" > "$AWS_WEB_IDENTITY_TOKEN_FILE"
        aws sts get-caller-identity
```

:::warning SDK Credential Refresh
The SDK re-reads `AWS_WEB_IDENTITY_TOKEN_FILE` every time its AWS session expires (one hour by default).
The token in the file was issued when the step started and expires 10 minutes later, so the refresh fails.

- The first AWS call must happen within 10 minutes of the step starting.
- A step that runs longer than the AWS session must exchange the token up front, as in the first example,
  instead of relying on the SDK refresh.
- Split long work into several steps: each step that calls `identity_token()` gets its own fresh token.

:::

## Google Cloud

Google Cloud trusts the token through [Workload Identity Federation](https://cloud.google.com/iam/docs/workload-identity-federation).

### 1. Create a Pool and an OIDC Provider

```bash
gcloud iam workload-identity-pools create testkube \
  --location=global \
  --display-name="Testkube"

gcloud iam workload-identity-pools providers create-oidc testkube \
  --location=global \
  --workload-identity-pool=testkube \
  --issuer-uri="https://api.testkube.io" \
  --attribute-mapping="google.subject=assertion.sub,attribute.organization_id=assertion.organization_id,attribute.environment_id=assertion.environment_id,attribute.workflow=assertion.workflow" \
  --attribute-condition="assertion.organization_id == 'tkcorg_0123456789abcdef' && assertion.environment_id == 'tkcenv_0123456789abcdef'"
```

Without `--allowed-audiences`, the provider accepts the audience
`https://iam.googleapis.com/projects/<project number>/locations/global/workloadIdentityPools/testkube/providers/testkube`.
Pass that value to `identity_token()`.

:::note
`google.subject` is limited to 127 bytes. A long workflow name can make the `sub` claim longer than that, and the exchange then fails.
In that case map `google.subject` to a shorter value, such as `assertion.workflow`, and keep the Organization and Environment checks in the attribute condition.
:::

### 2. Grant Access

Grant roles to the Workflows of the pool, for example to every execution of the `e2e-tests` Workflow:

```bash
gcloud projects add-iam-policy-binding my-project \
  --role="roles/storage.objectViewer" \
  --member="principalSet://iam.googleapis.com/projects/<project number>/locations/global/workloadIdentityPools/testkube/attribute.workflow/e2e-tests"
```

Use `principal://iam.googleapis.com/projects/<project number>/locations/global/workloadIdentityPools/testkube/subject/<sub>` to grant a role to a single subject.
To impersonate a service account instead, grant the `roles/iam.workloadIdentityUser` role on that service account to the same member.

### 3. Exchange the Token {#gcp-exchange-the-token}

Google's client libraries and `gcloud` read the token from a credential configuration file.
The configuration file holds no secret, so the step can generate it:

```yaml
spec:
  steps:
    - name: Run tests against Google Cloud
      container:
        image: gcr.io/google.com/cloudsdktool/google-cloud-cli:stable
        env:
          - name: TK_IDENTITY_TOKEN
            value: '{{ identity_token("https://iam.googleapis.com/projects/123456789012/locations/global/workloadIdentityPools/testkube/providers/testkube") }}'
          - name: GOOGLE_APPLICATION_CREDENTIALS
            value: /tmp/gcp-credentials.json
      shell: |
        set -e
        printf '%s' "$TK_IDENTITY_TOKEN" > /tmp/gcp-identity-token
        gcloud iam workload-identity-pools create-cred-config \
          projects/123456789012/locations/global/workloadIdentityPools/testkube/providers/testkube \
          --credential-source-file=/tmp/gcp-identity-token \
          --output-file="$GOOGLE_APPLICATION_CREDENTIALS"
        gcloud auth login --cred-file="$GOOGLE_APPLICATION_CREDENTIALS"
        gcloud storage ls gs://my-test-bucket
```

Add `--service-account=<email>` to `create-cred-config` to impersonate a service account.
The libraries re-read the token file when their access token expires (after one hour), so the same caveat as for the
[AWS SDK](#aws-exchange-the-token) applies to long-running steps.

## Azure

Azure trusts the token through a federated identity credential on a Microsoft Entra app registration (or a user-assigned managed identity).

### 1. Add a Federated Identity Credential

The subject must equal the `sub` claim exactly; Azure does not accept wildcards in it.
Add one federated credential per Workflow:

```json title="credential.json"
{
  "name": "testkube-e2e-tests",
  "issuer": "https://api.testkube.io",
  "subject": "organization:tkcorg_0123456789abcdef:environment:tkcenv_0123456789abcdef:workflow:e2e-tests",
  "audiences": ["api://AzureADTokenExchange"]
}
```

```bash
az ad app federated-credential create \
  --id <application (client) ID> \
  --parameters credential.json
```

The `issuer` must match the `iss` claim character for character, including the absence of a trailing slash.
Then assign Azure roles to the app's service principal.

### 2. Exchange the Token {#azure-exchange-the-token}

```yaml
spec:
  steps:
    - name: Run tests against Azure
      container:
        image: mcr.microsoft.com/azure-cli
        env:
          - name: TK_IDENTITY_TOKEN
            value: '{{ identity_token("api://AzureADTokenExchange") }}'
          - name: AZURE_CLIENT_ID
            value: 00000000-0000-0000-0000-000000000000
          - name: AZURE_TENANT_ID
            value: 11111111-1111-1111-1111-111111111111
      shell: |
        set -e
        az login --service-principal \
          --username "$AZURE_CLIENT_ID" \
          --tenant "$AZURE_TENANT_ID" \
          --federated-token "$TK_IDENTITY_TOKEN"
        az group list --output table
```

The Azure SDK credentials `DefaultAzureCredential` and `WorkloadIdentityCredential` read the token from the file in
`AZURE_FEDERATED_TOKEN_FILE`, together with `AZURE_CLIENT_ID` and `AZURE_TENANT_ID`.
Write the token to that file at the start of the step, as in the [AWS SDK](#aws-exchange-the-token) example, with the same caveat for long-running steps.

## Self-Managed Enterprise Configuration

In Testkube Cloud, the issuer is `https://api.testkube.io` and there is nothing to configure.

For an on-prem (Enterprise) installation, the feature is off until you give the Control Plane API a signing key.
Set these environment variables on the Control Plane API:

| Variable                          | Description                                                                                                                                                     |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `IDENTITY_TOKEN_ISSUER`           | The public URL of the Control Plane API, written to the `iss` claim. The cloud provider must reach `<issuer>/.well-known/openid-configuration` at this address. |
| `IDENTITY_TOKEN_PRIVATE_KEY_FILE` | The path to a PEM-encoded RSA private key (PKCS#1 or PKCS#8, at least 2048 bits). When it is empty, identity tokens are off.                                    |

Generate a key and store it in a Kubernetes Secret:

```bash
openssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:2048 -out identity-token.pem

kubectl create secret generic testkube-identity-token-key \
  --namespace <your-namespace> \
  --from-file=identity-token.pem
```

Mount the Secret into the Control Plane API pod as a file, and point `IDENTITY_TOKEN_PRIVATE_KEY_FILE` at the mounted path.

:::note Key Rotation
Replacing the key invalidates the tokens already issued with the old one.
As tokens live for 10 minutes, rotating the key only affects executions that are exchanging a token at that moment.
:::

## Limitations

- Identity tokens require a Testkube Control Plane; they are not available in the [Standalone Runner](/articles/install/standalone-agent#agent-limitations-in-standalone-mode).
- The Control Plane signs with a single key, and the JWKS publishes only that key.
- A token always carries the same claims for a given Workflow; narrowing permissions per run is not supported yet.
