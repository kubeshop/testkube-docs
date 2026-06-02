---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:2b30b216f0c5730fa771baecc341074ab952c156e6f8c2e58f1ee8646f248546</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 9" src="https://img.shields.io/badge/critical-9-8b1924"/> <img alt="high: 15" src="https://img.shields.io/badge/high-15-e25d68"/> <img alt="medium: 21" src="https://img.shields.io/badge/medium-21-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/low-1-fce1a9"/> <!-- unspecified: 0 --></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>73 MB</td></tr>
<tr><td>packages</td><td>268</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 7" src="https://img.shields.io/badge/C-7-8b1924"/> <img alt="high: 2" src="https://img.shields.io/badge/H-2-e25d68"/> <img alt="medium: 4" src="https://img.shields.io/badge/M-4-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/crypto</strong> <code>0.51.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/crypto@0.51.0</code></small><br/>

```dockerfile
# api-server.Dockerfile (32:32)
COPY --from=build /app /bin/app
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-46595?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="critical : CVE--2026--46595" src="https://img.shields.io/badge/CVE--2026--46595-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.052%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.038%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>12th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.054%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>17th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.042%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>13th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.068%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.029%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.055%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>17th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.054%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>17th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.088%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>25th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.023%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>7th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.030%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.050%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.029%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

SSH servers which use CertChecker as a public key callback without setting IsUserAuthority or IsHostAuthority could be caused to panic by a client presenting a certificate. CertChecker now returns an error instead of panicking when these callbacks are nil.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 5" src="https://img.shields.io/badge/H-5-e25d68"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>libssl3</strong> <code>3.5.5-r0</code> (apk)</summary>

<small><code>pkg:apk/alpine/libssl3@3.5.5-r0?arch=x86_64&distro=alpine-3.23.3&upstream=openssl</code></small><br/>

```dockerfile
# api-server.Dockerfile (29:29)
FROM ${ALPINE_IMAGE}
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-31789?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.23&vr=%3C3.5.6-r0"><img alt="critical : CVE--2026--31789" src="https://img.shields.io/badge/CVE--2026--31789-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.6-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.6-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.007%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-28387?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.23&vr=%3C3.5.6-r0"><img alt="high : CVE--2026--28387" src="https://img.shields.io/badge/CVE--2026--28387-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.6-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.6-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.044%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>14th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-31790?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.23&vr=%3C3.5.6-r0"><img alt="high : CVE--2026--31790" src="https://img.shields.io/badge/CVE--2026--31790-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.6-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.6-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.042%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>13th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-28390?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.23&vr=%3C3.5.6-r0"><img alt="high : CVE--2026--28390" src="https://img.shields.io/badge/CVE--2026--28390-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.6-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.6-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.140%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>34th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-28389?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.23&vr=%3C3.5.6-r0"><img alt="high : CVE--2026--28389" src="https://img.shields.io/badge/CVE--2026--28389-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.6-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.6-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.113%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>30th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-28388?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.23&vr=%3C3.5.6-r0"><img alt="high : CVE--2026--28388" src="https://img.shields.io/badge/CVE--2026--28388-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.6-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.6-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.045%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>14th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-2673?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.23&vr=%3C3.5.6-r0"><img alt="medium : CVE--2026--2673" src="https://img.shields.io/badge/CVE--2026--2673-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.6-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.6-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.023%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>7th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 5" src="https://img.shields.io/badge/M-5-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/net</strong> <code>0.54.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/net@0.54.0</code></small><br/>

```dockerfile
# api-server.Dockerfile (32:32)
COPY --from=build /app /bin/app
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-39821?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.55.0"><img alt="critical : CVE--2026--39821" src="https://img.shields.io/badge/CVE--2026--39821-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.55.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.55.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.050%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The ToASCII and ToUnicode functions incorrectly accept Punycode-encoded labels that decode to an ASCII-only label. For example, ToUnicode("xn--example-.com") incorrectly returns the name "example.com" rather than an error.

This behavior can lead to privilege escalation in programs using the idna package. For example, a program which performs privilege checks on the ASCII hostname may reject "example.com" but permit "xn--example-.com". If that program subsequently converts the ASCII hostname to Unicode, it will inadvertently permits access to the Unicode name "example.com".

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-25680?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.55.0"><img alt="medium : CVE--2026--25680" src="https://img.shields.io/badge/CVE--2026--25680-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.55.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.55.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.061%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>19th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Parsing arbitrary HTML can consume excessive CPU time, possibly leading to denial of service.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42506?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.55.0"><img alt="medium : CVE--2026--42506" src="https://img.shields.io/badge/CVE--2026--42506-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.55.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.55.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.032%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>10th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.031%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.031%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.031%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Parsing arbitrary HTML which is then rendered using Render can result in an unexpected HTML tree. This can be leveraged to execute XSS attacks in applications that attempt to sanitize input HTML before rendering.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 3" src="https://img.shields.io/badge/H-3-e25d68"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/docker/docker</strong> <code>28.5.2+incompatible</code> (golang)</summary>

<small><code>pkg:golang/github.com/docker/docker@28.5.2%2Bincompatible</code></small><br/>

```dockerfile
# api-server.Dockerfile (32:32)
COPY --from=build /app /bin/app
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-34040?s=github&n=docker&ns=github.com%2Fdocker&t=golang&vr=%3C29.3.1"><img alt="high 8.8: CVE--2026--34040" src="https://img.shields.io/badge/CVE--2026--34040-lightgrey?label=high%208.8&labelColor=e25d68"/></a> <i>Authentication Bypass Using an Alternate Path or Channel</i>

<table>
<tr><td>Affected range</td><td><code>&lt;29.3.1</code></td></tr>
<tr><td>Fixed version</td><td><code>29.3.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>8.8</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:C/C:H/I:H/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.008%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

## Summary

A security vulnerability has been detected that allows attackers to bypass [authorization plugins (AuthZ)](https://docs.docker.com/engine/extend/plugins_authorization/) under specific circumstances. The base likelihood of this being exploited is low.

This is an incomplete fix for [CVE-2024-41110](https://github.com/moby/moby/security/advisories/GHSA-v23v-6jw2-98fq).

## Impact

**If you don't use AuthZ plugins, you are not affected.**

Using a specially-crafted API request, an attacker could make the Docker daemon forward the request to an authorization plugin without the body. The authorization plugin may allow a request which it would have otherwise denied if the body had been forwarded to it.

Anyone who depends on authorization plugins that introspect the request body to make access control decisions is potentially impacted.

## Workarounds

If unable to update immediately:
- Avoid using AuthZ plugins that rely on request body inspection for security decisions.
- Restrict access to the Docker API to trusted parties, following the principle of least privilege.

## Credits

- 1seal / Oleh Konko ([@<!-- -->1seal](https://github.com/1seal))
- Cody (c@<!-- -->wormhole.guru)
- Asim Viladi Oglu Manizada (@<!-- -->manizada)

## Resources

- [CVE-2024-41110 / GHSA-v23v-6jw2-98fq](https://github.com/moby/moby/security/advisories/GHSA-v23v-6jw2-98fq)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42306?s=github&n=docker&ns=github.com%2Fdocker&t=golang&vr=%3C%3D28.5.2"><img alt="high 7.2: CVE--2026--42306" src="https://img.shields.io/badge/CVE--2026--42306-lightgrey?label=high%207.2&labelColor=e25d68"/></a> <i>Time-of-check Time-of-use (TOCTOU) Race Condition</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=28.5.2</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>7.2</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:H/PR:L/UI:R/S:C/C:N/I:H/A:H</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

## Summary

A race condition during `docker cp` mount setup allows a malicious container to redirect a bind mount target to an arbitrary host path, potentially overwriting host files or causing denial of service.

## Details

When copying files into a container, the daemon sets up a temporary filesystem view by bind-mounting volumes into a private mount namespace. During this setup, the mount destination is created inside the container root and then a bind mount is attached using the container-relative path resolved to an absolute host path.

Between mountpoint creation and the `mount()` syscall, a process running inside the container can replace the destination (or a parent path component) with a symlink pointing to an arbitrary location on the host. The `mount()` syscall follows the symlink, causing the volume to be bind-mounted onto an arbitrary host path instead of the intended container path.

## Impact

A malicious container can redirect a volume bind mount to an arbitrary host path. The impact depends on the volume content and mount options:

- If the volume is writable, arbitrary host files at the redirected path could be overwritten with the volume's contents.
- If the volume is read-only, the host path is masked by the mount for the duration of the operation, causing denial of service.
- In all cases the mount is temporary (torn down after the `docker cp` completes), but the effects of any writes persist.

### Conditions for exploitation

- A container must have at least one volume mount.
- A process inside the container must be able to rapidly create and swap symlinks at the volume mount destination path.
- An operator must initiate a `docker cp` into that container, or call the `PUT /containers/{id}/archive` or `HEAD /containers/{id}/archive` API endpoints.

### Not affected

- Containers that do not have volume mounts are not affected, as the race occurs during volume bind-mount setup.

## Workarounds

- Only run containers from trusted images.
- Avoid using `docker cp` with untrusted running containers.
- Use authorization plugins to restrict access to the archive API endpoints (`PUT /containers/{id}/archive`, `HEAD /containers/{id}/archive`).

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-41567?s=github&n=docker&ns=github.com%2Fdocker&t=golang&vr=%3C%3D28.5.2"><img alt="high 7.2: CVE--2026--41567" src="https://img.shields.io/badge/CVE--2026--41567-lightgrey?label=high%207.2&labelColor=e25d68"/></a> <i>Uncontrolled Search Path Element</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=28.5.2</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>7.2</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:H/PR:L/UI:R/S:C/C:H/I:H/A:N</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

## Summary

When a user uploads a compressed archive into a container, a malicious image can execute arbitrary code with daemon (host root) privileges.

## Details

When handling `PUT /containers/{id}/archive` requests with compressed archives, the daemon decompresses them using external system binaries. Due to incorrect ordering of operations, these binaries are resolved from the container's filesystem rather than the host's. A container image that includes a trojanized decompression binary can achieve code execution as the daemon process whenever a compressed archive is uploaded to that container.

The executed binary runs with the daemon's full privileges, including host root UID and unrestricted capabilities.

## Impact

Arbitrary code execution as host root, crossing the container-to-host trust boundary.

### Conditions for exploitation

- A user must run a container from a malicious image that contains a trojanized decompression binary.
- The user must then upload a compressed archive (xz or gzip) into that container, either by piping a compressed archive via `docker cp -` or by calling the `PUT /containers/{id}/archive` API directly with compressed content.

### Not affected

Standard `docker cp` usage is **not** affected, because the CLI sends uncompressed tar by default:

```
docker cp ./file.txt mycontainer:/file.txt
```

This can only be exploited when explicitly passing a xz or gzip-compressed archive to `docker cp` or the `PUT /containers/{id}/archive` API, for example:

```
cat archive.tar.xz | docker cp - mycontainer:/dir
```

Decompression formats using pure Go implementations (bzip2, zstd, and gzip when the container image does not contain an `unpigz` binary) are also not affected.

## Workarounds

- Only run containers from trusted images.
- Use authorization plugins to limit access to the `PUT /containers/{id}/archive` endpoint.
- Avoid piping compressed archives into containers created from untrusted images.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33997?s=github&n=docker&ns=github.com%2Fdocker&t=golang&vr=%3C29.3.1"><img alt="medium 6.8: CVE--2026--33997" src="https://img.shields.io/badge/CVE--2026--33997-lightgrey?label=medium%206.8&labelColor=fbb552"/></a> <i>Off-by-one Error</i>

<table>
<tr><td>Affected range</td><td><code>&lt;29.3.1</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>6.8</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:H/PR:N/UI:R/S:U/C:H/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.016%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

## Summary

A security vulnerability has been detected that allows [plugins](https://docs.docker.com/engine/extend/legacy_plugins/) privilege validation to be bypassed during `docker plugin install`. Due to an error in the daemon's privilege comparison logic, the daemon may incorrectly accept a privilege set that differs from the one approved by the user.

Plugins that request exactly one privilege are also affected, because no comparison is performed at all.

## Impact

**If plugins are not in use, there is no impact.**

When a plugin is installed, the daemon computes the privileges required by the plugin's configuration and compares them with the privileges approved during installation. A malicious plugin can exploit this bug so that the daemon accepts privileges that differ from what was intended to be approved.

Anyone who depends on the plugin installation approval flow as a meaningful security boundary is potentially impacted.

Depending on the privilege set involved, this may include highly sensitive plugin permissions such as broad device access.

**For consideration: exploitation still requires a plugin to be installed from a malicious source, and Docker plugins are relatively uncommon. Docker Desktop also does not support plugins.**

## Workarounds

If unable to update immediately:
- Do not install plugins from untrusted sources
- Carefully review all privileges requested during `docker plugin install`
- Restrict access to the Docker daemon to trusted parties, following the principle of least privilege
- Avoid relying on plugin privilege approval as the only control boundary for sensitive environments

## Credits

- Reported by Cody (c@<!-- -->wormhole.guru, PGP 0x9FA5B73E)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-41568?s=github&n=docker&ns=github.com%2Fdocker&t=golang&vr=%3C%3D28.5.2"><img alt="medium 6.1: CVE--2026--41568" src="https://img.shields.io/badge/CVE--2026--41568-lightgrey?label=medium%206.1&labelColor=fbb552"/></a> <i>Time-of-check Time-of-use (TOCTOU) Race Condition</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=28.5.2</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>6.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:H/PR:L/UI:R/S:C/C:N/I:L/A:H</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

## Summary

A race condition during `docker cp` mount setup allows a malicious container to create empty files or directories at arbitrary absolute paths on the host filesystem.

This advisory covers the race during mountpoint creation. The related race during the subsequent mount syscall is tracked in GHSA-rg2x-37c3-w2rh

## Details

When copying files into a container, the daemon sets up a temporary filesystem view by bind-mounting volumes into a private mount namespace. During this setup, the mount destination path is first resolved within the container's root filesystem using `GetResourcePath`, and then used to create the mountpoint (file or directory) if it does not already exist via `createIfNotExists`.

Between path resolution and mountpoint creation, a process running inside the container can swap a path component for a symlink pointing to an arbitrary location on the host. Because `createIfNotExists` operates on the already-resolved absolute path using standard `os.MkdirAll` and `os.OpenFile` — which follow symlinks in intermediate path components — the symlink is followed and the file or directory is created outside the container root filesystem, as root.

## Impact

A malicious container can create empty files or directories at arbitrary absolute paths on the host filesystem, running as root. This enables persistent denial of service — for example:

- Converting `/etc/docker/daemon.json` into a directory prevents the daemon from restarting
- Creating `/etc/nologin` prevents user logins
- Overwriting critical system paths with empty files can break host services

The container does not gain read or write access to existing host files — only the ability to create new empty files or directories at chosen paths.

### Conditions for exploitation

- A container must be running with a process that can rapidly create and swap symlinks at a volume mount destination path.
- An operator must initiate a `docker cp` into that container, or call the `PUT /containers/{id}/archive` or `HEAD /containers/{id}/archive` API endpoints.

### Not affected

- Containers that do not have volume mounts are not affected, as the race occurs during volume bind-mount setup.

## Patches

Mountpoint creation is now scoped to the container root using `os.Root` (Go 1.24+), which refuses to follow symlinks that escape the opened root directory. All filesystem operations in `createIfNotExists` (`MkdirAll`, `OpenFile`) are performed through the `os.Root` handle, so even if a symlink swap occurs after path resolution, the creation stays confined to the container root.

## Workarounds

- Only run containers from trusted images.
- Avoid using `docker cp` with untrusted running containers.
- Use authorization plugins to restrict access to the archive API endpoints (`PUT /containers/{id}/archive`, `HEAD /containers/{id}/archive`).

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 2" src="https://img.shields.io/badge/H-2-e25d68"/> <img alt="medium: 6" src="https://img.shields.io/badge/M-6-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>libcurl</strong> <code>8.19.0-r0</code> (apk)</summary>

<small><code>pkg:apk/alpine/libcurl@8.19.0-r0?arch=x86_64&distro=alpine-3.23.3&upstream=curl</code></small><br/>

```dockerfile
# api-server.Dockerfile (30:30)
RUN apk --no-cache add ca-certificates libssl3 git
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-6276?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.23&vr=%3C%3D8.19.0-r0"><img alt="high : CVE--2026--6276" src="https://img.shields.io/badge/CVE--2026--6276-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=8.19.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.013%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-5773?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.23&vr=%3C%3D8.19.0-r0"><img alt="high : CVE--2026--5773" src="https://img.shields.io/badge/CVE--2026--5773-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=8.19.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.019%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-5545?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.23&vr=%3C%3D8.19.0-r0"><img alt="medium : CVE--2026--5545" src="https://img.shields.io/badge/CVE--2026--5545-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=8.19.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.037%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-6253?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.23&vr=%3C%3D8.19.0-r0"><img alt="medium : CVE--2026--6253" src="https://img.shields.io/badge/CVE--2026--6253-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=8.19.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.030%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-4873?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.23&vr=%3C%3D8.19.0-r0"><img alt="medium : CVE--2026--4873" src="https://img.shields.io/badge/CVE--2026--4873-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=8.19.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.014%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-7168?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.23&vr=%3C%3D8.19.0-r0"><img alt="medium : CVE--2026--7168" src="https://img.shields.io/badge/CVE--2026--7168-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=8.19.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.079%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>23rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-7009?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.23&vr=%3C%3D8.19.0-r0"><img alt="medium : CVE--2026--7009" src="https://img.shields.io/badge/CVE--2026--7009-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=8.19.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.013%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-6429?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.23&vr=%3C%3D8.19.0-r0"><img alt="medium : CVE--2026--6429" src="https://img.shields.io/badge/CVE--2026--6429-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=8.19.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.021%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>musl</strong> <code>1.2.5-r21</code> (apk)</summary>

<small><code>pkg:apk/alpine/musl@1.2.5-r21?arch=x86_64&distro=alpine-3.23.3</code></small><br/>

```dockerfile
# api-server.Dockerfile (29:29)
FROM ${ALPINE_IMAGE}
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-40200?s=alpine&n=musl&ns=alpine&t=apk&osn=alpine&osv=3.23&vr=%3C1.2.5-r23"><img alt="high : CVE--2026--40200" src="https://img.shields.io/badge/CVE--2026--40200-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.2.5-r23</code></td></tr>
<tr><td>Fixed version</td><td><code>1.2.5-r23</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.020%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-6042?s=alpine&n=musl&ns=alpine&t=apk&osn=alpine&osv=3.23&vr=%3C1.2.5-r22"><img alt="medium : CVE--2026--6042" src="https://img.shields.io/badge/CVE--2026--6042-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.2.5-r22</code></td></tr>
<tr><td>Fixed version</td><td><code>1.2.5-r22</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.007%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>0th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/docker/cli</strong> <code>29.4.3+incompatible</code> (golang)</summary>

<small><code>pkg:golang/github.com/docker/cli@29.4.3%2Bincompatible</code></small><br/>

```dockerfile
# api-server.Dockerfile (32:32)
COPY --from=build /app /bin/app
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-15558?s=golang&n=cli&ns=github.com%2Fdocker&t=golang&vr=%3E%3D19.03.0%2Bincompatible"><img alt="high : CVE--2025--15558" src="https://img.shields.io/badge/CVE--2025--15558-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=19.03.0+incompatible</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.023%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>7th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Docker CLI Plugins: Uncontrolled Search Path Element Leads to Local Privilege Escalation on Windows in github.com/docker/cli

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>git</strong> <code>2.52.0-r0</code> (apk)</summary>

<small><code>pkg:apk/alpine/git@2.52.0-r0?arch=x86_64&distro=alpine-3.23.3</code></small><br/>

```dockerfile
# api-server.Dockerfile (30:30)
RUN apk --no-cache add ca-certificates libssl3 git
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-66413?s=alpine&n=git&ns=alpine&t=apk&osn=alpine&osv=3.23&vr=%3C%3D2.52.0-r0"><img alt="high : CVE--2025--66413" src="https://img.shields.io/badge/CVE--2025--66413-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=2.52.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.058%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>zlib</strong> <code>1.3.1-r2</code> (apk)</summary>

<small><code>pkg:apk/alpine/zlib@1.3.1-r2?arch=x86_64&distro=alpine-3.23.3</code></small><br/>

```dockerfile
# api-server.Dockerfile (29:29)
FROM ${ALPINE_IMAGE}
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-22184?s=alpine&n=zlib&ns=alpine&t=apk&osn=alpine&osv=3.23&vr=%3C1.3.2-r0"><img alt="medium : CVE--2026--22184" src="https://img.shields.io/badge/CVE--2026--22184-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.3.2-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.3.2-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.008%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-27171?s=alpine&n=zlib&ns=alpine&t=apk&osn=alpine&osv=3.23&vr=%3C1.3.2-r0"><img alt="low : CVE--2026--27171" src="https://img.shields.io/badge/CVE--2026--27171-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.3.2-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.3.2-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.009%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>ssl_client</strong> <code>1.37.0-r30</code> (apk)</summary>

<small><code>pkg:apk/alpine/ssl_client@1.37.0-r30?arch=x86_64&distro=alpine-3.23.3&upstream=busybox</code></small><br/>

```dockerfile
# api-server.Dockerfile (29:29)
FROM ${ALPINE_IMAGE}
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-60876?s=alpine&n=busybox&ns=alpine&t=apk&osn=alpine&osv=3.23&vr=%3C%3D1.37.0-r30"><img alt="medium : CVE--2025--60876" src="https://img.shields.io/badge/CVE--2025--60876-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=1.37.0-r30</code></td></tr>
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

