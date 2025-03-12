---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:aea469e53130e1ee32f87c4d81f85afd3f5cd4f355044843bd9b5a2fa3734bc7</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 0" src="https://img.shields.io/badge/critical-0-lightgrey"/> <img alt="high: 2" src="https://img.shields.io/badge/high-2-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/medium-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/low-0-lightgrey"/> <!-- unspecified: 0 --></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>18 MB</td></tr>
<tr><td>packages</td><td>133</td></tr>
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
<tr><td>EPSS Score</td><td><code>0.045%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.045%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An attacker can pass a malicious malformed token which causes unexpected memory to be consumed during parsing.

</blockquote>
</details>
</details></td></tr>
</table>

