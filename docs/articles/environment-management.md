# Environment Management

## What is an Environment?

A _Testkube Environment_ is a grouping of Workflows, Workflow Templates, Triggers and Webhooks - and their 
corresponding artifacts, logs, and execution results.

You can create multiple environments within your Testkube Organization (see below) to organize your resources and usage
of Testkube accordingly, for example, you can create a separate environment for each of your development teams (although
if you are looking for a way to control access to Resources, [Resource Groups](/articles/resource-groups) might be
a better approach).

A Testkube Environment can contain any number of [Testkube Agents](/articles/agents-overview), which are responsible
for managing Resources, executing Workflows and listening to Events. 

:::info
At the technical level, the Resources in a Testkube environment are managed by a Testkube Agent running in your 
Kubernetes Cluster - read more [here](/articles/architecture.md).
:::

Your existing Environments are available from the Environment dropdown on the top of the Testkube Dashboard (see 
screenshot below), selecting an Environment will focus the Testkube Dashboard on the resources in that Environment - 
[Read More](/articles/testkube-dashboard-explore).

## Creating a New Environment

You can create a new environment from the Environments dropdown in the header section of the Testkube Dashboard:

![Create Environment](../img/create-environment.png)

:::tip
You can create an Environment from the "Environments" panel in the [Organization Settings](/articles/organization-management#environments) also.
:::

### Cloud Options

When creating a new environment in the Testkube Cloud Control Plane, you will first be prompted with the following options:

1. **I have a K8s Cluster** - select this if you have a cluster where you can install the Testkube Agent for your
   environment.
2. **No Cluster at hand** - setting up a local cluster for evaluation purposes is straightforward, for example using [kind](https://kind.sigs.k8s.io/)
   or [minikube](https://minikube.sigs.k8s.io/docs/). Alternatively, you can use our sandbox environment for exploring Testkube functionality with having to install anything.
3. **I don't use Kubernetes** - if you're not familiar with Kubernetes and don't want to install a local cluster, you can use
   our sandbox environment for exploring Testkube functionality with having to install anything.

![Cloud Environment Creation](../img/cloud-create-environment.png)

:::tip

### Testkube Sandbox Environment

The Testkube Sandbox environment available in the Testkube Cloud Control Plane is a great way to explore the functionality provided by Testkube.
It contains a large collection of Workflows for different testing tools, with corresponding execution results and
Test Insights.

You are added as a member with the Run role (see [below](/articles/environment-management#environment-members)),
which gives you read-only access to explore and run these workflows and their results, as well as read-only access to
all other major features of Testkube.

![Sandbox Environment](../img/demo-environment.png)

:::

### Environment name

Creating an environment in Testkube on-prem or selecting **Let's get started** in the cloud-specific dialog above will show
a prompt for a unique environment name:

![Provide Environment Name](../img/create-environment-name.png)

### Environment connection

After providing the environment name you will be prompted as shown below to [Install the CLI](/articles/install/cli)
(do this only if you haven't already done so) and then run a CLI command to install the
[Testkube Agent](/articles/install/standalone-agent) for your environment, the provided command will automatically
connect the Agent to your Control Plane.

![New Environment Connection](../img/new-environment-connection.png)

Running the provided Testkube CLI command in your terminal will install the agent and connect it to the created environment:

![Environment CLI Agent Installation](../img/environment-cli-agent-install.png)

Once connected, you should see a corresponding status update in the dialog above to indicate that the installation
was successful.

## Environment Settings

You can access the settings for an existing Environment either from the same top-level menu or the corresponding
toolbar buttton on the left:

![Environment Settings](../img/environment-settings.png)

There are 6 panels for managing your Environment.

### General

Find the general settings for your environment on the **General** tab. You can also delete the environment here, but, be aware, this action cannot be undone.

![General Settings Dashboard](../img/general-settings-dashboard-072024.png)

### Agents

Manage your Environment Agents here - [Read More](/articles/agents-overview).

![Testkube Agents Panel](images/testkube-agents-panel.png)

### Environment Members

You can assign environment-specific roles to [Teams](/articles/teams) or individual [Members](/articles/organization-management#members) of your organization to control which
actions a member can perform in a specific environment.

#### Adding Environment Members

To add new members to an Environment, select the Members tab under the Environment settings and use the "Add Collaborators"
section to search for and add individual members or teams from your organization.

![Add Environment Members](../img/add-environment-members.png)

You can choose from one of the following roles for a member:

- `Read`: Has Read access only to all entities in an environment, test results, artifacts, logs, etc...
- `Run`: Has Read access and can trigger executions.
- `Write`: Has Run access and can make changes to environment tests, triggers, webhooks, etc...
- `Admin`: Has Write access and is allowed to invite and change other collaborator roles.

:::info
Keep in mind that all organization `admin` users can always access all environments.
:::

:::tip
Have a look at [Resource Access Management](/articles/resource-access-management) to get an overview of how Testkube
allows you to manage and apply Resource Access controls.
:::

#### Listing Environment Members

You can see a list of existing Environment members at the bottom of this panel, and change their role or remove them
using the popup menu on the right:

![Environment Members](../img/environment-members.png)

### Keyword Handling

This tab allows you to manage the Filtering categories available for [Log Highlighting](/articles/log-highlighting)

![Keyword Handling](../img/environment-keyword-handling.png)

There are 4 default categories, represented with a few keywords each:

| Category                   | Keywords                                                            |
| -------------------------- | ------------------------------------------------------------------- |
| **Error Keywords**         | Error, Exception, Fail, Critical, Fatal                             |
| **Connection**             | Connection, Disconnect, Lost, Timeout, Refused, Handshake, Retrying |
| **Resource Issues**        | OutOfMemory, MemoryLeak, ResourceExhausted, LimitExceeded, Quota    |
| **Access & Authorization** | Denied, Unauthorized, Forbidden, Invalid, Invalid Token, Expired    |

You can add/edit/remove categories using the corresponding actions in the interface.

### Queueing & Concurrency

This panel allows you to configure the Queueing & Concurrency settings for your Environment

- Environment Queue Limit / Max Queued Executions: Immediately abort new executions when the number of queued executions for this environment surpasses the given threshold.
- Runner Concurrency Limit / Max Concurrent Executions: Queue this execution when ongoing executions when all runners surpasses the given threshold.

![Queueing & Concurrency Panel](images/env-concurrency-panel.png)

:::tip
Check out [Concurrency & Queueing](/articles/test-workflows-concurrency-queueing) to learn more about this functionality.   
:::

### Product Features

This tab allows you to configure Environment-level Product Features:

![Product Features](../img/environment-product-features.png)
