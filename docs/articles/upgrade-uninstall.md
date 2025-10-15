# Upgrade & Uninstall

## Upgrade Testkube

Upgrading Testkube will upgrade the cluster components to the latest version. The following
applies both to Open Source and Commercial installations.

There are two ways to upgrade Testkube:

### Using Helm

```sh
helm upgrade --namespace namespace_name my-testkube oci://us-east1-docker.pkg.dev/testkube-cloud-372110/testkube/testkube --version <version>
```

### Using Testkube's CLI

You can use the `upgrade` command to upgrade your Testkube installation, see the
corresponding [CLI Documentation](../cli/testkube-upgrade) for all options.

Simple usage:

```sh
testkube upgrade
```

## Uninstalling Testkube

You can follow one of the two procedures below to uninstall Testkube. You might need to repeat this process in case you deployed the 
control plane and one or more agents in different clusters or namespaces.

### Uninstalling with the Testkube CLI

You can use the CLI to uninstall Testkube:

```bash
testkube purge
```

If you installed testkube in another namespace than the default `testkube` namespace, make sure to pass that namespace as 
an argument to the `purge` command. Learn more [here](https://docs.testkube.io/cli/testkube-purge) or execute `testkube purge --help`.

```go
testkube purge --namespace my-testkube-namespace
```

### Uninstalling with Helm

You can use Helm to uninstall Testkube:

```bash
helm uninstall testkube
```

:::tip
### Give us Feedback please!

If you're uninstalling Testkube we’re really sad to see you go. Did Testkube not meet your expectations? We’re keen on feedback, please feel free 
to [share your thoughts][contact] and we will look into making Testkube better for everyone - Thank you!

[contact]: https://testkubeworkspace.slack.com/ssb/redirect#/shared-invite/email
:::
