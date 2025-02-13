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

<table>
  <thead>
    <tr>
      <th>Operator</th>
      <th>Returns</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>==</code> or <code>=</code></td>
      <td><code>bool</code></td>
      <td>Checks equality</td>
      <td><code>3 == 5</code> is <code>false</code></td>
    </tr>
    <tr>
      <td><code>!=</code> or <code>&lt;&gt;</code></td>
      <td><code>bool</code></td>
      <td>Checks inequality</td>
      <td><code>3 != 5</code> is <code>true</code></td>
    </tr>
    <tr>
      <td><code>&gt;</code></td>
      <td><code>bool</code></td>
      <td>Greater than</td>
      <td><code>3 &gt; 5</code> is <code>false</code></td>
    </tr>
    <tr>
      <td><code>&lt;</code></td>
      <td><code>bool</code></td>
      <td>Less than</td>
      <td><code>3 &lt; 5</code> is <code>true</code></td>
    </tr>
    <tr>
      <td><code>&gt;=</code></td>
      <td><code>bool</code></td>
      <td>Greater than or equal to</td>
      <td><code>3 &gt;= 5</code> is <code>false</code></td>
    </tr>
    <tr>
      <td><code>&lt;=</code></td>
      <td><code>bool</code></td>
      <td>Less than or equal to</td>
      <td><code>3 &lt;= 5</code> is <code>true</code></td>
    </tr>
    <tr>
      <td><code>&amp;&amp;</code></td>
      <td><code>bool</code></td>
      <td>Logical AND (returns the last truthy or first falsy value)</td>
      <td><code>true && false</code> is <code>false</code></td>
    </tr>
    <tr>
      <td><code>||</code></td>
      <td><code>bool</code></td>
      <td>Logical OR (returns the first truthy or last value)</td>
      <td><code>0 || 5</code> is <code>5</code></td>
    </tr>
    <tr>
      <td><code>!</code></td>
      <td><code>bool</code></td>
      <td>Logical NOT</td>
      <td><code>!0</code> is <code>true</code></td>
    </tr>
    <tr>
      <td><code>? :</code></td>
      <td>any</td>
      <td>Ternary operator (if/else)</td>
      <td><code>true ? 5 : 3</code> is <code>5</code></td>
    </tr>
  </tbody>
</table>

### Access Operators

These operators allow you to access elements within data structures:

- **`.`**: Access a property or element  
  Example: `{"id": 10}.id` returns `10`

- **`.*.`**: Wildcard mapping  
  Example: `[{"id": 5}, {"id": 3}].*.id` returns `[5, 3]`

- **`...`**: Spread arguments  
  Example: `shellquote(["foo", "bar baz"]...)` is equivalent to `shellquote("foo", "bar baz")`

## Built-in Variables

The expressions language provides several built-in variables. Some of these are resolved before execution (and can be used in Pod settings), while others are available only dynamically within the container.

### General Variables

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Resolved Immediately</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>always</code></td>
      <td>✅</td>
      <td>Alias for <code>true</code></td>
    </tr>
    <tr>
      <td><code>never</code></td>
      <td>✅</td>
      <td>Alias for <code>false</code></td>
    </tr>
    <tr>
      <td><code>config</code> (e.g., <code>config.abc</code>)</td>
      <td>✅</td>
      <td>User-provided configuration values</td>
    </tr>
    <tr>
      <td><code>execution.id</code></td>
      <td>✅</td>
      <td>ID of the current TestWorkflow execution</td>
    </tr>
    <tr>
      <td><code>execution.name</code></td>
      <td>✅</td>
      <td>Name of the current TestWorkflow execution</td>
    </tr>
    <tr>
      <td><code>execution.number</code></td>
      <td>✅</td>
      <td>Sequence number of the execution</td>
    </tr>
    <tr>
      <td><code>execution.scheduledAt</code></td>
      <td>✅</td>
      <td>Scheduled execution date/time</td>
    </tr>
    <tr>
      <td><code>resource.id</code></td>
      <td>✅</td>
      <td>Unique ID for parallel steps or services</td>
    </tr>
    <tr>
      <td><code>resource.root</code></td>
      <td>✅</td>
      <td>Resource ID of the parent resource</td>
    </tr>
    <tr>
      <td><code>namespace</code></td>
      <td>✅</td>
      <td>Namespace where the execution runs</td>
    </tr>
    <tr>
      <td><code>workflow.name</code></td>
      <td>✅</td>
      <td>Name of the executed TestWorkflow</td>
    </tr>
    <tr>
      <td><code>organization.id</code></td>
      <td>✅</td>
      <td>Organization ID (when using Control Plane)</td>
    </tr>
    <tr>
      <td><code>environment.id</code></td>
      <td>✅</td>
      <td>Environment ID (when using Control Plane)</td>
    </tr>
    <tr>
      <td><code>dashboard.url</code></td>
      <td>✅</td>
      <td>URL of the environment’s Dashboard</td>
    </tr>
    <tr>
      <td><code>labels</code> (e.g., <code>labels.some_label_key</code>)</td>
      <td>✅</td>
      <td>Labels assigned to the TestWorkflow (special characters are normalized)</td>
    </tr>
    <tr>
      <td><code>env</code> (e.g., <code>env.SOME_VARIABLE</code>)</td>
      <td>❌</td>
      <td>Environment variable values (resolved at runtime)</td>
    </tr>
    <tr>
      <td><code>failed</code></td>
      <td>❌</td>
      <td>Indicates if the execution has already failed</td>
    </tr>
    <tr>
      <td><code>passed</code></td>
      <td>❌</td>
      <td>Indicates if the execution has not yet failed</td>
    </tr>
    <tr>
      <td><code>services</code> (e.g., <code>services.db.0.ip</code>)</td>
      <td>❌</td>
      <td>IP addresses of initialized services</td>
    </tr>
  </tbody>
</table>

### Contextual Variables

Additional variables are available in specific contexts:

#### Retry Conditions

When defining a custom retry condition, you can use <code>self.passed</code> and <code>self.failed</code> to determine the step status:

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

- <code>matrix.&lt;name&gt;</code> and <code>shard.&lt;name&gt;</code> for custom parameters
- <code>index</code> and <code>count</code> for each copy
- <code>matrixIndex</code>, <code>matrixCount</code>, <code>shardIndex</code>, and <code>shardCount</code> for detailed indexing

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

## Built-in Functions

The expressions language includes many functions that help manipulate and cast values.

### Casting Functions

<table>
  <thead>
    <tr>
      <th>Function</th>
      <th>Returns</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>string</code></td>
      <td>string</td>
      <td>Casts a value to a string</td>
      <td><code>string(5)</code> returns <code>"5"</code></td>
    </tr>
    <tr>
      <td><code>list</code></td>
      <td>list</td>
      <td>Creates a list from provided values</td>
      <td><code>list(10, 20)</code> returns <code>[10, 20]</code></td>
    </tr>
    <tr>
      <td><code>int</code></td>
      <td>int</td>
      <td>Converts a value to an integer</td>
      <td><code>int(10.5)</code> returns <code>10</code></td>
    </tr>
    <tr>
      <td><code>bool</code></td>
      <td>bool</td>
      <td>Converts a value to a boolean</td>
      <td><code>bool("")</code> returns <code>false</code></td>
    </tr>
    <tr>
      <td><code>float</code></td>
      <td>float</td>
      <td>Converts a value to a floating-point number</td>
      <td><code>float("300.50")</code> returns <code>300.5</code></td>
    </tr>
    <tr>
      <td><code>eval</code></td>
      <td>any</td>
      <td>Evaluates an expression</td>
      <td><code>eval("4 * 5")</code> returns <code>20</code></td>
    </tr>
  </tbody>
</table>

### General Functions

<table>
  <thead>
    <tr>
      <th>Function</th>
      <th>Returns</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>join</code></td>
      <td>string</td>
      <td>Joins list elements into a single string</td>
      <td><code>join(["a", "b"])</code> returns <code>"a,b"</code>; <code>join(["a", "b"], " - ")</code> returns <code>"a - b"</code></td>
    </tr>
    <tr>
      <td><code>split</code></td>
      <td>list</td>
      <td>Splits a string into a list based on a delimiter</td>
      <td><code>split("a,b,c")</code> returns <code>["a", "b", "c"]</code></td>
    </tr>
    <tr>
      <td><code>trim</code></td>
      <td>string</td>
      <td>Removes whitespace from both ends of a string</td>
      <td><code>trim("   \nabc  d  ")</code> returns <code>"abc  d"</code></td>
    </tr>
    <tr>
      <td><code>len</code></td>
      <td>int</td>
      <td>Returns the length of an array, map, or string</td>
      <td><code>len(["a", "b"])</code> returns <code>2</code></td>
    </tr>
    <tr>
      <td><code>floor</code></td>
      <td>int</td>
      <td>Rounds a number down to the nearest integer</td>
      <td><code>floor(10.5)</code> returns <code>10</code></td>
    </tr>
    <tr>
      <td><code>ceil</code></td>
      <td>int</td>
      <td>Rounds a number up to the nearest integer</td>
      <td><code>ceil(10.5)</code> returns <code>11</code></td>
    </tr>
    <tr>
      <td><code>round</code></td>
      <td>int</td>
      <td>Rounds a number to the nearest integer</td>
      <td><code>round(10.5)</code> returns <code>11</code></td>
    </tr>
    <tr>
      <td><code>at</code></td>
      <td>any</td>
      <td>Retrieves an element from a list or map by index/key</td>
      <td><code>at([10, 2], 1)</code> returns <code>2</code>; <code>at({"foo": "bar"}, "foo")</code> returns <code>"bar"</code></td>
    </tr>
    <tr>
      <td><code>tojson</code></td>
      <td>string</td>
      <td>Serializes a value to JSON format</td>
      <td><code>tojson({ "foo": "bar" })</code> returns <code>"{\"foo\":\"bar\"}"</code></td>
    </tr>
    <tr>
      <td><code>json</code></td>
      <td>any</td>
      <td>Parses a JSON string into an object</td>
      <td><code>json("{\"foo\":\"bar\"}")</code> returns <code>{ "foo": "bar" }</code></td>
    </tr>
    <tr>
      <td><code>toyaml</code></td>
      <td>string</td>
      <td>Serializes a value to YAML format</td>
      <td><code>toyaml({ "foo": "bar" })</code> returns a YAML string</td>
    </tr>
    <tr>
      <td><code>yaml</code></td>
      <td>any</td>
      <td>Parses a YAML string into an object</td>
      <td><code>yaml("foo: bar")</code> returns <code>{ "foo": "bar" }</code></td>
    </tr>
    <tr>
      <td><code>shellquote</code></td>
      <td>string</td>
      <td>Sanitizes and quotes arguments for safe shell usage</td>
      <td><code>shellquote("foo bar")</code> returns <code>"\"foo bar\""</code></td>
    </tr>
    <tr>
      <td><code>shellparse</code></td>
      <td>list</td>
      <td>Parses a shell command string into an array of arguments</td>
      <td><code>shellparse("foo bar")</code> returns <code>["foo", "bar"]</code></td>
    </tr>
    <tr>
      <td><code>map</code></td>
      <td>list or map</td>
      <td>Applies an expression to each element in a list or map</td>
      <td><code>map([1,2,3,4,5], "_.value * 2")</code> returns <code>[2,4,6,8,10]</code></td>
    </tr>
    <tr>
      <td><code>filter</code></td>
      <td>list</td>
      <td>Filters a list using an expression predicate</td>
      <td><code>filter([1,2,3,4,5], "_.value > 2")</code> returns <code>[3,4,5]</code></td>
    </tr>
    <tr>
      <td><code>jq</code></td>
      <td>any</td>
      <td>Executes a jq expression on a value</td>
      <td><code>jq([1,2,3,4,5], ". | max")</code> returns <code>5</code></td>
    </tr>
    <tr>
      <td><code>range</code></td>
      <td>list</td>
      <td>Generates a range of numbers</td>
      <td><code>range(5, 10)</code> returns <code>[5, 6, 7, 8, 9]</code>; <code>range(5)</code> returns <code>[0, 1, 2, 3, 4]</code></td>
    </tr>
    <tr>
      <td><code>relpath</code></td>
      <td>string</td>
      <td>Computes a relative file path</td>
      <td><code>relpath("/a/b/c")</code> might return <code>./b/c</code></td>
    </tr>
    <tr>
      <td><code>abspath</code></td>
      <td>string</td>
      <td>Computes an absolute file path</td>
      <td><code>abspath("b/c")</code> might return <code>/some/working/dir/b/c</code></td>
    </tr>
    <tr>
      <td><code>chunk</code></td>
      <td>list</td>
      <td>Splits a list into chunks of a specified maximum size</td>
      <td><code>chunk([1,2,3,4,5], 2)</code> returns <code>[[1,2], [3,4], [5]]</code></td>
    </tr>
    <tr>
      <td><code>date</code></td>
      <td>string</td>
      <td>Returns the current date in a specified format</td>
      <td><code>date()</code> might return <code>"2024-06-04T11:59:32.308Z"</code>; <code>date("2006-01-02")</code> might return <code>"2024-06-04"</code></td>
    </tr>
    <tr>
      <td><code>secret</code></td>
      <td>string</td>
      <td>Creates a reference to a secret as an environment variable</td>
      <td><code>secret("name", "key")</code> returns a reference like <code>"env.S_N_name_K_key"</code></td>
    </tr>
  </tbody>
</table>

### File System Functions

<table>
  <thead>
    <tr>
      <th>Function</th>
      <th>Returns</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>file</code></td>
      <td>string</td>
      <td>Returns the contents of a file</td>
      <td><code>file("/etc/some/path")</code> might return <code>"some\ncontent"</code></td>
    </tr>
    <tr>
      <td><code>glob</code></td>
      <td>list</td>
      <td>Finds files matching a pattern</td>
      <td><code>glob("/etc/**/*", "./x/**/*.js")</code> might return <code>["/etc/some/file", "/etc/other/file", "/some/working/dir/x/file.js"]</code></td>
    </tr>
  </tbody>
</table>

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
