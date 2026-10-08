---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:44fe2be8bf804aae8f9f550f4b60841d0b7e02bb8136fbf6057ebe5dc4ccf002</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 0" src="https://img.shields.io/badge/critical-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/high-1-e25d68"/> <img alt="medium: 1" src="https://img.shields.io/badge/medium-1-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/low-1-fce1a9"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/unspecified-1-lightgrey"/></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>26 MB</td></tr>
<tr><td>packages</td><td>127</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>zlib</strong> <code>1.3.2-r0</code> (apk)</summary>

<small><code>pkg:apk/alpine/zlib@1.3.2-r0?os_name=alpine&os_version=3.24</code></small><br/>

```dockerfile
# kubectl-release.dockerfile (5:5)
FROM alpine/kubectl:1.37.1
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-85091?s=alpine&n=zlib&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C1.3.2-r1"><img alt="high : CVE--2026--85091" src="https://img.shields.io/badge/CVE--2026--85091-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.3.2-r1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.3.2-r1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.592%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>47th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>k8s.io/kubernetes</strong> <code>1.37.1</code> (golang)</summary>

<small><code>pkg:golang/k8s.io/kubernetes@1.37.1</code></small><br/>

```dockerfile
# kubectl-release.dockerfile (5:5)
FROM alpine/kubectl:1.37.1
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-1767?s=golang&n=kubernetes&ns=k8s.io&t=golang&vr=%3E%3D0"><img alt="medium : CVE--2025--1767" src="https://img.shields.io/badge/CVE--2025--1767-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.703%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>52nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Kubernetes GitRepo Volume Inadvertent Local Repository Access in k8s.io/kubernetes

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-7598?s=golang&n=kubernetes&ns=k8s.io&t=golang&vr=%3E%3D1.3.0"><img alt="low : CVE--2024--7598" src="https://img.shields.io/badge/CVE--2024--7598-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.3.0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.314%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>22nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Kubernetes kube-apiserver Vulnerable to Race Condition in k8s.io/kubernetes

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>golang.org/x/text</strong> <code>0.40.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/text@0.40.0</code></small><br/>

```dockerfile
# kubectl-release.dockerfile (5:5)
FROM alpine/kubectl:1.37.1
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-56851?s=golang&n=text&ns=golang.org%2Fx&t=golang&vr=%3C0.41.0"><img alt="unspecified : CVE--2026--56851" src="https://img.shields.io/badge/CVE--2026--56851-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.41.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.41.0</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Nickname profile can panic with an out-of-bounds slice error when transforming crafted input into a short destination buffer.

</blockquote>
</details>
</details></td></tr>
</table>

