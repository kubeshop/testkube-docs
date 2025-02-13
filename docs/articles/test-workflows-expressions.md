# Test Workflows – Expressions

Our Test Workflows system uses a simple, yet powerful, expressions language to dynamically evaluate and transform values at runtime. This language is built on JSON and supports basic arithmetic, logical operations, and many useful built-in functions, enabling you to customize your workflows flexibly.

## Overview

- **JSON-Native:**  
  Since the language is based on JSON, every valid JSON value is also a valid expression. For example, `[ "a", "b", "c" ]` is a valid expression.

- **Mathematical Operations:**  
  You can perform arithmetic calculations directly within expressions. For instance, you can multiply a configuration parameter by a number like so:

  ```yaml
  config.workers * 5
  ```

- **Dynamic Evaluation:**  
  Expressions are used to evaluate conditions, dynamically set image tags, generate scripts, and more. They allow you to manipulate values on the fly during workflow execution.

## Examples

### Defining a Condition

You can define conditions using logical and arithmetic operators. For example, this condition checks if there is more than one worker or if a force flag is set:

```yaml
condition: "config.workers > 1 || config.force"
```

### Dynamic Image Tag

By embedding expressions within double curly brackets `{{ }}`, you can dynamically generate values. In the example below, the container image tag is determined by the configuration parameter `version`:

```yaml
image: "mcr.microsoft.com/playwright:v{{ config.version }}"
```

### Configurable K6 Script

Expressions can also be used to build dynamic content files. For example, you can create a K6 script that uses JSON-parsed thresholds and additional script content from your configuration:

```yaml
content:
  files:
    - path: /k6-script.js
      content: |
        export const options = {
          thresholds: {{ json(config.thresholds) }}
        };
        {{ config.script }}
```

## Operators

The expressions language supports a variety of operators. They follow standard mathematical rules for precedence.

### Arithmetic Operators

- **Addition (`+`) and Subtraction (`-`):**  
  Perform addition or subtraction on numbers. They also allow string concatenation.

  **Examples:**

  - `1 + 2 * 3` evaluates to `7`
  - `(1 + 2) * 3` evaluates to `9`
  - `"foo" + "bar"` evaluates to `"foobar"`

- **Multiplication (`*`), Division (`/`), and Modulo (`%`):**  
  Multiply, divide, or find the remainder between numbers.

  **Examples:**

  - `4 * 2` evaluates to `8`
  - `10 / 4` evaluates to `2.5`
  - `5 % 3` evaluates to `2`

- **Exponentiation (`**`):\*\*  
  Raise a number to the power of another.

  **Example:**

  - `2 ** 5` evaluates to `32`

- **Parentheses (`(` and `)`):**  
  Group expressions to control the order of evaluation.

  **Example:**

  - `(2 + 3) * 5` evaluates to `20`

### Comparison and Logical Operators

| Operator     | Returns | Description                                                | Example                    |
| ------------ | ------- | ---------------------------------------------------------- | -------------------------- | --------------------------------------------------- | --- | --- | ------- |
| `==` or `=`  | `bool`  | Checks equality                                            | `3 == 5` is `false`        |
| `!=` or `<>` | `bool`  | Checks inequality                                          | `3 != 5` is `true`         |
| `>`          | `bool`  | Greater than                                               | `3 > 5` is `false`         |
| `<`          | `bool`  | Less than                                                  | `3 < 5` is `true`          |
| `>=`         | `bool`  | Greater than or equal to                                   | `3 >= 5` is `false`        |
| `<=`         | `bool`  | Less than or equal to                                      | `3 <= 5` is `true`         |
| `&&`         | `bool`  | Logical AND (returns the last truthy or first falsy value) | `true && false` is `false` |
| `            |         | `                                                          | `bool`                     | Logical OR (returns the first truthy or last value) | `0  |     | 5`is`5` |
| `!`          | `bool`  | Logical NOT                                                | `!0` is `true`             |
| `? :`        | any     | Ternary operator (if/else)                                 | `true ? 5 : 3` is `5`      |

### Access Operators

These operators allow you to access elements within data structures:

| Operator | Description                  | Example                                                                             |
| -------- | ---------------------------- | ----------------------------------------------------------------------------------- |
| `.`      | Access a property or element | `{"id": 10}.id` returns `10`                                                        |
| `.*.`    | Wildcard mapping             | `[{"id": 5}, {"id": 3}].*.id` returns `[5, 3]`                                      |
| `...`    | Spread arguments             | `shellquote(["foo", "bar baz"]...)` is equivalent to `shellquote("foo", "bar baz")` |

## Built-in Variables

The expressions language provides several built-in variables. Some of these are resolved before execution (and can be used in Pod settings), while others are available only dynamically within the container.

### General Variables

| Name                                     | Resolved Immediately | Description                                                             |
| ---------------------------------------- | -------------------- | ----------------------------------------------------------------------- |
| `always`                                 | ✅                   | Alias for `true`                                                        |
| `never`                                  | ✅                   | Alias for `false`                                                       |
| `config` (e.g., `config.abc`)            | ✅                   | User-provided configuration values                                      |
| `execution.id`                           | ✅                   | ID of the current TestWorkflow execution                                |
| `execution.name`                         | ✅                   | Name of the current TestWorkflow execution                              |
| `execution.number`                       | ✅                   | Sequence number of the execution                                        |
| `execution.scheduledAt`                  | ✅                   | Scheduled execution date/time                                           |
| `resource.id`                            | ✅                   | Unique ID for parallel steps or services                                |
| `resource.root`                          | ✅                   | Resource ID of the parent resource                                      |
| `namespace`                              | ✅                   | Namespace where the execution runs                                      |
| `workflow.name`                          | ✅                   | Name of the executed TestWorkflow                                       |
| `organization.id`                        | ✅                   | Organization ID (when using Control Plane)                              |
| `environment.id`                         | ✅                   | Environment ID (when using Control Plane)                               |
| `dashboard.url`                          | ✅                   | URL of the environment’s Dashboard                                      |
| `labels` (e.g., `labels.some_label_key`) | ✅                   | Labels assigned to the TestWorkflow (special characters are normalized) |
| `env` (e.g., `env.SOME_VARIABLE`)        | ❌                   | Environment variable values (resolved at runtime)                       |
| `failed`                                 | ❌                   | Indicates if the execution has already failed                           |
| `passed`                                 | ❌                   | Indicates if the execution has not yet failed                           |
| `services` (e.g., `services.db.0.ip`)    | ❌                   | IP addresses of initialized services                                    |

### Contextual Variables

Additional variables are available in specific contexts:

#### Retry Conditions

When defining a custom retry condition, you can use `self.passed` and `self.failed` to determine the step status:

```yaml
spec:
  steps:
    - shell: exit 0
      # Retry until the step has failed, for up to 5 executions
      retry:
        count: 5
        until: "self.failed"
```

#### Matrix and Shard

When running steps in parallel (via services, parallel, or execute steps), you can access:

- `matrix.<name>` and `shard.<name>` for custom parameters
- `index` and `count` for each copy
- `matrixIndex`, `matrixCount`, `shardIndex`, and `shardCount` for detailed indexing

Example using matrix values:

```yaml
spec:
  services:
    # Deploy two workers with index information
    db:
      count: 2
      description: "Instance {{ index + 1 }} of {{ count }}" # "Instance 1 of 2" and "Instance 2 of 2"
      image: mongo:latest
    # Deploy two servers with different Node.js versions
    api:
      matrix:
        node: [20, 21]
      description: "Node v{{ matrix.node }}" # "Node v20" and "Node v21"
      image: "node:{{ matrix.node }}"
```

---

## Built-in Functions

The expressions language includes many functions that help manipulate and cast values.

### Casting Functions

| Function | Returns | Description                                 | Example                           |
| -------- | ------- | ------------------------------------------- | --------------------------------- |
| `string` | string  | Casts a value to a string                   | `string(5)` returns `"5"`         |
| `list`   | list    | Creates a list from provided values         | `list(10, 20)` returns `[10, 20]` |
| `int`    | int     | Converts a value to an integer              | `int(10.5)` returns `10`          |
| `bool`   | bool    | Converts a value to a boolean               | `bool("")` returns `false`        |
| `float`  | float   | Converts a value to a floating-point number | `float("300.50")` returns `300.5` |
| `eval`   | any     | Evaluates an expression                     | `eval("4 * 5")` returns `20`      |

### General Functions

| Function     | Returns     | Description                                                | Example                                                                                              |
| ------------ | ----------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------ |
| `join`       | string      | Joins list elements into a single string                   | `join(["a", "b"])` returns `"a,b"`; `join(["a", "b"], " - ")` returns `"a - b"`                      |
| `split`      | list        | Splits a string into a list based on a delimiter           | `split("a,b,c")` returns `["a", "b", "c"]`                                                           |
| `trim`       | string      | Removes whitespace from both ends of a string              | `trim("   \nabc  d  ")` returns `"abc  d"`                                                           |
| `len`        | int         | Returns the length of an array, map, or string             | `len(["a", "b"])` returns `2`                                                                        |
| `floor`      | int         | Rounds a number down to the nearest integer                | `floor(10.5)` returns `10`                                                                           |
| `ceil`       | int         | Rounds a number up to the nearest integer                  | `ceil(10.5)` returns `11`                                                                            |
| `round`      | int         | Rounds a number to the nearest integer                     | `round(10.5)` returns `11`                                                                           |
| `at`         | any         | Retrieves an element from a list or map by index/key       | `at([10, 2], 1)` returns `2`; `at({"foo": "bar"}, "foo")` returns `"bar"`                            |
| `tojson`     | string      | Serializes a value to JSON format                          | `tojson({ "foo": "bar" })` returns `"{\"foo\":\"bar\"}"`                                             |
| `json`       | any         | Parses a JSON string into an object                        | `json("{\"foo\":\"bar\"}")` returns `{ "foo": "bar" }`                                               |
| `toyaml`     | string      | Serializes a value to YAML format                          | `toyaml({ "foo": "bar" })` returns a YAML string                                                     |
| `yaml`       | any         | Parses a YAML string into an object                        | `yaml("foo: bar")` returns `{ "foo": "bar" }`                                                        |
| `shellquote` | string      | Sanitizes and quotes arguments for safe shell usage        | `shellquote("foo bar")` returns `"\"foo bar\""`                                                      |
| `shellparse` | list        | Parses a shell command string into an array of arguments   | `shellparse("foo bar")` returns `["foo", "bar"]`                                                     |
| `map`        | list or map | Applies an expression to each element in a list or map     | `map([1,2,3,4,5], "_.value * 2")` returns `[2,4,6,8,10]`                                             |
| `filter`     | list        | Filters a list using an expression predicate               | `filter([1,2,3,4,5], "_.value > 2")` returns `[3,4,5]`                                               |
| `jq`         | any         | Executes a jq expression on a value                        | `jq([1,2,3,4,5], ".                                                                                  | max")`returns`[5]` |
| `range`      | list        | Generates a range of numbers                               | `range(5, 10)` returns `[5, 6, 7, 8, 9]`; `range(5)` returns `[0, 1, 2, 3, 4]`                       |
| `relpath`    | string      | Computes a relative file path                              | `relpath("/a/b/c")` might return `./b/c`                                                             |
| `abspath`    | string      | Computes an absolute file path                             | `abspath("b/c")` might return `/some/working/dir/b/c`                                                |
| `chunk`      | list        | Splits a list into chunks of a specified maximum size      | `chunk([1,2,3,4,5], 2)` returns `[[1,2], [3,4], [5]]`                                                |
| `date`       | string      | Returns the current date in a specified format             | `date()` might return `"2024-06-04T11:59:32.308Z"`; `date("2006-01-02")` might return `"2024-06-04"` |
| `secret`     | string      | Creates a reference to a secret as an environment variable | `secret("name", "key")` returns a reference like `"env.S_N_name_K_key"`                              |

### File System Functions

These functions are executed during workflow runtime to interact with the file system.

| Function | Returns | Description                    | Example                                                                                                                |
| -------- | ------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `file`   | string  | Returns the contents of a file | `file("/etc/some/path")` might return `"some\ncontent"`                                                                |
| `glob`   | list    | Finds files matching a pattern | `glob("/etc/**/*", "./x/**/*.js")` might return `["/etc/some/file", "/etc/other/file", "/some/working/dir/x/file.js"]` |

Example using file and glob functions:

```yaml
condition: 'len(glob("/data/repo/**/*.spec.js")) > 0'
```

Another example combining file reading and command generation:

```yaml
- shell: "generate-api-key.sh > /data/api-key"
- execute:
    workflows:
      - name: example
        config:
          entries: '{{ tojson(split(file("/data/list*"), "\n")) }}'
          script: '{{ file("/data/api-key") }}'
```

You can also use functions like `shellquote` to safely pass arguments to shell commands:

```yaml
shell: |
  /bin {{ shellquote("--", config.args ...) }}
```

By leveraging the Test Workflows expressions language, you can build dynamic, configurable workflows that perform complex evaluations and manipulations at runtime. For additional details on operators, built-in functions, and contextual variables, please refer back to this document whenever needed.
