# API Reference

## Packages
- [testworkflows.testkube.io/v1](#testworkflowstestkubeiov1)


## testworkflows.testkube.io/v1

Package v1 contains API Schema definitions for the Test Workflows v1 API group

### Resource Types
- [TestWorkflow](#testworkflow)
- [TestWorkflowExecution](#testworkflowexecution)
- [TestWorkflowExecutionList](#testworkflowexecutionlist)
- [TestWorkflowList](#testworkflowlist)
- [TestWorkflowTemplate](#testworkflowtemplate)
- [TestWorkflowTemplateList](#testworkflowtemplatelist)



### ArtifactCompression







_Appears in:_
- [StepArtifacts](#stepartifacts)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `name` _string_ | artifact name |  | MinLength: 1 <br />Required: \{\} <br /> |


### ContainerConfig







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


### Content







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


### ContentFile







_Appears in:_
- [Content](#content)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `path` _string_ | path where the file should be accessible at |  | MinLength: 1 <br /> |
| `content` _string_ | plain-text content to put inside |  |  |
| `contentFrom` _[EnvVarSource](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#envvarsource-v1-core)_ | external source to use |  |  |
| `mode` _integer_ | mode to use for the file |  |  |


### ContentGit







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


### ContentTarball







_Appears in:_
- [Content](#content)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `url` _string_ | url for the tarball to extract |  |  |
| `path` _string_ | path where the tarball should be extracted |  |  |
| `mount` _boolean_ | should it mount a new volume there |  |  |


### CronJobConfig



cron job configuration



_Appears in:_
- [Event](#event)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `cron` _string_ | cron schedule to run a test workflow |  |  |
| `labels` _object (keys:string, values:string)_ | labels to attach to the cron job |  |  |
| `annotations` _object (keys:string, values:string)_ | annotations to attach to the cron job |  |  |


### DynamicList





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


### Event







_Appears in:_
- [TestWorkflowSpec](#testworkflowspec)
- [TestWorkflowSpecBase](#testworkflowspecbase)
- [TestWorkflowTemplateSpec](#testworkflowtemplatespec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `cronjob` _[CronJobConfig](#cronjobconfig)_ |  |  |  |


### IndependentServiceSpec







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


### IndependentStep







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


### IndependentStepParallel

_Underlying type:_ _[struct\{Parallelism int32 "json:\"parallelism,omitempty\""; StepExecuteStrategy "json:\",inline\" expr:\"include\""; Description string "json:\"description,omitempty\" expr:\"template\""; Logs *string "json:\"logs,omitempty\" expr:\"expression\""; Transfer []StepParallelTransfer "json:\"transfer,omitempty\" expr:\"include\""; Fetch []StepParallelFetch "json:\"fetch,omitempty\" expr:\"include\""; TestWorkflowTemplateSpec "json:\",inline\" expr:\"include\""; StepControl "json:\",inline\" expr:\"include\""; StepOperations "json:\",inline\" expr:\"include\""}](#struct{parallelism-int32-"json:\"parallelism,omitempty\"";-stepexecutestrategy-"json:\",inline\"-expr:\"include\"";-description-string-"json:\"description,omitempty\"-expr:\"template\"";-logs-*string-"json:\"logs,omitempty\"-expr:\"expression\"";-transfer-[]stepparalleltransfer-"json:\"transfer,omitempty\"-expr:\"include\"";-fetch-[]stepparallelfetch-"json:\"fetch,omitempty\"-expr:\"include\"";-testworkflowtemplatespec-"json:\",inline\"-expr:\"include\"";-stepcontrol-"json:\",inline\"-expr:\"include\"";-stepoperations-"json:\",inline\"-expr:\"include\""})_





_Appears in:_
- [IndependentStep](#independentstep)



### JobConfig







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


### NotificationsConfig







_Appears in:_
- [TestWorkflowSpec](#testworkflowspec)
- [TestWorkflowSpecBase](#testworkflowspecbase)
- [TestWorkflowTemplateSpec](#testworkflowtemplatespec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `disableWebhooks` _boolean_ |  |  |  |


### ParameterNumberSchema







_Appears in:_
- [ParameterSchema](#parameterschema)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `minimum` _integer_ | minimum value for the number (inclusive) |  |  |
| `maximum` _integer_ | maximum value for the number (inclusive) |  |  |
| `exclusiveMinimum` _integer_ | minimum value for the number (exclusive) |  |  |
| `exclusiveMaximum` _integer_ | maximum value for the number (exclusive) |  |  |
| `multipleOf` _integer_ | the number needs to be multiple of this value |  |  |


### ParameterSchema







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


### ParameterStringSchema







_Appears in:_
- [ParameterSchema](#parameterschema)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `format` _string_ | predefined format for the string |  |  |
| `pattern` _string_ | regular expression to match |  |  |
| `minLength` _integer_ | minimum length for the string |  |  |
| `maxLength` _integer_ | maximum length for the string |  |  |


### ParameterType

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


### PodConfig







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


### Resources







_Appears in:_
- [ContainerConfig](#containerconfig)
- [IndependentServiceSpec](#independentservicespec)
- [ServiceSpec](#servicespec)
- [StepRun](#steprun)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `limits` _object (keys:[ResourceName](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#resourcename-v1-core), values:[IntOrString](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#intorstring-intstr-util))_ | resource limits for the container |  |  |
| `requests` _object (keys:[ResourceName](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#resourcename-v1-core), values:[IntOrString](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#intorstring-intstr-util))_ | resource requests for the container |  |  |


### RetryPolicy







_Appears in:_
- [IndependentStep](#independentstep)
- [Step](#step)
- [StepControl](#stepcontrol)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `count` _integer_ | how many times at most it should retry |  | Minimum: 1 <br />Required: \{\} <br /> |
| `until` _string_ | until when it should retry (defaults to: "passed") |  |  |


### ServiceRestartPolicy

_Underlying type:_ _string_





_Appears in:_
- [IndependentServiceSpec](#independentservicespec)
- [ServiceSpec](#servicespec)

| Field | Description |
| --- | --- |
| `OnFailure` |  |
| `Never` |  |


### ServiceSpec







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


### Step







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


### StepArtifacts







_Appears in:_
- [IndependentStep](#independentstep)
- [Step](#step)
- [StepOperations](#stepoperations)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `workingDir` _string_ | working directory to override, so it will be used as a base dir |  |  |
| `compress` _[ArtifactCompression](#artifactcompression)_ | compression options for the artifacts |  |  |
| `paths` _string array_ | paths to fetch from the container |  |  |


### StepControl







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


### StepDefaults







_Appears in:_
- [IndependentStep](#independentstep)
- [Step](#step)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `container` _[ContainerConfig](#containerconfig)_ | defaults for the containers in this step |  |  |
| `workingDir` _string_ | working directory to use for this step |  |  |


### StepExecute







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


### StepExecuteStrategy







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


### StepExecuteTest







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


### StepExecuteWorkflow







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


### StepMeta







_Appears in:_
- [IndependentStep](#independentstep)
- [Step](#step)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `name` _string_ | readable name for the step |  |  |
| `condition` _string_ | expression to declare under which conditions the step should be run<br />defaults to: "passed", except artifacts where it defaults to "always" |  |  |


### StepOperations







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


### StepParallel

_Underlying type:_ _[struct\{Parallelism int32 "json:\"parallelism,omitempty\""; StepExecuteStrategy "json:\",inline\" expr:\"include\""; Description string "json:\"description,omitempty\" expr:\"template\""; Logs *string "json:\"logs,omitempty\" expr:\"expression\""; Transfer []StepParallelTransfer "json:\"transfer,omitempty\" expr:\"include\""; Fetch []StepParallelFetch "json:\"fetch,omitempty\" expr:\"include\""; TestWorkflowSpec "json:\",inline\" expr:\"include\""; StepControl "json:\",inline\" expr:\"include\""; StepOperations "json:\",inline\" expr:\"include\""; Template *TemplateRef "json:\"template,omitempty\" expr:\"include\""}](#struct{parallelism-int32-"json:\"parallelism,omitempty\"";-stepexecutestrategy-"json:\",inline\"-expr:\"include\"";-description-string-"json:\"description,omitempty\"-expr:\"template\"";-logs-*string-"json:\"logs,omitempty\"-expr:\"expression\"";-transfer-[]stepparalleltransfer-"json:\"transfer,omitempty\"-expr:\"include\"";-fetch-[]stepparallelfetch-"json:\"fetch,omitempty\"-expr:\"include\"";-testworkflowspec-"json:\",inline\"-expr:\"include\"";-stepcontrol-"json:\",inline\"-expr:\"include\"";-stepoperations-"json:\",inline\"-expr:\"include\"";-template-*templateref-"json:\"template,omitempty\"-expr:\"include\""})_





_Appears in:_
- [Step](#step)





### StepParallelTransfer







_Appears in:_
- [IndependentServiceSpec](#independentservicespec)
- [ServiceSpec](#servicespec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `from` _string_ | path to load the files from |  |  |
| `files` _[DynamicList](#dynamiclist)_ | file patterns to pack |  | Type: dynamicList <br /> |
| `to` _string_ | path where the tarball should be extracted |  |  |
| `mount` _boolean_ | should it mount a new volume there |  |  |


### StepRun







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


### StepSource







_Appears in:_
- [IndependentStep](#independentstep)
- [Step](#step)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `content` _[Content](#content)_ | content that should be fetched for this step |  |  |


### TarballRequest







_Appears in:_
- [StepExecuteTest](#stepexecutetest)
- [StepExecuteWorkflow](#stepexecuteworkflow)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `from` _string_ | path to load the files from |  |  |
| `files` _[DynamicList](#dynamiclist)_ | file patterns to pack |  | Type: dynamicList <br /> |


### TemplateRef



TemplateRef is the reference for the template inclusion



_Appears in:_
- [ServiceSpec](#servicespec)
- [Step](#step)
- [TestWorkflowSpec](#testworkflowspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `name` _string_ | name of the template to include |  |  |
| `config` _object (keys:string, values:[IntOrString](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#intorstring-intstr-util))_ | trait configuration values if needed |  |  |


### TestExecutionRequest







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


### TestWorkflow



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


### TestWorkflowExecution



TestWorkflowExecution is the Schema for the workflows API



_Appears in:_
- [TestWorkflowExecutionList](#testworkflowexecutionlist)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `testworkflows.testkube.io/v1` | | |
| `kind` _string_ | `TestWorkflowExecution` | | |
| `metadata` _[ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#objectmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `spec` _[TestWorkflowExecutionSpec](#testworkflowexecutionspec)_ | TestWorkflowExecution specification |  |  |


### TestWorkflowExecutionDetails



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


### TestWorkflowExecutionList



TestWorkflowExecutionList contains a list of TestWorkflowExecutiom





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `testworkflows.testkube.io/v1` | | |
| `kind` _string_ | `TestWorkflowExecutionList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[TestWorkflowExecution](#testworkflowexecution) array_ |  |  |  |


### TestWorkflowExecutionRequest



TestWorkflowExecutionRequest contains TestWorkflow execution parameters



_Appears in:_
- [TestWorkflowExecutionSpec](#testworkflowexecutionspec)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `name` _string_ | custom execution name |  |  |
| `config` _object (keys:string, values:[IntOrString](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#intorstring-intstr-util))_ |  |  |  |
| `testWorkflowExecutionName` _string_ | test workflow execution name started the test workflow execution |  |  |
| `disableWebhooks` _boolean_ | whether webhooks should be disabled for this execution |  |  |


### TestWorkflowExecutionSpec



TestWorkflowExecutionSpec defines the desired state of TestWorkflowExecution



_Appears in:_
- [TestWorkflowExecution](#testworkflowexecution)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `testWorkflow` _[LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#localobjectreference-v1-core)_ |  |  |  |
| `executionRequest` _[TestWorkflowExecutionRequest](#testworkflowexecutionrequest)_ |  |  |  |




### TestWorkflowExecutionSummary



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


### TestWorkflowList



TestWorkflowList contains a list of TestWorkflow





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `testworkflows.testkube.io/v1` | | |
| `kind` _string_ | `TestWorkflowList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[TestWorkflow](#testworkflow) array_ |  |  |  |


### TestWorkflowOutput



TestWorkflowOutput defines output of TestWorkflow



_Appears in:_
- [TestWorkflowExecutionDetails](#testworkflowexecutiondetails)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `ref` _string_ | step reference |  |  |
| `name` _string_ | output kind name |  |  |
| `value` _object (keys:string, values:[DynamicList](#dynamiclist))_ | value returned |  |  |


### TestWorkflowPause



TestWorkflowPause defines pause of TestWorkflow



_Appears in:_
- [TestWorkflowResult](#testworkflowresult)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `ref` _string_ | step at which it was paused |  |  |
| `pausedAt` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | when the pause has started |  |  |
| `resumedAt` _[Time](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#time-v1-meta)_ | when the pause has ended |  |  |


### TestWorkflowReport



TestWorkflowStepReport contains report of TestWorkflow



_Appears in:_
- [TestWorkflowExecutionDetails](#testworkflowexecutiondetails)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `ref` _string_ | step reference |  |  |
| `kind` _string_ | report kind/type |  |  |
| `file` _string_ | file path to full report in artifact storage |  |  |
| `summary` _[TestWorkflowReportSummary](#testworkflowreportsummary)_ |  |  |  |


### TestWorkflowReportSummary



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


### TestWorkflowResult



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


### TestWorkflowResultSummary



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


### TestWorkflowSignature



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


### TestWorkflowSpec



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


### TestWorkflowSpecBase







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


### TestWorkflowStatus

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




### TestWorkflowStepResult



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




### TestWorkflowSummary



TestWorkflowSummary fas TestWorkflow summary



_Appears in:_
- [TestWorkflowExecutionSummary](#testworkflowexecutionsummary)

| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `name` _string_ |  |  |  |
| `namespace` _string_ |  |  |  |
| `labels` _object (keys:string, values:string)_ |  |  |  |
| `annotations` _object (keys:string, values:string)_ |  |  |  |


### TestWorkflowTemplate



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


### TestWorkflowTemplateList



TestWorkflowTemplateList contains a list of TestWorkflowTemplate





| Field | Description | Default | Validation |
| --- | --- | --- | --- |
| `apiVersion` _string_ | `testworkflows.testkube.io/v1` | | |
| `kind` _string_ | `TestWorkflowTemplateList` | | |
| `metadata` _[ListMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#listmeta-v1-meta)_ | Refer to Kubernetes API documentation for fields of `metadata`. |  |  |
| `items` _[TestWorkflowTemplate](#testworkflowtemplate) array_ |  |  |  |


### TestWorkflowTemplateSpec



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


