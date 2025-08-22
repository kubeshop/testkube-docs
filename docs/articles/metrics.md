# Prometheus Metrics

The Testkube API Server in the [Testkube Agent](/articles/install/standalone-agent) exposes a `/metrics` endpoint that can be consumed by Prometheus, Grafana, etc. 

Depending on if the Agent is deployed in Standalone or Connected mode, it will expose metrics either for local executions or 
for executions performed in the associated Environment.

Currently, the following metrics are exposed:

* `testkube_test_executions_count` - The total number of test executions.
    * `type` - test type
    * `name` - test name
    * `result` - test execution result
    * `labels` - test labels
    * `test_uri` - test URI
* `testkube_testsuite_executions_count` - The total number of test suite executions.
    * `name` - test suite name
    * `result` - test suite execution result
    * `labels` - test suite labels
    * `testsuite_uri` - test suite URI
* `testkube_testworkflow_executions_count` - The total number of test workflow executions.
    * `name` - workflow name
    * `result` - workflow execution result
    * `labels` - workflow labels
    * `testworkflow_uri` - workflow URI
    * `triggered_by` - workflow trigger source
    * `tags` - workflow tags
* `testkube_test_creations_count` - The total number of tests created by type events.
    * `type` - test type
    * `result` - creation result
* `testkube_testsuite_creations_count` - The total number of test suites created events.
    * `result` - creation result
* `testkube_test_updates_count` - The total number of tests updated by type events.
    * `type` - test type
    * `result` - update result
* `testkube_testsuite_updates_count` - The total number of test suites updated events.
    * `result` - update result
* `testkube_testtriggers_creations_count` - The total number of test trigger created events.
    * `result` - creation result
* `testkube_testtriggers_updates_count` - The total number of test trigger updated events.
    * `result` - update result
* `testkube_testtriggers_deletes_count` - The total number of test trigger deleted events.
    * `result` - deletion result
* `testkube_testtriggers_bulk_updates_count` - The total number of test trigger bulk update events.
    * `result` - bulk update result
* `testkube_testtriggers_bulk_deletes_count` - The total number of test trigger bulk delete events.
    * `result` - bulk deletion result
* `testkube_test_aborts_count` - The total number of tests aborted by type events.
    * `type` - test type
    * `result` - test execution result
* `testkube_testsuite_aborts_count` - The total number of test suites aborted by type events.
    * `result` - test suite execution result
* `testkube_testworkflow_aborts_count` - The total number of test workflows aborted by type events.
    * `result` - workflow execution result
* `testkube_test_executions_duration_ms`- The duration of test executions.
    * `type` - test type
    * `name` - test name
    * `result` - test execution result
    * `labels` - test labels
    * `test_uri` - test URI
* `testkube_testsuite_executions_duration_ms`- The duration of test suite executions.
    * `name` - test suite name
    * `result` - test suite execution result
    * `labels` - test suite labels
    * `testsuite_uri` - test suite URI
* `testkube_testworkflow_executions_duration_ms`- The duration of test workflow executions.
    * `name` - workflow name
    * `result` - workflow execution result
    * `labels` - workflow labels
    * `testworkflow_uri` - workflow URI
    * `triggered_by` - workflow trigger source
    * `tags` - workflow tags* 
* `testkube_testtrigger_event_count` - The total number of test trigger events.
    * `name` - test trigger name
    * `resource` - related resource
    * `eventType` - type of event (create, update, delete, etc.)
    * `causes` - event causes
* `testkube_webhook_executions_count` - The total number of webhook executions.
    * `name` - webhook name
    * `eventType` - webhook event type
    * `result` - webhook execution result
* `testkube_testworkflow_execution_steps_duration_ms` - The duration of test workflow execution steps.
    * `workflow_name` - workflow name
    * `step_name` - execution step name
    * `status` - execution step status
* `testkube_testworkflow_execution_steps_count` - The total number of test workflow execution steps.
    * `workflow_name` - workflow name
    * `step_name` - execution step name
    * `status` - execution step status
* `testkube_testworkflow_execution_steps_start_time_ms` - The start time of test workflow execution steps.
    * `workflow_name` - workflow name
    * `step_name` - execution step name
    * `status` - execution step status
* `testkube_testworkflow_execution_steps_finish_time_ms` - The finish time of test workflow execution steps.
    * `workflow_name` - workflow name
    * `step_name` - execution step name
    * `status` - execution step status
* `testkube_testworkflow_creations_count` - The total number of test workflows created by type events.
    * `result` - creation result
* `testkube_testworkflow_updates_count` - The total number of test workflows updated by type events.
    * `result` - update result
* `testkube_testworkflow_deletes_count` - The total number of test workflows deleted events.
    * `result` - deletion result
* `testkube_testworkflowtemplate_creations_count` - The total number of test workflow template created by type events.
    * `result` - creation result
* `testkube_testworkflowtemplate_updates_count` - The total number of test workflow template updated by type events.
    * `result` - update result
* `testkube_testworkflowtemplate_deletes_count` - The total number of test workflow template deleted events.
    * `result` - deletion result

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
