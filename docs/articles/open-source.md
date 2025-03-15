# Testkube Open Source 

The Testkube Agent is 100% Open Source and can be [deployed in standalone mode](install/standalone-agent) without being connected
to the commercial Control Plane.

Once deployed, you can interact with the agent through the [Testkube CLI](install/cli) or directly via the
[Agent API](/openapi/overview#agent-api). This section explains and guides you through the installation, setup, 
running and verifying tests with the Testkube Agent in Standalone Mode.

## Getting Started with the Testkube Agent 

### 1. Install the Testkube Agent in Standalone Mode 

The Testkube Standalone Agent can be installed using Testkube CLI or 
Helm - [Installation Instructions](./install/standalone-agent#installing-the-standalone-agent).

After installation, you can check the status of the deployed components to ensure everything is running correctly.
   
```
kubectl get all -n testkube
```

### 2. Create a Test Workflow

Testkube uses [Test Workflows](/articles/test-workflows) to define how to run your tests, here is an example using a k6 test:

```yaml
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: ephemeral-test
  namespace: testkube
spec:
  content:
    git:
      uri: https://github.com/cerebro1/testkube-ephemeral
      revision: main
      paths:
      - k6/testkube.js
  container:
    workingDir: /data/repo/k6/
    image: grafana/k6:0.49.0
  steps:
    - name: Run test
      shell: |
        k6 run testkube.js
```

Save the above manifest in `testworkflow.yaml`. 
Run the following command to create a Test Workflow on the cluster using the Testkube CLI:

```
testkube create testworkflow -f testworkflow.yaml
```

Alternatively, you can use kubectl to apply the Test Workflow:

```
kubectl apply -f testworkflow.yaml
```

:::tip
Testkube uses Kubernetes CRDs to define its core resources - [Read More](/articles/crds).
:::


### 3. Verify the Deployment of Test Workflow

Run the following command to verify:

```
testkube get testworkflows
```

**Expected output:**

```
NAME           | DESCRIPTION | CREATED                       | LABELS  | STATUS | EXECUTION ID  
---------------+-------------+-------------------------------+---------+--------+---------------
ephemeral-test |             | 2025-02-17 14:51:10 +0000 UTC | test=k6 |
```

### 4. Execute your Test Workflow

The [Testkube CLI](/articles/cli) provides a `run` command to execute a Test Workflow. 
Let us go ahead and execute the `ephemeral-test` Test Workflow.

```
testkube run testworkflow ephemeral-test
```

**Expected output:**

```   
Context:  (2.1.88)   Namespace: testkube
----------------------------------------

Test Workflow Execution:
Name:                 ephemeral-test
Execution ID:         67b34e1e29a84abec76e0a14
Execution name:       ephemeral-test-1
Execution namespace:  
Execution number:     1
Requested at:         2025-02-17 14:56:30.314865414 +0000 UTC
Disabled webhooks:    false
Status:               queued

$ Watch test workflow execution until complete \
    kubectl testkube watch twe 67b34e1e29a84abec76e0a14
$ Use following command to get test workflow execution details \
    kubectl testkube get twe 67b34e1e29a84abec76e0a14
```

:::tip
Use the `-f` flag to immediately follow an execution when creating it - [Read More](/cli/testkube-run-testworkflow).
:::

### 5. View Test Workflow execution status

You can monitor the test execution process by watching the status:
```	
testkube watch twe <execution_id>
```
Replace <execution_id> with the Execution ID provided in the output of `testkube run` command.

Use the following command to get Test Workflow status:
```
testkube get testworkflows
```
**Expected output:**

```
Context:  (2.1.88)   Namespace: testkube
----------------------------------------

NAME           | DESCRIPTION | CREATED                       | LABELS  | STATUS | EXECUTION ID              
---------------+-------------+-------------------------------+---------+--------+---------------------------
ephemeral-test |             | 2025-02-17 14:51:10 +0000 UTC | test=k6 | passed | 67b34e1e29a84abec76e0a14  
```

The Test Workflow has been successfully executed.  Testkube performs the following steps in Test Workflow execution:

* Initializes the environment.
* Clones the GitHub repository.
* Runs the shell command for the k6 test execution.
* Uploads the artifacts if found.


### 6. View Test Logs & Artifacts

Testkube manages the logs and artifacts produced by your tests and makes them available via CLI. 
To access extensive logs of Test Workflow execution, you can use the below command with the EXECUTION ID.

```
testkube get twe <execution_id>
```

For retrieving artifacts you can use 

```
testkube download artifacts <execution_id>
```

### Next Steps

Congrats on getting up and running with Testkube, now you can

- Read more about [Test Workflows](/articles/test-workflows) to learn how to run any type of test with Testkube.
- Head over to the [Examples & Guides](/articles/examples/overview) for sample Test Workflows with popular testing tools.
- Check out the [Getting Started with Testkube Open Source](https://testkube.io/blog/getting-started-with-testkube-open-source) blogpost to further see how you can use the Standalone Agent with GitHub Actions
- Go through the [CLI Reference](/cli/testkube) to see available CLI commands.
- Head over to the [Testkube Slack](https://bit.ly/testkube-slack) to ask questions and get answers.

## Migrating from OSS to Commercial

Migrating from a Standalone Agent deployment to utilizing the Testkube Control plane is described 
at [Connecting to the Testkube Control Plane](/articles/install/standalone-agent#connecting-to-the-testkube-control-plane).

## Source Code and Licensing

The source-code for the agent is available in the [Testkube GitHub repo](https://github.com/kubeshop/testkube)
and is dual-licensed under the MIT license and the Testkube Community License (TCL).
Read more in our [Licensing FAQ](testkube-licensing-FAQ).
