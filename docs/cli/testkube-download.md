---
title: "testkube download"
---
## testkube download

Artifacts management commands

```
testkube download <resource> [flags]
```

### Options

```
  -h, --help      help for download
      --verbose   should I show additional debug messages
```

### Options inherited from parent commands

```
  -a, --api-uri string          api uri, default value read from config if set (default "http://localhost:8088")
  -c, --client string           client used for connecting to Testkube API one of proxy|direct|cluster (default "proxy")
      --header stringToString   headers for direct client key value pair: --header name=value (default [])
      --insecure                insecure connection for direct client
      --namespace string        Kubernetes namespace, default value read from config if set (default "testkube")
```

### SEE ALSO

* [testkube](testkube.md)	 - Testkube entrypoint for kubectl plugin
* [testkube download artifact](testkube-download-artifact.md)	 - download artifact
* [testkube download artifacts](testkube-download-artifacts.md)	 - download artifacts
* [testkube download testsuite-artifacts](testkube-download-testsuite-artifacts.md)	 - download test suite artifacts

