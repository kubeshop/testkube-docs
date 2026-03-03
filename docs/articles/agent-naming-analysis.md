# Agent Naming Disambiguation: Analysis & Proposals

## Problem Statement

Testkube currently uses the term "Agent" for two fundamentally different concepts:

1. **Testkube Agents** — infrastructure components deployed into Kubernetes clusters to execute tests,
   listen for events, sync resources, and emit webhooks (Runner, Listener, GitOps, Webhook capabilities).
2. **Testkube AI Agents** — LLM-powered autonomous assistants configured in the Dashboard that can
   execute complex testing tasks with human oversight (tool access, MCP servers, multi-turn sessions).

Both operate within the same product, share the word "Agent," and use overlapping terminology
("capabilities," "environment," "agent"). This creates potential confusion for users encountering
either concept for the first time.

| | Orchestration Agents | AI Agents |
|---|---|---|
| **Purpose** | Execute tests, listen to events, sync resources, emit webhooks | Autonomously perform complex testing tasks via LLMs |
| **Capabilities** | Runner, Listener, GitOps, Webhook | Tool access, MCP servers, human-in-the-loop |
| **Deployment** | Helm/CLI into Kubernetes | Configured per-environment in Dashboard |
| **Interface** | CLI, Helm, API | Dashboard chat, MCP |
| **Shared terms** | "capabilities", "environment", "agent" | "capabilities", "environment", "agent" |

### Where confusion occurs

- A user reading "deploy an Agent with the Runner capability" and then "configure an Agent with
  tool access" has to mentally context-switch between two completely different systems.
- The agents-overview doc currently includes a disambiguation tip, but it's easy to miss.
- Marketing and product pages may use "Agent" without qualification, leaving the reader unsure
  which type is being referenced.

---

## Proposed Options

### Option 1: Rename orchestration agents → "Connectors"

The orchestration agents are fundamentally *connectors* between your infrastructure and the
Control Plane. Each capability describes *what* the connector does:

- "Runner Connector" (executes workflows)
- "Listener Connector" (watches K8s events)
- "GitOps Connector" (syncs CRDs)
- "Webhook Connector" (emits webhooks)

| Pros | Cons |
|------|------|
| Clear separation — "Connector" implies plumbing, "Agent" implies intelligence | Large rename across docs, CLI (`testkube create agent`), API, Helm values, Dashboard |
| Aligns with the infrastructure nature of the component | "Connector" is less compelling/exciting in marketing contexts |
| Frees "Agent" entirely for the AI side | Significant migration effort for existing users |

### Option 2: Rename AI agents → "Copilots"

Keep "Agents" for orchestration (already deeply embedded in CLI, API, Helm) and call the AI
side "Testkube Copilots":

- "Testkube Copilots" for AI-powered assistants
- "Testkube Agents" for orchestration infrastructure

| Pros | Cons |
|------|------|
| Smallest blast radius — AI agents are newer with fewer entrenched references | "AI Agent" is becoming the industry-standard term (OpenAI, Anthropic, etc.) |
| Aligns with industry precedent (GitHub Copilot, etc.) | "Copilot" may understate the autonomous capabilities |
| "Copilot" implies assistance with human oversight, matching the design | Diverges from the "agentic AI" trend in the market |
| No changes needed to CLI, Helm, or API for orchestration agents | |

### Option 3: Keep both as "Agents" but always qualify

Establish a strict naming convention in all documentation and UI:

- Always say **"Infrastructure Agent"** (or **"Orchestration Agent"**) for Runner/Listener/GitOps/Webhook
- Always say **"AI Agent"** for the LLM-powered agents
- Never use bare "Agent" without qualification (except in clearly scoped pages)
- Add disambiguation callouts to every page that could be ambiguous

| Pros | Cons |
|------|------|
| No product, API, or CLI rename needed | Relies on editorial discipline — easy to slip |
| Low implementation effort | Users still see "Agent" everywhere and must read the qualifier |
| Can serve as a stepping stone toward a full rename later | Doesn't solve the problem in CLI/API (`testkube create agent`) |

### Option 4: Rename orchestration agents → "Workers"

"Workers" is a more infrastructure-native term:

- "Deploy a Worker with Listener capability"
- "Your environment has 3 Workers"

| Pros | Cons |
|------|------|
| Natural in the orchestration context | "Worker" conflicts with the existing "Worker Service" in Control Plane architecture |
| Clear distinction from AI Agents | Same rename blast radius as Option 1 |
| Well-understood term in distributed systems | Less descriptive than "Agent" for the multi-capability model |

### Option 5: Rename AI agents → "AI Assistants"

Revert the AI feature to "Assistant" terminology:

- "Testkube Assistants" or "Testkube AI Assistants" for the AI feature
- "Testkube Agents" for orchestration

| Pros | Cons |
|------|------|
| "Assistant" is well understood and implies human-in-the-loop | You already moved from "Assistant" to "Agent" to convey autonomous capability |
| Clean separation from orchestration Agents | May feel like a step backwards |
| Low rename cost (AI feature is newer) | "Assistant" understates the agentic capabilities |

---

## Recommendation

**Option 2 (Copilots)** or **Option 3 (always qualify)** are the most pragmatic paths:

- **For a clean long-term split:** Option 2. The AI feature is new enough that renaming it to
  "Copilots" is low-cost, and it creates an immediately clear distinction. "Agents" stays for
  orchestration where it's deeply embedded in CLI flags, Helm values, API endpoints, and existing
  user workflows.

- **For minimal disruption now:** Option 3. Add "Infrastructure Agent" as the qualified term in
  docs, add disambiguation notices, and establish a style guide. This can be a stepping stone
  toward a full rename later if the confusion persists.

### Hybrid approach

These options are not mutually exclusive. A practical rollout could be:

1. **Immediately:** Apply Option 3 — qualify all docs, add disambiguation notices (low effort).
2. **Next release cycle:** Evaluate user feedback and decide whether to commit to a rename
   (Option 2 or another).
3. **If renaming:** Introduce the new term alongside the old with a deprecation period, similar
   to how "SuperAgent" was retired.

---

## Impact Assessment

| Area | Option 1 (Connectors) | Option 2 (Copilots) | Option 3 (Qualify) | Option 4 (Workers) | Option 5 (Assistants) |
|------|----------------------|---------------------|-------------------|-------------------|----------------------|
| Documentation | High | Low | Medium | High | Low |
| CLI commands | High | None | None | High | None |
| API endpoints | High | Low | None | High | Low |
| Helm values | High | None | None | High | None |
| Dashboard UI | High | Medium | Medium | High | Medium |
| User migration | High | Low | None | High | Low |
| Marketing/messaging | Medium | Medium | Low | Medium | Medium |
