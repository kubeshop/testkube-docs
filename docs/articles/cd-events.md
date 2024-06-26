# Emitting Standard CDEvents

[CDEvents](https://cdevents.dev/) is a common specification for Continuous Delivery events. Testkube is a proud supporter of this specification and we have added in the specification support for [Testing Events](https://github.com/cdevents/spec/blob/main/testing-events.md) to be release on v0.3.0 of the spec.

As of the 1.12 release, Testkube can emit standard CDEvents to a webhook endpoint. This can be used to integrate with any CD tool that supports the CDEvents standard.

## Step 1 - Enable CDEvents

To enable CDEvents, you need to set the following Helm
values:

```sh
helm upgrade \
  --install \
  --create-namespace \
  --namespace testkube \
  testkube \
  kubeshop/testkube \
  --set testkube-api.cdeventsTarget=https://YOUR_WEBHOOK_URL
```

For testing purposes you can use [webhook.site](https://webhook.site/) to get a webhook URL.

## Step 2 - Test Emmiting CDEvents

To test emitting CDEvents, create a sample test workflow with Testkube and run it.

```
testkube create testworkflow -f EXAMPLE_FILE.yaml

testkube run testworkflow TEST_WORKFLOW_NAME -f
```

Check the webhook sink to see the CDEvent emitted by Testkube. An event like the following should have been emmitted: 
<!-- Please check the code outputs. This may require update -->
```json 
{
  "context": {
    "version": "0.2.0",
    "id": "85e4cef0-e5bf-4bfd-9e62-5b227867b064",
    "source": "cluster56c26628bece30eb07f01a64daaa3f27",
    "type": "dev.cdevents.testcaserun.finished.0.1.0",
    "timestamp": "2023-06-08T11:30:22.30535521Z"
  },
  "subject": {
    "id": "test-cdevents-7",
    "source": "cluster56c26628bece30eb07f01a64daaa3f27",
    "type": "testCaseRun",
    "content": {
      "environment": {
        "id": "testkube",
        "source": "cluster56c26628bece30eb07f01a64daaa3f27"
      },
      "outcome": "pass",
      "testCase": {
        "id": "test-cdevents",
        "type": "functional",
        "uri": "/tests/executions/test-cdevents"
      }
    }
  }
}
```

## Reference

For more information about CDEvents, please visit the [CDEvents](https://cdevents.dev/) website.

To know more about the Testing Events specification, please visit the [Testing Events](https://github.com/cdevents/spec/blob/main/testing-events.md) page.


