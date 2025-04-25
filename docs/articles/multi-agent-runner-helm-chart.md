# Installing Runner Agent with Helm Charts

You can install lightweight Runner Agent using `kubeshop/testkube-runner` Helm Chart.

## Creating Runner Agent for Helm Charts

To create Runner Agent, you can run `testkube create runner` command, like:

```sh
testkube create runner my-name --label my-label=my-value
```

After selecting the environment (unless you pass `--env env-id` parameter),
it will display information with agent ID and secret key:

```
ID:             tkcrun_55c1c5845a1fd20d9bf5de7737311959
Name:           my-name
Type:           Runner (reserved)
Created:        25 Apr 25 10:18 +0200 (0s)
Disabled:       no
Secret Key:     tkckey_run_6kivz9hvgoxwd9ihqq9xyhihk1y3qzua
Last Activity:  never
Last Version:
Last Namespace:
Environments:
    my-environment (tkcenv_9868d11cdb3ca577)
Labels:
   my-label: my-value
Policy:
   Required Matching Labels: name
```

## Basic installation

1. Add the Kubeshop Helm repository:
   ```sh
   helm repo add kubeshop https://kubeshop.github.io/helm-charts
   ```
2. If this repo already exists, run `helm repo update` to retrieve
   the `latest` versions of the packages.
   You can then run `helm search repo testkube` to see the charts.
3. Install the Helm Chart:
   ```sh
   helm upgrade --install \
     --create-namespace \
     --namespace my-runner \
     --set 'runner.id=<your:tkcrun_:runner_id>' \
     --set 'runner.orgId=<your:tkcorg_:organization_id>' \
     --set 'runner.secret=<your:tkckey_run_:key>' \
     --set 'cloud.url=agent.testkube.io:443' \
     my-runner kubeshop/testkube-runner
   ```

You can also use own `values.yaml` file, based on [our defaults](https://github.com/kubeshop/helm-charts/blob/main/charts/testkube-runner/values.yaml):

```yaml
runner:
  id: "<your:tkcrun_:runner_id>"
  orgId: "<your:tkcorg_:organization_id>"
  secret: "<your:tkckey_run_:key>"

cloud:
  url: "agent.testkube.io:443"
```

## Cookbook

There are common things that you may want to set up in your values.

### Install Runner in one namespace, and run executions in another

To separate concerns, you may separate your runners from the execution:

```yaml
execution:
  default:
    namespace: my-execution-namespace
```

### Disable access to Kubernetes from executions

By default, your executions will use a ServiceAccount that has access to pods, jobs, and events.
It's required for [Parallel Steps](/articles/test-workflows-parallel) and [Services](/articles/test-workflows-services).

To disable it, you can disable auto-creation of service account for executions:

```yaml
execution:
  default:
    serviceAccount:
      autoCreate: false
      # name: my-custom-service-account # you can also use your own service account
```

### Support additional namespaces

You can also allow the runner to schedule in multiple namespaces.

In your `values.yaml` file:

```yaml
execution:
  additionalNamespaces:
    'custom-namespace':
      serviceAccount:
        autoCreate: false # set 'true' to allow parallel steps & services
        # name: my-custom-service-account # you can also use your own service account
```

Then, in your workflow configure:

```yaml
spec:
  job:
    namespace: custom-namespace
```

### Setting Global Template

For each runner, you may set custom Global Template.
It will be used as foundation for every execution in this Runner Agent.

It's useful e.g. to set up OpenShift's security context, that will be separate for each runner:

```yaml
globalTemplate:
  enabled: true
  spec:
   pod:
     securityContext:
     enabled: true
     fsGroup: 1000650001
     runAsUser: 1000650001
   container:
     securityContext:
       runAsUser: 1000650001
       runAsNonRoot: true
```
