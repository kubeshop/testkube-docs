---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:9fecc7cbd863a4482ee059c2fb798c14697dc009ccce1aade6d9c794871047b2</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 2" src="https://img.shields.io/badge/critical-2-8b1924"/> <img alt="high: 2" src="https://img.shields.io/badge/high-2-e25d68"/> <img alt="medium: 1" src="https://img.shields.io/badge/medium-1-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/low-1-fce1a9"/> <!-- unspecified: 0 --></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>39 MB</td></tr>
<tr><td>packages</td><td>220</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/go-git/go-git/v5</strong> <code>5.12.1-0.20241202234942-63343bf5f918</code> (golang)</summary>

<small><code>pkg:golang/github.com/go-git/go-git@5.12.1-0.20241202234942-63343bf5f918#v5</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-21613?s=github&n=v5&ns=github.com%2Fgo-git%2Fgo-git&t=golang&vr=%3C5.13.0"><img alt="critical 9.2: CVE--2025--21613" src="https://img.shields.io/badge/CVE--2025--21613-lightgrey?label=critical%209.2&labelColor=8b1924"/></a> <i>Improper Neutralization of Argument Delimiters in a Command ('Argument Injection')</i>

<table>
<tr><td>Affected range</td><td><code>&lt;5.13.0</code></td></tr>
<tr><td>Fixed version</td><td><code>5.13.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>9.2</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:N/VC:H/VI:H/VA:H/SC:N/SI:N/SA:N/E:X/CR:X/IR:X/AR:X/MAV:X/MAC:X/MAT:X/MPR:X/MUI:X/MVC:X/MVI:X/MVA:X/MSC:X/MSI:X/MSA:X/S:X/AU:X/R:X/V:X/RE:X/U:Clear</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.043%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact
An argument injection vulnerability was discovered in `go-git` versions prior to `v5.13`. 

Successful exploitation of this vulnerability could allow an attacker to set arbitrary values to [git-upload-pack flags](https://git-scm.com/docs/git-upload-pack). This only happens when the `file` transport protocol is being used, as that is the only protocol that shells out to `git` binaries.

### Affected versions
Users running versions of `go-git` from `v4` and above are recommended to upgrade to `v5.13` in order to mitigate this vulnerability.

### Workarounds
In cases where a bump to the latest version of `go-git` is not possible, we recommend users to enforce restrict validation rules for values passed in the URL field.

## Credit
Thanks to @vin01 for responsibly disclosing this vulnerability to us.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-21614?s=github&n=v5&ns=github.com%2Fgo-git%2Fgo-git&t=golang&vr=%3C5.13.0"><img alt="high 7.5: CVE--2025--21614" src="https://img.shields.io/badge/CVE--2025--21614-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Improper Input Validation</i>

<table>
<tr><td>Affected range</td><td><code>&lt;5.13.0</code></td></tr>
<tr><td>Fixed version</td><td><code>5.13.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.043%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact
A denial of service (DoS) vulnerability was discovered in go-git versions prior to `v5.13`. This vulnerability allows an attacker to perform denial of service attacks by providing specially crafted responses from a Git server which triggers resource exhaustion in `go-git` clients. 

This is a `go-git` implementation issue and does not affect the upstream `git` cli.

### Patches
Users running versions of `go-git` from `v4` and above are recommended to upgrade to `v5.13` in order to mitigate this vulnerability.

### Workarounds
In cases where a bump to the latest version of `go-git` is not possible, we recommend limiting its use to only trust-worthy Git servers.

## Credit
Thanks to Ionut Lalu for responsibly disclosing this vulnerability to us.


</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/crypto</strong> <code>0.29.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/crypto@0.29.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-45337?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.31.0"><img alt="critical 9.1: CVE--2024--45337" src="https://img.shields.io/badge/CVE--2024--45337-lightgrey?label=critical%209.1&labelColor=8b1924"/></a> <i>Improper Authorization</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.31.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.31.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>9.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.045%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Applications and libraries which misuse the ServerConfig.PublicKeyCallback callback may be susceptible to an authorization bypass.

The documentation for ServerConfig.PublicKeyCallback says that "A call to this function does not guarantee that the key offered is in fact used to authenticate." Specifically, the SSH protocol allows clients to inquire about whether a public key is acceptable before proving control of the corresponding private key. PublicKeyCallback may be called with multiple keys, and the order in which the keys were provided cannot be used to infer which key the client successfully authenticated with, if any. Some applications, which store the key(s) passed to PublicKeyCallback (or derived information) and make security relevant determinations based on it once the connection is established, may make incorrect assumptions.

For example, an attacker may send public keys A and B, and then authenticate with A. PublicKeyCallback would be called only twice, first with A and then with B. A vulnerable application may then make authorization decisions based on key B for which the attacker does not actually control the private key.

Since this API is widely misused, as a partial mitigation golang.org/x/crypto@v0.31.0 enforces the property that, when successfully authenticating via public key, the last key passed to ServerConfig.PublicKeyCallback will be the key used to authenticate the connection. PublicKeyCallback will now be called multiple times with the same key, if necessary. Note that the client may still not control the last key passed to PublicKeyCallback if the connection is then authenticated with a different method, such as PasswordCallback, KeyboardInteractiveCallback, or NoClientAuth.

Users should be using the Extensions field of the Permissions return value from the various authentication callbacks to record data associated with the authentication attempt instead of referencing external state. Once the connection is established the state corresponding to the successful authentication attempt can be retrieved via the ServerConn.Permissions field. Note that some third-party libraries misuse the Permissions type by sharing it across authentication attempts; users of third-party libraries should refer to the relevant projects for guidance.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/net</strong> <code>0.30.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/net@0.30.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2024-45338?s=github&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.33.0"><img alt="high 8.7: CVE--2024--45338" src="https://img.shields.io/badge/CVE--2024--45338-lightgrey?label=high%208.7&labelColor=e25d68"/></a> <i>Allocation of Resources Without Limits or Throttling</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.33.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.33.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>8.7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.045%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An attacker can craft an input to the Parse functions that would be processed non-linearly with respect to its length, resulting in extremely slow parsing. This could cause a denial of service.

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
<tr><td>EPSS Score</td><td><code>0.046%</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.043%</code></td></tr>
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

