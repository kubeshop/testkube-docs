## testkube init

Init Testkube profiles(standalone-agent|demo|agent)

### Synopsis

Init installs the Testkube in your cluster as follows:
	standalone-agent -> Testkube OSS
	demo -> Testkube On-Prem demo
	agent -> Testkube Agent

```
testkube init <profile> [flags]
```

### Options

```
      --export   Export the values.yaml
  -h, --help     help for init
```

### SEE ALSO

* [testkube](testkube.md)	 - Testkube entrypoint for kubectl plugin
* [testkube init agent](testkube_init_agent.md)	 - Install Testkube Pro Agent and connect to Testkube Pro environment
* [testkube init demo](testkube_init_demo.md)	 - Install Testkube On-Prem demo in your current context
* [testkube init standalone-agent](testkube_init_standalone-agent.md)	 - Install Testkube OSS in your current context

