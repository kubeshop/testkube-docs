---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:3defc74a338976e289405983881177c21e26882794a3842ae957d143634d6888</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 16" src="https://img.shields.io/badge/critical-16-8b1924"/> <img alt="high: 61" src="https://img.shields.io/badge/high-61-e25d68"/> <img alt="medium: 66" src="https://img.shields.io/badge/medium-66-fbb552"/> <img alt="low: 15" src="https://img.shields.io/badge/low-15-fce1a9"/> <img alt="unspecified: 8" src="https://img.shields.io/badge/unspecified-8-lightgrey"/></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>648 MB</td></tr>
<tr><td>packages</td><td>278</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 7" src="https://img.shields.io/badge/C-7-8b1924"/> <img alt="high: 5" src="https://img.shields.io/badge/H-5-e25d68"/> <img alt="medium: 4" src="https://img.shields.io/badge/M-4-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>golang.org/x/crypto</strong> <code>0.47.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/crypto@0.47.0</code></small><br/>

```dockerfile
# mongo-8.dockerfile (121:121)
COPY --from=builder /usr/local/bin/mongo* /usr/local/bin/bsondump /opt/bitnami/mongodb/bin/
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-46595?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="critical 10.0: CVE--2026--46595" src="https://img.shields.io/badge/CVE--2026--46595-lightgrey?label=critical%2010.0&labelColor=8b1924"/></a> <i>Incorrect Implementation of Authentication Algorithm</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>10</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.556%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>46th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>6.910%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>94th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.597%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>48th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.469%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>40th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.683%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>52nd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.478%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>41st percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.683%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>52nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A malicious SSH peer could send unsolicited global request responses to fill an internal buffer, blocking the connection's read loop. The blocked goroutine could not be released by calling Close(), resulting in a resource leak per connection. Unsolicited global responses are now discarded.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-78662?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.56.0"><img alt="high : CVE--2026--78662" src="https://img.shields.io/badge/CVE--2026--78662-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.56.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.56.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.431%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>37th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Previously, a channel registered in the mux's chanList is not usable until it is established. A malicious peer was able flood the channel's incomingRequests, deadlocking the entire connection.

Now, we add an atomic established state, set when a channel becomes usable. Until such a time, handlePacket drops every packet other than the open confirmation/failure, without blocking and without tearing down the connection.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-56855?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.56.0"><img alt="high : CVE--2026--56855" src="https://img.shields.io/badge/CVE--2026--56855-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.56.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.56.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.500%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>43rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Previously, after a channel has been established, a malicious peer could send crafted messages that would deadlock the entire connection.

Now, we handle all RFC 4254 channel messages; global requests are handled explicitly. Then, treat all other messages as a protocol error and tear the connection down instead of buffering and blocking.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-56854?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.55.0"><img alt="high : CVE--2026--56854" src="https://img.shields.io/badge/CVE--2026--56854-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.55.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.55.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.437%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>38th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The source-address critical option in the Permissions returned by an authentication callback was only enforced for the PublicKeyCallback and VerifiedPublicKeyCallback paths, extending the fix for CVE-2026-46595. Permissions returned by the PasswordCallback, KeyboardInteractiveCallback, NoClientAuthCallback, and GSSAPIWithMICConfig.AllowLogin callbacks were not validated against the client's remote address, so a source-address restriction set by those callbacks was silently ignored. The check is now applied to the Permissions returned by any authentication callback.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-46597?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.52.0"><img alt="high 7.5: CVE--2026--46597" src="https://img.shields.io/badge/CVE--2026--46597-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Incorrect Type Conversion or Cast</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.52.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.52.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.473%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>41st percentile</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>40th percentile</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>31st percentile</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>35th percentile</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>43rd percentile</code></td></tr>
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
<details><summary><img alt="critical: 4" src="https://img.shields.io/badge/C-4-8b1924"/> <img alt="high: 30" src="https://img.shields.io/badge/H-30-e25d68"/> <img alt="medium: 23" src="https://img.shields.io/badge/M-23-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>stdlib</strong> <code>1.24.6</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.24.6</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.11
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-68121?s=golang&n=stdlib&t=golang&vr=%3C1.24.13"><img alt="critical : CVE--2025--68121" src="https://img.shields.io/badge/CVE--2025--68121-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.13</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.13</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.915%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>60th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

During session resumption in crypto/tls, if the underlying Config has its ClientCAs or RootCAs fields mutated between the initial handshake and the resumed handshake, the resumed handshake may succeed when it should have failed. This may happen when a user calls Config.Clone and mutates the returned Config, or uses Config.GetConfigForClient. This can cause a client to resume a session with a server that it would not have resumed with during the initial handshake, or cause a server to resume a session with a client that it would not have resumed with during the initial handshake.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-56857?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="critical : CVE--2026--56857" src="https://img.shields.io/badge/CVE--2026--56857-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.553%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>46th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

On Windows, when the target of Root.Mkdir or Root.MkdirAll is a junction pointing to an empty location, the operation can create a directory at the junction target even when that target is located outside the root. This only applies to operations where the last path component is a junction (path/to/junction, but not path/junction/target).

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39821?s=golang&n=stdlib&t=golang&vr=%3C1.25.13"><img alt="critical : CVE--2026--39821" src="https://img.shields.io/badge/CVE--2026--39821-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.13</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.13</code></td></tr>
<tr><td>EPSS Score</td><td><code>1.834%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>79th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The ToASCII and ToUnicode functions incorrectly accept Punycode-encoded labels that decode to an ASCII-only label. For example, ToUnicode("xn--example-.com") incorrectly returns the name "example.com" rather than an error.

This behavior can lead to privilege escalation in programs using the idna package. For example, a program which performs privilege checks on the ASCII hostname may reject "example.com" but permit "xn--example-.com". If that program subsequently converts the ASCII hostname to Unicode, it will inadvertently permits access to the Unicode name "example.com".

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-78663?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="critical : CVE--2026--78663" src="https://img.shields.io/badge/CVE--2026--78663-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.622%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>50th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The HTTP/2 server can refund connection-level flow control twice for the same data: Once when a client resets a stream (refunding data for any sent-but-unread portion of the stream), and again when a request handler reads the buffered data. A malicious client can exploit this to bypass the configured connection-level flow control limit (MaxReceiveBufferPerConnection). Total buffered data is still limited by the concurrent stream limit and stream-level flow control.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39822?s=golang&n=stdlib&t=golang&vr=%3C1.25.12"><img alt="high : CVE--2026--39822" src="https://img.shields.io/badge/CVE--2026--39822-lightgrey?label=high%20&labelColor=e25d68"/></a> 

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

<a href="https://scout.docker.com/v/CVE-2026-97032?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="high : CVE--2026--97032" src="https://img.shields.io/badge/CVE--2026--97032-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.490%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>42nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

HTTP/2 servers could end up crashing due to inadvertently modifying its HPACK encoder concurrently. This happens because the server modifies the HPACK encoder from two goroutines without synchronization: one uses the encoder to encode a HEADERS frame as part of a response sent to a client and the other modifies the encoder's table size when handling a SETTINGS frame containing SETTINGS_HEADER_TABLE_SIZE that a client sends. A malicious client can repeatedly send a request while changing the header table size to crash the server.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-97031?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="high : CVE--2026--97031" src="https://img.shields.io/badge/CVE--2026--97031-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.519%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>44th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Multiple ECH outer extension references are not permitted under RFC 9849; previously, a client could send a well-crafted packet that could trigger memory exhaustion in the server process by specifying multiple references.

We now reject these as malformed and curb the memory amplification vector as a result.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-94440?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="high : CVE--2026--94440" src="https://img.shields.io/badge/CVE--2026--94440-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.511%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>43rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Parsing a multipart form can bypass memory limits and read an arbitrarily long line into memory when the remaining limit at the start of a part is less than 400 bytes.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-94439?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="high : CVE--2026--94439" src="https://img.shields.io/badge/CVE--2026--94439-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.414%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>36th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When an HTTP server handler sends a 2xx response to an HTTP/1 CONNECT request and returns without hijacking the connection, the server improperly continues to read and serve requests from the connection. Since a 2xx response to an HTTP/1 CONNECT converts the connection into a tunnel, the server should not treat the connection as continuing to contain HTTP.

The impact of this misbehavior is mostly limited to potential request smuggling, where an intermediate proxy considers the data on the connection to be tunneled and the server considers it to be HTTP.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-78669?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="high : CVE--2026--78669" src="https://img.shields.io/badge/CVE--2026--78669-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.614%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>49th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A malicious HTTP/2 peer can cause excessive CPU consumption in the client or server by opening a large number of streams and then sending many small SETTINGS frames containing SETTINGS_INITIAL_WINDOW_SIZE values.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-78667?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="high : CVE--2026--78667" src="https://img.shields.io/badge/CVE--2026--78667-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.480%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>41st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When parsing a Range header containing a large number of small ranges, FileServer(FS), ServeContent, and ServeFile(FS) can consume an excessive amount of CPU.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-78660?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="high : CVE--2026--78660" src="https://img.shields.io/badge/CVE--2026--78660-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.425%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>37th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Historically, we have been rather lax about malformed framing-related headers in our HTTP/2 implementation, as they cannot interfere with HTTP/2 framing. However, this makes it possible for our HTTP/2 implementation to forward responses containing such headers to an HTTP/1 client when acting as a reverse proxy. If the HTTP/1 client also does not behave strictly enough, this can result in response smuggling.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-78659?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="high : CVE--2026--78659" src="https://img.shields.io/badge/CVE--2026--78659-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.627%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>50th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When "Trailer" headers are sent by a client, the HTTP server internally uses the header values to populate the Request.Trailer map passed to the server handler. Because Request.Trailer is a map, each entry incurs memory overhead. For HTTP/2 servers, a malicious client can exploit this by sending a "Trailer" header that declares a large number of fields, causing the server to allocate a disproportionate amount of memory while bypassing Server.MaxHeaderValueCount and Server.MaxHeaderBytes limits. This exploit is not applicable for HTTP/1 servers, which do not support multiplexing a large number of requests over one TCP connection, and whose Server.MaxHeaderBytes are calculated differently.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-56866?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="high : CVE--2026--56866" src="https://img.shields.io/badge/CVE--2026--56866-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.473%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>41st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When http.Transport sends an HTTP/1 CONNECT request with a non-empty Request.Body, it writes the body directly to the connection without framing after the request headers. If the server rejects the CONNECT request with a non-2xx keep-alive response, Transport returns the connection to the idle pool. Because CONNECT requests do not have a request body, the server may interpret the trailing body bytes as a subsequent pipelined HTTP/1.1 request on the connection, leaving the pooled connection desynchronized and causing the next caller that reuses it to read the response to the injected request. In reverse proxies (including httputil.ReverseProxy) that forward CONNECT requests through a shared Transport, this can lead to cross-user response poisoning.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-56862?s=golang&n=stdlib&t=golang&vr=%3C1.25.13"><img alt="high : CVE--2026--56862" src="https://img.shields.io/badge/CVE--2026--56862-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.13</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.13</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.568%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>47th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Handshake messages, such as KeyUpdate, are always considered as state-advancing, regardless of whether a handshake has been completed or not. As a result, a malicious client can keep sending KeyUpdate messages to force the server to keep performing key derivation operations indefinitely.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-56859?s=golang&n=stdlib&t=golang&vr=%3C1.25.13"><img alt="high : CVE--2026--56859" src="https://img.shields.io/badge/CVE--2026--56859-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.13</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.13</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.568%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>47th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Previously, DecodeElement would reset the depth counter causing it to never fire; this could lead to stack exhaustion.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-56853?s=golang&n=stdlib&t=golang&vr=%3C1.25.13"><img alt="high : CVE--2026--56853" src="https://img.shields.io/badge/CVE--2026--56853-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.13</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.13</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.568%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>47th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When a server is configured to support unencrypted HTTP/2, it reads a few bytes from each new connection to see if they contain the HTTP/2 client preface. ReadHeaderTimeout is unexpectedly not being applied when doing this.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42504?s=golang&n=stdlib&t=golang&vr=%3C1.25.11"><img alt="high : CVE--2026--42504" src="https://img.shields.io/badge/CVE--2026--42504-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.560%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>46th percentile</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>56th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.633%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>50th percentile</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>56th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Well-crafted inputs reaching ParseAddress, ParseAddressList, and ParseDate were able to trigger excessive CPU exhaustion and memory allocations.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33818?s=golang&n=stdlib&t=golang&vr=%3C1.25.13"><img alt="high : CVE--2026--33818" src="https://img.shields.io/badge/CVE--2026--33818-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.13</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.13</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.568%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>47th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Enforce a recursion limit in Unmarshal to prevent stack exhaustion when parsing deeply-nested, recursive structures.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33814?s=golang&n=stdlib&t=golang&vr=%3C1.25.10"><img alt="high : CVE--2026--33814" src="https://img.shields.io/badge/CVE--2026--33814-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.840%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>58th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.875%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>59th percentile</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>50th percentile</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>29th percentile</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>49th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.774%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>56th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.457%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>39th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>2.292%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>83rd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.647%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>51st percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.661%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>51st percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.381%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>32nd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.406%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>35th percentile</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>48th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.738%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>54th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.284%</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>22nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

On Linux, if the target of Root.Chmod is replaced with a symlink while the chmod operation is in progress, Chmod can operate on the target of the symlink, even when the target lies outside the root.

The Linux fchmodat syscall silently ignores the AT_SYMLINK_NOFOLLOW flag, which Root.Chmod uses to avoid symlink traversal. Root.Chmod checks its target before acting and returns an error if the target is a symlink lying outside the root, so the impact is limited to cases where the target is replaced with a symlink between the check and operation.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-97030?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="medium : CVE--2026--97030" src="https://img.shields.io/badge/CVE--2026--97030-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.289%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A trusted template author may have previously written a valid template wherein the use of the 'yield' keyword would not be correctly escaped.

We now ensure that valid keyword uses are escaped and non-keyword uses are not escaped.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-94448?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="medium : CVE--2026--94448" src="https://img.shields.io/badge/CVE--2026--94448-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.289%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When a JavaScript template literal contains consecutive expressions, the context tracking state was not properly reset upon entering a new expression.

We now ensure that template-literal expression entries correctly reset context variables so all subsequent regular expression literals are accurately recognized and escaped.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-56858?s=golang&n=stdlib&t=golang&vr=%3C1.25.13"><img alt="medium : CVE--2026--56858" src="https://img.shields.io/badge/CVE--2026--56858-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.13</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.13</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.310%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>24th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Previously, pathological inputs could close an unescaped '/' early, allowing for attack-controlled data to inject arbitrary content, potentially leading to XSS.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39826?s=golang&n=stdlib&t=golang&vr=%3C1.25.10"><img alt="medium : CVE--2026--39826" src="https://img.shields.io/badge/CVE--2026--39826-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.371%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>31st percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.341%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Actions which insert URLs into the content attribute of HTML meta tags are not escaped. This can allow XSS if the meta tag also has an http-equiv attribute with the value "refresh".

A new GODEBUG setting has been added, htmlmetacontenturlescape, which can be used to disable escaping URLs in actions in the meta content attribute which follow "url=" by setting htmlmetacontenturlescape=0.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-56860?s=golang&n=stdlib&t=golang&vr=%3C1.25.13"><img alt="medium : CVE--2026--56860" src="https://img.shields.io/badge/CVE--2026--56860-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.13</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.13</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.550%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>46th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Previously, resolving relative paths containing parent directory ('..') segments performed string conversions and buffer rewrites on each step, resulting in quadratic time complexity and high memory allocation overhead.

Now, path resolution operates on a byte buffer using index-based backtracking for '..' segments, eliminating the quadratic time complexity and significantly reducing memory allocations.

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
<tr><td>EPSS Percentile</td><td><code>31st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When returning errors, functions in the net/textproto package would include its input as part of the error. This might allow an attacker to inject misleading content to errors that are printed or logged.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42505?s=golang&n=stdlib&t=golang&vr=%3C1.25.12"><img alt="medium : CVE--2026--42505" src="https://img.shields.io/badge/CVE--2026--42505-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.382%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>32nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Handshakes which used Encrypted Client Hello could be de-anonymized by a passive network observer due to a disclosure of pre-shared key identities in the unencrypted client hello.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39825?s=golang&n=stdlib&t=golang&vr=%3C1.25.10"><img alt="medium : CVE--2026--39825" src="https://img.shields.io/badge/CVE--2026--39825-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.390%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>33rd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.324%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>25th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.556%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>46th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.468%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>40th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.565%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>47th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.556%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>46th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.468%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>40th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.443%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>38th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.209%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

On Unix platforms, when listing the contents of a directory using File.ReadDir or File.Readdir the returned FileInfo could reference a file outside of the Root in which the File was opened.

The impact of this escape is limited to reading metadata provided by lstat from arbitrary locations on the filesystem without permitting reading or writing files outside the root.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-111943?s=golang&n=stdlib&t=golang&vr=%3C1.26.10"><img alt="unspecified : CVE--2026--111943" src="https://img.shields.io/badge/CVE--2026--111943-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.299%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>22nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

On most platforms, Go uses the given system root certificates. However, in some narrower cases, the system trust stores may not be updated without further action.

To defend against the narrower set of cases that may remain affected, a denylist was added in crypto/x509 to return an error when calling Verify with any of the known intermediate certificates that are no longer considered to be trustworthy.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 2" src="https://img.shields.io/badge/C-2-8b1924"/> <img alt="high: 9" src="https://img.shields.io/badge/H-9-e25d68"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>stdlib</strong> <code>1.26.8</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.26.8</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.11
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-56857?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="critical : CVE--2026--56857" src="https://img.shields.io/badge/CVE--2026--56857-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.553%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>46th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

On Windows, when the target of Root.Mkdir or Root.MkdirAll is a junction pointing to an empty location, the operation can create a directory at the junction target even when that target is located outside the root. This only applies to operations where the last path component is a junction (path/to/junction, but not path/junction/target).

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-78663?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="critical : CVE--2026--78663" src="https://img.shields.io/badge/CVE--2026--78663-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.622%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>50th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The HTTP/2 server can refund connection-level flow control twice for the same data: Once when a client resets a stream (refunding data for any sent-but-unread portion of the stream), and again when a request handler reads the buffered data. A malicious client can exploit this to bypass the configured connection-level flow control limit (MaxReceiveBufferPerConnection). Total buffered data is still limited by the concurrent stream limit and stream-level flow control.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-97032?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="high : CVE--2026--97032" src="https://img.shields.io/badge/CVE--2026--97032-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.490%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>42nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

HTTP/2 servers could end up crashing due to inadvertently modifying its HPACK encoder concurrently. This happens because the server modifies the HPACK encoder from two goroutines without synchronization: one uses the encoder to encode a HEADERS frame as part of a response sent to a client and the other modifies the encoder's table size when handling a SETTINGS frame containing SETTINGS_HEADER_TABLE_SIZE that a client sends. A malicious client can repeatedly send a request while changing the header table size to crash the server.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-97031?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="high : CVE--2026--97031" src="https://img.shields.io/badge/CVE--2026--97031-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.519%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>44th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Multiple ECH outer extension references are not permitted under RFC 9849; previously, a client could send a well-crafted packet that could trigger memory exhaustion in the server process by specifying multiple references.

We now reject these as malformed and curb the memory amplification vector as a result.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-94440?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="high : CVE--2026--94440" src="https://img.shields.io/badge/CVE--2026--94440-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.511%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>43rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Parsing a multipart form can bypass memory limits and read an arbitrarily long line into memory when the remaining limit at the start of a part is less than 400 bytes.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-94439?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="high : CVE--2026--94439" src="https://img.shields.io/badge/CVE--2026--94439-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.414%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>36th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When an HTTP server handler sends a 2xx response to an HTTP/1 CONNECT request and returns without hijacking the connection, the server improperly continues to read and serve requests from the connection. Since a 2xx response to an HTTP/1 CONNECT converts the connection into a tunnel, the server should not treat the connection as continuing to contain HTTP.

The impact of this misbehavior is mostly limited to potential request smuggling, where an intermediate proxy considers the data on the connection to be tunneled and the server considers it to be HTTP.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-78669?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="high : CVE--2026--78669" src="https://img.shields.io/badge/CVE--2026--78669-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.614%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>49th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A malicious HTTP/2 peer can cause excessive CPU consumption in the client or server by opening a large number of streams and then sending many small SETTINGS frames containing SETTINGS_INITIAL_WINDOW_SIZE values.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-78667?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="high : CVE--2026--78667" src="https://img.shields.io/badge/CVE--2026--78667-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.480%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>41st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When parsing a Range header containing a large number of small ranges, FileServer(FS), ServeContent, and ServeFile(FS) can consume an excessive amount of CPU.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-78660?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="high : CVE--2026--78660" src="https://img.shields.io/badge/CVE--2026--78660-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.425%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>37th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Historically, we have been rather lax about malformed framing-related headers in our HTTP/2 implementation, as they cannot interfere with HTTP/2 framing. However, this makes it possible for our HTTP/2 implementation to forward responses containing such headers to an HTTP/1 client when acting as a reverse proxy. If the HTTP/1 client also does not behave strictly enough, this can result in response smuggling.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-78659?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="high : CVE--2026--78659" src="https://img.shields.io/badge/CVE--2026--78659-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.627%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>50th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When "Trailer" headers are sent by a client, the HTTP server internally uses the header values to populate the Request.Trailer map passed to the server handler. Because Request.Trailer is a map, each entry incurs memory overhead. For HTTP/2 servers, a malicious client can exploit this by sending a "Trailer" header that declares a large number of fields, causing the server to allocate a disproportionate amount of memory while bypassing Server.MaxHeaderValueCount and Server.MaxHeaderBytes limits. This exploit is not applicable for HTTP/1 servers, which do not support multiplexing a large number of requests over one TCP connection, and whose Server.MaxHeaderBytes are calculated differently.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-56866?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="high : CVE--2026--56866" src="https://img.shields.io/badge/CVE--2026--56866-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.473%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>41st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When http.Transport sends an HTTP/1 CONNECT request with a non-empty Request.Body, it writes the body directly to the connection without framing after the request headers. If the server rejects the CONNECT request with a non-2xx keep-alive response, Transport returns the connection to the idle pool. Because CONNECT requests do not have a request body, the server may interpret the trailing body bytes as a subsequent pipelined HTTP/1.1 request on the connection, leaving the pooled connection desynchronized and causing the next caller that reuses it to read the response to the injected request. In reverse proxies (including httputil.ReverseProxy) that forward CONNECT requests through a shared Transport, this can lead to cross-user response poisoning.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-97030?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="medium : CVE--2026--97030" src="https://img.shields.io/badge/CVE--2026--97030-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.289%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A trusted template author may have previously written a valid template wherein the use of the 'yield' keyword would not be correctly escaped.

We now ensure that valid keyword uses are escaped and non-keyword uses are not escaped.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-94448?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="medium : CVE--2026--94448" src="https://img.shields.io/badge/CVE--2026--94448-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.289%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When a JavaScript template literal contains consecutive expressions, the context tracking state was not properly reset upon entering a new expression.

We now ensure that template-literal expression entries correctly reset context variables so all subsequent regular expression literals are accurately recognized and escaped.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-111943?s=golang&n=stdlib&t=golang&vr=%3C1.26.10"><img alt="unspecified : CVE--2026--111943" src="https://img.shields.io/badge/CVE--2026--111943-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.299%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>22nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

On most platforms, Go uses the given system root certificates. However, in some narrower cases, the system trust stores may not be updated without further action.

To defend against the narrower set of cases that may remain affected, a denylist was added in crypto/x509 to return an error when calling Verify with any of the known intermediate certificates that are no longer considered to be trustworthy.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 2" src="https://img.shields.io/badge/C-2-8b1924"/> <img alt="high: 6" src="https://img.shields.io/badge/H-6-e25d68"/> <img alt="medium: 5" src="https://img.shields.io/badge/M-5-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 2" src="https://img.shields.io/badge/U-2-lightgrey"/><strong>golang.org/x/net</strong> <code>0.48.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/net@0.48.0</code></small><br/>

```dockerfile
# mongo-8.dockerfile (121:121)
COPY --from=builder /usr/local/bin/mongo* /usr/local/bin/bsondump /opt/bitnami/mongodb/bin/
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-39821?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.55.0"><img alt="critical : CVE--2026--39821" src="https://img.shields.io/badge/CVE--2026--39821-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.55.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.55.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>1.834%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>79th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The ToASCII and ToUnicode functions incorrectly accept Punycode-encoded labels that decode to an ASCII-only label. For example, ToUnicode("xn--example-.com") incorrectly returns the name "example.com" rather than an error.

This behavior can lead to privilege escalation in programs using the idna package. For example, a program which performs privilege checks on the ASCII hostname may reject "example.com" but permit "xn--example-.com". If that program subsequently converts the ASCII hostname to Unicode, it will inadvertently permits access to the Unicode name "example.com".

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-78663?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.60.0"><img alt="critical : CVE--2026--78663" src="https://img.shields.io/badge/CVE--2026--78663-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.60.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.60.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.622%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>50th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The HTTP/2 server can refund connection-level flow control twice for the same data: Once when a client resets a stream (refunding data for any sent-but-unread portion of the stream), and again when a request handler reads the buffered data. A malicious client can exploit this to bypass the configured connection-level flow control limit (MaxReceiveBufferPerConnection). Total buffered data is still limited by the concurrent stream limit and stream-level flow control.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-97032?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.60.0"><img alt="high : CVE--2026--97032" src="https://img.shields.io/badge/CVE--2026--97032-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.60.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.60.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.490%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>42nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

HTTP/2 servers could end up crashing due to inadvertently modifying its HPACK encoder concurrently. This happens because the server modifies the HPACK encoder from two goroutines without synchronization: one uses the encoder to encode a HEADERS frame as part of a response sent to a client and the other modifies the encoder's table size when handling a SETTINGS frame containing SETTINGS_HEADER_TABLE_SIZE that a client sends. A malicious client can repeatedly send a request while changing the header table size to crash the server.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-78669?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.60.0"><img alt="high : CVE--2026--78669" src="https://img.shields.io/badge/CVE--2026--78669-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.60.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.60.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.614%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>49th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A malicious HTTP/2 peer can cause excessive CPU consumption in the client or server by opening a large number of streams and then sending many small SETTINGS frames containing SETTINGS_INITIAL_WINDOW_SIZE values.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-78660?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.60.0"><img alt="high : CVE--2026--78660" src="https://img.shields.io/badge/CVE--2026--78660-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.60.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.60.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.425%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>37th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Historically, we have been rather lax about malformed framing-related headers in our HTTP/2 implementation, as they cannot interfere with HTTP/2 framing. However, this makes it possible for our HTTP/2 implementation to forward responses containing such headers to an HTTP/1 client when acting as a reverse proxy. If the HTTP/1 client also does not behave strictly enough, this can result in response smuggling.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-78659?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.60.0"><img alt="high : CVE--2026--78659" src="https://img.shields.io/badge/CVE--2026--78659-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.60.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.60.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.627%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>50th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When "Trailer" headers are sent by a client, the HTTP server internally uses the header values to populate the Request.Trailer map passed to the server handler. Because Request.Trailer is a map, each entry incurs memory overhead. For HTTP/2 servers, a malicious client can exploit this by sending a "Trailer" header that declares a large number of fields, causing the server to allocate a disproportionate amount of memory while bypassing Server.MaxHeaderValueCount and Server.MaxHeaderBytes limits. This exploit is not applicable for HTTP/1 servers, which do not support multiplexing a large number of requests over one TCP connection, and whose Server.MaxHeaderBytes are calculated differently.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-46600?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.56.0"><img alt="high : CVE--2026--46600" src="https://img.shields.io/badge/CVE--2026--46600-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.56.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.56.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.549%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>46th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Parsing an invalid SVCB or HTTPS RR can panic when the size of a parameter value overflows the message buffer.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33814?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.53.0"><img alt="high : CVE--2026--33814" src="https://img.shields.io/badge/CVE--2026--33814-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.53.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.53.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.840%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>58th percentile</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>26th percentile</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>14th percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2026-97045?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.62.0"><img alt="unspecified : CVE--2026--97045" src="https://img.shields.io/badge/CVE--2026--97045-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.62.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.62.0</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In childTextNodesAreLiteral, walking up the tree previously stopped at the nearest foreign ancestor once an HTML integration point was found. However, that integration point may itself be a descendant of an element that was foster-parented into a foreign namespace (such as <mglyph> or <malignmark> fostered under <mtext>), causing a parser to resolve the subtree in a different foreign namespace upon re-parsing the rendered output.

Continue walking the full ancestor chain and verify that every transition from a non-empty namespace occurs at an HTML integration point before emitting literal text.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-78661?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.62.0"><img alt="unspecified : CVE--2026--78661" src="https://img.shields.io/badge/CVE--2026--78661-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.62.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.62.0</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When coalescing adjacent text nodes in addText and fosterParent, appending to an existing TextNode's Data via string concatenation (n.Data += text) reallocated and copied the accumulated string on every token. Inputs containing many short text runs separated by ignored end tags (such as "a</x>") caused O(n^2) allocations and byte copies.

Accumulate coalesced text in per-node byte slices during parsing and materialize Data strings once at the end of parse.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 4" src="https://img.shields.io/badge/H-4-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 2" src="https://img.shields.io/badge/U-2-lightgrey"/><strong>golang.org/x/net</strong> <code>0.59.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/net@0.59.0</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.11
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-78663?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.60.0"><img alt="critical : CVE--2026--78663" src="https://img.shields.io/badge/CVE--2026--78663-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.60.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.60.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.622%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>50th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The HTTP/2 server can refund connection-level flow control twice for the same data: Once when a client resets a stream (refunding data for any sent-but-unread portion of the stream), and again when a request handler reads the buffered data. A malicious client can exploit this to bypass the configured connection-level flow control limit (MaxReceiveBufferPerConnection). Total buffered data is still limited by the concurrent stream limit and stream-level flow control.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-97032?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.60.0"><img alt="high : CVE--2026--97032" src="https://img.shields.io/badge/CVE--2026--97032-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.60.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.60.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.490%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>42nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

HTTP/2 servers could end up crashing due to inadvertently modifying its HPACK encoder concurrently. This happens because the server modifies the HPACK encoder from two goroutines without synchronization: one uses the encoder to encode a HEADERS frame as part of a response sent to a client and the other modifies the encoder's table size when handling a SETTINGS frame containing SETTINGS_HEADER_TABLE_SIZE that a client sends. A malicious client can repeatedly send a request while changing the header table size to crash the server.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-78669?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.60.0"><img alt="high : CVE--2026--78669" src="https://img.shields.io/badge/CVE--2026--78669-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.60.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.60.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.614%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>49th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A malicious HTTP/2 peer can cause excessive CPU consumption in the client or server by opening a large number of streams and then sending many small SETTINGS frames containing SETTINGS_INITIAL_WINDOW_SIZE values.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-78660?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.60.0"><img alt="high : CVE--2026--78660" src="https://img.shields.io/badge/CVE--2026--78660-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.60.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.60.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.425%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>37th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Historically, we have been rather lax about malformed framing-related headers in our HTTP/2 implementation, as they cannot interfere with HTTP/2 framing. However, this makes it possible for our HTTP/2 implementation to forward responses containing such headers to an HTTP/1 client when acting as a reverse proxy. If the HTTP/1 client also does not behave strictly enough, this can result in response smuggling.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-78659?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.60.0"><img alt="high : CVE--2026--78659" src="https://img.shields.io/badge/CVE--2026--78659-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.60.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.60.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.627%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>50th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When "Trailer" headers are sent by a client, the HTTP server internally uses the header values to populate the Request.Trailer map passed to the server handler. Because Request.Trailer is a map, each entry incurs memory overhead. For HTTP/2 servers, a malicious client can exploit this by sending a "Trailer" header that declares a large number of fields, causing the server to allocate a disproportionate amount of memory while bypassing Server.MaxHeaderValueCount and Server.MaxHeaderBytes limits. This exploit is not applicable for HTTP/1 servers, which do not support multiplexing a large number of requests over one TCP connection, and whose Server.MaxHeaderBytes are calculated differently.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-97045?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.62.0"><img alt="unspecified : CVE--2026--97045" src="https://img.shields.io/badge/CVE--2026--97045-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.62.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.62.0</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In childTextNodesAreLiteral, walking up the tree previously stopped at the nearest foreign ancestor once an HTML integration point was found. However, that integration point may itself be a descendant of an element that was foster-parented into a foreign namespace (such as <mglyph> or <malignmark> fostered under <mtext>), causing a parser to resolve the subtree in a different foreign namespace upon re-parsing the rendered output.

Continue walking the full ancestor chain and verify that every transition from a non-empty namespace occurs at an HTML integration point before emitting literal text.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-78661?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.62.0"><img alt="unspecified : CVE--2026--78661" src="https://img.shields.io/badge/CVE--2026--78661-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.62.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.62.0</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When coalescing adjacent text nodes in addText and fosterParent, appending to an existing TextNode's Data via string concatenation (n.Data += text) reallocated and copied the accumulated string on every token. Inputs containing many short text runs separated by ignored end tags (such as "a</x>") caused O(n^2) allocations and byte copies.

Accumulate coalesced text in per-node byte slices during parsing and materialize Data strings once at the end of parse.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 3" src="https://img.shields.io/badge/H-3-e25d68"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>js-yaml</strong> <code>3.13.1</code> (npm)</summary>

<small><code>pkg:npm/js-yaml@3.13.1</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.11
```

<br/>

<a href="https://scout.docker.com/v/GHSA-5p4m-2wfm-xmqj?s=github&n=js-yaml&t=npm&vr=%3E%3D3.0.0%2C%3C3.15.1"><img alt="high 7.5: GHSA--5p4m--2wfm--xmqj" src="https://img.shields.io/badge/GHSA--5p4m--2wfm--xmqj-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Inefficient Algorithmic Complexity</i>

<table>
<tr><td>Affected range</td><td><code>>=3.0.0<br/><3.15.1</code></td></tr>
<tr><td>Fixed version</td><td><code>3.15.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

# Quadratic CPU consumption in `!!omap` resolution (js-yaml 3.x and 4.x)

## Summary

`resolveYamlOmap()` enforces key uniqueness for `!!omap` sequences with a linear
scan (`objectKeys.indexOf(...)`) inside the per-element loop, making resolution
**O(n²)** in the number of entries. A modestly sized YAML document therefore
consumes disproportionate CPU inside `yaml.load()`, giving a denial of service
against any consumer that parses untrusted YAML.

`!!omap` is registered in the **default schema**
(`lib/schema/default.js` → `require('../type/omap')`), so a plain
`yaml.load(untrustedInput)` with no options is affected — no custom schema or
non-default configuration is required.

**This is the same weakness as CVE-2026-59870 / GHSA-724g-mxrg-4qvm**, which was
fixed in the 5.x line in 5.2.1. That fix was never backported: both currently
maintained legacy lines still carry the original implementation.

## Affected versions

| Line | Latest tested | Status |
|---|---|---|
| 3.x | **3.15.0** | Affected — `objectKeys.indexOf(pairKey)` at `lib/type/omap.js:29` |
| 4.x | **4.3.0** | Affected — `objectKeys.indexOf(pairKey)` at `lib/type/omap.js:30` |
| 5.x | 5.2.2 | **Not affected** — fixed in 5.2.1 (uses a `Set`) |

Both figures are the newest release of each line at the time of writing, so
this is not a "you are on an old version" issue.

## Details

`lib/type/omap.js` (js-yaml 4.3.0):

```js
if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey)
else return false
```

`objectKeys` grows by one element per entry, and `Array.prototype.indexOf` is a
linear scan, so resolving an `n`-entry `!!omap` performs roughly
`1 + 2 + … + n` comparisons — quadratic in `n`. The work happens synchronously
inside `yaml.load()`, blocking the event loop for its whole duration.

The 5.x line already solves exactly this by tracking seen keys in a `Set`
(`src/tag/sequence/omap.ts`):

```ts
if (carrier.seen.has(key)) return 'duplicate key in ordered map'
carrier.seen.add(key)
```

## Proof of concept

```js
// poc.js  —  node poc.js
const yaml = require('js-yaml');
const doc = n => '!!omap\n' + Array.from({length: n}, (_, i) => `- k${i}: ${i}`).join('\n') + '\n';

for (const n of [10000, 20000, 40000, 80000]) {
  const d = doc(n), t = Date.now();
  yaml.load(d);                      // default schema, no options
  console.log(`n=${n} bytes=${d.length} load=${Date.now() - t}ms`);
}
```

### Measured (node v20.20.2, default heap, no flags)

**js-yaml 4.3.0**

```
n=10000  bytes=137787   load=54ms
n=20000  bytes=297787   load=169ms
n=40000  bytes=617787   load=646ms
n=80000  bytes=1257787  load=2607ms
```

**js-yaml 3.15.0**

```
n=10000  bytes=137787   load=53ms
n=20000  bytes=297787   load=166ms
n=40000  bytes=617787   load=641ms
n=80000  bytes=1257787  load=2567ms
```

Runtime grows by a factor of ~4 for each doubling of `n`, which is the
signature of O(n²) (linear growth would be ~2×).

Scaling further: a **2.48 MB** document with 150,000 entries blocked
`yaml.load()` for **10.8 seconds**.

## Impact

Any service that parses attacker-influenced YAML with js-yaml 3.x or 4.x can be
stalled with a small input. Because the loop is synchronous, a single request
blocks the Node.js event loop and stalls every other request in the process —
so the amplification is per-process, not just per-request.

Suggested severity: consistent with **CVE-2026-59870** (the same weakness in
5.x), i.e. Availability-only impact, network attack vector, no privileges or
user interaction required.

## Suggested fix

Mirror the 5.x fix — replace the linear scan with a `Set`:

```js
// lib/type/omap.js
const seen = new Set()
// ...
if (seen.has(pairKey)) return false
seen.add(pairKey)
```

This preserves the existing duplicate-key rejection semantics exactly while
making resolution O(n). A `maxOmapLength`-style cap would also work, but the
`Set` matches what 5.x already ships and requires no new option.

## References

- CVE-2026-59870 / GHSA-724g-mxrg-4qvm — same weakness in 5.0.0–5.2.0, fixed in 5.2.1
- `lib/type/omap.js` (3.x, 4.x) — the affected resolver
- `lib/schema/default.js` — registers `!!omap` in the default schema

## Discovery

Found by an automated static-analysis and executed-proof-of-concept scanner run
against js-yaml 4.2.0, then manually verified against 3.15.0 and 4.3.0 by
executing the proof of concept above. All timings in this report were measured
on the **current** releases of each line, not on the version originally scanned.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-84375?s=github&n=js-yaml&t=npm&vr=%3E%3D3.0.0%2C%3C3.15.2"><img alt="high 7.5: CVE--2026--84375" src="https://img.shields.io/badge/CVE--2026--84375-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Uncontrolled Resource Consumption</i>

<table>
<tr><td>Affected range</td><td><code>>=3.0.0<br/><3.15.2</code></td></tr>
<tr><td>Fixed version</td><td><code>3.15.2</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.541%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>45th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

## Summary

`maxTotalMergeKeys` does not count empty mappings. An attacker can repeatedly merge a large sequence of them and consume significant CPU without reaching the configured limit.

## Example

```yaml
arr: &arr [{}, {}, {}, ...] # N empty mappings
targets:
  - <<: *arr                # repeated K times
```

For every target, the loader iterates all `N` elements of `arr`. This results in `O(N * K)` work while `totalMergeKeys` remains unchanged.

## PoC

```js
import { performance } from 'node:perf_hooks'
import { load, YAML11_SCHEMA } from 'js-yaml'

const n = 20000

const src =
  'arr: &arr [' + '{},'.repeat(n).slice(0, -1) + ']\n' +
  'targets:\n' +
  '  - <<: *arr\n'.repeat(n)

const started = performance.now()

load(src, { schema: YAML11_SCHEMA })

console.log(`${(performance.now() - started).toFixed(1)} ms`)
```

Observed results:

| N | YAML size | Time |
|---:|---:|---:|
| 800 | ~13 KB | ~20 ms |
| 3200 | ~50 KB | ~180 ms |
| 20000 | ~500 KB | ~13 s |

## Impact

An attacker can submit a relatively small YAML document that causes prolonged CPU consumption despite the default `maxTotalMergeKeys` limit.

## Fix

Count each merge-source mapping as one budget unit, in addition to counting its keys.

## Difference with v5

In v3 & v4, merge is enabled by default. So, the severity score is higher.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-59869?s=github&n=js-yaml&t=npm&vr=%3E%3D3.0.0%2C%3C3.15.0"><img alt="high 7.5: CVE--2026--59869" src="https://img.shields.io/badge/CVE--2026--59869-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Uncontrolled Resource Consumption</i>

<table>
<tr><td>Affected range</td><td><code>>=3.0.0<br/><3.15.0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.15.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.585%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>48th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.415%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>36th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.423%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>36th percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 2" src="https://img.shields.io/badge/H-2-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/text</strong> <code>0.33.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/text@0.33.0</code></small><br/>

```dockerfile
# mongo-8.dockerfile (121:121)
COPY --from=builder /usr/local/bin/mongo* /usr/local/bin/bsondump /opt/bitnami/mongodb/bin/
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-56852?s=golang&n=text&ns=golang.org%2Fx&t=golang&vr=%3C0.39.0"><img alt="high : CVE--2026--56852" src="https://img.shields.io/badge/CVE--2026--56852-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.39.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.39.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.475%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>41st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A norm.Iter can enter an infinite loop when handling input containing invalid UTF-8 bytes.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-56851?s=golang&n=text&ns=golang.org%2Fx&t=golang&vr=%3C0.41.0"><img alt="high : CVE--2026--56851" src="https://img.shields.io/badge/CVE--2026--56851-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.41.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.41.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.466%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>40th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Nickname profile can panic with an out-of-bounds slice error when transforming crafted input into a short destination buffer.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>brotli</strong> <code>1.1.0-2build2</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/brotli@1.1.0-2build2?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.11
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-111497?s=ubuntu&n=brotli&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C1.1.0-2ubuntu0.1"><img alt="high : CVE--2026--111497" src="https://img.shields.io/badge/CVE--2026--111497-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.1.0-2ubuntu0.1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.1.0-2ubuntu0.1</code></td></tr>
<tr><td>EPSS Score</td><td><code>55.483%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>99th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A buffer overflow vulnerability in the Brotli decoder (c/dec/decode.c) in Google Brotli versions 1.0.3 through 1.2.0 on all platforms allows a remote unauthenticated attacker to corrupt adjacent decoder state memory, disclose sensitive memory contents, cause a denial of service, or potentially execute arbitrary code using a crafted Brotli-compressed stream.      Users need to update any Brotli libraries or binaries between 1.0.3 through 1.2.0 to the latest available version: 1.0.10 or 1.1.1 or 1.2.1.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/klauspost/compress</strong> <code>1.17.8</code> (golang)</summary>

<small><code>pkg:golang/github.com/klauspost/compress@1.17.8</code></small><br/>

```dockerfile
# mongo-8.dockerfile (121:121)
COPY --from=builder /usr/local/bin/mongo* /usr/local/bin/bsondump /opt/bitnami/mongodb/bin/
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-63209?s=github&n=compress&ns=github.com%2Fklauspost&t=golang&vr=%3C%3D1.18.6"><img alt="high 7.5: CVE--2026--63209" src="https://img.shields.io/badge/CVE--2026--63209-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Integer Overflow or Wraparound</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=1.18.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.18.7</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.501%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>43rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

# Signed Integer Overflow in s2.NewDict

## Summary

A signed integer overflow vulnerability in `s2.NewDict()` allows an attacker to bypass repeat index validation by supplying a dictionary with a uvarint-encoded repeat value exceeding `MaxInt64`. When `Dict.Encode()` is subsequently called, the overflowed negative repeat value causes an out-of-bounds memory access via `unsafe.Pointer` arithmetic, crashing the process with SIGSEGV.

## Package

- **Name:** `github.com/klauspost/compress/s2`
- **Ecosystem:** Go
- **Affected versions:** <= v1.18.6 (all versions with `NewDict` function)

## Severity

**High (7.5)** — CVSS v3.1: `AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H`

## Vulnerability

### Type
- CWE-190: Integer Overflow or Wraparound
- CWE-787: Out-of-bounds Write (via unsafe.Pointer)

### Description

The `NewDict()` function reads a uvarint from dictionary data and converts it to `int`:

```go
r, n := binary.Uvarint(dict)
// ...
d.repeat = int(r)
if d.repeat > len(dict) {
    return nil
}
```

When `r` exceeds `MaxInt64` (9223372036854775807), `int(r)` overflows to a negative value. Since a negative number is never greater than a positive length, the validation check is bypassed.

When `Dict.Encode()` is called, the negative `repeat` value causes an integer overflow in `encodeBlockDictGo()`:

```go
repeat := len(dict.dict) - dict.repeat  // overflows: 62 - (-5758978476775341977) = huge positive
candidate := len(dict.dict) - repeat + s // underflows to negative
load32(dict.dict, candidate)             // OOB via unsafe.Pointer
```

`load32` calls `le.Load32` which uses `unsafe.Pointer` arithmetic without bounds checking:

```go
func Load32[I Indexer](b []byte, i I) uint32 {
    return *(*uint32)(unsafe.Add(unsafe.Pointer(unsafe.SliceData(b)), i))
}
```

This causes a segmentation fault (SIGSEGV) when the negative index is dereferenced.

## PoC

```go
package main

import (
    "encoding/binary"
    "fmt"
    "github.com/klauspost/compress/s2"
)

func main() {
    var dictData []byte
    buf := make([]byte, binary.MaxVarintLen64)
    n := binary.PutUvarint(buf, 12687765596934209639) // > MaxInt64
    dictData = append(dictData, buf[:n]...)
    dictData = append(dictData, make([]byte, 16)...) // minimum dict size

    dict := s2.NewDict(dictData)
    // dict is non-nil despite invalid repeat value (overflow bypassed validation)

    src := make([]byte, 64)
    for i := range src { src[i] = byte(i) }
    dict.Encode(nil, src) // SIGSEGV: OOB access via unsafe.Pointer
}
```

## Impact

- **Denial of Service:** The process crashes immediately with SIGSEGV

## Attack Vector

Any application that:
1. Accepts user-supplied S2 dictionary data via `s2.NewDict()`
2. Calls `Dict.Encode()` on any data ≥32 bytes

## Suggested Fix

Validate the uvarint value before converting to int:

```go
if r > math.MaxInt64 {
    return nil
}
d.repeat = int(r)
```

Or use `uint` for the repeat field and validate against `uint(len(dict))`.

## References

- Source: `s2/dict.go` lines 59-61 (vulnerability), `s2/encode_all.go` line 947 (crash site)
- Commit: 539243b (v1.18.6 + 4 commits)

## Credits
Christopher Linke / https://github.com/celinke97/

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 7" src="https://img.shields.io/badge/M-7-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>pcre2</strong> <code>10.42-4ubuntu2.1</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/pcre2@10.42-4ubuntu2.1?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.11
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-89161?s=ubuntu&n=pcre2&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium 7.8: CVE--2026--89161" src="https://img.shields.io/badge/CVE--2026--89161-lightgrey?label=medium%207.8&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>7.8</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.126%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In PCRE2 before 10.48, pcre2_jit_match mishandles a previously copied subject being passed in as a context. An incorrect free operation can occur.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-89157?s=ubuntu&n=pcre2&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium 7.4: CVE--2026--89157" src="https://img.shields.io/badge/CVE--2026--89157-lightgrey?label=medium%207.4&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>7.4</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:H/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.348%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>28th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

PCRE2 before 10.48, on 32-bit platforms, has a pcre2_pattern_convert out-of-bounds write when an attacker can provide a large pattern.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-89160?s=ubuntu&n=pcre2&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium 6.5: CVE--2026--89160" src="https://img.shields.io/badge/CVE--2026--89160-lightgrey?label=medium%206.5&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>6.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.268%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>19th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

PCRE2 before 10.48 has a pcre2_match out-of-bounds read during the PCRE2_MATCH_INVALID_UTF matching of an invalid UTF subject.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-89158?s=ubuntu&n=pcre2&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium 6.5: CVE--2026--89158" src="https://img.shields.io/badge/CVE--2026--89158-lightgrey?label=medium%206.5&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>6.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:H/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.247%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

PCRE2 before 10.48, on 32-bit platforms, has a pcre2_compile_32 integer overflow and resultant out-of-bounds write.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-89156?s=ubuntu&n=pcre2&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium 5.9: CVE--2026--89156" src="https://img.shields.io/badge/CVE--2026--89156-lightgrey?label=medium%205.9&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>5.9</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.294%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>22nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

PCRE2 before 10.48 has a pcre2_match out-of-bounds read after a JIT fallback when an attacker can provide invalid UTF data.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-86145?s=ubuntu&n=pcre2&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium : CVE--2026--86145" src="https://img.shields.io/badge/CVE--2026--86145-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.425%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>37th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

PCRE2 before 10.48 allows a pcre2_dfa_match out-of-bounds write because reuse of a cached workspace block, in a recursive DFA matching workspace, lacks a size check (even though a newly allocated block, for the same purpose, does have a size check). This outcome requires an attacker-controlled regular expression, or a recursive pattern in conjunction with a small heap limit (this can be set through the API).

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-103111?s=ubuntu&n=pcre2&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium : CVE--2026--103111" src="https://img.shields.io/badge/CVE--2026--103111-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.269%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>19th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

PCRE2 before 10.49, when there is an attacker-controlled regular expression and certain JIT API usage, allows an out-of-bounds write with arbitrary data.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 6" src="https://img.shields.io/badge/M-6-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>gnutls28</strong> <code>3.8.3-1.1ubuntu3.6</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/gnutls28@3.8.3-1.1ubuntu3.6?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.11
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-95210?s=ubuntu&n=gnutls28&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium : CVE--2026--95210" src="https://img.shields.io/badge/CVE--2026--95210-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.156%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Improper certificate validation in gnutls v3.8.13 causes the application to accept certificates containing invalid extensions.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-95209?s=ubuntu&n=gnutls28&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium : CVE--2026--95209" src="https://img.shields.io/badge/CVE--2026--95209-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.241%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>15th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An issue in gnutls v3.8.13 causes legitimate CA certificates to be rejected, leading to a Denial of Service (DoS).

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-95184?s=ubuntu&n=gnutls28&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium : CVE--2026--95184" src="https://img.shields.io/badge/CVE--2026--95184-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.165%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Improper certificate validation in gnutls v3.8.13 causes the application to reject legitimate certificates for valid users, leading to a Denial of Service (DoS).

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-88648?s=ubuntu&n=gnutls28&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium : CVE--2026--88648" src="https://img.shields.io/badge/CVE--2026--88648-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.203%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>10th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Incomplete X.509 implementation in GnuTLS v3.8.13 allows attackers controlling a subordinate Certificate Authority to bypass cross-domain PKI restrictions and issue unauthorized certificates.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-88647?s=ubuntu&n=gnutls28&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium : CVE--2026--88647" src="https://img.shields.io/badge/CVE--2026--88647-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.208%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A hostname verification bypass in GnuTLS v3.8.13 allows attackers to circumvent the Common Name fallback mechanism and eavesdrop on communications via a crafted certificate.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-67693?s=ubuntu&n=gnutls28&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium : CVE--2026--67693" src="https://img.shields.io/badge/CVE--2026--67693-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.151%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An issue in gnutls v.3.8.13 allows an attacker to obtain sensitive information via failing to reject end-entity X.509 certificates that contain a contradictory combination of Key Usage (KU) and Extended Key Usage (EKU)

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 5" src="https://img.shields.io/badge/M-5-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>jq</strong> <code>1.7.1-3ubuntu0.24.04.2</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/jq@1.7.1-3ubuntu0.24.04.2?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.11
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-44777?s=ubuntu&n=jq&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium 5.5: CVE--2026--44777" src="https://img.shields.io/badge/CVE--2026--44777-lightgrey?label=medium%205.5&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>5.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.161%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>dash</strong> <code>0.5.12-6ubuntu5</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/dash@0.5.12-6ubuntu5?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.11
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-102474?s=ubuntu&n=dash&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium : CVE--2026--102474" src="https://img.shields.io/badge/CVE--2026--102474-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.113%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in dash. The printf builtin reserves four bytes before converting a Unicode \u or \U escape, but the multi-byte token can need five or six bytes. A local user who can supply such an escape to dash printf or echo %b, including through dash -c and a positional argument, can write one or two bytes past that reservation.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-102473?s=ubuntu&n=dash&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium : CVE--2026--102473" src="https://img.shields.io/badge/CVE--2026--102473-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.102%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in dash. When built without libc fnmatch, the internal pmatch() matcher implements * by unbounded recursion over candidate positions. A local user who can plant filenames, or otherwise feed that matcher, can make a short multi-star pattern such as *.*.*.*.*.tar.gz consume excessive CPU.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>glibc</strong> <code>2.39-0ubuntu8.9</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/glibc@2.39-0ubuntu8.9?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.11
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-89092?s=ubuntu&n=glibc&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium : CVE--2026--89092" src="https://img.shields.io/badge/CVE--2026--89092-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.240%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>15th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The nscd service in the GNU C Library 2.3.4 onwards may crash due to a stack overflow when a malicious DNS server returns too large a response for a DNS query, resulting in degraded DNS resolution for the system.    Exploitation of this bug needs a system that has nscd enabled and using an untrusted DNS server for name resolution, with the compromised DNS server being capable of processing records large enough to result in a stack overflow in an nscd thread stack.  During experimentation, bind 9 was unable to handle large records, but that could change in future or with a different name server.  In typical installations, nscd is executed in an isolated context as its own user without a shell, due to which any compromise of that service is isolated.    There is a remote possibility of nscd cache corruption if an attacker manages to get the stack pointer into a desired point in the heap, potentially resulting in other caches in nscd being overwritten with corrupt data through the stack overflow, until the buggy code path eventually results in a crash.    Finally, a crash in nscd may result in performance degradation when resolving names, but it does not result in a denial of service.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-18374?s=ubuntu&n=glibc&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium : CVE--2026--18374" src="https://img.shields.io/badge/CVE--2026--18374-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.144%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Passing an effectively empty string to the `,ccs=` syntax extension of the mode argument in the `fopen` function in the GNU C Library version 2.45 or earlier may result in a heap buffer overflow when the mode string input to the function is attacker controlled.    This usage pattern is not seen in applications in common GNU/Linux distributions and applications that process user-supplied values for `ccs` should not pass them through without validation.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>tar</strong> <code>1.35+dfsg-3ubuntu0.4</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/tar@1.35%2Bdfsg-3ubuntu0.4?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.11
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-18508?s=ubuntu&n=tar&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium : CVE--2026--18508" src="https://img.shields.io/badge/CVE--2026--18508-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.141%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in GNU tar. When extracting an archive with the --one-top-level option, hardlink targets are not confined to the designated top-level directory and may resolve relative to the extraction working directory. A crafted archive can create hardlinks that escape the intended boundary and, when combined with a preexisting symbolic link under the working directory, may allow writing outside that boundary during a single extraction.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-18477?s=ubuntu&n=tar&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium : CVE--2026--18477" src="https://img.shields.io/badge/CVE--2026--18477-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.080%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>0th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A TOCTOU (Time-of-Check Time-of-Use) vulnerability in GNU tar's incremental dumpdir 'X' rename handling allows a local attacker with write access to a directory being backed up to influence the restore process if the attacker has access to the system where the restore is being performed. During restoration, files or directories may be created, renamed or overwritten outside the intended extraction directory. This could lead to unauthorized file modification or, in some cases, privilege escalation. Exploitation does not require the attacker to modify or craft the archive, and standard backup and restore workflows—including extracting into a newly created directory without using the -P option do not mitigate the issue.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>dpkg</strong> <code>1.22.6ubuntu6.6</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/dpkg@1.22.6ubuntu6.6?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.11
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-2219?s=ubuntu&n=dpkg&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium : CVE--2026--2219" src="https://img.shields.io/badge/CVE--2026--2219-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.435%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>38th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

It was discovered that dpkg-deb (a component of dpkg, the Debian package management system) does not properly validate the end of the data stream when uncompressing a zstd-compressed .deb archive, which may result in denial of service (infinite loop spinning the CPU).

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>zlib</strong> <code>1:1.3.dfsg-3.1ubuntu2.2</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/zlib@1%3A1.3.dfsg-3.1ubuntu2.2?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.11
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-85091?s=ubuntu&n=zlib&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C1%3A1.3.dfsg-3.1ubuntu2.3"><img alt="medium : CVE--2026--85091" src="https://img.shields.io/badge/CVE--2026--85091-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1:1.3.dfsg-3.1ubuntu2.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1:1.3.dfsg-3.1ubuntu2.3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.469%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>40th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

zlib versions 1.3.1.2 through 1.3.2 contain a heap buffer overflow vulnerability in the gz_vacate() function when processing non-blocking gzwrite() operations with stale external buffer pointers. Attackers can trigger the overflow by calling gzprintf() or gzvprintf() after a write stall, causing an unchecked memmove() to write beyond the internal input buffer boundary.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>expat</strong> <code>2.6.1-2ubuntu0.6</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/expat@2.6.1-2ubuntu0.6?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

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
<tr><td>EPSS Score</td><td><code>0.203%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>10th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In libexpat through 2.7.3, a crafted file with an approximate size of 2 MiB can lead to dozens of seconds of processing time.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>go.mongodb.org/mongo-driver</strong> <code>1.17.3</code> (golang)</summary>

<small><code>pkg:golang/go.mongodb.org/mongo-driver@1.17.3</code></small><br/>

```dockerfile
# mongo-8.dockerfile (121:121)
COPY --from=builder /usr/local/bin/mongo* /usr/local/bin/bsondump /opt/bitnami/mongodb/bin/
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-2303?s=github&n=mongo-driver&ns=go.mongodb.org&t=golang&vr=%3C1.17.7"><img alt="medium 6.9: CVE--2026--2303" src="https://img.shields.io/badge/CVE--2026--2303-lightgrey?label=medium%206.9&labelColor=fbb552"/></a> <i>Permissive List of Allowed Inputs</i>

<table>
<tr><td>Affected range</td><td><code>&lt;1.17.7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.17.7</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.9</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:L/UI:P/VC:N/VI:H/VA:N/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.318%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>25th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The mongo-go-driver repository contains CGo bindings for GSSAPI (Kerberos) authentication on Linux and macOS. The C wrapper implementation contains a heap out-of-bounds read vulnerability due to incorrect assumptions about string termination in the GSSAPI standard. Since GSSAPI buffers are not guaranteed to be null-terminated or have extra padding, this results in reading one byte past the allocated heap buffer.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>cyrus-sasl2</strong> <code>2.1.28+dfsg1-5ubuntu3.1</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/cyrus-sasl2@2.1.28%2Bdfsg1-5ubuntu3.1?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.11
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-107161?s=ubuntu&n=cyrus-sasl2&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium : CVE--2026--107161" src="https://img.shields.io/badge/CVE--2026--107161-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.337%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A heap-based buffer overflow flaw was found in Cyrus SASL. The add_to_challenge() function in the DIGEST-MD5 plugin computes the size of the buffer needed for a challenge/response field before DIGEST-MD5 quoting is applied, but does not recompute that size when quoting (escaping special characters) makes the value longer. The under-sized buffer is then passed to strcat(), causing a heap-based out-of-bounds write whose size depends on attacker-controlled input. A malicious or on-path DIGEST-MD5 (or HTTP Digest) server can trigger this flaw in a connecting client by supplying a crafted challenge field, such as realm or nonce, most likely resulting in a crash of the client application.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/moby/sys/user</strong> <code>0.1.0</code> (golang)</summary>

<small><code>pkg:golang/github.com/moby/sys/user@0.1.0</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.11
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-61801?s=github&n=user&ns=github.com%2Fmoby%2Fsys&t=golang&vr=%3C%3D0.4.0"><img alt="medium 5.5: CVE--2026--61801" src="https://img.shields.io/badge/CVE--2026--61801-lightgrey?label=medium%205.5&labelColor=fbb552"/></a> <i>Uncontrolled Resource Consumption</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=0.4.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.4.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.117%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A denial-of-service (DoS) vulnerability exists in `github.com/moby/sys/user` before v0.4.1 when parsing specially crafted user or group database files. An attacker able to supply a malicious `/etc/passwd` or `/etc/group`-style file may cause excessive memory consumption, potentially resulting in process termination due to Out Of Memory (OOM) conditions.

This issue is related to containerd [CVE-2026-47262] / [GHSA-jpcc-p29g-p8mq](https://github.com/containerd/containerd/security/advisories/GHSA-jpcc-p29g-p8mq), which describes one practical exploitation path through processing untrusted container image content. Applications using `github.com/moby/sys/user` to parse untrusted user or group database files may be similarly affected.

### Impact

`github.com/moby/sys/user` versions before v0.4.1 do not place sufficient limits on entries while parsing user and group database files. A specially crafted file may cause excessive memory consumption, potentially leading to process termination due to Out Of Memory (OOM) conditions.

Applications that use `github.com/moby/sys/user` to parse user-supplied or otherwise untrusted `/etc/passwd` or `/etc/group` files may be affected. The severity depends on whether an attacker can influence the contents of files being parsed.

### Patches

This issue is fixed in `github.com/moby/sys/user` v0.4.1. Users should upgrade to v0.4.1 or later.

### Workarounds

Avoid parsing attacker-controlled `/etc/passwd` or `/etc/group`-style files with affected versions of `github.com/moby/sys/user`.

Applications that must process untrusted user or group database files should validate and limit accepted input before parsing. Upgrading to v0.4.1 or later is the recommended remediation.

### References

* containerd CVE-2026-47262 / GHSA-jpcc-p29g-p8mq: https://github.com/containerd/containerd/security/advisories/GHSA-jpcc-p29g-p8mq
* Fix in `github.com/moby/sys/user`: https://github.com/moby/sys/user/commit/210d32ba2bcb4544ee968c7f31249fe59796e60b

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 9" src="https://img.shields.io/badge/L-9-fce1a9"/> <!-- unspecified: 0 --><strong>curl</strong> <code>8.5.0-2ubuntu10.15</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/curl@8.5.0-2ubuntu10.15?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.11
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-94266?s=ubuntu&n=curl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C8.5.0-2ubuntu10.16"><img alt="low : CVE--2026--94266" src="https://img.shields.io/badge/CVE--2026--94266-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.5.0-2ubuntu10.16</code></td></tr>
<tr><td>Fixed version</td><td><code>8.5.0-2ubuntu10.16</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.237%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>15th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

libcurl could accidentally return a URL for `curl_easy_getinfo()`'s `CURLINFO_EFFECTIVE_URL` option containing credentials, even though neither the URL provided to libcurl nor the redirected URL did.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-92391?s=ubuntu&n=curl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C8.5.0-2ubuntu10.16"><img alt="low : CVE--2026--92391" src="https://img.shields.io/badge/CVE--2026--92391-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.5.0-2ubuntu10.16</code></td></tr>
<tr><td>Fixed version</td><td><code>8.5.0-2ubuntu10.16</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.358%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>29th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A deeply nested multipart MIME structure constructed via the public API causes a stack overflow in libcurl during normal cleanup operations. An excessive recursion depth within `curl_mime_free` leads to unbounded stack frame allocation during structure traversal, ultimately crashing the host process.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-92389?s=ubuntu&n=curl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C8.5.0-2ubuntu10.16"><img alt="low : CVE--2026--92389" src="https://img.shields.io/badge/CVE--2026--92389-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.5.0-2ubuntu10.16</code></td></tr>
<tr><td>Fixed version</td><td><code>8.5.0-2ubuntu10.16</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.257%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>17th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

libcurl's TFTP state machine fails to validate state transitions against the requested transfer direction, accepting opening server responses for both reads and writes interchangeably. A malicious TFTP server can respond to a download request in a way that forces the client into transmit mode, prompting libcurl to consume and transmit data from the handle's persistent `CURLOPT_READDATA` pointer - including data remaining from unrelated prior operations, such as an HTTP POST request executed on a reused handle.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-92388?s=ubuntu&n=curl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C8.5.0-2ubuntu10.16"><img alt="low : CVE--2026--92388" src="https://img.shields.io/badge/CVE--2026--92388-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.5.0-2ubuntu10.16</code></td></tr>
<tr><td>Fixed version</td><td><code>8.5.0-2ubuntu10.16</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.257%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>17th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When an FTP wildcard `LIST` operation fails, libcurl omits the restoration path meant for successful listings, leaving the write callback set to the internal listing parser and the write callback data pointing directly to the easy handle. Subsequent reuse of this handle triggers an immediate crash, and cloning it via `curl_easy_duphandle()` copies this corrupted state into the duplicate. If the original handle is subsequently freed, executing a transfer on the cloned handle causes a heap use-after-free read against the dangling handle reference; alternatively, reusing the original or cloned handle while changing only  `CURLOPT_WRITEDATA` (and omitting `CURLOPT_WRITEFUNCTION`) results in type confusion, forcing the internal parser to interpret incoming server response bytes into memory at the application-supplied write data pointer.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-87864?s=ubuntu&n=curl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C8.5.0-2ubuntu10.16"><img alt="low : CVE--2026--87864" src="https://img.shields.io/badge/CVE--2026--87864-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.5.0-2ubuntu10.16</code></td></tr>
<tr><td>Fixed version</td><td><code>8.5.0-2ubuntu10.16</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.221%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>13th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Enabling `CURLOPT_CRLF` causes curl to advertise the raw input byte count in the `IMAP APPEND {N}` literal while transmitting line-ending expanded data. The server reads only $N$ bytes for the payload, causing the remaining overflow bytes to be interpreted and executed as pipelined IMAP commands within the authenticated session.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-87863?s=ubuntu&n=curl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C8.5.0-2ubuntu10.16"><img alt="low : CVE--2026--87863" src="https://img.shields.io/badge/CVE--2026--87863-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.5.0-2ubuntu10.16</code></td></tr>
<tr><td>Fixed version</td><td><code>8.5.0-2ubuntu10.16</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.266%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An authenticated HTTPS origin can supply an HSTS `max-age` value that the parser accepts, but time serialization later fails to process. On 64-bit systems, extreme max-age values compute an absolute expiry within standard time integer limits that exceeds calendar time structure bounds. During cache saves, the original HSTS file is truncated before writing a temporary replacement; when serialization fails, the temporary file is deleted, leaving an empty or partial cache. Because the save error is silently ignored during cleanup, curl exits successfully despite the data loss.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-87862?s=ubuntu&n=curl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C8.5.0-2ubuntu10.16"><img alt="low : CVE--2026--87862" src="https://img.shields.io/badge/CVE--2026--87862-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.5.0-2ubuntu10.16</code></td></tr>
<tr><td>Fixed version</td><td><code>8.5.0-2ubuntu10.16</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.314%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>24th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Importing a `includeSubDomains` parent HSTS entry before a longer-lived child entry, silently drops the child. Consequently, when the parent expires, the child's valid HSTS policy is lost, causing curl to issue unencrypted HTTP requests rather than upgrading to HTTPS.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-86414?s=ubuntu&n=curl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C8.5.0-2ubuntu10.16"><img alt="low : CVE--2026--86414" src="https://img.shields.io/badge/CVE--2026--86414-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.5.0-2ubuntu10.16</code></td></tr>
<tr><td>Fixed version</td><td><code>8.5.0-2ubuntu10.16</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.266%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An HTTP proxy can trick libcurl into sending the origin's credentials (Basic password, or a Negotiate/Kerberos ticket) to the proxy itself, by answering the `CONNECT` tunnel request with 401 `WWW-Authenticate:` instead of the expected 407 `Proxy-Authenticate:`.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-86409?s=ubuntu&n=curl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C8.5.0-2ubuntu10.16"><img alt="low : CVE--2026--86409" src="https://img.shields.io/badge/CVE--2026--86409-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.5.0-2ubuntu10.16</code></td></tr>
<tr><td>Fixed version</td><td><code>8.5.0-2ubuntu10.16</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.313%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>24th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Setting `CURLOPT_AWS_SIGV4` to NULL but does not disable SigV4 authentication, contrary to expectations and documentation. A subsequent transfer on the same handle still sends an `Authorization: AWS4-HMAC-SHA256` header to whatever URL isset next, leaking state information.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>shadow</strong> <code>1:4.13+dfsg1-4ubuntu3.2</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/shadow@1%3A4.13%2Bdfsg1-4ubuntu3.2?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.11
```

<br/>

<a href="https://scout.docker.com/v/CVE-2024-56433?s=ubuntu&n=shadow&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="low : CVE--2024--56433" src="https://img.shields.io/badge/CVE--2024--56433-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.426%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>37th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

shadow-utils (aka shadow) 4.4 through 4.17.0 establishes a default /etc/subuid behavior (e.g., uid 100000 through 165535 for the first user account) that can realistically conflict with the uids of users defined on locally administered networks, potentially leading to account takeover, e.g., by leveraging newuidmap for access to an NFS home directory (or same-host resources in the case of remote logins by these local network users). NOTE: it may also be argued that system administrators should not have assigned uids, within local networks, that are within the range that can occur in /etc/subuid.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>systemd</strong> <code>255.4-1ubuntu8.17</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/systemd@255.4-1ubuntu8.17?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.11
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>golang.org/x/sys</strong> <code>0.33.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/sys@0.33.0</code></small><br/>

```dockerfile
# mongo-8.dockerfile (118:118)
RUN mkdir -p /opt/bitnami/mongodb
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-39824?s=golang&n=sys&ns=golang.org%2Fx&t=golang&vr=%3C0.44.0"><img alt="low : CVE--2026--39824" src="https://img.shields.io/badge/CVE--2026--39824-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.44.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.44.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.114%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
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
# mongo-8.dockerfile (121:121)
COPY --from=builder /usr/local/bin/mongo* /usr/local/bin/bsondump /opt/bitnami/mongodb/bin/
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-39824?s=golang&n=sys&ns=golang.org%2Fx&t=golang&vr=%3C0.44.0"><img alt="low : CVE--2026--39824" src="https://img.shields.io/badge/CVE--2026--39824-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.44.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.44.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.114%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

NewNTUnicodeString does not check for string length overflow. When provided with a string that overflows the maximum size of a NTUnicodeString (a 16-bit number of bytes), it returns a truncated string rather than an error.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>golang.org/x/sys</strong> <code>0.1.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/sys@0.1.0</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.11
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-39824?s=golang&n=sys&ns=golang.org%2Fx&t=golang&vr=%3C0.44.0"><img alt="low : CVE--2026--39824" src="https://img.shields.io/badge/CVE--2026--39824-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.44.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.44.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.114%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

NewNTUnicodeString does not check for string length overflow. When provided with a string that overflows the maximum size of a NTUnicodeString (a 16-bit number of bytes), it returns a truncated string rather than an error.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>golang.org/x/crypto</strong> <code>0.57.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/crypto@0.57.0</code></small><br/>

```dockerfile
# mongo-8.dockerfile (57:57)
FROM mongo:8.3.11
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

