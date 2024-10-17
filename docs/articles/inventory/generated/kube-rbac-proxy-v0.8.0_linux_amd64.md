---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:db06cc4c084dd0253134f156dddaaf53ef1c3fb3cc809e5d81711baa4029ea4c</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 4" src="https://img.shields.io/badge/critical-4-8b1924"/> <img alt="high: 61" src="https://img.shields.io/badge/high-61-e25d68"/> <img alt="medium: 27" src="https://img.shields.io/badge/medium-27-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/low-1-fce1a9"/> <img alt="unspecified: 5" src="https://img.shields.io/badge/unspecified-5-lightgrey"/></td></tr>
<tr><td>size</td><td>19 MB</td></tr>
<tr><td>packages</td><td>64</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 4" src="https://img.shields.io/badge/C-4-8b1924"/> <img alt="high: 47" src="https://img.shields.io/badge/H-47-e25d68"/> <img alt="medium: 20" src="https://img.shields.io/badge/M-20-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <img alt="unspecified: 5" src="https://img.shields.io/badge/U-5-lightgrey"/><strong>stdlib</strong> <code>1.13.15</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.13.15</code></small><br/>
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

<a href="https://scout.docker.com/v/CVE-2023-24540?s=golang&n=stdlib&t=golang&vr=%3C1.19.9"><img alt="critical : CVE--2023--24540" src="https://img.shields.io/badge/CVE--2023--24540-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.19.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.19.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.26%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>66th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.65%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>80th percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2022-23806?s=golang&n=stdlib&t=golang&vr=%3C1.16.14"><img alt="critical : CVE--2022--23806" src="https://img.shields.io/badge/CVE--2022--23806-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.16.14</code></td></tr>
<tr><td>Fixed version</td><td><code>1.16.14</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.56%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>78th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.08%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>35th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>15th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

On Windows, executing Cmd.Run, Cmd.Start, Cmd.Output, or Cmd.CombinedOutput when Cmd.Path is unset will unintentionally trigger execution of any binaries in the working directory named either "..com" or "..exe".

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

<a href="https://scout.docker.com/v/CVE-2023-45287?s=golang&n=stdlib&t=golang&vr=%3C1.20.0"><img alt="high : CVE--2023--45287" src="https://img.shields.io/badge/CVE--2023--45287-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.20.0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.20.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.07%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>32nd percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2023-24537?s=golang&n=stdlib&t=golang&vr=%3C1.19.8"><img alt="high : CVE--2023--24537" src="https://img.shields.io/badge/CVE--2023--24537-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.19.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.19.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.15%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>52nd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.73%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>81st percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.31%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>70th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.18%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>56th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.17%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>55th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>3.42%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>92nd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.17%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>54th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.16%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>54th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.10%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>43rd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.22%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>60th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.19%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>58th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.19%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>56th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.15%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>52nd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.19%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>56th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.19%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>56th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.19%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>56th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.19%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>56th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.16%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>53rd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.16%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>53rd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.21%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>59th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.54%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>78th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.19%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>57th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.24%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>62nd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.44%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>75th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.42%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>75th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.61%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>79th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.60%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>79th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.32%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>71st percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.65%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>80th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.25%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>66th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The NewReader and OpenReader functions in archive/zip can cause a panic or an unrecoverable fatal error when reading an archive that claims to contain a large number of files, regardless of its actual size. This is caused by an incomplete fix for CVE-2021-33196.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-33198?s=golang&n=stdlib&t=golang&vr=%3C1.15.13"><img alt="high : CVE--2021--33198" src="https://img.shields.io/badge/CVE--2021--33198-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.15.13</code></td></tr>
<tr><td>Fixed version</td><td><code>1.15.13</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.24%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>65th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Rat.SetString and Rat.UnmarshalText may cause a panic or an unrecoverable fatal error if passed inputs with very large exponents.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-33196?s=golang&n=stdlib&t=golang&vr=%3C1.15.13"><img alt="high : CVE--2021--33196" src="https://img.shields.io/badge/CVE--2021--33196-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.15.13</code></td></tr>
<tr><td>Fixed version</td><td><code>1.15.13</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.26%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>66th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

NewReader and OpenReader can cause a panic or an unrecoverable fatal error when reading an archive that claims to contain a large number of files, regardless of its actual size.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-27918?s=golang&n=stdlib&t=golang&vr=%3C1.15.9"><img alt="high : CVE--2021--27918" src="https://img.shields.io/badge/CVE--2021--27918-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.15.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.15.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.09%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>41st percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.14%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>50th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.14%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>50th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Angle brackets (<>) are not considered dangerous characters when inserted into CSS contexts. Templates containing multiple actions separated by a '/' character can result in unexpectedly closing the CSS context and allowing for injection of unexpected HTML, if executed with untrusted input.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-33195?s=golang&n=stdlib&t=golang&vr=%3C1.15.13"><img alt="high : CVE--2021--33195" src="https://img.shields.io/badge/CVE--2021--33195-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.15.13</code></td></tr>
<tr><td>Fixed version</td><td><code>1.15.13</code></td></tr>
<tr><td>EPSS Score</td><td><code>1.01%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>84th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The LookupCNAME, LookupSRV, LookupMX, LookupNS, and LookupAddr functions and their respective methods on the Resolver type may return arbitrary values retrieved from DNS which do not follow the established RFC 1035 rules for domain names. If these names are used without further sanitization, for instance unsafely included in HTML, they may allow for injection of unexpected content. Note that LookupTXT may still return arbitrary values that could require sanitization before further use.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-29406?s=golang&n=stdlib&t=golang&vr=%3C1.19.11"><img alt="medium : CVE--2023--29406" src="https://img.shields.io/badge/CVE--2023--29406-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.19.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.19.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.14%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>50th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.16%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>52nd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.17%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>55th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The HTTP/1 client accepted some invalid Transfer-Encoding headers as indicating a "chunked" encoding. This could potentially allow for request smuggling, but only if combined with an intermediate server that also improperly failed to reject the header as invalid.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-34558?s=golang&n=stdlib&t=golang&vr=%3C1.15.14"><img alt="medium : CVE--2021--34558" src="https://img.shields.io/badge/CVE--2021--34558-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.15.14</code></td></tr>
<tr><td>Fixed version</td><td><code>1.15.14</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.26%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>66th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

crypto/tls clients can panic when provided a certificate of the wrong type for the negotiated parameters. net/http clients performing HTTPS requests are also affected.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-3114?s=golang&n=stdlib&t=golang&vr=%3C1.14.14"><img alt="medium : CVE--2021--3114" src="https://img.shields.io/badge/CVE--2021--3114-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.14.14</code></td></tr>
<tr><td>Fixed version</td><td><code>1.14.14</code></td></tr>
<tr><td>EPSS Score</td><td><code>1.43%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>87th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The P224() Curve implementation can in rare circumstances generate incorrect outputs, including returning invalid points from ScalarMult.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-39319?s=golang&n=stdlib&t=golang&vr=%3C1.20.8"><img alt="medium : CVE--2023--39319" src="https://img.shields.io/badge/CVE--2023--39319-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.20.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.20.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.11%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>45th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.15%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>52nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The html/template package does not properly handle HTML-like "" comment tokens, nor hashbang "#!" comment tokens, in <script> contexts. This may cause the template parser to improperly interpret the contents of <script> contexts, causing actions to be improperly escaped. This may be leveraged to perform an XSS attack.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2020-24553?s=golang&n=stdlib&t=golang&vr=%3C1.14.8"><img alt="medium : CVE--2020--24553" src="https://img.shields.io/badge/CVE--2020--24553-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.14.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.14.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.62%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>79th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When a Handler does not explicitly set the Content-Type header, the the package would default to “text/html”, which could cause a Cross-Site Scripting vulnerability if an attacker can control any part of the contents of a response.

The Content-Type header is now set based on the contents of the first Write using http.DetectContentType, which is consistent with the behavior of the net/http package.

Although this protects some applications that validate the contents of uploaded files, not setting the Content-Type header explicitly on any attacker-controlled file is unsafe and should be avoided.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-36221?s=golang&n=stdlib&t=golang&vr=%3C1.15.15"><img alt="medium : CVE--2021--36221" src="https://img.shields.io/badge/CVE--2021--36221-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.15.15</code></td></tr>
<tr><td>Fixed version</td><td><code>1.15.15</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.98%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>84th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

ReverseProxy can panic after encountering a problem copying a proxied response body.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-31525?s=golang&n=stdlib&t=golang&vr=%3C1.15.12"><img alt="medium : CVE--2021--31525" src="https://img.shields.io/badge/CVE--2021--31525-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.15.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.15.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.85%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>83rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A malicious HTTP server or client can cause the net/http client or server to panic.

ReadRequest and ReadResponse can hit an unrecoverable panic when reading a very large header (over 7MB on 64-bit architectures, or over 4MB on 32-bit ones). Transport and Client are vulnerable and the program can be made to crash by a malicious server. Server is not vulnerable by default, but can be if the default max header of 1MB is overridden by setting Server.MaxHeaderBytes to a higher value, in which case the program can be made to crash by a malicious client.

This also affects golang.org/x/net/http2/h2c and HeaderValuesContainsToken in golang.org/x/net/http/httpguts.

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

<a href="https://scout.docker.com/v/CVE-2022-1962?s=golang&n=stdlib&t=golang&vr=%3C1.17.12"><img alt="medium : CVE--2022--1962" src="https://img.shields.io/badge/CVE--2022--1962-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.17.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.17.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.06%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>28th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Calling any of the Parse functions on Go source code which contains deeply nested types or declarations can cause a panic due to stack exhaustion.

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

<a href="https://scout.docker.com/v/CVE-2023-29409?s=golang&n=stdlib&t=golang&vr=%3C1.19.12"><img alt="medium : CVE--2023--29409" src="https://img.shields.io/badge/CVE--2023--29409-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.19.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.19.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.11%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>45th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.10%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>42nd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.29%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>69th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.24%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>65th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When called with a non-zero flags parameter, the Faccessat function can incorrectly report that a file is accessible.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-33197?s=golang&n=stdlib&t=golang&vr=%3C1.15.13"><img alt="medium : CVE--2021--33197" src="https://img.shields.io/badge/CVE--2021--33197-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.15.13</code></td></tr>
<tr><td>Fixed version</td><td><code>1.15.13</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.14%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>50th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.53%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>77th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When a Go program running on a Unix system is out of file descriptors and calls syscall.ForkExec (including indirectly by using the os/exec package), syscall.ForkExec can close file descriptor 0 as it fails. If this happens (or can be provoked) repeatedly, it can result in misdirected I/O such as writing network traffic intended for one connection to a different connection, or content intended for one file to a different one.

For users who cannot immediately update to the new release, the bug can be mitigated by raising the per-process file descriptor limit.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-30629?s=golang&n=stdlib&t=golang&vr=%3C1.17.11"><img alt="low : CVE--2022--30629" src="https://img.shields.io/badge/CVE--2022--30629-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.17.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.17.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.14%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>50th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An attacker can correlate a resumed TLS session with a previous connection.

Session tickets generated by crypto/tls do not contain a randomly generated ticket_age_add, which allows an attacker that can observe TLS handshakes to correlate successive connections by comparing ticket ages during session resumption.

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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 4" src="https://img.shields.io/badge/H-4-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/crypto</strong> <code>0.0.0-20200622213623-75b288015ac9</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/crypto@0.0.0-20200622213623-75b288015ac9</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2022-30636?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.0.0-20220525230936-793ad666bf5e"><img alt="high : CVE--2022--30636" src="https://img.shields.io/badge/CVE--2022--30636-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><0.0.0-20220525230936-793ad666bf5e</code></td></tr>
<tr><td>Fixed version</td><td><code>0.0.0-20220525230936-793ad666bf5e</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.29%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>70th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.08%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>37th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.65%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>80th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A nil pointer dereference in the golang.org/x/crypto/ssh component through v0.0.0-20201203163018-be400aefbc4c for Go allows remote attackers to cause a denial of service against SSH servers. An attacker can craft an authentication request message for the `gssapi-with-mic` method which will cause NewServerConn to panic via a nil pointer dereference if ServerConfig.GSSAPIWithMICConfig is nil.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 3" src="https://img.shields.io/badge/H-3-e25d68"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/net</strong> <code>0.0.0-20200707034311-ab3426394381</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/net@0.0.0-20200707034311-ab3426394381</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2022-27664?s=github&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.0.0-20220906165146-f3363e06e74c"><img alt="high 7.5: CVE--2022--27664" src="https://img.shields.io/badge/CVE--2022--27664-lightgrey?label=high%207.5&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><0.0.0-20220906165146-f3363e06e74c</code></td></tr>
<tr><td>Fixed version</td><td><code>0.0.0-20220906165146-f3363e06e74c</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.24%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>62nd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.60%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>79th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.15%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>51st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Go through 1.15.12 and 1.16.x through 1.16.4 has a golang.org/x/net/html infinite loop via crafted ParseFragment input.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2021-31525?s=github&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.0.0-20210428140749-89ef3d95e781"><img alt="medium 5.9: CVE--2021--31525" src="https://img.shields.io/badge/CVE--2021--31525-lightgrey?label=medium%205.9&labelColor=fbb552"/></a> <i>Uncontrolled Recursion</i>

<table>
<tr><td>Affected range</td><td><code><0.0.0-20210428140749-89ef3d95e781</code></td></tr>
<tr><td>Fixed version</td><td><code>0.0.0-20210428140749-89ef3d95e781</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.9</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.85%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>83rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

golang.org/x/net/http/httpguts in Go before 1.15.12 and 1.16.x before 1.16.4 allows remote attackers to cause a denial of service (panic) via a large header to ReadRequest or ReadResponse. Server, Transport, and Client can each be affected in some configurations.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 3" src="https://img.shields.io/badge/H-3-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/prometheus/client_golang</strong> <code>1.7.1</code> (golang)</summary>

<small><code>pkg:golang/github.com/prometheus/client_golang@1.7.1</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2023-45142?s=golang&n=client_golang&ns=github.com%2Fprometheus&t=golang&vr=%3C1.11.1"><img alt="high : CVE--2023--45142" src="https://img.shields.io/badge/CVE--2023--45142-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.11.1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.11.1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.14%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>50th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Prometheus client_golang HTTP server is vulnerable to a denial of service attack when handling requests with non-standard HTTP methods.

In order to be affected, an instrumented software must use any of the promhttp.InstrumentHandler* middleware except RequestsInFlight; not filter any specific methods (e.g GET) before middleware; pass a metric with a "method" label name to a middleware; and not have any firewall/LB/proxy that filters away requests with unknown "method".

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2023-25151?s=golang&n=client_golang&ns=github.com%2Fprometheus&t=golang&vr=%3C1.11.1"><img alt="high : CVE--2023--25151" src="https://img.shields.io/badge/CVE--2023--25151-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.11.1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.11.1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.10%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>42nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Prometheus client_golang HTTP server is vulnerable to a denial of service attack when handling requests with non-standard HTTP methods.

In order to be affected, an instrumented software must use any of the promhttp.InstrumentHandler* middleware except RequestsInFlight; not filter any specific methods (e.g GET) before middleware; pass a metric with a "method" label name to a middleware; and not have any firewall/LB/proxy that filters away requests with unknown "method".

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-21698?s=github&n=client_golang&ns=github.com%2Fprometheus&t=golang&vr=%3C1.11.1"><img alt="high 7.5: CVE--2022--21698" src="https://img.shields.io/badge/CVE--2022--21698-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Uncontrolled Resource Consumption</i>

<table>
<tr><td>Affected range</td><td><code><1.11.1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.11.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.65%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>80th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

This is the Go client library for Prometheus. It has two separate parts, one for instrumenting application code, and one for creating clients that talk to the Prometheus HTTP API. client_golang is the instrumentation library for Go applications in Prometheus, and the promhttp package in client_golang provides tooling around HTTP servers and clients.

### Impact

HTTP server susceptible to a Denial of Service through unbounded cardinality, and potential memory exhaustion, when handling requests with non-standard HTTP methods.

###  Affected Configuration

In order to be affected, an instrumented software must

* Use any of `promhttp.InstrumentHandler*` middleware except `RequestsInFlight`.
* Do not filter any specific methods (e.g GET) before middleware.
* Pass metric with `method` label name to our middleware.
* Not have any firewall/LB/proxy that filters away requests with unknown `method`.

### Patches

* https://github.com/prometheus/client_golang/pull/962
* https://github.com/prometheus/client_golang/pull/987

### Workarounds

If you cannot upgrade to [v1.11.1 or above](https://github.com/prometheus/client_golang/releases/tag/v1.11.1), in order to stop being affected you can:

* Remove `method` label name from counter/gauge you use in the InstrumentHandler.
* Turn off affected promhttp handlers.
* Add custom middleware before promhttp handler that will sanitize the request method given by Go http.Request.
* Use a reverse proxy or web application firewall, configured to only allow a limited set of methods.

### For more information

If you have any questions or comments about this advisory:

* Open an issue in https://github.com/prometheus/client_golang
* Email us at `prometheus-team@googlegroups.com`


</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 2" src="https://img.shields.io/badge/H-2-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/text</strong> <code>0.3.3</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/text@0.3.3</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2022-32149?s=github&n=text&ns=golang.org%2Fx&t=golang&vr=%3C0.3.8"><img alt="high 7.5: CVE--2022--32149" src="https://img.shields.io/badge/CVE--2022--32149-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Missing Release of Resource after Effective Lifetime</i>

<table>
<tr><td>Affected range</td><td><code><0.3.8</code></td></tr>
<tr><td>Fixed version</td><td><code>0.3.8</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.24%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>62nd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.16%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>54th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

golang.org/x/text/language in golang.org/x/text before 0.3.7 can panic with an out-of-bounds read during BCP 47 language tag parsing. Index calculation is mishandled. If parsing untrusted user input, this can be used as a vector for a denial-of-service attack.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>google.golang.org/grpc</strong> <code>1.27.0</code> (golang)</summary>

<small><code>pkg:golang/google.golang.org/grpc@1.27.0</code></small><br/>
<a href="https://scout.docker.com/v/GHSA-m425-mq94-257g?s=github&n=grpc&ns=google.golang.org&t=golang&vr=%3C1.56.3"><img alt="high 7.5: GHSA--m425--mq94--257g" src="https://img.shields.io/badge/GHSA--m425--mq94--257g-lightgrey?label=high%207.5&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code><1.56.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1.56.3</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2023-44487?s=github&n=grpc&ns=google.golang.org&t=golang&vr=%3C1.56.3"><img alt="medium 5.3: CVE--2023--44487" src="https://img.shields.io/badge/CVE--2023--44487-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Uncontrolled Resource Consumption</i>

<table>
<tr><td>Affected range</td><td><code><1.56.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1.56.3</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/gogo/protobuf</strong> <code>1.3.1</code> (golang)</summary>

<small><code>pkg:golang/github.com/gogo/protobuf@1.3.1</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2021-3121?s=github&n=protobuf&ns=github.com%2Fgogo&t=golang&vr=%3C1.3.2"><img alt="high 8.6: CVE--2021--3121" src="https://img.shields.io/badge/CVE--2021--3121-lightgrey?label=high%208.6&labelColor=e25d68"/></a> <i>Improper Validation of Array Index</i>

<table>
<tr><td>Affected range</td><td><code><1.3.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.3.2</code></td></tr>
<tr><td>CVSS Score</td><td><code>8.6</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.83%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>82nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An issue was discovered in GoGo Protobuf before 1.3.2. plugin/unmarshal/unmarshal.go lacks certain index validation, aka the "skippy peanut butter" issue.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>k8s.io/apiserver</strong> <code>0.19.2</code> (golang)</summary>

<small><code>pkg:golang/k8s.io/apiserver@0.19.2</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2020-8552?s=gitlab&n=apiserver&ns=k8s.io&t=golang&vr=%3C1.15.10"><img alt="medium 4.3: CVE--2020--8552" src="https://img.shields.io/badge/CVE--2020--8552-lightgrey?label=medium%204.3&labelColor=fbb552"/></a> <i>OWASP Top Ten 2017 Category A9 - Using Components with Known Vulnerabilities</i>

<table>
<tr><td>Affected range</td><td><code><1.15.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.15.10, 1.16.7, 1.17.3</code></td></tr>
<tr><td>CVSS Score</td><td><code>4.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.17%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>54th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Kubernetes API server component has been found to be vulnerable to a denial of service attack via successful API requests.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/sys</strong> <code>0.0.0-20200622214017-ed371f2e16b4</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/sys@0.0.0-20200622214017-ed371f2e16b4</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2022-29526?s=github&n=sys&ns=golang.org%2Fx&t=golang&vr=%3C0.0.0-20220412211240-33da011f77ad"><img alt="medium 5.3: CVE--2022--29526" src="https://img.shields.io/badge/CVE--2022--29526-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Improper Privilege Management</i>

<table>
<tr><td>Affected range</td><td><code><0.0.0-20220412211240-33da011f77ad</code></td></tr>
<tr><td>Fixed version</td><td><code>0.0.0-20220412211240-33da011f77ad</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.24%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>65th percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>gopkg.in/square/go-jose.v2</strong> <code>2.2.2</code> (golang)</summary>

<small><code>pkg:golang/gopkg.in/square/go-jose.v2@2.2.2</code></small><br/>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>google.golang.org/protobuf</strong> <code>1.24.0</code> (golang)</summary>

<small><code>pkg:golang/google.golang.org/protobuf@1.24.0</code></small><br/>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>k8s.io/client-go</strong> <code>0.19.2</code> (golang)</summary>

<small><code>pkg:golang/k8s.io/client-go@0.19.2</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2020-8565?s=github&n=client-go&ns=k8s.io&t=golang&vr=%3E%3D0.19.0%2C%3C0.19.6"><img alt="medium 4.7: CVE--2020--8565" src="https://img.shields.io/badge/CVE--2020--8565-lightgrey?label=medium%204.7&labelColor=fbb552"/></a> <i>Insertion of Sensitive Information into Log File</i>

<table>
<tr><td>Affected range</td><td><code>>=0.19.0<br/><0.19.6</code></td></tr>
<tr><td>Fixed version</td><td><code>0.20.0-alpha.2</code></td></tr>
<tr><td>CVSS Score</td><td><code>4.7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:H/PR:L/UI:N/S:U/C:H/I:N/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>13th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In Kubernetes, if the logging level is set to at least 9, authorization and bearer tokens will be written to log files. This can occur both in API server logs and client tool output like kubectl. This affects <= v1.19.5, <= v1.18.13, <= v1.17.15, < v1.20.0-alpha2.

</blockquote>
</details>
</details></td></tr>
</table>

