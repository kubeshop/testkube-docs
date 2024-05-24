## testkube get testworkflowexecution

Gets TestWorkflow execution details

### Synopsis

Gets TestWorkflow execution details by ID, or list if id is not passed

```
testkube get testworkflowexecution [executionID] [flags]
```

### Options

```
  -h, --help                  help for testworkflowexecution
  -l, --label strings         label key value pair: --label key1=value1
      --limit int             max number of records to return (default 1000)
  -w, --testworkflow string   test workflow name
```

### Options inherited from parent commands

```
      --go-template string   go template to render (default "{{.}}")
  -o, --output string        output type can be one of json|yaml|pretty|go (default "pretty")
```

### SEE ALSO

* [testkube get](testkube_get.md)	 - Get resources

