---
title: "testkube diagnostics"
---
## testkube diagnostics

Diagnoze testkube issues with ease

```
testkube diagnostics [flags]
```

### Options

```
  -f, --file-override string   Pass License file manually (we will not try to locate it automatically)
  -h, --help                   help for diagnostics
  -k, --key-override string    Pass License key manually (we will not try to locate it automatically)
      --offline-override       Pass License key manually (we will not try to locate it automatically)
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
* [testkube diagnostics install](testkube-diagnostics-install.md)	 - Diagnose pre-installation dependencies
* [testkube diagnostics license](testkube-diagnostics-license.md)	 - Diagnose license errors

