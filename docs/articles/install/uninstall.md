# Uninstalling

You can follow one of the two procedures below to uninstall Testkube. You might need to repeat this process in case you deployed the control plane and one or more agents in different clusters or namespaces.

### Uninstalling with the Testkube CLI

You can use the CLI to uninstall Testkube:

```bash
testkube purge
```

If you installed testkube in another namespace than the default `testkube` namespace, make sure to pass that namespace as an argument to the `purge` command. Learn more [here](/cli/testkube-purge) or execute `testkube purge --help`.

```go
testkube purge --namespace my-testkube-namespace
```

### Uninstalling with Helm

You can use Helm to uninstall Testkube:

```bash
helm uninstall testkube
```

### Giving Feedback

We’re sad to see you going. Did Testkube not meet your expectations? We’re keen on feedback, so feel free to [share your thoughts][contact] and we will look into making Testkube better for everyone.

[contact]: https://testkubeworkspace.slack.com/ssb/redirect#/shared-invite/email
