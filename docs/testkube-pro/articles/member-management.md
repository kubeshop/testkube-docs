# Member Management

Manage your organization members from the [Members] option in the Organization management panel:

![Organisation Member Management](images/org-members.png)

## Member Types

Testkube allows you to license for two type types of members; **full** and **read-only**. A members' type 
is implicit and based on if that member has been given write-access to any resource/environment in Testkube: 
- A member that has been given write-access automatically counts as a full member.
- A member that does not have any write-access counts as read-only.

You can see the number of used/available seats of each type in the members page.

:::info
Please read [Resource Access Management](/articles/resource-access-management) to get an overview of how Testkube
allows you to manage and apply Resource Access controls for Organization Members.
:::

### Constraints 

This model imposes some constraints related to member types and permissions:

- It is not possible to give a read-only member write-access to any resource or environment if no 
  full-member seats are available.
- It is not possible for a user to join an organisation if all seats are occupied. For on-prem/SSO-enabled
  deployments, this could result in users not being able to sign in at all.
- Members who are read-only will count to the full-member limit if there aren't enough read-only seats available.

### Member licensing with the Testkube Cloud Control Plane

When using the Testkube Cloud Control Plane instead of hosting the Control Plane on-prem, members can be
licensed either within a fixed limit, or based on active member count at the end of each month.

- **Fixed** members licensing allocates a fixed number of full and read-only members to your organization, for which
  you will be billed in your billing cycle.
- **Pay-as-you-go** member licensing counts the number of active (logged in) members of each type at the end of each 
  billing cycle and bills you for that number of members. Pay-as-you-go licensing is indicated by an infinity-sign in the 
  number of members count:

![Pay-as-you-go Member Count](images/infinite-org-members.png)

## Inviting Members

Invite new members from the Members page by specifying: 
- Emails - a comma-separated list of emails to invite.
- Role - there are 4 roles for organization members:
  - `Owner` - Has access to all environments and organization settings, also can access billing details.
  - `Admin` - Has access to all environments and organization settings.
  - `Member` - Access to Resource Groups and Envvironmnents is defined by the roles assigned to given member. 
     Member by default doesn't have any access, you need to [explicitly set it in the given environment](environment-management.md). 
  - `Biller` - Has access to billing details only.
- Teams - which Teams the invited members should belong to.
- Environments - which Environments the invited members should be added to, with their corresponding Environment Role

Once all specified, select the Invite button in the bottom right.

![Organization Member Invite](../../img/organization-members.png)

:::tip
For Testkube On-Prem deployments you can configure default organizations, environments and roles for users - see 
[Bootstrap User Mapping](/articles/install/advanced-install#bootstrap-user-mapping).
:::

## Manage existing Members

Manage existing members in the list of members at the bottom of the tab. Use the menu to the right for 
each member to delete them or change their role.

![Organization Members](../../img/org-members-list.png)

Use the menu to the right to Update or Remove a member and view their details.

### Understanding Members' Permissions

Use the "Show Member Details" option shows the breakdown for the Members' Consolidated Permissions shown in the table:

![Member Permissions](images/member-permissions.png)

## Manage pending Invites

Manage pending member invites in the lists at the bottom of the tab. Use the menu to the right for
each invite to update, revoke or resent the invite.

![Organization Invites](../../img/organization-invites.png)

