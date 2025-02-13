## testkube migrate test

Migrate all available tests to test workflows

### Synopsis

Migrate all available tests to test workflows from given namespace - if no namespace given "testkube" namespace is used

```
testkube migrate test <testName> [flags]
```

### Options

```
  -h, --help                help for test
      --migrate-executors   migrate executors for tests (default true)
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

* [testkube migrate](testkube_migrate.md)	 - Migrate resources

