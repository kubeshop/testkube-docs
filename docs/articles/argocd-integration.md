# Using Testkube with ArgoCD

This document will describe different ways you can use Testkube with ArgoCD. As a prerequisite you should have good understanding
of both Testkube, ArgoCD and GitOps principles. For a more high-level introduction and step-by-step tutorial, please check out
our blogpost at [...].

## Managing Testkube CRDs with ArgoCD

Testkube stores its core resources (Workflows, Triggers, etc.) as Custom Resources in your Kubernetes Cluster -
[Read More about Testkube CRDs](/articles/crds), which makes it straight forward to manage them using a GitOps approach with a tool
like ArgoCD.

When creating an Argo Application for a repo that contains Workflows, there are a couple of things to keep in mind:

- The target namespace has to have the Testkube Agent installed if you want to be able to use the synced resources accordingly
  (the Testkube Agent can currently only work with Testkube resource in its own namespace).
- Since the target namespace has the Agent installed, it is important to NOT select the `prune` option when syncing your
  Application with Argo, otherwise Argo will remove the Agent from your namespace.
- If you need to use the `prune` option for other reasons you will need to include the Testkube Agent resource in your GitOps repo, so these
  can be synced safely together with other resources. Use `helm template` with the [Testkube Helm Chart](/articles/install/install-with-helm) to generate the 
  manifests to be added to your repository.

## Triggering Executions 

Once any Testkube Workflows have been synced to your cluster(s) it is likely that you will want to trigger these to execute
corresponding Tests. Although you can of course trigger them manually through the CLI or Dashboard, it will probably make more 
sense to trigger them either using an ArgoCD Resource Hook or a Testkube Kubernetes Trigger. Let's look at both these options.

### Trigger from an ArgoCD Resource Hook




### Trigger using a Kubernetes Event Trigger

