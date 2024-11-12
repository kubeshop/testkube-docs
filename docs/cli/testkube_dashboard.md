
<head>
  <meta name="og:type" content="reference-doc" />
</head>

## testkube dashboard

Open Testkube dashboard

### Synopsis

Open Testkube dashboard

```
testkube dashboard [flags]
```

### Options

```
  -h, --help               help for dashboard
  -n, --namespace string   Namespace to install Testkube On-Prem demo
      --skip-browser       skip opening dashboard in the browser, only for on-premise installation
      --verbose            show additional debug messages
```

### Options inherited from parent commands

```
  -a, --api-uri string          api uri, default value read from config if set (default "http://localhost:8088")
  -c, --client string           client used for connecting to Testkube API one of proxy|direct|cluster (default "proxy")
      --header stringToString   headers for direct client key value pair: --header name=value (default [])
      --insecure                insecure connection for direct client
```

### SEE ALSO

* [testkube](testkube.md)	 - Testkube entrypoint for kubectl plugin

