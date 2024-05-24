## testkube get execution

Lists or gets test executions

### Synopsis

Getting list of execution for given test name or recent executions if there is no test name passed

```
testkube get execution [executionID][executionName] [flags]
```

### Options

```
  -h, --help            help for execution
  -l, --label strings   label key value pair: --label key1=value1
      --limit int       records limit (default 10)
      --logs-only       show only execution logs
      --test string     test id
```

### Options inherited from parent commands

```
      --go-template string   go template to render (default "{{.}}")
  -o, --output string        output type can be one of json|yaml|pretty|go (default "pretty")
```

### SEE ALSO

* [testkube get](testkube_get.md)	 - Get resources

