---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:44fe2be8bf804aae8f9f550f4b60841d0b7e02bb8136fbf6057ebe5dc4ccf002</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 4" src="https://img.shields.io/badge/critical-4-8b1924"/> <img alt="high: 16" src="https://img.shields.io/badge/high-16-e25d68"/> <img alt="medium: 3" src="https://img.shields.io/badge/medium-3-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/low-1-fce1a9"/> <img alt="unspecified: 27" src="https://img.shields.io/badge/unspecified-27-lightgrey"/></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>26 MB</td></tr>
<tr><td>packages</td><td>127</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 2" src="https://img.shields.io/badge/C-2-8b1924"/> <img alt="high: 9" src="https://img.shields.io/badge/H-9-e25d68"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>stdlib</strong> <code>1.26.8</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.26.8</code></small><br/>

```dockerfile
# kubectl-release.dockerfile (5:5)
FROM alpine/kubectl:1.37.1
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-56857?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="critical : CVE--2026--56857" src="https://img.shields.io/badge/CVE--2026--56857-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.553%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>46th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

On Windows, when the target of Root.Mkdir or Root.MkdirAll is a junction pointing to an empty location, the operation can create a directory at the junction target even when that target is located outside the root. This only applies to operations where the last path component is a junction (path/to/junction, but not path/junction/target).

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-78663?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="critical : CVE--2026--78663" src="https://img.shields.io/badge/CVE--2026--78663-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.622%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>50th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The HTTP/2 server can refund connection-level flow control twice for the same data: Once when a client resets a stream (refunding data for any sent-but-unread portion of the stream), and again when a request handler reads the buffered data. A malicious client can exploit this to bypass the configured connection-level flow control limit (MaxReceiveBufferPerConnection). Total buffered data is still limited by the concurrent stream limit and stream-level flow control.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-97032?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="high : CVE--2026--97032" src="https://img.shields.io/badge/CVE--2026--97032-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.490%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>42nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

HTTP/2 servers could end up crashing due to inadvertently modifying its HPACK encoder concurrently. This happens because the server modifies the HPACK encoder from two goroutines without synchronization: one uses the encoder to encode a HEADERS frame as part of a response sent to a client and the other modifies the encoder's table size when handling a SETTINGS frame containing SETTINGS_HEADER_TABLE_SIZE that a client sends. A malicious client can repeatedly send a request while changing the header table size to crash the server.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-97031?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="high : CVE--2026--97031" src="https://img.shields.io/badge/CVE--2026--97031-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.519%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>44th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Multiple ECH outer extension references are not permitted under RFC 9849; previously, a client could send a well-crafted packet that could trigger memory exhaustion in the server process by specifying multiple references.

We now reject these as malformed and curb the memory amplification vector as a result.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-94440?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="high : CVE--2026--94440" src="https://img.shields.io/badge/CVE--2026--94440-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.511%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>43rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Parsing a multipart form can bypass memory limits and read an arbitrarily long line into memory when the remaining limit at the start of a part is less than 400 bytes.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-94439?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="high : CVE--2026--94439" src="https://img.shields.io/badge/CVE--2026--94439-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.414%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>36th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When an HTTP server handler sends a 2xx response to an HTTP/1 CONNECT request and returns without hijacking the connection, the server improperly continues to read and serve requests from the connection. Since a 2xx response to an HTTP/1 CONNECT converts the connection into a tunnel, the server should not treat the connection as continuing to contain HTTP.

The impact of this misbehavior is mostly limited to potential request smuggling, where an intermediate proxy considers the data on the connection to be tunneled and the server considers it to be HTTP.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-78669?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="high : CVE--2026--78669" src="https://img.shields.io/badge/CVE--2026--78669-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.614%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>49th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A malicious HTTP/2 peer can cause excessive CPU consumption in the client or server by opening a large number of streams and then sending many small SETTINGS frames containing SETTINGS_INITIAL_WINDOW_SIZE values.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-78667?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="high : CVE--2026--78667" src="https://img.shields.io/badge/CVE--2026--78667-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.480%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>41st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When parsing a Range header containing a large number of small ranges, FileServer(FS), ServeContent, and ServeFile(FS) can consume an excessive amount of CPU.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-78660?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="high : CVE--2026--78660" src="https://img.shields.io/badge/CVE--2026--78660-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.425%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>37th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Historically, we have been rather lax about malformed framing-related headers in our HTTP/2 implementation, as they cannot interfere with HTTP/2 framing. However, this makes it possible for our HTTP/2 implementation to forward responses containing such headers to an HTTP/1 client when acting as a reverse proxy. If the HTTP/1 client also does not behave strictly enough, this can result in response smuggling.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-78659?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="high : CVE--2026--78659" src="https://img.shields.io/badge/CVE--2026--78659-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.627%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>50th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When "Trailer" headers are sent by a client, the HTTP server internally uses the header values to populate the Request.Trailer map passed to the server handler. Because Request.Trailer is a map, each entry incurs memory overhead. For HTTP/2 servers, a malicious client can exploit this by sending a "Trailer" header that declares a large number of fields, causing the server to allocate a disproportionate amount of memory while bypassing Server.MaxHeaderValueCount and Server.MaxHeaderBytes limits. This exploit is not applicable for HTTP/1 servers, which do not support multiplexing a large number of requests over one TCP connection, and whose Server.MaxHeaderBytes are calculated differently.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-56866?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="high : CVE--2026--56866" src="https://img.shields.io/badge/CVE--2026--56866-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.473%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>41st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When http.Transport sends an HTTP/1 CONNECT request with a non-empty Request.Body, it writes the body directly to the connection without framing after the request headers. If the server rejects the CONNECT request with a non-2xx keep-alive response, Transport returns the connection to the idle pool. Because CONNECT requests do not have a request body, the server may interpret the trailing body bytes as a subsequent pipelined HTTP/1.1 request on the connection, leaving the pooled connection desynchronized and causing the next caller that reuses it to read the response to the injected request. In reverse proxies (including httputil.ReverseProxy) that forward CONNECT requests through a shared Transport, this can lead to cross-user response poisoning.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-97030?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="medium : CVE--2026--97030" src="https://img.shields.io/badge/CVE--2026--97030-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.289%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A trusted template author may have previously written a valid template wherein the use of the 'yield' keyword would not be correctly escaped.

We now ensure that valid keyword uses are escaped and non-keyword uses are not escaped.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-94448?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="medium : CVE--2026--94448" src="https://img.shields.io/badge/CVE--2026--94448-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.289%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When a JavaScript template literal contains consecutive expressions, the context tracking state was not properly reset upon entering a new expression.

We now ensure that template-literal expression entries correctly reset context variables so all subsequent regular expression literals are accurately recognized and escaped.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-111943?s=golang&n=stdlib&t=golang&vr=%3C1.26.10"><img alt="unspecified : CVE--2026--111943" src="https://img.shields.io/badge/CVE--2026--111943-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.299%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>22nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

On most platforms, Go uses the given system root certificates. However, in some narrower cases, the system trust stores may not be updated without further action.

To defend against the narrower set of cases that may remain affected, a denylist was added in crypto/x509 to return an error when calling Verify with any of the known intermediate certificates that are no longer considered to be trustworthy.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 4" src="https://img.shields.io/badge/H-4-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 2" src="https://img.shields.io/badge/U-2-lightgrey"/><strong>golang.org/x/net</strong> <code>0.57.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/net@0.57.0</code></small><br/>

```dockerfile
# kubectl-release.dockerfile (5:5)
FROM alpine/kubectl:1.37.1
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-78663?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.60.0"><img alt="critical : CVE--2026--78663" src="https://img.shields.io/badge/CVE--2026--78663-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.60.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.60.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.622%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>50th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The HTTP/2 server can refund connection-level flow control twice for the same data: Once when a client resets a stream (refunding data for any sent-but-unread portion of the stream), and again when a request handler reads the buffered data. A malicious client can exploit this to bypass the configured connection-level flow control limit (MaxReceiveBufferPerConnection). Total buffered data is still limited by the concurrent stream limit and stream-level flow control.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-97032?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.60.0"><img alt="high : CVE--2026--97032" src="https://img.shields.io/badge/CVE--2026--97032-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.60.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.60.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.490%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>42nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

HTTP/2 servers could end up crashing due to inadvertently modifying its HPACK encoder concurrently. This happens because the server modifies the HPACK encoder from two goroutines without synchronization: one uses the encoder to encode a HEADERS frame as part of a response sent to a client and the other modifies the encoder's table size when handling a SETTINGS frame containing SETTINGS_HEADER_TABLE_SIZE that a client sends. A malicious client can repeatedly send a request while changing the header table size to crash the server.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-78669?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.60.0"><img alt="high : CVE--2026--78669" src="https://img.shields.io/badge/CVE--2026--78669-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.60.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.60.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.614%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>49th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A malicious HTTP/2 peer can cause excessive CPU consumption in the client or server by opening a large number of streams and then sending many small SETTINGS frames containing SETTINGS_INITIAL_WINDOW_SIZE values.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-78660?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.60.0"><img alt="high : CVE--2026--78660" src="https://img.shields.io/badge/CVE--2026--78660-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.60.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.60.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.425%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>37th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Historically, we have been rather lax about malformed framing-related headers in our HTTP/2 implementation, as they cannot interfere with HTTP/2 framing. However, this makes it possible for our HTTP/2 implementation to forward responses containing such headers to an HTTP/1 client when acting as a reverse proxy. If the HTTP/1 client also does not behave strictly enough, this can result in response smuggling.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-78659?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.60.0"><img alt="high : CVE--2026--78659" src="https://img.shields.io/badge/CVE--2026--78659-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.60.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.60.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.627%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>50th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When "Trailer" headers are sent by a client, the HTTP server internally uses the header values to populate the Request.Trailer map passed to the server handler. Because Request.Trailer is a map, each entry incurs memory overhead. For HTTP/2 servers, a malicious client can exploit this by sending a "Trailer" header that declares a large number of fields, causing the server to allocate a disproportionate amount of memory while bypassing Server.MaxHeaderValueCount and Server.MaxHeaderBytes limits. This exploit is not applicable for HTTP/1 servers, which do not support multiplexing a large number of requests over one TCP connection, and whose Server.MaxHeaderBytes are calculated differently.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-97045?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.62.0"><img alt="unspecified : CVE--2026--97045" src="https://img.shields.io/badge/CVE--2026--97045-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.62.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.62.0</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In childTextNodesAreLiteral, walking up the tree previously stopped at the nearest foreign ancestor once an HTML integration point was found. However, that integration point may itself be a descendant of an element that was foster-parented into a foreign namespace (such as <mglyph> or <malignmark> fostered under <mtext>), causing a parser to resolve the subtree in a different foreign namespace upon re-parsing the rendered output.

Continue walking the full ancestor chain and verify that every transition from a non-empty namespace occurs at an HTML integration point before emitting literal text.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-78661?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.62.0"><img alt="unspecified : CVE--2026--78661" src="https://img.shields.io/badge/CVE--2026--78661-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.62.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.62.0</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When coalescing adjacent text nodes in addText and fosterParent, appending to an existing TextNode's Data via string concatenation (n.Data += text) reallocated and copied the accumulated string on every token. Inputs containing many short text runs separated by ignored end tags (such as "a</x>") caused O(n^2) allocations and byte copies.

Accumulate coalesced text in per-node byte slices during parsing and materialize Data strings once at the end of parse.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>brotli</strong> <code>1.2.0-r1</code> (apk)</summary>

<small><code>pkg:apk/alpine/brotli@1.2.0-r1?os_name=alpine&os_version=3.24</code></small><br/>

```dockerfile
# kubectl-release.dockerfile (5:5)
FROM alpine/kubectl:1.37.1
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-111497?s=alpine&n=brotli&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C1.2.1-r0"><img alt="critical : CVE--2026--111497" src="https://img.shields.io/badge/CVE--2026--111497-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.2.1-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.2.1-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>55.483%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>99th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 23" src="https://img.shields.io/badge/U-23-lightgrey"/><strong>curl</strong> <code>8.22.0-r0</code> (apk)</summary>

<small><code>pkg:apk/alpine/curl@8.22.0-r0?arch=x86_64&os_name=alpine&os_version=3.24</code></small><br/>

```dockerfile
# kubectl-release.dockerfile (5:5)
FROM alpine/kubectl:1.37.1
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-92392?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C8.23.0-r0"><img alt="high : CVE--2026--92392" src="https://img.shields.io/badge/CVE--2026--92392-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.23.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>8.23.0-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>1.284%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>70th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-94266?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C8.23.0-r0"><img alt="unspecified : CVE--2026--94266" src="https://img.shields.io/badge/CVE--2026--94266-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.23.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>8.23.0-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.237%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>15th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-94265?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C8.23.0-r0"><img alt="unspecified : CVE--2026--94265" src="https://img.shields.io/badge/CVE--2026--94265-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.23.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>8.23.0-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.338%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-92391?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C8.23.0-r0"><img alt="unspecified : CVE--2026--92391" src="https://img.shields.io/badge/CVE--2026--92391-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.23.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>8.23.0-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.358%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>29th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-92390?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C8.23.0-r0"><img alt="unspecified : CVE--2026--92390" src="https://img.shields.io/badge/CVE--2026--92390-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.23.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>8.23.0-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.257%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>17th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-92389?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C8.23.0-r0"><img alt="unspecified : CVE--2026--92389" src="https://img.shields.io/badge/CVE--2026--92389-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.23.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>8.23.0-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.257%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>17th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-92388?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C8.23.0-r0"><img alt="unspecified : CVE--2026--92388" src="https://img.shields.io/badge/CVE--2026--92388-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.23.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>8.23.0-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.257%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>17th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-92387?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C8.23.0-r0"><img alt="unspecified : CVE--2026--92387" src="https://img.shields.io/badge/CVE--2026--92387-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.23.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>8.23.0-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.341%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-92386?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C8.23.0-r0"><img alt="unspecified : CVE--2026--92386" src="https://img.shields.io/badge/CVE--2026--92386-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.23.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>8.23.0-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.257%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>17th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-87866?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C8.23.0-r0"><img alt="unspecified : CVE--2026--87866" src="https://img.shields.io/badge/CVE--2026--87866-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.23.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>8.23.0-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.208%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-87865?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C8.23.0-r0"><img alt="unspecified : CVE--2026--87865" src="https://img.shields.io/badge/CVE--2026--87865-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.23.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>8.23.0-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.244%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>15th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-87864?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C8.23.0-r0"><img alt="unspecified : CVE--2026--87864" src="https://img.shields.io/badge/CVE--2026--87864-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.23.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>8.23.0-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.221%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>13th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-87863?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C8.23.0-r0"><img alt="unspecified : CVE--2026--87863" src="https://img.shields.io/badge/CVE--2026--87863-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.23.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>8.23.0-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.266%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-87862?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C8.23.0-r0"><img alt="unspecified : CVE--2026--87862" src="https://img.shields.io/badge/CVE--2026--87862-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.23.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>8.23.0-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.314%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>24th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-87861?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C8.23.0-r0"><img alt="unspecified : CVE--2026--87861" src="https://img.shields.io/badge/CVE--2026--87861-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.23.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>8.23.0-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.266%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-86415?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C8.23.0-r0"><img alt="unspecified : CVE--2026--86415" src="https://img.shields.io/badge/CVE--2026--86415-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.23.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>8.23.0-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.216%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>12th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-86414?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C8.23.0-r0"><img alt="unspecified : CVE--2026--86414" src="https://img.shields.io/badge/CVE--2026--86414-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.23.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>8.23.0-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.266%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-86413?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C8.23.0-r0"><img alt="unspecified : CVE--2026--86413" src="https://img.shields.io/badge/CVE--2026--86413-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.23.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>8.23.0-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.319%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>25th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-86412?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C8.23.0-r0"><img alt="unspecified : CVE--2026--86412" src="https://img.shields.io/badge/CVE--2026--86412-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.23.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>8.23.0-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.266%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-86411?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C8.23.0-r0"><img alt="unspecified : CVE--2026--86411" src="https://img.shields.io/badge/CVE--2026--86411-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.23.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>8.23.0-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.153%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-86410?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C8.23.0-r0"><img alt="unspecified : CVE--2026--86410" src="https://img.shields.io/badge/CVE--2026--86410-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.23.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>8.23.0-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.252%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>17th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-86409?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C8.23.0-r0"><img alt="unspecified : CVE--2026--86409" src="https://img.shields.io/badge/CVE--2026--86409-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.23.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>8.23.0-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.313%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>24th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-107929?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C8.23.0-r0"><img alt="unspecified : CVE--2026--107929" src="https://img.shields.io/badge/CVE--2026--107929-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.23.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>8.23.0-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.239%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>15th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-107928?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C8.23.0-r0"><img alt="unspecified : CVE--2026--107928" src="https://img.shields.io/badge/CVE--2026--107928-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;8.23.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>8.23.0-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.293%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>22nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>zlib</strong> <code>1.3.2-r0</code> (apk)</summary>

<small><code>pkg:apk/alpine/zlib@1.3.2-r0?arch=x86_64&os_name=alpine&os_version=3.24</code></small><br/>

```dockerfile
# kubectl-release.dockerfile (5:5)
FROM alpine/kubectl:1.37.1
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-85091?s=alpine&n=zlib&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C1.3.2-r1"><img alt="high : CVE--2026--85091" src="https://img.shields.io/badge/CVE--2026--85091-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.3.2-r1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.3.2-r1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.469%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>40th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/text</strong> <code>0.40.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/text@0.40.0</code></small><br/>

```dockerfile
# kubectl-release.dockerfile (5:5)
FROM alpine/kubectl:1.37.1
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-56851?s=golang&n=text&ns=golang.org%2Fx&t=golang&vr=%3C0.41.0"><img alt="high : CVE--2026--56851" src="https://img.shields.io/badge/CVE--2026--56851-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.41.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.41.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.466%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>40th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Nickname profile can panic with an out-of-bounds slice error when transforming crafted input into a short destination buffer.

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
<tr><td>EPSS Percentile</td><td><code>53rd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.320%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>25th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Kubernetes kube-apiserver Vulnerable to Race Condition in k8s.io/kubernetes

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>musl</strong> <code>1.2.6-r2</code> (apk)</summary>

<small><code>pkg:apk/alpine/musl@1.2.6-r2?arch=x86_64&os_name=alpine&os_version=3.24</code></small><br/>

```dockerfile
# kubectl-release.dockerfile (5:5)
FROM alpine/kubectl:1.37.1
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-107891?s=alpine&n=musl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C1.2.6-r6"><img alt="unspecified : CVE--2026--107891" src="https://img.shields.io/badge/CVE--2026--107891-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.2.6-r6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.2.6-r6</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>
</table>

