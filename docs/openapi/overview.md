# Testkube OpenAPI Definitions

Testkube exposes two REST APIs that can be consumed accordingly:

- the API exposed by the [Standalone Agent](../articles/install/reference-architectures#testkube-standalone-agent)
- the API exposed by the [Testkube Control-Plane](../articles/install/6-reference-architectures.md) (both cloud and on-prem)

## Agent API

The API exposed by the agent provides programmatic access to most features exposed
by the agent itself when it is running in standalone mode. This is the same API used by 
the Testkube CLI for most of its commands. 

This API does not require any authentication for any of its operations - so be careful in giving access.
Adding CLI-compatible OAUth Authentication to the Agent API is described in [this document](../articles/oauth-cli.md).

## Control Plane API

The API exposed by the Testkube Control Plane provides programmatic access 
to features both specific the control-plane itself, and acts as a proxy for making
authenticated calls to connected agents. The operations are divided into the following groups:

- **Core Operations**: High-level control plane operations. 
- **Agent Operations**: Proxied Agent operations for a specific environment, these are the same as the Core Agent operations.
- **Organisation Operations**: Operations for a specific organisation in the Control Plane.
- **Environment Operations**: Operations for a specific environment within an organisation.



