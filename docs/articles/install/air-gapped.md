# Air-Gapped and Offline Installation

Testkube On-Prem runs entirely in your infrastructure, including in networks with no path to the public internet. This guide gives fully-disconnected environments a self-serve install path: mirror every required image into an internal registry, point Testkube at that registry, and install without ever reaching `docker.io`.

:::info
This guide covers the **On-Prem Control Plane**. For licensing in restricted networks, see [Offline License](/articles/install/advanced-install#offline-license).
:::

## Choose your scenario

There are two distinct air-gapped patterns. They need different setups, so confirm which one describes your network before you start.

| Scenario                          | Path to `docker.io`                                                                                 | What you do                                                                                                                                                    |
| --------------------------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Registry proxy (pull-through)** | Indirect. A proxy such as Artifactory or a pull-through cache can still reach `docker.io` upstream. | Override the registry so images resolve through your proxy. See [Registry Proxies](/articles/install/advanced-install#artifactory-and-other-registry-proxies). |
| **Fully disconnected**            | None. Nothing in the enclave can reach `docker.io`, not even through a proxy.                       | Sideload every image into an internal registry, then point Testkube at it. **This guide.**                                                                     |

If your proxy can reach `docker.io`, use the [registry proxy guidance](/articles/install/advanced-install#artifactory-and-other-registry-proxies). The rest of this page assumes no upstream path exists.

## Before you begin

For a fully-disconnected install you need:

- An internal container registry reachable from the target cluster (for example Harbor, Artifactory, or an ECR/GAR/ACR instance inside the enclave).
- A workstation with access to **both** the public internet and your internal registry, used to copy images across the boundary. `docker`, `crane`, `skopeo`, or `oras` all work for this.
- An [offline license](/articles/install/advanced-install#offline-license). Online licenses require outbound access to `license.testkube.io` and will not validate in a disconnected enclave.
- The Testkube Helm charts available inside the enclave. Pull the `testkube-enterprise` and `testkube-runner` OCI charts on a connected workstation and push them to your internal OCI registry, or mirror the chart archives.

## Step 1: Mirror the complete image set

Your offline bundle is only correct if it is complete. Testkube publishes an authoritative, per-release manifest of every image its charts reference: the [Image Inventory](/articles/inventory/images). Use it as your source of truth and pull the **exact tags** listed there for the chart versions you install.

The manifest is split across two charts. A fully-disconnected install must mirror **both** sets. Mirroring only the Control Plane images is the most common mistake, because it leaves out the images a Runner needs to execute workflows.

### Control Plane chart (`testkube-enterprise`)

| Image                                         | Purpose                  |
| --------------------------------------------- | ------------------------ |
| `kubeshop/testkube-enterprise-api`            | Control Plane API server |
| `kubeshop/testkube-enterprise-ui`             | Dashboard                |
| `kubeshop/testkube-enterprise-worker-service` | Background processing    |
| `kubeshop/testkube-migration`                 | Database migrations      |
| `kubeshop/dex`                                | Identity provider        |
| `kubeshop/testkube-minio`                     | Object storage           |
| `kubeshop/testkube-nats`                      | Message broker           |
| `natsio/nats-server-config-reloader`          | NATS config reloader     |

Database images depend on your chosen backend. New installations default to PostgreSQL, so mirror the PostgreSQL images you deploy (the CloudNativePG operator and its PostgreSQL image, or the bundled chart image). Legacy installations that still run MongoDB must mirror the MongoDB image (`kubeshop/bitnami-mongodb`). See [Bring Your Own Infra](/articles/install/advanced-install#bring-your-own-infra).

### Agent / Runner chart (`testkube-runner`)

| Image                                | Purpose                                     |
| ------------------------------------ | ------------------------------------------- |
| `kubeshop/testkube-api-server`       | Runner Agent API server                     |
| `kubeshop/testkube-tw-init`          | Initializes a Test Workflow execution       |
| `kubeshop/testkube-tw-toolkit`       | Runs steps within a Test Workflow execution |
| `nats`                               | NATS message broker                         |
| `natsio/nats-server-config-reloader` | NATS config reloader                        |

:::warning Test Workflow images are not in the manifest
The Image Inventory lists platform images only. It does **not** include the images your Test Workflows run, such as k6, Cypress, Playwright, or Postman. In a fully-disconnected enclave you must also mirror every tool image your workflows reference, and set [`imagePullSecrets`](/articles/global-parameters-in-testkube-helm-charts) so executions can pull them. Inventory your workflows before you freeze the bundle.
:::

Copy each image to your internal registry, keeping the tag. For example, with `crane`:

```bash
crane copy kubeshop/testkube-enterprise-api:<tag> registry.internal/kubeshop/testkube-enterprise-api:<tag>
```

## Step 2: Point Testkube at your internal registry

Once the images live in your registry, tell both charts to pull from it instead of `docker.io`. The simplest approach sets a global registry for every image in a chart:

```yaml
global:
  imageRegistry: registry.internal
  imagePullSecrets:
    - name: internal-registry
```

`global.imageRegistry` overrides the registry for all images in the chart. Apply it to both the `testkube-enterprise` and `testkube-runner` installs. If individual services live under different registries, override them per service instead:

```yaml
testkube-api:
  image:
    registry: registry.internal
    repository: kubeshop/testkube-api-server
    tag: "<tag>"
    pullPolicy: IfNotPresent
    pullSecret:
      - internal-registry
```

See [Using Global Parameters](/articles/global-parameters-in-testkube-helm-charts) for the full list of `global` settings and the precedence rules between global and per-service values.

## Step 3: Install the Control Plane

Install the `testkube-enterprise` chart with your internal-registry values and an offline license:

```yaml
global:
  enterpriseOfflineAccess: true
  enterpriseLicenseSecretRef: testkube-enterprise-license
  imageRegistry: registry.internal
  imagePullSecrets:
    - name: internal-registry
```

Follow [Install with Helm](/articles/install/install-with-helm) for the rest of the Control Plane configuration (domain, TLS, ingress, and storage). Every image the install pulls should now resolve from your internal registry.

## Step 4: Create and install Runner Agents

:::warning The Runner is a separate pre-staging step
Runner images are pulled when you **create an Agent**, not when you install the Control Plane. Installing the Control Plane succeeds without ever touching the Agent / Runner images, so a bundle staged from the Control Plane install alone will look complete and then fail the first time you add a Runner. Pre-stage the [Agent / Runner chart images](#agent--runner-chart-testkube-runner) as part of Step 1, before you create any Agent.
:::

Testkube Agents are always deployed by you in your own infrastructure, and the On-Prem Control Plane ships without a Runner by default. After the Control Plane is running, create a Runner Agent and install it with the same internal-registry values:

```yaml
runner:
  id: "<your:tkcrun_:runner_id>"
  orgId: "<your:tkcorg_:organization_id>"
  envId: "<your:tkcenv_:environment_id>"
  secret: "<your:tkckey_agent_:key>"

global:
  imageRegistry: registry.internal
  imagePullSecrets:
    - name: internal-registry
```

See [Installing Testkube Agent with Helm Charts](/articles/multi-agent-runner-helm-chart) for the full Runner setup, including how to obtain the runner ID and secret.

## Verify completeness

Confirm nothing still points at `docker.io` before you hand the environment off:

- Watch for `ImagePullBackOff` or `ErrImagePull` on Control Plane pods, Runner pods, and the first Test Workflow execution. Each one points at an image you have not mirrored yet.
- A Control Plane that starts cleanly does not prove the bundle is complete. Create a Runner and run a real Test Workflow, so the Agent and workflow images are exercised too.
- Re-check the [Image Inventory](/articles/inventory/images) whenever you upgrade. Tags change between releases, and a new tag is a new image to mirror.

If a fully-disconnected install does not work for your setup, [get in touch](https://testkube.io/contact) and we will help you install Testkube as required.
