# Resource Access Management

Testkube provides flexible access-control to help you enforce how members of an Organisation have
access to Environments and Resources (Workflows, Workflow Templates, Triggers and Webhooks).

## Organisation Members and Teams

There are four roles for organisation members - [Read More](/testkube-pro/articles/organization-management#members). For 
the sake of this document:
- `Owner` / `Admin` - Always have access to all resources in all environments.
- `Member` - Resource access is controlled at the Environment and Resource Group level.
- `Biller` - No Resource access.

To furthermore simplify access management for a group of members, Testkube has the concept of [Teams](/articles/teams), which
provides convenient grouping of members. Whenever you can specify a Member for access control in Testkube, you can also specify a Team. 

## Environment Access

Organisation Members and Teams can be added to an Environment with a specific role - [Read More](/testkube-pro/articles/environment-management#environment-members), 
the given role applies to all Resources in that Environment. 

If a member has access to an Environment via multiple Teams and/or as a direct Member, Testkube will enforce the 
_most permissive_ role for a given Resource (unless that Resource is in a Resource Group - see below).

For example, if Organisation Member A has the `write` Role in Env B, but is also a member of Team C which has the 
`read` role in that Environment, Testkube will enforce the `write` role as it is the more permissive of the two roles.

## Resource Group Access

As the number of Resources and Environments grows, it can become desirable to limit which Resources specific
Members can work with across your Environments, both from a security and usability perspective. [Resource Groups](/artilces/resource-groups) solve for this by 
allowing you to group Resources across Environments and assign Members and Teams to them with a specific Role. 

:::note
Resource Groups are optional to use - if you're fine with enforcing roles at the Environment level then leave it at that!
:::

For example, you might have defined a number of Workflows for testing your frontend application, but only want certain Organisation
Members to be able to work with these. In this case you could 
- Create a "FE Testers" Team under your Organisation and add the corresponding Members to it.
- Create a "FE Tests" Resource Group and assign all your frontend Workflows to that Resource Group. These could of course be in different Environments, for example "Staging" and "Production".
- Finally add the "FE Testers" Team to the "FE Tests" Resource Group with the "Write" role, which would allow them to manage and run
  all your FE Workflows. Members not in this Team will no longer have access to the Workflows in your "FE Tests" Resource Group when working with the Testkube Dashboard or CLI.

There is one caveat to this example - read on!

## The intersection of Environment and Resource Access

For a Member to have access to a Resource in an Environment, they _always_ also need to have a
corresponding access role in that Environment, meaning that for the above example to work, the Members of the "FE Testers" team also need
to have a role in the Environments that contain "FE Tests" Resources. When resolving the final permission, Testkube will choose
the _less_ permissive of the Environment and Resource Group roles. 

This might be confusing, but there is a reason - let's play it out:

- If the "FE Testers" team has the `read` role in an Environment containing FE Tests, that will be the preceding role since it
  is less permissive.
- If the "FE Testers" team has the `write` or `admin` role in another Environment containing FE Tests, the preceding role will be 
  `write`, allowing them to work with the FE Tests Resources as specified by the Resource Group.

The rationale for the fact that the less permissive role takes precedence is that it allows you to always enforce Resource 
access at the Environment level for critical Environments (for example Production), vs individual Resource Groups providing a 
"back door" into an environment for unintended access.

## Recommendations

As mentioned above, if you don't need fine-grained access control to your Resources you can ignore Resource Groups and 
work with permissions at the Environment level. Once the need arises though, we recommend to start by:

- Giving all Members that work within an Environment the `write` role in that Environment, either directly or via a Team.
- Create Resource Groups for the groups of Resources that you need and add the corresponding Resources to them.
- Assign corresponding Members to these Resource Groups with the desired role.

The end result will be that 
- Only Members of your Resource Groups will be able to see and work with the corresponding Resources.
- You can temporarily "lock down" an Environment by changing the Environment-level role to one with lower 
  permissions (or by removing the corresponding Members altogether).