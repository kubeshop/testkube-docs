---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:d655cf33523220e732793a84a03e2e7dd84cfa81741780da36ae1e36daa46965</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 0" src="https://img.shields.io/badge/critical-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/high-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/medium-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/low-0-lightgrey"/> <!-- unspecified: 0 --></td></tr>
<tr><td>platform</td><td>linux/arm64</td></tr>
<tr><td>size</td><td>5.3 MB</td></tr>
<tr><td>packages</td><td>24</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>openssl</strong> <code>3.5.0-r0</code> (apk)</summary>

<small><code>pkg:apk/alpine/openssl@3.5.0-r0?os_name=alpine&os_version=3.22</code></small><br/>

```dockerfile
# Dockerfile (4:31)
FROM alpine:3.22.0 AS deps

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

FROM alpine:3.22.0
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-4575?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.22&vr=%3C3.5.1-r0"><img alt="medium : CVE--2025--4575" src="https://img.shields.io/badge/CVE--2025--4575-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.1-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.1-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.029%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>
</table>

