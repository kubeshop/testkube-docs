import LegacyWarning from '../_legacy-warning.mdx';

<LegacyWarning />

<head>
  <meta name="og:type" content="reference-doc" />
</head>

# API Reference

## Packages
- [tests.testkube.io/v2](#teststestkubeiov2)


## tests.testkube.io/v2

Package v2 contains API Schema definitions for the testkube v2 API group

### Resource Types
- [Script](#script)
- [ScriptList](#scriptlist)
- [Test](#test)
- [TestList](#testlist)
- [TestSuite](#testsuite)
- [TestSuiteList](#testsuitelist)



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
| `username` _string_ | git auth username for private repositories |  |  |
| `token` _string_ | git auth token for private repositories |  |  |




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


### Script



Script is the Schema for the scripts API



_Appears in:_
- [ScriptList](#scriptlist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v2` | | |
| `kind` _string_ | `Script` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `spec` _[ScriptSpec](#scriptspec)_ |  |  |  |


### ScriptContent







_Appears in:_
- [ScriptSpec](#scriptspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `type` _string_ | script type |  |  |
| `repository` _[Repository](#repository)_ | repository of script content |  |  |
| `data` _string_ | script content body |  |  |
| `uri` _string_ | uri of script content |  |  |


### ScriptList



ScriptList contains a list of Script





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v2` | | |
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
| `content` _[ScriptContent](#scriptcontent)_ | script content object |  |  |
| `tags` _string array_ | script tags |  |  |




### Test



Test is the Schema for the tests API



_Appears in:_
- [TestList](#testlist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v2` | | |
| `kind` _string_ | `Test` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `spec` _[TestSpec](#testspec)_ |  |  |  |


### TestContent



TestContent defines test content



_Appears in:_
- [TestSpec](#testspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `type` _string_ | test type |  |  |
| `repository` _[Repository](#repository)_ | repository of test content |  |  |
| `data` _string_ | test content body |  |  |
| `uri` _string_ | uri of test content |  |  |


### TestList



TestList contains a list of Test





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v2` | | |
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
| `name` _string_ | test execution custom name |  |  |
| `params` _object (keys:string, values:string)_ | DEPRECATED execution params passed to executor |  |  |
| `variables` _object (keys:string, values:[Variable](#variable))_ | Variables are new params with secrets attached |  |  |
| `content` _[TestContent](#testcontent)_ | test content object |  |  |
| `schedule` _string_ | schedule in cron job format for scheduled test execution |  |  |
| `executorArgs` _string array_ | additional executor binary arguments |  |  |




### TestSuite



TestSuite is the Schema for the testsuites API



_Appears in:_
- [TestSuiteList](#testsuitelist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v2` | | |
| `kind` _string_ | `TestSuite` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `spec` _[TestSuiteSpec](#testsuitespec)_ |  |  |  |


### TestSuiteExecutionCore



test suite execution core



_Appears in:_
- [TestSuiteStatus](#testsuitestatus)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `id` _string_ | execution id |  |  |
| `startTime` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | test suite execution start time |  |  |
| `endTime` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | test suite execution end time |  |  |


### TestSuiteExecutionRequest



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




### TestSuiteList



TestSuiteList contains a list of TestSuite





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `tests.testkube.io/v2` | | |
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
| `executionRequest` _[TestSuiteExecutionRequest](#testsuiteexecutionrequest)_ |  |  |  |




### TestSuiteStepDelay



TestSuiteStepDelay contains step delay parameters



_Appears in:_
- [TestSuiteStepSpec](#testsuitestepspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `duration` _integer_ | Duration in ms |  |  |


### TestSuiteStepExecute



TestSuiteStepExecute defines step to be executed



_Appears in:_
- [TestSuiteStepSpec](#testsuitestepspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `namespace` _string_ |  |  |  |
| `name` _string_ |  |  |  |
| `stopOnFailure` _boolean_ |  |  |  |


### TestSuiteStepSpec



TestSuiteStepSpec for particular type will have config for possible step types



_Appears in:_
- [TestSuiteSpec](#testsuitespec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `type` _[TestSuiteStepType](#testsuitesteptype)_ |  |  | Enum: [execute delay] <br /> |
| `execute` _[TestSuiteStepExecute](#testsuitestepexecute)_ |  |  |  |
| `delay` _[TestSuiteStepDelay](#testsuitestepdelay)_ |  |  |  |


### TestSuiteStepType

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


### Variable

_Underlying type:_ _Variable_





_Appears in:_
- [TestSuiteExecutionRequest](#testsuiteexecutionrequest)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `type` _string_ | variable type |  |  |
| `name` _string_ | variable name |  |  |
| `value` _string_ | variable string value |  |  |
| `valueFrom` _[EnvVarSource](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#envvarsource-v1-core)_ | or load it from var source |  |  |


