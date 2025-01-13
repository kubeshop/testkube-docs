---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:3934e2e2ed0a0447be5f862083a6d2f8b483e3ac608b3316baf01a3d7cd35f17</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 1" src="https://img.shields.io/badge/critical-1-8b1924"/> <img alt="high: 1" src="https://img.shields.io/badge/high-1-e25d68"/> <img alt="medium: 1" src="https://img.shields.io/badge/medium-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/low-0-lightgrey"/> <!-- unspecified: 0 --></td></tr>
<tr><td>platform</td><td>linux/arm64</td></tr>
<tr><td>size</td><td>33 MB</td></tr>
<tr><td>packages</td><td>177</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/crypto</strong> <code>0.28.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/crypto@0.28.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-45337?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.31.0"><img alt="critical 9.1: CVE--2024--45337" src="https://img.shields.io/badge/CVE--2024--45337-lightgrey?label=critical%209.1&labelColor=8b1924"/></a> <i>Improper Authorization</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.31.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.31.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>9.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.045%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Applications and libraries which misuse the ServerConfig.PublicKeyCallback callback may be susceptible to an authorization bypass.

The documentation for ServerConfig.PublicKeyCallback says that "A call to this function does not guarantee that the key offered is in fact used to authenticate." Specifically, the SSH protocol allows clients to inquire about whether a public key is acceptable before proving control of the corresponding private key. PublicKeyCallback may be called with multiple keys, and the order in which the keys were provided cannot be used to infer which key the client successfully authenticated with, if any. Some applications, which store the key(s) passed to PublicKeyCallback (or derived information) and make security relevant determinations based on it once the connection is established, may make incorrect assumptions.

For example, an attacker may send public keys A and B, and then authenticate with A. PublicKeyCallback would be called only twice, first with A and then with B. A vulnerable application may then make authorization decisions based on key B for which the attacker does not actually control the private key.

Since this API is widely misused, as a partial mitigation golang.org/x/crypto@v0.31.0 enforces the property that, when successfully authenticating via public key, the last key passed to ServerConfig.PublicKeyCallback will be the key used to authenticate the connection. PublicKeyCallback will now be called multiple times with the same key, if necessary. Note that the client may still not control the last key passed to PublicKeyCallback if the connection is then authenticated with a different method, such as PasswordCallback, KeyboardInteractiveCallback, or NoClientAuth.

Users should be using the Extensions field of the Permissions return value from the various authentication callbacks to record data associated with the authentication attempt instead of referencing external state. Once the connection is established the state corresponding to the successful authentication attempt can be retrieved via the ServerConn.Permissions field. Note that some third-party libraries misuse the Permissions type by sharing it across authentication attempts; users of third-party libraries should refer to the relevant projects for guidance.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/net</strong> <code>0.30.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/net@0.30.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-45338?s=github&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.33.0"><img alt="high 8.7: CVE--2024--45338" src="https://img.shields.io/badge/CVE--2024--45338-lightgrey?label=high%208.7&labelColor=e25d68"/></a> <i>Allocation of Resources Without Limits or Throttling</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.33.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.33.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>8.7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.045%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An attacker can craft an input to the Parse functions that would be processed non-linearly with respect to its length, resulting in extremely slow parsing. This could cause a denial of service.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>openssl</strong> <code>3.3.2-r0</code> (apk)</summary>

<small><code>pkg:apk/alpine/openssl@3.3.2-r0?os_name=alpine&os_version=3.20</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-9143?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C3.3.2-r1"><img alt="medium : CVE--2024--9143" src="https://img.shields.io/badge/CVE--2024--9143-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.2-r1</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.2-r1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.044%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>12th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>
</table>

