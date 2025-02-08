# Atlassian Jira

You can use Webhooks to create issues in Atlassian Jira projects, but to do so you will first need to look up
the corresponding issuetype and project for your target JIRA Project using the [JIRA REST API](https://developer.atlassian.com/cloud/jira/platform/rest/v3/).

## Look up JIRA Project and IssueType ids

Follow these steps to take:

1. Create a JIRA API Token that you can use for your API calls - [Read More](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/)
2. Use the [Get All Projects](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-projects/#api-rest-api-3-project-get) operation to find the `id` of the target project
3. Use the [Get Project Issue Type](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-projects/#api-rest-api-3-project-projectid-hierarchy-get) operation to find the
   `id` of the type of issue that you want to create

## Create a Webhook Template for creating Issues 

The actual Webhook configuration will be in a [Webhook Template](/articles/webhooks#webhook-templates) so we can reuse it for multiple Webhooks. 

In this example we will add parameters for

- `duedate` - the due date for the created issue.
- `issuetype` - the id of the default issue type to create (as looked up with the API above).
- `priority` the priority id of the created issue - use [Get Priorities](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-priorities/#api-rest-api-3-priority-get) to look this up.
- `project` - the id of the default project to create issues in (as looked up with the API above).
- `token` - JIRA API token

Any Webhook using this WebhookTemplate will be able to override these values as needed.

- The `payloadTemplate` specifies the content to send to the [Create Issue](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-post) operation, 
  read more about [Webhook Payloads](/articles/webhooks#webhook-payload) to see how you can configure this.
- Specify the `uri` for your JIRA instance (you could even put this in a parameter if you want to create issues in different JIRA instances).
- The template will trigger on the `end-testworkflow-failed` event, you can of course change this to whatever suits your needs, or even make it configurable via a corresponding parameter.

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

## Save the JIRA API Token to a Secret

To ensure confidential handling of your JIRA API Token it is recommende to store it in a Secret:

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: webhook-vars
  namespace: testkube
type: Opaque
data:
  jiraApiToken: <your_jira_api_token>
```

## Create Webhook(s) for creating issues

We can now create any number of Webhooks that use the above template, with corresponding input values to override the default parameter values:

```yaml
apiVersion: executor.testkube.io/v1
kind: Webhook
metadata:
  name: jira-webhook
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
        key: jiraApiToken
  webhookTemplateRef:
    name: template-jira
```

### Use Labels to control which Workflows that generate issues

In the above example, you might not want to create JIRA Issues for all `end-testworkflow-failed` events in your Testkube Environment, in
which case you can use [Resource Selectors](/articles/webhooks#resource-selector-labels) to narrow this down.

For example, adding the below selector will result in only failed executions for Workflows labeled with `priority: p0` triggering this Webhook and 
creating a corresponding JIRA issue.

```
apiVersion: executor.testkube.io/v1
kind: Webhook
...
  selector: priority=p0
```
