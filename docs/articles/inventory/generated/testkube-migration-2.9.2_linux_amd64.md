---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:8605660b1afeec94b9f43edca887a81f2d57315af2b2354d57d1edcaf42c45db</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 0" src="https://img.shields.io/badge/critical-0-lightgrey"/> <img alt="high: 2" src="https://img.shields.io/badge/high-2-e25d68"/> <img alt="medium: 2" src="https://img.shields.io/badge/medium-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/low-0-lightgrey"/> <!-- unspecified: 0 --></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>52 MB</td></tr>
<tr><td>packages</td><td>288</td></tr>
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
</table>

