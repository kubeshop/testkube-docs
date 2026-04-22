---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:a82bcf632e290487548aca48ed99aa2d5e0bb4bc1e53c68250204573441229e4</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 0" src="https://img.shields.io/badge/critical-0-lightgrey"/> <img alt="high: 6" src="https://img.shields.io/badge/high-6-e25d68"/> <img alt="medium: 3" src="https://img.shields.io/badge/medium-3-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/low-0-lightgrey"/> <!-- unspecified: 0 --></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>19 MB</td></tr>
<tr><td>packages</td><td>182</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 4" src="https://img.shields.io/badge/H-4-e25d68"/> <img alt="medium: 3" src="https://img.shields.io/badge/M-3-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>stdlib</strong> <code>1.26.1</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.26.1</code></small><br/>

```dockerfile
# tw-init.Dockerfile (18:18)
COPY --from=build /app/testworkflow-init /init
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-33810?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.2"><img alt="high : CVE--2026--33810" src="https://img.shields.io/badge/CVE--2026--33810-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.010%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When verifying a certificate chain containing excluded DNS constraints, these constraints are not correctly applied to wildcard DNS SANs which use a different case than the constraint.

This only affects validation of otherwise trusted certificate chains, issued by a root CA in the VerifyOptions.Roots CertPool, or in the system certificate pool.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32283?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.2"><img alt="high : CVE--2026--32283" src="https://img.shields.io/badge/CVE--2026--32283-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.015%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

If one side of the TLS connection sends multiple key update messages post-handshake in a single record, the connection can deadlock, causing uncontrolled consumption of resources. This can lead to a denial of service.

This only affects TLS 1.3.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32281?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.2"><img alt="high : CVE--2026--32281" src="https://img.shields.io/badge/CVE--2026--32281-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.018%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Validating certificate chains which use policies is unexpectedly inefficient when certificates in the chain contain a very large number of policy mappings, possibly causing denial of service.

This only affects validation of otherwise trusted certificate chains, issued by a root CA in the VerifyOptions.Roots CertPool, or in the system certificate pool.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32280?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.2"><img alt="high : CVE--2026--32280" src="https://img.shields.io/badge/CVE--2026--32280-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.017%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

During chain building, the amount of work that is done is not correctly limited when a large number of intermediate certificates are passed in VerifyOptions.Intermediates, which can lead to a denial of service. This affects both direct users of crypto/x509 and users of crypto/tls.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32282?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.2"><img alt="medium : CVE--2026--32282" src="https://img.shields.io/badge/CVE--2026--32282-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.008%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

On Linux, if the target of Root.Chmod is replaced with a symlink while the chmod operation is in progress, Chmod can operate on the target of the symlink, even when the target lies outside the root.

The Linux fchmodat syscall silently ignores the AT_SYMLINK_NOFOLLOW flag, which Root.Chmod uses to avoid symlink traversal. Root.Chmod checks its target before acting and returns an error if the target is a symlink lying outside the root, so the impact is limited to cases where the target is replaced with a symlink between the check and operation.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32289?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.2"><img alt="medium : CVE--2026--32289" src="https://img.shields.io/badge/CVE--2026--32289-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.010%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Context was not properly tracked across template branches for JS template literals, leading to possibly incorrect escaping of content when branches were used. Additionally template actions within JS template literals did not properly track the brace depth, leading to incorrect escaping being applied.

These issues could cause actions within JS template literals to be incorrectly or improperly escaped, leading to XSS vulnerabilities.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32288?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.2"><img alt="medium : CVE--2026--32288" src="https://img.shields.io/badge/CVE--2026--32288-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.004%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>0th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

tar.Reader can allocate an unbounded amount of memory when reading a maliciously-crafted archive containing a large number of sparse regions encoded in the "old GNU sparse map" format.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/docker/cli</strong> <code>29.3.0+incompatible</code> (golang)</summary>

<small><code>pkg:golang/github.com/docker/cli@29.3.0%2Bincompatible</code></small><br/>

```dockerfile
# tw-init.Dockerfile (18:18)
COPY --from=build /app/testworkflow-init /init
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-15558?s=golang&n=cli&ns=github.com%2Fdocker&t=golang&vr=%3E%3D19.03.0%2Bincompatible"><img alt="high : CVE--2025--15558" src="https://img.shields.io/badge/CVE--2025--15558-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=19.03.0+incompatible</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.023%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Docker CLI Plugins: Uncontrolled Search Path Element Leads to Local Privilege Escalation on Windows in github.com/docker/cli

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/moby/spdystream</strong> <code>0.5.0</code> (golang)</summary>

<small><code>pkg:golang/github.com/moby/spdystream@0.5.0</code></small><br/>

```dockerfile
# tw-init.Dockerfile (18:18)
COPY --from=build /app/testworkflow-init /init
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-35469?s=github&n=spdystream&ns=github.com%2Fmoby&t=golang&vr=%3C%3D0.5.0"><img alt="high 8.7: CVE--2026--35469" src="https://img.shields.io/badge/CVE--2026--35469-lightgrey?label=high%208.7&labelColor=e25d68"/></a> <i>Allocation of Resources Without Limits or Throttling</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=0.5.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.5.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>8.7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.014%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The SPDY/3 frame parser in spdystream does not validate
attacker-controlled counts and lengths before allocating memory. A
remote peer that can send SPDY frames to a service using spdystream can
cause the process to allocate gigabytes of memory with a small number of
malformed control frames, leading to an out-of-memory crash.
 
Three allocation paths in the receive side are affected:
1. **SETTINGS entry count** -- The SETTINGS frame reader reads a 32-bit
`numSettings` from the payload and allocates a slice of that size
without checking it against the declared frame length. An attacker
can set `numSettings` to a value far exceeding the actual payload,
triggering a large allocation before any setting data is read.
 
2. **Header count** -- `parseHeaderValueBlock` reads a 32-bit
`numHeaders` from the decompressed header block and allocates an
`http.Header` map of that size with no upper bound.
 
3. **Header field size** -- Individual header name and value lengths are
read as 32-bit integers and used directly as allocation sizes with
no validation.
 
Because SPDY header blocks are zlib-compressed, a small on-the-wire
payload can decompress into attacker-controlled bytes that the parser
interprets as 32-bit counts and lengths. A single crafted frame is
enough to exhaust process memory.
## Impact
 Any program that accepts SPDY connections using spdystream -- directly
or through a dependent library -- is affected. A remote peer that can
send SPDY frames to the service can crash the process with a single
crafted SPDY control frame, causing denial of service.
## Affected versions
 `github.com/moby/spdystream` <= v0.5.0
## Fix
 v0.5.1 addresses the receive-side allocation bugs and adds related
hardening:
 
**Core fixes:**
 
- **SETTINGS entry-count validation** -- The SETTINGS frame reader now
checks that `numSettings` is consistent with the declared frame
length (`numSettings <= (length-4)/8`) before allocating.
 
- **Header count limit** -- `parseHeaderValueBlock` enforces a maximum
number of headers per frame (default: 1000).
 
- **Header field size limit** -- Individual header name and value
lengths are checked against a per-field size limit (default: 1 MiB)
before allocation.
 
- **Connection closure on protocol error** -- The connection read loop
now closes the underlying `net.Conn` when it encounters an
`InvalidControlFrame` error, preventing further exploitation on the
same connection.
 
**Additional hardening:**
 
- **Write-side bounds checks** -- All frame write methods now verify
that payloads fit within the 24-bit length field, preventing the
library from producing invalid frames.
 
**Configurable limits:**
 
- Callers can adjust the defaults using `NewConnectionWithOptions` or
the lower-level `spdy.NewFramerWithOptions` with functional options:
`WithMaxControlFramePayloadSize`, `WithMaxHeaderFieldSize`, and
`WithMaxHeaderCount`.
 

</blockquote>
</details>
</details></td></tr>
</table>

