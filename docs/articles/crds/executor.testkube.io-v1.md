<head>
  <meta name="og:type" content="legacy-doc" />
</head>

# API Reference

## Packages
- [executor.testkube.io/v1](#executortestkubeiov1)


## executor.testkube.io/v1

Package v1 contains API Schema definitions for the executor v1 API group

### Resource Types
- [Executor](#executor)
- [ExecutorList](#executorlist)
- [Webhook](#webhook)
- [WebhookList](#webhooklist)



### EventType

_Underlying type:_ _string_



_Validation:_
- Enum: [start-test end-test-success end-test-failed end-test-aborted end-test-timeout become-test-up become-test-down become-test-failed become-test-aborted become-test-timeout start-testsuite end-testsuite-success end-testsuite-failed end-testsuite-aborted end-testsuite-timeout become-testsuite-up become-testsuite-down become-testsuite-failed become-testsuite-aborted become-testsuite-timeout start-testworkflow queue-testworkflow end-testworkflow-success end-testworkflow-failed end-testworkflow-aborted become-testworkflow-up become-testworkflow-down become-testworkflow-failed become-testworkflow-aborted]

_Appears in:_
- [WebhookSpec](#webhookspec)

| Field | Description |
| --- | --- |
| `start-test` |  |
| `end-test-success` |  |
| `end-test-failed` |  |
| `end-test-aborted` |  |
| `end-test-timeout` |  |
| `become-test-up` |  |
| `become-test-down` |  |
| `become-test-failed` |  |
| `become-test-aborted` |  |
| `become-test-timeout` |  |
| `start-testsuite` |  |
| `end-testsuite-success` |  |
| `end-testsuite-failed` |  |
| `end-testsuite-aborted` |  |
| `end-testsuite-timeout` |  |
| `become-testsuite-up` |  |
| `become-testsuite-down` |  |
| `become-testsuite-failed` |  |
| `become-testsuite-aborted` |  |
| `become-testsuite-timeout` |  |
| `start-testworkflow` |  |
| `queue-testworkflow` |  |
| `end-testworkflow-success` |  |
| `end-testworkflow-failed` |  |
| `end-testworkflow-aborted` |  |
| `become-testworkflow-up` |  |
| `become-testworkflow-down` |  |
| `become-testworkflow-failed` |  |
| `become-testworkflow-aborted` |  |


### Executor



Executor is the Schema for the executors API



_Appears in:_
- [ExecutorList](#executorlist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `executor.testkube.io/v1` | | |
| `kind` _string_ | `Executor` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `spec` _[ExecutorSpec](#executorspec)_ |  |  |  |


### ExecutorList



ExecutorList contains a list of Executor





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `executor.testkube.io/v1` | | |
| `kind` _string_ | `ExecutorList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[Executor](#executor) array_ |  |  |  |


### ExecutorMeta



Executor meta data



_Appears in:_
- [ExecutorSpec](#executorspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `iconURI` _string_ | URI for executor icon |  |  |
| `docsURI` _string_ | URI for executor docs |  |  |
| `tooltips` _object (keys:string, values:string)_ | executor tooltips |  |  |


### ExecutorSpec



ExecutorSpec defines the desired state of Executor



_Appears in:_
- [Executor](#executor)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `types` _string array_ | Types defines what types can be handled by executor e.g. "postman/collection", ":curl/command" etc |  |  |
| `executor_type` _[ExecutorType](#executortype)_ | ExecutorType one of "rest" for rest openapi based executors or "job" which will be default runners for testkube<br />or "container" for container executors |  | Enum: [job container] <br /> |
| `uri` _string_ | URI for rest based executors |  |  |
| `image` _string_ | Image for kube-job |  |  |
| `args` _string array_ | executor binary arguments |  |  |
| `command` _string array_ | executor default binary command |  |  |
| `imagePullSecrets` _[LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core) array_ | container executor default image pull secrets |  |  |
| `features` _[Feature](#feature) array_ | Features list of possible features which executor handles |  | Enum: [artifacts junit-report] <br /> |
| `content_types` _[ScriptContentType](#scriptcontenttype) array_ | ContentTypes list of handled content types |  | Enum: [string file-uri git-file git-dir git] <br /> |
| `job_template` _string_ | Job template to launch executor |  |  |
| `jobTemplateReference` _string_ | name of the template resource |  |  |
| `meta` _[ExecutorMeta](#executormeta)_ | Meta data about executor |  |  |
| `slaves` _[SlavesMeta](#slavesmeta)_ | Slaves data to run test in distributed environment |  |  |
| `useDataDirAsWorkingDir` _boolean_ | use data dir as working dir for executor |  |  |




### ExecutorType

_Underlying type:_ _string_



_Validation:_
- Enum: [job container]

_Appears in:_
- [ExecutorSpec](#executorspec)

| Field | Description |
| --- | --- |
| `job` |  |
| `container` |  |


### Feature

_Underlying type:_ _string_



_Validation:_
- Enum: [artifacts junit-report]

_Appears in:_
- [ExecutorSpec](#executorspec)

| Field | Description |
| --- | --- |
| `artifacts` |  |
| `junit-report` |  |




### ScriptContentType

_Underlying type:_ _string_



_Validation:_
- Enum: [string file-uri git-file git-dir git]

_Appears in:_
- [ExecutorSpec](#executorspec)

| Field | Description |
| --- | --- |
| `string` |  |
| `file-uri` |  |
| `git-file` | Deprecated: use git instead<br /> |
| `git-dir` | Deprecated: use git instead<br /> |
| `git` |  |


### SlavesMeta







_Appears in:_
- [ExecutorSpec](#executorspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `image` _string_ |  |  |  |


### Webhook



Webhook is the Schema for the webhooks API



_Appears in:_
- [WebhookList](#webhooklist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `executor.testkube.io/v1` | | |
| `kind` _string_ | `Webhook` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `spec` _[WebhookSpec](#webhookspec)_ |  |  |  |


### WebhookList



WebhookList contains a list of Webhook





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `executor.testkube.io/v1` | | |
| `kind` _string_ | `WebhookList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[Webhook](#webhook) array_ |  |  |  |


### WebhookSpec



WebhookSpec defines the desired state of Webhook



_Appears in:_
- [Webhook](#webhook)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `uri` _string_ | Uri is address where webhook should be made (golang template supported) |  |  |
| `events` _[EventType](#eventtype) array_ | Events declare list if events on which webhook should be called |  | Enum: [start-test end-test-success end-test-failed end-test-aborted end-test-timeout become-test-up become-test-down become-test-failed become-test-aborted become-test-timeout start-testsuite end-testsuite-success end-testsuite-failed end-testsuite-aborted end-testsuite-timeout become-testsuite-up become-testsuite-down become-testsuite-failed become-testsuite-aborted become-testsuite-timeout start-testworkflow queue-testworkflow end-testworkflow-success end-testworkflow-failed end-testworkflow-aborted become-testworkflow-up become-testworkflow-down become-testworkflow-failed become-testworkflow-aborted] <br /> |
| `selector` _string_ | Labels to filter for tests and test suites |  |  |
| `payloadObjectField` _string_ | will load the generated payload for notification inside the object |  |  |
| `payloadTemplate` _string_ | golang based template for notification payload |  |  |
| `payloadTemplateReference` _string_ | name of the template resource |  |  |
| `headers` _object (keys:string, values:string)_ | webhook headers (golang template supported) |  |  |
| `disabled` _boolean_ | Disabled will disable the webhook |  |  |
| `onStateChange` _boolean_ | OnStateChange will trigger the webhook only when the result of the current execution differs from the previous result of the same test/test suite/workflow<br />Deprecated: field is not used |  |  |




