# Environment Management

An environment is a grouping Workflows, Execution Results, Triggers and Webhooks.

:::info
A Testkube environment is managed by a Testkube Agent running in your Kubernetes Cluster - read more [here](../../articles/architecture.md).
:::

## Creating a New Environment

You can create a new environment from the "Environments" drop down in the header section of the Testkube Dashboard.

![Create Environment](../../img/create-environment.png)

### Cloud Options

When creating a new environment in the Testkube Cloud Control Plane, you will first be prompted with the following options:

1. **I have a K8s Cluster** - select this if you have a cluster where you can install the Testkube Agent for your
   environment.
2. **No Cluster at hand** - setting up a local cluster for evaluation purposes is straightforward, for example using [kind](https://kind.sigs.k8s.io/)
   or [minikube](https://minikube.sigs.k8s.io/docs/). Alternatively, you can use our demo environment for exploring Testkube functionality with having to install anything.
3. **I don't use Kubernetes** - if you're not familiar with Kubernetes and don't want to install a local cluster, you can use
   our demo environment for exploring Testkube functionality with having to install anything.

![Cloud Environment Creation](../../img/cloud-create-environment.png)

:::tip

### Testkube Demo Environment

The Testkube Demo environment available in the Testkube Cloud Control Plane is a great way to explore the functionality provided by Testkube.
It contains a large collection of Workflows for different testing tools, with corresponding execution results and
Test Insights.

You are added as a member with the Run role (see [below](/testkube-pro/articles/environment-management#environment-members)),
which gives you read-only access to explore and run these workflows and their results, as well as read-only access to
all other major features of Testkube.

![Demo Environment](../../img/demo-environment.png)

:::

### Environment name

Creating an environment in Testkube on-prem or selecting **Let's get started** in the cloud-specific dialog above will show
a prompt for a unique environment name:

![Provide Environment Name](../../img/create-environment-name.png)

### Environment connection

After providing the environment name you will be prompted as shown below to [Install the CLI](/articles/install/cli)
(do this only if you haven't already done so) and then run a CLI command to install the
[Testkube Agent](/articles/install/standalone-agent) for your environment, the provided command will automatically
connect the Agent to your Control Plane.

![New Environment Connection](../../img/new-environment-connection.png)

Running the provided Testkube CLI command in your terminal will install the agent and connect it to the created environment:

![Environment CLI Agent Installation](../../img/environment-cli-agent-install.png)

Once connected, you should see a corresponding status update in the dialog above to indicate that the installation
was successful.

## Environment Settings

You can access the settings for an existing Environment either from the same top-level menu or the corresponding
toolbar buttton on the left:

![Environment Settings](../../img/environment-settings.png)

There are 4 tabs for managing your Environment.

### General

Find the general settings for your environment on the **General** tab. You can also delete the environment here, but, be aware, this action cannot be undone.

![General Settings Dashboard](../../img/general-settings-dashboard-072024.png)

### Environment Members

You can assign environment-specific roles to [Teams](/articles/teams) or individual [Members](/testkube-pro/articles/organization-management#members) of your organization to control which
actions a member can perform in a specific environment.

To add new members to an Environment, select the Members tab under the Environment settings and use the "Add Collaborators"
section to search for and add individual members or teams from your organization.

![Add Environment Members](../../img/add-environment-members.png)

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

You can see a list of existing Environment members at the bottom of this panel, and change their role or remove them
using the popup menu on the right:

![Environment Members](../../img/environment-members.png)

### Keyword Handling

This tab allows you to manage the Filtering categories available for [Log Highlighting](/testkube-pro/articles/log-highlighting)

![Keyword Handling](../../img/environment-keyword-handling.png)

There are 4 default categories, represented with a few keywords each:

| Category                   | Keywords                                                            |
| -------------------------- | ------------------------------------------------------------------- |
| **Error Keywords**         | Error, Exception, Fail, Critical, Fatal                             |
| **Connection**             | Connection, Disconnect, Lost, Timeout, Refused, Handshake, Retrying |
| **Resource Issues**        | OutOfMemory, MemoryLeak, ResourceExhausted, LimitExceeded, Quota    |
| **Access & Authorization** | Denied, Unauthorized, Forbidden, Invalid, Invalid Token, Expired    |

You can add/edit/remove categories using the corresponding actions in the interface.

### Product Features

This tab allows you to configure Environment-level Product Features:

![Product Features](../../img/environment-product-features.png)
