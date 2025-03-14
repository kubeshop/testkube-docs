---
title: "testkube migrate"
---
## testkube migrate

Migrate resources

### Synopsis

Migrate available resources, migrate single item or list

```
testkube migrate <resourceName> [flags]
```

### Options

```
  -h, --help   help for migrate
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
* [testkube migrate agent](testkube_migrate_agent.md)	 - manual migrate agent command
* [testkube migrate test](testkube_migrate_test.md)	 - Migrate all available tests to test workflows
* [testkube migrate testsuite](testkube_migrate_testsuite.md)	 - Migrate all available test suites to test workflows

