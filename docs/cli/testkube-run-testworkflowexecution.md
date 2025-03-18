---
title: "testkube run testworkflowexecution"
---
## testkube run testworkflowexecution

ReRun test workflow execution

```
testkube run testworkflowexecution [id] [flags]
```

### Options

```
  -d, --download-artifacts          download artifacts automatically
      --download-dir string         download dir (default "artifacts")
      --format string               data format for storing files, one of folder|archive (default "folder")
  -h, --help                        help for testworkflowexecution
      --mask stringArray            regexp to filter downloaded files, single or comma separated, like report/.* or .*\.json,.*\.js$
      --parallel-step-index int     test workflow parallel step index starting from 0
      --parallel-step-name string   test workflow parallel step name or reference
      --service-index int           test workflow service index starting from 0
      --service-name string         test workflow service name
  -f, --watch                       watch for changes after start
```

### Options inherited from parent commands

```
  -a, --api-uri string          api uri, default value read from config if set (default "http://localhost:8088")
  -c, --client string           client used for connecting to Testkube API one of proxy|direct|cluster (default "proxy")
      --go-template string      go template to render (default "{{.}}")
      --header stringToString   headers for direct client key value pair: --header name=value (default [])
      --insecure                insecure connection for direct client
      --namespace string        Kubernetes namespace, default value read from config if set (default "testkube")
  -o, --output string           output type can be one of json|yaml|pretty|go (default "pretty")
      --verbose                 show additional debug messages
```

### SEE ALSO

* [testkube run](testkube-run.md)	 - Runs tests, test suites, test workflows or test workflow executions

