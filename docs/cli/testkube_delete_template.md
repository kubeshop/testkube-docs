## testkube delete template

Delete a template.

### Synopsis

Delete a template and pass the template name to be deleted.

```
testkube delete template <templateName> [flags]
```

### Options

```
  -h, --help            help for template
  -l, --label strings   label key value pair: --label key1=value1
  -n, --name string     unique template name, you can also pass it as first argument
```

### Options inherited from parent commands

```
  -c, --client string   Client used for connecting to testkube API one of proxy|direct|cluster (default "proxy")
      --verbose         should I show additional debug messages
```

### SEE ALSO

* [testkube delete](testkube_delete.md)	 - Delete resources

