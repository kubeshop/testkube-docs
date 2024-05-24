## testkube create testsuite

Create new TestSuite

### Synopsis

Create new TestSuite Custom Resource

```
testkube create testsuite [flags]
```

### Options

```
      --cronjob-template string                    cron job template file path for extensions to cron job template
      --cronjob-template-reference string          reference to cron job template to use for the test
      --execution-name string                      execution name, if empty will be autogenerated
  -f, --file string                                JSON test suite file - will be read from stdin if not specified, look at testkube.TestUpsertRequest
  -h, --help                                       help for testsuite
      --http-proxy string                          http proxy for executor containers
      --https-proxy string                         https proxy for executor containers
      --job-template string                        job template file path for extensions to job template
      --job-template-reference string              reference to job template to use for the test
  -l, --label stringToString                       label key value pair: --label key1=value1 (default [])
      --name string                                Set/Override test suite name
      --pvc-template string                        pvc template file path for extensions to pvc template
      --pvc-template-reference string              reference to pvc template to use for the test
      --schedule string                            test suite schedule in a cron job form: * * * * *
      --scraper-template string                    scraper template file path for extensions to scraper template
      --scraper-template-reference string          reference to scraper template to use for the test
  -s, --secret-variable stringArray                secret variable key value pair: --secret-variable key1=value1
      --secret-variable-reference stringToString   secret variable references in a form name1=secret_name1=secret_key1 (default [])
      --timeout int32                              duration in seconds for test suite to timeout. 0 disables timeout.
      --update                                     update, if test suite already exists
  -v, --variable stringArray                       param key value pair: --variable key1=value1
```

### Options inherited from parent commands

```
      --crd-only   generate only crd
```

### SEE ALSO

* [testkube create](testkube_create.md)	 - Create resource
