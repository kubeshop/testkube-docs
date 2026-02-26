---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:657ff859aa3f3bdb86d532ae2d46f73eab307ac3f79a29afebe421c15daf1c60</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 4" src="https://img.shields.io/badge/critical-4-8b1924"/> <img alt="high: 16" src="https://img.shields.io/badge/high-16-e25d68"/> <img alt="medium: 54" src="https://img.shields.io/badge/medium-54-fbb552"/> <img alt="low: 22" src="https://img.shields.io/badge/low-22-fce1a9"/> <!-- unspecified: 0 --></td></tr>
<tr><td>platform</td><td>linux/arm64</td></tr>
<tr><td>size</td><td>470 MB</td></tr>
<tr><td>packages</td><td>271</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 2" src="https://img.shields.io/badge/C-2-8b1924"/> <img alt="high: 7" src="https://img.shields.io/badge/H-7-e25d68"/> <img alt="medium: 12" src="https://img.shields.io/badge/M-12-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>stdlib</strong> <code>1.24.0</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.24.0</code></small><br/>

```dockerfile
# mongo-8.dockerfile (51:51)
FROM mongo:8.2.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-68121?s=golang&n=stdlib&t=golang&vr=%3C1.24.13"><img alt="critical : CVE--2025--68121" src="https://img.shields.io/badge/CVE--2025--68121-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.13</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.13</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.016%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

During session resumption in crypto/tls, if the underlying Config has its ClientCAs or RootCAs fields mutated between the initial handshake and the resumed handshake, the resumed handshake may succeed when it should have failed. This may happen when a user calls Config.Clone and mutates the returned Config, or uses Config.GetConfigForClient. This can cause a client to resume a session with a server that it would not have resumed with during the initial handshake, or cause a server to resume a session with a client that it would not have resumed with during the initial handshake.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-22871?s=golang&n=stdlib&t=golang&vr=%3E%3D1.24.0-0%2C%3C1.24.2"><img alt="critical : CVE--2025--22871" src="https://img.shields.io/badge/CVE--2025--22871-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.24.0-0<br/><1.24.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.169%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>38th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The net/http package improperly accepts a bare LF as a line terminator in chunked data chunk-size lines. This can permit request smuggling if a net/http server is used in conjunction with a server that incorrectly accepts a bare LF as part of a chunk-ext.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61729?s=golang&n=stdlib&t=golang&vr=%3C1.24.11"><img alt="high : CVE--2025--61729" src="https://img.shields.io/badge/CVE--2025--61729-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.017%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.026%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>7th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.031%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.038%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.018%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.018%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Due to the design of the name constraint checking algorithm, the processing time of some inputs scale non-linearly with respect to the size of the certificate.

This affects programs which validate arbitrary certificate chains.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-22874?s=golang&n=stdlib&t=golang&vr=%3E%3D1.24.0-0%2C%3C1.24.4"><img alt="high : CVE--2025--22874" src="https://img.shields.io/badge/CVE--2025--22874-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.24.0-0<br/><1.24.4</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.4</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.017%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling Verify with a VerifyOptions.KeyUsages that contains ExtKeyUsageAny unintentionally disabledpolicy validation. This only affected certificate chains which contain policy graphs, which are rather uncommon.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-4673?s=golang&n=stdlib&t=golang&vr=%3E%3D1.24.0-0%2C%3C1.24.4"><img alt="medium : CVE--2025--4673" src="https://img.shields.io/badge/CVE--2025--4673-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.24.0-0<br/><1.24.4</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.4</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.012%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Proxy-Authorization and Proxy-Authenticate headers persisted on cross-origin redirects potentially leaking sensitive information.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61728?s=golang&n=stdlib&t=golang&vr=%3C1.24.12"><img alt="medium : CVE--2025--61728" src="https://img.shields.io/badge/CVE--2025--61728-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.016%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.011%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An excluded subdomain constraint in a certificate chain does not restrict the usage of wildcard SANs in the leaf certificate. For example a constraint that excludes the subdomain test.example.com does not prevent a leaf certificate from claiming the SAN *.example.com.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-47906?s=golang&n=stdlib&t=golang&vr=%3E%3D1.24.0%2C%3C1.24.6"><img alt="medium : CVE--2025--47906" src="https://img.shields.io/badge/CVE--2025--47906-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.24.0<br/><1.24.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.020%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

If the PATH environment variable contains paths which are executables (rather than just directories), passing certain strings to LookPath ("", ".", and ".."), can result in the binaries listed in the PATH being unexpectedly returned.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-0913?s=golang&n=stdlib&t=golang&vr=%3E%3D1.24.0-0%2C%3C1.24.4"><img alt="medium : CVE--2025--0913" src="https://img.shields.io/badge/CVE--2025--0913-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.24.0-0<br/><1.24.4</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.4</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.010%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

os.OpenFile(path, os.O_CREATE|O_EXCL) behaved differently on Unix and Windows systems when the target path was a dangling symlink. On Unix systems, OpenFile with O_CREATE and O_EXCL flags never follows symlinks. On Windows, when the target path was a symlink to a nonexistent location, OpenFile would create a file in that location. OpenFile now always returns an error when the O_CREATE and O_EXCL flags are both set and the target path is a symlink.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61730?s=golang&n=stdlib&t=golang&vr=%3C1.24.12"><img alt="medium : CVE--2025--61730" src="https://img.shields.io/badge/CVE--2025--61730-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.009%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.022%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.014%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.030%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>8th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.032%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.032%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.016%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

tar.Reader does not set a maximum size on the number of sparse region data blocks in GNU tar pax 1.0 sparse files. A maliciously-crafted archive containing a large number of sparse regions can cause a Reader to read an unbounded amount of data from the archive into memory. When reading from a compressed source, a small compressed input can result in large allocations.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-22873?s=golang&n=stdlib&t=golang&vr=%3E%3D1.24.0-0%2C%3C1.24.3"><img alt="low : CVE--2025--22873" src="https://img.shields.io/badge/CVE--2025--22873-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.24.0-0<br/><1.24.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.003%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>0th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

It was possible to improperly access the parent directory of an os.Root by opening a filename ending in "../". For example, Root.Open("../") would open the parent directory of the Root. This escape only permits opening the parent directory itself, not ancestors of the parent or files contained within the parent.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 6" src="https://img.shields.io/badge/H-6-e25d68"/> <img alt="medium: 9" src="https://img.shields.io/badge/M-9-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>stdlib</strong> <code>1.24.6</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.24.6</code></small><br/>

```dockerfile
# mongo-8.dockerfile (51:51)
FROM mongo:8.2.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-68121?s=golang&n=stdlib&t=golang&vr=%3C1.24.13"><img alt="critical : CVE--2025--68121" src="https://img.shields.io/badge/CVE--2025--68121-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.13</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.13</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.016%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

During session resumption in crypto/tls, if the underlying Config has its ClientCAs or RootCAs fields mutated between the initial handshake and the resumed handshake, the resumed handshake may succeed when it should have failed. This may happen when a user calls Config.Clone and mutates the returned Config, or uses Config.GetConfigForClient. This can cause a client to resume a session with a server that it would not have resumed with during the initial handshake, or cause a server to resume a session with a client that it would not have resumed with during the initial handshake.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61729?s=golang&n=stdlib&t=golang&vr=%3C1.24.11"><img alt="high : CVE--2025--61729" src="https://img.shields.io/badge/CVE--2025--61729-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.017%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.026%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>7th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.031%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.038%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.018%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.018%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Due to the design of the name constraint checking algorithm, the processing time of some inputs scale non-linearly with respect to the size of the certificate.

This affects programs which validate arbitrary certificate chains.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61728?s=golang&n=stdlib&t=golang&vr=%3C1.24.12"><img alt="medium : CVE--2025--61728" src="https://img.shields.io/badge/CVE--2025--61728-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.016%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.011%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An excluded subdomain constraint in a certificate chain does not restrict the usage of wildcard SANs in the leaf certificate. For example a constraint that excludes the subdomain test.example.com does not prevent a leaf certificate from claiming the SAN *.example.com.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61730?s=golang&n=stdlib&t=golang&vr=%3C1.24.12"><img alt="medium : CVE--2025--61730" src="https://img.shields.io/badge/CVE--2025--61730-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.009%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.022%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.014%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.030%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>8th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.032%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.032%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.016%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

tar.Reader does not set a maximum size on the number of sparse region data blocks in GNU tar pax 1.0 sparse files. A maliciously-crafted archive containing a large number of sparse regions can cause a Reader to read an unbounded amount of data from the archive into memory. When reading from a compressed source, a small compressed input can result in large allocations.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>stdlib</strong> <code>1.25.5</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.25.5</code></small><br/>

```dockerfile
# mongo-8.dockerfile (124:124)
RUN chmod -R g+rwX /opt/bitnami
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-68121?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0-0%2C%3C1.25.7"><img alt="critical : CVE--2025--68121" src="https://img.shields.io/badge/CVE--2025--68121-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0-0<br/><1.25.7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.016%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

During session resumption in crypto/tls, if the underlying Config has its ClientCAs or RootCAs fields mutated between the initial handshake and the resumed handshake, the resumed handshake may succeed when it should have failed. This may happen when a user calls Config.Clone and mutates the returned Config, or uses Config.GetConfigForClient. This can cause a client to resume a session with a server that it would not have resumed with during the initial handshake, or cause a server to resume a session with a client that it would not have resumed with during the initial handshake.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61726?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.6"><img alt="high : CVE--2025--61726" src="https://img.shields.io/badge/CVE--2025--61726-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.026%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>7th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The net/url package does not set a limit on the number of query parameters in a query.

While the maximum size of query parameters in URLs is generally limited by the maximum request header size, the net/http.Request.ParseForm method can parse large URL-encoded forms. Parsing a large form containing many unique query parameters can cause excessive memory consumption.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61728?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.6"><img alt="medium : CVE--2025--61728" src="https://img.shields.io/badge/CVE--2025--61728-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.016%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

archive/zip uses a super-linear file name indexing algorithm that is invoked the first time a file in an archive is opened. This can lead to a denial of service when consuming a maliciously constructed ZIP archive.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61730?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.6"><img alt="medium : CVE--2025--61730" src="https://img.shields.io/badge/CVE--2025--61730-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.009%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

During the TLS 1.3 handshake if multiple messages are sent in records that span encryption level boundaries (for instance the Client Hello and Encrypted Extensions messages), the subsequent messages may be processed before the encryption level changes. This can cause some minor information disclosure if a network-local attacker can inject messages during the handshake.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/crypto</strong> <code>0.35.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/crypto@0.35.0</code></small><br/>

```dockerfile
# mongo-8.dockerfile (124:124)
RUN chmod -R g+rwX /opt/bitnami
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-47913?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.43.0"><img alt="high : CVE--2025--47913" src="https://img.shields.io/badge/CVE--2025--47913-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.43.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.43.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.033%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>10th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

SSH clients receiving SSH_AGENT_SUCCESS when expecting a typed response will panic and cause early termination of the client process.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58181?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.45.0"><img alt="medium 5.3: CVE--2025--58181" src="https://img.shields.io/badge/CVE--2025--58181-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Allocation of Resources Without Limits or Throttling</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.45.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.45.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.083%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>24th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

SSH servers parsing GSSAPI authentication requests do not validate the number of mechanisms specified in the request, allowing an attacker to cause unbounded memory consumption.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-47914?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.45.0"><img alt="medium 5.3: CVE--2025--47914" src="https://img.shields.io/badge/CVE--2025--47914-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Out-of-bounds Read</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.45.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.45.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.018%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

SSH Agent servers do not validate the size of messages when processing new identity requests, which may cause the program to panic if the message is malformed due to an out of bounds read.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>gnupg2</strong> <code>2.4.4-2ubuntu17.3</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/gnupg2@2.4.4-2ubuntu17.3?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (51:51)
FROM mongo:8.2.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-68973?s=ubuntu&n=gnupg2&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C2.4.4-2ubuntu17.4"><img alt="high 7.0: CVE--2025--68973" src="https://img.shields.io/badge/CVE--2025--68973-lightgrey?label=high%207.0&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.4.4-2ubuntu17.4</code></td></tr>
<tr><td>Fixed version</td><td><code>2.4.4-2ubuntu17.4</code></td></tr>
<tr><td>CVSS Score</td><td><code>7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:H/PR:L/UI:N/S:U/C:H/I:H/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.016%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In GnuPG before 2.4.9, armor_filter in g10/armor.c has two increments of an index variable where one is intended, leading to an out-of-bounds write for crafted input. (For ExtendedLTS, 2.2.51 and later are fixed versions.)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-68972?s=ubuntu&n=gnupg2&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium 4.7: CVE--2025--68972" src="https://img.shields.io/badge/CVE--2025--68972-lightgrey?label=medium%204.7&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>4.7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:H/PR:L/UI:N/S:U/C:N/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.003%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>0th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In GnuPG through 2.4.8, if a signed message has \f at the end of a plaintext line, an adversary can construct a modified message that places additional text after the signed material, such that signature verification of the modified message succeeds (although an "invalid armor" message is printed during verification). This is related to use of \f as a marker to denote truncation of a long plaintext line.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-3219?s=ubuntu&n=gnupg2&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="low 3.3: CVE--2022--3219" src="https://img.shields.io/badge/CVE--2022--3219-lightgrey?label=low%203.3&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>3.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.013%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GnuPG can be made to spin on a relatively small input by (for example) crafting a public key with thousands of signatures attached, compressed down to just a few KB.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 9" src="https://img.shields.io/badge/M-9-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>python3.12</strong> <code>3.12.3-1ubuntu0.9</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/python3.12@3.12.3-1ubuntu0.9?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (62:101)
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y --no-install-recommends \
        ca-certificates \
        curl \
        libbrotli1 \
        libcom-err2 \
        libcurl4 \
        libffi8 \
        libgcc-s1 \
        libgmp10 \
        libgnutls30 \
        libgssapi-krb5-2 \
        libhogweed6 \
        libidn2-0 \
        libk5crypto3 \
        libkeyutils1 \
        libkrb5-3 \
        libkrb5support0 \
        libldap2 \
        libnettle8 \
        libnghttp2-14 \
        libp11-kit0 \
        libpsl5 \
        librtmp1 \
        libsasl2-2 \
        libssh2-1 \
        libssl3 \
        libtasn1-6 \
        libunistring5 \
        libzstd1 \
        numactl \
        procps \
        zlib1g \
        yq \
        wait-for-it \
    && apt-get autoremove -y \
    && apt-get autoclean \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-13836?s=ubuntu&n=python3.12&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.12.3-1ubuntu0.10"><img alt="medium 7.5: CVE--2025--13836" src="https://img.shields.io/badge/CVE--2025--13836-lightgrey?label=medium%207.5&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.12.3-1ubuntu0.10</code></td></tr>
<tr><td>Fixed version</td><td><code>3.12.3-1ubuntu0.10</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.152%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>36th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When reading an HTTP response from a server, if no read amount is specified, the default behavior will be to use Content-Length. This allows a malicious server to cause the client to read large amounts of data into memory, potentially causing OOM or other DoS.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-13837?s=ubuntu&n=python3.12&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.12.3-1ubuntu0.11"><img alt="medium 5.5: CVE--2025--13837" src="https://img.shields.io/badge/CVE--2025--13837-lightgrey?label=medium%205.5&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.12.3-1ubuntu0.11</code></td></tr>
<tr><td>Fixed version</td><td><code>3.12.3-1ubuntu0.11</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.022%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When loading a plist file, the plistlib module reads data in size specified by the file itself, meaning a malicious file can cause OOM and DoS issues

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-12084?s=ubuntu&n=python3.12&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.12.3-1ubuntu0.11"><img alt="medium 5.3: CVE--2025--12084" src="https://img.shields.io/badge/CVE--2025--12084-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.12.3-1ubuntu0.11</code></td></tr>
<tr><td>Fixed version</td><td><code>3.12.3-1ubuntu0.11</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.049%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>15th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When building nested elements using xml.dom.minidom methods such as appendChild() that have a dependency on _clear_id_cache() the algorithm is quadratic. Availability can be impacted when building excessively nested documents.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-0865?s=ubuntu&n=python3.12&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.12.3-1ubuntu0.11"><img alt="medium : CVE--2026--0865" src="https://img.shields.io/badge/CVE--2026--0865-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.12.3-1ubuntu0.11</code></td></tr>
<tr><td>Fixed version</td><td><code>3.12.3-1ubuntu0.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.165%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>37th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

User-controlled header names and values containing newlines can allow injecting HTTP headers.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-0672?s=ubuntu&n=python3.12&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.12.3-1ubuntu0.11"><img alt="medium : CVE--2026--0672" src="https://img.shields.io/badge/CVE--2026--0672-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.12.3-1ubuntu0.11</code></td></tr>
<tr><td>Fixed version</td><td><code>3.12.3-1ubuntu0.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.164%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>37th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When using http.cookies.Morsel, user-controlled cookie values and parameters can allow injecting HTTP headers into messages. Patch rejects all control characters within cookie names, values, and parameters.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-15367?s=ubuntu&n=python3.12&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.12.3-1ubuntu0.11"><img alt="medium : CVE--2025--15367" src="https://img.shields.io/badge/CVE--2025--15367-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.12.3-1ubuntu0.11</code></td></tr>
<tr><td>Fixed version</td><td><code>3.12.3-1ubuntu0.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.093%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>26th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The poplib module, when passed a user-controlled command, can have additional commands injected using newlines. Mitigation rejects commands containing control characters.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-15366?s=ubuntu&n=python3.12&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.12.3-1ubuntu0.11"><img alt="medium : CVE--2025--15366" src="https://img.shields.io/badge/CVE--2025--15366-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.12.3-1ubuntu0.11</code></td></tr>
<tr><td>Fixed version</td><td><code>3.12.3-1ubuntu0.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.093%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>26th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The imaplib module, when passed a user-controlled command, can have additional commands injected using newlines. Mitigation rejects commands containing control characters.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-15282?s=ubuntu&n=python3.12&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.12.3-1ubuntu0.11"><img alt="medium : CVE--2025--15282" src="https://img.shields.io/badge/CVE--2025--15282-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.12.3-1ubuntu0.11</code></td></tr>
<tr><td>Fixed version</td><td><code>3.12.3-1ubuntu0.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.046%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>14th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

User-controlled data URLs parsed by urllib.request.DataHandler allow injecting headers through newlines in the data URL mediatype.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-11468?s=ubuntu&n=python3.12&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.12.3-1ubuntu0.11"><img alt="medium : CVE--2025--11468" src="https://img.shields.io/badge/CVE--2025--11468-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.12.3-1ubuntu0.11</code></td></tr>
<tr><td>Fixed version</td><td><code>3.12.3-1ubuntu0.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.030%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When folding a long comment in an email header containing exclusively unfoldable characters, the parenthesis would not be preserved. This could be used for injecting headers into email messages where addresses are user-controlled and not sanitized.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 3" src="https://img.shields.io/badge/M-3-fbb552"/> <img alt="low: 3" src="https://img.shields.io/badge/L-3-fce1a9"/> <!-- unspecified: 0 --><strong>libssh</strong> <code>0.10.6-2ubuntu0.2</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/libssh@0.10.6-2ubuntu0.2?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (51:51)
FROM mongo:8.2.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-0968?s=ubuntu&n=libssh&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C0.10.6-2ubuntu0.3"><img alt="medium : CVE--2026--0968" src="https://img.shields.io/badge/CVE--2026--0968-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.10.6-2ubuntu0.3</code></td></tr>
<tr><td>Fixed version</td><td><code>0.10.6-2ubuntu0.3</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

[Denial of Service due to malformed SFTP message]

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-0967?s=ubuntu&n=libssh&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C0.10.6-2ubuntu0.3"><img alt="medium : CVE--2026--0967" src="https://img.shields.io/badge/CVE--2026--0967-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.10.6-2ubuntu0.3</code></td></tr>
<tr><td>Fixed version</td><td><code>0.10.6-2ubuntu0.3</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

[Denial of Service via inefficient regular expression processing]

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-0964?s=ubuntu&n=libssh&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C0.10.6-2ubuntu0.3"><img alt="medium : CVE--2026--0964" src="https://img.shields.io/badge/CVE--2026--0964-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.10.6-2ubuntu0.3</code></td></tr>
<tr><td>Fixed version</td><td><code>0.10.6-2ubuntu0.3</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

[Improper sanitation of paths received from SCP servers]

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-0966?s=ubuntu&n=libssh&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C0.10.6-2ubuntu0.3"><img alt="low : CVE--2026--0966" src="https://img.shields.io/badge/CVE--2026--0966-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.10.6-2ubuntu0.3</code></td></tr>
<tr><td>Fixed version</td><td><code>0.10.6-2ubuntu0.3</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

[Buffer underflow in ssh_get_hexa() on invalid input]

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-0965?s=ubuntu&n=libssh&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C0.10.6-2ubuntu0.3"><img alt="low : CVE--2026--0965" src="https://img.shields.io/badge/CVE--2026--0965-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.10.6-2ubuntu0.3</code></td></tr>
<tr><td>Fixed version</td><td><code>0.10.6-2ubuntu0.3</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

[Denial of Service via improper configuration file handling]

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-8277?s=ubuntu&n=libssh&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C0.10.6-2ubuntu0.3"><img alt="low : CVE--2025--8277" src="https://img.shields.io/badge/CVE--2025--8277-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.10.6-2ubuntu0.3</code></td></tr>
<tr><td>Fixed version</td><td><code>0.10.6-2ubuntu0.3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.052%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in libssh's handling of key exchange (KEX) processes when a client repeatedly sends incorrect KEX guesses. The library fails to free memory during these rekey operations, which can gradually exhaust system memory. This issue can lead to crashes on the client side, particularly when using libgcrypt, which impacts application stability and availability.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 3" src="https://img.shields.io/badge/M-3-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>glibc</strong> <code>2.39-0ubuntu8.6</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/glibc@2.39-0ubuntu8.6?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (51:51)
FROM mongo:8.2.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-0915?s=ubuntu&n=glibc&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C2.39-0ubuntu8.7"><img alt="medium : CVE--2026--0915" src="https://img.shields.io/badge/CVE--2026--0915-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.39-0ubuntu8.7</code></td></tr>
<tr><td>Fixed version</td><td><code>2.39-0ubuntu8.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.019%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling getnetbyaddr or getnetbyaddr_r with a configured nsswitch.conf that specifies the library's DNS backend for networks and queries for a zero-valued network in the GNU C Library version 2.0 to version 2.42 can leak stack contents to the configured DNS resolver.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-0861?s=ubuntu&n=glibc&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C2.39-0ubuntu8.7"><img alt="medium : CVE--2026--0861" src="https://img.shields.io/badge/CVE--2026--0861-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.39-0ubuntu8.7</code></td></tr>
<tr><td>Fixed version</td><td><code>2.39-0ubuntu8.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.006%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>0th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Passing too large an alignment to the memalign suite of functions (memalign, posix_memalign, aligned_alloc) in the GNU C Library version 2.30 to 2.42 may result in an integer overflow, which could consequently result in a heap corruption.  Note that the attacker must have control over both, the size as well as the alignment arguments of the memalign function to be able to exploit this. The size parameter must be close enough to PTRDIFF_MAX so as to overflow size_t along with the large alignment argument.  This limits the malicious inputs for the alignment for memalign to the range [1<<62+ 1, 1<<63] and exactly 1<<63 for posix_memalign and aligned_alloc.  Typically the alignment argument passed to such functions is a known constrained quantity (e.g. page size, block size, struct sizes) and is not attacker controlled, because of which this may not be easily exploitable in practice.  An application bug could potentially result in the input alignment being too large, e.g. due to a different buffer overflow or integer overflow in the application or its dependent libraries, but that is again an uncommon usage pattern given typical sources of alignments.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-15281?s=ubuntu&n=glibc&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C2.39-0ubuntu8.7"><img alt="medium : CVE--2025--15281" src="https://img.shields.io/badge/CVE--2025--15281-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.39-0ubuntu8.7</code></td></tr>
<tr><td>Fixed version</td><td><code>2.39-0ubuntu8.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.053%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>17th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling wordexp with WRDE_REUSE in conjunction with WRDE_APPEND in the GNU C Library version 2.0 to version 2.42 may cause the interface to return uninitialized memory in the we_wordv member, which on subsequent calls to wordfree may abort the process.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 3" src="https://img.shields.io/badge/M-3-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/net</strong> <code>0.36.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/net@0.36.0</code></small><br/>

```dockerfile
# mongo-8.dockerfile (124:124)
RUN chmod -R g+rwX /opt/bitnami
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-58190?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.45.0"><img alt="medium : CVE--2025--58190" src="https://img.shields.io/badge/CVE--2025--58190-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.45.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.45.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.018%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The html.Parse function in golang.org/x/net/html has an infinite parsing loop when processing certain inputs, which can lead to denial of service (DoS) if an attacker provides specially crafted HTML content.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-47911?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.45.0"><img alt="medium : CVE--2025--47911" src="https://img.shields.io/badge/CVE--2025--47911-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.45.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.45.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.019%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The html.Parse function in golang.org/x/net/html has quadratic parsing complexity when processing certain inputs, which can lead to denial of service (DoS) if an attacker provides specially crafted HTML content.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-22872?s=github&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.38.0"><img alt="medium 5.3: CVE--2025--22872" src="https://img.shields.io/badge/CVE--2025--22872-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.38.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.38.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:P/VC:N/VI:N/VA:N/SC:L/SI:L/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.119%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>31st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The tokenizer incorrectly interprets tags with unquoted attribute values that end with a solidus character (/) as self-closing. When directly using Tokenizer, this can result in such tags incorrectly being marked as self-closing, and when using the Parse functions, this can result in content following such tags as being placed in the wrong scope during DOM construction, but only when tags are in foreign content (e.g. <math>, <svg>, etc contexts).

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 3" src="https://img.shields.io/badge/M-3-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>expat</strong> <code>2.6.1-2ubuntu0.3</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/expat@2.6.1-2ubuntu0.3?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (62:101)
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y --no-install-recommends \
        ca-certificates \
        curl \
        libbrotli1 \
        libcom-err2 \
        libcurl4 \
        libffi8 \
        libgcc-s1 \
        libgmp10 \
        libgnutls30 \
        libgssapi-krb5-2 \
        libhogweed6 \
        libidn2-0 \
        libk5crypto3 \
        libkeyutils1 \
        libkrb5-3 \
        libkrb5support0 \
        libldap2 \
        libnettle8 \
        libnghttp2-14 \
        libp11-kit0 \
        libpsl5 \
        librtmp1 \
        libsasl2-2 \
        libssh2-1 \
        libssl3 \
        libtasn1-6 \
        libunistring5 \
        libzstd1 \
        numactl \
        procps \
        zlib1g \
        yq \
        wait-for-it \
    && apt-get autoremove -y \
    && apt-get autoclean \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-66382?s=ubuntu&n=expat&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium 5.5: CVE--2025--66382" src="https://img.shields.io/badge/CVE--2025--66382-lightgrey?label=medium%205.5&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>5.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.016%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In libexpat through 2.7.3, a crafted file with an approximate size of 2 MiB can lead to dozens of seconds of processing time.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-24515?s=ubuntu&n=expat&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C2.6.1-2ubuntu0.4"><img alt="medium 2.5: CVE--2026--24515" src="https://img.shields.io/badge/CVE--2026--24515-lightgrey?label=medium%202.5&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.6.1-2ubuntu0.4</code></td></tr>
<tr><td>Fixed version</td><td><code>2.6.1-2ubuntu0.4</code></td></tr>
<tr><td>CVSS Score</td><td><code>2.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:H/PR:L/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.005%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>0th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In libexpat before 2.7.4, XML_ExternalEntityParserCreate does not copy unknown encoding handler user data.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-25210?s=ubuntu&n=expat&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C2.6.1-2ubuntu0.4"><img alt="medium : CVE--2026--25210" src="https://img.shields.io/badge/CVE--2026--25210-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.6.1-2ubuntu0.4</code></td></tr>
<tr><td>Fixed version</td><td><code>2.6.1-2ubuntu0.4</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.006%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>0th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In libexpat before 2.7.4, the doContent function does not properly determine the buffer size bufSize because there is no integer overflow check for tag buffer reallocation.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 7" src="https://img.shields.io/badge/L-7-fce1a9"/> <!-- unspecified: 0 --><strong>openssl</strong> <code>3.0.13-0ubuntu3.6</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/openssl@3.0.13-0ubuntu3.6?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (51:51)
FROM mongo:8.2.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-15467?s=ubuntu&n=openssl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.0.13-0ubuntu3.7"><img alt="medium : CVE--2025--15467" src="https://img.shields.io/badge/CVE--2025--15467-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.0.13-0ubuntu3.7</code></td></tr>
<tr><td>Fixed version</td><td><code>3.0.13-0ubuntu3.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.672%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>71st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue summary: Parsing CMS AuthEnvelopedData message with maliciously crafted AEAD parameters can trigger a stack buffer overflow.  Impact summary: A stack buffer overflow may lead to a crash, causing Denial of Service, or potentially remote code execution.  When parsing CMS AuthEnvelopedData structures that use AEAD ciphers such as AES-GCM, the IV (Initialization Vector) encoded in the ASN.1 parameters is copied into a fixed-size stack buffer without verifying that its length fits the destination. An attacker can supply a crafted CMS message with an oversized IV, causing a stack-based out-of-bounds write before any authentication or tag verification occurs.  Applications and services that parse untrusted CMS or PKCS#7 content using AEAD ciphers (e.g., S/MIME AuthEnvelopedData with AES-GCM) are vulnerable. Because the overflow occurs prior to authentication, no valid key material is required to trigger it. While exploitability to remote code execution depends on platform and toolchain mitigations, the stack-based write primitive represents a severe risk.  The FIPS modules in 3.6, 3.5, 3.4, 3.3 and 3.0 are not affected by this issue, as the CMS implementation is outside the OpenSSL FIPS module boundary.  OpenSSL 3.6, 3.5, 3.4, 3.3 and 3.0 are vulnerable to this issue.  OpenSSL 1.1.1 and 1.0.2 are not affected by this issue.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-69421?s=ubuntu&n=openssl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.0.13-0ubuntu3.7"><img alt="low 7.5: CVE--2025--69421" src="https://img.shields.io/badge/CVE--2025--69421-lightgrey?label=low%207.5&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.0.13-0ubuntu3.7</code></td></tr>
<tr><td>Fixed version</td><td><code>3.0.13-0ubuntu3.7</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.059%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue summary: Processing a malformed PKCS#12 file can trigger a NULL pointer dereference in the PKCS12_item_decrypt_d2i_ex() function.  Impact summary: A NULL pointer dereference can trigger a crash which leads to Denial of Service for an application processing PKCS#12 files.  The PKCS12_item_decrypt_d2i_ex() function does not check whether the oct parameter is NULL before dereferencing it. When called from PKCS12_unpack_p7encdata() with a malformed PKCS#12 file, this parameter can be NULL, causing a crash. The vulnerability is limited to Denial of Service and cannot be escalated to achieve code execution or memory disclosure.  Exploiting this issue requires an attacker to provide a malformed PKCS#12 file to an application that processes it. For that reason the issue was assessed as Low severity according to our Security Policy.  The FIPS modules in 3.6, 3.5, 3.4, 3.3 and 3.0 are not affected by this issue, as the PKCS#12 implementation is outside the OpenSSL FIPS module boundary.  OpenSSL 3.6, 3.5, 3.4, 3.3, 3.0, 1.1.1 and 1.0.2 are vulnerable to this issue.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-22796?s=ubuntu&n=openssl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.0.13-0ubuntu3.7"><img alt="low : CVE--2026--22796" src="https://img.shields.io/badge/CVE--2026--22796-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.0.13-0ubuntu3.7</code></td></tr>
<tr><td>Fixed version</td><td><code>3.0.13-0ubuntu3.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.070%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>22nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue summary: A type confusion vulnerability exists in the signature verification of signed PKCS#7 data where an ASN1_TYPE union member is accessed without first validating the type, causing an invalid or NULL pointer dereference when processing malformed PKCS#7 data.  Impact summary: An application performing signature verification of PKCS#7 data or calling directly the PKCS7_digest_from_attributes() function can be caused to dereference an invalid or NULL pointer when reading, resulting in a Denial of Service.  The function PKCS7_digest_from_attributes() accesses the message digest attribute value without validating its type. When the type is not V_ASN1_OCTET_STRING, this results in accessing invalid memory through the ASN1_TYPE union, causing a crash.  Exploiting this vulnerability requires an attacker to provide a malformed signed PKCS#7 to an application that verifies it. The impact of the exploit is just a Denial of Service, the PKCS7 API is legacy and applications should be using the CMS API instead. For these reasons the issue was assessed as Low severity.  The FIPS modules in 3.5, 3.4, 3.3 and 3.0 are not affected by this issue, as the PKCS#7 parsing implementation is outside the OpenSSL FIPS module boundary.  OpenSSL 3.6, 3.5, 3.4, 3.3, 3.0, 1.1.1 and 1.0.2 are vulnerable to this issue.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-22795?s=ubuntu&n=openssl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.0.13-0ubuntu3.7"><img alt="low : CVE--2026--22795" src="https://img.shields.io/badge/CVE--2026--22795-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.0.13-0ubuntu3.7</code></td></tr>
<tr><td>Fixed version</td><td><code>3.0.13-0ubuntu3.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.015%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue summary: An invalid or NULL pointer dereference can happen in an application processing a malformed PKCS#12 file.  Impact summary: An application processing a malformed PKCS#12 file can be caused to dereference an invalid or NULL pointer on memory read, resulting in a Denial of Service.  A type confusion vulnerability exists in PKCS#12 parsing code where an ASN1_TYPE union member is accessed without first validating the type, causing an invalid pointer read.  The location is constrained to a 1-byte address space, meaning any attempted pointer manipulation can only target addresses between 0x00 and 0xFF. This range corresponds to the zero page, which is unmapped on most modern operating systems and will reliably result in a crash, leading only to a Denial of Service. Exploiting this issue also requires a user or application to process a maliciously crafted PKCS#12 file. It is uncommon to accept untrusted PKCS#12 files in applications as they are usually used to store private keys which are trusted by definition. For these reasons, the issue was assessed as Low severity.  The FIPS modules in 3.5, 3.4, 3.3 and 3.0 are not affected by this issue, as the PKCS12 implementation is outside the OpenSSL FIPS module boundary.  OpenSSL 3.6, 3.5, 3.4, 3.3, 3.0 and 1.1.1 are vulnerable to this issue.  OpenSSL 1.0.2 is not affected by this issue.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-69420?s=ubuntu&n=openssl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.0.13-0ubuntu3.7"><img alt="low : CVE--2025--69420" src="https://img.shields.io/badge/CVE--2025--69420-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.0.13-0ubuntu3.7</code></td></tr>
<tr><td>Fixed version</td><td><code>3.0.13-0ubuntu3.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.070%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue summary: A type confusion vulnerability exists in the TimeStamp Response verification code where an ASN1_TYPE union member is accessed without first validating the type, causing an invalid or NULL pointer dereference when processing a malformed TimeStamp Response file.  Impact summary: An application calling TS_RESP_verify_response() with a malformed TimeStamp Response can be caused to dereference an invalid or NULL pointer when reading, resulting in a Denial of Service.  The functions ossl_ess_get_signing_cert() and ossl_ess_get_signing_cert_v2() access the signing cert attribute value without validating its type. When the type is not V_ASN1_SEQUENCE, this results in accessing invalid memory through the ASN1_TYPE union, causing a crash.  Exploiting this vulnerability requires an attacker to provide a malformed TimeStamp Response to an application that verifies timestamp responses. The TimeStamp protocol (RFC 3161) is not widely used and the impact of the exploit is just a Denial of Service. For these reasons the issue was assessed as Low severity.  The FIPS modules in 3.5, 3.4, 3.3 and 3.0 are not affected by this issue, as the TimeStamp Response implementation is outside the OpenSSL FIPS module boundary.  OpenSSL 3.6, 3.5, 3.4, 3.3, 3.0 and 1.1.1 are vulnerable to this issue.  OpenSSL 1.0.2 is not affected by this issue.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-69419?s=ubuntu&n=openssl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.0.13-0ubuntu3.7"><img alt="low : CVE--2025--69419" src="https://img.shields.io/badge/CVE--2025--69419-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.0.13-0ubuntu3.7</code></td></tr>
<tr><td>Fixed version</td><td><code>3.0.13-0ubuntu3.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.056%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>17th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue summary: Calling PKCS12_get_friendlyname() function on a maliciously crafted PKCS#12 file with a BMPString (UTF-16BE) friendly name containing non-ASCII BMP code point can trigger a one byte write before the allocated buffer.  Impact summary: The out-of-bounds write can cause a memory corruption which can have various consequences including a Denial of Service.  The OPENSSL_uni2utf8() function performs a two-pass conversion of a PKCS#12 BMPString (UTF-16BE) to UTF-8. In the second pass, when emitting UTF-8 bytes, the helper function bmp_to_utf8() incorrectly forwards the remaining UTF-16 source byte count as the destination buffer capacity to UTF8_putc(). For BMP code points above U+07FF, UTF-8 requires three bytes, but the forwarded capacity can be just two bytes. UTF8_putc() then returns -1, and this negative value is added to the output length without validation, causing the length to become negative. The subsequent trailing NUL byte is then written at a negative offset, causing write outside of heap allocated buffer.  The vulnerability is reachable via the public PKCS12_get_friendlyname() API when parsing attacker-controlled PKCS#12 files. While PKCS12_parse() uses a different code path that avoids this issue, PKCS12_get_friendlyname() directly invokes the vulnerable function. Exploitation requires an attacker to provide a malicious PKCS#12 file to be parsed by the application and the attacker can just trigger a one zero byte write before the allocated buffer. For that reason the issue was assessed as Low severity according to our Security Policy.  The FIPS modules in 3.6, 3.5, 3.4, 3.3 and 3.0 are not affected by this issue, as the PKCS#12 implementation is outside the OpenSSL FIPS module boundary.  OpenSSL 3.6, 3.5, 3.4, 3.3, 3.0 and 1.1.1 are vulnerable to this issue.  OpenSSL 1.0.2 is not affected by this issue.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-69418?s=ubuntu&n=openssl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.0.13-0ubuntu3.7"><img alt="low : CVE--2025--69418" src="https://img.shields.io/badge/CVE--2025--69418-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.0.13-0ubuntu3.7</code></td></tr>
<tr><td>Fixed version</td><td><code>3.0.13-0ubuntu3.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.005%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>0th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue summary: When using the low-level OCB API directly with AES-NI or<br>other hardware-accelerated code paths, inputs whose length is not a multiple<br>of 16 bytes can leave the final partial block unencrypted and unauthenticated.<br><br>Impact summary: The trailing 1-15 bytes of a message may be exposed in<br>cleartext on encryption and are not covered by the authentication tag,<br>allowing an attacker to read or tamper with those bytes without detection.<br><br>The low-level OCB encrypt and decrypt routines in the hardware-accelerated<br>stream path process full 16-byte blocks but do not advance the input/output<br>pointers. The subsequent tail-handling code then operates on the original<br>base pointers, effectively reprocessing the beginning of the buffer while<br>leaving the actual trailing bytes unprocessed. The authentication checksum<br>also excludes the true tail bytes.<br><br>However, typical OpenSSL consumers using EVP are not affected because the<br>higher-level EVP and provider OCB implementations split inputs so that full<br>blocks and trailing partial blocks are processed in separate calls, avoiding<br>the problematic code path. Additionally, TLS does not use OCB ciphersuites.<br>The vulnerability only affects applications that call the low-level<br>CRYPTO_ocb128_encrypt() or CRYPTO_ocb128_decrypt() functions directly with<br>non-block-aligned lengths in a single call on hardware-accelerated builds.<br>For these reasons the issue was assessed as Low severity.<br><br>The FIPS modules in 3.6, 3.5, 3.4, 3.3, 3.2, 3.1 and 3.0 are not affected<br>by this issue, as OCB mode is not a FIPS-approved algorithm.<br><br>OpenSSL 3.6, 3.5, 3.4, 3.3, 3.0 and 1.1.1 are vulnerable to this issue.<br><br>OpenSSL 1.0.2 is not affected by this issue.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-68160?s=ubuntu&n=openssl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.0.13-0ubuntu3.7"><img alt="low : CVE--2025--68160" src="https://img.shields.io/badge/CVE--2025--68160-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.0.13-0ubuntu3.7</code></td></tr>
<tr><td>Fixed version</td><td><code>3.0.13-0ubuntu3.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.014%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue summary: Writing large, newline-free data into a BIO chain using the line-buffering filter where the next BIO performs short writes can trigger a heap-based out-of-bounds write.  Impact summary: This out-of-bounds write can cause memory corruption which typically results in a crash, leading to Denial of Service for an application.  The line-buffering BIO filter (BIO_f_linebuffer) is not used by default in TLS/SSL data paths. In OpenSSL command-line applications, it is typically only pushed onto stdout/stderr on VMS systems. Third-party applications that explicitly use this filter with a BIO chain that can short-write and that write large, newline-free data influenced by an attacker would be affected. However, the circumstances where this could happen are unlikely to be under attacker control, and BIO_f_linebuffer is unlikely to be handling non-curated data controlled by an attacker. For that reason the issue was assessed as Low severity.  The FIPS modules in 3.6, 3.5, 3.4, 3.3 and 3.0 are not affected by this issue, as the BIO implementation is outside the OpenSSL FIPS module boundary.  OpenSSL 3.6, 3.5, 3.4, 3.3, 3.0, 1.1.1 and 1.0.2 are vulnerable to this issue.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 6" src="https://img.shields.io/badge/L-6-fce1a9"/> <!-- unspecified: 0 --><strong>curl</strong> <code>8.5.0-2ubuntu10.6</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/curl@8.5.0-2ubuntu10.6?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (51:51)
FROM mongo:8.2.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-14017?s=ubuntu&n=curl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C8.5.0-2ubuntu10.7"><img alt="medium : CVE--2025--14017" src="https://img.shields.io/badge/CVE--2025--14017-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.5.0-2ubuntu10.7</code></td></tr>
<tr><td>Fixed version</td><td><code>8.5.0-2ubuntu10.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.007%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When doing multi-threaded LDAPS transfers (LDAP over TLS) with libcurl, changing TLS options in one thread would inadvertently change them globally and therefore possibly also affect other concurrently setup transfers.  Disabling certificate verification for a specific transfer could unintentionally disable the feature for other threads as well.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-15224?s=ubuntu&n=curl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C8.5.0-2ubuntu10.7"><img alt="low : CVE--2025--15224" src="https://img.shields.io/badge/CVE--2025--15224-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.5.0-2ubuntu10.7</code></td></tr>
<tr><td>Fixed version</td><td><code>8.5.0-2ubuntu10.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.072%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>22nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When doing SSH-based transfers using either SCP or SFTP, and asked to do public key authentication, curl would wrongly still ask and authenticate using a locally running SSH agent.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-15079?s=ubuntu&n=curl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C8.5.0-2ubuntu10.7"><img alt="low : CVE--2025--15079" src="https://img.shields.io/badge/CVE--2025--15079-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.5.0-2ubuntu10.7</code></td></tr>
<tr><td>Fixed version</td><td><code>8.5.0-2ubuntu10.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.030%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When doing SSH-based transfers using either SCP or SFTP, and setting the known_hosts file, libcurl could still mistakenly accept connecting to hosts *not present* in the specified file if they were added as recognized in the libssh *global* known_hosts file.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-14819?s=ubuntu&n=curl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C8.5.0-2ubuntu10.7"><img alt="low : CVE--2025--14819" src="https://img.shields.io/badge/CVE--2025--14819-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.5.0-2ubuntu10.7</code></td></tr>
<tr><td>Fixed version</td><td><code>8.5.0-2ubuntu10.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.039%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>12th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When doing TLS related transfers with reused easy or multi handles and altering the  `CURLSSLOPT_NO_PARTIALCHAIN` option, libcurl could accidentally reuse a CA store cached in memory for which the partial chain option was reversed. Contrary to the user's wishes and expectations. This could make libcurl find and accept a trust chain that it otherwise would not.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-14524?s=ubuntu&n=curl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C8.5.0-2ubuntu10.7"><img alt="low : CVE--2025--14524" src="https://img.shields.io/badge/CVE--2025--14524-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.5.0-2ubuntu10.7</code></td></tr>
<tr><td>Fixed version</td><td><code>8.5.0-2ubuntu10.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.030%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When an OAuth2 bearer token is used for an HTTP(S) transfer, and that transfer performs a cross-protocol redirect to a second URL that uses an IMAP, LDAP, POP3 or SMTP scheme, curl might wrongly pass on the bearer token to the new target host.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-10148?s=ubuntu&n=curl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C8.5.0-2ubuntu10.7"><img alt="low : CVE--2025--10148" src="https://img.shields.io/badge/CVE--2025--10148-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.5.0-2ubuntu10.7</code></td></tr>
<tr><td>Fixed version</td><td><code>8.5.0-2ubuntu10.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.102%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>28th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

curl's websocket code did not update the 32 bit mask pattern for each new outgoing frame as the specification says. Instead it used a fixed mask that persisted and was used throughout the entire connection.  A predictable mask pattern allows for a malicious server to induce traffic between the two communicating parties that could be interpreted by an involved proxy (configured or transparent) as genuine, real, HTTP traffic with content and thereby poison its cache. That cached poisoned content could then be served to all users of that proxy.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-0167?s=ubuntu&n=curl&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="low : CVE--2025--0167" src="https://img.shields.io/badge/CVE--2025--0167-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.173%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>39th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When asked to use a `.netrc` file for credentials **and** to follow HTTP redirects, curl could leak the password used for the first host to the followed-to host under certain circumstances.  This flaw only manifests itself if the netrc file has a `default` entry that omits both login and password. A rare circumstance.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>gnutls28</strong> <code>3.8.3-1.1ubuntu3.4</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/gnutls28@3.8.3-1.1ubuntu3.4?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (51:51)
FROM mongo:8.2.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-14831?s=ubuntu&n=gnutls28&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.8.3-1.1ubuntu3.5"><img alt="medium : CVE--2025--14831" src="https://img.shields.io/badge/CVE--2025--14831-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.8.3-1.1ubuntu3.5</code></td></tr>
<tr><td>Fixed version</td><td><code>3.8.3-1.1ubuntu3.5</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.039%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>12th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in GnuTLS. This vulnerability allows a denial of service (DoS) by excessive CPU (Central Processing Unit) and memory consumption via specially crafted malicious certificates containing a large number of name constraints and subject alternative names (SANs).

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-9820?s=ubuntu&n=gnutls28&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C3.8.3-1.1ubuntu3.5"><img alt="low : CVE--2025--9820" src="https://img.shields.io/badge/CVE--2025--9820-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.8.3-1.1ubuntu3.5</code></td></tr>
<tr><td>Fixed version</td><td><code>3.8.3-1.1ubuntu3.5</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.010%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in the GnuTLS library, specifically in the gnutls_pkcs11_token_init() function that handles PKCS#11 token initialization. When a token label longer than expected is processed, the function writes past the end of a fixed-size stack buffer. This programming error can cause the application using GnuTLS to crash or, in certain conditions, be exploited for code execution. As a result, systems or applications relying on GnuTLS may be vulnerable to a denial of service or local privilege escalation attacks.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>tar</strong> <code>1.35+dfsg-3build1</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/tar@1.35%2Bdfsg-3build1?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (51:51)
FROM mongo:8.2.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-45582?s=ubuntu&n=tar&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium : CVE--2025--45582" src="https://img.shields.io/badge/CVE--2025--45582-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.068%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GNU Tar through 1.35 allows file overwrite via directory traversal in crafted TAR archives, with a certain two-step process. First, the victim must extract an archive that contains a ../ symlink to a critical directory. Second, the victim must extract an archive that contains a critical file, specified via a relative pathname that begins with the symlink name and ends with that critical file's name. Here, the extraction follows the symlink and overwrites the critical file. This bypasses the protection mechanism of "Member name contains '..'" that would occur for a single TAR archive that attempted to specify the critical file via a ../ approach. For example, the first archive can contain "x -> ../../../../../home/victim/.ssh" and the second archive can contain x/authorized_keys. This can affect server applications that automatically extract any number of user-supplied TAR archives, and were relying on the blocking of traversal. This can also affect software installation processes in which "tar xf" is run more than once (e.g., when installing a package can automatically install two dependencies that are set up as untrusted tarballs instead of official packages). NOTE: the official GNU Tar manual has an otherwise-empty directory for each "tar xf" in its Security Rules of Thumb; however, third-party advice leads users to run "tar xf" more than once into the same directory.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>js-yaml</strong> <code>3.13.1</code> (npm)</summary>

<small><code>pkg:npm/js-yaml@3.13.1</code></small><br/>

```dockerfile
# mongo-8.dockerfile (51:51)
FROM mongo:8.2.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-64718?s=github&n=js-yaml&t=npm&vr=%3C3.14.2"><img alt="medium 5.3: CVE--2025--64718" src="https://img.shields.io/badge/CVE--2025--64718-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Improperly Controlled Modification of Object Prototype Attributes ('Prototype Pollution')</i>

<table>
<tr><td>Affected range</td><td><code>&lt;3.14.2</code></td></tr>
<tr><td>Fixed version</td><td><code>4.1.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:L/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.020%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact

In js-yaml 4.1.0, 4.0.0, and 3.14.1 and below, it's possible for an attacker to modify the prototype of the result of a parsed yaml document via prototype pollution (`__proto__`). All users who parse untrusted yaml documents may be impacted.

### Patches

Problem is patched in js-yaml 4.1.1 and 3.14.2.

### Workarounds

You can protect against this kind of attack on the server by using `node --disable-proto=delete` or `deno` (in Deno, pollution protection is on by default).

### References

https://cheatsheetseries.owasp.org/cheatsheets/Prototype_Pollution_Prevention_Cheat_Sheet.html

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>libtasn1-6</strong> <code>4.19.0-3ubuntu0.24.04.1</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/libtasn1-6@4.19.0-3ubuntu0.24.04.1?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (51:51)
FROM mongo:8.2.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-13151?s=ubuntu&n=libtasn1-6&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3C4.19.0-3ubuntu0.24.04.2"><img alt="medium : CVE--2025--13151" src="https://img.shields.io/badge/CVE--2025--13151-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;4.19.0-3ubuntu0.24.04.2</code></td></tr>
<tr><td>Fixed version</td><td><code>4.19.0-3ubuntu0.24.04.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.059%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>19th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Stack-based buffer overflow in libtasn1 version: v4.20.0. The function fails to validate the size of input data resulting in a buffer overflow in asn1_expend_octet_string.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>pam</strong> <code>1.5.3-5ubuntu5.5</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/pam@1.5.3-5ubuntu5.5?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (51:51)
FROM mongo:8.2.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-8941?s=ubuntu&n=pam&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="medium : CVE--2025--8941" src="https://img.shields.io/badge/CVE--2025--8941-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.012%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in linux-pam. The pam_namespace module may improperly handle user-controlled paths, allowing local users to exploit symlink attacks and race conditions to elevate their privileges to root. This CVE provides a "complete" fix for CVE-2025-6020.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>libgcrypt20</strong> <code>1.10.3-2build1</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/libgcrypt20@1.10.3-2build1?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (51:51)
FROM mongo:8.2.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2024-2236?s=ubuntu&n=libgcrypt20&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="low : CVE--2024--2236" src="https://img.shields.io/badge/CVE--2024--2236-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.222%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>45th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A timing-based side-channel flaw was found in libgcrypt's RSA implementation. This issue may allow a remote attacker to initiate a Bleichenbacher-style attack, which can lead to the decryption of RSA ciphertexts.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>shadow</strong> <code>1:4.13+dfsg1-4ubuntu3.2</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/shadow@1%3A4.13%2Bdfsg1-4ubuntu3.2?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (51:51)
FROM mongo:8.2.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2024-56433?s=ubuntu&n=shadow&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="low : CVE--2024--56433" src="https://img.shields.io/badge/CVE--2024--56433-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>4.509%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>89th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

shadow-utils (aka shadow) 4.4 through 4.17.0 establishes a default /etc/subuid behavior (e.g., uid 100000 through 165535 for the first user account) that can realistically conflict with the uids of users defined on locally administered networks, potentially leading to account takeover, e.g., by leveraging newuidmap for access to an NFS home directory (or same-host resources in the case of remote logins by these local network users). NOTE: it may also be argued that system administrators should not have assigned uids, within local networks, that are within the range that can occur in /etc/subuid.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>coreutils</strong> <code>9.4-3ubuntu6.1</code> (deb)</summary>

<small><code>pkg:deb/ubuntu/coreutils@9.4-3ubuntu6.1?os_distro=noble&os_name=ubuntu&os_version=24.04</code></small><br/>

```dockerfile
# mongo-8.dockerfile (51:51)
FROM mongo:8.2.3
```

<br/>

<a href="https://scout.docker.com/v/CVE-2016-2781?s=ubuntu&n=coreutils&ns=ubuntu&t=deb&osn=ubuntu&osv=24.04&vr=%3E%3D0"><img alt="low 6.5: CVE--2016--2781" src="https://img.shields.io/badge/CVE--2016--2781-lightgrey?label=low%206.5&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>6.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.0/AV:L/AC:L/PR:L/UI:N/S:C/C:N/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.086%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>25th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

chroot in GNU coreutils, when used with --userspec, allows local users to escape to the parent session via a crafted TIOCSTI ioctl call, which pushes characters to the terminal's input buffer.

</blockquote>
</details>
</details></td></tr>
</table>

