# Resource Groups

Resource Groups allow you to group resources across all your Environments, by whatever criteria meets your needs 
(team, application, component, etc.). Once defined, you can assign individual members or teams to a Resource Group 
with a specific Role, resulting in those members having corresponding permissions for the resources in that Resource
Group.

Selecting "Resource groups" from the Organization Management panel shows a list of all existing Resource Groups:

![Resource Groups Overview](../img/resource-groups-overview.png)

## Creating a new Resource Group

Select the [Create a new group] button in the overview above, you will be prompted for the name, 
slug and description (The slug is a human-friendly identifier used in URLs):

![img.png](images/create-resource-group.png)

## Resource Group Settings

Selecting an existing Resource Group or creating a new one takes you to the Resource Group Settings page, which
allows you to configure the name, description and Collaborators for the Resource Group (the slug cannot be changed).
There is also an option to delete the Resource Group at the bottom.

![img_1.png](images/resource-group-details.png)

## Managing Resource Group Collaborators

Add collaborators to a Resource Group with the "Add collaborators" button, which will prompt for 
which Members and/or Teams to add as collaborators, and which Role they should have for this Resource Group

![img_2.png](images/add-resource-group-collaborators.png)

Once added, you can manage Members in the list at the bottom of this page, use the menu on the right to
change their Role or remove them:

![img_3.png](images/resource-group-collaborators.png)

## Managing Resources in a Resource Group

Adding or removing a Testkube resource to/from a Resource Group is done from that Resources' Settings page. For 
example, to assign a Workflow to a Resource Group, go to the Collaboration Tab of the Workflow Settings and select
which Resource Group the Workflow belongs to ("Backend Workflows" in the below screenshot).

:::info
When deciding on the permission for a specific User and resource, Testkube takes the intersection of
that Users [Environment role](/testkube-pro/articles/environment-management#environment-members) and
Resource Group role for the resource (if any), and applies the lowest privileged role. This makes
it easy to control resource access across both Environments as a whole, and specific Resources using Resource Groups.
:::


![img_4.png](images/workflow-collaboration-tab.png)




