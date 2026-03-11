---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:c15204fbdb71002b514fa7a4c0a422470dcbbb677e72594c8be640a8980fde68</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 0" src="https://img.shields.io/badge/critical-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/high-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/medium-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/low-0-lightgrey"/> <!-- unspecified: 0 --></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>19 MB</td></tr>
<tr><td>packages</td><td>170</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/docker/cli</strong> <code>27.1.1+incompatible</code> (golang)</summary>

<small><code>pkg:golang/github.com/docker/cli@27.1.1%2Bincompatible</code></small><br/>

```dockerfile
# tw-init.Dockerfile (18:18)
COPY --from=build /app/testworkflow-init /init
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-15558?s=github&n=cli&ns=github.com%2Fdocker&t=golang&vr=%3E%3D19.03.0%2C%3C29.2.0"><img alt="high 7.0: CVE--2025--15558" src="https://img.shields.io/badge/CVE--2025--15558-lightgrey?label=high%207.0&labelColor=e25d68"/></a> <i>Uncontrolled Search Path Element</i>

<table>
<tr><td>Affected range</td><td><code>>=19.03.0<br/><29.2.0</code></td></tr>
<tr><td>Fixed version</td><td><code>29.2.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>7</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:L/AC:L/AT:N/PR:L/UI:P/VC:H/VI:H/VA:H/SC:N/SI:N/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.005%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>0th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

This issue affects Docker CLI through 29.1.5

### Impact

Docker CLI for Windows searches for plugin binaries in `C:\ProgramData\Docker\cli-plugins`, a directory that does not exist by default. A low-privileged attacker can create this directory and place malicious CLI plugin binaries (docker-compose.exe, docker-buildx.exe, etc.) that are executed when a victim user opens Docker Desktop or invokes Docker CLI plugin features, and allow privilege-escalation if the `docker` CLI is executed as a privileged user.

This issue affects Docker CLI through v29.1.5 (fixed in v29.2.0). It impacts Windows binaries acting as a CLI plugin manager via the [`github.com/docker/cli/cli-plugins/manager`](https://pkg.go.dev/github.com/docker/cli@v29.1.5+incompatible/cli-plugins/manager) package, which is consumed by downstream projects such as Docker Compose.

Docker Compose became affected starting in v2.31.0, when it incorporated the relevant CLI plugin manager code (see https://github.com/docker/compose/pull/12300), and is fixed in v5.1.0.

This issue does not impact non-Windows binaries or projects that do not use the plugin manager code.

### Patches

Fixed version starts with 29.2.0

This issue was fixed in https://github.com/docker/cli/commit/13759330b1f7e7cb0d67047ea42c5482548ba7fa (https://github.com/docker/cli/pull/6713), which removed `%PROGRAMDATA%\Docker\cli-plugins` from the list of paths used for plugin-discovery on Windows.

### Workarounds

None

### Resources

- Pull request: "cli-plugins/manager: remove legacy system-wide cli-plugin path" (https://github.com/docker/cli/pull/6713)
- Patch: https://github.com/docker/cli/commit/13759330b1f7e7cb0d67047ea42c5482548ba7fa.patch

### Credits

Nitesh Surana (niteshsurana.com) of Trend Research of TrendAI

</blockquote>
</details>
</details></td></tr>
</table>

