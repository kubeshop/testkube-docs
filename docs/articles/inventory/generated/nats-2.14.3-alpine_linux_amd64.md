---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:a42e284980d105c1b668d553175b4c7abc9b7187c5e9859baf4f1d564772b85f</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 1" src="https://img.shields.io/badge/critical-1-8b1924"/> <img alt="high: 5" src="https://img.shields.io/badge/high-5-e25d68"/> <img alt="medium: 3" src="https://img.shields.io/badge/medium-3-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/low-0-lightgrey"/> <img alt="unspecified: 4" src="https://img.shields.io/badge/unspecified-4-lightgrey"/></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>11 MB</td></tr>
<tr><td>packages</td><td>32</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 5" src="https://img.shields.io/badge/H-5-e25d68"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 2" src="https://img.shields.io/badge/U-2-lightgrey"/><strong>stdlib</strong> <code>1.26.4</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.26.4</code></small><br/>

```dockerfile
# 2.14.x/alpine3.22/Dockerfile (14:36)
RUN set -eux; \
    apkArch="$(apk --print-arch)"; \
    case "$apkArch" in \
    aarch64) natsArch='arm64'; sha256='1759b6a0ddebade9471b7c02891dfaa8c73b526c6f3ce391d4e21ec3eceffab8' ;; \
    armhf) natsArch='arm6'; sha256='95d285b170a1417121fbb62ec5c9b618552855d072f48be86cd4d11544227704' ;; \
    armv7) natsArch='arm7'; sha256='d70d6de7ad0d587ad3047f4516a054f64b693edb79894d7ec0a2d176be31f6cf' ;; \
    x86_64) natsArch='amd64'; sha256='f3d0c820c749f81d717310fb00d4903919e70e3e66b268bd352a088b9788eb93' ;; \
    x86) natsArch='386'; sha256='071d031273136987af2da68103bd1080fbdd463b244c703388d0164726b17357' ;; \
    s390x) natsArch='s390x'; sha256='be525fec7cf3dac23e9617ca2b4b3767e79b1f684a456f3a2e85e1b3d40a6da9' ;; \
    ppc64le) natsArch='ppc64le'; sha256='12b4ecc73e7023b501a374913c7e70f7487107743dbab7cc7da627348b87f9d3' ;; \
    loong64) natsArch='loong64'; sha256='9a69c1fd01d290695cef2e33412e0e3ad4fe8e4af03faf0be137cd7e287bd55b' ;; \
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

<a href="https://scout.docker.com/v/CVE-2026-39821?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.6"><img alt="critical : CVE--2026--39821" src="https://img.shields.io/badge/CVE--2026--39821-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.655%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>48th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The ToASCII and ToUnicode functions incorrectly accept Punycode-encoded labels that decode to an ASCII-only label. For example, ToUnicode("xn--example-.com") incorrectly returns the name "example.com" rather than an error.

This behavior can lead to privilege escalation in programs using the idna package. For example, a program which performs privilege checks on the ASCII hostname may reject "example.com" but permit "xn--example-.com". If that program subsequently converts the ASCII hostname to Unicode, it will inadvertently permits access to the Unicode name "example.com".

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-56862?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.6"><img alt="high : CVE--2026--56862" src="https://img.shields.io/badge/CVE--2026--56862-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.6</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Handshake messages, such as KeyUpdate, are always considered as state-advancing, regardless of whether a handshake has been completed or not. As a result, a malicious client can keep sending KeyUpdate messages to force the server to keep performing key derivation operations indefinitely.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-56859?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.6"><img alt="high : CVE--2026--56859" src="https://img.shields.io/badge/CVE--2026--56859-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.6</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Previously, DecodeElement would reset the depth counter causing it to never fire; this could lead to stack exhaustion.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-56853?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.6"><img alt="high : CVE--2026--56853" src="https://img.shields.io/badge/CVE--2026--56853-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.6</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When a server is configured to support unencrypted HTTP/2, it reads a few bytes from each new connection to see if they contain the HTTP/2 client preface. ReadHeaderTimeout is unexpectedly not being applied when doing this.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-46600?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.6"><img alt="high : CVE--2026--46600" src="https://img.shields.io/badge/CVE--2026--46600-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.339%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Parsing an invalid SVCB or HTTPS RR can panic when the size of a parameter value overflows the message buffer.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33818?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.6"><img alt="high : CVE--2026--33818" src="https://img.shields.io/badge/CVE--2026--33818-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.6</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Enforce a recursion limit in Unmarshal to prevent stack exhaustion when parsing deeply-nested, recursive structures.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-56858?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.6"><img alt="medium : CVE--2026--56858" src="https://img.shields.io/badge/CVE--2026--56858-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.6</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Previously, pathological inputs could close an unescaped '/' early, allowing for attack-controlled data to inject arbitrary content, potentially leading to XSS.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-56860?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.6"><img alt="medium : CVE--2026--56860" src="https://img.shields.io/badge/CVE--2026--56860-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.6</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Previously, resolving relative paths containing parent directory ('..') segments performed string conversions and buffer rewrites on each step, resulting in quadratic time complexity and high memory allocation overhead.

Now, path resolution operates on a byte buffer using index-based backtracking for '..' segments, eliminating the quadratic time complexity and significantly reducing memory allocations.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42505?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.5"><img alt="unspecified : CVE--2026--42505" src="https://img.shields.io/badge/CVE--2026--42505-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.5</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.5</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.382%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>31st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Handshakes which used Encrypted Client Hello could be de-anonymized by a passive network observer due to a disclosure of pre-shared key identities in the unencrypted client hello.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39822?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.5"><img alt="unspecified : CVE--2026--39822" src="https://img.shields.io/badge/CVE--2026--39822-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.5</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.5</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.232%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>14th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

On Unix systems, opening a file in an os.Root improperly follows symlinks to locations outside of the Root when the final path component of the a path is a symbolic link and the path ends in /.

For example, 'root.Open("symlink/")' will open "symlink" even when "symlink" is a symbolic link pointing outside of the root.

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
<tr><td>EPSS Score</td><td><code>0.291%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>github.com/klauspost/compress</strong> <code>1.18.6</code> (golang)</summary>

<small><code>pkg:golang/github.com/klauspost/compress@1.18.6</code></small><br/>

```dockerfile
# 2.14.x/alpine3.22/Dockerfile (14:36)
RUN set -eux; \
    apkArch="$(apk --print-arch)"; \
    case "$apkArch" in \
    aarch64) natsArch='arm64'; sha256='1759b6a0ddebade9471b7c02891dfaa8c73b526c6f3ce391d4e21ec3eceffab8' ;; \
    armhf) natsArch='arm6'; sha256='95d285b170a1417121fbb62ec5c9b618552855d072f48be86cd4d11544227704' ;; \
    armv7) natsArch='arm7'; sha256='d70d6de7ad0d587ad3047f4516a054f64b693edb79894d7ec0a2d176be31f6cf' ;; \
    x86_64) natsArch='amd64'; sha256='f3d0c820c749f81d717310fb00d4903919e70e3e66b268bd352a088b9788eb93' ;; \
    x86) natsArch='386'; sha256='071d031273136987af2da68103bd1080fbdd463b244c703388d0164726b17357' ;; \
    s390x) natsArch='s390x'; sha256='be525fec7cf3dac23e9617ca2b4b3767e79b1f684a456f3a2e85e1b3d40a6da9' ;; \
    ppc64le) natsArch='ppc64le'; sha256='12b4ecc73e7023b501a374913c7e70f7487107743dbab7cc7da627348b87f9d3' ;; \
    loong64) natsArch='loong64'; sha256='9a69c1fd01d290695cef2e33412e0e3ad4fe8e4af03faf0be137cd7e287bd55b' ;; \
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

<a href="https://scout.docker.com/v/GHSA-259r-337f-4rfw?s=golang&n=compress&ns=github.com%2Fklauspost&t=golang&vr=%3E%3D1.16.0%2C%3C1.18.7"><img alt="unspecified : GHSA--259r--337f--4rfw" src="https://img.shields.io/badge/GHSA--259r--337f--4rfw-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.16.0<br/><1.18.7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.18.7</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Providing a specially crafted dictionary to s2.NewDict and using it to encode data can make the encoder read out of bounds.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>golang.org/x/crypto</strong> <code>0.53.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/crypto@0.53.0</code></small><br/>

```dockerfile
# 2.14.x/alpine3.22/Dockerfile (14:36)
RUN set -eux; \
    apkArch="$(apk --print-arch)"; \
    case "$apkArch" in \
    aarch64) natsArch='arm64'; sha256='1759b6a0ddebade9471b7c02891dfaa8c73b526c6f3ce391d4e21ec3eceffab8' ;; \
    armhf) natsArch='arm6'; sha256='95d285b170a1417121fbb62ec5c9b618552855d072f48be86cd4d11544227704' ;; \
    armv7) natsArch='arm7'; sha256='d70d6de7ad0d587ad3047f4516a054f64b693edb79894d7ec0a2d176be31f6cf' ;; \
    x86_64) natsArch='amd64'; sha256='f3d0c820c749f81d717310fb00d4903919e70e3e66b268bd352a088b9788eb93' ;; \
    x86) natsArch='386'; sha256='071d031273136987af2da68103bd1080fbdd463b244c703388d0164726b17357' ;; \
    s390x) natsArch='s390x'; sha256='be525fec7cf3dac23e9617ca2b4b3767e79b1f684a456f3a2e85e1b3d40a6da9' ;; \
    ppc64le) natsArch='ppc64le'; sha256='12b4ecc73e7023b501a374913c7e70f7487107743dbab7cc7da627348b87f9d3' ;; \
    loong64) natsArch='loong64'; sha256='9a69c1fd01d290695cef2e33412e0e3ad4fe8e4af03faf0be137cd7e287bd55b' ;; \
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

<a href="https://scout.docker.com/v/GO-2026-5932?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3E%3D0"><img alt="unspecified : GO--2026--5932" src="https://img.shields.io/badge/GO--2026--5932-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The golang.org/x/crypto/openpgp package is unsafe by design, has numerous known security issues, is not maintained, and should not be used.

If you are required to interoperate with OpenPGP systems and need a maintained package, consider github.com/ProtonMail/go-crypto/openpgp which is a maintained fork that aims to be a drop-in replacement for this package.

</blockquote>
</details>
</details></td></tr>
</table>

