---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:de5d153c1da128cd4ed2b28b8728aeceed09be9657d5470b5afd1f757a9b8231</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 0" src="https://img.shields.io/badge/critical-0-lightgrey"/> <img alt="high: 4" src="https://img.shields.io/badge/high-4-e25d68"/> <img alt="medium: 3" src="https://img.shields.io/badge/medium-3-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/low-1-fce1a9"/> <!-- unspecified: 0 --></td></tr>
<tr><td>platform</td><td>linux/arm64</td></tr>
<tr><td>size</td><td>54 MB</td></tr>
<tr><td>packages</td><td>254</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/oauth2</strong> <code>0.26.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/oauth2@0.26.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-22868?s=golang&n=oauth2&ns=golang.org%2Fx&t=golang&vr=%3C0.27.0"><img alt="high : CVE--2025--22868" src="https://img.shields.io/badge/CVE--2025--22868-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.27.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.27.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.063%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>20th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An attacker can pass a malicious malformed token which causes unexpected memory to be consumed during parsing.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/golang-jwt/jwt/v5</strong> <code>5.2.1</code> (golang)</summary>

<small><code>pkg:golang/github.com/golang-jwt/jwt@5.2.1#v5</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-30204?s=github&n=v5&ns=github.com%2Fgolang-jwt%2Fjwt&t=golang&vr=%3E%3D5.0.0-rc.1%2C%3C5.2.2"><img alt="high 8.7: CVE--2025--30204" src="https://img.shields.io/badge/CVE--2025--30204-lightgrey?label=high%208.7&labelColor=e25d68"/></a> <i>Asymmetric Resource Consumption (Amplification)</i>

<table>
<tr><td>Affected range</td><td><code>>=5.0.0-rc.1<br/><5.2.2</code></td></tr>
<tr><td>Fixed version</td><td><code>5.2.2</code></td></tr>
<tr><td>CVSS Score</td><td><code>8.7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.025%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Summary

Function [`parse.ParseUnverified`](https://github.com/golang-jwt/jwt/blob/c035977d9e11c351f4c05dfeae193923cbab49ee/parser.go#L138-L139) currently splits (via a call to [strings.Split](https://pkg.go.dev/strings#Split)) its argument (which is untrusted data) on periods.

As a result, in the face of a malicious request whose _Authorization_ header consists of `Bearer ` followed by many period characters, a call to that function incurs allocations to the tune of O(n) bytes (where n stands for the length of the function's argument), with a constant factor of about 16. Relevant weakness: [CWE-405: Asymmetric Resource Consumption (Amplification)](https://cwe.mitre.org/data/definitions/405.html)

### Details

See [`parse.ParseUnverified`](https://github.com/golang-jwt/jwt/blob/c035977d9e11c351f4c05dfeae193923cbab49ee/parser.go#L138-L139) 

### Impact

Excessive memory allocation

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/golang-jwt/jwt/v4</strong> <code>4.5.1</code> (golang)</summary>

<small><code>pkg:golang/github.com/golang-jwt/jwt@4.5.1#v4</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-30204?s=github&n=v4&ns=github.com%2Fgolang-jwt%2Fjwt&t=golang&vr=%3C4.5.2"><img alt="high 8.7: CVE--2025--30204" src="https://img.shields.io/badge/CVE--2025--30204-lightgrey?label=high%208.7&labelColor=e25d68"/></a> <i>Asymmetric Resource Consumption (Amplification)</i>

<table>
<tr><td>Affected range</td><td><code>&lt;4.5.2</code></td></tr>
<tr><td>Fixed version</td><td><code>4.5.2</code></td></tr>
<tr><td>CVSS Score</td><td><code>8.7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.025%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Summary

Function [`parse.ParseUnverified`](https://github.com/golang-jwt/jwt/blob/c035977d9e11c351f4c05dfeae193923cbab49ee/parser.go#L138-L139) currently splits (via a call to [strings.Split](https://pkg.go.dev/strings#Split)) its argument (which is untrusted data) on periods.

As a result, in the face of a malicious request whose _Authorization_ header consists of `Bearer ` followed by many period characters, a call to that function incurs allocations to the tune of O(n) bytes (where n stands for the length of the function's argument), with a constant factor of about 16. Relevant weakness: [CWE-405: Asymmetric Resource Consumption (Amplification)](https://cwe.mitre.org/data/definitions/405.html)

### Details

See [`parse.ParseUnverified`](https://github.com/golang-jwt/jwt/blob/c035977d9e11c351f4c05dfeae193923cbab49ee/parser.go#L138-L139) 

### Impact

Excessive memory allocation

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/gofiber/fiber/v2</strong> <code>2.52.6</code> (golang)</summary>

<small><code>pkg:golang/github.com/gofiber/fiber@2.52.6#v2</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-48075?s=github&n=v2&ns=github.com%2Fgofiber%2Ffiber&t=golang&vr=%3E%3D2.52.6%2C%3C2.52.7"><img alt="high 7.7: CVE--2025--48075" src="https://img.shields.io/badge/CVE--2025--48075-lightgrey?label=high%207.7&labelColor=e25d68"/></a> <i>Improper Validation of Array Index</i>

<table>
<tr><td>Affected range</td><td><code>>=2.52.6<br/><2.52.7</code></td></tr>
<tr><td>Fixed version</td><td><code>2.52.7</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N/E:P</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.052%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>stdlib</strong> <code>1.23.9</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.23.9</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-4673?s=golang&n=stdlib&t=golang&vr=%3C1.23.10"><img alt="medium : CVE--2025--4673" src="https://img.shields.io/badge/CVE--2025--4673-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.23.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.23.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.030%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>7th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Proxy-Authorization and Proxy-Authenticate headers persisted on cross-origin redirects potentially leaking sensitive information.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-0913?s=golang&n=stdlib&t=golang&vr=%3C1.23.10"><img alt="medium : CVE--2025--0913" src="https://img.shields.io/badge/CVE--2025--0913-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.23.10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.23.10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.012%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

os.OpenFile(path, os.O_CREATE|O_EXCL) behaved differently on Unix and Windows systems when the target path was a dangling symlink. On Unix systems, OpenFile with O_CREATE and O_EXCL flags never follows symlinks. On Windows, when the target path was a symlink to a nonexistent location, OpenFile would create a file in that location. OpenFile now always returns an error when the O_CREATE and O_EXCL flags are both set and the target path is a symlink.

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
<tr><td>EPSS Score</td><td><code>0.254%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>49th percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>github.com/cloudflare/circl</strong> <code>1.5.0</code> (golang)</summary>

<small><code>pkg:golang/github.com/cloudflare/circl@1.5.0</code></small><br/>
<a href="https://scout.docker.com/v/GHSA-2x5j-vhc8-9cwm?s=github&n=circl&ns=github.com%2Fcloudflare&t=golang&vr=%3C1.6.1"><img alt="low : GHSA--2x5j--vhc8--9cwm" src="https://img.shields.io/badge/GHSA--2x5j--vhc8--9cwm-lightgrey?label=low%20&labelColor=fce1a9"/></a> <i>Improper Input Validation</i>

<table>
<tr><td>Affected range</td><td><code>&lt;1.6.1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.6.1</code></td></tr>
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
</details></td></tr>
</table>

