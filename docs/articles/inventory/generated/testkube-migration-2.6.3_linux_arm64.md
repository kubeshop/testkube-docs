---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:6e6dced3ffe6b2ddcef083ffe71d99de997a9ec075e8652ffd429467dc522c1d</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 0" src="https://img.shields.io/badge/critical-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/high-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/medium-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/low-0-lightgrey"/> <!-- unspecified: 0 --></td></tr>
<tr><td>platform</td><td>linux/arm64</td></tr>
<tr><td>size</td><td>33 MB</td></tr>
<tr><td>packages</td><td>238</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/nats-io/nats-server/v2</strong> <code>2.11.4</code> (golang)</summary>

<small><code>pkg:golang/github.com/nats-io/nats-server@2.11.4#v2</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-27571?s=github&n=v2&ns=github.com%2Fnats-io%2Fnats-server&t=golang&vr=%3C2.11.12"><img alt="medium 5.9: CVE--2026--27571" src="https://img.shields.io/badge/CVE--2026--27571-lightgrey?label=medium%205.9&labelColor=fbb552"/></a> <i>Improper Handling of Highly Compressed Data (Data Amplification)</i>

<table>
<tr><td>Affected range</td><td><code>&lt;2.11.12</code></td></tr>
<tr><td>Fixed version</td><td><code>2.11.12</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.9</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.055%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>17th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact

The WebSockets handling of NATS messages handles compressed messages via the WebSockets negotiated compression.  The implementation bound the memory size of a NATS message but did not independently bound the memory consumption of the memory stream when constructing a NATS message which might then fail validation for size reasons.

An attacker can use a compression bomb to cause excessive memory consumption, often resulting in the operating system terminating the server process.

The use of compression is negotiated before authentication, so this does not require valid NATS credentials to exploit.

The fix was to bounds the decompression to fail once the message was too large, instead of continuing on.

### Patches

This was released in nats-server without being highlighted as a security issue.  It should have been, this was an oversight.  Per the NATS security policy, because this does not require a valid user, it is CVE-worthy.

This was fixed in the v2.11 series with v2.11.12 and in the v2.12 series with v2.12.3.

### Workarounds

This only affects deployments which use WebSockets and which expose the network port to untrusted end-points.

### References

This was reported to the NATS maintainers by Pavel Kohout of Aisle Research (www.aisle.com).

</blockquote>
</details>
</details></td></tr>
</table>

