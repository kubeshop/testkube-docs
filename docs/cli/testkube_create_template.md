## testkube create template

Create a new Template.

### Synopsis

Create a new Template Custom Resource.

```
testkube create template [flags]
```

### Options

```
      --body string            a path to template file to use as template body
  -h, --help                   help for template
  -l, --label stringToString   label key value pair: --label key1=value1 (default [])
  -n, --name string            unique template name - mandatory
      --template-type string   template type one of job|container|cronjob|scraper|pvc|webhook
      --update                 update, if template already exists
```

### Options inherited from parent commands

```
      --crd-only   generate only crd
```

### SEE ALSO

* [testkube create](testkube_create.md)	 - Create resource

