# Environments and Access Control Best Practices

As organizations scale their Kubernetes adoption, the need for robust and efficient testing becomes paramount. Testkube provides a powerful, Kubernetes-native solution for test orchestration, but unlocking its full potential often comes down to how effectively you manage your environments, users, and permissions.

This guide explores best practices and patterns for structuring Testkube to align with your organizational needs, streamline your SDLC, and ensure secure, efficient collaboration.

## Testkube's Core Constructs: A Foundation for Control

Before diving into patterns, let's establish a clear understanding of Testkube's key organizational constructs:

- **Organization**: The top-level container for all your Testkube primitives. Users are added to an organization with either a "Member" or "Admin" role.  
- **Environment**: Think of an Environment as a dedicated project workspace within your Organization. It's a logical grouping that contains a catalog of Testkube resources (Test Workflows, Event Triggers, Webhooks, Test Workflow Templates) and defines who can access and manage them.  
- **Cluster/Agent Connection**: A single Environment can (and often should) be connected to multiple Kubernetes clusters for running tests or listening to events. You install a Testkube agent on each cluster (e.g., dev, staging, prod), and they all connect back to the same Environment in the Testkube Control Plane.  
- **Users & Roles**: Individuals interacting with Testkube. Within an Organization, users have a broad role. Within each Environment, users are assigned more granular roles like read, write, run, or admin, allowing for fine-grained control over their capabilities.  
- **Teams**: A powerful way to group users, making it easier to manage permissions. Instead of assigning roles to individual users in multiple environments, you can assign a team to an environment, and all its members inherit the defined role.  
- **Resource Groups**: For the ultimate in fine-grained access control, Resource Groups allow you to restrict access to specific Testkube resources *across Environments*. This means you can have a general permission set within an Environment, but then override it for certain critical Test Workflows. It also allows you to enforce shared permissions across Test Workflows in multiple Environments (for example all Load Tests).


Let’s look at a couple of approaches to using these constructs for a Testkube rollout.

## Pattern 1: The Project-Centric Environment (The Default Model)

This is the most common and recommended pattern for structuring Testkube.

### The Model

One Testkube Environment corresponds to one project, application, or unique SDLC. This single Environment holds the entire test catalog for that project—from rapid unit tests to comprehensive integration suites and critical production smoke tests. You then connect all clusters associated with that SDLC (e.g., your dev-cluster, staging-cluster, and prod-cluster) to this one Environment.

### Why use this pattern?

- Unified Test Catalog: Developers, QA, and SREs all work from a single, shared catalog of tests.  
- "Test Once, Run Anywhere": A Test Workflow is defined once and can be executed against any connected cluster (permissions allowing).  
- Simplified SDLC: This model directly mirrors your project's lifecycle, with one central "home" for all testing activities related to it.

### The Challenge This Creates: 

A key concept to understand is that once a cluster is connected to an Environment, all Test Workflows in that Environment can be run on it. This creates an obvious risk: how do you prevent a data-heavy, destructive "Staging Load Test" from being accidentally run against your prod-cluster? The answer isn't to create more environments (not yet, anyway). The answer is to implement a robust permission model, which leads directly to our next pattern.

## Pattern 2: Fine-Grained Access with Teams and Resource Groups

This pattern isn't so much an alternative to Pattern 1 as it is a requirement for managing it effectively. This is how you solve the challenge posed by the Project-Centric model.

### The Model 

Use Teams and Resource Groups on top of Pattern 1 to control who can run what tests, even when everyone is in the same Environment.

Let's use our "Project-Centric" example from Pattern 1:

- Environment: "E-Commerce Project"  
- Connected Clusters: staging-cluster, prod-cluster  
- Test Workflows: "Full Regression Suite" (staging-only) and "Production Smoke Test" (prod-safe).  
- Teams: "QA Team" and "SRE Team".

Here’s how you secure it:

- Create Resource Groups: Create a Resource Group named "Staging Tests" and another named "Production Tests".   
  - Assign Workflows: Assign the "Full Regression Suite" to the "Staging Tests" group.  
  - Assign "Production Smoke Test" to the "Production Tests" group.  
- Since Resource Groups can contain Workflows from multiple Environments, you could add Workflows to these groups across Projects/Environments if you adopt Pattern 3 below.  
- Assign Permissions:  
  - Grant the "QA Team" the run role for the "Staging Tests" Resource Group.  
  - Grant the "SRE Team" the run role for the "Production Tests" Resource Group.  
  - Crucially: Do not grant the "QA Team" run access to "Production Tests" (perhaps only read), and vice-versa.  
    

### The Result: 

Even though all clusters and all tests live in the same Environment, your permission model prevents accidental cross-execution. A member of the "QA Team" simply won't have the "run" button available for the "Production Smoke Test," and the SRE won't be able to trigger the "Full Regression Suite."

### When to use this pattern:

This is a natural evolution of implementing Pattern 1\. When you have specific Test Workflows that are resource-intensive (like load tests) or critical, requiring restricted execution. When different sub-teams (Dev, QA, SRE) operate within the same project but have different responsibilities.

## Pattern 3: Environment Segmentation for Hard Isolation

While Pattern 1 (managed by Pattern 2\) is the flexible default, there are times when you need hard segmentation. This is when you create separate, distinct Environments.

### The Model

Create a new Environment when you need to physically isolate a set of clusters and tests from everything else.

## When to use this pattern:

- **Totally Different Projects:** This is the most obvious case. Your "Mobile App" project and your "Data Platform" project have different teams, different test catalogs, and different clusters. They should be in two separate Testkube Environments.  
- **Specialized Testing Clusters**: You have a dedicated, high-spec cluster dedicated for specific testing activities. To guarantee that (for example) load tests only run on this cluster (and that this cluster only runs load tests), you can create a "Performance Testing" Environment. You connect only the load-test cluster agent to it. This provides physical isolation that permissions alone do not.  
- **Strict Compliance / SDLC Segregation**: In some high-security or regulated industries, your compliance model might forbid a production cluster from even being connected to an Environment that also contains development tests. In this case, you would revert to a model of creating a "Staging Environment" (connected to staging clusters) and a "Production Environment" (connected to prod clusters), and you would promote tests from one to the other as part of your release process.

Leveraging the possibility to add Workflows from multiple Environments to a Resource Group enables you to enforce consistent access controls across multiple Environments.

## Integrating with Your Identity Provider (SSO/SCIM)

Managing users and teams manually in any of the outlined approaches can be a chore. Testkube integrates seamlessly with your existing Identity Provider (IdP) through Single Sign-On (SSO) and SCIM (System for Cross-domain Identity Management).

- SSO: Allows users to log into Testkube using their existing organizational credentials (e.g., Azure AD, Okta).  
- SCIM: This is the real game-changer for user management. It automates the provisioning and de-provisioning of users and groups in Testkube based on your IdP. By leveraging SCIM, you can map your "QA Team" and "SRE Team" groups from Azure AD directly into Testkube. When a new QA engineer joins your company and is added to the "QA Team" group in Azure, Testkube automatically adds them to the "QA Team" in Testkube, and they instantly inherit all the correct permissions you defined in Pattern 2\.

## Best Practices for Your Testkube Deployment

So how do you go about implementing Testkube? 

- Start with Pattern 1: Begin with a single "Project-Centric" Environment for your application and connect your dev, staging, and prod clusters to it.  
- Implement Pattern 2 \- preferably sooner than later: As soon as you add more than one cluster or have more than one team, start using Teams and Resource Groups to build a strong permission model.  
- Use Pattern 3 Sparingly: Only create new Environments when you have a clear need for hard isolation (like a completely different project or a specialized, dedicated cluster).  
- Automate with SCIM: If you have an IdP that supports it, set up SCIM. It will save you countless hours in user management and ensure your permissions are always in sync with your organization's directory.  
- Name Consistently: Use clear, consistent naming conventions for your Environments, Teams, and Resource Groups to avoid confusion.

## Conclusion

Testkube offers a flexible and powerful framework for Kubernetes-native test orchestration. By starting with the recommended "Project-Centric" Environment (Pattern 1\) and immediately securing it with robust permissions (Pattern 2), you create a setup that is both flexible and secure. From there, you can scale out by adding new Environments for hard isolation (Pattern 3\) as your organization's testing needs grow.

