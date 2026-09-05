---
hide_table_of_contents: true
---

<table>
<tr><td>digest</td><td><code>sha256:55ff61b2effa9059d4b6e7cfcc5a1232aee5c3438a9dac0247bc7f8a35f1a3f4</code></td><tr><tr><td>vulnerabilities</td><td><img alt="critical: 0" src="https://img.shields.io/badge/critical-0-lightgrey"/> <img alt="high: 3" src="https://img.shields.io/badge/high-3-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/medium-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/low-0-lightgrey"/> <img alt="unspecified: 2" src="https://img.shields.io/badge/unspecified-2-lightgrey"/></td></tr>
<tr><td>platform</td><td>linux/arm64</td></tr>
<tr><td>size</td><td>50 MB</td></tr>
<tr><td>packages</td><td>278</td></tr>
</table>
</details></table>
</details>

<table>
<tr><td valign="top">
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 2" src="https://img.shields.io/badge/H-2-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>golang.org/x/crypto</strong> <code>0.55.0</code> (golang)</summary>

<small><code>pkg:golang/golang.org/x/crypto@0.55.0</code></small><br/>
<a href="https://scout.docker.com/v/CVE-2026-78662?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.56.0"><img alt="high : CVE--2026--78662" src="https://img.shields.io/badge/CVE--2026--78662-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.56.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.56.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.171%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>7th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Previously, a channel registered in the mux's chanList is not usable until it is established. A malicious peer was able flood the channel's incomingRequests, deadlocking the entire connection.

Now, we add an atomic established state, set when a channel becomes usable. Until such a time, handlePacket drops every packet other than the open confirmation/failure, without blocking and without tearing down the connection.

</blockquote>
</details>

<a href="https://scout.docker.com/v/CVE-2026-56855?s=golang&n=crypto&ns=golang.org%2Fx&t=golang&vr=%3C0.56.0"><img alt="high : CVE--2026--56855" src="https://img.shields.io/badge/CVE--2026--56855-lightgrey?label=high%20&labelColor=e25d68"/></a> 

<table>
<tr><td>Affected range</td><td><code>&lt;0.56.0</code></td></tr>
<tr><td>Fixed version</td><td><code>0.56.0</code></td></tr>
<tr><td>EPSS Score</td><td><code>0.171%</code></td></tr>
<tr><td>EPSS Percentile</td><td><code>7th percentile</code></td></tr>
</table>

<details><summary>Description</summary>
<blockquote>

Previously, after a channel has been established, a malicious peer could send crafted messages that would deadlock the entire connection.

Now, we handle all RFC 4254 channel messages; global requests are handled explicitly. Then, treat all other messages as a protocol error and tear the connection down instead of buffering and blocking.

</blockquote>
</details>

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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 1" src="https://img.shields.io/badge/H-1-e25d68"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <!-- unspecified: 0 --><strong>github.com/docker/cli</strong> <code>29.6.2+incompatible</code> (golang)</summary>

<small><code>pkg:golang/github.com/docker/cli@29.6.2%2Bincompatible</code></small><br/>
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
<details><summary><img alt="critical: 0" src="https://img.shields.io/badge/C-0-lightgrey"/> <img alt="high: 0" src="https://img.shields.io/badge/H-0-lightgrey"/> <img alt="medium: 0" src="https://img.shields.io/badge/M-0-lightgrey"/> <img alt="low: 0" src="https://img.shields.io/badge/L-0-lightgrey"/> <img alt="unspecified: 1" src="https://img.shields.io/badge/U-1-lightgrey"/><strong>github.com/chrismellard/docker-credential-acr-env</strong> <code>0.0.0-20230304212654-82a0ddb27589</code> (golang)</summary>

<small><code>pkg:golang/github.com/chrismellard/docker-credential-acr-env@0.0.0-20230304212654-82a0ddb27589</code></small><br/>
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
</table>

