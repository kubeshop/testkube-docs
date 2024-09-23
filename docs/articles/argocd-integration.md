# Using Testkube with ArgoCD

This document will describe different ways you can use Testkube with ArgoCD. As a prerequisite you should have good understanding
of both Testkube, ArgoCD and GitOps principles. 

:::tip
For a high-level introduction to using Testkube with ArgoCD including a step-by-step tutorial, please check out
our [GitOps blogpost](https://testkube.io/blog/a-gitops-powered-kubernetes-testing-machine-with-argocd-and-testkube).
:::

## Managing Testkube CRDs with ArgoCD

Testkube stores its core resources (Workflows, Triggers, etc.) as Custom Resources in your Kubernetes Cluster -
[Read More about Testkube CRDs](/articles/crds). This makes it straight forward to manage them using a GitOps approach with a tool
like ArgoCD.

When creating an Argo Application for a repo that contains Workflows, there are a couple of things to keep in mind:

- The target namespace has to have the Testkube Agent installed if you want to be able to use the synced resources accordingly
  (the Testkube Agent can currently only work with Testkube resource in its own namespace).
- Since the target namespace needs to have the Agent installed, it is important to NOT select the `prune` option when syncing your
  Application with Argo, otherwise Argo will remove the Agent from your namespace when syncing.
- If you need to use the `prune` option for other reasons you will need to include the Testkube Agent resource in your GitOps repo, so these
  can be synced safely together with other resources. Use `helm template` with the [Testkube Helm Chart](/articles/install/install-with-helm) to generate the 
  manifests to be added to your repository.

## Triggering Test Executions 

Once any Testkube Workflows have been synced to your cluster(s) it is likely that you will want to trigger these to execute
corresponding Tests. You can of course trigger them manually through the CLI or Dashboard, it will probably make more 
sense to trigger them either using an ArgoCD Resource Hook or a Testkube Kubernetes Trigger. 

- Using a Kubernetes Trigger has the advantage of being disconnected from ArgoCD; however a resource gets updated in your Cluster, by it by ArgoCD or
  some other process (possibly manual), your tests will always execute. The downside is that they will execute even if your resources are part
  of a larger application, which might fail synchronizing or not be initialized correctly when the test is triggered.
- Using a Resource Hook handles the downside of Kubernetes Triggers by being more attune to the overall ArgoCD sync status; if ArgoCD for some reason 
  fails to sync your application resources with your cluster, it won't run your tests unnecessarily (unless you want it to).

Let's have a quick look on how to set up these two approaches.

### Trigger from an ArgoCD Resource Hook

Post-sync Resource hooks are executed by Argo after it has successfully synced resources within an Application - [Read More](https://argo-cd.readthedocs.io/en/stable/user-guide/resource_hooks/). 

Creating a Post-sync hook as a Kubernetes Job that runs Testkube Tests using the Testkube CLI is straight-forward; the Job would be 
defined together with your Testkube Resource in your Git repo and ArgoCD will execute it if the synchronization of Git Resources 
to your Cluster is successful. 

The general outline of such a Post-Sync Job is as follows:

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  generateName: testkube-testworkflows-execution-
  namespace: default
  annotations:
    argocd.argoproj.io/hook: PostSync
    argocd.argoproj.io/hook-delete-policy: HookSucceeded
spec:
  template:
    spec:
      containers:
      - name: execute-testworkflows
        image: kubeshop/testkube-cli:2.1.19
        command:
        - /bin/sh
        - -c
        - |
          testkube set context \
            --api-key tkcapi_ZZZZ \
            --root-domain testkube.io \
            --org-id tkcorg_XXXX \
            --env-id tkcenv_YYYY

          testkube run tw <name-of-workflow> -f
      restartPolicy: Never
```

The Job first sets the Testkube CLI context and then simply invokes the `testkube run` command for each Workflow that was synced, with the -f option to capture the output.
(here you can obviously run any combination of Testkube CLI commands).

- The `tkcorg_XXXX` and `tkcenv_YYYY` identifiers can be found on the [Environment Settings](/testkube-pro/articles/environment-management#general) page. 
- The `tkcapi_ZZZZ` api-key needs to created as described under [API Token Management](/testkube-pro/articles/api-token-management).
- the `root-domain` should be `testkube.io` if you're using Testkube Cloud, or your local Testkube API endpoint for on-prem installations.

:::tip
This [blog-post](https://testkube.io/blog/a-gitops-powered-kubernetes-testing-machine-with-argocd-and-testkube) contains a complete example of a Post-Sync Resource Hook 
with video and screenshots.
:::

### Trigger using a Kubernetes Event Trigger

Defining a Kubernetes Trigger to react to resources being updated by ArgoCD is equally straightforward. See [Kubernetes Triggers](/articles/test-triggers) for
a walkthrough of the Testkube Triggering functionality, let's just look at a short example below:

```yaml
apiVersion: tests.testkube.io/v1
kind: TestTrigger
metadata:
  name: testtrigger-example
  namespace: default
spec:
  resource: deployment
  resourceSelector:
    labelSelector:
      matchLabels:
        testkube.io/tier: backend
  event: modified
  conditionSpec:
    timeout: 100
    delay: 2
    conditions:
      - type: Progressing
        status: "True"
        reason: "NewReplicaSetAvailable"
        ttl: 60
      - type: Available
        status: "True"
  action: run
  execution: workflow
  concurrencyPolicy: allow
  testSelector:
    name: frontend-sanity-tests
```

This will trigger the execution of the "frontend-sanity-tests" Test Workflow when any Kubernetes deployment with the 
label `testkube.io/tier: backend` has been modified in the default namespace, which includes updates performed by ArgoCD 
during resource synchronization.
