---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:9678254f18e418d2b5a7e73c628fa94023015f22345501da9eb50922af69ed07</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 0" src="https://img.shields.io/badge/critical-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/high-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/medium-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/low-1-fce1a9"/> <!-- unspecified: 0 --></td></tr>
<tr><td>platform</td><td>linux/arm64</td></tr>
<tr><td>size</td><td>17 MB</td></tr>
<tr><td>packages</td><td>165</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>github.com/golang-jwt/jwt/v4</strong> <code>4.5.0</code> (golang)</summary>

<small><code>pkg:golang/github.com/golang-jwt/jwt@4.5.0#v4</code></small><br/>

```dockerfile
# tw-init.Dockerfile (18:18)
COPY --from=build /app/testworkflow-init /init
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-30204?s=github&n=v4&ns=github.com%2Fgolang-jwt%2Fjwt&t=golang&vr=%3C4.5.2"><img alt="high 8.7: CVE--2025--30204" src="https://img.shields.io/badge/CVE--2025--30204-lightgrey?label=high%208.7&labelColor=e25d68"/></a> <i>Asymmetric Resource Consumption (Amplification)</i>

<table>
<tr><td>Affected range</td><td><code>&lt;4.5.2</code></td></tr>
<tr><td>Fixed version</td><td><code>4.5.2</code></td></tr>
<tr><td>CVSS Score</td><td><code>8.7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.033%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>8th percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2024-51744?s=github&n=v4&ns=github.com%2Fgolang-jwt%2Fjwt&t=golang&vr=%3C4.5.1"><img alt="low 2.3: CVE--2024--51744" src="https://img.shields.io/badge/CVE--2024--51744-lightgrey?label=low%202.3&labelColor=fce1a9"/></a> <i>Improper Verification of Cryptographic Signature</i>

<table>
<tr><td>Affected range</td><td><code>&lt;4.5.1</code></td></tr>
<tr><td>Fixed version</td><td><code>4.5.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>2.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:P/VC:L/VI:N/VA:N/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.019%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
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

