<head>
  <meta name="docsearch:indexPrefix" content="reference-doc" />
</head>

## testkube delete webhook

Delete webhook

### Synopsis

Delete webhook, pass webhook name which should be deleted

```
testkube delete webhook <webhookName> [flags]
```

### Options

```
  -h, --help            help for webhook
  -l, --label strings   label key value pair: --label key1=value1
  -n, --name string     unique webhook name, you can also pass it as first argument
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

- [testkube delete](testkube_delete.md) - Delete resources
