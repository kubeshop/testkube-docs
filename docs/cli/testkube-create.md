---
title: "testkube create"
---
<head>
  <meta name="docsearch:indexPrefix" content="reference-doc" />
</head>

## testkube create

Create resource

```
testkube create <resourceName> [flags]
```

### Options

```
      --crd-only   generate only crd
  -h, --help       help for create
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
* [testkube create agent](testkube-create-agent.md)	 - 
* [testkube create executor](testkube-create-executor.md)	 - Create new Executor
* [testkube create runner](testkube-create-runner.md)	 - 
* [testkube create template](testkube-create-template.md)	 - Create a new Template.
* [testkube create test](testkube-create-test.md)	 - Create new Test
* [testkube create testsource](testkube-create-testsource.md)	 - Create new TestSource
* [testkube create testsuite](testkube-create-testsuite.md)	 - Create new TestSuite
* [testkube create testworkflow](testkube-create-testworkflow.md)	 - Create test workflow
* [testkube create testworkflowtemplate](testkube-create-testworkflowtemplate.md)	 - Create test workflow template
* [testkube create webhook](testkube-create-webhook.md)	 - Create new Webhook
* [testkube create webhooktemplate](testkube-create-webhooktemplate.md)	 - Create new Webhook Template

