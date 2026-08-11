---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:5037702622f095c0ff6b4a819e6b18cc2672ea122192a482ee69792a6163f22c</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 0" src="https://img.shields.io/badge/critical-0-lightgrey"/> <img alt="high: 2" src="https://img.shields.io/badge/high-2-e25d68"/> <img alt="medium: 1" src="https://img.shields.io/badge/medium-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/low-0-lightgrey"/> <img alt="unspecified: 3" src="https://img.shields.io/badge/unspecified-3-lightgrey"/></td></tr>
<tr><td>platform</td><td>linux/arm64</td></tr>
<tr><td>size</td><td>72 MB</td></tr>
<tr><td>packages</td><td>264</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/go-git/go-git/v6</strong> <code>6.0.0-alpha.4</code> (golang)</summary>

<small><code>pkg:golang/github.com/go-git/go-git/v6@6.0.0-alpha.4</code></small><br/>

```dockerfile
# api-server.Dockerfile (36:36)
COPY --from=build /app /bin/app
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-71556?s=github&n=v6&ns=github.com%2Fgo-git%2Fgo-git&t=golang&vr=%3C%3D6.0.0-alpha.4"><img alt="high 7.1: CVE--2026--71556" src="https://img.shields.io/badge/CVE--2026--71556-lightgrey?label=high%207.1&labelColor=e25d68"/></a> <i>Improper Link Resolution Before File Access ('Link Following')</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=6.0.0-alpha.4</code></td></tr>
<tr><td>Fixed version</td><td><code>6.0.0-alpha.5</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:N/I:H/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.292%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2026-71557?s=github&n=v6&ns=github.com%2Fgo-git%2Fgo-git&t=golang&vr=%3C%3D6.0.0-alpha.4"><img alt="medium 6.3: CVE--2026--71557" src="https://img.shields.io/badge/CVE--2026--71557-lightgrey?label=medium%206.3&labelColor=fbb552"/></a> <i>Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal')</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=6.0.0-alpha.4</code></td></tr>
<tr><td>Fixed version</td><td><code>6.0.0-alpha.5</code></td></tr>
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

```dockerfile
# api-server.Dockerfile (36:36)
COPY --from=build /app /bin/app
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-15558?s=golang&n=cli&ns=github.com%2Fdocker&t=golang&vr=%3E%3D19.03.0%2Bincompatible"><img alt="high : CVE--2025--15558" src="https://img.shields.io/badge/CVE--2025--15558-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=19.03.0+incompatible</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.472%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>38th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Docker CLI Plugins: Uncontrolled Search Path Element Leads to Local Privilege Escalation on Windows in github.com/docker/cli

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>golang.org/x/crypto</strong> <code>0.54.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/crypto@0.54.0</code></small><br/>

```dockerfile
# api-server.Dockerfile (36:36)
COPY --from=build /app /bin/app
```

<br/>

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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>nghttp2-libs</strong> <code>1.69.0-r0</code> (apk)</summary>

<small><code>pkg:apk/alpine/nghttp2-libs@1.69.0-r0?arch=aarch64&distro=alpine-3.24.1&upstream=nghttp2</code></small><br/>

```dockerfile
# api-server.Dockerfile (34:34)
RUN apk --no-cache upgrade && apk --no-cache add ca-certificates libssl3 git
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-58055?s=alpine&n=nghttp2&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C1.70.0-r0"><img alt="unspecified : CVE--2026--58055" src="https://img.shields.io/badge/CVE--2026--58055-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.70.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.70.0-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.263%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>18th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>github.com/klauspost/compress</strong> <code>1.18.6</code> (golang)</summary>

<small><code>pkg:golang/github.com/klauspost/compress@1.18.6</code></small><br/>

```dockerfile
# api-server.Dockerfile (36:36)
COPY --from=build /app /bin/app
```

<br/>

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

