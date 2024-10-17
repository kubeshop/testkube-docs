<h2>:mag: Vulnerabilities of <code>bitnami/kubectl:1.28.2</code></h2>

<details open="true"><summary>:package: Image Reference</strong> <code>bitnami/kubectl:1.28.2</code></summary>
<table>
<tr><td>digest</td><td><code>sha256:8886b1538fb6fe6e2fe4cb1352bdfd419c63a9bc8152daac38c9917bd2fb1d3e</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 6" src="https://img.shields.io/badge/critical-6-8b1924"/> <img alt="high: 28" src="https://img.shields.io/badge/high-28-e25d68"/> <img alt="medium: 14" src="https://img.shields.io/badge/medium-14-fbb552"/> <img alt="low: 29" src="https://img.shields.io/badge/low-29-fce1a9"/> <img alt="unspecified: 9" src="https://img.shields.io/badge/unspecified-9-lightgrey"/></td></tr>
<tr><td>size</td><td>81 MB</td></tr>
<tr><td>packages</td><td>272</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">

<small><code>pkg:deb/debian/expat@2.2.10-2%2Bdeb11u5?os_distro=bullseye&os_name=debian&os_version=11</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-45492?s=debian&n=expat&ns=debian&t=deb&osn=debian&osv=11&vr=%3C2.2.10-2%2Bdeb11u6"><img alt="critical : CVE--2024--45492" src="https://img.shields.io/badge/CVE--2024--45492-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code><2.2.10-2+deb11u6</code></td></tr>
<tr><td>Fixed version</td><td><code>2.2.10-2+deb11u6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.09%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>40th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An issue was discovered in libexpat before 2.6.3. nextScaffoldPart in xmlparse.c can have an integer overflow for m_groupSize on 32-bit platforms (where UINT_MAX equals SIZE_MAX).

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-45491?s=debian&n=expat&ns=debian&t=deb&osn=debian&osv=11&vr=%3C2.2.10-2%2Bdeb11u6"><img alt="critical : CVE--2024--45491" src="https://img.shields.io/badge/CVE--2024--45491-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code><2.2.10-2+deb11u6</code></td></tr>
<tr><td>Fixed version</td><td><code>2.2.10-2+deb11u6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.09%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>40th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An issue was discovered in libexpat before 2.6.3. dtdCopy in xmlparse.c can have an integer overflow for nDefaultAtts on 32-bit platforms (where UINT_MAX equals SIZE_MAX).

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-45490?s=debian&n=expat&ns=debian&t=deb&osn=debian&osv=11&vr=%3C2.2.10-2%2Bdeb11u6"><img alt="critical : CVE--2024--45490" src="https://img.shields.io/badge/CVE--2024--45490-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code><2.2.10-2+deb11u6</code></td></tr>
<tr><td>Fixed version</td><td><code>2.2.10-2+deb11u6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.09%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>40th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An issue was discovered in libexpat before 2.6.3. xmlparse.c does not reject a negative length for XML_ParseBuffer.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-52425?s=debian&n=expat&ns=debian&t=deb&osn=debian&osv=11&vr=%3C2.2.10-2%2Bdeb11u6"><img alt="high : CVE--2023--52425" src="https://img.shields.io/badge/CVE--2023--52425-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><2.2.10-2+deb11u6</code></td></tr>
<tr><td>Fixed version</td><td><code>2.2.10-2+deb11u6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.09%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>39th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

libexpat through 2.5.0 allows a denial of service (resource consumption) because many full reparsings are required in the case of a large token for which multiple buffer fills are needed.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-28757?s=debian&n=expat&ns=debian&t=deb&osn=debian&osv=11&vr=%3E%3D2.2.10-2%2Bdeb11u5"><img alt="low : CVE--2024--28757" src="https://img.shields.io/badge/CVE--2024--28757-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=2.2.10-2+deb11u5</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

libexpat through 2.6.1 allows an XML Entity Expansion attack when there is isolated use of external parsers (created via XML_ExternalEntityParserCreate).

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-52426?s=debian&n=expat&ns=debian&t=deb&osn=debian&osv=11&vr=%3E%3D2.2.10-2%2Bdeb11u5"><img alt="low : CVE--2023--52426" src="https://img.shields.io/badge/CVE--2023--52426-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=2.2.10-2+deb11u5</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.05%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

libexpat through 2.5.0 allows recursive XML Entity Expansion if XML_DTD is undefined at compile time.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2013-0340?s=debian&n=expat&ns=debian&t=deb&osn=debian&osv=11&vr=%3E%3D2.2.10-2%2Bdeb11u5"><img alt="low : CVE--2013--0340" src="https://img.shields.io/badge/CVE--2013--0340-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=2.2.10-2+deb11u5</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.52%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>77th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

expat 2.1.0 and earlier does not properly handle entities expansion unless an application developer uses the XML_SetEntityDeclHandler function, which allows remote attackers to cause a denial of service (resource consumption), send HTTP requests to intranet servers, or read arbitrary files via a crafted XML document, aka an XML External Entity (XXE) issue.  NOTE: it could be argued that because expat already provides the ability to disable external entity expansion, the responsibility for resolving this issue lies with application developers; according to this argument, this entry should be REJECTed, and each affected application would need its own CVE.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 9" src="https://img.shields.io/badge/H-9-e25d68"/> <img alt="medium: 3" src="https://img.shields.io/badge/M-3-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 5" src="https://img.shields.io/badge/U-5-lightgrey"/><strong>stdlib</strong> <code>1.20.8</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.20.8</code></small><br/>
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

<a href="https://scout.docker.com/v/CVE-2023-45283?s=golang&n=stdlib&t=golang&vr=%3C1.20.11"><img alt="high : CVE--2023--45283" src="https://img.shields.io/badge/CVE--2023--45283-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.20.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.20.11</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2023-44487?s=golang&n=stdlib&t=golang&vr=%3C1.20.10"><img alt="high : CVE--2023--44487" src="https://img.shields.io/badge/CVE--2023--44487-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.20.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.20.10</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2023-39325?s=golang&n=stdlib&t=golang&vr=%3C1.20.10"><img alt="high : CVE--2023--39325" src="https://img.shields.io/badge/CVE--2023--39325-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.20.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.20.10</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2023-45284?s=golang&n=stdlib&t=golang&vr=%3C1.20.11"><img alt="medium : CVE--2023--45284" src="https://img.shields.io/badge/CVE--2023--45284-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.20.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.20.11</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2023-39326?s=golang&n=stdlib&t=golang&vr=%3C1.20.12"><img alt="medium : CVE--2023--39326" src="https://img.shields.io/badge/CVE--2023--39326-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.20.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.20.12</code></td></tr>
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

<small><code>pkg:deb/debian/git@1:2.30.2-1%2Bdeb11u2?os_distro=bullseye&os_name=debian&os_version=11</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-32002?s=debian&n=git&ns=debian&t=deb&osn=debian&osv=11&vr=%3C1%3A2.30.2-1%2Bdeb11u3"><img alt="critical : CVE--2024--32002" src="https://img.shields.io/badge/CVE--2024--32002-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code><1:2.30.2-1+deb11u3</code></td></tr>
<tr><td>Fixed version</td><td><code>1:2.30.2-1+deb11u3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.15%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>52nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Git is a revision control system. Prior to versions 2.45.1, 2.44.1, 2.43.4, 2.42.2, 2.41.1, 2.40.2, and 2.39.4, repositories with submodules can be crafted in a way that exploits a bug in Git whereby it can be fooled into writing files not into the submodule's worktree but into a `.git/` directory. This allows writing a hook that will be executed while the clone operation is still running, giving the user no opportunity to inspect the code that is being executed. The problem has been patched in versions 2.45.1, 2.44.1, 2.43.4, 2.42.2, 2.41.1, 2.40.2, and 2.39.4. If symbolic link support is disabled in Git (e.g. via `git config --global core.symlinks false`), the described attack won't work. As always, it is best to avoid cloning repositories from untrusted sources.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2019-1387?s=debian&n=git&ns=debian&t=deb&osn=debian&osv=11&vr=%3C1%3A2.30.2-1%2Bdeb11u3"><img alt="high : CVE--2019--1387" src="https://img.shields.io/badge/CVE--2019--1387-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1:2.30.2-1+deb11u3</code></td></tr>
<tr><td>Fixed version</td><td><code>1:2.30.2-1+deb11u3</code></td></tr>
<tr><td>EPSS Score</td><td><code>8.69%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>95th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An issue was found in Git before v2.24.1, v2.23.1, v2.22.2, v2.21.1, v2.20.2, v2.19.3, v2.18.2, v2.17.3, v2.16.6, v2.15.4, and v2.14.6. Recursive clones are currently affected by a vulnerability that is caused by too-lax validation of submodule names, allowing very targeted attacks via remote code execution in recursive clones.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-32004?s=debian&n=git&ns=debian&t=deb&osn=debian&osv=11&vr=%3C1%3A2.30.2-1%2Bdeb11u3"><img alt="high : CVE--2024--32004" src="https://img.shields.io/badge/CVE--2024--32004-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1:2.30.2-1+deb11u3</code></td></tr>
<tr><td>Fixed version</td><td><code>1:2.30.2-1+deb11u3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Git is a revision control system. Prior to versions 2.45.1, 2.44.1, 2.43.4, 2.42.2, 2.41.1, 2.40.2, and 2.39.4, an attacker can prepare a local repository in such a way that, when cloned, will execute arbitrary code during the operation. The problem has been patched in versions 2.45.1, 2.44.1, 2.43.4, 2.42.2, 2.41.1, 2.40.2, and 2.39.4. As a workaround, avoid cloning repositories from untrusted sources.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-29007?s=debian&n=git&ns=debian&t=deb&osn=debian&osv=11&vr=%3C1%3A2.30.2-1%2Bdeb11u3"><img alt="high : CVE--2023--29007" src="https://img.shields.io/badge/CVE--2023--29007-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1:2.30.2-1+deb11u3</code></td></tr>
<tr><td>Fixed version</td><td><code>1:2.30.2-1+deb11u3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.52%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>77th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Git is a revision control system. Prior to versions 2.30.9, 2.31.8, 2.32.7, 2.33.8, 2.34.8, 2.35.8, 2.36.6, 2.37.7, 2.38.5, 2.39.3, and 2.40.1, a specially crafted `.gitmodules` file with submodule URLs that are longer than 1024 characters can used to exploit a bug in `config.c::git_config_copy_or_rename_section_in_file()`. This bug can be used to inject arbitrary configuration into a user's `$GIT_DIR/config` when attempting to remove the configuration section associated with that submodule. When the attacker injects configuration values which specify executables to run (such as `core.pager`, `core.editor`, `core.sshCommand`, etc.) this can lead to a remote code execution. A fix A fix is available in versions 2.30.9, 2.31.8, 2.32.7, 2.33.8, 2.34.8, 2.35.8, 2.36.6, 2.37.7, 2.38.5, 2.39.3, and 2.40.1. As a workaround, avoid running `git submodule deinit` on untrusted repositories or without prior inspection of any submodule sections in `$GIT_DIR/config`.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-25652?s=debian&n=git&ns=debian&t=deb&osn=debian&osv=11&vr=%3C1%3A2.30.2-1%2Bdeb11u3"><img alt="high : CVE--2023--25652" src="https://img.shields.io/badge/CVE--2023--25652-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1:2.30.2-1+deb11u3</code></td></tr>
<tr><td>Fixed version</td><td><code>1:2.30.2-1+deb11u3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.30%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>70th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Git is a revision control system. Prior to versions 2.30.9, 2.31.8, 2.32.7, 2.33.8, 2.34.8, 2.35.8, 2.36.6, 2.37.7, 2.38.5, 2.39.3, and 2.40.1, by feeding specially crafted input to `git apply --reject`, a path outside the working tree can be overwritten with partially controlled contents (corresponding to the rejected hunk(s) from the given patch). A fix is available in versions 2.30.9, 2.31.8, 2.32.7, 2.33.8, 2.34.8, 2.35.8, 2.36.6, 2.37.7, 2.38.5, 2.39.3, and 2.40.1. As a workaround, avoid using `git apply` with `--reject` when applying patches from an untrusted source. Use `git apply --stat` to inspect a patch before applying; avoid applying one that create a conflict where a link corresponding to the `*.rej` file exists.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-32465?s=debian&n=git&ns=debian&t=deb&osn=debian&osv=11&vr=%3C1%3A2.30.2-1%2Bdeb11u3"><img alt="high : CVE--2024--32465" src="https://img.shields.io/badge/CVE--2024--32465-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1:2.30.2-1+deb11u3</code></td></tr>
<tr><td>Fixed version</td><td><code>1:2.30.2-1+deb11u3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Git is a revision control system. The Git project recommends to avoid working in untrusted repositories, and instead to clone it first with `git clone --no-local` to obtain a clean copy. Git has specific protections to make that a safe operation even with an untrusted source repository, but vulnerabilities allow those protections to be bypassed. In the context of cloning local repositories owned by other users, this vulnerability has been covered in CVE-2024-32004. But there are circumstances where the fixes for CVE-2024-32004 are not enough: For example, when obtaining a `.zip` file containing a full copy of a Git repository, it should not be trusted by default to be safe, as e.g. hooks could be configured to run within the context of that repository. The problem has been patched in versions 2.45.1, 2.44.1, 2.43.4, 2.42.2, 2.41.1, 2.40.2, and 2.39.4. As a workaround, avoid using Git in repositories that have been obtained via archives from untrusted sources.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-32021?s=debian&n=git&ns=debian&t=deb&osn=debian&osv=11&vr=%3C1%3A2.30.2-1%2Bdeb11u3"><img alt="low : CVE--2024--32021" src="https://img.shields.io/badge/CVE--2024--32021-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code><1:2.30.2-1+deb11u3</code></td></tr>
<tr><td>Fixed version</td><td><code>1:2.30.2-1+deb11u3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Git is a revision control system. Prior to versions 2.45.1, 2.44.1, 2.43.4, 2.42.2, 2.41.1, 2.40.2, and 2.39.4, when cloning a local source repository that contains symlinks via the filesystem, Git may create hardlinks to arbitrary user-readable files on the same filesystem as the target repository in the `objects/` directory. Cloning a local repository over the filesystem may creating hardlinks to arbitrary user-owned files on the same filesystem in the target Git repository's `objects/` directory. When cloning a repository over the filesystem (without explicitly specifying the `file://` protocol or `--no-local`), the optimizations for local cloning will be used, which include attempting to hard link the object files instead of copying them. While the code includes checks against symbolic links in the source repository, which were added during the fix for CVE-2022-39253, these checks can still be raced because the hard link operation ultimately follows symlinks. If the object on the filesystem appears as a file during the check, and then a symlink during the operation, this will allow the adversary to bypass the check and create hardlinks in the destination objects directory to arbitrary, user-readable files. The problem has been patched in versions 2.45.1, 2.44.1, 2.43.4, 2.42.2, 2.41.1, 2.40.2, and 2.39.4.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-25815?s=debian&n=git&ns=debian&t=deb&osn=debian&osv=11&vr=%3C1%3A2.30.2-1%2Bdeb11u3"><img alt="low : CVE--2023--25815" src="https://img.shields.io/badge/CVE--2023--25815-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code><1:2.30.2-1+deb11u3</code></td></tr>
<tr><td>Fixed version</td><td><code>1:2.30.2-1+deb11u3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.05%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>19th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In Git for Windows, the Windows port of Git, no localized messages are shipped with the installer. As a consequence, Git is expected not to localize messages at all, and skips the gettext initialization. However, due to a change in MINGW-packages, the `gettext()` function's implicit initialization no longer uses the runtime prefix but uses the hard-coded path `C:\mingw64\share\locale` to look for localized messages. And since any authenticated user has the permission to create folders in `C:\` (and since `C:\mingw64` does not typically exist), it is possible for low-privilege users to place fake messages in that location where `git.exe` will pick them up in version 2.40.1.  This vulnerability is relatively hard to exploit and requires social engineering. For example, a legitimate message at the end of a clone could be maliciously modified to ask the user to direct their web browser to a malicious website, and the user might think that the message comes from Git and is legitimate. It does require local write access by the attacker, though, which makes this attack vector less likely. Version 2.40.1 contains a patch for this issue. Some workarounds are available. Do not work on a Windows machine with shared accounts, or alternatively create a `C:\mingw64` folder and leave it empty. Users who have administrative rights may remove the permission to create folders in `C:\`.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-24975?s=debian&n=git&ns=debian&t=deb&osn=debian&osv=11&vr=%3E%3D1%3A2.30.2-1%2Bdeb11u2"><img alt="low : CVE--2022--24975" src="https://img.shields.io/badge/CVE--2022--24975-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1:2.30.2-1+deb11u2</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.17%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>54th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The --mirror documentation for Git through 2.35.1 does not mention the availability of deleted content, aka the "GitBleed" issue. This could present a security risk if information-disclosure auditing processes rely on a clone operation without the --mirror option. Note: This has been disputed by multiple 3rd parties who believe this is an intended feature of the git binary and does not pose a security risk.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2018-1000021?s=debian&n=git&ns=debian&t=deb&osn=debian&osv=11&vr=%3E%3D1%3A2.30.2-1%2Bdeb11u2"><img alt="low : CVE--2018--1000021" src="https://img.shields.io/badge/CVE--2018--1000021-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1:2.30.2-1+deb11u2</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.16%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>53rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GIT version 2.15.1 and earlier contains a Input Validation Error vulnerability in Client that can result in problems including messing up terminal configuration to RCE. This attack appear to be exploitable via The user must interact with a malicious git server, (or have their traffic modified in a MITM attack).

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">

<small><code>pkg:deb/debian/krb5@1.18.3-6%2Bdeb11u4?os_distro=bullseye&os_name=debian&os_version=11</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-37371?s=debian&n=krb5&ns=debian&t=deb&osn=debian&osv=11&vr=%3C1.18.3-6%2Bdeb11u5"><img alt="critical : CVE--2024--37371" src="https://img.shields.io/badge/CVE--2024--37371-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.18.3-6+deb11u5</code></td></tr>
<tr><td>Fixed version</td><td><code>1.18.3-6+deb11u5</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.09%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>38th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In MIT Kerberos 5 (aka krb5) before 1.21.3, an attacker can cause invalid memory reads during GSS message token handling by sending message tokens with invalid length fields.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-37370?s=debian&n=krb5&ns=debian&t=deb&osn=debian&osv=11&vr=%3C1.18.3-6%2Bdeb11u5"><img alt="high : CVE--2024--37370" src="https://img.shields.io/badge/CVE--2024--37370-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.18.3-6+deb11u5</code></td></tr>
<tr><td>Fixed version</td><td><code>1.18.3-6+deb11u5</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.09%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>38th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In MIT Kerberos 5 (aka krb5) before 1.21.3, an attacker can modify the plaintext Extra Count field of a confidential GSS krb5 wrap token, causing the unwrapped token to appear truncated to the application.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 3" src="https://img.shields.io/badge/H-3-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 2" src="https://img.shields.io/badge/U-2-lightgrey"/><strong>glibc</strong> <code>2.31-13+deb11u7</code> (deb)</summary>

<small><code>pkg:deb/debian/glibc@2.31-13%2Bdeb11u7?os_distro=bullseye&os_name=debian&os_version=11</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-33602?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=11&vr=%3C2.31-13%2Bdeb11u10"><img alt="high : CVE--2024--33602" src="https://img.shields.io/badge/CVE--2024--33602-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><2.31-13+deb11u10</code></td></tr>
<tr><td>Fixed version</td><td><code>2.31-13+deb11u10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

nscd: netgroup cache assumes NSS callback uses in-buffer strings  The Name Service Cache Daemon's (nscd) netgroup cache can corrupt memory when the NSS callback does not store all strings in the provided buffer. The flaw was introduced in glibc 2.15 when the cache was added to nscd.  This vulnerability is only present in the nscd binary.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-33601?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=11&vr=%3C2.31-13%2Bdeb11u10"><img alt="high : CVE--2024--33601" src="https://img.shields.io/badge/CVE--2024--33601-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><2.31-13+deb11u10</code></td></tr>
<tr><td>Fixed version</td><td><code>2.31-13+deb11u10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

nscd: netgroup cache may terminate daemon on memory allocation failure  The Name Service Cache Daemon's (nscd) netgroup cache uses xmalloc or xrealloc and these functions may terminate the process due to a memory allocation failure resulting in a denial of service to the clients.  The flaw was introduced in glibc 2.15 when the cache was added to nscd.  This vulnerability is only present in the nscd binary.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-2961?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=11&vr=%3C2.31-13%2Bdeb11u9"><img alt="high : CVE--2024--2961" src="https://img.shields.io/badge/CVE--2024--2961-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><2.31-13+deb11u9</code></td></tr>
<tr><td>Fixed version</td><td><code>2.31-13+deb11u9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.05%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The iconv() function in the GNU C Library versions 2.39 and older may overflow the output buffer passed to it by up to 4 bytes when converting strings to the ISO-2022-CN-EXT character set, which may be used to crash an application or overwrite a neighbouring variable.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-33600?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=11&vr=%3C2.31-13%2Bdeb11u10"><img alt="unspecified : CVE--2024--33600" src="https://img.shields.io/badge/CVE--2024--33600-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code><2.31-13+deb11u10</code></td></tr>
<tr><td>Fixed version</td><td><code>2.31-13+deb11u10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

nscd: Null pointer crashes after notfound response  If the Name Service Cache Daemon's (nscd) cache fails to add a not-found netgroup response to the cache, the client request can result in a null pointer dereference.  This flaw was introduced in glibc 2.15 when the cache was added to nscd.  This vulnerability is only present in the nscd binary.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-33599?s=debian&n=glibc&ns=debian&t=deb&osn=debian&osv=11&vr=%3C2.31-13%2Bdeb11u10"><img alt="unspecified : CVE--2024--33599" src="https://img.shields.io/badge/CVE--2024--33599-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code><2.31-13+deb11u10</code></td></tr>
<tr><td>Fixed version</td><td><code>2.31-13+deb11u10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

nscd: Stack-based buffer overflow in netgroup cache  If the Name Service Cache Daemon's (nscd) fixed size cache is exhausted by client requests then a subsequent client request for netgroup data may result in a stack-based buffer overflow.  This flaw was introduced in glibc 2.15 when the cache was added to nscd.  This vulnerability is only present in the nscd binary.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">

<small><code>pkg:deb/debian/gnutls28@3.7.1-5%2Bdeb11u3?os_distro=bullseye&os_name=debian&os_version=11</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-0567?s=debian&n=gnutls28&ns=debian&t=deb&osn=debian&osv=11&vr=%3C3.7.1-5%2Bdeb11u5"><img alt="high : CVE--2024--0567" src="https://img.shields.io/badge/CVE--2024--0567-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><3.7.1-5+deb11u5</code></td></tr>
<tr><td>Fixed version</td><td><code>3.7.1-5+deb11u5</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.09%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>37th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A vulnerability was found in GnuTLS, where a cockpit (which uses gnuTLS) rejects a certificate chain with distributed trust. This issue occurs when validating a certificate chain with cockpit-certificate-ensure. This flaw allows an unauthenticated, remote client or attacker to initiate a denial of service attack.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-0553?s=debian&n=gnutls28&ns=debian&t=deb&osn=debian&osv=11&vr=%3C3.7.1-5%2Bdeb11u5"><img alt="high : CVE--2024--0553" src="https://img.shields.io/badge/CVE--2024--0553-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><3.7.1-5+deb11u5</code></td></tr>
<tr><td>Fixed version</td><td><code>3.7.1-5+deb11u5</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.24%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>62nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A vulnerability was found in GnuTLS. The response times to malformed ciphertexts in RSA-PSK ClientKeyExchange differ from the response times of ciphertexts with correct PKCS#1 v1.5 padding. This issue may allow a remote attacker to perform a timing side-channel attack in the RSA-PSK key exchange, potentially leading to the leakage of sensitive data. CVE-2024-0553 is designated as an incomplete resolution for CVE-2023-5981.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-5981?s=debian&n=gnutls28&ns=debian&t=deb&osn=debian&osv=11&vr=%3C3.7.1-5%2Bdeb11u4"><img alt="medium : CVE--2023--5981" src="https://img.shields.io/badge/CVE--2023--5981-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><3.7.1-5+deb11u4</code></td></tr>
<tr><td>Fixed version</td><td><code>3.7.1-5+deb11u4</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.10%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>42nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A vulnerability was found that the response times to malformed ciphertexts in RSA-PSK ClientKeyExchange differ from response times of ciphertexts with correct PKCS#1 v1.5 padding.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-28834?s=debian&n=gnutls28&ns=debian&t=deb&osn=debian&osv=11&vr=%3C3.7.1-5%2Bdeb11u6"><img alt="medium : CVE--2024--28834" src="https://img.shields.io/badge/CVE--2024--28834-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><3.7.1-5+deb11u6</code></td></tr>
<tr><td>Fixed version</td><td><code>3.7.1-5+deb11u6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>14th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw was found in GnuTLS. The Minerva attack is a cryptographic vulnerability that exploits deterministic behavior in systems like GnuTLS, leading to side-channel leaks. In specific scenarios, such as when using the GNUTLS_PRIVKEY_FLAG_REPRODUCIBLE flag, it can result in a noticeable step in nonce size from 513 to 512 bits, exposing a potential timing side-channel.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-28835?s=debian&n=gnutls28&ns=debian&t=deb&osn=debian&osv=11&vr=%3C3.7.1-5%2Bdeb11u6"><img alt="medium : CVE--2024--28835" src="https://img.shields.io/badge/CVE--2024--28835-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><3.7.1-5+deb11u6</code></td></tr>
<tr><td>Fixed version</td><td><code>3.7.1-5+deb11u6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A flaw has been discovered in GnuTLS where an application crash can be induced when attempting to verify a specially crafted .pem bundle using the "certtool --verify-chain" command.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">

<small><code>pkg:golang/golang.org/x/net@0.13.0</code></small><br/>
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

<small><code>pkg:deb/debian/curl@7.74.0-1.3%2Bdeb11u10?os_distro=bullseye&os_name=debian&os_version=11</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-2398?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=11&vr=%3C7.74.0-1.3%2Bdeb11u12"><img alt="high : CVE--2024--2398" src="https://img.shields.io/badge/CVE--2024--2398-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><7.74.0-1.3+deb11u12</code></td></tr>
<tr><td>Fixed version</td><td><code>7.74.0-1.3+deb11u12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.05%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When an application tells libcurl it wants to allow HTTP/2 server push, and the amount of received headers for the push surpasses the maximum allowed limit (1000), libcurl aborts the server push. When aborting, libcurl inadvertently does not free all the previously allocated headers and instead leaks the memory.  Further, this error condition fails silently and is therefore not easily detected by an application.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-7264?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=11&vr=%3C7.74.0-1.3%2Bdeb11u13"><img alt="medium : CVE--2024--7264" src="https://img.shields.io/badge/CVE--2024--7264-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><7.74.0-1.3+deb11u13</code></td></tr>
<tr><td>Fixed version</td><td><code>7.74.0-1.3+deb11u13</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.06%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>24th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

libcurl's ASN1 parser code has the `GTime2str()` function, used for parsing an ASN.1 Generalized Time field. If given an syntactically incorrect field, the parser might end up using -1 for the length of the *time fraction*, leading to a `strlen()` getting performed on a pointer to a heap buffer area that is not (purposely) null terminated.  This flaw most likely leads to a crash, but can also lead to heap contents getting returned to the application when [CURLINFO_CERTINFO](https://curl.se/libcurl/c/CURLINFO_CERTINFO.html) is used.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-46218?s=debian&n=curl&ns=debian&t=deb&osn=debian&osv=11&vr=%3C7.74.0-1.3%2Bdeb11u11"><img alt="medium : CVE--2023--46218" src="https://img.shields.io/badge/CVE--2023--46218-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><7.74.0-1.3+deb11u11</code></td></tr>
<tr><td>Fixed version</td><td><code>7.74.0-1.3+deb11u11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.07%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>32nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

This flaw allows a malicious HTTP server to set "super cookies" in curl that are then passed back to more origins than what is otherwise allowed or possible. This allows a site to set cookies that then would get sent to different and unrelated sites and domains.  It could do this by exploiting a mixed case flaw in curl's function that verifies a given cookie domain against the Public Suffix List (PSL). For example a cookie could be set with `domain=co.UK` when the URL used a lower case hostname `curl.co.uk`, even though `co.uk` is listed as a PSL domain.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">

<small><code>pkg:golang/k8s.io/kubernetes@1.28.2</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2023-5528?s=github&n=kubernetes&ns=k8s.io&t=golang&vr=%3E%3D1.28.0%2C%3C1.28.4"><img alt="high 8.8: CVE--2023--5528" src="https://img.shields.io/badge/CVE--2023--5528-lightgrey?label=high%208.8&labelColor=e25d68"/></a> <i>Improper Input Validation</i>

<table>
<tr><td>Affected range</td><td><code>>=1.28.0<br/><1.28.4</code></td></tr>
<tr><td>Fixed version</td><td><code>1.28.4</code></td></tr>
<tr><td>CVSS Score</td><td><code>8.8</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.06%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>25th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A security issue was discovered in Kubernetes where a user that can create pods and persistent volumes on Windows nodes may be able to escalate to admin privileges on those nodes. Kubernetes clusters are only affected if they are using an in-tree storage plugin for Windows nodes.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-5321?s=github&n=kubernetes&ns=k8s.io&t=golang&vr=%3E%3D1.28.0%2C%3C1.28.12"><img alt="medium 6.1: CVE--2024--5321" src="https://img.shields.io/badge/CVE--2024--5321-lightgrey?label=medium%206.1&labelColor=fbb552"/></a> <i>Incorrect Default Permissions</i>

<table>
<tr><td>Affected range</td><td><code>>=1.28.0<br/><1.28.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.28.12</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:L/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>10th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A security issue was discovered in Kubernetes clusters with Windows nodes where BUILTIN\Users may be able to read container logs and NT AUTHORITY\Authenticated Users may be able to modify container logs.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-3177?s=github&n=kubernetes&ns=k8s.io&t=golang&vr=%3E%3D1.28.0%2C%3C%3D1.28.8"><img alt="low 2.7: CVE--2024--3177" src="https://img.shields.io/badge/CVE--2024--3177-lightgrey?label=low%202.7&labelColor=fce1a9"/></a> <i>Improper Input Validation</i>

<table>
<tr><td>Affected range</td><td><code>>=1.28.0<br/><=1.28.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.28.9</code></td></tr>
<tr><td>CVSS Score</td><td><code>2.7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:L/I:N/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>10th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A security issue was discovered in Kubernetes where users may be able to launch containers that bypass the mountable secrets policy enforced by the ServiceAccount admission plugin when using containers, init containers, and ephemeral containers with the envFrom field populated. The policy ensures pods running with a service account may only reference secrets specified in the service account’s secrets field. Kubernetes clusters are only affected if the ServiceAccount admission plugin and the kubernetes.io/enforce-mountable-secrets annotation are used together with containers, init containers, and ephemeral containers with the envFrom field populated.



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>systemd</strong> <code>247.3-7+deb11u4</code> (deb)</summary>

<small><code>pkg:deb/debian/systemd@247.3-7%2Bdeb11u4?os_distro=bullseye&os_name=debian&os_version=11</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2023-50387?s=debian&n=systemd&ns=debian&t=deb&osn=debian&osv=11&vr=%3C247.3-7%2Bdeb11u6"><img alt="high : CVE--2023--50387" src="https://img.shields.io/badge/CVE--2023--50387-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><247.3-7+deb11u6</code></td></tr>
<tr><td>Fixed version</td><td><code>247.3-7+deb11u6</code></td></tr>
<tr><td>EPSS Score</td><td><code>5.00%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>93rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Certain DNSSEC aspects of the DNS protocol (in RFC 4033, 4034, 4035, 6840, and related RFCs) allow remote attackers to cause a denial of service (CPU consumption) via one or more DNSSEC responses, aka the "KeyTrap" issue. One of the concerns is that, when there is a zone with many DNSKEY and RRSIG records, the protocol specification implies that an algorithm must evaluate all combinations of DNSKEY and RRSIG records.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-7008?s=debian&n=systemd&ns=debian&t=deb&osn=debian&osv=11&vr=%3C247.3-7%2Bdeb11u6"><img alt="medium : CVE--2023--7008" src="https://img.shields.io/badge/CVE--2023--7008-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><247.3-7+deb11u6</code></td></tr>
<tr><td>Fixed version</td><td><code>247.3-7+deb11u6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.06%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>28th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A vulnerability was found in systemd-resolved. This issue may allow systemd-resolved to accept records of DNSSEC-signed domains even when they have no signature, allowing man-in-the-middles (or the upstream DNS resolver) to manipulate records.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-50868?s=debian&n=systemd&ns=debian&t=deb&osn=debian&osv=11&vr=%3C247.3-7%2Bdeb11u6"><img alt="unspecified : CVE--2023--50868" src="https://img.shields.io/badge/CVE--2023--50868-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code><247.3-7+deb11u6</code></td></tr>
<tr><td>Fixed version</td><td><code>247.3-7+deb11u6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.05%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Closest Encloser Proof aspect of the DNS protocol (in RFC 5155 when RFC 9276 guidance is skipped) allows remote attackers to cause a denial of service (CPU consumption for SHA-1 computations) via DNSSEC responses in a random subdomain attack, aka the "NSEC3" issue. The RFC 5155 specification implies that an algorithm must perform thousands of iterations of a hash function in certain situations.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">

<small><code>pkg:deb/debian/libssh2@1.9.0-2?os_distro=bullseye&os_name=debian&os_version=11</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2020-22218?s=debian&n=libssh2&ns=debian&t=deb&osn=debian&osv=11&vr=%3C1.9.0-2%2Bdeb11u1"><img alt="high : CVE--2020--22218" src="https://img.shields.io/badge/CVE--2020--22218-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.9.0-2+deb11u1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.9.0-2+deb11u1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.08%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>36th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An issue was discovered in function _libssh2_packet_add in libssh2 1.10.0 allows attackers to access out of bounds memory.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">

<small><code>pkg:deb/debian/perl@5.32.1-4%2Bdeb11u2?os_distro=bullseye&os_name=debian&os_version=11</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2023-47038?s=debian&n=perl&ns=debian&t=deb&osn=debian&osv=11&vr=%3C5.32.1-4%2Bdeb11u3"><img alt="high : CVE--2023--47038" src="https://img.shields.io/badge/CVE--2023--47038-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><5.32.1-4+deb11u3</code></td></tr>
<tr><td>Fixed version</td><td><code>5.32.1-4+deb11u3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A vulnerability was found in perl 5.30.0 through 5.38.0. This issue occurs when a crafted regular expression is compiled by perl, which can allow an attacker controlled byte buffer overflow in a heap allocated buffer.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">

<small><code>pkg:deb/debian/e2fsprogs@1.46.2-2?os_distro=bullseye&os_name=debian&os_version=11</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2022-1304?s=debian&n=e2fsprogs&ns=debian&t=deb&osn=debian&osv=11&vr=%3C1.46.2-2%2Bdeb11u1"><img alt="high : CVE--2022--1304" src="https://img.shields.io/badge/CVE--2022--1304-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.46.2-2+deb11u1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.46.2-2+deb11u1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.06%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>30th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An out-of-bounds read/write vulnerability was found in e2fsprogs 1.46.5. This issue leads to a segmentation fault and possibly arbitrary code execution via a specially crafted filesystem.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">

<small><code>pkg:deb/debian/nghttp2@1.43.0-1?os_distro=bullseye&os_name=debian&os_version=11</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-28182?s=debian&n=nghttp2&ns=debian&t=deb&osn=debian&osv=11&vr=%3C1.43.0-1%2Bdeb11u2"><img alt="medium : CVE--2024--28182" src="https://img.shields.io/badge/CVE--2024--28182-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.43.0-1+deb11u2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.43.0-1+deb11u2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>14th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

nghttp2 is an implementation of the Hypertext Transfer Protocol version 2 in C. The nghttp2 library prior to version 1.61.0 keeps reading the unbounded number of HTTP/2 CONTINUATION frames even after a stream is reset to keep HPACK context in sync.  This causes excessive CPU usage to decode HPACK stream. nghttp2 v1.61.0 mitigates this vulnerability by limiting the number of CONTINUATION frames it accepts per stream. There is no workaround for this vulnerability.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-44487?s=debian&n=nghttp2&ns=debian&t=deb&osn=debian&osv=11&vr=%3C1.43.0-1%2Bdeb11u1"><img alt="low : CVE--2023--44487" src="https://img.shields.io/badge/CVE--2023--44487-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.43.0-1+deb11u1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.43.0-1+deb11u1</code></td></tr>
<tr><td>EPSS Score</td><td><code>83.78%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>99th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The HTTP/2 protocol allows a denial of service (server resource consumption) because request cancellation can reset many streams quickly, as exploited in the wild in August through October 2023.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">

<small><code>pkg:golang/google.golang.org/protobuf@1.30.0</code></small><br/>
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

<tr><td valign="top">

<small><code>pkg:deb/debian/pcre3@2:8.39-13?os_distro=bullseye&os_name=debian&os_version=11</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2019-20838?s=debian&n=pcre3&ns=debian&t=deb&osn=debian&osv=11&vr=%3E%3D2%3A8.39-13"><img alt="low : CVE--2019--20838" src="https://img.shields.io/badge/CVE--2019--20838-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=2:8.39-13</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>1.03%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>84th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

libpcre in PCRE before 8.43 allows a subject buffer over-read in JIT when UTF is disabled, and \X or \R has more than one fixed quantifier, a related issue to CVE-2019-20454.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2017-7246?s=debian&n=pcre3&ns=debian&t=deb&osn=debian&osv=11&vr=%3E%3D2%3A8.39-13"><img alt="low : CVE--2017--7246" src="https://img.shields.io/badge/CVE--2017--7246-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=2:8.39-13</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.65%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>80th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Stack-based buffer overflow in the pcre32_copy_substring function in pcre_get.c in libpcre1 in PCRE 8.40 allows remote attackers to cause a denial of service (WRITE of size 268) or possibly have unspecified other impact via a crafted file.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2017-7245?s=debian&n=pcre3&ns=debian&t=deb&osn=debian&osv=11&vr=%3E%3D2%3A8.39-13"><img alt="low : CVE--2017--7245" src="https://img.shields.io/badge/CVE--2017--7245-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=2:8.39-13</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.65%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>80th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Stack-based buffer overflow in the pcre32_copy_substring function in pcre_get.c in libpcre1 in PCRE 8.40 allows remote attackers to cause a denial of service (WRITE of size 4) or possibly have unspecified other impact via a crafted file.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2017-16231?s=debian&n=pcre3&ns=debian&t=deb&osn=debian&osv=11&vr=%3E%3D2%3A8.39-13"><img alt="low : CVE--2017--16231" src="https://img.shields.io/badge/CVE--2017--16231-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=2:8.39-13</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.08%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>36th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In PCRE 8.41, after compiling, a pcretest load test PoC produces a crash overflow in the function match() in pcre_exec.c because of a self-recursive call. NOTE: third parties dispute the relevance of this report, noting that there are options that can be used to limit the amount of stack that is used

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2017-11164?s=debian&n=pcre3&ns=debian&t=deb&osn=debian&osv=11&vr=%3E%3D2%3A8.39-13"><img alt="low : CVE--2017--11164" src="https://img.shields.io/badge/CVE--2017--11164-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=2:8.39-13</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.37%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>73rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In PCRE 8.41, the OP_KETRMAX feature in the match function in pcre_exec.c allows stack exhaustion (uncontrolled recursion) when processing a crafted regular expression.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">

<small><code>pkg:deb/debian/openldap@2.4.57%2Bdfsg-3%2Bdeb11u1?os_distro=bullseye&os_name=debian&os_version=11</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2020-15719?s=debian&n=openldap&ns=debian&t=deb&osn=debian&osv=11&vr=%3E%3D2.4.57%2Bdfsg-3%2Bdeb11u1"><img alt="low : CVE--2020--15719" src="https://img.shields.io/badge/CVE--2020--15719-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=2.4.57+dfsg-3+deb11u1</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.16%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>54th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

libldap in certain third-party OpenLDAP packages has a certificate-validation flaw when the third-party package is asserting RFC6125 support. It considers CN even when there is a non-matching subjectAltName (SAN). This is fixed in, for example, openldap-2.4.46-10.el8 in Red Hat Enterprise Linux.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2017-17740?s=debian&n=openldap&ns=debian&t=deb&osn=debian&osv=11&vr=%3E%3D2.4.57%2Bdfsg-3%2Bdeb11u1"><img alt="low : CVE--2017--17740" src="https://img.shields.io/badge/CVE--2017--17740-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=2.4.57+dfsg-3+deb11u1</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.41%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>74th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

contrib/slapd-modules/nops/nops.c in OpenLDAP through 2.4.45, when both the nops module and the memberof overlay are enabled, attempts to free a buffer that was allocated on the stack, which allows remote attackers to cause a denial of service (slapd crash) via a member MODDN operation.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2017-14159?s=debian&n=openldap&ns=debian&t=deb&osn=debian&osv=11&vr=%3E%3D2.4.57%2Bdfsg-3%2Bdeb11u1"><img alt="low : CVE--2017--14159" src="https://img.shields.io/badge/CVE--2017--14159-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=2.4.57+dfsg-3+deb11u1</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>10th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

slapd in OpenLDAP 2.4.45 and earlier creates a PID file after dropping privileges to a non-root account, which might allow local users to kill arbitrary processes by leveraging access to this non-root account for PID file modification before a root script executes a "kill `cat /pathname`" command, as demonstrated by openldap-initscript.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2015-3276?s=debian&n=openldap&ns=debian&t=deb&osn=debian&osv=11&vr=%3E%3D2.4.57%2Bdfsg-3%2Bdeb11u1"><img alt="low : CVE--2015--3276" src="https://img.shields.io/badge/CVE--2015--3276-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=2.4.57+dfsg-3+deb11u1</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.42%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>74th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The nss_parse_ciphers function in libraries/libldap/tls_m.c in OpenLDAP does not properly parse OpenSSL-style multi-keyword mode cipher strings, which might cause a weaker than intended cipher to be used and allow remote attackers to have unspecified impact via unknown vectors.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">

<small><code>pkg:deb/debian/shadow@1:4.8.1-1?os_distro=bullseye&os_name=debian&os_version=11</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2019-19882?s=debian&n=shadow&ns=debian&t=deb&osn=debian&osv=11&vr=%3E%3D1%3A4.8.1-1"><img alt="low : CVE--2019--19882" src="https://img.shields.io/badge/CVE--2019--19882-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1:4.8.1-1</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

shadow 4.8, in certain circumstances affecting at least Gentoo, Arch Linux, and Void Linux, allows local users to obtain root access because setuid programs are misconfigured. Specifically, this affects shadow 4.8 when compiled using --with-libpam but without explicitly passing --disable-account-tools-setuid, and without a PAM configuration suitable for use with setuid account management tools. This combination leads to account management tools (groupadd, groupdel, groupmod, useradd, userdel, usermod) that can easily be used by unprivileged local users to escalate privileges to root in multiple ways. This issue became much more relevant in approximately December 2019 when an unrelated bug was fixed (i.e., the chmod calls to suidusbins were fixed in the upstream Makefile which is now included in the release version 4.8).

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2013-4235?s=debian&n=shadow&ns=debian&t=deb&osn=debian&osv=11&vr=%3E%3D1%3A4.8.1-1"><img alt="low : CVE--2013--4235" src="https://img.shields.io/badge/CVE--2013--4235-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1:4.8.1-1</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.05%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

shadow: TOCTOU (time-of-check time-of-use) race condition when copying and removing directory trees

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2007-5686?s=debian&n=shadow&ns=debian&t=deb&osn=debian&osv=11&vr=%3E%3D1%3A4.8.1-1"><img alt="low : CVE--2007--5686" src="https://img.shields.io/badge/CVE--2007--5686-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1:4.8.1-1</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.16%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>52nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

initscripts in rPath Linux 1 sets insecure permissions for the /var/log/btmp file, which allows local users to obtain sensitive information regarding authentication attempts.  NOTE: because sshd detects the insecure permissions and does not log certain events, this also prevents sshd from logging failed authentication attempts by remote attackers.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>tar</strong> <code>1.34+dfsg-1</code> (deb)</summary>

<small><code>pkg:deb/debian/tar@1.34%2Bdfsg-1?os_distro=bullseye&os_name=debian&os_version=11</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2022-48303?s=debian&n=tar&ns=debian&t=deb&osn=debian&osv=11&vr=%3C1.34%2Bdfsg-1%2Bdeb11u1"><img alt="low : CVE--2022--48303" src="https://img.shields.io/badge/CVE--2022--48303-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.34+dfsg-1+deb11u1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.34+dfsg-1+deb11u1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.07%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>31st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GNU Tar through 1.34 has a one-byte out-of-bounds read that results in use of uninitialized memory for a conditional jump. Exploitation to change the flow of control has not been demonstrated. The issue occurs in from_header in list.c via a V7 archive in which mtime has approximately 11 whitespace characters.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-39804?s=debian&n=tar&ns=debian&t=deb&osn=debian&osv=11&vr=%3C1.34%2Bdfsg-1%2Bdeb11u1"><img alt="unspecified : CVE--2023--39804" src="https://img.shields.io/badge/CVE--2023--39804-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.34+dfsg-1+deb11u1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.34+dfsg-1+deb11u1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In GNU tar before 1.35, mishandled extension attributes in a PAX archive can lead to an application crash in xheader.c.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">

<small><code>pkg:deb/debian/openssl@1.1.1w-0%2Bdeb11u1?os_distro=bullseye&os_name=debian&os_version=11</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2010-0928?s=debian&n=openssl&ns=debian&t=deb&osn=debian&osv=11&vr=%3E%3D1.1.1w-0%2Bdeb11u1"><img alt="low : CVE--2010--0928" src="https://img.shields.io/badge/CVE--2010--0928-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.1.1w-0+deb11u1</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.07%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>30th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

OpenSSL 0.9.8i on the Gaisler Research LEON3 SoC on the Xilinx Virtex-II Pro FPGA uses a Fixed Width Exponentiation (FWE) algorithm for certain signature calculations, and does not verify the signature before providing it to a caller, which makes it easier for physically proximate attackers to determine the private key via a modified supply voltage for the microprocessor, related to a "fault-based attack."

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">

<small><code>pkg:deb/debian/util-linux@2.36.1-8%2Bdeb11u1?os_distro=bullseye&os_name=debian&os_version=11</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-28085?s=debian&n=util-linux&ns=debian&t=deb&osn=debian&osv=11&vr=%3C2.36.1-8%2Bdeb11u2"><img alt="low : CVE--2024--28085" src="https://img.shields.io/badge/CVE--2024--28085-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code><2.36.1-8+deb11u2</code></td></tr>
<tr><td>Fixed version</td><td><code>2.36.1-8+deb11u2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.05%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

wall in util-linux through 2.40, often installed with setgid tty permissions, allows escape sequences to be sent to other users' terminals through argv. (Specifically, escape sequences received from stdin are blocked, but escape sequences received from argv are not blocked.) There may be plausible scenarios where this leads to account takeover.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">

<small><code>pkg:deb/debian/coreutils@8.32-4%2Bb1?os_distro=bullseye&os_name=debian&os_version=11</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2017-18018?s=debian&n=coreutils&ns=debian&t=deb&osn=debian&osv=11&vr=%3E%3D8.32-4"><img alt="low : CVE--2017--18018" src="https://img.shields.io/badge/CVE--2017--18018-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=8.32-4</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In GNU Coreutils through 8.29, chown-core.c in chown and chgrp does not prevent replacement of a plain file with a symlink during use of the POSIX "-R -L" options, which allows local users to modify the ownership of arbitrary files by leveraging a race condition.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">

<small><code>pkg:deb/debian/gnupg2@2.2.27-2%2Bdeb11u2?os_distro=bullseye&os_name=debian&os_version=11</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2022-3219?s=debian&n=gnupg2&ns=debian&t=deb&osn=debian&osv=11&vr=%3E%3D2.2.27-2%2Bdeb11u2"><img alt="low : CVE--2022--3219" src="https://img.shields.io/badge/CVE--2022--3219-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=2.2.27-2+deb11u2</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.05%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GnuPG can be made to spin on a relatively small input by (for example) crafting a public key with thousands of signatures attached, compressed down to just a few KB.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">

<small><code>pkg:deb/debian/libgcrypt20@1.8.7-6?os_distro=bullseye&os_name=debian&os_version=11</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2018-6829?s=debian&n=libgcrypt20&ns=debian&t=deb&osn=debian&osv=11&vr=%3E%3D1.8.7-6"><img alt="low : CVE--2018--6829" src="https://img.shields.io/badge/CVE--2018--6829-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.8.7-6</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.19%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>57th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

cipher/elgamal.c in Libgcrypt through 1.8.2, when used to encrypt messages directly, improperly encodes plaintexts, which allows attackers to obtain sensitive information by reading ciphertext data (i.e., it does not have semantic security in face of a ciphertext-only attack). The Decisional Diffie-Hellman (DDH) assumption does not hold for Libgcrypt's ElGamal implementation.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">

<small><code>pkg:deb/debian/pcre2@10.36-2%2Bdeb11u1?os_distro=bullseye&os_name=debian&os_version=11</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2022-41409?s=debian&n=pcre2&ns=debian&t=deb&osn=debian&osv=11&vr=%3E%3D10.36-2%2Bdeb11u1"><img alt="low : CVE--2022--41409" src="https://img.shields.io/badge/CVE--2022--41409-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=10.36-2+deb11u1</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.09%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>37th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Integer overflow vulnerability in pcre2test before 10.41 allows attackers to cause a denial of service or other unspecified impacts via negative input.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">

<small><code>pkg:deb/debian/apt@2.2.4?os_distro=bullseye&os_name=debian&os_version=11</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2011-3374?s=debian&n=apt&ns=debian&t=deb&osn=debian&osv=11&vr=%3E%3D2.2.4"><img alt="low : CVE--2011--3374" src="https://img.shields.io/badge/CVE--2011--3374-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=2.2.4</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.16%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>54th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

It was found that apt-key in apt, all versions, do not correctly validate gpg keys with the master keyring, leading to a potential man-in-the-middle attack.

</blockquote>
</details>
</details></td></tr>
</table>

