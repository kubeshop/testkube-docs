---
title: "testkube watch"
---
## testkube watch

Watch tests or test suites

```
testkube watch <resourceName> [flags]
```

### Options

```
  -h, --help   help for watch
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
* [testkube watch execution](testkube-watch-execution.md)	 - Watch logs output from executor pod
* [testkube watch testsuiteexecution](testkube-watch-testsuiteexecution.md)	 - Watch test suite
* [testkube watch testworkflowexecution](testkube-watch-testworkflowexecution.md)	 - Watch output from test workflow execution

