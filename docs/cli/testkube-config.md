---
title: "testkube config"
---
## testkube config

Set feature configuration value

```
testkube config <feature> <value> [flags]
```

### Options

```
  -h, --help   help for config
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
* [testkube config api-server-name](testkube-config-api-server-name.md)	 - Set api server name for testkube client
* [testkube config api-server-port](testkube-config-api-server-port.md)	 - Set api server port for testkube client
* [testkube config api-uri](testkube-config-api-uri.md)	 - Set api uri for testkube client
* [testkube config headers](testkube-config-headers.md)	 - Set headers for testkube client
* [testkube config namespace](testkube-config-namespace.md)	 - Set namespace for testkube client

