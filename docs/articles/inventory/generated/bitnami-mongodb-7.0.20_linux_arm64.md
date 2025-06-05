---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:53b16c30fdf0e3e1425a33b8d363012c24314ea35f54239653f1a061a3a488be</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 0" src="https://img.shields.io/badge/critical-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/high-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/medium-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/low-0-lightgrey"/> <!-- unspecified: 0 --></td></tr>
<tr><td>platform</td><td>linux/arm64</td></tr>
<tr><td>size</td><td>207 MB</td></tr>
<tr><td>packages</td><td>650</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>tar-fs</strong> <code>2.1.2</code> (npm)</summary>

<small><code>pkg:npm/tar-fs@2.1.2</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-48387?s=github&n=tar-fs&t=npm&vr=%3E%3D2.0.0%2C%3C2.1.3"><img alt="high 8.7: CVE--2025--48387" src="https://img.shields.io/badge/CVE--2025--48387-lightgrey?label=high%208.7&labelColor=e25d68"/></a> <i>Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal')</i>

<table>
<tr><td>Affected range</td><td><code>>=2.0.0<br/><2.1.3</code></td></tr>
<tr><td>Fixed version</td><td><code>2.1.3</code></td></tr>
<tr><td>CVSS Score</td><td><code>8.7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:H/VA:N/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.063%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>20th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact
 v3.0.8, v2.1.2, v1.16.4 and below

### Patches
Has been patched in 3.0.9, 2.1.3, and 1.16.5

### Workarounds
You can use the ignore option to ignore non files/directories.

```js
  ignore (_, header) {
    // pass files & directories, ignore e.g. symlinks
    return header.type !== 'file' && header.type !== 'directory'
  }
```

### Credit
Thank you Caleb Brown from Google Open Source Security Team for reporting this in detail.

</blockquote>
</details>
</details></td></tr>
</table>

