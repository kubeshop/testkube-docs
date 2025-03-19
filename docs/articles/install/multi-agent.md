# Multi-Agent Environments

Testube 2.X introduces the concept of Multi-Agent Environments, which adds two major new capabilities:

1. The ability to **run the same Workflow in multiple namespaces/clusters**, (possibly at the same time!).
2. The ability to **add ephemeral Runners** to an Environment and run your Test Workflows on them 

Both of these scenarios were previously hard to achieve efficiently, and required elaborate scripting as 
described in [Remote Workflow Execution](/articles/remote-workflow-execution) and [Ephemeral Environments](/articles/ephemeral-environments).

The Multi-Agent functionality is available to any existing and new Testkube Environment, provided it has been
upgraded to the latest version of the Testkube Control Plane and Testkube Agent.

## Two Types of Agents

To provide this capability, Testkube now supports two types of Agents for an Environment:

- Lightweight **Runner Agents** for running your tests wherever needed.
- The existing **Standalone Agent** which is required as before.

##  Runner Agents

Testkube now allows you to add an arbitrary number of **Runner Agents** to an environment from 
the [Agent Management](/testkube-pro/articles/agent-management) section of your Environment Settings or 
directly with the CLI (see below).

Runner Agents are lightweight agents that can be installed in any namespace/cluster where you need to
run your Testkube Workflows. Each Runner Agent has a name, an id, and an optional list of labels which
can be used to select Agents for execution:

![Multi-Agent Management](images/multi-agent-management.png)

Runner Agents are managed via the Testkube CLI as described below.

## Running Workflows on Runner Agents

Once Runner Agents have been added to an Environment, they can be used to execute your Workflows:

- Via the Dashboard as described at [Running a Workflow](/articles/testkube-dashboard-workflow-details#running-a-workflow).
- Via the CLI by using the `--target` argument for the `testkube run testworkflow` command (see below), either
    - specifying the name(s) of the runner(s) to run on.
    - specifying label(s) to select which Runner Agents to run on.

When a Workflow has been executed on multiple runners, the Dashboard provides an expandable section for the corresponding 
executions, see [Multi-agent Executions](/articles/testkube-dashboard-workflow-details#multi-agent-executions).

:::warning
Runner Agents do **not** support execution of legacy Tests and TestSuites.
:::

### Queuing of Workflow Executions

When requesting to run a Workflow on a specific Runner Agent, either by name or label(s), and no
matching Agent is available, Testkube will queue the execution of the Workflow indefinitely; once a corresponding
Runner is available (barring licensing restrictions [described below](#licensing-and-implications)) the queued
Workflow will be executed accordingly.

You can abort queued executions as before using the corresponding [CLI Command](/cli/testkube-abort-testworkflowexecution) or
from the Dashboard as before.

### Working with Existing Environments

If you have an existing Environment that already has Workflows being executed by CI/CD, Kubernetes Event Triggers,
etc., these will continue to be executed on _any_ Runner Agent connected to your Environment unless you update the 
corresponding triggering commands to target a specific Runner Agent, either by name or label as described above.

:::note
Workflow Executions that are triggered by a CronJob or Kubernetes Trigger can currently not be targeted to a 
specific Runner and will run on available Runner in the corresponding Environment.
:::

## Runner Agent Quickstart

### 1. Install your first Runner

You can either create your first Runner with the [Connect new Runner Agent] button in the top-right of the
Agent Management Panel shown above, or you can use the [Testkube CLI](/articles/cli) with
the `testkube install runner` command.

For example:

```sh
$ testkube install runner staging-runner --create -l env=staging
```

creates runner named `staging-runner` and give that a corresponding `env=staging` label.

### 2. Run your Workflows on the Runner

Once created, you can now run your Workflows on this Runner:

```sh
testkube run testworkflow my-k6-test --target name=staging-runner
```

### 3. Add another Runner

Let's say you have two staging environments, you could create another Runner in that environment with:

```sh
$ testkube install runner staging-runner-2 --create -l env=staging
```

### 4. Run your Workflows on multiple Runners

And now run your Workflow on both staging Runners at the same time:

```sh
testkube run testworkflow my-k6-test --target env=staging
```

## Runner Agent CLI commands

The Testkube CLI provides a number of commands to work with Runner Agents.

### Create Runner Agents

Add new Runner Agents to your current Environment with `testkube install runner <name> --create`, for example

```sh
$ testkube install runner staging-runner --create -l env=staging
```

This creates a new runner named `staging-runner` with the label `env=staging`, both which can be used when
selecting a target when scheduling a Workflow Execution (see below).

### List Agents

Use `testkube get agents` to get a list of all Agents installed in your organization, including existing Environment Agents 
which are shown with the label `runnertype=superagent`.

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

### Delete a Runner Agent

Delete an existing Runner Agent by name using `testkube delete runner <name>`:

```sh
$ testkube delete runner staging-runner
```

### Change Runner Agent Status

It is possible to temporarily disable/enable a runner, for example when there are maintenance windows. Any executions
scheduled for that specific runner will be queued until it becomes available again. 

Use `testkube disable/enable runner <name>` for this:

```sh
$ testkube disable runner staging-runner
$ testkube enable runner my-runner
```

### Update Runner Agent Labels

You can add as many labels as you want to your runners to help you target them for your executions, for example
when creating a runner for an ephemeral use-case, you might label it with some identifier of that ephemeral 
instance which you can then use to target your Workflow Executions to that runner.

```sh
$ testkube update runner my-runner -l myReadiness=true # add label
$ testkube update runner my-runner -L myReadiness      # delete label
```

### Running Test Workflows on specific Runners

Add the `--target` argument to your `testkube run testworkflow` command to target runners with specific names or labels. 
Note that if you specify a label that is available on multiple runners, the Workflow will run on all of them. 

```sh
# run on runner named staging-runner
$ testkube run testworkflow k6-workflow-smoke --target name=staging-runner

# run on all runners with myReadyness=true label
$ testkube run testworkflow k6-workflow-smoke --target myReadiness=true
```

:::tip
You can target the existing Standalone Agent in your Environment by specifying `--target runnertype=superagent`
in your `testkube run testworkflow` command.
:::

## The Standalone Agent

The original Standalone Agent is still required for your Environment to work as before, as it manages Triggers and Webhooks defined in
your Environment and also makes it possible to distribute Workflows in that Environment to the other Runner Agents when
needed.

The Standalone Agent is by default labeled with `runnertype: superagent` in the list of agents 
(as you can see int the screenshot and cli output above).

## Licensing and implications

Runner Agents are licensed by concurrently active Runners, allowing you to add as many Runners as you want but only 
run Workflows concurrently on as many Runners as you have licensed. Workflows that cannot be executed because of unavailable 
Runners due to licensing constraints will be queued and executed as soon as a concurrent runner seat "frees up" to execute 
the queued Workflow.

Furthermore: 
- The concurrent runner limit is counted and enforced at the organization level, i.e., across all your environments.
- By default, you are given the same number of concurrent active runner seats as you have environments, please get in touch
  if you need more to evaluate this functionality.
