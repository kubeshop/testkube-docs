## testkube init agent

Install Testkube Pro Agent and connect to Testkube Pro environment

```
testkube init agent [flags]
```

### Options

```
      --agent-prefix string             usually don't need to be changed [required for custom cloud mode] (default "agent")
      --agent-token string              Testkube Pro agent key [required for centralized mode]
      --agent-uri string                Testkube Pro agent URI [required for centralized mode]
      --api-prefix string               usually don't need to be changed [required for custom cloud mode] (default "api")
      --chart string                    chart name (usually you don't need to change it) (default "kubeshop/testkube")
      --dry-run                         dry run mode - only print commands that would be executed
      --env-id string                   Testkube Pro environment id [required for centralized mode]
      --export                          Export the values.yaml
      --feature-logs-v2                 Logs v2 feature flag
  -h, --help                            help for agent
      --logs-prefix string              usually don't need to be changed [required for custom cloud mode] (default "logs")
      --logs-uri string                 Testkube Pro logs URI [required for centralized mode]
      --master-insecure                 should client connect in insecure mode (will use http instead of https)
      --multi-namespace                 multi namespace mode
      --name string                     installation name (usually you don't need to change it) (default "testkube")
      --namespace string                namespace where to install (default "testkube")
      --no-confirm                      don't ask for confirmation - unatended installation mode
      --no-login testkube set context   Ignore login prompt, set existing token later by testkube set context
      --no-minio                        don't install MinIO
      --no-mongo                        don't install MongoDB
      --no-operator                     should operator be installed (for more instances in multi namespace mode it should be set to true)
      --org-id string                   Testkube Pro organization id [required for centralized mode]
      --root-domain string              usually don't need to be changed [required for custom cloud mode] (default "testkube.io")
      --ui-prefix string                usually don't need to be changed [required for custom cloud mode] (default "app")
      --values string                   path to Helm values file
```

### SEE ALSO

* [testkube init](testkube_init.md)	 - Init Testkube profiles(standalone-agent|demo|agent)

