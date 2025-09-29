# Running Test Workflows

## Overview 

Workflows can be triggered to execute in any of the ways described in [Triggering Test Workflows](/articles/triggering-overview). When triggered, 
Workflows execute either on the default Standalone Agent or dedicated Runner Agents connected to an Environment - [Read More about Agents](/articles/agents-overview),

Check out the [High-level Architecture](/articles/test-workflows-high-level-architecture) to understand how Workflows
are used to create Kubernetes Jobs and Pods during execution.

## Targeting Runner Agents

If you want to run a Workflow on a specific Agent instead of the default Standalone Agent, you can do so in several ways:

- Via the Dashboard as described at [Running a Workflow](/articles/testkube-dashboard-workflow-details#running-a-workflow).
- Via the CLI by using the `--target` argument for the `testkube run testworkflow` command (see below).
- By targeting specific Runner Agent(s) directly in your Testkube Resource as [described below](#targeting-runner-agents-in-testkube-resources).

When a Workflow has been executed on multiple Runner Agents, the Dashboard provides an expandable section for the corresponding
executions, see [Multi-agent Executions](/articles/testkube-dashboard-workflow-details#multi-agent-executions).

:::warning
Runner Agents do **not** support execution of legacy Tests and TestSuites.
:::

## Runner Agent Quickstart

If you don't want to run your Workflows on the default Standalone Agent, you can install and run them on a specific
Runner Agent as described below:

### 1. Install your first Runner Agent

After installing the [Testkube CLI](/articles/cli) and using `testkube login` to log in to your
Testkube Environment, use `testkube install runner <name> --create` command to install your first Runner Agent:

```sh
$ testkube install runner staging-runner --create
```

This will create and install a Runner Agent named `staging-runner` that can now be used to run your Workflows.

:::tip
Alternatively, you can [install runner using Helm Charts](/articles/multi-agent-runner-helm-chart).
:::

### 2. Run your Workflows

Run your Workflows on a specific Runner Agent by specifying the name of the agent with the `--target` argument:

```sh
testkube run testworkflow my-k6-test --target name=staging-runner
```

This schedules the `my-k6-test` Workflow to run on the `staging-runner` Runner Agent we created above.

:::tip
Check out the [Multi-Agent CLI Overview](/articles/multi-agent-cli) for an overview of all available CLI
commands related to Multi-Agent Environments.
:::

## Runner Agent modes

Runner Agents can be created in one of three different modes, impacting how they are selected for execution:

- **Independent Runner Agents** (default) need to be targeted explicitly by name to run a Workflow (as in the Getting Started above).
- **Grouped Runner Agents** can be targeted/filtered by labels/groups - allowing you to run a Workflow on either a single available
  Runner Agent (of several) or on multiple Runner Agents at once.
- **Global Runner Agents** do not need to be targeted by name but can be filtered by labels, the default Standalone Agent works as a Global Runner Agent.

:::note
If you need to change the type of Runner Agent, you'll need to remove it first and re-add with the new type.
:::

### Independent Runner Agents

A Runner Agent not defined as either Grouped or Global as described below, will work as an "Independent Runner Agent" and thus
_needs_ to be targeted explicitly by name to for Workflow execution.

For example, the following command runs the `my-k6-test` Workflow on the Runner Agent named `staging-runner`:

```sh
testkube run testworkflow my-k6-test --target name=staging-runner
```

Specifying multiple `--target name=XXX` arguments will run your Workflow on one of the selected Runner Agents, if you want to
run on all of them use the `--target-replicate` argument [described below](#running-on-multiple-runner-agents).

:::tip
Independent Runner Agents are useful for ephemeral use-cases when you need to target specific Workflow Executions - [Read More](/articles/ephemeral-environments#multi-agent-approach).
:::

### Grouped Runner Agents

Grouped Runner Agents are defined by a `--group` argument when creating/installing:

```sh
# install grouped Runner Agent
$ testkube install runner staging-runner --create --group staging-runners
```

Grouped Runner Agents _need_ to be either targeted by name (as the independent Runner Agents above), or by group, which will
use any available Runner Agent in that group for execution:

```sh
# run Workflow on an available Runner Agent in the staging-runners group
testkube run testworkflow my-k6-test --target group=staging-runners
```

If you want to run on _all_ Runner Agents in a group, use the `--target-replicate name` argument:

```sh
# run Workflow on all Runner Agents in the staging-runners group
testkube run testworkflow my-k6-test --target group=staging-runners --target-replicate name
```

:::tip
You can use `--target-replicate` to enable execution across multiple Runner Agents as described [below](#running-on-multiple-runner-agents).
:::

### Global Runner Agents

Global Runner Agents are created with the `--global` argument:

```shell
# install Global Runner Agents
$ testkube install runner global-runner --create --global
```

Global Runner Agents will be used either when no target is specified to the run command or when a corresponding
label-filter (see below) applies to them.

```sh
# Run Workflow on an available Global Runner Agent
testkube run testworkflow my-k6-test
```

:::info
The required Standalone Agent always works as a Global Runner Agent.
:::

## Runner Agent Targeting

Once you have created Runner Agents in your Environment, you can select them both implicitly and explicitly when
executing your Workflows. Selection of Runner Agents can be done both at runtime when executing a
Workflow via the CLI or Dashboard, or at design-time when defining Workflows, CronJobs, Triggers, etc.

### Using labels for Runner Agent selection

Labels can be added to any type of Runner Agent with the `-l <name=value>` argument during creation, these
can then be used to filter out Runner Agents that are used for execution:

```sh
# run Workflow on a Runner Agent in the staging-runners group with the region=europe label
testkube run testworkflow my-k6-test --target group=staging-runners --target region=europe
```

```sh
# run Workflow on a Global Runner Agent with the region=europe label
testkube run testworkflow my-k6-test --target region=europe
```

:::note
Since Independent Runner Agents always need to be targeted by name, adding labels to them provides no added benefit
in regard to targeting/execution.
:::

### Running on Multiple Runner Agents

If your target argument(s) selects multiple Runner Agents as shown above, Testkube will by default execute your Workflow
on only _one_ of the selected Runner Agents (randomly selected).

If you instead want to execute your Workflow on _all_ selected Runner Agents simultaneously you can add `--target-replicate <label>`
to the `testkube run testworkflow` command, which will "shard" the Workflow Execution across all unique matches for the
specified `label` (which could be `name`).

For example:

```
testkube run testworkflow my-k6-test --target name=runner1 --target name=runner2 --target-replicate=name
```

will run the specified Workflow on both Runner Agents since their names are unique.

A more advanced use-case: For Grouped Runner Agents created with these arguments:

```
name=runner-1 group=my-group team=users
name=runner-2 group=my-group team=users
name=runner-3 group=my-group team=something
```

When executing a Workflow with

```
testkube run testworkflow my-k6-test --target group=my-group --target-replicate=team
```

This makes two groups, sharded by team:

- The `users` team: `name=runner-1 group=my-group team=users` and `name=runner-2 group=my-group team=users`
- The `something` team: `namerunner-=3 group=my-group team=something`

Because of that, the execution will be run twice:

- any (1) of: `name=runner-1 group=my-group team=users` and `name=runner-2 group=my-group team=users`
- any (1) of: `name=runner-3 group=my-group team=something`

### Targeting Runner Agents in Testkube Resources

There are several situations where you might want to target specific Runner Agents in your actual Testkube Resource
definitions:

- **Workflows** - you might want to ensure that a Workflow always runs on a Runner Agent with a specific name or label - [Read More](/articles/test-workflows#runner-agent-target).
- **WorkflowTemplates** - you might want to ensure that a set of Workflows uses the same Runner Agent - [Read More](/articles/test-workflows#runner-agent-target).
- **Workflow CronJobs** - you might want to target scheduled Workflow Executions to specific Runner Agent(s) - [Read More](/articles/test-workflows#targeting-specific-runner-agents-in-cronjobs).
- **Workflow `execute` Steps** - you might want Composite Workflows to execute Workflows on specific Runner Agent(s) - [Read More](/articles/test-workflows-test-suites#targeting-specific-runner-agents).
- **Triggers** - you might want Kubernetes Event Triggers to trigger Workflow Executions on specific Runner Agent(s) - [Read More](/articles/test-triggers#targeting-specific-runner-agents).
- **Execution CRDs** - you might want an `WorkflowExecution` CR to trigger Workflow Executions on specific Runner Agent(s) - [Read More](/articles/test-executions#targeting-specific-runner-agents).

Each of these definitions supports a corresponding `target` property:

```yaml
target:
  match: [<label>: <values>]
  not: [<label>: <values>]
  replicate: [<labels>]
```

The following targets a specific Runner Agent by name:

```yaml
target:
  match:
    name:
      - staging-runner
```

or run on a Grouped Runner Agent:

```yaml
target:
  match:
    group:
      - region-us
```

Add `replicate` to mimic `--target-replicate` behavior described above, and `not` to exclude specific Runner Agents, for example:

Run on all Runner Agents in the `region-us` group, except the `k8s-1.21-spain` Runner Agent:

```yaml
target:
  match:
    group: [region-eu]
  not:
    name: [k8s-1.21-spain]
  replicate:
    - name
```

## Queuing of Workflow Executions

When requesting to run a Workflow on a specific Runner Agent, either by name or label(s), and no
matching Runner Agent is available, Testkube will queue the execution of the Workflow indefinitely; once a corresponding
Runner Agent is available, the queued Workflow will be executed accordingly (barring Floating license restrictions - [Read More](/articles/agents-overview#licensing-for-runner-agents)).

You can abort queued executions using the corresponding [CLI Command](/cli/testkube-abort-testworkflowexecution) or from the Dashboard.

## Targeting the Standalone Agent 

Each Testkube Environment requires a **[Standalone Agent](/articles/install/standalone-agent)** which provides core functionality for Triggers, Webhooks, Prometheus metrics, etc.

Standalone Agents are installed when initially creating an Environment and shown on the bottom of the list of Agents with the label `runnertype: superagent`.

Standalone Agents work as a Global Runner Agent (described above) and can also be explicitly targeted in several ways:

- By Label: `testkube run tw my-k6-test --target runnertype=superagent`
- By Name: `testkube run tw my-k6-test --target name=tkcenv_xxxxxxxxxx`
- By ID: `testkube run tw my-k6-test --target id=tkcroot_xxxxxxxxxx`

The ID is shown in the list of Agents (see below), the Name is the same `xxxx` prefixed with tkcenv instead.

