# Atlassian Jira

You can use Webhooks to create issues in Atlassian Jira projects.
Please check the Jira API Spec for additional details [here](https://developer.atlassian.com/cloud/jira/platform/rest/v3/). 

In order to send the message when a test workflow execution finishes, the following Webhook and Webhook template can be used:

Webhook:

```yaml
apiVersion: executor.testkube.io/v1
kind: Webhook
metadata:
  name: jira
  namespace: testkube
spec:
  config:
    duedate:
      value: "2025-02-01"
    issuetype:
      value: "10004"
    project:
      value: "10019"
    token:
      secret:
        name: webhook-vars
        key: token
  webhookTemplateRef:
    name: template-jira
```

Webhook template:

```yaml
apiVersion: executor.testkube.io/v1
kind: WebhookTemplate
metadata:
  name: template-jira
  namespace: testkube
spec:
  parameters:
    - name: duedate
      description: due date
      required: true
      example: "2025-02-01"
    - name: issuetype
      description: issue type id
      required: true
      example: "10004"
    - name: priority
      description: priority id
      required: false
      example: "3"
      default: "3"
      pattern: "^[0-9]*$"
    - name: project
      description: project id
      required: true
      example: "10019"
    - name: token
      description: token
      required: true
      example: "ABCDE"
  events:
  - end-testworkflow-failed
  uri: https://kubeshop.atlassian.net/rest/api/3/issue
  payloadTemplate: |
    {
      "fields": {
        "duedate": "{{ index .Config "duedate" }}",
        "labels": [
           "bugfix",
           "blitz_test"
        ],
        "issuetype": {
          "id": "{{ index .Config "issuetype" }}"
        },
        "priority": {
          "id": "{{ index .Config "priority" }}"
        },
        "project": {
          "id": "{{ index .Config "project" }}"
        },
        "description": {
          "type": "doc",
          "version": 1,
          "content": [
            {
              "type": "paragraph",
              "content": [
                {
                  "text": "Please check details at {{ .ExecutionURL }}",
                  "type": "text"
                }
              ]
            }
          ]
        },
        "summary": "{{ .TestWorkflowExecution.Name }}"
      },
      "update": {}
    }
  headers:
    Accept: application/json
    Content-Type: application/json
    Authorization: "Basic {{ index .Config \"token\" }}"
```

Secret:

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: webhook-vars
  namespace: testkube
type: Opaque
data:
  token: <your_data>
```

## Using Labels to limit which Workflows that generate issues

