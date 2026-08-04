---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:5a5f562b3276f9cf50ad4405dd208479cb4270896b99e29d54f5c45b4cc517af</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 17" src="https://img.shields.io/badge/critical-17-8b1924"/> <img alt="high: 29" src="https://img.shields.io/badge/high-29-e25d68"/> <img alt="medium: 94" src="https://img.shields.io/badge/medium-94-fbb552"/> <img alt="low: 15" src="https://img.shields.io/badge/low-15-fce1a9"/> <img alt="unspecified: 13" src="https://img.shields.io/badge/unspecified-13-lightgrey"/></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>550 MB</td></tr>
<tr><td>packages</td><td>267</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 7" src="https://img.shields.io/badge/C-7-8b1924"/> <img alt="high: 2" src="https://img.shields.io/badge/H-2-e25d68"/> <img alt="medium: 4" src="https://img.shields.io/badge/M-4-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>golang.org/x/crypto</strong> <code>0.45.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/crypto@0.45.0</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.4
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-46595?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="critical 10.0: CVE--2026--46595" src="https://img.shields.io/badge/CVE--2026--46595-lightgrey?label=critical%2010.0&labelColor=8b1924"/></a> <i>Incorrect Implementation of Authentication Algorithm</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>10</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.503%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>40th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Previously, CVE-2024-45337 fixed an authorization bypass for misused ssh server configurations; if any other type of callback is passed other than public key, then the source-address validation would be skipped.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42508?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="critical 9.1: CVE--2026--42508" src="https://img.shields.io/badge/CVE--2026--42508-lightgrey?label=critical%209.1&labelColor=8b1924"/></a> <i>Improper Certificate Validation</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>9.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.568%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>44th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Previously, a revoked 'SignatureKey' belonging to a CA was not correctly checked for revocation. Now, both the 'key' and 'key.SignatureKey' are checked for @<!-- -->revoked.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39834?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="critical 9.1: CVE--2026--39834" src="https://img.shields.io/badge/CVE--2026--39834-lightgrey?label=critical%209.1&labelColor=8b1924"/></a> <i>Integer Overflow or Wraparound</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>9.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:H/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.525%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>42nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When writing data larger than 4GB in a single Write call on an SSH channel, an integer overflow in the internal payload size calculation caused the write loop to spin indefinitely, sending empty packets without making progress. The size comparison now uses int64 to prevent truncation.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39833?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="critical 9.1: CVE--2026--39833" src="https://img.shields.io/badge/CVE--2026--39833-lightgrey?label=critical%209.1&labelColor=8b1924"/></a> <i>Missing Authorization</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>9.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.412%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>34th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The in-memory keyring returned by NewKeyring() silently accepted keys with the ConfirmBeforeUse constraint but never enforced it. The key would sign without any confirmation prompt, with no indication to the caller that the constraint was not in effect. NewKeyring() now returns an error when unsupported constraints are requested.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39832?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="critical 9.1: CVE--2026--39832" src="https://img.shields.io/badge/CVE--2026--39832-lightgrey?label=critical%209.1&labelColor=8b1924"/></a> <i>Improper Preservation of Permissions</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>9.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.600%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>45th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When adding a key to a remote agent constraint extensions such as restrict-destination-v00@<!-- -->openssh.com were not serialized in the request. Destination restrictions were silently stripped when forwarding keys, allowing unrestricted use of the key on the remote host. The client now serializes all constraint extensions. Additionally, the in-memory keyring returned by NewKeyring() now rejects keys with unsupported constraint extensions instead of silently ignoring them.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39831?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="critical 9.1: CVE--2026--39831" src="https://img.shields.io/badge/CVE--2026--39831-lightgrey?label=critical%209.1&labelColor=8b1924"/></a> <i>Missing Authorization</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>9.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.420%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>35th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Verify() method for FIDO/U2F security key types (sk-ecdsa-sha2-nistp256@<!-- -->openssh.com, sk-ssh-ed25519@<!-- -->openssh.com) did not check the User Presence flag. Signatures generated without physical touch were accepted, allowing unattended use of a hardware security key. To restore the previous behavior, return a "no-touch-required" extension in Permissions.Extensions from PublicKeyCallback.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39830?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="critical 9.1: CVE--2026--39830" src="https://img.shields.io/badge/CVE--2026--39830-lightgrey?label=critical%209.1&labelColor=8b1924"/></a> <i>Improper Restriction of Operations within the Bounds of a Memory Buffer</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>9.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.621%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>46th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A malicious SSH peer could send unsolicited global request responses to fill an internal buffer, blocking the connection's read loop. The blocked goroutine could not be released by calling Close(), resulting in a resource leak per connection. Unsolicited global responses are now discarded.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-46597?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="high 7.5: CVE--2026--46597" src="https://img.shields.io/badge/CVE--2026--46597-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Incorrect Type Conversion or Cast</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.473%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>38th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An incorrectly placed cast from bytes to int allowed for server-side panic in the AES-GCM packet decoder for well-crafted inputs.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39829?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="high 7.5: CVE--2026--39829" src="https://img.shields.io/badge/CVE--2026--39829-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Improper Validation of Specified Quantity in Input</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.467%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>38th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The RSA and DSA public key parsers did not enforce size limits on key parameters. A crafted public key with an excessively large modulus or DSA parameter could cause several minutes of CPU consumption during signature verification. This could be triggered by unauthenticated clients during public key authentication. RSA moduli are now limited to 8192 bits, and DSA parameters are validated per FIPS 186-2.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39827?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="medium 6.5: CVE--2026--39827" src="https://img.shields.io/badge/CVE--2026--39827-lightgrey?label=medium%206.5&labelColor=fbb552"/></a> <i>Improper Enforcement of Message Integrity During Transmission in a Communication Channel</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.279%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>20th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An authenticated SSH client that repeatedly opened channels which were rejected by the server caused unbounded memory growth, eventually crashing the server process and affecting all connected users. Rejected channels are now properly removed from the connection's internal state and released for garbage collection.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39828?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="medium 6.3: CVE--2026--39828" src="https://img.shields.io/badge/CVE--2026--39828-lightgrey?label=medium%206.3&labelColor=fbb552"/></a> <i>Improper Preservation of Permissions</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:L/I:L/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.369%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>30th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When an SSH server authentication callback returned PartialSuccessError with non-nil Permissions, those permissions were silently discarded, potentially dropping certificate restrictions such as force-command after a second factor succeeded. Returning non-nil Permissions with PartialSuccessError now results in a connection error.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-46598?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="medium 5.3: CVE--2026--46598" src="https://img.shields.io/badge/CVE--2026--46598-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Improper Validation of Array Index</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.412%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>34th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

For certain crafted inputs, a 'ed25519.PrivateKey' was created by casting malformed wire bytes, leading to a panic when used.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39835?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="medium 5.3: CVE--2026--39835" src="https://img.shields.io/badge/CVE--2026--39835-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Improper Certificate Validation</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.504%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>40th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

SSH servers which use CertChecker as a public key callback without setting IsUserAuthority or IsHostAuthority could be caused to panic by a client presenting a certificate. CertChecker now returns an error instead of panicking when these callbacks are nil.

</blockquote>
</details>

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

<tr><td valign="top">
<details><summary><img alt="critical: 7" src="https://img.shields.io/badge/C-7-8b1924"/> <img alt="high: 2" src="https://img.shields.io/badge/H-2-e25d68"/> <img alt="medium: 4" src="https://img.shields.io/badge/M-4-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>golang.org/x/crypto</strong> <code>0.47.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/crypto@0.47.0</code></small><br/>

```dockerfile
# mongo-8.dockerfile (125:125)
COPY --from=builder /usr/local/bin/mongo* /usr/local/bin/bsondump /usr/bin/
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-46595?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="critical 10.0: CVE--2026--46595" src="https://img.shields.io/badge/CVE--2026--46595-lightgrey?label=critical%2010.0&labelColor=8b1924"/></a> <i>Incorrect Implementation of Authentication Algorithm</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>10</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.503%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>40th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Previously, CVE-2024-45337 fixed an authorization bypass for misused ssh server configurations; if any other type of callback is passed other than public key, then the source-address validation would be skipped.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42508?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="critical 9.1: CVE--2026--42508" src="https://img.shields.io/badge/CVE--2026--42508-lightgrey?label=critical%209.1&labelColor=8b1924"/></a> <i>Improper Certificate Validation</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>9.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.568%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>44th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Previously, a revoked 'SignatureKey' belonging to a CA was not correctly checked for revocation. Now, both the 'key' and 'key.SignatureKey' are checked for @<!-- -->revoked.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39834?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="critical 9.1: CVE--2026--39834" src="https://img.shields.io/badge/CVE--2026--39834-lightgrey?label=critical%209.1&labelColor=8b1924"/></a> <i>Integer Overflow or Wraparound</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>9.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:H/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.525%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>42nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When writing data larger than 4GB in a single Write call on an SSH channel, an integer overflow in the internal payload size calculation caused the write loop to spin indefinitely, sending empty packets without making progress. The size comparison now uses int64 to prevent truncation.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39833?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="critical 9.1: CVE--2026--39833" src="https://img.shields.io/badge/CVE--2026--39833-lightgrey?label=critical%209.1&labelColor=8b1924"/></a> <i>Missing Authorization</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>9.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.412%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>34th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The in-memory keyring returned by NewKeyring() silently accepted keys with the ConfirmBeforeUse constraint but never enforced it. The key would sign without any confirmation prompt, with no indication to the caller that the constraint was not in effect. NewKeyring() now returns an error when unsupported constraints are requested.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39832?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="critical 9.1: CVE--2026--39832" src="https://img.shields.io/badge/CVE--2026--39832-lightgrey?label=critical%209.1&labelColor=8b1924"/></a> <i>Improper Preservation of Permissions</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>9.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.600%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>45th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When adding a key to a remote agent constraint extensions such as restrict-destination-v00@<!-- -->openssh.com were not serialized in the request. Destination restrictions were silently stripped when forwarding keys, allowing unrestricted use of the key on the remote host. The client now serializes all constraint extensions. Additionally, the in-memory keyring returned by NewKeyring() now rejects keys with unsupported constraint extensions instead of silently ignoring them.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39831?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="critical 9.1: CVE--2026--39831" src="https://img.shields.io/badge/CVE--2026--39831-lightgrey?label=critical%209.1&labelColor=8b1924"/></a> <i>Missing Authorization</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>9.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.420%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>35th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Verify() method for FIDO/U2F security key types (sk-ecdsa-sha2-nistp256@<!-- -->openssh.com, sk-ssh-ed25519@<!-- -->openssh.com) did not check the User Presence flag. Signatures generated without physical touch were accepted, allowing unattended use of a hardware security key. To restore the previous behavior, return a "no-touch-required" extension in Permissions.Extensions from PublicKeyCallback.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39830?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="critical 9.1: CVE--2026--39830" src="https://img.shields.io/badge/CVE--2026--39830-lightgrey?label=critical%209.1&labelColor=8b1924"/></a> <i>Improper Restriction of Operations within the Bounds of a Memory Buffer</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>9.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.621%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>46th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A malicious SSH peer could send unsolicited global request responses to fill an internal buffer, blocking the connection's read loop. The blocked goroutine could not be released by calling Close(), resulting in a resource leak per connection. Unsolicited global responses are now discarded.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-46597?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="high 7.5: CVE--2026--46597" src="https://img.shields.io/badge/CVE--2026--46597-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Incorrect Type Conversion or Cast</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.473%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>38th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An incorrectly placed cast from bytes to int allowed for server-side panic in the AES-GCM packet decoder for well-crafted inputs.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39829?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="high 7.5: CVE--2026--39829" src="https://img.shields.io/badge/CVE--2026--39829-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Improper Validation of Specified Quantity in Input</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.467%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>38th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The RSA and DSA public key parsers did not enforce size limits on key parameters. A crafted public key with an excessively large modulus or DSA parameter could cause several minutes of CPU consumption during signature verification. This could be triggered by unauthenticated clients during public key authentication. RSA moduli are now limited to 8192 bits, and DSA parameters are validated per FIPS 186-2.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39827?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="medium 6.5: CVE--2026--39827" src="https://img.shields.io/badge/CVE--2026--39827-lightgrey?label=medium%206.5&labelColor=fbb552"/></a> <i>Improper Enforcement of Message Integrity During Transmission in a Communication Channel</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.279%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>20th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An authenticated SSH client that repeatedly opened channels which were rejected by the server caused unbounded memory growth, eventually crashing the server process and affecting all connected users. Rejected channels are now properly removed from the connection's internal state and released for garbage collection.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39828?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="medium 6.3: CVE--2026--39828" src="https://img.shields.io/badge/CVE--2026--39828-lightgrey?label=medium%206.3&labelColor=fbb552"/></a> <i>Improper Preservation of Permissions</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:L/I:L/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.369%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>30th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When an SSH server authentication callback returned PartialSuccessError with non-nil Permissions, those permissions were silently discarded, potentially dropping certificate restrictions such as force-command after a second factor succeeded. Returning non-nil Permissions with PartialSuccessError now results in a connection error.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-46598?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="medium 5.3: CVE--2026--46598" src="https://img.shields.io/badge/CVE--2026--46598-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Improper Validation of Array Index</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.412%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>34th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

For certain crafted inputs, a 'ed25519.PrivateKey' was created by casting malformed wire bytes, leading to a panic when used.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39835?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="medium 5.3: CVE--2026--39835" src="https://img.shields.io/badge/CVE--2026--39835-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Improper Certificate Validation</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.504%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>40th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

SSH servers which use CertChecker as a public key callback without setting IsUserAuthority or IsHostAuthority could be caused to panic by a client presenting a certificate. CertChecker now returns an error instead of panicking when these callbacks are nil.

</blockquote>
</details>

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

<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 16" src="https://img.shields.io/badge/H-16-e25d68"/> <img alt="medium: 18" src="https://img.shields.io/badge/M-18-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <img alt="unspecified: 2" src="https://img.shields.io/badge/U-2-lightgrey"/><strong>stdlib</strong> <code>1.24.6</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.24.6</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.4
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-68121?s=golang&n=stdlib&t=golang&vr=%3C1.24.13"><img alt="critical : CVE--2025--68121" src="https://img.shields.io/badge/CVE--2025--68121-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.13</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.13</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.765%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>52nd percentile</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>43rd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.798%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>53rd percentile</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>45th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.784%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>52nd percentile</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>52nd percentile</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>53rd percentile</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>46th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.355%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>28th percentile</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>46th percentile</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>51st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

url.Parse insufficiently validated the host/authority component and accepted some invalid URLs.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61729?s=golang&n=stdlib&t=golang&vr=%3C1.24.11"><img alt="high : CVE--2025--61729" src="https://img.shields.io/badge/CVE--2025--61729-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.464%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>38th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Within HostnameError.Error(), when constructing an error string, there is no limit to the number of hosts that will be printed out. Furthermore, the error string is constructed by repeated string concatenation, leading to quadratic runtime. Therefore, a certificate provided by a malicious actor can result in excessive resource consumption.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61726?s=golang&n=stdlib&t=golang&vr=%3C1.24.12"><img alt="high : CVE--2025--61726" src="https://img.shields.io/badge/CVE--2025--61726-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>1.945%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>78th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The net/url package does not set a limit on the number of query parameters in a query.

While the maximum size of query parameters in URLs is generally limited by the maximum request header size, the net/http.Request.ParseForm method can parse large URL-encoded forms. Parsing a large form containing many unique query parameters can cause excessive memory consumption.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61725?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="high : CVE--2025--61725" src="https://img.shields.io/badge/CVE--2025--61725-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.604%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>46th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The ParseAddress function constructs domain-literal address components through repeated string concatenation. When parsing large domain-literal components, this can cause excessive CPU consumption.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61723?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="high : CVE--2025--61723" src="https://img.shields.io/badge/CVE--2025--61723-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.617%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>46th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The processing time for parsing some invalid inputs scales non-linearly with respect to the size of the input.

This affects programs which parse untrusted PEM inputs.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58188?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="high : CVE--2025--58188" src="https://img.shields.io/badge/CVE--2025--58188-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.356%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>28th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Validating certificate chains which contain DSA public keys can cause programs to panic, due to a interface cast that assumes they implement the Equal method.

This affects programs which validate arbitrary certificate chains.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58187?s=golang&n=stdlib&t=golang&vr=%3C1.24.9"><img alt="high : CVE--2025--58187" src="https://img.shields.io/badge/CVE--2025--58187-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.379%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>31st percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.591%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>45th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

(*x509.Certificate).VerifyHostname previously called matchHostnames in a loop over all DNS Subject Alternative Name (SAN) entries. This caused strings.Split(host, ".") to execute repeatedly on the same input hostname.

With a large DNS SAN list, verification costs scaled quadratically based on the number of SAN entries multiplied by the hostname's label count. Because x509.Verify validates hostnames before building the certificate chain, this overhead occurred even for untrusted certificates.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61728?s=golang&n=stdlib&t=golang&vr=%3C1.24.12"><img alt="medium : CVE--2025--61728" src="https://img.shields.io/badge/CVE--2025--61728-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.643%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>47th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

archive/zip uses a super-linear file name indexing algorithm that is invoked the first time a file in an archive is opened. This can lead to a denial of service when consuming a maliciously constructed ZIP archive.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61727?s=golang&n=stdlib&t=golang&vr=%3C1.24.11"><img alt="medium : CVE--2025--61727" src="https://img.shields.io/badge/CVE--2025--61727-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.288%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>30th percentile</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>24th percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2026-42507?s=golang&n=stdlib&t=golang&vr=%3C1.25.11"><img alt="medium : CVE--2026--42507" src="https://img.shields.io/badge/CVE--2026--42507-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.370%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>30th percentile</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>32nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

ReverseProxy can forward queries containing parameters not visible to Rewrite functions.

When used with a Rewrite function, or a Director function which parses query parameters, ReverseProxy sanitizes the forwarded request to remove query parameters which are not parsed by url.ParseQuery. ReverseProxy does not take ParseQuery's limit on the total number of query parameters (controlled by GODEBUG=urlmaxqueryparams=N) into account. This can permit ReverseProxy to forward a request containing a query parameter that is not visible to the Rewrite function.

For example, the query "a1=x&a2=x&...&a10000=x&hidden=y" can forward the parameter "hidden=y" while hiding it from the proxy's Rewrite function.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61730?s=golang&n=stdlib&t=golang&vr=%3C1.24.12"><img alt="medium : CVE--2025--61730" src="https://img.shields.io/badge/CVE--2025--61730-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.276%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>20th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

During the TLS 1.3 handshake if multiple messages are sent in records that span encryption level boundaries (for instance the Client Hello and Encrypted Extensions messages), the subsequent messages may be processed before the encryption level changes. This can cause some minor information disclosure if a network-local attacker can inject messages during the handshake.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61724?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="medium : CVE--2025--61724" src="https://img.shields.io/badge/CVE--2025--61724-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.518%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>41st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Reader.ReadResponse function constructs a response string through repeated string concatenation of lines. When the number of lines in a response is large, this can cause excessive CPU consumption.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58189?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="medium : CVE--2025--58189" src="https://img.shields.io/badge/CVE--2025--58189-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.436%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>36th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When Conn.Handshake fails during ALPN negotiation the error contains attacker controlled information (the ALPN protocols sent by the client) which is not escaped.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58186?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="medium : CVE--2025--58186" src="https://img.shields.io/badge/CVE--2025--58186-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.527%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>42nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Despite HTTP headers having a default limit of 1MB, the number of cookies that can be parsed does not have a limit. By sending a lot of very small cookies such as "a=;", an attacker can make an HTTP server allocate a large amount of structs, causing large memory consumption.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58185?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="medium : CVE--2025--58185" src="https://img.shields.io/badge/CVE--2025--58185-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.518%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>41st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Parsing a maliciously crafted DER payload could allocate large amounts of memory, causing memory exhaustion.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-47912?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="medium : CVE--2025--47912" src="https://img.shields.io/badge/CVE--2025--47912-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.436%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>36th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Parse function permits values other than IPv6 addresses to be included in square brackets within the host component of a URL. RFC 3986 permits IPv6 addresses to be included within the host component, enclosed within square brackets. For example: "http://[::1]/". IPv4 addresses and hostnames must not appear within square brackets. Parse did not enforce this requirement.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58183?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="medium : CVE--2025--58183" src="https://img.shields.io/badge/CVE--2025--58183-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.413%</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2026-42505?s=golang&n=stdlib&t=golang&vr=%3C1.25.12"><img alt="unspecified : CVE--2026--42505" src="https://img.shields.io/badge/CVE--2026--42505-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.254%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>17th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Handshakes which used Encrypted Client Hello could be de-anonymized by a passive network observer due to a disclosure of pre-shared key identities in the unencrypted client hello.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39822?s=golang&n=stdlib&t=golang&vr=%3C1.25.12"><img alt="unspecified : CVE--2026--39822" src="https://img.shields.io/badge/CVE--2026--39822-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.12</code></td></tr>
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
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 5" src="https://img.shields.io/badge/M-5-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>golang.org/x/net</strong> <code>0.47.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/net@0.47.0</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.4
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-39821?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.55.0"><img alt="critical : CVE--2026--39821" src="https://img.shields.io/badge/CVE--2026--39821-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.55.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.55.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.655%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>48th percentile</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>52nd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.326%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>25th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.235%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>15th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.223%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>13th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.223%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>13th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.223%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>13th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Parsing arbitrary HTML which is then rendered using Render can result in an unexpected HTML tree. This can be leveraged to execute XSS attacks in applications that attempt to sanitize input HTML before rendering.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-46600?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.56.0"><img alt="unspecified : CVE--2026--46600" src="https://img.shields.io/badge/CVE--2026--46600-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.56.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.56.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.339%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Parsing an invalid SVCB or HTTPS RR can panic when the size of a parameter value overflows the message buffer.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 5" src="https://img.shields.io/badge/M-5-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>golang.org/x/net</strong> <code>0.48.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/net@0.48.0</code></small><br/>

```dockerfile
# mongo-8.dockerfile (125:125)
COPY --from=builder /usr/local/bin/mongo* /usr/local/bin/bsondump /usr/bin/
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-39821?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.55.0"><img alt="critical : CVE--2026--39821" src="https://img.shields.io/badge/CVE--2026--39821-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.55.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.55.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.655%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>48th percentile</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>52nd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.326%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>25th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.235%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>15th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.223%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>13th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.223%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>13th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.223%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>13th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Parsing arbitrary HTML which is then rendered using Render can result in an unexpected HTML tree. This can be leveraged to execute XSS attacks in applications that attempt to sanitize input HTML before rendering.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-46600?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.56.0"><img alt="unspecified : CVE--2026--46600" src="https://img.shields.io/badge/CVE--2026--46600-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.56.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.56.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.339%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Parsing an invalid SVCB or HTTPS RR can panic when the size of a parameter value overflows the message buffer.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 6" src="https://img.shields.io/badge/H-6-e25d68"/> <img alt="medium: 5" src="https://img.shields.io/badge/M-5-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 2" src="https://img.shields.io/badge/U-2-lightgrey"/><strong>stdlib</strong> <code>1.25.9</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.25.9</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.4
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-42504?s=golang&n=stdlib&t=golang&vr=%3C1.25.11"><img alt="high : CVE--2026--42504" src="https://img.shields.io/badge/CVE--2026--42504-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.560%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>43rd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.798%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>53rd percentile</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>45th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.784%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>52nd percentile</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>52nd percentile</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>53rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When using LookupCNAME with the cgo DNS resolver, a very long CNAME response can trigger a double-free of C memory and a crash.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-27145?s=golang&n=stdlib&t=golang&vr=%3C1.25.11"><img alt="medium : CVE--2026--27145" src="https://img.shields.io/badge/CVE--2026--27145-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.591%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>45th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

(*x509.Certificate).VerifyHostname previously called matchHostnames in a loop over all DNS Subject Alternative Name (SAN) entries. This caused strings.Split(host, ".") to execute repeatedly on the same input hostname.

With a large DNS SAN list, verification costs scaled quadratically based on the number of SAN entries multiplied by the hostname's label count. Because x509.Verify validates hostnames before building the certificate chain, this overhead occurred even for untrusted certificates.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39826?s=golang&n=stdlib&t=golang&vr=%3C1.25.10"><img alt="medium : CVE--2026--39826" src="https://img.shields.io/badge/CVE--2026--39826-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.371%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>30th percentile</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>24th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

CVE-2026-27142 fixed a vulnerability in which URLs were not correctly escaped inside of a <meta> tag's <content> attribute. If the URL content were to insert ASCII whitespaces around the '=' rune inside of the <content> attribute, the escaper would fail to similarly escape it, leading to XSS.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42507?s=golang&n=stdlib&t=golang&vr=%3C1.25.11"><img alt="medium : CVE--2026--42507" src="https://img.shields.io/badge/CVE--2026--42507-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.370%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>30th percentile</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>32nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

ReverseProxy can forward queries containing parameters not visible to Rewrite functions.

When used with a Rewrite function, or a Director function which parses query parameters, ReverseProxy sanitizes the forwarded request to remove query parameters which are not parsed by url.ParseQuery. ReverseProxy does not take ParseQuery's limit on the total number of query parameters (controlled by GODEBUG=urlmaxqueryparams=N) into account. This can permit ReverseProxy to forward a request containing a query parameter that is not visible to the Rewrite function.

For example, the query "a1=x&a2=x&...&a10000=x&hidden=y" can forward the parameter "hidden=y" while hiding it from the proxy's Rewrite function.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42505?s=golang&n=stdlib&t=golang&vr=%3C1.25.12"><img alt="unspecified : CVE--2026--42505" src="https://img.shields.io/badge/CVE--2026--42505-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.254%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>17th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Handshakes which used Encrypted Client Hello could be de-anonymized by a passive network observer due to a disclosure of pre-shared key identities in the unencrypted client hello.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39822?s=golang&n=stdlib&t=golang&vr=%3C1.25.12"><img alt="unspecified : CVE--2026--39822" src="https://img.shields.io/badge/CVE--2026--39822-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.12</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>js-yaml</strong> <code>3.13.1</code> (npm)</summary>

<small><code>pkg:npm/js-yaml@3.13.1</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.4
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-59869?s=github&n=js-yaml&t=npm&vr=%3E%3D3.0.0%2C%3C3.15.0"><img alt="high 7.5: CVE--2026--59869" src="https://img.shields.io/badge/CVE--2026--59869-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Uncontrolled Resource Consumption</i>

<table>
<tr><td>Affected range</td><td><code>>=3.0.0<br/><3.15.0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.15.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.423%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>35th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact

js-yaml can spend quadratic CPU time parsing a document whose size grows only linearly. The issue is triggered by a chain of mappings where each mapping merges the previous one:

```yaml
a0: &a0 { k0: 0 }
a1: &a1 { <<: *a0, k1: 1 }
a2: &a2 { <<: *a1, k2: 2 }
a3: &a3 { <<: *a2, k3: 3 }
...
b: *aN
```

For each new mapping, the loader has to enumerate the keys inherited from the previous mapping. With N chained mappings, this results in roughly 1 + 2 + ... + N merged-key visits, i.e., O(N^2) work for O(N) input size.

### PoC

From N = 4000 delay become > 1s (doc size < 100K)

```js
import { performance } from 'node:perf_hooks'
import { Buffer } from 'node:buffer'
import { load, YAML11_SCHEMA } from 'js-yaml'

const n = Number(process.argv[2] || 4000)

function makeMergeChain (count) {
  const lines = ['a0: &a0 { k0: 0 }']

  for (let i = 1; i < count; i++) {
    lines.push(`a${i}: &a${i} { <<: *a${i - 1}, k${i}: ${i} }`)
  }

  lines.push(`b: *a${count - 1}`)
  return `${lines.join('\n')}\n`
}

const source = makeMergeChain(n)

console.log(source.split('\n').slice(0, 8).join('\n'))
console.log('...')
console.log(source.split('\n').slice(-4).join('\n'))
console.log()
console.log(`N: ${n}`)
console.log(`YAML size: ${Buffer.byteLength(source)} bytes`)

const started = performance.now()
const result = load(source, { schema: YAML11_SCHEMA })
const elapsed = performance.now() - started

console.log(`parse time: ${elapsed.toFixed(1)} ms`)
console.log(`top-level keys: ${Object.keys(result).length}`)
console.log(`b keys: ${Object.keys(result.b).length}`)
```

### Patches

Fix released. The most robust protection is to limit the total number of merged keys per parse call. This should close all past and future edge cases with merge. The default 10K-key limit should be okay in most cases.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-53550?s=github&n=js-yaml&t=npm&vr=%3C3.15.0"><img alt="medium 5.3: CVE--2026--53550" src="https://img.shields.io/badge/CVE--2026--53550-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Inefficient Algorithmic Complexity</i>

<table>
<tr><td>Affected range</td><td><code>&lt;3.15.0</code></td></tr>
<tr><td>Fixed version</td><td><code>4.2.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.378%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>31st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Summary
A crafted YAML document can trigger algorithmic CPU exhaustion in `js-yaml` merge-key processing (`<<`) by repeating the same alias many times in a merge sequence.  
This causes quadratic parse-time behavior relative to input size and can block a Node.js worker/event loop for seconds with a relatively small payload (tens of KB), resulting in denial of service.

### Details
The issue is in merge handling inside `lib/loader.js`:

- `storeMappingPair(...)` iterates every element of a merge sequence when key tag is `tag:yaml.org,2002:merge`.
- For each element, it calls `mergeMappings(...)`.
- `mergeMappings(...)` computes `Object.keys(source)` and performs `_hasOwnProperty.call(destination, key)` checks for each key.

When input is of the form:

a: &a {k0:0, k1:0, ..., kK:0}
b: {<<: [*a, *a, *a, ... repeated M times ...]}
all *a entries refer to the same anchored object. After the first merge, subsequent merges are semantically no-ops, but the parser still reprocesses all keys each time.
Resulting work is O(K * M), while input size is O(K + M), giving quadratic scaling as payload grows.
Relevant code path:
lib/loader.js in storeMappingPair(...) merge branch (keyTag === 'tag:yaml.org,2002:merge')
lib/loader.js mergeMappings(...)


### Root cause
File:       lib/loader.js
Function:   storeMappingPair(state, _result, overridableKeys, keyTag, keyNode,
                             valueNode, startLine, startLineStart, startPos)
Lines:      ~359-366

    if (keyTag === 'tag:yaml.org,2002:merge') {
      if (Array.isArray(valueNode)) {
        for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
          mergeMappings(state, _result, valueNode[index], overridableKeys);
        }
      } else {
        mergeMappings(state, _result, valueNode, overridableKeys);
      }
    }

When the merge value is a sequence (YAML 1.1 <<: [ *a, *a, ... ]), each element
is handed to mergeMappings() without deduplication. mergeMappings() then does

    sourceKeys = Object.keys(source);
    for (index = 0; index < sourceKeys.length; index += 1) {
      key = sourceKeys[index];
      if (!_hasOwnProperty.call(destination, key)) {
        setProperty(destination, key, source[key]);
        overridableKeys[key] = true;
      }
    }

Every alias reference in the sequence resolves (by design) to the SAME object
via state.anchorMap. After the first merge, every subsequent merge of that same
reference is a pure no-op semantically, but still performs:

  * one Object.keys(source) call (O(K))
  * K _hasOwnProperty.call checks on the destination

Total: M * K hasOwnProperty checks + M Object.keys allocations, while the final
object and all observable side effects are identical to a single merge.

YAML semantics for `<<:` are idempotent and commutative over duplicate sources,
so collapsing duplicates preserves behavior exactly; this isn't a spec trade-off.


### PoC
Environment:
js-yaml version: 4.1.1
Node.js: v24.5.0
Platform: arm64 macOS (reproduced consistently)
Reproduction script:
Create many keys in one anchored map (&a).
Merge that same alias repeatedly via <<: [*a, *a, ...].
Measure parse time and compare with control payload using single merge (<<: *a).
Observed repeated runs (same machine):
K=M=1000, input 9,909 bytes: ~33–36 ms
K=M=2000, input 20,909 bytes: ~121–123 ms
K=M=4000, input 42,909 bytes: ~524–537 ms
K=M=6000, input 64,909 bytes: ~1,608–1,829 ms
K=M=8000, input 86,909 bytes: ~3,395–3,565 ms
Control (single merge, similar key counts):
K=2000: ~1–2 ms
K=4000: ~3 ms
K=8000: ~5 ms
Also verified: repeated-merge output equals single-merge output (same key count and same JSON), confirming excess time is redundant computation.


### Impact
This is a denial-of-service vulnerability (CPU exhaustion / algorithmic complexity).
Any service parsing untrusted YAML with js-yaml can be impacted, including API backends, CI tools, config processors, and automation services. An attacker can submit crafted YAML to significantly increase CPU time and reduce availability.

### Suggested fix:
Dedupe the merge source list by reference before invoking mergeMappings. Any of
the following are minimal and preserve YAML 1.1 merge semantics:

dedupe in storeMappingPair:

    if (keyTag === 'tag:yaml.org,2002:merge') {
      if (Array.isArray(valueNode)) {
        var seen = new Set();
        for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
          var src = valueNode[index];
          if (seen.has(src)) continue;   // idempotent; skip redundant alias
          seen.add(src);
          mergeMappings(state, _result, src, overridableKeys);
        }
      } else {
        mergeMappings(state, _result, valueNode, overridableKeys);
      }
    }

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-64718?s=github&n=js-yaml&t=npm&vr=%3C3.14.2"><img alt="medium 5.3: CVE--2025--64718" src="https://img.shields.io/badge/CVE--2025--64718-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Improperly Controlled Modification of Object Prototype Attributes ('Prototype Pollution')</i>

<table>
<tr><td>Affected range</td><td><code>&lt;3.14.2</code></td></tr>
<tr><td>Fixed version</td><td><code>4.1.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:L/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.414%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>34th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact

In js-yaml 4.1.0, 4.0.0, and 3.14.1 and below, it's possible for an attacker to modify the prototype of the result of a parsed yaml document via prototype pollution (`__proto__`). All users who parse untrusted yaml documents may be impacted.

### Patches

Problem is patched in js-yaml 4.1.1 and 3.14.2.

### Workarounds

You can protect against this kind of attack on the server by using `node --disable-proto=delete` or `deno` (in Deno, pollution protection is on by default).

### References

https://cheatsheetseries.owasp.org/cheatsheets/Prototype_Pollution_Prevention_Cheat_Sheet.html

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 15" src="https://img.shields.io/badge/M-15-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>python3.12</strong> <code>3.12.3-1ubuntu0.13</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/python3.12@3.12.3-1ubuntu0.13?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (68:107)
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y --no-install-recommends \
        ca-certificates \
        curl \
        libbrotli1 \
        libcom-err2 \
        libcurl4 \
        libffi8 \
        libgcc-s1 \
        libgmp10 \
        libgnutls30 \
        libgssapi-krb5-2 \
        libhogweed6 \
        libidn2-0 \
        libk5crypto3 \
        libkeyutils1 \
        libkrb5-3 \
        libkrb5support0 \
        libldap2 \
        libnettle8 \
        libnghttp2-14 \
        libp11-kit0 \
        libpsl5 \
        librtmp1 \
        libsasl2-2 \
        libssh2-1 \
        libssl3 \
        libtasn1-6 \
        libunistring5 \
        libzstd1 \
        numactl \
        procps \
        zlib1g \
        yq \
        wait-for-it \
    && apt-get autoremove -y \
    && apt-get autoclean \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-4224?s=ubuntu&n=python3.12&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.12.3-1ubuntu0.15"><img alt="medium 7.5: CVE--2026--4224" src="https://img.shields.io/badge/CVE--2026--4224-lightgrey?label=medium%207.5&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.12.3-1ubuntu0.15</code></td></tr>
<tr><td>Fixed version</td><td><code>3.12.3-1ubuntu0.15</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.621%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>46th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When an Expat parser with a registered ElementDeclHandler parses an inline document type definition containing a deeply nested content model a C stack overflow occurs.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-3644?s=ubuntu&n=python3.12&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.12.3-1ubuntu0.15"><img alt="medium 7.5: CVE--2026--3644" src="https://img.shields.io/badge/CVE--2026--3644-lightgrey?label=medium%207.5&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.12.3-1ubuntu0.15</code></td></tr>
<tr><td>Fixed version</td><td><code>3.12.3-1ubuntu0.15</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.419%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>35th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The fix for CVE-2026-0672, which rejected control characters in http.cookies.Morsel, was incomplete. The Morsel.update(), |= operator, and unpickling paths were not patched, allowing control characters to bypass input validation. Additionally, BaseCookie.js_output() lacked the output validation applied to BaseCookie.output().

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-69534?s=ubuntu&n=python3.12&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.12.3-1ubuntu0.15"><img alt="medium 7.5: CVE--2025--69534" src="https://img.shields.io/badge/CVE--2025--69534-lightgrey?label=medium%207.5&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.12.3-1ubuntu0.15</code></td></tr>
<tr><td>Fixed version</td><td><code>3.12.3-1ubuntu0.15</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.566%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>44th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Python-Markdown version 3.8 contain a vulnerability where malformed HTML-like sequences can cause html.parser.HTMLParser to raise an unhandled AssertionError during Markdown parsing. Because Python-Markdown does not catch this exception, any application that processes attacker-controlled Markdown may crash. This enables remote, unauthenticated Denial of Service in web applications, documentation systems, CI/CD pipelines, and any service that renders untrusted Markdown. The issue was acknowledged by the vendor and fixed in version 3.8.1. This issue causes a remote Denial of Service in any application parsing untrusted Markdown, and can lead to Information Disclosure through uncaught exceptions.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-6019?s=ubuntu&n=python3.12&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.12.3-1ubuntu0.15"><img alt="medium 6.1: CVE--2026--6019" src="https://img.shields.io/badge/CVE--2026--6019-lightgrey?label=medium%206.1&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.12.3-1ubuntu0.15</code></td></tr>
<tr><td>Fixed version</td><td><code>3.12.3-1ubuntu0.15</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.229%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>14th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

http.cookies.Morsel.js_output() returns an inline <script> snippet and only escapes " for JavaScript string context. It does not neutralize the HTML parser-sensitive sequence </script> inside the generated script element. Mitigation base64-encodes the cookie value to disallow escaping using cookie value.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-4519?s=ubuntu&n=python3.12&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.12.3-1ubuntu0.15"><img alt="medium 3.3: CVE--2026--4519" src="https://img.shields.io/badge/CVE--2026--4519-lightgrey?label=medium%203.3&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.12.3-1ubuntu0.15</code></td></tr>
<tr><td>Fixed version</td><td><code>3.12.3-1ubuntu0.15</code></td></tr>
<tr><td>CVSS Score</td><td><code>3.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:N/I:L/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.308%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>23rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The webbrowser.open() API would accept leading dashes in the URL which could be handled as command line options for certain web browsers. New behavior rejects leading dashes. Users are recommended to sanitize URLs prior to passing to webbrowser.open().

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-13462?s=ubuntu&n=python3.12&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.12.3-1ubuntu0.15"><img alt="medium 3.3: CVE--2025--13462" src="https://img.shields.io/badge/CVE--2025--13462-lightgrey?label=medium%203.3&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.12.3-1ubuntu0.15</code></td></tr>
<tr><td>Fixed version</td><td><code>3.12.3-1ubuntu0.15</code></td></tr>
<tr><td>CVSS Score</td><td><code>3.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:N/I:L/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.164%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The "tarfile" module would still apply normalization of AREGTYPE (\x00) blocks to DIRTYPE, even while processing a multi-block member such as GNUTYPE_LONGNAME or GNUTYPE_LONGLINK. This could result in a crafted tar archive being misinterpreted by the tarfile module compared to other implementations.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-9669?s=ubuntu&n=python3.12&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.12.3-1ubuntu0.15"><img alt="medium : CVE--2026--9669" src="https://img.shields.io/badge/CVE--2026--9669-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.12.3-1ubuntu0.15</code></td></tr>
<tr><td>Fixed version</td><td><code>3.12.3-1ubuntu0.15</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.417%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>34th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

bz2.BZ2Decompressor objects could be reused after a decompression error. If an application caught the resulting OSError and retried with the same decompressor, crafted input could cause the decompressor to resume from an invalid internal state and perform out-of-bounds writes to a stack buffer. This could crash the process when processing untrusted data.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-8328?s=ubuntu&n=python3.12&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.12.3-1ubuntu0.15"><img alt="medium : CVE--2026--8328" src="https://img.shields.io/badge/CVE--2026--8328-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.12.3-1ubuntu0.15</code></td></tr>
<tr><td>Fixed version</td><td><code>3.12.3-1ubuntu0.15</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.457%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>37th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The ftpcp() function in Lib/ftplib.py was not updated when CVE-2021-4189 was fixed. While makepasv() was patched to replace server-supplied PASV host addresses with the actual peer address (getpeername()[0]), ftpcp() still calls parse227() directly and passes the raw attacker-controllable IP address and port to target.sendport(). This patch is related to CVE-2021-4189.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-7774?s=ubuntu&n=python3.12&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.12.3-1ubuntu0.15"><img alt="medium : CVE--2026--7774" src="https://img.shields.io/badge/CVE--2026--7774-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.12.3-1ubuntu0.15</code></td></tr>
<tr><td>Fixed version</td><td><code>3.12.3-1ubuntu0.15</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.598%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>45th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

tarfile.data_filter could be bypassed using crafted link entries, including symlinks with empty or directory-like names, to redirect later archive members outside the intended extraction directory. This allowed a malicious tar archive to cause tarfile.extractall() to write files outside the destination directory, subject to the permissions of the extracting process.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-6100?s=ubuntu&n=python3.12&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.12.3-1ubuntu0.15"><img alt="medium : CVE--2026--6100" src="https://img.shields.io/badge/CVE--2026--6100-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.12.3-1ubuntu0.15</code></td></tr>
<tr><td>Fixed version</td><td><code>3.12.3-1ubuntu0.15</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.579%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>44th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Use-after-free (UAF) was possible in the `lzma.LZMADecompressor`, `bz2.BZ2Decompressor`, and `gzip.GzipFile` when a memory allocation fails with a `MemoryError` and the decompression instance is re-used. This scenario can be triggered if the process is under memory pressure. The fix cleans up the dangling pointer in this specific error condition.  The vulnerability is only present if the program re-uses decompressor instances across multiple decompression calls even after a `MemoryError` is raised during decompression. Using the helper functions to one-shot decompress data such as `lzma.decompress()`, `bz2.decompress()`, `gzip.decompress()`, and `zlib.decompress()` are not affected as a new decompressor instance is used per call. If the decompressor instance is not re-used after an error condition, this usage is similarly not vulnerable.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-4786?s=ubuntu&n=python3.12&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.12.3-1ubuntu0.15"><img alt="medium : CVE--2026--4786" src="https://img.shields.io/badge/CVE--2026--4786-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.12.3-1ubuntu0.15</code></td></tr>
<tr><td>Fixed version</td><td><code>3.12.3-1ubuntu0.15</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.290%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Mitgation of CVE-2026-4519 was incomplete. If the URL contained "%action" the mitigation could be bypassed for certain browser types the "webbrowser.open()" API could have commands injected into the underlying shell. See CVE-2026-4519 for details.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-3276?s=ubuntu&n=python3.12&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.12.3-1ubuntu0.15"><img alt="medium : CVE--2026--3276" src="https://img.shields.io/badge/CVE--2026--3276-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.12.3-1ubuntu0.15</code></td></tr>
<tr><td>Fixed version</td><td><code>3.12.3-1ubuntu0.15</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.473%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>38th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

unicodedata.normalize() can take excessive CPU time when processing specially crafted Unicode input containing long runs of combining characters with alternating Canonical Combining Class values. This affects all normalization forms.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-2297?s=ubuntu&n=python3.12&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.12.3-1ubuntu0.15"><img alt="medium : CVE--2026--2297" src="https://img.shields.io/badge/CVE--2026--2297-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.12.3-1ubuntu0.15</code></td></tr>
<tr><td>Fixed version</td><td><code>3.12.3-1ubuntu0.15</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.202%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>10th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The import hook in CPython that handles legacy *.pyc files (SourcelessFileLoader) is incorrectly handled in FileLoader (a base class) and so does not use io.open_code() to read the .pyc files. sys.audit handlers for this audit event therefore do not fire.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-1502?s=ubuntu&n=python3.12&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.12.3-1ubuntu0.15"><img alt="medium : CVE--2026--1502" src="https://img.shields.io/badge/CVE--2026--1502-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.12.3-1ubuntu0.15</code></td></tr>
<tr><td>Fixed version</td><td><code>3.12.3-1ubuntu0.15</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.562%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>44th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

CR/LF bytes were not rejected by HTTP client proxy tunnel headers or host.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-1299?s=ubuntu&n=python3.12&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.12.3-1ubuntu0.15"><img alt="medium : CVE--2026--1299" src="https://img.shields.io/badge/CVE--2026--1299-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.12.3-1ubuntu0.15</code></td></tr>
<tr><td>Fixed version</td><td><code>3.12.3-1ubuntu0.15</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.560%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>43rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The email module, specifically the "BytesGenerator" class, didn’t properly quote newlines for email headers when serializing an email message allowing for header injection when an email is serialized. This is only applicable if using "LiteralHeader" writing headers that don't respect email folding rules, the new behavior will reject the incorrectly folded headers in "BytesGenerator".

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 7" src="https://img.shields.io/badge/M-7-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>glibc</strong> <code>2.39-0ubuntu8.7</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/glibc@2.39-0ubuntu8.7?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.4
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-6238?s=ubuntu&n=glibc&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C2.39-0ubuntu8.8"><img alt="medium : CVE--2026--6238" src="https://img.shields.io/badge/CVE--2026--6238-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.39-0ubuntu8.8</code></td></tr>
<tr><td>Fixed version</td><td><code>2.39-0ubuntu8.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.358%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>29th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The deprecated functions ns_printrrf, ns_printrr and fp_nquery in the GNU C Library version 2.0.1 to version 2.43 fail to validate the RDATA content against the RDATA length in a DNS response when processing A6, CERT, LOC, TKEY or TSIG records, which may allow an attacker to craft a DNS response, causing a target application to crash or read uninitialized memory.  These functions are for application debugging only and hence not in the path of code executed by the DNS resolver.  Further, they have been deprecated since version 2.34 and should not be used by any new applications.  Applications should consider porting away from these interfaces since they may be removed in future versions.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-5928?s=ubuntu&n=glibc&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C2.39-0ubuntu8.8"><img alt="medium : CVE--2026--5928" src="https://img.shields.io/badge/CVE--2026--5928-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.39-0ubuntu8.8</code></td></tr>
<tr><td>Fixed version</td><td><code>2.39-0ubuntu8.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.369%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>30th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling the ungetwc function on a FILE stream with wide characters encoded in a character set that has overlaps between its single byte and multi-byte character encodings, in the GNU C Library version 2.43 or earlier, may result in an attempt to read bytes before an allocated buffer, potentially resulting in unintentional disclosure of neighboring data in the heap, or a program crash.  A bug in the wide character pushback implementation (_IO_wdefault_pbackfail in libio/wgenops.c) causes ungetwc() to operate on the regular character buffer (fp->_IO_read_ptr) instead of the actual wide-stream read pointer (fp->_wide_data->_IO_read_ptr). The program crash may happen in cases where fp->_IO_read_ptr is not initialized and hence points to NULL. The buffer under-read requires a special situation where the input character encoding is such that there are overlaps between single byte representations and multibyte representations in that encoding, resulting in spurious matches. The spurious match case is not possible in the standard Unicode character sets.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-5450?s=ubuntu&n=glibc&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C2.39-0ubuntu8.8"><img alt="medium : CVE--2026--5450" src="https://img.shields.io/badge/CVE--2026--5450-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.39-0ubuntu8.8</code></td></tr>
<tr><td>Fixed version</td><td><code>2.39-0ubuntu8.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.502%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>40th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling the scanf family of functions with a %mc (malloc'd character match) in the GNU C Library version 2.7 to version 2.43 with a format width specifier with an explicit width greater than 1024 could result in a one byte heap buffer overflow.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-5435?s=ubuntu&n=glibc&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C2.39-0ubuntu8.8"><img alt="medium : CVE--2026--5435" src="https://img.shields.io/badge/CVE--2026--5435-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.39-0ubuntu8.8</code></td></tr>
<tr><td>Fixed version</td><td><code>2.39-0ubuntu8.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.237%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>15th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The deprecated functions ns_printrrf, ns_printrr and fp_nquery in the GNU C Library version 2.2 and newer fail to enforce the caller-supplied buffer length, and can result in an out-of-bounds write when printing TSIG records.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-4438?s=ubuntu&n=glibc&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C2.39-0ubuntu8.8"><img alt="medium : CVE--2026--4438" src="https://img.shields.io/badge/CVE--2026--4438-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.39-0ubuntu8.8</code></td></tr>
<tr><td>Fixed version</td><td><code>2.39-0ubuntu8.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.316%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>24th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling gethostbyaddr or gethostbyaddr_r with a configured nsswitch.conf that specifies the library's DNS backend in the GNU C library version 2.34 to version 2.43 could result in an invalid DNS hostname being returned to the caller in violation of the DNS specification.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-4437?s=ubuntu&n=glibc&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C2.39-0ubuntu8.8"><img alt="medium : CVE--2026--4437" src="https://img.shields.io/badge/CVE--2026--4437-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.39-0ubuntu8.8</code></td></tr>
<tr><td>Fixed version</td><td><code>2.39-0ubuntu8.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.325%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>25th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling gethostbyaddr or gethostbyaddr_r with a configured nsswitch.conf that specifies the library's DNS backend in the GNU C Library version 2.34 to version 2.43 could, with a crafted response from the configured DNS server, result in a violation of the DNS specification that causes the application to treat a non-answer section of the DNS response as a valid answer.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-4046?s=ubuntu&n=glibc&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C2.39-0ubuntu8.8"><img alt="medium : CVE--2026--4046" src="https://img.shields.io/badge/CVE--2026--4046-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.39-0ubuntu8.8</code></td></tr>
<tr><td>Fixed version</td><td><code>2.39-0ubuntu8.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.380%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>31st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The iconv() function in the GNU C Library versions 2.43 and earlier may crash due to an assertion failure when converting inputs from the IBM1390 or IBM1399 character sets, which may be used to remotely crash an application.    This vulnerability can be trivially mitigated by removing the IBM1390 and IBM1399 character sets from systems that do not need them.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 5" src="https://img.shields.io/badge/M-5-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>jq</strong> <code>1.7.1-3ubuntu0.24.04.2</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/jq@1.7.1-3ubuntu0.24.04.2?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.4
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-44777?s=ubuntu&n=jq&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium 5.5: CVE--2026--44777" src="https://img.shields.io/badge/CVE--2026--44777-lightgrey?label=medium%205.5&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>5.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.161%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

jq is a command-line JSON processor. In 1.8.2rc1 and earlier, the ordinary module loader recurses without cycle detection when two otherwise valid modules include each other.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-43896?s=ubuntu&n=jq&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium 5.5: CVE--2026--43896" src="https://img.shields.io/badge/CVE--2026--43896-lightgrey?label=medium%205.5&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>5.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.154%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

jq is a command-line JSON processor. In 1.8.1 and earlier, unbounded recursion in jv_object_merge_recursive() allows a crafted jq program to crash the process with a segfault. The function is reachable through the * operator when both operands are objects.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-41257?s=ubuntu&n=jq&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium 5.5: CVE--2026--41257" src="https://img.shields.io/badge/CVE--2026--41257-lightgrey?label=medium%205.5&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>5.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.142%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

jq is a command-line JSON processor. In 1.8.1 and earlier, the jq bytecode VM's data stack tracks its allocation size in a signed int. When the stack grows beyond ≈1 GiB (via deeply nested generator forks), the doubling arithmetic overflows. The wrapped value is passed to realloc and then used for a memmove with attacker-influenced offsets.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-43895?s=ubuntu&n=jq&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium : CVE--2026--43895" src="https://img.shields.io/badge/CVE--2026--43895-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.157%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

jq is a command-line JSON processor. In 1.8.1 and earlier, jq accepts embedded NUL bytes in import paths at the jq-language level, but later resolves those paths through C string operations during module and data-file lookup. This creates a mismatch between the logical import string that policy or audit code may validate and the on-disk path that jq actually opens.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-41256?s=ubuntu&n=jq&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium : CVE--2026--41256" src="https://img.shields.io/badge/CVE--2026--41256-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.158%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

jq is a command-line JSON processor. In 1.8.1 and earlier, Top-level jq programs loaded from a file with -f are truncated at the first embedded NUL byte on current upstream HEAD. A crafted filter file such as . followed by \x00 and arbitrary suffix compiles and executes as only the prefix before the NUL. This leaves jq with a post-CVE-2026-33948 prefix/full-buffer mismatch on the compilation path even though the JSON parser path has already been fixed.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 4" src="https://img.shields.io/badge/M-4-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>sqlite3</strong> <code>3.45.1-1ubuntu2.5</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/sqlite3@3.45.1-1ubuntu2.5?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (68:107)
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y --no-install-recommends \
        ca-certificates \
        curl \
        libbrotli1 \
        libcom-err2 \
        libcurl4 \
        libffi8 \
        libgcc-s1 \
        libgmp10 \
        libgnutls30 \
        libgssapi-krb5-2 \
        libhogweed6 \
        libidn2-0 \
        libk5crypto3 \
        libkeyutils1 \
        libkrb5-3 \
        libkrb5support0 \
        libldap2 \
        libnettle8 \
        libnghttp2-14 \
        libp11-kit0 \
        libpsl5 \
        librtmp1 \
        libsasl2-2 \
        libssh2-1 \
        libssl3 \
        libtasn1-6 \
        libunistring5 \
        libzstd1 \
        numactl \
        procps \
        zlib1g \
        yq \
        wait-for-it \
    && apt-get autoremove -y \
    && apt-get autoclean \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-50813?s=ubuntu&n=sqlite3&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.45.1-1ubuntu2.7"><img alt="medium : CVE--2026--50813" src="https://img.shields.io/badge/CVE--2026--50813-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.45.1-1ubuntu2.7</code></td></tr>
<tr><td>Fixed version</td><td><code>3.45.1-1ubuntu2.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.110%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An issue in SQLite before Fossil check-in 869a51ae84df allows a local attacker to obtain sensitive information via the Session Extension changeset concat/changegroup merge path

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-50812?s=ubuntu&n=sqlite3&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.45.1-1ubuntu2.7"><img alt="medium : CVE--2026--50812" src="https://img.shields.io/badge/CVE--2026--50812-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.45.1-1ubuntu2.7</code></td></tr>
<tr><td>Fixed version</td><td><code>3.45.1-1ubuntu2.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.112%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A NULL pointer dereference in the SQLite Session Extension in SQLite 3.53.1 and SQLite trunk builds before check-in e807d4e3798efd53 allows an attacker who can supply a malformed changeset blob to cause a denial of service. The issue occurs when sqlite3changeset_apply_v3() applies a corrupt changeset and reaches sqlite3_value_type() with a NULL sqlite3_value pointer.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-11824?s=ubuntu&n=sqlite3&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.45.1-1ubuntu2.6"><img alt="medium : CVE--2026--11824" src="https://img.shields.io/badge/CVE--2026--11824-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.45.1-1ubuntu2.6</code></td></tr>
<tr><td>Fixed version</td><td><code>3.45.1-1ubuntu2.6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.175%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>7th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

SQLite before 3.53.2 contains a heap-based buffer overflow vulnerability in the FTS5 full-text search extension that allows attackers to cause a crash or execute arbitrary code by supplying a crafted database with malicious continuation page metadata specifying a szLeaf value smaller than 4. Attackers can trigger an integer underflow in fts5ChunkIterate() causing an inflated remaining byte count during FTS5 MATCH query processing, leading to a heap buffer overflow of attacker-controlled data in applications compiled with SQLITE_ENABLE_FTS5.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-11822?s=ubuntu&n=sqlite3&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.45.1-1ubuntu2.6"><img alt="medium : CVE--2026--11822" src="https://img.shields.io/badge/CVE--2026--11822-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.45.1-1ubuntu2.6</code></td></tr>
<tr><td>Fixed version</td><td><code>3.45.1-1ubuntu2.6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.175%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>7th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

SQLite before 3.53.2 contains memory corruption vulnerabilities in the FTS5 full-text search extension that allow attackers to cause process crashes, memory exhaustion, or arbitrary code execution by supplying a crafted database with malformed FTS5 page data. Attackers can trigger an out-of-bounds read in fts5LeafSeek() via an attacker-controlled loop bound and a heap buffer overflow write in fts5ChunkIterate() through a crafted continuation page causing an integer underflow, exploitable when an FTS5 MATCH query is executed against the malicious database.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 3" src="https://img.shields.io/badge/M-3-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>krb5</strong> <code>1.20.1-6ubuntu2.6</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/krb5@1.20.1-6ubuntu2.6?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.4
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-40356?s=ubuntu&n=krb5&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C1.20.1-6ubuntu2.7"><img alt="medium 7.5: CVE--2026--40356" src="https://img.shields.io/badge/CVE--2026--40356-lightgrey?label=medium%207.5&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.20.1-6ubuntu2.7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.20.1-6ubuntu2.7</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.604%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>46th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In MIT Kerberos 5 (aka krb5) before 1.22.3, there is an integer underflow and resultant out-of-bounds read if an application calls gss_accept_sec_context() on a system with a NegoEx mechanism registered in /etc/gss/mech. An unauthenticated remote attacker can trigger this, possibly causing the process to terminate in parse_message.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-40355?s=ubuntu&n=krb5&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C1.20.1-6ubuntu2.7"><img alt="medium 7.5: CVE--2026--40355" src="https://img.shields.io/badge/CVE--2026--40355-lightgrey?label=medium%207.5&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.20.1-6ubuntu2.7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.20.1-6ubuntu2.7</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.611%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>46th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In MIT Kerberos 5 (aka krb5) before 1.22.3, there is a NULL pointer dereference if an application calls gss_accept_sec_context() on a system with a NegoEx mechanism registered in /etc/gss/mech. An unauthenticated remote attacker can trigger this, causing the process to terminate in parse_nego_message.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-11850?s=ubuntu&n=krb5&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C1.20.1-6ubuntu2.7"><img alt="medium : CVE--2026--11850" src="https://img.shields.io/badge/CVE--2026--11850-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.20.1-6ubuntu2.7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.20.1-6ubuntu2.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.261%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An integer underflow vulnerability was found in MIT krb5 in the berval2tl_data() function in plugins/kdb/ldap/libkdb_ldap/ldap_principal2.c. The function performs an unsigned subtraction (bv_len - 2) without a prior bounds check. When bv_len is 0 or 1, the subtraction wraps to a large value which is then truncated to uint16_t, yielding 0xFFFE (65534) or 0xFFFF (65535). The subsequent malloc succeeds and memcpy reads up to 65534 bytes from a 0-1 byte buffer, resulting in a heap out-of-bounds read. The attack vector involves a malicious or compromised LDAP KDB backend returning a krbExtraData attribute with bv_len < 2, triggering the underflow when the KDC or kadmind reads principal data.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 5" src="https://img.shields.io/badge/L-5-fce1a9"/> <!-- unspecified: 0 --><strong>curl</strong> <code>8.5.0-2ubuntu10.9</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/curl@8.5.0-2ubuntu10.9?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.4
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-8927?s=ubuntu&n=curl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C8.5.0-2ubuntu10.10"><img alt="medium : CVE--2026--8927" src="https://img.shields.io/badge/CVE--2026--8927-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.5.0-2ubuntu10.10</code></td></tr>
<tr><td>Fixed version</td><td><code>8.5.0-2ubuntu10.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.440%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>36th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When reusing a libcurl handle for sequential transfers driven by environment-variable proxy configuration, libcurl fails to clear the proxy authentication state between requests. Specifically, if the initial transfer authenticates against `proxyA` using Digest auth, a subsequent transfer routed through `proxyB` erroneously leaks the `Proxy-Authorization:` header intended solely for `proxyA`.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-8925?s=ubuntu&n=curl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C8.5.0-2ubuntu10.10"><img alt="medium : CVE--2026--8925" src="https://img.shields.io/badge/CVE--2026--8925-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.5.0-2ubuntu10.10</code></td></tr>
<tr><td>Fixed version</td><td><code>8.5.0-2ubuntu10.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.592%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>45th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The curl logic that works with SASL authentication could end up cleaning up the GSASL context *twice* without clearing the pointer in between, making it `free()` the same pointer twice.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-9547?s=ubuntu&n=curl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C8.5.0-2ubuntu10.10"><img alt="low : CVE--2026--9547" src="https://img.shields.io/badge/CVE--2026--9547-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.5.0-2ubuntu10.10</code></td></tr>
<tr><td>Fixed version</td><td><code>8.5.0-2ubuntu10.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.325%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>25th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When a libcurl-based application performs transfers via `SCP://` or `SFTP://` and utilizes the `CURLOPT_SSH_KEYFUNCTION` callback, it may silently accept an untrusted server. This vulnerability occurs when a server presents a host key type that does not match the specific key type already recorded for that host in the `known_hosts` file. Instead of rejecting the mismatch, the callback mechanism fails to properly enforce the restriction, allowing the connection to succeed without warning and risking a potential man-in-the-middle attack.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-8924?s=ubuntu&n=curl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C8.5.0-2ubuntu10.10"><img alt="low : CVE--2026--8924" src="https://img.shields.io/badge/CVE--2026--8924-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.5.0-2ubuntu10.10</code></td></tr>
<tr><td>Fixed version</td><td><code>8.5.0-2ubuntu10.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.560%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>43rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw in curl’s cookie parsing logic allows a malicious HTTP server to set 'super cookies' that bypass the Public Suffix List check. This enables an attacker-controlled origin to inject cookies that curl subsequently scopes and transmits to unrelated third-party domains.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-8458?s=ubuntu&n=curl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C8.5.0-2ubuntu10.10"><img alt="low : CVE--2026--8458" src="https://img.shields.io/badge/CVE--2026--8458-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.5.0-2ubuntu10.10</code></td></tr>
<tr><td>Fixed version</td><td><code>8.5.0-2ubuntu10.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.315%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>24th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

libcurl might in some circumstances reuse the wrong connection when asked to do Negotiate-authenticated ones, even when they are set to use different 'services'.  libcurl features a pool of recent connections so that subsequent requests can reuse an existing connection to avoid overhead.  When reusing a connection a range of criteria must be met. Due to a logical error in the code, a request that was issued by an application could wrongfully reuse an existing connection to the same server that was authenticated using different services.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-8286?s=ubuntu&n=curl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C8.5.0-2ubuntu10.10"><img alt="low : CVE--2026--8286" src="https://img.shields.io/badge/CVE--2026--8286-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.5.0-2ubuntu10.10</code></td></tr>
<tr><td>Fixed version</td><td><code>8.5.0-2ubuntu10.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.309%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>23rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A vulnerability exists where a new transfer that uses STARTTLS to upgrade the connection might reuse an existing live connection even though the TLS configuration mismatches so it should not.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-10536?s=ubuntu&n=curl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C8.5.0-2ubuntu10.11"><img alt="low : CVE--2026--10536" src="https://img.shields.io/badge/CVE--2026--10536-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.5.0-2ubuntu10.11</code></td></tr>
<tr><td>Fixed version</td><td><code>8.5.0-2ubuntu10.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.507%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>41st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A use-after-free vulnerability exists in libcurl when an application configures an HTTP/2 stream-dependency tree via `CURLOPT_STREAM_DEPENDS` or `CURLOPT_STREAM_DEPENDS_E`, subsequently invokes `curl_easy_reset()`, and finally terminates the handle with `curl_easy_cleanup()`. During this final cleanup phase, libcurl attempts to access and modify an internal structure that was already freed during the reset operation.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>perl</strong> <code>5.38.2-3.2ubuntu0.2</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/perl@5.38.2-3.2ubuntu0.2?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.4
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-8376?s=ubuntu&n=perl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C5.38.2-3.2ubuntu0.3"><img alt="medium 9.8: CVE--2026--8376" src="https://img.shields.io/badge/CVE--2026--8376-lightgrey?label=medium%209.8&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;5.38.2-3.2ubuntu0.3</code></td></tr>
<tr><td>Fixed version</td><td><code>5.38.2-3.2ubuntu0.3</code></td></tr>
<tr><td>CVSS Score</td><td><code>9.8</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.443%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>36th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Perl versions through 5.43.10 have a heap buffer overflow when compiling regular expressions with a repeated fixed string on 32-bit builds.  Perl_study_chunk in regcomp_study.c checked the size of the joined substring buffer in characters rather than bytes. For a quantified fixed substring with a large minimum count, the byte length mincount * l could overflow SSize_t, producing an undersized SvGROW allocation; the subsequent copy writes past the end of the buffer.  A caller that compiles an attacker-controlled regular expression on a 32-bit perl build triggers a heap buffer overflow at compile time.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42496?s=ubuntu&n=perl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C5.38.2-3.2ubuntu0.3"><img alt="medium 9.1: CVE--2026--42496" src="https://img.shields.io/badge/CVE--2026--42496-lightgrey?label=medium%209.1&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;5.38.2-3.2ubuntu0.3</code></td></tr>
<tr><td>Fixed version</td><td><code>5.38.2-3.2ubuntu0.3</code></td></tr>
<tr><td>CVSS Score</td><td><code>9.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.430%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>35th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Archive::Tar versions before 3.08 for Perl extract symlinks with attacker controlled targets outside the extraction directory.  _make_special_file() passes the tar header's linkname to symlink() without validating it against absolute paths or .. segments. The secure-extract mode check that guards regular file extraction does not cover the symlink target.  A subsequent open through the extracted name reads or writes the attacker chosen path.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>libssh2</strong> <code>1.11.0-4.1ubuntu0.24.04.1</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/libssh2@1.11.0-4.1ubuntu0.24.04.1?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (68:107)
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y --no-install-recommends \
        ca-certificates \
        curl \
        libbrotli1 \
        libcom-err2 \
        libcurl4 \
        libffi8 \
        libgcc-s1 \
        libgmp10 \
        libgnutls30 \
        libgssapi-krb5-2 \
        libhogweed6 \
        libidn2-0 \
        libk5crypto3 \
        libkeyutils1 \
        libkrb5-3 \
        libkrb5support0 \
        libldap2 \
        libnettle8 \
        libnghttp2-14 \
        libp11-kit0 \
        libpsl5 \
        librtmp1 \
        libsasl2-2 \
        libssh2-1 \
        libssl3 \
        libtasn1-6 \
        libunistring5 \
        libzstd1 \
        numactl \
        procps \
        zlib1g \
        yq \
        wait-for-it \
    && apt-get autoremove -y \
    && apt-get autoclean \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-55199?s=ubuntu&n=libssh2&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C1.11.0-4.1ubuntu0.24.04.2"><img alt="medium 7.5: CVE--2026--55199" src="https://img.shields.io/badge/CVE--2026--55199-lightgrey?label=medium%207.5&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.11.0-4.1ubuntu0.24.04.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.11.0-4.1ubuntu0.24.04.2</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.918%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>57th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

libssh2 through 1.11.1, fixed in commit 1762685, contains a pre-authentication denial of service vulnerability in the SSH_MSG_EXT_INFO handler in src/packet.c that allows a malicious SSH server to cause a client CPU exhaustion loop by sending a crafted extension count value. A malicious server can set nr_extensions to 0xFFFFFFFF during key exchange, causing the client to spin in a tight CPU loop for over 60 seconds because return values from _libssh2_get_string() are unchecked and the session timeout does not apply to CPU-bound loops.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-15661?s=ubuntu&n=libssh2&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C1.11.0-4.1ubuntu0.24.04.2"><img alt="medium 6.5: CVE--2025--15661" src="https://img.shields.io/badge/CVE--2025--15661-lightgrey?label=medium%206.5&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.11.0-4.1ubuntu0.24.04.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.11.0-4.1ubuntu0.24.04.2</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:L/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>1.030%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>60th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

libssh2 through 1.11.1, fixed in commit 2dae302, contains an out-of-bounds heap read vulnerability in the sftp_symlink() function in src/sftp.c that allows a malicious SSH server or man-in-the-middle attacker to disclose heap memory contents or cause a crash by sending a crafted SSH_FXP_NAME response. Attackers can supply a link_len value larger than the actual packet data in SSH_FXP_NAME responses for SFTP READLINK and REALPATH operations, triggering a heap buffer over-read of up to target_len minus one bytes due to the missing validation of available packet buffer size before the memcpy operation.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>gzip</strong> <code>1.12-1ubuntu3.1</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/gzip@1.12-1ubuntu3.1?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.4
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-41992?s=ubuntu&n=gzip&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C1.12-1ubuntu3.2"><img alt="medium 7.5: CVE--2026--41992" src="https://img.shields.io/badge/CVE--2026--41992-lightgrey?label=medium%207.5&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.12-1ubuntu3.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.12-1ubuntu3.2</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.335%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>26th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GNU gzip contains a global buffer overflow vulnerability in the LZH decompression logic caused by improper reuse of shared global state between different decompression formats within a single execution. GNU gzip maintains a global array that is shared across the LZ77, LZW, and LZH decompression routines and is not reinitialized between files processed in the same invocation. By decompressing a specially crafted LZW file followed by a specially crafted LZH file in a single gzip -d command, an attacker can poison the shared global state and subsequently trigger an out‑of‑bounds read in the LZH decoder. The LZH decompression logic follows stale values left in the shared array, causing reads past the end of the allocated global buffer.  This issue has been fixed in the commit 63dbf6b3b9e6e781df1a6a64e609b10e23969681

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-41991?s=ubuntu&n=gzip&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C1.12-1ubuntu3.2"><img alt="medium 4.7: CVE--2026--41991" src="https://img.shields.io/badge/CVE--2026--41991-lightgrey?label=medium%204.7&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.12-1ubuntu3.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.12-1ubuntu3.2</code></td></tr>
<tr><td>CVSS Score</td><td><code>4.7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:H/PR:L/UI:N/S:U/C:N/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.117%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GNU gzip contains a vulnerability in the gzexe utility related to insecure temporary file handling. When the mktemp utility is not available in the user’s PATH, gzexe falls back to constructing a temporary file path based solely on the process ID (PID). This predictable filename is created without exclusive access or existence checks. A local attacker can pre‑create the predicted temporary file path as a symbolic link pointing to an arbitrary file writable by the victim. When gzexe runs, it follows the symlink and overwrites the target file, resulting in a time‑of‑check to time‑of‑use (TOCTOU) condition that allows arbitrary file overwrite.  This issue has been fixed in the commit 4e6f8b24ab823146ab8776f0b7fe486ab34d4269

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>tar</strong> <code>1.35+dfsg-3build1</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/tar@1.35%2Bdfsg-3build1?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.4
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-5704?s=ubuntu&n=tar&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C1.35%2Bdfsg-3ubuntu0.4"><img alt="medium 5.5: CVE--2026--5704" src="https://img.shields.io/badge/CVE--2026--5704-lightgrey?label=medium%205.5&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.35+dfsg-3ubuntu0.4</code></td></tr>
<tr><td>Fixed version</td><td><code>1.35+dfsg-3ubuntu0.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:N/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.372%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>30th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in tar. A remote attacker could exploit this vulnerability by crafting a malicious archive, leading to hidden file injection with fully attacker-controlled content. This bypasses pre-extraction inspection mechanisms, potentially allowing an attacker to introduce malicious files onto a system without detection.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-45582?s=ubuntu&n=tar&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C1.35%2Bdfsg-3ubuntu0.2"><img alt="medium : CVE--2025--45582" src="https://img.shields.io/badge/CVE--2025--45582-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.35+dfsg-3ubuntu0.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.35+dfsg-3ubuntu0.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.433%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>36th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GNU Tar through 1.35 allows file overwrite via directory traversal in crafted TAR archives, with a certain two-step process. First, the victim must extract an archive that contains a ../ symlink to a critical directory. Second, the victim must extract an archive that contains a critical file, specified via a relative pathname that begins with the symlink name and ends with that critical file's name. Here, the extraction follows the symlink and overwrites the critical file. This bypasses the protection mechanism of "Member name contains '..'" that would occur for a single TAR archive that attempted to specify the critical file via a ../ approach. For example, the first archive can contain "x -> ../../../../../home/victim/.ssh" and the second archive can contain x/authorized_keys. This can affect server applications that automatically extract any number of user-supplied TAR archives, and were relying on the blocking of traversal. This can also affect software installation processes in which "tar xf" is run more than once (e.g., when installing a package can automatically install two dependencies that are set up as untrusted tarballs instead of official packages). NOTE: the official GNU Tar manual has an otherwise-empty directory for each "tar xf" in its Security Rules of Thumb; however, third-party advice leads users to run "tar xf" more than once into the same directory.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>dpkg</strong> <code>1.22.6ubuntu6.6</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/dpkg@1.22.6ubuntu6.6?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.4
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-2219?s=ubuntu&n=dpkg&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium : CVE--2026--2219" src="https://img.shields.io/badge/CVE--2026--2219-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.418%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>34th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

It was discovered that dpkg-deb (a component of dpkg, the Debian package management system) does not properly validate the end of the data stream when uncompressing a zstd-compressed .deb archive, which may result in denial of service (infinite loop spinning the CPU).

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>pam</strong> <code>1.5.3-5ubuntu5.5</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/pam@1.5.3-5ubuntu5.5?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.4
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-54411?s=ubuntu&n=pam&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C1.5.3-5ubuntu5.6"><img alt="medium : CVE--2026--54411" src="https://img.shields.io/badge/CVE--2026--54411-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.5.3-5ubuntu5.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.5.3-5ubuntu5.6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.333%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>26th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Linux-PAM through 1.7.2 contains an observable timing discrepancy (CWE-208) in the pam_userdb module's plaintext-password comparison path in modules/pam_userdb/pam_userdb.c that allows a local or network-adjacent attacker able to repeatedly drive authentication through a calling service to recover the plaintext password of a target account by measuring response-timing differences. The comparison uses strncmp() (or strncasecmp() when PAM_ICASE_ARG is set) preceded by a length-equality check, so the time to reject a candidate depends on the index of the first differing byte and on whether the candidate's length matches the stored password, leaking the password length and individual prefix bytes. The vulnerable path is reached when the administrator configures pam_userdb with crypt=none, with an unrecognized crypt method, or without a crypt= argument, causing the module to store and compare credentials in plaintext.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>util-linux</strong> <code>2.39.3-9ubuntu6.5</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/util-linux@2.39.3-9ubuntu6.5?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.4
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-27456?s=ubuntu&n=util-linux&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium : CVE--2026--27456" src="https://img.shields.io/badge/CVE--2026--27456-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.118%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

util-linux is a random collection of Linux utilities. Prior to version 2.41.4, a TOCTOU (Time-of-Check-Time-of-Use) vulnerability has been identified in the SUID binary /usr/bin/mount from util-linux. The mount binary, when setting up loop devices, validates the source file path with user privileges via fork() + setuid() + realpath(), but subsequently re-canonicalizes and opens it with root privileges (euid=0) without verifying that the path has not been replaced between both operations. Neither O_NOFOLLOW, nor inode comparison, nor post-open fstat() are employed. This allows a local unprivileged user to replace the source file with a symlink pointing to any root-owned file or device during the race window, causing the SUID binary to open and mount it as root. Exploitation requires an /etc/fstab entry with user,loop options whose path points to a directory where the attacker has write permission, and that /usr/bin/mount has the SUID bit set (the default configuration on virtually all Linux distributions). The impact is unauthorized read access to root-protected files and block devices, including backup images, disk volumes, and any file containing a valid filesystem. This issue has been patched in version 2.41.4.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>go.mongodb.org/mongo-driver</strong> <code>1.17.3</code> (golang)</summary>

<small><code>pkg:golang/go.mongodb.org/mongo-driver@1.17.3</code></small><br/>

```dockerfile
# mongo-8.dockerfile (125:125)
COPY --from=builder /usr/local/bin/mongo* /usr/local/bin/bsondump /usr/bin/
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>p11-kit</strong> <code>0.25.3-4ubuntu2.1</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/p11-kit@0.25.3-4ubuntu2.1?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.4
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-13757?s=ubuntu&n=p11-kit&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium : CVE--2026--13757" src="https://img.shields.io/badge/CVE--2026--13757-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.136%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in p11-kit. The RPC message attribute parsing functions p11_rpc_message_get_attribute() and p11_rpc_message_get_attribute_array_value() form a mutually-recursive call chain with no recursion depth limit when processing nested CKA_WRAP_TEMPLATE, CKA_UNWRAP_TEMPLATE, and CKA_DERIVE_TEMPLATE attributes. An unauthenticated attacker with local access to the p11-kit RPC Unix domain socket can send a specially crafted request with deeply nested template attributes, causing stack exhaustion and crashing the p11-kit server process and its dependent services.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>expat</strong> <code>2.6.1-2ubuntu0.4</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/expat@2.6.1-2ubuntu0.4?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (68:107)
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y --no-install-recommends \
        ca-certificates \
        curl \
        libbrotli1 \
        libcom-err2 \
        libcurl4 \
        libffi8 \
        libgcc-s1 \
        libgmp10 \
        libgnutls30 \
        libgssapi-krb5-2 \
        libhogweed6 \
        libidn2-0 \
        libk5crypto3 \
        libkeyutils1 \
        libkrb5-3 \
        libkrb5support0 \
        libldap2 \
        libnettle8 \
        libnghttp2-14 \
        libp11-kit0 \
        libpsl5 \
        librtmp1 \
        libsasl2-2 \
        libssh2-1 \
        libssl3 \
        libtasn1-6 \
        libunistring5 \
        libzstd1 \
        numactl \
        procps \
        zlib1g \
        yq \
        wait-for-it \
    && apt-get autoremove -y \
    && apt-get autoclean \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-66382?s=ubuntu&n=expat&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium 5.5: CVE--2025--66382" src="https://img.shields.io/badge/CVE--2025--66382-lightgrey?label=medium%205.5&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>5.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.206%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In libexpat through 2.7.3, a crafted file with an approximate size of 2 MiB can lead to dozens of seconds of processing time.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>nghttp2</strong> <code>1.59.0-1ubuntu0.3</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/nghttp2@1.59.0-1ubuntu0.3?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.4
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-58055?s=ubuntu&n=nghttp2&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C1.59.0-1ubuntu0.4"><img alt="medium : CVE--2026--58055" src="https://img.shields.io/badge/CVE--2026--58055-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.59.0-1ubuntu0.4</code></td></tr>
<tr><td>Fixed version</td><td><code>1.59.0-1ubuntu0.4</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.202%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>10th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

nghttp2's nghttpx proxy through 1.69.0 forwards an HTTP/1.1 Upgrade request that also carries a Content-Length header and body onto reusable keep-alive backend connections, re-adding the Upgrade and Connection headers while passing Content-Length verbatim. A backend that resolves the resulting ambiguous message in the attacker's favor enables HTTP request/response smuggling and cross-client response-queue poisoning.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>libgcrypt20</strong> <code>1.10.3-2ubuntu0.1</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/libgcrypt20@1.10.3-2ubuntu0.1?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.4
```

<br/>

<a href="https://scout.docker.com/v/CVE-2024-2236?s=ubuntu&n=libgcrypt20&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="low : CVE--2024--2236" src="https://img.shields.io/badge/CVE--2024--2236-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>1.114%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>63rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A timing-based side-channel flaw was found in libgcrypt's RSA implementation. This issue may allow a remote attacker to initiate a Bleichenbacher-style attack, which can lead to the decryption of RSA ciphertexts.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>ncurses</strong> <code>6.4+20240113-1ubuntu2</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/ncurses@6.4%2B20240113-1ubuntu2?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.4
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-69720?s=ubuntu&n=ncurses&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C6.4%2B20240113-1ubuntu2.1"><img alt="low 7.8: CVE--2025--69720" src="https://img.shields.io/badge/CVE--2025--69720-lightgrey?label=low%207.8&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;6.4+20240113-1ubuntu2.1</code></td></tr>
<tr><td>Fixed version</td><td><code>6.4+20240113-1ubuntu2.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.8</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:H/I:H/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.447%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>37th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The infocmp command-line tool in ncurses before 6.5-20251213 has a stack-based buffer overflow in analyze_string in progs/infocmp.c.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>golang.org/x/sys</strong> <code>0.33.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/sys@0.33.0</code></small><br/>

```dockerfile
# mongo-8.dockerfile (132:132)
RUN chmod -R g+rwX /opt/bitnami
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>golang.org/x/sys</strong> <code>0.38.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/sys@0.38.0</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.4
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>golang.org/x/sys</strong> <code>0.40.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/sys@0.40.0</code></small><br/>

```dockerfile
# mongo-8.dockerfile (125:125)
COPY --from=builder /usr/local/bin/mongo* /usr/local/bin/bsondump /usr/bin/
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>zlib</strong> <code>1:1.3.dfsg-3.1ubuntu2.1</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/zlib@1%3A1.3.dfsg-3.1ubuntu2.1?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.4
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-27171?s=ubuntu&n=zlib&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="low 5.5: CVE--2026--27171" src="https://img.shields.io/badge/CVE--2026--27171-lightgrey?label=low%205.5&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>5.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.218%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>12th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

zlib before 1.3.2 allows CPU consumption via crc32_combine64 and crc32_combine_gen64 because x2nmodp can do right shifts within a loop that has no termination condition.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>shadow</strong> <code>1:4.13+dfsg1-4ubuntu3.2</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/shadow@1%3A4.13%2Bdfsg1-4ubuntu3.2?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.4
```

<br/>

<a href="https://scout.docker.com/v/CVE-2024-56433?s=ubuntu&n=shadow&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="low : CVE--2024--56433" src="https://img.shields.io/badge/CVE--2024--56433-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.408%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>34th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

shadow-utils (aka shadow) 4.4 through 4.17.0 establishes a default /etc/subuid behavior (e.g., uid 100000 through 165535 for the first user account) that can realistically conflict with the uids of users defined on locally administered networks, potentially leading to account takeover, e.g., by leveraging newuidmap for access to an NFS home directory (or same-host resources in the case of remote logins by these local network users). NOTE: it may also be argued that system administrators should not have assigned uids, within local networks, that are within the range that can occur in /etc/subuid.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>systemd</strong> <code>255.4-1ubuntu8.16</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/systemd@255.4-1ubuntu8.16?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.4
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-40228?s=ubuntu&n=systemd&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="low 3.3: CVE--2026--40228" src="https://img.shields.io/badge/CVE--2026--40228-lightgrey?label=low%203.3&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>3.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:N/I:L/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.173%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>7th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In systemd 259, systemd-journald can send ANSI escape sequences to the terminals of arbitrary users when a "logger -p emerg" command is executed, if ForwardToWall=yes is set.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>golang.org/x/sys</strong> <code>0.1.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/sys@0.1.0</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.4
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 2" src="https://img.shields.io/badge/U-2-lightgrey"/><strong>stdlib</strong> <code>1.26.4</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.26.4</code></small><br/>

```dockerfile
# mongo-8.dockerfile (125:125)
COPY --from=builder /usr/local/bin/mongo* /usr/local/bin/bsondump /usr/bin/
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-42505?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.5"><img alt="unspecified : CVE--2026--42505" src="https://img.shields.io/badge/CVE--2026--42505-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.5</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.5</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.254%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>17th percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>github.com/klauspost/compress</strong> <code>1.17.8</code> (golang)</summary>

<small><code>pkg:golang/github.com/klauspost/compress@1.17.8</code></small><br/>

```dockerfile
# mongo-8.dockerfile (125:125)
COPY --from=builder /usr/local/bin/mongo* /usr/local/bin/bsondump /usr/bin/
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>golang.org/x/text</strong> <code>0.33.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/text@0.33.0</code></small><br/>

```dockerfile
# mongo-8.dockerfile (125:125)
COPY --from=builder /usr/local/bin/mongo* /usr/local/bin/bsondump /usr/bin/
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-56852?s=golang&n=text&ns=golang.org%2Fx&t=golang&vr=%3C0.39.0"><img alt="unspecified : CVE--2026--56852" src="https://img.shields.io/badge/CVE--2026--56852-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.39.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.39.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.446%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>37th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A norm.Iter can enter an infinite loop when handling input containing invalid UTF-8 bytes.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>golang.org/x/text</strong> <code>0.31.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/text@0.31.0</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.4
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-56852?s=golang&n=text&ns=golang.org%2Fx&t=golang&vr=%3C0.39.0"><img alt="unspecified : CVE--2026--56852" src="https://img.shields.io/badge/CVE--2026--56852-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.39.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.39.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.446%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>37th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A norm.Iter can enter an infinite loop when handling input containing invalid UTF-8 bytes.

</blockquote>
</details>
</details></td></tr>
</table>

