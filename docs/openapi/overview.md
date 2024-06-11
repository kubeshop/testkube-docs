# Testkube OpenAPI Definitions

Testkube exposes two REST APIs that can be consumed accordingly:

- The Agent API exposed by the [Standalone Agent](../articles/install/reference-architectures#testkube-standalone-agent)
- The Control Plane API exposed by the [Testkube Control-Plane](../articles/install/6-reference-architectures.md) (both cloud and on-prem)

## Agent API

The Agent API provides programmatic access to most features exposed
by the agent itself when it is running in standalone mode. This is the same API used by 
the Testkube CLI for most of its commands. 

By default this API does not require any authentication for any of its operations - so be careful in giving access.
Adding CLI-compatible OAUth Authentication to the Agent API is described in [this document](../articles/oauth-cli.md).

## Control Plane API

The Control Plane API provides programmatic access 
to features both specific the control-plane itself, and acts as a proxy for making
authenticated calls to connected environment agents. 

The operations exposed by the control plane are here divided into the following categories:

- **Core Operations**: High-level control plane operations. 
- **Agent Operations**: Proxied Agent operations for a specific environment, these are the same as the Core Agent operations, 
  but with organisation and environment identifiers.
- **Organisation Operations**: Operations for a specific organisation defined in the Control Plane.
- **Environment Operations**: Operations for a specific environment defined within an organisation.

These API calls all require an API token specified using `Bearer Token` authentication. 
- API Tokens can be created as described at [Organization Management](../testkube-pro/articles/organization-management#api-tokens).
- Add an `Authorization` HTTP header to your API requests with the value `Bearer: <API token>`

