<head>
  <meta name="og:type" content="reference-doc" />
</head>

# API Reference

## Packages
- [tests.testkube.io/v1](#teststestkubeiov1)


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



### ArgsModeType

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


### ArtifactRequest



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




### EnvReference



Reference to env resource



_Appears in:_
- [ExecutionRequest](#executionrequest)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `reference` _[LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)_ |  |  |  |
| `mount` _boolean_ | whether we shoud mount resource |  |  |
| `mountPath` _string_ | where we shoud mount resource |  |  |
| `mapToVariables` _boolean_ | whether we shoud map to variables from resource |  |  |


### Execution



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


### ExecutionRequest



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


### ExecutionResult



execution result returned from executor



_Appears in:_
- [Execution](#execution)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `errorMessage` _string_ | error message when status is error, separate to output as output can be partial in case of error |  |  |
| `steps` _[ExecutionStepResult](#executionstepresult) array_ | execution steps (for collection of requests) |  |  |
| `reports` _[ExecutionResultReports](#executionresultreports)_ |  |  |  |


### ExecutionResultReports

_Underlying type:_ _[struct\{Junit string "json:\"junit,omitempty\""}](#struct{junit-string-"json:\"junit,omitempty\""})_





_Appears in:_
- [ExecutionResult](#executionresult)





### ExecutionStepResult

_Underlying type:_ _[struct\{Name string "json:\"name\""; Duration string "json:\"duration,omitempty\""; Status string "json:\"status\""; AssertionResults []AssertionResult "json:\"assertionResults,omitempty\""}](#struct{name-string-"json:\"name\"";-duration-string-"json:\"duration,omitempty\"";-status-string-"json:\"status\"";-assertionresults-[]assertionresult-"json:\"assertionresults,omitempty\""})_

execution result data



_Appears in:_
- [ExecutionResult](#executionresult)





### ObjectRef







_Appears in:_
- [SuiteExecution](#suiteexecution)
- [TestSuiteExecutionSpec](#testsuiteexecutionspec)
- [TestSuiteStepExecutionResult](#testsuitestepexecutionresult)
- [TestSuiteStepExecutionResultV2](#testsuitestepexecutionresultv2)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `namespace` _string_ | object kubernetes namespace |  |  |
| `name` _string_ | object name |  |  |


### PodRequest



pod request body



_Appears in:_
- [Execution](#execution)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `resources` _[PodResourcesRequest](#podresourcesrequest)_ |  |  |  |
| `podTemplate` _string_ | pod template extensions |  |  |
| `podTemplateReference` _string_ | name of the template resource |  |  |


### PodResourcesRequest

_Underlying type:_ _[struct\{Requests *ResourceRequest "json:\"requests,omitempty\""; Limits *ResourceRequest "json:\"limits,omitempty\""}](#struct{requests-*resourcerequest-"json:\"requests,omitempty\"";-limits-*resourcerequest-"json:\"limits,omitempty\""})_

pod resources request specification



_Appears in:_
- [PodRequest](#podrequest)



### Repository

_Underlying type:_ _[struct\{Type_ string "json:\"type,omitempty\""; Uri string "json:\"uri,omitempty\""; Branch string "json:\"branch,omitempty\""; Commit string "json:\"commit,omitempty\""; Path string "json:\"path,omitempty\""; UsernameSecret *SecretRef "json:\"usernameSecret,omitempty\""; TokenSecret *SecretRef "json:\"tokenSecret,omitempty\""; CertificateSecret string "json:\"certificateSecret,omitempty\""; WorkingDir string "json:\"workingDir,omitempty\""; AuthType GitAuthType "json:\"authType,omitempty\""}](#struct{type_-string-"json:\"type,omitempty\"";-uri-string-"json:\"uri,omitempty\"";-branch-string-"json:\"branch,omitempty\"";-commit-string-"json:\"commit,omitempty\"";-path-string-"json:\"path,omitempty\"";-usernamesecret-*secretref-"json:\"usernamesecret,omitempty\"";-tokensecret-*secretref-"json:\"tokensecret,omitempty\"";-certificatesecret-string-"json:\"certificatesecret,omitempty\"";-workingdir-string-"json:\"workingdir,omitempty\"";-authtype-gitauthtype-"json:\"authtype,omitempty\""})_

Repository represents VCS repo, currently we're handling Git only



_Appears in:_
- [TestContent](#testcontent)



### RepositoryParameters



repository parameters for tests in git repositories



_Appears in:_
- [TestContentRequest](#testcontentrequest)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `branch` _string_ | branch/tag name for checkout |  |  |
| `commit` _string_ | commit id (sha) for checkout |  |  |
| `path` _string_ | if needed we can checkout particular path (dir or file) in case of BIG/mono repositories |  |  |
| `workingDir` _string_ | if provided we checkout the whole repository and run test from this directory |  |  |




### RunningContext



running context for test or test suite execution



_Appears in:_
- [Execution](#execution)
- [SuiteExecution](#suiteexecution)
- [TestSuiteExecutionRequest](#testsuiteexecutionrequest)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `type` _[RunningContextType](#runningcontexttype)_ | One of possible context types |  | Enum: [user-cli user-ui testsuite testtrigger scheduler testexecution testsuiteexecution] <br /> |
| `context` _string_ | Context value depending from its type |  |  |


### RunningContextType

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


### Script



Script is the Schema for the scripts API



_Appears in:_
- [ScriptList](#scriptlist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v1` | | |
| `kind` _string_ | `Script` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `spec` _[ScriptSpec](#scriptspec)_ |  |  |  |


### ScriptList



ScriptList contains a list of Script





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v1` | | |
| `kind` _string_ | `ScriptList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[Script](#script) array_ |  |  |  |


### ScriptSpec



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






### SuiteExecution



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




### Template



Template is the Schema for the Templates API



_Appears in:_
- [TemplateList](#templatelist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v1` | | |
| `kind` _string_ | `Template` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `spec` _[TemplateSpec](#templatespec)_ |  |  |  |


### TemplateList



TemplateList contains a list of Template





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v1` | | |
| `kind` _string_ | `TemplateList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[Template](#template) array_ |  |  |  |


### TemplateSpec



TemplateSpec defines the desired state of Template



_Appears in:_
- [Template](#template)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `type` _[TemplateType](#templatetype)_ |  |  | Enum: [job container cronjob scraper pvc webhook pod] <br /> |
| `body` _string_ | template body to use |  |  |




### TemplateType

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


### Test



Test is the Schema for the tests API



_Appears in:_
- [TestList](#testlist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v1` | | |
| `kind` _string_ | `Test` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `spec` _[TestSpec](#testspec)_ |  |  |  |


### TestContent



TestContent defines test content



_Appears in:_
- [Execution](#execution)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `type` _[TestContentType](#testcontenttype)_ | test type |  | Enum: [string file-uri git-file git-dir git] <br /> |
| `repository` _[Repository](#repository)_ | repository of test content |  |  |
| `data` _string_ | test content body |  |  |
| `uri` _string_ | uri of test content |  |  |


### TestContentRequest



test content request body



_Appears in:_
- [TestSuiteExecutionRequest](#testsuiteexecutionrequest)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `repository` _[RepositoryParameters](#repositoryparameters)_ |  |  |  |


### TestContentType

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


### TestExecution



TestExecution is the Schema for the testexecutions API



_Appears in:_
- [TestExecutionList](#testexecutionlist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v1` | | |
| `kind` _string_ | `TestExecution` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `spec` _[TestExecutionSpec](#testexecutionspec)_ |  |  |  |


### TestExecutionList



TestExecutionList contains a list of TestExecution





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v1` | | |
| `kind` _string_ | `TestExecutionList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[TestExecution](#testexecution) array_ |  |  |  |


### TestExecutionSpec



TestExecutionSpec defines the desired state of TestExecution



_Appears in:_
- [TestExecution](#testexecution)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `test` _[ObjectRef](#objectref)_ |  |  |  |
| `executionRequest` _[ExecutionRequest](#executionrequest)_ |  |  |  |




### TestList



TestList contains a list of Test





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v1` | | |
| `kind` _string_ | `TestList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[Test](#test) array_ |  |  |  |


### TestSource



TestSource is the Schema for the testsources API



_Appears in:_
- [TestSourceList](#testsourcelist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v1` | | |
| `kind` _string_ | `TestSource` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `spec` _[TestSourceSpec](#testsourcespec)_ |  |  |  |


### TestSourceList



TestSourceList contains a list of TestSource





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v1` | | |
| `kind` _string_ | `TestSourceList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[TestSource](#testsource) array_ |  |  |  |


### TestSourceSpec



TestSourceSpec defines the desired state of TestSource



_Appears in:_
- [TestSource](#testsource)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `type` _[TestSourceType](#testsourcetype)_ |  |  | Enum: [string file-uri git-file git-dir git] <br /> |
| `repository` _[Repository](#repository)_ | repository of test content |  |  |
| `data` _string_ | test content body |  |  |
| `uri` _string_ | uri of test content |  |  |




### TestSourceType

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


### TestSpec



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




### TestStepDelay







_Appears in:_
- [TestStepSpec](#teststepspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `duration` _integer_ | Duration in ms |  |  |


### TestStepExecute







_Appears in:_
- [TestStepSpec](#teststepspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `namespace` _string_ |  |  |  |
| `name` _string_ |  |  |  |
| `stopOnFailure` _boolean_ |  |  |  |


### TestStepSpec



TestStepSpec will of particular type will have config for possible step types



_Appears in:_
- [TestSpec](#testspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `type` _string_ |  |  |  |
| `execute` _[TestStepExecute](#teststepexecute)_ |  |  |  |
| `delay` _[TestStepDelay](#teststepdelay)_ |  |  |  |




### TestSuite



TestSuite is the Schema for the testsuites API



_Appears in:_
- [TestSuiteList](#testsuitelist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v1` | | |
| `kind` _string_ | `TestSuite` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `spec` _[TestSuiteSpec](#testsuitespec)_ |  |  |  |


### TestSuiteBatchStep



set of steps run in parallel



_Appears in:_
- [TestSuiteBatchStepExecutionResult](#testsuitebatchstepexecutionresult)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `stopOnFailure` _boolean_ |  |  |  |
| `execute` _[TestSuiteStep](#testsuitestep) array_ |  |  |  |


### TestSuiteBatchStepExecutionResult



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


### TestSuiteExecution



TestSuiteExecution is the Schema for the testsuiteexecutions API



_Appears in:_
- [TestSuiteExecutionList](#testsuiteexecutionlist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v1` | | |
| `kind` _string_ | `TestSuiteExecution` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `spec` _[TestSuiteExecutionSpec](#testsuiteexecutionspec)_ |  |  |  |


### TestSuiteExecutionList



TestSuiteExecutionList contains a list of TestSuiteExecution





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v1` | | |
| `kind` _string_ | `TestSuiteExecutionList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[TestSuiteExecution](#testsuiteexecution) array_ |  |  |  |


### TestSuiteExecutionRequest



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


### TestSuiteExecutionSpec



TestSuiteExecutionSpec defines the desired state of TestSuiteExecution



_Appears in:_
- [TestSuiteExecution](#testsuiteexecution)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `testSuite` _[ObjectRef](#objectref)_ |  |  |  |
| `executionRequest` _[TestSuiteExecutionRequest](#testsuiteexecutionrequest)_ |  |  |  |




### TestSuiteList



TestSuiteList contains a list of TestSuite





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v1` | | |
| `kind` _string_ | `TestSuiteList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[TestSuite](#testsuite) array_ |  |  |  |


### TestSuiteSpec



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




### TestSuiteStep







_Appears in:_
- [TestSuiteBatchStep](#testsuitebatchstep)
- [TestSuiteStepExecutionResult](#testsuitestepexecutionresult)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `test` _string_ | object name |  |  |
| `delay` _string_ | delay duration in time units |  |  |


### TestSuiteStepDelay



TestSuiteStepDelay contains step delay parameters



_Appears in:_
- [TestSuiteStepSpec](#testsuitestepspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `duration` _integer_ | Duration in ms |  |  |


### TestSuiteStepDelayV2







_Appears in:_
- [TestSuiteStepV2](#testsuitestepv2)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `duration` _integer_ | delay duration in milliseconds |  |  |


### TestSuiteStepExecute



TestSuiteStepExecute defines step to be executed



_Appears in:_
- [TestSuiteStepSpec](#testsuitestepspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `namespace` _string_ |  |  |  |
| `name` _string_ |  |  |  |
| `stopOnFailure` _boolean_ |  |  |  |


### TestSuiteStepExecuteTestV2







_Appears in:_
- [TestSuiteStepV2](#testsuitestepv2)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `namespace` _string_ | object kubernetes namespace |  |  |
| `name` _string_ | object name |  |  |


### TestSuiteStepExecutionResult



execution result returned from executor



_Appears in:_
- [TestSuiteBatchStepExecutionResult](#testsuitebatchstepexecutionresult)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `step` _[TestSuiteStep](#testsuitestep)_ |  |  |  |
| `test` _[ObjectRef](#objectref)_ |  |  |  |
| `execution` _[Execution](#execution)_ |  |  |  |


### TestSuiteStepExecutionResultV2



execution result returned from executor



_Appears in:_
- [SuiteExecution](#suiteexecution)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `step` _[TestSuiteStepV2](#testsuitestepv2)_ |  |  |  |
| `test` _[ObjectRef](#objectref)_ |  |  |  |
| `execution` _[Execution](#execution)_ |  |  |  |


### TestSuiteStepSpec



TestSuiteStepSpec will of particular type will have config for possible step types



_Appears in:_
- [TestSuiteSpec](#testsuitespec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `type` _string_ |  |  |  |
| `execute` _[TestSuiteStepExecute](#testsuitestepexecute)_ |  |  |  |
| `delay` _[TestSuiteStepDelay](#testsuitestepdelay)_ |  |  |  |




### TestSuiteStepV2







_Appears in:_
- [TestSuiteStepExecutionResultV2](#testsuitestepexecutionresultv2)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `stopTestOnFailure` _boolean_ |  |  |  |
| `execute` _[TestSuiteStepExecuteTestV2](#testsuitestepexecutetestv2)_ |  |  |  |
| `delay` _[TestSuiteStepDelayV2](#testsuitestepdelayv2)_ |  |  |  |


### TestTrigger



TestTrigger is the Schema for the testtriggers API



_Appears in:_
- [TestTriggerList](#testtriggerlist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v1` | | |
| `kind` _string_ | `TestTrigger` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `spec` _[TestTriggerSpec](#testtriggerspec)_ |  |  |  |


### TestTriggerAction

_Underlying type:_ _string_

TestTriggerAction defines action for test triggers

_Validation:_
- Enum: [run]

_Appears in:_
- [TestTriggerSpec](#testtriggerspec)

| Field | Description |
| --- | --- |
| `run` |  |


### TestTriggerConcurrencyPolicy

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


### TestTriggerCondition



TestTriggerCondition is used for definition of the condition for test triggers



_Appears in:_
- [TestTriggerConditionSpec](#testtriggerconditionspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `type` _string_ | test trigger condition |  |  |
| `reason` _string_ | test trigger condition reason |  |  |
| `ttl` _integer_ | duration in seconds in the past from current time when the condition is still valid |  |  |


### TestTriggerConditionSpec



TestTriggerConditionSpec defines the condition specification for TestTrigger



_Appears in:_
- [TestTriggerSpec](#testtriggerspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `conditions` _[TestTriggerCondition](#testtriggercondition) array_ | list of test trigger conditions |  |  |
| `timeout` _integer_ | duration in seconds the test trigger waits for conditions, until its stopped |  |  |
| `delay` _integer_ | duration in seconds the test trigger waits between condition check |  |  |




### TestTriggerEvent

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


### TestTriggerExecution

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


### TestTriggerList



TestTriggerList contains a list of TestTrigger





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v1` | | |
| `kind` _string_ | `TestTriggerList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[TestTrigger](#testtrigger) array_ |  |  |  |


### TestTriggerProbe



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


### TestTriggerProbeSpec



TestTriggerProbeSpec defines the probe specification for TestTrigger



_Appears in:_
- [TestTriggerSpec](#testtriggerspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `probes` _[TestTriggerProbe](#testtriggerprobe) array_ | list of test trigger probes |  |  |
| `timeout` _integer_ | duration in seconds the test trigger waits for probes, until its stopped |  |  |
| `delay` _integer_ | duration in seconds the test trigger waits between probes |  |  |


### TestTriggerResource

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


### TestTriggerSelector



TestTriggerSelector is used for selecting Kubernetes Objects



_Appears in:_
- [TestTriggerSpec](#testtriggerspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `name` _string_ | Name selector is used to identify a Kubernetes Object based on the metadata name |  |  |
| `nameRegex` _string_ | kubernetes resource name regex |  |  |
| `namespace` _string_ | Namespace of the Kubernetes object |  |  |
| `labelSelector` _[LabelSelector](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#labelselector-v1-meta)_ | LabelSelector is used to identify a group of Kubernetes Objects based on their metadata labels |  |  |


### TestTriggerSpec



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






### Variable

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


