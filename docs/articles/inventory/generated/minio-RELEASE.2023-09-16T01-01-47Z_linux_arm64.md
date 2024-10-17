<h2>:mag: Vulnerabilities of <code>minio/minio:RELEASE.2023-09-16T01-01-47Z</code></h2>

<details open="true"><summary>:package: Image Reference</strong> <code>minio/minio:RELEASE.2023-09-16T01-01-47Z</code></summary>
<table>
<tr><td>digest</td><td><code>sha256:ab4e5eb38d0692c55e10e0413a9d8e38311520abbf18454f6648f83928469cb1</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 1" src="https://img.shields.io/badge/critical-1-8b1924"/> <img alt="high: 12" src="https://img.shields.io/badge/high-12-e25d68"/> <img alt="medium: 14" src="https://img.shields.io/badge/medium-14-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/low-0-lightgrey"/> <img alt="unspecified: 5" src="https://img.shields.io/badge/unspecified-5-lightgrey"/></td></tr>
<tr><td>size</td><td>100 MB</td></tr>
<tr><td>packages</td><td>394</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 9" src="https://img.shields.io/badge/H-9-e25d68"/> <img alt="medium: 3" src="https://img.shields.io/badge/M-3-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 5" src="https://img.shields.io/badge/U-5-lightgrey"/><strong>stdlib</strong> <code>1.21.1</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.21.1</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-24790?s=golang&n=stdlib&t=golang&vr=%3C1.21.11"><img alt="critical : CVE--2024--24790" src="https://img.shields.io/badge/CVE--2024--24790-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.21.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.21.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.06%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>28th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The various Is methods (IsPrivate, IsLoopback, etc) did not work as expected for IPv4-mapped IPv6 addresses, returning false for addresses which would return true in their traditional IPv4 forms.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-34158?s=golang&n=stdlib&t=golang&vr=%3C1.22.7"><img alt="high : CVE--2024--34158" src="https://img.shields.io/badge/CVE--2024--34158-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.22.7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.22.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling Parse on a "// +build" build tag line with deeply nested expressions can cause a panic due to stack exhaustion.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-34156?s=golang&n=stdlib&t=golang&vr=%3C1.22.7"><img alt="high : CVE--2024--34156" src="https://img.shields.io/badge/CVE--2024--34156-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.22.7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.22.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling Decoder.Decode on a message which contains deeply nested structures can cause a panic due to stack exhaustion. This is a follow-up to CVE-2022-30635.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-24791?s=golang&n=stdlib&t=golang&vr=%3C1.21.12"><img alt="high : CVE--2024--24791" src="https://img.shields.io/badge/CVE--2024--24791-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.21.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.21.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The net/http HTTP/1.1 client mishandled the case where a server responds to a request with an "Expect: 100-continue" header with a non-informational (200 or higher) status. This mishandling could leave a client connection in an invalid state, where the next request sent on the connection will fail.

An attacker sending a request to a net/http/httputil.ReverseProxy proxy can exploit this mishandling to cause a denial of service by sending "Expect: 100-continue" requests which elicit a non-informational response from the backend. Each such request leaves the proxy with an invalid connection, and causes one subsequent request using that connection to fail.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-24784?s=golang&n=stdlib&t=golang&vr=%3C1.21.8"><img alt="high : CVE--2024--24784" src="https://img.shields.io/badge/CVE--2024--24784-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.21.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.21.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The ParseAddressList function incorrectly handles comments (text within parentheses) within display names. Since this is a misalignment with conforming address parsers, it can result in different trust decisions being made by programs using different parsers.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-45288?s=golang&n=stdlib&t=golang&vr=%3C1.21.9"><img alt="high : CVE--2023--45288" src="https://img.shields.io/badge/CVE--2023--45288-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.21.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.21.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>14th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An attacker may cause an HTTP/2 endpoint to read arbitrary amounts of header data by sending an excessive number of CONTINUATION frames.

Maintaining HPACK state requires parsing and processing all HEADERS and CONTINUATION frames on a connection. When a request's headers exceed MaxHeaderBytes, no memory is allocated to store the excess headers, but they are still parsed.

This permits an attacker to cause an HTTP/2 endpoint to read arbitrary amounts of header data, all associated with a request which is going to be rejected. These headers can include Huffman-encoded data which is significantly more expensive for the receiver to decode than for an attacker to send.

The fix sets a limit on the amount of excess header frames we will process before closing a connection.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-45283?s=golang&n=stdlib&t=golang&vr=%3E%3D1.21.0-0%2C%3C1.21.4"><img alt="high : CVE--2023--45283" src="https://img.shields.io/badge/CVE--2023--45283-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.21.0-0<br/><1.21.4</code></td></tr>
<tr><td>Fixed version</td><td><code>1.21.4</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.11%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>46th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The filepath package does not recognize paths with a \??\ prefix as special.

On Windows, a path beginning with \??\ is a Root Local Device path equivalent to a path beginning with \\?\. Paths with a \??\ prefix may be used to access arbitrary locations on the system. For example, the path \??\c:\x is equivalent to the more common path c:\x.

Before fix, Clean could convert a rooted path such as \a\..\??\b into the root local device path \??\b. Clean will now convert this to .\??\b.

Similarly, Join(\, ??, b) could convert a seemingly innocent sequence of path elements into the root local device path \??\b. Join will now convert this to \.\??\b.

In addition, with fix, IsAbs now correctly reports paths beginning with \??\ as absolute, and VolumeName correctly reports the \??\ prefix as a volume name.

UPDATE: Go 1.20.11 and Go 1.21.4 inadvertently changed the definition of the volume name in Windows paths starting with \?, resulting in filepath.Clean(\?\c:) returning \?\c: rather than \?\c:\ (among other effects). The previous behavior has been restored.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-44487?s=golang&n=stdlib&t=golang&vr=%3E%3D1.21.0-0%2C%3C1.21.3"><img alt="high : CVE--2023--44487" src="https://img.shields.io/badge/CVE--2023--44487-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.21.0-0<br/><1.21.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1.21.3</code></td></tr>
<tr><td>EPSS Score</td><td><code>83.78%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>99th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A malicious HTTP/2 client which rapidly creates requests and immediately resets them can cause excessive server resource consumption. While the total number of requests is bounded by the http2.Server.MaxConcurrentStreams setting, resetting an in-progress request allows the attacker to create a new request while the existing one is still executing.

With the fix applied, HTTP/2 servers now bound the number of simultaneously executing handler goroutines to the stream concurrency limit (MaxConcurrentStreams). New requests arriving when at the limit (which can only happen after the client has reset an existing, in-flight request) will be queued until a handler exits. If the request queue grows too large, the server will terminate the connection.

This issue is also fixed in golang.org/x/net/http2 for users manually configuring HTTP/2.

The default stream concurrency limit is 250 streams (requests) per HTTP/2 connection. This value may be adjusted using the golang.org/x/net/http2 package; see the Server.MaxConcurrentStreams setting and the ConfigureServer function.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-39325?s=golang&n=stdlib&t=golang&vr=%3E%3D1.21.0-0%2C%3C1.21.3"><img alt="high : CVE--2023--39325" src="https://img.shields.io/badge/CVE--2023--39325-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.21.0-0<br/><1.21.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1.21.3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.25%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>65th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A malicious HTTP/2 client which rapidly creates requests and immediately resets them can cause excessive server resource consumption. While the total number of requests is bounded by the http2.Server.MaxConcurrentStreams setting, resetting an in-progress request allows the attacker to create a new request while the existing one is still executing.

With the fix applied, HTTP/2 servers now bound the number of simultaneously executing handler goroutines to the stream concurrency limit (MaxConcurrentStreams). New requests arriving when at the limit (which can only happen after the client has reset an existing, in-flight request) will be queued until a handler exits. If the request queue grows too large, the server will terminate the connection.

This issue is also fixed in golang.org/x/net/http2 for users manually configuring HTTP/2.

The default stream concurrency limit is 250 streams (requests) per HTTP/2 connection. This value may be adjusted using the golang.org/x/net/http2 package; see the Server.MaxConcurrentStreams setting and the ConfigureServer function.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-30635?s=golang&n=stdlib&t=golang&vr=%3C1.22.7"><img alt="high : CVE--2022--30635" src="https://img.shields.io/badge/CVE--2022--30635-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.22.7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.22.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.19%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>56th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling Decoder.Decode on a message which contains deeply nested structures can cause a panic due to stack exhaustion. This is a follow-up to CVE-2022-30635.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-24789?s=golang&n=stdlib&t=golang&vr=%3C1.21.11"><img alt="medium : CVE--2024--24789" src="https://img.shields.io/badge/CVE--2024--24789-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.21.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.21.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The archive/zip package's handling of certain types of invalid zip files differs from the behavior of most zip implementations. This misalignment could be exploited to create an zip file with contents that vary depending on the implementation reading the file. The archive/zip package now rejects files containing these errors.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-45284?s=golang&n=stdlib&t=golang&vr=%3E%3D1.21.0-0%2C%3C1.21.4"><img alt="medium : CVE--2023--45284" src="https://img.shields.io/badge/CVE--2023--45284-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.21.0-0<br/><1.21.4</code></td></tr>
<tr><td>Fixed version</td><td><code>1.21.4</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.06%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>26th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

On Windows, The IsLocal function does not correctly detect reserved device names in some cases.

Reserved names followed by spaces, such as "COM1 ", and reserved names "COM" and "LPT" followed by superscript 1, 2, or 3, are incorrectly reported as local.

With fix, IsLocal now correctly reports these names as non-local.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-39326?s=golang&n=stdlib&t=golang&vr=%3E%3D1.21.0-0%2C%3C1.21.5"><img alt="medium : CVE--2023--39326" src="https://img.shields.io/badge/CVE--2023--39326-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.21.0-0<br/><1.21.5</code></td></tr>
<tr><td>Fixed version</td><td><code>1.21.5</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.05%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A malicious HTTP sender can use chunk extensions to cause a receiver reading from a request or response body to read many more bytes from the network than are in the body.

A malicious HTTP client can further exploit this to cause a server to automatically read a large amount of data (up to about 1GiB) when a handler fails to read the entire body of a request.

Chunk extensions are a little-used HTTP feature which permit including additional metadata in a request or response body sent using the chunked encoding. The net/http chunked encoding reader discards this metadata. A sender can exploit this by inserting a large metadata segment with each byte transferred. The chunk reader now produces an error if the ratio of real body to encoded bytes grows too small.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-34155?s=golang&n=stdlib&t=golang&vr=%3C1.22.7"><img alt="unspecified : CVE--2024--34155" src="https://img.shields.io/badge/CVE--2024--34155-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.22.7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.22.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling any of the Parse functions on Go source code which contains deeply nested literals can cause a panic due to stack exhaustion.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-24785?s=golang&n=stdlib&t=golang&vr=%3C1.21.8"><img alt="unspecified : CVE--2024--24785" src="https://img.shields.io/badge/CVE--2024--24785-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.21.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.21.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

If errors returned from MarshalJSON methods contain user controlled data, they may be used to break the contextual auto-escaping behavior of the html/template package, allowing for subsequent actions to inject unexpected content into templates.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-24783?s=golang&n=stdlib&t=golang&vr=%3C1.21.8"><img alt="unspecified : CVE--2024--24783" src="https://img.shields.io/badge/CVE--2024--24783-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.21.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.21.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Verifying a certificate chain which contains a certificate with an unknown public key algorithm will cause Certificate.Verify to panic.

This affects all crypto/tls clients, and servers that set Config.ClientAuth to VerifyClientCertIfGiven or RequireAndVerifyClientCert. The default behavior is for TLS servers to not verify client certificates.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-45290?s=golang&n=stdlib&t=golang&vr=%3C1.21.8"><img alt="unspecified : CVE--2023--45290" src="https://img.shields.io/badge/CVE--2023--45290-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.21.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.21.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When parsing a multipart form (either explicitly with Request.ParseMultipartForm or implicitly with Request.FormValue, Request.PostFormValue, or Request.FormFile), limits on the total size of the parsed form were not applied to the memory consumed while reading a single form line. This permits a maliciously crafted input containing very long lines to cause allocation of arbitrarily large amounts of memory, potentially leading to memory exhaustion.

With fix, the ParseMultipartForm function now correctly limits the maximum size of form lines.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-45289?s=golang&n=stdlib&t=golang&vr=%3C1.21.8"><img alt="unspecified : CVE--2023--45289" src="https://img.shields.io/badge/CVE--2023--45289-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.21.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.21.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When following an HTTP redirect to a domain which is not a subdomain match or exact match of the initial domain, an http.Client does not forward sensitive headers such as "Authorization" or "Cookie". For example, a redirect from foo.com to www.foo.com will forward the Authorization header, but a redirect to bar.com will not.

A maliciously crafted HTTP redirect could cause sensitive headers to be unexpectedly forwarded.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">

<small><code>pkg:golang/golang.org/x/net@0.15.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2023-39325?s=github&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.17.0"><img alt="high 7.5: CVE--2023--39325" src="https://img.shields.io/badge/CVE--2023--39325-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Uncontrolled Resource Consumption</i>

<table>
<tr><td>Affected range</td><td><code><0.17.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.17.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.25%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>65th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A malicious HTTP/2 client which rapidly creates requests and immediately resets them can cause excessive server resource consumption. While the total number of requests is bounded by the http2.Server.MaxConcurrentStreams setting, resetting an in-progress request allows the attacker to create a new request while the existing one is still executing. 

With the fix applied, HTTP/2 servers now bound the number of simultaneously executing handler goroutines to the stream concurrency limit (MaxConcurrentStreams). New requests arriving when at the limit (which can only happen after the client has reset an existing, in-flight request) will be queued until a handler exits. If the request queue grows too large, the server will terminate the connection. 

This issue is also fixed in golang.org/x/net/http2 for users manually configuring HTTP/2.

The default stream concurrency limit is 250 streams (requests) per HTTP/2 connection. This value may be adjusted using the golang.org/x/net/http2 package; see the Server.MaxConcurrentStreams setting and the ConfigureServer function.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-45288?s=github&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.23.0"><img alt="medium 5.3: CVE--2023--45288" src="https://img.shields.io/badge/CVE--2023--45288-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Uncontrolled Resource Consumption</i>

<table>
<tr><td>Affected range</td><td><code><0.23.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.23.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>14th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An attacker may cause an HTTP/2 endpoint to read arbitrary amounts of header data by sending an excessive number of CONTINUATION frames. Maintaining HPACK state requires parsing and processing all HEADERS and CONTINUATION frames on a connection. When a request's headers exceed MaxHeaderBytes, no memory is allocated to store the excess headers, but they are still parsed. This permits an attacker to cause an HTTP/2 endpoint to read arbitrary amounts of header data, all associated with a request which is going to be rejected. These headers can include Huffman-encoded data which is significantly more expensive for the receiver to decode than for an attacker to send. The fix sets a limit on the amount of excess header frames we will process before closing a connection.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-44487?s=github&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.17.0"><img alt="medium 5.3: CVE--2023--44487" src="https://img.shields.io/badge/CVE--2023--44487-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Uncontrolled Resource Consumption</i>

<table>
<tr><td>Affected range</td><td><code><0.17.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.17.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>83.78%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>99th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

## HTTP/2 Rapid reset attack
The HTTP/2 protocol allows clients to indicate to the server that a previous stream should be canceled by sending a RST_STREAM frame. The protocol does not require the client and server to coordinate the cancellation in any way, the client may do it unilaterally. The client may also assume that the cancellation will take effect immediately when the server receives the RST_STREAM frame, before any other data from that TCP connection is processed.

Abuse of this feature is called a Rapid Reset attack because it relies on the ability for an endpoint to send a RST_STREAM frame immediately after sending a request frame, which makes the other endpoint start working and then rapidly resets the request. The request is canceled, but leaves the HTTP/2 connection open. 

The HTTP/2 Rapid Reset attack built on this capability is simple: The client opens a large number of streams at once as in the standard HTTP/2 attack, but rather than waiting for a response to each request stream from the server or proxy, the client cancels each request immediately.

The ability to reset streams immediately allows each connection to have an indefinite number of requests in flight. By explicitly canceling the requests, the attacker never exceeds the limit on the number of concurrent open streams. The number of in-flight requests is no longer dependent on the round-trip time (RTT), but only on the available network bandwidth.

In a typical HTTP/2 server implementation, the server will still have to do significant amounts of work for canceled requests, such as allocating new stream data structures, parsing the query and doing header decompression, and mapping the URL to a resource. For reverse proxy implementations, the request may be proxied to the backend server before the RST_STREAM frame is processed. The client on the other hand paid almost no costs for sending the requests. This creates an exploitable cost asymmetry between the server and the client.

Multiple software artifacts implementing HTTP/2 are affected. This advisory was originally ingested from the `swift-nio-http2` repo advisory and their original conent follows.

## swift-nio-http2 specific advisory
swift-nio-http2 is vulnerable to a denial-of-service vulnerability in which a malicious client can create and then reset a large number of HTTP/2 streams in a short period of time. This causes swift-nio-http2 to commit to a large amount of expensive work which it then throws away, including creating entirely new `Channel`s to serve the traffic. This can easily overwhelm an `EventLoop` and prevent it from making forward progress.

swift-nio-http2 1.28 contains a remediation for this issue that applies reset counter using a sliding window. This constrains the number of stream resets that may occur in a given window of time. Clients violating this limit will have their connections torn down. This allows clients to continue to cancel streams for legitimate reasons, while constraining malicious actors.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">

<small><code>pkg:golang/google.golang.org/grpc@1.58.0</code></small><br/>
<a href="https://scout.docker.com/v/GHSA-m425-mq94-257g?s=github&n=grpc&ns=google.golang.org&t=golang&vr=%3E%3D1.58.0%2C%3C1.58.3"><img alt="high 7.5: GHSA--m425--mq94--257g" src="https://img.shields.io/badge/GHSA--m425--mq94--257g-lightgrey?label=high%207.5&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.58.0<br/><1.58.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1.58.3</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact
In affected releases of gRPC-Go, it is possible for an attacker to send HTTP/2 requests, cancel them, and send subsequent requests, which is valid by the HTTP/2 protocol, but would cause the gRPC-Go server to launch more concurrent method handlers than the configured maximum stream limit.

### Patches
This vulnerability was addressed by #6703 and has been included in patch releases: 1.56.3, 1.57.1, 1.58.3.  It is also included in the latest release, 1.59.0.

Along with applying the patch, users should also ensure they are using the `grpc.MaxConcurrentStreams` server option to apply a limit to the server's resources used for any single connection.

### Workarounds
None.

### References
#6703


</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-44487?s=github&n=grpc&ns=google.golang.org&t=golang&vr=%3E%3D1.58.0%2C%3C1.58.3"><img alt="medium 5.3: CVE--2023--44487" src="https://img.shields.io/badge/CVE--2023--44487-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Uncontrolled Resource Consumption</i>

<table>
<tr><td>Affected range</td><td><code>>=1.58.0<br/><1.58.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1.58.3</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>83.78%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>99th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

## HTTP/2 Rapid reset attack
The HTTP/2 protocol allows clients to indicate to the server that a previous stream should be canceled by sending a RST_STREAM frame. The protocol does not require the client and server to coordinate the cancellation in any way, the client may do it unilaterally. The client may also assume that the cancellation will take effect immediately when the server receives the RST_STREAM frame, before any other data from that TCP connection is processed.

Abuse of this feature is called a Rapid Reset attack because it relies on the ability for an endpoint to send a RST_STREAM frame immediately after sending a request frame, which makes the other endpoint start working and then rapidly resets the request. The request is canceled, but leaves the HTTP/2 connection open. 

The HTTP/2 Rapid Reset attack built on this capability is simple: The client opens a large number of streams at once as in the standard HTTP/2 attack, but rather than waiting for a response to each request stream from the server or proxy, the client cancels each request immediately.

The ability to reset streams immediately allows each connection to have an indefinite number of requests in flight. By explicitly canceling the requests, the attacker never exceeds the limit on the number of concurrent open streams. The number of in-flight requests is no longer dependent on the round-trip time (RTT), but only on the available network bandwidth.

In a typical HTTP/2 server implementation, the server will still have to do significant amounts of work for canceled requests, such as allocating new stream data structures, parsing the query and doing header decompression, and mapping the URL to a resource. For reverse proxy implementations, the request may be proxied to the backend server before the RST_STREAM frame is processed. The client on the other hand paid almost no costs for sending the requests. This creates an exploitable cost asymmetry between the server and the client.

Multiple software artifacts implementing HTTP/2 are affected. This advisory was originally ingested from the `swift-nio-http2` repo advisory and their original conent follows.

## swift-nio-http2 specific advisory
swift-nio-http2 is vulnerable to a denial-of-service vulnerability in which a malicious client can create and then reset a large number of HTTP/2 streams in a short period of time. This causes swift-nio-http2 to commit to a large amount of expensive work which it then throws away, including creating entirely new `Channel`s to serve the traffic. This can easily overwhelm an `EventLoop` and prevent it from making forward progress.

swift-nio-http2 1.28 contains a remediation for this issue that applies reset counter using a sliding window. This constrains the number of stream resets that may occur in a given window of time. Clients violating this limit will have their connections torn down. This allows clients to continue to cancel streams for legitimate reasons, while constraining malicious actors.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">

<small><code>pkg:golang/github.com/nats-io/nkeys@0.4.4</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2023-46129?s=github&n=nkeys&ns=github.com%2Fnats-io&t=golang&vr=%3E%3D0.4.0%2C%3C%3D0.4.5"><img alt="high 7.5: CVE--2023--46129" src="https://img.shields.io/badge/CVE--2023--46129-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Use of Hard-coded Cryptographic Key</i>

<table>
<tr><td>Affected range</td><td><code>>=0.4.0<br/><=0.4.5</code></td></tr>
<tr><td>Fixed version</td><td><code>0.4.6</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.06%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

## Background

NATS.io is a high performance open source pub-sub distributed communication technology, built for the cloud, on-premise, IoT, and edge computing.

The cryptographic key handling library, nkeys, recently gained support for encryption, not just for signing/authentication.  This is used in nats-server 2.10 (Sep 2023) and newer for authentication callouts.

## Problem Description

The nkeys library's "xkeys" encryption handling logic mistakenly passed an array by value into an internal function, where the function mutated that buffer to populate the encryption key to use.  As a result, all encryption was actually to an all-zeros key.

This affects encryption only, not signing.  
FIXME: FILL IN IMPACT ON NATS-SERVER AUTH CALLOUT SECURITY.

## Affected versions

nkeys Go library:
 * 0.4.0 up to and including 0.4.5
 * Fixed with nats-io/nkeys: 0.4.6

NATS Server:
 * 2.10.0 up to and including 2.10.3
 * Fixed with nats-io/nats-server: 2.10.4

## Solution

Upgrade the nats-server.  
For any application handling auth callouts in Go, if using the nkeys library, update the dependency, recompile and deploy that in lockstep.

## Credits

Problem reported by Quentin Matillat (GitHub @tinou98).

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">

<small><code>pkg:golang/github.com/lestrrat-go/jwx@1.2.26</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-28122?s=github&n=jwx&ns=github.com%2Flestrrat-go&t=golang&vr=%3C1.2.29"><img alt="medium 6.8: CVE--2024--28122" src="https://img.shields.io/badge/CVE--2024--28122-lightgrey?label=medium%206.8&labelColor=fbb552"/></a> <i>Uncontrolled Resource Consumption</i>

<table>
<tr><td>Affected range</td><td><code><1.2.29</code></td></tr>
<tr><td>Fixed version</td><td><code>1.2.29</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.8</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:C/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Summary
This vulnerability allows an attacker with a trusted public key to cause a Denial-of-Service (DoS) condition by crafting a malicious JSON Web Encryption (JWE) token with an exceptionally high compression ratio. When this token is processed by the recipient, it results in significant memory allocation and processing time during decompression.

### Details

**The attacker needs to obtain a valid public key to compress the payload**. It needs to be valid so that the recipient can use to successfully decompress the payload. Furthermore in context JWT processing in the v2 versions, the recipient must explicitly allow JWE handling .

The attacker then crafts a message with high compression ratio, e.g. a payload with very high frequency of repeating patterns that can decompress to a much larger size.  If the payload is large enough, recipient who is decompressing the data will have to allocate a large amount of memory, which then can lead to a denial of service.

The original report includes a reference to [1], but there are some very subtle differences between this library and the aforementioned issue. The most important aspect is that the referenced issue focuses on JWT processing, whereas this library is intentionally divided into parts that comprise JOSE, i.e. JWT, JWS, JWE, JWK. In particular, v2 of this library does not attempt to handle JWT payload enveloped in a JWE message automatically (v1 attempted to do this automatically, but it was never stable).

Reflecting this subtle difference, the approach taken to mitigate this vulnerability is slightly different from the referenced issue. The referenced issue limits the size of JWT when parsing, but the fixes for this library limits the maximum size of the decompressed data when decrypting JWE messages. Therefore the fix in this library is applicable regardless of the usage context, and a limit is now imposed on the size of the message that our JWE implementation can handle.

### Proof of Concept

Modified from the original report to fit the vulnerability better:

```go
// The value below just needs to be "large enough" so that the it puts enough strain on the
// recipient's environment. The value below is a safe size on my machine to run the test
// without causing problems. When you increase the payload size, at some point the processing
// will be slow enough to virtually freeze the program or cause a memory allocation error
const payloadSize = 1 << 31

privkey, err := rsa.GenerateKey(rand.Reader, 2048)
require.NoError(t, err, `rsa.GenerateKey should succeed`)
pubkey := &privkey.PublicKey
payload := strings.Repeat("x", payloadSize)

encrypted, err := jwe.Encrypt([]byte(payload), jwe.WithKey(jwa.RSA_OAEP, pubkey), jwe.WithContentEncryption("A128CBC-HS256"), jwe.WithCompress(jwa.Deflate))
require.NoError(t, err, `jwe.Encrypt should succeed`)
_, err = jwe.Decrypt(encrypted, jwe.WithKey(jwa.RSA_OAEP, privkey)) // Will be allocating large amounts of memory
require.Error(t, err, `jwe.Decrypt should fail`)
```

###  References

[1] [CVE-2024-21319](https://github.com/AzureAD/azure-activedirectory-identitymodel-extensions-for-dotnet/security/advisories/GHSA-8g9c-28fc-mcx2)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-49290?s=github&n=jwx&ns=github.com%2Flestrrat-go&t=golang&vr=%3C1.2.27"><img alt="medium 5.3: CVE--2023--49290" src="https://img.shields.io/badge/CVE--2023--49290-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Uncontrolled Resource Consumption</i>

<table>
<tr><td>Affected range</td><td><code><1.2.27</code></td></tr>
<tr><td>Fixed version</td><td><code>1.2.27</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.05%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Summary
too high p2c parameter in JWE's alg PBES2-* could lead to a DOS attack

### Details
The JWE key management algorithms based on PBKDF2 require a JOSE Header Parameter called p2c (PBES2 Count). This parameter dictates the number of PBKDF2 iterations needed to derive a CEK wrapping key. Its primary purpose is to intentionally slow down the key derivation function, making password brute-force and dictionary attacks more resource- intensive.
Therefore, if an attacker sets the p2c parameter in JWE to a very large number, it can cause a lot of computational consumption, resulting in a DOS attack

### PoC
```go
package main

import (
	"fmt"
	"github.com/lestrrat-go/jwx/v2/jwa"
	"github.com/lestrrat-go/jwx/v2/jwe"
	"github.com/lestrrat-go/jwx/v2/jwk"
)

func main() {
	token := []byte("eyJhbGciOiJQQkVTMi1IUzI1NitBMTI4S1ciLCJlbmMiOiJBMjU2R0NNIiwicDJjIjoyMDAwMDAwMDAwLCJwMnMiOiJNNzczSnlmV2xlX2FsSXNrc0NOTU9BIn0=.S8B1kXdIR7BM6i_TaGsgqEOxU-1Sgdakp4mHq7UVhn-_REzOiGz2gg.gU_LfzhBXtQdwYjh.9QUIS-RWkLc.m9TudmzUoCzDhHsGGfzmCA")
	key, err := jwk.FromRaw([]byte(`abcdefg`))
	payload, err := jwe.Decrypt(token, jwe.WithKey(jwa.PBES2_HS256_A128KW, key))
	if err == nil {
		fmt.Println(string(payload))
	}
}

```

### Impact
It's a kind of Dos attack, the user's environment could potentially utilize an excessive amount of CPU resources.


</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-21664?s=github&n=jwx&ns=github.com%2Flestrrat-go&t=golang&vr=%3E%3D1.0.8%2C%3C1.2.28"><img alt="medium 4.3: CVE--2024--21664" src="https://img.shields.io/badge/CVE--2024--21664-lightgrey?label=medium%204.3&labelColor=fbb552"/></a> <i>NULL Pointer Dereference</i>

<table>
<tr><td>Affected range</td><td><code>>=1.0.8<br/><1.2.28</code></td></tr>
<tr><td>Fixed version</td><td><code>1.2.28</code></td></tr>
<tr><td>CVSS Score</td><td><code>4.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.06%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>24th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Summary

Calling `jws.Parse` with a JSON serialized payload where the `signature` field is present while `protected` is absent can lead to a nil pointer dereference.

### Details

This seems to also affect other functions that calls `Parse` internally, like `jws.Verify`.

My understanding of these functions from the docs is that they are supposed to fail gracefully on invalid input and don't require any prior validation.

Based on the stack trace in the PoC, the issue seems to be that the processing done in `jws/message.go:UnmarshalJSON()` assumes that if a `signature` field is present, then a `protected` field is also present. If this is not the case, then the subsequent call to `getB64Value(sig.protected)` will dereference `sig.protected`, which is `nil`.

### PoC

Reproducer:

```go
package poc

import (
        "testing"

        "github.com/lestrrat-go/jwx/v2/jws"
)

func TestPOC(t *testing.T) {
        _, _ = jws.Parse([]byte(`{"signature": ""}`))
}
```

Result:

```
$ go test        
--- FAIL: TestPOC (0.00s)
panic: runtime error: invalid memory address or nil pointer dereference [recovered]
        panic: runtime error: invalid memory address or nil pointer dereference
[signal SIGSEGV: segmentation violation code=0x1 addr=0x40 pc=0x5fd618]

goroutine 6 [running]:
testing.tRunner.func1.2({0x628800, 0x831030})
        /usr/local/go/src/testing/testing.go:1545 +0x238
testing.tRunner.func1()
        /usr/local/go/src/testing/testing.go:1548 +0x397
panic({0x628800?, 0x831030?})
        /usr/local/go/src/runtime/panic.go:914 +0x21f
github.com/lestrrat-go/jwx/v2/jws.getB64Value({0x0?, 0x0?})
        /home/fredrik/go/pkg/mod/github.com/lestrrat-go/jwx/v2@v2.0.18/jws/jws.go:484 +0x18
github.com/lestrrat-go/jwx/v2/jws.(*Message).UnmarshalJSON(0xc0000a2140, {0xc0000ec000, 0x11, 0x200})
        /home/fredrik/go/pkg/mod/github.com/lestrrat-go/jwx/v2@v2.0.18/jws/message.go:323 +0x4ad
encoding/json.(*decodeState).object(0xc0000ea028, {0x64fa60?, 0xc0000a2140?, 0x16?})
        /usr/local/go/src/encoding/json/decode.go:604 +0x6cc
encoding/json.(*decodeState).value(0xc0000ea028, {0x64fa60?, 0xc0000a2140?, 0xc00006e630?})
        /usr/local/go/src/encoding/json/decode.go:374 +0x3e
encoding/json.(*decodeState).unmarshal(0xc0000ea028, {0x64fa60?, 0xc0000a2140?})
        /usr/local/go/src/encoding/json/decode.go:181 +0x133
encoding/json.(*Decoder).Decode(0xc0000ea000, {0x64fa60, 0xc0000a2140})
        /usr/local/go/src/encoding/json/stream.go:73 +0x179
github.com/lestrrat-go/jwx/v2/internal/json.Unmarshal({0xc00001a288, 0x11, 0x11}, {0x64fa60, 0xc0000a2140})
        /home/fredrik/go/pkg/mod/github.com/lestrrat-go/jwx/v2@v2.0.18/internal/json/json.go:26 +0x97
github.com/lestrrat-go/jwx/v2/jws.parseJSON({0xc00001a288, 0x11, 0x11})
        /home/fredrik/go/pkg/mod/github.com/lestrrat-go/jwx/v2@v2.0.18/jws/jws.go:588 +0x50
github.com/lestrrat-go/jwx/v2/jws.Parse({0xc00001a288, 0x11, 0x11}, {0x0?, 0xc00006e760?, 0x48450f?})
        /home/fredrik/go/pkg/mod/github.com/lestrrat-go/jwx/v2@v2.0.18/jws/jws.go:525 +0x89
poc.TestPOC(0x0?)
        /home/fredrik/src/jwx_poc/poc_test.go:10 +0x57
testing.tRunner(0xc0000e4340, 0x68ef30)
        /usr/local/go/src/testing/testing.go:1595 +0xff
created by testing.(*T).Run in goroutine 1
        /usr/local/go/src/testing/testing.go:1648 +0x3ad
exit status 2
FAIL    poc     0.005s
```

### Impact

The vulnerability can be used to crash / DOS a system doing JWS verification.


</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">

<small><code>pkg:golang/github.com/coredns/coredns@1.11.1</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-0874?s=github&n=coredns&ns=github.com%2Fcoredns&t=golang&vr=%3C%3D1.11.1"><img alt="medium 5.3: CVE--2024--0874" src="https://img.shields.io/badge/CVE--2024--0874-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Use of Cache Containing Sensitive Information</i>

<table>
<tr><td>Affected range</td><td><code><=1.11.1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.11.2</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:L/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>14th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in coredns. This issue could lead to invalid cache entries returning due to incorrectly implemented caching.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">

<small><code>pkg:golang/golang.org/x/crypto@0.13.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2023-48795?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.17.0"><img alt="medium 5.9: CVE--2023--48795" src="https://img.shields.io/badge/CVE--2023--48795-lightgrey?label=medium%205.9&labelColor=fbb552"/></a> <i>Insufficient Verification of Data Authenticity</i>

<table>
<tr><td>Affected range</td><td><code><0.17.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.17.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.9</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>96.54%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>100th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Summary

Terrapin is a prefix truncation attack targeting the SSH protocol. More precisely, Terrapin breaks the integrity of SSH's secure channel. By carefully adjusting the sequence numbers during the handshake, an attacker can remove an arbitrary amount of messages sent by the client or server at the beginning of the secure channel without the client or server noticing it.

### Mitigations

To mitigate this protocol vulnerability, OpenSSH suggested a so-called "strict kex" which alters the SSH handshake to ensure a Man-in-the-Middle attacker cannot introduce unauthenticated messages as well as convey sequence number manipulation across handshakes.

**Warning: To take effect, both the client and server must support this countermeasure.** 

As a stop-gap measure, peers may also (temporarily) disable the affected algorithms and use unaffected alternatives like AES-GCM instead until patches are available.

### Details

The SSH specifications of ChaCha20-Poly1305 (chacha20-poly1305@openssh.com) and Encrypt-then-MAC (*-etm@openssh.com MACs) are vulnerable against an arbitrary prefix truncation attack (a.k.a. Terrapin attack). This allows for an extension negotiation downgrade by stripping the SSH_MSG_EXT_INFO sent after the first message after SSH_MSG_NEWKEYS, downgrading security, and disabling attack countermeasures in some versions of OpenSSH. When targeting Encrypt-then-MAC, this attack requires the use of a CBC cipher to be practically exploitable due to the internal workings of the cipher mode. Additionally, this novel attack technique can be used to exploit previously unexploitable implementation flaws in a Man-in-the-Middle scenario.

The attack works by an attacker injecting an arbitrary number of SSH_MSG_IGNORE messages during the initial key exchange and consequently removing the same number of messages just after the initial key exchange has concluded. This is possible due to missing authentication of the excess SSH_MSG_IGNORE messages and the fact that the implicit sequence numbers used within the SSH protocol are only checked after the initial key exchange.

In the case of ChaCha20-Poly1305, the attack is guaranteed to work on every connection as this cipher does not maintain an internal state other than the message's sequence number. In the case of Encrypt-Then-MAC, practical exploitation requires the use of a CBC cipher; while theoretical integrity is broken for all ciphers when using this mode, message processing will fail at the application layer for CTR and stream ciphers.

For more details see [https://terrapin-attack.com](https://terrapin-attack.com). 

### Impact

This attack targets the specification of ChaCha20-Poly1305 (chacha20-poly1305@openssh.com) and Encrypt-then-MAC (*-etm@openssh.com), which are widely adopted by well-known SSH implementations and can be considered de-facto standard. These algorithms can be practically exploited; however, in the case of Encrypt-Then-MAC, we additionally require the use of a CBC cipher. As a consequence, this attack works against all well-behaving SSH implementations supporting either of those algorithms and can be used to downgrade (but not fully strip) connection security in case SSH extension negotiation (RFC8308) is supported. The attack may also enable attackers to exploit certain implementation flaws in a man-in-the-middle (MitM) scenario.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">

<small><code>pkg:golang/gopkg.in/square/go-jose.v2@2.6.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-28180?s=github&n=go-jose.v2&ns=gopkg.in%2Fsquare&t=golang&vr=%3C%3D2.6.0"><img alt="medium 4.3: CVE--2024--28180" src="https://img.shields.io/badge/CVE--2024--28180-lightgrey?label=medium%204.3&labelColor=fbb552"/></a> <i>Improper Handling of Highly Compressed Data (Data Amplification)</i>

<table>
<tr><td>Affected range</td><td><code><=2.6.0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>4.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.05%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact
An attacker could send a JWE containing compressed data that used large amounts of memory and CPU when decompressed by Decrypt or DecryptMulti. Those functions now return an error if the decompressed data would exceed 250kB or 10x the compressed size (whichever is larger). Thanks to Enze Wang@Alioth and Jianjun Chen@Zhongguancun Lab (@zer0yu and @chenjj) for reporting.

### Patches
The problem is fixed in the following packages and versions:
- github.com/go-jose/go-jose/v4 version 4.0.1
- github.com/go-jose/go-jose/v3 version 3.0.3
- gopkg.in/go-jose/go-jose.v2 version 2.6.3

The problem will not be fixed in the following package because the package is archived:
- gopkg.in/square/go-jose.v2

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">

<small><code>pkg:golang/github.com/rs/cors@1.10.0</code></small><br/>
<a href="https://scout.docker.com/v/GHSA-mh55-gqvf-xfwm?s=github&n=cors&ns=github.com%2Frs&t=golang&vr=%3E%3D1.9.0%2C%3C1.11.0"><img alt="medium : GHSA--mh55--gqvf--xfwm" src="https://img.shields.io/badge/GHSA--mh55--gqvf--xfwm-lightgrey?label=medium%20&labelColor=fbb552"/></a> <i>Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')</i>

<table>
<tr><td>Affected range</td><td><code>>=1.9.0<br/><1.11.0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.11.0</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Middleware causes a prohibitive amount of heap allocations when processing malicious preflight requests that include a Access-Control-Request-Headers (ACRH) header whose value contains many commas. This behavior can be abused by attackers to produce undue load on the middleware/server as an attempt to cause a denial of service.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">

<small><code>pkg:golang/google.golang.org/protobuf@1.31.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-24786?s=github&n=protobuf&ns=google.golang.org&t=golang&vr=%3C1.33.0"><img alt="medium : CVE--2024--24786" src="https://img.shields.io/badge/CVE--2024--24786-lightgrey?label=medium%20&labelColor=fbb552"/></a> <i>Loop with Unreachable Exit Condition ('Infinite Loop')</i>

<table>
<tr><td>Affected range</td><td><code><1.33.0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.33.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The protojson.Unmarshal function can enter an infinite loop when unmarshaling certain forms of invalid JSON. This condition can occur when unmarshaling into a message which contains a google.protobuf.Any value, or when the UnmarshalOptions.DiscardUnknown option is set.

</blockquote>
</details>
</details></td></tr>
</table>

