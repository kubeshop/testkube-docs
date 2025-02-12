---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:10dc393947e2d04dd8c0972ccf405e6f47aba0b694af059c94aa9d249d69ae1b</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 0" src="https://img.shields.io/badge/critical-0-lightgrey"/> <img alt="high: 2" src="https://img.shields.io/badge/high-2-e25d68"/> <img alt="medium: 5" src="https://img.shields.io/badge/medium-5-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/low-1-fce1a9"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/unspecified-1-lightgrey"/></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>42 MB</td></tr>
<tr><td>packages</td><td>258</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/dexidp/dex</strong> <code>2.42.0</code> (golang)</summary>

<small><code>pkg:golang/github.com/dexidp/dex@2.42.0</code></small><br/>

```dockerfile
# Dockerfile (76:76)
COPY --from=builder /go/bin/dex /usr/local/bin/dex
```

<br/>

<a href="https://scout.docker.com/v/CVE-2024-23656?s=golang&n=dex&ns=github.com%2Fdexidp&t=golang&vr=%3E%3D0"><img alt="high : CVE--2024--23656" src="https://img.shields.io/badge/CVE--2024--23656-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.107%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>45th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Dex discarding TLSconfig and always serves deprecated TLS 1.0/1.1 and insecure ciphers in github.com/dexidp/dex.

NOTE: The source advisory for this report contains additional versions that could not be automatically mapped to standard Go module versions.

(If this is causing false-positive reports from vulnerability scanners, please suggest an edit to the report.)

The additional affected modules and versions are: github.com/dexidp/dex from v2.37.0 before v2.38.0.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/net</strong> <code>0.32.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/net@0.32.0</code></small><br/>

```dockerfile
# Dockerfile (80:80)
COPY --from=gomplate /usr/local/bin/gomplate /usr/local/bin/gomplate
```

<br/>

<a href="https://scout.docker.com/v/CVE-2024-45338?s=github&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.33.0"><img alt="high 8.7: CVE--2024--45338" src="https://img.shields.io/badge/CVE--2024--45338-lightgrey?label=high%208.7&labelColor=e25d68"/></a> <i>Allocation of Resources Without Limits or Throttling</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.33.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.33.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>8.7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.045%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An attacker can craft an input to the Parse functions that would be processed non-linearly with respect to its length, resulting in extremely slow parsing. This could cause a denial of service.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 3" src="https://img.shields.io/badge/M-3-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>stdlib</strong> <code>1.23.4</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.23.4</code></small><br/>

```dockerfile
# Dockerfile (80:80)
COPY --from=gomplate /usr/local/bin/gomplate /usr/local/bin/gomplate
```

<br/>

<a href="https://scout.docker.com/v/CVE-2024-45341?s=golang&n=stdlib&t=golang&vr=%3E%3D1.23.0-0%2C%3C1.23.5"><img alt="medium : CVE--2024--45341" src="https://img.shields.io/badge/CVE--2024--45341-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.23.0-0<br/><1.23.5</code></td></tr>
<tr><td>Fixed version</td><td><code>1.23.5</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.045%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A certificate with a URI which has a IPv6 address with a zone ID may incorrectly satisfy a URI name constraint that applies to the certificate chain.

Certificates containing URIs are not permitted in the web PKI, so this only affects users of private PKIs which make use of URIs.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-45336?s=golang&n=stdlib&t=golang&vr=%3E%3D1.23.0-0%2C%3C1.23.5"><img alt="medium : CVE--2024--45336" src="https://img.shields.io/badge/CVE--2024--45336-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.23.0-0<br/><1.23.5</code></td></tr>
<tr><td>Fixed version</td><td><code>1.23.5</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.045%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The HTTP client drops sensitive headers after following a cross-domain redirect. For example, a request to a.com/ containing an Authorization header which is redirected to b.com/ will not send that header to b.com.

In the event that the client received a subsequent same-domain redirect, however, the sensitive headers would be restored. For example, a chain of redirects from a.com/, to b.com/1, and finally to b.com/2 would incorrectly send the Authorization header to b.com/2.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-22866?s=golang&n=stdlib&t=golang&vr=%3E%3D1.23.0-0%2C%3C1.23.6"><img alt="medium : CVE--2025--22866" src="https://img.shields.io/badge/CVE--2025--22866-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.23.0-0<br/><1.23.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.23.6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.045%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Due to the usage of a variable time instruction in the assembly implementation of an internal function, a small number of bits of secret scalars are leaked on the ppc64le architecture. Due to the way this function is used, we do not believe this leakage is enough to allow recovery of the private key when P-256 is used in any well known protocols.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>github.com/aws/aws-sdk-go</strong> <code>1.55.5</code> (golang)</summary>

<small><code>pkg:golang/github.com/aws/aws-sdk-go@1.55.5</code></small><br/>

```dockerfile
# Dockerfile (80:80)
COPY --from=gomplate /usr/local/bin/gomplate /usr/local/bin/gomplate
```

<br/>

<a href="https://scout.docker.com/v/CVE-2020-8911?s=golang&n=aws-sdk-go&ns=github.com%2Faws&t=golang&vr=%3E%3D0"><img alt="medium : CVE--2020--8911" src="https://img.shields.io/badge/CVE--2020--8911-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.048%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>20th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A padding oracle vulnerability exists in the AWS S3 Crypto SDK for GoLang versions prior to V2. The SDK allows users to encrypt files with AES-CBC without computing a Message Authentication Code (MAC), which then allows an attacker who has write access to the target's S3 bucket and can observe whether or not an endpoint with access to the key can decrypt a file, they can reconstruct the plaintext with (on average) 128*length (plaintext) queries to the endpoint, by exploiting CBC's ability to manipulate the bytes of the next block and PKCS5 padding errors. It is recommended to update your SDK to V2 or later, and re-encrypt your files.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2020-8912?s=golang&n=aws-sdk-go&ns=github.com%2Faws&t=golang&vr=%3E%3D0"><img alt="low : CVE--2020--8912" src="https://img.shields.io/badge/CVE--2020--8912-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.044%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>15th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A vulnerability in the in-band key negotiation exists in the AWS S3 Crypto SDK for GoLang versions prior to V2. An attacker with write access to the targeted bucket can change the encryption algorithm of an object in the bucket, which can then allow them to change AES-GCM to AES-CTR. Using this in combination with a decryption oracle can reveal the authentication key used by AES-GCM as decrypting the GMAC tag leaves the authentication key recoverable as an algebraic equation. It is recommended to update your SDK to V2 or later, and re-encrypt your files.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>openssl</strong> <code>3.3.2-r4</code> (apk)</summary>

<small><code>pkg:apk/alpine/openssl@3.3.2-r4?os_name=alpine&os_version=3.21</code></small><br/>

```dockerfile
# Dockerfile (38:57)
FROM alpine:3.21.2@sha256:56fa17d2a7e7f168a043a2712e63aed1f8543aeafdcee47c58dcffe38ed51099 AS stager

RUN mkdir -p /var/dex
RUN mkdir -p /etc/dex
COPY config.docker.yaml /etc/dex/

FROM alpine:3.21.2@sha256:56fa17d2a7e7f168a043a2712e63aed1f8543aeafdcee47c58dcffe38ed51099 AS gomplate

ARG TARGETOS
ARG TARGETARCH
ARG TARGETVARIANT

ENV GOMPLATE_VERSION=v4.3.0

RUN wget -O /usr/local/bin/gomplate \
  "https://github.com/hairyhenderson/gomplate/releases/download/${GOMPLATE_VERSION}/gomplate_${TARGETOS:-linux}-${TARGETARCH:-amd64}${TARGETVARIANT}" \
  && chmod +x /usr/local/bin/gomplate

# For Dependabot to detect base image versions
FROM alpine:3.21.2@sha256:56fa17d2a7e7f168a043a2712e63aed1f8543aeafdcee47c58dcffe38ed51099 AS alpine
```

<br/>

<a href="https://scout.docker.com/v/CVE-2024-13176?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.21&vr=%3C3.3.2-r5"><img alt="medium : CVE--2024--13176" src="https://img.shields.io/badge/CVE--2024--13176-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.2-r5</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.2-r5</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.044%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>15th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-12797?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.21&vr=%3C3.3.3-r0"><img alt="unspecified : CVE--2024--12797" src="https://img.shields.io/badge/CVE--2024--12797-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.3-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.3-r0</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>
</table>

