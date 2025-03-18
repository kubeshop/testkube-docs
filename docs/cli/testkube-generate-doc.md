---
title: "testkube generate doc"
---
## testkube generate doc

Generate docs for kubectl testkube

### Synopsis

Generate docs for kubectl testkube

```
testkube generate doc [flags]
```

### Options

```
  -h, --help   help for doc
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

* [testkube generate](testkube-generate.md)	 - Generate resources commands

