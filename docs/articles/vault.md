# Using Vault

Testkube should be able to integrate with the various ways Vault integrates into
a Kuberentes cluster. This guide specifically covers the use of the [sidecar
injector](https://developer.hashicorp.com/vault/docs/platform/k8s/injector), but
we are ready to support enterprise customers utilizing the secrets operator or
the CSI provider.

:::warning

Prebuilt and container executors are deprecated so we do not officially support
their usage with Vault, please migrate to workflows.

:::

## Sidecar injector

Vault's sidecar injector injects an init container to fetch secrets on
initialization and a sidecar container to periodically update that secret.
Either container can be disabled, but we will focus on the configuration which
enables both.


To make the workflow workloads compatible with Vault's injector, we can utilize
this workflow template:

```yaml
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflowTemplate
metadata:
  name: vault-secret-injection
spec:
  config:
    port:
      type: string
      default: "8200"
  pod:
    annotations:
      vault.hashicorp.com/agent-inject: "true"
      vault.hashicorp.com/agent-init-first: "true"
      vault.hashicorp.com/agent-enable-quit: "true"
      vault.hashicorp.com/agent-cache-listener-port: "{{ config.port }}"
  after:
  - name: 'Send quit signal to Vault agent'
    container:
      image: busybox
    condition: always
    shell: 'while ! wget --post-data "" -O - http://localhost:{{ config.port }}/agent/v1/quit; do sleep 1; done'
```

This workflow template:

- Enables the sidecar injection.
- Makes sure that the Vault init container is ahead of other init containers. This is
  required to have access to secrets within workflow steps as workflows run in
sequence within init containers.
- Configures the agent server running within the sidecar.
- Calls the agent's quit endpoint after all steps of the workflow have
  completed. Otherwise, the sidecar container would never exit keeping the
workflow running indefinitely.

One can then reuse this workflow template in workflows requiring secret
injection (example builds on Vault's great tutorial
[here](https://developer.hashicorp.com/vault/tutorials/kubernetes/kubernetes-sidecar)):

```yaml
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: check-vault-secret-injection
spec:
  pod:
    # highlight-next-line
    serviceAccountName: test-vault
    annotations:
      # highlight-start
      vault.hashicorp.com/agent-inject-secret-database-config.txt: internal/data/database/config
      vault.hashicorp.com/role: internal-app
      # highlight-end
  # highlight-start
  use:
    - name: 'vault-secret-injection'
  # highlight-end
  container:
    image: alpine:latest
  steps:
    - name: Check secret injection
      condition: always
      run:
        shell: |
          if [ -f /vault/secrets/database-config.txt ]; then
            echo "Secret file found."
          else
            echo "Secret file not found."
            exit 1
          fi
```

:::info

The service account and namespace utilized here should be associated with the
specified Vault role and the Vault role should have an attached policy that
gives it read access to the requested secret.

:::

### Troubleshooting

#### Port conflict

By default, the agent listens on port `8200`. If your workflow happens to listen
on the same port, you can specify a different port number (i.e. `8201`) for the
agent by adding the highlighted lines:

```yaml
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: check-vault-secret-injection
spec:
  pod:
    serviceAccountName: test-vault
    annotations:
      vault.hashicorp.com/agent-inject-secret-database-config.txt: internal/data/database/config
      vault.hashicorp.com/role: internal-app
  use:
    - name: 'vault-secret-injection'
  # highlight-start
      config:
        port: "8201"
  # highlight-end
  container:
    image: alpine:latest
  steps:
    - name: Check secret injection
      condition: always
      run:
        shell: |
          if [ -f /vault/secrets/database-config.txt ]; then
            echo "Secret file found."
          else
            echo "Secret file not found."
            exit 1
          fi
```

#### Istio compatibility

In setups, utilizing a combination of Vault and Istio we recommend explicitly
excluding outgoing traffic to Vault's agent from being routed through Istio's
proxy. Otherwise, the workload could be put in a dead-locked state where one
init container is waiting on another which cannot start till the latter
completes.

:::info

To read more about Istio's compatibility with Testkube please read the following
[guide](./istio).

:::

This can be configured by adding the following line to your workflow template:

```yaml
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflowTemplate
metadata:
  name: vault-secret-injection
  namespace: testkube-agent-poznan
spec:
  config:
    port:
      type: string
      default: "8200"
  pod:
    annotations:
      vault.hashicorp.com/agent-inject: "true"
      vault.hashicorp.com/agent-init-first: "true"
      vault.hashicorp.com/agent-enable-quit: "true"
      vault.hashicorp.com/agent-cache-listener-port: "{{ config.port }}"
      # highlight-next-line
      traffic.sidecar.istio.io/excludeOutboundPorts: "{{ config.port }}"
  after:
  - name: 'Send quit signal to Vault agent'
    container:
      image: busybox
    condition: always
    shell: 'while ! wget --post-data "" -O - http://localhost:{{ config.port }}/agent/v1/quit; do sleep 1; done'
```
