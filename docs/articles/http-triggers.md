# HTTP Content Triggers

HTTP Content Triggers let you run Test Workflows when the response of an HTTP endpoint changes. They are useful when the thing you want to react to is not a Kubernetes resource or a Git repository, but something an HTTP API reports — a deployed version, a feature flag, a release feed, or a document you can fetch.

Typical use cases include:

- running smoke or regression workflows when the version reported by a service's `/version` or `/info` endpoint changes
- re-running contract tests when an OpenAPI or JSON schema document published by another team is updated
- validating a release as soon as a package registry, artifact store or release feed advertises a new version
- reacting to configuration or feature flag changes exposed through an HTTP or GraphQL API

## How HTTP Content Triggers work

For each trigger, Testkube polls the configured URL on a configurable interval (1 minute by default). On each poll it sends the request, checks the response status, and extracts the watched value from the response:

- the field selected by `select.jsonPath`, when set,
- the response header named by `select.header`, when set,
- otherwise, a SHA-256 hash of the whole response body.

It compares that value with the value it observed on the previous poll, and when it differs it emits a synthetic `http-changed` content event and runs the selected workflow.

The first successful poll only records a baseline to compare later polls against — it does not run anything unless `fireOnFirstObservation` is set. A poll that fails is never treated as a change: the trigger keeps the last value it observed and tries again on the next poll. Any poll fails on a network error, a timeout or an unexpected status code. What else fails depends on what is watched:

- with `select.jsonPath`, a body that is not JSON or does not contain the field,
- with `select.header`, a response without that header.

Without `select` any response body can be watched, including plain text and binary content, and a header can be watched whatever the body holds — so neither needs a JSON endpoint.

Polling runs on the leader instance of the Testkube agent, so a trigger is polled once even when several agent replicas are running.

This guide shows how to configure HTTP content triggers using the `contentSelector.http` fields.

## TestTrigger: watch the whole response body

Without `select`, the trigger fires whenever the response body changes in any way.

```yaml
apiVersion: tests.testkube.io/v1
kind: TestTrigger
metadata:
  name: trigger-on-schema-change
  namespace: testkube
spec:
  resource: content
  event: http-changed
  contentSelector:
    http:
      url: https://api.example.com/openapi.json
      interval: 5m
  action: run
  execution: testworkflow
  testSelector:
    name: contract-tests
    namespace: testkube
```

## TestTrigger: watch a JSON field (`select.jsonPath`)

Use `select.jsonPath` to watch a single field of a JSON response, so that unrelated parts of the response (timestamps, counters) do not fire the trigger.

```yaml
apiVersion: tests.testkube.io/v1
kind: TestTrigger
metadata:
  name: trigger-on-new-version
  namespace: testkube
spec:
  resource: content
  event: http-changed
  contentSelector:
    http:
      url: https://my-service.example.com/info
      interval: 30s
      select:
        jsonPath: .build.version
  action: run
  execution: testworkflow
  testSelector:
    name: smoke-tests
    namespace: testkube
```

With a response such as `{"build": {"version": "1.4.2", "time": "..."}}`, the trigger fires when `build.version` changes and ignores changes to `build.time`.

## TestTrigger: watch a response header (`select.header`)

Many servers send an `ETag` or `Last-Modified` header that changes whenever the resource does. Watching it with a `HEAD` request avoids downloading the body on every poll.

```yaml
apiVersion: tests.testkube.io/v1
kind: TestTrigger
metadata:
  name: trigger-on-dataset-update
  namespace: testkube
spec:
  resource: content
  event: http-changed
  contentSelector:
    http:
      url: https://data.example.com/datasets/customers.csv
      method: HEAD
      interval: 10m
      select:
        header: ETag
  action: run
  execution: testworkflow
  testSelector:
    name: data-validation
    namespace: testkube
```

## TestTrigger: query a POST or GraphQL endpoint (`body`)

Set `method` and `body` to poll an endpoint that expects a request body, such as a GraphQL API.

```yaml
apiVersion: tests.testkube.io/v1
kind: TestTrigger
metadata:
  name: trigger-on-graphql-release
  namespace: testkube
spec:
  resource: content
  event: http-changed
  contentSelector:
    http:
      url: https://api.example.com/graphql
      method: POST
      headers:
        Content-Type: application/json
      body: '{"query": "{ latestRelease { tag } }"}'
      select:
        jsonPath: .data.latestRelease.tag
  action: run
  execution: testworkflow
  testSelector:
    name: release-tests
    namespace: testkube
```

## TestTrigger: use credentials from a Secret (`headersFrom`)

Use `headersFrom` to send headers whose values are read from a Secret or ConfigMap in the trigger's namespace. The value is read on every poll, so rotating the Secret takes effect without changing the trigger.

```yaml title="api-token-secret.yaml"
apiVersion: v1
kind: Secret
metadata:
  name: status-api-token
  namespace: testkube
type: Opaque
stringData:
  authorization: Bearer my-api-token
```

```yaml title="trigger.yaml"
apiVersion: tests.testkube.io/v1
kind: TestTrigger
metadata:
  name: trigger-on-private-api
  namespace: testkube
spec:
  resource: content
  event: http-changed
  contentSelector:
    http:
      url: https://internal.example.com/api/v1/status
      headers:
        Accept: application/json
      headersFrom:
        - name: Authorization
          valueFrom:
            secretKeyRef:
              name: status-api-token
              key: authorization
      select:
        jsonPath: .deployment.revision
  action: run
  execution: testworkflow
  testSelector:
    name: smoke-tests
    namespace: testkube
```

:::warning
Values in `headers` are stored in plain text in the TestTrigger spec, so they can be read by anyone who can read the trigger. Use `headersFrom` for tokens, API keys and other credentials.
:::

## TestTrigger: filter on the value and pass it to the workflow

The `http-changed` event carries the observed response as its object, which `match[]` conditions and action parameters can read:

| Field         | Description                                                                    |
| ------------- | ------------------------------------------------------------------------------ |
| `.value`      | the watched value: the selected JSON field, the header value, or the body hash |
| `.statusCode` | the status code of the response                                                |
| `.url`        | the polled URL                                                                 |

The previous event carries only `.value`, holding the value from the previous poll, so the `changed`, `changed_to` and `changed_from` operators can be used with `event: http-changed`.

Unlike other triggers, [match conditions](/articles/test-triggers#match-conditions) on an HTTP content trigger do not require pinning a listener, because they match the polled response rather than a Kubernetes object.

The trigger below runs the workflow only when the reported status becomes `ready`, and passes the polled values to the workflow through [action parameters](/articles/test-triggers#action-parameters):

```yaml
apiVersion: tests.testkube.io/v1
kind: TestTrigger
metadata:
  name: trigger-on-environment-ready
  namespace: testkube
spec:
  resource: content
  event: http-changed
  contentSelector:
    http:
      url: https://staging.example.com/health
      interval: 15s
      select:
        jsonPath: .status
  match:
    - path: .value
      operator: changed_to
      value: ready
  action: run
  execution: testworkflow
  testSelector:
    name: e2e-tests
    namespace: testkube
  actionParameters:
    config:
      status: "{{ .value }}"
      endpoint: jsonpath={.url}
```

The workflow receives them as [configuration parameters](/articles/test-workflows-examples-configuration):

```yaml
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: e2e-tests
  namespace: testkube
spec:
  config:
    status:
      type: string
      default: ""
    endpoint:
      type: string
      default: ""
  steps:
    - name: Show the observed value
      shell: echo "{{ config.endpoint }} reported {{ config.status }}"
```

Action parameters of a TestTrigger are resolved against the event object (`.value`, `.statusCode`, `.url`), either as Go templates such as `{{ .value }}` or as JSONPath such as `jsonpath={.value}`. The previous value is available to `match[]` conditions only.

## Notes

- An HTTP content trigger uses `resource: content` with `event: http-changed`, and `http-changed` is its only event. To list it under `events`, the list may contain `http-changed` and nothing else (see [Events](/articles/test-triggers#events)).
- A `content` trigger watches exactly one source: set either `contentSelector.http` or [`contentSelector.git`](/articles/git-triggers), not both.
- `url` (required) must be an absolute `http` or `https` URL.
- `method` is one of `GET`, `HEAD`, `POST`, `PUT`, `PATCH`, `DELETE`, `OPTIONS`; `GET` by default.
- `headers` is a map of request headers sent with every poll, stored in plain text in the trigger.
- `headersFrom` is a list of request headers whose values are read from a Secret (`valueFrom.secretKeyRef`) or ConfigMap (`valueFrom.configMapKeyRef`) in the trigger's namespace on every poll. Each entry needs a `name` and one of the two references. If the Secret, ConfigMap or key is missing, the poll fails, unless the reference sets `optional: true`, in which case the header is not sent.
- `body` is sent with every request, for example for a `POST` or GraphQL endpoint.
- `interval` is the time between polls, `1m` by default; it must be at least `10s`.
- `timeout` is the timeout of one request, `10s` by default.
- `insecureSkipVerify: true` disables verification of the server's TLS certificate. Use it only for endpoints with self-signed certificates you trust, as it makes the request open to interception.
- `expectedStatus` lists the status codes of a successful poll, `[200]` by default. A response with any other status code is a failed poll, never a change.
- `select` chooses what is watched, and accepts at most one of:
  - `jsonPath` — a dot-path into a JSON response body, such as `.data.version`. Array indexing is not supported. A string, number, boolean or `null` is compared as text; an object or array is compared by its JSON encoding with sorted keys, so reordering its keys is not a change.
  - `header` — the name of a response header, such as `ETag`. A header sent several times is compared by its values joined with `, `.
  - When `select` is omitted, the whole response body is compared by its SHA-256 hash, and `.value` holds that hash as `sha256:<hex>`.
- `fireOnFirstObservation: true` fires the trigger on the first successful poll instead of only recording a baseline. That first event has no previous value, so `changed`, `changed_to` and `changed_from` conditions do not pass on it.
- Responses larger than 10 MiB are failed polls.
- Redirects are followed only within the scheme and host of the configured `url` (up to 10), so headers read from a Secret are never forwarded to another host. A redirect to another origin is a failed poll.
- The last observed value is kept in memory only. After an agent restart, a leader change, or any change to the trigger's `contentSelector.http`, the next successful poll records a new baseline, and changes that happened in the meantime are not replayed.
- If the workflow cannot be scheduled after a change is detected, the change is retried on the next poll instead of being dropped.
- Disabled triggers are not polled.
- Like the other content triggers, HTTP content triggers do not support `conditionSpec.conditions` or `probeSpec.probes`.
