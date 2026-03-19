---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:28a8fd0756b5d8520e72fe935943324ac23d2ea9089239ec3a3e8c325c6a3f6a</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 1" src="https://img.shields.io/badge/critical-1-8b1924"/> <img alt="high: 1" src="https://img.shields.io/badge/high-1-e25d68"/> <img alt="medium: 1" src="https://img.shields.io/badge/medium-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/low-0-lightgrey"/> <!-- unspecified: 0 --></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>36 MB</td></tr>
<tr><td>packages</td><td>241</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>google.golang.org/grpc</strong> <code>1.76.0</code> (golang)</summary>

<small><code>pkg:golang/google.golang.org/grpc@1.76.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-33186?s=github&n=grpc&ns=google.golang.org&t=golang&vr=%3C1.79.3"><img alt="critical 9.1: CVE--2026--33186" src="https://img.shields.io/badge/CVE--2026--33186-lightgrey?label=critical%209.1&labelColor=8b1924"/></a> <i>Improper Authorization</i>

<table>
<tr><td>Affected range</td><td><code>&lt;1.79.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1.79.3</code></td></tr>
<tr><td>CVSS Score</td><td><code>9.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact
_What kind of vulnerability is it? Who is impacted?_

It is an **Authorization Bypass** resulting from **Improper Input Validation** of the HTTP/2 `:path` pseudo-header.

The gRPC-Go server was too lenient in its routing logic, accepting requests where the `:path` omitted the mandatory leading slash (e.g., `Service/Method` instead of `/Service/Method`). While the server successfully routed these requests to the correct handler, authorization interceptors (including the official `grpc/authz` package) evaluated the raw, non-canonical path string. Consequently, "deny" rules defined using canonical paths (starting with `/`) failed to match the incoming request, allowing it to bypass the policy if a fallback "allow" rule was present.

**Who is impacted?**
This affects gRPC-Go servers that meet both of the following criteria:
1. They use path-based authorization interceptors, such as the official RBAC implementation in `google.golang.org/grpc/authz` or custom interceptors relying on `info.FullMethod` or `grpc.Method(ctx)`.
2. Their security policy contains specific "deny" rules for canonical paths but allows other requests by default (a fallback "allow" rule).

The vulnerability is exploitable by an attacker who can send raw HTTP/2 frames with malformed `:path` headers directly to the gRPC server.

### Patches
_Has the problem been patched? What versions should users upgrade to?_

Yes, the issue has been patched. The fix ensures that any request with a `:path` that does not start with a leading slash is immediately rejected with a `codes.Unimplemented` error, preventing it from reaching authorization interceptors or handlers with a non-canonical path string.

Users should upgrade to the following versions (or newer):
* **v1.79.3**
* The latest **master** branch.

It is recommended that all users employing path-based authorization (especially `grpc/authz`) upgrade as soon as the patch is available in a tagged release.

### Workarounds
_Is there a way for users to fix or remediate the vulnerability without upgrading?_

While upgrading is the most secure and recommended path, users can mitigate the vulnerability using one of the following methods:

#### 1. Use a Validating Interceptor (Recommended Mitigation)
Add an "outermost" interceptor to your server that validates the path before any other authorization logic runs:

```go
func pathValidationInterceptor(ctx context.Context, req any, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (any, error) {
    if info.FullMethod == "" || info.FullMethod[0] != '/' {
        return nil, status.Errorf(codes.Unimplemented, "malformed method name")
    }   
    return handler(ctx, req)
}

// Ensure this is the FIRST interceptor in your chain
s := grpc.NewServer(
    grpc.ChainUnaryInterceptor(pathValidationInterceptor, authzInterceptor),
)
```

#### 2. Infrastructure-Level Normalization
If your gRPC server is behind a reverse proxy or load balancer (such as Envoy, NGINX, or an L7 Cloud Load Balancer), ensure it is configured to enforce strict HTTP/2 compliance for pseudo-headers and reject or normalize requests where the `:path` header does not start with a leading slash.

#### 3. Policy Hardening
Switch to a "default deny" posture in your authorization policies (explicitly listing all allowed paths and denying everything else) to reduce the risk of bypasses via malformed inputs.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/docker/cli</strong> <code>27.1.1+incompatible</code> (golang)</summary>

<small><code>pkg:golang/github.com/docker/cli@27.1.1%2Bincompatible</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-15558?s=github&n=cli&ns=github.com%2Fdocker&t=golang&vr=%3E%3D19.03.0%2C%3C29.2.0"><img alt="high 7.0: CVE--2025--15558" src="https://img.shields.io/badge/CVE--2025--15558-lightgrey?label=high%207.0&labelColor=e25d68"/></a> <i>Uncontrolled Search Path Element</i>

<table>
<tr><td>Affected range</td><td><code>>=19.03.0<br/><29.2.0</code></td></tr>
<tr><td>Fixed version</td><td><code>29.2.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:L/AC:L/AT:N/PR:L/UI:P/VC:H/VI:H/VA:H/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.011%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

This issue affects Docker CLI through 29.1.5

### Impact

Docker CLI for Windows searches for plugin binaries in `C:\ProgramData\Docker\cli-plugins`, a directory that does not exist by default. A low-privileged attacker can create this directory and place malicious CLI plugin binaries (docker-compose.exe, docker-buildx.exe, etc.) that are executed when a victim user opens Docker Desktop or invokes Docker CLI plugin features, and allow privilege-escalation if the `docker` CLI is executed as a privileged user.

This issue affects Docker CLI through v29.1.5 (fixed in v29.2.0). It impacts Windows binaries acting as a CLI plugin manager via the [`github.com/docker/cli/cli-plugins/manager`](https://pkg.go.dev/github.com/docker/cli@v29.1.5+incompatible/cli-plugins/manager) package, which is consumed by downstream projects such as Docker Compose.

Docker Compose became affected starting in v2.31.0, when it incorporated the relevant CLI plugin manager code (see https://github.com/docker/compose/pull/12300), and is fixed in v5.1.0.

This issue does not impact non-Windows binaries or projects that do not use the plugin manager code.

### Patches

Fixed version starts with 29.2.0

This issue was fixed in https://github.com/docker/cli/commit/13759330b1f7e7cb0d67047ea42c5482548ba7fa (https://github.com/docker/cli/pull/6713), which removed `%PROGRAMDATA%\Docker\cli-plugins` from the list of paths used for plugin-discovery on Windows.

### Workarounds

None

### Resources

- Pull request: "cli-plugins/manager: remove legacy system-wide cli-plugin path" (https://github.com/docker/cli/pull/6713)
- Patch: https://github.com/docker/cli/commit/13759330b1f7e7cb0d67047ea42c5482548ba7fa.patch

### Credits

Nitesh Surana (niteshsurana.com) of Trend Research of TrendAI

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/nats-io/nats-server/v2</strong> <code>2.11.4</code> (golang)</summary>

<small><code>pkg:golang/github.com/nats-io/nats-server@2.11.4#v2</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-27571?s=github&n=v2&ns=github.com%2Fnats-io%2Fnats-server&t=golang&vr=%3C2.11.12"><img alt="medium 5.9: CVE--2026--27571" src="https://img.shields.io/badge/CVE--2026--27571-lightgrey?label=medium%205.9&labelColor=fbb552"/></a> <i>Improper Handling of Highly Compressed Data (Data Amplification)</i>

<table>
<tr><td>Affected range</td><td><code>&lt;2.11.12</code></td></tr>
<tr><td>Fixed version</td><td><code>2.11.12</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.9</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.070%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact

The WebSockets handling of NATS messages handles compressed messages via the WebSockets negotiated compression.  The implementation bound the memory size of a NATS message but did not independently bound the memory consumption of the memory stream when constructing a NATS message which might then fail validation for size reasons.

An attacker can use a compression bomb to cause excessive memory consumption, often resulting in the operating system terminating the server process.

The use of compression is negotiated before authentication, so this does not require valid NATS credentials to exploit.

The fix was to bounds the decompression to fail once the message was too large, instead of continuing on.

### Patches

This was released in nats-server without being highlighted as a security issue.  It should have been, this was an oversight.  Per the NATS security policy, because this does not require a valid user, it is CVE-worthy.

This was fixed in the v2.11 series with v2.11.12 and in the v2.12 series with v2.12.3.

### Workarounds

This only affects deployments which use WebSockets and which expose the network port to untrusted end-points.

### References

This was reported to the NATS maintainers by Pavel Kohout of Aisle Research (www.aisle.com).

</blockquote>
</details>
</details></td></tr>
</table>

