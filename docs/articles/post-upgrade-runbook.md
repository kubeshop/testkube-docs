# Testkube Enterprise Post-Upgrade Runbook

Use this runbook immediately after a Testkube Enterprise upgrade.

This runbook is intended for on-premises installations where your team performs the upgrade.

For SaaS Control Plane users, Control Plane upgrades are managed by the Testkube Engineering team. In that model, customer validation should focus on agent upgrades and agent connectivity/execution health.

This checklist uses common operational tools such as `kubectl`, `helm`, `curl`, and log inspection from the Kubernetes workloads. Depending on how your platform is managed, you may use other tooling to verify the same checks, such as Argo CD, Flux, Rancher, Lens, or your cloud provider's Kubernetes console.

To run this checklist, operators typically need permission to view workloads, logs, jobs, events, ingress resources, and Helm release state in the target namespace. In practical terms, this usually means read access to Pods, Deployments, StatefulSets, Jobs, Secrets metadata, Events, and Ingresses, plus access to the release management tool used in your environment.

If your installation is managed through GitOps, use your delivery tool as the source of truth for sync status and deployed revision, and then use Kubernetes logs, events, and runtime health checks to confirm that the upgraded release is actually healthy.

## Scope

- Installation model: On-premises Testkube Enterprise
- Namespace: `testkube-enterprise` (default)
- Components: API, UI, Worker Service, Dex, NATS, S3-compatible object storage (MinIO by default), DB
- Goal: validate platform health, execution path, and integrations before sign-off

## SaaS Control Plane Users

If you use Testkube SaaS Control Plane, use this reduced checklist after your agent upgrade:

- [ ] Agent pods are Running/Ready in each connected cluster
- [ ] Agents reconnect and show healthy in the Control Plane
- [ ] One smoke execution runs successfully through the upgraded agent
- [ ] Artifacts/results are visible in the Control Plane UI
- [ ] No auth/TLS/network errors in agent logs

## Operator Inputs

Set these once at the top of your terminal session:

```bash
export NS="testkube-enterprise"
export RELEASE="testkube-enterprise"   # adjust if your Helm release name differs
```

## 0) Upgrade Sanity

- [ ] Confirm target chart/release is deployed
- [ ] Confirm no failed upgrade hook jobs
- [ ] Confirm all core pods are Running/Ready

```bash
helm list -n "$NS"
helm status "$RELEASE" -n "$NS"
kubectl get jobs -n "$NS"
kubectl get pods -n "$NS" -o wide
```

## 1) Core Workload Health

- [ ] API deployment available
- [ ] UI deployment available
- [ ] Worker deployment available
- [ ] Dex deployment available (if enabled)
- [ ] NATS statefulset/deployment healthy
- [ ] S3-compatible object storage healthy (MinIO if using default in-cluster storage)

```bash
kubectl get deploy -n "$NS"
kubectl get sts -n "$NS"
kubectl get po -n "$NS" --sort-by=.metadata.creationTimestamp
```

## 2) Migration and Database Verification

- [ ] DB migrations completed successfully (if enabled)
- [ ] API logs show clean startup and DB connectivity
- [ ] No repeated migration retries or schema errors

```bash
kubectl get jobs -n "$NS" | grep -i migration || true
kubectl logs -n "$NS" deploy/testkube-enterprise-api --tail=300
kubectl describe deploy testkube-enterprise-api -n "$NS"
```

## 3) License and Enterprise Mode

- [ ] Enterprise license loaded (online or offline secret)
- [ ] No license-related errors in API logs
- [ ] Enterprise-only features visible in UI/API

```bash
kubectl get secret -n "$NS" | grep -i license || true
kubectl logs -n "$NS" deploy/testkube-enterprise-api --tail=300 | grep -Ei "license|enterprise|error" || true
```

## 4) Auth and Login (Dex/SSO)

- [ ] Admin login works
- [ ] SSO flow works (if configured)
- [ ] Token refresh works (no forced relogin loops)

```bash
kubectl logs -n "$NS" deploy/testkube-enterprise-dex --tail=200 2>/dev/null || true
kubectl logs -n "$NS" deploy/testkube-enterprise-api --tail=300 | grep -Ei "oidc|dex|auth|token|error" || true
```

## 5) Storage and Artifacts

- [ ] S3-compatible storage is reachable (MinIO is the default chart option)
- [ ] Worker can reach object storage
- [ ] Upload/download artifacts from a real run works
- [ ] No credential/provider errors in worker logs

```bash
kubectl logs -n "$NS" deploy/testkube-worker-service --tail=300
kubectl logs -n "$NS" deploy/testkube-worker-service --tail=300 | grep -Ei "minio|s3|credential|bucket|error" || true
```

## 6) Messaging and Execution Path

- [ ] NATS connectivity is stable (no reconnect storms)
- [ ] Smoke workflow executes end-to-end
- [ ] Results and artifacts are visible in UI/API

```bash
kubectl logs -n "$NS" deploy/testkube-enterprise-api --tail=300 | grep -Ei "nats|queue|publish|subscribe|error" || true
kubectl logs -n "$NS" deploy/testkube-worker-service --tail=300 | grep -Ei "nats|queue|workflow|execution|error" || true
```

## 7) Functional Validation for TestWorkflow Orchestration

Use at least one representative TestWorkflow that reflects your real setup. Prefer a workflow that exercises orchestration behavior such as sequential steps, dependencies, parallel stages, artifacts, and external integrations.

- [ ] Start a representative TestWorkflow from the UI, CLI, or API
- [ ] Confirm it is scheduled and picked up by the expected agent/worker
- [ ] Confirm all orchestration stages progress as expected
- [ ] Confirm step-level status, logs, and final result are visible in the UI
- [ ] Confirm artifacts, reports, and outputs are stored and downloadable
- [ ] Confirm retries, conditions, or dependent stages behave as expected if your workflow uses them
- [ ] Confirm no unexpected queueing, stuck states, or missing events occur during execution

This is the most important functional check in the runbook, because it validates that the upgraded platform still executes real customer workflows end-to-end rather than only passing infrastructure health checks.

## 8) Ingress, DNS, TLS

- [ ] UI endpoint reachable over HTTPS
- [ ] API endpoint reachable and healthy
- [ ] TLS certificate valid

```bash
kubectl get ingress -n "$NS"
kubectl describe ingress -n "$NS"
```

Optional endpoint checks from your workstation:

```bash
curl -I https://<ui-host>
curl -I https://<api-host>/health
```

## 9) Agent Connectivity (if applicable)

- [ ] Existing agents reconnect
- [ ] One run from agent cluster executes successfully
- [ ] Events and status updates visible in UI/API

## 10) Feature-Specific Validation

In addition to the core checks above, validate the specific Testkube features your installation actively uses. Do not stop at the platform smoke test if your users rely on higher-level capabilities.

- [ ] Webhooks: delivery succeeds and downstream systems receive expected events
- [ ] TestTriggers: trigger conditions still launch the expected tests or workflows
- [ ] Credentials and secret references: executions still resolve required credentials correctly
- [ ] AI Agents: chats, actions, or AI-assisted flows still work as expected
- [ ] MCP server integrations: connected tools can still reach the configured server and perform expected operations
- [ ] Notifications: email, Slack, or other notification paths still fire when expected
- [ ] External auth or SSO-dependent features: users can still access protected flows
- [ ] Any custom integrations, policies, or automations specific to your setup still behave correctly

If a feature is business-critical in your environment, run one real validation scenario for it after the upgrade rather than relying only on pod health or startup logs.

## 11) Integrations

- [ ] SMTP/email notifications work (if enabled)
- [ ] Webhooks/integrations still deliver successfully
- [ ] No secret/mount regressions

## 12) 24h Stabilization Checks

- [ ] Restart counts stable
- [ ] Error rate at baseline
- [ ] Queue depth/latency at baseline
- [ ] No platform-caused execution regressions

```bash
kubectl get po -n "$NS"
kubectl get events -n "$NS" --sort-by=.lastTimestamp | tail -n 50
```

## Rollback Readiness (keep prepared)

- [ ] Previous chart/app version documented
- [ ] Previous values file revision identified
- [ ] Rollback owner assigned

```bash
helm history "$RELEASE" -n "$NS"
# Example rollback command (choose target revision from history):
# helm rollback "$RELEASE" <REVISION> -n "$NS"
```