
<head>
  <meta name="og:type" content="reference-doc" />
</head>

## testkube upgrade

Upgrade Helm chart, install dependencies and run migrations

```
testkube upgrade [flags]
```

### Options

```
      --agent-prefix string         usually don't need to be changed [required for custom cloud mode] (default "agent")
      --agent-token string          Testkube Pro agent key [required for centralized mode]
      --agent-uri string            Testkube Pro agent URI [required for centralized mode]
      --agent-uri-override string   agent uri override
      --api-prefix string           usually don't need to be changed [required for custom cloud mode] (default "api")
      --api-uri-override string     api uri override
      --auth-uri-override string    auth uri override
      --chart string                chart name (usually you don't need to change it) (default "kubeshop/testkube")
      --custom-auth                 usually don't need to be changed [required for custom cloud mode]
      --docker-container string     Docker container name for Testkube Docker Agent (default "testkube-agent")
      --dry-run                     dry run mode - only print commands that would be executed
      --embedded-nats               embedded NATS server in agent
      --env-id string               Testkube Pro environment id [required for centralized mode]
      --feature-logs-v2             Logs v2 feature flag
  -h, --help                        help for upgrade
      --logs-prefix string          usually don't need to be changed [required for custom cloud mode] (default "logs")
      --logs-uri string             Testkube Pro logs URI [required for centralized mode]
      --logs-uri-override string    logs service uri override
      --master-insecure             should client connect in insecure mode (will use http instead of https)
      --name string                 installation name (usually you don't need to change it) (default "testkube")
      --namespace string            namespace where to install (default "testkube")
      --no-confirm                  don't ask for confirmation - unatended installation mode
      --no-minio                    don't install MinIO
      --no-mongo                    don't install MongoDB
      --org-id string               Testkube Pro organization id [required for centralized mode]
      --root-domain string          usually don't need to be changed [required for custom cloud mode] (default "testkube.io")
      --ui-prefix string            usually don't need to be changed [required for custom cloud mode] (default "app")
      --ui-uri-override string      ui uri override
      --values string               path to Helm values file
```

### Options inherited from parent commands

```
  -a, --api-uri string          api uri, default value read from config if set (default "http://localhost:8088")
  -c, --client string           client used for connecting to Testkube API one of proxy|direct|cluster (default "proxy")
      --header stringToString   headers for direct client key value pair: --header name=value (default [])
      --insecure                insecure connection for direct client
      --verbose                 show additional debug messages
```

### SEE ALSO

* [testkube](testkube.md)	 - Testkube entrypoint for kubectl plugin

