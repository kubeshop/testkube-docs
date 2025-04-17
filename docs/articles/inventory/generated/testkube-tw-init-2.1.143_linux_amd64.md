---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:70adc4c6d9ac96d9bf0497f4b6faf9e01e26f3356c7341e6abe9a3c9c77ce999</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 0" src="https://img.shields.io/badge/critical-0-lightgrey"/> <img alt="high: 2" src="https://img.shields.io/badge/high-2-e25d68"/> <img alt="medium: 2" src="https://img.shields.io/badge/medium-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/low-0-lightgrey"/> <!-- unspecified: 0 --></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>18 MB</td></tr>
<tr><td>packages</td><td>137</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/crypto</strong> <code>0.32.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/crypto@0.32.0</code></small><br/>

```dockerfile
# tw-init.Dockerfile (18:18)
COPY --from=build /app/testworkflow-init /init
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-22869?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.35.0"><img alt="high : CVE--2025--22869" src="https://img.shields.io/badge/CVE--2025--22869-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.35.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.35.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.042%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>12th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

SSH servers which implement file transfer protocols are vulnerable to a denial of service attack from clients which complete the key exchange slowly, or not at all, causing pending content to be read into memory, but never transmitted.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/oauth2</strong> <code>0.26.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/oauth2@0.26.0</code></small><br/>

```dockerfile
# tw-init.Dockerfile (18:18)
COPY --from=build /app/testworkflow-init /init
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-22868?s=golang&n=oauth2&ns=golang.org%2Fx&t=golang&vr=%3C0.27.0"><img alt="high : CVE--2025--22868" src="https://img.shields.io/badge/CVE--2025--22868-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.27.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.27.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.051%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An attacker can pass a malicious malformed token which causes unexpected memory to be consumed during parsing.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/net</strong> <code>0.34.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/net@0.34.0</code></small><br/>

```dockerfile
# tw-init.Dockerfile (18:18)
COPY --from=build /app/testworkflow-init /init
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-22872?s=github&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.38.0"><img alt="medium 5.3: CVE--2025--22872" src="https://img.shields.io/badge/CVE--2025--22872-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.38.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.38.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:P/VC:N/VI:N/VA:N/SC:L/SI:L/SA:N</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The tokenizer incorrectly interprets tags with unquoted attribute values that end with a solidus character (/) as self-closing. When directly using Tokenizer, this can result in such tags incorrectly being marked as self-closing, and when using the Parse functions, this can result in content following such tags as being placed in the wrong scope during DOM construction, but only when tags are in foreign content (e.g. <math>, <svg>, etc contexts).

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-22870?s=github&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.36.0"><img alt="medium 4.4: CVE--2025--22870" src="https://img.shields.io/badge/CVE--2025--22870-lightgrey?label=medium%204.4&labelColor=fbb552"/></a> <i>Misinterpretation of Input</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.36.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.36.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>4.4</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:L/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.008%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Matching of hosts against proxy patterns can improperly treat an IPv6 zone ID as a hostname component. For example, when the NO_PROXY environment variable is set to "*.example.com", a request to "[::1%25.example.com]:80` will incorrectly match and not be proxied.

</blockquote>
</details>
</details></td></tr>
</table>

