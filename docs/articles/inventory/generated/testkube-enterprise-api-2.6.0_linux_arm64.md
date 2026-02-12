---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:975653e2437ec9f48fdfe3cc297080930de0ff568e78867e4634928e923ec025</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 1" src="https://img.shields.io/badge/critical-1-8b1924"/> <img alt="high: 2" src="https://img.shields.io/badge/high-2-e25d68"/> <img alt="medium: 3" src="https://img.shields.io/badge/medium-3-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/low-1-fce1a9"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/unspecified-1-lightgrey"/></td></tr>
<tr><td>platform</td><td>linux/arm64</td></tr>
<tr><td>size</td><td>67 MB</td></tr>
<tr><td>packages</td><td>415</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 2" src="https://img.shields.io/badge/H-2-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/gofiber/fiber/v2</strong> <code>2.52.6</code> (golang)</summary>

<small><code>pkg:golang/github.com/gofiber/fiber@2.52.6#v2</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-66630?s=github&n=v2&ns=github.com%2Fgofiber%2Ffiber&t=golang&vr=%3C2.52.11"><img alt="critical 9.2: CVE--2025--66630" src="https://img.shields.io/badge/CVE--2025--66630-lightgrey?label=critical%209.2&labelColor=8b1924"/></a> <i>Use of Cryptographically Weak Pseudo-Random Number Generator (PRNG)</i>

<table>
<tr><td>Affected range</td><td><code>&lt;2.52.11</code></td></tr>
<tr><td>Fixed version</td><td><code>2.52.11</code></td></tr>
<tr><td>CVSS Score</td><td><code>9.2</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:H/AT:N/PR:N/UI:N/VC:H/VI:H/VA:L/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.012%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Fiber v2 contains an internal vendored copy of `gofiber/utils`, and its functions `UUIDv4()` and `UUID()` inherit the same critical weakness described in the upstream advisory. On **Go versions prior to 1.24**, the underlying `crypto/rand` implementation **can return an error** if secure randomness cannot be obtained. In such cases, these Fiber v2 UUID functions silently fall back to generating predictable values — the all-zero UUID `00000000-0000-0000-0000-000000000000`.

On Go **1.24+**, the language guarantees that `crypto/rand` no longer returns an error (it will block or panic instead), so this vulnerability primarily affects **Fiber v2 users running Go 1.23 or earlier**, which Fiber v2 officially supports.

Because no error is returned by the Fiber v2 UUID functions, application code may unknowingly rely on *predictable, repeated, or low-entropy identifiers* in security-critical pathways. This is especially impactful because many Fiber v2 middleware components (session middleware, CSRF, rate limiting, request-ID generation, etc.) **default to using `utils.UUIDv4()`**.

Impact includes, but is not limited to:

* **Session fixation or hijacking** (predictable session IDs)
* **CSRF token forgery** or bypass
* **Authentication replay / token prediction**
* **Potential denial-of-service (DoS):** if the zero UUID is generated, key-based structures (sessions, rate-limits, caches, CSRF stores) may collapse into a single shared key, causing overwrites, lock contention, or state corruption
* **Request-ID collisions**, undermining logging and trace integrity
* **General compromise** of confidentiality, integrity, and authorization logic relying on UUIDs for uniqueness or secrecy

All Fiber v2 versions containing the internal `utils.UUIDv4()` / `utils.UUID()` implementation are affected when running on **Go <1.24**. **No patched Fiber v2 release currently exists.**

---

## Suggested Mitigations / Workarounds

Update to the latest version of Fiber v2.

---

### Likelihood / Environmental Factors

It’s important to note that **entropy exhaustion on modern Linux systems is extremely rare**, as the kernel’s CSPRNG is resilient and non-blocking. However, **entropy-source failures** — where `crypto/rand` cannot read from its underlying provider — are significantly more likely in certain environments.

This includes containerized deployments, restricted sandboxes, misconfigured systems lacking read access to `/dev/urandom` or platform-equivalent sources, chrooted or jailed environments, embedded devices, or systems with non-standard or degraded randomness providers. On **Go <1.24**, such failures cause `crypto/rand` to return an error, which the Fiber v2 UUID functions currently treat as a signal to silently generate predictable UUIDs, including the zero UUID. This silent fallback is the root cause of the vulnerability.

---

## References

* Upstream advisory for `gofiber/utils`: **GHSA-m98w-cqp3-qcqr**
* Source repositories:

  * `github.com/gofiber/fiber`
  * `github.com/gofiber/utils`

---

## Credits / Reporter

Reported by **@sixcolors** (Fiber Maintainer / Security Team)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-54801?s=github&n=v2&ns=github.com%2Fgofiber%2Ffiber&t=golang&vr=%3C%3D2.52.8"><img alt="high 8.7: CVE--2025--54801" src="https://img.shields.io/badge/CVE--2025--54801-lightgrey?label=high%208.7&labelColor=e25d68"/></a> <i>Memory Allocation with Excessive Size Value</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=2.52.8</code></td></tr>
<tr><td>Fixed version</td><td><code>2.52.9</code></td></tr>
<tr><td>CVSS Score</td><td><code>8.7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.065%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>20th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Description

When using Fiber's `Ctx.BodyParser` to parse form data containing a large numeric key that represents a slice index (e.g., `test.18446744073704`), the application crashes due to an out-of-bounds slice allocation in the underlying schema decoder.

The root cause is that the decoder attempts to allocate a slice of length `idx + 1` without validating whether the index is within a safe or reasonable range. If `idx` is excessively large, this leads to an integer overflow or memory exhaustion, causing a panic or crash.


### Steps to Reproduce

Create a POST request handler that accepts `x-www-form-urlencoded` data

```go
package main

import (
	"fmt"
	"net/http"

	"github.com/gofiber/fiber/v2"
)

type RequestBody struct {
	NestedContent []*struct{} `form:"test"`
}

func main() {
	app := fiber.New()

	app.Post("/", func(c *fiber.Ctx) error {
		formData := RequestBody{}
		if err := c.BodyParser(&formData); err != nil {
			fmt.Println(err)
			return c.SendStatus(http.StatusUnprocessableEntity)
		}
		return nil
	})

	fmt.Println(app.Listen(":3000"))
}

```

Run the server and send a POST request with a large numeric key in form data, such as:

```bash
curl -v -X POST localhost:3000 --data-raw 'test.18446744073704' \
  -H 'Content-Type: application/x-www-form-urlencoded'
```


### Relevant Code Snippet

Within the decoder's [decode method](https://github.com/gofiber/fiber/blob/v2.52.8/internal/schema/decoder.go#L249):

```go
idx := parts[0].index
if v.IsNil() || v.Len() < idx+1 {
    value := reflect.MakeSlice(t, idx+1, idx+1)  // <-- Panic/crash occurs here when idx is huge
    if v.Len() < idx+1 {
        reflect.Copy(value, v)
    }
    v.Set(value)
}
```

The `idx` is not validated before use, leading to unsafe slice allocation for extremely large values.

---

### Impact

- Application panic or crash on malicious or malformed input.
- Potential denial of service (DoS) via memory exhaustion or server crash.
- Lack of defensive checks in the parsing code causes instability.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-48075?s=github&n=v2&ns=github.com%2Fgofiber%2Ffiber&t=golang&vr=%3E%3D2.52.6%2C%3C2.52.7"><img alt="high 7.7: CVE--2025--48075" src="https://img.shields.io/badge/CVE--2025--48075-lightgrey?label=high%207.7&labelColor=e25d68"/></a> <i>Improper Validation of Array Index</i>

<table>
<tr><td>Affected range</td><td><code>>=2.52.6<br/><2.52.7</code></td></tr>
<tr><td>Fixed version</td><td><code>2.52.7</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N/E:P</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.197%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>42nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Summary
When using the `fiber.Ctx.BodyParser` to parse into a struct with range values, a panic occurs when trying to parse a negative range index

### Details
`fiber.Ctx.BodyParser` can map flat data to nested slices using `key[idx]value` syntax, however when idx is negative, it causes a panic instead of returning an error stating it cannot process the data. 

Since this data is user-provided, this could lead to denial of service for anyone relying on this `fiber.Ctx.BodyParser`  functionality  

### Reproducing
Take a simple GoFiberV2 server which returns a JSON encoded version of the FormData
```go
package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gofiber/fiber/v2"
)

type RequestBody struct {
	NestedContent []*struct {
		Value string `form:"value"`
	} `form:"nested-content"`
}

func main() {
	app := fiber.New()

	app.Post("/", func(c *fiber.Ctx) error {
		formData := RequestBody{}
		if err := c.BodyParser(&formData); err != nil {
			fmt.Println(err)
			return c.SendStatus(http.StatusUnprocessableEntity)
		}
                c.Set("Content-Type", "application/json")
                s, _ := json.Marshal(formData)
                return c.SendString(string(s))
	})

	fmt.Println(app.Listen(":3000"))
}

```

**Correct Behaviour**
Send a valid request such as:
```bash
curl --location 'localhost:3000' \
--form 'nested-content[0].value="Foo"' \
--form 'nested-content[1].value="Bar"'
```
You recieve valid JSON
```json
{"NestedContent":[{"Value":"Foo"},{"Value":"Bar"}]}
```

**Crashing behaviour**
Send an invalid request such as:
```bash
curl --location 'localhost:3000' \
--form 'nested-content[-1].value="Foo"'
```
The server panics and crashes
```
panic: reflect: slice index out of range

goroutine 8 [running]:
reflect.Value.Index({0x738000?, 0xc000010858?, 0x0?}, 0x738000?)
        /usr/lib/go-1.24/src/reflect/value.go:1418 +0x167
github.com/gofiber/fiber/v2/internal/schema.(*Decoder).decode(0xc00002c570, {0x75d420?, 0xc000010858?, 0x7ff424822108?}, {0xc00001c498, 0x17}, {0xc00014e2d0, 0x2, 0x2}, {0xc00002c710, ...})
[...]
```

### Impact
Anyone using `fiber.Ctx.BodyParser` can/will have their servers crashed when an invalid payload is sent

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/docker/docker</strong> <code>28.2.2+incompatible</code> (golang)</summary>

<small><code>pkg:golang/github.com/docker/docker@28.2.2%2Bincompatible</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-54388?s=github&n=docker&ns=github.com%2Fdocker&t=golang&vr=%3E%3D28.2.0%2C%3C28.3.3"><img alt="medium 5.1: CVE--2025--54388" src="https://img.shields.io/badge/CVE--2025--54388-lightgrey?label=medium%205.1&labelColor=fbb552"/></a> <i>Missing Initialization of Resource</i>

<table>
<tr><td>Affected range</td><td><code>>=28.2.0<br/><28.3.3</code></td></tr>
<tr><td>Fixed version</td><td><code>28.3.3</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:A/AC:L/AT:N/PR:N/UI:P/VC:L/VI:L/VA:N/SC:L/SI:L/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.005%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>0th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Moby is an open source container framework developed by Docker Inc. that is distributed as Docker Engine, Mirantis Container Runtime, and various other downstream projects/products. The Moby daemon component (dockerd), which is developed as [moby/moby](https://github.com/moby/moby) is commonly referred to as Docker, or Docker Engine.

Firewalld is a daemon used by some Linux distributions to provide a dynamically managed firewall. When Firewalld is running, Docker uses its iptables backend to create rules, including rules to isolate containers in one bridge network from containers in other bridge networks.

### Impact

The iptables rules created by Docker are removed when firewalld is reloaded using, for example "firewall-cmd --reload", "killall -HUP firewalld", or "systemctl reload firewalld".

When that happens, Docker must re-create the rules. However, in affected versions of Docker, the iptables rules that prevent packets arriving on a host interface from reaching container addresses are not re-created.

Once these rules have been removed, a remote host configured with a route to a Docker bridge network can access published ports, even when those ports were only published to a loopback address. Unpublished ports remain inaccessible.

For example, following a firewalld reload on a Docker host with address `192.168.0.10` and a bridge network with subnet `172.17.0.0/16`, running the following command on another host in the local network will give it access to published ports on container addresses in that network: `ip route add 172.17.0.0/16 via 192.168.0.10`.

Containers running in networks created with `--internal` or equivalent have no access to other networks. Containers that are only connected to these networks remain isolated after a firewalld reload.

Where Docker Engine is not running in the host's network namespace, it is unaffected. Including, for example, Rootless Mode, and Docker Desktop.

### Patches

Moby releases older than 28.2.0 are not affected. A fix is available in moby release 28.3.3.

### Workarounds
After reloading firewalld, either:
- Restart the docker daemon,
- Re-create bridge networks, or
- Use rootless mode.

### References
https://firewalld.org/
https://firewalld.org/documentation/howto/reload-firewalld.html

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/go-git/go-git/v5</strong> <code>5.13.1</code> (golang)</summary>

<small><code>pkg:golang/github.com/go-git/go-git@5.13.1#v5</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-25934?s=github&n=v5&ns=github.com%2Fgo-git%2Fgo-git&t=golang&vr=%3C%3D5.16.4"><img alt="medium 4.3: CVE--2026--25934" src="https://img.shields.io/badge/CVE--2026--25934-lightgrey?label=medium%204.3&labelColor=fbb552"/></a> <i>Improper Validation of Integrity Check Value</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=5.16.4</code></td></tr>
<tr><td>Fixed version</td><td><code>5.16.5</code></td></tr>
<tr><td>CVSS Score</td><td><code>4.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:N/I:L/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.005%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>0th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact 

A vulnerability was discovered in `go-git` whereby data integrity values for `.pack` and `.idx` files were not properly verified. This resulted in `go-git` potentially consuming corrupted files, which would likely result in unexpected errors such as `object not found`.

For context, clients fetch [`packfiles`](https://git-scm.com/docs/pack-protocol#_packfile_data) from upstream Git servers. Those files contain a checksum of their contents, so that clients can perform integrity checks before consuming it. The pack indexes (`.idx`) are [generated](https://git-scm.com/docs/pack-format) locally by `go-git`, or the `git` cli, when new `.pack` files are received and processed. The integrity checks for both files were not being verified correctly.

Note that the lack of verification of the packfile checksum has no impact on the trust relationship between the client and server, which is enforced based on the protocol being used (e.g. TLS in the case of `https://` or known hosts for `ssh://`). In other words, the packfile checksum verification does not provide any security benefits when connecting to a malicious or compromised Git server.

### Patches

Users should upgrade to `v5.16.5`, or the latest `v6` [pseudo-version](https://go.dev/ref/mod#pseudo-versions), in order to mitigate this vulnerability.

### Workarounds

In case updating to a fixed version of `go-git` is not possible, users can run [git fsck](https://git-scm.com/docs/git-fsck) from the `git` cli to check for data corruption on a given repository. 

### Credit

Thanks @N0zoM1z0 for finding and reporting this issue privately to the `go-git` project.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>gopkg.in/square/go-jose.v2</strong> <code>2.6.0</code> (golang)</summary>

<small><code>pkg:golang/gopkg.in/square/go-jose.v2@2.6.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-28180?s=github&n=go-jose.v2&ns=gopkg.in%2Fsquare&t=golang&vr=%3C%3D2.6.0"><img alt="medium 4.3: CVE--2024--28180" src="https://img.shields.io/badge/CVE--2024--28180-lightgrey?label=medium%204.3&labelColor=fbb552"/></a> <i>Improper Handling of Highly Compressed Data (Data Amplification)</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=2.6.0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>4.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>3.644%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>88th percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>github.com/cloudflare/circl</strong> <code>1.5.0</code> (golang)</summary>

<small><code>pkg:golang/github.com/cloudflare/circl@1.5.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-8556?s=github&n=circl&ns=github.com%2Fcloudflare&t=golang&vr=%3C1.6.1"><img alt="low 3.7: CVE--2025--8556" src="https://img.shields.io/badge/CVE--2025--8556-lightgrey?label=low%203.7&labelColor=fce1a9"/></a> <i>Improper Input Validation</i>

<table>
<tr><td>Affected range</td><td><code>&lt;1.6.1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.6.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>3.7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:L/I:N/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.014%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact
The CIRCL implementation of FourQ fails to validate user-supplied low-order points during Diffie-Hellman key exchange, potentially allowing attackers to force the identity point and compromise session security.

Moreover, there is an incorrect point validation in ScalarMult can lead to incorrect results in the isEqual function and if a point is on the curve.


### Patches
Version 1.6.1 (https://github.com/cloudflare/circl/tree/v1.6.1) mitigates the identified issues.

We acknowledge Alon Livne (Botanica Software Labs) for the reported findings.

</blockquote>
</details>

<a href="https://scout.docker.com/v/GHSA-2x5j-vhc8-9cwm?s=gitlab&n=circl&ns=github.com%2Fcloudflare&t=golang&vr=%3C1.6.1"><img alt="unspecified : GHSA--2x5j--vhc8--9cwm" src="https://img.shields.io/badge/GHSA--2x5j--vhc8--9cwm-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> <i>OWASP Top Ten 2017 Category A9 - Using Components with Known Vulnerabilities</i>

<table>
<tr><td>Affected range</td><td><code>&lt;1.6.1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.6.1</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The CIRCL implementation of FourQ fails to validate user-supplied low-order points during Diffie-Hellman key exchange, potentially allowing attackers to force the identity point and compromise session security.

Moreover, there is an incorrect point validation in ScalarMult can lead to incorrect results in the isEqual function and if a point is on the curve.

</blockquote>
</details>
</details></td></tr>
</table>

