# Connecting from the CLI

To use Testkube CLI to connect to your Testkube Pro install you will need to set the CLI Context. 

Creating tokens is done at the Organization level - [Read More](/testkube-pro/articles/api-token-management).

When the token is created, you're ready to change the Testkube CLI context using the 
[`testkube set context`](/cli/testkube_set_context) command, which is shown for your environments 
under the Environment General Settings tab:

![Setting Context](../../img/setting-context.png)

## Connecting Using `kubeconfig` Context

If you want to connect to your Testkube instance directly (like you would do with `kubectl`), set the CLI Context to be `kubeconfig`-based: 

```sh 
testkube set context --kubeconfig
```

