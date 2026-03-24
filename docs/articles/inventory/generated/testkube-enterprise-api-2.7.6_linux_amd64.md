---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:be690a9d541e33f10ccd7691152ffebc7c62b2dcf5b5780b3725f54ca28d1b6b</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 0" src="https://img.shields.io/badge/critical-0-lightgrey"/> <img alt="high: 2" src="https://img.shields.io/badge/high-2-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/medium-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/low-1-fce1a9"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/unspecified-1-lightgrey"/></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>73 MB</td></tr>
<tr><td>packages</td><td>449</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>github.com/buger/jsonparser</strong> <code>1.1.1</code> (golang)</summary>

<small><code>pkg:golang/github.com/buger/jsonparser@1.1.1</code></small><br/>
<a href="https://scout.docker.com/v/GHSA-6g7g-w4f8-9c9x?s=github&n=jsonparser&ns=github.com%2Fbuger&t=golang&vr=%3C%3D1.1.1"><img alt="high 7.5: GHSA--6g7g--w4f8--9c9x" src="https://img.shields.io/badge/GHSA--6g7g--w4f8--9c9x-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Out-of-bounds Read</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=1.1.1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.1.2</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Delete function fails to properly validate offsets when processing malformed JSON input. This can lead to a negative slice index and a runtime panic, allowing a denial of service attack.

</blockquote>
</details>

<a href="https://scout.docker.com/v/GO-2026-4514?s=golang&n=jsonparser&ns=github.com%2Fbuger&t=golang&vr=%3E%3D0.0.0"><img alt="unspecified : GO--2026--4514" src="https://img.shields.io/badge/GO--2026--4514-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0.0.0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Delete function fails to properly validate offsets when processing malformed JSON input. This can lead to a negative slice index and a runtime panic, allowing a denial of service attack.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/docker/cli</strong> <code>29.3.0+incompatible</code> (golang)</summary>

<small><code>pkg:golang/github.com/docker/cli@29.3.0%2Bincompatible</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-15558?s=golang&n=cli&ns=github.com%2Fdocker&t=golang&vr=%3E%3D19.03.0%2Bincompatible"><img alt="high : CVE--2025--15558" src="https://img.shields.io/badge/CVE--2025--15558-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=19.03.0+incompatible</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.020%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Docker CLI Plugins: Uncontrolled Search Path Element Leads to Local Privilege Escalation on Windows in github.com/docker/cli

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>github.com/cloudflare/circl</strong> <code>1.6.1</code> (golang)</summary>

<small><code>pkg:golang/github.com/cloudflare/circl@1.6.1</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-1229?s=github&n=circl&ns=github.com%2Fcloudflare&t=golang&vr=%3C1.6.3"><img alt="low 2.9: CVE--2026--1229" src="https://img.shields.io/badge/CVE--2026--1229-lightgrey?label=low%202.9&labelColor=fce1a9"/></a> <i>Incorrect Calculation</i>

<table>
<tr><td>Affected range</td><td><code>&lt;1.6.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1.6.3</code></td></tr>
<tr><td>CVSS Score</td><td><code>2.9</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:H/AT:N/PR:N/UI:N/VC:L/VI:L/VA:L/SC:L/SI:L/SA:L/E:P/S:N/AU:Y/U:Amber</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.020%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The CombinedMult function in the CIRCL ecc/p384 package (secp384r1 curve) produces an incorrect value for specific inputs. The issue is fixed by using complete addition formulas.
ECDH and ECDSA signing relying on this curve are not affected.

The bug was fixed in **[v1.6.3](https://github.com/cloudflare/circl/releases/tag/v1.6.3)**.

</blockquote>
</details>
</details></td></tr>
</table>

