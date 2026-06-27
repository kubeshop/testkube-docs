---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:4267586f8d1941e8955323b0014cba3b61f65881b4c4c20de688fbe1c5fea804</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 0" src="https://img.shields.io/badge/critical-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/high-1-e25d68"/> <img alt="medium: 3" src="https://img.shields.io/badge/medium-3-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/low-0-lightgrey"/> <!-- unspecified: 0 --></td></tr>
<tr><td>platform</td><td>linux/arm64/v8</td></tr>
<tr><td>size</td><td>11 MB</td></tr>
<tr><td>packages</td><td>32</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>stdlib</strong> <code>1.26.3</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.26.3</code></small><br/>

```dockerfile
# 2.14.x/alpine3.22/Dockerfile (14:36)
RUN set -eux; \
    apkArch="$(apk --print-arch)"; \
    case "$apkArch" in \
    aarch64) natsArch='arm64'; sha256='15fd0c3438e7178e5316e63be68373ad581c8d78db26e649113aa303b74e5e58' ;; \
    armhf) natsArch='arm6'; sha256='1c2a2b9c52d9232b58ce092ba093c46c5da6f47b1ce9b1342e3ae9465de6e758' ;; \
    armv7) natsArch='arm7'; sha256='6bc20a6f439d72f71dae981ffe3430197eb6e64c0d2c6000b4b4b105904fbd3c' ;; \
    x86_64) natsArch='amd64'; sha256='b3e7b14eb10c895fd90c2dacdb6b65bd3208adcc9524dd7689ba2c1024e6b97a' ;; \
    x86) natsArch='386'; sha256='654a79c090daa27dc9bc638c09e28cb0bdbed5b24e075608357b475367d47edb' ;; \
    s390x) natsArch='s390x'; sha256='acb6081c49e101119fb35a3cb2d77e7970440e968583c61aedf6e64e4f5023d3' ;; \
    ppc64le) natsArch='ppc64le'; sha256='05733a36a22ece31a23059147fbb7a9b27bb86e9770ffb1b6ba7478603b75330' ;; \
    loong64) natsArch='loong64'; sha256='0a31d33cc3430ec9f2b51f789afee4a21fb5d28447d52c661acfd9ea46f5d7fb' ;; \
    *) echo >&2 "error: $apkArch is not supported!"; exit 1 ;; \
    esac; \
    \
    wget -O nats-server.tar.gz "https://github.com/nats-io/nats-server/releases/download/v${NATS_SERVER}/nats-server-v${NATS_SERVER}-linux-${natsArch}.tar.gz"; \
    echo "${sha256} *nats-server.tar.gz" | sha256sum -c -; \
    \
    apk add --no-cache ca-certificates tzdata; \
    \
    tar -xf nats-server.tar.gz; \
    rm nats-server.tar.gz; \
    mv "nats-server-v${NATS_SERVER}-linux-${natsArch}/nats-server" /usr/local/bin; \
    rm -rf "nats-server-v${NATS_SERVER}-linux-${natsArch}";
```

<br/>

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

<a href="https://scout.docker.com/v/CVE-2026-27145?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.4"><img alt="medium : CVE--2026--27145" src="https://img.shields.io/badge/CVE--2026--27145-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.4</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.4</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.561%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>42nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

(*x509.Certificate).VerifyHostname previously called matchHostnames in a loop over all DNS Subject Alternative Name (SAN) entries. This caused strings.Split(host, ".") to execute repeatedly on the same input hostname.

With a large DNS SAN list, verification costs scaled quadratically based on the number of SAN entries multiplied by the hostname's label count. Because x509.Verify validates hostnames before building the certificate chain, this overhead occurred even for untrusted certificates.

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
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>busybox</strong> <code>1.37.0-r20</code> (apk)</summary>

<small><code>pkg:apk/alpine/busybox@1.37.0-r20?os_name=alpine&os_version=3.22</code></small><br/>

```dockerfile
# 2.14.x/alpine3.22/Dockerfile (0:0)

```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-60876?s=alpine&n=busybox&ns=alpine&t=apk&osn=alpine&osv=3.22&vr=%3C%3D1.37.0-r20"><img alt="medium : CVE--2025--60876" src="https://img.shields.io/badge/CVE--2025--60876-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=1.37.0-r20</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.252%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>
</table>

