## testkube get template

Get template details.

### Synopsis

Get template allows you to change the output format. To get single details, pass the template name as the first argument.

```
testkube get template <templateName> [flags]
```

### Options

```
      --crd-only        show only test crd
  -h, --help            help for template
  -l, --label strings   label key value pair: --label key1=value1
  -n, --name string     unique template name, you can also pass it as argument
```

### Options inherited from parent commands

```
      --go-template string   go template to render (default "{{.}}")
  -o, --output string        output type can be one of json|yaml|pretty|go (default "pretty")
```

### SEE ALSO

* [testkube get](testkube_get.md)	 - Get resources

