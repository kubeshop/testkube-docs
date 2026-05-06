---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:ea4a8cc31dc36acfb013af27b17087e61bea09ab1629b96b9249912bb20ef04c</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 0" src="https://img.shields.io/badge/critical-0-lightgrey"/> <img alt="high: 2" src="https://img.shields.io/badge/high-2-e25d68"/> <img alt="medium: 4" src="https://img.shields.io/badge/medium-4-fbb552"/> <img alt="low: 2" src="https://img.shields.io/badge/low-2-fce1a9"/> <!-- unspecified: 0 --></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>78 MB</td></tr>
<tr><td>packages</td><td>345</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/docker/docker</strong> <code>28.5.2+incompatible</code> (golang)</summary>

<small><code>pkg:golang/github.com/docker/docker@28.5.2%2Bincompatible</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-34040?s=github&n=docker&ns=github.com%2Fdocker&t=golang&vr=%3C29.3.1"><img alt="high 8.8: CVE--2026--34040" src="https://img.shields.io/badge/CVE--2026--34040-lightgrey?label=high%208.8&labelColor=e25d68"/></a> <i>Authentication Bypass Using an Alternate Path or Channel</i>

<table>
<tr><td>Affected range</td><td><code>&lt;29.3.1</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>8.8</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:C/C:H/I:H/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.009%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

## Summary

A security vulnerability has been detected that allows attackers to bypass [authorization plugins (AuthZ)](https://docs.docker.com/engine/extend/plugins_authorization/) under specific circumstances. The base likelihood of this being exploited is low.

This is an incomplete fix for [CVE-2024-41110](https://github.com/moby/moby/security/advisories/GHSA-v23v-6jw2-98fq).

## Impact

**If you don't use AuthZ plugins, you are not affected.**

Using a specially-crafted API request, an attacker could make the Docker daemon forward the request to an authorization plugin without the body. The authorization plugin may allow a request which it would have otherwise denied if the body had been forwarded to it.

Anyone who depends on authorization plugins that introspect the request body to make access control decisions is potentially impacted.

## Workarounds

If unable to update immediately:
- Avoid using AuthZ plugins that rely on request body inspection for security decisions.
- Restrict access to the Docker API to trusted parties, following the principle of least privilege.

## Credits

- 1seal / Oleh Konko ([@<!-- -->1seal](https://github.com/1seal))
- Cody (c@<!-- -->wormhole.guru)
- Asim Viladi Oglu Manizada (@<!-- -->manizada)

## Resources

- [CVE-2024-41110 / GHSA-v23v-6jw2-98fq](https://github.com/moby/moby/security/advisories/GHSA-v23v-6jw2-98fq)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33997?s=github&n=docker&ns=github.com%2Fdocker&t=golang&vr=%3C29.3.1"><img alt="medium 6.8: CVE--2026--33997" src="https://img.shields.io/badge/CVE--2026--33997-lightgrey?label=medium%206.8&labelColor=fbb552"/></a> <i>Off-by-one Error</i>

<table>
<tr><td>Affected range</td><td><code>&lt;29.3.1</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>6.8</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:H/PR:N/UI:R/S:U/C:H/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.016%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

## Summary

A security vulnerability has been detected that allows [plugins](https://docs.docker.com/engine/extend/legacy_plugins/) privilege validation to be bypassed during `docker plugin install`. Due to an error in the daemon's privilege comparison logic, the daemon may incorrectly accept a privilege set that differs from the one approved by the user.

Plugins that request exactly one privilege are also affected, because no comparison is performed at all.

## Impact

**If plugins are not in use, there is no impact.**

When a plugin is installed, the daemon computes the privileges required by the plugin's configuration and compares them with the privileges approved during installation. A malicious plugin can exploit this bug so that the daemon accepts privileges that differ from what was intended to be approved.

Anyone who depends on the plugin installation approval flow as a meaningful security boundary is potentially impacted.

Depending on the privilege set involved, this may include highly sensitive plugin permissions such as broad device access.

**For consideration: exploitation still requires a plugin to be installed from a malicious source, and Docker plugins are relatively uncommon. Docker Desktop also does not support plugins.**

## Workarounds

If unable to update immediately:
- Do not install plugins from untrusted sources
- Carefully review all privileges requested during `docker plugin install`
- Restrict access to the Docker daemon to trusted parties, following the principle of least privilege
- Avoid relying on plugin privilege approval as the only control boundary for sensitive environments

## Credits

- Reported by Cody (c@<!-- -->wormhole.guru, PGP 0x9FA5B73E)

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/docker/cli</strong> <code>29.4.0+incompatible</code> (golang)</summary>

<small><code>pkg:golang/github.com/docker/cli@29.4.0%2Bincompatible</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-15558?s=golang&n=cli&ns=github.com%2Fdocker&t=golang&vr=%3E%3D19.03.0%2Bincompatible"><img alt="high : CVE--2025--15558" src="https://img.shields.io/badge/CVE--2025--15558-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=19.03.0+incompatible</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.020%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Docker CLI Plugins: Uncontrolled Search Path Element Leads to Local Privilege Escalation on Windows in github.com/docker/cli

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>github.com/go-git/go-git/v5</strong> <code>5.16.5</code> (golang)</summary>

<small><code>pkg:golang/github.com/go-git/go-git/v5@5.16.5</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-34165?s=github&n=v5&ns=github.com%2Fgo-git%2Fgo-git&t=golang&vr=%3E%3D5.0.0%2C%3C%3D5.17.0"><img alt="medium 5.0: CVE--2026--34165" src="https://img.shields.io/badge/CVE--2026--34165-lightgrey?label=medium%205.0&labelColor=fbb552"/></a> <i>Integer Underflow (Wrap or Wraparound)</i>

<table>
<tr><td>Affected range</td><td><code>>=5.0.0<br/><=5.17.0</code></td></tr>
<tr><td>Fixed version</td><td><code>5.17.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:L/UI:R/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.006%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>0th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact

A vulnerability has been identified in which a maliciously crafted `.idx` file can cause asymmetric memory consumption, potentially exhausting available memory and resulting in a Denial of Service (DoS) condition.

Exploitation requires write access to the local repository's `.git` directory, it order to create or alter existing `.idx` files. 

### Patches

Users should upgrade to `v5.17.1`, or the latest `v6` [pseudo-version](https://go.dev/ref/mod#pseudo-versions), in order to mitigate this vulnerability.

### Credit

The go-git maintainers thank @<!-- -->kq5y for finding and reporting this issue privately to the `go-git` project.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-41506?s=github&n=v5&ns=github.com%2Fgo-git%2Fgo-git&t=golang&vr=%3C%3D5.17.2"><img alt="medium 4.7: CVE--2026--41506" src="https://img.shields.io/badge/CVE--2026--41506-lightgrey?label=medium%204.7&labelColor=fbb552"/></a> <i>Insufficiently Protected Credentials</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=5.17.2</code></td></tr>
<tr><td>Fixed version</td><td><code>5.18.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>4.7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:N/A:N</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact
`go-git` may leak HTTP authentication credentials when following redirects during smart-HTTP clone and fetch operations.

If a remote repository responds to the initial `/info/refs` request with a redirect to a different host, go-git updates the session endpoint to the redirected location and reuses the original authentication for subsequent requests. This can result in the credentials (e.g. Authorization headers) being sent to an unintended host.

An attacker controlling or influencing the redirect target can capture these credentials and potentially reuse them to access the victim’s repositories or other resources, depending on the scope of the credential.

**Clients using `go-git` exclusively with trusted remotes (for example, GitHub or GitLab), and over a secure HTTPS connection, are not affected by this issue.** The risk arises when interacting with untrusted or misconfigured Git servers, or when using unsecured HTTP connections, which is not recommended. Such configurations also expose clients to a broader class of security risks beyond this issue, including credential interception and tampering of repository data.

### Patches
Users should upgrade to `v5.18.0`, or `v6.0.0-alpha.2`, in order to mitigate this vulnerability. Versions prior to v5 are likely to be affected, users are recommended to upgrade to a supported `go-git` version.

The patched versions add support for configuring [followRedirects](https://git-scm.com/docs/git-config#Documentation/git-config.txt-httpfollowRedirects). In line with upstream behaviour, the default is now `initial`, while users can opt into `FollowRedirects` or `NoFollowRedirects` programmatically.

### Credit
Thanks to the 3 separate reports from @<!-- -->celinke97, @<!-- -->N0zoM1z0 and @<!-- -->AyushParkara. Thanks for finding and reporting this issue privately to the `go-git` project. :bow:

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33762?s=github&n=v5&ns=github.com%2Fgo-git%2Fgo-git&t=golang&vr=%3C%3D5.17.0"><img alt="low 2.8: CVE--2026--33762" src="https://img.shields.io/badge/CVE--2026--33762-lightgrey?label=low%202.8&labelColor=fce1a9"/></a> <i>Improper Validation of Array Index</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=5.17.0</code></td></tr>
<tr><td>Fixed version</td><td><code>5.17.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>2.8</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:L/UI:R/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.006%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>0th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact

`go-git`’s index decoder for format version 4 fails to validate the path name prefix length before applying it to the previously decoded path name. A maliciously crafted index file can trigger an out-of-bounds slice operation, resulting in a runtime panic during normal index parsing.

This issue only affects Git index format version 4. Earlier formats (`go-git` supports only `v2` and `v3`) are not vulnerable to this issue.

An attacker able to supply a crafted `.git/index` file can cause applications using go-git to panic while reading the index. If the application does not recover from panics, this results in process termination, leading to a denial-of-service (DoS) condition.

Exploitation requires the ability to modify or inject a Git index file within the local repository in disk. This typically implies write access to the `.git` directory.

### Patches

Users should upgrade to `v5.17.1`, or the latest `v6` [pseudo-version](https://go.dev/ref/mod#pseudo-versions), in order to mitigate this vulnerability.

### Credit

go-git maintainers thank @<!-- -->kq5y for finding and reporting this issue privately to the `go-git` project.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/gofiber/fiber/v2</strong> <code>2.52.12</code> (golang)</summary>

<small><code>pkg:golang/github.com/gofiber/fiber/v2@2.52.12</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-42554?s=github&n=v2&ns=github.com%2Fgofiber%2Ffiber&t=golang&vr=%3C%3D2.52.12"><img alt="medium 5.3: CVE--2026--42554" src="https://img.shields.io/badge/CVE--2026--42554-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=2.52.12</code></td></tr>
<tr><td>Fixed version</td><td><code>2.52.13</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:P/VC:N/VI:N/VA:N/SC:L/SI:L/SA:N</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

## Summary

**Description**

A Cross-Site Scripting (CWE-79) vulnerability in Go Fiber allows a remote attacker to inject arbitrary HTML/JavaScript by supplying `Accept: text/html` on any request whose handler passes attacker-influenced data to the AutoFormat() feature. This affects `github.com/gofiber/fiber/v3` (`DefaultRes.AutoFormat`) through version 3.1.0 and `github.com/gofiber/fiber/v2` (`Ctx.Format`) through version 2.52.12. 

The developer opts into content negotiation by calling AutoFormat(), but does not opt into raw HTML emission for a particular request; Fiber chooses that branch from attacker-controlled Accept. Five of the six branches of the same method already escape. `JSON`, `XML`, `MsgPack`, and `CBOR` all route through encoders that neutralize markup; the txt branch emits `text/plain` and cannot execute. The html branch is the sole outlier in a method whose name (`AutoFormat`) and symmetrical structure actively telegraph "safe, format-agnostic reply."

## Details
The issue resides in `res.go` within `(*DefaultRes).AutoFormat()`. The method negotiates against the request Accept header, selects one of `html | json | txt | xml | msgpack | cbor`, and serializes the caller-supplied body accordingly.

The "html" branch concatenates the stringified body directly into HTML markup with no output encoding:
- `accept` comes from `r.c.Accepts(...)`, i.e. is fully attacker-controlled. An attacker can force the "html" branch on any `AutoFormat()` call regardless of which format the developer tested against.
- `b` is produced from `body` via direct assignment (`string` / `[]byte`) or `fmt.Sprintf("%v", body)`. No `html.EscapeString` is applied.
- The resulting string is sent as `text/html; charset=utf-8`, so browsers render it as active HTML.

```go
// res.go
func (r *DefaultRes) AutoFormat(body any) error {

    accept := r.c.DefaultReq.Accepts("html", "json", "txt", "xml", "msgpack", "cbor")

    r.Type(accept)
    var b string
    switch val := body.(type) {
    case string:
        b = val
    case []byte:
        b = r.c.app.toString(val)
    default:
        b = fmt.Sprintf("%v", val)
    }

    switch accept {
    case "txt":
        return r.SendString(b)
    case "json":
        return r.JSON(body)
    case "xml":
        return r.XML(body)
    case "html":
        return r.SendString("<p>" + b + "</p>")
    case "msgpack":
        return r.MsgPack(body)
    case "cbor":
        return r.CBOR(body)
    }
    return r.SendString(b)
}
```
## Impact

This impacts all current v3 releases ≤ 3.1.0 containing `DefaultRes.AutoFormat`, and all current v2 releases ≤ 2.52.12 where the identical `"<p>" + b + "</p>"` construction exists in `(*Ctx).Format()`. Exploitation requires that an application call `c.AutoFormat(v)` where `v` (or a field stringified by `%v`) contains request-influenced data.

A handler that uses `AutoFormat()` to serve multiple representations of the same data can be turned into an HTML XSS sink when the client sends `Accept: text/html`, even if the developer only tested the JSON path.

This may result in:
- **Reflected XSS** in the application's origin via any request-derived value reaching `AutoFormat`.
- **Stored XSS** where the reflected value originates from persisted input later passed to `AutoFormat`.

## Proposed Patch

The injection surface is `r.Type("html")` followed by `r.SendString(b)` with unescaped caller data, where it constructs markup on the caller's behalf around a value whose HTML-ness the caller did not declare. A few options:
- `AutoFormat()` should treat `body` as data, not markup, in the `"html"` branch and escape it before concatenating it into the framework-generated `<p>` wrapper. Callers that need raw negotiated HTML should use `Format()` with an explicit HTML handler.
- Introduce a sibling method that escapes, leave `AutoFormat` alone for backward compatibility.

HTML-escape the value in the "html" branch before concatenating it into the `<p>` wrapper.
```go
import "html"

// ...
case "html":
    return r.SendString("<p>" + html.EscapeString(b) + "</p>")
```

`html.EscapeString` escapes `<`, `>`, `&`, `'`, `"`, which is sufficient for an element-text context. Apply the same change to v2's `(*Ctx).Format()`.

## Proof of Concept

```bash
# Create project directory
mkdir fiber-xss-poc && cd fiber-xss-poc

# Initialize Go module
go mod init fiber-xss-poc

# Install Fiber v3
go get github.com/gofiber/fiber/v3

# Create the PoC file
cat > main.go << 'EOF'
package main

import (
	"github.com/gofiber/fiber/v3"
)

type User struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}

func main() {
	app := fiber.New()
	
	app.Get("/api/user", func(c fiber.Ctx) error {
		user := User{
			ID:   1,
			Name: c.Query("name", "anonymous"),
		}
		return c.AutoFormat(user)
	})

	app.Listen(":3000")
}
EOF

# Run it
go run main.go
}
```

Benign JSON
```bash
curl -s 'http://127.0.0.1:3000/api/user?name=Alice' -H 'Accept: application/json'
{"id":1,"name":"Alice"}
```

HTML sink enables XSS
```bash
curl -s 'http://127.0.0.1:3000/api/user?name=<script>alert(document.domain)</script>' -H 'Accept: text/html'
<p>{1 <script>alert(document.domain)</script>}</p>
```

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>github.com/cloudflare/circl</strong> <code>1.6.1</code> (golang)</summary>

<small><code>pkg:golang/github.com/cloudflare/circl@1.6.1</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-1229?s=github&n=circl&ns=github.com%2Fcloudflare&t=golang&vr=%3C1.6.3"><img alt="low 2.9: CVE--2026--1229" src="https://img.shields.io/badge/CVE--2026--1229-lightgrey?label=low%202.9&labelColor=fce1a9"/></a> <i>Incorrect Calculation</i>

<table>
<tr><td>Affected range</td><td><code>&lt;1.6.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1.6.3</code></td></tr>
<tr><td>CVSS Score</td><td><code>2.9</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:H/AT:N/PR:N/UI:N/VC:L/VI:L/VA:L/SC:L/SI:L/SA:L/E:P/S:N/AU:Y/U:Amber</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.023%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The CombinedMult function in the CIRCL ecc/p384 package (secp384r1 curve) produces an incorrect value for specific inputs. The issue is fixed by using complete addition formulas.
ECDH and ECDSA signing relying on this curve are not affected.

The bug was fixed in **[v1.6.3](https://github.com/cloudflare/circl/releases/tag/v1.6.3)**.

</blockquote>
</details>
</details></td></tr>
</table>

