<head>
  <meta name="docsearch:indexPrefix" content="reference-doc" />
</head>

## testkube create webhooktemplate

Create new Webhook Template

### Synopsis

Create new Webhook Template Custom Resource

```
testkube create webhooktemplate [flags]
```

### Options

```
      --config stringToString               webhook template config variable with csv coluums (value=data or secret=namespace;name;key): --config var1="value=data" or --config var2="secret=ns1;name1;key1" (default [])
      --disable                             disable webhook template
  -e, --events stringArray                  event types handled by webhook template e.g. start-test|end-test
      --header stringToString               webhook template header value pair (golang template supported): --header Content-Type=application/xml (default [])
  -h, --help                                help for webhooktemplate
  -l, --label stringToString                label key value pair: --label key1=value1 (default [])
  -n, --name string                         unique webhook template name - mandatory
      --parameter stringToString            webhook template parameter variable with csv coluums (description;required;example;default;pattern): --parameter var3="descr;true;12345;0;[0-9]*" (default [])
      --payload-field string                field to use for notification object payload
      --payload-template string             if webhook template needs to send a custom notification, then a path to template file should be provided
      --payload-template-reference string   reference to payload template to use for the webhook template
      --selector string                     expression to select tests, test suites, test workflows for webhook template events: --selector app=backend
      --update                              update, if webhook template already exists
  -u, --uri string                          URI which should be called when given event occurs (golang template supported)
```

### Options inherited from parent commands

```
  -a, --api-uri string     api uri, default value read from config if set (default "http://localhost:8088")
  -c, --client string      client used for connecting to Testkube API one of proxy|direct|cluster (default "proxy")
      --crd-only           generate only crd
      --insecure           insecure connection for direct client
      --namespace string   Kubernetes namespace, default value read from config if set (default "testkube")
      --verbose            show additional debug messages
```

### SEE ALSO

- [testkube create](testkube_create.md) - Create resource
