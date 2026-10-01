# Testkube Runner CLI Commands {#testkube-agent-cli-commands}

The Testkube CLI provides a number of commands to work with Runners - [Read More](/articles/agents-overview).

:::note
`agent` commands such as `testkube create agent` and `testkube install agent` still work, and are deprecated. Use the `runner` commands below. The `--runner` capability flag is deprecated in favor of `--execution`.
:::

:::tip
All commands below have a `--help` argument for printing all available arguments with a short description, and they
are also documented in the [CLI Reference](/cli/testkube).
:::

## Prerequisites

To be able to use these commands, you'll need to be on the latest version of

- the Testkube Control-Plane
- the Testkube Runner in your existing Environments
- the Testkube CLI

To use these CLI commands, you will have to use `testkube login` to first connect your CLI with a specific Environment in your
Testkube Organization.

## Create / Install Runners {#create-install-agents}

The configuration of a new Runner for an Environment is broken into two steps:

1. `create runner <name> <args> [--execution] [--listener] [--gitops] [--webhooks]` - defines a Runner in the Environment with the specified capabilities, but doesn't install anything in your cluster.
2. `install runner <name> <args>` - installs the Runner Helm Chart in the current cluster and connects
   that installation to a created Runner in the Environment.

:::note
Since you will often do both at the same time, these two commands can be rolled into one by adding the `--create`
flag to the `install` command.
:::

The reason for this separation is to enable the following use-cases:

- Reusing Runner installations in different namespaces/clusters for the same Runner definition in the Environment.
- Retrieving the secret-key required for connecting a Runner installation to an Environment when installing a Runner with
  the Helm Chart.

:::tip
See the [Delete and Uninstall](#deleting-and-uninstalling-an-agent) commands below for corresponding removal actions.
:::

### Creating new Runners {#creating-new-agents}

Define a new Runner in the Testkube Control Plane with `testkube create runner <name>`

```sh
$ testkube create runner staging-runner --execution -l env=staging
```

This defines a new Runner with the execution capability named `staging-runner` with the label `env=staging` which is now visible in the
list of Runners in the Testkube Dashboard.

You can combine any of the four capability flags when creating a Runner:

```sh
$ testkube create runner my-runner --execution --listener --gitops --webhooks
```

:::note
The Runner name must be unique across all Runners within the containing Organization.
:::

### Installing new Runners {#installing-new-agents}

Once a Runner has been defined on the Testkube Control Plane with the `create` command above, you'll need to
`install` the Runner in a Cluster/Namespace for executing Workflows, listening for events, syncing resources via GitOps, or emitting webhooks.

Use the `testkube install runner <name>` to do this, for example:

```sh
$ testkube install runner staging-runner
```

:::note
The name needs to match a previously defined Runner, otherwise the command will fail.
:::

As hinted above, you can merge the `create` and `install` commands into one by adding `--create` to the `install` command, in
which case the Runner will be both created and installed with one command. In this case you can also specify which labels
you want to associate with the created Runner.

```sh
$ testkube install runner staging-runner --create -l env=staging
```

:::note
When no capability flags are specified, this command installs a Runner with both runner and listener capabilities by default.
Add `--gitops` and/or `--webhooks` to enable additional capabilities.

The Runner is installed into the Kubernetes cluster configured as the current context.
Before installing you can check if it's the expected cluster by running the command: `kubectl config current-context`.

Use parameter `--namespace <namespace-name>` to install the Runner in a different namespace, it uses the name of the Runner by default.
:::

:::tip
You can also install Runners from a Helm Chart - [Read More](/articles/multi-agent-runner-helm-chart)
:::

### Runner Namespaces {#agent-namespaces}

Runners are installed in a namespace in your current cluster, the `install` command will either prompt you or you can specify
the namespace with the --namespace argument

:::tip
You can install multiple Runners in the same namespace if needed, for example, to target different applications
:::

## Updating a Runner {#updating-an-agent}

An existing Runner can be updated to the latest version by rerunning the corresponding `testkube runner install <name>` command.

## Listing Runners {#listing-agents}

Use `testkube get runners` to get a list of all Runners in your Environment, along with their capabilities and status.

```shell
➜  ~ testkube get runners

Context: cloud (2.7.x)   Namespace: testkube   Org: Testkube   Env: my-env
------------------------------------------------------------------------------

  NAME            | CAPABILITIES            | VERSION | NAMESPACE  | LABELS
------------------+-------------------------+---------+------------+--------------------
  staging-runner  | runner, listener        | 2.7.0   | staging    | env=staging
  prod-runner     | runner                  | 2.7.0   | prod       | env=prod
  gitops-runner    | gitops, webhooks        | 2.7.0   | testkube   |
➜  ~
```

:::note
Environments migrated from pre-2.7 will show a `default-agent-<environment-name>` entry with all four capabilities enabled,
replacing the previous "SuperAgent" - [Read More](/articles/testkube-resource-management).
:::

## Deleting and Uninstalling a Runner {#deleting-and-uninstalling-an-agent}

Just as there are separate `create` and `install` commands, there are corresponding `delete` and `uninstall` commands.

- `uninstall` - removes the specified Runner from the cluster, but keeps the Runner definition in the Control Plane.
- `delete` - removes the definition from the Control-Plane, but keeps the Runner installed in the cluster.

Delete or uninstall an existing Runner by name using `testkube delete runner <name>` command and specifying
either the `--delete` or `--uninstall` arguments (or both):

```sh
$ testkube delete runner staging-runner --delete --uninstall
```

Use-cases for these in separation could be:

- Use only `uninstall` if you are moving the Runner to another cluster/namespace.
- Use only `delete` if the Runner itself is no longer available (for example if it was removed by tearing down and ephemeral cluster).

## Change Runner Status {#change-agent-status}

It is possible to temporarily disable/enable a Runner, for example, when there are maintenance windows. Any executions
scheduled for a disabled runner will be queued until it (or any other Runner with matching target criteria) becomes available again.

Use `testkube disable/enable runner <name>` for this:

```sh
$ testkube disable runner staging-runner
$ testkube enable runner my-runner
```

## Rotating Runner Secret Keys {#rotating-agent-secret-keys}

Runner secret keys can be rotated for security purposes. When rotated, the previous key remains valid for a grace period
to allow zero-downtime rollover of connected runners.

```sh
$ testkube runner rotate-key my-runner
```

By default, the previous key remains valid for 24 hours. You can specify a custom grace period (up to 7 days):

```sh
$ testkube runner rotate-key my-runner --grace-period 4h
```

After rotating, update your runner deployment with the new key. The old key will continue to work until the grace period expires.

:::tip
Read more about key rotation behavior and best practices in [Runner key Rotation](/articles/agents-overview#agent-key-rotation).
:::

## Runner specific commands {#runner-agent-specific-commands}

The following applies to Runners with the `runner` capability enabled (i.e. "runners").

### License assignment for runners {#license-assignment-for-runner-agents}

New _Runner_ Runners will by default be assigned a Fixed license from your Testkube plan, if no Fixed licenses are available, the command will fail.

If you have Floating licenses in your Testkube plan, you can instead assign this to your Runner by adding the `--floating` argument to
the `create` and `install ... --create` commands.

[Read More about Licensing](/articles/agents-overview#licensing-for-runner-agents).

### Updating runner Labels {#updating-runner-agent-labels}

You can add as many labels as you want to your runners to help you target them for your executions, for example,
when creating a runner for an ephemeral use-case, you might label it with some identifier of that ephemeral
instance which you can then use to target your Workflow Executions to that runner.

```sh
$ testkube update runner my-runner -l myReadiness=true # add label
$ testkube update runner my-runner -L myReadiness      # delete label
```

:::note
Labels and runner mode (`--global` / `--group`) can also be managed from the runner Deployment by setting
`runner.register.labels` / `runner.register.global` / `runner.register.groupName` in the Helm values. When
those values are set, the runner becomes the source of truth for the corresponding fields and will
overwrite CLI changes on its next reconnect. When they are **not** set, CLI updates persist across runner
restarts. See [Updating runner labels and mode](/articles/agents-overview#updating-runner-agent-labels-and-mode)
for the full behavior.
:::

:::tip
Check out [Using labels for filtering runners](/articles/test-workflows-running#using-labels-for-runner-agent-selection) to see examples
for how to use labels for selecting runners for Workflow execution.
:::
