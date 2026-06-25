---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:53765f2e614467209e43649e1271a2f4e4eadf3435429a32cfc7f7d7ffd5f81d</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 0" src="https://img.shields.io/badge/critical-0-lightgrey"/> <img alt="high: 4" src="https://img.shields.io/badge/high-4-e25d68"/> <img alt="medium: 4" src="https://img.shields.io/badge/medium-4-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/low-1-fce1a9"/> <!-- unspecified: 0 --></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>59 MB</td></tr>
<tr><td>packages</td><td>330</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 3" src="https://img.shields.io/badge/H-3-e25d68"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/docker/docker</strong> <code>28.5.2+incompatible</code> (golang)</summary>

<small><code>pkg:golang/github.com/docker/docker@28.5.2%2Bincompatible</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-34040?s=github&n=docker&ns=github.com%2Fdocker&t=golang&vr=%3C29.3.1"><img alt="high 8.8: CVE--2026--34040" src="https://img.shields.io/badge/CVE--2026--34040-lightgrey?label=high%208.8&labelColor=e25d68"/></a> <i>Authentication Bypass Using an Alternate Path or Channel</i>

<table>
<tr><td>Affected range</td><td><code>&lt;29.3.1</code></td></tr>
<tr><td>Fixed version</td><td><code>29.3.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>8.8</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:C/C:H/I:H/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>8.123%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>94th percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2026-42306?s=github&n=docker&ns=github.com%2Fdocker&t=golang&vr=%3C%3D28.5.2"><img alt="high 7.2: CVE--2026--42306" src="https://img.shields.io/badge/CVE--2026--42306-lightgrey?label=high%207.2&labelColor=e25d68"/></a> <i>Time-of-check Time-of-use (TOCTOU) Race Condition</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=28.5.2</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>7.2</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:H/PR:L/UI:R/S:C/C:N/I:H/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.104%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

## Summary

A race condition during `docker cp` mount setup allows a malicious container to redirect a bind mount target to an arbitrary host path, potentially overwriting host files or causing denial of service.

## Details

When copying files into a container, the daemon sets up a temporary filesystem view by bind-mounting volumes into a private mount namespace. During this setup, the mount destination is created inside the container root and then a bind mount is attached using the container-relative path resolved to an absolute host path.

Between mountpoint creation and the `mount()` syscall, a process running inside the container can replace the destination (or a parent path component) with a symlink pointing to an arbitrary location on the host. The `mount()` syscall follows the symlink, causing the volume to be bind-mounted onto an arbitrary host path instead of the intended container path.

## Impact

A malicious container can redirect a volume bind mount to an arbitrary host path. The impact depends on the volume content and mount options:

- If the volume is writable, arbitrary host files at the redirected path could be overwritten with the volume's contents.
- If the volume is read-only, the host path is masked by the mount for the duration of the operation, causing denial of service.
- In all cases the mount is temporary (torn down after the `docker cp` completes), but the effects of any writes persist.

### Conditions for exploitation

- A container must have at least one volume mount.
- A process inside the container must be able to rapidly create and swap symlinks at the volume mount destination path.
- An operator must initiate a `docker cp` into that container, or call the `PUT /containers/{id}/archive` or `HEAD /containers/{id}/archive` API endpoints.

### Not affected

- Containers that do not have volume mounts are not affected, as the race occurs during volume bind-mount setup.

## Workarounds

- Only run containers from trusted images.
- Avoid using `docker cp` with untrusted running containers.
- Use authorization plugins to restrict access to the archive API endpoints (`PUT /containers/{id}/archive`, `HEAD /containers/{id}/archive`).

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-41567?s=github&n=docker&ns=github.com%2Fdocker&t=golang&vr=%3C%3D28.5.2"><img alt="high 7.2: CVE--2026--41567" src="https://img.shields.io/badge/CVE--2026--41567-lightgrey?label=high%207.2&labelColor=e25d68"/></a> <i>Uncontrolled Search Path Element</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=28.5.2</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>7.2</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:H/PR:L/UI:R/S:C/C:H/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.137%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

## Summary

When a user uploads a compressed archive into a container, a malicious image can execute arbitrary code with daemon (host root) privileges.

## Details

When handling `PUT /containers/{id}/archive` requests with compressed archives, the daemon decompresses them using external system binaries. Due to incorrect ordering of operations, these binaries are resolved from the container's filesystem rather than the host's. A container image that includes a trojanized decompression binary can achieve code execution as the daemon process whenever a compressed archive is uploaded to that container.

The executed binary runs with the daemon's full privileges, including host root UID and unrestricted capabilities.

## Impact

Arbitrary code execution as host root, crossing the container-to-host trust boundary.

### Conditions for exploitation

- A user must run a container from a malicious image that contains a trojanized decompression binary.
- The user must then upload a compressed archive (xz or gzip) into that container, either by piping a compressed archive via `docker cp -` or by calling the `PUT /containers/{id}/archive` API directly with compressed content.

### Not affected

Standard `docker cp` usage is **not** affected, because the CLI sends uncompressed tar by default:

```
docker cp ./file.txt mycontainer:/file.txt
```

This can only be exploited when explicitly passing a xz or gzip-compressed archive to `docker cp` or the `PUT /containers/{id}/archive` API, for example:

```
cat archive.tar.xz | docker cp - mycontainer:/dir
```

Decompression formats using pure Go implementations (bzip2, zstd, and gzip when the container image does not contain an `unpigz` binary) are also not affected.

## Workarounds

- Only run containers from trusted images.
- Use authorization plugins to limit access to the `PUT /containers/{id}/archive` endpoint.
- Avoid piping compressed archives into containers created from untrusted images.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33997?s=github&n=docker&ns=github.com%2Fdocker&t=golang&vr=%3C29.3.1"><img alt="medium 6.8: CVE--2026--33997" src="https://img.shields.io/badge/CVE--2026--33997-lightgrey?label=medium%206.8&labelColor=fbb552"/></a> <i>Off-by-one Error</i>

<table>
<tr><td>Affected range</td><td><code>&lt;29.3.1</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>6.8</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:H/PR:N/UI:R/S:U/C:H/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.315%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>23rd percentile</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2026-41568?s=github&n=docker&ns=github.com%2Fdocker&t=golang&vr=%3C%3D28.5.2"><img alt="medium 6.1: CVE--2026--41568" src="https://img.shields.io/badge/CVE--2026--41568-lightgrey?label=medium%206.1&labelColor=fbb552"/></a> <i>Time-of-check Time-of-use (TOCTOU) Race Condition</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=28.5.2</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>6.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:H/PR:L/UI:R/S:C/C:N/I:L/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.108%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

## Summary

A race condition during `docker cp` mount setup allows a malicious container to create empty files or directories at arbitrary absolute paths on the host filesystem.

This advisory covers the race during mountpoint creation. The related race during the subsequent mount syscall is tracked in GHSA-rg2x-37c3-w2rh

## Details

When copying files into a container, the daemon sets up a temporary filesystem view by bind-mounting volumes into a private mount namespace. During this setup, the mount destination path is first resolved within the container's root filesystem using `GetResourcePath`, and then used to create the mountpoint (file or directory) if it does not already exist via `createIfNotExists`.

Between path resolution and mountpoint creation, a process running inside the container can swap a path component for a symlink pointing to an arbitrary location on the host. Because `createIfNotExists` operates on the already-resolved absolute path using standard `os.MkdirAll` and `os.OpenFile` — which follow symlinks in intermediate path components — the symlink is followed and the file or directory is created outside the container root filesystem, as root.

## Impact

A malicious container can create empty files or directories at arbitrary absolute paths on the host filesystem, running as root. This enables persistent denial of service — for example:

- Converting `/etc/docker/daemon.json` into a directory prevents the daemon from restarting
- Creating `/etc/nologin` prevents user logins
- Overwriting critical system paths with empty files can break host services

The container does not gain read or write access to existing host files — only the ability to create new empty files or directories at chosen paths.

### Conditions for exploitation

- A container must be running with a process that can rapidly create and swap symlinks at a volume mount destination path.
- An operator must initiate a `docker cp` into that container, or call the `PUT /containers/{id}/archive` or `HEAD /containers/{id}/archive` API endpoints.

### Not affected

- Containers that do not have volume mounts are not affected, as the race occurs during volume bind-mount setup.

## Patches

Mountpoint creation is now scoped to the container root using `os.Root` (Go 1.24+), which refuses to follow symlinks that escape the opened root directory. All filesystem operations in `createIfNotExists` (`MkdirAll`, `OpenFile`) are performed through the `os.Root` handle, so even if a symlink swap occurs after path resolution, the creation stays confined to the container root.

## Workarounds

- Only run containers from trusted images.
- Avoid using `docker cp` with untrusted running containers.
- Use authorization plugins to restrict access to the archive API endpoints (`PUT /containers/{id}/archive`, `HEAD /containers/{id}/archive`).

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/docker/cli</strong> <code>29.4.3+incompatible</code> (golang)</summary>

<small><code>pkg:golang/github.com/docker/cli@29.4.3%2Bincompatible</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-15558?s=golang&n=cli&ns=github.com%2Fdocker&t=golang&vr=%3E%3D19.03.0%2Bincompatible"><img alt="high : CVE--2025--15558" src="https://img.shields.io/badge/CVE--2025--15558-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=19.03.0+incompatible</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.430%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>34th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Docker CLI Plugins: Uncontrolled Search Path Element Leads to Local Privilege Escalation on Windows in github.com/docker/cli

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>github.com/go-git/go-git/v5</strong> <code>5.19.0</code> (golang)</summary>

<small><code>pkg:golang/github.com/go-git/go-git/v5@5.19.0</code></small><br/>
<a href="https://scout.docker.com/v/GHSA-w5pp-99ch-qj29?s=github&n=v5&ns=github.com%2Fgo-git%2Fgo-git&t=golang&vr=%3C%3D5.19.0"><img alt="medium 6.5: GHSA--w5pp--99ch--qj29" src="https://img.shields.io/badge/GHSA--w5pp--99ch--qj29-lightgrey?label=medium%206.5&labelColor=fbb552"/></a> <i>Uncontrolled Resource Consumption</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=5.19.0</code></td></tr>
<tr><td>Fixed version</td><td><code>5.19.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact
Several denial-of-service issues were identified in `go-git` when parsing maliciously crafted Git repository data.

An attacker may craft a malicious `.pack`, `.idx` or loose objects that causes an application using an affected version of `go-git` to panic or consume excessive resources.

This can lead to denial of service in applications that use `go-git` to clone, fetch, open, or otherwise process untrusted repositories or Git object data.

Exploitation requires the ability to alter read-only files such as `.pack` or `.idx` from the local repository's `.git/objects/pack/` directory. Alternatively, the user would need to be interacting with a malicious remote server, which is not recommended and exposes users to a broader class of security risks beyond this issue.

### Patches
Users should upgrade to a patched version in order to mitigate this vulnerability. Versions prior to `v5` are likely to be affected, users are recommended to upgrade to a supported `go-git` version.

### Credits
go-git thanks @<!-- -->kodareef5, @<!-- -->AyushParkara and @<!-- -->N0zoM1z0 for reporting this in four separate reports. 🙇

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-45571?s=github&n=v5&ns=github.com%2Fgo-git%2Fgo-git&t=golang&vr=%3C%3D5.19.0"><img alt="medium 5.4: CVE--2026--45571" src="https://img.shields.io/badge/CVE--2026--45571-lightgrey?label=medium%205.4&labelColor=fbb552"/></a> <i>Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal')</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=5.19.0</code></td></tr>
<tr><td>Fixed version</td><td><code>5.19.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.4</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:N/I:L/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.297%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>21st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact
A path validation issue in `go-git` could allow crafted repository data to affect files outside the intended checkout target, including the repository's `.git` directory.

These validations were introduced in upstream Git years ago, so the vulnerability arose from go-git drifting from those checks. Some attack vectors were platform-specific: certain payloads affected only Windows users, others affected only macOS users, and some applied across all supported platforms.

Using non-descendant `go-billy` filesystem instances, or different filesystem types, for the `Storer` and `Worktree` may provide some isolation against `.git` directory manipulation. For example, users that store the `.git` directory through `memfs` while using `osfs` for the worktree are not affected by this vulnerability in the main repository, because repository metadata is not materialized inside the worktree filesystem.

However, this isolation does not necessarily apply when the repository contains submodules, since submodule dotgit directories may still be represented or materialized within the worktree context.

It is important to note that exploitation requires a maliciously crafted repository payload. Users should always exercise caution when interacting with repositories or Git servers they do not trust.

### Patches
Users should upgrade to a patched version in order to mitigate this vulnerability. Versions prior to `v5` are likely to be affected, users are recommended to upgrade to a supported go-git version.

### Credits
Thanks to @<!-- -->kodareef5, @<!-- -->AyushParkara and @<!-- -->N0zoM1z0 for reporting this to the go-git project in three separate reports. 🙇

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-45570?s=github&n=v5&ns=github.com%2Fgo-git%2Fgo-git&t=golang&vr=%3C%3D5.19.0"><img alt="low 2.3: CVE--2026--45570" src="https://img.shields.io/badge/CVE--2026--45570-lightgrey?label=low%202.3&labelColor=fce1a9"/></a> <i>Improper Encoding or Escaping of Output</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=5.19.0</code></td></tr>
<tr><td>Fixed version</td><td><code>5.19.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>2.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:P/VC:N/VI:N/VA:N/SC:L/SI:L/SA:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.365%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>28th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact

`go-git`'s SSH transport constructs the remote exec command by wrapping the repository path in single quotes without escaping single quotes embedded inside the path. This diverges from canonical Git, which shell-quotes the path through `sq_quote_buf` so that an embedded `'` becomes the `'\''` close-escape-reopen sequence and the whole path round-trips as a single quoted argument.

A repository path containing a single quote can therefore break out of the quoted region in the exec command and be appended as additional shell tokens. On SSH servers that evaluate the exec command through a shell (for example a user account whose login shell is `/bin/sh` or `/bin/bash`, or a `ForceCommand` wrapper that re-evaluates `$SSH_ORIGINAL_COMMAND`), those additional tokens execute in that account's command-execution context. SSH servers that tokenize the exec command without shell evaluation, including the canonical `git-shell` setup, are not affected.

The vulnerable behaviour is on the SSH server side, not in `go-git`: the same bytes can be produced by any SSH client. The change in `go-git` is defense-in-depth that restores parity with canonical Git's wire format and prevents `go-git` from being a vehicle for reaching shell-evaluating servers through attacker-influenced repository paths.

### Patches

Users should upgrade to a patched version in order to mitigate this issue. The fix ports `sq_quote_buf` from canonical Git into `go-git`'s SSH transport so that the wire output is byte-identical to what `git` itself would send for the same input.

Versions prior to `v5` are likely to be affected, users are recommended to upgrade to a supported go-git version.

### Credit

Thanks to @<!-- -->N0zoM1z0 for reporting this to the `go-git` project. :bow:

</blockquote>
</details>
</details></td></tr>
</table>

