## testkube get testsuiteexecution

Gets TestSuite Execution details

### Synopsis

Gets TestSuite Execution details by ID, or list if id is not passed

```
testkube get testsuiteexecution [executionID] [flags]
```

### Options

```
  -h, --help                help for testsuiteexecution
  -l, --label strings       label key value pair: --label key1=value1
      --limit int           max number of records to return (default 1000)
      --test-suite string   test suite name
```

### Options inherited from parent commands

```
      --go-template string   go template to render (default "{{.}}")
  -o, --output string        output type can be one of json|yaml|pretty|go (default "pretty")
```

### SEE ALSO

* [testkube get](testkube_get.md)	 - Get resources

