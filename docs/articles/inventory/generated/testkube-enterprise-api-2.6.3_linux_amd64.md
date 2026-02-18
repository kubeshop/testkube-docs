---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:0ebd67abf5449572fcd0bebb05c09df76ae2fee1ec675dbf138b4c8a99775063</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 0" src="https://img.shields.io/badge/critical-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/high-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/medium-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/low-0-lightgrey"/> <!-- unspecified: 0 --></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>71 MB</td></tr>
<tr><td>packages</td><td>414</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/go-jose/go-jose</strong> <code>2.6.3+incompatible</code> (golang)</summary>

<small><code>pkg:golang/github.com/go-jose/go-jose@2.6.3%2Bincompatible</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-27144?s=github&n=go-jose&ns=github.com%2Fgo-jose&t=golang&vr=%3C3.0.4"><img alt="medium 6.9: CVE--2025--27144" src="https://img.shields.io/badge/CVE--2025--27144-lightgrey?label=medium%206.9&labelColor=fbb552"/></a> <i>Uncontrolled Resource Consumption</i>

<table>
<tr><td>Affected range</td><td><code>&lt;3.0.4</code></td></tr>
<tr><td>Fixed version</td><td><code>3.0.4</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.9</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:L/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.078%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>23rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact
When parsing compact JWS or JWE input, go-jose could use excessive memory. The code used strings.Split(token, ".") to split JWT tokens, which is vulnerable to excessive memory consumption when processing maliciously crafted tokens with a large number of '.' characters.  An attacker could exploit this by sending numerous malformed tokens, leading to memory exhaustion and a Denial of Service.

### Patches
Version 4.0.5 fixes this issue

### Workarounds
Applications could pre-validate payloads passed to go-jose do not contain an excessive number of '.' characters.

### References
This is the same sort of issue as in the golang.org/x/oauth2/jws package as CVE-2025-22868 and Go issue https://go.dev/issue/71490.

</blockquote>
</details>
</details></td></tr>
</table>

