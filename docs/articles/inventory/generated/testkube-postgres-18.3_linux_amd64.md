---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:a7b96e2a0fad6ca494ff9385bf732ab88044573d565c7da3b53ca05152c2f5c7</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 2" src="https://img.shields.io/badge/critical-2-8b1924"/> <img alt="high: 31" src="https://img.shields.io/badge/high-31-e25d68"/> <img alt="medium: 32" src="https://img.shields.io/badge/medium-32-fbb552"/> <img alt="low: 63" src="https://img.shields.io/badge/low-63-fce1a9"/> <img alt="unspecified: 5" src="https://img.shields.io/badge/unspecified-5-lightgrey"/></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>162 MB</td></tr>
<tr><td>packages</td><td>205</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 16" src="https://img.shields.io/badge/H-16-e25d68"/> <img alt="medium: 18" src="https://img.shields.io/badge/M-18-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>stdlib</strong> <code>1.24.6</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.24.6</code></small><br/>

```dockerfile
# postgresql-release.dockerfile (5:5)
FROM postgres:18.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-68121?s=golang&n=stdlib&t=golang&vr=%3C1.24.13"><img alt="critical : CVE--2025--68121" src="https://img.shields.io/badge/CVE--2025--68121-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.13</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.13</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.765%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>51st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

During session resumption in crypto/tls, if the underlying Config has its ClientCAs or RootCAs fields mutated between the initial handshake and the resumed handshake, the resumed handshake may succeed when it should have failed. This may happen when a user calls Config.Clone and mutates the returned Config, or uses Config.GetConfigForClient. This can cause a client to resume a session with a server that it would not have resumed with during the initial handshake, or cause a server to resume a session with a client that it would not have resumed with during the initial handshake.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42504?s=golang&n=stdlib&t=golang&vr=%3C1.25.11"><img alt="high : CVE--2026--42504" src="https://img.shields.io/badge/CVE--2026--42504-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.560%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>43rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Decoding a maliciously-crafted MIME header containing many invalid encoded-words can consume excessive CPU.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42499?s=golang&n=stdlib&t=golang&vr=%3C1.25.10"><img alt="high : CVE--2026--42499" src="https://img.shields.io/badge/CVE--2026--42499-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.798%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>52nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Pathological inputs could cause DoS through consumePhrase when parsing an email address according to RFC 5322.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39836?s=golang&n=stdlib&t=golang&vr=%3C1.25.10"><img alt="high : CVE--2026--39836" src="https://img.shields.io/badge/CVE--2026--39836-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.588%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>44th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Dial and LookupPort functions panic on Windows when provided with an input containing a NUL (0).

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39820?s=golang&n=stdlib&t=golang&vr=%3C1.25.10"><img alt="high : CVE--2026--39820" src="https://img.shields.io/badge/CVE--2026--39820-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.784%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>52nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Well-crafted inputs reaching ParseAddress, ParseAddressList, and ParseDate were able to trigger excessive CPU exhaustion and memory allocations.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33814?s=golang&n=stdlib&t=golang&vr=%3C1.25.10"><img alt="high : CVE--2026--33814" src="https://img.shields.io/badge/CVE--2026--33814-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.781%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>52nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When processing HTTP/2 SETTINGS frames, transport will enter an infinite loop of writing CONTINUATION frames if it receives a SETTINGS_MAX_FRAME_SIZE with a value of 0.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33811?s=golang&n=stdlib&t=golang&vr=%3C1.25.10"><img alt="high : CVE--2026--33811" src="https://img.shields.io/badge/CVE--2026--33811-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.813%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>53rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When using LookupCNAME with the cgo DNS resolver, a very long CNAME response can trigger a double-free of C memory and a crash.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32283?s=golang&n=stdlib&t=golang&vr=%3C1.25.9"><img alt="high : CVE--2026--32283" src="https://img.shields.io/badge/CVE--2026--32283-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.621%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>45th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

If one side of the TLS connection sends multiple key update messages post-handshake in a single record, the connection can deadlock, causing uncontrolled consumption of resources. This can lead to a denial of service.

This only affects TLS 1.3.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32281?s=golang&n=stdlib&t=golang&vr=%3C1.25.9"><img alt="high : CVE--2026--32281" src="https://img.shields.io/badge/CVE--2026--32281-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.349%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Validating certificate chains which use policies is unexpectedly inefficient when certificates in the chain contain a very large number of policy mappings, possibly causing denial of service.

This only affects validation of otherwise trusted certificate chains, issued by a root CA in the VerifyOptions.Roots CertPool, or in the system certificate pool.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32280?s=golang&n=stdlib&t=golang&vr=%3C1.25.9"><img alt="high : CVE--2026--32280" src="https://img.shields.io/badge/CVE--2026--32280-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.615%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>45th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

During chain building, the amount of work that is done is not correctly limited when a large number of intermediate certificates are passed in VerifyOptions.Intermediates, which can lead to a denial of service. This affects both direct users of crypto/x509 and users of crypto/tls.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-25679?s=golang&n=stdlib&t=golang&vr=%3C1.25.8"><img alt="high : CVE--2026--25679" src="https://img.shields.io/badge/CVE--2026--25679-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.728%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>50th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

url.Parse insufficiently validated the host/authority component and accepted some invalid URLs.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61729?s=golang&n=stdlib&t=golang&vr=%3C1.24.11"><img alt="high : CVE--2025--61729" src="https://img.shields.io/badge/CVE--2025--61729-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.459%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>37th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Within HostnameError.Error(), when constructing an error string, there is no limit to the number of hosts that will be printed out. Furthermore, the error string is constructed by repeated string concatenation, leading to quadratic runtime. Therefore, a certificate provided by a malicious actor can result in excessive resource consumption.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61726?s=golang&n=stdlib&t=golang&vr=%3C1.24.12"><img alt="high : CVE--2025--61726" src="https://img.shields.io/badge/CVE--2025--61726-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>1.945%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>78th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The net/url package does not set a limit on the number of query parameters in a query.

While the maximum size of query parameters in URLs is generally limited by the maximum request header size, the net/http.Request.ParseForm method can parse large URL-encoded forms. Parsing a large form containing many unique query parameters can cause excessive memory consumption.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61725?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="high : CVE--2025--61725" src="https://img.shields.io/badge/CVE--2025--61725-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.613%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>45th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The ParseAddress function constructs domain-literal address components through repeated string concatenation. When parsing large domain-literal components, this can cause excessive CPU consumption.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61723?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="high : CVE--2025--61723" src="https://img.shields.io/badge/CVE--2025--61723-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.626%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>46th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The processing time for parsing some invalid inputs scales non-linearly with respect to the size of the input.

This affects programs which parse untrusted PEM inputs.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58188?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="high : CVE--2025--58188" src="https://img.shields.io/badge/CVE--2025--58188-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.361%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>28th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Validating certificate chains which contain DSA public keys can cause programs to panic, due to a interface cast that assumes they implement the Equal method.

This affects programs which validate arbitrary certificate chains.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58187?s=golang&n=stdlib&t=golang&vr=%3C1.24.9"><img alt="high : CVE--2025--58187" src="https://img.shields.io/badge/CVE--2025--58187-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.384%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>30th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Due to the design of the name constraint checking algorithm, the processing time of some inputs scale non-linearly with respect to the size of the certificate.

This affects programs which validate arbitrary certificate chains.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-27145?s=golang&n=stdlib&t=golang&vr=%3C1.25.11"><img alt="medium : CVE--2026--27145" src="https://img.shields.io/badge/CVE--2026--27145-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.904%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>55th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

(*x509.Certificate).VerifyHostname previously called matchHostnames in a loop over all DNS Subject Alternative Name (SAN) entries. This caused strings.Split(host, ".") to execute repeatedly on the same input hostname.

With a large DNS SAN list, verification costs scaled quadratically based on the number of SAN entries multiplied by the hostname's label count. Because x509.Verify validates hostnames before building the certificate chain, this overhead occurred even for untrusted certificates.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61728?s=golang&n=stdlib&t=golang&vr=%3C1.24.12"><img alt="medium : CVE--2025--61728" src="https://img.shields.io/badge/CVE--2025--61728-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.643%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>46th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

archive/zip uses a super-linear file name indexing algorithm that is invoked the first time a file in an archive is opened. This can lead to a denial of service when consuming a maliciously constructed ZIP archive.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61727?s=golang&n=stdlib&t=golang&vr=%3C1.24.11"><img alt="medium : CVE--2025--61727" src="https://img.shields.io/badge/CVE--2025--61727-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.274%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>19th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An excluded subdomain constraint in a certificate chain does not restrict the usage of wildcard SANs in the leaf certificate. For example a constraint that excludes the subdomain test.example.com does not prevent a leaf certificate from claiming the SAN *.example.com.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32282?s=golang&n=stdlib&t=golang&vr=%3C1.25.9"><img alt="medium : CVE--2026--32282" src="https://img.shields.io/badge/CVE--2026--32282-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.292%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

On Linux, if the target of Root.Chmod is replaced with a symlink while the chmod operation is in progress, Chmod can operate on the target of the symlink, even when the target lies outside the root.

The Linux fchmodat syscall silently ignores the AT_SYMLINK_NOFOLLOW flag, which Root.Chmod uses to avoid symlink traversal. Root.Chmod checks its target before acting and returns an error if the target is a symlink lying outside the root, so the impact is limited to cases where the target is replaced with a symlink between the check and operation.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39826?s=golang&n=stdlib&t=golang&vr=%3C1.25.10"><img alt="medium : CVE--2026--39826" src="https://img.shields.io/badge/CVE--2026--39826-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.371%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>29th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

If a trusted template author were to write a <script> tag containing an empty 'type' attribute or a 'type' attribute with an ASCII whitespace, the execution of the template would incorrectly escape any data passed into the <script> block.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39823?s=golang&n=stdlib&t=golang&vr=%3C1.25.10"><img alt="medium : CVE--2026--39823" src="https://img.shields.io/badge/CVE--2026--39823-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.314%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>23rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

CVE-2026-27142 fixed a vulnerability in which URLs were not correctly escaped inside of a <meta> tag's <content> attribute. If the URL content were to insert ASCII whitespaces around the '=' rune inside of the <content> attribute, the escaper would fail to similarly escape it, leading to XSS.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32289?s=golang&n=stdlib&t=golang&vr=%3C1.25.9"><img alt="medium : CVE--2026--32289" src="https://img.shields.io/badge/CVE--2026--32289-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.290%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Context was not properly tracked across template branches for JS template literals, leading to possibly incorrect escaping of content when branches were used. Additionally template actions within JS template literals did not properly track the brace depth, leading to incorrect escaping being applied.

These issues could cause actions within JS template literals to be incorrectly or improperly escaped, leading to XSS vulnerabilities.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-27142?s=golang&n=stdlib&t=golang&vr=%3C1.25.8"><img alt="medium : CVE--2026--27142" src="https://img.shields.io/badge/CVE--2026--27142-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.328%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>25th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Actions which insert URLs into the content attribute of HTML meta tags are not escaped. This can allow XSS if the meta tag also has an http-equiv attribute with the value "refresh".

A new GODEBUG setting has been added, htmlmetacontenturlescape, which can be used to disable escaping URLs in actions in the meta content attribute which follow "url=" by setting htmlmetacontenturlescape=0.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32288?s=golang&n=stdlib&t=golang&vr=%3C1.25.9"><img alt="medium : CVE--2026--32288" src="https://img.shields.io/badge/CVE--2026--32288-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.290%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

tar.Reader can allocate an unbounded amount of memory when reading a maliciously-crafted archive containing a large number of sparse regions encoded in the "old GNU sparse map" format.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42507?s=golang&n=stdlib&t=golang&vr=%3C1.25.11"><img alt="medium : CVE--2026--42507" src="https://img.shields.io/badge/CVE--2026--42507-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.370%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>29th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When returning errors, functions in the net/textproto package would include its input as part of the error. This might allow an attacker to inject misleading content to errors that are printed or logged.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39825?s=golang&n=stdlib&t=golang&vr=%3C1.25.10"><img alt="medium : CVE--2026--39825" src="https://img.shields.io/badge/CVE--2026--39825-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.390%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>31st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

ReverseProxy can forward queries containing parameters not visible to Rewrite functions.

When used with a Rewrite function, or a Director function which parses query parameters, ReverseProxy sanitizes the forwarded request to remove query parameters which are not parsed by url.ParseQuery. ReverseProxy does not take ParseQuery's limit on the total number of query parameters (controlled by GODEBUG=urlmaxqueryparams=N) into account. This can permit ReverseProxy to forward a request containing a query parameter that is not visible to the Rewrite function.

For example, the query "a1=x&a2=x&...&a10000=x&hidden=y" can forward the parameter "hidden=y" while hiding it from the proxy's Rewrite function.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61730?s=golang&n=stdlib&t=golang&vr=%3C1.24.12"><img alt="medium : CVE--2025--61730" src="https://img.shields.io/badge/CVE--2025--61730-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.276%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>19th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

During the TLS 1.3 handshake if multiple messages are sent in records that span encryption level boundaries (for instance the Client Hello and Encrypted Extensions messages), the subsequent messages may be processed before the encryption level changes. This can cause some minor information disclosure if a network-local attacker can inject messages during the handshake.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61724?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="medium : CVE--2025--61724" src="https://img.shields.io/badge/CVE--2025--61724-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.526%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>41st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Reader.ReadResponse function constructs a response string through repeated string concatenation of lines. When the number of lines in a response is large, this can cause excessive CPU consumption.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58189?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="medium : CVE--2025--58189" src="https://img.shields.io/badge/CVE--2025--58189-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.443%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>36th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When Conn.Handshake fails during ALPN negotiation the error contains attacker controlled information (the ALPN protocols sent by the client) which is not escaped.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58186?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="medium : CVE--2025--58186" src="https://img.shields.io/badge/CVE--2025--58186-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.534%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>41st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Despite HTTP headers having a default limit of 1MB, the number of cookies that can be parsed does not have a limit. By sending a lot of very small cookies such as "a=;", an attacker can make an HTTP server allocate a large amount of structs, causing large memory consumption.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58185?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="medium : CVE--2025--58185" src="https://img.shields.io/badge/CVE--2025--58185-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.526%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>41st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Parsing a maliciously crafted DER payload could allocate large amounts of memory, causing memory exhaustion.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-47912?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="medium : CVE--2025--47912" src="https://img.shields.io/badge/CVE--2025--47912-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.443%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>36th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Parse function permits values other than IPv6 addresses to be included in square brackets within the host component of a URL. RFC 3986 permits IPv6 addresses to be included within the host component, enclosed within square brackets. For example: "http://[::1]/". IPv4 addresses and hostnames must not appear within square brackets. Parse did not enforce this requirement.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58183?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="medium : CVE--2025--58183" src="https://img.shields.io/badge/CVE--2025--58183-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.419%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>34th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

tar.Reader does not set a maximum size on the number of sparse region data blocks in GNU tar pax 1.0 sparse files. A maliciously-crafted archive containing a large number of sparse regions can cause a Reader to read an unbounded amount of data from the archive into memory. When reading from a compressed source, a small compressed input can result in large allocations.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-27139?s=golang&n=stdlib&t=golang&vr=%3C1.25.8"><img alt="low : CVE--2026--27139" src="https://img.shields.io/badge/CVE--2026--27139-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.201%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>10th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

On Unix platforms, when listing the contents of a directory using File.ReadDir or File.Readdir the returned FileInfo could reference a file outside of the Root in which the File was opened.

The impact of this escape is limited to reading metadata provided by lstat from arbitrary locations on the filesystem without permitting reading or writing files outside the root.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 2" src="https://img.shields.io/badge/H-2-e25d68"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 2" src="https://img.shields.io/badge/L-2-fce1a9"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>perl</strong> <code>5.40.1-6</code> (deb)</summary>

<small><code>pkg:deb/debian/perl@5.40.1-6?os_distro=trixie&os_name=debian&os_version=13</code></small><br/>

```dockerfile
# postgresql-release.dockerfile (5:5)
FROM postgres:18.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-12087?s=debian&n=perl&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="critical : CVE--2026--12087" src="https://img.shields.io/badge/CVE--2026--12087-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.389%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>31st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Socket versions before 2.041 for Perl have an out-of-bounds heap read.  In Socket.xs, pack_ip_mreq_source() checks the length of its source argument before the argument is read, so the check tests the byte length carried over from the preceding multiaddr argument instead. Both addresses occupy a 4-byte field, so a valid multiaddr lets a source of any length pass the check, and the source is then copied into the 4-byte imr_sourceaddr field with a fixed-size copy. A source shorter than 4 bytes is not rejected, and the copy reads up to 3 bytes past the end of its buffer.  Calling pack_ip_mreq_source() with a source value shorter than 4 bytes copies adjacent heap memory into the returned packed structure.

---
- libsocket-perl 2.041-1
[trixie] - libsocket-perl <no-dsa> (Minor issue)
- perl <unfixed> (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1140152)
https://lists.security.metacpan.org/cve-announce/msg/41020451/
Fixed by: https://github.com/Perl/perl5/commit/de19a0b0ad1900fef976c5c1400bd8f11ec6c6cb (v5.43.11)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-48959?s=debian&n=perl&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="high : CVE--2026--48959" src="https://img.shields.io/badge/CVE--2026--48959-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.373%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>29th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

IO::Uncompress::Unzip versions before 2.220 for Perl allow CPU exhaustion via per-byte read loop in fastForward.  fastForward() compares length $offset (the digit count of the offset, 1 to 19) against the chunk size $c instead of $offset itself, so $c shrinks from 16 KiB to 1-19 bytes per iteration.  Extracting a named entry from an attacker supplied zip via IO::Uncompress::Unzip->new($zip, Name => $target) drives a per-byte read loop scaling with the entry's compressed size, up to the non-Zip64 4 GiB cap.

---
- libio-compress-perl 2.220-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1138051)
- perl 5.40.1-8 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1138856)
https://lists.security.metacpan.org/cve-announce/msg/40434381/
Fixed by: https://github.com/pmqs/IO-Compress/commit/68db44076f4c1a86a2ffe53a958eac6cabaf72e2 (v2.220)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-48962?s=debian&n=perl&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="high : CVE--2026--48962" src="https://img.shields.io/badge/CVE--2026--48962-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.292%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

IO::Compress versions before 2.220 for Perl can execute arbitrary code in File::GlobMapper via an attacker-controlled output glob.  _parseOutputGlob() wraps the caller-supplied output glob string in double quotes and stores it in the parser state; _getFiles() then runs the stored expression through eval STRING. A literal double quote in the output glob closes the dquote wrapper, and the characters that follow are evaluated as Perl.  Arbitrary Perl in the output glob executes at the calling process's privilege.

---
- libio-compress-perl 2.220-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1138055)
[trixie] - libio-compress-perl <no-dsa> (Minor issue)
- perl 5.40.1-8 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1138854)
https://lists.security.metacpan.org/cve-announce/msg/40434385/
Fixed by: https://github.com/pmqs/IO-Compress/commit/f2db247bf90d4cc7ee2710be384946081f3b4610 (v2.220)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-7010?s=debian&n=perl&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="medium : CVE--2026--7010" src="https://img.shields.io/badge/CVE--2026--7010-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.227%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>13th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

HTTP::Tiny versions before 0.093 for Perl do not validate CRLF in HTTP request lines or control field header values.  The unvalidated inputs are the method and URI in the request line, the URL host that becomes the `Host:` header, and HTTP/1.1 control data field values.  An attacker who controls one of these inputs, for example a user supplied URL passed to a webhook or URL fetch endpoint, can inject additional headers and smuggle requests to the upstream server.

---
- libhttp-tiny-perl 0.092-2
[trixie] - libhttp-tiny-perl <no-dsa> (Minor issue)
[bookworm] - libhttp-tiny-perl <no-dsa> (Minor issue)
- perl 5.40.1-8 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1138858)
https://lists.security.metacpan.org/cve-announce/msg/39952806/
Fixed by: https://github.com/Perl-Toolchain-Gang/HTTP-Tiny/commit/d73c7651e82ace02693842df55928b6c3ae7c38d (release-0.093)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-15649?s=debian&n=perl&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="medium : CVE--2025--15649" src="https://img.shields.io/badge/CVE--2025--15649-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.127%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

IO::Uncompress::Unzip versions before 2.215 for Perl propagate uncaught exception when parsing zip header with malformed DOS date.  _dosToUnixTime() decodes the local-file-header last-modification date field and calls Time::Local::timelocal() without an eval guard. A header whose date field decodes to an out-of-range month, day, or hour causes timelocal() to die.  The exception propagates out of IO::Uncompress::Unzip->new($file) where callers expect undef plus $UnzipError.

---
- libio-compress-perl 2.217-1
- perl 5.40.1-8 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1138863)
https://lists.security.metacpan.org/cve-announce/msg/40434380/
https://github.com/pmqs/IO-Compress/issues/65
Fixed by: https://github.com/pmqs/IO-Compress/commit/fd28c1d2374eee9811f6d0c5bddc0957abdf1da8 (v2.215)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-48961?s=debian&n=perl&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2026--48961" src="https://img.shields.io/badge/CVE--2026--48961-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.262%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

IO::Compress versions from 2.207 before 2.220 for Perl ship a zipdetails CLI tool that crashes with undefined subroutine on Info-ZIP Unix Extra Field with 8-byte UID or GID.  When decode_ux() in bin/zipdetails handles an Info-ZIP Unix Extra Field (tag 0x7875) with UID Size or GID Size set to 8, causing zipdetails to decode an 8-byte UID or GID value, it dispatches through decodeLitteEndian(), which calls a misnamed helper unpackValueQ. The actual function defined in the same file is unpackValue_Q (with underscore); the call raises 'Undefined subroutine &main::unpackValueQ' and the script exits with status 255.  Library callers of IO::Compress and IO::Uncompress are not affected; the defect is in the bundled CLI tool.

---
- libio-compress-perl 2.220-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1138052)
[trixie] - libio-compress-perl <no-dsa> (Minor issue)
[bookworm] - libio-compress-perl <not-affected> (Vulnerable code introduced later)
[bullseye] - libio-compress-perl <not-affected> (Vulnerable code introduced later)
- perl 5.40.1-8 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1138855)
https://lists.security.metacpan.org/cve-announce/msg/40434383/
Introduced with: https://github.com/pmqs/IO-Compress/commit/ddfe67584a228877e5d28840da75ff32e435a5e3 (v2.207)
Fixed by: https://github.com/pmqs/IO-Compress/commit/33c89d03d6e746ed2ead4f2f6570d47864c61bc7 (v2.220)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2011-4116?s=debian&n=perl&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2011--4116" src="https://img.shields.io/badge/CVE--2011--4116-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.520%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>40th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

_is_safe in the File::Temp module for Perl does not properly handle symlinks.

---
- perl <unfixed> (unimportant; bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=776268)
http://thread.gmane.org/gmane.comp.security.oss.general/6174/focus=6177
https://github.com/Perl-Toolchain-Gang/File-Temp/issues/14

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-7017?s=debian&n=perl&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="unspecified : CVE--2026--7017" src="https://img.shields.io/badge/CVE--2026--7017-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

- libhttp-tiny-perl <unfixed> (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1141638)
- perl <unfixed> (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1141639)
https://lists.security.metacpan.org/cve-announce/msg/41618211/
https://github.com/Perl-Toolchain-Gang/HTTP-Tiny/pull/36
Fixed by: https://github.com/Perl-Toolchain-Gang/HTTP-Tiny/commit/84984ef3930ddd4afcf5eb83b40d3cee200739c3 (release-0.095)
Fixed by: https://github.com/Perl-Toolchain-Gang/HTTP-Tiny/commit/e7a03aedf2395158f2b0d3bad2df943349227bb3 (release-0.095)
Fixed by: https://github.com/Perl-Toolchain-Gang/HTTP-Tiny/commit/8f32ca89e21c3ad0422adc698fa6ad17a193f55f (release-0.095)

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 8" src="https://img.shields.io/badge/H-8-e25d68"/> <img alt="medium: 3" src="https://img.shields.io/badge/M-3-fbb552"/> <img alt="low: 3" src="https://img.shields.io/badge/L-3-fce1a9"/> <!-- unspecified: 0 --><strong>gnutls28</strong> <code>3.8.9-3+deb13u2</code> (deb)</summary>

<small><code>pkg:deb/debian/gnutls28@3.8.9-3%2Bdeb13u2?os_distro=trixie&os_name=debian&os_version=13</code></small><br/>

```dockerfile
# postgresql-release.dockerfile (5:5)
FROM postgres:18.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-5260?s=debian&n=gnutls28&ns=debian&t=deb&osn=debian&osv=13&vr=%3C3.8.9-3%2Bdeb13u4"><img alt="high : CVE--2026--5260" src="https://img.shields.io/badge/CVE--2026--5260-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.8.9-3+deb13u4</code></td></tr>
<tr><td>Fixed version</td><td><code>3.8.9-3+deb13u4</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.727%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>50th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in libgnutls. A remote attacker, by sending an extremely short premaster secret during an RSA key exchange to a server using an RSA key backed by a PKCS#11 token, could trigger a short heap overread. This memory corruption vulnerability could lead to information disclosure.

---
- gnutls28 3.8.13-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1135319)
https://www.gnutls.org/security-new.html#GNUTLS-SA-2026-04-29-10
https://gitlab.com/gnutls/gnutls/-/issues/1814
Fixed by: https://gitlab.com/gnutls/gnutls/-/commit/77228f2d1ac207d2f894e5a168fbb47e5378e42f (3.8.13)
Fixed by: https://gitlab.com/gnutls/gnutls/-/commit/cf6bdc5e4df49e5583d3fb4d2296779785f10683 (3.8.13)
Introduced with: https://gitlab.com/gnutls/gnutls/-/commit/4804febddc2ed958e5ae774de2a8f85edeeff538 (gnutls_3_6_5)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42013?s=debian&n=gnutls28&ns=debian&t=deb&osn=debian&osv=13&vr=%3C3.8.9-3%2Bdeb13u4"><img alt="high : CVE--2026--42013" src="https://img.shields.io/badge/CVE--2026--42013-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.8.9-3+deb13u4</code></td></tr>
<tr><td>Fixed version</td><td><code>3.8.9-3+deb13u4</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.423%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>34th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in gnutls. When validating certificates, an oversized Subject Alternative Name (SAN) could cause the validation process to incorrectly fall back to checking the Common Name (CN) field. This could allow a remote attacker to bypass proper certificate validation, potentially leading to spoofing or man-in-the-middle attacks.

---
- gnutls28 3.8.13-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1135319)
https://www.gnutls.org/security-new.html#GNUTLS-SA-2026-04-29-8
https://gitlab.com/gnutls/gnutls/-/work_items/1825
https://gitlab.com/gnutls/gnutls/-/issues/1849
Fixed by: https://gitlab.com/gnutls/gnutls/-/commit/29801bef00ecc0f23c0bac4cd333b269cd2c1af4 (3.8.13)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42009?s=debian&n=gnutls28&ns=debian&t=deb&osn=debian&osv=13&vr=%3C3.8.9-3%2Bdeb13u4"><img alt="high : CVE--2026--42009" src="https://img.shields.io/badge/CVE--2026--42009-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.8.9-3+deb13u4</code></td></tr>
<tr><td>Fixed version</td><td><code>3.8.9-3+deb13u4</code></td></tr>
<tr><td>EPSS Score</td><td><code>1.335%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>68th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in gnutls. A remote attacker could exploit an issue in the Datagram Transport Layer Security (DTLS) packet reordering logic. The comparator function, responsible for ordering DTLS packets by sequence numbers, did not correctly handle packets with duplicate sequence numbers. This could lead to unstable packet ordering or undefined behavior, resulting in a denial of service.

---
- gnutls28 3.8.13-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1135319)
https://www.gnutls.org/security-new.html#GNUTLS-SA-2026-04-29-2
https://gitlab.com/gnutls/gnutls/-/issues/1848
Fixed by: https://gitlab.com/gnutls/gnutls/-/commit/f01e21441e29052a6f0963840794c41d3b3ee66d (3.8.13)
Fixed by: https://gitlab.com/gnutls/gnutls/-/commit/f341441fad91142897d83b44a175ffc8f925b76f (3.8.13)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33846?s=debian&n=gnutls28&ns=debian&t=deb&osn=debian&osv=13&vr=%3C3.8.9-3%2Bdeb13u4"><img alt="high : CVE--2026--33846" src="https://img.shields.io/badge/CVE--2026--33846-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.8.9-3+deb13u4</code></td></tr>
<tr><td>Fixed version</td><td><code>3.8.9-3+deb13u4</code></td></tr>
<tr><td>EPSS Score</td><td><code>1.263%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>66th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A heap buffer overflow vulnerability exists in the DTLS handshake fragment reassembly logic of GnuTLS. The issue arises in merge_handshake_packet() where incoming handshake fragments are matched and merged based solely on handshake type, without validating that the message_length field remains consistent across all fragments of the same logical message. An attacker can exploit this by sending crafted DTLS fragments with conflicting message_length values, causing the implementation to allocate a buffer based on a smaller initial fragment and subsequently write beyond its bounds using larger, inconsistent fragments. Because the merge operation does not enforce proper bounds checking against the allocated buffer size, this results in an out-of-bounds write on the heap. The vulnerability is remotely exploitable without authentication via the DTLS handshake path and can lead to application crashes or potential memory corruption.

---
- gnutls28 3.8.13-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1135319)
https://www.gnutls.org/security-new.html#GNUTLS-SA-2026-04-29-1
https://gitlab.com/gnutls/gnutls/-/work_items/1816
https://gitlab.com/gnutls/gnutls/-/work_items/1838
https://gitlab.com/gnutls/gnutls/-/work_items/1839
Fixed by: https://gitlab.com/gnutls/gnutls/-/commit/65ab33fa54e34fba69d793735b7df3d383d1ff78 (3.8.13)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33845?s=debian&n=gnutls28&ns=debian&t=deb&osn=debian&osv=13&vr=%3C3.8.9-3%2Bdeb13u4"><img alt="high : CVE--2026--33845" src="https://img.shields.io/badge/CVE--2026--33845-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.8.9-3+deb13u4</code></td></tr>
<tr><td>Fixed version</td><td><code>3.8.9-3+deb13u4</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.805%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>52nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw in GnuTLS DTLS handshake parsing allows malformed fragments with zero length and non-zero offset, leading to an integer underflow during reassembly and resulting in an out-of-bounds read. This issue is remotely exploitable and may cause information disclosure or denial of service.

---
- gnutls28 3.8.13-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1135319)
https://www.gnutls.org/security-new.html#GNUTLS-SA-2026-04-29-3
https://gitlab.com/gnutls/gnutls/-/issues/1811
Fixed by: https://gitlab.com/gnutls/gnutls/-/commit/e5b72c53c7d789d19d1d1cd10b275e87d0415413 (3.8.13)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42011?s=debian&n=gnutls28&ns=debian&t=deb&osn=debian&osv=13&vr=%3C3.8.9-3%2Bdeb13u4"><img alt="high : CVE--2026--42011" src="https://img.shields.io/badge/CVE--2026--42011-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.8.9-3+deb13u4</code></td></tr>
<tr><td>Fixed version</td><td><code>3.8.9-3+deb13u4</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.475%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>38th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in gnutls. This vulnerability occurs because permitted name constraints were incorrectly ignored when previous Certificate Authorities (CAs) only had excluded name constraints. A remote attacker could exploit this to bypass critical name constraint checks during certificate validation. This bypass could lead to the acceptance of invalid certificates, potentially enabling spoofing or man-in-the-middle attacks against affected systems.

---
- gnutls28 3.8.13-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1135319)
https://www.gnutls.org/security-new.html#GNUTLS-SA-2026-04-29-6
https://gitlab.com/gnutls/gnutls/-/work_items/1824
Fixed by: https://gitlab.com/gnutls/gnutls/-/commit/1dead2faec6320aaba321eb56f20d442df192b83 (3.8.13)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42012?s=debian&n=gnutls28&ns=debian&t=deb&osn=debian&osv=13&vr=%3C3.8.9-3%2Bdeb13u4"><img alt="high : CVE--2026--42012" src="https://img.shields.io/badge/CVE--2026--42012-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.8.9-3+deb13u4</code></td></tr>
<tr><td>Fixed version</td><td><code>3.8.9-3+deb13u4</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.354%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in gnutls. A remote attacker could exploit this vulnerability by presenting a specially crafted certificate that contains Uniform Resource Identifier (URI) or Service (SRV) Subject Alternative Names (SANs). This could cause the certificate validation process to incorrectly fall back to checking DNS hostnames against the Common Name (CN), potentially allowing the attacker to spoof legitimate services or intercept sensitive information.

---
- gnutls28 3.8.13-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1135319)
https://www.gnutls.org/security-new.html#GNUTLS-SA-2026-04-29-7
https://gitlab.com/gnutls/gnutls/-/issues/1802
Fixed by: https://gitlab.com/gnutls/gnutls/-/commit/8dcc6a1f48945997666ac9f10896819edd01a03b (3.8.13)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42010?s=debian&n=gnutls28&ns=debian&t=deb&osn=debian&osv=13&vr=%3C3.8.9-3%2Bdeb13u4"><img alt="high : CVE--2026--42010" src="https://img.shields.io/badge/CVE--2026--42010-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.8.9-3+deb13u4</code></td></tr>
<tr><td>Fixed version</td><td><code>3.8.9-3+deb13u4</code></td></tr>
<tr><td>EPSS Score</td><td><code>1.050%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>60th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in gnutls. Servers configured with RSA-PSK (Rivest–Shamir–Adleman – Pre-Shared Key) wrongfully matched usernames containing a NUL character with truncated usernames. A remote attacker could exploit this by sending a specially crafted username, leading to an authentication bypass. This vulnerability allows an attacker to gain unauthorized access by circumventing the authentication process.

---
- gnutls28 3.8.13-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1135319)
https://www.gnutls.org/security-new.html#GNUTLS-SA-2026-04-29-4
https://gitlab.com/gnutls/gnutls/-/issues/1850
Fixed by: https://gitlab.com/gnutls/gnutls/-/commit/cb1833afd9b6309563211b1c0a7c291f52ca98d5 (3.8.13)
Introduced with: https://gitlab.com/gnutls/gnutls/-/commit/d00638997fa269a975095d852633b48b2b64fbf9 (3.6.13)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42014?s=debian&n=gnutls28&ns=debian&t=deb&osn=debian&osv=13&vr=%3C3.8.9-3%2Bdeb13u4"><img alt="medium : CVE--2026--42014" src="https://img.shields.io/badge/CVE--2026--42014-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.8.9-3+deb13u4</code></td></tr>
<tr><td>Fixed version</td><td><code>3.8.9-3+deb13u4</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.150%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in GnuTLS. The `gnutls_pkcs11_token_set_pin` function, used for changing the Security Officer PIN, can lead to a use-after-free vulnerability. This occurs when an attacker attempts to change the PIN with a NULL old PIN for a token that lacks a protected authentication path.

---
- gnutls28 3.8.13-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1135319)
https://www.gnutls.org/security-new.html#GNUTLS-SA-2026-04-29-9
https://gitlab.com/gnutls/gnutls/-/issues/1766
Fixed by: https://gitlab.com/gnutls/gnutls/-/commit/3957f136e2ed23caf176a594b54b3827f5cef701 (3.8.13)
Introduced with: https://gitlab.com/gnutls/gnutls/-/commit/f68a86202bd1aaeb3988566def4374359b211875 (gnutls_3_6_5)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-3833?s=debian&n=gnutls28&ns=debian&t=deb&osn=debian&osv=13&vr=%3C3.8.9-3%2Bdeb13u4"><img alt="medium : CVE--2026--3833" src="https://img.shields.io/badge/CVE--2026--3833-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.8.9-3+deb13u4</code></td></tr>
<tr><td>Fixed version</td><td><code>3.8.9-3+deb13u4</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.566%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>43rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in gnutls. This vulnerability occurs because gnutls performs case-sensitive comparisons of `nameConstraints` labels, specifically for `dNSName` (DNS) or `rfc822Name` (email) constraints within `excludedSubtrees` or `permittedSubtrees`. A remote attacker can exploit this by crafting a leaf certificate with casing differences in the Subject Alternative Name (SAN), leading to a policy bypass where a certificate that should be rejected is instead accepted. This could result in unauthorized access or information disclosure.

---
- gnutls28 3.8.13-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1135319)
https://www.gnutls.org/security-new.html#GNUTLS-SA-2026-04-29-5
https://gitlab.com/gnutls/gnutls/-/work_items/1223
https://gitlab.com/gnutls/gnutls/-/issues/1803
https://gitlab.com/gnutls/gnutls/-/issues/1852
Fixed by: https://gitlab.com/gnutls/gnutls/-/commit/19f6508647bdcd3ce21130201e484d7ca6d962c5 (3.8.13)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42015?s=debian&n=gnutls28&ns=debian&t=deb&osn=debian&osv=13&vr=%3C3.8.9-3%2Bdeb13u4"><img alt="medium : CVE--2026--42015" src="https://img.shields.io/badge/CVE--2026--42015-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.8.9-3+deb13u4</code></td></tr>
<tr><td>Fixed version</td><td><code>3.8.9-3+deb13u4</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.727%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>50th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in gnutls. An off-by-one error exists in the PKCS#12 bag element bounds check. This vulnerability allows an remote attacker to write past the internal array of a PKCS#12 bag when appending to a bag that already contains 32 elements. This memory corruption could lead to a denial of service (DoS) or potentially other unspecified impacts.

---
- gnutls28 3.8.13-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1135319)
https://www.gnutls.org/security-new.html#GNUTLS-SA-2026-04-29-11
https://gitlab.com/gnutls/gnutls/-/work_items/1840
Fixed by: https://gitlab.com/gnutls/gnutls/-/commit/a3e7c50d3e1761e5ef1d4b225507cab8f2b2c3ca (3.8.13)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-5419?s=debian&n=gnutls28&ns=debian&t=deb&osn=debian&osv=13&vr=%3C3.8.9-3%2Bdeb13u4"><img alt="low : CVE--2026--5419" src="https://img.shields.io/badge/CVE--2026--5419-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.8.9-3+deb13u4</code></td></tr>
<tr><td>Fixed version</td><td><code>3.8.9-3+deb13u4</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.379%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>30th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in gnutls. The PKCS#7 padding check, performed during decryption, was not constant-time. This timing side-channel could allow a remote attacker to potentially leak sensitive information about the padding bytes through observable timing differences. This vulnerability is a form of information disclosure.

---
- gnutls28 3.8.13-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1135319)
[bullseye] - gnutls28 <not-affected> (Vulnerable code introduced later)
https://www.gnutls.org/security-new.html#GNUTLS-SA-2026-04-29-13
https://gitlab.com/gnutls/gnutls/-/issues/1815
Fixed by: https://gitlab.com/gnutls/gnutls/-/commit/1e627aa5ad95c6dc0518d94e9a009997b081a1ab (3.8.13)
Introduced with: https://gitlab.com/gnutls/gnutls/-/commit/4b45ad6923a7b1d296a111153663f23c13173b94 (3.7.7)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-3832?s=debian&n=gnutls28&ns=debian&t=deb&osn=debian&osv=13&vr=%3C3.8.9-3%2Bdeb13u4"><img alt="low : CVE--2026--3832" src="https://img.shields.io/badge/CVE--2026--3832-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.8.9-3+deb13u4</code></td></tr>
<tr><td>Fixed version</td><td><code>3.8.9-3+deb13u4</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.720%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>49th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in gnutls. A remote attacker could exploit this vulnerability by presenting a specially crafted Online Certificate Status Protocol (OCSP) response during a TLS handshake. Due to a logic error in how gnutls processes multi-record OCSP responses, a client with OCSP verification enabled may incorrectly accept a revoked server certificate, potentially leading to a compromise of trust.

---
- gnutls28 3.8.13-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1135319)
[trixie] - gnutls28 3.8.9-3+deb13u4
[bookworm] - gnutls28 <not-affected> (Vulnerable code introduced later)
[bullseye] - gnutls28 <not-affected> (Vulnerable code introduced later)
https://www.gnutls.org/security-new.html#GNUTLS-SA-2026-04-29-12
https://gitlab.com/gnutls/gnutls/-/issues/1801
https://gitlab.com/gnutls/gnutls/-/issues/1812
Introduced with: https://gitlab.com/gnutls/gnutls/-/commit/ae404fe8488dee424876b5963c00d7e041672415 (3.8.8)
Fixed by: https://gitlab.com/gnutls/gnutls/-/commit/731861b9de8dccaf7d3b0c1446833051e48670c2 (3.8.13)
Test: https://gitlab.com/gnutls/gnutls/-/commit/d52d5f4f383e8c5d8e9a03334f2421ff35d37d2e (3.8.13)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2011-3389?s=debian&n=gnutls28&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2011--3389" src="https://img.shields.io/badge/CVE--2011--3389-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>73.327%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>99th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The SSL protocol, as used in certain configurations in Microsoft Windows and Microsoft Internet Explorer, Mozilla Firefox, Google Chrome, Opera, and other products, encrypts data by using CBC mode with chained initialization vectors, which allows man-in-the-middle attackers to obtain plaintext HTTP headers via a blockwise chosen-boundary attack (BCBA) on an HTTPS session, in conjunction with JavaScript code that uses (1) the HTML5 WebSocket API, (2) the Java URLConnection API, or (3) the Silverlight WebClient API, aka a "BEAST" attack.

---
- sun-java6 <removed> (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=645881)
[lenny] - sun-java6 <no-dsa> (Non-free not supported)
[squeeze] - sun-java6 <no-dsa> (Non-free not supported)
- openjdk-6 6b23~pre11-1
- openjdk-7 7~b147-2.0-1
- iceweasel <not-affected> (Vulnerable code not present)
http://blog.mozilla.com/security/2011/09/27/attack-against-tls-protected-communications/
- chromium-browser 15.0.874.106~r107270-1
[squeeze] - chromium-browser <end-of-life>
- lighttpd 1.4.30-1
strictly speaking this is no lighttpd issue, but lighttpd adds a workaround
- curl 7.24.0-1
http://curl.haxx.se/docs/adv_20120124B.html
- python2.6 2.6.8-0.1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=684511)
[squeeze] - python2.6 <no-dsa> (Minor issue)
- python2.7 2.7.3~rc1-1
- python3.1 <unfixed> (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=678998)
[squeeze] - python3.1 <no-dsa> (Minor issue)
- python3.2 3.2.3~rc1-1
http://bugs.python.org/issue13885
python3.1 is fixed starting 3.1.5
- cyassl <removed>
- gnutls26 <removed> (unimportant)
- gnutls28 <unfixed> (unimportant)
No mitigation for gnutls, it is recommended to use TLS 1.1 or 1.2 which is supported since 2.0.0
- haskell-tls <unfixed> (unimportant)
No mitigation for haskell-tls, it is recommended to use TLS 1.1, which is supported since 0.2
- matrixssl <removed> (low)
[squeeze] - matrixssl <no-dsa> (Minor issue)
[wheezy] - matrixssl <no-dsa> (Minor issue)
matrixssl fix this upstream in 3.2.2
- bouncycastle 1.49+dfsg-1
[squeeze] - bouncycastle <no-dsa> (Minor issue)
[wheezy] - bouncycastle <no-dsa> (Minor issue)
No mitigation for bouncycastle, it is recommended to use TLS 1.1, which is supported since 1.4.9
- nss 3.13.1.with.ckbi.1.88-1
https://bugzilla.mozilla.org/show_bug.cgi?id=665814
https://hg.mozilla.org/projects/nss/rev/7f7446fcc7ab
- polarssl <unfixed> (unimportant)
No mitigation for polarssl, it is recommended to use TLS 1.1, which is supported in all releases
- tlslite <removed>
[wheezy] - tlslite <no-dsa> (Minor issue)
- pound 2.6-2
Pound 2.6-2 added an anti_beast.patch to mitigate BEAST attacks.
- erlang 1:15.b-dfsg-1
[squeeze] - erlang <no-dsa> (Minor issue)
- asterisk 1:13.7.2~dfsg-1
[jessie] - asterisk 1:11.13.1~dfsg-2+deb8u1
[wheezy] - asterisk <no-dsa> (Minor issue)
[squeeze] - asterisk <end-of-life> (Not supported in Squeeze LTS)
http://downloads.digium.com/pub/security/AST-2016-001.html
https://issues.asterisk.org/jira/browse/ASTERISK-24972
patch for 11 (jessie): https://code.asterisk.org/code/changelog/asterisk?cs=f233bcd81d85626ce5bdd27b05bc95d131faf3e4
all versions vulnerable, backport required for wheezy

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 4" src="https://img.shields.io/badge/H-4-e25d68"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 11" src="https://img.shields.io/badge/L-11-fce1a9"/> <!-- unspecified: 0 --><strong>openssl</strong> <code>3.5.5-1~deb13u2</code> (deb)</summary>

<small><code>pkg:deb/debian/openssl@3.5.5-1~deb13u2?os_distro=trixie&os_name=debian&os_version=13</code></small><br/>

```dockerfile
# postgresql-release.dockerfile (5:5)
FROM postgres:18.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-45447?s=debian&n=openssl&ns=debian&t=deb&osn=debian&osv=13&vr=%3C3.5.6-1%7Edeb13u2"><img alt="high : CVE--2026--45447" src="https://img.shields.io/badge/CVE--2026--45447-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.6-1~deb13u2</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.6-1~deb13u2</code></td></tr>
<tr><td>EPSS Score</td><td><code>2.719%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>84th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue summary: A specially crafted PKCS#7 or S/MIME signed message could trigger a use-after-free during PKCS#7 signature verification.  Impact summary: A use-after-free may result in process crashes, heap corruption, or potentially remote code execution.  When processing a PKCS#7 or S/MIME signed message, if the SignedData digestAlgorithms field is present as an empty ASN.1 SET, OpenSSL may incorrectly free a caller-owned BIO during PKCS7_verify(). A subsequent use of the BIO by the calling application results in a use-after-free condition.  In the common case this occurs when the application later calls BIO_free() on the BIO originally passed to PKCS7_verify(). Depending on allocator behavior and application-specific BIO usage patterns, this may result in a crash or other memory corruption. In some application contexts this may potentially be exploitable for remote code execution.  Applications that process PKCS#7 or S/MIME signed messages using OpenSSL PKCS#7 APIs may be affected. Applications using the CMS APIs for this processing are not affected.  The FIPS modules in 4.0, 3.6, 3.5, 3.4, and 3.0 are not affected by this issue, as the affected code is outside the OpenSSL FIPS module boundary.

---
- openssl 3.6.3-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1139674)
https://openssl-library.org/news/secadv/20260609.txt
Fixed by: https://github.com/openssl/openssl/commit/9dfd688ad2290fc5075cacbc9bf0c9a93eefed54 (openssl-3.0.21)
Fixed by: https://github.com/openssl/openssl/commit/18de9aba8294b5fb0915866cf3a1bb45f9599b8d (openssl-3.0.21)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-7383?s=debian&n=openssl&ns=debian&t=deb&osn=debian&osv=13&vr=%3C3.5.6-1%7Edeb13u2"><img alt="high : CVE--2026--7383" src="https://img.shields.io/badge/CVE--2026--7383-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.6-1~deb13u2</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.6-1~deb13u2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.358%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>28th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue summary: A signed integer overflow when sizing the destination buffer for Unicode output in ASN1_mbstring_ncopy() can lead to a heap buffer overflow.  Impact summary: A heap buffer overflow may lead to a crash or possibly attacker controlled code execution or other undefined behaviour.  In ASN1_mbstring_copy() and ASN1_mbstring_ncopy() the destination size for Unicode output is computed in a signed int: by left shift of the input character count for BMPSTRING (UTF-16) and UNIVERSALSTRING (UTF-32), and by summing per-character byte counts for UTF8STRING. The calculation overflows when the input reaches around 2^30 characters. In the worst case (UNIVERSALSTRING at 2^30 characters) the size wraps to zero, OPENSSL_malloc(1) is called, and the subsequent character copy writes several gigabytes past the one-byte allocation.  X.509 certificate processing routes through ASN1_STRING_set_by_NID(), whose DIRSTRING_TYPE mask excludes UNIVERSALSTRING and whose per-NID size limits cap the input length; no network protocol or certificate-handling path in OpenSSL exercises the overflow. Triggering the bug requires an application that calls ASN1_mbstring_copy() or ASN1_mbstring_ncopy() directly, or registers a custom string type via ASN1_STRING_TABLE_add(), with attacker-controlled input on the order of half a gigabyte or more. For these reasons this issue was assigned Low severity.  The FIPS modules in 4.0, 3.6, 3.5, 3.4 and 3.0 are not affected by this issue, as the affected code is outside the OpenSSL FIPS module boundary.

---
- openssl 3.6.3-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1139674)
https://openssl-library.org/news/secadv/20260609.txt
Fixed by: https://github.com/openssl/openssl/commit/bd17511070fb39a67bfa19682affb765e706a974 (openssl-3.0.21)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-9076?s=debian&n=openssl&ns=debian&t=deb&osn=debian&osv=13&vr=%3C3.5.6-1%7Edeb13u2"><img alt="high : CVE--2026--9076" src="https://img.shields.io/badge/CVE--2026--9076-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.6-1~deb13u2</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.6-1~deb13u2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.297%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue summary: When CMS password-based decryption (RFC 3211 / PWRI key unwrap) processes attacker-supplied CMS data, an attacker-chosen stream-mode KEK cipher can trigger a heap out-of-bounds read in kek_unwrap_key().  Impact summary: A heap buffer over-read may trigger a crash which leads to Denial of Service for an application if the input buffer ends at a memory page boundary and the following page is unmapped. There is no information disclosure as the over-read bytes are not revealed to the attacker.  The key unwrapping function performs a check-byte test as specified in the RFC that reads 7 bytes from a heap allocation that is based on the wrapped key length from the message. There is a minimum length check based on the block length of the wrapping cipher. However the cipher is selected from an OID carried in the attacker's PWRI keyEncryptionAlgorithm with no requirement that the cipher be a block cipher. When an attacker selects a stream-mode cipher the guard will be ineffective and the allocated buffer containing the unwrapped key can be too small to fit the check-bytes specified in the RFC and a buffer over-read can happen.  Applications calling CMS_decrypt() or CMS_decrypt_set1_password() (equivalently openssl cms -decrypt -pwri_password ...) on untrusted CMS data are vulnerable to this issue. No password knowledge is required: the over-read happens during the unwrap attempt before any authentication succeeds.  The over-read is limited to a few bytes and is not written to output, so there is no information disclosure. Triggering a crash requires the allocation to border unmapped memory, which is unlikely with the normal allocator.  The FIPS modules are not affected by this issue.

---
- openssl 3.6.3-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1139674)
https://openssl-library.org/news/secadv/20260609.txt
Fixed by: https://github.com/openssl/openssl/commit/eecbe330977e8d023aae1ca2d9bdbe983ef3fdc6 (openssl-3.0.21)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-34180?s=debian&n=openssl&ns=debian&t=deb&osn=debian&osv=13&vr=%3C3.5.6-1%7Edeb13u2"><img alt="high : CVE--2026--34180" src="https://img.shields.io/badge/CVE--2026--34180-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.6-1~deb13u2</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.6-1~deb13u2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.513%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>40th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue summary: Parsing a crafted DER-encoded ASN.1 structure with a primitive element whose content exceeds 2 gigabytes in length may cause a heap buffer over-read on 64-bit Unix and Unix-like platforms.  Impact summary: The heap buffer over-read may crash the application (Denial of Service) or to load into the decoded ASN.1 object contents of memory beyond the end of the input buffer.  More typically such ASN.1 elements would instead be truncated.  An integer truncation in OpenSSL's ASN.1 decoder causes the content length of an ASN.1 primitive element to be mishandled when it exceeds 2 gigabytes. In the worst case the truncated length is treated as a request to scan the binary content for a terminating zero byte, possibly causing OpenSSL to read either less than or beyond the end of the allocated buffer.  Applications that pass attacker-supplied data to d2i_X509(), d2i_PKCS7(), or any other d2i_* decoding function are affected. OpenSSL's own command-line tools are not vulnerable, as data read through the BIO layer is checked before it reaches the affected code. The issue only affects 64-bit Unix and Unix-like platforms; 32-bit platforms and 64-bit Windows are not affected.  The FIPS modules in 4.0, 3.6, 3.5, 3.4 and 3.0 are not affected by this issue, as the affected code is outside the OpenSSL FIPS module boundary.

---
- openssl 3.6.3-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1139674)
https://openssl-library.org/news/secadv/20260609.txt
Fixed by: https://github.com/openssl/openssl/commit/cbe418ae978539cf14a398a207dba834c0e93e83 (openssl-3.0.21)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42766?s=debian&n=openssl&ns=debian&t=deb&osn=debian&osv=13&vr=%3C3.5.6-1%7Edeb13u2"><img alt="medium : CVE--2026--42766" src="https://img.shields.io/badge/CVE--2026--42766-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.6-1~deb13u2</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.6-1~deb13u2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.595%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>44th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue summary: A specially crafted password-encrypted CMS message can trigger a NULL pointer dereference during CMS decryption.  Impact summary: This NULL pointer dereference leads to an application crash and a Denial of Service.  The CMS PasswordRecipientInfo.keyDerivationAlgorithm field is defined as OPTIONAL in the ASN.1 specification and may therefore be absent in specially crafted inputs. During the password-based CMS decryption the OpenSSL CMS implementation dereferences this field without first checking whether it was present.  An attacker who supplies such a CMS message to an application performing password-based CMS decryption can trigger an application crash, leading to a Denial of Service.  Applications that process password-encrypted CMS messages may be affected.  The FIPS modules in 4.0, 3.6, 3.5, 3.4, and 3.0 are not affected by this issue, as the affected code is outside the OpenSSL FIPS module boundary.

---
- openssl 3.6.3-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1139674)
https://openssl-library.org/news/secadv/20260609.txt
Fixed by: https://github.com/openssl/openssl/commit/3ff64913615d648cfbb6a6f1cf5529ae7ea829d7 (openssl-3.0.21)
Fixed by: https://github.com/openssl/openssl/commit/ba699b606969d20a108dda3cfe5422d4cc94eefb (openssl-3.0.21)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-45446?s=debian&n=openssl&ns=debian&t=deb&osn=debian&osv=13&vr=%3C3.5.6-1%7Edeb13u2"><img alt="low : CVE--2026--45446" src="https://img.shields.io/badge/CVE--2026--45446-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.6-1~deb13u2</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.6-1~deb13u2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.210%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue summary: The implementations of AES-SIV (RFC 5297) and AES-GCM-SIV (RFC 8452) mishandle the authentication of AAD (Additional Authenticated Data) with an empty ciphertext allowing a forgery of such messages.  Impact summary: An attacker can forge empty messages with arbitrary AAD to the victim's application using these ciphers.  AES-SIV (RFC 5297) and AES-GCM-SIV (RFC 8452) are nonce-misuse-resistant AEAD modes: they accept a key, nonce, optional AAD (bytes that are authenticated but not encrypted), and plaintext, and produces ciphertext plus a 16-byte tag. On decrypt, `EVP_DecryptFinal_ex()` is documented to return success only if the tag is verified succesfully.  In OpenSSL's provider implementation of these ciphers, the expected tag is computed only when decryption function is invoked with non-empty data. If the caller supplies AAD and then calls `EVP_DecryptFinal_ex()` without invocation of the ciphertext update, which can happen when the received ciphertext length is zero, the tag is never recalculated and still holds its all-zeros value.  When AES-GCM-SIV is used, an attacker who sends arbitrary AAD, empty ciphertext, and all-zeros tag passes authentication under any key they do not know, single-shot. When AES-SIV is used, for mounting the attack it's necessary for the application to reuse the decryption context without resetting the key.  AES-SIV is implemented since OpenSSL 3.0. AES-GCM-SIV is implemented since OpenSSL 3.2.  No protocols implemented in OpenSSL itself (TLS/CMS/PKCS7/HPKE/QUIC) support either AES-GCM-SIV or AES-SIV. To mount an attack, the applications must implement their own protocol and use the EVP interface. Also they must skip the ciphertext update when a message with an empty ciphertext arrives.  The FIPS modules in 4.0, 3.6, 3.5, 3.4, and 3.0 are not affected by this issue, as these algorithms are not FIPS approved and the affected code is outside the OpenSSL FIPS module boundary.

---
- openssl 3.6.3-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1139674)
[bullseye] - openssl <not-affected> (Vulnerable code not present)
https://openssl-library.org/news/secadv/20260609.txt
Fixed by: https://github.com/openssl/openssl/commit/71e2a5d263518cf5866043bd60ee4994d59e53a3 (openssl-3.0.21)
AES-SIV is implemented since OpenSSL 3.0. AES-GCM-SIV is implemented since OpenSSL 3.2.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-45445?s=debian&n=openssl&ns=debian&t=deb&osn=debian&osv=13&vr=%3C3.5.6-1%7Edeb13u2"><img alt="low : CVE--2026--45445" src="https://img.shields.io/badge/CVE--2026--45445-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.6-1~deb13u2</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.6-1~deb13u2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.320%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>24th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue summary: When an application drives an AES-OCB context through the public EVP_Cipher() one-shot interface, the application-supplied initialisation vector (IV) is silently discarded.  Impact summary: Every message encrypted under the same key uses the same effective nonce regardless of the IV supplied by the caller, resulting in (key, nonce) reuse and loss of confidentiality.  If the same code path is used to compute the authentication tag, the tag depends only on the (key, IV) pair and not on the plaintext or ciphertext, allowing universal forgery of arbitrary ciphertext from a single captured message.  OpenSSL provides two ways to drive a cipher: the documented streaming interface (EVP_CipherUpdate / EVP_CipherFinal_ex) and a lower-level one-shot, EVP_Cipher(), whose documentation explicitly recommends against use by applications in favour of EVP_CipherUpdate() and EVP_CipherFinal_ex().  The OCB provider's streaming handler flushes the application-supplied IV into the OCB context before processing data; the one-shot handler did not.  Every call to EVP_Cipher() on an AES-OCB context therefore ran with the all-zero key-derived offset state left by cipher initialisation, regardless of the caller's IV.  If EVP_EncryptFinal_ex() is subsequently used to obtain the authentication tag, the deferred IV setup runs at that point and clears the running checksum that should have been accumulated over the plaintext.  The resulting tag is a function of (key, IV) only and verifies against any ciphertext produced under the same (key, IV) pair.  The OpenSSL SSL/TLS implementation is not affected: AES-OCB is not a TLS cipher suite, and libssl does not call EVP_Cipher() in any case. Applications that drive AES-OCB through the documented streaming AEAD API (EVP_CipherUpdate / EVP_CipherFinal_ex) are not affected.  Only applications that combine the AES-OCB cipher with the EVP_Cipher() one-shot API are vulnerable.  The FIPS modules in 4.0, 3.6, 3.5, 3.4 and 3.0 are not affected by this issue, as AES-OCB is outside the OpenSSL FIPS module boundary.

---
- openssl 3.6.3-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1139674)
[bullseye] - openssl <not-affected> (see below)
https://openssl-library.org/news/secadv/20260609.txt
Fixed by: https://github.com/openssl/openssl/commit/323f0b6e7d530a4cb4336d50c88cb70f3ac2a451 (openssl-3.0.21)
OpenSSL 1.1.1 and 1.0.2 are not affected by this issue: in those
releases the IV is applied synchronously during cipher initialisation
and the AES-OCB one-shot rejects data submitted before the IV is set.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42770?s=debian&n=openssl&ns=debian&t=deb&osn=debian&osv=13&vr=%3C3.5.6-1%7Edeb13u2"><img alt="low : CVE--2026--42770" src="https://img.shields.io/badge/CVE--2026--42770-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.6-1~deb13u2</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.6-1~deb13u2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.259%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>17th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue summary: When EVP_PKEY_derive_set_peer() is called with a DHX (X9.42) peer key, the peer key is not properly checked for the subgroup membership.  Impact summary: A malicious peer which presents an X9.42 key carrying the victim's p and g parameters, a forged q = r (a small prime factor of the cofactor (p−1)/q_local), and a public value Y of order r can recover the victim's private key after a small number of key exchange attempts.  When EVP_PKEY_derive_set_peer() is called with a DHX (X9.42) peer key, the subgroup membership check Y^q ≡ 1 (mod p) is performed using the peer's own q parameter, not the local key's q. The peer's domain parameters are then matched against the domain parameters of the private key, but the value of q is not compared.  A malicious peer who presents an X9.42 key carrying the victim's p, g, a forged q = r (a small prime factor of the cofactor), and a public value Y of order r passes all checks. The shared secret then takes only r distinct values, leaking priv mod r. Repeating for each small-prime factor of the cofactor and combining via CRT recovers the full private key (Lim–Lee / small-subgroup-confinement attack).  The realistic attack surface is narrow: principally CMP deployments with long-lived RA/CA DHX keys and bespoke enterprise or government applications using X9.42 DHX static keys with interactive protocols and therefore this issue was assigned Low severity.  The FIPS modules in 4.0, 3.6, 3.5, 3.4, and 3.0 are affected by this issue.

---
- openssl 3.6.3-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1139674)
[bullseye] - openssl <not-affected> (Vulnerable code introduced later)
https://openssl-library.org/news/secadv/20260609.txt
Fixed by: https://github.com/openssl/openssl/commit/7fbfde7677ed8808828bf00ff01c937ca04bdda2 (openssl-3.0.21)
Introduced with: https://github.com/openssl/openssl/commit/46eee7104d77f9d303e06a398febdc60fd014d33

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42769?s=debian&n=openssl&ns=debian&t=deb&osn=debian&osv=13&vr=%3C3.5.6-1%7Edeb13u2"><img alt="low : CVE--2026--42769" src="https://img.shields.io/badge/CVE--2026--42769-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.6-1~deb13u2</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.6-1~deb13u2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.262%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue Summary: An error in the callback used to verify the certificate provided in a Root CA key update Certificate Management Protocol (CMP) message response rendered the certificate validation ineffectual, which could lead to escalation of credentials from the Registration Authority (RA) level to the root Certification Authority (root CA) level.  Impact Summary: The Registration Autority could replace the root CA certificate for the CMP clients with an arbitrary root CA certificate.  One of the parts of the Certificate Management Protocol (CMP), specified in RFC 9810, is Root Certification Authority (root CA) key Rollover, which is sent by the server in a message with type 'id-it-rootCaKeyUpdate'. As part of these messages, 'newWithOld' certificate, the new root CA certificate signed with the old root CA key, is provided, and verifying its signature is crucial for transferring the trust from the old CA key to the new one.  The 'id-it-rootCaKeyUpdate' messages are expected to be processed with OSSL_CMP_get1_rootCaKeyUpdate(), that is expected to verify the 'newWithOld' certificate.  A typo in the certificate chain building code led to adding an incorrect certificate ('newWithOld' instead of 'oldRoot') to the certificate chain, rendering the certificate verification process ineffectual (only the issuer name and the algorithm OIDs were verified by other parts of the verification code).  An attacker who already has credentials that satisfy the CMP message protection checks can generate a new key pair and use a crafted self-signed certificate in its 'id-it-rootCaKeyUpdate' CMP messages which affected CMP clients would accept as a new trust anchor.  Significant preconditions for the attack (having valid RA-level credentials) are the reason the issue was assigned Low severity.  The FIPS modules are not affected by this issue, as the affected code is outside the OpenSSL FIPS module boundary.

---
- openssl 3.6.3-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1139674)
[trixie] - openssl 3.5.6-1~deb13u2
[bookworm] - openssl <not-affected> (Vulnerable code not present)
[bullseye] - openssl <not-affected> (Vulnerable code not present)
https://openssl-library.org/news/secadv/20260609.txt

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42768?s=debian&n=openssl&ns=debian&t=deb&osn=debian&osv=13&vr=%3C3.5.6-1%7Edeb13u2"><img alt="low : CVE--2026--42768" src="https://img.shields.io/badge/CVE--2026--42768-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.6-1~deb13u2</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.6-1~deb13u2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.350%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue summary: The CMS_decrypt and PKCS7_decrypt functions are vulnerable to Bleichenbacher-style attack when an attacker is able to provide the CMS or S/MIME messages and observe the error code and/or decryption output.  Impact summary: The Bleichenbacher-style attack allows an attacker to use the victim's vulnerable application as a way to decrypt or sign messages with the victim's private RSA key.  The attack is possible in 2 variants.  1. The decryption API (CMS_decrypt(), PKCS7_decrypt()) is used without providing the recipient certificate. In this case OpenSSL iterates over every KeyTransRecipientInfo (KTRI) without stopping at the first success.  An attacker who authors a message with two KTRI entries — the first one wrapping a real CEK under the victim's public key, the second with an arbitrary probe ciphertext — obtains opportunity to iterate the 2nd KTRI to get a valid PKCS#1 v1.5 padding if the error code of the application is available.  That is a Bleichenbacher oracle (Bleichenbacher, CRYPTO '98): an adaptive-chosen-ciphertext side channel from which the attacker decrypts any RSA ciphertext to the victim's key or forges any PKCS#1 v1.5 signature under it.  2. When the decryption API (CMS_decrypt(), PKCS7_decrypt()) is provided with the recipient certificate, and the recipient is not found, a random key is substituted.  An attacker who authors a message and is able to compare both error code and the result of the decryption, can mount a Bleichenbacher oracle.  We are not aware of any applications that provide a remote attacker an opportunity to mount an attack described in these scenarios. We consider the existence of such application very unlikely, and for this reason this CVE has been evaluated as Low severity.  To avoid these attacks, when RSA PKCS#1 v1.5 Key Transport is in use, the invoked EVP_PKEY_decrypt() will use the implicit rejection mechanism described in draft-irtf-cfrg-rsa-guidance. In previous OpenSSL releases the implicit rejection was explicitly disabled.  The implicit rejection mechanism always returns a plaintext value, the symmetric key. This result is deterministic for the ciphertext and the private key.  The length of the decryption result can happen to match the length of the key of the symmetric cipher that was used for the content encryption. When a certificate is not provided, the last RecipientInfo producing a key that looks valid will be used. It may cause getting garbage content on decryption. As a proper way to deal with this a recipient certificate has to be provided to identify the particular RecipientInfo for decryption.  The FIPS modules in 4.0, 3.6, 3.5, and 3.4 are not affected by this issue, as CMS and S/MIME processing happens outside the OpenSSL FIPS module boundary.

---
- openssl 3.6.3-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1139674)
[trixie] - openssl 3.5.6-1~deb13u2
[bookworm] - openssl <not-affected> (Vulnerable code not present)
[bullseye] - openssl <not-affected> (Vulnerable code not present)
https://openssl-library.org/news/secadv/20260609.txt

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42767?s=debian&n=openssl&ns=debian&t=deb&osn=debian&osv=13&vr=%3C3.5.6-1%7Edeb13u2"><img alt="low : CVE--2026--42767" src="https://img.shields.io/badge/CVE--2026--42767-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.6-1~deb13u2</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.6-1~deb13u2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.349%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue summary: An attacker-controlled CMP (Certificate Management Protocol) server could trigger a NULL pointer dereference in a CMP client application.  Impact summary: A NULL pointer dereference causes a crash of the application and a Denial of Service.  An attacker controlling a CMP server (or acting as a man-in-the-middle) could craft a CMP response containing a CRMF (Certificate Request Message Format) CertRepMessage with an EncryptedValue structure where the symmAlg field has an algorithm OID but no parameters field. When the OpenSSL CMP client processes this response, the NULL dereference occurs, causing a crash of the CMP client.  Applications that process untrusted CMP/CRMF messages may be affected.  The FIPS modules in 4.0, 3.6, 3.5, 3.4, and 3.0 are not affected by this issue, as the affected code is outside the OpenSSL FIPS module boundary.

---
- openssl 3.6.3-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1139674)
[trixie] - openssl 3.5.6-1~deb13u2
[bookworm] - openssl <no-dsa> (Minor issue; can be fixed in next update)
[bullseye] - openssl <not-affected> (Vulnerable code introduced later)
https://openssl-library.org/news/secadv/20260609.txt
Fixed by: https://github.com/openssl/openssl/commit/61a86a8cd73546c9fea916f3d304c1293e05c046 (openssl-3.0.21)
Introduced with: https://github.com/openssl/openssl/commit/a61b7f2fa6de3bf8d5b1436e66c52d6bf7150ae4

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-42764?s=debian&n=openssl&ns=debian&t=deb&osn=debian&osv=13&vr=%3C3.5.6-1%7Edeb13u2"><img alt="low : CVE--2026--42764" src="https://img.shields.io/badge/CVE--2026--42764-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.6-1~deb13u2</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.6-1~deb13u2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.684%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>48th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue summary: Receiving a QUIC initial packet with an invalid token may trigger a NULL pointer dereference in the OpenSSL QUIC server with address validation disabled.  Impact summary: NULL pointer dereference typically causes abnormal termination of the affected QUIC server process and a Denial of Service.  If the address validation is disabled in the OpenSSL QUIC server implementation, an attacker can crash the server by sending an initial packet with an invalid or expired token.  By default, the client address validation is enabled in the OpenSSL QUIC server implementation, which makes the default configuration not vulnerable to this issue. However if the SSL_LISTENER_FLAG_NO_VALIDATE is used with the SSL_new_listener() call, the address validation is disabled making the vulnerable code reachable.  The FIPS modules in 4.0, 3.6, 3.5, 3.4, and 3.0 are not affected by this issue, as the affected code is outside the OpenSSL FIPS module boundary.

---
- openssl 3.6.3-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1139674)
[trixie] - openssl 3.5.6-1~deb13u2
[bookworm] - openssl <not-affected> (Vulnerable code not present)
[bullseye] - openssl <not-affected> (Vulnerable code not present)
https://openssl-library.org/news/secadv/20260609.txt

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-34183?s=debian&n=openssl&ns=debian&t=deb&osn=debian&osv=13&vr=%3C3.5.6-1%7Edeb13u2"><img alt="low : CVE--2026--34183" src="https://img.shields.io/badge/CVE--2026--34183-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.6-1~deb13u2</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.6-1~deb13u2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.511%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>40th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue summary: Remote peer may exhaust heap memory of the QUIC server or client by flooding it with packets containing PATH_CHALLENGE frames.  Impact summary: A malicious remote peer can cause an unbounded memory allocation which can lead to an abnormal termination of the application acting as a QUIC client or server and a Denial of Service.  A remote peer may exhaust heap memory by flooding the local QUIC stack with PATH_CHALLENGE frames. The local QUIC stack allocates a PATH_RESPONSE frame for every PATH_CHALLENGE it receives. The allocated PATH_RESPONSE frame gets freed only when the remote peer acknowledges reception of the PATH_RESPONSE frame which will not be done by a malicious peer.  The FIPS modules in 4.0, 3.6, 3.5, 3.4, and 3.0 are not affected by this issue. The QUIC stack is outside of OpenSSL FIPS module boundary.

---
- openssl 3.6.3-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1139674)
[trixie] - openssl 3.5.6-1~deb13u2
[bookworm] - openssl <not-affected> (Vulnerable code not present)
[bullseye] - openssl <not-affected> (Vulnerable code not present)
https://openssl-library.org/news/secadv/20260609.txt

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-34182?s=debian&n=openssl&ns=debian&t=deb&osn=debian&osv=13&vr=%3C3.5.6-1%7Edeb13u2"><img alt="low : CVE--2026--34182" src="https://img.shields.io/badge/CVE--2026--34182-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.6-1~deb13u2</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.6-1~deb13u2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.237%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>15th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue Summary: Cryptographic Message Services (CMS) processing fails to perform sufficient input validation on the cipher and tag length fields of AuthEnvelopedData containers, leading to various potential compromises.  Impact Summary: Attackers making use of these vulnerabilities may achieve key-equivalent functionality for a given CMS recipient and/or bypass integrity validation for a given message.  In one use case, an attacker may send a CMS message containing AuthEnvelopedData with the cipher specified as a non-AEAD cipher.  OpenSSL erroneously allows this selection, and attempts to decrypt and validate the message.  An on-path attacker who captures one legitimate AES-GCM AuthEnvelopedData addressed to the victim can re-emit it with the recipientInfos set left byte-for-byte intact, so the victim's private key still unwraps the genuine CEK (the content-encryption key), but with the inner OID rewritten to AES-256-OFB (Output Feedback Mode, an unauthenticated keystream mode) and with an attacker-chosen IV and ciphertext. The victim initializes AES-256-OFB under the real CEK, never consults the MAC field, and CMS_decrypt() returns success.  If the application under attack responds to the attacker with any indicator showing success or failure of the decryption effort, it is possible for the attacker to use this as an oracle to obtain key equivalent functionality for the CEK used for the chosen recipient of the message.  In another use case, an attacker can reduce the tag length of the chosen AEAD cipher for a given AuthEnvelopedData container to be a single byte long, allowing an attacker to brute force CMS decryption, producing an integrity bypass for applications that trust CMS_decrypt() to reject modified content.  The FIPS modules are not affected by this issue.

---
- openssl 3.6.3-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1139674)
[bullseye] - openssl <not-affected> (Vulnerable code introduced later)
https://openssl-library.org/news/secadv/20260609.txt
Fixed by: https://github.com/openssl/openssl/commit/03c1f4d45fb963aee7d5833390c507cd290182bc (openssl-3.0.21)
Fixed by: https://github.com/openssl/openssl/commit/f48adad79a21fed9bfc31ea3ef65bee810e12ddd (openssl-3.0.21)
Introduced with: https://github.com/openssl/openssl/commit/924663c36d47066d5307937da77fed7e872730c7

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-34181?s=debian&n=openssl&ns=debian&t=deb&osn=debian&osv=13&vr=%3C3.5.6-1%7Edeb13u2"><img alt="low : CVE--2026--34181" src="https://img.shields.io/badge/CVE--2026--34181-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.6-1~deb13u2</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.6-1~deb13u2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.196%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue Summary: The PKCS#12 file processing fails to perform sufficient input validation for files that use Password-Based Message Authentication Code 1 (PBMAC1) integrity mechanism allowing a certificate and private key forgery.  Impact Summary: An attacker impersonating a user can cause a service reading PKCS#12 files to accept forged certificates and private keys with a 1 in 256 probability.  If a service accepting PKCS#12 files is using passwords for authenticating the received files, the attacker can create unencrypted PKCS#12 files that use PBMAC1 authentication that specifies an HMAC key of only one byte, allowing them to craft a file that will be accepted with a 1 in 256 probability. That would then cause the service to accept a certificate and private key controlled by the attacker.  The FIPS modules are not affected by this issue, as the affected code is outside the OpenSSL FIPS module boundary.

---
- openssl 3.6.3-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1139674)
[trixie] - openssl 3.5.6-1~deb13u2
[bookworm] - openssl <not-affected> (Vulnerable code not present)
[bullseye] - openssl <not-affected> (Vulnerable code not present)
https://openssl-library.org/news/secadv/20260609.txt

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2010-0928?s=debian&n=openssl&ns=debian&t=deb&osn=debian&osv=13&vr=%3E%3D3.2.1-3"><img alt="low : CVE--2010--0928" src="https://img.shields.io/badge/CVE--2010--0928-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=3.2.1-3</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.515%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>40th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

OpenSSL 0.9.8i on the Gaisler Research LEON3 SoC on the Xilinx Virtex-II Pro FPGA uses a Fixed Width Exponentiation (FWE) algorithm for certain signature calculations, and does not verify the signature before providing it to a caller, which makes it easier for physically proximate attackers to determine the private key via a modified supply voltage for the microprocessor, related to a "fault-based attack."

---
http://www.eecs.umich.edu/~valeria/research/publications/DATE10RSA.pdf
https://github.com/openssl/openssl/discussions/24540
Fault injection based attacks are not within OpenSSLs threat model according
to the security policy: https://www.openssl.org/policies/general/security-policy.html

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 9" src="https://img.shields.io/badge/L-9-fce1a9"/> <!-- unspecified: 0 --><strong>glibc</strong> <code>2.41-12+deb13u2</code> (deb)</summary>

<small><code>pkg:deb/debian/glibc@2.41-12%2Bdeb13u2?os_distro=trixie&os_name=debian&os_version=13</code></small><br/>

```dockerfile
# postgresql-release.dockerfile (5:5)
FROM postgres:18.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-4046?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=13&vr=%3C2.41-12%2Bdeb13u3"><img alt="high : CVE--2026--4046" src="https://img.shields.io/badge/CVE--2026--4046-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.41-12+deb13u3</code></td></tr>
<tr><td>Fixed version</td><td><code>2.41-12+deb13u3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.357%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>28th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The iconv() function in the GNU C Library versions 2.43 and earlier may crash due to an assertion failure when converting inputs from the IBM1390 or IBM1399 character sets, which may be used to remotely crash an application.    This vulnerability can be trivially mitigated by removing the IBM1390 and IBM1399 character sets from systems that do not need them.

---
- glibc 2.42-15 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1132499)
[trixie] - glibc 2.41-12+deb13u3
[bookworm] - glibc 2.36-9+deb12u14
https://sourceware.org/bugzilla/show_bug.cgi?id=33980
https://sourceware.org/git/?p=glibc.git;a=blob_plain;f=advisories/GLIBC-SA-2026-0007
Fixed by: https://sourceware.org/git/?p=glibc.git;a=commit;h=d6f08d1cf027f4eb2ba289a6cc66853722d4badc

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-4438?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=13&vr=%3C2.41-12%2Bdeb13u3"><img alt="low : CVE--2026--4438" src="https://img.shields.io/badge/CVE--2026--4438-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.41-12+deb13u3</code></td></tr>
<tr><td>Fixed version</td><td><code>2.41-12+deb13u3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.189%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling gethostbyaddr or gethostbyaddr_r with a configured nsswitch.conf that specifies the library's DNS backend in the GNU C library version 2.34 to version 2.43 could result in an invalid DNS hostname being returned to the caller in violation of the DNS specification.

---
- glibc 2.42-14 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1131887)
[trixie] - glibc 2.41-12+deb13u3
[bookworm] - glibc 2.36-9+deb12u14
[bullseye] - glibc <not-affected> (introduced in v2.34)
https://sourceware.org/bugzilla/show_bug.cgi?id=34015
Proposed patch: https://inbox.sourceware.org/libc-alpha/20260320194250.1089143-1-carlos@<!-- -->redhat.com/
https://www.openwall.com/lists/oss-security/2026/03/23/2
Introduced with: https://sourceware.org/git/?p=glibc.git;a=commit;h=e32547d661a43da63368e488b6cfa9c53b4dcf92 (glibc-2.37)
Backported and introduced in glibc-2.36 branch: https://sourceware.org/git/?p=glibc.git;a=commit;h=77f523c473878ec0051582ef15161c6982879095
Backported and introduced in glibc-2.34 branch: https://sourceware.org/git/?p=glibc.git;a=commit;h=32e5db37684ffcbc6ae34fcc6cdcf28670506baa

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-4437?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=13&vr=%3C2.41-12%2Bdeb13u3"><img alt="low : CVE--2026--4437" src="https://img.shields.io/badge/CVE--2026--4437-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.41-12+deb13u3</code></td></tr>
<tr><td>Fixed version</td><td><code>2.41-12+deb13u3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.292%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling gethostbyaddr or gethostbyaddr_r with a configured nsswitch.conf that specifies the library's DNS backend in the GNU C Library version 2.34 to version 2.43 could, with a crafted response from the configured DNS server, result in a violation of the DNS specification that causes the application to treat a non-answer section of the DNS response as a valid answer.

---
- glibc 2.42-14 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1131435)
[trixie] - glibc 2.41-12+deb13u3
[bookworm] - glibc 2.36-9+deb12u14
[bullseye] - glibc <not-affected> (introduced in v2.34)
https://sourceware.org/bugzilla/show_bug.cgi?id=34014
Proposed patch: https://inbox.sourceware.org/libc-alpha/20260320194250.1089143-1-carlos@<!-- -->redhat.com/
https://www.openwall.com/lists/oss-security/2026/03/23/2
Introduced with: https://sourceware.org/git/?p=glibc.git;a=commit;h=e32547d661a43da63368e488b6cfa9c53b4dcf92 (glibc-2.37)
Backported and introduced in glibc-2.36 branch: https://sourceware.org/git/?p=glibc.git;a=commit;h=77f523c473878ec0051582ef15161c6982879095
Backported and introduced in glibc-2.34 branch: https://sourceware.org/git/?p=glibc.git;a=commit;h=32e5db37684ffcbc6ae34fcc6cdcf28670506baa

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2019-9192?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2019--9192" src="https://img.shields.io/badge/CVE--2019--9192-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>2.447%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>82nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In the GNU C Library (aka glibc or libc6) through 2.29, check_dst_limits_calc_pos_1 in posix/regexec.c has Uncontrolled Recursion, as demonstrated by '(|)(\\1\\1)*' in grep, a different issue than CVE-2018-20796. NOTE: the software maintainer disputes that this is a vulnerability because the behavior occurs only with a crafted pattern

---
- glibc <unfixed> (unimportant)
- eglibc <removed> (unimportant)
https://sourceware.org/bugzilla/show_bug.cgi?id=24269

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2019-1010025?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2019--1010025" src="https://img.shields.io/badge/CVE--2019--1010025-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>2.286%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>81st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GNU Libc current is affected by: Mitigation bypass. The impact is: Attacker may guess the heap addresses of pthread_created thread. The component is: glibc. NOTE: the vendor's position is "ASLR bypass itself is not a vulnerability.

---
- glibc <unfixed> (unimportant)
Not treated as a security issue by upstream
https://sourceware.org/bugzilla/show_bug.cgi?id=22853

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2019-1010024?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2019--1010024" src="https://img.shields.io/badge/CVE--2019--1010024-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>3.220%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>87th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GNU Libc current is affected by: Mitigation bypass. The impact is: Attacker may bypass ASLR using cache of thread stack and heap. The component is: glibc. NOTE: Upstream comments indicate "this is being treated as a non-security bug and no real threat.

---
- glibc <unfixed> (unimportant)
Not treated as a security issue by upstream
https://sourceware.org/bugzilla/show_bug.cgi?id=22852

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2019-1010023?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2019--1010023" src="https://img.shields.io/badge/CVE--2019--1010023-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>3.069%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>86th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GNU Libc current is affected by: Re-mapping current loaded library with malicious ELF file. The impact is: In worst case attacker may evaluate privileges. The component is: libld. The attack vector is: Attacker sends 2 ELF files to victim and asks to run ldd on it. ldd execute code. NOTE: Upstream comments indicate "this is being treated as a non-security bug and no real threat.

---
- glibc <unfixed> (unimportant)
Not treated as a security issue by upstream
https://sourceware.org/bugzilla/show_bug.cgi?id=22851

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2019-1010022?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2019--1010022" src="https://img.shields.io/badge/CVE--2019--1010022-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>3.249%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>87th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GNU Libc current is affected by: Mitigation bypass. The impact is: Attacker may bypass stack guard protection. The component is: nptl. The attack vector is: Exploit stack buffer overflow vulnerability and use this bypass vulnerability to bypass stack guard. NOTE: Upstream comments indicate "this is being treated as a non-security bug and no real threat.

---
- glibc <unfixed> (unimportant)
Not treated as a security issue by upstream
https://sourceware.org/bugzilla/show_bug.cgi?id=22850

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2018-20796?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2018--20796" src="https://img.shields.io/badge/CVE--2018--20796-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>5.804%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>92nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In the GNU C Library (aka glibc or libc6) through 2.29, check_dst_limits_calc_pos_1 in posix/regexec.c has Uncontrolled Recursion, as demonstrated by '(\227|)(\\1\\1|t1|\\\2537)+' in grep.

---
- glibc <unfixed> (unimportant)
- eglibc <removed> (unimportant)
https://debbugs.gnu.org/cgi/bugreport.cgi?bug=34141
https://lists.gnu.org/archive/html/bug-gnulib/2019-01/msg00108.html
No treated as vulnerability: https://sourceware.org/glibc/wiki/Security%20Exceptions

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2010-4756?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2010--4756" src="https://img.shields.io/badge/CVE--2010--4756-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>2.633%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>84th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The glob implementation in the GNU C Library (aka glibc or libc6) allows remote authenticated users to cause a denial of service (CPU and memory consumption) via crafted glob expressions that do not match any pathnames, as demonstrated by glob expressions in STAT commands to an FTP daemon, a different vulnerability than CVE-2010-2632.

---
- glibc <removed> (unimportant)
- eglibc <unfixed> (unimportant)
That's standard POSIX behaviour implemented by (e)glibc. Applications using
glob need to impose limits for themselves

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 4" src="https://img.shields.io/badge/M-4-fbb552"/> <img alt="low: 4" src="https://img.shields.io/badge/L-4-fce1a9"/> <!-- unspecified: 0 --><strong>systemd</strong> <code>257.9-1~deb13u1</code> (deb)</summary>

<small><code>pkg:deb/debian/systemd@257.9-1~deb13u1?os_distro=trixie&os_name=debian&os_version=13</code></small><br/>

```dockerfile
# postgresql-release.dockerfile (5:5)
FROM postgres:18.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-4105?s=debian&n=systemd&ns=debian&t=deb&osn=debian&osv=13&vr=%3C257.13-1%7Edeb13u1"><img alt="medium : CVE--2026--4105" src="https://img.shields.io/badge/CVE--2026--4105-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;257.13-1~deb13u1</code></td></tr>
<tr><td>Fixed version</td><td><code>257.13-1~deb13u1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.142%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in systemd. The systemd-machined service contains an Improper Access Control vulnerability due to insufficient validation of the class parameter in the RegisterMachine D-Bus (Desktop Bus) method. A local unprivileged user can exploit this by attempting to register a machine with a specific class value, which may leave behind a usable, attacker-controlled machine object. This allows the attacker to invoke methods on the privileged object, leading to the execution of arbitrary commands with root privileges on the host system.

---
- systemd 260~rc3-1
[trixie] - systemd 257.13-1~deb13u1
[bookworm] - systemd 252.39-1~deb12u2
https://github.com/systemd/systemd/security/advisories/GHSA-4h6x-r8vx-3862
Introduced with: https://github.com/systemd/systemd/commit/fbe550738d03b178bb004a1390e74115e904118a (v225)
Fixed by: https://github.com/systemd/systemd/commit/6df5f80bd374be1b45c52d740e88f0236da922c7 (v260-rc3)
Fixed by: https://github.com/systemd/systemd/commit/497d0172416cbb5b70f96b95399d041407c223bd (v259.4)
Fixed by: https://github.com/systemd/systemd/commit/6941d92dc299667036cbe264435971cec59ebc76 (v257.12)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-40226?s=debian&n=systemd&ns=debian&t=deb&osn=debian&osv=13&vr=%3C257.13-1%7Edeb13u1"><img alt="medium : CVE--2026--40226" src="https://img.shields.io/badge/CVE--2026--40226-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;257.13-1~deb13u1</code></td></tr>
<tr><td>Fixed version</td><td><code>257.13-1~deb13u1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.072%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>0th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In nspawn in systemd 233 through 259 before 260, an escape-to-host action can occur via a crafted optional config file.

---
- systemd 260~rc3-1
[trixie] - systemd 257.13-1~deb13u1
[bookworm] - systemd 252.39-1~deb12u2
https://github.com/systemd/systemd/security/advisories/GHSA-9mj4-rrc3-gjcx
Fixed by: https://github.com/systemd/systemd/commit/61bceb1bff4b1f9c126b18dc971ca3e6d8c71c40 (v260-rc3)
Fixed by: https://github.com/systemd/systemd/commit/7b85f5498a958e5bb660c703b8f4a71cceed3373 (v260-rc3)
Fixed by: https://github.com/systemd/systemd/commit/773fd3b6e72e6c83cbb1cfc1cb20f3793db8649a (v257.12)
Fixed by: https://github.com/systemd/systemd/commit/bfa0a842822c4f79da9d47f8a773fd128d8f8a0a (v257.12)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-40225?s=debian&n=systemd&ns=debian&t=deb&osn=debian&osv=13&vr=%3C257.13-1%7Edeb13u1"><img alt="medium : CVE--2026--40225" src="https://img.shields.io/badge/CVE--2026--40225-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;257.13-1~deb13u1</code></td></tr>
<tr><td>Fixed version</td><td><code>257.13-1~deb13u1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.144%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In udev in systemd before 260, local root execution can occur via malicious hardware devices and unsanitized kernel output.

---
- systemd 260~rc4-1
[trixie] - systemd 257.13-1~deb13u1
[bookworm] - systemd 252.39-1~deb12u2
https://github.com/systemd/systemd/security/advisories/GHSA-vpfq-8p5f-jcqx
Fixed by: https://github.com/systemd/systemd/commit/16325b35fa6ecb25f66534a562583ce3b96d52f3 (v260-rc3)
Fixed by: https://github.com/systemd/systemd/commit/54f880b02ecf7362e630ffc885d1466df6ee6820 (v260-rc4)
Fixed by: https://github.com/systemd/systemd/commit/03bb697b8df0339c37f4b845025320b261aeb7cc (v257.12)
Fixed by: https://github.com/systemd/systemd/commit/5887e72ff87d3a66a4c3fa91897fbec1545f4d3d (v257.13)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-29111?s=debian&n=systemd&ns=debian&t=deb&osn=debian&osv=13&vr=%3C257.13-1%7Edeb13u1"><img alt="medium : CVE--2026--29111" src="https://img.shields.io/badge/CVE--2026--29111-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;257.13-1~deb13u1</code></td></tr>
<tr><td>Fixed version</td><td><code>257.13-1~deb13u1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.121%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

systemd, a system and service manager, (as PID 1) hits an assert and freezes execution when an unprivileged IPC API call is made with spurious data. On version v249 and older the effect is not an assert, but stack overwriting, with the attacker controlled content. From version v250 and newer this is not possible as the safety check causes an assert instead. This IPC call was added in v239, so versions older than that are not affected. Versions 260-rc1, 259.2, 258.5, and 257.11 contain patches. No known workarounds are available.

---
- systemd 260~rc2-1
[trixie] - systemd 257.13-1~deb13u1
[bookworm] - systemd 252.39-1~deb12u2
https://github.com/systemd/systemd/security/advisories/GHSA-gx6q-6f99-m764
Fixed by: https://github.com/systemd/systemd/commit/42aee39107fbdd7db1ccd402a2151822b2805e9f (v260-rc2)
Fixed by: https://github.com/systemd/systemd/commit/efa6ba2ab625aaa160ac435a09e6482fc63bdbe8 (v260-rc2)
Fixed by: https://github.com/systemd/systemd/commit/20021e7686426052e3a7505425d7e12085feb2a6 (v257.11)
Fixed by: https://github.com/systemd/systemd/commit/7ac3220213690e8a8d6d2a6e81e43bd1dce01d69 (v257.11)
Fixed by: https://github.com/systemd/systemd/commit/21167006574d6b83813c7596759b474f56562412 (v257.11)
Fixed by: https://github.com/systemd/systemd/commit/54588d2dedff54bfb6036670820650e4ea74628f (v257.11)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-31439?s=debian&n=systemd&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2023--31439" src="https://img.shields.io/badge/CVE--2023--31439-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.352%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An issue was discovered in systemd 253. An attacker can modify the contents of past events in a sealed log file and then adjust the file such that checking the integrity shows no error, despite modifications. NOTE: the vendor reportedly sent "a reply denying that any of the finding was a security vulnerability."

---
- systemd <unfixed> (unimportant)
Disputed by upstream
https://github.com/kastel-security/Journald/blob/main/journald-publication.pdf

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-31438?s=debian&n=systemd&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2023--31438" src="https://img.shields.io/badge/CVE--2023--31438-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.328%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>25th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An issue was discovered in systemd 253. An attacker can truncate a sealed log file and then resume log sealing such that checking the integrity shows no error, despite modifications. NOTE: the vendor reportedly sent "a reply denying that any of the finding was a security vulnerability."

---
- systemd <unfixed> (unimportant)
Disputed by upstream
https://github.com/kastel-security/Journald/blob/main/journald-publication.pdf

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-31437?s=debian&n=systemd&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2023--31437" src="https://img.shields.io/badge/CVE--2023--31437-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.344%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>26th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An issue was discovered in systemd 253. An attacker can modify a sealed log file such that, in some views, not all existing and sealed log messages are displayed. NOTE: the vendor reportedly sent "a reply denying that any of the finding was a security vulnerability."

---
- systemd <unfixed> (unimportant)
Disputed by upstream
https://github.com/kastel-security/Journald/blob/main/journald-publication.pdf

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2013-4392?s=debian&n=systemd&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2013--4392" src="https://img.shields.io/badge/CVE--2013--4392-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.472%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>37th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

systemd, when updating file permissions, allows local users to change the permissions and SELinux security contexts for arbitrary files via a symlink attack on unspecified files.

---
- systemd <unfixed> (unimportant; bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=725357)
[wheezy] - systemd <not-affected> (/etc/tmpfiles.d not supported in Wheezy)
https://bugzilla.redhat.com/show_bug.cgi?id=859060
only relevant to systems running systemd along with selinux

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 4" src="https://img.shields.io/badge/L-4-fce1a9"/> <!-- unspecified: 0 --><strong>krb5</strong> <code>1.21.3-5</code> (deb)</summary>

<small><code>pkg:deb/debian/krb5@1.21.3-5?os_distro=trixie&os_name=debian&os_version=13</code></small><br/>

```dockerfile
# postgresql-release.dockerfile (5:5)
FROM postgres:18.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-40356?s=debian&n=krb5&ns=debian&t=deb&osn=debian&osv=13&vr=%3C1.21.3-5%2Bdeb13u1"><img alt="medium : CVE--2026--40356" src="https://img.shields.io/badge/CVE--2026--40356-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.21.3-5+deb13u1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.21.3-5+deb13u1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.460%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>37th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In MIT Kerberos 5 (aka krb5) before 1.22.3, there is an integer underflow and resultant out-of-bounds read if an application calls gss_accept_sec_context() on a system with a NegoEx mechanism registered in /etc/gss/mech. An unauthenticated remote attacker can trigger this, possibly causing the process to terminate in parse_message.

---
- krb5 1.22.1-2.1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1135317)
https://github.com/krb5/krb5/commit/2e75f0d9362fb979f5fc92829431a590a130929f

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-40355?s=debian&n=krb5&ns=debian&t=deb&osn=debian&osv=13&vr=%3C1.21.3-5%2Bdeb13u1"><img alt="medium : CVE--2026--40355" src="https://img.shields.io/badge/CVE--2026--40355-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.21.3-5+deb13u1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.21.3-5+deb13u1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.461%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>37th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In MIT Kerberos 5 (aka krb5) before 1.22.3, there is a NULL pointer dereference if an application calls gss_accept_sec_context() on a system with a NegoEx mechanism registered in /etc/gss/mech. An unauthenticated remote attacker can trigger this, causing the process to terminate in parse_nego_message.

---
- krb5 1.22.1-2.1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1135317)
https://github.com/krb5/krb5/commit/2e75f0d9362fb979f5fc92829431a590a130929f

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-11850?s=debian&n=krb5&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2026--11850" src="https://img.shields.io/badge/CVE--2026--11850-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.261%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>17th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An integer underflow vulnerability was found in MIT krb5 in the berval2tl_data() function in plugins/kdb/ldap/libkdb_ldap/ldap_principal2.c. The function performs an unsigned subtraction (bv_len - 2) without a prior bounds check. When bv_len is 0 or 1, the subtraction wraps to a large value which is then truncated to uint16_t, yielding 0xFFFE (65534) or 0xFFFF (65535). The subsequent malloc succeeds and memcpy reads up to 65534 bytes from a 0-1 byte buffer, resulting in a heap out-of-bounds read. The attack vector involves a malicious or compromised LDAP KDB backend returning a krbExtraData attribute with bv_len < 2, triggering the underflow when the KDC or kadmind reads principal data.

---
- krb5 1.22.1-3 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1139821; unimportant)
https://krbdev.mit.edu/rt/Ticket/Display.html?id=9206
https://github.com/krb5/krb5/commit/2a5fd83d4436583f2ddc0e193269a4d800ee45c4
No security impact, doesn't cross any security boundary, see https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1139821

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-26461?s=debian&n=krb5&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2024--26461" src="https://img.shields.io/badge/CVE--2024--26461-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>1.128%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>62nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Kerberos 5 (aka krb5) 1.21.2 contains a memory leak vulnerability in /krb5/src/lib/gssapi/krb5/k5sealv3.c.

---
- krb5 <unfixed> (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1098754; unimportant)
https://github.com/LuMingYinDetect/krb5_defects/blob/main/krb5_detect_2.md
Fixed by: https://github.com/krb5/krb5/commit/c5f9c816107f70139de11b38aa02db2f1774ee0d
Codepath cannot be triggered via API calls, negligible security impact
https://mailman.mit.edu/pipermail/kerberos/2024-March/023095.html

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-26458?s=debian&n=krb5&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2024--26458" src="https://img.shields.io/badge/CVE--2024--26458-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.815%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>53rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Kerberos 5 (aka krb5) 1.21.2 contains a memory leak in /krb5/src/lib/rpc/pmap_rmt.c.

---
- krb5 <unfixed> (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1098754; unimportant)
https://github.com/LuMingYinDetect/krb5_defects/blob/main/krb5_detect_1.md
Fixed by: https://github.com/krb5/krb5/commit/c5f9c816107f70139de11b38aa02db2f1774ee0d
Unused codepath, negligible security impact
https://mailman.mit.edu/pipermail/kerberos/2024-March/023095.html

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2018-5709?s=debian&n=krb5&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2018--5709" src="https://img.shields.io/badge/CVE--2018--5709-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>2.067%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>79th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An issue was discovered in MIT Kerberos 5 (aka krb5) through 1.16. There is a variable "dbentry->n_key_data" in kadmin/dbutil/dump.c that can store 16-bit data but unknowingly the developer has assigned a "u4" variable to it, which is for 32-bit data. An attacker can use this vulnerability to affect other artifacts of the database as we know that a Kerberos database dump file contains trusted data.

---
- krb5 <unfixed> (unimportant; bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=889684)
https://github.com/poojamnit/Kerberos-V5-1.16-Vulnerabilities/tree/master/Integer%20Overflow
non-issue, codepath is only run on trusted input, potential integer
overflow is non-issue

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>tar</strong> <code>1.35+dfsg-3.1</code> (deb)</summary>

<small><code>pkg:deb/debian/tar@1.35%2Bdfsg-3.1?os_distro=trixie&os_name=debian&os_version=13</code></small><br/>

```dockerfile
# postgresql-release.dockerfile (5:5)
FROM postgres:18.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-45582?s=debian&n=tar&ns=debian&t=deb&osn=debian&osv=13&vr=%3E%3D1.35%2Bdfsg-3.1"><img alt="medium : CVE--2025--45582" src="https://img.shields.io/badge/CVE--2025--45582-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.35+dfsg-3.1</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.433%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>35th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GNU Tar through 1.35 allows file overwrite via directory traversal in crafted TAR archives, with a certain two-step process. First, the victim must extract an archive that contains a ../ symlink to a critical directory. Second, the victim must extract an archive that contains a critical file, specified via a relative pathname that begins with the symlink name and ends with that critical file's name. Here, the extraction follows the symlink and overwrites the critical file. This bypasses the protection mechanism of "Member name contains '..'" that would occur for a single TAR archive that attempted to specify the critical file via a ../ approach. For example, the first archive can contain "x -> ../../../../../home/victim/.ssh" and the second archive can contain x/authorized_keys. This can affect server applications that automatically extract any number of user-supplied TAR archives, and were relying on the blocking of traversal. This can also affect software installation processes in which "tar xf" is run more than once (e.g., when installing a package can automatically install two dependencies that are set up as untrusted tarballs instead of official packages).

---
Disputed tar issue, works as documented per upstream:
https://lists.gnu.org/archive/html/bug-tar/2025-08/msg00012.html
https://github.com/i900008/vulndb/blob/main/Gnu_tar_vuln.md

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2005-2541?s=debian&n=tar&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2005--2541" src="https://img.shields.io/badge/CVE--2005--2541-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>3.992%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>89th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Tar 1.15.1 does not properly warn the user when extracting setuid or setgid files, which may allow local users or remote attackers to gain privileges.

---
This is intended behaviour, after all tar is an archiving tool and you
need to give -p as a command line flag
- tar <unfixed> (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=328228; unimportant)

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>libcap2</strong> <code>1:2.75-10+b8</code> (deb)</summary>

<small><code>pkg:deb/debian/libcap2@1%3A2.75-10%2Bb8?os_distro=trixie&os_name=debian&os_version=13</code></small><br/>

```dockerfile
# postgresql-release.dockerfile (5:5)
FROM postgres:18.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-4878?s=debian&n=libcap2&ns=debian&t=deb&osn=debian&osv=13&vr=%3C1%3A2.75-10%2Bdeb13u1"><img alt="medium : CVE--2026--4878" src="https://img.shields.io/badge/CVE--2026--4878-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1:2.75-10+deb13u1</code></td></tr>
<tr><td>Fixed version</td><td><code>1:2.75-10+deb13u1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.188%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in libcap. A local unprivileged user can exploit a Time-of-check-to-time-of-use (TOCTOU) race condition in the `cap_set_file()` function. This allows an attacker with write access to a parent directory to redirect file capability updates to an attacker-controlled file. By doing so, capabilities can be injected into or stripped from unintended executables, leading to privilege escalation.

---
- libcap2 1:2.78-1
[trixie] - libcap2 1:2.75-10+deb13u1
[bookworm] - libcap2 1:2.66-4+deb12u3
[bullseye] - libcap2 <postponed> (Minor issue)
https://github.com/AndrewGMorgan/libcap_mirror/security/advisories/GHSA-f78v-p5hx-m7hh
https://sites.google.com/site/fullycapable/release-notes-for-libcap#h.x4zn8j3lss6r
Fixed by: https://git.kernel.org/pub/scm/libs/libcap/libcap.git/commit/?id=286ace1259992bd0c5d9016715833f2e148ac596 (libcap-2.78)

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 5" src="https://img.shields.io/badge/L-5-fce1a9"/> <!-- unspecified: 0 --><strong>openldap</strong> <code>2.6.10+dfsg-1</code> (deb)</summary>

<small><code>pkg:deb/debian/openldap@2.6.10%2Bdfsg-1?os_distro=trixie&os_name=debian&os_version=13</code></small><br/>

```dockerfile
# postgresql-release.dockerfile (5:5)
FROM postgres:18.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-22185?s=debian&n=openldap&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2026--22185" src="https://img.shields.io/badge/CVE--2026--22185-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.127%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

OpenLDAP Lightning Memory-Mapped Database (LMDB) versions up to and including 0.9.14, prior to commit 8e1fda8, contain a heap buffer underflow in the readline() function of mdb_load. When processing malformed input containing an embedded NUL byte, an unsigned offset calculation can underflow and cause an out-of-bounds read of one byte before the allocated heap buffer. This can cause mdb_load to crash, leading to a limited denial-of-service condition.

---
- openldap <unfixed> (unimportant)
- lmdb <unfixed> (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1126287)
[trixie] - lmdb <no-dsa> (Minor issue)
[bookworm] - lmdb <no-dsa> (Minor issue)
[bullseye] - lmdb <postponed> (Minor issue, OOB read)
https://seclists.org/fulldisclosure/2026/Jan/5
https://bugs.openldap.org/show_bug.cgi?id=10421
Fixed by: https://git.openldap.org/openldap/openldap/-/commit/8e1fda85532a3c74276df38a42d234dcdfa1e40d
OpenLDAP bundles lmdb but does not build mdb_load.c

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2020-15719?s=debian&n=openldap&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2020--15719" src="https://img.shields.io/badge/CVE--2020--15719-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>2.417%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>82nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

libldap in certain third-party OpenLDAP packages has a certificate-validation flaw when the third-party package is asserting RFC6125 support. It considers CN even when there is a non-matching subjectAltName (SAN). This is fixed in, for example, openldap-2.4.46-10.el8 in Red Hat Enterprise Linux.

---
- openldap <unfixed> (unimportant; bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=965184)
https://bugs.openldap.org/show_bug.cgi?id=9266
https://bugzilla.redhat.com/show_bug.cgi?id=1740070
RedHat/CentOS applied patch: https://git.centos.org/rpms/openldap/raw/67459960064be9d226d57c5f82aaba0929876813/f/SOURCES/openldap-tlso-dont-check-cn-when-bad-san.patch
OpenLDAP upstream did dispute the issue as beeing valid, as the current libldap
behaviour does conform with RFC4513. RFC6125 does not superseed the rules for
verifying service identity provided in specifications for existing application
protocols published prior to RFC6125, like RFC4513 for LDAP.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2017-17740?s=debian&n=openldap&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2017--17740" src="https://img.shields.io/badge/CVE--2017--17740-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>7.022%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>93rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

contrib/slapd-modules/nops/nops.c in OpenLDAP through 2.4.45, when both the nops module and the memberof overlay are enabled, attempts to free a buffer that was allocated on the stack, which allows remote attackers to cause a denial of service (slapd crash) via a member MODDN operation.

---
- openldap <unfixed> (unimportant)
http://www.openldap.org/its/index.cgi/Incoming?id=8759
nops slapd-module not built

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2017-14159?s=debian&n=openldap&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2017--14159" src="https://img.shields.io/badge/CVE--2017--14159-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.349%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

slapd in OpenLDAP 2.4.45 and earlier creates a PID file after dropping privileges to a non-root account, which might allow local users to kill arbitrary processes by leveraging access to this non-root account for PID file modification before a root script executes a "kill `cat /pathname`" command, as demonstrated by openldap-initscript.

---
- openldap <unfixed> (unimportant)
http://www.openldap.org/its/index.cgi?findid=8703
Negligible security impact, but filed #877512

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2015-3276?s=debian&n=openldap&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2015--3276" src="https://img.shields.io/badge/CVE--2015--3276-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>5.333%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>92nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The nss_parse_ciphers function in libraries/libldap/tls_m.c in OpenLDAP does not properly parse OpenSSL-style multi-keyword mode cipher strings, which might cause a weaker than intended cipher to be used and allow remote attackers to have unspecified impact via unknown vectors.

---
- openldap <unfixed> (unimportant)
Debian builds with GNUTLS, not NSS

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 4" src="https://img.shields.io/badge/L-4-fce1a9"/> <img alt="unspecified: 3" src="https://img.shields.io/badge/U-3-lightgrey"/><strong>util-linux</strong> <code>2.41-5</code> (deb)</summary>

<small><code>pkg:deb/debian/util-linux@2.41-5?os_distro=trixie&os_name=debian&os_version=13</code></small><br/>

```dockerfile
# postgresql-release.dockerfile (5:5)
FROM postgres:18.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-53614?s=debian&n=util-linux&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2026--53614" src="https://img.shields.io/badge/CVE--2026--53614-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

- util-linux 2.42.2-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1140196)
[bookworm] - util-linux <not-affected> (Vulnerable code introduced later)
[bullseye] - util-linux <not-affected> (Vulnerable code introduced later)
https://github.com/util-linux/util-linux/security/advisories/GHSA-67r7-8m5w-22wx
Fixed by: https://github.com/util-linux/util-linux/commit/31e37c1c7dcf25b76ccf41391fe934a75644c661 (v2.42.2)
Fixed by: https://github.com/util-linux/util-linux/commit/cc81bbcec598cb91f0eb8456282f33eed820ed5f (v2.41.5)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-53612?s=debian&n=util-linux&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2026--53612" src="https://img.shields.io/badge/CVE--2026--53612-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

- util-linux 2.42.2-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1140194)
[bookworm] - util-linux <not-affected> (Vulnerable code introduced later)
[bullseye] - util-linux <not-affected> (Vulnerable code introduced later)
https://github.com/util-linux/util-linux/security/advisories/GHSA-g8wm-75wr-g2vh
Fixed by: https://github.com/util-linux/util-linux/commit/d0c5adaeb3a3d823aba1377794de8f009b8152cc (v2.42.2)
Fixed by: https://github.com/util-linux/util-linux/commit/897a08c2b11dfa66975c3d24d63c7bf5f5be1a7c (v2.41.5)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-14104?s=debian&n=util-linux&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2025--14104" src="https://img.shields.io/badge/CVE--2025--14104-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.179%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>8th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in util-linux. This vulnerability allows a heap buffer overread when processing 256-byte usernames, specifically within the `setpwnam()` function, affecting SUID (Set User ID) login-utils utilities writing to the password database.

---
- util-linux 2.41.3-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1122058; unimportant)
https://bugzilla.redhat.com/show_bug.cgi?id=2419369
https://github.com/util-linux/util-linux/issues/3585
https://github.com/util-linux/util-linux/pull/3586
Fixed by: https://github.com/util-linux/util-linux/commit/aaa9e718c88d6916b003da7ebcfe38a3c88df8e6
Fixed by: https://github.com/util-linux/util-linux/commit/9a36d77012c4c771f8d51eba46b6e62c29bf572a
Affected code in setpwnam() is only used by chsh and chfn which are not build
in any Debian released binary package from src:util-linux and explicitly configured
as with --disable-chfn-chsh since 2.25-1.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-0563?s=debian&n=util-linux&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2022--0563" src="https://img.shields.io/badge/CVE--2022--0563-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.430%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>35th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in the util-linux chfn and chsh utilities when compiled with Readline support. The Readline library uses an "INPUTRC" environment variable to get a path to the library config file. When the library cannot parse the specified file, it prints an error message containing data from the file. This flaw allows an unprivileged user to read root-owned files, potentially leading to privilege escalation. This flaw affects util-linux versions prior to 2.37.4.

---
- util-linux <unfixed> (unimportant)
https://bugzilla.redhat.com/show_bug.cgi?id=2053151
https://lore.kernel.org/util-linux/20220214110609.msiwlm457ngoic6w@<!-- -->ws.net.home/T/#u
https://github.com/util-linux/util-linux/commit/faa5a3a83ad0cb5e2c303edbfd8cd823c9d94c17
util-linux in Debian does build with readline support but chfn and chsh are provided
by src:shadow and util-linux is configured with --disable-chfn-chsh

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-53615?s=debian&n=util-linux&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="unspecified : CVE--2026--53615" src="https://img.shields.io/badge/CVE--2026--53615-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

- util-linux <unfixed> (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1140197)
https://github.com/util-linux/util-linux/security/advisories/GHSA-h4rw-gv36-wmp5

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-53613?s=debian&n=util-linux&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="unspecified : CVE--2026--53613" src="https://img.shields.io/badge/CVE--2026--53613-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

- util-linux 2.42.2-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1140195)
https://github.com/util-linux/util-linux/security/advisories/GHSA-8gj5-72r3-428g
Fixed by: https://github.com/util-linux/util-linux/commit/0d3d55975aa3492c62fd345eac38f41cd166c0b0 (v2.42.2)
Fixed by: https://github.com/util-linux/util-linux/commit/0b010025a0e429bc80355c94db86a843395d49e2 (v2.41.5)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-13595?s=debian&n=util-linux&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="unspecified : CVE--2026--13595" src="https://img.shields.io/badge/CVE--2026--13595-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.131%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in the libblkid library of util-linux. During nested partition probing, the BSD, Minix, Solaris x86, and UnixWare partition probers cache a raw pointer to a parent partition entry in a dynamically allocated array. When subsequent partition additions cause the array to be reallocated, this pointer becomes stale, leading to a heap use-after-free read. An attacker who can present a crafted block device image (for example, via USB insertion or a loop-mounted disk image) can trigger this flaw without user interaction, as libblkid is invoked automatically by udev/udisks as root on block-device hot-plug events. This could lead to limited information disclosure or denial of service.

---
- util-linux 2.42.2-1
https://bugzilla.redhat.com/show_bug.cgi?id=2494101
https://github.com/util-linux/util-linux/commit/c0186f14fbdb02f64c8e0ba701ce727ea764ff4c (master)
https://github.com/util-linux/util-linux/commit/60ca8616ac1a223bfb5a713047a37136dd9481ef (v2.42.2)
https://github.com/util-linux/util-linux/commit/132d9c8aa15a8efd0a23d8ca7ed8b98f365e84fa (v2.41.5)

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 4" src="https://img.shields.io/badge/L-4-fce1a9"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>libxml2</strong> <code>2.12.7+dfsg+really2.9.14-2.1+deb13u2</code> (deb)</summary>

<small><code>pkg:deb/debian/libxml2@2.12.7%2Bdfsg%2Breally2.9.14-2.1%2Bdeb13u2?os_distro=trixie&os_name=debian&os_version=13</code></small><br/>

```dockerfile
# postgresql-release.dockerfile (5:5)
FROM postgres:18.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-1757?s=debian&n=libxml2&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2026--1757" src="https://img.shields.io/badge/CVE--2026--1757-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.194%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was identified in the interactive shell of the xmllint utility, part of the libxml2 project, where memory allocated for user input is not properly released under certain conditions. When a user submits input consisting only of whitespace, the program skips command execution but fails to free the allocated buffer. Repeating this action causes memory to continuously accumulate. Over time, this can exhaust system memory and terminate the xmllint process, creating a denial-of-service condition on the local system.

---
- libxml2 2.15.2+dfsg-0.1 (unimportant)
https://gitlab.gnome.org/GNOME/libxml2/-/issues/1009
Fixed by: https://gitlab.gnome.org/GNOME/libxml2/-/commit/160c8a43ba37dfb07ebe6446fbad9d0973d9279d
Fixed by: https://gitlab.gnome.org/GNOME/libxml2/-/commit/5446460ad3229579c91506317fb80ab333d44414 (v2.15.2)
Negligible security impact, memory leak in xmllint CLI utility

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-11979?s=debian&n=libxml2&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2026--11979" src="https://img.shields.io/badge/CVE--2026--11979-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.148%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

libxml2 is vulnerable to multiple stack-based buffer overflows in the xmlcatalog utility when running in --shell mode. The usershell() function processes user input using fixed-size stack buffers without proper bounds checking. By supplying an overly long input line, an attacker can overflow internal buffers (command, arg, and argv) during input parsing. This results in memory corruption within the stack frame. Successful exploitation may cause a crash or potentially allow arbitrary code execution in the context of the xmlcatalog process.  This issue has been fixed in the commit c2e233fc.  NOTE: The maintainers of this project did not agree that this issue is a vulnerability and considered it a bug.

---
- libxml2 <unfixed> (unimportant)
https://gitlab.gnome.org/GNOME/libxml2/-/work_items/1124
https://gitlab.gnome.org/GNOME/libxml2/-/commit/c2e233fc1b341685fc99621b2768b503f777a72e
Not considered a security issue upstream

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-8732?s=debian&n=libxml2&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2025--8732" src="https://img.shields.io/badge/CVE--2025--8732-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.143%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A vulnerability was found in libxml2 up to 2.14.5. It has been declared as problematic. This vulnerability affects the function xmlParseSGMLCatalog of the component xmlcatalog. The manipulation leads to uncontrolled recursion. Attacking locally is a requirement. The exploit has been disclosed to the public and may be used. The real existence of this vulnerability is still doubted at the moment. The code maintainer explains, that "[t]he issue can only be triggered with untrusted SGML catalogs and it makes absolutely no sense to use untrusted catalogs. I also doubt that anyone is still using SGML catalogs at all."

---
- libxml2 2.15.2+dfsg-0.1 (unimportant)
https://gitlab.gnome.org/GNOME/libxml2/-/issues/958
https://gitlab.gnome.org/GNOME/libxml2/-/issues/958#note_2505853
Fixed by: https://gitlab.gnome.org/GNOME/libxml2/-/commit/3425dece47c8db600f8d7328ae2d7ddfaa0d7b2d (v2.15.2)
Issue can only be triggered with untrusted SGML, negligible security impact

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-12863?s=debian&n=libxml2&ns=debian&t=deb&osn=debian&osv=13&vr=%3E%3D2.12.7%2Bdfsg%2Breally2.9.14-2.1%2Bdeb13u2"><img alt="low : CVE--2025--12863" src="https://img.shields.io/badge/CVE--2025--12863-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=2.12.7+dfsg+really2.9.14-2.1+deb13u2</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.068%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>17th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in the xmlSetTreeDoc() function of the libxml2 XML parsing library. This function is responsible for updating document pointers when XML nodes are moved between documents. Due to improper handling of namespace references, a namespace pointer may remain linked to a freed memory region when the original document is destroyed. As a result, subsequent operations that access the namespace can lead to a use-after-free condition, causing an application crash.

---
REJECTED

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-6653?s=debian&n=libxml2&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="unspecified : CVE--2026--6653" src="https://img.shields.io/badge/CVE--2026--6653-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.289%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Use After Free in libxml2's xmlParseInternalSubset from GNOME libxml2 version 2.9.11 to 2.11.0 allows a remote attacker to cause a denial-of-service via maliciously crafted XML input with improper entity resolution handling.

---
- libxml2 2.14.5+dfsg-0.1
https://www.openwall.com/lists/oss-security/2026/06/22/3
https://gitlab.gnome.org/GNOME/libxml2/-/work_items/1058
Fixed by: https://gitlab.gnome.org/GNOME/libxml2/-/commit/463bbeeca1805b5c4828f50d0fefc4eebaf620df (v2.11.0)
Mark 2.14.5+dfsg-0.1 as the first version fixed in unstable as from 2.12.7+dfsg-1
the version was reverted back to a 2.9.14 based one.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 3" src="https://img.shields.io/badge/L-3-fce1a9"/> <!-- unspecified: 0 --><strong>libgcrypt20</strong> <code>1.11.0-7</code> (deb)</summary>

<small><code>pkg:deb/debian/libgcrypt20@1.11.0-7?os_distro=trixie&os_name=debian&os_version=13</code></small><br/>

```dockerfile
# postgresql-release.dockerfile (5:5)
FROM postgres:18.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-41989?s=debian&n=libgcrypt20&ns=debian&t=deb&osn=debian&osv=13&vr=%3C1.11.0-7%2Bdeb13u1"><img alt="low : CVE--2026--41989" src="https://img.shields.io/badge/CVE--2026--41989-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.11.0-7+deb13u1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.11.0-7+deb13u1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.180%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>8th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Libgcrypt before 1.12.2 sometimes allows a heap-based buffer overflow and denial of service via crafted ECDH ciphertext to gcry_pk_decrypt.

---
- libgcrypt20 1.12.2-1
[bullseye] - libgcrypt20 <not-affected> (Vulnerable code introduced later)
https://www.openwall.com/lists/oss-security/2026/04/21/1
https://dev.gnupg.org/T8211
Fixed by: https://git.gnupg.org/cgi-bin/gitweb.cgi?p=libgcrypt.git;a=commit;h=2d3d732c9bf87cc10729f69678dd9e6862f99fa3 (libgcrypt-1.12.2)
Introduced by: https://git.gnupg.org/cgi-bin/gitweb.cgi?p=libgcrypt.git;a=commit;h=bbe15758c893dbf546416c1a6bccdad1ab000ad7 (libgcrypt-1.9.0)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-2236?s=debian&n=libgcrypt20&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2024--2236" src="https://img.shields.io/badge/CVE--2024--2236-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>1.114%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>62nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A timing-based side-channel flaw was found in libgcrypt's RSA implementation. This issue may allow a remote attacker to initiate a Bleichenbacher-style attack, which can lead to the decryption of RSA ciphertexts.

---
- libgcrypt20 <unfixed> (unimportant; bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1065683)
https://bugzilla.redhat.com/show_bug.cgi?id=2268268
https://lists.gnupg.org/pipermail/gcrypt-devel/2024-March/005607.html
https://github.com/tomato42/marvin-toolkit/tree/master/example/libgcrypt
https://people.redhat.com/~hkario/marvin/
https://dev.gnupg.org/T7136
https://gitlab.com/redhat-crypto/libgcrypt/libgcrypt-mirror/-/merge_requests/17
Not in scope for libgcrypt security policy, work ongoing to add support in the protocol layer

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2018-6829?s=debian&n=libgcrypt20&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2018--6829" src="https://img.shields.io/badge/CVE--2018--6829-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>1.811%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>76th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

cipher/elgamal.c in Libgcrypt through 1.8.2, when used to encrypt messages directly, improperly encodes plaintexts, which allows attackers to obtain sensitive information by reading ciphertext data (i.e., it does not have semantic security in face of a ciphertext-only attack). The Decisional Diffie-Hellman (DDH) assumption does not hold for Libgcrypt's ElGamal implementation.

---
- libgcrypt20 <unfixed> (unimportant)
- libgcrypt11 <removed> (unimportant)
- gnupg1 <unfixed> (unimportant)
- gnupg <removed> (unimportant)
https://github.com/weikengchen/attack-on-libgcrypt-elgamal
https://github.com/weikengchen/attack-on-libgcrypt-elgamal/wiki
https://lists.gnupg.org/pipermail/gcrypt-devel/2018-February/004394.html
GnuPG uses ElGamal in hybrid mode only.
This is not a vulnerability in libgcrypt, but in an application using
it in an insecure manner, see also
https://lists.gnupg.org/pipermail/gcrypt-devel/2018-February/004401.html

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 2" src="https://img.shields.io/badge/L-2-fce1a9"/> <!-- unspecified: 0 --><strong>coreutils</strong> <code>9.7-3</code> (deb)</summary>

<small><code>pkg:deb/debian/coreutils@9.7-3?os_distro=trixie&os_name=debian&os_version=13</code></small><br/>

```dockerfile
# postgresql-release.dockerfile (5:5)
FROM postgres:18.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-5278?s=debian&n=coreutils&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2025--5278" src="https://img.shields.io/badge/CVE--2025--5278-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.223%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>13th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in GNU Coreutils. The sort utility's begfield() function is vulnerable to a heap buffer under-read. The program may access memory outside the allocated buffer if a user runs a crafted command using the traditional key format. A malicious input could lead to a crash or leak sensitive data.

---
- coreutils <unfixed> (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1106733; unimportant)
https://bugzilla.redhat.com/show_bug.cgi?id=2368764
https://lists.gnu.org/archive/html/bug-coreutils/2025-05/msg00036.html
https://lists.gnu.org/archive/html/bug-coreutils/2025-05/msg00040.html
https://cgit.git.savannah.gnu.org/cgit/coreutils.git/commit/?id=8c9602e3a145e9596dc1a63c6ed67865814b6633
https://www.openwall.com/lists/oss-security/2025/05/27/2
https://debbugs.gnu.org/cgi/bugreport.cgi?bug=78507
Crash in CLI tool, no security impact

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2017-18018?s=debian&n=coreutils&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2017--18018" src="https://img.shields.io/badge/CVE--2017--18018-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.348%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In GNU Coreutils through 8.29, chown-core.c in chown and chgrp does not prevent replacement of a plain file with a symlink during use of the POSIX "-R -L" options, which allows local users to modify the ownership of arbitrary files by leveraging a race condition.

---
- coreutils <unfixed> (unimportant)
http://lists.gnu.org/archive/html/coreutils/2017-12/msg00045.html
https://www.openwall.com/lists/oss-security/2018/01/04/3
Documentation patches proposed:
https://lists.gnu.org/archive/html/coreutils/2017-12/msg00072.html
https://lists.gnu.org/archive/html/coreutils/2017-12/msg00073.html
Neutralised by kernel hardening

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 2" src="https://img.shields.io/badge/L-2-fce1a9"/> <!-- unspecified: 0 --><strong>llvm-toolchain-19</strong> <code>1:19.1.7-3</code> (deb)</summary>

<small><code>pkg:deb/debian/llvm-toolchain-19@1%3A19.1.7-3?os_distro=trixie&os_name=debian&os_version=13</code></small><br/>

```dockerfile
# postgresql-release.dockerfile (5:5)
FROM postgres:18.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-13574?s=debian&n=llvm-toolchain-19&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2026--13574" src="https://img.shields.io/badge/CVE--2026--13574-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.124%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A vulnerability was determined in llvm llvm-project up to 22.1.6. This impacts the function GCRelocateInst::getBasePtr in the library llvm/lib/IR/IntrinsicInst.cpp of the component Bitcode File Handler. This manipulation causes heap-based buffer overflow. It is possible to launch the attack on the local host. The exploit has been publicly disclosed and may be utilized. The project was informed of the problem early through an issue report but has not responded yet.

---
- llvm-toolchain-22 <unfixed> (unimportant)
- llvm-toolchain-21 <unfixed> (unimportant)
- llvm-toolchain-19 <unfixed> (unimportant)
- llvm-toolchain-18 <unfixed> (unimportant)
https://github.com/llvm/llvm-project/issues/199191
Crash in CLI tool, no security impact

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-13573?s=debian&n=llvm-toolchain-19&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2026--13573" src="https://img.shields.io/badge/CVE--2026--13573-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.124%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A vulnerability was found in llvm llvm-project up to 22.1.6. This affects the function llvm::StringMap::insert in the library /lib/IR/ValueSymbolTable.cpp of the component ValueSymbolTable Module. The manipulation results in stack-based buffer overflow. Attacking locally is a requirement. The exploit has been made public and could be used. The project was informed of the problem early through an issue report but has not responded yet.

---
- llvm-toolchain-22 <unfixed> (unimportant)
- llvm-toolchain-21 <unfixed> (unimportant)
- llvm-toolchain-19 <unfixed> (unimportant)
- llvm-toolchain-18 <unfixed> (unimportant)
https://github.com/llvm/llvm-project/issues/199187
Crash in CLI tool, no security impact

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 2" src="https://img.shields.io/badge/L-2-fce1a9"/> <!-- unspecified: 0 --><strong>sqlite3</strong> <code>3.46.1-7+deb13u1</code> (deb)</summary>

<small><code>pkg:deb/debian/sqlite3@3.46.1-7%2Bdeb13u1?os_distro=trixie&os_name=debian&os_version=13</code></small><br/>

```dockerfile
# postgresql-release.dockerfile (5:5)
FROM postgres:18.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-70873?s=debian&n=sqlite3&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2025--70873" src="https://img.shields.io/badge/CVE--2025--70873-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.301%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>22nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An information disclosure issue in the zipfileInflate function in the zipfile extension in SQLite v3.51.1 and earlier allows attackers to obtain heap memory via supplying a crafted ZIP file.

---
- sqlite3 <unfixed> (unimportant)
https://sqlite.org/src/info/3d459f1fb1bd1b5e
https://sqlite.org/forum/forumpost/761eac3c82
https://gist.github.com/cnwangjihe/f496393f30f5ecec5b18c8f5ab072054
zipfile extension not build for Debian binary package builds

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-45346?s=debian&n=sqlite3&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2021--45346" src="https://img.shields.io/badge/CVE--2021--45346-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>1.614%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>73rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A Memory Leak vulnerability exists in SQLite Project SQLite3 3.35.1 and 3.37.0 via maliciously crafted SQL Queries (made via editing the Database File), it is possible to query a record, and leak subsequent bytes of memory that extend beyond the record, which could let a malicious user obtain sensitive information. NOTE: The developer disputes this as a vulnerability stating that If you give SQLite a corrupted database file and submit a query against the database, it might read parts of the database that you did not intend or expect.

---
- sqlite3 <unfixed> (unimportant; bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1005974)
- sqlite <removed> (unimportant)
https://github.com/guyinatuxedo/sqlite3_record_leaking
https://bugzilla.redhat.com/show_bug.cgi?id=2054793
https://sqlite.org/forum/forumpost/056d557c2f8c452ed5bb9c215414c802b215ce437be82be047726e521342161e
Negligible security impact

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>golang.org/x/sys</strong> <code>0.1.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/sys@0.1.0</code></small><br/>

```dockerfile
# postgresql-release.dockerfile (5:5)
FROM postgres:18.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-39824?s=golang&n=sys&ns=golang.org%2Fx&t=golang&vr=%3C0.44.0"><img alt="low : CVE--2026--39824" src="https://img.shields.io/badge/CVE--2026--39824-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.44.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.44.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.114%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

NewNTUnicodeString does not check for string length overflow. When provided with a string that overflows the maximum size of a NTUnicodeString (a 16-bit number of bytes), it returns a truncated string rather than an error.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>sed</strong> <code>4.9-2</code> (deb)</summary>

<small><code>pkg:deb/debian/sed@4.9-2?os_distro=trixie&os_name=debian&os_version=13</code></small><br/>

```dockerfile
# postgresql-release.dockerfile (5:5)
FROM postgres:18.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-5958?s=debian&n=sed&ns=debian&t=deb&osn=debian&osv=13&vr=%3C4.9-2%2Bdeb13u1"><img alt="low : CVE--2026--5958" src="https://img.shields.io/badge/CVE--2026--5958-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;4.9-2+deb13u1</code></td></tr>
<tr><td>Fixed version</td><td><code>4.9-2+deb13u1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.142%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When sed is invoked with both -i (in-place edit) and --follow-symlinks, the function open_next_file() performs two separate, non-atomic filesystem operations on the same path:  1. resolves symlink to its target and stores the resolved path for determining when output is written, 2. opens the original symlink path (not the resolved one) to read the file.  Between these two calls there is a race window. If an attacker atomically replaces the symlink with a different target during that window, sed will: read content from the new (attacker-chosen) symlink target and write the processed result to the path recorded in step 1. This can lead to arbitrary file overwrite with attacker-controlled content in the context of the sed process.   This issue was fixed in version 4.10.

---
- sed 4.9-3 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1134495)
[trixie] - sed 4.9-2+deb13u1
[bookworm] - sed 4.9-1+deb12u1
[bullseye] - sed <postponed> (Minor issue; can be fixed in next update)
https://gitweb.git.savannah.gnu.org/gitweb/?p=sed.git;a=commit;h=6b9b43c55ccd3beadbc0094b983c82bdb389f33b
https://www.openwall.com/lists/oss-security/2026/05/13/1

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>apt</strong> <code>3.0.3</code> (deb)</summary>

<small><code>pkg:deb/debian/apt@3.0.3?os_distro=trixie&os_name=debian&os_version=13</code></small><br/>

```dockerfile
# postgresql-release.dockerfile (5:5)
FROM postgres:18.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2011-3374?s=debian&n=apt&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2011--3374" src="https://img.shields.io/badge/CVE--2011--3374-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>1.191%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>64th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

It was found that apt-key in apt, all versions, do not correctly validate gpg keys with the master keyring, leading to a potential man-in-the-middle attack.

---
- apt <unfixed> (unimportant; bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=642480)
Not exploitable in Debian, since no keyring URI is defined

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>gnupg2</strong> <code>2.4.7-21+deb13u1</code> (deb)</summary>

<small><code>pkg:deb/debian/gnupg2@2.4.7-21%2Bdeb13u1?os_distro=trixie&os_name=debian&os_version=13</code></small><br/>

```dockerfile
# postgresql-release.dockerfile (5:5)
FROM postgres:18.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2022-3219?s=debian&n=gnupg2&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2022--3219" src="https://img.shields.io/badge/CVE--2022--3219-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.293%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GnuPG can be made to spin on a relatively small input by (for example) crafting a public key with thousands of signatures attached, compressed down to just a few KB.

---
- gnupg2 <unfixed> (unimportant)
https://bugzilla.redhat.com/show_bug.cgi?id=2127010
https://dev.gnupg.org/D556
https://dev.gnupg.org/T5993
https://www.openwall.com/lists/oss-security/2022/07/04/8
GnuPG upstream is not implementing this change.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>libxslt</strong> <code>1.1.35-1.2+deb13u2</code> (deb)</summary>

<small><code>pkg:deb/debian/libxslt@1.1.35-1.2%2Bdeb13u2?os_distro=trixie&os_name=debian&os_version=13</code></small><br/>

```dockerfile
# postgresql-release.dockerfile (5:5)
FROM postgres:18.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2015-9019?s=debian&n=libxslt&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2015--9019" src="https://img.shields.io/badge/CVE--2015--9019-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>2.122%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>80th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In libxslt 1.1.29 and earlier, the EXSLT math.random function was not initialized with a random seed during startup, which could cause usage of this function to produce predictable outputs.

---
- libxslt <unfixed> (unimportant; bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=859796)
https://bugzilla.gnome.org/show_bug.cgi?id=758400
https://bugzilla.suse.com/show_bug.cgi?id=934119
There's no indication that math.random() in intended to ensure cryptographic
randomness requirements. Proper seeding needs to happen in the application
using libxslt.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>shadow</strong> <code>1:4.17.4-2</code> (deb)</summary>

<small><code>pkg:deb/debian/shadow@1%3A4.17.4-2?os_distro=trixie&os_name=debian&os_version=13</code></small><br/>

```dockerfile
# postgresql-release.dockerfile (5:5)
FROM postgres:18.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2007-5686?s=debian&n=shadow&ns=debian&t=deb&osn=debian&osv=13&vr=%3E0"><img alt="low : CVE--2007--5686" src="https://img.shields.io/badge/CVE--2007--5686-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.942%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>57th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

initscripts in rPath Linux 1 sets insecure permissions for the /var/log/btmp file, which allows local users to obtain sensitive information regarding authentication attempts.  NOTE: because sshd detects the insecure permissions and does not log certain events, this also prevents sshd from logging failed authentication attempts by remote attackers.

---
- shadow <unfixed> (unimportant)
See #290803, on Debian LOG_UNKFAIL_ENAB in login.defs is set to no so
unknown usernames are not recorded on login failures

</blockquote>
</details>
</details></td></tr>
</table>

