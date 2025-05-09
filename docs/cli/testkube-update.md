---
title: "testkube update"
---
<head>
  <meta name="docsearch:indexPrefix" content="reference-doc" />
</head>

## testkube update

Update resource

```
testkube update <resourceName> [flags]
```

### Options

```
  -h, --help   help for update
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
* [testkube update agent](testkube-update-agent.md)	 - 
* [testkube update executor](testkube-update-executor.md)	 - Update Executor
* [testkube update template](testkube-update-template.md)	 - Update Template
* [testkube update test](testkube-update-test.md)	 - Update test
* [testkube update testsource](testkube-update-testsource.md)	 - Update TestSource
* [testkube update testsuite](testkube-update-testsuite.md)	 - Update Test Suite
* [testkube update webhook](testkube-update-webhook.md)	 - Update Webhook
* [testkube update webhooktemplate](testkube-update-webhooktemplate.md)	 - Update Webhook Template

