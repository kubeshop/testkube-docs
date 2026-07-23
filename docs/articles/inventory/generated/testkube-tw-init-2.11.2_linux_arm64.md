---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:3410e3ac8eb2d8ddddc65d1014aafa0034d5abafda5b14236886f5f334333b21</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 0" src="https://img.shields.io/badge/critical-0-lightgrey"/> <img alt="high: 2" src="https://img.shields.io/badge/high-2-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/medium-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/low-0-lightgrey"/> <img alt="unspecified: 2" src="https://img.shields.io/badge/unspecified-2-lightgrey"/></td></tr>
<tr><td>platform</td><td>linux/arm64</td></tr>
<tr><td>size</td><td>17 MB</td></tr>
<tr><td>packages</td><td>178</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>google.golang.org/grpc</strong> <code>1.81.1</code> (golang)</summary>

<small><code>pkg:golang/google.golang.org/grpc@1.81.1</code></small><br/>
<a href="https://scout.docker.com/v/GHSA-hrxh-6v49-42gf?s=github&n=grpc&ns=google.golang.org&t=golang&vr=%3C1.82.1"><img alt="high 8.8: GHSA--hrxh--6v49--42gf" src="https://img.shields.io/badge/GHSA--hrxh--6v49--42gf-lightgrey?label=high%208.8&labelColor=e25d68"/></a> <i>Uncaught Exception</i>

<table>
<tr><td>Affected range</td><td><code>&lt;1.82.1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.82.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>8.8</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:H/VA:H/SC:N/SI:N/SA:N</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Multiple security vulnerabilities have been identified and addressed in grpc-go affecting the xDS RBAC authorization engine (internal/xds/rbac) and the HTTP/2 transport server implementation (internal/transport). These vulnerabilities could result in:

- Authorization Bypass (Fail-Open) when translating xDS RBAC policies containing `Metadata` or `RequestedServerName` fields.
- Denial of Service (High CPU Consumption) due to an HTTP/2 Rapid Reset mitigation bypass during client-initiated stream resets.
- Denial of Service (Server Panic) when parsing crafted xDS RBAC policies containing `NOT` rules around unsupported fields.


### Impact
_What kind of vulnerability is it? Who is impacted?_

#### xDS RBAC Authorization Bypass via `Metadata` & `RequestedServerName` matchers

- Affected Component: xDS RBAC 
- Impact: When building policy matchers for gRPC RBAC from xDS configurations, unsupported `permission` and `principal` rules (specifically `Metadata` and `RequestedServerName`) were silently ignored and treated as no-ops.
  - If an authorization policy relied purely on these matchers for access control, treating those rules as no-ops effectively removed the restrictions.
- If these unsupported rules were nested inside logical `NOT` rules (`Permission_NotRule` / `Principal_NotId`) or multi-condition `OR/AND` rules, silently dropping them changed the boolean logic flow of the authorization engine.

As a result, policy evaluation decisions could fail open, allowing unauthorized clients to access protected gRPC services or resources.

#### HTTP/2 Rapid Reset Mitigation Bypass / Denial of Service via Stream Aborts

- Affected Component: HTTP/2 transport
- Impact: Earlier mitigations in grpc-go for HTTP/2 Rapid Reset only applied threshold checks to items that directly resulted in control frames being written back to the wire, such as `SETTINGS` ACKs or server-initiated `RST_STREAM`s.

When a client initiated a rapid flood of stream creation (`HEADERS`) immediately followed by stream termination `RST_STREAM`, items queued up in the control buffer without counting against the transport response frame threshold. An attacker can repeatedly trigger this flood sequence to bypass reader blocking, resulting in high CPU usage, and Denial of Service (DoS).

#### Denial of Service (Panic) in xDS RBAC Engine via Unsupported Fields inside NOT Rules

- Affected Component: xDS RBAC 
- Impact: The xDS RBAC policy translators recursively generate matchers for nested rules. When a `NOT` rule wrapped an unsupported or unhandled field (such as `SourcedMetadata`), the recursive step returned an empty matcher. This could result in a runtime panic when the RBAC engine attempts to authorize an incoming request.

An attacker or misconfigured/malicious xDS management server delivering an LDS/RDS update containing a `NOT` rule around an unhandled field causes the gRPC server process to crash immediately (CWE-248 / Denial of Service).

### Patches
_Has the problem been patched? What versions should users upgrade to?_

All three issues have been fixed in `master` and will be released in 1.82.1 shortly.

### Workarounds
_Is there a way for users to fix or remediate the vulnerability without upgrading?_

If upgrading grpc-go immediately is not possible, apply the following workarounds based on your deployment architecture:

* For xDS RBAC Vulnerabilities & Panics: Ensure that upstream xDS management servers do not push RBAC policies containing `Metadata`, `RequestedServerName`, or `NOT` rules wrapping unsupported fields (such as `SourcedMetadata`) to grpc-go servers.
* For HTTP/2 Rapid Reset DOS: Configure upstream reverse proxies or load balancers (such as Envoy) with strict HTTP/2 `max_concurrent_streams` limits and active rate limiting on `RST_STREAM` frequency per connection.

### Severity

  | Vulnerability | Qualitative Severity | Approximate CVSS v3.1 Score | Primary Impact |
  | :--- | :--- | :--- | :--- |
  | **xDS RBAC Authorization Bypass** | **High** | `8.2` | Unauthorized Access / Fail-Open |
  | **HTTP/2 Rapid Reset DOS Bypass** | **High** | `7.5` | High CPU Consumption / Denial of Service |
  | **xDS RBAC Engine Server Panic** | **Medium** | `5.9` | Process Crash / Denial of Service |

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/docker/cli</strong> <code>29.5.3+incompatible</code> (golang)</summary>

<small><code>pkg:golang/github.com/docker/cli@29.5.3%2Bincompatible</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-15558?s=golang&n=cli&ns=github.com%2Fdocker&t=golang&vr=%3E%3D19.03.0%2Bincompatible"><img alt="high : CVE--2025--15558" src="https://img.shields.io/badge/CVE--2025--15558-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=19.03.0+incompatible</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.472%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>38th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Docker CLI Plugins: Uncontrolled Search Path Element Leads to Local Privilege Escalation on Windows in github.com/docker/cli

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>golang.org/x/crypto</strong> <code>0.53.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/crypto@0.53.0</code></small><br/>
<a href="https://scout.docker.com/v/GO-2026-5932?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3E%3D0"><img alt="unspecified : GO--2026--5932" src="https://img.shields.io/badge/GO--2026--5932-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The golang.org/x/crypto/openpgp package is unsafe by design, has numerous known security issues, is not maintained, and should not be used.

If you are required to interoperate with OpenPGP systems and need a maintained package, consider github.com/ProtonMail/go-crypto/openpgp which is a maintained fork that aims to be a drop-in replacement for this package.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>golang.org/x/text</strong> <code>0.38.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/text@0.38.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-56852?s=golang&n=text&ns=golang.org%2Fx&t=golang&vr=%3C0.39.0"><img alt="unspecified : CVE--2026--56852" src="https://img.shields.io/badge/CVE--2026--56852-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.39.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.39.0</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A norm.Iter can enter an infinite loop when handling input containing invalid UTF-8 bytes.

</blockquote>
</details>
</details></td></tr>
</table>

