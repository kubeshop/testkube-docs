## testkube get testsource

Get test source details

### Synopsis

Get test source, you can change output format, to get single details pass name as first arg

```
testkube get testsource <testSourceName> [flags]
```

### Options

```
      --crd-only        show only test crd
  -h, --help            help for testsource
  -l, --label strings   label key value pair: --label key1=value1
  -n, --name string     unique test source name, you can also pass it as argument
```

### Options inherited from parent commands

```
      --go-template string   go template to render (default "{{.}}")
  -o, --output string        output type can be one of json|yaml|pretty|go (default "pretty")
```

### SEE ALSO

* [testkube get](testkube_get.md)	 - Get resources

