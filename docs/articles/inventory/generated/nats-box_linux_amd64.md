---
hide_table_of_contents: true
---
<h2>:mag: Vulnerabilities of <code>synadia/nats-box:latest</code></h2>

<details open="true"><summary>:package: Image Reference</strong> <code>synadia/nats-box:latest</code></summary>
<table>
<tr><td>digest</td><td><code>sha256:ae9af06d3d21fa924dfce9dcaa3d39eb4c5c04b6e03fbc88e4750685e4c74745</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 13" src="https://img.shields.io/badge/critical-13-8b1924"/> <img alt="high: 96" src="https://img.shields.io/badge/high-96-e25d68"/> <img alt="medium: 47" src="https://img.shields.io/badge/medium-47-fbb552"/> <img alt="low: 4" src="https://img.shields.io/badge/low-4-fce1a9"/> <img alt="unspecified: 6" src="https://img.shields.io/badge/unspecified-6-lightgrey"/></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>25 MB</td></tr>
<tr><td>packages</td><td>104</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 5" src="https://img.shields.io/badge/C-5-8b1924"/> <img alt="high: 52" src="https://img.shields.io/badge/H-52-e25d68"/> <img alt="medium: 37" src="https://img.shields.io/badge/M-37-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>stdlib</strong> <code>1.16</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.16</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-24790?s=golang&n=stdlib&t=golang&vr=%3C1.21.11"><img alt="critical : CVE--2024--24790" src="https://img.shields.io/badge/CVE--2024--24790-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.21.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.21.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.082%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>24th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The various Is methods (IsPrivate, IsLoopback, etc) did not work as expected for IPv4-mapped IPv6 addresses, returning false for addresses which would return true in their traditional IPv4 forms.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-24540?s=golang&n=stdlib&t=golang&vr=%3C1.19.9"><img alt="critical : CVE--2023--24540" src="https://img.shields.io/badge/CVE--2023--24540-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.19.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.19.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.250%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>48th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Not all valid JavaScript whitespace characters are considered to be whitespace. Templates containing whitespace characters outside of the character set "\t\n\f\r\u0020\u2028\u2029" in JavaScript contexts that also contain actions may not be properly sanitized during execution.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-24538?s=golang&n=stdlib&t=golang&vr=%3C1.19.8"><img alt="critical : CVE--2023--24538" src="https://img.shields.io/badge/CVE--2023--24538-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.19.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.19.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.664%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>70th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Templates do not properly consider backticks (`) as Javascript string delimiters, and do not escape them as expected.

Backticks are used, since ES6, for JS template literals. If a template contains a Go template action within a Javascript template literal, the contents of the action can be used to terminate the literal, injecting arbitrary Javascript code into the Go template.

As ES6 template literals are rather complex, and themselves can do string interpolation, the decision was made to simply disallow Go template actions from being used inside of them (e.g. "var a = {{.}}"), since there is no obviously safe way to allow this behavior. This takes the same approach as github.com/google/safehtml.

With fix, Template.Parse returns an Error when it encounters templates like this, with an ErrorCode of value 12. This ErrorCode is currently unexported, but will be exported in the release of Go 1.21.

Users who rely on the previous behavior can re-enable it using the GODEBUG flag jstmpllitinterp=1, with the caveat that backticks will now be escaped. This should be used with caution.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-22871?s=golang&n=stdlib&t=golang&vr=%3C1.23.8"><img alt="critical : CVE--2025--22871" src="https://img.shields.io/badge/CVE--2025--22871-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.23.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.23.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.019%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The net/http package improperly accepts a bare LF as a line terminator in chunked data chunk-size lines. This can permit request smuggling if a net/http server is used in conjunction with a server that incorrectly accepts a bare LF as part of a chunk-ext.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-23806?s=golang&n=stdlib&t=golang&vr=%3C1.16.14"><img alt="critical : CVE--2022--23806" src="https://img.shields.io/badge/CVE--2022--23806-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.16.14</code></td></tr>
<tr><td>Fixed version</td><td><code>1.16.14</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.024%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Some big.Int values that are not valid field elements (negative or overflowing) might cause Curve.IsOnCurve to incorrectly return true. Operating on those values may cause a panic or an invalid curve operation. Note that Unmarshal will never return such values.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-29403?s=golang&n=stdlib&t=golang&vr=%3C1.19.10"><img alt="high : CVE--2023--29403" src="https://img.shields.io/badge/CVE--2023--29403-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.19.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.19.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.009%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

On Unix platforms, the Go runtime does not behave differently when a binary is run with the setuid/setgid bits. This can be dangerous in certain cases, such as when dumping memory state, or assuming the status of standard i/o file descriptors.

If a setuid/setgid binary is executed with standard I/O file descriptors closed, opening any files can result in unexpected content being read or written with elevated privileges. Similarly, if a setuid/setgid program is terminated, either via panic or signal, it may leak the contents of its registers.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-30580?s=golang&n=stdlib&t=golang&vr=%3C1.17.11"><img alt="high : CVE--2022--30580" src="https://img.shields.io/badge/CVE--2022--30580-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.17.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.17.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.026%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>7th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

On Windows, executing Cmd.Run, Cmd.Start, Cmd.Output, or Cmd.CombinedOutput when Cmd.Path is unset will unintentionally trigger execution of any binaries in the working directory named either "..com" or "..exe".

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61729?s=golang&n=stdlib&t=golang&vr=%3C1.24.11"><img alt="high : CVE--2025--61729" src="https://img.shields.io/badge/CVE--2025--61729-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.24.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.016%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Within HostnameError.Error(), when constructing an error string, there is no limit to the number of hosts that will be printed out. Furthermore, the error string is constructed by repeated string concatenation, leading to quadratic runtime. Therefore, a certificate provided by a malicious actor can result in excessive resource consumption.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61725?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="high : CVE--2025--61725" src="https://img.shields.io/badge/CVE--2025--61725-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.026%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The ParseAddress function constructs domain-literal address components through repeated string concatenation. When parsing large domain-literal components, this can cause excessive CPU consumption.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61723?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="high : CVE--2025--61723" src="https://img.shields.io/badge/CVE--2025--61723-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.026%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The processing time for parsing some invalid inputs scales non-linearly with respect to the size of the input.

This affects programs which parse untrusted PEM inputs.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58188?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="high : CVE--2025--58188" src="https://img.shields.io/badge/CVE--2025--58188-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.014%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Validating certificate chains which contain DSA public keys can cause programs to panic, due to a interface cast that assumes they implement the Equal method.

This affects programs which validate arbitrary certificate chains.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58187?s=golang&n=stdlib&t=golang&vr=%3C1.24.9"><img alt="high : CVE--2025--58187" src="https://img.shields.io/badge/CVE--2025--58187-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.24.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.015%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Due to the design of the name constraint checking algorithm, the processing time of some inputs scale non-linearly with respect to the size of the certificate.

This affects programs which validate arbitrary certificate chains.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-34158?s=golang&n=stdlib&t=golang&vr=%3C1.22.7"><img alt="high : CVE--2024--34158" src="https://img.shields.io/badge/CVE--2024--34158-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.22.7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.22.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.147%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>36th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.298%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>53rd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.618%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>69th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>1.498%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>81st percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>66.635%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>98th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An attacker may cause an HTTP/2 endpoint to read arbitrary amounts of header data by sending an excessive number of CONTINUATION frames.

Maintaining HPACK state requires parsing and processing all HEADERS and CONTINUATION frames on a connection. When a request's headers exceed MaxHeaderBytes, no memory is allocated to store the excess headers, but they are still parsed.

This permits an attacker to cause an HTTP/2 endpoint to read arbitrary amounts of header data, all associated with a request which is going to be rejected. These headers can include Huffman-encoded data which is significantly more expensive for the receiver to decode than for an attacker to send.

The fix sets a limit on the amount of excess header frames we will process before closing a connection.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-45287?s=golang&n=stdlib&t=golang&vr=%3C1.20.0"><img alt="high : CVE--2023--45287" src="https://img.shields.io/badge/CVE--2023--45287-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.20.0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.20.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.185%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>40th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Before Go 1.20, the RSA based TLS key exchanges used the math/big library, which is not constant time. RSA blinding was applied to prevent timing attacks, but analysis shows this may not have been fully effective. In particular it appears as if the removal of PKCS#1 padding may leak timing information, which in turn could be used to recover session key bits.

In Go 1.20, the crypto/tls library switched to a fully constant time RSA implementation, which we do not believe exhibits any timing side channels.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-45283?s=golang&n=stdlib&t=golang&vr=%3C1.20.11"><img alt="high : CVE--2023--45283" src="https://img.shields.io/badge/CVE--2023--45283-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.20.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.20.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.097%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>94.419%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>100th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.163%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>38th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A malicious HTTP/2 client which rapidly creates requests and immediately resets them can cause excessive server resource consumption. While the total number of requests is bounded by the http2.Server.MaxConcurrentStreams setting, resetting an in-progress request allows the attacker to create a new request while the existing one is still executing.

With the fix applied, HTTP/2 servers now bound the number of simultaneously executing handler goroutines to the stream concurrency limit (MaxConcurrentStreams). New requests arriving when at the limit (which can only happen after the client has reset an existing, in-flight request) will be queued until a handler exits. If the request queue grows too large, the server will terminate the connection.

This issue is also fixed in golang.org/x/net/http2 for users manually configuring HTTP/2.

The default stream concurrency limit is 250 streams (requests) per HTTP/2 connection. This value may be adjusted using the golang.org/x/net/http2 package; see the Server.MaxConcurrentStreams setting and the ConfigureServer function.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-24537?s=golang&n=stdlib&t=golang&vr=%3C1.19.8"><img alt="high : CVE--2023--24537" src="https://img.shields.io/badge/CVE--2023--24537-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.19.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.19.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.013%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling any of the Parse functions on Go source code which contains //line directives with very large line numbers can cause an infinite loop due to integer overflow.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-24536?s=golang&n=stdlib&t=golang&vr=%3C1.19.8"><img alt="high : CVE--2023--24536" src="https://img.shields.io/badge/CVE--2023--24536-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.19.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.19.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.059%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>19th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Multipart form parsing can consume large amounts of CPU and memory when processing form inputs containing very large numbers of parts.

This stems from several causes:

1. mime/multipart.Reader.ReadForm limits the total memory a parsed multipart form can consume. ReadForm can undercount the amount of memory consumed, leading it to accept larger inputs than intended.
2. Limiting total memory does not account for increased pressure on the garbage collector from large numbers of small allocations in forms with many parts.
3. ReadForm can allocate a large number of short-lived buffers, further increasing pressure on the garbage collector.

The combination of these factors can permit an attacker to cause an program that parses multipart forms to consume large amounts of CPU and memory, potentially resulting in a denial of service. This affects programs that use mime/multipart.Reader.ReadForm, as well as form parsing in the net/http package with the Request methods FormFile, FormValue, ParseMultipartForm, and PostFormValue.

With fix, ReadForm now does a better job of estimating the memory consumption of parsed forms, and performs many fewer short-lived allocations.

In addition, the fixed mime/multipart.Reader imposes the following limits on the size of parsed forms:

1. Forms parsed with ReadForm may contain no more than 1000 parts. This limit may be adjusted with the environment variable GODEBUG=multipartmaxparts=.
2. Form parts parsed with NextPart and NextRawPart may contain no more than 10,000 header fields. In addition, forms parsed with ReadForm may contain no more than 10,000 header fields across all parts. This limit may be adjusted with the environment variable GODEBUG=multipartmaxheaders=.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-24534?s=golang&n=stdlib&t=golang&vr=%3C1.19.8"><img alt="high : CVE--2023--24534" src="https://img.shields.io/badge/CVE--2023--24534-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.19.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.19.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.040%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>12th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

HTTP and MIME header parsing can allocate large amounts of memory, even when parsing small inputs, potentially leading to a denial of service.

Certain unusual patterns of input data can cause the common function used to parse HTTP and MIME headers to allocate substantially more memory than required to hold the parsed headers. An attacker can exploit this behavior to cause an HTTP server to allocate large amounts of memory from a small request, potentially leading to memory exhaustion and a denial of service.

With fix, header parsing now correctly allocates only the memory required to hold parsed headers.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-41725?s=golang&n=stdlib&t=golang&vr=%3C1.19.6"><img alt="high : CVE--2022--41725" src="https://img.shields.io/badge/CVE--2022--41725-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.19.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.19.6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.046%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>14th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A denial of service is possible from excessive resource consumption in net/http and mime/multipart.

Multipart form parsing with mime/multipart.Reader.ReadForm can consume largely unlimited amounts of memory and disk files. This also affects form parsing in the net/http package with the Request methods FormFile, FormValue, ParseMultipartForm, and PostFormValue.

ReadForm takes a maxMemory parameter, and is documented as storing "up to maxMemory bytes +10MB (reserved for non-file parts) in memory". File parts which cannot be stored in memory are stored on disk in temporary files. The unconfigurable 10MB reserved for non-file parts is excessively large and can potentially open a denial of service vector on its own. However, ReadForm did not properly account for all memory consumed by a parsed form, such as map entry overhead, part names, and MIME headers, permitting a maliciously crafted form to consume well over 10MB. In addition, ReadForm contained no limit on the number of disk files created, permitting a relatively small request body to create a large number of disk temporary files.

With fix, ReadForm now properly accounts for various forms of memory overhead, and should now stay within its documented limit of 10MB + maxMemory bytes of memory consumption. Users should still be aware that this limit is high and may still be hazardous.

In addition, ReadForm now creates at most one on-disk temporary file, combining multiple form parts into a single temporary file. The mime/multipart.File interface type's documentation states, "If stored on disk, the File's underlying concrete type will be an *os.File.". This is no longer the case when a form contains more than one file part, due to this coalescing of parts into a single file. The previous behavior of using distinct files for each form part may be reenabled with the environment variable GODEBUG=multipartfiles=distinct.

Users should be aware that multipart.ReadForm and the http.Request methods that call it do not limit the amount of disk consumed by temporary files. Callers can limit the size of form data with http.MaxBytesReader.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-41724?s=golang&n=stdlib&t=golang&vr=%3C1.19.6"><img alt="high : CVE--2022--41724" src="https://img.shields.io/badge/CVE--2022--41724-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.19.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.19.6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.016%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Large handshake records may cause panics in crypto/tls.

Both clients and servers may send large TLS handshake records which cause servers and clients, respectively, to panic when attempting to construct responses.

This affects all TLS 1.3 clients, TLS 1.2 clients which explicitly enable session resumption (by setting Config.ClientSessionCache to a non-nil value), and TLS 1.3 servers which request client certificates (by setting Config.ClientAuth >= RequestClientCert).

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-41723?s=golang&n=stdlib&t=golang&vr=%3C1.19.6"><img alt="high : CVE--2022--41723" src="https://img.shields.io/badge/CVE--2022--41723-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.19.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.19.6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.235%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>46th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A maliciously crafted HTTP/2 stream could cause excessive CPU consumption in the HPACK decoder, sufficient to cause a denial of service from a small number of small requests.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-41722?s=golang&n=stdlib&t=golang&vr=%3C1.19.6"><img alt="high : CVE--2022--41722" src="https://img.shields.io/badge/CVE--2022--41722-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.19.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.19.6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.169%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>38th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A path traversal vulnerability exists in filepath.Clean on Windows.

On Windows, the filepath.Clean function could transform an invalid path such as "a/../c:/b" into the valid path "c:\b". This transformation of a relative (if invalid) path into an absolute path could enable a directory traversal attack.

After fix, the filepath.Clean function transforms this path into the relative (but still invalid) path ".\c:\b".

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-41720?s=golang&n=stdlib&t=golang&vr=%3C1.18.9"><img alt="high : CVE--2022--41720" src="https://img.shields.io/badge/CVE--2022--41720-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.18.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.18.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.057%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

On Windows, restricted files can be accessed via os.DirFS and http.Dir.

The os.DirFS function and http.Dir type provide access to a tree of files rooted at a given directory. These functions permit access to Windows device files under that root. For example, os.DirFS("C:/tmp").Open("COM1") opens the COM1 device. Both os.DirFS and http.Dir only provide read-only filesystem access.

In addition, on Windows, an os.DirFS for the directory (the root of the current drive) can permit a maliciously crafted path to escape from the drive and access any path on the system.

With fix applied, the behavior of os.DirFS("") has changed. Previously, an empty root was treated equivalently to "/", so os.DirFS("").Open("tmp") would open the path "/tmp". This now returns an error.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-41716?s=golang&n=stdlib&t=golang&vr=%3C1.18.8"><img alt="high : CVE--2022--41716" src="https://img.shields.io/badge/CVE--2022--41716-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.18.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.18.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.022%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Due to unsanitized NUL values, attackers may be able to maliciously set environment variables on Windows.

In syscall.StartProcess and os/exec.Cmd, invalid environment variable values containing NUL values are not properly checked for. A malicious environment variable value can exploit this behavior to set a value for a different environment variable. For example, the environment variable string "A=B\x00C=D" sets the variables "A=B" and "C=D".

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-41715?s=golang&n=stdlib&t=golang&vr=%3C1.18.7"><img alt="high : CVE--2022--41715" src="https://img.shields.io/badge/CVE--2022--41715-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.18.7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.18.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.016%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Programs which compile regular expressions from untrusted sources may be vulnerable to memory exhaustion or denial of service.

The parsed regexp representation is linear in the size of the input, but in some cases the constant factor can be as high as 40,000, making relatively small regexps consume much larger amounts of memory.

After fix, each regexp being parsed is limited to a 256 MB memory footprint. Regular expressions whose representation would use more space than that are rejected. Normal use of regular expressions is unaffected.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-32189?s=golang&n=stdlib&t=golang&vr=%3C1.17.13"><img alt="high : CVE--2022--32189" src="https://img.shields.io/badge/CVE--2022--32189-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.17.13</code></td></tr>
<tr><td>Fixed version</td><td><code>1.17.13</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.102%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>29th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Decoding big.Float and big.Rat types can panic if the encoded message is too short, potentially allowing a denial of service.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-30635?s=golang&n=stdlib&t=golang&vr=%3C1.17.12"><img alt="high : CVE--2022--30635" src="https://img.shields.io/badge/CVE--2022--30635-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.17.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.17.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.160%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>37th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling Decoder.Decode on a message which contains deeply nested structures can cause a panic due to stack exhaustion.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-30634?s=golang&n=stdlib&t=golang&vr=%3C1.17.11"><img alt="high : CVE--2022--30634" src="https://img.shields.io/badge/CVE--2022--30634-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.17.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.17.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.023%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

On Windows, rand.Read will hang indefinitely if passed a buffer larger than 1 << 32 - 1 bytes.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-30633?s=golang&n=stdlib&t=golang&vr=%3C1.17.12"><img alt="high : CVE--2022--30633" src="https://img.shields.io/badge/CVE--2022--30633-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.17.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.17.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.087%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>25th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Unmarshaling an XML document into a Go struct which has a nested field that uses the 'any' field tag can panic due to stack exhaustion.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-30632?s=golang&n=stdlib&t=golang&vr=%3C1.17.12"><img alt="high : CVE--2022--30632" src="https://img.shields.io/badge/CVE--2022--30632-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.17.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.17.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.087%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>25th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling Glob on a path which contains a large number of path separators can cause a panic due to stack exhaustion.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-30631?s=golang&n=stdlib&t=golang&vr=%3C1.17.12"><img alt="high : CVE--2022--30631" src="https://img.shields.io/badge/CVE--2022--30631-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.17.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.17.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.042%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>13th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling Reader.Read on an archive containing a large number of concatenated 0-length compressed files can cause a panic due to stack exhaustion.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-30630?s=golang&n=stdlib&t=golang&vr=%3C1.17.12"><img alt="high : CVE--2022--30630" src="https://img.shields.io/badge/CVE--2022--30630-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.17.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.17.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.035%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>10th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling Glob on a path which contains a large number of path separators can cause a panic due to stack exhaustion.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-29804?s=golang&n=stdlib&t=golang&vr=%3C1.17.11"><img alt="high : CVE--2022--29804" src="https://img.shields.io/badge/CVE--2022--29804-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.17.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.17.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.165%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>38th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

On Windows, the filepath.Clean function can convert certain invalid paths to valid, absolute paths, potentially allowing a directory traversal attack.

For example, Clean(".\c:") returns "c:".

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-2880?s=golang&n=stdlib&t=golang&vr=%3C1.18.7"><img alt="high : CVE--2022--2880" src="https://img.shields.io/badge/CVE--2022--2880-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.18.7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.18.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.031%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>8th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Requests forwarded by ReverseProxy include the raw query parameters from the inbound request, including unparsable parameters rejected by net/http. This could permit query parameter smuggling when a Go proxy forwards a parameter with an unparsable value.

After fix, ReverseProxy sanitizes the query parameters in the forwarded query when the outbound request's Form field is set after the ReverseProxy. Director function returns, indicating that the proxy has parsed the query parameters. Proxies which do not parse query parameters continue to forward the original query parameters unchanged.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-2879?s=golang&n=stdlib&t=golang&vr=%3C1.18.7"><img alt="high : CVE--2022--2879" src="https://img.shields.io/badge/CVE--2022--2879-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.18.7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.18.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.016%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Reader.Read does not set a limit on the maximum size of file headers. A maliciously crafted archive could cause Read to allocate unbounded amounts of memory, potentially causing resource exhaustion or panics. After fix, Reader.Read limits the maximum size of header blocks to 1 MiB.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-28327?s=golang&n=stdlib&t=golang&vr=%3C1.17.9"><img alt="high : CVE--2022--28327" src="https://img.shields.io/badge/CVE--2022--28327-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.17.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.17.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.129%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>33rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A crafted scalar input longer than 32 bytes can cause P256().ScalarMult or P256().ScalarBaseMult to panic. Indirect uses through crypto/ecdsa and crypto/tls are unaffected. amd64, arm64, ppc64le, and s390x are unaffected.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-28131?s=golang&n=stdlib&t=golang&vr=%3C1.17.12"><img alt="high : CVE--2022--28131" src="https://img.shields.io/badge/CVE--2022--28131-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.17.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.17.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.013%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling Decoder.Skip when parsing a deeply nested XML document can cause a panic due to stack exhaustion.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-27664?s=golang&n=stdlib&t=golang&vr=%3C1.18.6"><img alt="high : CVE--2022--27664" src="https://img.shields.io/badge/CVE--2022--27664-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.18.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.18.6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.096%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

HTTP/2 server connections can hang forever waiting for a clean shutdown that was preempted by a fatal error. This condition can be exploited by a malicious client to cause a denial of service.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-24921?s=golang&n=stdlib&t=golang&vr=%3C1.16.15"><img alt="high : CVE--2022--24921" src="https://img.shields.io/badge/CVE--2022--24921-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.16.15</code></td></tr>
<tr><td>Fixed version</td><td><code>1.16.15</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.020%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

On 64-bit platforms, an extremely deeply nested expression can cause regexp.Compile to cause goroutine stack exhaustion, forcing the program to exit. Note this applies to very large expressions, on the order of 2MB.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-24675?s=golang&n=stdlib&t=golang&vr=%3C1.17.9"><img alt="high : CVE--2022--24675" src="https://img.shields.io/badge/CVE--2022--24675-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.17.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.17.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.132%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>34th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

encoding/pem in Go before 1.17.9 and 1.18.x before 1.18.1 has a Decode stack overflow via a large amount of PEM data.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-23772?s=golang&n=stdlib&t=golang&vr=%3C1.16.14"><img alt="high : CVE--2022--23772" src="https://img.shields.io/badge/CVE--2022--23772-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.16.14</code></td></tr>
<tr><td>Fixed version</td><td><code>1.16.14</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.017%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Rat.SetString had an overflow issue that can lead to uncontrolled memory consumption.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-44716?s=golang&n=stdlib&t=golang&vr=%3C1.16.12"><img alt="high : CVE--2021--44716" src="https://img.shields.io/badge/CVE--2021--44716-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.16.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.16.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.114%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>31st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An attacker can cause unbounded memory growth in servers accepting HTTP/2 requests.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-41772?s=golang&n=stdlib&t=golang&vr=%3C1.16.10"><img alt="high : CVE--2021--41772" src="https://img.shields.io/badge/CVE--2021--41772-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.16.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.16.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.062%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>19th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Previously, opening a zip with (*Reader).Open could result in a panic if the zip contained a file whose name was exclusively made up of slash characters or ".." path elements.

Open could also panic if passed the empty string directly as an argument.

Now, any files in the zip whose name could not be made valid for fs.FS.Open will be skipped, and no longer added to the fs.FS file list, although they are still accessible through (*Reader).File.

Note that it was already the case that a file could be accessible from (*Reader).Open with a name different from the one in (*Reader).File, as the former is the cleaned name, while the latter is the original one.

Finally, the actual panic site was made robust as a defense-in-depth measure.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-41771?s=golang&n=stdlib&t=golang&vr=%3C1.16.10"><img alt="high : CVE--2021--41771" src="https://img.shields.io/badge/CVE--2021--41771-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.16.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.16.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.431%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>62nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling File.ImportedSymbols on a loaded file which contains an invalid dynamic symbol table command can cause a panic, in particular if the encoded number of undefined symbols is larger than the number of symbols in the symbol table.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-39293?s=golang&n=stdlib&t=golang&vr=%3C1.16.8"><img alt="high : CVE--2021--39293" src="https://img.shields.io/badge/CVE--2021--39293-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.16.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.16.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.039%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The NewReader and OpenReader functions in archive/zip can cause a panic or an unrecoverable fatal error when reading an archive that claims to contain a large number of files, regardless of its actual size. This is caused by an incomplete fix for CVE-2021-33196.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-33198?s=golang&n=stdlib&t=golang&vr=%3E%3D1.16.0-0%2C%3C1.16.5"><img alt="high : CVE--2021--33198" src="https://img.shields.io/badge/CVE--2021--33198-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.16.0-0<br/><1.16.5</code></td></tr>
<tr><td>Fixed version</td><td><code>1.16.5</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.028%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>7th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Rat.SetString and Rat.UnmarshalText may cause a panic or an unrecoverable fatal error if passed inputs with very large exponents.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-33196?s=golang&n=stdlib&t=golang&vr=%3E%3D1.16.0-0%2C%3C1.16.5"><img alt="high : CVE--2021--33196" src="https://img.shields.io/badge/CVE--2021--33196-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.16.0-0<br/><1.16.5</code></td></tr>
<tr><td>Fixed version</td><td><code>1.16.5</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.024%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

NewReader and OpenReader can cause a panic or an unrecoverable fatal error when reading an archive that claims to contain a large number of files, regardless of its actual size.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-27918?s=golang&n=stdlib&t=golang&vr=%3E%3D1.16.0-0%2C%3C1.16.1"><img alt="high : CVE--2021--27918" src="https://img.shields.io/badge/CVE--2021--27918-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.16.0-0<br/><1.16.1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.16.1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.025%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Decode, DecodeElement, and Skip methods of an xml.Decoder provided by xml.NewTokenDecoder may enter an infinite loop when operating on a custom xml.TokenReader which returns an EOF in the middle of an open XML element.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-29400?s=golang&n=stdlib&t=golang&vr=%3C1.19.9"><img alt="high : CVE--2023--29400" src="https://img.shields.io/badge/CVE--2023--29400-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.19.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.19.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.049%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>15th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Templates containing actions in unquoted HTML attributes (e.g. "attr={{.}}") executed with empty input can result in output with unexpected results when parsed due to HTML normalization rules. This may allow injection of arbitrary attributes into tags.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-24539?s=golang&n=stdlib&t=golang&vr=%3C1.19.9"><img alt="high : CVE--2023--24539" src="https://img.shields.io/badge/CVE--2023--24539-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.19.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.19.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.067%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Angle brackets (<>) are not considered dangerous characters when inserted into CSS contexts. Templates containing multiple actions separated by a '/' character can result in unexpectedly closing the CSS context and allowing for injection of unexpected HTML, if executed with untrusted input.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-33195?s=golang&n=stdlib&t=golang&vr=%3E%3D1.16.0-0%2C%3C1.16.5"><img alt="high : CVE--2021--33195" src="https://img.shields.io/badge/CVE--2021--33195-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.16.0-0<br/><1.16.5</code></td></tr>
<tr><td>Fixed version</td><td><code>1.16.5</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.032%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The LookupCNAME, LookupSRV, LookupMX, LookupNS, and LookupAddr functions and their respective methods on the Resolver type may return arbitrary values retrieved from DNS which do not follow the established RFC 1035 rules for domain names. If these names are used without further sanitization, for instance unsafely included in HTML, they may allow for injection of unexpected content. Note that LookupTXT may still return arbitrary values that could require sanitization before further use.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-4673?s=golang&n=stdlib&t=golang&vr=%3C1.23.10"><img alt="medium : CVE--2025--4673" src="https://img.shields.io/badge/CVE--2025--4673-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.23.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.23.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.010%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Proxy-Authorization and Proxy-Authenticate headers persisted on cross-origin redirects potentially leaking sensitive information.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61727?s=golang&n=stdlib&t=golang&vr=%3C1.24.11"><img alt="medium : CVE--2025--61727" src="https://img.shields.io/badge/CVE--2025--61727-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.24.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.021%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An excluded subdomain constraint in a certificate chain does not restrict the usage of wildcard SANs in the leaf certificate. For example a constraint that excludes the subdomain test.example.com does not prevent a leaf certificate from claiming the SAN *.example.com.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-47906?s=golang&n=stdlib&t=golang&vr=%3C1.23.12"><img alt="medium : CVE--2025--47906" src="https://img.shields.io/badge/CVE--2025--47906-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.23.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.23.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.020%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

If the PATH environment variable contains paths which are executables (rather than just directories), passing certain strings to LookPath ("", ".", and ".."), can result in the binaries listed in the PATH being unexpectedly returned.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-45290?s=golang&n=stdlib&t=golang&vr=%3C1.21.8"><img alt="medium : CVE--2023--45290" src="https://img.shields.io/badge/CVE--2023--45290-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.21.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.21.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.362%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>58th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When parsing a multipart form (either explicitly with Request.ParseMultipartForm or implicitly with Request.FormValue, Request.PostFormValue, or Request.FormFile), limits on the total size of the parsed form were not applied to the memory consumed while reading a single form line. This permits a maliciously crafted input containing very long lines to cause allocation of arbitrarily large amounts of memory, potentially leading to memory exhaustion.

With fix, the ParseMultipartForm function now correctly limits the maximum size of form lines.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-29406?s=golang&n=stdlib&t=golang&vr=%3C1.19.11"><img alt="medium : CVE--2023--29406" src="https://img.shields.io/badge/CVE--2023--29406-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.19.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.19.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.236%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>46th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The HTTP/1 client does not fully validate the contents of the Host header. A maliciously crafted Host header can inject additional headers or entire requests.

With fix, the HTTP/1 client now refuses to send requests containing an invalid Request.Host or Request.URL.Host value.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-32148?s=golang&n=stdlib&t=golang&vr=%3C1.17.12"><img alt="medium : CVE--2022--32148" src="https://img.shields.io/badge/CVE--2022--32148-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.17.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.17.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.057%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Client IP adresses may be unintentionally exposed via X-Forwarded-For headers.

When httputil.ReverseProxy.ServeHTTP is called with a Request.Header map containing a nil value for the X-Forwarded-For header, ReverseProxy sets the client IP as the value of the X-Forwarded-For header, contrary to its documentation.

In the more usual case where a Director function sets the X-Forwarded-For header value to nil, ReverseProxy leaves the header unmodified as expected.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-1705?s=golang&n=stdlib&t=golang&vr=%3C1.17.12"><img alt="medium : CVE--2022--1705" src="https://img.shields.io/badge/CVE--2022--1705-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.17.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.17.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.055%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>17th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The HTTP/1 client accepted some invalid Transfer-Encoding headers as indicating a "chunked" encoding. This could potentially allow for request smuggling, but only if combined with an intermediate server that also improperly failed to reject the header as invalid.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-34558?s=golang&n=stdlib&t=golang&vr=%3E%3D1.16.0-0%2C%3C1.16.6"><img alt="medium : CVE--2021--34558" src="https://img.shields.io/badge/CVE--2021--34558-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.16.0-0<br/><1.16.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.16.6</code></td></tr>
<tr><td>EPSS Score</td><td><code>1.475%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>80th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

crypto/tls clients can panic when provided a certificate of the wrong type for the negotiated parameters. net/http clients performing HTTPS requests are also affected.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-45341?s=golang&n=stdlib&t=golang&vr=%3C1.22.11"><img alt="medium : CVE--2024--45341" src="https://img.shields.io/badge/CVE--2024--45341-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.22.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.22.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.048%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>15th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A certificate with a URI which has a IPv6 address with a zone ID may incorrectly satisfy a URI name constraint that applies to the certificate chain.

Certificates containing URIs are not permitted in the web PKI, so this only affects users of private PKIs which make use of URIs.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-45336?s=golang&n=stdlib&t=golang&vr=%3C1.22.11"><img alt="medium : CVE--2024--45336" src="https://img.shields.io/badge/CVE--2024--45336-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.22.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.22.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.078%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>24th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The HTTP client drops sensitive headers after following a cross-domain redirect. For example, a request to a.com/ containing an Authorization header which is redirected to b.com/ will not send that header to b.com.

In the event that the client received a subsequent same-domain redirect, however, the sensitive headers would be restored. For example, a chain of redirects from a.com/, to b.com/1, and finally to b.com/2 would incorrectly send the Authorization header to b.com/2.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-39319?s=golang&n=stdlib&t=golang&vr=%3C1.20.8"><img alt="medium : CVE--2023--39319" src="https://img.shields.io/badge/CVE--2023--39319-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.20.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.20.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.085%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>25th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The html/template package does not apply the proper rules for handling occurrences of "<script", "<!--", and "</script" within JS literals in <script> contexts. This may cause the template parser to improperly consider script contexts to be terminated early, causing actions to be improperly escaped. This could be leveraged to perform an XSS attack.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-39318?s=golang&n=stdlib&t=golang&vr=%3C1.20.8"><img alt="medium : CVE--2023--39318" src="https://img.shields.io/badge/CVE--2023--39318-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.20.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.20.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.085%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>25th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The html/template package does not properly handle HTML-like "" comment tokens, nor hashbang "#!" comment tokens, in <script> contexts. This may cause the template parser to improperly interpret the contents of <script> contexts, causing actions to be improperly escaped. This may be leveraged to perform an XSS attack.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-24783?s=golang&n=stdlib&t=golang&vr=%3C1.21.8"><img alt="medium : CVE--2024--24783" src="https://img.shields.io/badge/CVE--2024--24783-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.21.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.21.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.445%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>63rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Verifying a certificate chain which contains a certificate with an unknown public key algorithm will cause Certificate.Verify to panic.

This affects all crypto/tls clients, and servers that set Config.ClientAuth to VerifyClientCertIfGiven or RequireAndVerifyClientCert. The default behavior is for TLS servers to not verify client certificates.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-36221?s=golang&n=stdlib&t=golang&vr=%3E%3D1.16.0-0%2C%3C1.16.7"><img alt="medium : CVE--2021--36221" src="https://img.shields.io/badge/CVE--2021--36221-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.16.0-0<br/><1.16.7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.16.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.198%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>42nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

ReverseProxy can panic after encountering a problem copying a proxied response body.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-31525?s=golang&n=stdlib&t=golang&vr=%3E%3D1.16.0-0%2C%3C1.16.4"><img alt="medium : CVE--2021--31525" src="https://img.shields.io/badge/CVE--2021--31525-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.16.0-0<br/><1.16.4</code></td></tr>
<tr><td>Fixed version</td><td><code>1.16.4</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.013%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A malicious HTTP server or client can cause the net/http client or server to panic.

ReadRequest and ReadResponse can hit an unrecoverable panic when reading a very large header (over 7MB on 64-bit architectures, or over 4MB on 32-bit ones). Transport and Client are vulnerable and the program can be made to crash by a malicious server. Server is not vulnerable by default, but can be if the default max header of 1MB is overridden by setting Server.MaxHeaderBytes to a higher value, in which case the program can be made to crash by a malicious client.

This also affects golang.org/x/net/http2/h2c and HeaderValuesContainsToken in golang.org/x/net/http/httpguts.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-0913?s=golang&n=stdlib&t=golang&vr=%3C1.23.10"><img alt="medium : CVE--2025--0913" src="https://img.shields.io/badge/CVE--2025--0913-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.23.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.23.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.008%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

os.OpenFile(path, os.O_CREATE|O_EXCL) behaved differently on Unix and Windows systems when the target path was a dangling symlink. On Unix systems, OpenFile with O_CREATE and O_EXCL flags never follows symlinks. On Windows, when the target path was a symlink to a nonexistent location, OpenFile would create a file in that location. OpenFile now always returns an error when the O_CREATE and O_EXCL flags are both set and the target path is a symlink.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-24789?s=golang&n=stdlib&t=golang&vr=%3C1.21.11"><img alt="medium : CVE--2024--24789" src="https://img.shields.io/badge/CVE--2024--24789-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.21.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.21.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.006%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>0th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The archive/zip package's handling of certain types of invalid zip files differs from the behavior of most zip implementations. This misalignment could be exploited to create an zip file with contents that vary depending on the implementation reading the file. The archive/zip package now rejects files containing these errors.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-1962?s=golang&n=stdlib&t=golang&vr=%3C1.17.12"><img alt="medium : CVE--2022--1962" src="https://img.shields.io/badge/CVE--2022--1962-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.17.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.17.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.005%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>0th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling any of the Parse functions on Go source code which contains deeply nested types or declarations can cause a panic due to stack exhaustion.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-27919?s=golang&n=stdlib&t=golang&vr=%3E%3D1.16.0-0%2C%3C1.16.1"><img alt="medium : CVE--2021--27919" src="https://img.shields.io/badge/CVE--2021--27919-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.16.0-0<br/><1.16.1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.16.1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.132%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>34th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Using Reader.Open on an archive containing a file with a path prefixed by "../" will cause a panic due to a stack overflow. If parsing user supplied archives, this may be used as a denial of service vector.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-24785?s=golang&n=stdlib&t=golang&vr=%3C1.21.8"><img alt="medium : CVE--2024--24785" src="https://img.shields.io/badge/CVE--2024--24785-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.21.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.21.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.273%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>50th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

If errors returned from MarshalJSON methods contain user controlled data, they may be used to break the contextual auto-escaping behavior of the html/template package, allowing for subsequent actions to inject unexpected content into templates.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61724?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="medium : CVE--2025--61724" src="https://img.shields.io/badge/CVE--2025--61724-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.025%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Reader.ReadResponse function constructs a response string through repeated string concatenation of lines. When the number of lines in a response is large, this can cause excessive CPU consumption.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58189?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="medium : CVE--2025--58189" src="https://img.shields.io/badge/CVE--2025--58189-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.019%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When Conn.Handshake fails during ALPN negotiation the error contains attacker controlled information (the ALPN protocols sent by the client) which is not escaped.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58186?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="medium : CVE--2025--58186" src="https://img.shields.io/badge/CVE--2025--58186-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.029%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>7th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Despite HTTP headers having a default limit of 1MB, the number of cookies that can be parsed does not have a limit. By sending a lot of very small cookies such as "a=;", an attacker can make an HTTP server allocate a large amount of structs, causing large memory consumption.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58185?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="medium : CVE--2025--58185" src="https://img.shields.io/badge/CVE--2025--58185-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.033%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Parsing a maliciously crafted DER payload could allocate large amounts of memory, causing memory exhaustion.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-47912?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="medium : CVE--2025--47912" src="https://img.shields.io/badge/CVE--2025--47912-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.025%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Parse function permits values other than IPv6 addresses to be included in square brackets within the host component of a URL. RFC 3986 permits IPv6 addresses to be included within the host component, enclosed within square brackets. For example: "http://[::1]/". IPv4 addresses and hostnames must not appear within square brackets. Parse did not enforce this requirement.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-45284?s=golang&n=stdlib&t=golang&vr=%3C1.20.11"><img alt="medium : CVE--2023--45284" src="https://img.shields.io/badge/CVE--2023--45284-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.20.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.20.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.040%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>12th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.048%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>15th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A malicious HTTP sender can use chunk extensions to cause a receiver reading from a request or response body to read many more bytes from the network than are in the body.

A malicious HTTP client can further exploit this to cause a server to automatically read a large amount of data (up to about 1GiB) when a handler fails to read the entire body of a request.

Chunk extensions are a little-used HTTP feature which permit including additional metadata in a request or response body sent using the chunked encoding. The net/http chunked encoding reader discards this metadata. A sender can exploit this by inserting a large metadata segment with each byte transferred. The chunk reader now produces an error if the ratio of real body to encoded bytes grows too small.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-29409?s=golang&n=stdlib&t=golang&vr=%3C1.19.12"><img alt="medium : CVE--2023--29409" src="https://img.shields.io/badge/CVE--2023--29409-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.19.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.19.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.112%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>30th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Extremely large RSA keys in certificate chains can cause a client/server to expend significant CPU time verifying signatures.

With fix, the size of RSA keys transmitted during handshakes is restricted to <= 8192 bits.

Based on a survey of publicly trusted RSA keys, there are currently only three certificates in circulation with keys larger than this, and all three appear to be test certificates that are not actively deployed. It is possible there are larger keys in use in private PKIs, but we target the web PKI, so causing breakage here in the interests of increasing the default safety of users of crypto/tls seems reasonable.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-24532?s=golang&n=stdlib&t=golang&vr=%3C1.19.7"><img alt="medium : CVE--2023--24532" src="https://img.shields.io/badge/CVE--2023--24532-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.19.7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.19.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.024%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The ScalarMult and ScalarBaseMult methods of the P256 Curve may return an incorrect result if called with some specific unreduced scalars (a scalar larger than the order of the curve).

This does not impact usages of crypto/ecdsa or crypto/ecdh.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-41717?s=golang&n=stdlib&t=golang&vr=%3C1.18.9"><img alt="medium : CVE--2022--41717" src="https://img.shields.io/badge/CVE--2022--41717-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.18.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.18.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.541%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>67th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An attacker can cause excessive memory growth in a Go server accepting HTTP/2 requests.

HTTP/2 server connections contain a cache of HTTP header keys sent by the client. While the total number of entries in this cache is capped, an attacker sending very large keys can cause the server to allocate approximately 64 MiB per open connection.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-29526?s=golang&n=stdlib&t=golang&vr=%3C1.17.10"><img alt="medium : CVE--2022--29526" src="https://img.shields.io/badge/CVE--2022--29526-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.17.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.17.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.173%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>39th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When called with a non-zero flags parameter, the Faccessat function can incorrectly report that a file is accessible.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-33197?s=golang&n=stdlib&t=golang&vr=%3E%3D1.16.0-0%2C%3C1.16.5"><img alt="medium : CVE--2021--33197" src="https://img.shields.io/badge/CVE--2021--33197-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.16.0-0<br/><1.16.5</code></td></tr>
<tr><td>Fixed version</td><td><code>1.16.5</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.033%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

ReverseProxy can be made to forward certain hop-by-hop headers, including Connection. If the target of the ReverseProxy is itself a reverse proxy, this lets an attacker drop arbitrary headers, including those set by the ReverseProxy.Director.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-44717?s=golang&n=stdlib&t=golang&vr=%3C1.16.12"><img alt="medium : CVE--2021--44717" src="https://img.shields.io/badge/CVE--2021--44717-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.16.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.16.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.441%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>62nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When a Go program running on a Unix system is out of file descriptors and calls syscall.ForkExec (including indirectly by using the os/exec package), syscall.ForkExec can close file descriptor 0 as it fails. If this happens (or can be provoked) repeatedly, it can result in misdirected I/O such as writing network traffic intended for one connection to a different connection, or content intended for one file to a different one.

For users who cannot immediately update to the new release, the bug can be mitigated by raising the per-process file descriptor limit.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58183?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="medium : CVE--2025--58183" src="https://img.shields.io/badge/CVE--2025--58183-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.014%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

tar.Reader does not set a maximum size on the number of sparse region data blocks in GNU tar pax 1.0 sparse files. A maliciously-crafted archive containing a large number of sparse regions can cause a Reader to read an unbounded amount of data from the archive into memory. When reading from a compressed source, a small compressed input can result in large allocations.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-34155?s=golang&n=stdlib&t=golang&vr=%3C1.22.7"><img alt="medium : CVE--2024--34155" src="https://img.shields.io/badge/CVE--2024--34155-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.22.7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.22.7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.073%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>22nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling any of the Parse functions on Go source code which contains deeply nested literals can cause a panic due to stack exhaustion.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-45289?s=golang&n=stdlib&t=golang&vr=%3C1.21.8"><img alt="medium : CVE--2023--45289" src="https://img.shields.io/badge/CVE--2023--45289-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.21.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.21.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.454%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>63rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When following an HTTP redirect to a domain which is not a subdomain match or exact match of the initial domain, an http.Client does not forward sensitive headers such as "Authorization" or "Cookie". For example, a redirect from foo.com to www.foo.com will forward the Authorization header, but a redirect to bar.com will not.

A maliciously crafted HTTP redirect could cause sensitive headers to be unexpectedly forwarded.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-22866?s=golang&n=stdlib&t=golang&vr=%3C1.22.12"><img alt="medium : CVE--2025--22866" src="https://img.shields.io/badge/CVE--2025--22866-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.22.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.22.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.017%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Due to the usage of a variable time instruction in the assembly implementation of an internal function, a small number of bits of secret scalars are leaked on the ppc64le architecture. Due to the way this function is used, we do not believe this leakage is enough to allow recovery of the private key when P-256 is used in any well known protocols.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-30629?s=golang&n=stdlib&t=golang&vr=%3C1.17.11"><img alt="low : CVE--2022--30629" src="https://img.shields.io/badge/CVE--2022--30629-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.17.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.17.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.068%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An attacker can correlate a resumed TLS session with a previous connection.

Session tickets generated by crypto/tls do not contain a randomly generated ticket_age_add, which allows an attacker that can observe TLS handshakes to correlate successive connections by comparing ticket ages during session resumption.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 2" src="https://img.shields.io/badge/C-2-8b1924"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 3" src="https://img.shields.io/badge/U-3-lightgrey"/><strong>github.com/nats-io/jwt</strong> <code>0.3.2</code> (golang)</summary>

<small><code>pkg:golang/github.com/nats-io/jwt@0.3.2</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2020-26892?s=github&n=jwt&ns=github.com%2Fnats-io&t=golang&vr=%3C1.1.0"><img alt="critical 9.8: CVE--2020--26892" src="https://img.shields.io/badge/CVE--2020--26892-lightgrey?label=critical%209.8&labelColor=8b1924"/></a> <i>Use of Hard-coded Credentials</i>

<table>
<tr><td>Affected range</td><td><code><1.1.0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.1.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>9.8</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.465%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>64th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

## Problem Description

NATS nats-server through 2020-10-07 has Incorrect Access Control because of how expired credentials are handled.

The NATS accounts system has expiration timestamps on credentials; the <https://github.com/nats-io/jwt> library had an API which encouraged misuse and an `IsRevoked()` method which misused its own API.

A new `IsClaimRevoked()` method has correct handling and the nats-server has been updated to use this.  The old `IsRevoked()` method now always returns true and other client code will have to be updated to avoid calling it.

The CVE identifier should cover any application using the old JWT API, where the nats-server is one of those applications.


## Affected versions

#### JWT library

 * all versions prior to 1.1.0
 * fixed after nats-io/jwt PR 103 landed (2020-10-06)

#### NATS Server

 * Version 2 prior to 2.1.9
   + 2.0.0 through and including 2.1.8 are vulnerable.
 * fixed with nats-io/nats-server PRs 1632, 1635, 1645


## Impact

Time-based credential expiry did not work.


## Workaround

Have credentials which only expire after fixes can be deployed.


## Solution

Upgrade the JWT dependency in any application using it.

Upgrade the NATS server if using NATS Accounts.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-3127?s=github&n=jwt&ns=github.com%2Fnats-io&t=golang&vr=%3C%3D1.2.2"><img alt="critical : CVE--2021--3127" src="https://img.shields.io/badge/CVE--2021--3127-lightgrey?label=critical%20&labelColor=8b1924"/></a> <i>Incorrect Authorization</i>

<table>
<tr><td>Affected range</td><td><code><=1.2.2</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.290%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>52nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

(This advisory is canonically <https://advisories.nats.io/CVE/CVE-2021-3127.txt>)

## Problem Description

The NATS server provides for Subjects which are namespaced by Account; all Subjects are supposed to be private to an account, with an Export/Import system used to grant cross-account access to some Subjects.  Some Exports are public, such that anyone can import the
relevant subjects, and some Exports are private, such that the Import requires a token JWT to prove permission.

The JWT library's validation of the bindings in the Import Token incorrectly warned on mismatches, instead of outright rejecting the token.

As a result, any account can take an Import token used by any other account and re-use it for themselves because the binding to the
importing account is not rejected, and use it to import *any* Subject from the Exporting account, not just the Subject referenced in the Import Token.

The NATS account-server system treats account JWTs as semi-public information, such that an attacker can easily enumerate all account JWTs and retrieve all Import Tokens from those account JWTs.

The CVE identifier should cover the JWT library repair and the nats-server containing the fixed JWT library, and any other application depending upon the fixed JWT library.


## Affected versions

#### JWT library

 * all versions prior to 2.0.1
 * fixed after nats-io/jwt#149 landed (2021-03-14)

#### NATS Server

 * Version 2 prior to 2.2.0
   + 2.0.0 through and including 2.1.9 are vulnerable
 * fixed with nats-io/nats-server@423b79440c (2021-03-14)


## Impact

In deployments with untrusted accounts able to update the Account Server with imports, a malicious account can access any Subject from an account which provides Exported Subjects.

Abuse of this facility requires the malicious actor to upload their tampered Account JWT to the Account Server, providing the service operator with a data-store which can be scanned for signs of abuse.


## Workaround

Deny access to clients to update their account JWT in the account server.


## Solution

Upgrade the JWT dependency in any application using it.

Upgrade the NATS server if using NATS Accounts (with private Exports; Account owners can create those at any time though).

Audit all accounts JWTs to scan for exploit attempts; a Python script to audit the accounts can be found at <https://gist.github.com/philpennock/09d49524ad98043ff11d8a40c2bb0d5a>.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2020-26521?s=github&n=jwt&ns=github.com%2Fnats-io&t=golang&vr=%3C1.1.0"><img alt="high 7.5: CVE--2020--26521" src="https://img.shields.io/badge/CVE--2020--26521-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>NULL Pointer Dereference</i>

<table>
<tr><td>Affected range</td><td><code><1.1.0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.1.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.682%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>71st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

## Problem Description

The NATS account system has an Operator trusted by the servers, which signs Accounts, and each Account can then create and sign Users within their account.  The Operator should be able to safely issue Accounts to other entities which it does not fully trust.

A malicious Account could create and sign a User JWT with a state not created by the normal tooling, such that decoding by the NATS JWT library (written in Go) would attempt a nil dereference, aborting execution.

The NATS Server is known to be impacted by this.


## Affected versions

#### JWT library

 * all versions prior to 1.1.0

#### NATS Server

 * Version 2 prior to 2.1.9


## Impact

#### JWT library

 * Programs would nil dereference and panic, aborting execution by default.

#### NATS server

 * Denial of Service caused by process termination


## Workaround

If your NATS servers do not trust any accounts which are managed by untrusted entities, then malformed User credentials are unlikely to be encountered.


## Solution

Upgrade the JWT dependency in any application using it.

Upgrade the NATS server if using NATS Accounts.

</blockquote>
</details>

<a href="https://scout.docker.com/v/GHSA-j756-f273-xhp4?s=gitlab&n=jwt&ns=github.com%2Fnats-io&t=golang&vr=%3Cv1.2.3-0.20210314221642-a826c77dc9d2"><img alt="unspecified : GHSA--j756--f273--xhp4" src="https://img.shields.io/badge/GHSA--j756--f273--xhp4-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> <i>OWASP Top Ten 2017 Category A9 - Using Components with Known Vulnerabilities</i>

<table>
<tr><td>Affected range</td><td><code><v1.2.3-0.20210314221642-a826c77dc9d2</code></td></tr>
<tr><td>Fixed version</td><td><code>v1.2.3-0.20210314221642-a826c77dc9d2</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

(This advisory is canonically <https://advisories.nats.io/CVE/CVE-2021-3127.txt>)

## Problem Description

The NATS server provides for Subjects which are namespaced by Account; all Subjects are supposed to be private to an account, with an Export/Import system used to grant cross-account access to some Subjects. Some Exports are public, such that anyone can import the relevant subjects, and some Exports are private, such that the Import requires a token JWT to prove permission.

The JWT library's validation of the bindings in the Import Token incorrectly warned on mismatches, instead of outright rejecting the token.

As a result, any account can take an Import token used by any other account and re-use it for themselves because the binding to the importing account is not rejected, and use it to import *any* Subject from the Exporting account, not just the Subject referenced in the Import Token.

The NATS account-server system treats account JWTs as semi-public information, such that an attacker can easily enumerate all account JWTs and retrieve all Import Tokens from those account JWTs.

The CVE identifier should cover the JWT library repair and the nats-server containing the fixed JWT library, and any other application depending upon the fixed JWT library.


## Affected versions

#### JWT library

 * all versions prior to 2.0.1
 * fixed after nats-io/jwt#149 landed (2021-03-14)

#### NATS Server

 * Version 2 prior to 2.2.0
 + 2.0.0 through and including 2.1.9 is vulnerable
 * fixed with nats-io/nats-server@423b79440c (2021-03-14)


## Impact

In deployments with untrusted accounts able to update the Account Server with imports, a malicious account can access any Subject from an account which provides Exported Subjects.

Abuse of this facility requires the malicious actor to upload their tampered Account JWT to the Account Server, providing the service operator with a data-store which can be scanned for signs of abuse.


## Workaround

Deny access to clients to update their account JWT in the account server.


## Solution

Upgrade the JWT dependency in any application using it.

Upgrade the NATS server if using NATS Accounts (with private Exports; Account owners can create those at any time though).

Audit all accounts JWTs to scan for exploit attempts; a Python script to audit the accounts can be found at <https://gist.github.com/philpennock/09d49524ad98043ff11d8a40c2bb0d5a>.

</blockquote>
</details>

<a href="https://scout.docker.com/v/GHSA-hmm9-r2m2-qg9w?s=gitlab&n=jwt&ns=github.com%2Fnats-io&t=golang&vr=%3Cv1.1.0"><img alt="unspecified : GHSA--hmm9--r2m2--qg9w" src="https://img.shields.io/badge/GHSA--hmm9--r2m2--qg9w-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> <i>OWASP Top Ten 2017 Category A9 - Using Components with Known Vulnerabilities</i>

<table>
<tr><td>Affected range</td><td><code><v1.1.0</code></td></tr>
<tr><td>Fixed version</td><td><code>v1.1.0</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

(This advisory is canonically <https://advisories.nats.io/CVE/CVE-2020-26521.txt>)

## Problem Description

The NATS account system has an Operator trusted by the servers, which signs Accounts, and each Account can then create and sign Users within their account. The Operator should be able to safely issue Accounts to other entities which it does not fully trust.

A malicious Account could create and sign a User JWT with a state not created by the normal tooling, such that decoding by the NATS JWT library (written in Go) would attempt a nil dereference, aborting execution.

The NATS Server is known to be impacted by this.


## Affected versions

#### JWT library

 * all versions prior to 1.1.0

#### NATS Server

 * Version 2 prior to 2.1.9


## Impact

#### JWT library

 * Programs would nil dereference and panic, aborting execution by default.

#### NATS server

 * Denial of Service caused by process termination


## Workaround

If your NATS servers do not trust any accounts which are managed by untrusted entities, then malformed User credentials are unlikely to be encountered.


## Solution

Upgrade the JWT dependency in any application using it.

Upgrade the NATS server if using NATS Accounts.

</blockquote>
</details>

<a href="https://scout.docker.com/v/GHSA-2c64-vj8g-vwrq?s=gitlab&n=jwt&ns=github.com%2Fnats-io&t=golang&vr=%3Cv1.1.0"><img alt="unspecified : GHSA--2c64--vj8g--vwrq" src="https://img.shields.io/badge/GHSA--2c64--vj8g--vwrq-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> <i>OWASP Top Ten 2017 Category A9 - Using Components with Known Vulnerabilities</i>

<table>
<tr><td>Affected range</td><td><code><v1.1.0</code></td></tr>
<tr><td>Fixed version</td><td><code>v1.1.0</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

(This advisory is canonically https://advisories.nats.io/CVE/CVE-2020-26892.txt )

## Problem Description

NATS nats-server through 2020-10-07 has Incorrect Access Control because of how expired credentials are handled.

The NATS accounts system has expiration timestamps on credentials; the <https://github.com/nats-io/jwt> library had an API which encouraged misuse and an `IsRevoked()` method which misused its own API.

A new `IsClaimRevoked()` method has correct handling and the nats-server has been updated to use this. The old `IsRevoked()` method now always returns true and other client code will have to be updated to avoid calling it.

The CVE identifier should cover any application using the old JWT API, where the nats-server is one of those applications.


## Affected versions

#### JWT library

 * all versions prior to 1.1.0
 * fixed after nats-io/jwt PR 103 landed (2020-10-06)

#### NATS Server

 * Version 2 prior to 2.1.9
 + 2.0.0 through and including 2.1.8 is vulnerable.
 * fixed with nats-io/nats-server PRs 1632, 1635, 1645


## Impact

Time-based credential expiry does not work.


## Workaround

Have credentials which only expire after fixes can be deployed.


## Solution

Upgrade the JWT dependency in any application using it.

Upgrade the NATS server if using NATS Accounts.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 4" src="https://img.shields.io/badge/H-4-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>github.com/nats-io/nats-server/v2</strong> <code>2.2.2</code> (golang)</summary>

<small><code>pkg:golang/github.com/nats-io/nats-server@2.2.2#v2</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-30215?s=github&n=v2&ns=github.com%2Fnats-io%2Fnats-server&t=golang&vr=%3E%3D2.2.0%2C%3C2.10.27"><img alt="critical 9.6: CVE--2025--30215" src="https://img.shields.io/badge/CVE--2025--30215-lightgrey?label=critical%209.6&labelColor=8b1924"/></a> <i>Improper Authorization</i>

<table>
<tr><td>Affected range</td><td><code>>=2.2.0<br/><2.10.27</code></td></tr>
<tr><td>Fixed version</td><td><code>2.10.27</code></td></tr>
<tr><td>CVSS Score</td><td><code>9.6</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:N/I:H/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.053%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>17th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

## Advisory

The management of JetStream assets happens with messages in the `$JS.` subject namespace in the system account; this is partially exposed into regular accounts to allow account holders to manage their assets.

Some of the JS API requests were missing access controls, allowing any user with JS management permissions in any account to perform certain administrative actions on any JS asset in any other account. At least one of the unprotected APIs allows for data destruction. None of the affected APIs allow disclosing stream contents.

### Affected versions

NATS Server:
 * Version 2 from v2.2.0 onwards, prior to v2.11.1 or v2.10.27

-----

## Original Report

(Lightly edited to confirm some supposition and in the summary to use past tense)

### Summary

nats-server did not include authorization checks on 4 separate admin-level JetStream APIs: account purge, server remove,  account stream move, and  account stream cancel-move.

In all cases, APIs are not properly restricted to system-account users. Instead, _any_ authorized user can execute the APIs, including across account boundaries, as long as the current user merely has permission to publish on `$JS.>`.

Only the first seems to be of highest severity. All are included in this single report as they seem likely to have the same underlying root cause.

Reproduction of the `ACCOUNT.PURGE` case is below. The others are like it.


### Details & Impact

#### Issue 1: `$JS.API.ACCOUNT.PURGE.*`

Any user may perform an account purge of any other account (including their own).

Risk: total destruction of Jetstream configuration and data.


#### Issue 2: `$JS.API.SERVER.REMOVE`

Any user may remove servers from Jetstream clusters.

Risk: Loss of data redundancy, reduction of service quality.


#### Issue 3: `$JS.API.ACCOUNT.STREAM.MOVE.*.*` and `CANCEL_MOVE`

Any user may cause streams to be moved between servers.

Risk: loss of control of data provenance, reduced service quality during move, enumeration of account and/or stream names.

Similarly for `$JS.API.ACCOUNT.STREAM.CANCEL_MOVE.*.*`


#### Mitigations

It appears that users without permission to publish on `$JS.API.ACCOUNT.>` or `$JS.API.SERVER.>` are unable to execute the above APIs.

Unfortunately, in many configurations, an 'admin' user for a single account will be given permissions for `$JS.>` (or simply `>`), which allows the improper access to the system APIs above.


#### Scope of impact

Issues 1 and 3 both cross boundaries between accounts, violating promised account isolation. All 3 allow system level access to non-system account users.

While I cannot speak to what authz configurations are actually found in the wild, per the discussion in Mitigations above, it seems likely that at least some configurations are vulnerable.


#### Additional notes

It appears that `$JS.API.META.LEADER.STEPDOWN` does properly restrict to system account users. As such, this may be a pattern for how to properly authorize these other APIs.



### PoC

#### Environment

Tested with:
nats-server 2.10.26 (installed via homebrew)
nats cli 0.1.6 (installed via homebrew)
macOS 13.7.4


#### Reproduction steps

```
$ nats-server --version
nats-server: v2.10.26

$ nats --version
0.1.6

$ cat nats-server.conf
listen: '0.0.0.0:4233'
jetstream: {
  store_dir: './tmp'
}
accounts: {
  '$SYS': {
    users: [{user: 'sys', password: 'sys'}]
  },
  'TEST': {
    jetstream: true,
    users: [{user: 'a', password: 'a'}]
  },
  'TEST2': {
    jetstream: true,
    users: [{user: 'b', password: 'b'}]
  }
}

$ nats-server -c ./nats-server.conf
...
[90608] 2025/03/02 11:43:18.494663 [INF] Using configuration file: ./nats-server.conf
...
[90608] 2025/03/02 11:43:18.496395 [INF] Listening for client connections on 0.0.0.0:4233
...

# Authentication is effectively enabled by the server:
$ nats -s nats://localhost:4233 account info
nats: error: setup failed: nats: Authorization Violation

$ nats -s nats://localhost:4233 account info --user sys --password wrong
nats: error: setup failed: nats: Authorization Violation

$ nats -s nats://localhost:4233 account info --user a --password wrong
nats: error: setup failed: nats: Authorization Violation

$ nats -s nats://localhost:4233 account info --user b --password wrong
nats: error: setup failed: nats: Authorization Violation

# Valid credentials work, and users properly matched to accounts:
$ nats -s nats://localhost:4233 account info --user sys --password sys
Account Information
                      User: sys
                   Account: $SYS
...

$ nats -s nats://localhost:4233 account info --user a --password a
Account Information
                           User: a
                        Account: TEST
...

$ nats -s nats://localhost:4233 account info --user b --password b
Account Information
                           User: b
                        Account: TEST2
...

# Add a stream and messages to account TEST (user 'a'):
$ nats -s nats://localhost:4233 --user a --password a stream add stream1 --subjects s1 --storage file --defaults
Stream stream1 was created
...

$ nats -s nats://localhost:4233 --user a --password a publish s1 --count 3 "msg {{Count}}"
11:50:05 Published 5 bytes to "s1"
11:50:05 Published 5 bytes to "s1"
11:50:05 Published 5 bytes to "s1"

# Messages are correctly persisted on account TEST, and not on TEST2:
$ nats -s nats://localhost:4233 --user a --password a stream ls
╭───────────────────────────────────────────────────────────────────────────────╮
│                                    Streams                                    │
├─────────┬─────────────┬─────────────────────┬──────────┬───────┬──────────────┤
│ Name    │ Description │ Created             │ Messages │ Size  │ Last Message │
├─────────┼─────────────┼─────────────────────┼──────────┼───────┼──────────────┤
│ stream1 │             │ 2025-03-02 11:48:49 │ 3        │ 111 B │ 46.01s       │
╰─────────┴─────────────┴─────────────────────┴──────────┴───────┴──────────────╯

$ nats -s nats://localhost:4233 --user b --password b stream ls
No Streams defined

$ du -h tmp/jetstream
  0B	tmp/jetstream/TEST/streams/stream1/obs
8.0K	tmp/jetstream/TEST/streams/stream1/msgs
 16K	tmp/jetstream/TEST/streams/stream1
 16K	tmp/jetstream/TEST/streams
 16K	tmp/jetstream/TEST
 16K	tmp/jetstream

# User b (account TEST2) sends a PURGE command for account TEST (user a).
# According to the source comments, user b shouldn't even be able to purge it's own account, much less another one.
$ nats -s nats://localhost:4233 --user b --password b request '$JS.API.ACCOUNT.PURGE.TEST' ''
11:54:50 Sending request on "$JS.API.ACCOUNT.PURGE.TEST"
11:54:50 Received with rtt 1.528042ms
{"type":"io.nats.jetstream.api.v1.account_purge_response","initiated":true}

# From nats-server in response to the purge request:
[90608] 2025/03/02 11:54:50.277144 [INF] Purge request for account TEST (streams: 1, hasAccount: true)

# And indeed, the stream data is gone on account TEST:
$ du -h tmp/jetstream
  0B	tmp/jetstream

$ nats -s nats://localhost:4233 --user a --password a stream ls
No Streams defined

```

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-24450?s=github&n=v2&ns=github.com%2Fnats-io%2Fnats-server&t=golang&vr=%3E%3D2.0.0%2C%3C2.7.2"><img alt="high 8.8: CVE--2022--24450" src="https://img.shields.io/badge/CVE--2022--24450-lightgrey?label=high%208.8&labelColor=e25d68"/></a> <i>Incorrect Authorization</i>

<table>
<tr><td>Affected range</td><td><code>>=2.0.0<br/><2.7.2</code></td></tr>
<tr><td>Fixed version</td><td><code>2.7.2</code></td></tr>
<tr><td>CVSS Score</td><td><code>8.8</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.548%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>67th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

(This advisory is canonically <https://advisories.nats.io/CVE/CVE-2022-24450.txt>)

## Problem Description

NATS nats-server through 2022-02-04 has Incorrect Access Control, with unchecked ability for clients to authorize into any account, because of a coding error in a long-extant experimental feature.

A client crafting the initial protocol-level handshake could, with valid credentials for any account, specify a target account and switch into it immediately.  This includes any other tenant, and includes the System account which controls nats-server core operations.

For deployments not using multi-tenancy through NATS Accounts, there is still a vulnerability: normal users are able to choose to be in the System account.

An experimental feature to provide dynamically provisioned sandbox accounts was designed to allow a server administrator to turn on an option to allow clients to dynamically request a brand new account inline at connection time.  This feature went nowhere, but lived on in the code and was used by a number of tests; support was never added to any client libraries or to the documentation.

A bug in handling the feature meant that if someone did in fact have valid account credentials, then they could specify any other existing account and they would be assigned into that account.

Release 2.7.2 of nats-server removes the feature.
Because of the lack of client support and absence from protocol documentation, we feel this is safe operationally as well as the safest fix for the code.


## Affected versions

#### NATS Server
 * All 2.x versions up to and including 2.7.1.
 * Fixed with nats-io/nats-server: 2.7.2
 * NATS Server 1.x did not have accounts.
 * Docker image:  nats <https://hub.docker.com/_/nats>

#### NATS Streaming Server
 * All versions embedding affected NATS Server:
   + Affected: v0.15.0 up to and including v0.24.0
   + Fixed with nats-io/nats-streaming-server: 0.24.1
 * Docker image:  nats-streaming <https://hub.docker.com/_/nats-streaming>


## Impact

Existing users could act in any account, including the System account.

## Workaround

None.

## Solution

Upgrade the NATS server.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-29946?s=github&n=v2&ns=github.com%2Fnats-io%2Fnats-server&t=golang&vr=%3C2.8.2"><img alt="high 7.1: CVE--2022--29946" src="https://img.shields.io/badge/CVE--2022--29946-lightgrey?label=high%207.1&labelColor=e25d68"/></a> <i>Incorrect Authorization</i>

<table>
<tr><td>Affected range</td><td><code><2.8.2</code></td></tr>
<tr><td>Fixed version</td><td><code>2.8.2</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:L/UI:N/VC:N/VI:H/VA:N/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.108%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>30th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

NATS.io NATS Server before 2.8.2 and Streaming Server before 0.24.6 could allow a remote attacker to bypass security restrictions, caused by the failure to enforce negative user permissions in one scenario. By using a queue subscription on the wildcard, an attacker could exploit this vulnerability to allow denied subjects.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-26652?s=github&n=v2&ns=github.com%2Fnats-io%2Fnats-server&t=golang&vr=%3E%3D2.2.0%2C%3C2.7.4"><img alt="high 6.5: CVE--2022--26652" src="https://img.shields.io/badge/CVE--2022--26652-lightgrey?label=high%206.5&labelColor=e25d68"/></a> <i>Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal')</i>

<table>
<tr><td>Affected range</td><td><code>>=2.2.0<br/><2.7.4</code></td></tr>
<tr><td>Fixed version</td><td><code>2.7.4</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.684%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>71st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

(This document is canonically: <https://advisories.nats.io/CVE/CVE-2022-26652.txt>)

## Background

NATS.io is a high performance open source pub-sub distributed communication technology, built for the cloud, on-premise, IoT, and edge computing.

JetStream is the optional RAFT-based resilient persistent feature of NATS.


## Problem Description

The JetStream streams can be backed up and restored via NATS. The backup format is a tar archive file.  Inadequate checks on the filenames within the archive file permit a so-called "Zip Slip" attack in the stream restore.

NATS nats-server through 2022-03-09 (fixed in release 2.7.4) did not correctly sanitize elements of the archive file, thus a user of NATS
could cause the NATS server to write arbitrary content to an attacker-controlled filename.


## Affected versions

NATS Server:
 * 2.2.0 up to and including 2.7.3.
   + Introduced with JetStream Restore functionality
 * Fixed with nats-io/nats-server: 2.7.4
 * Docker image:  nats <https://hub.docker.com/_/nats>
 * NB users of OS package files from our releases: a change in goreleaser defaults, discovered late in the release process, moved the install directory from /usr/local/bin to /usr/bin; we are evaluating the correct solution for subsequent releases, but not recutting this release.

NATS Streaming Server
 * 0.15.0 up to and including 0.24.2
 * Fixed with nats-io/nats-streaming-server: 0.24.3
 * Embeds a nats-server, but this server is the old approach which JetStream replaces, so unlikely (but not impossible) to be
   configured with JS support


## Workarounds

 * Disable JetStream for untrusted users.
 * If only one NATS account uses JetStream, such that cross-user attacks are not an issue, and any user in that account with access to the JetStream API is fully trusted anyway, then appropriate sandboxing techniques will prevent exploit.
   + Eg, with systemd, the supplied util/nats-server-hardened.service example configuration demonstrates that NATS runs fine as an unprivileged user under ProtectSystem=strict and PrivateTmp=true restrictions; by only opening a ReadWritePaths hole for the JetStream storage area, the impact of this vulnerability is limited.


## Solution

Upgrade the NATS server to at least 2.7.4.

We fully support the util/nats-server-hardened.service configuration for running a NATS server and encourage this approach.


## Credits

This issue was reported (on 2022-03-07) to the NATS Maintainers by
Yiming Xiang, TIANJI LAB of NSFOCUS.  
Thank you / 谢谢你！


</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-47090?s=github&n=v2&ns=github.com%2Fnats-io%2Fnats-server&t=golang&vr=%3E%3D2.2.0%2C%3C2.9.23"><img alt="high : CVE--2023--47090" src="https://img.shields.io/badge/CVE--2023--47090-lightgrey?label=high%20&labelColor=e25d68"/></a> <i>Authentication Bypass by Primary Weakness</i>

<table>
<tr><td>Affected range</td><td><code>>=2.2.0<br/><2.9.23</code></td></tr>
<tr><td>Fixed version</td><td><code>2.9.23</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.212%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>44th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

## Background

NATS.io is a high performance open source pub-sub distributed communication technology, built for the cloud, on-premise, IoT, and edge computing.

NATS users exist within accounts, and once using accounts, the old authorization block is not applicable.


## Problem Description

Without any authorization rules in the nats-server, users can connect without authentication.

Before nats-server 2.2.0, all authentication and authorization rules for a nats-server lived in an "authorization" block, defining users.  With nats-server 2.2.0 all users live inside accounts.  When using the authorization block, whose syntax predates this, those users will be placed into the implicit global account, "$G".  Users inside accounts go into the newer "accounts" block.

If an "accounts" block is defined, in simple deployment scenarios this is often used only to enable client access to the system account.  When the only account added is the system account "$SYS", the nats-server would create an implicit user in "$G" and set it as the `no_auth_user` account, enabling the same "without authentication" logic as without any rules.

This preserved the ability to connect simply, and then add one authenticated login for system access.

But with an "authorization" block, this is wrong.  Users exist in the global account, with login rules.  And in simple testing, they might still connect fine without administrators seeing that authentication has been disabled.

The blind-spot on our part came from encouraging and documenting a switch to using only "accounts", instead of "authorization".

In the fixed versions, using an "authorization" block will inhibit the implicit creation of a "$G" user and setting it as the `no_auth_user` target.  In unfixed versions, just creating a second account, with no users, will also inhibit this behavior.


## Affected versions

NATS Server:
 * 2.2.0 up to and including 2.9.22 and 2.10.1
 * Fixed with nats-io/nats-server: 2.10.2 and backported to 2.9.23


## Workarounds

In the "accounts" block, define a second non-system account, leave it empty.

    accounts {
        SYS: {
            users: [
                { user: sysuser, password: makemeasandwich }
            ]
        }
        DUMMY: {}  # for security, before 2.10.2
    }
    system_account: SYS


## Solution

Any one of these:

 1. Upgrade the NATS server to at least 2.10.2 (or 2.9.23)
 2. Or define a dummy account
 3. Or complete the migration of authorization entries to be inside a named account in the "accounts" block


## Credits

Problem reported by Alex Herrington.  
Addressed publicly in a GitHub Discussion prior to this advisory.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-32026?s=github&n=v2&ns=github.com%2Fnats-io%2Fnats-server&t=golang&vr=%3C2.2.3"><img alt="low : CVE--2021--32026" src="https://img.shields.io/badge/CVE--2021--32026-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code><2.2.3</code></td></tr>
<tr><td>Fixed version</td><td><code>2.2.3</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

(This advisory is canonically <https://advisories.nats.io/CVE/CVE-2021-32026.txt>)

### Problem Description

The NATS server by default uses a restricted set of modern ciphersuites for TLS.  This selection can be overridden through configuration. The defaults include just RSA and ECDSA with either AES/GCM with a SHA2 digest or ChaCha20/Poly1305.

The configuration system allows for extensive use of CLI options to override configuration settings.  When using these to set a key/cert for TLS, the restricted ciphersuite settings were lost, enabling all ciphersuites supported by Go by default.

None of these additional ciphersuites are broken, so the NATS maintainers have fixed this in public git and the next release is not being hurried, nor is this security advisory embargoed.


### Affected versions

NATS Server:
 * All versions prior to 2.2.3
 * fixed with nats-io/nats-server commit ffccc2e1bd (2021-04-29)


### Impact

If a server administrator chooses to start the nats-server with TLS configuration parameters provided on the command-line, then clients can negotiate TLS ciphersuites which were not expected.


### Workaround

Use a configuration file to set the TLS parameters instead of command-line options.


### Solution

Upgrade the NATS server.


### Credits

This issue was identified and reported by SimCorp.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 3" src="https://img.shields.io/badge/H-3-e25d68"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>openssl</strong> <code>1.1.1j-r0</code> (apk)</summary>

<small><code>pkg:apk/alpine/openssl@1.1.1j-r0?os_name=alpine&os_version=3.13</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2021-3711?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.13&vr=%3C1.1.1l-r0"><img alt="critical : CVE--2021--3711" src="https://img.shields.io/badge/CVE--2021--3711-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.1.1l-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.1.1l-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>2.352%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>84th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-0778?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.13&vr=%3C1.1.1n-r0"><img alt="high : CVE--2022--0778" src="https://img.shields.io/badge/CVE--2022--0778-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.1.1n-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.1.1n-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>7.070%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>91st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-3712?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.13&vr=%3C1.1.1l-r0"><img alt="high : CVE--2021--3712" src="https://img.shields.io/badge/CVE--2021--3712-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.1.1l-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.1.1l-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.486%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>65th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-3450?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.13&vr=%3C1.1.1k-r0"><img alt="high : CVE--2021--3450" src="https://img.shields.io/badge/CVE--2021--3450-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.1.1k-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.1.1k-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.568%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>68th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-3449?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.13&vr=%3C1.1.1k-r0"><img alt="medium : CVE--2021--3449" src="https://img.shields.io/badge/CVE--2021--3449-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.1.1k-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.1.1k-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>10.188%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>93rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-2097?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.13&vr=%3C1.1.1q-r0"><img alt="medium : CVE--2022--2097" src="https://img.shields.io/badge/CVE--2022--2097-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.1.1q-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.1.1q-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.407%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>60th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>apk-tools</strong> <code>2.12.1-r0</code> (apk)</summary>

<small><code>pkg:apk/alpine/apk-tools@2.12.1-r0?os_name=alpine&os_version=3.13</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2021-36159?s=alpine&n=apk-tools&ns=alpine&t=apk&osn=alpine&osv=3.13&vr=%3C2.12.6-r0"><img alt="critical : CVE--2021--36159" src="https://img.shields.io/badge/CVE--2021--36159-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code><2.12.6-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>2.12.6-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.573%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>68th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-30139?s=alpine&n=apk-tools&ns=alpine&t=apk&osn=alpine&osv=3.13&vr=%3C2.12.5-r0"><img alt="high : CVE--2021--30139" src="https://img.shields.io/badge/CVE--2021--30139-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><2.12.5-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>2.12.5-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.192%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>41st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>zlib</strong> <code>1.2.11-r3</code> (apk)</summary>

<small><code>pkg:apk/alpine/zlib@1.2.11-r3?os_name=alpine&os_version=3.13</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2022-37434?s=alpine&n=zlib&ns=alpine&t=apk&osn=alpine&osv=3.13&vr=%3C1.2.12-r2"><img alt="critical : CVE--2022--37434" src="https://img.shields.io/badge/CVE--2022--37434-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.2.12-r2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.2.12-r2</code></td></tr>
<tr><td>EPSS Score</td><td><code>92.470%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>100th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2018-25032?s=alpine&n=zlib&ns=alpine&t=apk&osn=alpine&osv=3.13&vr=%3C1.2.12-r0"><img alt="high : CVE--2018--25032" src="https://img.shields.io/badge/CVE--2018--25032-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.2.12-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.2.12-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.093%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>github.com/nats-io/jwt</strong> <code>1.2.2</code> (golang)</summary>

<small><code>pkg:golang/github.com/nats-io/jwt@1.2.2</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2021-3127?s=github&n=jwt&ns=github.com%2Fnats-io&t=golang&vr=%3C%3D1.2.2"><img alt="critical : CVE--2021--3127" src="https://img.shields.io/badge/CVE--2021--3127-lightgrey?label=critical%20&labelColor=8b1924"/></a> <i>Incorrect Authorization</i>

<table>
<tr><td>Affected range</td><td><code><=1.2.2</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.290%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>52nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

(This advisory is canonically <https://advisories.nats.io/CVE/CVE-2021-3127.txt>)

## Problem Description

The NATS server provides for Subjects which are namespaced by Account; all Subjects are supposed to be private to an account, with an Export/Import system used to grant cross-account access to some Subjects.  Some Exports are public, such that anyone can import the
relevant subjects, and some Exports are private, such that the Import requires a token JWT to prove permission.

The JWT library's validation of the bindings in the Import Token incorrectly warned on mismatches, instead of outright rejecting the token.

As a result, any account can take an Import token used by any other account and re-use it for themselves because the binding to the
importing account is not rejected, and use it to import *any* Subject from the Exporting account, not just the Subject referenced in the Import Token.

The NATS account-server system treats account JWTs as semi-public information, such that an attacker can easily enumerate all account JWTs and retrieve all Import Tokens from those account JWTs.

The CVE identifier should cover the JWT library repair and the nats-server containing the fixed JWT library, and any other application depending upon the fixed JWT library.


## Affected versions

#### JWT library

 * all versions prior to 2.0.1
 * fixed after nats-io/jwt#149 landed (2021-03-14)

#### NATS Server

 * Version 2 prior to 2.2.0
   + 2.0.0 through and including 2.1.9 are vulnerable
 * fixed with nats-io/nats-server@423b79440c (2021-03-14)


## Impact

In deployments with untrusted accounts able to update the Account Server with imports, a malicious account can access any Subject from an account which provides Exported Subjects.

Abuse of this facility requires the malicious actor to upload their tampered Account JWT to the Account Server, providing the service operator with a data-store which can be scanned for signs of abuse.


## Workaround

Deny access to clients to update their account JWT in the account server.


## Solution

Upgrade the JWT dependency in any application using it.

Upgrade the NATS server if using NATS Accounts (with private Exports; Account owners can create those at any time though).

Audit all accounts JWTs to scan for exploit attempts; a Python script to audit the accounts can be found at <https://gist.github.com/philpennock/09d49524ad98043ff11d8a40c2bb0d5a>.

</blockquote>
</details>

<a href="https://scout.docker.com/v/GHSA-j756-f273-xhp4?s=gitlab&n=jwt&ns=github.com%2Fnats-io&t=golang&vr=%3Cv1.2.3-0.20210314221642-a826c77dc9d2"><img alt="unspecified : GHSA--j756--f273--xhp4" src="https://img.shields.io/badge/GHSA--j756--f273--xhp4-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> <i>OWASP Top Ten 2017 Category A9 - Using Components with Known Vulnerabilities</i>

<table>
<tr><td>Affected range</td><td><code><v1.2.3-0.20210314221642-a826c77dc9d2</code></td></tr>
<tr><td>Fixed version</td><td><code>v1.2.3-0.20210314221642-a826c77dc9d2</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

(This advisory is canonically <https://advisories.nats.io/CVE/CVE-2021-3127.txt>)

## Problem Description

The NATS server provides for Subjects which are namespaced by Account; all Subjects are supposed to be private to an account, with an Export/Import system used to grant cross-account access to some Subjects. Some Exports are public, such that anyone can import the relevant subjects, and some Exports are private, such that the Import requires a token JWT to prove permission.

The JWT library's validation of the bindings in the Import Token incorrectly warned on mismatches, instead of outright rejecting the token.

As a result, any account can take an Import token used by any other account and re-use it for themselves because the binding to the importing account is not rejected, and use it to import *any* Subject from the Exporting account, not just the Subject referenced in the Import Token.

The NATS account-server system treats account JWTs as semi-public information, such that an attacker can easily enumerate all account JWTs and retrieve all Import Tokens from those account JWTs.

The CVE identifier should cover the JWT library repair and the nats-server containing the fixed JWT library, and any other application depending upon the fixed JWT library.


## Affected versions

#### JWT library

 * all versions prior to 2.0.1
 * fixed after nats-io/jwt#149 landed (2021-03-14)

#### NATS Server

 * Version 2 prior to 2.2.0
 + 2.0.0 through and including 2.1.9 is vulnerable
 * fixed with nats-io/nats-server@423b79440c (2021-03-14)


## Impact

In deployments with untrusted accounts able to update the Account Server with imports, a malicious account can access any Subject from an account which provides Exported Subjects.

Abuse of this facility requires the malicious actor to upload their tampered Account JWT to the Account Server, providing the service operator with a data-store which can be scanned for signs of abuse.


## Workaround

Deny access to clients to update their account JWT in the account server.


## Solution

Upgrade the JWT dependency in any application using it.

Upgrade the NATS server if using NATS Accounts (with private Exports; Account owners can create those at any time though).

Audit all accounts JWTs to scan for exploit attempts; a Python script to audit the accounts can be found at <https://gist.github.com/philpennock/09d49524ad98043ff11d8a40c2bb0d5a>.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>github.com/nats-io/jwt</strong> <code>1.1.0</code> (golang)</summary>

<small><code>pkg:golang/github.com/nats-io/jwt@1.1.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2021-3127?s=github&n=jwt&ns=github.com%2Fnats-io&t=golang&vr=%3C%3D1.2.2"><img alt="critical : CVE--2021--3127" src="https://img.shields.io/badge/CVE--2021--3127-lightgrey?label=critical%20&labelColor=8b1924"/></a> <i>Incorrect Authorization</i>

<table>
<tr><td>Affected range</td><td><code><=1.2.2</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.290%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>52nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

(This advisory is canonically <https://advisories.nats.io/CVE/CVE-2021-3127.txt>)

## Problem Description

The NATS server provides for Subjects which are namespaced by Account; all Subjects are supposed to be private to an account, with an Export/Import system used to grant cross-account access to some Subjects.  Some Exports are public, such that anyone can import the
relevant subjects, and some Exports are private, such that the Import requires a token JWT to prove permission.

The JWT library's validation of the bindings in the Import Token incorrectly warned on mismatches, instead of outright rejecting the token.

As a result, any account can take an Import token used by any other account and re-use it for themselves because the binding to the
importing account is not rejected, and use it to import *any* Subject from the Exporting account, not just the Subject referenced in the Import Token.

The NATS account-server system treats account JWTs as semi-public information, such that an attacker can easily enumerate all account JWTs and retrieve all Import Tokens from those account JWTs.

The CVE identifier should cover the JWT library repair and the nats-server containing the fixed JWT library, and any other application depending upon the fixed JWT library.


## Affected versions

#### JWT library

 * all versions prior to 2.0.1
 * fixed after nats-io/jwt#149 landed (2021-03-14)

#### NATS Server

 * Version 2 prior to 2.2.0
   + 2.0.0 through and including 2.1.9 are vulnerable
 * fixed with nats-io/nats-server@423b79440c (2021-03-14)


## Impact

In deployments with untrusted accounts able to update the Account Server with imports, a malicious account can access any Subject from an account which provides Exported Subjects.

Abuse of this facility requires the malicious actor to upload their tampered Account JWT to the Account Server, providing the service operator with a data-store which can be scanned for signs of abuse.


## Workaround

Deny access to clients to update their account JWT in the account server.


## Solution

Upgrade the JWT dependency in any application using it.

Upgrade the NATS server if using NATS Accounts (with private Exports; Account owners can create those at any time though).

Audit all accounts JWTs to scan for exploit attempts; a Python script to audit the accounts can be found at <https://gist.github.com/philpennock/09d49524ad98043ff11d8a40c2bb0d5a>.

</blockquote>
</details>

<a href="https://scout.docker.com/v/GHSA-j756-f273-xhp4?s=gitlab&n=jwt&ns=github.com%2Fnats-io&t=golang&vr=%3Cv1.2.3-0.20210314221642-a826c77dc9d2"><img alt="unspecified : GHSA--j756--f273--xhp4" src="https://img.shields.io/badge/GHSA--j756--f273--xhp4-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> <i>OWASP Top Ten 2017 Category A9 - Using Components with Known Vulnerabilities</i>

<table>
<tr><td>Affected range</td><td><code><v1.2.3-0.20210314221642-a826c77dc9d2</code></td></tr>
<tr><td>Fixed version</td><td><code>v1.2.3-0.20210314221642-a826c77dc9d2</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

(This advisory is canonically <https://advisories.nats.io/CVE/CVE-2021-3127.txt>)

## Problem Description

The NATS server provides for Subjects which are namespaced by Account; all Subjects are supposed to be private to an account, with an Export/Import system used to grant cross-account access to some Subjects. Some Exports are public, such that anyone can import the relevant subjects, and some Exports are private, such that the Import requires a token JWT to prove permission.

The JWT library's validation of the bindings in the Import Token incorrectly warned on mismatches, instead of outright rejecting the token.

As a result, any account can take an Import token used by any other account and re-use it for themselves because the binding to the importing account is not rejected, and use it to import *any* Subject from the Exporting account, not just the Subject referenced in the Import Token.

The NATS account-server system treats account JWTs as semi-public information, such that an attacker can easily enumerate all account JWTs and retrieve all Import Tokens from those account JWTs.

The CVE identifier should cover the JWT library repair and the nats-server containing the fixed JWT library, and any other application depending upon the fixed JWT library.


## Affected versions

#### JWT library

 * all versions prior to 2.0.1
 * fixed after nats-io/jwt#149 landed (2021-03-14)

#### NATS Server

 * Version 2 prior to 2.2.0
 + 2.0.0 through and including 2.1.9 is vulnerable
 * fixed with nats-io/nats-server@423b79440c (2021-03-14)


## Impact

In deployments with untrusted accounts able to update the Account Server with imports, a malicious account can access any Subject from an account which provides Exported Subjects.

Abuse of this facility requires the malicious actor to upload their tampered Account JWT to the Account Server, providing the service operator with a data-store which can be scanned for signs of abuse.


## Workaround

Deny access to clients to update their account JWT in the account server.


## Solution

Upgrade the JWT dependency in any application using it.

Upgrade the NATS server if using NATS Accounts (with private Exports; Account owners can create those at any time though).

Audit all accounts JWTs to scan for exploit attempts; a Python script to audit the accounts can be found at <https://gist.github.com/philpennock/09d49524ad98043ff11d8a40c2bb0d5a>.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 12" src="https://img.shields.io/badge/H-12-e25d68"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>busybox</strong> <code>1.32.1-r3</code> (apk)</summary>

<small><code>pkg:apk/alpine/busybox@1.32.1-r3?os_name=alpine&os_version=3.13</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2022-28391?s=alpine&n=busybox&ns=alpine&t=apk&osn=alpine&osv=3.13&vr=%3C1.32.1-r8"><img alt="high : CVE--2022--28391" src="https://img.shields.io/badge/CVE--2022--28391-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.32.1-r8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.32.1-r8</code></td></tr>
<tr><td>EPSS Score</td><td><code>3.543%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>87th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-30065?s=alpine&n=busybox&ns=alpine&t=apk&osn=alpine&osv=3.13&vr=%3C1.32.1-r9"><img alt="high : CVE--2022--30065" src="https://img.shields.io/badge/CVE--2022--30065-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.32.1-r9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.32.1-r9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.636%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>70th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-28831?s=alpine&n=busybox&ns=alpine&t=apk&osn=alpine&osv=3.13&vr=%3C1.32.1-r4"><img alt="high : CVE--2021--28831" src="https://img.shields.io/badge/CVE--2021--28831-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.32.1-r4</code></td></tr>
<tr><td>Fixed version</td><td><code>1.32.1-r4</code></td></tr>
<tr><td>EPSS Score</td><td><code>1.019%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>77th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-42386?s=alpine&n=busybox&ns=alpine&t=apk&osn=alpine&osv=3.13&vr=%3C1.32.1-r7"><img alt="high : CVE--2021--42386" src="https://img.shields.io/badge/CVE--2021--42386-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.32.1-r7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.32.1-r7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.294%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>52nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-42385?s=alpine&n=busybox&ns=alpine&t=apk&osn=alpine&osv=3.13&vr=%3C1.32.1-r7"><img alt="high : CVE--2021--42385" src="https://img.shields.io/badge/CVE--2021--42385-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.32.1-r7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.32.1-r7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.294%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>52nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-42384?s=alpine&n=busybox&ns=alpine&t=apk&osn=alpine&osv=3.13&vr=%3C1.32.1-r7"><img alt="high : CVE--2021--42384" src="https://img.shields.io/badge/CVE--2021--42384-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.32.1-r7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.32.1-r7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.237%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>47th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-42383?s=alpine&n=busybox&ns=alpine&t=apk&osn=alpine&osv=3.13&vr=%3C1.32.1-r7"><img alt="high : CVE--2021--42383" src="https://img.shields.io/badge/CVE--2021--42383-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.32.1-r7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.32.1-r7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.300%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>53rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-42382?s=alpine&n=busybox&ns=alpine&t=apk&osn=alpine&osv=3.13&vr=%3C1.32.1-r7"><img alt="high : CVE--2021--42382" src="https://img.shields.io/badge/CVE--2021--42382-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.32.1-r7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.32.1-r7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.321%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>55th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-42381?s=alpine&n=busybox&ns=alpine&t=apk&osn=alpine&osv=3.13&vr=%3C1.32.1-r7"><img alt="high : CVE--2021--42381" src="https://img.shields.io/badge/CVE--2021--42381-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.32.1-r7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.32.1-r7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.321%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>55th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-42380?s=alpine&n=busybox&ns=alpine&t=apk&osn=alpine&osv=3.13&vr=%3C1.32.1-r7"><img alt="high : CVE--2021--42380" src="https://img.shields.io/badge/CVE--2021--42380-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.32.1-r7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.32.1-r7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.453%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>63rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-42379?s=alpine&n=busybox&ns=alpine&t=apk&osn=alpine&osv=3.13&vr=%3C1.32.1-r7"><img alt="high : CVE--2021--42379" src="https://img.shields.io/badge/CVE--2021--42379-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.32.1-r7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.32.1-r7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.237%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>47th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-42378?s=alpine&n=busybox&ns=alpine&t=apk&osn=alpine&osv=3.13&vr=%3C1.32.1-r7"><img alt="high : CVE--2021--42378" src="https://img.shields.io/badge/CVE--2021--42378-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.32.1-r7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.32.1-r7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.237%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>47th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-42375?s=alpine&n=busybox&ns=alpine&t=apk&osn=alpine&osv=3.13&vr=%3C1.32.1-r7"><img alt="medium : CVE--2021--42375" src="https://img.shields.io/badge/CVE--2021--42375-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.32.1-r7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.32.1-r7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.061%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>19th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-42374?s=alpine&n=busybox&ns=alpine&t=apk&osn=alpine&osv=3.13&vr=%3C1.32.1-r7"><img alt="medium : CVE--2021--42374" src="https://img.shields.io/badge/CVE--2021--42374-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.32.1-r7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.32.1-r7</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.054%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>17th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/ALPINE-13661?s=alpine&n=busybox&ns=alpine&t=apk&osn=alpine&osv=3.13&vr=%3C1.32.1-r8"><img alt="unspecified : ALPINE--13661" src="https://img.shields.io/badge/ALPINE--13661-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.32.1-r8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.32.1-r8</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 6" src="https://img.shields.io/badge/H-6-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 2" src="https://img.shields.io/badge/L-2-fce1a9"/> <!-- unspecified: 0 --><strong>github.com/nats-io/nats-server/v2</strong> <code>2.1.9</code> (golang)</summary>

<small><code>pkg:golang/github.com/nats-io/nats-server@2.1.9#v2</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2022-24450?s=github&n=v2&ns=github.com%2Fnats-io%2Fnats-server&t=golang&vr=%3E%3D2.0.0%2C%3C2.7.2"><img alt="high 8.8: CVE--2022--24450" src="https://img.shields.io/badge/CVE--2022--24450-lightgrey?label=high%208.8&labelColor=e25d68"/></a> <i>Incorrect Authorization</i>

<table>
<tr><td>Affected range</td><td><code>>=2.0.0<br/><2.7.2</code></td></tr>
<tr><td>Fixed version</td><td><code>2.7.2</code></td></tr>
<tr><td>CVSS Score</td><td><code>8.8</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.548%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>67th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

(This advisory is canonically <https://advisories.nats.io/CVE/CVE-2022-24450.txt>)

## Problem Description

NATS nats-server through 2022-02-04 has Incorrect Access Control, with unchecked ability for clients to authorize into any account, because of a coding error in a long-extant experimental feature.

A client crafting the initial protocol-level handshake could, with valid credentials for any account, specify a target account and switch into it immediately.  This includes any other tenant, and includes the System account which controls nats-server core operations.

For deployments not using multi-tenancy through NATS Accounts, there is still a vulnerability: normal users are able to choose to be in the System account.

An experimental feature to provide dynamically provisioned sandbox accounts was designed to allow a server administrator to turn on an option to allow clients to dynamically request a brand new account inline at connection time.  This feature went nowhere, but lived on in the code and was used by a number of tests; support was never added to any client libraries or to the documentation.

A bug in handling the feature meant that if someone did in fact have valid account credentials, then they could specify any other existing account and they would be assigned into that account.

Release 2.7.2 of nats-server removes the feature.
Because of the lack of client support and absence from protocol documentation, we feel this is safe operationally as well as the safest fix for the code.


## Affected versions

#### NATS Server
 * All 2.x versions up to and including 2.7.1.
 * Fixed with nats-io/nats-server: 2.7.2
 * NATS Server 1.x did not have accounts.
 * Docker image:  nats <https://hub.docker.com/_/nats>

#### NATS Streaming Server
 * All versions embedding affected NATS Server:
   + Affected: v0.15.0 up to and including v0.24.0
   + Fixed with nats-io/nats-streaming-server: 0.24.1
 * Docker image:  nats-streaming <https://hub.docker.com/_/nats-streaming>


## Impact

Existing users could act in any account, including the System account.

## Workaround

None.

## Solution

Upgrade the NATS server.

</blockquote>
</details>

<a href="https://scout.docker.com/v/GHSA-j756-f273-xhp4?s=github&n=v2&ns=github.com%2Fnats-io%2Fnats-server&t=golang&vr=%3C2.2.0"><img alt="high 7.5: GHSA--j756--f273--xhp4" src="https://img.shields.io/badge/GHSA--j756--f273--xhp4-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Improper Handling of Exceptional Conditions</i>

<table>
<tr><td>Affected range</td><td><code><2.2.0</code></td></tr>
<tr><td>Fixed version</td><td><code>2.2.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

(This advisory is canonically <https://advisories.nats.io/CVE/CVE-2021-3127.txt>)

## Problem Description

The NATS server provides for Subjects which are namespaced by Account; all Subjects are supposed to be private to an account, with an Export/Import system used to grant cross-account access to some Subjects.  Some Exports are public, such that anyone can import the relevant subjects, and some Exports are private, such that the Import requires a token JWT to prove permission.

The JWT library's validation of the bindings in the Import Token incorrectly warned on mismatches, instead of outright rejecting the token.

As a result, any account can take an Import token used by any other account and re-use it for themselves because the binding to the importing account is not rejected, and use it to import *any* Subject from the Exporting account, not just the Subject referenced in the Import Token.

The NATS account-server system treats account JWTs as semi-public information, such that an attacker can easily enumerate all account JWTs and retrieve all Import Tokens from those account JWTs.

The CVE identifier should cover the JWT library repair and the nats-server containing the fixed JWT library, and any other application depending upon the fixed JWT library.


## Affected versions

#### JWT library

 * all versions prior to 2.0.1
 * fixed after nats-io/jwt#149 landed (2021-03-14)

#### NATS Server

 * Version 2 prior to 2.2.0
   + 2.0.0 through and including 2.1.9 are vulnerable
 * fixed with nats-io/nats-server@423b79440c (2021-03-14)


## Impact

In deployments with untrusted accounts able to update the Account Server with imports, a malicious account can access any Subject from an account which provides Exported Subjects.

Abuse of this facility requires the malicious actor to upload their tampered Account JWT to the Account Server, providing the service operator with a data-store which can be scanned for signs of abuse.


## Workaround

Deny access to clients to update their account JWT in the account server.


## Solution

Upgrade the JWT dependency in any application using it.

Upgrade the NATS server if using NATS Accounts (with private Exports; Account owners can create those at any time though).

Audit all accounts JWTs to scan for exploit attempts; a Python script to audit the accounts can be found at <https://gist.github.com/philpennock/09d49524ad98043ff11d8a40c2bb0d5a>.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-3127?s=github&n=v2&ns=github.com%2Fnats-io%2Fnats-server&t=golang&vr=%3C2.2.0"><img alt="high 7.5: CVE--2021--3127" src="https://img.shields.io/badge/CVE--2021--3127-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Improper Access Control</i>

<table>
<tr><td>Affected range</td><td><code><2.2.0</code></td></tr>
<tr><td>Fixed version</td><td><code>2.2.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.290%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>52nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

NATS Server (github.com/nats-io/nats-server/v2/server) 2.x before 2.2.0 and JWT library (github.com/nats-io/jwt/v2) before 2.0.1 have Incorrect Access Control because Import Token bindings are mishandled.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2020-28466?s=github&n=v2&ns=github.com%2Fnats-io%2Fnats-server&t=golang&vr=%3C2.2.0"><img alt="high 7.5: CVE--2020--28466" src="https://img.shields.io/badge/CVE--2020--28466-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Uncontrolled Resource Consumption</i>

<table>
<tr><td>Affected range</td><td><code><2.2.0</code></td></tr>
<tr><td>Fixed version</td><td><code>2.2.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>8.427%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>92nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

This affects all versions of package github.com/nats-io/nats-server/server. Untrusted accounts are able to crash the server using configs that represent a service export/import cycles. Disclaimer from the maintainers - Running a NATS service which is exposed to untrusted users presents a heightened risk. Any remote execution flaw or equivalent seriousness, or denial-of-service by unauthenticated users, will lead to prompt releases by the NATS maintainers. Fixes for denial of service issues with no threat of remote execution, when limited to account holders, are likely to just be committed to the main development branch with no special attention. Those who are running such services are encouraged to build regularly from git.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2019-13126?s=github&n=v2&ns=github.com%2Fnats-io%2Fnats-server&t=golang&vr=%3C2.2.0"><img alt="high 7.5: CVE--2019--13126" src="https://img.shields.io/badge/CVE--2019--13126-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Integer Overflow or Wraparound</i>

<table>
<tr><td>Affected range</td><td><code><2.2.0</code></td></tr>
<tr><td>Fixed version</td><td><code>2.2.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.678%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>71st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An integer overflow in NATS Server before 2.2.0 allows a remote attacker to crash the server by sending a crafted request.

### Specific Go Packages Affected
github.com/nats-io/nats-server/v2/server

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-29946?s=github&n=v2&ns=github.com%2Fnats-io%2Fnats-server&t=golang&vr=%3C2.8.2"><img alt="high 7.1: CVE--2022--29946" src="https://img.shields.io/badge/CVE--2022--29946-lightgrey?label=high%207.1&labelColor=e25d68"/></a> <i>Incorrect Authorization</i>

<table>
<tr><td>Affected range</td><td><code><2.8.2</code></td></tr>
<tr><td>Fixed version</td><td><code>2.8.2</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:L/UI:N/VC:N/VI:H/VA:N/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.108%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>30th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

NATS.io NATS Server before 2.8.2 and Streaming Server before 0.24.6 could allow a remote attacker to bypass security restrictions, caused by the failure to enforce negative user permissions in one scenario. By using a queue subscription on the wildcard, an attacker could exploit this vulnerability to allow denied subjects.

</blockquote>
</details>

<a href="https://scout.docker.com/v/GHSA-gwj5-3vfq-q992?s=github&n=v2&ns=github.com%2Fnats-io%2Fnats-server&t=golang&vr=%3C2.2.0"><img alt="low 7.5: GHSA--gwj5--3vfq--q992" src="https://img.shields.io/badge/GHSA--gwj5--3vfq--q992-lightgrey?label=low%207.5&labelColor=fce1a9"/></a> <i>Uncontrolled Resource Consumption</i>

<table>
<tr><td>Affected range</td><td><code><2.2.0</code></td></tr>
<tr><td>Fixed version</td><td><code>2.2.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

(This advisory is canonically <https://advisories.nats.io/CVE/CVE-2020-28466.txt>)

## Problem Description

An export/import cycle between accounts could crash the nats-server, after consuming CPU and memory.

This issue was fixed publicly in <https://github.com/nats-io/nats-server/pull/1731> in November 2020.

The need to call this out as a security issue was highlighted by `snyk.io` and we are grateful for their assistance in doing so.

Organizations which run a NATS service providing access to accounts run by untrusted third parties are affected.
See below for an important caveat if running such a service.


## Affected versions

#### NATS Server

 * Version 2 prior to 2.2.0
   + 2.0.0 through and including 2.1.9 are vulnerable.
 * fixed with nats-io/nats-server PR 1731, commit 2e3c226729


## Impact

The nats-server could be killed, after consuming resources.


## Workaround

The import cycle requires at least two accounts to work; if you have open account sign-up, then restricting new account sign-up might hinder an attacker.


## Solution

Upgrade the nats-server.


## Caveat on NATS with untrusted users

Running a NATS service which is exposed to untrusted users presents a heightened risk.

Any remote execution flaw or equivalent seriousness, or denial-of-service by unauthenticated users, will lead to prompt releases by the NATS maintainers.

Fixes for denial of service issues with no threat of remote execution, when limited to account holders, are likely to just be committed to the main development branch with no special attention.

Those who are running such services are encouraged to build regularly from git.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-32026?s=github&n=v2&ns=github.com%2Fnats-io%2Fnats-server&t=golang&vr=%3C2.2.3"><img alt="low : CVE--2021--32026" src="https://img.shields.io/badge/CVE--2021--32026-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code><2.2.3</code></td></tr>
<tr><td>Fixed version</td><td><code>2.2.3</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

(This advisory is canonically <https://advisories.nats.io/CVE/CVE-2021-32026.txt>)

### Problem Description

The NATS server by default uses a restricted set of modern ciphersuites for TLS.  This selection can be overridden through configuration. The defaults include just RSA and ECDSA with either AES/GCM with a SHA2 digest or ChaCha20/Poly1305.

The configuration system allows for extensive use of CLI options to override configuration settings.  When using these to set a key/cert for TLS, the restricted ciphersuite settings were lost, enabling all ciphersuites supported by Go by default.

None of these additional ciphersuites are broken, so the NATS maintainers have fixed this in public git and the next release is not being hurried, nor is this security advisory embargoed.


### Affected versions

NATS Server:
 * All versions prior to 2.2.3
 * fixed with nats-io/nats-server commit ffccc2e1bd (2021-04-29)


### Impact

If a server administrator chooses to start the nats-server with TLS configuration parameters provided on the command-line, then clients can negotiate TLS ciphersuites which were not expected.


### Workaround

Use a configuration file to set the TLS parameters instead of command-line options.


### Solution

Upgrade the NATS server.


### Credits

This issue was identified and reported by SimCorp.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 4" src="https://img.shields.io/badge/H-4-e25d68"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/crypto</strong> <code>0.0.0-20200622213623-75b288015ac9</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/crypto@0.0.0-20200622213623-75b288015ac9</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2022-30636?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.0.0-20220525230936-793ad666bf5e"><img alt="high : CVE--2022--30636" src="https://img.shields.io/badge/CVE--2022--30636-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><0.0.0-20220525230936-793ad666bf5e</code></td></tr>
<tr><td>Fixed version</td><td><code>0.0.0-20220525230936-793ad666bf5e</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.247%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>48th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

httpTokenCacheKey uses path.Base to extract the expected HTTP-01 token value to lookup in the DirCache implementation. On Windows, path.Base acts differently to filepath.Base, since Windows uses a different path separator (\ vs. /), allowing a user to provide a relative path, i.e. .well-known/acme-challenge/..\..\asd becomes ..\..\asd. The extracted path is then suffixed with +http-01, joined with the cache directory, and opened.

Since the controlled path is suffixed with +http-01 before opening, the impact of this is significantly limited, since it only allows reading arbitrary files on the system if and only if they have this suffix.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-27191?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.0.0-20220314234659-1baeb1ce4c0b"><img alt="high 7.5: CVE--2022--27191" src="https://img.shields.io/badge/CVE--2022--27191-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Use of a Broken or Risky Cryptographic Algorithm</i>

<table>
<tr><td>Affected range</td><td><code><0.0.0-20220314234659-1baeb1ce4c0b</code></td></tr>
<tr><td>Fixed version</td><td><code>0.0.0-20220314234659-1baeb1ce4c0b</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.089%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>26th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The golang.org/x/crypto/ssh package before 0.0.0-20220314234659-1baeb1ce4c0b for Go allows an attacker to crash a server in certain circumstances involving AddHostKey.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-43565?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.0.0-20211202192323-5770296d904e"><img alt="high 7.5: CVE--2021--43565" src="https://img.shields.io/badge/CVE--2021--43565-lightgrey?label=high%207.5&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><0.0.0-20211202192323-5770296d904e</code></td></tr>
<tr><td>Fixed version</td><td><code>0.0.0-20211202192323-5770296d904e</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.022%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The x/crypto/ssh package before 0.0.0-20211202192323-5770296d904e of golang.org/x/crypto allows an unauthenticated attacker to panic an SSH server. When using AES-GCM or ChaCha20Poly1305, consuming a malformed packet which contains an empty plaintext causes a panic.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2020-29652?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.0.0-20201216223049-8b5274cf687f"><img alt="high 7.5: CVE--2020--29652" src="https://img.shields.io/badge/CVE--2020--29652-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>NULL Pointer Dereference</i>

<table>
<tr><td>Affected range</td><td><code><0.0.0-20201216223049-8b5274cf687f</code></td></tr>
<tr><td>Fixed version</td><td><code>0.0.0-20201216223049-8b5274cf687f</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.069%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A nil pointer dereference in the golang.org/x/crypto/ssh component through v0.0.0-20201203163018-be400aefbc4c for Go allows remote attackers to cause a denial of service against SSH servers. An attacker can craft an authentication request message for the `gssapi-with-mic` method which will cause NewServerConn to panic via a nil pointer dereference if ServerConfig.GSSAPIWithMICConfig is nil.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-48795?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.0.0-20231218163308-9d2ee975ef9f"><img alt="medium 5.9: CVE--2023--48795" src="https://img.shields.io/badge/CVE--2023--48795-lightgrey?label=medium%205.9&labelColor=fbb552"/></a> <i>Insufficient Verification of Data Authenticity</i>

<table>
<tr><td>Affected range</td><td><code><0.0.0-20231218163308-9d2ee975ef9f</code></td></tr>
<tr><td>Fixed version</td><td><code>0.0.0-20231218163308-9d2ee975ef9f</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.9</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>55.964%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>98th percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 4" src="https://img.shields.io/badge/H-4-e25d68"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/crypto</strong> <code>0.0.0-20200323165209-0ec3e9974c59</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/crypto@0.0.0-20200323165209-0ec3e9974c59</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2022-30636?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.0.0-20220525230936-793ad666bf5e"><img alt="high : CVE--2022--30636" src="https://img.shields.io/badge/CVE--2022--30636-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><0.0.0-20220525230936-793ad666bf5e</code></td></tr>
<tr><td>Fixed version</td><td><code>0.0.0-20220525230936-793ad666bf5e</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.247%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>48th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

httpTokenCacheKey uses path.Base to extract the expected HTTP-01 token value to lookup in the DirCache implementation. On Windows, path.Base acts differently to filepath.Base, since Windows uses a different path separator (\ vs. /), allowing a user to provide a relative path, i.e. .well-known/acme-challenge/..\..\asd becomes ..\..\asd. The extracted path is then suffixed with +http-01, joined with the cache directory, and opened.

Since the controlled path is suffixed with +http-01 before opening, the impact of this is significantly limited, since it only allows reading arbitrary files on the system if and only if they have this suffix.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-27191?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.0.0-20220314234659-1baeb1ce4c0b"><img alt="high 7.5: CVE--2022--27191" src="https://img.shields.io/badge/CVE--2022--27191-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Use of a Broken or Risky Cryptographic Algorithm</i>

<table>
<tr><td>Affected range</td><td><code><0.0.0-20220314234659-1baeb1ce4c0b</code></td></tr>
<tr><td>Fixed version</td><td><code>0.0.0-20220314234659-1baeb1ce4c0b</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.089%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>26th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The golang.org/x/crypto/ssh package before 0.0.0-20220314234659-1baeb1ce4c0b for Go allows an attacker to crash a server in certain circumstances involving AddHostKey.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-43565?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.0.0-20211202192323-5770296d904e"><img alt="high 7.5: CVE--2021--43565" src="https://img.shields.io/badge/CVE--2021--43565-lightgrey?label=high%207.5&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><0.0.0-20211202192323-5770296d904e</code></td></tr>
<tr><td>Fixed version</td><td><code>0.0.0-20211202192323-5770296d904e</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.022%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The x/crypto/ssh package before 0.0.0-20211202192323-5770296d904e of golang.org/x/crypto allows an unauthenticated attacker to panic an SSH server. When using AES-GCM or ChaCha20Poly1305, consuming a malformed packet which contains an empty plaintext causes a panic.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2020-29652?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.0.0-20201216223049-8b5274cf687f"><img alt="high 7.5: CVE--2020--29652" src="https://img.shields.io/badge/CVE--2020--29652-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>NULL Pointer Dereference</i>

<table>
<tr><td>Affected range</td><td><code><0.0.0-20201216223049-8b5274cf687f</code></td></tr>
<tr><td>Fixed version</td><td><code>0.0.0-20201216223049-8b5274cf687f</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.069%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A nil pointer dereference in the golang.org/x/crypto/ssh component through v0.0.0-20201203163018-be400aefbc4c for Go allows remote attackers to cause a denial of service against SSH servers. An attacker can craft an authentication request message for the `gssapi-with-mic` method which will cause NewServerConn to panic via a nil pointer dereference if ServerConfig.GSSAPIWithMICConfig is nil.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-48795?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.0.0-20231218163308-9d2ee975ef9f"><img alt="medium 5.9: CVE--2023--48795" src="https://img.shields.io/badge/CVE--2023--48795-lightgrey?label=medium%205.9&labelColor=fbb552"/></a> <i>Insufficient Verification of Data Authenticity</i>

<table>
<tr><td>Affected range</td><td><code><0.0.0-20231218163308-9d2ee975ef9f</code></td></tr>
<tr><td>Fixed version</td><td><code>0.0.0-20231218163308-9d2ee975ef9f</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.9</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>55.964%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>98th percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 3" src="https://img.shields.io/badge/H-3-e25d68"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/crypto</strong> <code>0.0.0-20210421170649-83a5a9bb288b</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/crypto@0.0.0-20210421170649-83a5a9bb288b</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2022-30636?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.0.0-20220525230936-793ad666bf5e"><img alt="high : CVE--2022--30636" src="https://img.shields.io/badge/CVE--2022--30636-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><0.0.0-20220525230936-793ad666bf5e</code></td></tr>
<tr><td>Fixed version</td><td><code>0.0.0-20220525230936-793ad666bf5e</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.247%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>48th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

httpTokenCacheKey uses path.Base to extract the expected HTTP-01 token value to lookup in the DirCache implementation. On Windows, path.Base acts differently to filepath.Base, since Windows uses a different path separator (\ vs. /), allowing a user to provide a relative path, i.e. .well-known/acme-challenge/..\..\asd becomes ..\..\asd. The extracted path is then suffixed with +http-01, joined with the cache directory, and opened.

Since the controlled path is suffixed with +http-01 before opening, the impact of this is significantly limited, since it only allows reading arbitrary files on the system if and only if they have this suffix.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-27191?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.0.0-20220314234659-1baeb1ce4c0b"><img alt="high 7.5: CVE--2022--27191" src="https://img.shields.io/badge/CVE--2022--27191-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Use of a Broken or Risky Cryptographic Algorithm</i>

<table>
<tr><td>Affected range</td><td><code><0.0.0-20220314234659-1baeb1ce4c0b</code></td></tr>
<tr><td>Fixed version</td><td><code>0.0.0-20220314234659-1baeb1ce4c0b</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.089%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>26th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The golang.org/x/crypto/ssh package before 0.0.0-20220314234659-1baeb1ce4c0b for Go allows an attacker to crash a server in certain circumstances involving AddHostKey.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-43565?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.0.0-20211202192323-5770296d904e"><img alt="high 7.5: CVE--2021--43565" src="https://img.shields.io/badge/CVE--2021--43565-lightgrey?label=high%207.5&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><0.0.0-20211202192323-5770296d904e</code></td></tr>
<tr><td>Fixed version</td><td><code>0.0.0-20211202192323-5770296d904e</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.022%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The x/crypto/ssh package before 0.0.0-20211202192323-5770296d904e of golang.org/x/crypto allows an unauthenticated attacker to panic an SSH server. When using AES-GCM or ChaCha20Poly1305, consuming a malformed packet which contains an empty plaintext causes a panic.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-48795?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.0.0-20231218163308-9d2ee975ef9f"><img alt="medium 5.9: CVE--2023--48795" src="https://img.shields.io/badge/CVE--2023--48795-lightgrey?label=medium%205.9&labelColor=fbb552"/></a> <i>Insufficient Verification of Data Authenticity</i>

<table>
<tr><td>Affected range</td><td><code><0.0.0-20231218163308-9d2ee975ef9f</code></td></tr>
<tr><td>Fixed version</td><td><code>0.0.0-20231218163308-9d2ee975ef9f</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.9</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>55.964%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>98th percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 3" src="https://img.shields.io/badge/H-3-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/net</strong> <code>0.0.0-20210428140749-89ef3d95e781</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/net@0.0.0-20210428140749-89ef3d95e781</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2022-27664?s=github&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.0.0-20220906165146-f3363e06e74c"><img alt="high 7.5: CVE--2022--27664" src="https://img.shields.io/badge/CVE--2022--27664-lightgrey?label=high%207.5&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><0.0.0-20220906165146-f3363e06e74c</code></td></tr>
<tr><td>Fixed version</td><td><code>0.0.0-20220906165146-f3363e06e74c</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.096%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In net/http in Go before 1.18.6 and 1.19.x before 1.19.1, attackers can cause a denial of service because an HTTP/2 connection can hang during closing if shutdown were preempted by a fatal error.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-44716?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.0.0-20211209124913-491a49abca63"><img alt="high : CVE--2021--44716" src="https://img.shields.io/badge/CVE--2021--44716-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><0.0.0-20211209124913-491a49abca63</code></td></tr>
<tr><td>Fixed version</td><td><code>0.0.0-20211209124913-491a49abca63</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.114%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>31st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An attacker can cause unbounded memory growth in servers accepting HTTP/2 requests.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-33194?s=github&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.0.0-20210520170846-37e1c6afe023"><img alt="high 7.5: CVE--2021--33194" src="https://img.shields.io/badge/CVE--2021--33194-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Loop with Unreachable Exit Condition ('Infinite Loop')</i>

<table>
<tr><td>Affected range</td><td><code><0.0.0-20210520170846-37e1c6afe023</code></td></tr>
<tr><td>Fixed version</td><td><code>0.0.0-20210520170846-37e1c6afe023</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.039%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Go through 1.15.12 and 1.16.x through 1.16.4 has a golang.org/x/net/html infinite loop via crafted ParseFragment input.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 2" src="https://img.shields.io/badge/H-2-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/text</strong> <code>0.3.6</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/text@0.3.6</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2022-32149?s=github&n=text&ns=golang.org%2Fx&t=golang&vr=%3C0.3.8"><img alt="high 7.5: CVE--2022--32149" src="https://img.shields.io/badge/CVE--2022--32149-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Missing Release of Resource after Effective Lifetime</i>

<table>
<tr><td>Affected range</td><td><code><0.3.8</code></td></tr>
<tr><td>Fixed version</td><td><code>0.3.8</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.054%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>17th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The BCP 47 tag parser has quadratic time complexity due to inherent aspects of its design. Since the parser is, by design, exposed to untrusted user input, this can be leveraged to force a program to consume significant time parsing Accept-Language headers. The parser cannot be easily rewritten to fix this behavior for various reasons. Instead the solution implemented in this CL is to limit the total complexity of tags passed into ParseAcceptLanguage by limiting the number of dashes in the string to 1000. This should be more than enough for the majority of real world use cases, where the number of tags being sent is likely to be in the single digits.

### Specific Go Packages Affected
golang.org/x/text/language

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-38561?s=github&n=text&ns=golang.org%2Fx&t=golang&vr=%3C0.3.7"><img alt="high 7.5: CVE--2021--38561" src="https://img.shields.io/badge/CVE--2021--38561-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Out-of-bounds Read</i>

<table>
<tr><td>Affected range</td><td><code><0.3.7</code></td></tr>
<tr><td>Fixed version</td><td><code>0.3.7</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.070%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>22nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

golang.org/x/text/language in golang.org/x/text before 0.3.7 can panic with an out-of-bounds read during BCP 47 language tag parsing. Index calculation is mishandled. If parsing untrusted user input, this can be used as a vector for a denial-of-service attack.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/ulikunitz/xz</strong> <code>0.5.10</code> (golang)</summary>

<small><code>pkg:golang/github.com/ulikunitz/xz@0.5.10</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-58058?s=github&n=xz&ns=github.com%2Fulikunitz&t=golang&vr=%3C%3D0.5.13"><img alt="medium 5.3: CVE--2025--58058" src="https://img.shields.io/badge/CVE--2025--58058-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Allocation of Resources Without Limits or Throttling</i>

<table>
<tr><td>Affected range</td><td><code><=0.5.13</code></td></tr>
<tr><td>Fixed version</td><td><code>0.5.14</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.058%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Summary

It is possible to put data in front of an LZMA-encoded byte stream without detecting the situation while reading the header. This can lead to increased memory consumption because the current implementation allocates the full decoding buffer directly after reading the header. The LZMA header doesn't include a magic number or has  a checksum to detect such an issue according to the [specification](https://github.com/jljusten/LZMA-SDK/blob/master/DOC/lzma-specification.txt).

Note that the code recognizes the issue later while reading the stream, but at this time the memory allocation has already been done.

### Mitigations

The release v0.5.15 includes following mitigations:

- The ReaderConfig DictCap field is now interpreted as a limit for the dictionary size.
- The default is 2 Gigabytes - 1 byte (2^31-1 bytes).
- Users can check with the [Reader.Header] method what the actual values are in  their LZMA files and set a smaller limit using ReaderConfig.
- The dictionary size will not exceed the larger of the file size and the minimum dictionary size. This is another measure to prevent huge memory allocations for the dictionary.
- The code supports stream sizes only up to a pebibyte (1024^5).

Note that the original v0.5.14 version had a compiler error for 32 bit platforms, which has been fixed by v0.5.15.

### Methods affected

Only software that uses [lzma.NewReader](https://pkg.go.dev/github.com/ulikunitz/xz/lzma#NewReader) or [lzma.ReaderConfig.NewReader](https://pkg.go.dev/github.com/ulikunitz/xz/lzma#ReaderConfig.NewReader) is affected. There is no issue for software using the xz functionality.

I thank  @GregoryBuligin for his report, which is provided below.

### Summary
When unpacking a large number of LZMA archives, even in a single goroutine, if the first byte of the archive file is 0 (a zero byte added to the beginning), an error __writeMatch: distance out of range__ occurs. Memory consumption spikes sharply, and the GC clearly cannot handle this situation.

### Details
Judging by the error  __writeMatch: distance out of range__, the problems occur in the code around this function.
https://github.com/ulikunitz/xz/blob/c8314b8f21e9c5e25b52da07544cac14db277e89/lzma/decoderdict.go#L81

### PoC
Run a function similar to this one in 1 or several goroutines on a multitude of LZMA archives that have a 0 (a zero byte) added to the beginning.
```
const ProjectLocalPath = "some/path"
const TmpDir = "tmp"

func UnpackLZMA(lzmaFile string) error {
	file, err := os.Open(lzmaFile)
	if err != nil {
		return err
	}
	defer file.Close()

	reader, err := lzma.NewReader(bufio.NewReader(file))
	if err != nil {
		return err
	}

	tmpFile, err := os.CreateTemp(TmpDir, TmpLZMAPrefix)
	if err != nil {
		return err
	}
	defer func() {
		tmpFile.Close()
		_ = os.Remove(tmpFile.Name())
	}()

	sha256Hasher := sha256.New()
	multiWriter := io.MultiWriter(tmpFile, sha256Hasher)

	if _, err = io.Copy(multiWriter, reader); err != nil {
		return err
	}

	unpackHash := hex.EncodeToString(sha256Hasher.Sum(nil))
	unpackDir := filepath.Join(
		ProjectLocalPath, unpackHash[:2],
	)
	_ = os.MkdirAll(unpackDir, DirPerm)

	unpackPath := filepath.Join(unpackDir, unpackHash)

	return os.Rename(tmpFile.Name(), unpackPath)
}
```



### Impact
Servers with a small amount of RAM that download and unpack a large number of unverified LZMA archives

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/sys</strong> <code>0.0.0-20210421221651-33663a62ff08</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/sys@0.0.0-20210421221651-33663a62ff08</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2022-29526?s=github&n=sys&ns=golang.org%2Fx&t=golang&vr=%3C0.0.0-20220412211240-33da011f77ad"><img alt="medium 5.3: CVE--2022--29526" src="https://img.shields.io/badge/CVE--2022--29526-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Improper Privilege Management</i>

<table>
<tr><td>Affected range</td><td><code><0.0.0-20220412211240-33da011f77ad</code></td></tr>
<tr><td>Fixed version</td><td><code>0.0.0-20220412211240-33da011f77ad</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.173%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>39th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Go before 1.17.10 and 1.18.x before 1.18.2 has Incorrect Privilege Reporting in syscall. When called with a non-zero flags parameter, the Faccessat function could incorrectly report that a file is accessible.

### Specific Go Packages Affected
golang.org/x/sys/unix

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/sys</strong> <code>0.0.0-20210426230700-d19ff857e887</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/sys@0.0.0-20210426230700-d19ff857e887</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2022-29526?s=github&n=sys&ns=golang.org%2Fx&t=golang&vr=%3C0.0.0-20220412211240-33da011f77ad"><img alt="medium 5.3: CVE--2022--29526" src="https://img.shields.io/badge/CVE--2022--29526-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Improper Privilege Management</i>

<table>
<tr><td>Affected range</td><td><code><0.0.0-20220412211240-33da011f77ad</code></td></tr>
<tr><td>Fixed version</td><td><code>0.0.0-20220412211240-33da011f77ad</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.173%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>39th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Go before 1.17.10 and 1.18.x before 1.18.2 has Incorrect Privilege Reporting in syscall. When called with a non-zero flags parameter, the Faccessat function could incorrectly report that a file is accessible.

### Specific Go Packages Affected
golang.org/x/sys/unix

</blockquote>
</details>
</details></td></tr>
</table>

