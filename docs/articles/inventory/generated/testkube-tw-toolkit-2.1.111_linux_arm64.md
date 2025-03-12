---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:0c702e71fc33a5e79134a31711822679df1689f44027fa8f89b469bf36630091</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 0" src="https://img.shields.io/badge/critical-0-lightgrey"/> <img alt="high: 3" src="https://img.shields.io/badge/high-3-e25d68"/> <img alt="medium: 3" src="https://img.shields.io/badge/medium-3-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/low-0-lightgrey"/> <!-- unspecified: 0 --></td></tr>
<tr><td>platform</td><td>linux/arm64</td></tr>
<tr><td>size</td><td>45 MB</td></tr>
<tr><td>packages</td><td>169</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/crypto</strong> <code>0.32.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/crypto@0.32.0</code></small><br/>

```dockerfile
# tw-toolkit.Dockerfile (28:28)
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
# tw-toolkit.Dockerfile (28:28)
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

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>musl-utils</strong> <code>1.2.5-r0</code> (apk)</summary>

<small><code>pkg:apk/alpine/musl-utils@1.2.5-r0?arch=aarch64&distro=alpine-3.20.3&upstream=musl</code></small><br/>

```dockerfile
# tw-toolkit.Dockerfile (24:24)
FROM ${ALPINE_IMAGE}
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-26519?s=alpine&n=musl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C1.2.5-r1"><img alt="high : CVE--2025--26519" src="https://img.shields.io/badge/CVE--2025--26519-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.2.5-r1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.2.5-r1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.045%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 3" src="https://img.shields.io/badge/M-3-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>libssl3</strong> <code>3.3.2-r0</code> (apk)</summary>

<small><code>pkg:apk/alpine/libssl3@3.3.2-r0?arch=aarch64&distro=alpine-3.20.3&upstream=openssl</code></small><br/>

```dockerfile
# tw-toolkit.Dockerfile (24:24)
FROM ${ALPINE_IMAGE}
```

<br/>

<a href="https://scout.docker.com/v/CVE-2024-12797?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C3.3.3-r0"><img alt="medium : CVE--2024--12797" src="https://img.shields.io/badge/CVE--2024--12797-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.3-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.3-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.045%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-9143?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C3.3.2-r1"><img alt="medium : CVE--2024--9143" src="https://img.shields.io/badge/CVE--2024--9143-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.2-r1</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.2-r1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.044%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>13th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-13176?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C3.3.2-r2"><img alt="medium : CVE--2024--13176" src="https://img.shields.io/badge/CVE--2024--13176-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.2-r2</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.2-r2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.044%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>
</table>

