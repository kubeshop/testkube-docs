<h2>:mag: Vulnerabilities of <code>ghcr.io/dexidp/dex:v2.40.0</code></h2>

<details open="true"><summary>:package: Image Reference</strong> <code>ghcr.io/dexidp/dex:v2.40.0</code></summary>
<table>
<tr><td>digest</td><td><code>sha256:59d8b5540fcf4e876b70fb5438321c594b84a5b4a255540e9bb41834fd797770</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 2" src="https://img.shields.io/badge/critical-2-8b1924"/> <img alt="high: 6" src="https://img.shields.io/badge/high-6-e25d68"/> <img alt="medium: 6" src="https://img.shields.io/badge/medium-6-fbb552"/> <img alt="low: 2" src="https://img.shields.io/badge/low-2-fce1a9"/> <img alt="unspecified: 2" src="https://img.shields.io/badge/unspecified-2-lightgrey"/></td></tr>
<tr><td>size</td><td>34 MB</td></tr>
<tr><td>packages</td><td>225</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 4" src="https://img.shields.io/badge/H-4-e25d68"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>stdlib</strong> <code>1.22.3</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.22.3</code></small><br/>

```dockerfile
# Dockerfile (76:76)
COPY --from=builder /go/bin/dex /usr/local/bin/dex
```

<br/>

<a href="https://scout.docker.com/v/CVE-2024-24790?s=golang&n=stdlib&t=golang&vr=%3E%3D1.22.0-0%2C%3C1.22.4"><img alt="critical : CVE--2024--24790" src="https://img.shields.io/badge/CVE--2024--24790-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.22.0-0<br/><1.22.4</code></td></tr>
<tr><td>Fixed version</td><td><code>1.22.4</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.06%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>28th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The various Is methods (IsPrivate, IsLoopback, etc) did not work as expected for IPv4-mapped IPv6 addresses, returning false for addresses which would return true in their traditional IPv4 forms.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-34158?s=golang&n=stdlib&t=golang&vr=%3C1.22.7"><img alt="high : CVE--2024--34158" src="https://img.shields.io/badge/CVE--2024--34158-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.22.7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.22.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling Parse on a "// +build" build tag line with deeply nested expressions can cause a panic due to stack exhaustion.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-34156?s=golang&n=stdlib&t=golang&vr=%3C1.22.7"><img alt="high : CVE--2024--34156" src="https://img.shields.io/badge/CVE--2024--34156-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.22.7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.22.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling Decoder.Decode on a message which contains deeply nested structures can cause a panic due to stack exhaustion. This is a follow-up to CVE-2022-30635.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-24791?s=golang&n=stdlib&t=golang&vr=%3E%3D1.22.0-0%2C%3C1.22.5"><img alt="high : CVE--2024--24791" src="https://img.shields.io/badge/CVE--2024--24791-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.22.0-0<br/><1.22.5</code></td></tr>
<tr><td>Fixed version</td><td><code>1.22.5</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The net/http HTTP/1.1 client mishandled the case where a server responds to a request with an "Expect: 100-continue" header with a non-informational (200 or higher) status. This mishandling could leave a client connection in an invalid state, where the next request sent on the connection will fail.

An attacker sending a request to a net/http/httputil.ReverseProxy proxy can exploit this mishandling to cause a denial of service by sending "Expect: 100-continue" requests which elicit a non-informational response from the backend. Each such request leaves the proxy with an invalid connection, and causes one subsequent request using that connection to fail.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-30635?s=golang&n=stdlib&t=golang&vr=%3C1.22.7"><img alt="high : CVE--2022--30635" src="https://img.shields.io/badge/CVE--2022--30635-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.22.7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.22.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.19%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>56th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling Decoder.Decode on a message which contains deeply nested structures can cause a panic due to stack exhaustion. This is a follow-up to CVE-2022-30635.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-24789?s=golang&n=stdlib&t=golang&vr=%3E%3D1.22.0-0%2C%3C1.22.4"><img alt="medium : CVE--2024--24789" src="https://img.shields.io/badge/CVE--2024--24789-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.22.0-0<br/><1.22.4</code></td></tr>
<tr><td>Fixed version</td><td><code>1.22.4</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The archive/zip package's handling of certain types of invalid zip files differs from the behavior of most zip implementations. This misalignment could be exploited to create an zip file with contents that vary depending on the implementation reading the file. The archive/zip package now rejects files containing these errors.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-34155?s=golang&n=stdlib&t=golang&vr=%3C1.22.7"><img alt="unspecified : CVE--2024--34155" src="https://img.shields.io/badge/CVE--2024--34155-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.22.7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.22.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling any of the Parse functions on Go source code which contains deeply nested literals can cause a panic due to stack exhaustion.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>openssl</strong> <code>3.3.0-r2</code> (apk)</summary>

<small><code>pkg:apk/alpine/openssl@3.3.0-r2?os_name=alpine&os_version=3.20</code></small><br/>

```dockerfile
# Dockerfile (38:57)
FROM alpine:3.20.0@sha256:77726ef6b57ddf65bb551896826ec38bc3e53f75cdde31354fbffb4f25238ebd AS stager

RUN mkdir -p /var/dex
RUN mkdir -p /etc/dex
COPY config.docker.yaml /etc/dex/

FROM alpine:3.20.0@sha256:77726ef6b57ddf65bb551896826ec38bc3e53f75cdde31354fbffb4f25238ebd AS gomplate

ARG TARGETOS
ARG TARGETARCH
ARG TARGETVARIANT

ENV GOMPLATE_VERSION=v3.11.8

RUN wget -O /usr/local/bin/gomplate \
  "https://github.com/hairyhenderson/gomplate/releases/download/${GOMPLATE_VERSION}/gomplate_${TARGETOS:-linux}-${TARGETARCH:-amd64}${TARGETVARIANT}" \
  && chmod +x /usr/local/bin/gomplate

# For Dependabot to detect base image versions
FROM alpine:3.20.0@sha256:77726ef6b57ddf65bb551896826ec38bc3e53f75cdde31354fbffb4f25238ebd AS alpine
```

<br/>

<a href="https://scout.docker.com/v/CVE-2024-5535?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C3.3.1-r1"><img alt="critical : CVE--2024--5535" src="https://img.shields.io/badge/CVE--2024--5535-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code><3.3.1-r1</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.1-r1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>14th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-6119?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C3.3.2-r0"><img alt="high : CVE--2024--6119" src="https://img.shields.io/badge/CVE--2024--6119-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><3.3.2-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.2-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-4741?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C3.3.0-r3"><img alt="unspecified : CVE--2024--4741" src="https://img.shields.io/badge/CVE--2024--4741-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code><3.3.0-r3</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.0-r3</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">

<small><code>pkg:golang/github.com/dexidp/dex@2.40.0</code></small><br/>

```dockerfile
# Dockerfile (76:76)
COPY --from=builder /go/bin/dex /usr/local/bin/dex
```

<br/>

<a href="https://scout.docker.com/v/CVE-2024-23656?s=golang&n=dex&ns=github.com%2Fdexidp&t=golang&vr=%3E%3D0"><img alt="high : CVE--2024--23656" src="https://img.shields.io/badge/CVE--2024--23656-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.06%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
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

<small><code>pkg:apk/alpine/busybox@1.36.1-r28?os_name=alpine&os_version=3.20</code></small><br/>

```dockerfile
# Dockerfile (38:57)
FROM alpine:3.20.0@sha256:77726ef6b57ddf65bb551896826ec38bc3e53f75cdde31354fbffb4f25238ebd AS stager

RUN mkdir -p /var/dex
RUN mkdir -p /etc/dex
COPY config.docker.yaml /etc/dex/

FROM alpine:3.20.0@sha256:77726ef6b57ddf65bb551896826ec38bc3e53f75cdde31354fbffb4f25238ebd AS gomplate

ARG TARGETOS
ARG TARGETARCH
ARG TARGETVARIANT

ENV GOMPLATE_VERSION=v3.11.8

RUN wget -O /usr/local/bin/gomplate \
  "https://github.com/hairyhenderson/gomplate/releases/download/${GOMPLATE_VERSION}/gomplate_${TARGETOS:-linux}-${TARGETARCH:-amd64}${TARGETVARIANT}" \
  && chmod +x /usr/local/bin/gomplate

# For Dependabot to detect base image versions
FROM alpine:3.20.0@sha256:77726ef6b57ddf65bb551896826ec38bc3e53f75cdde31354fbffb4f25238ebd AS alpine
```

<br/>

<a href="https://scout.docker.com/v/CVE-2023-42365?s=alpine&n=busybox&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C1.36.1-r29"><img alt="medium : CVE--2023--42365" src="https://img.shields.io/badge/CVE--2023--42365-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.36.1-r29</code></td></tr>
<tr><td>Fixed version</td><td><code>1.36.1-r30</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>14th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-42364?s=alpine&n=busybox&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C1.36.1-r29"><img alt="medium : CVE--2023--42364" src="https://img.shields.io/badge/CVE--2023--42364-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.36.1-r29</code></td></tr>
<tr><td>Fixed version</td><td><code>1.36.1-r30</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>14th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">

<small><code>pkg:golang/github.com/aws/aws-sdk-go@1.44.206</code></small><br/>

```dockerfile
# Dockerfile (80:80)
COPY --from=gomplate /usr/local/bin/gomplate /usr/local/bin/gomplate
```

<br/>

<a href="https://scout.docker.com/v/CVE-2020-8911?s=golang&n=aws-sdk-go&ns=github.com%2Faws&t=golang&vr=%3E%3D0"><img alt="medium : CVE--2020--8911" src="https://img.shields.io/badge/CVE--2020--8911-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.05%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Go AWS S3 Crypto SDK contains vulnerabilities that can permit an attacker with write access to a bucket to decrypt files in that bucket.

Files encrypted by the V1 EncryptionClient using either the AES-CBC content cipher or the KMS key wrap algorithm are vulnerable. Users should migrate to the V1 EncryptionClientV2 API, which will not create vulnerable files. Old files will remain vulnerable until re-encrypted with the new client.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2020-8912?s=golang&n=aws-sdk-go&ns=github.com%2Faws&t=golang&vr=%3E%3D0"><img alt="low : CVE--2020--8912" src="https://img.shields.io/badge/CVE--2020--8912-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>14th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Go AWS S3 Crypto SDK contains vulnerabilities that can permit an attacker with write access to a bucket to decrypt files in that bucket.

Files encrypted by the V1 EncryptionClient using either the AES-CBC content cipher or the KMS key wrap algorithm are vulnerable. Users should migrate to the V1 EncryptionClientV2 API, which will not create vulnerable files. Old files will remain vulnerable until re-encrypted with the new client.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">

<small><code>pkg:golang/github.com/hashicorp/go-retryablehttp@0.7.1</code></small><br/>

```dockerfile
# Dockerfile (80:80)
COPY --from=gomplate /usr/local/bin/gomplate /usr/local/bin/gomplate
```

<br/>

<a href="https://scout.docker.com/v/CVE-2024-6104?s=github&n=go-retryablehttp&ns=github.com%2Fhashicorp&t=golang&vr=%3C0.7.7"><img alt="medium 6.0: CVE--2024--6104" src="https://img.shields.io/badge/CVE--2024--6104-lightgrey?label=medium%206.0&labelColor=fbb552"/></a> <i>Insertion of Sensitive Information into Log File</i>

<table>
<tr><td>Affected range</td><td><code><0.7.7</code></td></tr>
<tr><td>Fixed version</td><td><code>0.7.7</code></td></tr>
<tr><td>CVSS Score</td><td><code>6</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:H/UI:N/S:C/C:H/I:N/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>10th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

go-retryablehttp prior to 0.7.7 did not sanitize urls when writing them to its log file. This could lead to go-retryablehttp writing sensitive HTTP basic auth credentials to its log file. This vulnerability, CVE-2024-6104, was fixed in go-retryablehttp 0.7.7.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">

<small><code>pkg:golang/gopkg.in/square/go-jose.v2@2.6.0</code></small><br/>

```dockerfile
# Dockerfile (80:80)
COPY --from=gomplate /usr/local/bin/gomplate /usr/local/bin/gomplate
```

<br/>

<a href="https://scout.docker.com/v/CVE-2024-28180?s=github&n=go-jose.v2&ns=gopkg.in%2Fsquare&t=golang&vr=%3C%3D2.6.0"><img alt="medium 4.3: CVE--2024--28180" src="https://img.shields.io/badge/CVE--2024--28180-lightgrey?label=medium%204.3&labelColor=fbb552"/></a> <i>Improper Handling of Highly Compressed Data (Data Amplification)</i>

<table>
<tr><td>Affected range</td><td><code><=2.6.0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>4.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.05%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact
An attacker could send a JWE containing compressed data that used large amounts of memory and CPU when decompressed by Decrypt or DecryptMulti. Those functions now return an error if the decompressed data would exceed 250kB or 10x the compressed size (whichever is larger). Thanks to Enze Wang@Alioth and Jianjun Chen@Zhongguancun Lab (@zer0yu and @chenjj) for reporting.

### Patches
The problem is fixed in the following packages and versions:
- github.com/go-jose/go-jose/v4 version 4.0.1
- github.com/go-jose/go-jose/v3 version 3.0.3
- gopkg.in/go-jose/go-jose.v2 version 2.6.3

The problem will not be fixed in the following package because the package is archived:
- gopkg.in/square/go-jose.v2

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">

<small><code>pkg:golang/google.golang.org/grpc@1.64.0</code></small><br/>

```dockerfile
# Dockerfile (76:76)
COPY --from=builder /go/bin/dex /usr/local/bin/dex
```

<br/>

<a href="https://scout.docker.com/v/GHSA-xr7q-jx4m-x55m?s=github&n=grpc&ns=google.golang.org&t=golang&vr=%3E%3D1.64.0%2C%3C1.64.1"><img alt="low : GHSA--xr7q--jx4m--x55m" src="https://img.shields.io/badge/GHSA--xr7q--jx4m--x55m-lightgrey?label=low%20&labelColor=fce1a9"/></a> <i>Exposure of Sensitive Information to an Unauthorized Actor</i>

<table>
<tr><td>Affected range</td><td><code>>=1.64.0<br/><1.64.1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.64.1</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact
This issue represents a potential PII concern.  If applications were printing or logging a context containing gRPC metadata, the affected versions will contain all the metadata, which may include private information.

### Patches
The issue first appeared in 1.64.0 and is patched in 1.64.1 and 1.65.0

### Workarounds
If using an affected version and upgrading is not possible, ensuring you do not log or print contexts will avoid the problem.


</blockquote>
</details>
</details></td></tr>
</table>

