---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:44fe2be8bf804aae8f9f550f4b60841d0b7e02bb8136fbf6057ebe5dc4ccf002</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 3" src="https://img.shields.io/badge/critical-3-8b1924"/> <img alt="high: 13" src="https://img.shields.io/badge/high-13-e25d68"/> <img alt="medium: 1" src="https://img.shields.io/badge/medium-1-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/low-1-fce1a9"/> <img alt="unspecified: 4" src="https://img.shields.io/badge/unspecified-4-lightgrey"/></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>26 MB</td></tr>
<tr><td>packages</td><td>127</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 2" src="https://img.shields.io/badge/C-2-8b1924"/> <img alt="high: 8" src="https://img.shields.io/badge/H-8-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 3" src="https://img.shields.io/badge/U-3-lightgrey"/><strong>stdlib</strong> <code>1.26.8</code> (golang)</summary>

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
</table>

<details><summary>Description</summary>
<blockquote>

The HTTP/2 server can refund connection-level flow control twice for the same data: Once when a client resets a stream (refunding data for any sent-but-unread portion of the stream), and again when a request handler reads the buffered data. A malicious client can exploit this to bypass the configured connection-level flow control limit (MaxReceiveBufferPerConnection). Total buffered data is still limited by the concurrent stream limit and stream-level flow control.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-97031?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="high : CVE--2026--97031" src="https://img.shields.io/badge/CVE--2026--97031-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
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
</table>

<details><summary>Description</summary>
<blockquote>

When http.Transport sends an HTTP/1 CONNECT request with a non-empty Request.Body, it writes the body directly to the connection without framing after the request headers. If the server rejects the CONNECT request with a non-2xx keep-alive response, Transport returns the connection to the idle pool. Because CONNECT requests do not have a request body, the server may interpret the trailing body bytes as a subsequent pipelined HTTP/1.1 request on the connection, leaving the pooled connection desynchronized and causing the next caller that reuses it to read the response to the injected request. In reverse proxies (including httputil.ReverseProxy) that forward CONNECT requests through a shared Transport, this can lead to cross-user response poisoning.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-97032?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="unspecified : CVE--2026--97032" src="https://img.shields.io/badge/CVE--2026--97032-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

HTTP/2 servers could end up crashing due to inadvertently modifying its HPACK encoder concurrently. This happens because the server modifies the HPACK encoder from two goroutines without synchronization: one uses the encoder to encode a HEADERS frame as part of a response sent to a client and the other modifies the encoder's table size when handling a SETTINGS frame containing SETTINGS_HEADER_TABLE_SIZE that a client sends. A malicious client can repeatedly send a request while changing the header table size to crash the server.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-97030?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="unspecified : CVE--2026--97030" src="https://img.shields.io/badge/CVE--2026--97030-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A trusted template author may have previously written a valid template wherein the use of the 'yield' keyword would not be correctly escaped.

We now ensure that valid keyword uses are escaped and non-keyword uses are not escaped.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-94448?s=golang&n=stdlib&t=golang&vr=%3C1.26.9"><img alt="unspecified : CVE--2026--94448" src="https://img.shields.io/badge/CVE--2026--94448-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.26.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.9</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When a JavaScript template literal contains consecutive expressions, the context tracking state was not properly reset upon entering a new expression.

We now ensure that template-literal expression entries correctly reset context variables so all subsequent regular expression literals are accurately recognized and escaped.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 3" src="https://img.shields.io/badge/H-3-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>golang.org/x/net</strong> <code>0.57.0</code> (golang)</summary>

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
</table>

<details><summary>Description</summary>
<blockquote>

The HTTP/2 server can refund connection-level flow control twice for the same data: Once when a client resets a stream (refunding data for any sent-but-unread portion of the stream), and again when a request handler reads the buffered data. A malicious client can exploit this to bypass the configured connection-level flow control limit (MaxReceiveBufferPerConnection). Total buffered data is still limited by the concurrent stream limit and stream-level flow control.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-78669?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.60.0"><img alt="high : CVE--2026--78669" src="https://img.shields.io/badge/CVE--2026--78669-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.60.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.60.0</code></td></tr>
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
</table>

<details><summary>Description</summary>
<blockquote>

When "Trailer" headers are sent by a client, the HTTP server internally uses the header values to populate the Request.Trailer map passed to the server handler. Because Request.Trailer is a map, each entry incurs memory overhead. For HTTP/2 servers, a malicious client can exploit this by sending a "Trailer" header that declares a large number of fields, causing the server to allocate a disproportionate amount of memory while bypassing Server.MaxHeaderValueCount and Server.MaxHeaderBytes limits. This exploit is not applicable for HTTP/1 servers, which do not support multiplexing a large number of requests over one TCP connection, and whose Server.MaxHeaderBytes are calculated differently.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-97032?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.60.0"><img alt="unspecified : CVE--2026--97032" src="https://img.shields.io/badge/CVE--2026--97032-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.60.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.60.0</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

HTTP/2 servers could end up crashing due to inadvertently modifying its HPACK encoder concurrently. This happens because the server modifies the HPACK encoder from two goroutines without synchronization: one uses the encoder to encode a HEADERS frame as part of a response sent to a client and the other modifies the encoder's table size when handling a SETTINGS frame containing SETTINGS_HEADER_TABLE_SIZE that a client sends. A malicious client can repeatedly send a request while changing the header table size to crash the server.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>zlib</strong> <code>1.3.2-r0</code> (apk)</summary>

<small><code>pkg:apk/alpine/zlib@1.3.2-r0?os_name=alpine&os_version=3.24</code></small><br/>

```dockerfile
# kubectl-release.dockerfile (5:5)
FROM alpine/kubectl:1.37.1
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-85091?s=alpine&n=zlib&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C1.3.2-r1"><img alt="high : CVE--2026--85091" src="https://img.shields.io/badge/CVE--2026--85091-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.3.2-r1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.3.2-r1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.356%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>27th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.155%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
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
<tr><td>EPSS Percentile</td><td><code>52nd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.314%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>22nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Kubernetes kube-apiserver Vulnerable to Race Condition in k8s.io/kubernetes

</blockquote>
</details>
</details></td></tr>
</table>

