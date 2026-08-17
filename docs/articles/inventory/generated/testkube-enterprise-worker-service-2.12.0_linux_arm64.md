---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:d88e95b0bace1217915d120061785066125947b885650d1c40dc7f26b91be1ae</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 1" src="https://img.shields.io/badge/critical-1-8b1924"/> <img alt="high: 9" src="https://img.shields.io/badge/high-9-e25d68"/> <img alt="medium: 3" src="https://img.shields.io/badge/medium-3-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/low-0-lightgrey"/> <img alt="unspecified: 3" src="https://img.shields.io/badge/unspecified-3-lightgrey"/></td></tr>
<tr><td>platform</td><td>linux/arm64</td></tr>
<tr><td>size</td><td>55 MB</td></tr>
<tr><td>packages</td><td>326</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 5" src="https://img.shields.io/badge/H-5-e25d68"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>stdlib</strong> <code>1.26.5</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.26.5</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-39821?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.6"><img alt="critical : CVE--2026--39821" src="https://img.shields.io/badge/CVE--2026--39821-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.655%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>48th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The ToASCII and ToUnicode functions incorrectly accept Punycode-encoded labels that decode to an ASCII-only label. For example, ToUnicode("xn--example-.com") incorrectly returns the name "example.com" rather than an error.

This behavior can lead to privilege escalation in programs using the idna package. For example, a program which performs privilege checks on the ASCII hostname may reject "example.com" but permit "xn--example-.com". If that program subsequently converts the ASCII hostname to Unicode, it will inadvertently permits access to the Unicode name "example.com".

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-56862?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.6"><img alt="high : CVE--2026--56862" src="https://img.shields.io/badge/CVE--2026--56862-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.483%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>40th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Handshake messages, such as KeyUpdate, are always considered as state-advancing, regardless of whether a handshake has been completed or not. As a result, a malicious client can keep sending KeyUpdate messages to force the server to keep performing key derivation operations indefinitely.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-56859?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.6"><img alt="high : CVE--2026--56859" src="https://img.shields.io/badge/CVE--2026--56859-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.483%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>40th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Previously, DecodeElement would reset the depth counter causing it to never fire; this could lead to stack exhaustion.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-56853?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.6"><img alt="high : CVE--2026--56853" src="https://img.shields.io/badge/CVE--2026--56853-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.590%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>45th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When a server is configured to support unencrypted HTTP/2, it reads a few bytes from each new connection to see if they contain the HTTP/2 client preface. ReadHeaderTimeout is unexpectedly not being applied when doing this.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-46600?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.6"><img alt="high : CVE--2026--46600" src="https://img.shields.io/badge/CVE--2026--46600-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.350%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>28th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Parsing an invalid SVCB or HTTPS RR can panic when the size of a parameter value overflows the message buffer.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33818?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.6"><img alt="high : CVE--2026--33818" src="https://img.shields.io/badge/CVE--2026--33818-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.465%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>38th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Enforce a recursion limit in Unmarshal to prevent stack exhaustion when parsing deeply-nested, recursive structures.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-56858?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.6"><img alt="medium : CVE--2026--56858" src="https://img.shields.io/badge/CVE--2026--56858-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.263%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Previously, pathological inputs could close an unescaped '/' early, allowing for attack-controlled data to inject arbitrary content, potentially leading to XSS.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-56860?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.6"><img alt="medium : CVE--2026--56860" src="https://img.shields.io/badge/CVE--2026--56860-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.441%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>37th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Previously, resolving relative paths containing parent directory ('..') segments performed string conversions and buffer rewrites on each step, resulting in quadratic time complexity and high memory allocation overhead.

Now, path resolution operates on a byte buffer using index-based backtracking for '..' segments, eliminating the quadratic time complexity and significantly reducing memory allocations.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 2" src="https://img.shields.io/badge/H-2-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/mod</strong> <code>0.38.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/mod@0.38.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-56865?s=golang&n=mod&ns=golang.org%2Fx&t=golang&vr=%3C0.40.0"><img alt="high : CVE--2026--56865" src="https://img.shields.io/badge/CVE--2026--56865-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.40.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.40.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.107%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A malicious GOPROXY was previously capable of forging up to two sumdb tiles that allow for a requested module to bypass the GOSUMDB check and persist attacker-controlled module content to a local Go module cache.

This attack allows for a malicious GOPROXY to serve malicious module content that cannot be detected by evaluating the transparency log.

All tiles are now correctly verified against their parents.

In order to determine if you have been affected:

rm -r go.sum go.work.sum vendor/ && go mod tidy

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-56864?s=golang&n=mod&ns=golang.org%2Fx&t=golang&vr=%3C0.40.0"><img alt="high : CVE--2026--56864" src="https://img.shields.io/badge/CVE--2026--56864-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.40.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.40.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.248%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

A malicious GOSUMDB was capable of serving arbitrary module content not contained within the transparency log.

This attack allows for a coordinating GOPROXY and GOSUMDB to serve a client malicious module content that cannot be detected by evaluating the transparency log.

In order to determine if you have been affected:

rm -r go.sum go.work.sum vendor/ && go mod tidy

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/go-git/go-git/v5</strong> <code>5.19.1</code> (golang)</summary>

<small><code>pkg:golang/github.com/go-git/go-git/v5@5.19.1</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-71556?s=github&n=v5&ns=github.com%2Fgo-git%2Fgo-git&t=golang&vr=%3C%3D5.19.1"><img alt="high 7.1: CVE--2026--71556" src="https://img.shields.io/badge/CVE--2026--71556-lightgrey?label=high%207.1&labelColor=e25d68"/></a> <i>Improper Link Resolution Before File Access ('Link Following')</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=5.19.1</code></td></tr>
<tr><td>Fixed version</td><td><code>5.19.2</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:N/I:H/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.292%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>22nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

## Impact

A symlink traversal issue in `go-git` could allow worktree operations to modify files outside the intended worktree path.

The `worktreeFilesystem` wrapper rejected dangerous path strings, including paths containing `.git`, parent-directory components, or control characters. However, it did not prevent filesystem operations from following symbolic links that were already present in the worktree.

As a result, a path that is safe when evaluated as a string could still resolve into the repository's Git metadata directory. For example, if `s` is a symbolic link to `.git`, writing to `s/config` would modify `.git/config`.

A symbolic link at the final path component could also be followed. For example, if `s` points directly to `.git/config`, opening `s` for writing with truncation could overwrite the repository configuration.

Exploitation requires an attacker to be able to introduce or control a symbolic link in the worktree and cause the application to perform a write through that path.

Applications using `storage/memory` for their Storer, or `go-billy/memfs` for their `Worktree`, are not affected by this vulnerability.

## Patches

The issue has been addressed by making the worktree filesystem wrapper a symlink-safe boundary.

Worktree operations now reject paths where an existing symbolic link in any path component could cause the operation to escape the intended worktree location, including symbolic links at the final component.

Users of filesystem-backed worktrees should upgrade to a patched version.

### Credits

Thanks to @<!-- -->kodareef5 for reporting this issue and working with the go-git security team toward its resolution. :1st_place_medal: 
We would also like to thank @<!-- -->HughLewis20, who independently reported the same issue while a fix was already in progress.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-71557?s=github&n=v5&ns=github.com%2Fgo-git%2Fgo-git&t=golang&vr=%3C%3D5.19.1"><img alt="medium 6.3: CVE--2026--71557" src="https://img.shields.io/badge/CVE--2026--71557-lightgrey?label=medium%206.3&labelColor=fbb552"/></a> <i>Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal')</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=5.19.1</code></td></tr>
<tr><td>Fixed version</td><td><code>5.19.2</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:L/UI:R/S:U/C:N/I:H/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.349%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>28th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact
A path traversal issue in `go-git` could allow malicious reference names to access files outside the repository's intended reference storage.

Loose references are stored under `.git/<reference-name>`. The reference name was previously used as a path without verifying that the resolved path remained within the reference storage. A name such as `refs/heads/../../config` could therefore resolve to unrelated repository metadata such as `.git/config` or `.git/HEAD`.

A malicious Git server could advertise such a reference name. The name may also survive refspec mapping; for example, it could be mapped to `refs/remotes/origin/../../config` during a clone or fetch operation.

This vulnerability affects filesystem-backed repositories using the `storage/filesystem` package and its `dotgit` reference storage. Users relying exclusively on the in-memory storage implementation, `storage/memory`, are not affected, because reference names are not resolved as filesystem paths.

Exploitation requires an application using `go-git` with filesystem-backed storage to interact with a malicious Git server or otherwise process attacker-controlled reference names.

### Patches
The issue has been addressed by validating reference names at the `dotgit` storage entry points and rejecting names whose resolved paths could escape the reference storage.

Users of filesystem-backed storage should upgrade to a patched version.

### Workarounds
Applications that exclusively use `storage/memory` are not affected and do not require a workaround for this vulnerability.

For applications using filesystem-backed storage, avoid cloning from or fetching from untrusted Git servers until an upgrade is possible.

Applications that directly construct or process reference names may also validate them before passing them to filesystem-backed `go-git` storage. Application-level validation should only be considered a temporary mitigation and does not replace upgrading to a patched version.

### References
- Fixes:
  - https://github.com/go-git/go-git/pull/2247
  - https://github.com/go-git/go-git/pull/2254

### Credits

Thanks to @<!-- -->Saku0512 for reporting this issue and @<!-- -->Sahana2524 for proposing the initial fix. 🙇

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/docker/cli</strong> <code>29.5.3+incompatible</code> (golang)</summary>

<small><code>pkg:golang/github.com/docker/cli@29.5.3%2Bincompatible</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-15558?s=golang&n=cli&ns=github.com%2Fdocker&t=golang&vr=%3E%3D19.03.0%2Bincompatible"><img alt="high : CVE--2025--15558" src="https://img.shields.io/badge/CVE--2025--15558-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=19.03.0+incompatible</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.472%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>39th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Docker CLI Plugins: Uncontrolled Search Path Element Leads to Local Privilege Escalation on Windows in github.com/docker/cli

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>github.com/gofiber/fiber/v3</strong> <code>3.3.0</code> (golang)</summary>

<small><code>pkg:golang/github.com/gofiber/fiber/v3@3.3.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-53624?s=golang&n=v3&ns=github.com%2Fgofiber%2Ffiber&t=golang&vr=%3C3.4.0"><img alt="unspecified : CVE--2026--53624" src="https://img.shields.io/badge/CVE--2026--53624-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.4.0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.4.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.178%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>8th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

GoFiber never set HSTS header in helmet middleware due to incorrect protocol check in github.com/gofiber/fiber

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>golang.org/x/crypto</strong> <code>0.54.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/crypto@0.54.0</code></small><br/>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>github.com/klauspost/compress</strong> <code>1.18.6</code> (golang)</summary>

<small><code>pkg:golang/github.com/klauspost/compress@1.18.6</code></small><br/>
<a href="https://scout.docker.com/v/GHSA-259r-337f-4rfw?s=golang&n=compress&ns=github.com%2Fklauspost&t=golang&vr=%3E%3D1.16.0%2C%3C1.18.7"><img alt="unspecified : GHSA--259r--337f--4rfw" src="https://img.shields.io/badge/GHSA--259r--337f--4rfw-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.16.0<br/><1.18.7</code></td></tr>
<tr><td>Fixed version</td><td><code>1.18.7</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Providing a specially crafted dictionary to s2.NewDict and using it to encode data can make the encoder read out of bounds.

</blockquote>
</details>
</details></td></tr>
</table>

