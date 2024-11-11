
<head>
  <meta name="og:type" content="reference-doc" />
</head>

## testkube docker

Testkube Docker commands

```
testkube docker [flags]
```

### Options

```
  -h, --help   help for docker
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
* [testkube docker init](testkube_docker_init.md)	 - Run Testkube Docker Agent and connect to Testkube Pro environment

