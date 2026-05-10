---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:16779bc22fdbd4a0c74328e600b3376699903682ff91ae2be87c69525fdb0157</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 0" src="https://img.shields.io/badge/critical-0-lightgrey"/> <img alt="high: 7" src="https://img.shields.io/badge/high-7-e25d68"/> <img alt="medium: 6" src="https://img.shields.io/badge/medium-6-fbb552"/> <img alt="low: 2" src="https://img.shields.io/badge/low-2-fce1a9"/> <!-- unspecified: 0 --></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>58 MB</td></tr>
<tr><td>packages</td><td>327</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 5" src="https://img.shields.io/badge/H-5-e25d68"/> <img alt="medium: 3" src="https://img.shields.io/badge/M-3-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>stdlib</strong> <code>1.26.2</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.26.2</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-42499?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.3"><img alt="high : CVE--2026--42499" src="https://img.shields.io/badge/CVE--2026--42499-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.008%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Pathological inputs could cause DoS through consumePhrase when parsing an email address according to RFC 5322.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39836?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.3"><img alt="high : CVE--2026--39836" src="https://img.shields.io/badge/CVE--2026--39836-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.007%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Dial and LookupPort functions panic on Windows when provided with an input containing a NUL (0).

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39820?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.3"><img alt="high : CVE--2026--39820" src="https://img.shields.io/badge/CVE--2026--39820-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.018%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Well-crafted inputs reaching ParseAddress, ParseAddressList, and ParseDate were able to trigger excessive CPU exhaustion and memory allocations.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33814?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.3"><img alt="high : CVE--2026--33814" src="https://img.shields.io/badge/CVE--2026--33814-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.008%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When processing HTTP/2 SETTINGS frames, transport will enter an infinite loop of writing CONTINUATION frames if it receives a SETTINGS_MAX_FRAME_SIZE with a value of 0.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33811?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.3"><img alt="high : CVE--2026--33811" src="https://img.shields.io/badge/CVE--2026--33811-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.007%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When using LookupCNAME with the cgo DNS resolver, a very long CNAME response can trigger a double-free of C memory and a crash.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39826?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.3"><img alt="medium : CVE--2026--39826" src="https://img.shields.io/badge/CVE--2026--39826-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.012%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

If a trusted template author were to write a <script> tag containing an empty 'type' attribute or a 'type' attribute with an ASCII whitespace, the execution of the template would incorrectly escape any data passed into the <script> block.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39823?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.3"><img alt="medium : CVE--2026--39823" src="https://img.shields.io/badge/CVE--2026--39823-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.011%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

CVE-2026-27142 fixed a vulnerability in which URLs were not correctly escaped inside of a <meta> tag's <content> attribute. If the URL content were to insert ASCII whitespaces around the '=' rune inside of the <content> attribute, the escaper would fail to similarly escape it, leading to XSS.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-39825?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.3"><img alt="medium : CVE--2026--39825" src="https://img.shields.io/badge/CVE--2026--39825-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.3</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.3</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.007%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

ReverseProxy can forward queries containing parameters not visible to Rewrite functions.

When used with a Rewrite function, or a Director function which parses query parameters, ReverseProxy sanitizes the forwarded request to remove query parameters which are not parsed by url.ParseQuery. ReverseProxy does not take ParseQuery's limit on the total number of query parameters (controlled by GODEBUG=urlmaxqueryparams=N) into account. This can permit ReverseProxy to forward a request containing a query parameter that is not visible to the Rewrite function.

For example, the query "a1=x&a2=x&...&a10000=x&hidden=y" can forward the parameter "hidden=y" while hiding it from the proxy's Rewrite function.

</blockquote>
</details>
</details></td></tr>

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

