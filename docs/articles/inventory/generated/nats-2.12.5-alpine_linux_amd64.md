---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:f55092a58ef4b6883fd9b9e67c8741139c3701acff2d7e57930abbb54d2d4478</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 0" src="https://img.shields.io/badge/critical-0-lightgrey"/> <img alt="high: 4" src="https://img.shields.io/badge/high-4-e25d68"/> <img alt="medium: 8" src="https://img.shields.io/badge/medium-8-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/low-1-fce1a9"/> <!-- unspecified: 0 --></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>11 MB</td></tr>
<tr><td>packages</td><td>34</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 4" src="https://img.shields.io/badge/H-4-e25d68"/> <img alt="medium: 7" src="https://img.shields.io/badge/M-7-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/nats-io/nats-server/v2</strong> <code>2.12.5</code> (golang)</summary>

<small><code>pkg:golang/github.com/nats-io/nats-server@2.12.5#v2</code></small><br/>

```dockerfile
# 2.12.x/alpine3.22/Dockerfile (14:36)
RUN set -eux; \
    apkArch="$(apk --print-arch)"; \
    case "$apkArch" in \
    aarch64) natsArch='arm64'; sha256='85caf0500b011a31b105fb04992cb350236e2d5935a4d2ea7cc1efe9203aafc2' ;; \
    armhf) natsArch='arm6'; sha256='71a4b194ea3c093318fefb30f5aa9bcbc2b25b172ecb9f17fc9ea18b9c4c7f67' ;; \
    armv7) natsArch='arm7'; sha256='72f0084970ca9605b83db78806717403e1f676a587a4a07bb28a4b86ae201bc6' ;; \
    x86_64) natsArch='amd64'; sha256='f1967bea3fbf6c86273f1a2edf5be65165d795716ae1ac2a14824f19cdc35c20' ;; \
    x86) natsArch='386'; sha256='5549c7352ff3b04424c15402656bccfc5bc3fb26433e0b092ee794c1eae00c8e' ;; \
    s390x) natsArch='s390x'; sha256='ca7235acf15b59d0b29d413ecb2a3654fa2a877d0a5f6d91db28dbc2d4064ad8' ;; \
    ppc64le) natsArch='ppc64le'; sha256='29cc4c2566e960a85d2b277b99bf24322ce5c3e3da6e197eb253beb372e9839f' ;; \
    loong64) natsArch='loong64'; sha256='b126457f298c58981fd42f21bff7c9a37e992ab5727862af64b41aa68b0d8d3b' ;; \
    *) echo >&2 "error: $apkArch is not supported!"; exit 1 ;; \
    esac; \
    \
    wget -O nats-server.tar.gz "https://github.com/nats-io/nats-server/releases/download/v${NATS_SERVER}/nats-server-v${NATS_SERVER}-linux-${natsArch}.tar.gz"; \
    echo "${sha256} *nats-server.tar.gz" | sha256sum -c -; \
    \
    apk add --no-cache ca-certificates tzdata; \
    \
    tar -xf nats-server.tar.gz; \
    rm nats-server.tar.gz; \
    mv "nats-server-v${NATS_SERVER}-linux-${natsArch}/nats-server" /usr/local/bin; \
    rm -rf "nats-server-v${NATS_SERVER}-linux-${natsArch}";
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-33216?s=github&n=v2&ns=github.com%2Fnats-io%2Fnats-server&t=golang&vr=%3E%3D2.12.0-RC.1%2C%3C2.12.6"><img alt="high 8.6: CVE--2026--33216" src="https://img.shields.io/badge/CVE--2026--33216-lightgrey?label=high%208.6&labelColor=e25d68"/></a> <i>Plaintext Storage of a Password</i>

<table>
<tr><td>Affected range</td><td><code>>=2.12.0-RC.1<br/><2.12.6</code></td></tr>
<tr><td>Fixed version</td><td><code>2.12.6</code></td></tr>
<tr><td>CVSS Score</td><td><code>8.6</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:N/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.044%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>13th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Background

NATS.io is a high performance open source pub-sub distributed communication technology, built for the cloud, on-premise, IoT, and edge computing.

The nats-server provides an MQTT client interface.

### Problem Description

For MQTT deployments using usercodes/passwords: MQTT passwords are incorrectly classified as a non-authenticating identity statement (JWT) and exposed via monitoring endpoints.

### Affected Versions

Any version before v2.12.6 or v2.11.15

### Workarounds

Ensure monitoring end-points are adequately secured.

Best practice remains to not expose the monitoring endpoint to the Internet or other untrusted network users.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33218?s=github&n=v2&ns=github.com%2Fnats-io%2Fnats-server&t=golang&vr=%3E%3D2.12.0-RC.1%2C%3C2.12.6"><img alt="high 7.5: CVE--2026--33218" src="https://img.shields.io/badge/CVE--2026--33218-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Improper Input Validation</i>

<table>
<tr><td>Affected range</td><td><code>>=2.12.0-RC.1<br/><2.12.6</code></td></tr>
<tr><td>Fixed version</td><td><code>2.12.6</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.166%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>38th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Background

NATS.io is a high performance open source pub-sub distributed communication technology, built for the cloud, on-premise, IoT, and edge computing.

The nats-server allows hub/spoke topologies using "leafnode" connections by other nats-servers.

### Problem Description

A client which can connect to the leafnode port can crash the nats-server with a certain malformed message pre-authentication.

### Affected Versions

Any version before v2.12.6 or v2.11.15

### Workarounds

1. Disable leafnode support if not needed.
2. Restrict network connections to your leafnode port, if plausible without compromising the service offered.

### References

 * This document is canonically: <https://advisories.nats.io/CVE/secnote-2026-10.txt>
 * GHSA advisory: <https://github.com/nats-io/nats-server/security/advisories/GHSA-vprv-35vv-q339>
 * MITRE CVE entry: <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2026-33218>

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33247?s=github&n=v2&ns=github.com%2Fnats-io%2Fnats-server&t=golang&vr=%3E%3D2.12.0-RC.1%2C%3C2.12.6"><img alt="high 7.4: CVE--2026--33247" src="https://img.shields.io/badge/CVE--2026--33247-lightgrey?label=high%207.4&labelColor=e25d68"/></a> <i>Insertion of Sensitive Information Into Debugging Code</i>

<table>
<tr><td>Affected range</td><td><code>>=2.12.0-RC.1<br/><2.12.6</code></td></tr>
<tr><td>Fixed version</td><td><code>2.12.6</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.4</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.033%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>10th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Background

NATS.io is a high performance open source pub-sub distributed communication technology, built for the cloud, on-premise, IoT, and edge computing.

The nats-server provides an optional monitoring port, which provides access to sensitive data.  The nats-server can take certain configuration options on the command-line instead of requiring a configuration file.


### Problem Description

If a nats-server is run with static credentials for all clients provided via argv (the command-line), then those credentials are visible to any user who can see the monitoring port, if that too is enabled.

The `/debug/vars` end-point contains an unredacted copy of argv.

### Patches

Fixed in nats-server 2.12.6 & 2.11.15

### Workarounds

The NATS Maintainers are bemused at the concept of someone deploying a real configuration using `--pass` to avoid a config file, but also enabling monitoring.

Configure credentials inside a configuration file instead of via argv.

Do not enable the monitoring port if using secrets in argv.

Best practice remains to not expose the monitoring port to the Internet, or to untrusted network sources.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33217?s=github&n=v2&ns=github.com%2Fnats-io%2Fnats-server&t=golang&vr=%3E%3D2.12.0-RC.1%2C%3C2.12.6"><img alt="high 7.1: CVE--2026--33217" src="https://img.shields.io/badge/CVE--2026--33217-lightgrey?label=high%207.1&labelColor=e25d68"/></a> <i>Incorrect Authorization</i>

<table>
<tr><td>Affected range</td><td><code>>=2.12.0-RC.1<br/><2.12.6</code></td></tr>
<tr><td>Fixed version</td><td><code>2.12.6</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.1</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:L/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.027%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>8th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Background

NATS.io is a high performance open source pub-sub distributed communication technology, built for the cloud, on-premise, IoT, and edge computing.

The nats-server provides an MQTT client interface.

### Problem Description

When using ACLs on message subjects, these ACLs were not applied in the `$MQTT.>` namespace, allowing MQTT clients to bypass ACL checks for MQTT subjects.

### Affected Versions

Any version before v2.12.6 or v2.11.15

### Workarounds

None.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33215?s=github&n=v2&ns=github.com%2Fnats-io%2Fnats-server&t=golang&vr=%3E%3D2.12.0-RC.1%2C%3C2.12.6"><img alt="medium 6.5: CVE--2026--33215" src="https://img.shields.io/badge/CVE--2026--33215-lightgrey?label=medium%206.5&labelColor=fbb552"/></a> <i>Improper Authentication</i>

<table>
<tr><td>Affected range</td><td><code>>=2.12.0-RC.1<br/><2.12.6</code></td></tr>
<tr><td>Fixed version</td><td><code>2.12.6</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.015%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Background

NATS.io is a high performance open source pub-sub distributed communication technology, built for the cloud, on-premise, IoT, and edge computing.

The nats-server provides an MQTT client interface.

### Problem Description

Sessions and Messages can by hijacked via MQTT Client ID malfeasance.

### Affected Versions

Any version before v2.12.6 or v2.11.15

### Workarounds

None.

### Resources

 * This document is canonically: <https://advisories.nats.io/CVE/secnote-2026-06.txt>
 * GHSA advisory: <https://github.com/nats-io/nats-server/security/advisories/GHSA-fcjp-h8cc-6879>
 * MITRE CVE entry: <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2026-33215>

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33246?s=github&n=v2&ns=github.com%2Fnats-io%2Fnats-server&t=golang&vr=%3E%3D2.12.0-RC.1%2C%3C2.12.6"><img alt="medium 6.4: CVE--2026--33246" src="https://img.shields.io/badge/CVE--2026--33246-lightgrey?label=medium%206.4&labelColor=fbb552"/></a> <i>Improper Authentication</i>

<table>
<tr><td>Affected range</td><td><code>>=2.12.0-RC.1<br/><2.12.6</code></td></tr>
<tr><td>Fixed version</td><td><code>2.12.6</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.4</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:L/I:L/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.026%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>7th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Background

NATS.io is a high performance open source pub-sub distributed communication technology, built for the cloud, on-premise, IoT, and edge computing.

The nats-server allows hub/spoke topologies using "leafnode" connections by other nats-servers.  NATS messages can have headers.

### Problem Description

The nats-server offers a `Nats-Request-Info:` message header, providing information about a request.  This is supposed to provide enough information to allow for account/user identification, such that NATS clients could make their own decisions on how to trust a message, provided that they trust the nats-server as a broker.

A leafnode connecting to a nats-server is not fully trusted unless the system account is bridged too.  Thus identity claims should not have propagated unchecked.

Thus NATS clients relying upon the Nats-Request-Info: header could be spoofed.

Does not directly affect the nats-server itself, but the CVSS Confidentiality and Integrity scores are based upon what a hypothetical client might choose to do with this NATS header.

### Affected Versions

Any version before v2.12.6 or v2.11.15

### Workarounds

None.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33223?s=github&n=v2&ns=github.com%2Fnats-io%2Fnats-server&t=golang&vr=%3E%3D2.12.0-RC.1%2C%3C2.12.6"><img alt="medium 6.4: CVE--2026--33223" src="https://img.shields.io/badge/CVE--2026--33223-lightgrey?label=medium%206.4&labelColor=fbb552"/></a> <i>Authentication Bypass by Spoofing</i>

<table>
<tr><td>Affected range</td><td><code>>=2.12.0-RC.1<br/><2.12.6</code></td></tr>
<tr><td>Fixed version</td><td><code>2.12.6</code></td></tr>
<tr><td>CVSS Score</td><td><code>6.4</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:L/I:L/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.026%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>7th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Background

NATS.io is a high performance open source pub-sub distributed communication technology, built for the cloud, on-premise, IoT, and edge computing.

The nats-server offers a `Nats-Request-Info:` message header, providing information about a request.

### Problem Description

The NATS message header `Nats-Request-Info:` is supposed to be a guarantee of identity by the NATS server, but the stripping of this header from inbound messages was not fully effective.

An attacker with valid credentials for any regular client interface could thus spoof their identity to services which rely upon this header.

### Affected Versions

Any version before v2.12.6 or v2.11.15

### Workarounds

None.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33219?s=github&n=v2&ns=github.com%2Fnats-io%2Fnats-server&t=golang&vr=%3E%3D2.12.0-RC.1%2C%3C2.12.6"><img alt="medium 5.3: CVE--2026--33219" src="https://img.shields.io/badge/CVE--2026--33219-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Allocation of Resources Without Limits or Throttling</i>

<table>
<tr><td>Affected range</td><td><code>>=2.12.0-RC.1<br/><2.12.6</code></td></tr>
<tr><td>Fixed version</td><td><code>2.12.6</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.079%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>23rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Background

NATS.io is a high performance open source pub-sub distributed communication technology, built for the cloud, on-premise, IoT, and edge computing.

The nats-server offers a WebSockets client service, used in deployments where browsers are the NATS clients.

### Problem Description

A malicious client which can connect to the WebSockets port can cause unbounded memory use in the nats-server before authentication; this requires sending a corresponding amount of data.

This is a milder variant of [NATS-advisory-ID 2026-02](https://advisories.nats.io/CVE/secnote-2026-02.txt) (aka CVE-2026-27571; GHSA-qrvq-68c2-7grw).
That earlier issue was a compression bomb, this vulnerability is not. Attacks against this new issue thus require significant client bandwidth.

### Affected Versions

Any version before v2.12.6 or v2.11.15

### Workarounds

Disable websockets if not required for project deployment.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33222?s=github&n=v2&ns=github.com%2Fnats-io%2Fnats-server&t=golang&vr=%3E%3D2.12.0-RC.1%2C%3C2.12.6"><img alt="medium 4.9: CVE--2026--33222" src="https://img.shields.io/badge/CVE--2026--33222-lightgrey?label=medium%204.9&labelColor=fbb552"/></a> <i>Improper Authorization</i>

<table>
<tr><td>Affected range</td><td><code>>=2.12.0-RC.1<br/><2.12.6</code></td></tr>
<tr><td>Fixed version</td><td><code>2.12.6</code></td></tr>
<tr><td>CVSS Score</td><td><code>4.9</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:N/I:H/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.025%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>7th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Background

NATS.io is a high performance open source pub-sub distributed communication technology, built for the cloud, on-premise, IoT, and edge computing.

The persistent storage feature, JetStream, has a management API which has many features, amongst which are backup and restore.

### Problem Description

Users with JetStream admin API access to restore one stream could restore to other stream names, impacting data which should have been protected against them.

### Affected Versions

Any version before v2.12.6 or v2.11.15

### Workarounds

If developers have configured users to have limited JetStream restore permissions, temporarily remove those permissions.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33249?s=github&n=v2&ns=github.com%2Fnats-io%2Fnats-server&t=golang&vr=%3E%3D2.12.0-preview.1%2C%3C2.12.6"><img alt="medium 4.3: CVE--2026--33249" src="https://img.shields.io/badge/CVE--2026--33249-lightgrey?label=medium%204.3&labelColor=fbb552"/></a> <i>Incorrect Authorization</i>

<table>
<tr><td>Affected range</td><td><code>>=2.12.0-preview.1<br/><2.12.6</code></td></tr>
<tr><td>Fixed version</td><td><code>2.12.6</code></td></tr>
<tr><td>CVSS Score</td><td><code>4.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:L/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.027%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>8th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Background

NATS.io is a high performance open source pub-sub distributed communication technology, built for the cloud, on-premise, IoT, and edge computing.

The nats-server supports telemetry on messages, using the per-message NATS headers.

### Problem Description

A valid client which uses message tracing headers can indicate that the trace messages can be sent to an arbitrary valid subject, including those to which the client does not have publish permission.

The payload is a valid trace message and not chosen by the attacker.

### Affected Versions

Any version before v2.12.6 or v2.11.15

### Workarounds

None.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33248?s=github&n=v2&ns=github.com%2Fnats-io%2Fnats-server&t=golang&vr=%3E%3D2.12.0-RC.1%2C%3C2.12.6"><img alt="medium 4.2: CVE--2026--33248" src="https://img.shields.io/badge/CVE--2026--33248-lightgrey?label=medium%204.2&labelColor=fbb552"/></a> <i>Improper Authentication</i>

<table>
<tr><td>Affected range</td><td><code>>=2.12.0-RC.1<br/><2.12.6</code></td></tr>
<tr><td>Fixed version</td><td><code>2.12.6</code></td></tr>
<tr><td>CVSS Score</td><td><code>4.2</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:U/C:L/I:L/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.018%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Background

NATS.io is a high performance open source pub-sub distributed communication technology, built for the cloud, on-premise, IoT, and edge computing.

One authentication model supported is mTLS, deriving the NATS client identity from properties of the TLS Client Certificate.

### Problem Description

When using mTLS for client identity, with `verify_and_map` to derive a NATS identity from the client certificate's Subject DN, certain patterns of RDN would not be correctly enforced, allowing for authentication bypass.

This does require a valid certificate from a CA already trusted for client certificates, and `DN` naming patterns which the NATS maintainers consider highly unlikely.

So this is an unlikely attack. Nonetheless, administrators who have been very sophisticated in their `DN` construction patterns might conceivably be impacted.

### Affected Versions

Fixed in nats-server 2.12.6 & 2.11.15

### Workarounds

Developers should review their CA issuing practices.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>busybox</strong> <code>1.37.0-r20</code> (apk)</summary>

<small><code>pkg:apk/alpine/busybox@1.37.0-r20?os_name=alpine&os_version=3.22</code></small><br/>

```dockerfile
# 2.12.x/alpine3.22/Dockerfile (0:0)

```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-60876?s=alpine&n=busybox&ns=alpine&t=apk&osn=alpine&osv=3.22&vr=%3C%3D1.37.0-r20"><img alt="medium : CVE--2025--60876" src="https://img.shields.io/badge/CVE--2025--60876-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=1.37.0-r20</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.064%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>20th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>zlib</strong> <code>1.3.1-r2</code> (apk)</summary>

<small><code>pkg:apk/alpine/zlib@1.3.1-r2?os_name=alpine&os_version=3.22</code></small><br/>

```dockerfile
# 2.12.x/alpine3.22/Dockerfile (0:0)

```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-27171?s=alpine&n=zlib&ns=alpine&t=apk&osn=alpine&osv=3.22&vr=%3C%3D1.3.1-r2"><img alt="low : CVE--2026--27171" src="https://img.shields.io/badge/CVE--2026--27171-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=1.3.1-r2</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.007%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>
</table>

