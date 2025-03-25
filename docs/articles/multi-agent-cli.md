# Multi-Agent CLI Overview

The Testkube CLI provides a number of commands to work with Runner Agents in [Multi-Agent Environments](/articles/install/multi-agent).

:::note
Multi-Agent Environments are under active development, and some of the commands shown below are subject to change.
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
2. `install runner <name> <args>` - installs the actual Runner Helm Chart  in the current cluster/namespace and connects 
   that installation a created Runner in the Environment. 

:::note
Since you will mostly do both at the same time, these can be rolled into one command by adding the `--create` 
flag to the `install` command, as shown in the Getting Started example above.
:::

The reason for this separation is to enable the following use-cases:
- Reusing Runner installations in different namespaces/clusters for the same Runner definition in the Environment
- Retrieving the secret-key required connecting a Runner installation to an Environment when installing a Runner with 
  the Helm Chart

### Creating new Runner Agents

Define a new Runner in the Testkube Control Plane with `testkube create runner <name>`

```sh
$ testkube create runner staging-runner -l env=staging
```

This defines a new runner named `staging-runner` with the label `env=staging` which is now visible in the
list of Runners in the Testkube Dashboard. 

### Installing new Runner Agents

Once a Runner has been defined in the Testkube Control Plane with the install command above, you'll need to 
install the actual Runner Agent in a Cluster/Namespace for executing Workflows with `testkube install runner <name>`,
for example:

```sh
$ testkube install runner staging-runner 
```

:::note
The name needs to match a previously defined Runner, otherwise the command will fail.
:::

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

## Delete a Runner Agent

Delete an existing Runner Agent by name using `testkube delete runner <name>`:

```sh
$ testkube delete runner staging-runner
```

## Change Runner Agent Status

It is possible to temporarily disable/enable a runner, for example when there are maintenance windows. Any executions
scheduled for that specific runner will be queued until it becomes available again. 

Use `testkube disable/enable runner <name>` for this:

```sh
$ testkube disable runner staging-runner
$ testkube enable runner my-runner
```

## Update Runner Agent Labels

You can add as many labels as you want to your runners to help you target them for your executions, for example
when creating a runner for an ephemeral use-case, you might label it with some identifier of that ephemeral 
instance which you can then use to target your Workflow Executions to that runner.

```sh
$ testkube update runner my-runner -l myReadiness=true # add label
$ testkube update runner my-runner -L myReadiness      # delete label
```
