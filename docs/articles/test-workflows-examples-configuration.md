# Test Workflows Parameterization

Test Workflows parameterization allows you to supply runtime **parameters** that make your workflows flexible and reusable. You can provide these parameters in two primary ways:

1. **Configuration Parameters (`config`)**: Define parameters in your workflow schema that are available via the `{{ config.<parameter> }}` syntax.
2. **Environment Parameters (`env`)**: Pass parameters as environment variables to your container. These variables are injected at runtime and can be referenced dynamically (for example, in shell commands) using the `{{ env.<parameter> }}` syntax.

For detailed information on our expression language—including operators, built-in functions, and variables—please see [Test Workflows - Expressions](./test-workflows-expressions).

## Overview

Test Workflows support parameterization by allowing you to provide runtime parameters that control various aspects of your workflow. These parameters can be defined as **configuration parameters** (`config`) or supplied as **environment parameters** (`env`). By referencing these parameters using the `{{ }}` syntax, you can customize commands, paths, and more—without hardcoding values.

> **Important:** Environment parameters are injected into the container at runtime. They are accessible dynamically (e.g., in shell commands) but cannot be used in static fields such as the container’s `image`.

## Using Configuration Parameters (`config`)

### Defining Configuration Parameters

Configuration parameters are declared in the `spec.config` section of your Test Workflow using an OpenAPI-like schema. They specify the type, default values, and whether a parameter is sensitive. Parameters without default values are required.

```yaml
spec:
  config:
    version:
      type: string
      default: "1.32.3"
    workers:
      type: integer
      default: 2
      sensitive: true # <- Marked as sensitive
    printTree:
      type: boolean   # <- No default, marked as required
    targetDomain:
      type: string 
      enum:           # <- Generates a drop-down list to select from at execution
      - prod.acme.eu
      - staging.acme.eu
      - dev.acme.eu
      default: dev.acme.eu
```

### Example: Parametrized Container Image and Commands

In the example below, configuration parameters are used to set the container image version and determine the number of workers for a shell command:

```yaml
spec:
  content:
    git:
      uri: "https://github.com/kubeshop/testkube"
      paths:
        - "test/playwright/playwright-project"

  container:
    image: "mcr.microsoft.com/playwright:v{{ config.version }}" # <- Using config parameter for version
    workingDir: "/data/repo/test/playwright/playwright-project"

  steps:
    - shell: "npm ci && npx playwright test --workers {{ config.workers }}" # <- Using config parameter for workers
    - condition: "config.printTree"
      shell: "tree /data/repo"
```

## Using Environment Parameters (`env`)

Environment parameters are passed to your container at runtime. They are injected dynamically and can be referenced in commands (e.g., `shell`) using the `{{ env.<parameter> }}` syntax.

### Static Environment Parameters

Below is an example of a statically defined environment variable. In this case, the variable is used within a shell command:

```yaml
spec:
  container:
    env:
      - name: MY_STATIC_VAR
        value: "staticValue" # <- Hardcoded static environment variable
  steps:
    - shell: "echo The static value is {{ env.MY_STATIC_VAR }}" # <- Referencing the env variable in a shell command
```

### Using ConfigMaps with Environment Parameters

You can source environment parameters from Kubernetes ConfigMaps using standard Kubernetes syntax:

```yaml
spec:
  container:
    env:
      - name: MY_CONFIG_VAR
        valueFrom:
          configMapKeyRef:
            name: your-configmap-name # <- Name of the ConfigMap
            key: key-in-configmap # <- Key within the ConfigMap

  steps:
    - shell: "echo The ConfigMap value is {{ env.MY_CONFIG_VAR }}" # <- Referencing the ConfigMap value
```

### Using Secrets with Environment Parameters

Similarly, environment parameters can be sourced from Kubernetes Secrets:

```yaml
spec:
  container:
    env:
      - name: MY_SUPER_SECRET
        valueFrom:
          secretKeyRef:
            name: your-secret-name # <- Name of the Kubernetes Secret
            key: key-in-secret # <- Key within the Secret

  steps:
    - shell: |
        echo "Secret value: {{ env.MY_SUPER_SECRET }}"  # <- Referencing the secret in a shell command
        echo "Sanitized secret: {{ shellquote(env.MY_SUPER_SECRET) }}"  # <- Using the shellquote function to sanitize output
```

:::tip

### Using Credentials defined in Testkube

You can also define Credentials (Secrets or Variables) in Testkube itself at the Organization, Environment
and individual Workflow level, and then use those in your Workflows - [Read More](/articles/credential-management).

The following example shows how to use a Secret defined in Testkube:

```yaml
spec:
  steps:
    - shell: |
        echo "Secret value: {{credential("MY_SUPER_SECRET")}}" 
        echo "Sanitized secret: {{ shellquote(credential("MY_SUPER_SECRET")) }}" 
```
:::
## Combining `config` and `env`

For enhanced flexibility, you can combine configuration parameters with environment parameters. This allows you to define parameters in `config` and then inject them into your container as environment variables.

```yaml
spec:
  config:
    databaseURL:
      type: string
      default: "https://default.database.url" # <- Default database URL

  container:
    env:
      - name: DB_URL
        value: "{{ config.databaseURL }}" # <- Passing config parameter to an env variable

  steps:
    - shell: "echo Database URL is {{ env.DB_URL }}" # <- Using the env variable in a shell command
```

## Using Expressions with Parameters

Our expression language allows you to create dynamic expressions using both configuration and environment parameters. You can perform arithmetic, logic, string operations, and more. For example:

```yaml
# Example: Using math in a condition
condition: 'config.workers > 1 || config.force'  # <- Evaluates condition based on config parameters

# Example: Using a built-in function to sanitize output in a shell command
- shell: "echo {{ shellquote(env.MY_SUPER_SECRET) }}"  # <- Sanitizes secret before output
```

You can also build more complex expressions—leveraging JSON-native syntax, arithmetic operators, ternary conditions, and built-in functions such as `string`, `join`, `split`, etc. For a comprehensive overview of available operators, functions, and built-in variables, please refer to [Test Workflows - Expressions](./test-workflows-expressions).

## Specifying Parameter Values at Runtime

When executing Test Workflows, you can supply parameter values in several ways:

### Running in the UI

When you click **Run now** in the UI, you will be prompted to enter values for any required configuration parameters.

![Running in the UI](../img/run-in-the-ui.png)

### Running with the CLI

You can pass parameter values via the CLI in two ways:

1. **Configuration parameters** – override `config` values declared in the workflow schema.
2. **Environment variables** – define or override runtime environment variables for the execution.  

#### Overriding Configuration Parameters

Use the `--config` flag to supply values for configuration parameters:

```bash
testkube run testworkflow my-workflow \
  --config version=1.24.0 \
  --config workers=4
```

This overrides the default `version` and `workers` defined in the workflow’s `spec.config`.

#### Overriding Runtime Parameters

In addition to `--config`, you can also define or override runtime environment variables using the `--variable` flag.
These variables are injected into the container and can be referenced with `{{ env.<parameter> }}`.

**Examples**

Define environment variables dynamically:

```bash
testkube run testworkflow my-workflow \
  --variable FOO=bar \
  --variable DEBUG=true
```

Combine both `--config` and `--variable` flags:

```bash
testkube run testworkflow my-workflow \
  --config version=1.32.3 \
  --config workers=6 \
  --variable API_URL=https://api.staging.acme.io \
  --variable LOG_LEVEL=debug
```

This lets you override schema-defined parameters while also injecting ad-hoc environment variables for a specific execution.

### Providing Parameters to Referenced Workflows

Test Workflows can reference other workflows using the `execute` step. This feature allows you to trigger a referenced workflow run with specific configuration parameter values. For example, you can provide different values (like the number of workers or version) when triggering each referenced workflow:

```yaml
spec:
  steps:
    - execute:
        workflows:
          - name: "overview--example-13"
            config:
              workers: 2 # <- Providing workers parameter for the referenced workflow
          - name: "overview--example-13"
            config:
              workers: 4 # <- Different workers parameter
          - name: "overview--example-13"
            config:
              version: "1.23.4" # <- Providing version parameter
```

In this setup, the `execute` step triggers multiple runs of the referenced workflow with the specified configuration parameters. Learn more about [Advanced Workflow Orchestration](./test-workflows-test-suites).

By using Test Workflows parameterization, you can easily manage and supply runtime parameters—whether through configuration parameters (`config`), environment parameters (`env`), or a combination of both. This approach allows you to build flexible, secure, and maintainable workflows that adapt to your runtime needs. For more details on the expression language features available for constructing these parameters, please visit [Test Workflows - Expressions](./test-workflows-expressions).
