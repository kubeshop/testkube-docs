# CRDs Reference

CRDs (Custom Resource Definitions) reference. Read more Testkube's CRDs in [Testkube Custom Resources](./crds.md) section.

## Packages
- [executor.testkube.io/v1](#executortestkubeiov1)
- [tests.testkube.io/v1](#teststestkubeiov1)
- [tests.testkube.io/v2](#teststestkubeiov2)
- [tests.testkube.io/v3](#teststestkubeiov3)
- [testworkflows.testkube.io/v1](#testworkflowstestkubeiov1)


## executor.testkube.io/v1

Package v1 contains API Schema definitions for the executor v1 API group

### Resource Types
- [Executor](#executor)
- [ExecutorList](#executorlist)
- [Webhook](#webhook)
- [WebhookList](#webhooklist)



#### EventType

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


#### Executor



Executor is the Schema for the executors API



_Appears in:_
- [ExecutorList](#executorlist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `executor.testkube.io/v1` | | |
| `kind` _string_ | `Executor` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `spec` _[ExecutorSpec](#executorspec)_ |  |  |  |


#### ExecutorList



ExecutorList contains a list of Executor





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `executor.testkube.io/v1` | | |
| `kind` _string_ | `ExecutorList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[Executor](#executor) array_ |  |  |  |


#### ExecutorMeta



Executor meta data



_Appears in:_
- [ExecutorSpec](#executorspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `iconURI` _string_ | URI for executor icon |  |  |
| `docsURI` _string_ | URI for executor docs |  |  |
| `tooltips` _object (keys:string, values:string)_ | executor tooltips |  |  |


#### ExecutorSpec



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




#### ExecutorType

_Underlying type:_ _string_



_Validation:_
- Enum: [job container]

_Appears in:_
- [ExecutorSpec](#executorspec)

| Field | Description |
| --- | --- |
| `job` |  |
| `container` |  |


#### Feature

_Underlying type:_ _string_



_Validation:_
- Enum: [artifacts junit-report]

_Appears in:_
- [ExecutorSpec](#executorspec)

| Field | Description |
| --- | --- |
| `artifacts` |  |
| `junit-report` |  |




#### ScriptContentType

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


#### SlavesMeta







_Appears in:_
- [ExecutorSpec](#executorspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `image` _string_ |  |  |  |


#### Webhook



Webhook is the Schema for the webhooks API



_Appears in:_
- [WebhookList](#webhooklist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `executor.testkube.io/v1` | | |
| `kind` _string_ | `Webhook` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `spec` _[WebhookSpec](#webhookspec)_ |  |  |  |


#### WebhookList



WebhookList contains a list of Webhook





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `executor.testkube.io/v1` | | |
| `kind` _string_ | `WebhookList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[Webhook](#webhook) array_ |  |  |  |


#### WebhookSpec



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





## tests.testkube.io/v1

Package v1 contains API Schema definitions for the testkube v1 API group

### Resource Types
- [Script](#script)
- [ScriptList](#scriptlist)
- [Template](#template)
- [TemplateList](#templatelist)
- [Test](#test)
- [TestExecution](#testexecution)
- [TestExecutionList](#testexecutionlist)
- [TestList](#testlist)
- [TestSource](#testsource)
- [TestSourceList](#testsourcelist)
- [TestSuite](#testsuite)
- [TestSuiteExecution](#testsuiteexecution)
- [TestSuiteExecutionList](#testsuiteexecutionlist)
- [TestSuiteList](#testsuitelist)
- [TestTrigger](#testtrigger)
- [TestTriggerList](#testtriggerlist)



#### ArgsModeType

_Underlying type:_ _string_

ArgsModeType defines args mode type

_Validation:_
- Enum: [append override replace]

_Appears in:_
- [Execution](#execution)

| Field | Description |
| --- | --- |
| `append` | ArgsModeTypeAppend for append args mode<br /> |
| `override` | ArgsModeTypeOverride for override args mode<br /> |
| `replace` | ArgsModeTypeReplace for replace args mode<br /> |


#### ArtifactRequest



artifact request body with test artifacts



_Appears in:_
- [Execution](#execution)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `storageClassName` _string_ | artifact storage class name for container executor |  |  |
| `volumeMountPath` _string_ | artifact volume mount path for container executor |  |  |
| `dirs` _string array_ | artifact directories for scraping |  |  |
| `masks` _string array_ | regexp to filter scraped artifacts, single or comma separated |  |  |
| `storageBucket` _string_ | artifact bucket storage |  |  |
| `omitFolderPerExecution` _boolean_ | don't use a separate folder for execution artifacts |  |  |
| `sharedBetweenPods` _boolean_ | whether to share volume between pods |  |  |
| `useDefaultStorageClassName` _boolean_ | whether to use default storage class name |  |  |
| `sidecarScraper` _boolean_ | run scraper as pod sidecar container |  |  |




#### EnvReference



Reference to env resource



_Appears in:_
- [ExecutionRequest](#executionrequest)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `reference` _[LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)_ |  |  |  |
| `mount` _boolean_ | whether we shoud mount resource |  |  |
| `mountPath` _string_ | where we shoud mount resource |  |  |
| `mapToVariables` _boolean_ | whether we shoud map to variables from resource |  |  |


#### Execution



test execution



_Appears in:_
- [TestSuiteStepExecutionResult](#testsuitestepexecutionresult)
- [TestSuiteStepExecutionResultV2](#testsuitestepexecutionresultv2)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `id` _string_ | execution id |  |  |
| `testName` _string_ | unique test name (CRD Test name) |  |  |
| `testSuiteName` _string_ | unique test suite name (CRD Test suite name), if it's run as a part of test suite |  |  |
| `testNamespace` _string_ | test namespace |  |  |
| `testType` _string_ | test type e.g. postman/collection |  |  |
| `name` _string_ | execution name |  |  |
| `number` _integer_ | execution number |  |  |
| `envs` _object (keys:string, values:string)_ | Environment variables passed to executor.<br />Deprecated: use Basic Variables instead |  |  |
| `command` _string array_ | executor image command |  |  |
| `args` _string array_ | additional arguments/flags passed to executor binary |  |  |
| `args_mode` _[ArgsModeType](#argsmodetype)_ | usage mode for arguments |  | Enum: [append override replace] <br /> |
| `variables` _object (keys:string, values:[Variable](#variable))_ |  |  |  |
| `isVariablesFileUploaded` _boolean_ | in case the variables file is too big, it will be uploaded to storage |  |  |
| `variablesFile` _string_ | variables file content - need to be in format for particular executor (e.g. postman envs file) |  |  |
| `testSecretUUID` _string_ | test secret uuid |  |  |
| `testSuiteSecretUUID` _string_ | test suite secret uuid, if it's run as a part of test suite |  |  |
| `content` _[TestContent](#testcontent)_ |  |  |  |
| `startTime` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | test start time |  |  |
| `endTime` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | test end time |  |  |
| `duration` _string_ | test duration |  |  |
| `durationMs` _integer_ | test duration in milliseconds |  |  |
| `executionResult` _[ExecutionResult](#executionresult)_ |  |  |  |
| `labels` _object (keys:string, values:string)_ | test and execution labels |  |  |
| `uploads` _string array_ | list of file paths that need to be copied into the test from uploads |  |  |
| `bucketName` _string_ | minio bucket name to get uploads from |  |  |
| `artifactRequest` _[ArtifactRequest](#artifactrequest)_ |  |  |  |
| `preRunScript` _string_ | script to run before test execution |  |  |
| `postRunScript` _string_ | script to run after test execution |  |  |
| `executePostRunScriptBeforeScraping` _boolean_ | execute post run script before scraping (prebuilt executor only) |  |  |
| `sourceScripts` _boolean_ | run scripts using source command (container executor only) |  |  |
| `runningContext` _[RunningContext](#runningcontext)_ |  |  |  |
| `containerShell` _string_ | shell used in container executor |  |  |
| `testExecutionName` _string_ | test execution name started the test execution |  |  |
| `slavePodRequest` _[PodRequest](#podrequest)_ |  |  |  |
| `executionNamespace` _string_ | namespace for test execution (Pro edition only) |  |  |
| `disableWebhooks` _boolean_ | whether webhooks should be disabled for this execution |  |  |


#### ExecutionRequest



test execution request body



_Appears in:_
- [TestExecutionSpec](#testexecutionspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `name` _string_ | test execution custom name |  |  |
| `testSuiteName` _string_ | unique test suite name (CRD Test suite name), if it's run as a part of test suite |  |  |
| `number` _integer_ | test execution number |  |  |
| `executionLabels` _object (keys:string, values:string)_ | test execution labels |  |  |
| `namespace` _string_ | test kubernetes namespace (\"testkube\" when not set) |  |  |
| `variablesFile` _string_ | variables file content - need to be in format for particular executor (e.g. postman envs file) |  |  |
| `isVariablesFileUploaded` _boolean_ |  |  |  |
| `variables` _object (keys:string, values:[Variable](#variable))_ |  |  |  |
| `testSecretUUID` _string_ | test secret uuid |  |  |
| `testSuiteSecretUUID` _string_ | test suite secret uuid, if it's run as a part of test suite |  |  |
| `args` _string array_ | additional executor binary arguments |  |  |
| `argsMode` _[ArgsModeType](#argsmodetype)_ | usage mode for arguments |  | Enum: [append override replace] <br /> |
| `command` _string array_ | executor binary command |  |  |
| `image` _string_ | container executor image |  |  |
| `imagePullSecrets` _[LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core) array_ | container executor image pull secrets |  |  |
| `envs` _object (keys:string, values:string)_ | Environment variables passed to executor.<br />Deprecated: use Basic Variables instead |  |  |
| `secretEnvs` _object (keys:string, values:string)_ | Execution variables passed to executor from secrets.<br />Deprecated: use Secret Variables instead |  |  |
| `sync` _boolean_ | whether to start execution sync or async |  |  |
| `httpProxy` _string_ | http proxy for executor containers |  |  |
| `httpsProxy` _string_ | https proxy for executor containers |  |  |
| `negativeTest` _boolean_ | negative test will fail the execution if it is a success and it will succeed if it is a failure |  |  |
| `activeDeadlineSeconds` _integer_ | Optional duration in seconds the pod may be active on the node relative to<br />StartTime before the system will actively try to mark it failed and kill associated containers.<br />Value must be a positive integer. |  |  |
| `artifactRequest` _[ArtifactRequest](#artifactrequest)_ |  |  |  |
| `jobTemplate` _string_ | job template extensions |  |  |
| `cronJobTemplate` _string_ | cron job template extensions |  |  |
| `preRunScript` _string_ | script to run before test execution |  |  |
| `postRunScript` _string_ | script to run after test execution |  |  |
| `executePostRunScriptBeforeScraping` _boolean_ | execute post run script before scraping (prebuilt executor only) |  |  |
| `sourceScripts` _boolean_ | run scripts using source command (container executor only) |  |  |
| `scraperTemplate` _string_ | scraper template extensions |  |  |
| `envConfigMaps` _[EnvReference](#envreference) array_ | config map references |  |  |
| `envSecrets` _[EnvReference](#envreference) array_ | secret references |  |  |
| `runningContext` _[RunningContext](#runningcontext)_ |  |  |  |
| `slavePodRequest` _[PodRequest](#podrequest)_ |  |  |  |
| `executionNamespace` _string_ | namespace for test execution (Pro edition only) |  |  |
| `disableWebhooks` _boolean_ | whether webhooks should be called on execution |  |  |


#### ExecutionResult



execution result returned from executor



_Appears in:_
- [Execution](#execution)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `errorMessage` _string_ | error message when status is error, separate to output as output can be partial in case of error |  |  |
| `steps` _[ExecutionStepResult](#executionstepresult) array_ | execution steps (for collection of requests) |  |  |
| `reports` _[ExecutionResultReports](#executionresultreports)_ |  |  |  |


#### ExecutionResultReports

_Underlying type:_ _[struct\{Junit string "json:\"junit,omitempty\""}](#struct{junit-string-"json:\"junit,omitempty\""})_





_Appears in:_
- [ExecutionResult](#executionresult)





#### ExecutionStepResult

_Underlying type:_ _[struct\{Name string "json:\"name\""; Duration string "json:\"duration,omitempty\""; Status string "json:\"status\""; AssertionResults []AssertionResult "json:\"assertionResults,omitempty\""}](#struct{name-string-"json:\"name\"";-duration-string-"json:\"duration,omitempty\"";-status-string-"json:\"status\"";-assertionresults-[]assertionresult-"json:\"assertionresults,omitempty\""})_

execution result data



_Appears in:_
- [ExecutionResult](#executionresult)





#### ObjectRef







_Appears in:_
- [SuiteExecution](#suiteexecution)
- [TestSuiteExecutionSpec](#testsuiteexecutionspec)
- [TestSuiteStepExecutionResult](#testsuitestepexecutionresult)
- [TestSuiteStepExecutionResultV2](#testsuitestepexecutionresultv2)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `namespace` _string_ | object kubernetes namespace |  |  |
| `name` _string_ | object name |  |  |


#### PodRequest



pod request body



_Appears in:_
- [Execution](#execution)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `resources` _[PodResourcesRequest](#podresourcesrequest)_ |  |  |  |
| `podTemplate` _string_ | pod template extensions |  |  |
| `podTemplateReference` _string_ | name of the template resource |  |  |


#### PodResourcesRequest

_Underlying type:_ _[struct\{Requests *ResourceRequest "json:\"requests,omitempty\""; Limits *ResourceRequest "json:\"limits,omitempty\""}](#struct{requests-*resourcerequest-"json:\"requests,omitempty\"";-limits-*resourcerequest-"json:\"limits,omitempty\""})_

pod resources request specification



_Appears in:_
- [PodRequest](#podrequest)



#### Repository

_Underlying type:_ _[struct\{Type_ string "json:\"type,omitempty\""; Uri string "json:\"uri,omitempty\""; Branch string "json:\"branch,omitempty\""; Commit string "json:\"commit,omitempty\""; Path string "json:\"path,omitempty\""; UsernameSecret *SecretRef "json:\"usernameSecret,omitempty\""; TokenSecret *SecretRef "json:\"tokenSecret,omitempty\""; CertificateSecret string "json:\"certificateSecret,omitempty\""; WorkingDir string "json:\"workingDir,omitempty\""; AuthType GitAuthType "json:\"authType,omitempty\""}](#struct{type_-string-"json:\"type,omitempty\"";-uri-string-"json:\"uri,omitempty\"";-branch-string-"json:\"branch,omitempty\"";-commit-string-"json:\"commit,omitempty\"";-path-string-"json:\"path,omitempty\"";-usernamesecret-*secretref-"json:\"usernamesecret,omitempty\"";-tokensecret-*secretref-"json:\"tokensecret,omitempty\"";-certificatesecret-string-"json:\"certificatesecret,omitempty\"";-workingdir-string-"json:\"workingdir,omitempty\"";-authtype-gitauthtype-"json:\"authtype,omitempty\""})_

Repository represents VCS repo, currently we're handling Git only



_Appears in:_
- [TestContent](#testcontent)



#### RepositoryParameters



repository parameters for tests in git repositories



_Appears in:_
- [TestContentRequest](#testcontentrequest)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `branch` _string_ | branch/tag name for checkout |  |  |
| `commit` _string_ | commit id (sha) for checkout |  |  |
| `path` _string_ | if needed we can checkout particular path (dir or file) in case of BIG/mono repositories |  |  |
| `workingDir` _string_ | if provided we checkout the whole repository and run test from this directory |  |  |




#### RunningContext



running context for test or test suite execution



_Appears in:_
- [Execution](#execution)
- [SuiteExecution](#suiteexecution)
- [TestSuiteExecutionRequest](#testsuiteexecutionrequest)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `type` _[RunningContextType](#runningcontexttype)_ | One of possible context types |  | Enum: [user-cli user-ui testsuite testtrigger scheduler testexecution testsuiteexecution] <br /> |
| `context` _string_ | Context value depending from its type |  |  |


#### RunningContextType

_Underlying type:_ _string_

RunningContextType defines running context type

_Validation:_
- Enum: [user-cli user-ui testsuite testtrigger scheduler testexecution testsuiteexecution]

_Appears in:_
- [RunningContext](#runningcontext)

| Field | Description |
| --- | --- |
| `user-cli` |  |
| `user-ui` |  |
| `testsuite` |  |
| `testtrigger` |  |
| `scheduler` |  |
| `testexecution` |  |
| `testsuiteexecution` |  |
| `` |  |


#### Script



Script is the Schema for the scripts API



_Appears in:_
- [ScriptList](#scriptlist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v1` | | |
| `kind` _string_ | `Script` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `spec` _[ScriptSpec](#scriptspec)_ |  |  |  |


#### ScriptList



ScriptList contains a list of Script





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v1` | | |
| `kind` _string_ | `ScriptList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[Script](#script) array_ |  |  |  |


#### ScriptSpec



ScriptSpec defines the desired state of Script



_Appears in:_
- [Script](#script)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `type` _string_ | script type |  |  |
| `name` _string_ | script execution custom name |  |  |
| `params` _object (keys:string, values:string)_ | execution params passed to executor |  |  |
| `content` _string_ | script content as string (content depends from executor) |  |  |
| `input-type` _string_ | script content type can be:  - direct content - created from file, - git repo directory checkout in case when test is some kind of project or have more than one file, |  |  |
| `repository` _[Repository](#repository)_ | repository details if exists |  |  |
| `tags` _string array_ |  |  |  |






#### SuiteExecution



SuiteExecutions data



_Appears in:_
- [TestSuiteExecutionStatus](#testsuiteexecutionstatus)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `id` _string_ | execution id |  |  |
| `name` _string_ | execution name |  |  |
| `testSuite` _[ObjectRef](#objectref)_ |  |  |  |
| `envs` _object (keys:string, values:string)_ | Environment variables passed to executor.<br />Deprecated: use Basic Variables instead |  |  |
| `variables` _object (keys:string, values:[Variable](#variable))_ |  |  |  |
| `secretUUID` _string_ | secret uuid |  |  |
| `startTime` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | test start time |  |  |
| `endTime` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | test end time |  |  |
| `duration` _string_ | test duration |  |  |
| `durationMs` _integer_ | test duration in ms |  |  |
| `stepResults` _[TestSuiteStepExecutionResultV2](#testsuitestepexecutionresultv2) array_ | steps execution results |  |  |
| `executeStepResults` _[TestSuiteBatchStepExecutionResult](#testsuitebatchstepexecutionresult) array_ | batch steps execution results |  |  |
| `labels` _object (keys:string, values:string)_ | test suite labels |  |  |
| `runningContext` _[RunningContext](#runningcontext)_ |  |  |  |
| `testSuiteExecutionName` _string_ | test suite execution name started the test suite execution |  |  |
| `disableWebhooks` _boolean_ | whether webhooks should be disabled for this execution |  |  |




#### Template



Template is the Schema for the Templates API



_Appears in:_
- [TemplateList](#templatelist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v1` | | |
| `kind` _string_ | `Template` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `spec` _[TemplateSpec](#templatespec)_ |  |  |  |


#### TemplateList



TemplateList contains a list of Template





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v1` | | |
| `kind` _string_ | `TemplateList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[Template](#template) array_ |  |  |  |


#### TemplateSpec



TemplateSpec defines the desired state of Template



_Appears in:_
- [Template](#template)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `type` _[TemplateType](#templatetype)_ |  |  | Enum: [job container cronjob scraper pvc webhook pod] <br /> |
| `body` _string_ | template body to use |  |  |




#### TemplateType

_Underlying type:_ _string_

TemplateType defines template type by purpose

_Validation:_
- Enum: [job container cronjob scraper pvc webhook pod]

_Appears in:_
- [TemplateSpec](#templatespec)

| Field | Description |
| --- | --- |
| `job` |  |
| `container` |  |
| `cronjob` |  |
| `scraper` |  |
| `pvc` |  |
| `webhook` |  |
| `pod` |  |


#### Test



Test is the Schema for the tests API



_Appears in:_
- [TestList](#testlist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v1` | | |
| `kind` _string_ | `Test` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `spec` _[TestSpec](#testspec)_ |  |  |  |


#### TestContent



TestContent defines test content



_Appears in:_
- [Execution](#execution)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `type` _[TestContentType](#testcontenttype)_ | test type |  | Enum: [string file-uri git-file git-dir git] <br /> |
| `repository` _[Repository](#repository)_ | repository of test content |  |  |
| `data` _string_ | test content body |  |  |
| `uri` _string_ | uri of test content |  |  |


#### TestContentRequest



test content request body



_Appears in:_
- [TestSuiteExecutionRequest](#testsuiteexecutionrequest)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `repository` _[RepositoryParameters](#repositoryparameters)_ |  |  |  |


#### TestContentType

_Underlying type:_ _string_



_Validation:_
- Enum: [string file-uri git-file git-dir git]

_Appears in:_
- [TestContent](#testcontent)

| Field | Description |
| --- | --- |
| `string` |  |
| `file-uri` |  |
| `git-file` | Deprecated: use git instead<br /> |
| `git-dir` | Deprecated: use git instead<br /> |
| `git` |  |


#### TestExecution



TestExecution is the Schema for the testexecutions API



_Appears in:_
- [TestExecutionList](#testexecutionlist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v1` | | |
| `kind` _string_ | `TestExecution` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `spec` _[TestExecutionSpec](#testexecutionspec)_ |  |  |  |


#### TestExecutionList



TestExecutionList contains a list of TestExecution





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v1` | | |
| `kind` _string_ | `TestExecutionList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[TestExecution](#testexecution) array_ |  |  |  |


#### TestExecutionSpec



TestExecutionSpec defines the desired state of TestExecution



_Appears in:_
- [TestExecution](#testexecution)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `test` _[ObjectRef](#objectref)_ |  |  |  |
| `executionRequest` _[ExecutionRequest](#executionrequest)_ |  |  |  |




#### TestList



TestList contains a list of Test





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v1` | | |
| `kind` _string_ | `TestList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[Test](#test) array_ |  |  |  |


#### TestSource



TestSource is the Schema for the testsources API



_Appears in:_
- [TestSourceList](#testsourcelist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v1` | | |
| `kind` _string_ | `TestSource` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `spec` _[TestSourceSpec](#testsourcespec)_ |  |  |  |


#### TestSourceList



TestSourceList contains a list of TestSource





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v1` | | |
| `kind` _string_ | `TestSourceList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[TestSource](#testsource) array_ |  |  |  |


#### TestSourceSpec



TestSourceSpec defines the desired state of TestSource



_Appears in:_
- [TestSource](#testsource)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `type` _[TestSourceType](#testsourcetype)_ |  |  | Enum: [string file-uri git-file git-dir git] <br /> |
| `repository` _[Repository](#repository)_ | repository of test content |  |  |
| `data` _string_ | test content body |  |  |
| `uri` _string_ | uri of test content |  |  |




#### TestSourceType

_Underlying type:_ _string_



_Validation:_
- Enum: [string file-uri git-file git-dir git]

_Appears in:_
- [TestSourceSpec](#testsourcespec)

| Field | Description |
| --- | --- |
| `string` |  |
| `file-uri` |  |
| `git-file` | Deprecated: use git instead<br /> |
| `git-dir` | Deprecated: use git instead<br /> |
| `git` |  |


#### TestSpec



TestSpec defines the desired state of Test



_Appears in:_
- [Test](#test)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `before` _[TestStepSpec](#teststepspec) array_ | Before steps is list of scripts which will be sequentially orchestrated |  |  |
| `steps` _[TestStepSpec](#teststepspec) array_ | Steps is list of scripts which will be sequentially orchestrated |  |  |
| `after` _[TestStepSpec](#teststepspec) array_ | After steps is list of scripts which will be sequentially orchestrated |  |  |
| `repeats` _integer_ |  |  |  |
| `description` _string_ |  |  |  |
| `tags` _string array_ |  |  |  |




#### TestStepDelay







_Appears in:_
- [TestStepSpec](#teststepspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `duration` _integer_ | Duration in ms |  |  |


#### TestStepExecute







_Appears in:_
- [TestStepSpec](#teststepspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `namespace` _string_ |  |  |  |
| `name` _string_ |  |  |  |
| `stopOnFailure` _boolean_ |  |  |  |


#### TestStepSpec



TestStepSpec will of particular type will have config for possible step types



_Appears in:_
- [TestSpec](#testspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `type` _string_ |  |  |  |
| `execute` _[TestStepExecute](#teststepexecute)_ |  |  |  |
| `delay` _[TestStepDelay](#teststepdelay)_ |  |  |  |




#### TestSuite



TestSuite is the Schema for the testsuites API



_Appears in:_
- [TestSuiteList](#testsuitelist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v1` | | |
| `kind` _string_ | `TestSuite` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `spec` _[TestSuiteSpec](#testsuitespec)_ |  |  |  |


#### TestSuiteBatchStep



set of steps run in parallel



_Appears in:_
- [TestSuiteBatchStepExecutionResult](#testsuitebatchstepexecutionresult)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `stopOnFailure` _boolean_ |  |  |  |
| `execute` _[TestSuiteStep](#testsuitestep) array_ |  |  |  |


#### TestSuiteBatchStepExecutionResult



execution result returned from executor



_Appears in:_
- [SuiteExecution](#suiteexecution)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `step` _[TestSuiteBatchStep](#testsuitebatchstep)_ |  |  |  |
| `execute` _[TestSuiteStepExecutionResult](#testsuitestepexecutionresult) array_ |  |  |  |
| `startTime` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | step start time |  |  |
| `endTime` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | step end time |  |  |
| `duration` _string_ | step duration |  |  |


#### TestSuiteExecution



TestSuiteExecution is the Schema for the testsuiteexecutions API



_Appears in:_
- [TestSuiteExecutionList](#testsuiteexecutionlist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v1` | | |
| `kind` _string_ | `TestSuiteExecution` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `spec` _[TestSuiteExecutionSpec](#testsuiteexecutionspec)_ |  |  |  |


#### TestSuiteExecutionList



TestSuiteExecutionList contains a list of TestSuiteExecution





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v1` | | |
| `kind` _string_ | `TestSuiteExecutionList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[TestSuiteExecution](#testsuiteexecution) array_ |  |  |  |


#### TestSuiteExecutionRequest



test suite execution request body



_Appears in:_
- [TestSuiteExecutionSpec](#testsuiteexecutionspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `name` _string_ | test execution custom name |  |  |
| `number` _integer_ | test suite execution number |  |  |
| `namespace` _string_ | test kubernetes namespace (\"testkube\" when not set) |  |  |
| `variables` _object (keys:string, values:[Variable](#variable))_ |  |  |  |
| `secretUUID` _string_ | secret uuid |  |  |
| `labels` _object (keys:string, values:string)_ | test suite labels |  |  |
| `executionLabels` _object (keys:string, values:string)_ | execution labels |  |  |
| `sync` _boolean_ | whether to start execution sync or async |  |  |
| `httpProxy` _string_ | http proxy for executor containers |  |  |
| `httpsProxy` _string_ | https proxy for executor containers |  |  |
| `timeout` _integer_ | duration in seconds the test suite may be active, until its stopped |  |  |
| `contentRequest` _[TestContentRequest](#testcontentrequest)_ |  |  |  |
| `runningContext` _[RunningContext](#runningcontext)_ |  |  |  |
| `cronJobTemplate` _string_ | cron job template extensions |  |  |
| `concurrencyLevel` _integer_ | number of tests run in parallel |  |  |
| `testSuiteExecutionName` _string_ | test suite execution name started the test suite execution |  |  |
| `disableWebhooks` _boolean_ | whether webhooks should be disabled for this execution |  |  |


#### TestSuiteExecutionSpec



TestSuiteExecutionSpec defines the desired state of TestSuiteExecution



_Appears in:_
- [TestSuiteExecution](#testsuiteexecution)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `testSuite` _[ObjectRef](#objectref)_ |  |  |  |
| `executionRequest` _[TestSuiteExecutionRequest](#testsuiteexecutionrequest)_ |  |  |  |




#### TestSuiteList



TestSuiteList contains a list of TestSuite





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v1` | | |
| `kind` _string_ | `TestSuiteList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[TestSuite](#testsuite) array_ |  |  |  |


#### TestSuiteSpec



TestSuiteSpec defines the desired state of TestSuite



_Appears in:_
- [TestSuite](#testsuite)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `before` _[TestSuiteStepSpec](#testsuitestepspec) array_ | Before steps is list of tests which will be sequentially orchestrated |  |  |
| `steps` _[TestSuiteStepSpec](#testsuitestepspec) array_ | Steps is list of tests which will be sequentially orchestrated |  |  |
| `after` _[TestSuiteStepSpec](#testsuitestepspec) array_ | After steps is list of tests which will be sequentially orchestrated |  |  |
| `repeats` _integer_ |  |  |  |
| `description` _string_ |  |  |  |
| `schedule` _string_ | schedule in cron job format for scheduled test execution |  |  |
| `params` _object (keys:string, values:string)_ | DEPRECATED execution params passed to executor |  |  |
| `variables` _object (keys:string, values:[Variable](#variable))_ | Variables are new params with secrets attached |  |  |




#### TestSuiteStep







_Appears in:_
- [TestSuiteBatchStep](#testsuitebatchstep)
- [TestSuiteStepExecutionResult](#testsuitestepexecutionresult)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `test` _string_ | object name |  |  |
| `delay` _string_ | delay duration in time units |  |  |


#### TestSuiteStepDelay



TestSuiteStepDelay contains step delay parameters



_Appears in:_
- [TestSuiteStepSpec](#testsuitestepspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `duration` _integer_ | Duration in ms |  |  |


#### TestSuiteStepDelayV2







_Appears in:_
- [TestSuiteStepV2](#testsuitestepv2)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `duration` _integer_ | delay duration in milliseconds |  |  |


#### TestSuiteStepExecute



TestSuiteStepExecute defines step to be executed



_Appears in:_
- [TestSuiteStepSpec](#testsuitestepspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `namespace` _string_ |  |  |  |
| `name` _string_ |  |  |  |
| `stopOnFailure` _boolean_ |  |  |  |


#### TestSuiteStepExecuteTestV2







_Appears in:_
- [TestSuiteStepV2](#testsuitestepv2)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `namespace` _string_ | object kubernetes namespace |  |  |
| `name` _string_ | object name |  |  |


#### TestSuiteStepExecutionResult



execution result returned from executor



_Appears in:_
- [TestSuiteBatchStepExecutionResult](#testsuitebatchstepexecutionresult)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `step` _[TestSuiteStep](#testsuitestep)_ |  |  |  |
| `test` _[ObjectRef](#objectref)_ |  |  |  |
| `execution` _[Execution](#execution)_ |  |  |  |


#### TestSuiteStepExecutionResultV2



execution result returned from executor



_Appears in:_
- [SuiteExecution](#suiteexecution)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `step` _[TestSuiteStepV2](#testsuitestepv2)_ |  |  |  |
| `test` _[ObjectRef](#objectref)_ |  |  |  |
| `execution` _[Execution](#execution)_ |  |  |  |


#### TestSuiteStepSpec



TestSuiteStepSpec will of particular type will have config for possible step types



_Appears in:_
- [TestSuiteSpec](#testsuitespec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `type` _string_ |  |  |  |
| `execute` _[TestSuiteStepExecute](#testsuitestepexecute)_ |  |  |  |
| `delay` _[TestSuiteStepDelay](#testsuitestepdelay)_ |  |  |  |




#### TestSuiteStepV2







_Appears in:_
- [TestSuiteStepExecutionResultV2](#testsuitestepexecutionresultv2)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `stopTestOnFailure` _boolean_ |  |  |  |
| `execute` _[TestSuiteStepExecuteTestV2](#testsuitestepexecutetestv2)_ |  |  |  |
| `delay` _[TestSuiteStepDelayV2](#testsuitestepdelayv2)_ |  |  |  |


#### TestTrigger



TestTrigger is the Schema for the testtriggers API



_Appears in:_
- [TestTriggerList](#testtriggerlist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v1` | | |
| `kind` _string_ | `TestTrigger` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `spec` _[TestTriggerSpec](#testtriggerspec)_ |  |  |  |


#### TestTriggerAction

_Underlying type:_ _string_

TestTriggerAction defines action for test triggers

_Validation:_
- Enum: [run]

_Appears in:_
- [TestTriggerSpec](#testtriggerspec)

| Field | Description |
| --- | --- |
| `run` |  |


#### TestTriggerConcurrencyPolicy

_Underlying type:_ _string_

TestTriggerConcurrencyPolicy defines concurrency policy for test triggers

_Validation:_
- Enum: [allow forbid replace]

_Appears in:_
- [TestTriggerSpec](#testtriggerspec)

| Field | Description |
| --- | --- |
| `allow` |  |
| `forbid` |  |
| `replace` |  |


#### TestTriggerCondition



TestTriggerCondition is used for definition of the condition for test triggers



_Appears in:_
- [TestTriggerConditionSpec](#testtriggerconditionspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `type` _string_ | test trigger condition |  |  |
| `reason` _string_ | test trigger condition reason |  |  |
| `ttl` _integer_ | duration in seconds in the past from current time when the condition is still valid |  |  |


#### TestTriggerConditionSpec



TestTriggerConditionSpec defines the condition specification for TestTrigger



_Appears in:_
- [TestTriggerSpec](#testtriggerspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `conditions` _[TestTriggerCondition](#testtriggercondition) array_ | list of test trigger conditions |  |  |
| `timeout` _integer_ | duration in seconds the test trigger waits for conditions, until its stopped |  |  |
| `delay` _integer_ | duration in seconds the test trigger waits between condition check |  |  |




#### TestTriggerEvent

_Underlying type:_ _string_

TestTriggerEvent defines event for test triggers

_Validation:_
- Enum: [created modified deleted deployment-scale-update deployment-image-update deployment-env-update deployment-containers-modified event-start-test event-end-test-success event-end-test-failed event-end-test-aborted event-end-test-timeout event-start-testsuite event-end-testsuite-success event-end-testsuite-failed event-end-testsuite-aborted event-end-testsuite-timeout event-queue-testworkflow event-start-testworkflow event-end-testworkflow-success event-end-testworkflow-failed event-end-testworkflow-aborted event-created event-updated event-deleted]

_Appears in:_
- [TestTriggerSpec](#testtriggerspec)

| Field | Description |
| --- | --- |
| `created` |  |
| `modified` |  |
| `deleted` |  |
| `deployment-scale-update` |  |
| `deployment-image-update` |  |
| `deployment-env-update` |  |
| `deployment-containers-modified` |  |
| `event-start-test` |  |
| `event-end-test-success` |  |
| `event-end-test-failed` |  |
| `event-end-test-aborted` |  |
| `event-end-test-timeout` |  |
| `event-start-testsuite` |  |
| `event-end-testsuite-success` |  |
| `event-end-testsuite-failed` |  |
| `event-end-testsuite-aborted` |  |
| `event-end-testsuite-timeout` |  |
| `event-queue-testworkflow` |  |
| `event-start-testworkflow` |  |
| `event-end-testworkflow-success` |  |
| `event-end-testworkflow-failed` |  |
| `event-end-testworkflow-aborted` |  |
| `event-created` |  |
| `event-updated` |  |
| `event-deleted` |  |


#### TestTriggerExecution

_Underlying type:_ _string_

TestTriggerExecution defines execution for test triggers

_Validation:_
- Enum: [test testsuite testworkflow]

_Appears in:_
- [TestTriggerSpec](#testtriggerspec)

| Field | Description |
| --- | --- |
| `test` |  |
| `testsuite` |  |
| `testworkflow` |  |


#### TestTriggerList



TestTriggerList contains a list of TestTrigger





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v1` | | |
| `kind` _string_ | `TestTriggerList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[TestTrigger](#testtrigger) array_ |  |  |  |


#### TestTriggerProbe



TestTriggerProbe is used for definition of the probe for test triggers



_Appears in:_
- [TestTriggerProbeSpec](#testtriggerprobespec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `scheme` _string_ | test trigger condition probe scheme to connect to host, default is http |  |  |
| `host` _string_ | test trigger condition probe host, default is pod ip or service name |  |  |
| `path` _string_ | test trigger condition probe path to check, default is / |  |  |
| `port` _integer_ | test trigger condition probe port to connect |  |  |
| `headers` _object (keys:string, values:string)_ | test trigger condition probe headers to submit |  |  |


#### TestTriggerProbeSpec



TestTriggerProbeSpec defines the probe specification for TestTrigger



_Appears in:_
- [TestTriggerSpec](#testtriggerspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `probes` _[TestTriggerProbe](#testtriggerprobe) array_ | list of test trigger probes |  |  |
| `timeout` _integer_ | duration in seconds the test trigger waits for probes, until its stopped |  |  |
| `delay` _integer_ | duration in seconds the test trigger waits between probes |  |  |


#### TestTriggerResource

_Underlying type:_ _string_

TestTriggerResource defines resource for test triggers

_Validation:_
- Enum: [pod deployment statefulset daemonset service ingress event configmap]

_Appears in:_
- [TestTriggerSpec](#testtriggerspec)

| Field | Description |
| --- | --- |
| `pod` |  |
| `deployment` |  |
| `statefulset` |  |
| `daemonset` |  |
| `service` |  |
| `ingress` |  |
| `event` |  |
| `configmap` |  |


#### TestTriggerSelector



TestTriggerSelector is used for selecting Kubernetes Objects



_Appears in:_
- [TestTriggerSpec](#testtriggerspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `name` _string_ | Name selector is used to identify a Kubernetes Object based on the metadata name |  |  |
| `nameRegex` _string_ | kubernetes resource name regex |  |  |
| `namespace` _string_ | Namespace of the Kubernetes object |  |  |
| `labelSelector` _[LabelSelector](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#labelselector-v1-meta)_ | LabelSelector is used to identify a group of Kubernetes Objects based on their metadata labels |  |  |


#### TestTriggerSpec



TestTriggerSpec defines the desired state of TestTrigger



_Appears in:_
- [TestTrigger](#testtrigger)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `resource` _[TestTriggerResource](#testtriggerresource)_ | For which Resource do we monitor Event which triggers an Action on certain conditions |  | Enum: [pod deployment statefulset daemonset service ingress event configmap] <br /> |
| `resourceSelector` _[TestTriggerSelector](#testtriggerselector)_ | ResourceSelector identifies which Kubernetes Objects should be watched |  |  |
| `event` _[TestTriggerEvent](#testtriggerevent)_ | On which Event for a Resource should an Action be triggered |  | Enum: [created modified deleted deployment-scale-update deployment-image-update deployment-env-update deployment-containers-modified event-start-test event-end-test-success event-end-test-failed event-end-test-aborted event-end-test-timeout event-start-testsuite event-end-testsuite-success event-end-testsuite-failed event-end-testsuite-aborted event-end-testsuite-timeout event-queue-testworkflow event-start-testworkflow event-end-testworkflow-success event-end-testworkflow-failed event-end-testworkflow-aborted event-created event-updated event-deleted] <br /> |
| `conditionSpec` _[TestTriggerConditionSpec](#testtriggerconditionspec)_ | What resource conditions should be matched |  |  |
| `probeSpec` _[TestTriggerProbeSpec](#testtriggerprobespec)_ | What resource probes should be matched |  |  |
| `action` _[TestTriggerAction](#testtriggeraction)_ | Action represents what needs to be executed for selected Execution |  | Enum: [run] <br /> |
| `execution` _[TestTriggerExecution](#testtriggerexecution)_ | Execution identifies for which test execution should an Action be executed |  | Enum: [test testsuite testworkflow] <br /> |
| `testSelector` _[TestTriggerSelector](#testtriggerselector)_ | TestSelector identifies on which Testkube Kubernetes Objects an Action should be taken |  |  |
| `concurrencyPolicy` _[TestTriggerConcurrencyPolicy](#testtriggerconcurrencypolicy)_ | ConcurrencyPolicy defines concurrency policy for selected Execution |  | Enum: [allow forbid replace] <br /> |
| `delay` _[Duration](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#duration-v1-meta)_ | Delay is a duration string which specifies how long should the test be delayed after a trigger is matched |  | Format: duration <br />Type: string <br /> |
| `disabled` _boolean_ | whether test trigger is disabled |  |  |






#### Variable

_Underlying type:_ _Variable_





_Appears in:_
- [Execution](#execution)
- [SuiteExecution](#suiteexecution)
- [TestSuiteExecutionRequest](#testsuiteexecutionrequest)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `type` _string_ | variable type |  |  |
| `name` _string_ | variable name |  |  |
| `value` _string_ | variable string value |  |  |
| `valueFrom` _[EnvVarSource](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#envvarsource-v1-core)_ | or load it from var source |  |  |



## tests.testkube.io/v2

Package v2 contains API Schema definitions for the testkube v2 API group

### Resource Types
- [Script](#script)
- [ScriptList](#scriptlist)
- [Test](#test)
- [TestList](#testlist)
- [TestSuite](#testsuite)
- [TestSuiteList](#testsuitelist)



#### Repository



Repository represents VCS repo, currently we're handling Git only



_Appears in:_
- [TestContent](#testcontent)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `type` _string_ | VCS repository type |  |  |
| `uri` _string_ | uri of content file or git directory |  |  |
| `branch` _string_ | branch/tag name for checkout |  |  |
| `commit` _string_ | commit id (sha) for checkout |  |  |
| `path` _string_ | if needed we can checkout particular path (dir or file) in case of BIG/mono repositories |  |  |
| `username` _string_ | git auth username for private repositories |  |  |
| `token` _string_ | git auth token for private repositories |  |  |




#### RunningContextType

_Underlying type:_ _string_





_Appears in:_
- [RunningContext](#runningcontext)

| Field | Description |
| --- | --- |
| `user-cli` |  |
| `user-ui` |  |
| `testsuite` |  |
| `testtrigger` |  |
| `scheduler` |  |
| `` |  |


#### Script



Script is the Schema for the scripts API



_Appears in:_
- [ScriptList](#scriptlist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v2` | | |
| `kind` _string_ | `Script` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `spec` _[ScriptSpec](#scriptspec)_ |  |  |  |


#### ScriptContent







_Appears in:_
- [ScriptSpec](#scriptspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `type` _string_ | script type |  |  |
| `repository` _[Repository](#repository)_ | repository of script content |  |  |
| `data` _string_ | script content body |  |  |
| `uri` _string_ | uri of script content |  |  |


#### ScriptList



ScriptList contains a list of Script





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v2` | | |
| `kind` _string_ | `ScriptList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[Script](#script) array_ |  |  |  |


#### ScriptSpec



ScriptSpec defines the desired state of Script



_Appears in:_
- [Script](#script)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `type` _string_ | script type |  |  |
| `name` _string_ | script execution custom name |  |  |
| `params` _object (keys:string, values:string)_ | execution params passed to executor |  |  |
| `content` _[ScriptContent](#scriptcontent)_ | script content object |  |  |
| `tags` _string array_ | script tags |  |  |




#### Test



Test is the Schema for the tests API



_Appears in:_
- [TestList](#testlist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v2` | | |
| `kind` _string_ | `Test` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `spec` _[TestSpec](#testspec)_ |  |  |  |


#### TestContent



TestContent defines test content



_Appears in:_
- [TestSpec](#testspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `type` _string_ | test type |  |  |
| `repository` _[Repository](#repository)_ | repository of test content |  |  |
| `data` _string_ | test content body |  |  |
| `uri` _string_ | uri of test content |  |  |


#### TestList



TestList contains a list of Test





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v2` | | |
| `kind` _string_ | `TestList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[Test](#test) array_ |  |  |  |


#### TestSpec



TestSpec defines the desired state of Test



_Appears in:_
- [Test](#test)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `type` _string_ | test type |  |  |
| `name` _string_ | test execution custom name |  |  |
| `params` _object (keys:string, values:string)_ | DEPRECATED execution params passed to executor |  |  |
| `variables` _object (keys:string, values:[Variable](#variable))_ | Variables are new params with secrets attached |  |  |
| `content` _[TestContent](#testcontent)_ | test content object |  |  |
| `schedule` _string_ | schedule in cron job format for scheduled test execution |  |  |
| `executorArgs` _string array_ | additional executor binary arguments |  |  |




#### TestSuite



TestSuite is the Schema for the testsuites API



_Appears in:_
- [TestSuiteList](#testsuitelist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v2` | | |
| `kind` _string_ | `TestSuite` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `spec` _[TestSuiteSpec](#testsuitespec)_ |  |  |  |


#### TestSuiteExecutionCore



test suite execution core



_Appears in:_
- [TestSuiteStatus](#testsuitestatus)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `id` _string_ | execution id |  |  |
| `startTime` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | test suite execution start time |  |  |
| `endTime` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | test suite execution end time |  |  |


#### TestSuiteExecutionRequest



TestSuiteExecutionRequest defines the execution request body



_Appears in:_
- [TestSuiteSpec](#testsuitespec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `name` _string_ | test execution custom name |  |  |
| `namespace` _string_ | test kubernetes namespace (\"testkube\" when not set) |  |  |
| `variables` _object (keys:string, values:[Variable](#variable))_ |  |  |  |
| `secretUUID` _string_ | secret uuid |  |  |
| `labels` _object (keys:string, values:string)_ | test suite labels |  |  |
| `executionLabels` _object (keys:string, values:string)_ | execution labels |  |  |
| `sync` _boolean_ | whether to start execution sync or async |  |  |
| `httpProxy` _string_ | http proxy for executor containers |  |  |
| `httpsProxy` _string_ | https proxy for executor containers |  |  |
| `timeout` _integer_ | timeout for test suite execution |  |  |
| `cronJobTemplate` _string_ | cron job template extensions |  |  |




#### TestSuiteList



TestSuiteList contains a list of TestSuite





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v2` | | |
| `kind` _string_ | `TestSuiteList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[TestSuite](#testsuite) array_ |  |  |  |


#### TestSuiteSpec



TestSuiteSpec defines the desired state of TestSuite



_Appears in:_
- [TestSuite](#testsuite)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `before` _[TestSuiteStepSpec](#testsuitestepspec) array_ | Before steps is list of tests which will be sequentially orchestrated |  |  |
| `steps` _[TestSuiteStepSpec](#testsuitestepspec) array_ | Steps is list of tests which will be sequentially orchestrated |  |  |
| `after` _[TestSuiteStepSpec](#testsuitestepspec) array_ | After steps is list of tests which will be sequentially orchestrated |  |  |
| `repeats` _integer_ |  |  |  |
| `description` _string_ |  |  |  |
| `schedule` _string_ | schedule in cron job format for scheduled test execution |  |  |
| `executionRequest` _[TestSuiteExecutionRequest](#testsuiteexecutionrequest)_ |  |  |  |




#### TestSuiteStepDelay



TestSuiteStepDelay contains step delay parameters



_Appears in:_
- [TestSuiteStepSpec](#testsuitestepspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `duration` _integer_ | Duration in ms |  |  |


#### TestSuiteStepExecute



TestSuiteStepExecute defines step to be executed



_Appears in:_
- [TestSuiteStepSpec](#testsuitestepspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `namespace` _string_ |  |  |  |
| `name` _string_ |  |  |  |
| `stopOnFailure` _boolean_ |  |  |  |


#### TestSuiteStepSpec



TestSuiteStepSpec for particular type will have config for possible step types



_Appears in:_
- [TestSuiteSpec](#testsuitespec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `type` _[TestSuiteStepType](#testsuitesteptype)_ |  |  | Enum: [execute delay] <br /> |
| `execute` _[TestSuiteStepExecute](#testsuitestepexecute)_ |  |  |  |
| `delay` _[TestSuiteStepDelay](#testsuitestepdelay)_ |  |  |  |


#### TestSuiteStepType

_Underlying type:_ _string_

TestSuiteStepType defines different type of test suite steps

_Validation:_
- Enum: [execute delay]

_Appears in:_
- [TestSuiteStepSpec](#testsuitestepspec)

| Field | Description |
| --- | --- |
| `execute` |  |
| `delay` |  |


#### Variable

_Underlying type:_ _Variable_





_Appears in:_
- [TestSuiteExecutionRequest](#testsuiteexecutionrequest)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `type` _string_ | variable type |  |  |
| `name` _string_ | variable name |  |  |
| `value` _string_ | variable string value |  |  |
| `valueFrom` _[EnvVarSource](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#envvarsource-v1-core)_ | or load it from var source |  |  |



## tests.testkube.io/v3

Package v3 contains API Schema definitions for the tests v3 API group

### Resource Types
- [Test](#test)
- [TestList](#testlist)
- [TestSuite](#testsuite)
- [TestSuiteList](#testsuitelist)



#### ArgsModeType

_Underlying type:_ _ArgsModeType_





_Appears in:_
- [TestSuiteStepExecutionRequest](#testsuitestepexecutionrequest)



#### ArtifactRequest



artifact request body with test artifacts



_Appears in:_
- [ExecutionRequest](#executionrequest)
- [TestExecutionRequest](#testexecutionrequest)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `storageClassName` _string_ | artifact storage class name for container executor |  |  |
| `volumeMountPath` _string_ | artifact volume mount path for container executor |  |  |
| `dirs` _string array_ | artifact directories for scraping |  |  |
| `masks` _string array_ | regexp to filter scraped artifacts, single or comma separated |  |  |
| `storageBucket` _string_ | artifact bucket storage |  |  |
| `omitFolderPerExecution` _boolean_ | don't use a separate folder for execution artifacts |  |  |
| `sharedBetweenPods` _boolean_ | whether to share volume between pods |  |  |
| `useDefaultStorageClassName` _boolean_ | whether to use default storage class name |  |  |
| `sidecarScraper` _boolean_ | run scraper as pod sidecar container |  |  |


#### DownloadArtifactOptions



options to download artifacts from previous steps



_Appears in:_
- [TestSuiteBatchStep](#testsuitebatchstep)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `allPreviousSteps` _boolean_ |  |  |  |
| `previousStepNumbers` _integer array_ | previous step numbers starting from 1 |  |  |
| `previousTestNames` _string array_ | previous test names |  |  |


#### EnvReference



Reference to env resource



_Appears in:_
- [ExecutionRequest](#executionrequest)
- [TestExecutionRequest](#testexecutionrequest)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `reference` _[LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)_ |  |  |  |
| `mount` _boolean_ | whether we shoud mount resource |  |  |
| `mountPath` _string_ | where we shoud mount resource |  |  |
| `mapToVariables` _boolean_ | whether we shoud map to variables from resource |  |  |


#### ExecutionCore



test execution core



_Appears in:_
- [TestStatus](#teststatus)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `id` _string_ | execution id |  |  |
| `number` _integer_ | execution number |  |  |
| `startTime` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | test start time |  |  |
| `endTime` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | test end time |  |  |


#### ExecutionRequest



test execution request body



_Appears in:_
- [TestSpec](#testspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `name` _string_ | test execution custom name |  |  |
| `testSuiteName` _string_ | unique test suite name (CRD Test suite name), if it's run as a part of test suite |  |  |
| `number` _integer_ | test execution number |  |  |
| `executionLabels` _object (keys:string, values:string)_ | test execution labels |  |  |
| `namespace` _string_ | test kubernetes namespace (\"testkube\" when not set) |  |  |
| `variablesFile` _string_ | variables file content - need to be in format for particular executor (e.g. postman envs file) |  |  |
| `isVariablesFileUploaded` _boolean_ |  |  |  |
| `variables` _object (keys:string, values:[Variable](#variable))_ |  |  |  |
| `testSecretUUID` _string_ | test secret uuid |  |  |
| `testSuiteSecretUUID` _string_ | test suite secret uuid, if it's run as a part of test suite |  |  |
| `args` _string array_ | additional executor binary arguments |  |  |
| `argsMode` _[ArgsModeType](#argsmodetype)_ | usage mode for arguments |  |  |
| `command` _string array_ | executor binary command |  |  |
| `image` _string_ | container executor image |  |  |
| `imagePullSecrets` _[LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core) array_ | container executor image pull secrets |  |  |
| `envs` _object (keys:string, values:string)_ | Environment variables passed to executor.<br />Deprecated: use Basic Variables instead |  |  |
| `secretEnvs` _object (keys:string, values:string)_ | Execution variables passed to executor from secrets.<br />Deprecated: use Secret Variables instead |  |  |
| `sync` _boolean_ | whether to start execution sync or async |  |  |
| `httpProxy` _string_ | http proxy for executor containers |  |  |
| `httpsProxy` _string_ | https proxy for executor containers |  |  |
| `negativeTest` _boolean_ | negative test will fail the execution if it is a success and it will succeed if it is a failure |  |  |
| `activeDeadlineSeconds` _integer_ | Optional duration in seconds the pod may be active on the node relative to<br />StartTime before the system will actively try to mark it failed and kill associated containers.<br />Value must be a positive integer. |  |  |
| `artifactRequest` _[ArtifactRequest](#artifactrequest)_ |  |  |  |
| `jobTemplate` _string_ | job template extensions |  |  |
| `jobTemplateReference` _string_ | name of the template resource |  |  |
| `cronJobTemplate` _string_ | cron job template extensions |  |  |
| `cronJobTemplateReference` _string_ | name of the template resource |  |  |
| `preRunScript` _string_ | script to run before test execution |  |  |
| `postRunScript` _string_ | script to run after test execution |  |  |
| `executePostRunScriptBeforeScraping` _boolean_ | execute post run script before scraping (prebuilt executor only) |  |  |
| `sourceScripts` _boolean_ | run scripts using source command (container executor only) |  |  |
| `scraperTemplate` _string_ | scraper template extensions |  |  |
| `scraperTemplateReference` _string_ | name of the template resource |  |  |
| `pvcTemplate` _string_ | pvc template extensions |  |  |
| `pvcTemplateReference` _string_ | name of the template resource |  |  |
| `envConfigMaps` _[EnvReference](#envreference) array_ | config map references |  |  |
| `envSecrets` _[EnvReference](#envreference) array_ | secret references |  |  |
| `slavePodRequest` _[PodRequest](#podrequest)_ |  |  |  |
| `executionNamespace` _string_ | namespace for test execution (Pro edition only) |  |  |
| `disableWebhooks` _boolean_ | whether webhooks should be called on execution<br />Deprecated: field is not used |  |  |




#### GitAuthType

_Underlying type:_ _string_

GitAuthType defines git auth type

_Validation:_
- Enum: [basic header]

_Appears in:_
- [ContentGit](#contentgit)
- [Repository](#repository)

| Field | Description |
| --- | --- |
| `basic` | GitAuthTypeBasic for git basic auth requests<br /> |
| `header` | GitAuthTypeHeader for git header auth requests<br /> |


#### PodRequest



pod request body



_Appears in:_
- [ExecutionRequest](#executionrequest)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `resources` _[PodResourcesRequest](#podresourcesrequest)_ |  |  |  |
| `podTemplate` _string_ | pod template extensions |  |  |
| `podTemplateReference` _string_ | name of the template resource |  |  |


#### PodResourcesRequest



pod resources request specification



_Appears in:_
- [PodRequest](#podrequest)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `requests` _[ResourceRequest](#resourcerequest)_ |  |  |  |
| `limits` _[ResourceRequest](#resourcerequest)_ |  |  |  |


#### Repository



Repository represents VCS repo, currently we're handling Git only



_Appears in:_
- [TestContent](#testcontent)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `type` _string_ | VCS repository type |  |  |
| `uri` _string_ | uri of content file or git directory |  |  |
| `branch` _string_ | branch/tag name for checkout |  |  |
| `commit` _string_ | commit id (sha) for checkout |  |  |
| `path` _string_ | if needed we can checkout particular path (dir or file) in case of BIG/mono repositories |  |  |
| `usernameSecret` _[SecretRef](#secretref)_ |  |  |  |
| `tokenSecret` _[SecretRef](#secretref)_ |  |  |  |
| `certificateSecret` _string_ | git auth certificate secret for private repositories |  |  |
| `workingDir` _string_ | if provided we checkout the whole repository and run test from this directory |  |  |
| `authType` _[GitAuthType](#gitauthtype)_ | auth type for git requests |  | Enum: [basic header] <br /> |


#### ResourceRequest



resource request specification



_Appears in:_
- [PodResourcesRequest](#podresourcesrequest)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `cpu` _string_ | requested cpu units |  |  |
| `memory` _string_ | requested memory units |  |  |




#### RunningContextType

_Underlying type:_ _string_





_Appears in:_
- [RunningContext](#runningcontext)

| Field | Description |
| --- | --- |
| `user-cli` |  |
| `user-ui` |  |
| `testsuite` |  |
| `testtrigger` |  |
| `scheduler` |  |
| `` |  |


#### SecretRef



SecretRef is the Testkube internal reference for secret storage in Kubernetes secrets



_Appears in:_
- [Repository](#repository)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `name` _string_ | object name |  |  |
| `key` _string_ | object key |  |  |


#### Test



Test is the Schema for the tests API



_Appears in:_
- [TestList](#testlist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v3` | | |
| `kind` _string_ | `Test` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `spec` _[TestSpec](#testspec)_ |  |  |  |


#### TestContent



TestContent defines test content



_Appears in:_
- [TestSpec](#testspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `type` _[TestContentType](#testcontenttype)_ | test type |  | Enum: [string file-uri git-file git-dir git] <br /> |
| `repository` _[Repository](#repository)_ | repository of test content |  |  |
| `data` _string_ | test content body |  |  |
| `uri` _string_ | uri of test content |  |  |


#### TestContentType

_Underlying type:_ _string_



_Validation:_
- Enum: [string file-uri git-file git-dir git]

_Appears in:_
- [TestContent](#testcontent)

| Field | Description |
| --- | --- |
| `string` |  |
| `file-uri` |  |
| `git-file` | Deprecated: use git instead<br /> |
| `git-dir` | Deprecated: use git instead<br /> |
| `git` |  |


#### TestList



TestList contains a list of Test





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v3` | | |
| `kind` _string_ | `TestList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[Test](#test) array_ |  |  |  |


#### TestSpec



TestSpec defines the desired state of Test



_Appears in:_
- [Test](#test)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `type` _string_ | test type |  |  |
| `name` _string_ | test name |  |  |
| `description` _string_ | test description |  |  |
| `content` _[TestContent](#testcontent)_ | test content object |  |  |
| `source` _string_ | reference to test source resource |  |  |
| `schedule` _string_ | schedule in cron job format for scheduled test execution |  |  |
| `executionRequest` _[ExecutionRequest](#executionrequest)_ |  |  |  |
| `uploads` _string array_ | files to be used from minio uploads |  |  |




#### TestSuite



TestSuite is the Schema for the testsuites API



_Appears in:_
- [TestSuiteList](#testsuitelist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v3` | | |
| `kind` _string_ | `TestSuite` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `spec` _[TestSuiteSpec](#testsuitespec)_ |  |  |  |


#### TestSuiteBatchStep



TestSuiteBatchStep is set of steps run in parallel



_Appears in:_
- [TestSuiteSpec](#testsuitespec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `stopOnFailure` _boolean_ |  |  |  |
| `downloadArtifacts` _[DownloadArtifactOptions](#downloadartifactoptions)_ |  |  |  |
| `execute` _[TestSuiteStepSpec](#testsuitestepspec) array_ |  |  |  |


#### TestSuiteExecutionCore



TestSuiteExecutionCore defines the observed state of TestSuiteExecution



_Appears in:_
- [TestSuiteStatus](#testsuitestatus)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `id` _string_ | execution id |  |  |
| `startTime` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | test suite execution start time |  |  |
| `endTime` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | test suite execution end time |  |  |


#### TestSuiteExecutionRequest



test suite execution request body



_Appears in:_
- [TestSuiteSpec](#testsuitespec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `name` _string_ | test execution custom name |  |  |
| `namespace` _string_ | test kubernetes namespace (\"testkube\" when not set) |  |  |
| `variables` _object (keys:string, values:[Variable](#variable))_ |  |  |  |
| `secretUUID` _string_ | secret uuid |  |  |
| `labels` _object (keys:string, values:string)_ | test suite labels |  |  |
| `executionLabels` _object (keys:string, values:string)_ | execution labels |  |  |
| `sync` _boolean_ | whether to start execution sync or async |  |  |
| `httpProxy` _string_ | http proxy for executor containers |  |  |
| `httpsProxy` _string_ | https proxy for executor containers |  |  |
| `timeout` _integer_ | timeout for test suite execution |  |  |
| `jobTemplate` _string_ | job template extensions |  |  |
| `jobTemplateReference` _string_ | name of the template resource |  |  |
| `cronJobTemplate` _string_ | cron job template extensions |  |  |
| `cronJobTemplateReference` _string_ | name of the template resource |  |  |
| `scraperTemplate` _string_ | scraper template extensions |  |  |
| `scraperTemplateReference` _string_ | name of the template resource |  |  |
| `pvcTemplate` _string_ | pvc template extensions |  |  |
| `pvcTemplateReference` _string_ | name of the template resource |  |  |
| `disableWebhooks` _boolean_ | whether webhooks should be called on execution<br />Deprecated: field is not used |  |  |




#### TestSuiteList



TestSuiteList contains a list of TestSuite





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v3` | | |
| `kind` _string_ | `TestSuiteList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[TestSuite](#testsuite) array_ |  |  |  |


#### TestSuiteSpec



TestSuiteSpec defines the desired state of TestSuite



_Appears in:_
- [TestSuite](#testsuite)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `before` _[TestSuiteBatchStep](#testsuitebatchstep) array_ | Before batch steps is list of batch tests which will be sequentially orchestrated for parallel tests in each batch |  |  |
| `steps` _[TestSuiteBatchStep](#testsuitebatchstep) array_ | Batch steps is list of batch tests which will be sequentially orchestrated for parallel tests in each batch |  |  |
| `after` _[TestSuiteBatchStep](#testsuitebatchstep) array_ | After batch steps is list of batch tests which will be sequentially orchestrated for parallel tests in each batch |  |  |
| `repeats` _integer_ |  |  |  |
| `description` _string_ |  |  |  |
| `schedule` _string_ | schedule in cron job format for scheduled test execution |  |  |
| `executionRequest` _[TestSuiteExecutionRequest](#testsuiteexecutionrequest)_ |  |  |  |




#### TestSuiteStepExecutionRequest



TestSuiteStepExecutionRequest contains parameters to be used by the executions.
These fields will be passed to the execution when a Test Suite is queued for execution.
TestSuiteStepExecutionRequest parameters have the highest priority. They override the
values coming from Test Suites, Tests, and Test Executions.



_Appears in:_
- [TestSuiteStepSpec](#testsuitestepspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `executionLabels` _object (keys:string, values:string)_ | test execution labels |  |  |
| `variables` _object (keys:string, values:[Variable](#variable))_ |  |  |  |
| `args` _string array_ | additional executor binary arguments |  |  |
| `argsMode` _[ArgsModeType](#argsmodetype)_ | usage mode for arguments |  |  |
| `command` _string array_ | executor binary command |  |  |
| `sync` _boolean_ | whether to start execution sync or async |  |  |
| `httpProxy` _string_ | http proxy for executor containers |  |  |
| `httpsProxy` _string_ | https proxy for executor containers |  |  |
| `negativeTest` _boolean_ | negative test will fail the execution if it is a success and it will succeed if it is a failure |  |  |
| `jobTemplate` _string_ | job template extensions |  |  |
| `jobTemplateReference` _string_ | job template extensions reference |  |  |
| `cronJobTemplate` _string_ | cron job template extensions |  |  |
| `cronJobTemplateReference` _string_ | cron job template extensions reference |  |  |
| `scraperTemplate` _string_ | scraper template extensions |  |  |
| `scraperTemplateReference` _string_ | scraper template extensions reference |  |  |
| `pvcTemplate` _string_ | pvc template extensions |  |  |
| `pvcTemplateReference` _string_ | pvc template extensions reference |  |  |
| `runningContext` _[RunningContext](#runningcontext)_ |  |  |  |
| `disableWebhooks` _boolean_ | whether webhooks should be called on execution<br />Deprecated: field is not used |  |  |


#### TestSuiteStepSpec



TestSuiteStepSpec for particular type will have config for possible step types



_Appears in:_
- [TestSuiteBatchStep](#testsuitebatchstep)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `test` _string_ | object name |  |  |
| `delay` _[Duration](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#duration-v1-meta)_ | delay duration in time units |  | Format: duration <br />Type: string <br /> |
| `executionRequest` _[TestSuiteStepExecutionRequest](#testsuitestepexecutionrequest)_ |  |  |  |


#### Variable

_Underlying type:_ _Variable_





_Appears in:_
- [TestSuiteExecutionRequest](#testsuiteexecutionrequest)
- [TestSuiteStepExecutionRequest](#testsuitestepexecutionrequest)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `type` _string_ | variable type |  |  |
| `name` _string_ | variable name |  |  |
| `value` _string_ | variable string value |  |  |
| `valueFrom` _[EnvVarSource](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#envvarsource-v1-core)_ | or load it from var source |  |  |



## testworkflows.testkube.io/v1

Package v1 contains API Schema definitions for the Test Workflows v1 API group

### Resource Types
- [TestWorkflow](#testworkflow)
- [TestWorkflowExecution](#testworkflowexecution)
- [TestWorkflowExecutionList](#testworkflowexecutionlist)
- [TestWorkflowList](#testworkflowlist)
- [TestWorkflowTemplate](#testworkflowtemplate)
- [TestWorkflowTemplateList](#testworkflowtemplatelist)



#### ArtifactCompression







_Appears in:_
- [StepArtifacts](#stepartifacts)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `name` _string_ | artifact name |  | MinLength: 1 <br />Required: \{\} <br /> |


#### ContainerConfig







_Appears in:_
- [IndependentServiceSpec](#independentservicespec)
- [IndependentStep](#independentstep)
- [ServiceSpec](#servicespec)
- [Step](#step)
- [StepDefaults](#stepdefaults)
- [StepRun](#steprun)
- [TestWorkflowSpec](#testworkflowspec)
- [TestWorkflowSpecBase](#testworkflowspecbase)
- [TestWorkflowTemplateSpec](#testworkflowtemplatespec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `workingDir` _string_ | override default working directory in the image (empty string to default WORKDIR for the image) |  |  |
| `image` _string_ | image to be used for the container |  |  |
| `imagePullPolicy` _[PullPolicy](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#pullpolicy-v1-core)_ | pulling policy for the image |  |  |
| `env` _[EnvVar](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#envvar-v1-core) array_ | environment variables to append to the container |  |  |
| `envFrom` _[EnvFromSource](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#envfromsource-v1-core) array_ | external environment variables to append to the container |  |  |
| `command` _string_ | override default command in the image (empty string to default ENTRYPOINT of the image) |  |  |
| `args` _string_ | override default command in the image (empty string to default CMD of the image) |  |  |
| `resources` _[Resources](#resources)_ | expected resources for the container |  |  |
| `securityContext` _[SecurityContext](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#securitycontext-v1-core)_ | security context for the container |  |  |
| `volumeMounts` _[VolumeMount](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#volumemount-v1-core) array_ | volume mounts to append to the container |  |  |


#### Content







_Appears in:_
- [IndependentServiceSpec](#independentservicespec)
- [IndependentStep](#independentstep)
- [ServiceSpec](#servicespec)
- [Step](#step)
- [StepSource](#stepsource)
- [TestWorkflowSpec](#testworkflowspec)
- [TestWorkflowSpecBase](#testworkflowspecbase)
- [TestWorkflowTemplateSpec](#testworkflowtemplatespec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `git` _[ContentGit](#contentgit)_ | git repository details |  |  |
| `files` _[ContentFile](#contentfile) array_ | files to load |  |  |
| `tarball` _[ContentTarball](#contenttarball) array_ | tarballs to unpack |  |  |


#### ContentFile







_Appears in:_
- [Content](#content)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `path` _string_ | path where the file should be accessible at |  | MinLength: 1 <br /> |
| `content` _string_ | plain-text content to put inside |  |  |
| `contentFrom` _[EnvVarSource](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#envvarsource-v1-core)_ | external source to use |  |  |
| `mode` _integer_ | mode to use for the file |  |  |


#### ContentGit







_Appears in:_
- [Content](#content)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `uri` _string_ | uri for the Git repository |  |  |
| `revision` _string_ | branch, commit or a tag name to fetch |  |  |
| `username` _string_ | plain text username to fetch with |  |  |
| `usernameFrom` _[EnvVarSource](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#envvarsource-v1-core)_ | external username to fetch with |  |  |
| `token` _string_ | plain text token to fetch with |  |  |
| `tokenFrom` _[EnvVarSource](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#envvarsource-v1-core)_ | external token to fetch with |  |  |
| `sshKey` _string_ | plain text SSH private key to fetch with |  |  |
| `sshKeyFrom` _[EnvVarSource](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#envvarsource-v1-core)_ | external SSH private key to fetch with |  |  |
| `authType` _[GitAuthType](#gitauthtype)_ | authorization type for the credentials |  | Enum: [basic header] <br /> |
| `mountPath` _string_ | where to mount the fetched repository contents (defaults to "repo" directory in the data volume) |  |  |
| `paths` _string array_ | paths to fetch for the sparse checkout |  |  |


#### ContentTarball







_Appears in:_
- [Content](#content)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `url` _string_ | url for the tarball to extract |  |  |
| `path` _string_ | path where the tarball should be extracted |  |  |
| `mount` _boolean_ | should it mount a new volume there |  |  |


#### CronJobConfig



cron job configuration



_Appears in:_
- [Event](#event)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `cron` _string_ | cron schedule to run a test workflow |  |  |
| `labels` _object (keys:string, values:string)_ | labels to attach to the cron job |  |  |
| `annotations` _object (keys:string, values:string)_ | annotations to attach to the cron job |  |  |


#### DynamicList





_Validation:_
- Type: dynamicList

_Appears in:_
- [IndependentServiceSpec](#independentservicespec)
- [ServiceSpec](#servicespec)
- [StepExecuteStrategy](#stepexecutestrategy)
- [StepExecuteTest](#stepexecutetest)
- [StepExecuteWorkflow](#stepexecuteworkflow)
- [StepParallelFetch](#stepparallelfetch)
- [StepParallelTransfer](#stepparalleltransfer)
- [TarballRequest](#tarballrequest)
- [TestWorkflowOutput](#testworkflowoutput)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `Dynamic` _boolean_ |  |  |  |
| `Static` _interface{} array_ |  |  |  |
| `Expression` _string_ |  |  |  |


#### Event







_Appears in:_
- [TestWorkflowSpec](#testworkflowspec)
- [TestWorkflowSpecBase](#testworkflowspecbase)
- [TestWorkflowTemplateSpec](#testworkflowtemplatespec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `cronjob` _[CronJobConfig](#cronjobconfig)_ |  |  |  |


#### IndependentServiceSpec







_Appears in:_
- [IndependentStep](#independentstep)
- [ServiceSpec](#servicespec)
- [TestWorkflowTemplateSpec](#testworkflowtemplatespec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `matrix` _object (keys:string, values:[DynamicList](#dynamiclist))_ | matrix of parameters to spawn instances (static) |  |  |
| `count` _[IntOrString](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#intorstring-intstr-util)_ | static number of sharded instances to spawn |  |  |
| `maxCount` _[IntOrString](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#intorstring-intstr-util)_ | dynamic number of sharded instances to spawn - it will be lowered if there is not enough sharded values |  |  |
| `shards` _object (keys:string, values:[DynamicList](#dynamiclist))_ | parameters that should be distributed across sharded instances |  |  |
| `description` _string_ | service description to display |  |  |
| `logs` _string_ | should save logs for the service (false if not specified) |  |  |
| `timeout` _string_ | maximum time until reaching readiness |  | Pattern: `^((0\|[1-9][0-9]*)h)?((0\|[1-9][0-9]*)m)?((0\|[1-9][0-9]*)s)?((0\|[1-9][0-9]*)ms)?$` <br /> |
| `transfer` _[StepParallelTransfer](#stepparalleltransfer) array_ | instructions for transferring files |  |  |
| `content` _[Content](#content)_ | global content that should be fetched into all containers |  |  |
| `pod` _[PodConfig](#podconfig)_ | configuration for the scheduled pod |  |  |
| `workingDir` _string_ | override default working directory in the image (empty string to default WORKDIR for the image) |  |  |
| `image` _string_ | image to be used for the container |  |  |
| `imagePullPolicy` _[PullPolicy](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#pullpolicy-v1-core)_ | pulling policy for the image |  |  |
| `env` _[EnvVar](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#envvar-v1-core) array_ | environment variables to append to the container |  |  |
| `envFrom` _[EnvFromSource](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#envfromsource-v1-core) array_ | external environment variables to append to the container |  |  |
| `command` _string_ | override default command in the image (empty string to default ENTRYPOINT of the image) |  |  |
| `args` _string_ | override default command in the image (empty string to default CMD of the image) |  |  |
| `resources` _[Resources](#resources)_ | expected resources for the container |  |  |
| `securityContext` _[SecurityContext](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#securitycontext-v1-core)_ | security context for the container |  |  |
| `volumeMounts` _[VolumeMount](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#volumemount-v1-core) array_ | volume mounts to append to the container |  |  |
| `shell` _string_ | script to run in a default shell for the container |  |  |
| `restartPolicy` _[ServiceRestartPolicy](#servicerestartpolicy)_ | Restart policy for the main container in the pod. One of OnFailure or Never. |  |  |
| `readinessProbe` _[Probe](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#probe-v1-core)_ | Probe to check if the service has started correctly |  |  |


#### IndependentStep







_Appears in:_
- [IndependentStep](#independentstep)
- [TestWorkflowTemplateSpec](#testworkflowtemplatespec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `name` _string_ | readable name for the step |  |  |
| `condition` _string_ | expression to declare under which conditions the step should be run<br />defaults to: "passed", except artifacts where it defaults to "always" |  |  |
| `negative` _boolean_ | is the step expected to fail |  |  |
| `optional` _boolean_ | is the step optional, so its failure won't affect the TestWorkflow result |  |  |
| `paused` _boolean_ | pause the step initially |  |  |
| `retry` _[RetryPolicy](#retrypolicy)_ | policy for retrying the step |  |  |
| `timeout` _string_ | maximum time this step may take |  | Pattern: `^((0\|[1-9][0-9]*)h)?((0\|[1-9][0-9]*)m)?((0\|[1-9][0-9]*)s)?((0\|[1-9][0-9]*)ms)?$` <br /> |
| `content` _[Content](#content)_ | content that should be fetched for this step |  |  |
| `services` _object (keys:string, values:[IndependentServiceSpec](#independentservicespec))_ | list of accompanying services to start |  |  |
| `container` _[ContainerConfig](#containerconfig)_ | defaults for the containers in this step |  |  |
| `workingDir` _string_ | working directory to use for this step |  |  |
| `setup` _[IndependentStep](#independentstep) array_ | steps to run before other operations in this step |  | Schemaless: \{\} <br /> |
| `delay` _string_ | delay before the step |  | Pattern: `^((0\|[1-9][0-9]*)h)?((0\|[1-9][0-9]*)m)?((0\|[1-9][0-9]*)s)?((0\|[1-9][0-9]*)ms)?$` <br /> |
| `shell` _string_ | script to run in a default shell for the container |  |  |
| `run` _[StepRun](#steprun)_ | run specific container in the current step |  |  |
| `execute` _[StepExecute](#stepexecute)_ | execute other Testkube resources |  |  |
| `artifacts` _[StepArtifacts](#stepartifacts)_ | scrape artifacts from the volumes |  |  |
| `parallel` _[IndependentStepParallel](#independentstepparallel)_ | instructions for parallel execution |  |  |
| `steps` _[IndependentStep](#independentstep) array_ | sub-steps to run |  | Schemaless: \{\} <br /> |


#### IndependentStepParallel

_Underlying type:_ _[struct\{Parallelism int32 "json:\"parallelism,omitempty\""; StepExecuteStrategy "json:\",inline\" expr:\"include\""; Description string "json:\"description,omitempty\" expr:\"template\""; Logs *string "json:\"logs,omitempty\" expr:\"expression\""; Transfer []StepParallelTransfer "json:\"transfer,omitempty\" expr:\"include\""; Fetch []StepParallelFetch "json:\"fetch,omitempty\" expr:\"include\""; TestWorkflowTemplateSpec "json:\",inline\" expr:\"include\""; StepControl "json:\",inline\" expr:\"include\""; StepOperations "json:\",inline\" expr:\"include\""}](#struct{parallelism-int32-"json:\"parallelism,omitempty\"";-stepexecutestrategy-"json:\",inline\"-expr:\"include\"";-description-string-"json:\"description,omitempty\"-expr:\"template\"";-logs-*string-"json:\"logs,omitempty\"-expr:\"expression\"";-transfer-[]stepparalleltransfer-"json:\"transfer,omitempty\"-expr:\"include\"";-fetch-[]stepparallelfetch-"json:\"fetch,omitempty\"-expr:\"include\"";-testworkflowtemplatespec-"json:\",inline\"-expr:\"include\"";-stepcontrol-"json:\",inline\"-expr:\"include\"";-stepoperations-"json:\",inline\"-expr:\"include\""})_





_Appears in:_
- [IndependentStep](#independentstep)



#### JobConfig







_Appears in:_
- [TestWorkflowSpec](#testworkflowspec)
- [TestWorkflowSpecBase](#testworkflowspecbase)
- [TestWorkflowTemplateSpec](#testworkflowtemplatespec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `labels` _object (keys:string, values:string)_ | labels added to the scheduled job |  |  |
| `annotations` _object (keys:string, values:string)_ | annotations added to the scheduled job |  |  |
| `namespace` _string_ | namespace for execution of test workflow |  |  |
| `activeDeadlineSeconds` _integer_ | duration in seconds the job may be active on the node |  |  |


#### NotificationsConfig







_Appears in:_
- [TestWorkflowSpec](#testworkflowspec)
- [TestWorkflowSpecBase](#testworkflowspecbase)
- [TestWorkflowTemplateSpec](#testworkflowtemplatespec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `disableWebhooks` _boolean_ |  |  |  |


#### ParameterNumberSchema







_Appears in:_
- [ParameterSchema](#parameterschema)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `minimum` _integer_ | minimum value for the number (inclusive) |  |  |
| `maximum` _integer_ | maximum value for the number (inclusive) |  |  |
| `exclusiveMinimum` _integer_ | minimum value for the number (exclusive) |  |  |
| `exclusiveMaximum` _integer_ | maximum value for the number (exclusive) |  |  |
| `multipleOf` _integer_ | the number needs to be multiple of this value |  |  |


#### ParameterSchema







_Appears in:_
- [TestWorkflowSpec](#testworkflowspec)
- [TestWorkflowSpecBase](#testworkflowspecbase)
- [TestWorkflowTemplateSpec](#testworkflowtemplatespec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `description` _string_ | parameter description |  |  |
| `type` _[ParameterType](#parametertype)_ | type of the parameter | string | Enum: [string integer number boolean] <br /> |
| `enum` _string array_ | the list of allowed values, when limited |  |  |
| `example` _[IntOrString](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#intorstring-intstr-util)_ | exemplary value |  |  |
| `default` _[IntOrString](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#intorstring-intstr-util)_ | default value - if not provided, the parameter is required |  | XIntOrString: \{\} <br /> |
| `format` _string_ | predefined format for the string |  |  |
| `pattern` _string_ | regular expression to match |  |  |
| `minLength` _integer_ | minimum length for the string |  |  |
| `maxLength` _integer_ | maximum length for the string |  |  |
| `minimum` _integer_ | minimum value for the number (inclusive) |  |  |
| `maximum` _integer_ | maximum value for the number (inclusive) |  |  |
| `exclusiveMinimum` _integer_ | minimum value for the number (exclusive) |  |  |
| `exclusiveMaximum` _integer_ | maximum value for the number (exclusive) |  |  |
| `multipleOf` _integer_ | the number needs to be multiple of this value |  |  |


#### ParameterStringSchema







_Appears in:_
- [ParameterSchema](#parameterschema)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `format` _string_ | predefined format for the string |  |  |
| `pattern` _string_ | regular expression to match |  |  |
| `minLength` _integer_ | minimum length for the string |  |  |
| `maxLength` _integer_ | maximum length for the string |  |  |


#### ParameterType

_Underlying type:_ _string_



_Validation:_
- Enum: [string integer number boolean]

_Appears in:_
- [ParameterSchema](#parameterschema)

| Field | Description |
| --- | --- |
| `string` |  |
| `integer` |  |
| `number` |  |
| `boolean` |  |


#### PodConfig







_Appears in:_
- [IndependentServiceSpec](#independentservicespec)
- [ServiceSpec](#servicespec)
- [TestWorkflowSpec](#testworkflowspec)
- [TestWorkflowSpecBase](#testworkflowspecbase)
- [TestWorkflowTemplateSpec](#testworkflowtemplatespec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `serviceAccountName` _string_ | default service account name for the scheduled pod |  |  |
| `imagePullSecrets` _[LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core) array_ | references to secrets with credentials for pulling the images from registry |  |  |
| `nodeSelector` _object (keys:string, values:string)_ | node selector to define on which node the pod should land |  |  |
| `labels` _object (keys:string, values:string)_ | labels added to the scheduled pod |  |  |
| `annotations` _object (keys:string, values:string)_ | annotations added to the scheduled pod |  |  |
| `volumes` _[Volume](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#volume-v1-core) array_ | volumes to include in the pod |  | Schemaless: \{\} <br /> |
| `activeDeadlineSeconds` _integer_ | duration in seconds the pod may be active on the node |  |  |
| `dnsPolicy` _[DNSPolicy](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#dnspolicy-v1-core)_ | DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. |  |  |
| `nodeName` _string_ | NodeName is a request to schedule this pod onto a specific node. |  |  |
| `securityContext` _[PodSecurityContext](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#podsecuritycontext-v1-core)_ | SecurityContext holds pod-level security attributes and common container settings. |  |  |
| `hostname` _string_ | Specifies the hostname of the Pod |  |  |
| `subdomain` _string_ | If specified, the fully qualified Pod hostname will be "&lt;hostname&gt;.&lt;subdomain&gt;.&lt;pod namespace&gt;.svc.&lt;cluster domain&gt;". |  |  |
| `affinity` _[Affinity](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#affinity-v1-core)_ | If specified, the pod's scheduling constraints |  | Schemaless: \{\} <br /> |
| `tolerations` _[Toleration](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#toleration-v1-core) array_ | If specified, the pod's tolerations. |  |  |
| `hostAliases` _[HostAlias](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#hostalias-v1-core) array_ | HostAliases is an optional list of hosts and IPs that will be injected into the pod's hosts file if specified |  |  |
| `priorityClassName` _string_ | If specified, indicates the pod's priority. |  |  |
| `priority` _integer_ | The priority value. Various system components use this field to find the priority of the pod. |  |  |
| `dnsConfig` _[PodDNSConfig](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#poddnsconfig-v1-core)_ | Specifies the DNS parameters of a pod. |  |  |
| `preemptionPolicy` _[PreemptionPolicy](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#preemptionpolicy-v1-core)_ | PreemptionPolicy is the Policy for preempting pods with lower priority. |  |  |
| `topologySpreadConstraints` _[TopologySpreadConstraint](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#topologyspreadconstraint-v1-core) array_ | TopologySpreadConstraints describes how a group of pods ought to spread across topology domains. |  | Schemaless: \{\} <br /> |
| `schedulingGates` _[PodSchedulingGate](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#podschedulinggate-v1-core) array_ | SchedulingGates is an opaque list of values that if specified will block scheduling the pod. |  |  |
| `resourceClaims` _[PodResourceClaim](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#podresourceclaim-v1-core) array_ | ResourceClaims defines which ResourceClaims must be allocated and reserved before the Pod is allowed to start. |  |  |


#### Resources







_Appears in:_
- [ContainerConfig](#containerconfig)
- [IndependentServiceSpec](#independentservicespec)
- [ServiceSpec](#servicespec)
- [StepRun](#steprun)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `limits` _object (keys:[ResourceName](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#resourcename-v1-core), values:[IntOrString](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#intorstring-intstr-util))_ | resource limits for the container |  |  |
| `requests` _object (keys:[ResourceName](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#resourcename-v1-core), values:[IntOrString](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#intorstring-intstr-util))_ | resource requests for the container |  |  |


#### RetryPolicy







_Appears in:_
- [IndependentStep](#independentstep)
- [Step](#step)
- [StepControl](#stepcontrol)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `count` _integer_ | how many times at most it should retry |  | Minimum: 1 <br />Required: \{\} <br /> |
| `until` _string_ | until when it should retry (defaults to: "passed") |  |  |


#### ServiceRestartPolicy

_Underlying type:_ _string_





_Appears in:_
- [IndependentServiceSpec](#independentservicespec)
- [ServiceSpec](#servicespec)

| Field | Description |
| --- | --- |
| `OnFailure` |  |
| `Never` |  |


#### ServiceSpec







_Appears in:_
- [Step](#step)
- [TestWorkflowSpec](#testworkflowspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `use` _[TemplateRef](#templateref) array_ | multiple templates to include in this step |  |  |
| `matrix` _object (keys:string, values:[DynamicList](#dynamiclist))_ | matrix of parameters to spawn instances (static) |  |  |
| `count` _[IntOrString](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#intorstring-intstr-util)_ | static number of sharded instances to spawn |  |  |
| `maxCount` _[IntOrString](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#intorstring-intstr-util)_ | dynamic number of sharded instances to spawn - it will be lowered if there is not enough sharded values |  |  |
| `shards` _object (keys:string, values:[DynamicList](#dynamiclist))_ | parameters that should be distributed across sharded instances |  |  |
| `description` _string_ | service description to display |  |  |
| `logs` _string_ | should save logs for the service (false if not specified) |  |  |
| `timeout` _string_ | maximum time until reaching readiness |  | Pattern: `^((0\|[1-9][0-9]*)h)?((0\|[1-9][0-9]*)m)?((0\|[1-9][0-9]*)s)?((0\|[1-9][0-9]*)ms)?$` <br /> |
| `transfer` _[StepParallelTransfer](#stepparalleltransfer) array_ | instructions for transferring files |  |  |
| `content` _[Content](#content)_ | global content that should be fetched into all containers |  |  |
| `pod` _[PodConfig](#podconfig)_ | configuration for the scheduled pod |  |  |
| `workingDir` _string_ | override default working directory in the image (empty string to default WORKDIR for the image) |  |  |
| `image` _string_ | image to be used for the container |  |  |
| `imagePullPolicy` _[PullPolicy](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#pullpolicy-v1-core)_ | pulling policy for the image |  |  |
| `env` _[EnvVar](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#envvar-v1-core) array_ | environment variables to append to the container |  |  |
| `envFrom` _[EnvFromSource](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#envfromsource-v1-core) array_ | external environment variables to append to the container |  |  |
| `command` _string_ | override default command in the image (empty string to default ENTRYPOINT of the image) |  |  |
| `args` _string_ | override default command in the image (empty string to default CMD of the image) |  |  |
| `resources` _[Resources](#resources)_ | expected resources for the container |  |  |
| `securityContext` _[SecurityContext](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#securitycontext-v1-core)_ | security context for the container |  |  |
| `volumeMounts` _[VolumeMount](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#volumemount-v1-core) array_ | volume mounts to append to the container |  |  |
| `shell` _string_ | script to run in a default shell for the container |  |  |
| `restartPolicy` _[ServiceRestartPolicy](#servicerestartpolicy)_ | Restart policy for the main container in the pod. One of OnFailure or Never. |  |  |
| `readinessProbe` _[Probe](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#probe-v1-core)_ | Probe to check if the service has started correctly |  |  |


#### Step







_Appears in:_
- [Step](#step)
- [TestWorkflowSpec](#testworkflowspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `name` _string_ | readable name for the step |  |  |
| `condition` _string_ | expression to declare under which conditions the step should be run<br />defaults to: "passed", except artifacts where it defaults to "always" |  |  |
| `negative` _boolean_ | is the step expected to fail |  |  |
| `optional` _boolean_ | is the step optional, so its failure won't affect the TestWorkflow result |  |  |
| `paused` _boolean_ | pause the step initially |  |  |
| `retry` _[RetryPolicy](#retrypolicy)_ | policy for retrying the step |  |  |
| `timeout` _string_ | maximum time this step may take |  | Pattern: `^((0\|[1-9][0-9]*)h)?((0\|[1-9][0-9]*)m)?((0\|[1-9][0-9]*)s)?((0\|[1-9][0-9]*)ms)?$` <br /> |
| `use` _[TemplateRef](#templateref) array_ | multiple templates to include in this step |  |  |
| `content` _[Content](#content)_ | content that should be fetched for this step |  |  |
| `services` _object (keys:string, values:[ServiceSpec](#servicespec))_ | list of accompanying services to start |  |  |
| `container` _[ContainerConfig](#containerconfig)_ | defaults for the containers in this step |  |  |
| `workingDir` _string_ | working directory to use for this step |  |  |
| `setup` _[Step](#step) array_ | steps to run before other operations in this step |  | Schemaless: \{\} <br /> |
| `delay` _string_ | delay before the step |  | Pattern: `^((0\|[1-9][0-9]*)h)?((0\|[1-9][0-9]*)m)?((0\|[1-9][0-9]*)s)?((0\|[1-9][0-9]*)ms)?$` <br /> |
| `shell` _string_ | script to run in a default shell for the container |  |  |
| `run` _[StepRun](#steprun)_ | run specific container in the current step |  |  |
| `execute` _[StepExecute](#stepexecute)_ | execute other Testkube resources |  |  |
| `artifacts` _[StepArtifacts](#stepartifacts)_ | scrape artifacts from the volumes |  |  |
| `template` _[TemplateRef](#templateref)_ | single template to run in this step |  |  |
| `parallel` _[StepParallel](#stepparallel)_ | instructions for parallel execution |  |  |
| `steps` _[Step](#step) array_ | sub-steps to run |  | Schemaless: \{\} <br /> |


#### StepArtifacts







_Appears in:_
- [IndependentStep](#independentstep)
- [Step](#step)
- [StepOperations](#stepoperations)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `workingDir` _string_ | working directory to override, so it will be used as a base dir |  |  |
| `compress` _[ArtifactCompression](#artifactcompression)_ | compression options for the artifacts |  |  |
| `paths` _string array_ | paths to fetch from the container |  |  |


#### StepControl







_Appears in:_
- [IndependentStep](#independentstep)
- [Step](#step)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `negative` _boolean_ | is the step expected to fail |  |  |
| `optional` _boolean_ | is the step optional, so its failure won't affect the TestWorkflow result |  |  |
| `paused` _boolean_ | pause the step initially |  |  |
| `retry` _[RetryPolicy](#retrypolicy)_ | policy for retrying the step |  |  |
| `timeout` _string_ | maximum time this step may take |  | Pattern: `^((0\|[1-9][0-9]*)h)?((0\|[1-9][0-9]*)m)?((0\|[1-9][0-9]*)s)?((0\|[1-9][0-9]*)ms)?$` <br /> |


#### StepDefaults







_Appears in:_
- [IndependentStep](#independentstep)
- [Step](#step)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `container` _[ContainerConfig](#containerconfig)_ | defaults for the containers in this step |  |  |
| `workingDir` _string_ | working directory to use for this step |  |  |


#### StepExecute







_Appears in:_
- [IndependentStep](#independentstep)
- [Step](#step)
- [StepOperations](#stepoperations)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `parallelism` _integer_ | how many resources could be scheduled in parallel |  |  |
| `async` _boolean_ | only schedule the resources, don't watch the results (unless it is needed for parallelism) |  |  |
| `tests` _[StepExecuteTest](#stepexecutetest) array_ | tests to run |  |  |
| `workflows` _[StepExecuteWorkflow](#stepexecuteworkflow) array_ | workflows to run |  |  |


#### StepExecuteStrategy







_Appears in:_
- [IndependentServiceSpec](#independentservicespec)
- [ServiceSpec](#servicespec)
- [StepExecuteTest](#stepexecutetest)
- [StepExecuteWorkflow](#stepexecuteworkflow)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `matrix` _object (keys:string, values:[DynamicList](#dynamiclist))_ | matrix of parameters to spawn instances (static) |  |  |
| `count` _[IntOrString](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#intorstring-intstr-util)_ | static number of sharded instances to spawn |  |  |
| `maxCount` _[IntOrString](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#intorstring-intstr-util)_ | dynamic number of sharded instances to spawn - it will be lowered if there is not enough sharded values |  |  |
| `shards` _object (keys:string, values:[DynamicList](#dynamiclist))_ | parameters that should be distributed across sharded instances |  |  |


#### StepExecuteTest







_Appears in:_
- [StepExecute](#stepexecute)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `name` _string_ | test name to run |  |  |
| `description` _string_ | test execution description to display |  |  |
| `matrix` _object (keys:string, values:[DynamicList](#dynamiclist))_ | matrix of parameters to spawn instances (static) |  |  |
| `count` _[IntOrString](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#intorstring-intstr-util)_ | static number of sharded instances to spawn |  |  |
| `maxCount` _[IntOrString](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#intorstring-intstr-util)_ | dynamic number of sharded instances to spawn - it will be lowered if there is not enough sharded values |  |  |
| `shards` _object (keys:string, values:[DynamicList](#dynamiclist))_ | parameters that should be distributed across sharded instances |  |  |
| `tarball` _object (keys:string, values:[TarballRequest](#tarballrequest))_ | pack some data from the original file system to serve them down |  |  |
| `executionRequest` _[TestExecutionRequest](#testexecutionrequest)_ | pass the execution request overrides |  |  |


#### StepExecuteWorkflow







_Appears in:_
- [StepExecute](#stepexecute)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `name` _string_ | workflow name to run |  |  |
| `description` _string_ | test workflow execution description to display |  |  |
| `matrix` _object (keys:string, values:[DynamicList](#dynamiclist))_ | matrix of parameters to spawn instances (static) |  |  |
| `count` _[IntOrString](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#intorstring-intstr-util)_ | static number of sharded instances to spawn |  |  |
| `maxCount` _[IntOrString](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#intorstring-intstr-util)_ | dynamic number of sharded instances to spawn - it will be lowered if there is not enough sharded values |  |  |
| `shards` _object (keys:string, values:[DynamicList](#dynamiclist))_ | parameters that should be distributed across sharded instances |  |  |
| `executionName` _string_ | unique execution name to use |  |  |
| `tarball` _object (keys:string, values:[TarballRequest](#tarballrequest))_ | pack some data from the original file system to serve them down |  |  |
| `config` _object (keys:string, values:[IntOrString](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#intorstring-intstr-util))_ | configuration to pass for the workflow |  |  |


#### StepMeta







_Appears in:_
- [IndependentStep](#independentstep)
- [Step](#step)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `name` _string_ | readable name for the step |  |  |
| `condition` _string_ | expression to declare under which conditions the step should be run<br />defaults to: "passed", except artifacts where it defaults to "always" |  |  |


#### StepOperations







_Appears in:_
- [IndependentStep](#independentstep)
- [Step](#step)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `delay` _string_ | delay before the step |  | Pattern: `^((0\|[1-9][0-9]*)h)?((0\|[1-9][0-9]*)m)?((0\|[1-9][0-9]*)s)?((0\|[1-9][0-9]*)ms)?$` <br /> |
| `shell` _string_ | script to run in a default shell for the container |  |  |
| `run` _[StepRun](#steprun)_ | run specific container in the current step |  |  |
| `execute` _[StepExecute](#stepexecute)_ | execute other Testkube resources |  |  |
| `artifacts` _[StepArtifacts](#stepartifacts)_ | scrape artifacts from the volumes |  |  |


#### StepParallel

_Underlying type:_ _[struct\{Parallelism int32 "json:\"parallelism,omitempty\""; StepExecuteStrategy "json:\",inline\" expr:\"include\""; Description string "json:\"description,omitempty\" expr:\"template\""; Logs *string "json:\"logs,omitempty\" expr:\"expression\""; Transfer []StepParallelTransfer "json:\"transfer,omitempty\" expr:\"include\""; Fetch []StepParallelFetch "json:\"fetch,omitempty\" expr:\"include\""; TestWorkflowSpec "json:\",inline\" expr:\"include\""; StepControl "json:\",inline\" expr:\"include\""; StepOperations "json:\",inline\" expr:\"include\""; Template *TemplateRef "json:\"template,omitempty\" expr:\"include\""}](#struct{parallelism-int32-"json:\"parallelism,omitempty\"";-stepexecutestrategy-"json:\",inline\"-expr:\"include\"";-description-string-"json:\"description,omitempty\"-expr:\"template\"";-logs-*string-"json:\"logs,omitempty\"-expr:\"expression\"";-transfer-[]stepparalleltransfer-"json:\"transfer,omitempty\"-expr:\"include\"";-fetch-[]stepparallelfetch-"json:\"fetch,omitempty\"-expr:\"include\"";-testworkflowspec-"json:\",inline\"-expr:\"include\"";-stepcontrol-"json:\",inline\"-expr:\"include\"";-stepoperations-"json:\",inline\"-expr:\"include\"";-template-*templateref-"json:\"template,omitempty\"-expr:\"include\""})_





_Appears in:_
- [Step](#step)





#### StepParallelTransfer







_Appears in:_
- [IndependentServiceSpec](#independentservicespec)
- [ServiceSpec](#servicespec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `from` _string_ | path to load the files from |  |  |
| `files` _[DynamicList](#dynamiclist)_ | file patterns to pack |  | Type: dynamicList <br /> |
| `to` _string_ | path where the tarball should be extracted |  |  |
| `mount` _boolean_ | should it mount a new volume there |  |  |


#### StepRun







_Appears in:_
- [IndependentServiceSpec](#independentservicespec)
- [IndependentStep](#independentstep)
- [ServiceSpec](#servicespec)
- [Step](#step)
- [StepOperations](#stepoperations)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `workingDir` _string_ | override default working directory in the image (empty string to default WORKDIR for the image) |  |  |
| `image` _string_ | image to be used for the container |  |  |
| `imagePullPolicy` _[PullPolicy](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#pullpolicy-v1-core)_ | pulling policy for the image |  |  |
| `env` _[EnvVar](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#envvar-v1-core) array_ | environment variables to append to the container |  |  |
| `envFrom` _[EnvFromSource](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#envfromsource-v1-core) array_ | external environment variables to append to the container |  |  |
| `command` _string_ | override default command in the image (empty string to default ENTRYPOINT of the image) |  |  |
| `args` _string_ | override default command in the image (empty string to default CMD of the image) |  |  |
| `resources` _[Resources](#resources)_ | expected resources for the container |  |  |
| `securityContext` _[SecurityContext](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#securitycontext-v1-core)_ | security context for the container |  |  |
| `volumeMounts` _[VolumeMount](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#volumemount-v1-core) array_ | volume mounts to append to the container |  |  |
| `shell` _string_ | script to run in a default shell for the container |  |  |


#### StepSource







_Appears in:_
- [IndependentStep](#independentstep)
- [Step](#step)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `content` _[Content](#content)_ | content that should be fetched for this step |  |  |


#### TarballRequest







_Appears in:_
- [StepExecuteTest](#stepexecutetest)
- [StepExecuteWorkflow](#stepexecuteworkflow)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `from` _string_ | path to load the files from |  |  |
| `files` _[DynamicList](#dynamiclist)_ | file patterns to pack |  | Type: dynamicList <br /> |


#### TemplateRef



TemplateRef is the reference for the template inclusion



_Appears in:_
- [ServiceSpec](#servicespec)
- [Step](#step)
- [TestWorkflowSpec](#testworkflowspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `name` _string_ | name of the template to include |  |  |
| `config` _object (keys:string, values:[IntOrString](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#intorstring-intstr-util))_ | trait configuration values if needed |  |  |


#### TestExecutionRequest







_Appears in:_
- [StepExecuteTest](#stepexecutetest)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `name` _string_ | test execution custom name |  |  |
| `executionLabels` _object (keys:string, values:string)_ | test execution labels |  |  |
| `variablesFile` _string_ | variables file content - need to be in format for particular executor (e.g. postman envs file) |  |  |
| `isVariablesFileUploaded` _boolean_ |  |  |  |
| `variables` _object (keys:string, values:[Variable](#variable))_ |  |  |  |
| `testSecretUUID` _string_ | test secret uuid |  |  |
| `args` _string array_ | additional executor binary arguments |  |  |
| `argsMode` _[ArgsModeType](#argsmodetype)_ | usage mode for arguments |  |  |
| `command` _string array_ | executor binary command |  |  |
| `image` _string_ | container executor image |  |  |
| `imagePullSecrets` _[LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core) array_ | container executor image pull secrets |  |  |
| `sync` _boolean_ | whether to start execution sync or async |  |  |
| `httpProxy` _string_ | http proxy for executor containers |  |  |
| `httpsProxy` _string_ | https proxy for executor containers |  |  |
| `negativeTest` _boolean_ | negative test will fail the execution if it is a success and it will succeed if it is a failure |  |  |
| `activeDeadlineSeconds` _integer_ | Optional duration in seconds the pod may be active on the node relative to<br />StartTime before the system will actively try to mark it failed and kill associated containers.<br />Value must be a positive integer. |  |  |
| `artifactRequest` _[ArtifactRequest](#artifactrequest)_ |  |  |  |
| `jobTemplate` _string_ | job template extensions |  |  |
| `cronJobTemplate` _string_ | cron job template extensions |  |  |
| `preRunScript` _string_ | script to run before test execution |  |  |
| `postRunScript` _string_ | script to run after test execution |  |  |
| `executePostRunScriptBeforeScraping` _boolean_ | execute post run script before scraping (prebuilt executor only) |  |  |
| `sourceScripts` _boolean_ | run scripts using source command (container executor only) |  |  |
| `scraperTemplate` _string_ | scraper template extensions |  |  |
| `envConfigMaps` _[EnvReference](#envreference) array_ | config map references |  |  |
| `envSecrets` _[EnvReference](#envreference) array_ | secret references |  |  |
| `executionNamespace` _string_ | namespace for test execution (Pro edition only) |  |  |


#### TestWorkflow



TestWorkflow is the Schema for the workflows API



_Appears in:_
- [TestWorkflowExecutionDetails](#testworkflowexecutiondetails)
- [TestWorkflowList](#testworkflowlist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `testworkflows.testkube.io/v1` | | |
| `kind` _string_ | `TestWorkflow` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `description` _string_ | TestWorkflow readable description |  |  |
| `spec` _[TestWorkflowSpec](#testworkflowspec)_ | TestWorkflow specification |  |  |


#### TestWorkflowExecution



TestWorkflowExecution is the Schema for the workflows API



_Appears in:_
- [TestWorkflowExecutionList](#testworkflowexecutionlist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `testworkflows.testkube.io/v1` | | |
| `kind` _string_ | `TestWorkflowExecution` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `spec` _[TestWorkflowExecutionSpec](#testworkflowexecutionspec)_ | TestWorkflowExecution specification |  |  |


#### TestWorkflowExecutionDetails



TestWorkflowExecutionDetails contains the details of TestWorkflowExecution



_Appears in:_
- [TestWorkflowExecutionStatus](#testworkflowexecutionstatus)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `id` _string_ | unique execution identifier |  |  |
| `name` _string_ | execution name |  |  |
| `namespace` _string_ | execution namespace |  |  |
| `number` _integer_ | sequence number for the execution |  |  |
| `scheduledAt` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | when the execution has been scheduled to run |  |  |
| `statusAt` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | when the execution result's status has changed last time (queued, passed, failed) |  |  |
| `signature` _[TestWorkflowSignature](#testworkflowsignature) array_ | structured tree of steps |  |  |
| `result` _[TestWorkflowResult](#testworkflowresult)_ |  |  |  |
| `output` _[TestWorkflowOutput](#testworkflowoutput) array_ | additional information from the steps, like referenced executed tests or artifacts |  |  |
| `reports` _[TestWorkflowReport](#testworkflowreport) array_ | generated reports from the steps, like junit |  |  |
| `workflow` _[TestWorkflow](#testworkflow)_ |  |  | Schemaless: \{\} <br /> |
| `resolvedWorkflow` _[TestWorkflow](#testworkflow)_ |  |  | Schemaless: \{\} <br /> |
| `testWorkflowExecutionName` _string_ | test workflow execution name started the test workflow execution |  |  |
| `disableWebhooks` _boolean_ | whether webhooks should be disabled for this execution |  |  |


#### TestWorkflowExecutionList



TestWorkflowExecutionList contains a list of TestWorkflowExecutiom





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `testworkflows.testkube.io/v1` | | |
| `kind` _string_ | `TestWorkflowExecutionList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[TestWorkflowExecution](#testworkflowexecution) array_ |  |  |  |


#### TestWorkflowExecutionRequest



TestWorkflowExecutionRequest contains TestWorkflow execution parameters



_Appears in:_
- [TestWorkflowExecutionSpec](#testworkflowexecutionspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `name` _string_ | custom execution name |  |  |
| `config` _object (keys:string, values:[IntOrString](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#intorstring-intstr-util))_ |  |  |  |
| `testWorkflowExecutionName` _string_ | test workflow execution name started the test workflow execution |  |  |
| `disableWebhooks` _boolean_ | whether webhooks should be disabled for this execution |  |  |


#### TestWorkflowExecutionSpec



TestWorkflowExecutionSpec defines the desired state of TestWorkflowExecution



_Appears in:_
- [TestWorkflowExecution](#testworkflowexecution)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `testWorkflow` _[LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)_ |  |  |  |
| `executionRequest` _[TestWorkflowExecutionRequest](#testworkflowexecutionrequest)_ |  |  |  |




#### TestWorkflowExecutionSummary



TestWorkflowExecutionSummary contains TestWorkflow execution summary



_Appears in:_
- [TestWorkflowStatusSummary](#testworkflowstatussummary)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `id` _string_ | unique execution identifier |  |  |
| `name` _string_ | execution name |  |  |
| `number` _integer_ | sequence number for the execution |  |  |
| `scheduledAt` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | when the execution has been scheduled to run |  |  |
| `statusAt` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | when the execution result's status has changed last time (queued, passed, failed) |  |  |
| `result` _[TestWorkflowResultSummary](#testworkflowresultsummary)_ |  |  |  |
| `workflow` _[TestWorkflowSummary](#testworkflowsummary)_ |  |  |  |


#### TestWorkflowList



TestWorkflowList contains a list of TestWorkflow





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `testworkflows.testkube.io/v1` | | |
| `kind` _string_ | `TestWorkflowList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[TestWorkflow](#testworkflow) array_ |  |  |  |


#### TestWorkflowOutput



TestWorkflowOutput defines output of TestWorkflow



_Appears in:_
- [TestWorkflowExecutionDetails](#testworkflowexecutiondetails)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `ref` _string_ | step reference |  |  |
| `name` _string_ | output kind name |  |  |
| `value` _object (keys:string, values:[DynamicList](#dynamiclist))_ | value returned |  |  |


#### TestWorkflowPause



TestWorkflowPause defines pause of TestWorkflow



_Appears in:_
- [TestWorkflowResult](#testworkflowresult)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `ref` _string_ | step at which it was paused |  |  |
| `pausedAt` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | when the pause has started |  |  |
| `resumedAt` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | when the pause has ended |  |  |


#### TestWorkflowReport



TestWorkflowStepReport contains report of TestWorkflow



_Appears in:_
- [TestWorkflowExecutionDetails](#testworkflowexecutiondetails)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `ref` _string_ | step reference |  |  |
| `kind` _string_ | report kind/type |  |  |
| `file` _string_ | file path to full report in artifact storage |  |  |
| `summary` _[TestWorkflowReportSummary](#testworkflowreportsummary)_ |  |  |  |


#### TestWorkflowReportSummary



TestWorkflowStepReportSummary contains report summary of TestWorkflow



_Appears in:_
- [TestWorkflowReport](#testworkflowreport)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `tests` _integer_ | total number of test cases |  |  |
| `passed` _integer_ | number of passed test cases |  |  |
| `failed` _integer_ | number of failed test cases |  |  |
| `skipped` _integer_ | number of skipped test cases |  |  |
| `errored` _integer_ | number of error test cases |  |  |
| `duration` _integer_ | total duration of all test cases in milliseconds |  |  |


#### TestWorkflowResult



TestWorkflowResult contains result of TestWorkflow



_Appears in:_
- [TestWorkflowExecutionDetails](#testworkflowexecutiondetails)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `predictedStatus` _[TestWorkflowStatus](#testworkflowstatus)_ |  |  | Enum: [queued running paused passed failed aborted] <br /> |
| `queuedAt` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | when the pod was created |  |  |
| `startedAt` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | when the pod has been successfully assigned |  |  |
| `finishedAt` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | when the pod has been completed |  |  |
| `duration` _string_ | Go-formatted (human-readable) duration |  |  |
| `totalDuration` _string_ | Go-formatted (human-readable) total duration (incl. pause) |  |  |
| `durationMs` _integer_ | Duration in milliseconds |  |  |
| `pausedMs` _integer_ | Pause duration in milliseconds |  |  |
| `totalDurationMs` _integer_ | Total duration in milliseconds (incl. pause) |  |  |
| `pauses` _[TestWorkflowPause](#testworkflowpause) array_ |  |  |  |
| `initialization` _[TestWorkflowStepResult](#testworkflowstepresult)_ |  |  |  |
| `steps` _object (keys:string, values:[TestWorkflowStepResult](#testworkflowstepresult))_ |  |  |  |


#### TestWorkflowResultSummary



TestWorkflowResultSummary defines TestWorkflow result summary



_Appears in:_
- [TestWorkflowExecutionSummary](#testworkflowexecutionsummary)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `predictedStatus` _[TestWorkflowStatus](#testworkflowstatus)_ |  |  | Enum: [queued running paused passed failed aborted] <br /> |
| `queuedAt` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | when the pod was created |  |  |
| `startedAt` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | when the pod has been successfully assigned |  |  |
| `finishedAt` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | when the pod has been completed |  |  |
| `duration` _string_ | Go-formatted (human-readable) duration |  |  |
| `totalDuration` _string_ | Go-formatted (human-readable) duration (incl. pause) |  |  |
| `durationMs` _integer_ | Duration in milliseconds |  |  |
| `totalDurationMs` _integer_ | Duration in milliseconds (incl. pause) |  |  |
| `pausedMs` _integer_ | Pause duration in milliseconds |  |  |


#### TestWorkflowSignature



TestWorkflowSignature has signature of TestWorkflow



_Appears in:_
- [TestWorkflowExecutionDetails](#testworkflowexecutiondetails)
- [TestWorkflowSignature](#testworkflowsignature)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `ref` _string_ | step reference |  |  |
| `name` _string_ | step name |  |  |
| `category` _string_ | step category, that may be used as name fallback |  |  |
| `optional` _boolean_ | is the step/group meant to be optional |  |  |
| `negative` _boolean_ | is the step/group meant to be negative |  |  |
| `children` _[TestWorkflowSignature](#testworkflowsignature) array_ |  |  | Schemaless: \{\} <br /> |


#### TestWorkflowSpec



TestWorkflowSpec defines the desired state of TestWorkflow



_Appears in:_
- [TestWorkflow](#testworkflow)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `use` _[TemplateRef](#templateref) array_ | templates to include at a top-level of workflow |  |  |
| `events` _[Event](#event) array_ | events triggering execution of the test workflow |  |  |
| `config` _object (keys:string, values:[ParameterSchema](#parameterschema))_ | make the instance configurable with some input data for scheduling it |  |  |
| `content` _[Content](#content)_ | global content that should be fetched into all containers |  |  |
| `container` _[ContainerConfig](#containerconfig)_ | defaults for the containers for all the TestWorkflow steps |  |  |
| `job` _[JobConfig](#jobconfig)_ | configuration for the scheduled job |  |  |
| `pod` _[PodConfig](#podconfig)_ | configuration for the scheduled pod |  |  |
| `notifications` _[NotificationsConfig](#notificationsconfig)_ | configuration for notifications<br />Deprecated: field is not used |  |  |
| `services` _object (keys:string, values:[ServiceSpec](#servicespec))_ | list of accompanying services to start |  |  |
| `setup` _[Step](#step) array_ | steps for setting up the workflow |  |  |
| `steps` _[Step](#step) array_ | steps to execute in the workflow |  |  |
| `after` _[Step](#step) array_ | steps to run at the end of the workflow |  |  |


#### TestWorkflowSpecBase







_Appears in:_
- [TestWorkflowSpec](#testworkflowspec)
- [TestWorkflowTemplateSpec](#testworkflowtemplatespec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `events` _[Event](#event) array_ | events triggering execution of the test workflow |  |  |
| `config` _object (keys:string, values:[ParameterSchema](#parameterschema))_ | make the instance configurable with some input data for scheduling it |  |  |
| `content` _[Content](#content)_ | global content that should be fetched into all containers |  |  |
| `container` _[ContainerConfig](#containerconfig)_ | defaults for the containers for all the TestWorkflow steps |  |  |
| `job` _[JobConfig](#jobconfig)_ | configuration for the scheduled job |  |  |
| `pod` _[PodConfig](#podconfig)_ | configuration for the scheduled pod |  |  |
| `notifications` _[NotificationsConfig](#notificationsconfig)_ | configuration for notifications<br />Deprecated: field is not used |  |  |


#### TestWorkflowStatus

_Underlying type:_ _string_

TestWorkflowStatus has status of TestWorkflow

_Validation:_
- Enum: [queued running paused passed failed aborted]

_Appears in:_
- [TestWorkflowResult](#testworkflowresult)
- [TestWorkflowResultSummary](#testworkflowresultsummary)

| Field | Description |
| --- | --- |
| `queued` |  |
| `running` |  |
| `paused` |  |
| `passed` |  |
| `failed` |  |
| `aborted` |  |




#### TestWorkflowStepResult



TestWorkflowStepResult contains step result of TestWorkflow



_Appears in:_
- [TestWorkflowResult](#testworkflowresult)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `errorMessage` _string_ |  |  |  |
| `exitCode` _integer_ |  |  |  |
| `queuedAt` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | when the container was created |  |  |
| `startedAt` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | when the container was started |  |  |
| `finishedAt` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | when the container was finished |  |  |




#### TestWorkflowSummary



TestWorkflowSummary fas TestWorkflow summary



_Appears in:_
- [TestWorkflowExecutionSummary](#testworkflowexecutionsummary)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `name` _string_ |  |  |  |
| `namespace` _string_ |  |  |  |
| `labels` _object (keys:string, values:string)_ |  |  |  |
| `annotations` _object (keys:string, values:string)_ |  |  |  |


#### TestWorkflowTemplate



TestWorkflowTemplate is the Schema for the workflows API



_Appears in:_
- [TestWorkflowTemplateList](#testworkflowtemplatelist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `testworkflows.testkube.io/v1` | | |
| `kind` _string_ | `TestWorkflowTemplate` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `description` _string_ | TestWorkflowTemplate readable description |  |  |
| `spec` _[TestWorkflowTemplateSpec](#testworkflowtemplatespec)_ | TestWorkflowTemplate specification |  |  |


#### TestWorkflowTemplateList



TestWorkflowTemplateList contains a list of TestWorkflowTemplate





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `testworkflows.testkube.io/v1` | | |
| `kind` _string_ | `TestWorkflowTemplateList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[TestWorkflowTemplate](#testworkflowtemplate) array_ |  |  |  |


#### TestWorkflowTemplateSpec



TestWorkflowTemplateSpec defines the desired state of TestWorkflow



_Appears in:_
- [TestWorkflowTemplate](#testworkflowtemplate)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `events` _[Event](#event) array_ | events triggering execution of the test workflow |  |  |
| `config` _object (keys:string, values:[ParameterSchema](#parameterschema))_ | make the instance configurable with some input data for scheduling it |  |  |
| `content` _[Content](#content)_ | global content that should be fetched into all containers |  |  |
| `container` _[ContainerConfig](#containerconfig)_ | defaults for the containers for all the TestWorkflow steps |  |  |
| `job` _[JobConfig](#jobconfig)_ | configuration for the scheduled job |  |  |
| `pod` _[PodConfig](#podconfig)_ | configuration for the scheduled pod |  |  |
| `notifications` _[NotificationsConfig](#notificationsconfig)_ | configuration for notifications<br />Deprecated: field is not used |  |  |
| `services` _object (keys:string, values:[IndependentServiceSpec](#independentservicespec))_ | list of accompanying services to start |  |  |
| `setup` _[IndependentStep](#independentstep) array_ | steps for setting up the workflow |  |  |
| `steps` _[IndependentStep](#independentstep) array_ | steps to execute in the workflow |  |  |
| `after` _[IndependentStep](#independentstep) array_ | steps to run at the end of the workflow |  |  |


