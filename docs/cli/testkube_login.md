## testkube login

Login to Testkube Pro

```
testkube login [flags]
```

### Options

```
      --agent-prefix string   usually don't need to be changed [required for custom cloud mode] (default "agent")
      --agent-token string    Testkube Pro agent key [required for centralized mode]
      --agent-uri string      Testkube Pro agent URI [required for centralized mode]
      --api-prefix string     usually don't need to be changed [required for custom cloud mode] (default "api")
      --env-id string         Testkube Pro environment id [required for centralized mode]
      --feature-logs-v2       Logs v2 feature flag
  -h, --help                  help for login
      --logs-prefix string    usually don't need to be changed [required for custom cloud mode] (default "logs")
      --logs-uri string       Testkube Pro logs URI [required for centralized mode]
      --master-insecure       should client connect in insecure mode (will use http instead of https)
      --org-id string         Testkube Pro organization id [required for centralized mode]
      --root-domain string    usually don't need to be changed [required for custom cloud mode] (default "testkube.io")
      --ui-prefix string      usually don't need to be changed [required for custom cloud mode] (default "app")
```

### SEE ALSO

* [testkube](testkube.md)	 - Testkube entrypoint for kubectl plugin

