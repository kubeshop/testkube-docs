
<head>
  <meta name="og:type" content="reference-doc" />
</head>

## testkube config headers

Set headers for testkube client

```
testkube config headers <name1=value1> <name2=value2> ... [flags]
```

### Options

```
  -h, --help   help for headers
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

* [testkube config](testkube_config.md)	 - Set feature configuration value

