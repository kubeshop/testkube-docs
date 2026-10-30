# Telemetry

To improve Testkube, we collect telemetry about how it is used. Most of it is anonymous. The local trial installer is the
exception: it is linked to your trial license and its email. You can [opt out](#how-to-opt-out) of both.

## Local trial installer

When you install the local trial, the installer reports how the install went:

- your system: operating system, CPU type, Docker version and resources
- each step's result and duration, and why a step failed
- your trial license, its email, and a machine ID

This lets us see why an install failed, fix it, and offer you help. We never collect your tests, test results, or
secrets. The data goes to our analytics providers: PostHog, Segment, and Mixpanel.

To opt out, set `DO_NOT_TRACK=1` when you install:

```sh
curl -fsSL https://trial.testkube.io | DO_NOT_TRACK=1 TESTKUBE_LICENSE=<key> bash
```

For how we handle personal data, see our [Privacy Policy](https://testkube.io/privacy-policy).

## Dashboard telemetry

The Testkube Dashboard collects user consent and then sends telemetry to the following services:

- app.posthog.com
- api.segment.io
- google analytics

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

### Testkube CLI and Runner {#testkube-cli-and-agent}

To opt out of the Testkube telemetry collection:

```sh
testkube disable telemetry
```

Or set `DO_NOT_TRACK=1` in your shell. This also covers the local trial installer.

To _opt in_:

```sh
testkube enable telemetry
```

To check the current _status_:

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
