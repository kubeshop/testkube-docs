---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:0a67863a9f30ba352c04bdec137dca27a6dbf3674f4b0a85797afa69c49d8640</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 2" src="https://img.shields.io/badge/critical-2-8b1924"/> <img alt="high: 16" src="https://img.shields.io/badge/high-16-e25d68"/> <img alt="medium: 30" src="https://img.shields.io/badge/medium-30-fbb552"/> <img alt="low: 44" src="https://img.shields.io/badge/low-44-fce1a9"/> <!-- unspecified: 0 --></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>89 MB</td></tr>
<tr><td>packages</td><td>484</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 6" src="https://img.shields.io/badge/H-6-e25d68"/> <img alt="medium: 10" src="https://img.shields.io/badge/M-10-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>stdlib</strong> <code>1.25.0</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.25.0</code></small><br/>

```dockerfile
# minio-release.dockerfile (76:76)
COPY --from=build /build/mc/mc /opt/bitnami/common/bin/mc
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

<a href="https://scout.docker.com/v/CVE-2025-61729?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.5"><img alt="high : CVE--2025--61729" src="https://img.shields.io/badge/CVE--2025--61729-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.5</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.5</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.017%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Within HostnameError.Error(), when constructing an error string, there is no limit to the number of hosts that will be printed out. Furthermore, the error string is constructed by repeated string concatenation, leading to quadratic runtime. Therefore, a certificate provided by a malicious actor can result in excessive resource consumption.

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

<a href="https://scout.docker.com/v/CVE-2025-61725?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.2"><img alt="high : CVE--2025--61725" src="https://img.shields.io/badge/CVE--2025--61725-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.031%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The ParseAddress function constructs domain-literal address components through repeated string concatenation. When parsing large domain-literal components, this can cause excessive CPU consumption.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61723?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.2"><img alt="high : CVE--2025--61723" src="https://img.shields.io/badge/CVE--2025--61723-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.038%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The processing time for parsing some invalid inputs scales non-linearly with respect to the size of the input.

This affects programs which parse untrusted PEM inputs.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58188?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.2"><img alt="high : CVE--2025--58188" src="https://img.shields.io/badge/CVE--2025--58188-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.018%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Validating certificate chains which contain DSA public keys can cause programs to panic, due to a interface cast that assumes they implement the Equal method.

This affects programs which validate arbitrary certificate chains.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58187?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.3"><img alt="high : CVE--2025--58187" src="https://img.shields.io/badge/CVE--2025--58187-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.018%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Due to the design of the name constraint checking algorithm, the processing time of some inputs scale non-linearly with respect to the size of the certificate.

This affects programs which validate arbitrary certificate chains.

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

<a href="https://scout.docker.com/v/CVE-2025-61727?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.5"><img alt="medium : CVE--2025--61727" src="https://img.shields.io/badge/CVE--2025--61727-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.5</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.5</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.011%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An excluded subdomain constraint in a certificate chain does not restrict the usage of wildcard SANs in the leaf certificate. For example a constraint that excludes the subdomain test.example.com does not prevent a leaf certificate from claiming the SAN *.example.com.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-47910?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.1"><img alt="medium : CVE--2025--47910" src="https://img.shields.io/badge/CVE--2025--47910-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.008%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When using http.CrossOriginProtection, the AddInsecureBypassPattern method can unexpectedly bypass more requests than intended. CrossOriginProtection then skips validation, but forwards the original request path, which may be served by a different handler without the intended security protections.

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

<a href="https://scout.docker.com/v/CVE-2025-61724?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.2"><img alt="medium : CVE--2025--61724" src="https://img.shields.io/badge/CVE--2025--61724-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.022%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Reader.ReadResponse function constructs a response string through repeated string concatenation of lines. When the number of lines in a response is large, this can cause excessive CPU consumption.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58189?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.2"><img alt="medium : CVE--2025--58189" src="https://img.shields.io/badge/CVE--2025--58189-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.014%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When Conn.Handshake fails during ALPN negotiation the error contains attacker controlled information (the ALPN protocols sent by the client) which is not escaped.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58186?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.2"><img alt="medium : CVE--2025--58186" src="https://img.shields.io/badge/CVE--2025--58186-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.030%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>8th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Despite HTTP headers having a default limit of 1MB, the number of cookies that can be parsed does not have a limit. By sending a lot of very small cookies such as "a=;", an attacker can make an HTTP server allocate a large amount of structs, causing large memory consumption.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58185?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.2"><img alt="medium : CVE--2025--58185" src="https://img.shields.io/badge/CVE--2025--58185-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.032%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Parsing a maliciously crafted DER payload could allocate large amounts of memory, causing memory exhaustion.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-47912?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.2"><img alt="medium : CVE--2025--47912" src="https://img.shields.io/badge/CVE--2025--47912-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.032%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Parse function permits values other than IPv6 addresses to be included in square brackets within the host component of a URL. RFC 3986 permits IPv6 addresses to be included within the host component, enclosed within square brackets. For example: "http://[::1]/". IPv4 addresses and hostnames must not appear within square brackets. Parse did not enforce this requirement.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58183?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.2"><img alt="medium : CVE--2025--58183" src="https://img.shields.io/badge/CVE--2025--58183-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.2</code></td></tr>
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
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 2" src="https://img.shields.io/badge/H-2-e25d68"/> <img alt="medium: 3" src="https://img.shields.io/badge/M-3-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>stdlib</strong> <code>1.25.3</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.25.3</code></small><br/>

```dockerfile
# minio-release.dockerfile (76:76)
COPY --from=build /build/mc/mc /opt/bitnami/common/bin/mc
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

<a href="https://scout.docker.com/v/CVE-2025-61729?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.5"><img alt="high : CVE--2025--61729" src="https://img.shields.io/badge/CVE--2025--61729-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.5</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.5</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.017%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Within HostnameError.Error(), when constructing an error string, there is no limit to the number of hosts that will be printed out. Furthermore, the error string is constructed by repeated string concatenation, leading to quadratic runtime. Therefore, a certificate provided by a malicious actor can result in excessive resource consumption.

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

<a href="https://scout.docker.com/v/CVE-2025-61727?s=golang&n=stdlib&t=golang&vr=%3E%3D1.25.0%2C%3C1.25.5"><img alt="medium : CVE--2025--61727" src="https://img.shields.io/badge/CVE--2025--61727-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.25.0<br/><1.25.5</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.5</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.011%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An excluded subdomain constraint in a certificate chain does not restrict the usage of wildcard SANs in the leaf certificate. For example a constraint that excludes the subdomain test.example.com does not prevent a leaf certificate from claiming the SAN *.example.com.

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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 3" src="https://img.shields.io/badge/H-3-e25d68"/> <img alt="medium: 4" src="https://img.shields.io/badge/M-4-fbb552"/> <img alt="low: 3" src="https://img.shields.io/badge/L-3-fce1a9"/> <!-- unspecified: 0 --><strong>openssl</strong> <code>3.0.17-1~deb12u3</code> (deb)</summary>

<small><code>pkg:deb/debian/openssl@3.0.17-1~deb12u3?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (53:59)
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    jq \
    curl \
    procps \
    bash \
  && rm -rf /var/lib/apt/lists/*
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-69421?s=debian&n=openssl&ns=debian&t=deb&osn=debian&osv=12&vr=%3C3.0.18-1%7Edeb12u2"><img alt="high : CVE--2025--69421" src="https://img.shields.io/badge/CVE--2025--69421-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.0.18-1~deb12u2</code></td></tr>
<tr><td>Fixed version</td><td><code>3.0.18-1~deb12u2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.059%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue summary: Processing a malformed PKCS#12 file can trigger a NULL pointer dereference in the PKCS12_item_decrypt_d2i_ex() function.  Impact summary: A NULL pointer dereference can trigger a crash which leads to Denial of Service for an application processing PKCS#12 files.  The PKCS12_item_decrypt_d2i_ex() function does not check whether the oct parameter is NULL before dereferencing it. When called from PKCS12_unpack_p7encdata() with a malformed PKCS#12 file, this parameter can be NULL, causing a crash. The vulnerability is limited to Denial of Service and cannot be escalated to achieve code execution or memory disclosure.  Exploiting this issue requires an attacker to provide a malformed PKCS#12 file to an application that processes it. For that reason the issue was assessed as Low severity according to our Security Policy.  The FIPS modules in 3.6, 3.5, 3.4, 3.3 and 3.0 are not affected by this issue, as the PKCS#12 implementation is outside the OpenSSL FIPS module boundary.  OpenSSL 3.6, 3.5, 3.4, 3.3, 3.0, 1.1.1 and 1.0.2 are vulnerable to this issue.

---
- openssl 3.5.5-1
https://openssl-library.org/news/secadv/20260127.txt
Fixed by: https://github.com/openssl/openssl/commit/3524a29271f8191b8fd8a5257eb05173982a097b (openssl-3.5.5)
Fixed by: https://github.com/openssl/openssl/commit/36ecb4960872a4ce04bf6f1e1f4e78d75ec0c0c7 (openssl-3.0.19)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-69420?s=debian&n=openssl&ns=debian&t=deb&osn=debian&osv=12&vr=%3C3.0.18-1%7Edeb12u2"><img alt="high : CVE--2025--69420" src="https://img.shields.io/badge/CVE--2025--69420-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.0.18-1~deb12u2</code></td></tr>
<tr><td>Fixed version</td><td><code>3.0.18-1~deb12u2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.070%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue summary: A type confusion vulnerability exists in the TimeStamp Response verification code where an ASN1_TYPE union member is accessed without first validating the type, causing an invalid or NULL pointer dereference when processing a malformed TimeStamp Response file.  Impact summary: An application calling TS_RESP_verify_response() with a malformed TimeStamp Response can be caused to dereference an invalid or NULL pointer when reading, resulting in a Denial of Service.  The functions ossl_ess_get_signing_cert() and ossl_ess_get_signing_cert_v2() access the signing cert attribute value without validating its type. When the type is not V_ASN1_SEQUENCE, this results in accessing invalid memory through the ASN1_TYPE union, causing a crash.  Exploiting this vulnerability requires an attacker to provide a malformed TimeStamp Response to an application that verifies timestamp responses. The TimeStamp protocol (RFC 3161) is not widely used and the impact of the exploit is just a Denial of Service. For these reasons the issue was assessed as Low severity.  The FIPS modules in 3.5, 3.4, 3.3 and 3.0 are not affected by this issue, as the TimeStamp Response implementation is outside the OpenSSL FIPS module boundary.  OpenSSL 3.6, 3.5, 3.4, 3.3, 3.0 and 1.1.1 are vulnerable to this issue.  OpenSSL 1.0.2 is not affected by this issue.

---
- openssl 3.5.5-1
https://openssl-library.org/news/secadv/20260127.txt
Fixed by: https://github.com/openssl/openssl/commit/564fd9c73787f25693bf9e75faf7bf6bb1305d4e (openssl-3.5.5)
Fixed by: https://github.com/openssl/openssl/commit/4e254b48ad93cc092be3dd62d97015f33f73133a (openssl-3.0.19)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-69419?s=debian&n=openssl&ns=debian&t=deb&osn=debian&osv=12&vr=%3C3.0.18-1%7Edeb12u2"><img alt="high : CVE--2025--69419" src="https://img.shields.io/badge/CVE--2025--69419-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.0.18-1~deb12u2</code></td></tr>
<tr><td>Fixed version</td><td><code>3.0.18-1~deb12u2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.056%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>17th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue summary: Calling PKCS12_get_friendlyname() function on a maliciously crafted PKCS#12 file with a BMPString (UTF-16BE) friendly name containing non-ASCII BMP code point can trigger a one byte write before the allocated buffer.  Impact summary: The out-of-bounds write can cause a memory corruption which can have various consequences including a Denial of Service.  The OPENSSL_uni2utf8() function performs a two-pass conversion of a PKCS#12 BMPString (UTF-16BE) to UTF-8. In the second pass, when emitting UTF-8 bytes, the helper function bmp_to_utf8() incorrectly forwards the remaining UTF-16 source byte count as the destination buffer capacity to UTF8_putc(). For BMP code points above U+07FF, UTF-8 requires three bytes, but the forwarded capacity can be just two bytes. UTF8_putc() then returns -1, and this negative value is added to the output length without validation, causing the length to become negative. The subsequent trailing NUL byte is then written at a negative offset, causing write outside of heap allocated buffer.  The vulnerability is reachable via the public PKCS12_get_friendlyname() API when parsing attacker-controlled PKCS#12 files. While PKCS12_parse() uses a different code path that avoids this issue, PKCS12_get_friendlyname() directly invokes the vulnerable function. Exploitation requires an attacker to provide a malicious PKCS#12 file to be parsed by the application and the attacker can just trigger a one zero byte write before the allocated buffer. For that reason the issue was assessed as Low severity according to our Security Policy.  The FIPS modules in 3.6, 3.5, 3.4, 3.3 and 3.0 are not affected by this issue, as the PKCS#12 implementation is outside the OpenSSL FIPS module boundary.  OpenSSL 3.6, 3.5, 3.4, 3.3, 3.0 and 1.1.1 are vulnerable to this issue.  OpenSSL 1.0.2 is not affected by this issue.

---
- openssl 3.5.5-1
https://openssl-library.org/news/secadv/20260127.txt
Fixed by: https://github.com/openssl/openssl/commit/ff628933755075446bca8307e8417c14d164b535 (openssl-3.5.5)
Fixed by: https://github.com/openssl/openssl/commit/41be0f216404f14457bbf3b9cc488dba60b49296 (openssl-3.0.19)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-22795?s=debian&n=openssl&ns=debian&t=deb&osn=debian&osv=12&vr=%3C3.0.18-1%7Edeb12u2"><img alt="medium : CVE--2026--22795" src="https://img.shields.io/badge/CVE--2026--22795-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.0.18-1~deb12u2</code></td></tr>
<tr><td>Fixed version</td><td><code>3.0.18-1~deb12u2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.015%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue summary: An invalid or NULL pointer dereference can happen in an application processing a malformed PKCS#12 file.  Impact summary: An application processing a malformed PKCS#12 file can be caused to dereference an invalid or NULL pointer on memory read, resulting in a Denial of Service.  A type confusion vulnerability exists in PKCS#12 parsing code where an ASN1_TYPE union member is accessed without first validating the type, causing an invalid pointer read.  The location is constrained to a 1-byte address space, meaning any attempted pointer manipulation can only target addresses between 0x00 and 0xFF. This range corresponds to the zero page, which is unmapped on most modern operating systems and will reliably result in a crash, leading only to a Denial of Service. Exploiting this issue also requires a user or application to process a maliciously crafted PKCS#12 file. It is uncommon to accept untrusted PKCS#12 files in applications as they are usually used to store private keys which are trusted by definition. For these reasons, the issue was assessed as Low severity.  The FIPS modules in 3.5, 3.4, 3.3 and 3.0 are not affected by this issue, as the PKCS12 implementation is outside the OpenSSL FIPS module boundary.  OpenSSL 3.6, 3.5, 3.4, 3.3, 3.0 and 1.1.1 are vulnerable to this issue.  OpenSSL 1.0.2 is not affected by this issue.

---
- openssl 3.5.5-1
https://openssl-library.org/news/secadv/20260127.txt
Fixed by: https://github.com/openssl/openssl/commit/2502e7b7d4c0cf4f972a881641fe09edc67aeec4 (openssl-3.5.5)
Fixed by: https://github.com/openssl/openssl/commit/572844beca95068394c916626a6d3a490f831a49 (openssl-3.0.19)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-22796?s=debian&n=openssl&ns=debian&t=deb&osn=debian&osv=12&vr=%3C3.0.18-1%7Edeb12u2"><img alt="medium : CVE--2026--22796" src="https://img.shields.io/badge/CVE--2026--22796-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.0.18-1~deb12u2</code></td></tr>
<tr><td>Fixed version</td><td><code>3.0.18-1~deb12u2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.070%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue summary: A type confusion vulnerability exists in the signature verification of signed PKCS#7 data where an ASN1_TYPE union member is accessed without first validating the type, causing an invalid or NULL pointer dereference when processing malformed PKCS#7 data.  Impact summary: An application performing signature verification of PKCS#7 data or calling directly the PKCS7_digest_from_attributes() function can be caused to dereference an invalid or NULL pointer when reading, resulting in a Denial of Service.  The function PKCS7_digest_from_attributes() accesses the message digest attribute value without validating its type. When the type is not V_ASN1_OCTET_STRING, this results in accessing invalid memory through the ASN1_TYPE union, causing a crash.  Exploiting this vulnerability requires an attacker to provide a malformed signed PKCS#7 to an application that verifies it. The impact of the exploit is just a Denial of Service, the PKCS7 API is legacy and applications should be using the CMS API instead. For these reasons the issue was assessed as Low severity.  The FIPS modules in 3.5, 3.4, 3.3 and 3.0 are not affected by this issue, as the PKCS#7 parsing implementation is outside the OpenSSL FIPS module boundary.  OpenSSL 3.6, 3.5, 3.4, 3.3, 3.0, 1.1.1 and 1.0.2 are vulnerable to this issue.

---
- openssl 3.5.5-1
https://openssl-library.org/news/secadv/20260127.txt
Fixed by: https://github.com/openssl/openssl/commit/2502e7b7d4c0cf4f972a881641fe09edc67aeec4 (openssl-3.5.5)
Fixed by: https://github.com/openssl/openssl/commit/572844beca95068394c916626a6d3a490f831a49 (openssl-3.0.19)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-68160?s=debian&n=openssl&ns=debian&t=deb&osn=debian&osv=12&vr=%3C3.0.18-1%7Edeb12u2"><img alt="medium : CVE--2025--68160" src="https://img.shields.io/badge/CVE--2025--68160-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.0.18-1~deb12u2</code></td></tr>
<tr><td>Fixed version</td><td><code>3.0.18-1~deb12u2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.014%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue summary: Writing large, newline-free data into a BIO chain using the line-buffering filter where the next BIO performs short writes can trigger a heap-based out-of-bounds write.  Impact summary: This out-of-bounds write can cause memory corruption which typically results in a crash, leading to Denial of Service for an application.  The line-buffering BIO filter (BIO_f_linebuffer) is not used by default in TLS/SSL data paths. In OpenSSL command-line applications, it is typically only pushed onto stdout/stderr on VMS systems. Third-party applications that explicitly use this filter with a BIO chain that can short-write and that write large, newline-free data influenced by an attacker would be affected. However, the circumstances where this could happen are unlikely to be under attacker control, and BIO_f_linebuffer is unlikely to be handling non-curated data controlled by an attacker. For that reason the issue was assessed as Low severity.  The FIPS modules in 3.6, 3.5, 3.4, 3.3 and 3.0 are not affected by this issue, as the BIO implementation is outside the OpenSSL FIPS module boundary.  OpenSSL 3.6, 3.5, 3.4, 3.3, 3.0, 1.1.1 and 1.0.2 are vulnerable to this issue.

---
- openssl 3.5.5-1
https://openssl-library.org/news/secadv/20260127.txt
Fixed by: https://github.com/openssl/openssl/commit/6845c3b6460a98b1ec4e463baa2ea1a63a32d7c0 (openssl-3.5.5)
Fixed by: https://github.com/openssl/openssl/commit/475c466ef2fbd8fc1df6fae1c3eed9c813fc8ff6 (openssl-3.0.19)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-69418?s=debian&n=openssl&ns=debian&t=deb&osn=debian&osv=12&vr=%3C3.0.18-1%7Edeb12u2"><img alt="medium : CVE--2025--69418" src="https://img.shields.io/badge/CVE--2025--69418-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.0.18-1~deb12u2</code></td></tr>
<tr><td>Fixed version</td><td><code>3.0.18-1~deb12u2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.005%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>0th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue summary: When using the low-level OCB API directly with AES-NI or<br>other hardware-accelerated code paths, inputs whose length is not a multiple<br>of 16 bytes can leave the final partial block unencrypted and unauthenticated.<br><br>Impact summary: The trailing 1-15 bytes of a message may be exposed in<br>cleartext on encryption and are not covered by the authentication tag,<br>allowing an attacker to read or tamper with those bytes without detection.<br><br>The low-level OCB encrypt and decrypt routines in the hardware-accelerated<br>stream path process full 16-byte blocks but do not advance the input/output<br>pointers. The subsequent tail-handling code then operates on the original<br>base pointers, effectively reprocessing the beginning of the buffer while<br>leaving the actual trailing bytes unprocessed. The authentication checksum<br>also excludes the true tail bytes.<br><br>However, typical OpenSSL consumers using EVP are not affected because the<br>higher-level EVP and provider OCB implementations split inputs so that full<br>blocks and trailing partial blocks are processed in separate calls, avoiding<br>the problematic code path. Additionally, TLS does not use OCB ciphersuites.<br>The vulnerability only affects applications that call the low-level<br>CRYPTO_ocb128_encrypt() or CRYPTO_ocb128_decrypt() functions directly with<br>non-block-aligned lengths in a single call on hardware-accelerated builds.<br>For these reasons the issue was assessed as Low severity.<br><br>The FIPS modules in 3.6, 3.5, 3.4, 3.3, 3.2, 3.1 and 3.0 are not affected<br>by this issue, as OCB mode is not a FIPS-approved algorithm.<br><br>OpenSSL 3.6, 3.5, 3.4, 3.3, 3.0 and 1.1.1 are vulnerable to this issue.<br><br>OpenSSL 1.0.2 is not affected by this issue.

---
- openssl 3.5.5-1
https://openssl-library.org/news/secadv/20260127.txt
Fixed by: https://github.com/openssl/openssl/commit/4016975d4469cd6b94927c607f7c511385f928d8 (openssl-3.5.5)
Fixed by: https://github.com/openssl/openssl/commit/52d23c86a54adab5ee9f80e48b242b52c4cc2347 (openssl-3.0.19)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-27587?s=debian&n=openssl&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D3.0.18-1%7Edeb12u1"><img alt="low : CVE--2025--27587" src="https://img.shields.io/badge/CVE--2025--27587-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=3.0.18-1~deb12u1</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.051%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

OpenSSL 3.0.0 through 3.3.2 on the PowerPC architecture is vulnerable to a Minerva attack, exploitable by measuring the time of signing of random messages using the EVP_DigestSign API, and then using the private key to extract the K value (nonce) from the signatures. Next, based on the bit size of the extracted nonce, one can compare the signing time of full-sized nonces to signatures that used smaller nonces, via statistical tests. There is a side-channel in the P-364 curve that allows private key extraction (also, there is a dependency between the bit size of K and the size of the side channel). NOTE: This CVE is disputed because the OpenSSL security policy explicitly notes that any side channels which require same physical system to be detected are outside of the threat model for the software. The timing signal is so small that it is infeasible to be detected without having the attacking process running on the same physical system.

---
- openssl 3.5.0-1 (unimportant)
https://github.com/openssl/openssl/issues/24253
https://github.com/openssl/openssl/commit/85cabd94958303859b1551364a609d4ff40b67a5 (master)
https://github.com/openssl/openssl/commit/080c6be0b102934bf66daeac70f0863f209f8d0f (openssl-3.5.0-beta1)
https://github.com/openssl/openssl/issues/24253#issuecomment-2144391562
Not considered a vulnerability by OpenSSL upstream

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-15467?s=debian&n=openssl&ns=debian&t=deb&osn=debian&osv=12&vr=%3C3.0.18-1%7Edeb12u2"><img alt="low : CVE--2025--15467" src="https://img.shields.io/badge/CVE--2025--15467-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.0.18-1~deb12u2</code></td></tr>
<tr><td>Fixed version</td><td><code>3.0.18-1~deb12u2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.672%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>71st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Issue summary: Parsing CMS AuthEnvelopedData or EnvelopedData message with maliciously crafted AEAD parameters can trigger a stack buffer overflow.  Impact summary: A stack buffer overflow may lead to a crash, causing Denial of Service, or potentially remote code execution.  When parsing CMS (Auth)EnvelopedData structures that use AEAD ciphers such as AES-GCM, the IV (Initialization Vector) encoded in the ASN.1 parameters is copied into a fixed-size stack buffer without verifying that its length fits the destination. An attacker can supply a crafted CMS message with an oversized IV, causing a stack-based out-of-bounds write before any authentication or tag verification occurs.  Applications and services that parse untrusted CMS or PKCS#7 content using AEAD ciphers (e.g., S/MIME (Auth)EnvelopedData with AES-GCM) are vulnerable. Because the overflow occurs prior to authentication, no valid key material is required to trigger it. While exploitability to remote code execution depends on platform and toolchain mitigations, the stack-based write primitive represents a severe risk.  The FIPS modules in 3.6, 3.5, 3.4, 3.3 and 3.0 are not affected by this issue, as the CMS implementation is outside the OpenSSL FIPS module boundary.  OpenSSL 3.6, 3.5, 3.4, 3.3 and 3.0 are vulnerable to this issue.  OpenSSL 1.1.1 and 1.0.2 are not affected by this issue.

---
- openssl 3.5.5-1
[bullseye] - openssl <not-affected> (Vulnerable code introduced later)
https://openssl-library.org/news/secadv/20260127.txt
Fixed by: https://github.com/openssl/openssl/commit/d0071a0799f20cc8101730145349ed4487c268dc (openssl-3.5.5)
Fixed by: https://github.com/openssl/openssl/commit/9f6338e92c96ffc70b0223bf5da0c134a8eef9fb (openssl-3.5.5)
Test: https://github.com/openssl/openssl/commit/a114855991da05631cce17a52a143f10d80b4193 (openssl-3.5.5)
Fixed by: https://github.com/openssl/openssl/commit/ce39170276daec87f55c39dad1f629b56344429e (openssl-3.0.19)
Fixed by: https://github.com/openssl/openssl/commit/cdccf8f2ef17ae020bd69360c43a39306b89c381 (openssl-3.0.19)
Test: https://github.com/openssl/openssl/commit/e0666f72294691a808443970b654412a6d92fa0f (openssl-3.0.19)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2010-0928?s=debian&n=openssl&ns=debian&t=deb&osn=debian&osv=12&vr=%3E%3D3.0.11-1%7Edeb12u2"><img alt="low : CVE--2010--0928" src="https://img.shields.io/badge/CVE--2010--0928-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=3.0.11-1~deb12u2</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.094%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>26th percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/crypto</strong> <code>0.40.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/crypto@0.40.0</code></small><br/>

```dockerfile
# minio-release.dockerfile (76:76)
COPY --from=build /build/mc/mc /opt/bitnami/common/bin/mc
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-47913?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.43.0"><img alt="high : CVE--2025--47913" src="https://img.shields.io/badge/CVE--2025--47913-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.43.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.43.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.033%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/crypto</strong> <code>0.37.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/crypto@0.37.0</code></small><br/>

```dockerfile
# minio-release.dockerfile (80:80)
COPY --from=build /build/minio/minio /opt/bitnami/common/bin/minio
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-47913?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.43.0"><img alt="high : CVE--2025--47913" src="https://img.shields.io/badge/CVE--2025--47913-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.43.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.43.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.033%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>pam</strong> <code>1.5.2-6+deb12u1</code> (deb)</summary>

<small><code>pkg:deb/debian/pam@1.5.2-6%2Bdeb12u1?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (36:36)
FROM debian:bookworm-slim
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-6020?s=debian&n=pam&ns=debian&t=deb&osn=debian&osv=12&vr=%3C1.5.2-6%2Bdeb12u2"><img alt="high : CVE--2025--6020" src="https://img.shields.io/badge/CVE--2025--6020-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.5.2-6+deb12u2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.5.2-6+deb12u2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.015%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in linux-pam. The module pam_namespace may use access user-controlled paths without proper protection, allowing local users to elevate their privileges to root via multiple symlink attacks and race conditions.

---
[experimental] - pam 1.7.0-4
- pam 1.7.0-5 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1107919)
[bookworm] - pam 1.5.2-6+deb12u2
https://www.openwall.com/lists/oss-security/2025/06/17/1
https://github.com/linux-pam/linux-pam/security/advisories/GHSA-f9p8-gjr4-j9gx
Fixed by: https://github.com/linux-pam/linux-pam/commit/475bd60c552b98c7eddb3270b0b4196847c0072e (v1.7.1)
Fixed by: https://github.com/linux-pam/linux-pam/commit/592d84e1265d04c3104acee815a503856db503a1 (v1.7.1)
Fixed by: https://github.com/linux-pam/linux-pam/commit/976c20079358d133514568fc7fd95c02df8b5773 (v1.7.1)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-22365?s=debian&n=pam&ns=debian&t=deb&osn=debian&osv=12&vr=%3C1.5.2-6%2Bdeb12u2"><img alt="medium : CVE--2024--22365" src="https://img.shields.io/badge/CVE--2024--22365-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.5.2-6+deb12u2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.5.2-6+deb12u2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.139%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>34th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

linux-pam (aka Linux PAM) before 1.6.0 allows attackers to cause a denial of service (blocked login process) via mkfifo because the openat call (for protect_dir) lacks O_DIRECTORY.

---
[experimental] - pam 1.5.3-2
- pam 1.5.3-4 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1061097)
[bookworm] - pam 1.5.2-6+deb12u2
[buster] - pam <no-dsa> (Minor issue)
https://www.openwall.com/lists/oss-security/2024/01/18/3
https://github.com/linux-pam/linux-pam/commit/031bb5a5d0d950253b68138b498dc93be69a64cb (v1.6.0)

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>gnupg2</strong> <code>2.2.40-1.1+deb12u1</code> (deb)</summary>

<small><code>pkg:deb/debian/gnupg2@2.2.40-1.1%2Bdeb12u1?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (36:36)
FROM debian:bookworm-slim
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-68973?s=debian&n=gnupg2&ns=debian&t=deb&osn=debian&osv=12&vr=%3C2.2.40-1.1%2Bdeb12u2"><img alt="high : CVE--2025--68973" src="https://img.shields.io/badge/CVE--2025--68973-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.2.40-1.1+deb12u2</code></td></tr>
<tr><td>Fixed version</td><td><code>2.2.40-1.1+deb12u2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.016%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In GnuPG before 2.4.9, armor_filter in g10/armor.c has two increments of an index variable where one is intended, leading to an out-of-bounds write for crafted input. (For ExtendedLTS, 2.2.51 and later are fixed versions.)

---
- gnupg2 2.4.8-5 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1124221)
[trixie] - gnupg2 2.4.7-21+deb13u1
[bookworm] - gnupg2 2.2.40-1.1+deb12u2
https://gpg.fail/memcpy
https://dev.gnupg.org/T7906
https://www.openwall.com/lists/oss-security/2025/12/28/5
https://github.com/gpg/gnupg/commit/115d138ba599328005c5321c0ef9f00355838ca9 (gnupg-2.5.14)
https://github.com/gpg/gnupg/commit/4ecc5122f20e10c17172ed72f4fa46c784b5fb48 (gnupg-2.4.9)
https://github.com/gpg/gnupg/commit/1e929abd20fa2e4be3797a137caca63a971d5372 (gnupg-2.2.51)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-3219?s=debian&n=gnupg2&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D2.2.40-1.1%2Bdeb12u2"><img alt="low : CVE--2022--3219" src="https://img.shields.io/badge/CVE--2022--3219-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=2.2.40-1.1+deb12u2</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.013%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>go.opentelemetry.io/otel/sdk</strong> <code>1.35.0</code> (golang)</summary>

<small><code>pkg:golang/go.opentelemetry.io/otel/sdk@1.35.0</code></small><br/>

```dockerfile
# minio-release.dockerfile (80:80)
COPY --from=build /build/minio/minio /opt/bitnami/common/bin/minio
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-24051?s=golang&n=sdk&ns=go.opentelemetry.io%2Fotel&t=golang&vr=%3E%3D1.21.0%2C%3C1.40.0"><img alt="high : CVE--2026--24051" src="https://img.shields.io/badge/CVE--2026--24051-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.21.0<br/><1.40.0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.40.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.006%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>0th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

OpenTelemetry Go SDK Vulnerable to Arbitrary Code Execution via PATH Hijacking in go.opentelemetry.io/otel/sdk

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>gnutls28</strong> <code>3.7.9-2+deb12u5</code> (deb)</summary>

<small><code>pkg:deb/debian/gnutls28@3.7.9-2%2Bdeb12u5?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (36:36)
FROM debian:bookworm-slim
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-14831?s=debian&n=gnutls28&ns=debian&t=deb&osn=debian&osv=12&vr=%3C3.7.9-2%2Bdeb12u6"><img alt="medium : CVE--2025--14831" src="https://img.shields.io/badge/CVE--2025--14831-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.7.9-2+deb12u6</code></td></tr>
<tr><td>Fixed version</td><td><code>3.7.9-2+deb12u6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.039%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>12th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in GnuTLS. This vulnerability allows a denial of service (DoS) by excessive CPU (Central Processing Unit) and memory consumption via specially crafted malicious certificates containing a large number of name constraints and subject alternative names (SANs).

---
- gnutls28 3.8.12-1
https://gitlab.com/gnutls/gnutls/-/issues/1773
Prequisite: https://gitlab.com/gnutls/gnutls/-/commit/0b2377dfccd99be641bf3f1a0de9f0dc8dc0d4b1 (3.8.12)
Prequisite: https://gitlab.com/gnutls/gnutls/-/commit/85d6348a30c74d4ee3710e0f4652f634eaad6914 (3.8.12)
Prequisite: https://gitlab.com/gnutls/gnutls/-/commit/c28475413f82e1f34295d5c039f0c0a4ca2ee526 (3.8.12)
Prequisite: https://gitlab.com/gnutls/gnutls/-/commit/6db7da7fcfe230f445b1edbb56e2a8346120c891 (3.8.12)
Prequisite: https://gitlab.com/gnutls/gnutls/-/commit/094accd3ebec17ead6c391757eaa18763b72d83f (3.8.12)
Prequisite: https://gitlab.com/gnutls/gnutls/-/commit/bc62fbb946085527b4b1c02f337dd10c68c54690 (3.8.12)
Prequisite: https://gitlab.com/gnutls/gnutls/-/commit/80db5e90fa18d3e34bb91dd027bdf76d31e93dcd (3.8.12)
Prequisite: https://gitlab.com/gnutls/gnutls/-/commit/d0ac999620c8c0aeb6939e1e92d884ca8e40b759 (3.8.12)
Fixed by: https://gitlab.com/gnutls/gnutls/-/commit/d6054f0016db05fb5c82177ddbd0a4e8331059a1 (3.8.12)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-9820?s=debian&n=gnutls28&ns=debian&t=deb&osn=debian&osv=12&vr=%3C3.7.9-2%2Bdeb12u6"><img alt="medium : CVE--2025--9820" src="https://img.shields.io/badge/CVE--2025--9820-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.7.9-2+deb12u6</code></td></tr>
<tr><td>Fixed version</td><td><code>3.7.9-2+deb12u6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.010%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in the GnuTLS library, specifically in the gnutls_pkcs11_token_init() function that handles PKCS#11 token initialization. When a token label longer than expected is processed, the function writes past the end of a fixed-size stack buffer. This programming error can cause the application using GnuTLS to crash or, in certain conditions, be exploited for code execution. As a result, systems or applications relying on GnuTLS may be vulnerable to a denial of service or local privilege escalation attacks.

---
[experimental] - gnutls28 3.8.11-1
- gnutls28 3.8.11-3 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1121146)
[trixie] - gnutls28 3.8.9-3+deb13u1
[bookworm] - gnutls28 3.7.9-2+deb12u6
https://www.gnutls.org/security-new.html#GNUTLS-SA-2025-11-18
https://gitlab.com/gnutls/gnutls/-/issues/1732
Fixed by: https://gitlab.com/gnutls/gnutls/-/commit/1d56f96f6ab5034d677136b9d50b5a75dff0faf5 (3.8.11)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2011-3389?s=debian&n=gnutls28&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D3.7.9-2%2Bdeb12u5"><img alt="low : CVE--2011--3389" src="https://img.shields.io/badge/CVE--2011--3389-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=3.7.9-2+deb12u5</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>3.795%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>88th percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/net</strong> <code>0.39.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/net@0.39.0</code></small><br/>

```dockerfile
# minio-release.dockerfile (80:80)
COPY --from=build /build/minio/minio /opt/bitnami/common/bin/minio
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
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The html.Parse function in golang.org/x/net/html has quadratic parsing complexity when processing certain inputs, which can lead to denial of service (DoS) if an attacker provides specially crafted HTML content.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/net</strong> <code>0.42.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/net@0.42.0</code></small><br/>

```dockerfile
# minio-release.dockerfile (76:76)
COPY --from=build /build/mc/mc /opt/bitnami/common/bin/mc
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
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The html.Parse function in golang.org/x/net/html has quadratic parsing complexity when processing certain inputs, which can lead to denial of service (DoS) if an attacker provides specially crafted HTML content.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>tar</strong> <code>1.34+dfsg-1.2+deb12u1</code> (deb)</summary>

<small><code>pkg:deb/debian/tar@1.34%2Bdfsg-1.2%2Bdeb12u1?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (36:36)
FROM debian:bookworm-slim
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-45582?s=debian&n=tar&ns=debian&t=deb&osn=debian&osv=12&vr=%3E%3D1.34%2Bdfsg-1.2%2Bdeb12u1"><img alt="medium : CVE--2025--45582" src="https://img.shields.io/badge/CVE--2025--45582-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.34+dfsg-1.2+deb12u1</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.068%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2005-2541?s=debian&n=tar&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D1.34%2Bdfsg-1.2%2Bdeb12u1"><img alt="low : CVE--2005--2541" src="https://img.shields.io/badge/CVE--2005--2541-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=1.34+dfsg-1.2+deb12u1</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>2.806%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>86th percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/eclipse/paho.mqtt.golang</strong> <code>1.5.0</code> (golang)</summary>

<small><code>pkg:golang/github.com/eclipse/paho.mqtt.golang@1.5.0</code></small><br/>

```dockerfile
# minio-release.dockerfile (80:80)
COPY --from=build /build/minio/minio /opt/bitnami/common/bin/minio
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-10543?s=github&n=paho.mqtt.golang&ns=github.com%2Feclipse&t=golang&vr=%3C1.5.1"><img alt="medium 6.3: CVE--2025--10543" src="https://img.shields.io/badge/CVE--2025--10543-lightgrey?label=medium%206.3&labelColor=fbb552"/></a> <i>Numeric Truncation Error</i>

<table>
<tr><td>Affected range</td><td><code>&lt;1.5.1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.5.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:N/VC:L/VI:N/VA:N/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.040%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>12th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In Eclipse Paho Go MQTT v3.1 library (paho.mqtt.golang) versions <=1.5.0 UTF-8 encoded strings, passed into the library, may be incorrectly encoded if their length exceeds 65535 bytes. This may lead to unexpected content in packets sent to the server (for example, part of an MQTT topic may leak into the message body in a PUBLISH packet).

The issue arises because the length of the data passed in was converted from an int64/int32 (depending upon CPU) to an int16 without checks for overflows. The int16 length was then written, followed by the data (e.g. topic). This meant that when the data (e.g. topic) was over 65535 bytes then the amount of data written exceeds what the length field indicates. This could lead to a corrupt packet, or mean that the excess data leaks into another field (e.g. topic leaks into message body).

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 7" src="https://img.shields.io/badge/L-7-fce1a9"/> <!-- unspecified: 0 --><strong>glibc</strong> <code>2.36-9+deb12u13</code> (deb)</summary>

<small><code>pkg:deb/debian/glibc@2.36-9%2Bdeb12u13?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (36:36)
FROM debian:bookworm-slim
```

<br/>

<a href="https://scout.docker.com/v/CVE-2019-9192?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D2.36-9%2Bdeb12u13"><img alt="low : CVE--2019--9192" src="https://img.shields.io/badge/CVE--2019--9192-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=2.36-9+deb12u13</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.841%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>74th percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2019-1010025?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D2.36-9%2Bdeb12u13"><img alt="low : CVE--2019--1010025" src="https://img.shields.io/badge/CVE--2019--1010025-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=2.36-9+deb12u13</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.856%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>75th percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2019-1010024?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D2.36-9%2Bdeb12u13"><img alt="low : CVE--2019--1010024" src="https://img.shields.io/badge/CVE--2019--1010024-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=2.36-9+deb12u13</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.646%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>70th percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2019-1010023?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D2.36-9%2Bdeb12u13"><img alt="low : CVE--2019--1010023" src="https://img.shields.io/badge/CVE--2019--1010023-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=2.36-9+deb12u13</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.322%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>55th percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2019-1010022?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D2.36-9%2Bdeb12u13"><img alt="low : CVE--2019--1010022" src="https://img.shields.io/badge/CVE--2019--1010022-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=2.36-9+deb12u13</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.131%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>33rd percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2018-20796?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D2.36-9%2Bdeb12u13"><img alt="low : CVE--2018--20796" src="https://img.shields.io/badge/CVE--2018--20796-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=2.36-9+deb12u13</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>1.669%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>82nd percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2010-4756?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D2.36-9%2Bdeb12u13"><img alt="low : CVE--2010--4756" src="https://img.shields.io/badge/CVE--2010--4756-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=2.36-9+deb12u13</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.394%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>60th percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 6" src="https://img.shields.io/badge/L-6-fce1a9"/> <!-- unspecified: 0 --><strong>curl</strong> <code>7.88.1-10+deb12u14</code> (deb)</summary>

<small><code>pkg:deb/debian/curl@7.88.1-10%2Bdeb12u14?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (53:59)
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    jq \
    curl \
    procps \
    bash \
  && rm -rf /var/lib/apt/lists/*
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-15224?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D7.88.1-10%2Bdeb12u14"><img alt="low : CVE--2025--15224" src="https://img.shields.io/badge/CVE--2025--15224-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=7.88.1-10+deb12u14</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.072%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>22nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When doing SSH-based transfers using either SCP or SFTP, and asked to do public key authentication, curl would wrongly still ask and authenticate using a locally running SSH agent.

---
- curl 8.18.0-1 (unimportant)
https://curl.se/docs/CVE-2025-15224.html
Introduced with: https://github.com/curl/curl/commit/c92d2e14cfb0db662f958effd2ac86f995cf1b5a (curl-7_58_0)
Fixed by: https://github.com/curl/curl/commit/16d5f2a5660c61cc27bd5f1c7f512391d1c927aa (curl-8_18_0)
Debian builds with libssh2 for SSH backend

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-15079?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D7.88.1-10%2Bdeb12u14"><img alt="low : CVE--2025--15079" src="https://img.shields.io/badge/CVE--2025--15079-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=7.88.1-10+deb12u14</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.030%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When doing SSH-based transfers using either SCP or SFTP, and setting the known_hosts file, libcurl could still mistakenly accept connecting to hosts *not present* in the specified file if they were added as recognized in the libssh *global* known_hosts file.

---
- curl 8.18.0~rc3-1 (unimportant)
https://curl.se/docs/CVE-2025-15079.html
Introduced with: https://github.com/curl/curl/commit/c92d2e14cfb0db662f958effd2ac86f995cf1b5a (curl-7_58_0)
Fixed by: https://github.com/curl/curl/commit/adca486c125d9a6d9565b9607a19dce803a8b479 (rc-8_18_0-3, curl-8_18_0)
Debian builds with libssh2 for SSH backend

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-14017?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D7.88.1-10%2Bdeb12u14"><img alt="low : CVE--2025--14017" src="https://img.shields.io/badge/CVE--2025--14017-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=7.88.1-10+deb12u14</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.007%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When doing multi-threaded LDAPS transfers (LDAP over TLS) with libcurl, changing TLS options in one thread would inadvertently change them globally and therefore possibly also affect other concurrently setup transfers.  Disabling certificate verification for a specific transfer could unintentionally disable the feature for other threads as well.

---
- curl 8.18.0~rc2-1 (unimportant)
https://curl.se/docs/CVE-2025-14017.html
Introduced with: https://github.com/curl/curl/commit/ccba0d10b6baf5c73cae8cf4fb3f29f0f55c5a34 (curl-7_17_0)
Fixed by: https://github.com/curl/curl/commit/39d1976b7f709a516e3243338ebc0443bdd8d56d (rc-8_18_0-1, curl-8_18_0)
Built with OpenLDAP (only affects the legacy LDAP support)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-10966?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D7.88.1-10%2Bdeb12u14"><img alt="low : CVE--2025--10966" src="https://img.shields.io/badge/CVE--2025--10966-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=7.88.1-10+deb12u14</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.015%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

curl's code for managing SSH connections when SFTP was done using the wolfSSH powered backend was flawed and missed host verification mechanisms.  This prevents curl from detecting MITM attackers and more.

---
- curl 8.17.0~rc2-1 (unimportant)
https://curl.se/docs/CVE-2025-10966.html
Introduced with: https://github.com/curl/curl/commit/6773c7ca65cf2183295e56603f9b86a5ce816a06 (curl-7_69_0)
Fixed by: https://github.com/curl/curl/commit/b011e3fcfb06d6c0278595ee2ee297036fbe9793 (rc-8_17_0-1)
wolfSSH backend not used in Debian

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-0725?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D7.88.1-10%2Bdeb12u14"><img alt="low : CVE--2025--0725" src="https://img.shields.io/badge/CVE--2025--0725-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=7.88.1-10+deb12u14</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.904%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>75th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When libcurl is asked to perform automatic gzip decompression of content-encoded HTTP responses with the `CURLOPT_ACCEPT_ENCODING` option, **using zlib 1.2.0.3 or older**, an attacker-controlled integer overflow would make libcurl perform a buffer overflow.

---
- curl 8.12.0+git20250209.89ed161+ds-1 (unimportant)
https://curl.se/docs/CVE-2025-0725.html
Introduced with: https://github.com/curl/curl/commit/019c4088cfcca0d2b7c5cc4f52ca5dac0c616089 (curl-7_10_5)
Fixed by: https://github.com/curl/curl/commit/76f83f0db23846e254d940ec7fe141010077eb88 (curl-8_12_0)
Patch only drops officially support for zlib before 1.2.0.4
Can only be triggered when using ancient runtime zlib of version 1.2.0.3 or older

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-2379?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D7.88.1-10%2Bdeb12u14"><img alt="low : CVE--2024--2379" src="https://img.shields.io/badge/CVE--2024--2379-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=7.88.1-10+deb12u14</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.205%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>42nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

libcurl skips the certificate verification for a QUIC connection under certain conditions, when built to use wolfSSL. If told to use an unknown/bad cipher or curve, the error path accidentally skips the verification and returns OK, thus ignoring any certificate problems.

---
- curl 8.7.1-1 (unimportant)
https://curl.se/docs/CVE-2024-2379.html
Introduced by: https://github.com/curl/curl/commit/5d044ad9480a9f556f4b6a252d7533b1ba7fe57e (curl-8_6_0)
Fixed by: https://github.com/curl/curl/commit/aedbbdf18e689a5eee8dc39600914f5eda6c409c (curl-8_7_0)
curl in Debian not built with wolfSSL support

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 5" src="https://img.shields.io/badge/L-5-fce1a9"/> <!-- unspecified: 0 --><strong>openldap</strong> <code>2.5.13+dfsg-5</code> (deb)</summary>

<small><code>pkg:deb/debian/openldap@2.5.13%2Bdfsg-5?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (53:59)
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    jq \
    curl \
    procps \
    bash \
  && rm -rf /var/lib/apt/lists/*
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-22185?s=debian&n=openldap&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D2.5.13%2Bdfsg-5"><img alt="low : CVE--2026--22185" src="https://img.shields.io/badge/CVE--2026--22185-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=2.5.13+dfsg-5</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.020%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2020-15719?s=debian&n=openldap&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D2.5.13%2Bdfsg-5"><img alt="low : CVE--2020--15719" src="https://img.shields.io/badge/CVE--2020--15719-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=2.5.13+dfsg-5</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.216%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>44th percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2017-17740?s=debian&n=openldap&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D2.5.13%2Bdfsg-5"><img alt="low : CVE--2017--17740" src="https://img.shields.io/badge/CVE--2017--17740-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=2.5.13+dfsg-5</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>1.643%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>82nd percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2017-14159?s=debian&n=openldap&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D2.5.13%2Bdfsg-5"><img alt="low : CVE--2017--14159" src="https://img.shields.io/badge/CVE--2017--14159-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=2.5.13+dfsg-5</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.092%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>26th percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2015-3276?s=debian&n=openldap&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D2.5.13%2Bdfsg-5"><img alt="low : CVE--2015--3276" src="https://img.shields.io/badge/CVE--2015--3276-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=2.5.13+dfsg-5</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>1.757%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>82nd percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 4" src="https://img.shields.io/badge/L-4-fce1a9"/> <!-- unspecified: 0 --><strong>systemd</strong> <code>252.39-1~deb12u1</code> (deb)</summary>

<small><code>pkg:deb/debian/systemd@252.39-1~deb12u1?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (36:36)
FROM debian:bookworm-slim
```

<br/>

<a href="https://scout.docker.com/v/CVE-2023-31439?s=debian&n=systemd&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D252.39-1%7Edeb12u1"><img alt="low : CVE--2023--31439" src="https://img.shields.io/badge/CVE--2023--31439-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=252.39-1~deb12u1</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.094%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>26th percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2023-31438?s=debian&n=systemd&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D252.39-1%7Edeb12u1"><img alt="low : CVE--2023--31438" src="https://img.shields.io/badge/CVE--2023--31438-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=252.39-1~deb12u1</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.100%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>28th percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2023-31437?s=debian&n=systemd&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D252.39-1%7Edeb12u1"><img alt="low : CVE--2023--31437" src="https://img.shields.io/badge/CVE--2023--31437-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=252.39-1~deb12u1</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.128%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>32nd percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2013-4392?s=debian&n=systemd&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D252.39-1%7Edeb12u1"><img alt="low : CVE--2013--4392" src="https://img.shields.io/badge/CVE--2013--4392-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=252.39-1~deb12u1</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.042%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>13th percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 3" src="https://img.shields.io/badge/L-3-fce1a9"/> <!-- unspecified: 0 --><strong>krb5</strong> <code>1.20.1-2+deb12u4</code> (deb)</summary>

<small><code>pkg:deb/debian/krb5@1.20.1-2%2Bdeb12u4?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (53:59)
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    jq \
    curl \
    procps \
    bash \
  && rm -rf /var/lib/apt/lists/*
```

<br/>

<a href="https://scout.docker.com/v/CVE-2024-26461?s=debian&n=krb5&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D1.20.1-2%2Bdeb12u4"><img alt="low : CVE--2024--26461" src="https://img.shields.io/badge/CVE--2024--26461-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=1.20.1-2+deb12u4</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.063%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>20th percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2024-26458?s=debian&n=krb5&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D1.20.1-2%2Bdeb12u4"><img alt="low : CVE--2024--26458" src="https://img.shields.io/badge/CVE--2024--26458-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=1.20.1-2+deb12u4</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.212%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>44th percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2018-5709?s=debian&n=krb5&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D1.20.1-2%2Bdeb12u4"><img alt="low : CVE--2018--5709" src="https://img.shields.io/badge/CVE--2018--5709-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=1.20.1-2+deb12u4</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>1.485%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>81st percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 2" src="https://img.shields.io/badge/L-2-fce1a9"/> <!-- unspecified: 0 --><strong>jq</strong> <code>1.6-2.1+deb12u1</code> (deb)</summary>

<small><code>pkg:deb/debian/jq@1.6-2.1%2Bdeb12u1?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (53:59)
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    jq \
    curl \
    procps \
    bash \
  && rm -rf /var/lib/apt/lists/*
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-9403?s=debian&n=jq&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D1.6-2.1%2Bdeb12u1"><img alt="low : CVE--2025--9403" src="https://img.shields.io/badge/CVE--2025--9403-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=1.6-2.1+deb12u1</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.024%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A vulnerability was determined in jqlang jq up to 1.6. Impacted is the function run_jq_tests of the file jq_test.c of the component JSON Parser. Executing manipulation can lead to reachable assertion. The attack requires local access. The exploit has been publicly disclosed and may be utilized. Other versions might be affected as well.

---
- jq <unfixed> (unimportant)
https://github.com/jqlang/jq/issues/3393
Assertion failure in testsuite, negligible security impact

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-23337?s=debian&n=jq&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D1.6-2.1%2Bdeb12u1"><img alt="low : CVE--2024--23337" src="https://img.shields.io/badge/CVE--2024--23337-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=1.6-2.1+deb12u1</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.092%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>26th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

jq is a command-line JSON processor. In versions up to and including 1.7.1, an integer overflow arises when assigning value using an index of 2147483647, the signed integer limit. This causes a denial of service. Commit de21386681c0df0104a99d9d09db23a9b2a78b1e contains a patch for the issue.

---
- jq 1.7.1-6 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1106289; unimportant)
https://github.com/jqlang/jq/security/advisories/GHSA-2q6r-344g-cx46
https://github.com/jqlang/jq/issues/3262
https://github.com/jqlang/jq/commit/de21386681c0df0104a99d9d09db23a9b2a78b1e
Crash in CLI tool, no security impact

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 2" src="https://img.shields.io/badge/L-2-fce1a9"/> <!-- unspecified: 0 --><strong>coreutils</strong> <code>9.1-1</code> (deb)</summary>

<small><code>pkg:deb/debian/coreutils@9.1-1?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (36:36)
FROM debian:bookworm-slim
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-5278?s=debian&n=coreutils&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D9.1-1"><img alt="low : CVE--2025--5278" src="https://img.shields.io/badge/CVE--2025--5278-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=9.1-1</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.029%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>8th percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2017-18018?s=debian&n=coreutils&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D9.1-1"><img alt="low : CVE--2017--18018" src="https://img.shields.io/badge/CVE--2017--18018-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=9.1-1</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.056%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>17th percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 2" src="https://img.shields.io/badge/L-2-fce1a9"/> <!-- unspecified: 0 --><strong>libgcrypt20</strong> <code>1.10.1-3</code> (deb)</summary>

<small><code>pkg:deb/debian/libgcrypt20@1.10.1-3?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (36:36)
FROM debian:bookworm-slim
```

<br/>

<a href="https://scout.docker.com/v/CVE-2024-2236?s=debian&n=libgcrypt20&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D1.10.1-3"><img alt="low : CVE--2024--2236" src="https://img.shields.io/badge/CVE--2024--2236-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=1.10.1-3</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.222%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>45th percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2018-6829?s=debian&n=libgcrypt20&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D1.10.1-3"><img alt="low : CVE--2018--6829" src="https://img.shields.io/badge/CVE--2018--6829-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=1.10.1-3</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.515%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>66th percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 2" src="https://img.shields.io/badge/L-2-fce1a9"/> <!-- unspecified: 0 --><strong>perl</strong> <code>5.36.0-7+deb12u3</code> (deb)</summary>

<small><code>pkg:deb/debian/perl@5.36.0-7%2Bdeb12u3?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (36:36)
FROM debian:bookworm-slim
```

<br/>

<a href="https://scout.docker.com/v/CVE-2023-31486?s=debian&n=perl&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D5.36.0-7%2Bdeb12u3"><img alt="low : CVE--2023--31486" src="https://img.shields.io/badge/CVE--2023--31486-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=5.36.0-7+deb12u3</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.598%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>69th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

HTTP::Tiny before 0.083, a Perl core module since 5.13.9 and available standalone on CPAN, has an insecure default TLS configuration where users must opt in to verify certificates.

---
- libhttp-tiny-perl 0.088-1 (bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=962407; unimportant)
[experimental] - perl 5.38.0~rc2-1
- perl 5.38.2-2 (unimportant; bug https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=954089)
https://www.openwall.com/lists/oss-security/2023/04/18/14
https://github.com/chansen/p5-http-tiny/issues/134
https://blog.hackeriet.no/perl-http-tiny-insecure-tls-default-affects-cpan-modules/
https://hackeriet.github.io/cpan-http-tiny-overview/
Applications need to explicitly opt in to enable verification.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2011-4116?s=debian&n=perl&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D5.36.0-7%2Bdeb12u3"><img alt="low : CVE--2011--4116" src="https://img.shields.io/badge/CVE--2011--4116-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=5.36.0-7+deb12u3</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.181%</code></td></tr>
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
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>gcc-12</strong> <code>12.2.0-14+deb12u1</code> (deb)</summary>

<small><code>pkg:deb/debian/gcc-12@12.2.0-14%2Bdeb12u1?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (36:36)
FROM debian:bookworm-slim
```

<br/>

<a href="https://scout.docker.com/v/CVE-2022-27943?s=debian&n=gcc-12&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D12.2.0-14%2Bdeb12u1"><img alt="low : CVE--2022--27943" src="https://img.shields.io/badge/CVE--2022--27943-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=12.2.0-14+deb12u1</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.050%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>15th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

libiberty/rust-demangle.c in GNU GCC 11.2 allows stack consumption in demangle_const, as demonstrated by nm-new.

---
- gcc-12 <unfixed> (unimportant)
Negligible security impact
https://gcc.gnu.org/bugzilla/show_bug.cgi?id=105039

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>shadow</strong> <code>1:4.13+dfsg1-1+deb12u1</code> (deb)</summary>

<small><code>pkg:deb/debian/shadow@1%3A4.13%2Bdfsg1-1%2Bdeb12u1?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (36:36)
FROM debian:bookworm-slim
```

<br/>

<a href="https://scout.docker.com/v/CVE-2007-5686?s=debian&n=shadow&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D1%3A4.13%2Bdfsg1-1%2Bdeb12u2"><img alt="low : CVE--2007--5686" src="https://img.shields.io/badge/CVE--2007--5686-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=1:4.13+dfsg1-1+deb12u2</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.196%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>41st percentile</code></td></tr>
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

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>util-linux</strong> <code>2.38.1-5+deb12u3</code> (deb)</summary>

<small><code>pkg:deb/debian/util-linux@2.38.1-5%2Bdeb12u3?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (36:36)
FROM debian:bookworm-slim
```

<br/>

<a href="https://scout.docker.com/v/CVE-2022-0563?s=debian&n=util-linux&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D2.38.1-5%2Bdeb12u3"><img alt="low : CVE--2022--0563" src="https://img.shields.io/badge/CVE--2022--0563-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=2.38.1-5+deb12u3</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.020%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in the util-linux chfn and chsh utilities when compiled with Readline support. The Readline library uses an "INPUTRC" environment variable to get a path to the library config file. When the library cannot parse the specified file, it prints an error message containing data from the file. This flaw allows an unprivileged user to read root-owned files, potentially leading to privilege escalation. This flaw affects util-linux versions prior to 2.37.4.

---
- util-linux <unfixed> (unimportant)
https://bugzilla.redhat.com/show_bug.cgi?id=2053151
https://lore.kernel.org/util-linux/20220214110609.msiwlm457ngoic6w@ws.net.home/T/#u
https://github.com/util-linux/util-linux/commit/faa5a3a83ad0cb5e2c303edbfd8cd823c9d94c17
util-linux in Debian does build with readline support but chfn and chsh are provided
by src:shadow and util-linux is configured with --disable-chfn-chsh

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>apt</strong> <code>2.6.1</code> (deb)</summary>

<small><code>pkg:deb/debian/apt@2.6.1?os_distro=bookworm&os_name=debian&os_version=12</code></small><br/>

```dockerfile
# minio-release.dockerfile (36:36)
FROM debian:bookworm-slim
```

<br/>

<a href="https://scout.docker.com/v/CVE-2011-3374?s=debian&n=apt&ns=debian&t=deb&osn=debian&osv=12&vr=%3C%3D2.6.1"><img alt="low : CVE--2011--3374" src="https://img.shields.io/badge/CVE--2011--3374-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=2.6.1</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>1.509%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>81st percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>filippo.io/edwards25519</strong> <code>1.1.0</code> (golang)</summary>

<small><code>pkg:golang/filippo.io/edwards25519@1.1.0</code></small><br/>

```dockerfile
# minio-release.dockerfile (80:80)
COPY --from=build /build/minio/minio /opt/bitnami/common/bin/minio
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-26958?s=github&n=edwards25519&ns=filippo.io&t=golang&vr=%3C1.1.1"><img alt="low 1.7: CVE--2026--26958" src="https://img.shields.io/badge/CVE--2026--26958-lightgrey?label=low%201.7&labelColor=fce1a9"/></a> <i>Improper Initialization</i>

<table>
<tr><td>Affected range</td><td><code>&lt;1.1.1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.1.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>1.7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:H/AT:P/PR:N/UI:N/VC:N/VI:N/VA:L/SC:N/SI:N/SA:N/E:U</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.052%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

`(*Point).MultiScalarMult` failed to initialize its receiver.

If the method was called on an initialized point that is not the identity point, MultiScalarMult produced an incorrect result.

If the method was called on an uninitialized point, the behavior was undefined. In particular, if the receiver was the zero value, MultiScalarMult returned an invalid point that compared Equal to every point.

*Note that MultiScalarMult is a rarely used advanced API. For example, if you only depend on `filippo.io/edwards25519` via `github.com/go-sql-driver/mysql`, **you are not affected**. If you were notified of this issue despite not being affected, consider switching to a vulnerability scanner that is more precise and respectful of your attention, like [govulncheck](https://go.dev/doc/tutorial/govulncheck).*

</blockquote>
</details>
</details></td></tr>
</table>

