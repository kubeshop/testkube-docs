# HTTP Event Triggers

HTTP Event Triggers let you run Test Workflows when the response of an HTTP endpoint changes. They are useful when the thing you want to react to is exposed over HTTP rather than in a Git repository or a Kubernetes resource.

Typical use cases include:

- running smoke workflows when a service reports a new version on its `/version` or health endpoint
- re-running workflows when a published file, feed, or API response is updated
- reacting to an `ETag` or `Last-Modified` change of an external resource

:::note
HTTP Event Triggers require Runner version `2.15.0` or later.
:::

## How HTTP Event Triggers work

For each trigger, Testkube polls the configured URL on a configurable interval (1 minute by default). On each poll, it reads the part of the response selected by `select`: a field of the JSON body, a response header, or, by default, a SHA-256 hash of the whole body. When that value differs from the one seen on the previous poll, it emits an `http-changed` event and runs the selected workflow.

This guide shows how to configure HTTP-based content triggers using the `contentSelector.http` fields.

## TestTrigger: watch a JSON field (`select.jsonPath`)

```yaml
apiVersion: tests.testkube.io/v1
kind: TestTrigger
metadata:
  name: trigger-on-version-change
  namespace: testkube
spec:
  resource: content
  event: http-changed
  contentSelector:
    http:
      url: https://api.example.com/version
      interval: 1m
      select:
        jsonPath: .data.version
  action: run
  execution: testworkflow
  testSelector:
    name: my-workflow
    namespace: testkube
```

## TestTrigger: watch a response header (`select.header`)

```yaml
apiVersion: tests.testkube.io/v1
kind: TestTrigger
metadata:
  name: trigger-on-etag-change
  namespace: testkube
spec:
  resource: content
  event: http-changed
  contentSelector:
    http:
      url: https://downloads.example.com/test-data.csv
      method: HEAD
      select:
        header: ETag
  action: run
  execution: testworkflow
  testSelector:
    name: my-workflow
    namespace: testkube
```

## TestTrigger: send a request body and use credentials from Secret

```yaml
apiVersion: tests.testkube.io/v1
kind: TestTrigger
metadata:
  name: trigger-on-graphql-change
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
      headersFrom:
        - name: Authorization
          valueFrom:
            secretKeyRef:
              name: api-token
              key: authorization
      body: '{"query": "{ release { version } }"}'
      interval: 5m
      timeout: 20s
      expectedStatus:
        - 200
      select:
        jsonPath: .data.release.version
  action: run
  execution: testworkflow
  testSelector:
    name: my-workflow
    namespace: testkube
```

## Notes

- Use `resource: content` with `event: http-changed`. A `content` trigger watches either `contentSelector.git` or `contentSelector.http`, not both.
- `url` is required and must be an absolute `http` or `https` URL.
- `method` (example: `POST`) is one of `GET`, `HEAD`, `POST`, `PUT`, `PATCH`, `DELETE` or `OPTIONS`. Default: `GET`.
- `select.jsonPath` (example: `.data.version`) is a dot-path into the JSON body. An object or array is compared by its JSON encoding.
- `select.header` (example: `ETag`) watches the value of a response header.
- Set at most one of `select.jsonPath` and `select.header`. Without `select`, the whole body is watched through its SHA-256 hash.
- `interval` (example: `5m`) is the time between polls. Default: `1m`, minimum: `10s`.
- `timeout` (example: `20s`) is the timeout of a single request. Default: `10s`.
- `expectedStatus` (example: `[200, 204]`) lists the status codes of a successful poll. Default: `200`.
- `insecureSkipVerify: true` skips the verification of the server's TLS certificate.
- The first successful poll only records the value to compare later polls against. Set `fireOnFirstObservation: true` to run the workflow on the first poll too.
- A failed poll (a request error, a timeout, or a status code not in `expectedStatus`) is never treated as a change.
- If running the workflow fails, the change is retried on the next poll.
- Redirects are followed only within the origin of `url`, so headers read from a Secret are never sent to another host.
- After an API server restart or a leader change, each trigger records a new baseline, so changes that happened while it was not polling are not replayed.
- Prefer `headersFrom` (with `secretKeyRef` or `configMapKeyRef`) over `headers` for credentials. Values in `headers` are stored in plain text in the trigger spec.
- [Match conditions](/articles/test-triggers#match-conditions) are evaluated against the poll result, which has the fields `value`, `statusCode` and `url`. The previous result has the field `value`.
