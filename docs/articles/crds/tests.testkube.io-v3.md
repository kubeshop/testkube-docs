<head>
  <meta name="og:type" content="reference-doc" />
</head>

# API Reference

## Packages
- [tests.testkube.io/v3](#teststestkubeiov3)


## tests.testkube.io/v3

Package v3 contains API Schema definitions for the tests v3 API group

### Resource Types
- [Test](#test)
- [TestList](#testlist)
- [TestSuite](#testsuite)
- [TestSuiteList](#testsuitelist)



### ArgsModeType

_Underlying type:_ _ArgsModeType_





_Appears in:_
- [TestSuiteStepExecutionRequest](#testsuitestepexecutionrequest)



### ArtifactRequest



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


### DownloadArtifactOptions



options to download artifacts from previous steps



_Appears in:_
- [TestSuiteBatchStep](#testsuitebatchstep)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `allPreviousSteps` _boolean_ |  |  |  |
| `previousStepNumbers` _integer array_ | previous step numbers starting from 1 |  |  |
| `previousTestNames` _string array_ | previous test names |  |  |


### EnvReference



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


### ExecutionCore



test execution core



_Appears in:_
- [TestStatus](#teststatus)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `id` _string_ | execution id |  |  |
| `number` _integer_ | execution number |  |  |
| `startTime` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | test start time |  |  |
| `endTime` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | test end time |  |  |


### ExecutionRequest



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




### GitAuthType

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


### PodRequest



pod request body



_Appears in:_
- [ExecutionRequest](#executionrequest)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `resources` _[PodResourcesRequest](#podresourcesrequest)_ |  |  |  |
| `podTemplate` _string_ | pod template extensions |  |  |
| `podTemplateReference` _string_ | name of the template resource |  |  |


### PodResourcesRequest



pod resources request specification



_Appears in:_
- [PodRequest](#podrequest)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `requests` _[ResourceRequest](#resourcerequest)_ |  |  |  |
| `limits` _[ResourceRequest](#resourcerequest)_ |  |  |  |


### Repository



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


### ResourceRequest



resource request specification



_Appears in:_
- [PodResourcesRequest](#podresourcesrequest)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `cpu` _string_ | requested cpu units |  |  |
| `memory` _string_ | requested memory units |  |  |




### RunningContextType

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


### SecretRef



SecretRef is the Testkube internal reference for secret storage in Kubernetes secrets



_Appears in:_
- [Repository](#repository)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `name` _string_ | object name |  |  |
| `key` _string_ | object key |  |  |


### Test



Test is the Schema for the tests API



_Appears in:_
- [TestList](#testlist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v3` | | |
| `kind` _string_ | `Test` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `spec` _[TestSpec](#testspec)_ |  |  |  |


### TestContent



TestContent defines test content



_Appears in:_
- [TestSpec](#testspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `type` _[TestContentType](#testcontenttype)_ | test type |  | Enum: [string file-uri git-file git-dir git] <br /> |
| `repository` _[Repository](#repository)_ | repository of test content |  |  |
| `data` _string_ | test content body |  |  |
| `uri` _string_ | uri of test content |  |  |


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


### TestList



TestList contains a list of Test





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v3` | | |
| `kind` _string_ | `TestList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[Test](#test) array_ |  |  |  |


### TestSpec



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




### TestSuite



TestSuite is the Schema for the testsuites API



_Appears in:_
- [TestSuiteList](#testsuitelist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v3` | | |
| `kind` _string_ | `TestSuite` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `spec` _[TestSuiteSpec](#testsuitespec)_ |  |  |  |


### TestSuiteBatchStep



TestSuiteBatchStep is set of steps run in parallel



_Appears in:_
- [TestSuiteSpec](#testsuitespec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `stopOnFailure` _boolean_ |  |  |  |
| `downloadArtifacts` _[DownloadArtifactOptions](#downloadartifactoptions)_ |  |  |  |
| `execute` _[TestSuiteStepSpec](#testsuitestepspec) array_ |  |  |  |


### TestSuiteExecutionCore



TestSuiteExecutionCore defines the observed state of TestSuiteExecution



_Appears in:_
- [TestSuiteStatus](#testsuitestatus)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `id` _string_ | execution id |  |  |
| `startTime` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | test suite execution start time |  |  |
| `endTime` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | test suite execution end time |  |  |


### TestSuiteExecutionRequest



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




### TestSuiteList



TestSuiteList contains a list of TestSuite





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v3` | | |
| `kind` _string_ | `TestSuiteList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[TestSuite](#testsuite) array_ |  |  |  |


### TestSuiteSpec



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




### TestSuiteStepExecutionRequest



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


### TestSuiteStepSpec



TestSuiteStepSpec for particular type will have config for possible step types



_Appears in:_
- [TestSuiteBatchStep](#testsuitebatchstep)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `test` _string_ | object name |  |  |
| `delay` _[Duration](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#duration-v1-meta)_ | delay duration in time units |  | Format: duration <br />Type: string <br /> |
| `executionRequest` _[TestSuiteStepExecutionRequest](#testsuitestepexecutionrequest)_ |  |  |  |


### Variable

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


