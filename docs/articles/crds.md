# Testkube Custom Resources

:::info
As of Testkube v2.7, Testkube Resources are stored in the Control Plane - [Read More](/articles/control-plane-source-of-truth). 
CRDs are still used by the [GitOps Agent](/articles/agents-overview#gitops-agents) to sync resources from Kubernetes 
into the Control Plane and by the [Standalone Agent](/articles/install/standalone-agent) for local resource management.
:::

Testkube defines several [Custom Resource](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) 
types for use with [Standalone Agent](/articles/install/standalone-agent) and [GitOps Agent](/articles/agents-overview#gitops-agents) deployments.

The following Resource Group/Versions are available (click for documentation)

- [testworkflows.test.io/v1](crds/testworkflows.testkube.io-v1.mdx)
- [tests.testkube.io/v1](crds/tests.testkube.io-v1.mdx) (Partially deprecated)
- [tests.testkube.io/v2](crds/tests.testkube.io-v2.mdx) (Deprecated)
- [tests.testkube.io/v3](crds/tests.testkube.io-v3.mdx) (Deprecated)
- [executor.testkube.io/v1](crds/executor.testkube.io-v1.mdx) (Partially deprecated)

:::tip
More detailed schema docs are also available at https://doc.crds.dev/github.com/kubeshop/testkube-operator
:::

The current CRD definitions can be found in the [kubeshop/testkube](https://github.com/kubeshop/testkube) repository.

## Checking installed CRDs

You can always check the list of all CRDs using `kubectl` configured to point to your Kubernetes cluster 
with Testkube installed:

```sh
kubectl get crds -n testkube
```

```sh title="Expected output:"
NAME                                               CREATED AT
executors.executor.testkube.io                     2024-05-31T09:53:09Z
scripts.tests.testkube.io                          2024-05-31T09:53:09Z
templates.tests.testkube.io                        2024-05-31T09:53:09Z
testexecutions.tests.testkube.io                   2024-05-31T09:53:09Z
tests.tests.testkube.io                            2024-05-31T09:53:09Z
testsources.tests.testkube.io                      2024-05-31T09:53:09Z
testsuiteexecutions.tests.testkube.io              2024-05-31T09:53:09Z
testsuites.tests.testkube.io                       2024-05-31T09:53:09Z
testtriggers.tests.testkube.io                     2024-05-31T09:53:09Z
testworkflowexecutions.testworkflows.testkube.io   2024-05-31T09:53:09Z
testworkflows.testworkflows.testkube.io            2024-05-31T09:53:09Z
testworkflowtemplates.testworkflows.testkube.io    2024-05-31T09:53:09Z
webhooks.executor.testkube.io                      2024-05-31T09:53:09Z
```

To check details on one of the CRDs, use `describe`:

```sh
kubectl describe crd testworkflows.testworkflows.testkube.io
```

```sh title="Expected output:"
Name:         testworkflows.testworkflows.testkube.io
Namespace:
Labels:       app.kubernetes.io/managed-by=Helm
Annotations:  controller-gen.kubebuilder.io/version: v0.15.0
              meta.helm.sh/release-name: testkube
              meta.helm.sh/release-namespace: testkube
API Version:  apiextensions.k8s.io/v1
Kind:         CustomResourceDefinition
...
```
