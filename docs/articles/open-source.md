# Testkube Open Source 

The Testkube Agent is 100% Open Source and can be [deployed in standalone mode](install/standalone-agent) without being connected
to the commercial Control Plane.

Once deployed, you can interact with the agent through the [Testkube CLI](install/cli) or directly via the
[Agent API](/openapi/overview#agent-api). This section explains and guides you through the installation, setup, 
running and verifying tests with the Testkube Agent in Standalone Mode.

## Prerequisites

* A Kubernetes or OpenShift cluster. [Docker  version](https://docs.testkube.io/articles/install/docker-agent) is also available as an alternative 
* [Testkube CLI](https://docs.testkube.io/articles/install/cli) installed on your machine  
* kubectl installed and configured to interact with the Kubernetes cluster 
* Helm installed on your machine

## Installing the Testkube Agent in Standalone Mode

Here, we will go through the steps to install Testkube Agent in Standalone Mode


1. **Adding the Kubeshop Helm repository:**

    ```
    helm repo add kubeshop https://kubeshop.github.io/helm-charts
    ```

    If the repository already exists, you can update it using the below command:

    ```
    helm repo update
    ```

2. **Installing Testkube Agent.**

    Install the Helm chart with default configurations. This will deploy the Testkube in the `testkube` namespace:
    ```
    helm upgrade --install \
       --create-namespace \
       --namespace testkube \
       testkube kubeshop/testkube
    ```
    This will install the Testkube Agent and other required resources in the `testkube` namespace.

3. **Verify the installation as shown below.**

    After installation, you can check the status of the deployed components to ensure everything is running correctly.
    ```
    kubectl get all -n testkube
	```

## Running Tests with the Testkube Agent

1. **Create a Test Workflow**

    Here is a test workflow that defines the test execution. Here is an example using a k6 test:

    ```
    kind: TestWorkflow
    apiVersion: testworkflows.testkube.io/v1
    metadata:
    name: ephemeral-test
    namespace: testkube
    labels:
        test: k6
    spec:
    content:
        git:
        uri: https://github.com/cerebro1/testkube-ephemeral
        revision: main
        paths:
            - k6/testkube.js
    container:
        workingDir: /data/repo/k6/
    steps:
        - name: Run test
        container:
            image: grafana/k6:0.49.0
        shell: |
            k6 run testkube.js
        artifacts:
            workingDir: /data
            paths:
            - '*.html’
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

2. **Verifying the Deployment of Test Workflow**
    ```
    testkube get testworkflows
    ```

    **Expected output:**

    ```
    NAME           | DESCRIPTION | CREATED                       | LABELS  | STATUS | EXECUTION ID  
    -----------------+-------------+-------------------------------+---------+--------+---------------
    ephemeral-test |             | 2025-02-17 14:51:10 +0000 UTC | test=k6 |
    ```

3. **Execute Test Workflow**
   Testkube CLI provide `run` command to execute a Test Workflow. Let us go ahead and execute the `ephemeral-test` Test Workflow.

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

4. **View Test Workflow Status**

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
    -----------------+-------------+-------------------------------+---------+--------+---------------------------
    ephemeral-test |             | 2025-02-17 14:51:10 +0000 UTC | test=k6 | passed | 67b34e1e29a84abec76e0a14  
    ```

    The Test Workflow has been successfully executed.  Testkube performs the following steps in Test Workflow execution:

    * Initializes the environment.
    * Clones the GitHub repository.
    * Runs the shell command for the k6 test execution.
    * Uploads the artifacts if found.


5. **View Test Logs**

    Testkube manages the logs and makes them available via CLI. To access extensive logs of Test Workflow execution, you can use the below command with the EXECUTION ID.

    ```
    testkube get twe <execution_id>
    ```

In this document, we have discussed the process of deploying Testkube Agent in Standalone Mode on a Kubernetes cluster and perform manage tests via an open source solution. You can automate the execution of a test via GitHub Actions using the Testkube Open Source solution\(Link to blog here\).  

## Migrating from OSS to Commercial

Migrating from a Standalone Agent deployment to utilizing the Testkube Control plane is described 
at [Connecting to the Testkube Control Plane](/articles/install/standalone-agent#connecting-to-the-testkube-control-plane).

## Source Code and Licensing

The source-code for the agent is available in the [Testkube GitHub repo](https://github.com/kubeshop/testkube)
and is dual-licensed under the MIT license and the Testkube Community License (TCL).
Read more in our [Licensing FAQ](testkube-licensing-FAQ).
