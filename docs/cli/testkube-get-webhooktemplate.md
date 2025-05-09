---
title: "testkube get webhooktemplate"
---
<head>
  <meta name="docsearch:indexPrefix" content="reference-doc" />
</head>

## testkube get webhooktemplate

Get webhook template details

### Synopsis

Get webhook template, you can change output format, to get single details pass name as first arg

```
testkube get webhooktemplate <webhookTemplateName> [flags]
```

### Options

```
      --crd-only        show only test crd
  -h, --help            help for webhooktemplate
  -l, --label strings   label key value pair: --label key1=value1
  -n, --name string     unique webhook template name, you can also pass it as argument
```

### Options inherited from parent commands

```
  -a, --api-uri string          api uri, default value read from config if set (default "http://localhost:8088")
  -c, --client string           client used for connecting to Testkube API one of proxy|direct|cluster (default "proxy")
      --go-template string      go template to render (default "{{.}}")
      --header stringToString   headers for direct client key value pair: --header name=value (default [])
      --insecure                insecure connection for direct client
      --namespace string        Kubernetes namespace, default value read from config if set (default "testkube")
  -o, --output string           output type can be one of json|yaml|pretty|go (default "pretty")
      --verbose                 show additional debug messages
```

### SEE ALSO

* [testkube get](testkube-get.md)	 - Get resources

