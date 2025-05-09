---
title: "testkube"
sidebar_position: 1
---
<head>
  <meta name="docsearch:indexPrefix" content="reference-doc" />
</head>

## testkube

Testkube entrypoint for kubectl plugin

```
testkube [flags]
```

### Options

```
  -a, --api-uri string          api uri, default value read from config if set (default "http://localhost:8088")
  -c, --client string           client used for connecting to Testkube API one of proxy|direct|cluster (default "proxy")
      --header stringToString   headers for direct client key value pair: --header name=value (default [])
  -h, --help                    help for testkube
      --insecure                insecure connection for direct client
      --namespace string        Kubernetes namespace, default value read from config if set (default "testkube")
      --verbose                 show additional debug messages
```

### SEE ALSO

* [testkube abort](testkube-abort.md)	 - Abort tests or test suites
* [testkube agent](testkube-agent.md)	 - Testkube Pro Agent related commands
* [testkube completion](testkube-completion.md)	 - Generate the autocompletion script for the specified shell
* [testkube config](testkube-config.md)	 - Set feature configuration value
* [testkube create](testkube-create.md)	 - Create resource
* [testkube create-ticket](testkube-create-ticket.md)	 - Create bug ticket
* [testkube dashboard](testkube-dashboard.md)	 - Open Testkube dashboard
* [testkube debug](testkube-debug.md)	 - Print debugging info
* [testkube delete](testkube-delete.md)	 - Delete resources
* [testkube diagnostics](testkube-diagnostics.md)	 - Diagnoze testkube issues with ease
* [testkube disable](testkube-disable.md)	 - Disable feature
* [testkube docker](testkube-docker.md)	 - Testkube Docker commands
* [testkube download](testkube-download.md)	 - Artifacts management commands
* [testkube enable](testkube-enable.md)	 - Enable feature
* [testkube generate](testkube-generate.md)	 - Generate resources commands
* [testkube get](testkube-get.md)	 - Get resources
* [testkube init](testkube-init.md)	 - Init Testkube profiles(standalone-agent|demo|agent)
* [testkube install](testkube-install.md)	 - 
* [testkube login](testkube-login.md)	 - Login to Testkube Pro
* [testkube migrate](testkube-migrate.md)	 - Migrate resources
* [testkube pro](testkube-pro.md)	 - Testkube Pro commands
* [testkube purge](testkube-purge.md)	 - Uninstall Testkube from your current kubectl context
* [testkube run](testkube-run.md)	 - Runs tests, test suites, test workflows or test workflow executions
* [testkube set](testkube-set.md)	 - Set resources
* [testkube status](testkube-status.md)	 - Show status of feature or resource
* [testkube update](testkube-update.md)	 - Update resource
* [testkube upgrade](testkube-upgrade.md)	 - Upgrade Helm chart, install dependencies and run migrations
* [testkube version](testkube-version.md)	 - Shows version and build info
* [testkube watch](testkube-watch.md)	 - Watch tests or test suites

