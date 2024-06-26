# Organization Management

To manage your organization settings click "Organization Management" from organizations drop-down menu:

![Organization Management](../../img/organization-management.png)

You can also create new organizations from this menu. 

## Organization Settings

### Environments

In the environments section, you can see the list of your existing environments.

![Existing Environments](../../img/existing-environments-062024.png)

GREEN status means that your agent is connected successfully. 

In the case of a RED status, you can try to debug the issues with the command below:

```sh
testkube agent debug
```

Run this on your cluster where the given agent is installed.

Read more about [Environment Management](../articles/environment-management.md).

### Settings

In settings, you can update the name of the organization, set artifacts limits, or enable or disable AI Hints and Webhooks URL Masking.

![Organization Setting](../../img/organization-settings.png)


### Members

For each organization you can define who has access and which actions each member can use. 

![Organization Members](../../img/organization-members.png)


There are 4 types of organization members: 

* `Owner` - Has access to all environments and organization settings, also can access billing details.
* `Admin` - Has access to all environments and organization settings.
* `Member` - Has limited access to environments, access is defined by the roles assigned to given member. Member by default doesn't have any access, you need to [explicitly set it in the given environment](environment-management.md).
* `Biller` - Has access to billing details only.

### API Tokens

API tokens allows running tests without linking the run to a specific account.

![API Tokens](../../img/api-tokens.png)

### Usage

See the details of the current organization usage and the available plans and features.

![Usage](../../img/usage.png)

For more details about the Testkube offerings, check our [pricing page](https://testkube.io/pricing).


