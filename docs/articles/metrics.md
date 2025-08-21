# Prometheus Metrics

The Testkube API Server in the [Testkube Agent](/articles/install/standalone-agent) exposes a `/metrics` endpoint that can be consumed by Prometheus, Grafana, etc. 

Depending on if the Agent is deployed in Standalone or Connected mode, it will expose metrics either for local executions or 
for executions performed in the associated Environment.

Currently, the following metrics are exposed:

* `testkube_test_executions_count` - The total number of test executions.
* `testkube_testsuite_executions_count` - The total number of test suite executions.
* `testkube_testworkflow_executions_count` - The total number of test workflow executions.
* `testkube_test_creations_count` - The total number of tests created by type events.
* `testkube_testsuite_creations_count` - The total number of test suites created events.
* `testkube_test_updates_count` - The total number of tests updated by type events.
* `testkube_testsuite_updates_count` - The total number of test suites updated events.
* `testkube_testtriggers_creations_count` - The total number of test trigger created events.
* `testkube_testtriggers_updates_count` - The total number of test trigger updated events.
* `testkube_testtriggers_deletes_count` - The total number of test trigger deleted events.
* `testkube_testtriggers_bulk_updates_count` - The total number of test trigger bulk update events.
* `testkube_testtriggers_bulk_deletes_count` - The total number of test trigger bulk delete events.
* `testkube_test_aborts_count` - The total number of tests aborted by type events.
* `testkube_testsuite_aborts_count` - The total number of test suites aborted by type events.
* `testkube_testworkflow_aborts_count` - The total number of test workflows aborted by type events.
* `testkube_test_executions_duration_ms`- The duration of test executions.
* `testkube_testsuite_executions_duration_ms`- The duration of test suite executions.
* `testkube_testworkflow_executions_duration_ms`- The duration of test workflow executions.
* `testkube_testtrigger_event_count` - The total number of test trigger events.
* `testkube_webhook_executions_count` - The total number of webhook executions.
* `testkube_testworkflow_execution_steps_duration_ms` - The duration of test workflow execution steps.
* `testkube_testworkflow_execution_steps_count` - The total number of test workflow execution steps.
* `testkube_testworkflow_execution_steps_start_time_ms` - The start time of test workflow execution steps.
* `testkube_testworkflow_execution_steps_finish_time_ms` - The finish time of test workflow execution steps.

Note: as the metrics also include labels with the associated test name (see below), no metrics are produced unless some tests were run since 
the last api-server restart 

```
# HELP testkube_test_executions_count The total number of test executions
# TYPE testkube_test_executions_count counter
testkube_test_executions_count{name="test-website",result="passed",type="curl-container/test"} 1
```

## Installation

If a Prometheus operator is not installed, please follow the steps here: [https://grafana.com/docs/grafana-cloud/quickstart/prometheus_operator/](https://grafana.com/docs/grafana-cloud/quickstart/prometheus_operator/).

Then, add a `ServiceMonitor` custom resource to your cluster which will scrape metrics from our
Testkube API server:

```yaml
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: testkube-api-server
  labels:
    app: prometheus
spec:
  endpoints:
  - interval: 10s
    port: http
  selector:
    matchLabels:
      app.kubernetes.io/name: api-server
```

If you're installing Testkube manually with our Helm chart, you can pass the `prometheus.enabled` value to the install command.

## Grafana Dashboard

To use the Grafana dashboard, import this JSON definition:

[https://github.com/kubeshop/testkube/blob/main/assets/grafana-dasboard.json](https://github.com/kubeshop/testkube/blob/main/assets/grafana-dasboard.json)
