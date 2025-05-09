---
title: "testkube get"
---
<head>
  <meta name="docsearch:indexPrefix" content="reference-doc" />
</head>

## testkube get

Get resources

### Synopsis

Get available resources, get single item or list

```
testkube get <resourceName> [flags]
```

### Options

```
      --go-template string   go template to render (default "{{.}}")
  -h, --help                 help for get
  -o, --output string        output type can be one of json|yaml|pretty|go (default "pretty")
```

### Options inherited from parent commands

```
  -a, --api-uri string          api uri, default value read from config if set (default "http://localhost:8088")
  -c, --client string           client used for connecting to Testkube API one of proxy|direct|cluster (default "proxy")
      --header stringToString   headers for direct client key value pair: --header name=value (default [])
      --insecure                insecure connection for direct client
      --namespace string        Kubernetes namespace, default value read from config if set (default "testkube")
      --verbose                 show additional debug messages
```

### SEE ALSO

* [testkube](testkube.md)	 - Testkube entrypoint for kubectl plugin
* [testkube get agent](testkube-get-agent.md)	 - 
* [testkube get artifact](testkube-get-artifact.md)	 - List artifacts of the given test, test suite or test workflow execution name
* [testkube get context](testkube-get-context.md)	 - Set context for Testkube Pro
* [testkube get execution](testkube-get-execution.md)	 - Lists or gets test executions
* [testkube get executor](testkube-get-executor.md)	 - Gets executor details
* [testkube get runner](testkube-get-runner.md)	 - 
* [testkube get template](testkube-get-template.md)	 - Get template details.
* [testkube get test](testkube-get-test.md)	 - Get all available tests
* [testkube get testsource](testkube-get-testsource.md)	 - Get test source details
* [testkube get testsuite](testkube-get-testsuite.md)	 - Get test suite by name
* [testkube get testsuiteexecution](testkube-get-testsuiteexecution.md)	 - Gets TestSuite Execution details
* [testkube get testworkflow](testkube-get-testworkflow.md)	 - Get all available test workflows
* [testkube get testworkflowexecution](testkube-get-testworkflowexecution.md)	 - Gets TestWorkflow execution details
* [testkube get testworkflowtemplate](testkube-get-testworkflowtemplate.md)	 - Get all available test workflow templates
* [testkube get webhook](testkube-get-webhook.md)	 - Get webhook details
* [testkube get webhooktemplate](testkube-get-webhooktemplate.md)	 - Get webhook template details

