---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:abc668a25359714d7320be16684a7a6096d82a6d41aa9fbb4275c02f3fb1e716</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 8" src="https://img.shields.io/badge/critical-8-8b1924"/> <img alt="high: 11" src="https://img.shields.io/badge/high-11-e25d68"/> <img alt="medium: 11" src="https://img.shields.io/badge/medium-11-fbb552"/> <img alt="low: 2" src="https://img.shields.io/badge/low-2-fce1a9"/> <!-- unspecified: 0 --></td></tr>
<tr><td>platform</td><td>linux/arm64/v8</td></tr>
<tr><td>size</td><td>11 MB</td></tr>
<tr><td>packages</td><td>32</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 7" src="https://img.shields.io/badge/C-7-8b1924"/> <img alt="high: 2" src="https://img.shields.io/badge/H-2-e25d68"/> <img alt="medium: 4" src="https://img.shields.io/badge/M-4-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/crypto</strong> <code>0.51.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/crypto@0.51.0</code></small><br/>

```dockerfile
# 2.14.x/alpine3.22/Dockerfile (14:36)
RUN set -eux; \
    apkArch="$(apk --print-arch)"; \
    case "$apkArch" in \
    aarch64) natsArch='arm64'; sha256='0bdd20ad850e66a484dcb126f6ce610079520b56d9e8518d099e0864ab8171a1' ;; \
    armhf) natsArch='arm6'; sha256='261accad99256ee7c7e320cac1df4fbb7fe11c28e324a3e8ae15738b6d4f0e35' ;; \
    armv7) natsArch='arm7'; sha256='15c7a984f586891bd573cf8bfa28aa453786dd7e42fa0315b2c7a85c2bdfef47' ;; \
    x86_64) natsArch='amd64'; sha256='4638c389af67d4c747f5b3e6a9d363bfe8f6b86de37d7c4ee3a36b283a5c2ce2' ;; \
    x86) natsArch='386'; sha256='851034aefaa2540951e9c6c86d144a407478da27e941f0c662f419ae1993c472' ;; \
    s390x) natsArch='s390x'; sha256='fefbeff1d6e259dfbb0a4514501a369d8c57e9d856fcc392c4da3c242162ee35' ;; \
    ppc64le) natsArch='ppc64le'; sha256='784c75d2c0430ff0dada016f36bc0ef8fef56e2117df8170eb33a37c65f81365' ;; \
    loong64) natsArch='loong64'; sha256='3cfb6bee7ec72c722b6480425edd87e96ca16fe76b31f5b8c43fae5d033c8fdf' ;; \
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

<a href="https://scout.docker.com/v/CVE-2026-46595?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="critical : CVE--2026--46595" src="https://img.shields.io/badge/CVE--2026--46595-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.319%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>23rd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.305%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>22nd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.392%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>31st percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.299%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.330%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>25th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.309%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>22nd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.313%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>23rd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.378%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>29th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.276%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>19th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.204%</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.173%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>7th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.325%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>24th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.208%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

SSH servers which use CertChecker as a public key callback without setting IsUserAuthority or IsHostAuthority could be caused to panic by a client presenting a certificate. CertChecker now returns an error instead of panicking when these callbacks are nil.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 8" src="https://img.shields.io/badge/H-8-e25d68"/> <img alt="medium: 4" src="https://img.shields.io/badge/M-4-fbb552"/> <img alt="low: 2" src="https://img.shields.io/badge/L-2-fce1a9"/> <!-- unspecified: 0 --><strong>openssl</strong> <code>3.5.6-r0</code> (apk)</summary>

<small><code>pkg:apk/alpine/openssl@3.5.6-r0?os_name=alpine&os_version=3.22</code></small><br/>

```dockerfile
# 2.14.x/alpine3.22/Dockerfile (0:0)

```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-34182?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.22&vr=%3C3.5.7-r0"><img alt="critical : CVE--2026--34182" src="https://img.shields.io/badge/CVE--2026--34182-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.7-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.7-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.219%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>12th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-45447?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.22&vr=%3C3.5.7-r0"><img alt="high : CVE--2026--45447" src="https://img.shields.io/badge/CVE--2026--45447-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.7-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.7-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>1.388%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>69th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-7383?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.22&vr=%3C3.5.7-r0"><img alt="high : CVE--2026--7383" src="https://img.shields.io/badge/CVE--2026--7383-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.7-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.7-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.324%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>24th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-9076?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.22&vr=%3C3.5.7-r0"><img alt="high : CVE--2026--9076" src="https://img.shields.io/badge/CVE--2026--9076-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.7-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.7-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.292%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-45445?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.22&vr=%3C3.5.7-r0"><img alt="high : CVE--2026--45445" src="https://img.shields.io/badge/CVE--2026--45445-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.7-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.7-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.327%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>24th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42764?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.22&vr=%3C3.5.7-r0"><img alt="high : CVE--2026--42764" src="https://img.shields.io/badge/CVE--2026--42764-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.7-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.7-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.666%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>47th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-34183?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.22&vr=%3C3.5.7-r0"><img alt="high : CVE--2026--34183" src="https://img.shields.io/badge/CVE--2026--34183-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.7-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.7-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.531%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>41st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-34180?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.22&vr=%3C3.5.7-r0"><img alt="high : CVE--2026--34180" src="https://img.shields.io/badge/CVE--2026--34180-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.7-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.7-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.505%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>39th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-34181?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.22&vr=%3C3.5.7-r0"><img alt="high : CVE--2026--34181" src="https://img.shields.io/badge/CVE--2026--34181-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.7-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.7-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.204%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>10th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42767?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.22&vr=%3C3.5.7-r0"><img alt="medium : CVE--2026--42767" src="https://img.shields.io/badge/CVE--2026--42767-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.7-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.7-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.344%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>26th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42766?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.22&vr=%3C3.5.7-r0"><img alt="medium : CVE--2026--42766" src="https://img.shields.io/badge/CVE--2026--42766-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.7-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.7-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.587%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>43rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42769?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.22&vr=%3C3.5.7-r0"><img alt="medium : CVE--2026--42769" src="https://img.shields.io/badge/CVE--2026--42769-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.7-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.7-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.255%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>17th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-45446?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.22&vr=%3C3.5.7-r0"><img alt="medium : CVE--2026--45446" src="https://img.shields.io/badge/CVE--2026--45446-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.7-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.7-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.210%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42770?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.22&vr=%3C3.5.7-r0"><img alt="low : CVE--2026--42770" src="https://img.shields.io/badge/CVE--2026--42770-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.7-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.7-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.249%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42768?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.22&vr=%3C3.5.7-r0"><img alt="low : CVE--2026--42768" src="https://img.shields.io/badge/CVE--2026--42768-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.7-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.7-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.351%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>stdlib</strong> <code>1.26.3</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.26.3</code></small><br/>

```dockerfile
# 2.14.x/alpine3.22/Dockerfile (14:36)
RUN set -eux; \
    apkArch="$(apk --print-arch)"; \
    case "$apkArch" in \
    aarch64) natsArch='arm64'; sha256='0bdd20ad850e66a484dcb126f6ce610079520b56d9e8518d099e0864ab8171a1' ;; \
    armhf) natsArch='arm6'; sha256='261accad99256ee7c7e320cac1df4fbb7fe11c28e324a3e8ae15738b6d4f0e35' ;; \
    armv7) natsArch='arm7'; sha256='15c7a984f586891bd573cf8bfa28aa453786dd7e42fa0315b2c7a85c2bdfef47' ;; \
    x86_64) natsArch='amd64'; sha256='4638c389af67d4c747f5b3e6a9d363bfe8f6b86de37d7c4ee3a36b283a5c2ce2' ;; \
    x86) natsArch='386'; sha256='851034aefaa2540951e9c6c86d144a407478da27e941f0c662f419ae1993c472' ;; \
    s390x) natsArch='s390x'; sha256='fefbeff1d6e259dfbb0a4514501a369d8c57e9d856fcc392c4da3c242162ee35' ;; \
    ppc64le) natsArch='ppc64le'; sha256='784c75d2c0430ff0dada016f36bc0ef8fef56e2117df8170eb33a37c65f81365' ;; \
    loong64) natsArch='loong64'; sha256='3cfb6bee7ec72c722b6480425edd87e96ca16fe76b31f5b8c43fae5d033c8fdf' ;; \
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
<tr><td>EPSS Score</td><td><code>0.384%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>30th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.325%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>24th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.263%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>17th percentile</code></td></tr>
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

