---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:cb1c336dc892313409a8a9be0bd058eeb502231aa3383b448d862253abe72660</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 0" src="https://img.shields.io/badge/critical-0-lightgrey"/> <img alt="high: 6" src="https://img.shields.io/badge/high-6-e25d68"/> <img alt="medium: 4" src="https://img.shields.io/badge/medium-4-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/low-0-lightgrey"/> <img alt="unspecified: 12" src="https://img.shields.io/badge/unspecified-12-lightgrey"/></td></tr>
<tr><td>platform</td><td>linux/arm64/v8</td></tr>
<tr><td>size</td><td>11 MB</td></tr>
<tr><td>packages</td><td>32</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 5" src="https://img.shields.io/badge/H-5-e25d68"/> <img alt="medium: 3" src="https://img.shields.io/badge/M-3-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>stdlib</strong> <code>1.25.9</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.25.9</code></small><br/>

```dockerfile
# 2.12.x/alpine3.22/Dockerfile (14:36)
RUN set -eux; \
    apkArch="$(apk --print-arch)"; \
    case "$apkArch" in \
    aarch64) natsArch='arm64'; sha256='3b9a79986778285c0e5acaba0b1218b72f6159db68fe5b8916a7d846240f9f22' ;; \
    armhf) natsArch='arm6'; sha256='83e4886378c1b779a8036b614d99a5d3841fbb12838d076031b153bec8aff247' ;; \
    armv7) natsArch='arm7'; sha256='c6a2563489aa54ecb2f5ff73d24fc5f9052ef70c4bf179b10ea322811cd42a0b' ;; \
    x86_64) natsArch='amd64'; sha256='570d2d627db111e679cc1e6bc57ba78f373ed1769acd8dc9c21c8f62d15b3c52' ;; \
    x86) natsArch='386'; sha256='6f866cdd4e5c4414f50e62394ee1fd132ad3b972086d10df12d88c30264a66ac' ;; \
    s390x) natsArch='s390x'; sha256='34ae4158237e879c7bf79875101f14a79184c23757f11d521c40c59518203950' ;; \
    ppc64le) natsArch='ppc64le'; sha256='6508ea8a70d7d5cc68978150a55bd51e2a41a37f120c361d7b48c06c699728c8' ;; \
    loong64) natsArch='loong64'; sha256='614bd0bffe5c7835bbef5e330e25dcf0041c73d84a7976ba598c5c1d5bd49980' ;; \
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

<a href="https://scout.docker.com/v/CVE-2026-42499?s=golang&n=stdlib&t=golang&vr=%3C1.25.10"><img alt="high : CVE--2026--42499" src="https://img.shields.io/badge/CVE--2026--42499-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.022%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.020%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.054%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>17th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.018%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.017%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When using LookupCNAME with the cgo DNS resolver, a very long CNAME response can trigger a double-free of C memory and a crash.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39826?s=golang&n=stdlib&t=golang&vr=%3C1.25.10"><img alt="medium : CVE--2026--39826" src="https://img.shields.io/badge/CVE--2026--39826-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.013%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.010%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

CVE-2026-27142 fixed a vulnerability in which URLs were not correctly escaped inside of a <meta> tag's <content> attribute. If the URL content were to insert ASCII whitespaces around the '=' rune inside of the <content> attribute, the escaper would fail to similarly escape it, leading to XSS.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39825?s=golang&n=stdlib&t=golang&vr=%3C1.25.10"><img alt="medium : CVE--2026--39825" src="https://img.shields.io/badge/CVE--2026--39825-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.012%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

ReverseProxy can forward queries containing parameters not visible to Rewrite functions.

When used with a Rewrite function, or a Director function which parses query parameters, ReverseProxy sanitizes the forwarded request to remove query parameters which are not parsed by url.ParseQuery. ReverseProxy does not take ParseQuery's limit on the total number of query parameters (controlled by GODEBUG=urlmaxqueryparams=N) into account. This can permit ReverseProxy to forward a request containing a query parameter that is not visible to the Rewrite function.

For example, the query "a1=x&a2=x&...&a10000=x&hidden=y" can forward the parameter "hidden=y" while hiding it from the proxy's Rewrite function.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 12" src="https://img.shields.io/badge/U-12-lightgrey"/><strong>golang.org/x/crypto</strong> <code>0.49.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/crypto@0.49.0</code></small><br/>

```dockerfile
# 2.12.x/alpine3.22/Dockerfile (14:36)
RUN set -eux; \
    apkArch="$(apk --print-arch)"; \
    case "$apkArch" in \
    aarch64) natsArch='arm64'; sha256='3b9a79986778285c0e5acaba0b1218b72f6159db68fe5b8916a7d846240f9f22' ;; \
    armhf) natsArch='arm6'; sha256='83e4886378c1b779a8036b614d99a5d3841fbb12838d076031b153bec8aff247' ;; \
    armv7) natsArch='arm7'; sha256='c6a2563489aa54ecb2f5ff73d24fc5f9052ef70c4bf179b10ea322811cd42a0b' ;; \
    x86_64) natsArch='amd64'; sha256='570d2d627db111e679cc1e6bc57ba78f373ed1769acd8dc9c21c8f62d15b3c52' ;; \
    x86) natsArch='386'; sha256='6f866cdd4e5c4414f50e62394ee1fd132ad3b972086d10df12d88c30264a66ac' ;; \
    s390x) natsArch='s390x'; sha256='34ae4158237e879c7bf79875101f14a79184c23757f11d521c40c59518203950' ;; \
    ppc64le) natsArch='ppc64le'; sha256='6508ea8a70d7d5cc68978150a55bd51e2a41a37f120c361d7b48c06c699728c8' ;; \
    loong64) natsArch='loong64'; sha256='614bd0bffe5c7835bbef5e330e25dcf0041c73d84a7976ba598c5c1d5bd49980' ;; \
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

<a href="https://scout.docker.com/v/CVE-2026-46597?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="high : CVE--2026--46597" src="https://img.shields.io/badge/CVE--2026--46597-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.018%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An incorrectly placed cast from bytes to int allowed for server-side panic in the AES-GCM packet decoder for well-crafted inputs.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-46598?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="unspecified : CVE--2026--46598" src="https://img.shields.io/badge/CVE--2026--46598-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.018%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

For certain crafted inputs, a 'ed25519.PrivateKey' was created by casting malformed wire bytes, leading to a panic when used.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-46595?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="unspecified : CVE--2026--46595" src="https://img.shields.io/badge/CVE--2026--46595-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.016%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Previously, CVE-2024-45337 fixed an authorization bypass for misused ssh server configurations; if any other type of callback is passed other than public key, then the source-address validation would be skipped.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42508?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="unspecified : CVE--2026--42508" src="https://img.shields.io/badge/CVE--2026--42508-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.016%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Previously, a revoked 'SignatureKey' belonging to a CA was not correctly checked for revocation. Now, both the 'key' and 'key.SignatureKey' are checked for @<!-- -->revoked.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39835?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="unspecified : CVE--2026--39835" src="https://img.shields.io/badge/CVE--2026--39835-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.011%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

SSH servers which use CertChecker as a public key callback without setting IsUserAuthority or IsHostAuthority could be caused to panic by a client presenting a certificate. CertChecker now returns an error instead of panicking when these callbacks are nil.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39834?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="unspecified : CVE--2026--39834" src="https://img.shields.io/badge/CVE--2026--39834-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.018%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When writing data larger than 4GB in a single Write call on an SSH channel, an integer overflow in the internal payload size calculation caused the write loop to spin indefinitely, sending empty packets without making progress. The size comparison now uses int64 to prevent truncation.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39833?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="unspecified : CVE--2026--39833" src="https://img.shields.io/badge/CVE--2026--39833-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.019%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The in-memory keyring returned by NewKeyring() silently accepted keys with the ConfirmBeforeUse constraint but never enforced it. The key would sign without any confirmation prompt, with no indication to the caller that the constraint was not in effect. NewKeyring() now returns an error when unsupported constraints are requested.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39832?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="unspecified : CVE--2026--39832" src="https://img.shields.io/badge/CVE--2026--39832-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.016%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When adding a key to a remote agent constraint extensions such as restrict-destination-v00@<!-- -->openssh.com were not serialized in the request. Destination restrictions were silently stripped when forwarding keys, allowing unrestricted use of the key on the remote host. The client now serializes all constraint extensions. Additionally, the in-memory keyring returned by NewKeyring() now rejects keys with unsupported constraint extensions instead of silently ignoring them.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39831?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="unspecified : CVE--2026--39831" src="https://img.shields.io/badge/CVE--2026--39831-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.012%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Verify() method for FIDO/U2F security key types (sk-ecdsa-sha2-nistp256@<!-- -->openssh.com, sk-ssh-ed25519@<!-- -->openssh.com) did not check the User Presence flag. Signatures generated without physical touch were accepted, allowing unattended use of a hardware security key. To restore the previous behavior, return a "no-touch-required" extension in Permissions.Extensions from PublicKeyCallback.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39830?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="unspecified : CVE--2026--39830" src="https://img.shields.io/badge/CVE--2026--39830-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.016%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A malicious SSH peer could send unsolicited global request responses to fill an internal buffer, blocking the connection's read loop. The blocked goroutine could not be released by calling Close(), resulting in a resource leak per connection. Unsolicited global responses are now discarded.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39829?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="unspecified : CVE--2026--39829" src="https://img.shields.io/badge/CVE--2026--39829-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.034%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>10th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The RSA and DSA public key parsers did not enforce size limits on key parameters. A crafted public key with an excessively large modulus or DSA parameter could cause several minutes of CPU consumption during signature verification. This could be triggered by unauthenticated clients during public key authentication. RSA moduli are now limited to 8192 bits, and DSA parameters are validated per FIPS 186-2.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39828?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="unspecified : CVE--2026--39828" src="https://img.shields.io/badge/CVE--2026--39828-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.015%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When an SSH server authentication callback returned PartialSuccessError with non-nil Permissions, those permissions were silently discarded, potentially dropping certificate restrictions such as force-command after a second factor succeeded. Returning non-nil Permissions with PartialSuccessError now results in a connection error.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39827?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="unspecified : CVE--2026--39827" src="https://img.shields.io/badge/CVE--2026--39827-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.018%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An authenticated SSH client that repeatedly opened channels which were rejected by the server caused unbounded memory growth, eventually crashing the server process and affecting all connected users. Rejected channels are now properly removed from the connection's internal state and released for garbage collection.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>busybox</strong> <code>1.37.0-r20</code> (apk)</summary>

<small><code>pkg:apk/alpine/busybox@1.37.0-r20?os_name=alpine&os_version=3.22</code></small><br/>

```dockerfile
# 2.12.x/alpine3.22/Dockerfile (0:0)

```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-60876?s=alpine&n=busybox&ns=alpine&t=apk&osn=alpine&osv=3.22&vr=%3C%3D1.37.0-r20"><img alt="medium : CVE--2025--60876" src="https://img.shields.io/badge/CVE--2025--60876-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=1.37.0-r20</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.051%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>
</table>

