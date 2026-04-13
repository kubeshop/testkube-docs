---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:85c82477151b2beefe2626e92e5b1b83c383789bdf6c1098ba8e39139cc1bbbf</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 2" src="https://img.shields.io/badge/critical-2-8b1924"/> <img alt="high: 6" src="https://img.shields.io/badge/high-6-e25d68"/> <img alt="medium: 7" src="https://img.shields.io/badge/medium-7-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/low-0-lightgrey"/> <img alt="unspecified: 6" src="https://img.shields.io/badge/unspecified-6-lightgrey"/></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>36 MB</td></tr>
<tr><td>packages</td><td>212</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 2" src="https://img.shields.io/badge/C-2-8b1924"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/jackc/pgx/v5</strong> <code>5.9.1</code> (golang)</summary>

<small><code>pkg:golang/github.com/jackc/pgx/v5@5.9.1</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-33816?s=golang&n=v5&ns=github.com%2Fjackc%2Fpgx&t=golang&vr=%3E%3D0"><img alt="critical : CVE--2026--33816" src="https://img.shields.io/badge/CVE--2026--33816-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.043%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>13th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Memory-safety vulnerability in github.com/jackc/pgx/v5.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33815?s=golang&n=v5&ns=github.com%2Fjackc%2Fpgx&t=golang&vr=%3E%3D0"><img alt="critical : CVE--2026--33815" src="https://img.shields.io/badge/CVE--2026--33815-lightgrey?label=critical%20&labelColor=8b1924"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.043%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>13th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Memory-safety vulnerability in github.com/jackc/pgx/v5.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 4" src="https://img.shields.io/badge/H-4-e25d68"/> <img alt="medium: 7" src="https://img.shields.io/badge/M-7-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/nats-io/nats-server/v2</strong> <code>2.12.5</code> (golang)</summary>

<small><code>pkg:golang/github.com/nats-io/nats-server/v2@2.12.5</code></small><br/>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 6" src="https://img.shields.io/badge/U-6-lightgrey"/><strong>stdlib</strong> <code>1.26.1</code> (golang)</summary>

<small><code>pkg:golang/stdlib@1.26.1</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-32280?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.2"><img alt="high : CVE--2026--32280" src="https://img.shields.io/badge/CVE--2026--32280-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.016%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

During chain building, the amount of work that is done is not correctly limited when a large number of intermediate certificates are passed in VerifyOptions.Intermediates, which can lead to a denial of service. This affects both direct users of crypto/x509 and users of crypto/tls.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-33810?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.2"><img alt="unspecified : CVE--2026--33810" src="https://img.shields.io/badge/CVE--2026--33810-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.005%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>0th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

When verifying a certificate chain containing excluded DNS constraints, these constraints are not correctly applied to wildcard DNS SANs which use a different case than the constraint.

This only affects validation of otherwise trusted certificate chains, issued by a root CA in the VerifyOptions.Roots CertPool, or in the system certificate pool.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32289?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.2"><img alt="unspecified : CVE--2026--32289" src="https://img.shields.io/badge/CVE--2026--32289-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.011%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Context was not properly tracked across template branches for JS template literals, leading to possibly incorrect escaping of content when branches were used. Additionally template actions within JS template literals did not properly track the brace depth, leading to incorrect escaping being applied.

These issues could cause actions within JS template literals to be incorrectly or improperly escaped, leading to XSS vulnerabilities.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32288?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.2"><img alt="unspecified : CVE--2026--32288" src="https://img.shields.io/badge/CVE--2026--32288-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.007%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

tar.Reader can allocate an unbounded amount of memory when reading a maliciously-crafted archive containing a large number of sparse regions encoded in the "old GNU sparse map" format.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32283?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.2"><img alt="unspecified : CVE--2026--32283" src="https://img.shields.io/badge/CVE--2026--32283-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.007%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>0th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

If one side of the TLS connection sends multiple key update messages post-handshake in a single record, the connection can deadlock, causing uncontrolled consumption of resources. This can lead to a denial of service.

This only affects TLS 1.3.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32282?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.2"><img alt="unspecified : CVE--2026--32282" src="https://img.shields.io/badge/CVE--2026--32282-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.010%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

On Linux, if the target of Root.Chmod is replaced with a symlink while the chmod operation is in progress, Chmod can operate on the target of the symlink, even when the target lies outside the root.

The Linux fchmodat syscall silently ignores the AT_SYMLINK_NOFOLLOW flag, which Root.Chmod uses to avoid symlink traversal. Root.Chmod checks its target before acting and returns an error if the target is a symlink lying outside the root, so the impact is limited to cases where the target is replaced with a symlink between the check and operation.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-32281?s=golang&n=stdlib&t=golang&vr=%3E%3D1.26.0-0%2C%3C1.26.2"><img alt="unspecified : CVE--2026--32281" src="https://img.shields.io/badge/CVE--2026--32281-lightgrey?label=unspecified%20&labelColor=lightgrey"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=1.26.0-0<br/><1.26.2</code></td></tr>
<tr><td>Fixed version</td><td><code>1.26.2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.007%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>0th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Validating certificate chains which use policies is unexpectedly inefficient when certificates in the chain contain a very large number of policy mappings, possibly causing denial of service.

This only affects validation of otherwise trusted certificate chains, issued by a root CA in the VerifyOptions.Roots CertPool, or in the system certificate pool.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/docker/cli</strong> <code>29.3.0+incompatible</code> (golang)</summary>

<small><code>pkg:golang/github.com/docker/cli@29.3.0%2Bincompatible</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2025-15558?s=golang&n=cli&ns=github.com%2Fdocker&t=golang&vr=%3E%3D19.03.0%2Bincompatible"><img alt="high : CVE--2025--15558" src="https://img.shields.io/badge/CVE--2025--15558-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>>=19.03.0+incompatible</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.023%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Docker CLI Plugins: Uncontrolled Search Path Element Leads to Local Privilege Escalation on Windows in github.com/docker/cli

</blockquote>
</details>
</details></td></tr>
</table>

