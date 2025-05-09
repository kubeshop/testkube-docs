---
title: "testkube generate"
---
<head>
  <meta name="docsearch:indexPrefix" content="reference-doc" />
</head>

## testkube generate

Generate resources commands

```
testkube generate <resourceName> [flags]
```

### Options

```
  -h, --help   help for generate
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
* [testkube generate doc](testkube-generate-doc.md)	 - Generate docs for kubectl testkube
* [testkube generate tests-crds](testkube-generate-tests-crds.md)	 - Generate tests CRD file based on directory

