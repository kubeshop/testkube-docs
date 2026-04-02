---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:daf4e9250345e6b0a2da597a6e2a32fa2f0a4346e1a11fad62885452cea90165</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 0" src="https://img.shields.io/badge/critical-0-lightgrey"/> <img alt="high: 7" src="https://img.shields.io/badge/high-7-e25d68"/> <img alt="medium: 9" src="https://img.shields.io/badge/medium-9-fbb552"/> <img alt="low: 2" src="https://img.shields.io/badge/low-2-fce1a9"/> <!-- unspecified: 0 --></td></tr>
<tr><td>platform</td><td>linux/arm64</td></tr>
<tr><td>size</td><td>68 MB</td></tr>
<tr><td>packages</td><td>451</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 4" src="https://img.shields.io/badge/H-4-e25d68"/> <img alt="medium: 7" src="https://img.shields.io/badge/M-7-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/nats-io/nats-server/v2</strong> <code>2.12.5</code> (golang)</summary>

<small><code>pkg:golang/github.com/nats-io/nats-server@2.12.5#v2</code></small><br/>
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
<tr><td>EPSS Percentile</td><td><code>7th percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/docker/docker</strong> <code>28.5.2+incompatible</code> (golang)</summary>

<small><code>pkg:golang/github.com/docker/docker@28.5.2%2Bincompatible</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-34040?s=github&n=docker&ns=github.com%2Fdocker&t=golang&vr=%3C29.3.1"><img alt="high 8.8: CVE--2026--34040" src="https://img.shields.io/badge/CVE--2026--34040-lightgrey?label=high%208.8&labelColor=e25d68"/></a> <i>Authentication Bypass Using an Alternate Path or Channel</i>

<table>
<tr><td>Affected range</td><td><code>&lt;29.3.1</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>8.8</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:C/C:H/I:H/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.012%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
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
<tr><td>EPSS Score</td><td><code>0.011%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/buger/jsonparser</strong> <code>1.1.1</code> (golang)</summary>

<small><code>pkg:golang/github.com/buger/jsonparser@1.1.1</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-32285?s=github&n=jsonparser&ns=github.com%2Fbuger&t=golang&vr=%3C%3D1.1.1"><img alt="high 7.5: CVE--2026--32285" src="https://img.shields.io/badge/CVE--2026--32285-lightgrey?label=high%207.5&labelColor=e25d68"/></a> <i>Out-of-bounds Read</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=1.1.1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.1.2</code></td></tr>
<tr><td>CVSS Score</td><td><code>7.5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.041%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>13th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The Delete function fails to properly validate offsets when processing malformed JSON input. This can lead to a negative slice index and a runtime panic, allowing a denial of service attack.

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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 1" src="https://img.shields.io/badge/L-1-fce1a9"/> <!-- unspecified: 0 --><strong>github.com/go-git/go-git/v5</strong> <code>5.16.5</code> (golang)</summary>

<small><code>pkg:golang/github.com/go-git/go-git@5.16.5#v5</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-34165?s=github&n=v5&ns=github.com%2Fgo-git%2Fgo-git&t=golang&vr=%3E%3D5.0.0%2C%3C%3D5.17.0"><img alt="medium 5.0: CVE--2026--34165" src="https://img.shields.io/badge/CVE--2026--34165-lightgrey?label=medium%205.0&labelColor=fbb552"/></a> <i>Integer Underflow (Wrap or Wraparound)</i>

<table>
<tr><td>Affected range</td><td><code>>=5.0.0<br/><=5.17.0</code></td></tr>
<tr><td>Fixed version</td><td><code>5.17.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>5</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:L/UI:R/S:U/C:N/I:N/A:H</code></td></tr>
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

<a href="https://scout.docker.com/v/CVE-2026-33762?s=github&n=v5&ns=github.com%2Fgo-git%2Fgo-git&t=golang&vr=%3C%3D5.17.0"><img alt="low 2.8: CVE--2026--33762" src="https://img.shields.io/badge/CVE--2026--33762-lightgrey?label=low%202.8&labelColor=fce1a9"/></a> <i>Improper Validation of Array Index</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=5.17.0</code></td></tr>
<tr><td>Fixed version</td><td><code>5.17.1</code></td></tr>
<tr><td>CVSS Score</td><td><code>2.8</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:L/UI:R/S:U/C:N/I:N/A:L</code></td></tr>
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

