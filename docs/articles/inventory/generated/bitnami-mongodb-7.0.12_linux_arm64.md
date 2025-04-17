---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:e5b0aa03ba80fa1c5e18afd3eae7007ad58a83465a9b56c95b90884913019af8</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 0" src="https://img.shields.io/badge/critical-0-lightgrey"/> <img alt="high: 13" src="https://img.shields.io/badge/high-13-e25d68"/> <img alt="medium: 26" src="https://img.shields.io/badge/medium-26-fbb552"/> <img alt="low: 27" src="https://img.shields.io/badge/low-27-fce1a9"/> <img alt="unspecified: 2" src="https://img.shields.io/badge/unspecified-2-lightgrey"/></td></tr>
<tr><td>platform</td><td>linux/arm64</td></tr>
<tr><td>size</td><td>203 MB</td></tr>
<tr><td>packages</td><td>678</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 3" src="https://img.shields.io/badge/H-3-e25d68"/> <img alt="medium: 4" src="https://img.shields.io/badge/M-4-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>stdlib</strong> <code>1.22.5</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.22.5</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-34158?s=golang&n=stdlib&t=golang&vr=%3C1.22.7"><img alt="high : CVE--2024--34158" src="https://img.shields.io/badge/CVE--2024--34158-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.22.7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.22.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.043%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>13th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling Parse on a "// +build" build tag line with deeply nested expressions can cause a panic due to stack exhaustion.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-34156?s=golang&n=stdlib&t=golang&vr=%3C1.22.7"><img alt="high : CVE--2024--34156" src="https://img.shields.io/badge/CVE--2024--34156-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.22.7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.22.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.093%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>28th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling Decoder.Decode on a message which contains deeply nested structures can cause a panic due to stack exhaustion. This is a follow-up to CVE-2022-30635.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-30635?s=golang&n=stdlib&t=golang&vr=%3C1.22.7"><img alt="high : CVE--2022--30635" src="https://img.shields.io/badge/CVE--2022--30635-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.22.7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.22.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.127%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>33rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling Decoder.Decode on a message which contains deeply nested structures can cause a panic due to stack exhaustion. This is a follow-up to CVE-2022-30635.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-45341?s=golang&n=stdlib&t=golang&vr=%3C1.22.11"><img alt="medium : CVE--2024--45341" src="https://img.shields.io/badge/CVE--2024--45341-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.22.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.22.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.018%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A certificate with a URI which has a IPv6 address with a zone ID may incorrectly satisfy a URI name constraint that applies to the certificate chain.

Certificates containing URIs are not permitted in the web PKI, so this only affects users of private PKIs which make use of URIs.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-45336?s=golang&n=stdlib&t=golang&vr=%3C1.22.11"><img alt="medium : CVE--2024--45336" src="https://img.shields.io/badge/CVE--2024--45336-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.22.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.22.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.027%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The HTTP client drops sensitive headers after following a cross-domain redirect. For example, a request to a.com/ containing an Authorization header which is redirected to b.com/ will not send that header to b.com.

In the event that the client received a subsequent same-domain redirect, however, the sensitive headers would be restored. For example, a chain of redirects from a.com/, to b.com/1, and finally to b.com/2 would incorrectly send the Authorization header to b.com/2.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-34155?s=golang&n=stdlib&t=golang&vr=%3C1.22.7"><img alt="medium : CVE--2024--34155" src="https://img.shields.io/badge/CVE--2024--34155-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.22.7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.22.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.064%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>20th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling any of the Parse functions on Go source code which contains deeply nested literals can cause a panic due to stack exhaustion.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-22866?s=golang&n=stdlib&t=golang&vr=%3C1.22.12"><img alt="medium : CVE--2025--22866" src="https://img.shields.io/badge/CVE--2025--22866-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.22.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.22.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.008%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>0th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Due to the usage of a variable time instruction in the assembly implementation of an internal function, a small number of bits of secret scalars are leaked on the ppc64le architecture. Due to the way this function is used, we do not believe this leakage is enough to allow recovery of the private key when P-256 is used in any well known protocols.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-22871?s=golang&n=stdlib&t=golang&vr=%3C1.23.8"><img alt="unspecified : CVE--2025--22871" src="https://img.shields.io/badge/CVE--2025--22871-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.23.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.23.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.007%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>0th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The net/http package improperly accepts a bare LF as a line terminator in chunked data chunk-size lines. This can permit request smuggling if a net/http server is used in conjunction with a server that incorrectly accepts a bare LF as part of a chunk-ext.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 3" src="https://img.shields.io/badge/H-3-e25d68"/> <img alt="medium: 4" src="https://img.shields.io/badge/M-4-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>stdlib</strong> <code>1.21.12</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.21.12</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-34158?s=golang&n=stdlib&t=golang&vr=%3C1.22.7"><img alt="high : CVE--2024--34158" src="https://img.shields.io/badge/CVE--2024--34158-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.22.7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.22.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.043%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>13th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling Parse on a "// +build" build tag line with deeply nested expressions can cause a panic due to stack exhaustion.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-34156?s=golang&n=stdlib&t=golang&vr=%3C1.22.7"><img alt="high : CVE--2024--34156" src="https://img.shields.io/badge/CVE--2024--34156-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.22.7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.22.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.093%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>28th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling Decoder.Decode on a message which contains deeply nested structures can cause a panic due to stack exhaustion. This is a follow-up to CVE-2022-30635.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-30635?s=golang&n=stdlib&t=golang&vr=%3C1.22.7"><img alt="high : CVE--2022--30635" src="https://img.shields.io/badge/CVE--2022--30635-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.22.7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.22.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.127%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>33rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling Decoder.Decode on a message which contains deeply nested structures can cause a panic due to stack exhaustion. This is a follow-up to CVE-2022-30635.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-45341?s=golang&n=stdlib&t=golang&vr=%3C1.22.11"><img alt="medium : CVE--2024--45341" src="https://img.shields.io/badge/CVE--2024--45341-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.22.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.22.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.018%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A certificate with a URI which has a IPv6 address with a zone ID may incorrectly satisfy a URI name constraint that applies to the certificate chain.

Certificates containing URIs are not permitted in the web PKI, so this only affects users of private PKIs which make use of URIs.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-45336?s=golang&n=stdlib&t=golang&vr=%3C1.22.11"><img alt="medium : CVE--2024--45336" src="https://img.shields.io/badge/CVE--2024--45336-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.22.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.22.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.027%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The HTTP client drops sensitive headers after following a cross-domain redirect. For example, a request to a.com/ containing an Authorization header which is redirected to b.com/ will not send that header to b.com.

In the event that the client received a subsequent same-domain redirect, however, the sensitive headers would be restored. For example, a chain of redirects from a.com/, to b.com/1, and finally to b.com/2 would incorrectly send the Authorization header to b.com/2.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-34155?s=golang&n=stdlib&t=golang&vr=%3C1.22.7"><img alt="medium : CVE--2024--34155" src="https://img.shields.io/badge/CVE--2024--34155-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.22.7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.22.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.064%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>20th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling any of the Parse functions on Go source code which contains deeply nested literals can cause a panic due to stack exhaustion.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-22866?s=golang&n=stdlib&t=golang&vr=%3C1.22.12"><img alt="medium : CVE--2025--22866" src="https://img.shields.io/badge/CVE--2025--22866-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.22.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.22.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.008%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>0th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Due to the usage of a variable time instruction in the assembly implementation of an internal function, a small number of bits of secret scalars are leaked on the ppc64le architecture. Due to the way this function is used, we do not believe this leakage is enough to allow recovery of the private key when P-256 is used in any well known protocols.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-22871?s=golang&n=stdlib&t=golang&vr=%3C1.23.8"><img alt="unspecified : CVE--2025--22871" src="https://img.shields.io/badge/CVE--2025--22871-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.23.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.23.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.007%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>0th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The net/http package improperly accepts a bare LF as a line terminator in chunked data chunk-size lines. This can permit request smuggling if a net/http server is used in conjunction with a server that incorrectly accepts a bare LF as part of a chunk-ext.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 2" src="https://img.shields.io/badge/H-2-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>path-to-regexp</strong> <code>0.1.7</code> (npm)</summary>

<small><code>pkg:npm/path-to-regexp@0.1.7</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-52798?s=github&n=path-to-regexp&t=npm&vr=%3C0.1.12"><img alt="high 7.7: CVE--2024--52798" src="https://img.shields.io/badge/CVE--2024--52798-lightgrey?label=high%207.7&labelColor=e25d68"/></a> <i>Inefficient Regular Expression Complexity</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.1.12</code></td></tr>
<tr><td>Fixed version</td><td><code>0.1.12</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N/E:P</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.035%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact

The regular expression that is vulnerable to backtracking can be generated in the 0.1.x release of `path-to-regexp`, originally reported in CVE-2024-45296

### Patches

Upgrade to 0.1.12.

### Workarounds

Avoid using two parameters within a single path segment, when the separator is not `.` (e.g. no `/:a-:b`). Alternatively, you can define the regex used for both parameters and ensure they do not overlap to allow backtracking.

### References

- https://github.com/advisories/GHSA-9wv6-86v2-598j
- https://blakeembrey.com/posts/2024-09-web-redos/

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-45296?s=github&n=path-to-regexp&t=npm&vr=%3C0.1.10"><img alt="high 7.7: CVE--2024--45296" src="https://img.shields.io/badge/CVE--2024--45296-lightgrey?label=high%207.7&labelColor=e25d68"/></a> <i>Inefficient Regular Expression Complexity</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.1.10</code></td></tr>
<tr><td>Fixed version</td><td><code>0.1.10</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N/E:P</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.090%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact

A bad regular expression is generated any time you have two parameters within a single segment, separated by something that is not a period (`.`). For example, `/:a-:b`.

### Patches

For users of 0.1, upgrade to `0.1.10`. All other users should upgrade to `8.0.0`.

These versions add backtrack protection when a custom regex pattern is not provided:

- [0.1.10](https://github.com/pillarjs/path-to-regexp/releases/tag/v0.1.10)
- [1.9.0](https://github.com/pillarjs/path-to-regexp/releases/tag/v1.9.0)
- [3.3.0](https://github.com/pillarjs/path-to-regexp/releases/tag/v3.3.0)
- [6.3.0](https://github.com/pillarjs/path-to-regexp/releases/tag/v6.3.0)

They do not protect against vulnerable user supplied capture groups. Protecting against explicit user patterns is out of scope for old versions and not considered a vulnerability.

Version [7.1.0](https://github.com/pillarjs/path-to-regexp/releases/tag/v7.1.0) can enable `strict: true` and get an error when the regular expression might be bad.

Version [8.0.0](https://github.com/pillarjs/path-to-regexp/releases/tag/v8.0.0) removes the features that can cause a ReDoS.

### Workarounds

All versions can be patched by providing a custom regular expression for parameters after the first in a single segment. As long as the custom regular expression does not match the text before the parameter, you will be safe. For example, change `/:a-:b` to `/:a-:b([^-/]+)`.

If paths cannot be rewritten and versions cannot be upgraded, another alternative is to limit the URL length. For example, halving the attack string improves performance by 4x faster.

### Details

Using `/:a-:b` will produce the regular expression `/^\/([^\/]+?)-([^\/]+?)\/?$/`. This can be exploited by a path such as `/a${'-a'.repeat(8_000)}/a`. [OWASP](https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS) has a good example of why this occurs, but the TL;DR is the `/a` at the end ensures this route would never match but due to naive backtracking it will still attempt every combination of the `:a-:b` on the repeated 8,000 `-a`.

Because JavaScript is single threaded and regex matching runs on the main thread, poor performance will block the event loop and can lead to a DoS. In local benchmarks, exploiting the unsafe regex will result in performance that is over 1000x worse than the safe regex. In a more realistic environment using Express v4 and 10 concurrent connections, this translated to average latency of ~600ms vs 1ms.

### References

* [OWASP](https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS)
* [Detailed blog post](https://blakeembrey.com/posts/2024-09-web-redos/)

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>tar-fs</strong> <code>2.1.1</code> (npm)</summary>

<small><code>pkg:npm/tar-fs@2.1.1</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-12905?s=github&n=tar-fs&t=npm&vr=%3E%3D2.0.0%2C%3C2.1.2"><img alt="high 7.5: CVE--2024--12905" src="https://img.shields.io/badge/CVE--2024--12905-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal')</i>

<table>
<tr><td>Affected range</td><td><code>>=2.0.0<br/><2.1.2</code></td></tr>
<tr><td>Fixed version</td><td><code>2.1.2</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.063%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>20th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An Improper Link Resolution Before File Access ("Link Following") and Improper Limitation of a Pathname to a Restricted Directory ("Path Traversal"). This vulnerability occurs when extracting a maliciously crafted tar file, which can result in unauthorized file writes or overwrites outside the intended extraction directory. The issue is associated with index.js in the tar-fs package.

This issue affects tar-fs: from 0.0.0 before 1.16.4, from 2.0.0 before 2.1.2, from 3.0.0 before 3.0.7.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>cross-spawn</strong> <code>7.0.3</code> (npm)</summary>

<small><code>pkg:npm/cross-spawn@7.0.3</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-21538?s=github&n=cross-spawn&t=npm&vr=%3E%3D7.0.0%2C%3C7.0.5"><img alt="high 7.5: CVE--2024--21538" src="https://img.shields.io/badge/CVE--2024--21538-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Inefficient Regular Expression Complexity</i>

<table>
<tr><td>Affected range</td><td><code>>=7.0.0<br/><7.0.5</code></td></tr>
<tr><td>Fixed version</td><td><code>7.0.5</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.093%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>28th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Versions of the package cross-spawn before 7.0.5 are vulnerable to Regular Expression Denial of Service (ReDoS) due to improper input sanitization. An attacker can increase the CPU usage and crash the program by crafting a very large and well crafted string.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>dset</strong> <code>3.1.3</code> (npm)</summary>

<small><code>pkg:npm/dset@3.1.3</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-21529?s=github&n=dset&t=npm&vr=%3C3.1.4"><img alt="high 8.8: CVE--2024--21529" src="https://img.shields.io/badge/CVE--2024--21529-lightgrey?label=high%208.8&labelColor=e25d68"/></a> <i>Improperly Controlled Modification of Object Prototype Attributes ('Prototype Pollution')</i>

<table>
<tr><td>Affected range</td><td><code>&lt;3.1.4</code></td></tr>
<tr><td>Fixed version</td><td><code>3.1.4</code></td></tr>
<tr><td>CVSS Score</td><td><code>8.8</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:H/VA:L/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.073%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>23rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Versions of the package dset before 3.1.4 are vulnerable to Prototype Pollution via the dset function due improper user input sanitization. This vulnerability allows the attacker to inject malicious object property using the built-in Object property __proto__, which is recursively assigned to all the objects in the program.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>body-parser</strong> <code>1.20.2</code> (npm)</summary>

<small><code>pkg:npm/body-parser@1.20.2</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-45590?s=github&n=body-parser&t=npm&vr=%3C1.20.3"><img alt="high 8.7: CVE--2024--45590" src="https://img.shields.io/badge/CVE--2024--45590-lightgrey?label=high%208.7&labelColor=e25d68"/></a> <i>Asymmetric Resource Consumption (Amplification)</i>

<table>
<tr><td>Affected range</td><td><code>&lt;1.20.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1.20.3</code></td></tr>
<tr><td>CVSS Score</td><td><code>8.7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.442%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>62nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact

body-parser <1.20.3 is vulnerable to denial of service when url encoding is enabled. A malicious actor using a specially crafted payload could flood the server with a large number of requests, resulting in denial of service.

### Patches

this issue is patched in 1.20.3

### References


</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>path-to-regexp</strong> <code>1.8.0</code> (npm)</summary>

<small><code>pkg:npm/path-to-regexp@1.8.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-45296?s=github&n=path-to-regexp&t=npm&vr=%3E%3D0.2.0%2C%3C1.9.0"><img alt="high 7.7: CVE--2024--45296" src="https://img.shields.io/badge/CVE--2024--45296-lightgrey?label=high%207.7&labelColor=e25d68"/></a> <i>Inefficient Regular Expression Complexity</i>

<table>
<tr><td>Affected range</td><td><code>>=0.2.0<br/><1.9.0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.9.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N/E:P</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.090%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact

A bad regular expression is generated any time you have two parameters within a single segment, separated by something that is not a period (`.`). For example, `/:a-:b`.

### Patches

For users of 0.1, upgrade to `0.1.10`. All other users should upgrade to `8.0.0`.

These versions add backtrack protection when a custom regex pattern is not provided:

- [0.1.10](https://github.com/pillarjs/path-to-regexp/releases/tag/v0.1.10)
- [1.9.0](https://github.com/pillarjs/path-to-regexp/releases/tag/v1.9.0)
- [3.3.0](https://github.com/pillarjs/path-to-regexp/releases/tag/v3.3.0)
- [6.3.0](https://github.com/pillarjs/path-to-regexp/releases/tag/v6.3.0)

They do not protect against vulnerable user supplied capture groups. Protecting against explicit user patterns is out of scope for old versions and not considered a vulnerability.

Version [7.1.0](https://github.com/pillarjs/path-to-regexp/releases/tag/v7.1.0) can enable `strict: true` and get an error when the regular expression might be bad.

Version [8.0.0](https://github.com/pillarjs/path-to-regexp/releases/tag/v8.0.0) removes the features that can cause a ReDoS.

### Workarounds

All versions can be patched by providing a custom regular expression for parameters after the first in a single segment. As long as the custom regular expression does not match the text before the parameter, you will be safe. For example, change `/:a-:b` to `/:a-:b([^-/]+)`.

If paths cannot be rewritten and versions cannot be upgraded, another alternative is to limit the URL length. For example, halving the attack string improves performance by 4x faster.

### Details

Using `/:a-:b` will produce the regular expression `/^\/([^\/]+?)-([^\/]+?)\/?$/`. This can be exploited by a path such as `/a${'-a'.repeat(8_000)}/a`. [OWASP](https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS) has a good example of why this occurs, but the TL;DR is the `/a` at the end ensures this route would never match but due to naive backtracking it will still attempt every combination of the `:a-:b` on the repeated 8,000 `-a`.

Because JavaScript is single threaded and regex matching runs on the main thread, poor performance will block the event loop and can lead to a DoS. In local benchmarks, exploiting the unsafe regex will result in performance that is over 1000x worse than the safe regex. In a more realistic environment using Express v4 and 10 concurrent connections, this translated to average latency of ~600ms vs 1ms.

### References

* [OWASP](https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS)
* [Detailed blog post](https://blakeembrey.com/posts/2024-09-web-redos/)

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 4" src="https://img.shields.io/badge/M-4-fbb552"/> <img alt="low: 2" src="https://img.shields.io/badge/L-2-fce1a9"/> <!-- unspecified: 0 --><strong>krb5</strong> <code>1.19.2-2ubuntu0.3</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/krb5@1.19.2-2ubuntu0.3?os_distro=jammy&os_name=ubuntu&os_version=22.04</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-37371?s=ubuntu&n=krb5&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3C1.19.2-2ubuntu0.4"><img alt="medium 9.1: CVE--2024--37371" src="https://img.shields.io/badge/CVE--2024--37371-lightgrey?label=medium%209.1&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.19.2-2ubuntu0.4</code></td></tr>
<tr><td>Fixed version</td><td><code>1.19.2-2ubuntu0.4</code></td></tr>
<tr><td>CVSS Score</td><td><code>9.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.617%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>69th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In MIT Kerberos 5 (aka krb5) before 1.21.3, an attacker can cause invalid memory reads during GSS message token handling by sending message tokens with invalid length fields.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-3596?s=ubuntu&n=krb5&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3C1.19.2-2ubuntu0.5"><img alt="medium 9.0: CVE--2024--3596" src="https://img.shields.io/badge/CVE--2024--3596-lightgrey?label=medium%209.0&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.19.2-2ubuntu0.5</code></td></tr>
<tr><td>Fixed version</td><td><code>1.19.2-2ubuntu0.5</code></td></tr>
<tr><td>CVSS Score</td><td><code>9</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:C/C:H/I:H/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.675%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>70th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

RADIUS Protocol under RFC 2865 is susceptible to forgery attacks by a local attacker who can modify any valid Response (Access-Accept, Access-Reject, or Access-Challenge) to any other response using a chosen-prefix collision attack against MD5 Response Authenticator signature.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-37370?s=ubuntu&n=krb5&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3C1.19.2-2ubuntu0.4"><img alt="medium 7.5: CVE--2024--37370" src="https://img.shields.io/badge/CVE--2024--37370-lightgrey?label=medium%207.5&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.19.2-2ubuntu0.4</code></td></tr>
<tr><td>Fixed version</td><td><code>1.19.2-2ubuntu0.4</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.081%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>25th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In MIT Kerberos 5 (aka krb5) before 1.21.3, an attacker can modify the plaintext Extra Count field of a confidential GSS krb5 wrap token, causing the unwrapped token to appear truncated to the application.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-24528?s=ubuntu&n=krb5&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3C1.19.2-2ubuntu0.6"><img alt="medium : CVE--2025--24528" src="https://img.shields.io/badge/CVE--2025--24528-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.19.2-2ubuntu0.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.19.2-2ubuntu0.6</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In MIT krb5 release 1.7 and later with incremental propagation enabled, an authenticated attacker can cause kadmind to write beyond the end of the mapped region for the iprop log file, likely causing a process crash.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-26461?s=ubuntu&n=krb5&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3C1.19.2-2ubuntu0.6"><img alt="low : CVE--2024--26461" src="https://img.shields.io/badge/CVE--2024--26461-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.19.2-2ubuntu0.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.19.2-2ubuntu0.6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.053%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Kerberos 5 (aka krb5) 1.21.2 contains a memory leak vulnerability in /krb5/src/lib/gssapi/krb5/k5sealv3.c.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-26458?s=ubuntu&n=krb5&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3C1.19.2-2ubuntu0.6"><img alt="low : CVE--2024--26458" src="https://img.shields.io/badge/CVE--2024--26458-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.19.2-2ubuntu0.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.19.2-2ubuntu0.6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.106%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>30th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Kerberos 5 (aka krb5) 1.21.2 contains a memory leak in /krb5/src/lib/rpc/pmap_rmt.c.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 3" src="https://img.shields.io/badge/M-3-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/net</strong> <code>0.26.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/net@0.26.0</code></small><br/>
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

<a href="https://scout.docker.com/v/CVE-2024-45338?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.33.0"><img alt="medium : CVE--2024--45338" src="https://img.shields.io/badge/CVE--2024--45338-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.33.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.33.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.066%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An attacker can craft an input to the Parse functions that would be processed non-linearly with respect to its length, resulting in extremely slow parsing. This could cause a denial of service.

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

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 3" src="https://img.shields.io/badge/L-3-fce1a9"/> <!-- unspecified: 0 --><strong>openssl</strong> <code>3.0.2-0ubuntu1.17</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/openssl@3.0.2-0ubuntu1.17?os_distro=jammy&os_name=ubuntu&os_version=22.04</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-6119?s=ubuntu&n=openssl&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3C3.0.2-0ubuntu1.18"><img alt="medium : CVE--2024--6119" src="https://img.shields.io/badge/CVE--2024--6119-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.0.2-0ubuntu1.18</code></td></tr>
<tr><td>Fixed version</td><td><code>3.0.2-0ubuntu1.18</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.256%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>49th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue summary: Applications performing certificate name checks (e.g., TLS clients checking server certificates) may attempt to read an invalid memory address resulting in abnormal termination of the application process.  Impact summary: Abnormal termination of an application can a cause a denial of service.  Applications performing certificate name checks (e.g., TLS clients checking server certificates) may attempt to read an invalid memory address when comparing the expected name with an `otherName` subject alternative name of an X.509 certificate. This may result in an exception that terminates the application program.  Note that basic certificate chain validation (signatures, dates, ...) is not affected, the denial of service can occur only when the application also specifies an expected DNS name, Email address or IP address.  TLS servers rarely solicit client certificates, and even when they do, they generally don't perform a name check against a reference identifier (expected identity), but rather extract the presented identity after checking the certificate chain.  So TLS servers are generally not affected and the severity of the issue is Moderate.  The FIPS modules in 3.3, 3.2, 3.1 and 3.0 are not affected by this issue.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-9143?s=ubuntu&n=openssl&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3C3.0.2-0ubuntu1.19"><img alt="low : CVE--2024--9143" src="https://img.shields.io/badge/CVE--2024--9143-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.0.2-0ubuntu1.19</code></td></tr>
<tr><td>Fixed version</td><td><code>3.0.2-0ubuntu1.19</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.303%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>53rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue summary: Use of the low-level GF(2^m) elliptic curve APIs with untrusted explicit values for the field polynomial can lead to out-of-bounds memory reads or writes.  Impact summary: Out of bound memory writes can lead to an application crash or even a possibility of a remote code execution, however, in all the protocols involving Elliptic Curve Cryptography that we're aware of, either only "named curves" are supported, or, if explicit curve parameters are supported, they specify an X9.62 encoding of binary (GF(2^m)) curves that can't represent problematic input values. Thus the likelihood of existence of a vulnerable application is low.  In particular, the X9.62 encoding is used for ECC keys in X.509 certificates, so problematic inputs cannot occur in the context of processing X.509 certificates.  Any problematic use-cases would have to be using an "exotic" curve encoding.  The affected APIs include: EC_GROUP_new_curve_GF2m(), EC_GROUP_new_from_params(), and various supporting BN_GF2m_*() functions.  Applications working with "exotic" explicit binary (GF(2^m)) curve parameters, that make it possible to represent invalid field polynomials with a zero constant term, via the above or similar APIs, may terminate abruptly as a result of reading or writing outside of array bounds.  Remote code execution cannot easily be ruled out.  The FIPS modules in 3.3, 3.2, 3.1 and 3.0 are not affected by this issue.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-41996?s=ubuntu&n=openssl&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3E%3D0"><img alt="low : CVE--2024--41996" src="https://img.shields.io/badge/CVE--2024--41996-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.129%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>34th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Validating the order of the public keys in the Diffie-Hellman Key Agreement Protocol, when an approved safe prime is used, allows remote attackers (from the client side) to trigger unnecessarily expensive server-side DHE modular-exponentiation calculations. The client may cause asymmetric resource consumption. The basic attack scenario is that the client must claim that it can only communicate with DHE, and the server must be configured to allow DHE and validate the order of the public key.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-13176?s=ubuntu&n=openssl&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3C3.0.2-0ubuntu1.19"><img alt="low : CVE--2024--13176" src="https://img.shields.io/badge/CVE--2024--13176-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.0.2-0ubuntu1.19</code></td></tr>
<tr><td>Fixed version</td><td><code>3.0.2-0ubuntu1.19</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.033%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>8th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue summary: A timing side-channel which could potentially allow recovering the private key exists in the ECDSA signature computation.  Impact summary: A timing side-channel in ECDSA signature computations could allow recovering the private key by an attacker. However, measuring the timing would require either local access to the signing application or a very fast network connection with low latency.  There is a timing signal of around 300 nanoseconds when the top word of the inverted ECDSA nonce value is zero. This can happen with significant probability only for some of the supported elliptic curves. In particular the NIST P-521 curve is affected. To be able to measure this leak, the attacker process must either be located in the same physical computer or must have a very fast network connection with low latency. For that reason the severity of this vulnerability is Low.  The FIPS modules in 3.4, 3.3, 3.2, 3.1 and 3.0 are affected by this issue.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 3" src="https://img.shields.io/badge/L-3-fce1a9"/> <!-- unspecified: 0 --><strong>curl</strong> <code>7.81.0-1ubuntu1.17</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/curl@7.81.0-1ubuntu1.17?os_distro=jammy&os_name=ubuntu&os_version=22.04</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-8096?s=ubuntu&n=curl&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3C7.81.0-1ubuntu1.18"><img alt="medium : CVE--2024--8096" src="https://img.shields.io/badge/CVE--2024--8096-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;7.81.0-1ubuntu1.18</code></td></tr>
<tr><td>Fixed version</td><td><code>7.81.0-1ubuntu1.18</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.121%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>32nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When curl is told to use the Certificate Status Request TLS extension, often referred to as OCSP stapling, to verify that the server certificate is valid, it might fail to detect some OCSP problems and instead wrongly consider the response as fine.  If the returned status reports another error than 'revoked' (like for example 'unauthorized') it is not treated as a bad certficate.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-9681?s=ubuntu&n=curl&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3C7.81.0-1ubuntu1.19"><img alt="low 6.5: CVE--2024--9681" src="https://img.shields.io/badge/CVE--2024--9681-lightgrey?label=low%206.5&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;7.81.0-1ubuntu1.19</code></td></tr>
<tr><td>Fixed version</td><td><code>7.81.0-1ubuntu1.19</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:H/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.199%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>42nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When curl is asked to use HSTS, the expiry time for a subdomain might overwrite a parent domain's cache entry, making it end sooner or later than otherwise intended.  This affects curl using applications that enable HSTS and use URLs with the insecure `HTTP://` scheme and perform transfers with hosts like `x.example.com` as well as `example.com` where the first host is a subdomain of the second host.  (The HSTS cache either needs to have been populated manually or there needs to have been previous HTTPS accesses done as the cache needs to have entries for the domains involved to trigger this problem.)  When `x.example.com` responds with `Strict-Transport-Security:` headers, this bug can make the subdomain's expiry timeout *bleed over* and get set for the parent domain `example.com` in curl's HSTS cache.  The result of a triggered bug is that HTTP accesses to `example.com` get converted to HTTPS for a different period of time than what was asked for by the origin server. If `example.com` for example stops supporting HTTPS at its expiry time, curl might then fail to access `http://example.com` until the (wrongly set) timeout expires. This bug can also expire the parent's entry *earlier*, thus making curl inadvertently switch back to insecure HTTP earlier than otherwise intended.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-0167?s=ubuntu&n=curl&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3E%3D0"><img alt="low : CVE--2025--0167" src="https://img.shields.io/badge/CVE--2025--0167-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.062%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>20th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When asked to use a `.netrc` file for credentials **and** to follow HTTP redirects, curl could leak the password used for the first host to the followed-to host under certain circumstances.  This flaw only manifests itself if the netrc file has a `default` entry that omits both login and password. A rare circumstance.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-11053?s=ubuntu&n=curl&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3C7.81.0-1ubuntu1.20"><img alt="low : CVE--2024--11053" src="https://img.shields.io/badge/CVE--2024--11053-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;7.81.0-1ubuntu1.20</code></td></tr>
<tr><td>Fixed version</td><td><code>7.81.0-1ubuntu1.20</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.154%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>37th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When asked to both use a `.netrc` file for credentials and to follow HTTP redirects, curl could leak the password used for the first host to the followed-to host under certain circumstances.  This flaw only manifests itself if the netrc file has an entry that matches the redirect target hostname but the entry either omits just the password or omits both login and password.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>glibc</strong> <code>2.35-0ubuntu3.8</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/glibc@2.35-0ubuntu3.8?os_distro=jammy&os_name=ubuntu&os_version=22.04</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-0395?s=ubuntu&n=glibc&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3C2.35-0ubuntu3.9"><img alt="medium : CVE--2025--0395" src="https://img.shields.io/badge/CVE--2025--0395-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.35-0ubuntu3.9</code></td></tr>
<tr><td>Fixed version</td><td><code>2.35-0ubuntu3.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.136%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>35th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When the assert() function in the GNU C Library versions 2.13 to 2.40 fails, it does not allocate enough space for the assertion failure message string and size information, which may lead to a buffer overflow if the message string size aligns to page size.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2016-20013?s=ubuntu&n=glibc&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3E%3D0"><img alt="low 7.5: CVE--2016--20013" src="https://img.shields.io/badge/CVE--2016--20013-lightgrey?label=low%207.5&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.201%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>43rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

sha256crypt and sha512crypt through 0.6 allow attackers to cause a denial of service (CPU consumption) because the algorithm's runtime is proportional to the square of the length of the password.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>gnupg2</strong> <code>2.2.27-3ubuntu2.1</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/gnupg2@2.2.27-3ubuntu2.1?os_distro=jammy&os_name=ubuntu&os_version=22.04</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-30258?s=ubuntu&n=gnupg2&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3C2.2.27-3ubuntu2.3"><img alt="medium : CVE--2025--30258" src="https://img.shields.io/badge/CVE--2025--30258-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.2.27-3ubuntu2.3</code></td></tr>
<tr><td>Fixed version</td><td><code>2.2.27-3ubuntu2.3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.010%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In GnuPG before 2.5.5, if a user chooses to import a certificate with certain crafted subkey data that lacks a valid backsig or that has incorrect usage flags, the user loses the ability to verify signatures made from certain other signing keys, aka a "verification DoS."

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-3219?s=ubuntu&n=gnupg2&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3E%3D0"><img alt="low 3.3: CVE--2022--3219" src="https://img.shields.io/badge/CVE--2022--3219-lightgrey?label=low%203.3&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>3.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.012%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GnuPG can be made to spin on a relatively small input by (for example) crafting a public key with thousands of signatures attached, compressed down to just a few KB.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>perl</strong> <code>5.34.0-3ubuntu1.3</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/perl@5.34.0-3ubuntu1.3?os_distro=jammy&os_name=ubuntu&os_version=22.04</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-56406?s=ubuntu&n=perl&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3C5.34.0-3ubuntu1.4"><img alt="medium : CVE--2024--56406" src="https://img.shields.io/badge/CVE--2024--56406-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;5.34.0-3ubuntu1.4</code></td></tr>
<tr><td>Fixed version</td><td><code>5.34.0-3ubuntu1.4</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.017%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A heap buffer overflow vulnerability was discovered in Perl.  Release branches 5.34, 5.36, 5.38 and 5.40 are affected, including development versions from 5.33.1 through 5.41.10.  When there are non-ASCII bytes in the left-hand-side of the `tr` operator, `S_do_trans_invmap` can overflow the destination pointer `d`.  $ perl -e '$_ = "\x{FF}" x 1000000; tr/\xFF/\x{100}/;' Segmentation fault (core dumped)  It is believed that this vulnerability can enable Denial of Service and possibly Code Execution attacks on platforms that lack sufficient defenses.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>@babel/helpers</strong> <code>7.22.6</code> (npm)</summary>

<small><code>pkg:npm/%40babel/helpers@7.22.6</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-27789?s=github&n=helpers&ns=%40babel&t=npm&vr=%3C7.26.10"><img alt="medium 6.2: CVE--2025--27789" src="https://img.shields.io/badge/CVE--2025--27789-lightgrey?label=medium%206.2&labelColor=fbb552"/></a> <i>Inefficient Regular Expression Complexity</i>

<table>
<tr><td>Affected range</td><td><code>&lt;7.26.10</code></td></tr>
<tr><td>Fixed version</td><td><code>7.26.10</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.2</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.019%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact

When using Babel to compile [regular expression named capturing groups](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group), Babel will generate a polyfill for the `.replace` method that has quadratic complexity on some specific replacement pattern strings (i.e. the second argument passed to `.replace`).

Your generated code is vulnerable if _all_ the following conditions are true:
- You use Babel to compile [regular expression named capturing groups](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- You use the `.replace` method on a regular expression that contains named capturing groups
- **Your code uses untrusted strings as the second argument of `.replace`**

If you are using `@babel/preset-env` with the [`targets`](https://babeljs.io/docs/options#targets) option, the transform that injects the vulnerable code is automatically enabled if:
- you use [_duplicated_ named capturing groups](https://github.com/tc39/proposal-duplicate-named-capturing-groups), and target any browser older than Chrome/Edge 126, Opera 112, Firefox 129, Safari 17.4, or Node.js 23
- you use any [named capturing groups](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group), and target any browser older than Chrome 64, Opera 71, Edge 79, Firefox 78, Safari 11.1, or Node.js 10

You can verify what transforms `@babel/preset-env` is using by enabling the [`debug` option](https://babeljs.io/docs/babel-preset-env#debug).


### Patches

This problem has been fixed in `@babel/helpers` and `@babel/runtime` 7.26.10 and 8.0.0-alpha.17, please upgrade. It's likely that you do not directly depend on `@babel/helpers`, and instead you depend on `@babel/core` (which itself depends on `@babel/helpers`). Upgrading to `@babel/core` 7.26.10 is not required, but it guarantees that you are on a new enough `@babel/helpers` version.

Please note that just updating your Babel dependencies is not enough: you will also need to re-compile your code.

### Workarounds

If you are passing user-provided strings as the second argument of `.replace` on regular expressions that contain named capturing groups, validate the input and make sure it does not contain the substring `$<` if it's then not followed by `>` (possibly with other characters in between).

### References

This vulnerability was reported and fixed in https://github.com/babel/babel/pull/17173.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>webpack</strong> <code>5.83.0</code> (npm)</summary>

<small><code>pkg:npm/webpack@5.83.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-43788?s=github&n=webpack&t=npm&vr=%3E%3D5.0.0-alpha.0%2C%3C5.94.0"><img alt="medium 6.1: CVE--2024--43788" src="https://img.shields.io/badge/CVE--2024--43788-lightgrey?label=medium%206.1&labelColor=fbb552"/></a> <i>Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')</i>

<table>
<tr><td>Affected range</td><td><code>>=5.0.0-alpha.0<br/><5.94.0</code></td></tr>
<tr><td>Fixed version</td><td><code>5.94.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:P/PR:L/UI:N/VC:L/VI:L/VA:H/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.062%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>20th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Summary

We discovered a DOM Clobbering vulnerability in Webpack’s `AutoPublicPathRuntimeModule`. The DOM Clobbering gadget in the module can lead to cross-site scripting (XSS) in web pages where scriptless attacker-controlled HTML elements (e.g., an `img` tag with an unsanitized `name` attribute) are present.

We found the real-world exploitation of this gadget in the Canvas LMS which allows XSS attack happens through an javascript code compiled by Webpack (the vulnerable part is from Webpack). We believe this is a severe issue. If Webpack’s code is not resilient to DOM Clobbering attacks, it could lead to significant security vulnerabilities in any web application using Webpack-compiled code.


### Details

#### Backgrounds

DOM Clobbering is a type of code-reuse attack where the attacker first embeds a piece of non-script, seemingly benign HTML markups in the webpage (e.g. through a post or comment) and leverages the gadgets (pieces of js code) living in the existing javascript code to transform it into executable code. More for information about DOM Clobbering, here are some references:

[1] https://scnps.co/papers/sp23_domclob.pdf
[2] https://research.securitum.com/xss-in-amp4email-dom-clobbering/


#### Gadgets found in Webpack

We identified a DOM Clobbering vulnerability in Webpack’s `AutoPublicPathRuntimeModule`. When the `output.publicPath` field in the configuration is not set or is set to `auto`, the following code is generated in the bundle to dynamically resolve and load additional JavaScript files:

```
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
```

However, this code is vulnerable to a DOM Clobbering attack. The lookup on the line with `document.currentScript` can be shadowed by an attacker, causing it to return an attacker-controlled HTML element instead of the current script element as intended. In such a scenario, the `src` attribute of the attacker-controlled element will be used as the `scriptUrl` and assigned to `__webpack_require__.p`. If additional scripts are loaded from the server, `__webpack_require__.p` will be used as the base URL, pointing to the attacker's domain. This could lead to arbitrary script loading from the attacker's server, resulting in severe security risks.

### PoC

Please note that we have identified a real-world exploitation of this vulnerability in the Canvas LMS. Once the issue has been patched, I am willing to share more details on the exploitation. For now, I’m providing a demo to illustrate the concept.

Consider a website developer with the following two scripts, `entry.js` and `import1.js`, that are compiled using Webpack:

```
// entry.js
import('./import1.js')
  .then(module => {
    module.hello();
  })
  .catch(err => {
    console.error('Failed to load module', err);
  });
```

```
// import1.js
export function hello () {
  console.log('Hello');
}
```

The webpack.config.js is set up as follows:
```
const path = require('path');

module.exports = {
  entry: './entry.js', // Ensure the correct path to your entry file
  output: {
    filename: 'webpack-gadgets.bundle.js', // Output bundle file
    path: path.resolve(__dirname, 'dist'), // Output directory
    publicPath: "auto", // Or leave this field not set
  },
  target: 'web',
  mode: 'development',
};
```

When the developer builds these scripts into a bundle and adds it to a webpage, the page could load the `import1.js` file from the attacker's domain, `attacker.controlled.server`. The attacker only needs to insert an `img` tag with the `name` attribute set to `currentScript`. This can be done through a website's feature that allows users to embed certain script-less HTML (e.g., markdown renderers, web email clients, forums) or via an HTML injection vulnerability in third-party JavaScript loaded on the page.

```
<!DOCTYPE html>
<html>
<head>
  <title>Webpack Example</title>
  <!-- Attacker-controlled Script-less HTML Element starts--!>
  <img name="currentScript" src="https://attacker.controlled.server/"></img>
  <!-- Attacker-controlled Script-less HTML Element ends--!>
</head>
<script src="./dist/webpack-gadgets.bundle.js"></script>
<body>
</body>
</html>
```

### Impact

This vulnerability can lead to cross-site scripting (XSS) on websites that include Webpack-generated files and allow users to inject certain scriptless HTML tags with improperly sanitized name or id attributes.

### Patch

A possible patch to this vulnerability could refer to the Google Closure project which makes itself resistant to DOM Clobbering attack: https://github.com/google/closure-library/blob/b312823ec5f84239ff1db7526f4a75cba0420a33/closure/goog/base.js#L174

```
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT') // Assume attacker cannot control script tag, otherwise it is XSS already :>
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
```

Please note that if we do not receive a response from the development team within three months, we will disclose this vulnerability to the CVE agent.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>pam</strong> <code>1.4.0-11ubuntu2.4</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/pam@1.4.0-11ubuntu2.4?os_distro=jammy&os_name=ubuntu&os_version=22.04</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-10041?s=ubuntu&n=pam&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3E%3D0"><img alt="medium 4.7: CVE--2024--10041" src="https://img.shields.io/badge/CVE--2024--10041-lightgrey?label=medium%204.7&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>4.7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:H/PR:L/UI:N/S:U/C:H/I:N/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.022%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A vulnerability was found in PAM. The secret information is stored in memory, where the attacker can trigger the victim program to execute by sending characters to its standard input (stdin). As this occurs, the attacker can train the branch predictor to execute an ROP chain speculatively. This flaw could result in leaked passwords, such as those found in /etc/shadow while performing authentications.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>libcap2</strong> <code>1:2.44-1ubuntu0.22.04.1</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/libcap2@1%3A2.44-1ubuntu0.22.04.1?os_distro=jammy&os_name=ubuntu&os_version=22.04</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-1390?s=ubuntu&n=libcap2&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3C1%3A2.44-1ubuntu0.22.04.2"><img alt="medium : CVE--2025--1390" src="https://img.shields.io/badge/CVE--2025--1390-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1:2.44-1ubuntu0.22.04.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1:2.44-1ubuntu0.22.04.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.018%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The PAM module pam_cap.so of libcap configuration supports group names starting with “@”, during actual parsing, configurations not starting with “@” are incorrectly recognized as group names. This may result in nonintended users being granted an inherited capability set, potentially leading to security risks. Attackers can exploit this vulnerability to achieve local privilege escalation on systems where /etc/security/capability.conf is used to configure user inherited privileges by constructing specific usernames.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>libtasn1-6</strong> <code>4.18.0-4build1</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/libtasn1-6@4.18.0-4build1?os_distro=jammy&os_name=ubuntu&os_version=22.04</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-12133?s=ubuntu&n=libtasn1-6&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3C4.18.0-4ubuntu0.1"><img alt="medium 5.3: CVE--2024--12133" src="https://img.shields.io/badge/CVE--2024--12133-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;4.18.0-4ubuntu0.1</code></td></tr>
<tr><td>Fixed version</td><td><code>4.18.0-4ubuntu0.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.040%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>12th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw in libtasn1 causes inefficient handling of specific certificate data. When processing a large number of elements in a certificate, libtasn1 takes much longer than expected, which can slow down or even crash the system. This flaw allows an attacker to send a specially crafted certificate, causing a denial of service attack.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>gnutls28</strong> <code>3.7.3-4ubuntu1.5</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/gnutls28@3.7.3-4ubuntu1.5?os_distro=jammy&os_name=ubuntu&os_version=22.04</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-12243?s=ubuntu&n=gnutls28&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3C3.7.3-4ubuntu1.6"><img alt="medium 5.3: CVE--2024--12243" src="https://img.shields.io/badge/CVE--2024--12243-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.7.3-4ubuntu1.6</code></td></tr>
<tr><td>Fixed version</td><td><code>3.7.3-4ubuntu1.6</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.171%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>39th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in GnuTLS, which relies on libtasn1 for ASN.1 data processing. Due to an inefficient algorithm in libtasn1, decoding certain DER-encoded certificate data can take excessive time, leading to increased resource consumption. This flaw allows a remote attacker to send a specially crafted certificate, causing GnuTLS to become unresponsive or slow, resulting in a denial-of-service condition.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 2" src="https://img.shields.io/badge/L-2-fce1a9"/> <!-- unspecified: 0 --><strong>gcc-12</strong> <code>12.3.0-1ubuntu1~22.04</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/gcc-12@12.3.0-1ubuntu1~22.04?os_distro=jammy&os_name=ubuntu&os_version=22.04</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2022-27943?s=ubuntu&n=gcc-12&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3E%3D0"><img alt="low 5.5: CVE--2022--27943" src="https://img.shields.io/badge/CVE--2022--27943-lightgrey?label=low%205.5&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>5.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.044%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>13th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

libiberty/rust-demangle.c in GNU GCC 11.2 allows stack consumption in demangle_const, as demonstrated by nm-new.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-4039?s=ubuntu&n=gcc-12&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3E%3D0"><img alt="low 4.8: CVE--2023--4039" src="https://img.shields.io/badge/CVE--2023--4039-lightgrey?label=low%204.8&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>4.8</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:L/I:L/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.124%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>33rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

**DISPUTED**A failure in the -fstack-protector feature in GCC-based toolchains that target AArch64 allows an attacker to exploit an existing buffer overflow in dynamically-sized local variables in your application without this being detected. This stack-protector failure only applies to C99-style dynamically-sized local variables or those created using alloca(). The stack-protector operates as intended for statically-sized local variables. The default behavior when the stack-protector detects an overflow is to terminate your application, resulting in controlled loss of availability. An attacker who can exploit a buffer overflow without triggering the stack-protector might be able to change program flow control to cause an uncontrolled loss of availability or to go further and affect confidentiality or integrity. NOTE: The GCC project argues that this is a missed hardening bug and not a vulnerability by itself.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 2" src="https://img.shields.io/badge/L-2-fce1a9"/> <!-- unspecified: 0 --><strong>ncurses</strong> <code>6.3-2ubuntu0.1</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/ncurses@6.3-2ubuntu0.1?os_distro=jammy&os_name=ubuntu&os_version=22.04</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2023-50495?s=ubuntu&n=ncurses&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3E%3D0"><img alt="low 6.5: CVE--2023--50495" src="https://img.shields.io/badge/CVE--2023--50495-lightgrey?label=low%206.5&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>6.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.050%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>15th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

NCurse v6.4-20230418 was discovered to contain a segmentation fault via the component _nc_wrap_entry().

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-45918?s=ubuntu&n=ncurses&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3E%3D0"><img alt="low : CVE--2023--45918" src="https://img.shields.io/badge/CVE--2023--45918-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.043%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>12th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

ncurses 6.4-20230610 has a NULL pointer dereference in tgetstr in tinfo/lib_termcap.c.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 2" src="https://img.shields.io/badge/L-2-fce1a9"/> <!-- unspecified: 0 --><strong>shadow</strong> <code>1:4.8.1-2ubuntu2.2</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/shadow@1%3A4.8.1-2ubuntu2.2?os_distro=jammy&os_name=ubuntu&os_version=22.04</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2023-29383?s=ubuntu&n=shadow&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3E%3D0"><img alt="low 3.3: CVE--2023--29383" src="https://img.shields.io/badge/CVE--2023--29383-lightgrey?label=low%203.3&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>3.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:N/I:L/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.044%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>13th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In Shadow 4.13, it is possible to inject control characters into fields provided to the SUID program chfn (change finger). Although it is not possible to exploit this directly (e.g., adding a new user fails because \n is in the block list), it is possible to misrepresent the /etc/passwd file when viewed. Use of \r manipulations and Unicode characters to work around blocking of the : character make it possible to give the impression that a new user has been added. In other words, an adversary may be able to convince a system administrator to take the system offline (an indirect, social-engineered denial of service) by demonstrating that "cat /etc/passwd" shows a rogue user account.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-56433?s=ubuntu&n=shadow&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3E%3D0"><img alt="low : CVE--2024--56433" src="https://img.shields.io/badge/CVE--2024--56433-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>3.171%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>86th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

shadow-utils (aka shadow) 4.4 through 4.17.0 establishes a default /etc/subuid behavior (e.g., uid 100000 through 165535 for the first user account) that can realistically conflict with the uids of users defined on locally administered networks, potentially leading to account takeover, e.g., by leveraging newuidmap for access to an NFS home directory (or same-host resources in the case of remote logins by these local network users). NOTE: it may also be argued that system administrators should not have assigned uids, within local networks, that are within the range that can occur in /etc/subuid.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>coreutils</strong> <code>8.32-4.1ubuntu1.2</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/coreutils@8.32-4.1ubuntu1.2?os_distro=jammy&os_name=ubuntu&os_version=22.04</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2016-2781?s=ubuntu&n=coreutils&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3E%3D0"><img alt="low 6.5: CVE--2016--2781" src="https://img.shields.io/badge/CVE--2016--2781-lightgrey?label=low%206.5&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>6.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.0/AV:L/AC:L/PR:L/UI:N/S:C/C:N/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.065%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

chroot in GNU coreutils, when used with --userspec, allows local users to escape to the parent session via a crafted TIOCSTI ioctl call, which pushes characters to the terminal's input buffer.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>cookie</strong> <code>0.6.0</code> (npm)</summary>

<small><code>pkg:npm/cookie@0.6.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-47764?s=github&n=cookie&t=npm&vr=%3C0.7.0"><img alt="low : CVE--2024--47764" src="https://img.shields.io/badge/CVE--2024--47764-lightgrey?label=low%20&labelColor=fce1a9"/></a> <i>Improper Neutralization of Special Elements in Output Used by a Downstream Component ('Injection')</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.7.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.7.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.033%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>8th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact

The cookie name could be used to set other fields of the cookie, resulting in an unexpected cookie value. For example, `serialize("userName=<script>alert('XSS3')</script>; Max-Age=2592000; a", value)` would result in `"userName=<script>alert('XSS3')</script>; Max-Age=2592000; a=test"`, setting `userName` cookie to `<script>` and ignoring `value`.

A similar escape can be used for `path` and `domain`, which could be abused to alter other fields of the cookie.

### Patches

Upgrade to 0.7.0, which updates the validation for `name`, `path`, and `domain`.

### Workarounds

Avoid passing untrusted or arbitrary values for these fields, ensure they are set by the application instead of user input.

### References

* https://github.com/jshttp/cookie/pull/167

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>pcre2</strong> <code>10.39-3ubuntu0.1</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/pcre2@10.39-3ubuntu0.1?os_distro=jammy&os_name=ubuntu&os_version=22.04</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2022-41409?s=ubuntu&n=pcre2&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3E%3D0"><img alt="low 7.5: CVE--2022--41409" src="https://img.shields.io/badge/CVE--2022--41409-lightgrey?label=low%207.5&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.046%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>14th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Integer overflow vulnerability in pcre2test before 10.41 allows attackers to cause a denial of service or other unspecified impacts via negative input.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>serve-static</strong> <code>1.15.0</code> (npm)</summary>

<small><code>pkg:npm/serve-static@1.15.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-43800?s=github&n=serve-static&t=npm&vr=%3C1.16.0"><img alt="low 2.3: CVE--2024--43800" src="https://img.shields.io/badge/CVE--2024--43800-lightgrey?label=low%202.3&labelColor=fce1a9"/></a> <i>Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')</i>

<table>
<tr><td>Affected range</td><td><code>&lt;1.16.0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.16.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>2.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:P/VC:N/VI:N/VA:N/SC:L/SI:L/SA:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.016%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact

passing untrusted user input - even after sanitizing it - to `redirect()` may execute untrusted code

### Patches

this issue is patched in serve-static 1.16.0

### Workarounds

users are encouraged to upgrade to the patched version of express, but otherwise can workaround this issue by making sure any untrusted inputs are safe, ideally by validating them against an explicit allowlist

### Details

successful exploitation of this vector requires the following:

1. The attacker MUST control the input to response.redirect()
1. express MUST NOT redirect before the template appears
1. the browser MUST NOT complete redirection before:
1. the user MUST click on the link in the template


</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>cookie</strong> <code>0.4.2</code> (npm)</summary>

<small><code>pkg:npm/cookie@0.4.2</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-47764?s=github&n=cookie&t=npm&vr=%3C0.7.0"><img alt="low : CVE--2024--47764" src="https://img.shields.io/badge/CVE--2024--47764-lightgrey?label=low%20&labelColor=fce1a9"/></a> <i>Improper Neutralization of Special Elements in Output Used by a Downstream Component ('Injection')</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.7.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.7.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.033%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>8th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact

The cookie name could be used to set other fields of the cookie, resulting in an unexpected cookie value. For example, `serialize("userName=<script>alert('XSS3')</script>; Max-Age=2592000; a", value)` would result in `"userName=<script>alert('XSS3')</script>; Max-Age=2592000; a=test"`, setting `userName` cookie to `<script>` and ignoring `value`.

A similar escape can be used for `path` and `domain`, which could be abused to alter other fields of the cookie.

### Patches

Upgrade to 0.7.0, which updates the validation for `name`, `path`, and `domain`.

### Workarounds

Avoid passing untrusted or arbitrary values for these fields, ensure they are set by the application instead of user input.

### References

* https://github.com/jshttp/cookie/pull/167

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>libzstd</strong> <code>1.4.8+dfsg-3build1</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/libzstd@1.4.8%2Bdfsg-3build1?os_distro=jammy&os_name=ubuntu&os_version=22.04</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2022-4899?s=ubuntu&n=libzstd&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3E%3D0"><img alt="low 7.5: CVE--2022--4899" src="https://img.shields.io/badge/CVE--2022--4899-lightgrey?label=low%207.5&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.205%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>43rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A vulnerability was found in zstd v1.4.10, where an attacker can supply empty string as an argument to the command line tool to cause buffer overrun.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>express</strong> <code>4.19.2</code> (npm)</summary>

<small><code>pkg:npm/express@4.19.2</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-43796?s=github&n=express&t=npm&vr=%3C4.20.0"><img alt="low 2.3: CVE--2024--43796" src="https://img.shields.io/badge/CVE--2024--43796-lightgrey?label=low%202.3&labelColor=fce1a9"/></a> <i>Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')</i>

<table>
<tr><td>Affected range</td><td><code>&lt;4.20.0</code></td></tr>
<tr><td>Fixed version</td><td><code>4.20.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>2.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:P/VC:N/VI:N/VA:N/SC:L/SI:L/SA:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.016%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact

In express <4.20.0, passing untrusted user input - even after sanitizing it - to `response.redirect()` may execute untrusted code

### Patches

this issue is patched in express 4.20.0

### Workarounds

users are encouraged to upgrade to the patched version of express, but otherwise can workaround this issue by making sure any untrusted inputs are safe, ideally by validating them against an explicit allowlist

### Details

successful exploitation of this vector requires the following:

1. The attacker MUST control the input to response.redirect()
1. express MUST NOT redirect before the template appears
1. the browser MUST NOT complete redirection before:
1. the user MUST click on the link in the template


</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>send</strong> <code>0.18.0</code> (npm)</summary>

<small><code>pkg:npm/send@0.18.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-43799?s=github&n=send&t=npm&vr=%3C0.19.0"><img alt="low 2.3: CVE--2024--43799" src="https://img.shields.io/badge/CVE--2024--43799-lightgrey?label=low%202.3&labelColor=fce1a9"/></a> <i>Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.19.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.19.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>2.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:P/VC:N/VI:N/VA:N/SC:L/SI:L/SA:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.017%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact

passing untrusted user input - even after sanitizing it - to `SendStream.redirect()` may execute untrusted code

### Patches

this issue is patched in send 0.19.0

### Workarounds

users are encouraged to upgrade to the patched version of express, but otherwise can workaround this issue by making sure any untrusted inputs are safe, ideally by validating them against an explicit allowlist

### Details

successful exploitation of this vector requires the following:

1. The attacker MUST control the input to response.redirect()
1. express MUST NOT redirect before the template appears
1. the browser MUST NOT complete redirection before:
1. the user MUST click on the link in the template


</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>systemd</strong> <code>249.11-0ubuntu3.12</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/systemd@249.11-0ubuntu3.12?os_distro=jammy&os_name=ubuntu&os_version=22.04</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2023-7008?s=ubuntu&n=systemd&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3E%3D0"><img alt="low 5.9: CVE--2023--7008" src="https://img.shields.io/badge/CVE--2023--7008-lightgrey?label=low%205.9&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>5.9</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.295%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>52nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A vulnerability was found in systemd-resolved. This issue may allow systemd-resolved to accept records of DNSSEC-signed domains even when they have no signature, allowing man-in-the-middles (or the upstream DNS resolver) to manipulate records.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>libgcrypt20</strong> <code>1.9.4-3ubuntu3</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/libgcrypt20@1.9.4-3ubuntu3?os_distro=jammy&os_name=ubuntu&os_version=22.04</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-2236?s=ubuntu&n=libgcrypt20&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3E%3D0"><img alt="low : CVE--2024--2236" src="https://img.shields.io/badge/CVE--2024--2236-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.106%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>30th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A timing-based side-channel flaw was found in libgcrypt's RSA implementation. This issue may allow a remote attacker to initiate a Bleichenbacher-style attack, which can lead to the decryption of RSA ciphertexts.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>pcre3</strong> <code>2:8.39-13ubuntu0.22.04.1</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/pcre3@2%3A8.39-13ubuntu0.22.04.1?os_distro=jammy&os_name=ubuntu&os_version=22.04</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2017-11164?s=ubuntu&n=pcre3&ns=ubuntu&t=deb&osn=ubuntu&osv=22.04&vr=%3E%3D0"><img alt="low 7.5: CVE--2017--11164" src="https://img.shields.io/badge/CVE--2017--11164-lightgrey?label=low%207.5&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.184%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>41st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In PCRE 8.41, the OP_KETRMAX feature in the match function in pcre_exec.c allows stack exhaustion (uncontrolled recursion) when processing a crafted regular expression.

</blockquote>
</details>
</details></td></tr>
</table>

