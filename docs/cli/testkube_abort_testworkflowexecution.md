
<head>
  <meta name="og:type" content="reference-doc" />
</head>

## testkube abort testworkflowexecution

Abort test workflow execution

```
testkube abort testworkflowexecution <executionName> [flags]
```

### Options

```
  -h, --help   help for testworkflowexecution
```

### Options inherited from parent commands

```
  -a, --api-uri string          api uri, default value read from config if set (default "http://localhost:8088")
  -c, --client string           client used for connecting to Testkube API one of proxy|direct|cluster (default "proxy")
      --header stringToString   headers for direct client key value pair: --header name=value (default [])
      --insecure                insecure connection for direct client
      --namespace string        Kubernetes namespace, default value read from config if set (default "testkube")
      --oauth-enabled           enable oauth
      --verbose                 show additional debug messages
```

### SEE ALSO

* [testkube abort](testkube_abort.md)	 - Abort tests or test suites

