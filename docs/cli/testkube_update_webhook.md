## testkube update webhook

Update Webhook

### Synopsis

Update Webhook Custom Resource

```
testkube update webhook [flags]
```

### Options

```
      --disable                             disable webhook
      --enable                              enable webhook
  -e, --events stringArray                  event types handled by webhook e.g. start-test|end-test
      --header stringToString               webhook header value pair (golang template supported): --header Content-Type=application/xml (default [])
  -h, --help                                help for webhook
  -l, --label stringToString                label key value pair: --label key1=value1 (default [])
  -n, --name string                         unique webhook name - mandatory
      --payload-field string                field to use for notification object payload
      --payload-template string             if webhook needs to send a custom notification, then a path to template file should be provided
      --payload-template-reference string   reference to payload template to use for the webhook
      --selector string                     expression to select tests and test suites for webhook events: --selector app=backend
  -u, --uri string                          URI which should be called when given event occurs (golang template supported)
```

### SEE ALSO

* [testkube update](testkube_update.md)	 - Update resource

