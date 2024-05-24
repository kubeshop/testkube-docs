## testkube get testworkflowtemplate

Get all available test workflow templates

### Synopsis

Getting all available test workflow templates from given namespace - if no namespace given "testkube" namespace is used

```
testkube get testworkflowtemplate [name] [flags]
```

### Options

```
      --crd-only        show only test workflow template crd
  -h, --help            help for testworkflowtemplate
  -l, --label strings   label key value pair: --label key1=value1
```

### Options inherited from parent commands

```
      --go-template string   go template to render (default "{{.}}")
  -o, --output string        output type can be one of json|yaml|pretty|go (default "pretty")
```

### SEE ALSO

* [testkube get](testkube_get.md)	 - Get resources

