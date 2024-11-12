<head>
  <meta name="docsearch:indexPrefix" content="reference-doc" />
</head>

## testkube get testsuite

Get test suite by name

### Synopsis

Getting test suite from given namespace - if no namespace given "testkube" namespace is used

```
testkube get testsuite <testSuiteName> [flags]
```

### Options

```
      --crd-only        show only test crd
  -h, --help            help for testsuite
  -l, --label strings   label key value pair: --label key1=value1
      --no-execution    don't show latest execution
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

- [testkube get](testkube_get.md) - Get resources
