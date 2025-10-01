# Testkube Agent CLI Commands

The Testkube CLI provides a number of commands to work with different types of Agents - [Read More](/articles/agents-overview).

:::tip
All commands below have a `--help` argument for printing all available arguments with a short description, and they
are also documented in the [CLI Reference](/cli/testkube).
:::

## Prerequisites

To be able to use these commands, you'll need to be on the latest version of 
- the Testkube Control-Plane 
- the Testkube Agent in your existing Environments
- the Testkube CLI

To use these CLI commands, you will have to use `testkube login` to first connect your CLI with a specific Environment in your
Testkube Organization.

## Create / Install Agents

The configuration of a new Agent for an Environment is broken into two steps:

1. `create agent <name> <args> [--runner] [--listener]` - defines a Runner Agent in the Environment with the corresponding capabilities, but doesn't install anything in your cluster.
2. `install agent <name> <args>` - installs the actual Runner Agent Helm Chart in the current cluster and connects 
   that installation a created Runner Agent in the Environment. 

:::note
Since you will often do both at the same time, these two commands can be rolled into one by adding the `--create` 
flag to the `install` command.
:::

The reason for this separation is to enable the following use-cases:
- Reusing Runner Agent installations in different namespaces/clusters for the same Runner Agent definition in the Environment.
- Retrieving the secret-key required connecting a Runner Agent installation to an Environment when installing a Runner Agent with 
  the Helm Chart.

:::tip
See the [Delete and Uninstall](#deleting-and-uninstalling-an-agent) commands below for corresponding removal actions.
:::

### Creating new Agents

Define a new Agent in the Testkube Control Plane with `testkube create agent <name>`

```sh
$ testkube create agent --runner staging-runner -l env=staging
```

This defines a new Agent with the runner capability (i.e. a "Runner Agent") named `staging-runner` with the label `env=staging` which is now visible in the
list of Agents in the Testkube Dashboard. 

:::note
The Agent name must be unique across all Agents within the containing Organization.
:::

### Installing new Agents

Once a Agent has been defined on the Testkube Control Plane with the `create` command above, you'll need to 
`install` an actual Agent in a Cluster/Namespace for executing your Workflows and/or listening for events. 

Use the `testkube install agent <name>` to do this, for example:

```sh
$ testkube install agent staging-runner 
```

:::note
The name needs to match a previously defined Agent, otherwise the command will fail.
:::

As hinted above, you can merge the `create` and `install` commands into one by adding `--create` to the `install` command, in
which case the Agent will be both created and installed with one command. In this case you can also specify which labels
you want to associate with the created Agent.

```sh
$ testkube install agent staging-runner --create -l env=staging
```

:::note
This command installs an Agent with both runner and listener capabilities into the Kubernetes cluster configured as the current context. 
Before installing you can check if it's the expected cluster by running the command: `kubectl config current-context`. 

Use parameter `--namespace <namespace-name>` to install the Agent in a different namespace, it uses the name of the Agent by default.
:::

:::tip
You can also install Agents from a Helm Chart - [Read More](/articles/multi-agent-runner-helm-chart)
:::

### Agent Namespaces

Agents are installed in a namespace in your current cluster, the `install` command will either prompt you or you can specify 
the namespace with the --namespace argument

:::tip
You can install multiple Agents in the same namespace if needed, for example, to target different applications 
:::

## Updating an Agent

An existing Agent can be updated to the latest version by rerunning the corresponding `testkube agent install <name>` command.

## Listing Agents

Use `testkube get agents` to get a list of all Agents installed in your organization, including the mandatory Standalone Agent 
 shown with the label `runnertype=superagent`.

```shell
➜  ~ testkube get agents

Context: cloud (2.1.117)   Namespace: testkube   Org: Testkube   Env: ole-kind
------------------------------------------------------------------------------
server version not set

Recognized agents in current cluster
None

Agents outside of current cluster
  TYPE       | NAME                    | VERSION | NAMESPACE | ENVIRONMENTS                 | LABELS
-------------+-------------------------+---------+-----------+------------------------------+------------------------
  SuperAgent | tkcenv_a7a9f692d2248d3e |         |           | ole-kind                     | runnertype=superagent
  SuperAgent | tkcenv_84019fff03aac934 |         |           | testkube-cloud-basic         | runnertype=superagent

Unknown agents in current cluster
  TYPE | NAME | VERSION | NAMESPACE  | ENVIRONMENTS | LABELS
-------+------+---------+------------+--------------+---------
  -    |      | -       | •:testkube | -            | -
➜  ~
```


## Deleting and Uninstalling an Agent

Just as there are separate `create` and `install` commands, there are corresponding `delete` and `uninstall` commands.

- `uninstall` - removes the specified Agent from the cluster, but keeps the Agent definition in the Control Plane.
- `delete` - removes the definition from the Control-Plane, but keeps the Agent installed in the cluster.

Delete or uninstall an existing Agent by name using `testkube delete runner <name>` command and then specifying 
either the `--delete` or `--uninstall` arguments (or both):

```sh
$ testkube delete agent staging-runner --delete --uninstall
```

Use-cases for these in separation could be:

- Use only `uninstall` if you are moving the Agent to another cluster/namespace.
- Use only `delete` if the Agent itself is no longer available (for example if it was removed by tearing down and ephemeral cluster).

## Change Agent Status

It is possible to temporarily disable/enable an Agent, for example, when there are maintenance windows. Any executions
scheduled for a disabled Runner Agent will be queued until it (or any other Agent with matching target criteria) becomes available again.

Use `testkube disable/enable agent <name>` for this:

```sh
$ testkube disable agent staging-runner
$ testkube enable agent my-runner
```

## Runner Agent specific commands

The following applies to Agents with the `runner` capability enabled (i.e. "Runner Agents").

### License assignment for Runner Agents

New _Runner_ Agents will by default be assigned a Fixed license from your Testkube plan, if no Fixed licenses are available, the command will fail.

If you have Floating licenses in your Testkube plan, you can instead assign this to your Agent by adding the `--floating` argument to
the `create` and `install ... --create` commands.

[Read More about Licensing](/articles/agents-overview#licensing-for-runner-agents).

### Updating Runner Agent Labels

You can add as many labels as you want to your Runner Agents to help you target them for your executions, for example,
when creating a Runner Agent for an ephemeral use-case, you might label it with some identifier of that ephemeral 
instance which you can then use to target your Workflow Executions to that Runner Agent.

```sh
$ testkube update agent my-runner -l myReadiness=true # add label
$ testkube update agent my-runner -L myReadiness      # delete label
```

:::tip
Check out [Using labels for filtering runners](/articles/test-workflows-running#using-labels-for-runner-agent-selection) to see examples
for how to use labels for selecting Runner Agents for Workflow execution.
:::
