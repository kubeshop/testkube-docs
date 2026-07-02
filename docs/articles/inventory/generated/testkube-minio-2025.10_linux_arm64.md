---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:e75fb3348827cf5a32b19757114e412c26417de33f1a03919bbd90d1e11b8952</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 12" src="https://img.shields.io/badge/critical-12-8b1924"/> <img alt="high: 46" src="https://img.shields.io/badge/high-46-e25d68"/> <img alt="medium: 48" src="https://img.shields.io/badge/medium-48-fbb552"/> <img alt="low: 51" src="https://img.shields.io/badge/low-51-fce1a9"/> <img alt="unspecified: 25" src="https://img.shields.io/badge/unspecified-25-lightgrey"/></td></tr>
<tr><td>platform</td><td>linux/arm64</td></tr>
<tr><td>size</td><td>85 MB</td></tr>
<tr><td>packages</td><td>416</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 7" src="https://img.shields.io/badge/C-7-8b1924"/> <img alt="high: 2" src="https://img.shields.io/badge/H-2-e25d68"/> <img alt="medium: 4" src="https://img.shields.io/badge/M-4-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/crypto</strong> <code>0.46.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/crypto@0.46.0</code></small><br/>

```dockerfile
# minio-release.dockerfile (87:87)
COPY --from=build /build/mc/mc /opt/bitnami/common/bin/mc
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-46595?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="critical : CVE--2026--46595" src="https://img.shields.io/badge/CVE--2026--46595-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.440%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>35th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Previously, CVE-2024-45337 fixed an authorization bypass for misused ssh server configurations; if any other type of callback is passed other than public key, then the source-address validation would be skipped.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42508?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="critical : CVE--2026--42508" src="https://img.shields.io/badge/CVE--2026--42508-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.457%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>36th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Previously, a revoked 'SignatureKey' belonging to a CA was not correctly checked for revocation. Now, both the 'key' and 'key.SignatureKey' are checked for @<!-- -->revoked.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39834?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="critical : CVE--2026--39834" src="https://img.shields.io/badge/CVE--2026--39834-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.466%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>37th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When writing data larger than 4GB in a single Write call on an SSH channel, an integer overflow in the internal payload size calculation caused the write loop to spin indefinitely, sending empty packets without making progress. The size comparison now uses int64 to prevent truncation.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39833?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="critical : CVE--2026--39833" src="https://img.shields.io/badge/CVE--2026--39833-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.360%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>28th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The in-memory keyring returned by NewKeyring() silently accepted keys with the ConfirmBeforeUse constraint but never enforced it. The key would sign without any confirmation prompt, with no indication to the caller that the constraint was not in effect. NewKeyring() now returns an error when unsupported constraints are requested.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39832?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="critical : CVE--2026--39832" src="https://img.shields.io/badge/CVE--2026--39832-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.338%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>26th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When adding a key to a remote agent constraint extensions such as restrict-destination-v00@<!-- -->openssh.com were not serialized in the request. Destination restrictions were silently stripped when forwarding keys, allowing unrestricted use of the key on the remote host. The client now serializes all constraint extensions. Additionally, the in-memory keyring returned by NewKeyring() now rejects keys with unsupported constraint extensions instead of silently ignoring them.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39831?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="critical : CVE--2026--39831" src="https://img.shields.io/badge/CVE--2026--39831-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.373%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>29th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Verify() method for FIDO/U2F security key types (sk-ecdsa-sha2-nistp256@<!-- -->openssh.com, sk-ssh-ed25519@<!-- -->openssh.com) did not check the User Presence flag. Signatures generated without physical touch were accepted, allowing unattended use of a hardware security key. To restore the previous behavior, return a "no-touch-required" extension in Permissions.Extensions from PublicKeyCallback.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39830?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="critical : CVE--2026--39830" src="https://img.shields.io/badge/CVE--2026--39830-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.500%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>39th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A malicious SSH peer could send unsolicited global request responses to fill an internal buffer, blocking the connection's read loop. The blocked goroutine could not be released by calling Close(), resulting in a resource leak per connection. Unsolicited global responses are now discarded.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-46597?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="high : CVE--2026--46597" src="https://img.shields.io/badge/CVE--2026--46597-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.359%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>28th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An incorrectly placed cast from bytes to int allowed for server-side panic in the AES-GCM packet decoder for well-crafted inputs.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39829?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="high : CVE--2026--39829" src="https://img.shields.io/badge/CVE--2026--39829-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.389%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>31st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The RSA and DSA public key parsers did not enforce size limits on key parameters. A crafted public key with an excessively large modulus or DSA parameter could cause several minutes of CPU consumption during signature verification. This could be triggered by unauthenticated clients during public key authentication. RSA moduli are now limited to 8192 bits, and DSA parameters are validated per FIPS 186-2.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39827?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="medium : CVE--2026--39827" src="https://img.shields.io/badge/CVE--2026--39827-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.196%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>10th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An authenticated SSH client that repeatedly opened channels which were rejected by the server caused unbounded memory growth, eventually crashing the server process and affecting all connected users. Rejected channels are now properly removed from the connection's internal state and released for garbage collection.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39828?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="medium : CVE--2026--39828" src="https://img.shields.io/badge/CVE--2026--39828-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.221%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>13th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When an SSH server authentication callback returned PartialSuccessError with non-nil Permissions, those permissions were silently discarded, potentially dropping certificate restrictions such as force-command after a second factor succeeded. Returning non-nil Permissions with PartialSuccessError now results in a connection error.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-46598?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="medium : CVE--2026--46598" src="https://img.shields.io/badge/CVE--2026--46598-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.313%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>23rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

For certain crafted inputs, a 'ed25519.PrivateKey' was created by casting malformed wire bytes, leading to a panic when used.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39835?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="medium : CVE--2026--39835" src="https://img.shields.io/badge/CVE--2026--39835-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.273%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>19th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

SSH servers which use CertChecker as a public key callback without setting IsUserAuthority or IsHostAuthority could be caused to panic by a client presenting a certificate. CertChecker now returns an error instead of panicking when these callbacks are nil.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 2" src="https://img.shields.io/badge/C-2-8b1924"/> <img alt="high: 5" src="https://img.shields.io/badge/H-5-e25d68"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/minio/minio</strong> <code>0.0.0-20251015172955-9e49d5e7a648+dirty</code> (golang)</summary>

<small><code>pkg:golang/github.com/minio/minio@0.0.0-20251015172955-9e49d5e7a648%2Bdirty</code></small><br/>

```dockerfile
# minio-release.dockerfile (91:91)
COPY --from=build /build/minio/minio /opt/bitnami/common/bin/minio
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-33322?s=github&n=minio&ns=github.com%2Fminio&t=golang&vr=%3C%3D0.0.0-20260212201848-7aac2a2c5b7c"><img alt="critical 9.2: CVE--2026--33322" src="https://img.shields.io/badge/CVE--2026--33322-lightgrey?label=critical%209.2&labelColor=8b1924"/></a> <i>Improper Authentication</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=0.0.0-20260212201848-7aac2a2c5b7c</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>9.2</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:N/VC:H/VI:H/VA:H/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.410%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>33rd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.394%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>31st percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.349%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.418%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>34th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>1.508%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>71st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Minio a Allocation of Memory Without Limits or Throttling vulnerability in write-to-RAM.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39414?s=github&n=minio&ns=github.com%2Fminio&t=golang&vr=%3E%3D0.0.0-20180815103019-7c14cdb60e53%2C%3C%3D0.0.0-20251203081239-27742d469462"><img alt="high 7.1: CVE--2026--39414" src="https://img.shields.io/badge/CVE--2026--39414-lightgrey?label=high%207.1&labelColor=e25d68"/></a> <i>Allocation of Resources Without Limits or Throttling</i>

<table>
<tr><td>Affected range</td><td><code>>=0.0.0-20180815103019-7c14cdb60e53<br/><=0.0.0-20251203081239-27742d469462</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>7.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:L/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.485%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>38th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.124%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>8.457%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>94th percentile</code></td></tr>
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
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 16" src="https://img.shields.io/badge/H-16-e25d68"/> <img alt="medium: 19" src="https://img.shields.io/badge/M-19-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>stdlib</strong> <code>1.25.0</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.25.0</code></small><br/>

```dockerfile
# minio-release.dockerfile (87:87)
COPY --from=build /build/mc/mc /opt/bitnami/common/bin/mc
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-68121?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0-0%2C%3C1.25.7"><img alt="critical : CVE--2025--68121" src="https://img.shields.io/badge/CVE--2025--68121-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0-0<br/><1.25.7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.765%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>51st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

During session resumption in crypto/tls, if the underlying Config has its ClientCAs or RootCAs fields mutated between the initial handshake and the resumed handshake, the resumed handshake may succeed when it should have failed. This may happen when a user calls Config.Clone and mutates the returned Config, or uses Config.GetConfigForClient. This can cause a client to resume a session with a server that it would not have resumed with during the initial handshake, or cause a server to resume a session with a client that it would not have resumed with during the initial handshake.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42504?s=golang&n=stdlib&t=golang&vr=%3C1.25.11"><img alt="high : CVE--2026--42504" src="https://img.shields.io/badge/CVE--2026--42504-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.560%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>42nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Decoding a maliciously-crafted MIME header containing many invalid encoded-words can consume excessive CPU.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42499?s=golang&n=stdlib&t=golang&vr=%3C1.25.10"><img alt="high : CVE--2026--42499" src="https://img.shields.io/badge/CVE--2026--42499-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.768%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>51st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Pathological inputs could cause DoS through consumePhrase when parsing an email address according to RFC 5322.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39836?s=golang&n=stdlib&t=golang&vr=%3C1.25.10"><img alt="high : CVE--2026--39836" src="https://img.shields.io/badge/CVE--2026--39836-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.588%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>44th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Dial and LookupPort functions panic on Windows when provided with an input containing a NUL (0).

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39820?s=golang&n=stdlib&t=golang&vr=%3C1.25.10"><img alt="high : CVE--2026--39820" src="https://img.shields.io/badge/CVE--2026--39820-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.755%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>50th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Well-crafted inputs reaching ParseAddress, ParseAddressList, and ParseDate were able to trigger excessive CPU exhaustion and memory allocations.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33814?s=golang&n=stdlib&t=golang&vr=%3C1.25.10"><img alt="high : CVE--2026--33814" src="https://img.shields.io/badge/CVE--2026--33814-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.781%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>51st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When processing HTTP/2 SETTINGS frames, transport will enter an infinite loop of writing CONTINUATION frames if it receives a SETTINGS_MAX_FRAME_SIZE with a value of 0.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33811?s=golang&n=stdlib&t=golang&vr=%3C1.25.10"><img alt="high : CVE--2026--33811" src="https://img.shields.io/badge/CVE--2026--33811-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.813%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>52nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When using LookupCNAME with the cgo DNS resolver, a very long CNAME response can trigger a double-free of C memory and a crash.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32283?s=golang&n=stdlib&t=golang&vr=%3C1.25.9"><img alt="high : CVE--2026--32283" src="https://img.shields.io/badge/CVE--2026--32283-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.621%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>45th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

If one side of the TLS connection sends multiple key update messages post-handshake in a single record, the connection can deadlock, causing uncontrolled consumption of resources. This can lead to a denial of service.

This only affects TLS 1.3.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32281?s=golang&n=stdlib&t=golang&vr=%3C1.25.9"><img alt="high : CVE--2026--32281" src="https://img.shields.io/badge/CVE--2026--32281-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.349%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Validating certificate chains which use policies is unexpectedly inefficient when certificates in the chain contain a very large number of policy mappings, possibly causing denial of service.

This only affects validation of otherwise trusted certificate chains, issued by a root CA in the VerifyOptions.Roots CertPool, or in the system certificate pool.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32280?s=golang&n=stdlib&t=golang&vr=%3C1.25.9"><img alt="high : CVE--2026--32280" src="https://img.shields.io/badge/CVE--2026--32280-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.615%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>45th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

During chain building, the amount of work that is done is not correctly limited when a large number of intermediate certificates are passed in VerifyOptions.Intermediates, which can lead to a denial of service. This affects both direct users of crypto/x509 and users of crypto/tls.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-25679?s=golang&n=stdlib&t=golang&vr=%3C1.25.8"><img alt="high : CVE--2026--25679" src="https://img.shields.io/badge/CVE--2026--25679-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.728%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>50th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

url.Parse insufficiently validated the host/authority component and accepted some invalid URLs.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61729?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.5"><img alt="high : CVE--2025--61729" src="https://img.shields.io/badge/CVE--2025--61729-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.5</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.5</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.451%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>36th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Within HostnameError.Error(), when constructing an error string, there is no limit to the number of hosts that will be printed out. Furthermore, the error string is constructed by repeated string concatenation, leading to quadratic runtime. Therefore, a certificate provided by a malicious actor can result in excessive resource consumption.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61726?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.6"><img alt="high : CVE--2025--61726" src="https://img.shields.io/badge/CVE--2025--61726-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.6</code></td></tr>
<tr><td>EPSS Score</td><td><code>1.945%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>78th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The net/url package does not set a limit on the number of query parameters in a query.

While the maximum size of query parameters in URLs is generally limited by the maximum request header size, the net/http.Request.ParseForm method can parse large URL-encoded forms. Parsing a large form containing many unique query parameters can cause excessive memory consumption.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61725?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.2"><img alt="high : CVE--2025--61725" src="https://img.shields.io/badge/CVE--2025--61725-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.613%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>45th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The ParseAddress function constructs domain-literal address components through repeated string concatenation. When parsing large domain-literal components, this can cause excessive CPU consumption.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61723?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.2"><img alt="high : CVE--2025--61723" src="https://img.shields.io/badge/CVE--2025--61723-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.626%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>45th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The processing time for parsing some invalid inputs scales non-linearly with respect to the size of the input.

This affects programs which parse untrusted PEM inputs.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58188?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.2"><img alt="high : CVE--2025--58188" src="https://img.shields.io/badge/CVE--2025--58188-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.361%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>28th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Validating certificate chains which contain DSA public keys can cause programs to panic, due to a interface cast that assumes they implement the Equal method.

This affects programs which validate arbitrary certificate chains.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58187?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.3"><img alt="high : CVE--2025--58187" src="https://img.shields.io/badge/CVE--2025--58187-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.384%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>30th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Due to the design of the name constraint checking algorithm, the processing time of some inputs scale non-linearly with respect to the size of the certificate.

This affects programs which validate arbitrary certificate chains.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-27145?s=golang&n=stdlib&t=golang&vr=%3C1.25.11"><img alt="medium : CVE--2026--27145" src="https://img.shields.io/badge/CVE--2026--27145-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.650%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>47th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

(*x509.Certificate).VerifyHostname previously called matchHostnames in a loop over all DNS Subject Alternative Name (SAN) entries. This caused strings.Split(host, ".") to execute repeatedly on the same input hostname.

With a large DNS SAN list, verification costs scaled quadratically based on the number of SAN entries multiplied by the hostname's label count. Because x509.Verify validates hostnames before building the certificate chain, this overhead occurred even for untrusted certificates.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61728?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.6"><img alt="medium : CVE--2025--61728" src="https://img.shields.io/badge/CVE--2025--61728-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.643%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>46th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

archive/zip uses a super-linear file name indexing algorithm that is invoked the first time a file in an archive is opened. This can lead to a denial of service when consuming a maliciously constructed ZIP archive.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61727?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.5"><img alt="medium : CVE--2025--61727" src="https://img.shields.io/badge/CVE--2025--61727-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.5</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.5</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.270%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An excluded subdomain constraint in a certificate chain does not restrict the usage of wildcard SANs in the leaf certificate. For example a constraint that excludes the subdomain test.example.com does not prevent a leaf certificate from claiming the SAN *.example.com.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32282?s=golang&n=stdlib&t=golang&vr=%3C1.25.9"><img alt="medium : CVE--2026--32282" src="https://img.shields.io/badge/CVE--2026--32282-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.292%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

On Linux, if the target of Root.Chmod is replaced with a symlink while the chmod operation is in progress, Chmod can operate on the target of the symlink, even when the target lies outside the root.

The Linux fchmodat syscall silently ignores the AT_SYMLINK_NOFOLLOW flag, which Root.Chmod uses to avoid symlink traversal. Root.Chmod checks its target before acting and returns an error if the target is a symlink lying outside the root, so the impact is limited to cases where the target is replaced with a symlink between the check and operation.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39826?s=golang&n=stdlib&t=golang&vr=%3C1.25.10"><img alt="medium : CVE--2026--39826" src="https://img.shields.io/badge/CVE--2026--39826-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.371%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>29th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

If a trusted template author were to write a <script> tag containing an empty 'type' attribute or a 'type' attribute with an ASCII whitespace, the execution of the template would incorrectly escape any data passed into the <script> block.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39823?s=golang&n=stdlib&t=golang&vr=%3C1.25.10"><img alt="medium : CVE--2026--39823" src="https://img.shields.io/badge/CVE--2026--39823-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.314%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>23rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

CVE-2026-27142 fixed a vulnerability in which URLs were not correctly escaped inside of a <meta> tag's <content> attribute. If the URL content were to insert ASCII whitespaces around the '=' rune inside of the <content> attribute, the escaper would fail to similarly escape it, leading to XSS.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32289?s=golang&n=stdlib&t=golang&vr=%3C1.25.9"><img alt="medium : CVE--2026--32289" src="https://img.shields.io/badge/CVE--2026--32289-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.290%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Context was not properly tracked across template branches for JS template literals, leading to possibly incorrect escaping of content when branches were used. Additionally template actions within JS template literals did not properly track the brace depth, leading to incorrect escaping being applied.

These issues could cause actions within JS template literals to be incorrectly or improperly escaped, leading to XSS vulnerabilities.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-27142?s=golang&n=stdlib&t=golang&vr=%3C1.25.8"><img alt="medium : CVE--2026--27142" src="https://img.shields.io/badge/CVE--2026--27142-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.328%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>25th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Actions which insert URLs into the content attribute of HTML meta tags are not escaped. This can allow XSS if the meta tag also has an http-equiv attribute with the value "refresh".

A new GODEBUG setting has been added, htmlmetacontenturlescape, which can be used to disable escaping URLs in actions in the meta content attribute which follow "url=" by setting htmlmetacontenturlescape=0.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32288?s=golang&n=stdlib&t=golang&vr=%3C1.25.9"><img alt="medium : CVE--2026--32288" src="https://img.shields.io/badge/CVE--2026--32288-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.290%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

tar.Reader can allocate an unbounded amount of memory when reading a maliciously-crafted archive containing a large number of sparse regions encoded in the "old GNU sparse map" format.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-47910?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.1"><img alt="medium : CVE--2025--47910" src="https://img.shields.io/badge/CVE--2025--47910-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.308%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>22nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When using http.CrossOriginProtection, the AddInsecureBypassPattern method can unexpectedly bypass more requests than intended. CrossOriginProtection then skips validation, but forwards the original request path, which may be served by a different handler without the intended security protections.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42507?s=golang&n=stdlib&t=golang&vr=%3C1.25.11"><img alt="medium : CVE--2026--42507" src="https://img.shields.io/badge/CVE--2026--42507-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.370%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>29th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When returning errors, functions in the net/textproto package would include its input as part of the error. This might allow an attacker to inject misleading content to errors that are printed or logged.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39825?s=golang&n=stdlib&t=golang&vr=%3C1.25.10"><img alt="medium : CVE--2026--39825" src="https://img.shields.io/badge/CVE--2026--39825-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.390%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>31st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

ReverseProxy can forward queries containing parameters not visible to Rewrite functions.

When used with a Rewrite function, or a Director function which parses query parameters, ReverseProxy sanitizes the forwarded request to remove query parameters which are not parsed by url.ParseQuery. ReverseProxy does not take ParseQuery's limit on the total number of query parameters (controlled by GODEBUG=urlmaxqueryparams=N) into account. This can permit ReverseProxy to forward a request containing a query parameter that is not visible to the Rewrite function.

For example, the query "a1=x&a2=x&...&a10000=x&hidden=y" can forward the parameter "hidden=y" while hiding it from the proxy's Rewrite function.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61730?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.6"><img alt="medium : CVE--2025--61730" src="https://img.shields.io/badge/CVE--2025--61730-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.276%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>19th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

During the TLS 1.3 handshake if multiple messages are sent in records that span encryption level boundaries (for instance the Client Hello and Encrypted Extensions messages), the subsequent messages may be processed before the encryption level changes. This can cause some minor information disclosure if a network-local attacker can inject messages during the handshake.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61724?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.2"><img alt="medium : CVE--2025--61724" src="https://img.shields.io/badge/CVE--2025--61724-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.526%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>41st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Reader.ReadResponse function constructs a response string through repeated string concatenation of lines. When the number of lines in a response is large, this can cause excessive CPU consumption.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58189?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.2"><img alt="medium : CVE--2025--58189" src="https://img.shields.io/badge/CVE--2025--58189-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.443%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>35th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When Conn.Handshake fails during ALPN negotiation the error contains attacker controlled information (the ALPN protocols sent by the client) which is not escaped.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58186?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.2"><img alt="medium : CVE--2025--58186" src="https://img.shields.io/badge/CVE--2025--58186-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.534%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>41st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Despite HTTP headers having a default limit of 1MB, the number of cookies that can be parsed does not have a limit. By sending a lot of very small cookies such as "a=;", an attacker can make an HTTP server allocate a large amount of structs, causing large memory consumption.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58185?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.2"><img alt="medium : CVE--2025--58185" src="https://img.shields.io/badge/CVE--2025--58185-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.526%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>41st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Parsing a maliciously crafted DER payload could allocate large amounts of memory, causing memory exhaustion.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-47912?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.2"><img alt="medium : CVE--2025--47912" src="https://img.shields.io/badge/CVE--2025--47912-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.443%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>35th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Parse function permits values other than IPv6 addresses to be included in square brackets within the host component of a URL. RFC 3986 permits IPv6 addresses to be included within the host component, enclosed within square brackets. For example: "http://[::1]/". IPv4 addresses and hostnames must not appear within square brackets. Parse did not enforce this requirement.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58183?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.2"><img alt="medium : CVE--2025--58183" src="https://img.shields.io/badge/CVE--2025--58183-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.419%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>34th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

tar.Reader does not set a maximum size on the number of sparse region data blocks in GNU tar pax 1.0 sparse files. A maliciously-crafted archive containing a large number of sparse regions can cause a Reader to read an unbounded amount of data from the archive into memory. When reading from a compressed source, a small compressed input can result in large allocations.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-27139?s=golang&n=stdlib&t=golang&vr=%3C1.25.8"><img alt="low : CVE--2026--27139" src="https://img.shields.io/badge/CVE--2026--27139-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.201%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>10th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

On Unix platforms, when listing the contents of a directory using File.ReadDir or File.Readdir the returned FileInfo could reference a file outside of the Root in which the File was opened.

The impact of this escape is limited to reading metadata provided by lstat from arbitrary locations on the filesystem without permitting reading or writing files outside the root.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 2" src="https://img.shields.io/badge/H-2-e25d68"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 3" src="https://img.shields.io/badge/L-3-fce1a9"/> <!-- unspecified: 0 --><strong>perl</strong> <code>5.36.0-7+deb12u3</code> (deb)</summary>

<small><code>pkg:deb/debian/perl@5.36.0-7%2Bdeb12u3?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (44:44)
FROM debian:bookworm-slim
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-12087?s=debian&n=perl&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="critical : CVE--2026--12087" src="https://img.shields.io/badge/CVE--2026--12087-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.389%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>31st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Socket versions before 2.041 for Perl have an out-of-bounds heap read.  In Socket.xs, pack_ip_mreq_source() checks the length of its source argument before the argument is read, so the check tests the byte length carried over from the preceding multiaddr argument instead. Both addresses occupy a 4-byte field, so a valid multiaddr lets a source of any length pass the check, and the source is then copied into the 4-byte imr_sourceaddr field with a fixed-size copy. A source shorter than 4 bytes is not rejected, and the copy reads up to 3 bytes past the end of its buffer.  Calling pack_ip_mreq_source() with a source value shorter than 4 bytes copies adjacent heap memory into the returned packed structure.

---
- libsocket-perl 2.041-1
[trixie] - libsocket-perl <no-dsa> (Minor issue)
- perl <unfixed> (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1140152)
https://lists.security.metacpan.org/cve-announce/msg/41020451/
Fixed by: https://github.com/Perl/perl5/commit/de19a0b0ad1900fef976c5c1400bd8f11ec6c6cb (v5.43.11)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-48959?s=debian&n=perl&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="high : CVE--2026--48959" src="https://img.shields.io/badge/CVE--2026--48959-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.373%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>29th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

IO::Uncompress::Unzip versions before 2.220 for Perl allow CPU exhaustion via per-byte read loop in fastForward.  fastForward() compares length $offset (the digit count of the offset, 1 to 19) against the chunk size $c instead of $offset itself, so $c shrinks from 16 KiB to 1-19 bytes per iteration.  Extracting a named entry from an attacker supplied zip via IO::Uncompress::Unzip->new($zip, Name => $target) drives a per-byte read loop scaling with the entry's compressed size, up to the non-Zip64 4 GiB cap.

---
- libio-compress-perl 2.220-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1138051)
- perl 5.40.1-8 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1138856)
https://lists.security.metacpan.org/cve-announce/msg/40434381/
Fixed by: https://github.com/pmqs/IO-Compress/commit/68db44076f4c1a86a2ffe53a958eac6cabaf72e2 (v2.220)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-48962?s=debian&n=perl&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="high : CVE--2026--48962" src="https://img.shields.io/badge/CVE--2026--48962-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.292%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

IO::Compress versions before 2.220 for Perl can execute arbitrary code in File::GlobMapper via an attacker-controlled output glob.  _parseOutputGlob() wraps the caller-supplied output glob string in double quotes and stores it in the parser state; _getFiles() then runs the stored expression through eval STRING. A literal double quote in the output glob closes the dquote wrapper, and the characters that follow are evaluated as Perl.  Arbitrary Perl in the output glob executes at the calling process's privilege.

---
- libio-compress-perl 2.220-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1138055)
- perl 5.40.1-8 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1138854)
https://lists.security.metacpan.org/cve-announce/msg/40434385/
Fixed by: https://github.com/pmqs/IO-Compress/commit/f2db247bf90d4cc7ee2710be384946081f3b4610 (v2.220)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-7010?s=debian&n=perl&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="medium : CVE--2026--7010" src="https://img.shields.io/badge/CVE--2026--7010-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.227%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>13th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

HTTP::Tiny versions before 0.093 for Perl do not validate CRLF in HTTP request lines or control field header values.  The unvalidated inputs are the method and URI in the request line, the URL host that becomes the `Host:` header, and HTTP/1.1 control data field values.  An attacker who controls one of these inputs, for example a user supplied URL passed to a webhook or URL fetch endpoint, can inject additional headers and smuggle requests to the upstream server.

---
- libhttp-tiny-perl 0.092-2
[trixie] - libhttp-tiny-perl <no-dsa> (Minor issue)
[bookworm] - libhttp-tiny-perl <no-dsa> (Minor issue)
- perl 5.40.1-8 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1138858)
https://lists.security.metacpan.org/cve-announce/msg/39952806/
Fixed by: https://github.com/Perl-Toolchain-Gang/HTTP-Tiny/commit/d73c7651e82ace02693842df55928b6c3ae7c38d (release-0.093)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-15649?s=debian&n=perl&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="medium : CVE--2025--15649" src="https://img.shields.io/badge/CVE--2025--15649-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.127%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

IO::Uncompress::Unzip versions before 2.215 for Perl propagate uncaught exception when parsing zip header with malformed DOS date.  _dosToUnixTime() decodes the local-file-header last-modification date field and calls Time::Local::timelocal() without an eval guard. A header whose date field decodes to an out-of-range month, day, or hour causes timelocal() to die.  The exception propagates out of IO::Uncompress::Unzip->new($file) where callers expect undef plus $UnzipError.

---
- libio-compress-perl 2.217-1
- perl 5.40.1-8 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1138863)
https://lists.security.metacpan.org/cve-announce/msg/40434380/
https://github.com/pmqs/IO-Compress/issues/65
Fixed by: https://github.com/pmqs/IO-Compress/commit/fd28c1d2374eee9811f6d0c5bddc0957abdf1da8 (v2.215)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-48961?s=debian&n=perl&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2026--48961" src="https://img.shields.io/badge/CVE--2026--48961-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.262%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>17th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

IO::Compress versions from 2.207 before 2.220 for Perl ship a zipdetails CLI tool that crashes with undefined subroutine on Info-ZIP Unix Extra Field with 8-byte UID or GID.  When decode_ux() in bin/zipdetails handles an Info-ZIP Unix Extra Field (tag 0x7875) with UID Size or GID Size set to 8, causing zipdetails to decode an 8-byte UID or GID value, it dispatches through decodeLitteEndian(), which calls a misnamed helper unpackValueQ. The actual function defined in the same file is unpackValue_Q (with underscore); the call raises 'Undefined subroutine &main::unpackValueQ' and the script exits with status 255.  Library callers of IO::Compress and IO::Uncompress are not affected; the defect is in the bundled CLI tool.

---
- libio-compress-perl 2.220-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1138052)
[trixie] - libio-compress-perl <no-dsa> (Minor issue)
[bookworm] - libio-compress-perl <not-affected> (Vulnerable code introduced later)
[bullseye] - libio-compress-perl <not-affected> (Vulnerable code introduced later)
- perl 5.40.1-8 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1138855)
https://lists.security.metacpan.org/cve-announce/msg/40434383/
Introduced with: https://github.com/pmqs/IO-Compress/commit/ddfe67584a228877e5d28840da75ff32e435a5e3 (v2.207)
Fixed by: https://github.com/pmqs/IO-Compress/commit/33c89d03d6e746ed2ead4f2f6570d47864c61bc7 (v2.220)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-31486?s=debian&n=perl&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2023--31486" src="https://img.shields.io/badge/CVE--2023--31486-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>1.742%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>75th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

HTTP::Tiny before 0.083, a Perl core module since 5.13.9 and available standalone on CPAN, has an insecure default TLS configuration where users must opt in to verify certificates.

---
- libhttp-tiny-perl 0.088-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=962407; unimportant)
[experimental] - perl 5.38.0~rc2-1
- perl 5.38.2-2 (unimportant; bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=954089)
https://www.openwall.com/lists/oss-security/2023/04/18/14
https://github.com/chansen/p5-http-tiny/issues/134
https://blog.hackeriet.no/perl-http-tiny-insecure-tls-default-affects-cpan-modules/
https://hackeriet.github.io/cpan-http-tiny-overview/
Applications need to explicitly opt in to enable verification.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2011-4116?s=debian&n=perl&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2011--4116" src="https://img.shields.io/badge/CVE--2011--4116-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.520%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>40th percentile</code></td></tr>
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
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 5" src="https://img.shields.io/badge/M-5-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/net</strong> <code>0.48.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/net@0.48.0</code></small><br/>

```dockerfile
# minio-release.dockerfile (87:87)
COPY --from=build /build/mc/mc /opt/bitnami/common/bin/mc
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-39821?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.55.0"><img alt="critical : CVE--2026--39821" src="https://img.shields.io/badge/CVE--2026--39821-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.55.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.55.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.478%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>38th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The ToASCII and ToUnicode functions incorrectly accept Punycode-encoded labels that decode to an ASCII-only label. For example, ToUnicode("xn--example-.com") incorrectly returns the name "example.com" rather than an error.

This behavior can lead to privilege escalation in programs using the idna package. For example, a program which performs privilege checks on the ASCII hostname may reject "example.com" but permit "xn--example-.com". If that program subsequently converts the ASCII hostname to Unicode, it will inadvertently permits access to the Unicode name "example.com".

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33814?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.53.0"><img alt="high : CVE--2026--33814" src="https://img.shields.io/badge/CVE--2026--33814-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.53.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.53.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.781%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>51st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When processing HTTP/2 SETTINGS frames, transport will enter an infinite loop of writing CONTINUATION frames if it receives a SETTINGS_MAX_FRAME_SIZE with a value of 0.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-25680?s=github&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.55.0"><img alt="medium 6.5: CVE--2026--25680" src="https://img.shields.io/badge/CVE--2026--25680-lightgrey?label=medium%206.5&labelColor=fbb552"/></a> <i>Uncontrolled Resource Consumption</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.55.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.55.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.248%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In Go Net (`golang.org/x/net`) before verion 0.55.0, parsing arbitrary HTML can consume excessive CPU time, possibly leading to denial of service.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42506?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.55.0"><img alt="medium : CVE--2026--42506" src="https://img.shields.io/badge/CVE--2026--42506-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.55.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.55.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.188%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Parsing arbitrary HTML which is then rendered using Render can result in an unexpected HTML tree. This can be leveraged to execute XSS attacks in applications that attempt to sanitize input HTML before rendering.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42502?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.55.0"><img alt="medium : CVE--2026--42502" src="https://img.shields.io/badge/CVE--2026--42502-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.55.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.55.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.178%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>8th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Parsing arbitrary HTML which is then rendered using Render can result in an unexpected HTML tree. This can be leveraged to execute XSS attacks in applications that attempt to sanitize input HTML before rendering.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-27136?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.55.0"><img alt="medium : CVE--2026--27136" src="https://img.shields.io/badge/CVE--2026--27136-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.55.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.55.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.178%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>8th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Parsing arbitrary HTML which is then rendered using Render can result in an unexpected HTML tree. This can be leveraged to execute XSS attacks in applications that attempt to sanitize input HTML before rendering.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-25681?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.55.0"><img alt="medium : CVE--2026--25681" src="https://img.shields.io/badge/CVE--2026--25681-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.55.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.55.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.178%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>8th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Parsing arbitrary HTML which is then rendered using Render can result in an unexpected HTML tree. This can be leveraged to execute XSS attacks in applications that attempt to sanitize input HTML before rendering.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 12" src="https://img.shields.io/badge/H-12-e25d68"/> <img alt="medium: 10" src="https://img.shields.io/badge/M-10-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>stdlib</strong> <code>1.26.0</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.26.0</code></small><br/>

```dockerfile
# minio-release.dockerfile (87:87)
COPY --from=build /build/mc/mc /opt/bitnami/common/bin/mc
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-33810?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.2"><img alt="high : CVE--2026--33810" src="https://img.shields.io/badge/CVE--2026--33810-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.340%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>26th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When verifying a certificate chain containing excluded DNS constraints, these constraints are not correctly applied to wildcard DNS SANs which use a different case than the constraint.

This only affects validation of otherwise trusted certificate chains, issued by a root CA in the VerifyOptions.Roots CertPool, or in the system certificate pool.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42504?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.4"><img alt="high : CVE--2026--42504" src="https://img.shields.io/badge/CVE--2026--42504-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.4</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.4</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.560%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>42nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Decoding a maliciously-crafted MIME header containing many invalid encoded-words can consume excessive CPU.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42499?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.3"><img alt="high : CVE--2026--42499" src="https://img.shields.io/badge/CVE--2026--42499-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.768%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>51st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Pathological inputs could cause DoS through consumePhrase when parsing an email address according to RFC 5322.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39836?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.3"><img alt="high : CVE--2026--39836" src="https://img.shields.io/badge/CVE--2026--39836-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.588%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>44th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Dial and LookupPort functions panic on Windows when provided with an input containing a NUL (0).

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39820?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.3"><img alt="high : CVE--2026--39820" src="https://img.shields.io/badge/CVE--2026--39820-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.755%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>50th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Well-crafted inputs reaching ParseAddress, ParseAddressList, and ParseDate were able to trigger excessive CPU exhaustion and memory allocations.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33814?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.3"><img alt="high : CVE--2026--33814" src="https://img.shields.io/badge/CVE--2026--33814-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.781%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>51st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When processing HTTP/2 SETTINGS frames, transport will enter an infinite loop of writing CONTINUATION frames if it receives a SETTINGS_MAX_FRAME_SIZE with a value of 0.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33811?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.3"><img alt="high : CVE--2026--33811" src="https://img.shields.io/badge/CVE--2026--33811-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.813%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>52nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When using LookupCNAME with the cgo DNS resolver, a very long CNAME response can trigger a double-free of C memory and a crash.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32283?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.2"><img alt="high : CVE--2026--32283" src="https://img.shields.io/badge/CVE--2026--32283-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.621%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>45th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

If one side of the TLS connection sends multiple key update messages post-handshake in a single record, the connection can deadlock, causing uncontrolled consumption of resources. This can lead to a denial of service.

This only affects TLS 1.3.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32281?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.2"><img alt="high : CVE--2026--32281" src="https://img.shields.io/badge/CVE--2026--32281-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.349%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Validating certificate chains which use policies is unexpectedly inefficient when certificates in the chain contain a very large number of policy mappings, possibly causing denial of service.

This only affects validation of otherwise trusted certificate chains, issued by a root CA in the VerifyOptions.Roots CertPool, or in the system certificate pool.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32280?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.2"><img alt="high : CVE--2026--32280" src="https://img.shields.io/badge/CVE--2026--32280-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.615%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>45th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

During chain building, the amount of work that is done is not correctly limited when a large number of intermediate certificates are passed in VerifyOptions.Intermediates, which can lead to a denial of service. This affects both direct users of crypto/x509 and users of crypto/tls.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-27137?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.1"><img alt="high : CVE--2026--27137" src="https://img.shields.io/badge/CVE--2026--27137-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.606%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>45th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When verifying a certificate chain which contains a certificate containing multiple email address constraints which share common local portions but different domain portions, these constraints will not be properly applied, and only the last constraint will be considered.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-25679?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.1"><img alt="high : CVE--2026--25679" src="https://img.shields.io/badge/CVE--2026--25679-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.728%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>50th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

url.Parse insufficiently validated the host/authority component and accepted some invalid URLs.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-27145?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.4"><img alt="medium : CVE--2026--27145" src="https://img.shields.io/badge/CVE--2026--27145-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.4</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.4</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.650%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>47th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

(*x509.Certificate).VerifyHostname previously called matchHostnames in a loop over all DNS Subject Alternative Name (SAN) entries. This caused strings.Split(host, ".") to execute repeatedly on the same input hostname.

With a large DNS SAN list, verification costs scaled quadratically based on the number of SAN entries multiplied by the hostname's label count. Because x509.Verify validates hostnames before building the certificate chain, this overhead occurred even for untrusted certificates.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32282?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.2"><img alt="medium : CVE--2026--32282" src="https://img.shields.io/badge/CVE--2026--32282-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.292%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

On Linux, if the target of Root.Chmod is replaced with a symlink while the chmod operation is in progress, Chmod can operate on the target of the symlink, even when the target lies outside the root.

The Linux fchmodat syscall silently ignores the AT_SYMLINK_NOFOLLOW flag, which Root.Chmod uses to avoid symlink traversal. Root.Chmod checks its target before acting and returns an error if the target is a symlink lying outside the root, so the impact is limited to cases where the target is replaced with a symlink between the check and operation.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39826?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.3"><img alt="medium : CVE--2026--39826" src="https://img.shields.io/badge/CVE--2026--39826-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.371%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>29th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

If a trusted template author were to write a <script> tag containing an empty 'type' attribute or a 'type' attribute with an ASCII whitespace, the execution of the template would incorrectly escape any data passed into the <script> block.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39823?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.3"><img alt="medium : CVE--2026--39823" src="https://img.shields.io/badge/CVE--2026--39823-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.314%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>23rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

CVE-2026-27142 fixed a vulnerability in which URLs were not correctly escaped inside of a <meta> tag's <content> attribute. If the URL content were to insert ASCII whitespaces around the '=' rune inside of the <content> attribute, the escaper would fail to similarly escape it, leading to XSS.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32289?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.2"><img alt="medium : CVE--2026--32289" src="https://img.shields.io/badge/CVE--2026--32289-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.290%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Context was not properly tracked across template branches for JS template literals, leading to possibly incorrect escaping of content when branches were used. Additionally template actions within JS template literals did not properly track the brace depth, leading to incorrect escaping being applied.

These issues could cause actions within JS template literals to be incorrectly or improperly escaped, leading to XSS vulnerabilities.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-27142?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.1"><img alt="medium : CVE--2026--27142" src="https://img.shields.io/badge/CVE--2026--27142-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.328%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>25th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Actions which insert URLs into the content attribute of HTML meta tags are not escaped. This can allow XSS if the meta tag also has an http-equiv attribute with the value "refresh".

A new GODEBUG setting has been added, htmlmetacontenturlescape, which can be used to disable escaping URLs in actions in the meta content attribute which follow "url=" by setting htmlmetacontenturlescape=0.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-27138?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.1"><img alt="medium : CVE--2026--27138" src="https://img.shields.io/badge/CVE--2026--27138-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.350%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Certificate verification can panic when a certificate in the chain has an empty DNS name and another certificate in the chain has excluded name constraints. This can crash programs that are either directly verifying X.509 certificate chains, or those that use TLS.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32288?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.2"><img alt="medium : CVE--2026--32288" src="https://img.shields.io/badge/CVE--2026--32288-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.290%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

tar.Reader can allocate an unbounded amount of memory when reading a maliciously-crafted archive containing a large number of sparse regions encoded in the "old GNU sparse map" format.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42507?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.4"><img alt="medium : CVE--2026--42507" src="https://img.shields.io/badge/CVE--2026--42507-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.4</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.4</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.370%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>29th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When returning errors, functions in the net/textproto package would include its input as part of the error. This might allow an attacker to inject misleading content to errors that are printed or logged.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39825?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.3"><img alt="medium : CVE--2026--39825" src="https://img.shields.io/badge/CVE--2026--39825-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.390%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>31st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

ReverseProxy can forward queries containing parameters not visible to Rewrite functions.

When used with a Rewrite function, or a Director function which parses query parameters, ReverseProxy sanitizes the forwarded request to remove query parameters which are not parsed by url.ParseQuery. ReverseProxy does not take ParseQuery's limit on the total number of query parameters (controlled by GODEBUG=urlmaxqueryparams=N) into account. This can permit ReverseProxy to forward a request containing a query parameter that is not visible to the Rewrite function.

For example, the query "a1=x&a2=x&...&a10000=x&hidden=y" can forward the parameter "hidden=y" while hiding it from the proxy's Rewrite function.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-27139?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.1"><img alt="low : CVE--2026--27139" src="https://img.shields.io/badge/CVE--2026--27139-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.201%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>10th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

On Unix platforms, when listing the contents of a directory using File.ReadDir or File.Readdir the returned FileInfo could reference a file outside of the Root in which the File was opened.

The impact of this escape is limited to reading metadata provided by lstat from arbitrary locations on the filesystem without permitting reading or writing files outside the root.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 2" src="https://img.shields.io/badge/H-2-e25d68"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/prometheus/prometheus</strong> <code>0.303.0</code> (golang)</summary>

<small><code>pkg:golang/github.com/prometheus/prometheus@0.303.0</code></small><br/>

```dockerfile
# minio-release.dockerfile (87:87)
COPY --from=build /build/mc/mc /opt/bitnami/common/bin/mc
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-42154?s=github&n=prometheus&ns=github.com%2Fprometheus&t=golang&vr=%3C0.305.2"><img alt="high 7.5: CVE--2026--42154" src="https://img.shields.io/badge/CVE--2026--42154-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Uncontrolled Resource Consumption</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.305.2</code></td></tr>
<tr><td>Fixed version</td><td><code>0.311.3</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.733%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>50th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact

The remote read endpoint (`/api/v1/read`) does not validate the declared decoded length in a snappy-compressed request body before allocating memory.
An unauthenticated attacker can send a small payload that causes a huge heap allocation per request. Under concurrent load this can exhaust available memory and crash the Prometheus process.

### Patches
_Has the problem been patched? What versions should users upgrade to?_

Fixed in 3.11.3 and 3.5.3 LTS. Users should upgrade to these versions or later.

### Workarounds
User who can not upgrade can place Prometheus behind a reverse proxy or firewall that requires authentication before requests reach /api/v1/read.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42151?s=github&n=prometheus&ns=github.com%2Fprometheus&t=golang&vr=%3E%3D0.45.2%2C%3C0.311.3"><img alt="high 7.5: CVE--2026--42151" src="https://img.shields.io/badge/CVE--2026--42151-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Exposure of Sensitive Information to an Unauthorized Actor</i>

<table>
<tr><td>Affected range</td><td><code>>=0.45.2<br/><0.311.3</code></td></tr>
<tr><td>Fixed version</td><td><code>0.311.3</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.314%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>23rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact

Users who use Azure AD remote write with OAuth authentication are impacted.

The `client_secret` field in the Azure AD remote write OAuth configuration (`storage/remote/azuread`) was typed as `string` instead of `Secret`. Prometheus redacts fields of type `Secret` when serving the configuration via the `/-/config` HTTP API endpoint. Because the field was a plain string, the Azure OAuth client secret was exposed in plaintext to any user or process with access to that endpoint.

### Patches

The problem has been patched by changing `ClientSecret` in `OAuthConfig` to `Secret`. Users should upgrade to 3.11.3 or 3.5.3 LTS.

### Workarounds

Users  who can not upgrade can switch to Managed Identity or Workload Identity authentication for Azure AD remote write, which do not involve a client secret.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-40179?s=github&n=prometheus&ns=github.com%2Fprometheus&t=golang&vr=%3C0.311.2-0.20260410083055-07c6232d159b"><img alt="medium 5.3: CVE--2026--40179" src="https://img.shields.io/badge/CVE--2026--40179-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.311.2-0.20260410083055-07c6232d159b</code></td></tr>
<tr><td>Fixed version</td><td><code>0.311.2-0.20260410083055-07c6232d159b</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:P/VC:N/VI:N/VA:N/SC:L/SI:L/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.240%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>15th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact

Stored cross-site scripting (XSS) via crafted metric names in the Prometheus web UI:

* **Old React UI + New Mantine UI:** When a user hovers over a chart tooltip on the Graph page, metric names containing HTML/JavaScript are injected into `innerHTML` without escaping, causing arbitrary script execution in the user's browser.
* **Old React UI only:** When a user opens the Metric Explorer (globe icon next to the PromQL expression input field), and a metric name containing HTML/JavaScript is rendered in the fuzzy search results, it is injected into `innerHTML` without escaping, causing arbitrary script execution in the user's browser.
* **Old React UI only:** When a user views a heatmap chart and hovers over a cell, the `le` label values of the underlying histogram buckets are interpolated into `innerHTML` without escaping. While `le` is conventionally a numeric bucket boundary, Prometheus does not enforce this — arbitrary UTF-8 strings are accepted as label values, allowing script injection via a crafted scrape target or remote write.

With Prometheus v3.x defaulting to UTF-8 metric and label name validation, characters like `<`, `>`, and `"` are now valid in metric names and labels, making this exploitable.

An attacker who can inject metrics (via a compromised scrape target, remote write, or OTLP receiver endpoint) can execute JavaScript in the browser of any Prometheus user who views the metric in the Graph UI. From the XSS context, an attacker could for example:

- Read `/api/v1/status/config` to extract sensitive configuration (although credentials / secrets are redacted by the server)
- Call `/-/quit` to shut down Prometheus (only if `--web.enable-lifecycle` is set)
- Call `/api/v1/admin/tsdb/delete_series` to delete data (only if `--web.enable-admin-api` is set)
- Exfiltrate metric data to an external server

Both the new Mantine UI and the old React UI are affected. The vulnerable code paths are:

- `web/ui/mantine-ui/src/pages/query/uPlotChartHelpers.ts` — tooltip `innerHTML` with unescaped `labels.__name__`
- `web/ui/react-app/src/pages/graph/GraphHelpers.ts` — tooltip content with unescaped `labels.__name__`
- `web/ui/react-app/src/pages/graph/MetricsExplorer.tsx` — fuzzy search results rendered via `dangerouslySetInnerHTML` without sanitization
- `web/ui/react-app/src/vendor/flot/jquery.flot.heatmap.js` — heatmap tooltip with unescaped label values

### Patches

A patch has been published in Prometheus 3.5.2 LTS and Prometheus 3.11.2. The fix applies `escapeHTML()` to all user-controlled values (metric names and label values) before inserting them into `innerHTML`. This advisory will be updated with the patched version once released.

### Workarounds

- If using the remote write receiver (`--web.enable-remote-write-receiver`), ensure it is not exposed to untrusted sources.
- If using the OTLP receiver (`--web.enable-otlp-receiver`), ensure it is not exposed to untrusted sources.
- Ensure scrape targets are trusted and not under attacker control.
- Do not enable admin / mutating API endpoints (e.g. `--web.enable-admin-api` or `web.enable-lifecycle`) in cases where you cannot prevent untrusted data from being ingested.
- Users should avoid clicking untrusted links, especially those containing functions such as label_replace, as they may generate poisoned label names and values.

### Acknowledgements

Thanks to @<!-- -->gladiator9797 (Duc Anh Nguyen from TinyxLab) for reporting this.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-44903?s=github&n=prometheus&ns=github.com%2Fprometheus&t=golang&vr=%3C0.311.3"><img alt="medium 5.1: CVE--2026--44903" src="https://img.shields.io/badge/CVE--2026--44903-lightgrey?label=medium%205.1&labelColor=fbb552"/></a> <i>Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.311.3</code></td></tr>
<tr><td>Fixed version</td><td><code>0.311.3</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:L/UI:P/VC:N/VI:N/VA:N/SC:L/SI:L/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.182%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>8th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact

In the Prometheus server's legacy web UI (enabled via the command-line flag `--enable-feature=old-ui`), the histogram heatmap chart view does not escape `le` label values when inserting them into the HTML for use as axis tick mark labels.

An attacker who can inject crafted metrics (e.g. via a compromised scrape target, remote write, or OTLP receiver endpoint) can execute JavaScript in the browser of any Prometheus user who views the metric in the heatmap chart UI. From the XSS context, an attacker could for example:

- Read `/api/v1/status/config` to extract sensitive configuration (although credentials / secrets are redacted by the server)
- Call `/-/quit` to shut down Prometheus (only if `--web.enable-lifecycle` is set)
- Call `/api/v1/admin/tsdb/delete_series` to delete data (only if `--web.enable-admin-api` is set)
- Exfiltrate metric data to an external server

Note that this only affects users who have explicitly enabled the legacy Prometheus web UI using the `--enable-feature=old-ui` command-line flag.

### Patches

https://github.com/prometheus/prometheus/commit/38f23b9075ced1de2b82d2dad8b2bebb1ecd5b7d

### Workarounds

If at all possible, disable the legacy web UI by removing the `--enable-feature=old-ui` command-line flag).

If this is not an option, take the following precautions:

- If using the remote write receiver (`--web.enable-remote-write-receiver`), ensure it is not exposed to untrusted sources.
- If using the OTLP receiver (`--web.enable-otlp-receiver`), ensure it is not exposed to untrusted sources.
- Ensure scrape targets are trusted and not under attacker control.
- Do not enable admin / mutating API endpoints (e.g. `--web.enable-admin-api` or `web.enable-lifecycle`) in cases where you cannot prevent untrusted data from being ingested.
- Users should avoid clicking untrusted links, especially those containing functions such as `label_replace`, as they may generate poisoned label names and values.

### References

- CVE-2019-10215 — prior stored DOM XSS vulnerability in Prometheus query history, fixed in v2.7.2
- CVE-2026-40179 — prior stored DOM XSS vulnerability in Prometheus web UI (hover tooltips and metrics explorer), fixed in v3.11.2

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 2" src="https://img.shields.io/badge/H-2-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>go.opentelemetry.io/otel/sdk</strong> <code>1.39.0</code> (golang)</summary>

<small><code>pkg:golang/go.opentelemetry.io/otel/sdk@1.39.0</code></small><br/>

```dockerfile
# minio-release.dockerfile (91:91)
COPY --from=build /build/minio/minio /opt/bitnami/common/bin/minio
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-39883?s=github&n=sdk&ns=go.opentelemetry.io%2Fotel&t=golang&vr=%3E%3D1.15.0%2C%3C%3D1.42.0"><img alt="high 7.3: CVE--2026--39883" src="https://img.shields.io/badge/CVE--2026--39883-lightgrey?label=high%207.3&labelColor=e25d68"/></a> <i>Untrusted Search Path</i>

<table>
<tr><td>Affected range</td><td><code>>=1.15.0<br/><=1.42.0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.43.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:L/AC:H/AT:N/PR:L/UI:N/VC:H/VI:H/VA:H/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.220%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>12th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

## Summary

The fix for GHSA-9h8m-3fm2-qjrq (CVE-2026-24051) changed the Darwin `ioreg` command to use an absolute path but left the BSD `kenv` command using a bare name, allowing the same PATH hijacking attack on BSD and Solaris platforms.

## Root Cause

`sdk/resource/host_id.go` line 42:

    if result, err := r.execCommand("kenv", "-q", "smbios.system.uuid"); err == nil {

Compare with the fixed Darwin path at line 58:

    result, err := r.execCommand("/usr/sbin/ioreg", "-rd1", "-c", "IOPlatformExpertDevice")

The `execCommand` helper at `sdk/resource/host_id_exec.go` uses `exec.Command(name, arg...)` which searches `$PATH` when the command name contains no path separator.

Affected platforms (per build tag in `host_id_bsd.go:4`): DragonFly BSD, FreeBSD, NetBSD, OpenBSD, Solaris.

The `kenv` path is reached when `/etc/hostid` does not exist (line 38-40), which is common on FreeBSD systems.

## Attack

1. Attacker has local access to a system running a Go application that imports `go.opentelemetry.io/otel/sdk`
2. Attacker places a malicious `kenv` binary earlier in `$PATH`
3. Application initializes OpenTelemetry resource detection at startup
4. `hostIDReaderBSD.read()` calls `exec.Command("kenv", ...)` which resolves to the malicious binary
5. Arbitrary code executes in the context of the application

Same attack vector and impact as CVE-2026-24051.

## Suggested Fix

Use the absolute path:

    if result, err := r.execCommand("/bin/kenv", "-q", "smbios.system.uuid"); err == nil {

On FreeBSD, `kenv` is located at `/bin/kenv`.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-24051?s=github&n=sdk&ns=go.opentelemetry.io%2Fotel&t=golang&vr=%3E%3D1.21.0%2C%3C1.40.0"><img alt="high 7.0: CVE--2026--24051" src="https://img.shields.io/badge/CVE--2026--24051-lightgrey?label=high%207.0&labelColor=e25d68"/></a> <i>Untrusted Search Path</i>

<table>
<tr><td>Affected range</td><td><code>>=1.21.0<br/><1.40.0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.40.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:H/PR:L/UI:N/S:U/C:H/I:H/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.157%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact
The OpenTelemetry Go SDK in version `v1.20.0`-`1.39.0` is vulnerable to Path Hijacking (Untrusted Search Paths) on macOS/Darwin systems. The resource detection code in `sdk/resource/host_id.go` executes the `ioreg` system command using a search path. An attacker with the ability to locally modify the PATH environment variable can achieve Arbitrary Code Execution (ACE) within the context of the application.

### Patches
This has been patched in [d45961b](https://github.com/open-telemetry/opentelemetry-go/commit/d45961bcda453fcbdb6469c22d6e88a1f9970a53), which was released with `v1.40.0`.

### References
- [CWE-426: Untrusted Search Path](https://cwe.mitre.org/data/definitions/426.html)

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/buger/jsonparser</strong> <code>1.1.1</code> (golang)</summary>

<small><code>pkg:golang/github.com/buger/jsonparser@1.1.1</code></small><br/>

```dockerfile
# minio-release.dockerfile (91:91)
COPY --from=build /build/minio/minio /opt/bitnami/common/bin/minio
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-32285?s=github&n=jsonparser&ns=github.com%2Fbuger&t=golang&vr=%3C%3D1.1.1"><img alt="high 7.5: CVE--2026--32285" src="https://img.shields.io/badge/CVE--2026--32285-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Out-of-bounds Read</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=1.1.1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.1.2</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.750%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>50th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Delete function fails to properly validate offsets when processing malformed JSON input. This can lead to a negative slice index and a runtime panic, allowing a denial of service attack.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>go.opentelemetry.io/otel</strong> <code>1.39.0</code> (golang)</summary>

<small><code>pkg:golang/go.opentelemetry.io/otel@1.39.0</code></small><br/>

```dockerfile
# minio-release.dockerfile (91:91)
COPY --from=build /build/minio/minio /opt/bitnami/common/bin/minio
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-29181?s=github&n=otel&ns=go.opentelemetry.io&t=golang&vr=%3E%3D1.36.0%2C%3C%3D1.40.0"><img alt="high 7.5: CVE--2026--29181" src="https://img.shields.io/badge/CVE--2026--29181-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Uncontrolled Resource Consumption</i>

<table>
<tr><td>Affected range</td><td><code>>=1.36.0<br/><=1.40.0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.41.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.435%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>35th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

multi-value `baggage:` header extraction parses each header field-value independently and aggregates members across values. this allows an attacker to amplify cpu and allocations by sending many `baggage:` header lines, even when each individual value is within the 8192-byte per-value parse limit.

## severity

HIGH (availability / remote request amplification)

## relevant links

- repository: https://github.com/open-telemetry/opentelemetry-go
- pinned callsite: https://github.com/open-telemetry/opentelemetry-go/blob/1ee4a4126dbdd1bc79e9fae072fa488beffac52a/propagation/baggage.go#L58

## vulnerability details

**pins:** open-telemetry/opentelemetry-go@<!-- -->1ee4a4126dbdd1bc79e9fae072fa488beffac52a
**as-of:** 2026-02-04
**policy:** direct (no program scope provided)

**callsite:** propagation/baggage.go:58 (`extractMultiBaggage`)
**attacker control:** inbound HTTP request headers (many `baggage` field-values) → `propagation.HeaderCarrier.Values("baggage")` → repeated `baggage.Parse` + member aggregation

### root cause

`extractMultiBaggage` iterates over all `baggage` header field-values and parses each one independently, then appends members into a shared slice. the 8192-byte parsing cap applies per header value, but the multi-value path repeats that work once per header line (bounded only by the server/proxy header byte limit).

### impact

in a default `net/http` configuration (max header bytes 1mb), a single request with many `baggage:` header field-values can cause large per-request allocations and increased latency.

example from the attached PoC harness (darwin/arm64; 80 values; 40 requests):

- canonical: `per_req_alloc_bytes=10315458` and `p95_ms=7`
- control: `per_req_alloc_bytes=133429` and `p95_ms=0`

## proof of concept

canonical:

```bash
mkdir -p poc
unzip poc.zip -d poc
cd poc
make test
```

output (excerpt):

```
[CALLSITE_HIT]: propagation/baggage.go:58 extractMultiBaggage
[PROOF_MARKER]: baggage_multi_value_amplification p95_ms=7 per_req_alloc_bytes=10315458 per_req_allocs=16165
```

control:

```bash
cd poc
make control
```

control output (excerpt):

```
[NC_MARKER]: baggage_single_value_baseline p95_ms=0 per_req_alloc_bytes=133429 per_req_allocs=480
```

**expected:** multiple `baggage` header field-values should be semantically equivalent to a single comma-joined `baggage` value and should not multiply parsing/alloc work within the effective header byte budget.
**actual:** multiple `baggage` header field-values trigger repeated parsing and member aggregation, causing high per-request allocations and increased latency even when each individual value is within 8192 bytes.

## fix recommendation

avoid repeated parsing across multi-values by enforcing a global budget and/or normalizing multi-values into a single value before parsing. one mitigation approach is to treat multi-values as a single comma-joined string and cap total parsed bytes (for example 8192 bytes total).

**fix accepted when:** under the default PoC harness settings, canonical stays within 2x of control for `per_req_alloc_bytes` and `per_req_allocs`, and `p95_ms` stays below 2ms.


[poc.zip](https://github.com/user-attachments/files/25079945/poc.zip)
[PR_DESCRIPTION.md](https://github.com/user-attachments/files/25079946/PR_DESCRIPTION.md)

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/apache/thrift</strong> <code>0.21.0</code> (golang)</summary>

<small><code>pkg:golang/github.com/apache/thrift@0.21.0</code></small><br/>

```dockerfile
# minio-release.dockerfile (91:91)
COPY --from=build /build/minio/minio /opt/bitnami/common/bin/minio
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-41602?s=github&n=thrift&ns=github.com%2Fapache&t=golang&vr=%3C0.23.0"><img alt="high 7.5: CVE--2026--41602" src="https://img.shields.io/badge/CVE--2026--41602-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Integer Overflow or Wraparound</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.23.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.23.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>1.163%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>63rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Integer Overflow or Wraparound vulnerability in Apache Thrift TFramedTransport Go language implementation

This issue affects Apache Thrift: before 0.23.0.

Users are recommended to upgrade to version 0.23.0, which fixes the issue.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/go-jose/go-jose/v4</strong> <code>4.1.3</code> (golang)</summary>

<small><code>pkg:golang/github.com/go-jose/go-jose/v4@4.1.3</code></small><br/>

```dockerfile
# minio-release.dockerfile (91:91)
COPY --from=build /build/minio/minio /opt/bitnami/common/bin/minio
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-34986?s=github&n=v4&ns=github.com%2Fgo-jose%2Fgo-jose&t=golang&vr=%3C4.1.4"><img alt="high 7.5: CVE--2026--34986" src="https://img.shields.io/badge/CVE--2026--34986-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Uncaught Exception</i>

<table>
<tr><td>Affected range</td><td><code>&lt;4.1.4</code></td></tr>
<tr><td>Fixed version</td><td><code>4.1.4</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.651%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>47th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact

Decrypting a JSON Web Encryption (JWE) object will panic if the `alg` field indicates a key wrapping algorithm ([one ending in `KW`](https://pkg.go.dev/github.com/go-jose/go-jose/v4#pkg-constants), with the exception of `A128GCMKW`, `A192GCMKW`, and `A256GCMKW`) and the `encrypted_key` field is empty. The panic happens when `cipher.KeyUnwrap()` in `key_wrap.go` attempts to allocate a slice with a zero or negative length based on the length of the `encrypted_key`.

This code path is reachable from `ParseEncrypted()` / `ParseEncryptedJSON()` / `ParseEncryptedCompact()` followed by `Decrypt()` on the resulting object. Note that the parse functions take a list of accepted key algorithms. If the accepted key algorithms do not include any key wrapping algorithms, parsing will fail and the application will be unaffected.

This panic is also reachable by calling `cipher.KeyUnwrap()` directly with any `ciphertext` parameter less than 16 bytes long, but calling this function directly is less common.

Panics can lead to denial of service.

### Fixed In

4.1.4 and v3.0.5

### Workarounds

If the list of `keyAlgorithms` passed to `ParseEncrypted()` / `ParseEncryptedJSON()` / `ParseEncryptedCompact()` does not include key wrapping algorithms (those ending in `KW`), your application is unaffected.

If your application uses key wrapping, you can prevalidate to the JWE objects to ensure the `encrypted_key` field is nonempty. If your application accepts JWE Compact Serialization, apply that validation to the corresponding field of that serialization (the data between the first and second `.`).

### Thanks

Thanks to Datadog's Security team for finding this issue.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>tar</strong> <code>1.34+dfsg-1.2+deb12u1</code> (deb)</summary>

<small><code>pkg:deb/debian/tar@1.34%2Bdfsg-1.2%2Bdeb12u1?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (44:44)
FROM debian:bookworm-slim
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-45582?s=debian&n=tar&ns=debian&t=deb&osn=debian&osv=12&vr=%3E%3D1.34%2Bdfsg-1.2%2Bdeb12u1"><img alt="medium : CVE--2025--45582" src="https://img.shields.io/badge/CVE--2025--45582-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.34+dfsg-1.2+deb12u1</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.433%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>35th percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2005-2541?s=debian&n=tar&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2005--2541" src="https://img.shields.io/badge/CVE--2005--2541-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>3.992%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>89th percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>pam</strong> <code>1.5.2-6+deb12u2</code> (deb)</summary>

<small><code>pkg:deb/debian/pam@1.5.2-6%2Bdeb12u2?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (44:44)
FROM debian:bookworm-slim
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-54411?s=debian&n=pam&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="medium : CVE--2026--54411" src="https://img.shields.io/badge/CVE--2026--54411-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.321%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>24th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Linux-PAM through 1.7.2 contains an observable timing discrepancy (CWE-208) in the pam_userdb module's plaintext-password comparison path in modules/pam_userdb/pam_userdb.c that allows a local or network-adjacent attacker able to repeatedly drive authentication through a calling service to recover the plaintext password of a target account by measuring response-timing differences. The comparison uses strncmp() (or strncasecmp() when PAM_ICASE_ARG is set) preceded by a length-equality check, so the time to reject a candidate depends on the index of the first differing byte and on whether the candidate's length matches the stored password, leaking the password length and individual prefix bytes. The vulnerable path is reached when the administrator configures pam_userdb with crypt=none, with an unrecognized crypt method, or without a crypt= argument, causing the module to store and compare credentials in plaintext.

---
- pam <unfixed> (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1140190)
[trixie] - pam <postponed> (Minor issue, revisit when fixed upstream)
https://github.com/linux-pam/linux-pam/issues/992
https://github.com/linux-pam/linux-pam/pull/991

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/eclipse/paho.mqtt.golang</strong> <code>1.5.0</code> (golang)</summary>

<small><code>pkg:golang/github.com/eclipse/paho.mqtt.golang@1.5.0</code></small><br/>

```dockerfile
# minio-release.dockerfile (91:91)
COPY --from=build /build/minio/minio /opt/bitnami/common/bin/minio
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-10543?s=github&n=paho.mqtt.golang&ns=github.com%2Feclipse&t=golang&vr=%3C1.5.1"><img alt="medium 6.3: CVE--2025--10543" src="https://img.shields.io/badge/CVE--2025--10543-lightgrey?label=medium%206.3&labelColor=fbb552"/></a> <i>Numeric Truncation Error</i>

<table>
<tr><td>Affected range</td><td><code>&lt;1.5.1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.5.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:N/VC:L/VI:N/VA:N/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.189%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In Eclipse Paho Go MQTT v3.1 library (paho.mqtt.golang) versions <=1.5.0 UTF-8 encoded strings, passed into the library, may be incorrectly encoded if their length exceeds 65535 bytes. This may lead to unexpected content in packets sent to the server (for example, part of an MQTT topic may leak into the message body in a PUBLISH packet).

The issue arises because the length of the data passed in was converted from an int64/int32 (depending upon CPU) to an int16 without checks for overflows. The int16 length was then written, followed by the data (e.g. topic). This meant that when the data (e.g. topic) was over 65535 bytes then the amount of data written exceeds what the length field indicates. This could lead to a corrupt packet, or mean that the excess data leaks into another field (e.g. topic leaks into message body).

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/azure/go-ntlmssp</strong> <code>0.0.0-20221128193559-754e69321358</code> (golang)</summary>

<small><code>pkg:golang/github.com/azure/go-ntlmssp@0.0.0-20221128193559-754e69321358</code></small><br/>

```dockerfile
# minio-release.dockerfile (91:91)
COPY --from=build /build/minio/minio /opt/bitnami/common/bin/minio
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-32952?s=github&n=go-ntlmssp&ns=github.com%2Fazure&t=golang&vr=%3C0.1.1"><img alt="medium 5.3: CVE--2026--32952" src="https://img.shields.io/badge/CVE--2026--32952-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Integer Overflow or Wraparound</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.1.1</code></td></tr>
<tr><td>Fixed version</td><td><code>0.1.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>1.027%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>59th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

go-ntlmssp is a Go package that provides NTLM/Negotiate authentication over HTTP. Prior to version 0.1.1, a malicious NTLM challenge message can causes an slice out of bounds panic, which can crash any Go process using `ntlmssp.Negotiator` as an HTTP transport. Version 0.1.1 patches the issue.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>go.mongodb.org/mongo-driver</strong> <code>1.17.3</code> (golang)</summary>

<small><code>pkg:golang/go.mongodb.org/mongo-driver@1.17.3</code></small><br/>

```dockerfile
# minio-release.dockerfile (91:91)
COPY --from=build /build/minio/minio /opt/bitnami/common/bin/minio
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-2303?s=github&n=mongo-driver&ns=go.mongodb.org&t=golang&vr=%3C1.17.7"><img alt="medium 6.9: CVE--2026--2303" src="https://img.shields.io/badge/CVE--2026--2303-lightgrey?label=medium%206.9&labelColor=fbb552"/></a> <i>Permissive List of Allowed Inputs</i>

<table>
<tr><td>Affected range</td><td><code>&lt;1.17.7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.17.7</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.9</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:L/UI:P/VC:N/VI:H/VA:N/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.223%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>13th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The mongo-go-driver repository contains CGo bindings for GSSAPI (Kerberos) authentication on Linux and macOS. The C wrapper implementation contains a heap out-of-bounds read vulnerability due to incorrect assumptions about string termination in the GSSAPI standard. Since GSSAPI buffers are not guaranteed to be null-terminated or have extra padding, this results in reading one byte past the allocated heap buffer.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 7" src="https://img.shields.io/badge/L-7-fce1a9"/> <!-- unspecified: 0 --><strong>glibc</strong> <code>2.36-9+deb12u14</code> (deb)</summary>

<small><code>pkg:deb/debian/glibc@2.36-9%2Bdeb12u14?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (44:44)
FROM debian:bookworm-slim
```

<br/>

<a href="https://scout.docker.com/v/CVE-2019-9192?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2019--9192" src="https://img.shields.io/badge/CVE--2019--9192-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>2.447%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>82nd percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2019-1010025?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2019--1010025" src="https://img.shields.io/badge/CVE--2019--1010025-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>2.286%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>81st percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2019-1010024?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2019--1010024" src="https://img.shields.io/badge/CVE--2019--1010024-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>3.220%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>87th percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2019-1010023?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2019--1010023" src="https://img.shields.io/badge/CVE--2019--1010023-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>3.069%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>86th percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2019-1010022?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2019--1010022" src="https://img.shields.io/badge/CVE--2019--1010022-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>3.249%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>87th percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2018-20796?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2018--20796" src="https://img.shields.io/badge/CVE--2018--20796-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>5.804%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>92nd percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2010-4756?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2010--4756" src="https://img.shields.io/badge/CVE--2010--4756-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>2.633%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>84th percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 6" src="https://img.shields.io/badge/L-6-fce1a9"/> <img alt="unspecified: 9" src="https://img.shields.io/badge/U-9-lightgrey"/><strong>curl</strong> <code>7.88.1-10+deb12u14</code> (deb)</summary>

<small><code>pkg:deb/debian/curl@7.88.1-10%2Bdeb12u14?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (62:70)
RUN apt-get update && apt-get upgrade -y && apt-get install -y --no-install-recommends \
    ca-certificates \
    jq \
    curl \
    procps \
    bash \
  && apt-get autoremove -y \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-15224?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2025--15224" src="https://img.shields.io/badge/CVE--2025--15224-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.413%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>33rd percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2025-15079?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2025--15079" src="https://img.shields.io/badge/CVE--2025--15079-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.457%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>36th percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2025-14017?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2025--14017" src="https://img.shields.io/badge/CVE--2025--14017-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.106%</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2025-10966?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2025--10966" src="https://img.shields.io/badge/CVE--2025--10966-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.373%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>29th percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2025-0725?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2025--0725" src="https://img.shields.io/badge/CVE--2025--0725-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>1.168%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>63rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When libcurl is asked to perform automatic gzip decompression of content-encoded HTTP responses with the `CURLOPT_ACCEPT_ENCODING` option, **using zlib 1.2.0.3 or older**, an attacker-controlled integer overflow would make libcurl perform a buffer overflow.

---
- curl 8.12.0+git20250209.89ed161+ds-1 (unimportant)
https://curl.se/docs/CVE-2025-0725.html
Introduced with: https://github.com/curl/curl/commit/019c4088cfcca0d2b7c5cc4f52ca5dac0c616089 (curl-7_10_5)
Fixed by: https://github.com/curl/curl/commit/76f83f0db23846e254d940ec7fe141010077eb88 (curl-8_12_0)
Patch only drops officially support for zlib before 1.2.0.4
Can only be triggered when using ancient runtime zlib of version 1.2.0.3 or older

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-2379?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2024--2379" src="https://img.shields.io/badge/CVE--2024--2379-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>1.709%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>74th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

libcurl skips the certificate verification for a QUIC connection under certain conditions, when built to use wolfSSL. If told to use an unknown/bad cipher or curve, the error path accidentally skips the verification and returns OK, thus ignoring any certificate problems.

---
- curl 8.7.1-1 (unimportant)
https://curl.se/docs/CVE-2024-2379.html
Introduced by: https://github.com/curl/curl/commit/5d044ad9480a9f556f4b6a252d7533b1ba7fe57e (curl-8_6_0)
Fixed by: https://github.com/curl/curl/commit/aedbbdf18e689a5eee8dc39600914f5eda6c409c (curl-8_7_0)
curl in Debian not built with wolfSSL support

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-9547?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="unspecified : CVE--2026--9547" src="https://img.shields.io/badge/CVE--2026--9547-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

- curl 8.21.0~rc2-1
[trixie] - curl <no-dsa> (Minor issue)
https://curl.se/docs/CVE-2026-9547.html
Introduced with: https://github.com/curl/curl/commit/507cf6a13db0375eadd4655b4c64710db29e9cf2 (curl-7_69_0)
Fixed by: https://github.com/curl/curl/commit/0b8dbbc63c98777e4584cb9fbd71df3464008ad1 (rc-8_21_0-1, curl-8_21_0)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-8932?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="unspecified : CVE--2026--8932" src="https://img.shields.io/badge/CVE--2026--8932-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

- curl 8.21.0~rc2-1
[trixie] - curl <no-dsa> (Minor issue)
https://curl.se/docs/CVE-2026-8932.html
Introduced with: https://github.com/curl/curl/commit/a1d6ad26100bc493c7b04f1301b1634b7f5aa8b4 (curl-7_7)
Fixed by: https://github.com/curl/curl/commit/7541ae569d82fb308a5e2d94916027da4fa3ba3e (rc-8_21_0-1, curl-8_21_0)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-8927?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="unspecified : CVE--2026--8927" src="https://img.shields.io/badge/CVE--2026--8927-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

- curl 8.21.0~rc2-1
[trixie] - curl <no-dsa> (Minor issue)
https://curl.se/docs/CVE-2026-8927.html
Introduced with: https://github.com/curl/curl/commit/fc6eff13b5414caf6edf22d73a3239e074a04216 (curl-7_12_0)
Fixed by: https://github.com/curl/curl/commit/5c225384b8d52c67ce8259c6e4203bc57aacb567 (rc-8_21_0-1, curl-8_21_0)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-8924?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="unspecified : CVE--2026--8924" src="https://img.shields.io/badge/CVE--2026--8924-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

- curl 8.21.0~rc2-1
[trixie] - curl <no-dsa> (Minor issue)
https://curl.se/docs/CVE-2026-8924.html
Introduced with: https://github.com/curl/curl/commit/e77b5b7453c1e8ccd7ec0816890d98e2f392e465 (curl-7_46_0)
Fixed by: https://github.com/curl/curl/commit/51beed175dbfc37da3113f6acce60c630c070ce8 (rc-8_21_0-1, curl-8_21_0)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-8458?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="unspecified : CVE--2026--8458" src="https://img.shields.io/badge/CVE--2026--8458-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

- curl 8.21.0~rc2-1
[trixie] - curl <no-dsa> (Minor issue)
https://curl.se/docs/CVE-2026-8458.html
Introduced with: https://github.com/curl/curl/commit/97c272e5d173ad5f706443e2477f0a84f0044edd (curl-7_43_0)
Fixed by: https://github.com/curl/curl/commit/5e99b73cf441d9c369768b9cd48b5389b9a2503d (rc-8_21_0-1, curl-8_21_0)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-8286?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="unspecified : CVE--2026--8286" src="https://img.shields.io/badge/CVE--2026--8286-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

- curl 8.21.0~rc2-1
[trixie] - curl <no-dsa> (Minor issue)
https://curl.se/docs/CVE-2026-8286.html
Introduced with: https://github.com/curl/curl/commit/a1701eea289fe7ea80651f801cf992838a491dde (curl-7_30_0)
Fixed by: https://github.com/curl/curl/commit/a86efdd7ca5433de9231e650f18247de8319ad16 (rc-8_21_0-1, curl-8_21_0)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-12064?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="unspecified : CVE--2026--12064" src="https://img.shields.io/badge/CVE--2026--12064-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

- curl 8.21.0~rc3-1
[trixie] - curl <no-dsa> (Minor issue)
https://curl.se/docs/CVE-2026-12064.html
Introduced with: https://github.com/curl/curl/commit/18270893abdb19f0ca170c118f8a2847dbd304be (curl-7_81_0)
Fixed by: https://github.com/curl/curl/commit/ab3bb8cd8be8f9d4acb97da0418abc279182041e (rc-8_21_0-3, curl-8_21_0)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-11856?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="unspecified : CVE--2026--11856" src="https://img.shields.io/badge/CVE--2026--11856-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

- curl 8.21.0~rc3-1
[trixie] - curl <no-dsa> (Minor issue)
https://curl.se/docs/CVE-2026-11856.html
Introduced with: https://github.com/curl/curl/commit/334d78cd18a7310144383929bdcef34ffbf6159b (curl-7_10_6)
Fixed by: https://github.com/curl/curl/commit/5c6b4880357ab3e72967c1c45cae0f96ffabc535 (rc-8_21_0-3, curl-8_21_0)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-10536?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="unspecified : CVE--2026--10536" src="https://img.shields.io/badge/CVE--2026--10536-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

- curl 8.21.0~rc2-1
[trixie] - curl <no-dsa> (Minor issue)
https://curl.se/docs/CVE-2026-10536.html
Introduced with: https://github.com/curl/curl/commit/71b7e0161032927cdfb4e75ea40f65b8898b3956 (curl-7_88_0)
Fixed by: https://github.com/curl/curl/commit/bfbff7852f050232edd3e5ca5c6bf2021c340f5a (rc-8_21_0-1, curl-8_21_0)

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 5" src="https://img.shields.io/badge/L-5-fce1a9"/> <!-- unspecified: 0 --><strong>openldap</strong> <code>2.5.13+dfsg-5</code> (deb)</summary>

<small><code>pkg:deb/debian/openldap@2.5.13%2Bdfsg-5?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (62:70)
RUN apt-get update && apt-get upgrade -y && apt-get install -y --no-install-recommends \
    ca-certificates \
    jq \
    curl \
    procps \
    bash \
  && apt-get autoremove -y \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-22185?s=debian&n=openldap&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2026--22185" src="https://img.shields.io/badge/CVE--2026--22185-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.127%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

OpenLDAP Lightning Memory-Mapped Database (LMDB) versions up to and including 0.9.14, prior to commit 8e1fda8, contain a heap buffer underflow in the readline() function of mdb_load. When processing malformed input containing an embedded NUL byte, an unsigned offset calculation can underflow and cause an out-of-bounds read of one byte before the allocated heap buffer. This can cause mdb_load to crash, leading to a limited denial-of-service condition.

---
- openldap <unfixed> (unimportant)
- lmdb <unfixed> (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1126287)
[trixie] - lmdb <no-dsa> (Minor issue)
[bookworm] - lmdb <no-dsa> (Minor issue)
[bullseye] - lmdb <postponed> (Minor issue, OOB read)
https://seclists.org/fulldisclosure/2026/Jan/5
https://bugs.openldap.org/show_bug.cgi?id=10421
Fixed by: https://git.openldap.org/openldap/openldap/-/commit/8e1fda85532a3c74276df38a42d234dcdfa1e40d
OpenLDAP bundles lmdb but does not build mdb_load.c

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2020-15719?s=debian&n=openldap&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2020--15719" src="https://img.shields.io/badge/CVE--2020--15719-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>2.417%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>82nd percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2017-17740?s=debian&n=openldap&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2017--17740" src="https://img.shields.io/badge/CVE--2017--17740-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>7.022%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>93rd percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2017-14159?s=debian&n=openldap&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2017--14159" src="https://img.shields.io/badge/CVE--2017--14159-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.349%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2015-3276?s=debian&n=openldap&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2015--3276" src="https://img.shields.io/badge/CVE--2015--3276-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>5.333%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>92nd percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 4" src="https://img.shields.io/badge/L-4-fce1a9"/> <!-- unspecified: 0 --><strong>systemd</strong> <code>252.39-1~deb12u2</code> (deb)</summary>

<small><code>pkg:deb/debian/systemd@252.39-1~deb12u2?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (44:44)
FROM debian:bookworm-slim
```

<br/>

<a href="https://scout.docker.com/v/CVE-2023-31439?s=debian&n=systemd&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2023--31439" src="https://img.shields.io/badge/CVE--2023--31439-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.352%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2023-31438?s=debian&n=systemd&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2023--31438" src="https://img.shields.io/badge/CVE--2023--31438-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.328%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>25th percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2023-31437?s=debian&n=systemd&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2023--31437" src="https://img.shields.io/badge/CVE--2023--31437-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.344%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>26th percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2013-4392?s=debian&n=systemd&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2013--4392" src="https://img.shields.io/badge/CVE--2013--4392-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.472%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>37th percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 4" src="https://img.shields.io/badge/L-4-fce1a9"/> <!-- unspecified: 0 --><strong>krb5</strong> <code>1.20.1-2+deb12u5</code> (deb)</summary>

<small><code>pkg:deb/debian/krb5@1.20.1-2%2Bdeb12u5?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (62:70)
RUN apt-get update && apt-get upgrade -y && apt-get install -y --no-install-recommends \
    ca-certificates \
    jq \
    curl \
    procps \
    bash \
  && apt-get autoremove -y \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-11850?s=debian&n=krb5&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2026--11850" src="https://img.shields.io/badge/CVE--2026--11850-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.261%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>17th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An integer underflow vulnerability was found in MIT krb5 in the berval2tl_data() function in plugins/kdb/ldap/libkdb_ldap/ldap_principal2.c. The function performs an unsigned subtraction (bv_len - 2) without a prior bounds check. When bv_len is 0 or 1, the subtraction wraps to a large value which is then truncated to uint16_t, yielding 0xFFFE (65534) or 0xFFFF (65535). The subsequent malloc succeeds and memcpy reads up to 65534 bytes from a 0-1 byte buffer, resulting in a heap out-of-bounds read. The attack vector involves a malicious or compromised LDAP KDB backend returning a krbExtraData attribute with bv_len < 2, triggering the underflow when the KDC or kadmind reads principal data.

---
- krb5 1.22.1-3 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1139821; unimportant)
https://krbdev.mit.edu/rt/Ticket/Display.html?id=9206
https://github.com/krb5/krb5/commit/2a5fd83d4436583f2ddc0e193269a4d800ee45c4
No security impact, doesn't cross any security boundary, see https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1139821

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-26461?s=debian&n=krb5&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2024--26461" src="https://img.shields.io/badge/CVE--2024--26461-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>1.128%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>62nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Kerberos 5 (aka krb5) 1.21.2 contains a memory leak vulnerability in /krb5/src/lib/gssapi/krb5/k5sealv3.c.

---
- krb5 <unfixed> (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1098754; unimportant)
https://github.com/LuMingYinDetect/krb5_defects/blob/main/krb5_detect_2.md
Fixed by: https://github.com/krb5/krb5/commit/c5f9c816107f70139de11b38aa02db2f1774ee0d
Codepath cannot be triggered via API calls, negligible security impact
https://mailman.mit.edu/pipermail/kerberos/2024-March/023095.html

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-26458?s=debian&n=krb5&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2024--26458" src="https://img.shields.io/badge/CVE--2024--26458-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.815%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>52nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Kerberos 5 (aka krb5) 1.21.2 contains a memory leak in /krb5/src/lib/rpc/pmap_rmt.c.

---
- krb5 <unfixed> (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1098754; unimportant)
https://github.com/LuMingYinDetect/krb5_defects/blob/main/krb5_detect_1.md
Fixed by: https://github.com/krb5/krb5/commit/c5f9c816107f70139de11b38aa02db2f1774ee0d
Unused codepath, negligible security impact
https://mailman.mit.edu/pipermail/kerberos/2024-March/023095.html

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2018-5709?s=debian&n=krb5&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2018--5709" src="https://img.shields.io/badge/CVE--2018--5709-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>2.067%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>79th percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 3" src="https://img.shields.io/badge/L-3-fce1a9"/> <!-- unspecified: 0 --><strong>jq</strong> <code>1.6-2.1+deb12u2</code> (deb)</summary>

<small><code>pkg:deb/debian/jq@1.6-2.1%2Bdeb12u2?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (62:70)
RUN apt-get update && apt-get upgrade -y && apt-get install -y --no-install-recommends \
    ca-certificates \
    jq \
    curl \
    procps \
    bash \
  && apt-get autoremove -y \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-40612?s=debian&n=jq&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2026--40612" src="https://img.shields.io/badge/CVE--2026--40612-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.161%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

jq is a command-line JSON processor. In 1.8.1 and earlier, jv_contains recurses into nested arrays/objects with no depth limit. With a sufficiently nested input structure (built programmatically with reduce, since the JSON parser caps at depth 10000), the C stack is exhausted.

---
- jq 1.8.1-6 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1136445; unimportant)
https://github.com/jqlang/jq/security/advisories/GHSA-r7m6-x9c7-h69j
Crash in CLI tool, no security impact

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-9403?s=debian&n=jq&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2025--9403" src="https://img.shields.io/badge/CVE--2025--9403-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.194%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2024-23337?s=debian&n=jq&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2024--23337" src="https://img.shields.io/badge/CVE--2024--23337-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.351%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

jq is a command-line JSON processor. In versions up to and including 1.7.1, an integer overflow arises when assigning value using an index of 2147483647, the signed integer limit. This causes a denial of service. Commit de21386681c0df0104a99d9d09db23a9b2a78b1e contains a patch for the issue.

---
- jq 1.7.1-6 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1106289; unimportant)
https://github.com/jqlang/jq/security/advisories/GHSA-2q6r-344g-cx46
https://github.com/jqlang/jq/issues/3262
https://github.com/jqlang/jq/commit/de21386681c0df0104a99d9d09db23a9b2a78b1e
Crash in CLI tool, no security impact

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 2" src="https://img.shields.io/badge/L-2-fce1a9"/> <img alt="unspecified: 3" src="https://img.shields.io/badge/U-3-lightgrey"/><strong>util-linux</strong> <code>2.38.1-5+deb12u3</code> (deb)</summary>

<small><code>pkg:deb/debian/util-linux@2.38.1-5%2Bdeb12u3?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (44:44)
FROM debian:bookworm-slim
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-14104?s=debian&n=util-linux&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2025--14104" src="https://img.shields.io/badge/CVE--2025--14104-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.176%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>7th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in util-linux. This vulnerability allows a heap buffer overread when processing 256-byte usernames, specifically within the `setpwnam()` function, affecting SUID (Set User ID) login-utils utilities writing to the password database.

---
- util-linux 2.41.3-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1122058; unimportant)
https://bugzilla.redhat.com/show_bug.cgi?id=2419369
https://github.com/util-linux/util-linux/issues/3585
https://github.com/util-linux/util-linux/pull/3586
Fixed by: https://github.com/util-linux/util-linux/commit/aaa9e718c88d6916b003da7ebcfe38a3c88df8e6
Fixed by: https://github.com/util-linux/util-linux/commit/9a36d77012c4c771f8d51eba46b6e62c29bf572a
Affected code in setpwnam() is only used by chsh and chfn which are not build
in any Debian released binary package from src:util-linux and explicitly configured
as with --disable-chfn-chsh since 2.25-1.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-0563?s=debian&n=util-linux&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2022--0563" src="https://img.shields.io/badge/CVE--2022--0563-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.430%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>34th percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2026-53615?s=debian&n=util-linux&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="unspecified : CVE--2026--53615" src="https://img.shields.io/badge/CVE--2026--53615-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

- util-linux <unfixed> (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1140197)
https://github.com/util-linux/util-linux/security/advisories/GHSA-h4rw-gv36-wmp5

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-53613?s=debian&n=util-linux&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="unspecified : CVE--2026--53613" src="https://img.shields.io/badge/CVE--2026--53613-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

- util-linux 2.42.2-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1140195)
https://github.com/util-linux/util-linux/security/advisories/GHSA-8gj5-72r3-428g
Fixed by: https://github.com/util-linux/util-linux/commit/0d3d55975aa3492c62fd345eac38f41cd166c0b0 (v2.42.2)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-13595?s=debian&n=util-linux&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="unspecified : CVE--2026--13595" src="https://img.shields.io/badge/CVE--2026--13595-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.131%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in the libblkid library of util-linux. During nested partition probing, the BSD, Minix, Solaris x86, and UnixWare partition probers cache a raw pointer to a parent partition entry in a dynamically allocated array. When subsequent partition additions cause the array to be reallocated, this pointer becomes stale, leading to a heap use-after-free read. An attacker who can present a crafted block device image (for example, via USB insertion or a loop-mounted disk image) can trigger this flaw without user interaction, as libblkid is invoked automatically by udev/udisks as root on block-device hot-plug events. This could lead to limited information disclosure or denial of service.

---
- util-linux 2.42.2-1
https://bugzilla.redhat.com/show_bug.cgi?id=2494101
https://github.com/util-linux/util-linux/commit/c0186f14fbdb02f64c8e0ba701ce727ea764ff4c (master)
https://github.com/util-linux/util-linux/commit/60ca8616ac1a223bfb5a713047a37136dd9481ef (v2.42.2)
https://github.com/util-linux/util-linux/commit/132d9c8aa15a8efd0a23d8ca7ed8b98f365e84fa (v2.41.5)

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 2" src="https://img.shields.io/badge/L-2-fce1a9"/> <!-- unspecified: 0 --><strong>openssl</strong> <code>3.0.20-1~deb12u2</code> (deb)</summary>

<small><code>pkg:deb/debian/openssl@3.0.20-1~deb12u2?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (62:70)
RUN apt-get update && apt-get upgrade -y && apt-get install -y --no-install-recommends \
    ca-certificates \
    jq \
    curl \
    procps \
    bash \
  && apt-get autoremove -y \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-27587?s=debian&n=openssl&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2025--27587" src="https://img.shields.io/badge/CVE--2025--27587-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.361%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>28th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

OpenSSL 3.0.0 through 3.3.2 on the PowerPC architecture is vulnerable to a Minerva attack, exploitable by measuring the time of signing of random messages using the EVP_DigestSign API, and then using the private key to extract the K value (nonce) from the signatures. Next, based on the bit size of the extracted nonce, one can compare the signing time of full-sized nonces to signatures that used smaller nonces, via statistical tests. There is a side-channel in the P-364 curve that allows private key extraction (also, there is a dependency between the bit size of K and the size of the side channel). NOTE: This CVE is disputed because the OpenSSL security policy explicitly notes that any side channels which require same physical system to be detected are outside of the threat model for the software. The timing signal is so small that it is infeasible to be detected without having the attacking process running on the same physical system.

---
- openssl 3.5.0-1 (unimportant)
https://github.com/openssl/openssl/issues/24253
https://github.com/openssl/openssl/commit/85cabd94958303859b1551364a609d4ff40b67a5 (master)
https://github.com/openssl/openssl/commit/080c6be0b102934bf66daeac70f0863f209f8d0f (openssl-3.5.0-beta1)
https://github.com/openssl/openssl/issues/24253#issuecomment-2144391562
Not considered a vulnerability by OpenSSL upstream

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2010-0928?s=debian&n=openssl&ns=debian&t=deb&osn=debian&osv=12&vr=%3E%3D3.0.11-1%7Edeb12u2"><img alt="low : CVE--2010--0928" src="https://img.shields.io/badge/CVE--2010--0928-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=3.0.11-1~deb12u2</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.515%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>40th percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 2" src="https://img.shields.io/badge/L-2-fce1a9"/> <!-- unspecified: 0 --><strong>libgcrypt20</strong> <code>1.10.1-3+deb12u1</code> (deb)</summary>

<small><code>pkg:deb/debian/libgcrypt20@1.10.1-3%2Bdeb12u1?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (44:44)
FROM debian:bookworm-slim
```

<br/>

<a href="https://scout.docker.com/v/CVE-2024-2236?s=debian&n=libgcrypt20&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2024--2236" src="https://img.shields.io/badge/CVE--2024--2236-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>1.114%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>62nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A timing-based side-channel flaw was found in libgcrypt's RSA implementation. This issue may allow a remote attacker to initiate a Bleichenbacher-style attack, which can lead to the decryption of RSA ciphertexts.

---
- libgcrypt20 <unfixed> (unimportant; bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1065683)
https://bugzilla.redhat.com/show_bug.cgi?id=2268268
https://lists.gnupg.org/pipermail/gcrypt-devel/2024-March/005607.html
https://github.com/tomato42/marvin-toolkit/tree/master/example/libgcrypt
https://people.redhat.com/~hkario/marvin/
https://dev.gnupg.org/T7136
https://gitlab.com/redhat-crypto/libgcrypt/libgcrypt-mirror/-/merge_requests/17
Not in scope for libgcrypt security policy, work ongoing to add support in the protocol layer

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2018-6829?s=debian&n=libgcrypt20&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2018--6829" src="https://img.shields.io/badge/CVE--2018--6829-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>1.811%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>76th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

cipher/elgamal.c in Libgcrypt through 1.8.2, when used to encrypt messages directly, improperly encodes plaintexts, which allows attackers to obtain sensitive information by reading ciphertext data (i.e., it does not have semantic security in face of a ciphertext-only attack). The Decisional Diffie-Hellman (DDH) assumption does not hold for Libgcrypt's ElGamal implementation.

---
- libgcrypt20 <unfixed> (unimportant)
- libgcrypt11 <removed> (unimportant)
- gnupg1 <unfixed> (unimportant)
- gnupg <removed> (unimportant)
https://github.com/weikengchen/attack-on-libgcrypt-elgamal
https://github.com/weikengchen/attack-on-libgcrypt-elgamal/wiki
https://lists.gnupg.org/pipermail/gcrypt-devel/2018-February/004394.html
GnuPG uses ElGamal in hybrid mode only.
This is not a vulnerability in libgcrypt, but in an application using
it in an insecure manner, see also
https://lists.gnupg.org/pipermail/gcrypt-devel/2018-February/004401.html

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 2" src="https://img.shields.io/badge/L-2-fce1a9"/> <!-- unspecified: 0 --><strong>coreutils</strong> <code>9.1-1</code> (deb)</summary>

<small><code>pkg:deb/debian/coreutils@9.1-1?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (44:44)
FROM debian:bookworm-slim
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-5278?s=debian&n=coreutils&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2025--5278" src="https://img.shields.io/badge/CVE--2025--5278-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.215%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>12th percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2017-18018?s=debian&n=coreutils&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2017--18018" src="https://img.shields.io/badge/CVE--2017--18018-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.348%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>gnupg2</strong> <code>2.2.40-1.1+deb12u2</code> (deb)</summary>

<small><code>pkg:deb/debian/gnupg2@2.2.40-1.1%2Bdeb12u2?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (44:44)
FROM debian:bookworm-slim
```

<br/>

<a href="https://scout.docker.com/v/CVE-2022-3219?s=debian&n=gnupg2&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2022--3219" src="https://img.shields.io/badge/CVE--2022--3219-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.290%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GnuPG can be made to spin on a relatively small input by (for example) crafting a public key with thousands of signatures attached, compressed down to just a few KB.

---
- gnupg2 <unfixed> (unimportant)
https://bugzilla.redhat.com/show_bug.cgi?id=2127010
https://dev.gnupg.org/D556
https://dev.gnupg.org/T5993
https://www.openwall.com/lists/oss-security/2022/07/04/8
GnuPG upstream is not implementing this change.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-57062?s=debian&n=gnupg2&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="unspecified : CVE--2026--57062" src="https://img.shields.io/badge/CVE--2026--57062-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.110%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

CMS (Cryptographic Message Syntax) parsing in gpgsm in GnuPG through 2.5.20 mishandles the CMS format for AES-GCM because aes-ICVlen is supposed to be 12 bytes but 4 bytes is accepted. NOTE: this is related to CVE-2026-34182.

---
- gnupg2 2.4.9-5
[trixie] - gnupg2 <no-dsa> (Minor issue)
https://blog.calif.io/p/how-to-format-a-ciphertext
Fixed by: https://github.com/gpg/gnupg/commit/4c7e68cf3d335328821bdbb70db309a60d0e4fd4

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>shadow</strong> <code>1:4.13+dfsg1-1+deb12u2</code> (deb)</summary>

<small><code>pkg:deb/debian/shadow@1%3A4.13%2Bdfsg1-1%2Bdeb12u2?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (44:44)
FROM debian:bookworm-slim
```

<br/>

<a href="https://scout.docker.com/v/CVE-2007-5686?s=debian&n=shadow&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2007--5686" src="https://img.shields.io/badge/CVE--2007--5686-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.942%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>57th percentile</code></td></tr>
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
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>golang.org/x/sys</strong> <code>0.33.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/sys@0.33.0</code></small><br/>

```dockerfile
# minio-release.dockerfile (87:87)
COPY --from=build /build/mc/mc /opt/bitnami/common/bin/mc
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-39824?s=golang&n=sys&ns=golang.org%2Fx&t=golang&vr=%3C0.44.0"><img alt="low : CVE--2026--39824" src="https://img.shields.io/badge/CVE--2026--39824-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.44.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.44.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.114%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

NewNTUnicodeString does not check for string length overflow. When provided with a string that overflows the maximum size of a NTUnicodeString (a 16-bit number of bytes), it returns a truncated string rather than an error.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>gnutls28</strong> <code>3.7.9-2+deb12u7</code> (deb)</summary>

<small><code>pkg:deb/debian/gnutls28@3.7.9-2%2Bdeb12u7?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (44:44)
FROM debian:bookworm-slim
```

<br/>

<a href="https://scout.docker.com/v/CVE-2011-3389?s=debian&n=gnutls28&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2011--3389" src="https://img.shields.io/badge/CVE--2011--3389-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>73.327%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>99th percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>golang.org/x/sys</strong> <code>0.39.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/sys@0.39.0</code></small><br/>

```dockerfile
# minio-release.dockerfile (87:87)
COPY --from=build /build/mc/mc /opt/bitnami/common/bin/mc
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-39824?s=golang&n=sys&ns=golang.org%2Fx&t=golang&vr=%3C0.44.0"><img alt="low : CVE--2026--39824" src="https://img.shields.io/badge/CVE--2026--39824-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.44.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.44.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.114%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

NewNTUnicodeString does not check for string length overflow. When provided with a string that overflows the maximum size of a NTUnicodeString (a 16-bit number of bytes), it returns a truncated string rather than an error.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>filippo.io/edwards25519</strong> <code>1.1.0</code> (golang)</summary>

<small><code>pkg:golang/filippo.io/edwards25519@1.1.0</code></small><br/>

```dockerfile
# minio-release.dockerfile (91:91)
COPY --from=build /build/minio/minio /opt/bitnami/common/bin/minio
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-26958?s=github&n=edwards25519&ns=filippo.io&t=golang&vr=%3C1.1.1"><img alt="low 1.7: CVE--2026--26958" src="https://img.shields.io/badge/CVE--2026--26958-lightgrey?label=low%201.7&labelColor=fce1a9"/></a> <i>Improper Initialization</i>

<table>
<tr><td>Affected range</td><td><code>&lt;1.1.1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.1.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>1.7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:H/AT:P/PR:N/UI:N/VC:N/VI:N/VA:L/SC:N/SI:N/SA:N/E:U</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.366%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>28th percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>gcc-12</strong> <code>12.2.0-14+deb12u1</code> (deb)</summary>

<small><code>pkg:deb/debian/gcc-12@12.2.0-14%2Bdeb12u1?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (44:44)
FROM debian:bookworm-slim
```

<br/>

<a href="https://scout.docker.com/v/CVE-2022-27943?s=debian&n=gcc-12&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2022--27943" src="https://img.shields.io/badge/CVE--2022--27943-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.892%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>55th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

libiberty/rust-demangle.c in GNU GCC 11.2 allows stack consumption in demangle_const, as demonstrated by nm-new.

---
- gcc-12 <unfixed> (unimportant)
Negligible security impact
https://gcc.gnu.org/bugzilla/show_bug.cgi?id=105039

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>apt</strong> <code>2.6.1</code> (deb)</summary>

<small><code>pkg:deb/debian/apt@2.6.1?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (44:44)
FROM debian:bookworm-slim
```

<br/>

<a href="https://scout.docker.com/v/CVE-2011-3374?s=debian&n=apt&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="low : CVE--2011--3374" src="https://img.shields.io/badge/CVE--2011--3374-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>1.191%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>64th percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 5" src="https://img.shields.io/badge/U-5-lightgrey"/><strong>libssh2</strong> <code>1.10.0-3</code> (deb)</summary>

<small><code>pkg:deb/debian/libssh2@1.10.0-3?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (62:70)
RUN apt-get update && apt-get upgrade -y && apt-get install -y --no-install-recommends \
    ca-certificates \
    jq \
    curl \
    procps \
    bash \
  && apt-get autoremove -y \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-58051?s=debian&n=libssh2&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="unspecified : CVE--2026--58051" src="https://img.shields.io/badge/CVE--2026--58051-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.280%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>20th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

libssh2 through 1.11.1 grows its publickey list with SSH2_REALLOC but does not zero-initialize new entries before parsing populates them, so a parse failure reaching the cleanup path leaves libssh2_publickey_list_free operating on an uninitialized entry. A malicious SSH server offering the publickey subsystem can use a malformed response to make cleanup free an uninitialized, attacker-influenceable attrs pointer in a connecting libssh2 client.

---
- libssh2 <unfixed>
https://github.com/bikini/exploitarium/tree/main/libssh2-publickey-list-calc-poc

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-58050?s=debian&n=libssh2&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="unspecified : CVE--2026--58050" src="https://img.shields.io/badge/CVE--2026--58050-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.311%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>23rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

libssh2 through 1.11.1 reads an attacker-controlled 32-bit attribute count from a publickey-subsystem response and uses it in the allocation num_attrs * sizeof(libssh2_publickey_attribute) without bounds checking, so on 32-bit platforms the multiplication overflows to an undersized buffer. A malicious SSH server can then drive the attribute-parsing loop to write past the allocation, causing a heap buffer overflow in a connecting libssh2 client.

---
- libssh2 <unfixed>
https://github.com/bikini/exploitarium/tree/main/libssh2-publickey-list-calc-poc

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-55200?s=debian&n=libssh2&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="unspecified : CVE--2026--55200" src="https://img.shields.io/badge/CVE--2026--55200-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.922%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>56th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

libssh2 through 1.11.1, fixed in commit 7acf3df contains an out-of-bounds write vulnerability in ssh2_transport_read() that fails to enforce upper bounds on packet_length field. Remote attackers can send crafted SSH packets with excessively large packet_length values to corrupt heap memory and achieve remote code execution.

---
- libssh2 1.11.1-4 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1140401)
https://github.com/libssh2/libssh2/pull/2052
Fixed by: https://github.com/libssh2/libssh2/commit/97acf3dfda80c91c3a8c9f2372546301d4a1a7a8

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-55199?s=debian&n=libssh2&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="unspecified : CVE--2026--55199" src="https://img.shields.io/badge/CVE--2026--55199-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.408%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>33rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

libssh2 through 1.11.1, fixed in commit 1762685, contains a pre-authentication denial of service vulnerability in the SSH_MSG_EXT_INFO handler in src/packet.c that allows a malicious SSH server to cause a client CPU exhaustion loop by sending a crafted extension count value. A malicious server can set nr_extensions to 0xFFFFFFFF during key exchange, causing the client to spin in a tight CPU loop for over 60 seconds because return values from _libssh2_get_string() are unchecked and the session timeout does not apply to CPU-bound loops.

---
- libssh2 1.11.1-4 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1140401)
https://github.com/libssh2/libssh2/pull/1864
Fixed by: https://github.com/libssh2/libssh2/commit/17626857d20b3c9a1addfa45979dadcee1cd84a4

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-15661?s=debian&n=libssh2&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="unspecified : CVE--2025--15661" src="https://img.shields.io/badge/CVE--2025--15661-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.267%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

libssh2 through 1.11.1, fixed in commit 2dae302, contains an out-of-bounds heap read vulnerability in the sftp_symlink() function in src/sftp.c that allows a malicious SSH server or man-in-the-middle attacker to disclose heap memory contents or cause a crash by sending a crafted SSH_FXP_NAME response. Attackers can supply a link_len value larger than the actual packet data in SSH_FXP_NAME responses for SFTP READLINK and REALPATH operations, triggering a heap buffer over-read of up to target_len minus one bytes due to the missing validation of available packet buffer size before the memcpy operation.

---
- libssh2 1.11.1-4 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1140401)
https://github.com/libssh2/libssh2/pull/1705
https://github.com/libssh2/libssh2/pull/1717
Fixed by: https://github.com/libssh2/libssh2/commit/2dae3024897e1898d389835151f4e9606227721d

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 2" src="https://img.shields.io/badge/U-2-lightgrey"/><strong>gzip</strong> <code>1.12-1</code> (deb)</summary>

<small><code>pkg:deb/debian/gzip@1.12-1?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (44:44)
FROM debian:bookworm-slim
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-41992?s=debian&n=gzip&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="unspecified : CVE--2026--41992" src="https://img.shields.io/badge/CVE--2026--41992-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.146%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GNU gzip contains a global buffer overflow vulnerability in the LZH decompression logic caused by improper reuse of shared global state between different decompression formats within a single execution. GNU gzip maintains a global array that is shared across the LZ77, LZW, and LZH decompression routines and is not reinitialized between files processed in the same invocation. By decompressing a specially crafted LZW file followed by a specially crafted LZH file in a single gzip -d command, an attacker can poison the shared global state and subsequently trigger an out‑of‑bounds read in the LZH decoder. The LZH decompression logic follows stale values left in the shared array, causing reads past the end of the allocated global buffer.  This issue has been fixed in the commit 63dbf6b3b9e6e781df1a6a64e609b10e23969681

---
- gzip <unfixed>
[trixie] - gzip <no-dsa> (Minor issue)
https://cgit.git.savannah.gnu.org/cgit/gzip.git/commit/?id=63dbf6b3b9e6e781df1a6a64e609b10e23969681

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-41991?s=debian&n=gzip&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="unspecified : CVE--2026--41991" src="https://img.shields.io/badge/CVE--2026--41991-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.117%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GNU gzip contains a vulnerability in the gzexe utility related to insecure temporary file handling. When the mktemp utility is not available in the user’s PATH, gzexe falls back to constructing a temporary file path based solely on the process ID (PID). This predictable filename is created without exclusive access or existence checks. A local attacker can pre‑create the predicted temporary file path as a symbolic link pointing to an arbitrary file writable by the victim. When gzexe runs, it follows the symlink and overwrites the target file, resulting in a time‑of‑check to time‑of‑use (TOCTOU) condition that allows arbitrary file overwrite.  This issue has been fixed in the commit 4e6f8b24ab823146ab8776f0b7fe486ab34d4269

---
- gzip <unfixed>
[trixie] - gzip <no-dsa> (Minor issue)
https://cgit.git.savannah.gnu.org/cgit/gzip.git/commit/?id=4e6f8b24ab823146ab8776f0b7fe486ab34d4269

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 2" src="https://img.shields.io/badge/U-2-lightgrey"/><strong>acl</strong> <code>2.3.1-3</code> (deb)</summary>

<small><code>pkg:deb/debian/acl@2.3.1-3?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (44:44)
FROM debian:bookworm-slim
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-54370?s=debian&n=acl&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="unspecified : CVE--2026--54370" src="https://img.shields.io/badge/CVE--2026--54370-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.091%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

acl before version 2.4.0 contains a time-of-check to time-of-use (TOCTOU) race condition vulnerability that allows local attackers to escalate privileges by replacing a pathname component with a symbolic link between an lstat() check and subsequent symlink-following operations such as stat(), chown(), chmod(), acl_get_file(), and acl_set_file(). Attackers who control a pathname component can redirect file access control list operations to arbitrary files when getfacl, setfacl, or chacl is invoked by a privileged process over an attacker-controlled path, resulting in local privilege escalation.

---
- acl 2.4.0-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1141110)
[trixie] - acl <no-dsa> (Will be fixed first in unstable, then point release update; not to be backported by individual patches)
https://www.openwall.com/lists/oss-security/2026/06/29/1
Fixed by: https://cgit.git.savannah.nongnu.org/cgit/acl.git/commit/?id=601cc884a548ae9e9d246ae749e54b3272e4b1d7 (v2.4.0)
Fixed by: https://cgit.git.savannah.nongnu.org/cgit/acl.git/commit/?id=54e14e9bc545f505b379d0792a2748d9baf88700 (v2.4.0)
Fixed by: https://cgit.git.savannah.nongnu.org/cgit/acl.git/commit/?id=2c03ceefa0610d551d9cc089ce0a404cbe2d34b4 (v2.4.0)
Fixed by: https://cgit.git.savannah.nongnu.org/cgit/acl.git/commit/?id=2ee940139e9bba5005a3d987a6daecdda909089e (v2.4.0)
The fixes are based on a complete rewrite of the walk_tree helper.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-54369?s=debian&n=acl&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="unspecified : CVE--2026--54369" src="https://img.shields.io/badge/CVE--2026--54369-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.142%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

acl before version 2.4.0 contains a symlink traversal vulnerability in the libacl pathname-based functions acl_get_file(), acl_set_file(), acl_extended_file(), and acl_delete_def_file() that allows local attackers to escalate privileges by replacing any pathname component with a symbolic link. Attackers who control any component of a pathname processed by a privileged caller can redirect ACL read or write operations to arbitrary files or directories, enabling unauthorized manipulation of access control lists and local privilege escalation.

---
- acl 2.4.0-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1141110)
[trixie] - acl <no-dsa> (Will be fixed first in unstable, then point release update; not to be backported by individual patches)
https://www.openwall.com/lists/oss-security/2026/06/29/1
Fixed by: https://cgit.git.savannah.nongnu.org/cgit/acl.git/commit/?id=5906d2868ec8d3b08be556153696e6b1122eeeda (v2.4.0)
Fixed by: https://cgit.git.savannah.nongnu.org/cgit/acl.git/commit/?id=0071c6d1fea0a8a6270333baa85fb609be325c26 (v2.4.0)
Fixed by: https://cgit.git.savannah.nongnu.org/cgit/acl.git/commit/?id=170dbd3beff9bd5bdab3f72db1a04bf282f6087c (v2.4.0)
Compatibility Notes: libacl exports new functions acl_*_at() causing problems with
programs that define functions of same name and link against libacl:
tar: https://bugs.debian.org/1141146

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>attr</strong> <code>1:2.5.1-4</code> (deb)</summary>

<small><code>pkg:deb/debian/attr@1%3A2.5.1-4?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (44:44)
FROM debian:bookworm-slim
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-54371?s=debian&n=attr&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="unspecified : CVE--2026--54371" src="https://img.shields.io/badge/CVE--2026--54371-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.142%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

attr before version 2.6.0 contains a symlink traversal vulnerability in the getfattr and setfattr utilities that allows local attackers to escalate privileges by replacing a pathname component with a symbolic link during directory hierarchy traversal. Attackers who control a pathname component can redirect getfattr and setfattr operations to arbitrary files by substituting a symlink, leading to local privilege escalation when getfattr or setfattr is invoked by a privileged process over an attacker-controlled path.

---
- attr 1:2.6.0-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1141107)
[trixie] - attr <no-dsa> (Will be fixed first in unstable, then point release update; not to be backported by individual patches)
https://www.openwall.com/lists/oss-security/2026/06/29/1
Fixed by: https://cgit.git.savannah.nongnu.org/cgit/attr.git/commit/?id=641ea6fcc556c1f34b77efb9cd3f876dff0a0a07 (v2.6.0)
Fixed by: https://cgit.git.savannah.nongnu.org/cgit/attr.git/commit/?id=3fb06b9ba314d37035d0877e6de313de754f1ac8 (v2.6.0)
The fixes are based on a complete rewrite of the walk_tree helper.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>p11-kit</strong> <code>0.24.1-2</code> (deb)</summary>

<small><code>pkg:deb/debian/p11-kit@0.24.1-2?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (44:44)
FROM debian:bookworm-slim
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-13757?s=debian&n=p11-kit&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="unspecified : CVE--2026--13757" src="https://img.shields.io/badge/CVE--2026--13757-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.120%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in p11-kit. The RPC message attribute parsing functions p11_rpc_message_get_attribute() and p11_rpc_message_get_attribute_array_value() form a mutually-recursive call chain with no recursion depth limit when processing nested CKA_WRAP_TEMPLATE, CKA_UNWRAP_TEMPLATE, and CKA_DERIVE_TEMPLATE attributes. An unauthenticated attacker with local access to the p11-kit RPC Unix domain socket can send a specially crafted request with deeply nested template attributes, causing stack exhaustion and crashing the p11-kit server process and its dependent services.

---
- p11-kit <unfixed> (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1141184)
[trixie] - p11-kit <no-dsa> (Minor issue)
https://bugzilla.redhat.com/show_bug.cgi?id=2494556
https://github.com/p11-glue/p11-kit/issues/767

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>nghttp2</strong> <code>1.52.0-1+deb12u3</code> (deb)</summary>

<small><code>pkg:deb/debian/nghttp2@1.52.0-1%2Bdeb12u3?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (62:70)
RUN apt-get update && apt-get upgrade -y && apt-get install -y --no-install-recommends \
    ca-certificates \
    jq \
    curl \
    procps \
    bash \
  && apt-get autoremove -y \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-58055?s=debian&n=nghttp2&ns=debian&t=deb&osn=debian&osv=12&vr=%3E0"><img alt="unspecified : CVE--2026--58055" src="https://img.shields.io/badge/CVE--2026--58055-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.202%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>10th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

nghttp2's nghttpx proxy through 1.69.0 forwards an HTTP/1.1 Upgrade request that also carries a Content-Length header and body onto reusable keep-alive backend connections, re-adding the Upgrade and Connection headers while passing Content-Length verbatim. A backend that resolves the resulting ambiguous message in the attacker's favor enables HTTP request/response smuggling and cross-client response-queue poisoning.

---
- nghttp2 <unfixed> (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1140917)
https://github.com/bikini/exploitarium/tree/main/nghttp2-nghttpx-upgrade-queue-poison-poc
https://github.com/nghttp2/nghttp2/commit/ab28105c4a0197da24f8bfc414bc116055249e1e

</blockquote>
</details>
</details></td></tr>
</table>

