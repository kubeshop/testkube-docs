---
title: "testkube update webhook"
---
## testkube update webhook

Update Webhook

### Synopsis

Update Webhook Custom Resource

```
testkube update webhook [flags]
```

### Options

```
      --config stringToString               webhook config variable with csv coluums (value=data or secret=namespace;name;key): --config var1="value=data" or --config var2="secret=ns1;name1;key1" (default [])
      --disable                             disable webhook
  -e, --events stringArray                  event types handled by webhook e.g. start-test|end-test
      --header stringToString               webhook header value pair (golang template supported): --header Content-Type=application/xml (default [])
  -h, --help                                help for webhook
  -l, --label stringToString                label key value pair: --label key1=value1 (default [])
  -n, --name string                         unique webhook name - mandatory
      --parameter stringToString            webhook parameter variable with csv coluums (description;required;example;default;pattern): --parameter var3="descr;true;12345;0;[0-9]*" (default [])
      --payload-field string                field to use for notification object payload
      --payload-template string             if webhook needs to send a custom notification, then a path to template file should be provided
      --payload-template-reference string   reference to payload template to use for the webhook
      --selector string                     expression to select tests, test suites, test workflows for webhook events: --selector app=backend
  -u, --uri string                          URI which should be called when given event occurs (golang template supported)
      --webhook-template-reference string   reference to webhook to use as template for the webhook
```

### Options inherited from parent commands

```
  -a, --api-uri string     api uri, default value read from config if set (default "http://localhost:8088")
  -c, --client string      client used for connecting to Testkube API one of proxy|direct|cluster (default "proxy")
      --insecure           insecure connection for direct client
      --namespace string   Kubernetes namespace, default value read from config if set (default "testkube")
      --verbose            show additional debug messages
```

### SEE ALSO

* [testkube update](testkube_update.md)	 - Update resource

