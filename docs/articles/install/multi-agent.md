# Multi-Agent Environments 

Testube 2.X introduces the concept of Multi-Agent Environments, which adds two major new capabilities:

1. The ability to **run the same Workflow in multiple namespaces/clusters**, (possibly at the same time!).
2. The ability to **add ephemeral Runners** to an Environment and run your Test Workflows on them 

Both of these scenarios were previously hard to achieve efficiently, and required elaborate scripting as 
described in [Remote Workflow Execution](/articles/remote-workflow-execution) and [Ephemeral Environments](/articles/ephemeral-environments).

The Multi-Agent functionality is available to any existing and new Testkube Environment, provided it has been
upgraded to the latest version of the Testkube Control Plane and Testkube Agent.

## Runner Agents

To provide this capability, Testkube now allows you to add an arbitrary number of **Runner Agents** to an environment from 
the [Agent Management](/testkube-pro/articles/agent-management) section of your Environment Settings or 
directly with the CLI (see below).

:::note
Each Testkube Environment also requires a **[Standalone Agent](standalone-agent)** (as before) which
provides core functionality for Triggers, Webhooks, Prometheus metrics, etc.
:::

Runner Agents are lightweight agents that can be installed in any namespace/cluster where you need to
run your Testkube Workflows. Each Runner Agent has a name, an id, and an optional list of labels which
can be used to select Agents for execution:

![Multi-Agent Management](images/multi-agent-management.png)

## Running Workflows on Runner Agents

Once Runner Agents have been added to an Environment, they can be used to execute your Workflows:

- Via the Dashboard as described at [Running a Workflow](/articles/testkube-dashboard-workflow-details#running-a-workflow).
- Via the CLI by using the `--target` argument for the `testkube run testworkflow` command (see below).

When a Workflow has been executed on multiple Runners, the Dashboard provides an expandable section for the corresponding 
executions, see [Multi-agent Executions](/articles/testkube-dashboard-workflow-details#multi-agent-executions).

:::warning
Runner Agents do **not** support execution of legacy Tests and TestSuites.
:::

### Queuing of Workflow Executions

When requesting to run a Workflow on a specific Runner Agent, either by name or label(s), and no
matching Agent is available, Testkube will queue the execution of the Workflow indefinitely; once a corresponding
Runner is available (barring licensing restrictions [described below](#licensing-and-implications)) the queued
Workflow will be executed accordingly.

You can abort queued executions using the corresponding [CLI Command](/cli/testkube-abort-testworkflowexecution) or
from the Dashboard as before.

### Working with Existing Environments

If you have an existing Environment that already has Workflows being executed by CI/CD, Kubernetes Event Triggers,
etc., these will continue to be executed on _any_ [Global Runner Agent](#global-runners) (including the required
Standalone Agent) connected to your Environment unless you update the corresponding triggering commands to target 
a specific Runner Agent, either by name, group or label as described below.

:::note
Workflow Executions that are triggered by a CronJob or Kubernetes Trigger can currently not be targeted to a 
specific Runner and will run on available Runner in the corresponding Environment.
:::

## Runner Agent Quickstart

### 1. Install your first Runner

After installing the [Testkube CLI](/articles/cli) and using `testkube login` to log in to your 
Testkube Environment, use `testkube install runner <name>` command to install your first Runner Agent:

```sh
$ testkube install runner staging-runner --create 
```

This will create a Runner named `staging-runner` that can now be used to run your Workflows. 

### 2. Run your Workflows 

Run your Workflows on a specific runner by specifying the name of the runner with the `--target` argument:

```sh
testkube run testworkflow my-k6-test --target name=staging-runner
```

This schedules the `my-k6-test` Workflow to run on the `staging-runner` Runner we created above.

:::tip
Check out the [Multi-Agent CLI Overview](/articles/multi-agent-cli) for an overview of all available CLI 
commands related to Multi-Agent Environments.
:::

## Runner Agent types

Runner Agents can be added as one of three different types, impacting how they are selected for execution:

- **Independent Runners** (default) need to be targeted explicitly by name to run a Workflow (as in the example above).
- **Grouped Runners** can be targeted/filtered by labels/groups - allowing you to run a Workflow on either a single available 
  Runner (of multiple) or on multiple Runners at once.
- **Global Runners** do not need to be targeted by name but can be filtered by labels, the default Standalone Agent is a global runner.

:::note
If you need to change the type of Runner Agent, you'll need to remove it first and re-add with the new type.
:::

### Independent Runners

A Runner not defined as either grouped or global as described below, will work as an "independent Runner" and thus
_needs_ to be targeted explicitly by name to for Workflow execution.

```sh
testkube run testworkflow my-k6-test --target name=staging-runner
```

### Grouped Runners

Grouped Runners are defined by a `--group` argument when creating/installing:

```sh
# install grouped runner
$ testkube install runner staging-runner --create --group staging-runners
```

Grouped runners _need_ to be either targeted by name (as independent runners above), or by group, which will 
use any available Runner in that group for execution:

```sh
# run Workflow on an available Runner in the staging-runners group
testkube run testworkflow my-k6-test --target group=staging-runners
```

If you want to run on _all_ runners in a group, use the `--target-replicate name` argument:

```sh
# run Workflow on all runners in the staging-runners group
testkube run testworkflow my-k6-test --target group=staging-runners --target-replicate name
```

:::tip
You can use `--target-replicate` to enable execution across multiple runners as described here 
:::

### Global Runners

```shell
# install global runner
$ testkube install runner global-runner --create --global 
```

Global runners will be used when no target is specified to the run command:

```sh
# Run workflow on any available global runner
testkube run testworkflow my-k6-test 
```

## Using labels for filtering runners

Labels can be added to any type of Runner with the `-l <name=value>` argument when creating them, 
which can then be used to filter out which runners that are considered for execution:

```sh
# run Workflow on a runner in the staging-runners group with the region=europe label
testkube run testworkflow my-k6-test --target group=staging-runners --target region=europe
```

```sh
# run Workflow on all global runners with the region=europe label
testkube run testworkflow my-k6-test --target region=europe
```

## The Standalone Agent

The Testkube [Standalone Agent](/articles/install/standalone-agent) is required for your Environment to work, 
as it manages Triggers and Webhooks defined in your Environment and also makes it possible to distribute Workflows 
in that Environment to the other Runner Agents when needed.

The Standalone Agent is by default labeled with `runnertype: superagent` in the list of agents, as you can see in the 
screenshot above, and works like a Global Runner in regard to targeting.

## Licensing and implications

Runner Agents are licensed by concurrently active Runners, allowing you to add as many Runners as you want but only 
run Workflows concurrently on as many Runners as you have licensed. Workflows that cannot be executed because of unavailable 
Runners due to licensing constraints will be queued and executed as soon as a concurrent runner seat "frees up" to execute 
the queued Workflow.

Furthermore: 
- The concurrent runner limit is counted and enforced at the organization level, i.e., across all your environments.
- By default, you are given the same number of concurrent active runner seats as you have environments, please get in touch
  if you need more to evaluate this functionality.
