# Migrating from the Open Source Agent

If you have started using Testkube using the standalone Open Source Agent, you can migrate this instance to be managed 
by the Testkube Control Plane instead.

To connect your Testkube Agent, you will need to modify your Testkube installation to be in Pro Agent mode. 
Testkube Pro Agent is the Testkube engine for controlling your Testkube instance using the Testkube Control Plane.

See [Reference Architectures](../../articles/install/reference-architectures) for more details.

:::info

Currently, we do not support uploading existing test logs and artifacts from your Testkube Core Open Source instance. 
This is planned for coming releases.

::: 

## Instructions

1. Run the following command which will walk you through the migration process:

```sh
testkube pro connect
```

2. [Set your CLI Context to talk to Testkube Pro](./managing-cli-context.md).
