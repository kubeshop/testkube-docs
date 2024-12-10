---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:c933cd323ba0d3443a6280b02041f701e05632bf6168858714fd4331df226895</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 0" src="https://img.shields.io/badge/critical-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/high-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/medium-1-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/low-1-fce1a9"/> <!-- unspecified: 0 --></td></tr>
<tr><td>size</td><td>23 MB</td></tr>
<tr><td>packages</td><td>205</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>gopkg.in/square/go-jose.v2</strong> <code>2.6.0</code> (golang)</summary>

<small><code>pkg:golang/gopkg.in/square/go-jose.v2@2.6.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-28180?s=github&n=go-jose.v2&ns=gopkg.in%2Fsquare&t=golang&vr=%3C%3D2.6.0"><img alt="medium 4.3: CVE--2024--28180" src="https://img.shields.io/badge/CVE--2024--28180-lightgrey?label=medium%204.3&labelColor=fbb552"/></a> <i>Improper Handling of Highly Compressed Data (Data Amplification)</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=2.6.0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>4.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.05%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>19th percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>github.com/golang-jwt/jwt/v4</strong> <code>4.5.0</code> (golang)</summary>

<small><code>pkg:golang/github.com/golang-jwt/jwt@4.5.0#v4</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-51744?s=github&n=v4&ns=github.com%2Fgolang-jwt%2Fjwt&t=golang&vr=%3C4.5.1"><img alt="low 2.3: CVE--2024--51744" src="https://img.shields.io/badge/CVE--2024--51744-lightgrey?label=low%202.3&labelColor=fce1a9"/></a> <i>Improper Verification of Cryptographic Signature</i>

<table>
<tr><td>Affected range</td><td><code>&lt;4.5.1</code></td></tr>
<tr><td>Fixed version</td><td><code>4.5.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>2.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:P/VC:L/VI:N/VA:N/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.04%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Summary

Unclear documentation of the error behavior in `ParseWithClaims` can lead to situation where users are potentially not checking errors in the way they should be. Especially, if a token is both expired and invalid, the errors returned by `ParseWithClaims` return both error codes. If users only check for the `jwt.ErrTokenExpired ` using `error.Is`, they will ignore the embedded `jwt.ErrTokenSignatureInvalid` and thus potentially accept invalid tokens.

### Fix

We have back-ported the error handling logic from the `v5` branch to the `v4` branch. In this logic, the `ParseWithClaims` function will immediately return in "dangerous" situations (e.g., an invalid signature), limiting the combined errors only to situations where the signature is valid, but further validation failed (e.g., if the signature is valid, but is expired AND has the wrong audience). This fix is part of the 4.5.1 release.

### Workaround 

We are aware that this changes the behaviour of an established function and is not 100 % backwards compatible, so updating to 4.5.1 might break your code. In case you cannot update to 4.5.0, please make sure that you are properly checking for all errors ("dangerous" ones first), so that you are not running in the case detailed above.

```Go
token, err := /* jwt.Parse or similar */
if token.Valid {
	fmt.Println("You look nice today")
} else if errors.Is(err, jwt.ErrTokenMalformed) {
	fmt.Println("That's not even a token")
} else if errors.Is(err, jwt.ErrTokenUnverifiable) {
	fmt.Println("We could not verify this token")
} else if errors.Is(err, jwt.ErrTokenSignatureInvalid) {
	fmt.Println("This token has an invalid signature")
} else if errors.Is(err, jwt.ErrTokenExpired) || errors.Is(err, jwt.ErrTokenNotValidYet) {
	// Token is either expired or not active yet
	fmt.Println("Timing is everything")
} else {
	fmt.Println("Couldn't handle this token:", err)
}
```

</blockquote>
</details>
</details></td></tr>
</table>

