# Microsoft Teams

Webhooks can also be used to send messages to Microsoft Teams channels.
First, you need to create an incoming webhook in Teams for a specific channel. You can see how to do it in the Teams Docs [here](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook?tabs=dotnet#create-incoming-webhooks-1). After your Teams incoming webhook is created, you can use it with Testkube webhooks - just use the URL provided (it will probably look like this: `https://xxxxx.webhook.office.com/xxxxxxxxx`).

In order to send the message when Workflow execution finishes, the following Webhook can be used:

```
apiVersion: executor.testkube.io/v1
kind: Webhook
metadata:
  name: example-webhook-teams
  namespace: testkube
spec:
  events:
  - end-testworkflow-success
  - end-testworkflow-failed
  - end-testworkflow-aborted
  - end-testworkflow-timeout
  uri: https://xxxxx.webhook.office.com/xxxxxxxxx
  payloadTemplate: "{\"text\": \"TestWorkflow '{{ .TestWorkflowExecution.TestName }}' execution ({{ .TestWorkflowExecution.Number }}) finished with '{{ .TestWorkflowExecution.ExecutionResult.Status }}' status\"}\n"
```

It will result in:

```
{"text": "TestWorkflow 'postman-executor-smoke' execution (949) finished with 'passed' status"}
```

and the message:
`TestWorkflow 'postman-executor-smoke' execution (949) finished with 'passed' status"` being displayed.
