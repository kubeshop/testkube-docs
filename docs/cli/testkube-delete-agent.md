---
title: "testkube delete agent"
---
<head>
  <meta name="docsearch:indexPrefix" content="reference-doc" />
</head>

## testkube delete agent



```
testkube delete agent [flags]
```

### Options

```
  -d, --delete         should it delete agent in the Control Plane
  -h, --help           help for agent
  -D, --no-delete      should it keep the agent definition in the Control Plane
  -U, --no-uninstall   should it keep the agent installed
  -u, --uninstall      should it uninstall the agent too
```

### Options inherited from parent commands

```
  -a, --api-uri string          api uri, default value read from config if set (default "http://localhost:8088")
  -c, --client string           Client used for connecting to testkube API one of proxy|direct|cluster (default "proxy")
      --header stringToString   headers for direct client key value pair: --header name=value (default [])
      --insecure                insecure connection for direct client
      --namespace string        Kubernetes namespace, default value read from config if set (default "testkube")
      --verbose                 should I show additional debug messages
```

### SEE ALSO

* [testkube delete](testkube-delete.md)	 - Delete resources

