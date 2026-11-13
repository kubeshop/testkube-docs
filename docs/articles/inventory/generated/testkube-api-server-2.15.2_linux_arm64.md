---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:91a5c7fc3d02ba096b72374cf8ee7f34ad2671128c9becd4bebf0556ef38f6e2</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 1" src="https://img.shields.io/badge/critical-1-8b1924"/> <img alt="high: 9" src="https://img.shields.io/badge/high-9-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/medium-0-lightgrey"/> <img alt="low: 2" src="https://img.shields.io/badge/low-2-fce1a9"/> <img alt="unspecified: 21" src="https://img.shields.io/badge/unspecified-21-lightgrey"/></td></tr>
<tr><td>platform</td><td>linux/arm64</td></tr>
<tr><td>size</td><td>74 MB</td></tr>
<tr><td>packages</td><td>258</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>zlib</strong> <code>1.3.2-r1</code> (apk)</summary>

<small><code>pkg:apk/alpine/zlib@1.3.2-r1?arch=aarch64&distro=alpine-3.24.3</code></small><br/>

```dockerfile
# api-server.Dockerfile (33:33)
FROM ${ALPINE_IMAGE}
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-4738?s=alpine&n=zlib&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C1.4-r0"><img alt="critical : CVE--2026--4738" src="https://img.shields.io/badge/CVE--2026--4738-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.4-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>1.4-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.269%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>19th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 4" src="https://img.shields.io/badge/H-4-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>libexpat</strong> <code>2.9.0-r0</code> (apk)</summary>

<small><code>pkg:apk/alpine/libexpat@2.9.0-r0?arch=aarch64&distro=alpine-3.24.3&upstream=expat</code></small><br/>

```dockerfile
# api-server.Dockerfile (34:34)
RUN apk --no-cache upgrade && apk --no-cache add 'ca-certificates>=20261020-r0' libssl3 git "libexpat>=2.9.0-r0" "zlib>=1.3.2-r1" "brotli-libs>=1.2.1-r0" "libcurl>=8.23.0-r0"
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-115506?s=alpine&n=expat&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C2.10.0-r0"><img alt="high : CVE--2026--115506" src="https://img.shields.io/badge/CVE--2026--115506-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.10.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>2.10.0-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.448%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>39th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-118370?s=alpine&n=expat&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C2.10.0-r0"><img alt="high : CVE--2026--118370" src="https://img.shields.io/badge/CVE--2026--118370-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.10.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>2.10.0-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.391%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>34th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-117610?s=alpine&n=expat&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C2.10.0-r0"><img alt="high : CVE--2026--117610" src="https://img.shields.io/badge/CVE--2026--117610-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.10.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>2.10.0-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.425%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>37th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-113351?s=alpine&n=expat&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C2.10.0-r0"><img alt="high : CVE--2026--113351" src="https://img.shields.io/badge/CVE--2026--113351-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.10.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>2.10.0-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.494%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>43rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <img alt="unspecified: 4" src="https://img.shields.io/badge/U-4-lightgrey"/><strong>git</strong> <code>2.54.0-r0</code> (apk)</summary>

<small><code>pkg:apk/alpine/git@2.54.0-r0?arch=aarch64&distro=alpine-3.24.3</code></small><br/>

```dockerfile
# api-server.Dockerfile (34:34)
RUN apk --no-cache upgrade && apk --no-cache add 'ca-certificates>=20261020-r0' libssl3 git "libexpat>=2.9.0-r0" "zlib>=1.3.2-r1" "brotli-libs>=1.2.1-r0" "libcurl>=8.23.0-r0"
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-105437?s=alpine&n=git&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C2.56.1-r0"><img alt="high : CVE--2026--105437" src="https://img.shields.io/badge/CVE--2026--105437-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.56.1-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>2.56.1-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.399%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>35th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-113408?s=alpine&n=git&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C2.56.1-r0"><img alt="low : CVE--2026--113408" src="https://img.shields.io/badge/CVE--2026--113408-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.56.1-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>2.56.1-r0</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-114469?s=alpine&n=git&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C2.56.1-r0"><img alt="unspecified : CVE--2026--114469" src="https://img.shields.io/badge/CVE--2026--114469-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.56.1-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>2.56.1-r0</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-114467?s=alpine&n=git&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C2.56.1-r0"><img alt="unspecified : CVE--2026--114467" src="https://img.shields.io/badge/CVE--2026--114467-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.56.1-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>2.56.1-r0</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-114466?s=alpine&n=git&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C2.56.1-r0"><img alt="unspecified : CVE--2026--114466" src="https://img.shields.io/badge/CVE--2026--114466-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.56.1-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>2.56.1-r0</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-111760?s=alpine&n=git&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C2.56.1-r0"><img alt="unspecified : CVE--2026--111760" src="https://img.shields.io/badge/CVE--2026--111760-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.56.1-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>2.56.1-r0</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <img alt="unspecified: 4" src="https://img.shields.io/badge/U-4-lightgrey"/><strong>git-init-template</strong> <code>2.54.0-r0</code> (apk)</summary>

<small><code>pkg:apk/alpine/git-init-template@2.54.0-r0?arch=aarch64&distro=alpine-3.24.3&upstream=git</code></small><br/>

```dockerfile
# api-server.Dockerfile (34:34)
RUN apk --no-cache upgrade && apk --no-cache add 'ca-certificates>=20261020-r0' libssl3 git "libexpat>=2.9.0-r0" "zlib>=1.3.2-r1" "brotli-libs>=1.2.1-r0" "libcurl>=8.23.0-r0"
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-105437?s=alpine&n=git&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C2.56.1-r0"><img alt="high : CVE--2026--105437" src="https://img.shields.io/badge/CVE--2026--105437-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.56.1-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>2.56.1-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.399%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>35th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-113408?s=alpine&n=git&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C2.56.1-r0"><img alt="low : CVE--2026--113408" src="https://img.shields.io/badge/CVE--2026--113408-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.56.1-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>2.56.1-r0</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-114469?s=alpine&n=git&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C2.56.1-r0"><img alt="unspecified : CVE--2026--114469" src="https://img.shields.io/badge/CVE--2026--114469-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.56.1-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>2.56.1-r0</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-114467?s=alpine&n=git&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C2.56.1-r0"><img alt="unspecified : CVE--2026--114467" src="https://img.shields.io/badge/CVE--2026--114467-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.56.1-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>2.56.1-r0</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-114466?s=alpine&n=git&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C2.56.1-r0"><img alt="unspecified : CVE--2026--114466" src="https://img.shields.io/badge/CVE--2026--114466-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.56.1-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>2.56.1-r0</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-111760?s=alpine&n=git&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C2.56.1-r0"><img alt="unspecified : CVE--2026--111760" src="https://img.shields.io/badge/CVE--2026--111760-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.56.1-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>2.56.1-r0</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/docker/cli</strong> <code>29.7.2+incompatible</code> (golang)</summary>

<small><code>pkg:golang/github.com/docker/cli@29.7.2%2Bincompatible</code></small><br/>

```dockerfile
# api-server.Dockerfile (36:36)
COPY --from=build /app /bin/app
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-15558?s=golang&n=cli&ns=github.com%2Fdocker&t=golang&vr=%3E%3D19.03.0%2Bincompatible"><img alt="high : CVE--2025--15558" src="https://img.shields.io/badge/CVE--2025--15558-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=19.03.0+incompatible</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.549%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>46th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Docker CLI Plugins: Uncontrolled Search Path Element Leads to Local Privilege Escalation on Windows in github.com/docker/cli

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>musl</strong> <code>1.2.6-r3</code> (apk)</summary>

<small><code>pkg:apk/alpine/musl@1.2.6-r3?arch=aarch64&distro=alpine-3.24.3</code></small><br/>

```dockerfile
# api-server.Dockerfile (33:33)
FROM ${ALPINE_IMAGE}
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-107891?s=alpine&n=musl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C1.2.6-r6"><img alt="high : CVE--2026--107891" src="https://img.shields.io/badge/CVE--2026--107891-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.2.6-r6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.2.6-r6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.549%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>46th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>musl-utils</strong> <code>1.2.6-r3</code> (apk)</summary>

<small><code>pkg:apk/alpine/musl-utils@1.2.6-r3?arch=aarch64&distro=alpine-3.24.3&upstream=musl</code></small><br/>

```dockerfile
# api-server.Dockerfile (33:33)
FROM ${ALPINE_IMAGE}
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-107891?s=alpine&n=musl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C1.2.6-r6"><img alt="high : CVE--2026--107891" src="https://img.shields.io/badge/CVE--2026--107891-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.2.6-r6</code></td></tr>
<tr><td>Fixed version</td><td><code>1.2.6-r6</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.549%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>46th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 5" src="https://img.shields.io/badge/U-5-lightgrey"/><strong>libssl3</strong> <code>3.5.9-r0</code> (apk)</summary>

<small><code>pkg:apk/alpine/libssl3@3.5.9-r0?arch=aarch64&distro=alpine-3.24.3&upstream=openssl</code></small><br/>

```dockerfile
# api-server.Dockerfile (33:33)
FROM ${ALPINE_IMAGE}
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-95692?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C3.5.9-r1"><img alt="unspecified : CVE--2026--95692" src="https://img.shields.io/badge/CVE--2026--95692-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.9-r1</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.9-r1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.211%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-95691?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C3.5.9-r1"><img alt="unspecified : CVE--2026--95691" src="https://img.shields.io/badge/CVE--2026--95691-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.9-r1</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.9-r1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.190%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-88823?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C3.5.9-r1"><img alt="unspecified : CVE--2026--88823" src="https://img.shields.io/badge/CVE--2026--88823-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.9-r1</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.9-r1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.142%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-88822?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C3.5.9-r1"><img alt="unspecified : CVE--2026--88822" src="https://img.shields.io/badge/CVE--2026--88822-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.9-r1</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.9-r1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.190%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-107496?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C3.5.9-r1"><img alt="unspecified : CVE--2026--107496" src="https://img.shields.io/badge/CVE--2026--107496-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.9-r1</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.9-r1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.127%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 5" src="https://img.shields.io/badge/U-5-lightgrey"/><strong>libcrypto3</strong> <code>3.5.9-r0</code> (apk)</summary>

<small><code>pkg:apk/alpine/libcrypto3@3.5.9-r0?arch=aarch64&distro=alpine-3.24.3&upstream=openssl</code></small><br/>

```dockerfile
# api-server.Dockerfile (33:33)
FROM ${ALPINE_IMAGE}
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-95692?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C3.5.9-r1"><img alt="unspecified : CVE--2026--95692" src="https://img.shields.io/badge/CVE--2026--95692-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.9-r1</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.9-r1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.211%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>11th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-95691?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C3.5.9-r1"><img alt="unspecified : CVE--2026--95691" src="https://img.shields.io/badge/CVE--2026--95691-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.9-r1</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.9-r1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.190%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-88823?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C3.5.9-r1"><img alt="unspecified : CVE--2026--88823" src="https://img.shields.io/badge/CVE--2026--88823-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.9-r1</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.9-r1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.142%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-88822?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C3.5.9-r1"><img alt="unspecified : CVE--2026--88822" src="https://img.shields.io/badge/CVE--2026--88822-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.9-r1</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.9-r1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.190%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>9th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-107496?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.24&vr=%3C3.5.9-r1"><img alt="unspecified : CVE--2026--107496" src="https://img.shields.io/badge/CVE--2026--107496-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.5.9-r1</code></td></tr>
<tr><td>Fixed version</td><td><code>3.5.9-r1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.127%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>golang.org/x/crypto</strong> <code>0.58.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/crypto@0.58.0</code></small><br/>

```dockerfile
# api-server.Dockerfile (36:36)
COPY --from=build /app /bin/app
```

<br/>

<a href="https://scout.docker.com/v/GO-2026-5932?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.58.1-0.20261009181718-2f1f834330b2"><img alt="unspecified : GO--2026--5932" src="https://img.shields.io/badge/GO--2026--5932-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.58.1-0.20261009181718-2f1f834330b2</code></td></tr>
<tr><td>Fixed version</td><td><code>0.58.1-0.20261009181718-2f1f834330b2</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The golang.org/x/crypto/openpgp package is unsafe by design, has numerous known security issues, is not maintained, and should not be used.

If you are required to interoperate with OpenPGP systems and need a maintained package, consider github.com/ProtonMail/go-crypto/openpgp which is a maintained fork that aims to be a drop-in replacement for this package.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>github.com/chrismellard/docker-credential-acr-env</strong> <code>0.0.0-20230304212654-82a0ddb27589</code> (golang)</summary>

<small><code>pkg:golang/github.com/chrismellard/docker-credential-acr-env@0.0.0-20230304212654-82a0ddb27589</code></small><br/>

```dockerfile
# api-server.Dockerfile (36:36)
COPY --from=build /app /bin/app
```

<br/>

<a href="https://scout.docker.com/v/GO-2026-6225?s=golang&n=docker-credential-acr-env&ns=github.com%2Fchrismellard&t=golang&vr=%3E%3D0"><img alt="unspecified : GO--2026--6225" src="https://img.shields.io/badge/GO--2026--6225-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

In github.com/chrismellard/docker-credential-acr-env/pkg/credhelper, the regular expression used by isACRRegistry to validate Azure Container Registry hostnames is unanchored. As a result, arbitrary hostnames containing the substring ".azurecr.io" (such as evil.azurecr.io.attacker.com) are treated as valid ACR registries, causing ACRCredHelper.Get to send the Azure Active Directory (AAD) access token to attacker-controlled hosts.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>stdlib</strong> <code>1.27.3</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.27.3</code></small><br/>

```dockerfile
# api-server.Dockerfile (36:36)
COPY --from=build /app /bin/app
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-97054?s=golang&n=stdlib&t=golang&vr=%3E%3D1.27.0-0%2C%3C1.27.4"><img alt="unspecified : CVE--2026--97054" src="https://img.shields.io/badge/CVE--2026--97054-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.27.0-0<br/><1.27.4</code></td></tr>
<tr><td>Fixed version</td><td><code>1.27.4</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.171%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>7th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

For HTTP/1 servers, when MaxBytesReader's limit is exceeded, "Connection: close" header is automatically set without synchronization, which might race with another header being set explicitly in the server handler. As a result, an HTTP/1 server that utilizes MaxBytesReader or MaxBytesHandler can crash due to runtime panic if its handler reads the request body concurrently with writing the response header.

</blockquote>
</details>
</details></td></tr>
</table>

