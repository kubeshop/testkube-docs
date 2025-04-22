# Multi-Agent CLI Overview

The Testkube CLI provides a number of commands to work with Runner Agents in [Multi-Agent Environments](/articles/install/multi-agent).

:::tip
All commands below have a `--help` argument for printing all available arguments with a short description. 
:::

## Prerequisites

To be able to use these commands, you'll need to be on the latest version of 
- the Testkube Control-Plane 
- the Testkube Agent in your existing Environments
- the Testkube CLI

To use these CLI commands, you will have to use `testkube login` to first connect your CLI with a specific Environment in your
Testkube Organization.

## Create / Install Runner Agents

The configuration of a new Runner for an Environment is broken into two steps:

1. `create runner <name> <args>` - defines a runner in the Environment, but doesn't install anything in your cluster.
2. `install runner <name> <args>` - installs the actual Runner Helm Chart in the current cluster and connects 
   that installation a created Runner in the Environment. 

:::note
Since you will often do both at the same time, these two commands can be rolled into one by adding the `--create` 
flag to the `install` command.
:::

The reason for this separation is to enable the following use-cases:
- Reusing Runner installations in different namespaces/clusters for the same Runner definition in the Environment.
- Retrieving the secret-key required connecting a Runner installation to an Environment when installing a Runner with 
  the Helm Chart.

:::tip
See the [Delete and Uninstall](#deleting-and-uninstalling-a-runner-agent) commands below for corresponding removal actions.
:::

### Creating new Runner Agents

Define a new Runner in the Testkube Control Plane with `testkube create runner <name>`

```sh
$ testkube create runner staging-runner -l env=staging
```

This defines a new runner named `staging-runner` with the label `env=staging` which is now visible in the
list of Runners in the Testkube Dashboard. 

:::note
As Runners are internally defined at the Organization level, the Runner name must be unique across all Runners within 
the containing Organization.
:::

### License assignment for Runner Agents

New Runner Agents will by default be assigned a Fixed license from your Testkube plan, if no Fixed licenses are available, the command will fail. 

If you have Floating licenses in your Testkube plan, you can instead assign this to your Agent by adding the `--floating` argument to 
the `create` and `install ... --create` commands.

[Read More about Licensing](/articles/install/multi-agent#licensing-for-testkube-agents).

### Installing new Runner Agents

Once a Runner has been defined on the Testkube Control Plane with the `create` command above, you'll need to 
`install` an actual Runner Agent in a Cluster/Namespace for executing your Workflows. 

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

### Runner Namespaces

Runners are installed in a namespace in your current cluster, the `install` command will either prompt you or you can specify 
the namespace with the --namespace argument

:::tip
You can install multiple runners in the same namespace if needed, for example, to target different applications 
:::

### Runner Agent modes

Runner Agents can be created in one of three different modes, impacting how they are selected for execution:

- **Independent Runners** (default) need to be targeted explicitly by name to run a Workflow - [Read More](/articles/install/multi-agent#independent-runners)
- **Grouped Runners** can be targeted/filtered by labels/groups - allowing you to run a Workflow on either a single available
  Runner (of several) or on multiple Runners at once. Grouped Runners are created by adding the `--group` argument to either `create` or `install` above -
  [Read More](/articles/install/multi-agent#grouped-runners)
- **Global Runners** do not need to be targeted by name but can be filtered by labels, the default Standalone Agent works as a Global Runner.
  Global Runners are created by adding the `--global` argument to either `create` or `install` above - [Read More](/articles/install/multi-agent#global-runners)

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

- `uninstall` - removes the specified Runner Agent from the cluster, but keeps the Runner definition in the Control Plane.
- `delete` - removes the Runner definition from the Control-Plane, but keeps the Runner Agent installed in the cluster.

Delete or uninstall an existing Runner Agent by name using `testkube delete runner <name>` command and then specifying 
either the `--delete` or `--uninstall` arguments (or both):

```sh
$ testkube delete runner staging-runner --delete --uninstall
```

Use-cases for these in separation could be:

- Use only `uninstall` if you are moving the Runner to another cluster/namespace.
- Use only `delete` if the Runner itself is no longer available (for example if it was removed by tearing down and ephemeral cluster).

## Change Runner Agent Status

It is possible to temporarily disable/enable a runner, for example, when there are maintenance windows. Any executions
scheduled for that specific runner will be queued until it (or any other Runner with matching target criteria) becomes available again.

Use `testkube disable/enable runner <name>` for this:

```sh
$ testkube disable runner staging-runner
$ testkube enable runner my-runner
```

## Update Runner Agent Labels

You can add as many labels as you want to your runners to help you target them for your executions, for example,
when creating a runner for an ephemeral use-case, you might label it with some identifier of that ephemeral 
instance which you can then use to target your Workflow Executions to that runner.

```sh
$ testkube update runner my-runner -l myReadiness=true # add label
$ testkube update runner my-runner -L myReadiness      # delete label
```

:::tip
Check out [Using labels for filtering runners](/articles/install/multi-agent#using-labels-for-runner-selection) to see examples
for how to use labels for selecting Runners for Workflow execution.
:::
