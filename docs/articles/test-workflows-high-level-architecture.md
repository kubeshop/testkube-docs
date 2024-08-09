# Test Workflows - High-Level Architecture

Test Workflows are analyzing the expected operations and images, and building all the required native Kubernetes resources,
like [**ConfigMaps**](https://kubernetes.io/docs/concepts/configuration/configmap/) and [**Secrets**](https://kubernetes.io/docs/concepts/configuration/secret/) for data, and, most importantly, [**Jobs**](https://kubernetes.io/docs/concepts/workloads/controllers/job/), and [**Pods**](https://kubernetes.io/docs/concepts/workloads/pods/) for the actual execution.

After the Test Workflow execution is finished, all the created resources are deleted from the Kubernetes cluster.

![Controlling TestWorkflow Execution](./images/scheduling-workflow-execution.png)

## Components

### Controller

The Agent Server is responsible for controlling the Test Workflow execution. It's both:

* creating all the required resources,
* watching for their status and sending all the results to the storage or the Control Plane,
* destroying resources after they are no longer needed

The Test Workflows are resilient to Agent Server downtime, as after Agent Server is restarted,
it's able to recover all the information from the meantime, as long as the execution Kubernetes resources are still intact.

### Job

For every execution, there is a [**Job**](https://kubernetes.io/docs/concepts/workloads/controllers/job/) created,
that is used to schedule the actual execution pod. It is prepared specifically for Test Workflow, and only small set of properties is configurable.

You can control part of the Job specification, [**using `spec.job` property**](./test-workflows-job-and-pod#job).

### Pod

The [**Pod**](https://kubernetes.io/docs/concepts/workloads/pods/) is actual execution unit in the Kubernetes.
Based on the Test Workflow, we are building the Pod that will execute all the requested operations, and return all the information within its logs.

Besides the automatically configured options, you are able to adjust [**most of the Pod specification**](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.23/#podspec-v1-core)
by setting it in the [**`spec.pod` property**](./test-workflows-job-and-pod#pod).

## Execution

The Test Workflow may have nested steps, but at the end they have to be executed one after one, so we need to flatten its steps into sequential operations.

All the sequential steps needs to be run inside the same pod to access to shared file system.
General [**Containers**](https://kubernetes.io/docs/concepts/workloads/pods/#using-pods) in Kubernetes are running in parallel (and don't split workload resources),
so to achieve a sequential execution we are using [**Init Containers**](https://kubernetes.io/docs/concepts/workloads/pods/init-containers/) and the last container is in the `containers`.

![Isolated Containers](./images/splitting-workflow-steps-to-containers.png)

### Merging Containers

Using Init Containers has a flaw - often, in your cluster, there may be an Operator that is adding some container to every Pod.
That container (i.e. in [**Istio**](https://istio.io/)), may be required for the routing.

Such container often are added in `containers` section, so they would be started **after** Init Containers.

:::note

Newer Kubernetes supports [**sidecar containers**](https://kubernetes.io/docs/concepts/workloads/pods/sidecar-containers/) which are accessible for Init Containers too,
and tools like Istio are already using it in newer versions.

:::

To mitigate the problem, we are trying to merge multiple operations into a single container if it's possible,
to reduce the scope where it's not accessible. It reduces the isolation a bit, but also reduces the cluster overhead and mitigates serious issues like that.

:::info

Merging containers is a default behavior. To opt-out, you can use system flag in the Test Workflow or [**Global Template**](./test-workflows-job-and-pod.md#global-template):

```yaml
spec:
  system:
    isolatedContainers: true
```

:::

To avoid issues with the reduced isolation, by default we are merging together only the internal operations that won't suffer from it.

![Merging Containers](./images/merging-workflow-containers.png)

### Pure Steps

If you want to some of your `shell` or `run` steps to allow merging with other `shell`/`run` steps, you have to specify `pure: true` for them.
This way, they will be acknowledged as free of side effects, and will be merged with next or previous step when it is possible.

```yaml
spec:
  steps:
  # container 1
  - shell: echo 'Hello world 1'
    pure: true
  - shell: echo 'Hello world 2'
  # container 2
  - shell: echo 'Hello world 3'
  - shell: echo 'Hello world 4'
    pure: true
  - shell: echo 'Hello world 5'
```

:::info

If you wish to have that behavior by default for all steps, you can use system flag in the Test Workflow or [**Global Template**](./test-workflows-job-and-pod.md#global-template):

```yaml
spec:
  system:
    pureByDefault: true
```

:::

![Pure Workflow Containers](./images/pure-workflow-containers.png)

## Init Process

To perform advanced orchestration, Test Workflows are using own [**Init Process**](https://en.wikipedia.org/wiki/Init).
That process is an actual command run in the container, that is preparing the environment, and executing the actual command to run.

Whenever you run container with some command, like `command: [ "curl", "http://testkube.io" ]`,
we are actually doing something similar to `command: [ "/init", "curl", "http://testkube.io" ]`.
The `/init` process is responsible for all the preparation, execution of actual command, and cleanup.

### Fetching Image Metadata from the Container Registry

To build the proper Pod and Init Process, we need to know the most important details of the image, like:
* **Working Directory (`workingDir` / [`WORKDIR`](https://docs.docker.com/reference/dockerfile/#workdir)):** to change current working directory between operations in a single container
* **Command (`command` / [`ENTRYPOINT`](https://docs.docker.com/reference/dockerfile/#entrypoint) and `args` / [`CMD`](https://docs.docker.com/reference/dockerfile/#cmd)):** to wrap with the Init Process
* **User and Group (`securityContext.runAsUser/runAsGroup` / [`USER`](https://docs.docker.com/reference/dockerfile/#user)):** to configure the file system

Kubernetes doesn't have a direct mechanism to get these metadata. To obtain it, we need to fetch the data from Container Registry when we need.

#### Private Container Registries

When the image you are using is stored in the private registry, you may need to add [`pod.imagePullSecrets`](https://docs.testkube.io/articles/test-workflows-examples-basics#configuring-the-pod) to the specific Test Workflow or [**Global Template**](https://docs.testkube.io/articles/test-workflows-job-and-pod#global-template).

#### Avoid Fetching Image Metadata

Companies may have a strict policy of not storing the credentials for the Container Registry in the Kubernetes' Secret, or disallow Secrets at all.

When Testkube will not have access to the Container Registry, it may revoke running the Test Workflow with errors about not being able to access the private image metadata.

To overcome this issue, you need to make sure that every step has the above data (`workingDir`, `securityContext.runAsUser/runAsGroup`) provided,
and you cannot use `run` operation without specifying the `command`. As an example, you may set the default container configuration as follows:

```yaml
spec:
  container:
    workingDir: /data
    securityContext:
      runAsUser: 1001
      runAsGroup: 1001
```

It can be added as part of specific Test Workflow, or globally in the [**Global Template**](https://docs.testkube.io/articles/test-workflows-job-and-pod#global-template).

:::note

Some images may be prepared to work correctly only with selected user/group IDs.
In such case, the container may fail using common one, and you need to specify the expected one for this step.

:::

## Parallelization and Services

When you are scheduling [**Parallel Steps**](http://localhost:3000/articles/test-workflows-parallel) or [**Services**](http://localhost:3000/articles/test-workflows-services),
the main Test Workflow execution Pod is communicating directly with the Kubernetes to create, monitor, and destroy the Jobs and Pods for each of requested parallel operation, similar way to the actual execution.
