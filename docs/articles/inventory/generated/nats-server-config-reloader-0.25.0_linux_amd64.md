---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:1bc6f5eae6d24749efa7770963459309dac610d01388272c349cb382088f8046</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 1" src="https://img.shields.io/badge/critical-1-8b1924"/> <img alt="high: 2" src="https://img.shields.io/badge/high-2-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/medium-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/low-0-lightgrey"/> <img alt="unspecified: 6" src="https://img.shields.io/badge/unspecified-6-lightgrey"/></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>5.2 MB</td></tr>
<tr><td>packages</td><td>24</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>zlib</strong> <code>1.3.2-r0</code> (apk)</summary>

<small><code>pkg:apk/alpine/zlib@1.3.2-r0?arch=x86_64&os_name=alpine&os_version=3.24</code></small><br/>

```dockerfile
# Dockerfile (4:31)
FROM alpine:3.24.2 AS deps

ARG GO_APP
ARG GORELEASER_DIST_DIR=/go/src/dist

ARG TARGETOS
ARG TARGETARCH
ARG TARGETVARIANT

RUN mkdir -p /go/bin /go/src ${GORELEASER_DIST_DIR}

COPY --from=build ${GORELEASER_DIST_DIR}/ ${GORELEASER_DIST_DIR}

RUN <<EOT
  set -e 
  apk add --no-cache ca-certificates jq
  cd ${GORELEASER_DIST_DIR}/..

  if [[ ${TARGETARCH} == "arm" ]]; then VARIANT=$(echo ${TARGETVARIANT} | sed 's/^v//'); fi
  BIN_PATH=$(jq -r ".[] |select(.type   == \"Binary\" and \
                                .name   == \"${GO_APP}\" and \
                                .goos   == \"${TARGETOS}\" and \
                                .goarch == \"${TARGETARCH}\" and \
                                (.goarm == \"${VARIANT}\" or .goarm == null)) | .path" < /go/src/dist/artifacts.json)
  cp ${BIN_PATH} /go/bin
EOT

FROM alpine:3.24.2
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-4738?s=alpine&n=zlib&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C1.4-r0"><img alt="critical : CVE--2026--4738" src="https://img.shields.io/badge/CVE--2026--4738-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.4-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.4-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.269%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>19th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-85091?s=alpine&n=zlib&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C1.3.2-r1"><img alt="high : CVE--2026--85091" src="https://img.shields.io/badge/CVE--2026--85091-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.3.2-r1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.3.2-r1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.469%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>41st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>musl</strong> <code>1.2.6-r2</code> (apk)</summary>

<small><code>pkg:apk/alpine/musl@1.2.6-r2?arch=x86_64&os_name=alpine&os_version=3.24</code></small><br/>

```dockerfile
# Dockerfile (4:31)
FROM alpine:3.24.2 AS deps

ARG GO_APP
ARG GORELEASER_DIST_DIR=/go/src/dist

ARG TARGETOS
ARG TARGETARCH
ARG TARGETVARIANT

RUN mkdir -p /go/bin /go/src ${GORELEASER_DIST_DIR}

COPY --from=build ${GORELEASER_DIST_DIR}/ ${GORELEASER_DIST_DIR}

RUN <<EOT
  set -e 
  apk add --no-cache ca-certificates jq
  cd ${GORELEASER_DIST_DIR}/..

  if [[ ${TARGETARCH} == "arm" ]]; then VARIANT=$(echo ${TARGETVARIANT} | sed 's/^v//'); fi
  BIN_PATH=$(jq -r ".[] |select(.type   == \"Binary\" and \
                                .name   == \"${GO_APP}\" and \
                                .goos   == \"${TARGETOS}\" and \
                                .goarch == \"${TARGETARCH}\" and \
                                (.goarm == \"${VARIANT}\" or .goarm == null)) | .path" < /go/src/dist/artifacts.json)
  cp ${BIN_PATH} /go/bin
EOT

FROM alpine:3.24.2
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-107891?s=alpine&n=musl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C1.2.6-r6"><img alt="high : CVE--2026--107891" src="https://img.shields.io/badge/CVE--2026--107891-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.2.6-r6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.2.6-r6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.549%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>46th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 5" src="https://img.shields.io/badge/U-5-lightgrey"/><strong>openssl</strong> <code>3.5.8-r0</code> (apk)</summary>

<small><code>pkg:apk/alpine/openssl@3.5.8-r0?os_name=alpine&os_version=3.24</code></small><br/>

```dockerfile
# Dockerfile (4:31)
FROM alpine:3.24.2 AS deps

ARG GO_APP
ARG GORELEASER_DIST_DIR=/go/src/dist

ARG TARGETOS
ARG TARGETARCH
ARG TARGETVARIANT

RUN mkdir -p /go/bin /go/src ${GORELEASER_DIST_DIR}

COPY --from=build ${GORELEASER_DIST_DIR}/ ${GORELEASER_DIST_DIR}

RUN <<EOT
  set -e 
  apk add --no-cache ca-certificates jq
  cd ${GORELEASER_DIST_DIR}/..

  if [[ ${TARGETARCH} == "arm" ]]; then VARIANT=$(echo ${TARGETVARIANT} | sed 's/^v//'); fi
  BIN_PATH=$(jq -r ".[] |select(.type   == \"Binary\" and \
                                .name   == \"${GO_APP}\" and \
                                .goos   == \"${TARGETOS}\" and \
                                .goarch == \"${TARGETARCH}\" and \
                                (.goarm == \"${VARIANT}\" or .goarm == null)) | .path" < /go/src/dist/artifacts.json)
  cp ${BIN_PATH} /go/bin
EOT

FROM alpine:3.24.2
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-95692?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C3.5.9-r1"><img alt="unspecified : CVE--2026--95692" src="https://img.shields.io/badge/CVE--2026--95692-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.9-r1</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.9-r1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.211%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-95691?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C3.5.9-r1"><img alt="unspecified : CVE--2026--95691" src="https://img.shields.io/badge/CVE--2026--95691-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.9-r1</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.9-r1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.190%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-88823?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C3.5.9-r1"><img alt="unspecified : CVE--2026--88823" src="https://img.shields.io/badge/CVE--2026--88823-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.9-r1</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.9-r1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.142%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-88822?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C3.5.9-r1"><img alt="unspecified : CVE--2026--88822" src="https://img.shields.io/badge/CVE--2026--88822-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.9-r1</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.9-r1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.190%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-107496?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C3.5.9-r1"><img alt="unspecified : CVE--2026--107496" src="https://img.shields.io/badge/CVE--2026--107496-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.9-r1</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.9-r1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.127%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>stdlib</strong> <code>1.27.3</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.27.3</code></small><br/>

```dockerfile
# Dockerfile (38:38)
COPY --from=deps /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-97054?s=golang&n=stdlib&t=golang&vr=%3E%3D1.27.0-0%2C%3C1.27.4"><img alt="unspecified : CVE--2026--97054" src="https://img.shields.io/badge/CVE--2026--97054-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.27.0-0<br/><1.27.4</code></td></tr>
<tr><td>Fixed version</td><td><code>1.27.4</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.171%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>7th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

For HTTP/1 servers, when MaxBytesReader's limit is exceeded, "Connection: close" header is automatically set without synchronization, which might race with another header being set explicitly in the server handler. As a result, an HTTP/1 server that utilizes MaxBytesReader or MaxBytesHandler can crash due to runtime panic if its handler reads the request body concurrently with writing the response header.

</blockquote>
</details>
</details></td></tr>
</table>

