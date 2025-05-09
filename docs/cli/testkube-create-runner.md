---
title: "testkube create runner"
---
<head>
  <meta name="docsearch:indexPrefix" content="reference-doc" />
</head>

## testkube create runner



```
testkube create runner [flags]
```

### Options

```
  -e, --env strings     environment ID or slug that the agent have access to
      --floating        create as a floating runner
      --global          make it global runner
      --group string    make it grouped runner
  -h, --help            help for runner
  -l, --label strings   label key value pair: --label key1=value1
```

### Options inherited from parent commands

```
  -a, --api-uri string          api uri, default value read from config if set (default "http://localhost:8088")
  -c, --client string           client used for connecting to Testkube API one of proxy|direct|cluster (default "proxy")
      --crd-only                generate only crd
      --header stringToString   headers for direct client key value pair: --header name=value (default [])
      --insecure                insecure connection for direct client
      --namespace string        Kubernetes namespace, default value read from config if set (default "testkube")
      --verbose                 show additional debug messages
```

### SEE ALSO

* [testkube create](testkube-create.md)	 - Create resource

