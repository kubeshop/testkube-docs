## testkube update executor

Update Executor

### Synopsis

Update Executor Custom Resource

```
testkube update executor [flags]
```

### Options

```
      --args stringArray                 args passed to image in executor
      --command stringArray              command passed to image in executor
      --content-type stringArray         list of supported content types for executor
      --docs-uri string                  URI to executor docs
      --executor-type string             executor type, container or job (defaults to job) (default "job")
      --feature stringArray              feature provided by executor
  -h, --help                             help for executor
      --icon-uri string                  URI to executor icon
      --image string                     image used for executor
      --image-pull-secrets stringArray   secret name used to pull the image in executor
  -j, --job-template string              if executor needs to be launched using custom job specification, then a path to template file should be provided
      --job-template-reference string    reference to job template for using with executor
  -l, --label stringToString             label key value pair: --label key1=value1 (default [])
  -n, --name string                      unique executor name - mandatory
      --tooltip stringToString           tooltip key value pair: --tooltip key1=value1 (default [])
  -t, --types stringArray                test types handled by executor
  -u, --uri string                       if resource need to be loaded from URI
      --use-data-dir-as-working-dir      use data dir as working dir for all tests
```

### SEE ALSO

* [testkube update](testkube_update.md)	 - Update resource

