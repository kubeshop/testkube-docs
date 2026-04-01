---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:0a53fbcb5be1cb97782906d8b9a8ad9383a18e35e878240ae8f863fc3e5843b3</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 0" src="https://img.shields.io/badge/critical-0-lightgrey"/> <img alt="high: 13" src="https://img.shields.io/badge/high-13-e25d68"/> <img alt="medium: 25" src="https://img.shields.io/badge/medium-25-fbb552"/> <img alt="low: 4" src="https://img.shields.io/badge/low-4-fce1a9"/> <!-- unspecified: 0 --></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>71 MB</td></tr>
<tr><td>packages</td><td>268</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 4" src="https://img.shields.io/badge/H-4-e25d68"/> <img alt="medium: 7" src="https://img.shields.io/badge/M-7-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/nats-io/nats-server/v2</strong> <code>2.12.5</code> (golang)</summary>

<small><code>pkg:golang/github.com/nats-io/nats-server/v2@2.12.5</code></small><br/>

```dockerfile
# api-server.Dockerfile (32:32)
COPY --from=build /app /bin/app
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-33216?s=github&n=v2&ns=github.com%2Fnats-io%2Fnats-server&t=golang&vr=%3E%3D2.12.0-RC.1%2C%3C2.12.6"><img alt="high 8.6: CVE--2026--33216" src="https://img.shields.io/badge/CVE--2026--33216-lightgrey?label=high%208.6&labelColor=e25d68"/></a> <i>Plaintext Storage of a Password</i>

<table>
<tr><td>Affected range</td><td><code>>=2.12.0-RC.1<br/><2.12.6</code></td></tr>
<tr><td>Fixed version</td><td><code>2.12.6</code></td></tr>
<tr><td>CVSS Score</td><td><code>8.6</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:N/A:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.033%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>10th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.114%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>30th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.030%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>8th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.024%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>7th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.023%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.023%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.066%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>20th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.019%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.024%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 4" src="https://img.shields.io/badge/H-4-e25d68"/> <img alt="medium: 6" src="https://img.shields.io/badge/M-6-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>libssl3</strong> <code>3.3.5-r0</code> (apk)</summary>

<small><code>pkg:apk/alpine/libssl3@3.3.5-r0?arch=x86_64&distro=alpine-3.20.8&upstream=openssl</code></small><br/>

```dockerfile
# api-server.Dockerfile (29:29)
FROM ${ALPINE_IMAGE}
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-15467?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C3.3.6-r0"><img alt="high : CVE--2025--15467" src="https://img.shields.io/badge/CVE--2025--15467-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.6-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.6-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.819%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>74th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-69421?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C3.3.6-r0"><img alt="high : CVE--2025--69421" src="https://img.shields.io/badge/CVE--2025--69421-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.6-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.6-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.034%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>10th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-69420?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C3.3.6-r0"><img alt="high : CVE--2025--69420" src="https://img.shields.io/badge/CVE--2025--69420-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.6-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.6-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.290%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>52nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-69419?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C3.3.6-r0"><img alt="high : CVE--2025--69419" src="https://img.shields.io/badge/CVE--2025--69419-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.6-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.6-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.060%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>19th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-66199?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C3.3.6-r0"><img alt="medium : CVE--2025--66199" src="https://img.shields.io/badge/CVE--2025--66199-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.6-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.6-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.064%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>20th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-15468?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C3.3.6-r0"><img alt="medium : CVE--2025--15468" src="https://img.shields.io/badge/CVE--2025--15468-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

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

<a href="https://scout.docker.com/v/CVE-2026-22795?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C3.3.6-r0"><img alt="medium : CVE--2026--22795" src="https://img.shields.io/badge/CVE--2026--22795-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.6-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.6-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.024%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-22796?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C3.3.6-r0"><img alt="medium : CVE--2026--22796" src="https://img.shields.io/badge/CVE--2026--22796-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.6-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.6-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.112%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>30th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-68160?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C3.3.6-r0"><img alt="medium : CVE--2025--68160" src="https://img.shields.io/badge/CVE--2025--68160-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.6-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.6-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.024%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>6th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-69418?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C3.3.6-r0"><img alt="medium : CVE--2025--69418" src="https://img.shields.io/badge/CVE--2025--69418-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.6-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.6-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.007%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 9" src="https://img.shields.io/badge/M-9-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>libcurl</strong> <code>8.14.1-r2</code> (apk)</summary>

<small><code>pkg:apk/alpine/libcurl@8.14.1-r2?arch=x86_64&distro=alpine-3.20.8&upstream=curl</code></small><br/>

```dockerfile
# api-server.Dockerfile (30:30)
RUN apk --no-cache add ca-certificates libssl3 git
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-3805?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C%3D8.14.1-r2"><img alt="high : CVE--2026--3805" src="https://img.shields.io/badge/CVE--2026--3805-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=8.14.1-r2</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.039%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>12th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-3784?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C%3D8.14.1-r2"><img alt="medium : CVE--2026--3784" src="https://img.shields.io/badge/CVE--2026--3784-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=8.14.1-r2</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.015%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-1965?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C%3D8.14.1-r2"><img alt="medium : CVE--2026--1965" src="https://img.shields.io/badge/CVE--2026--1965-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=8.14.1-r2</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.054%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>17th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-14017?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C%3D8.14.1-r2"><img alt="medium : CVE--2025--14017" src="https://img.shields.io/badge/CVE--2025--14017-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=8.14.1-r2</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.007%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-13034?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C%3D8.14.1-r2"><img alt="medium : CVE--2025--13034" src="https://img.shields.io/badge/CVE--2025--13034-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=8.14.1-r2</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.011%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-3783?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C%3D8.14.1-r2"><img alt="medium : CVE--2026--3783" src="https://img.shields.io/badge/CVE--2026--3783-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=8.14.1-r2</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.016%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>3rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-15079?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C%3D8.14.1-r2"><img alt="medium : CVE--2025--15079" src="https://img.shields.io/badge/CVE--2025--15079-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=8.14.1-r2</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.035%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>10th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-14819?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C%3D8.14.1-r2"><img alt="medium : CVE--2025--14819" src="https://img.shields.io/badge/CVE--2025--14819-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=8.14.1-r2</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.045%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>14th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-14524?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C%3D8.14.1-r2"><img alt="medium : CVE--2025--14524" src="https://img.shields.io/badge/CVE--2025--14524-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=8.14.1-r2</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.026%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>7th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-10966?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C%3D8.14.1-r2"><img alt="medium : CVE--2025--10966" src="https://img.shields.io/badge/CVE--2025--10966-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=8.14.1-r2</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.018%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-15224?s=alpine&n=curl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C%3D8.14.1-r2"><img alt="low : CVE--2025--15224" src="https://img.shields.io/badge/CVE--2025--15224-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=8.14.1-r2</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.084%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>25th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>c-ares</strong> <code>1.33.1-r0</code> (apk)</summary>

<small><code>pkg:apk/alpine/c-ares@1.33.1-r0?arch=x86_64&distro=alpine-3.20.8</code></small><br/>

```dockerfile
# api-server.Dockerfile (30:30)
RUN apk --no-cache add ca-certificates libssl3 git
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-31498?s=alpine&n=c-ares&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C%3D1.33.1-r0"><img alt="high : CVE--2025--31498" src="https://img.shields.io/badge/CVE--2025--31498-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=1.33.1-r0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.618%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>70th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-62408?s=alpine&n=c-ares&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C%3D1.33.1-r0"><img alt="medium : CVE--2025--62408" src="https://img.shields.io/badge/CVE--2025--62408-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=1.33.1-r0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.019%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>5th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/docker/docker</strong> <code>28.5.2+incompatible</code> (golang)</summary>

<small><code>pkg:golang/github.com/docker/docker@28.5.2%2Bincompatible</code></small><br/>

```dockerfile
# api-server.Dockerfile (32:32)
COPY --from=build /app /bin/app
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-34040?s=github&n=docker&ns=github.com%2Fdocker&t=golang&vr=%3C29.3.1"><img alt="high 8.8: CVE--2026--34040" src="https://img.shields.io/badge/CVE--2026--34040-lightgrey?label=high%208.8&labelColor=e25d68"/></a> <i>Authentication Bypass Using an Alternate Path or Channel</i>

<table>
<tr><td>Affected range</td><td><code>&lt;29.3.1</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>8.8</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:C/C:H/I:H/A:H</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/docker/cli</strong> <code>29.3.0+incompatible</code> (golang)</summary>

<small><code>pkg:golang/github.com/docker/cli@29.3.0%2Bincompatible</code></small><br/>

```dockerfile
# api-server.Dockerfile (32:32)
COPY --from=build /app /bin/app
```

<br/>

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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>nghttp2-libs</strong> <code>1.62.1-r0</code> (apk)</summary>

<small><code>pkg:apk/alpine/nghttp2-libs@1.62.1-r0?arch=x86_64&distro=alpine-3.20.8&upstream=nghttp2</code></small><br/>

```dockerfile
# api-server.Dockerfile (30:30)
RUN apk --no-cache add ca-certificates libssl3 git
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-27135?s=alpine&n=nghttp2&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C%3D1.62.1-r0"><img alt="high : CVE--2026--27135" src="https://img.shields.io/badge/CVE--2026--27135-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=1.62.1-r0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.017%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>4th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 2" src="https://img.shields.io/badge/L-2-fce1a9"/> <!-- unspecified: 0 --><strong>ssl_client</strong> <code>1.36.1-r30</code> (apk)</summary>

<small><code>pkg:apk/alpine/ssl_client@1.36.1-r30?arch=x86_64&distro=alpine-3.20.8&upstream=busybox</code></small><br/>

```dockerfile
# api-server.Dockerfile (29:29)
FROM ${ALPINE_IMAGE}
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-60876?s=alpine&n=busybox&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C%3D1.36.1-r30"><img alt="medium : CVE--2025--60876" src="https://img.shields.io/badge/CVE--2025--60876-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=1.36.1-r30</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>EPSS Score</td><td><code>0.064%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>20th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-46394?s=alpine&n=busybox&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C1.36.1-r31"><img alt="low : CVE--2025--46394" src="https://img.shields.io/badge/CVE--2025--46394-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.36.1-r31</code></td></tr>
<tr><td>Fixed version</td><td><code>1.36.1-r31</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.083%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>24th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-58251?s=alpine&n=busybox&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C1.36.1-r31"><img alt="low : CVE--2024--58251" src="https://img.shields.io/badge/CVE--2024--58251-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.36.1-r31</code></td></tr>
<tr><td>Fixed version</td><td><code>1.36.1-r31</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.077%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>23rd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>zlib</strong> <code>1.3.1-r1</code> (apk)</summary>

<small><code>pkg:apk/alpine/zlib@1.3.1-r1?arch=x86_64&distro=alpine-3.20.8</code></small><br/>

```dockerfile
# api-server.Dockerfile (29:29)
FROM ${ALPINE_IMAGE}
```

<br/>

<a href="https://scout.docker.com/v/CVE-2026-27171?s=alpine&n=zlib&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C%3D1.3.1-r1"><img alt="low : CVE--2026--27171" src="https://img.shields.io/badge/CVE--2026--27171-lightgrey?label=low%20&labelColor=fce1a9"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;=1.3.1-r1</code></td></tr>
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

