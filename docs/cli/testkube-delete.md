---
title: "testkube delete"
---
<head>
  <meta name="docsearch:indexPrefix" content="reference-doc" />
</head>

## testkube delete

Delete resources

```
testkube delete <resourceName> [flags]
```

### Options

```
  -c, --client string   Client used for connecting to testkube API one of proxy|direct|cluster (default "proxy")
  -h, --help            help for delete
      --verbose         should I show additional debug messages
```

### Options inherited from parent commands

```
  -a, --api-uri string          api uri, default value read from config if set (default "http://localhost:8088")
      --header stringToString   headers for direct client key value pair: --header name=value (default [])
      --insecure                insecure connection for direct client
      --namespace string        Kubernetes namespace, default value read from config if set (default "testkube")
```

### SEE ALSO

* [testkube](testkube.md)	 - Testkube entrypoint for kubectl plugin
* [testkube delete agent](testkube-delete-agent.md)	 - 
* [testkube delete executor](testkube-delete-executor.md)	 - Delete Executor
* [testkube delete template](testkube-delete-template.md)	 - Delete a template.
* [testkube delete test](testkube-delete-test.md)	 - Delete Test
* [testkube delete testsource](testkube-delete-testsource.md)	 - Delete test source
* [testkube delete testsuite](testkube-delete-testsuite.md)	 - Delete test suite
* [testkube delete testworkflow](testkube-delete-testworkflow.md)	 - Delete test workflows
* [testkube delete testworkflowtemplate](testkube-delete-testworkflowtemplate.md)	 - Delete test workflow templates
* [testkube delete webhook](testkube-delete-webhook.md)	 - Delete webhook
* [testkube delete webhooktemplate](testkube-delete-webhooktemplate.md)	 - Delete webhook template

