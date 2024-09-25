# Test Workflows Artifacts

Testkube can be configured to retrieve any file artifacts that are produced by tools and scripts executed in 
a Test Workflow. Collected artifacts are then retrievable either via the API/CLI 
(see [CLI Reference](/cli/testkube_download)) or via the Dashboard in the [Artifacts Tab](/articles/logs-and-artifacts#artifact-collection).

:::note

Testkube stores Artifacts in the backend using Minio - [Read More](/articles/install/advanced-install#minio).

:::

Specify which artifacts to collect by adding an `artifacts` property to the corresponding Test steps
(see [schema reference](/articles/crds/testworkflows.testkube.io-v1#stepartifacts)), for example

```yaml
- name: Example step with artifacts
  shell: example-command
  artifacts:
    paths:
    - 'output/**/*'
   ```

will collect all files/folders produced by the `example-command` under the `output` folder. 

Artifacts are resolved relatively to the workingDir, so for example 

```yaml
- name: Saving artifacts
  workingDir: /data/repo/test/cypress/executor-tests/cypress-13/cypress/videos
  artifacts:
    paths:
    - '**/*'
```

will collect all files in the `../videos` folder.

:::info

Testkube supports Glob patterns for path matching as provided by the [doublestar library](https://github.com/bmatcuk/doublestar?tab=readme-ov-file#patterns).

:::

## Compressing Artifacts

If you want to compress specific artifacts, you can add a compress property specifying the name of a target archive:

```yaml
- name: Saving compressed logs
  artifacts:
    compress: 
      name: 'logs.tar.gz'
    paths:
    - 'logs/*.log'
```

## Artifacts from Parallel Executions

Collecting artifacts from [parallel executions](/articles/test-workflows-parallel) works the same; specify 
an `artifacts` property as shown above for parallel nodes, collected artifacts will be placed under a folder 
named after the node index.

You could also use the fetch property to copy files back from parallel nodes and then using a separate
artifacts step to save them:

```yaml
  - name: Run tests
    parallel:
      count: 2
      transfer:
      - from: /data/repo
      fetch:
      - from: /data/out
        to: /data/artifacts/instance-{{ index }}
      container:
        env:
        - name: PLAYWRIGHT_HTML_REPORT
          value: /data/out/playwright-report
      shell: 'npx playwright test --output /data/out --shard {{ index + 1 }}/{{ count }}'

  - condition: always
    artifacts:
      workingDir: /data/artifacts
      paths:
      - '**/*'
```

:::tip

If you have a step specifically for artifact collections, be sure to use `condition: always` as shown in the example 
above to ensure that artifacts are collected, otherwise this step could be skipped if a previous step fails.

:::

## JUnit Report Extraction

Testkube automatically scans all artifacts for `.xml` files that are valid [JUnit XML reports](https://github.com/testmoapp/junitxml) and parses 
their contents to be available under the [Test Insights Reporting](/articles/test-insights#test-reports) feature. 

More specifically, Testkube extracts:

- The number of JUnit Testcases executed per Workflow
- Their individual pass/fails statuses

This allows for aggregate reporting on JUnit testcase executions and corresponding statuses per Workflow.

