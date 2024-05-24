## testkube get test

Get all available tests

### Synopsis

Getting all available tests from given namespace - if no namespace given "testkube" namespace is used

```
testkube get test <testName> [flags]
```

### Options

```
      --crd-only        show only test crd
  -h, --help            help for test
  -l, --label strings   label key value pair: --label key1=value1
      --no-execution    don't show latest execution
```

### Options inherited from parent commands

```
      --go-template string   go template to render (default "{{.}}")
  -o, --output string        output type can be one of json|yaml|pretty|go (default "pretty")
```

### SEE ALSO

* [testkube get](testkube_get.md)	 - Get resources

