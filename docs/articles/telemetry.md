# Telemetry

To improve the end-user experience, Testkube collects anonymous telemetry data about usage.

Participation in this program is optional. You may [opt-out](#how-to-opt-out) if you'd prefer not to share any information.

The data collected is always anonymous, not traceable to the source, and only used in aggregate form. 

## Dashboard telemetry

The Testkube Dashboard collects user consent and then sends telemetry to the following services:
* app.posthog.com
* api.segment.io
* google analytics

## API-server telemetry

API server Telemetry collects and scrambles information about the host when the API server is bootstrapped for the first time.

The collected data looks like this.

```json
{
  "anonymousId": "a4652358effb311a074bf84d2aed5a7d270dee858bff10e847df2a9ea132bb38",
  "context": {
    "library": {
      "name": "analytics-go",
      "version": "3.0.0"
    }
  },
  "event": "testkube-heartbeat",
  "integrations": {},
  "messageId": "2021-11-04 19:54:40.029549 +0100 CET m=+0.148209228",
  "originalTimestamp": "2021-11-04T19:54:40.029571+01:00",
  "receivedAt": "2021-11-04T18:54:41.004Z",
  "sentAt": "2021-11-04T18:54:40.029Z",
  "timestamp": "2021-11-04T18:54:41.004Z",
  "type": "track"
}
```

## How to Opt Out?

### Testkube CLI and Agent

To opt out of the Testkube telemetry collection:

```sh
testkube disable telemetry
```

To *opt in*:

```sh
testkube enable telemetry
```

To check the current *status*:

```sh
testkube status telemetry
```

### Testkube Control Plane API

Add to the `values.yaml` file the reference of the environment variable `DO_NOT_TRACK`:

```yml
testkube-cloud-api:
  additionalEnv:
    DO_NOT_TRACK: true
```

To ensure this configuration was applied, check the log of the Control Plane API and search for the record:

```json
(...)
{ ... ,"msg":"Note: Telemetry is disabled, analytics will not be available. For more information, please visit https://docs.testkube.io/articles/telemetry.", ... }
(...)
```
