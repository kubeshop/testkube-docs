# CLI Configuration File

The Testkube CLI stores its configuration in a `~/.testkube/config.json` file with the following structure:

```js
{
   "telemetryEnabled":true,
   "namespace":"testkube",
   "initialized":true,
   "apiURI":"http://localhost:8088",
   "apiServerName":"testkube-api-server",
   "apiServerPort":8088,
   "dashboardName":"testkube-dashboard",
   "dashboardPort":8080,
   "cloudContext":{
      
   },
   "master":{
      "features":{
         "LogsV2":false
      },
      "uris":{
         
      }
   }
}
```

You can use the [`testkube config`](/cli/testkube_config) command to modify the CLI configuration programmatically.

:::tip
See [Managing CLI Context](/testkube-pro/articles/managing-cli-context) to get
more detailed explanations of the corresponding configurations.
:::
