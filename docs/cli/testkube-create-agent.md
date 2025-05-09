---
title: "testkube create agent"
---
<head>
  <meta name="docsearch:indexPrefix" content="reference-doc" />
</head>

## testkube create agent



```
testkube create agent [flags]
```

### Options

```
  -e, --env strings     environment ID or slug that the agent have access to
  -h, --help            help for agent
  -l, --label strings   label key value pair: --label key1=value1
  -t, --type string     agent type, one of: runner, gitops
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

