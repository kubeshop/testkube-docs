---
title: "testkube run"
---
## testkube run

Runs tests, test suites, test workflows or test workflow executions

```
testkube run <resourceName> [flags]
```

### Options

```
      --go-template string   go template to render (default "{{.}}")
  -h, --help                 help for run
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
* [testkube run test](testkube-run-test.md)	 - Starts new test
* [testkube run testsuite](testkube-run-testsuite.md)	 - Starts new test suite
* [testkube run testworkflow](testkube-run-testworkflow.md)	 - Starts test workflow execution
* [testkube run testworkflowexecution](testkube-run-testworkflowexecution.md)	 - ReRun test workflow execution

