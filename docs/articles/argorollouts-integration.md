# Using Testkube with Argo Rollouts

This document describes how you can use Testkube with [Argo Rollouts](https://argo-rollouts.readthedocs.io/en/stable/). As a prerequisite, you should have a good understanding
of both Testkube, Argo Rollouts and Progressive Delivery principles.

## Overview

Testkube can be used to perform analysis to drive both Canary and BlueGreen Deployments in Argo Rollouts by
creating a corresponding AnalysisTemplate that calls Testkube to validate an ongoing progressive delivery strategy.

## Testkube Analysis Template

A sample AnalysisTemplate that uses the Testkube CLI to run a Test Workflow is shown below:

```yaml
apiVersion: argoproj.io/v1alpha1
kind: AnalysisTemplate
metadata:
  name: testkube-experiment-analysis
spec:
  args:
    - name: workflow-name
      value: basic-k6-workflow
  metrics:
  - name: run-testkube-workflows
    provider:
      job:
        spec:
          template:
            spec:
              containers:
              - name: execute-testkube
                image: kubeshop/testkube-cli:latest
                command:
                - /bin/sh
                - -c
                - |
                  testkube set context \
                    --api-key tkcapi_XX \
                    --root-domain testkube.io \
                    --org-id tkcorg_YY \
                    --env-id tkcenv_ZZ
 
                  testkube run tw {{ args.workflow-name }} -f || exit 1
              restartPolicy: Never
          backoffLimit: 2
    successCondition: "result.exitCode == 0"  # Exit code 0 for success
    failureCondition: "result.exitCode == 1"  # Exit code 1 for failure
    interval: 1m
    count: 1
```

This AnalysisTemplate uses a Kubernetes Job to run the Analysis ([Read More](https://argo-rollouts.readthedocs.io/en/stable/analysis/job/)) 
and also defines that actual Test Workflow to run as an argument, allowing you to use [Analysis Template Arguments](https://argo-rollouts.readthedocs.io/en/stable/features/analysis/#analysis-template-arguments) to
reuse the template for different Rollouts with different Tests.

## Canary Deployments

A sample [Canary Rollout](https://argo-rollouts.readthedocs.io/en/stable/features/canary/) using the above template could look as follows:

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
 name: rollout-experiment
spec:
 replicas: 2
 strategy:
   canary:
     steps:
     - setWeight: 50
     - pause: {duration: 10}
     # The second step is the experiment which starts a single canary pod
     - experiment:
         duration: 5m
         templates:
         - name: canary
           specRef: canary
         analysis:
         - name: canary-experiment
           templateName: testkube-experiment-analysis
         args:
         - name: workflow-name
           value: playwright-e2e-test
     - setWeight: 100
     - pause: {duration: 10}
 revisionHistoryLimit: 2
 selector:
   matchLabels:
     app: rollout-experiment
 template:
   metadata:
     labels:
       app: rollout-experiment
   spec:
     etc...
```

As you can see, the Analysis overrides the `workflow-name` argument to run a different Test Workflow (`playwright-e2e-test`) than 
the default one defined in the AnalysisTemplate above.

## Blue-Green Deployments

For a [BlueGreen Rollout](https://argo-rollouts.readthedocs.io/en/stable/features/bluegreen/), the Analysis could be configured as follows:

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: rollout-bluegreen
spec:
  replicas: 2
  strategy:
    blueGreen:
      activeService: <some service name>
      previewService: <another service name>
      autoPromotionEnabled: false
      prePromotionAnalysis:
        templates:
        - templateName: testkube-experiment-analysis
  revisionHistoryLimit: 2
  selector:
    matchLabels:
      app: rollout-bluegreen
  template:
    metadata:
      labels:
        app: rollout-bluegreen
    spec:
      etc...
```

In this case the Analysis is not providing a specific `worfklow-name` argument, so the default Test Workflow
`basic-k6-workflow` will be run to validate our BlueGreen deployment.
