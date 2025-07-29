# Multi-Agent CLI Commands

The Testkube CLI provides a number of commands to work with Runner Agents in [Multi-Agent Environments](/articles/install/multi-agent).

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

## Create / Install Runner Agents

The configuration of a new Runner Agent for an Environment is broken into two steps:

1. `create runner <name> <args>` - defines a Runner Agent in the Environment, but doesn't install anything in your cluster.
2. `install runner <name> <args>` - installs the actual Runner Agent Helm Chart in the current cluster and connects 
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
See the [Delete and Uninstall](#deleting-and-uninstalling-a-runner-agent) commands below for corresponding removal actions.
:::

### Creating new Runner Agents

Define a new Runner Agent in the Testkube Control Plane with `testkube create runner <name>`

```sh
$ testkube create runner staging-runner -l env=staging
```

This defines a new Runner Agent named `staging-runner` with the label `env=staging` which is now visible in the
list of Runner Agents in the Testkube Dashboard. 

:::note
The Runner Agent name must be unique across all Runner Agents within the containing Organization.
:::

### License assignment for Runner Agents

New Runner Agents will by default be assigned a Fixed license from your Testkube plan, if no Fixed licenses are available, the command will fail. 

If you have Floating licenses in your Testkube plan, you can instead assign this to your Agent by adding the `--floating` argument to 
the `create` and `install ... --create` commands.

[Read More about Licensing](/articles/install/multi-agent#licensing-for-runner-agents).

### Installing new Runner Agents

Once a Runner Agent has been defined on the Testkube Control Plane with the `create` command above, you'll need to 
`install` an actual Runner Agent in a Cluster/Namespace for executing your Workflows. 

Use the `testkube install runner <name>` to do this, for example:

```sh
$ testkube install runner staging-runner 
```

:::note
The name needs to match a previously defined Runner Agent, otherwise the command will fail.
:::

As hinted above, you can merge the `create` and `install` commands into one by adding `--create` to the `install` command, in
which case the Runner Agent will be both created and installed with one command. In this case you can also specify which labels
you want to associate with the created Runner Agent.

```sh
$ testkube install runner staging-runner --create -l env=staging
```

:::note
This command installs the Runner Agent into the Kubernetes cluster configured as the current context. Before installing you can check 
if it's the expected cluster by running the command: `kubectl config current-context`. Use parameter `--namespace <namespace-name>` to 
install the Runner Agent in a different namespace, by default it uses the name of the Runner Agent.
:::

:::tip
You can also install Runner Agents from a Helm Chart - [Read More](/articles/multi-agent-runner-helm-chart)
:::

### Runner Agent Namespaces

Runner Agents are installed in a namespace in your current cluster, the `install` command will either prompt you or you can specify 
the namespace with the --namespace argument

:::tip
You can install multiple Runner Agents in the same namespace if needed, for example, to target different applications 
:::

### Runner Agent modes

Runner Agents can be created in one of three different modes, impacting how they are selected for execution:

- **Independent Runner Agents** (default) need to be targeted explicitly by name to run a Workflow - [Read More](/articles/install/multi-agent#independent-runner-agents)
- **Grouped Runner Agents** can be targeted/filtered by labels/groups - allowing you to run a Workflow on either a single available
  Runner Agent (of several) or on multiple Runners at once. Grouped Runner Agents are created by adding the `--group` argument to either `create` or `install` above -
  [Read More](/articles/install/multi-agent#grouped-runner-agents)
- **Global Runner Agents** do not need to be targeted by name but can be filtered by labels, the default Standalone Agent works as a Global Runner Agent.
  Global Runner Agents are created by adding the `--global` argument to either `create` or `install` above - [Read More](/articles/install/multi-agent#global-runner-agents)

Check out the [Runner Agent Modes](/articles/install/multi-agent#runner-agent-modes) section in the Multi-Agent Overview to learn more.

## Updating a Runner Agent

An existing Runner Agent can be updated to the latest version by rerunning the corresponding `testkube agent install <name>` command.

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


## Deleting and Uninstalling a Runner Agent

Just as there are separate `create` and `install` commands, there are corresponding `delete` and `uninstall` commands.

- `uninstall` - removes the specified Runner Agent from the cluster, but keeps the Runner Agent definition in the Control Plane.
- `delete` - removes the Runner definition from the Control-Plane, but keeps the Runner Agent installed in the cluster.

Delete or uninstall an existing Runner Agent by name using `testkube delete runner <name>` command and then specifying 
either the `--delete` or `--uninstall` arguments (or both):

```sh
$ testkube delete runner staging-runner --delete --uninstall
```

Use-cases for these in separation could be:

- Use only `uninstall` if you are moving the Runner Agent to another cluster/namespace.
- Use only `delete` if the Runner Agent itself is no longer available (for example if it was removed by tearing down and ephemeral cluster).

## Change Runner Agent Status

It is possible to temporarily disable/enable a Runner Agent, for example, when there are maintenance windows. Any executions
scheduled for that specific Runner Agent will be queued until it (or any other Runner Agent with matching target criteria) becomes available again.

Use `testkube disable/enable runner <name>` for this:

```sh
$ testkube disable runner staging-runner
$ testkube enable runner my-runner
```

## Update Runner Agent Labels

You can add as many labels as you want to your Runner Agents to help you target them for your executions, for example,
when creating a Runner Agent for an ephemeral use-case, you might label it with some identifier of that ephemeral 
instance which you can then use to target your Workflow Executions to that Runner Agent.

```sh
$ testkube update runner my-runner -l myReadiness=true # add label
$ testkube update runner my-runner -L myReadiness      # delete label
```

:::tip
Check out [Using labels for filtering runners](/articles/install/multi-agent#using-labels-for-runner-agent-selection) to see examples
for how to use labels for selecting Runner Agents for Workflow execution.
:::
