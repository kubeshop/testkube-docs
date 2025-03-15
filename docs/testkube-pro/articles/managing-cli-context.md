# Connecting from the CLI

To use Testkube CLI with the Testkube Control Plane, you will need to create an API Token in the 
Testkube Dashboard ([Read More](/testkube-pro/articles/api-token-management)) and set the CLI Context accordingly. The CLI will 
use this token to authenticate and gain access to corresponding Testkube resources and commands.

When the token is created, you're ready to change the Testkube CLI context using the 
[`testkube set context`](/cli/testkube-set-context) command, which is shown for your environments 
under the Environment General Settings tab:

![Setting Context](../../img/setting-context.png)

## Connecting Using `kubeconfig` Context

If you want to connect to your Testkube instance directly (like you would do with `kubectl`), set the CLI Context to be `kubeconfig`-based: 

```sh 
testkube set context --kubeconfig
```

