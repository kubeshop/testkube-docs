# Organization Management

To manage your organization settings click "Organization Management" from organizations drop-down menu:

![Organization Management](../../img/organization-management.png)

(You can also create new organizations from this menu).

## Environments

In the environments section, you can see the list of your existing environments.

![Existing Environments](../../img/existing-environments-062024.png)

GREEN status means that your agent is connected successfully. 

In the case of a RED status, you can try to debug the issues with the command below:

```sh
testkube agent debug
```

Run this on your cluster where the given agent is installed.

Read more about [Environment Management](../articles/environment-management.md).

## Members

The members section allows you to invite and manage your organizations' members and their roles - [Read More](member-management) 

![Organisation Member Management](images/org-members.png)

## Teams

Teams allow you to group Organization members to simplify access control management for Environments
and Resource Groups - [Read More](/articles/teams).

![Teams Overview](../../img/teams-overview.png)

## Resource Groups

Resource Groups allow you to group Testkube Resources across all your environments and assign
member access - [Read More](/articles/resource-groups).

![Resource Groups Overview](../../img/resource-groups-overview.png)

## API Tokens

API tokens allows running tests without linking the run to a specific account - see [API Token Management](api-token-management) 
for more details on how to create and use API Tokens.

![API Tokens](../../img/api-tokens.png)

## Product Features

This tab allows you to configure Organization-level Product Features:

- **Resource Groups & Advanced RBAC** - Not toggleable, this just indicates if [Resource Groups](/articles/resource-groups) functionality is available (included with SSO).
- **Global Insights** - Toggle Global Insights of your Workflow executions - [Read More](/articles/test-insights).
- **AI Copilot** - Toggle the AI Copilot feature for your organization [Read More](/articles/copilot-overview).
- **Webhooks URL Masking** - Toggle Webhooks URL masking - [Read More](/articles/webhooks#url-masking).

![Organization Product Features](../../img/organization-product-features.png)

## Usage & Billing

This section shows your current usage against the limits of your current plan.

![Usage](../../img/usage.png)

For more details about the Testkube offerings, check our [pricing page](https://testkube.io/pricing).

If you are using the cloud version of Testkube you can upgrade your plan here. 
Once on the commercial plan, you will automatically be charged for additional 
users and environments in line with the current [Pricing Model](https://testkube.io/pricing).

## Settings

In settings, you can update the name of the organization, set artifacts limits, or enable or disable AI Hints and Webhooks URL Masking.

![Organization Setting](../../img/organization-settings.png)

