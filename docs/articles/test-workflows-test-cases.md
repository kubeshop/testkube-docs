# Muting & Re-running Test Cases

A Test Workflow step normally passes or fails on the exit code of the tool it ran. That is the wrong
granularity for two common situations:

- A handful of test cases are known to fail — a third-party quota, a bug nobody intends to fix this
  quarter — and the pipeline needs to go green without deleting the tests.
- A suite of ten thousand test cases had forty failures, and re-running all ten thousand to re-check
  forty is a waste of time and money.

The `testCases` block on a step covers both. It reads the step's own test report, decides which
failures were expected, and can narrow the next run to the test cases that did not pass.

:::info
`testCases` is available in connected (cloud) mode only. A standalone open source deployment rejects
a workflow that uses it, rather than running it with the policy ignored — a mute policy that is
silently dropped leaves a pipeline red that its author declared green.
:::

## Muting known failures

```yaml title="mute-known-failures.yaml"
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: payments-suite
spec:
  steps:
    - name: Run the suite
      testCases:
        report:
          format: junit
          paths: ["reports/**/*.xml"]
        mute:
          include:
            - "test_flaky_*"
            - "Tests.Integration.Payments/**"
          exclude:
            - "test_flaky_checkout_total"
      run:
        image: python:3.12
        shell: pytest --junitxml=reports/out.xml
      artifacts:
        paths: ["reports/**"]
```

The tool still exits non-zero, and the report still records the failures. What changes is the step's
verdict: if every failing test case matches `mute`, the step passes.

Muting is not hiding. The step log states what the report said:

```
1043 test cases: 1035 passed, 8 failed (8 muted), 0 unexpected — no unexpected failures
```

and the counts reach the CLI and the dashboard (see [What you see](#what-you-see)).

## How a test case is addressed

Every pattern and every selection works on one canonical address:

```
<suite>/<classname>/<name>
```

Empty segments are kept, so a test case with no suite and no classname is `//TestFoo` rather than
`TestFoo`. Patterns are globs, `**` included.

**A pattern with no `/` matches the test name alone.** `test_flaky_*` matches
`Payments/CheckoutTest/test_flaky_total` without you having to know or write the leading segments.
This is deliberate: shard suffixes and inconsistently populated classnames both live in those
segments, so a name-only pattern is the one that keeps working.

## Reading the report

```yaml
testCases:
  report:
    format: junit # the only format understood today
    paths: ["reports/**/*.xml"]
    onMissing: fail # fail (default) | warn | ignore
```

`paths` are globs resolved against **the run container's working directory**, which is not
necessarily the same as `artifacts.workingDir`. Absolute paths are accepted.

`onMissing: fail` is the default on purpose. It is the safety catch that stops a mute policy
rescuing a step that crashed before it could write a report at all. Relax it only for a step whose
tool legitimately may produce nothing.

## Pass requirements

For a suite where some failures are acceptable in bulk rather than by name:

```yaml
testCases:
  report:
    paths: ["reports/**/*.xml"]
  tolerate:
    minPassed: 9000 # of 10,000
```

Available fields: `maxFailed`, `maxFailedPercent`, `minPassed`, `minPassedPercent`. Every field you
set must hold. The requirement is measured over the failures `mute` did **not** cover, so the two
compose: mute the named exceptions, then set a bar for everything else.

:::warning
A pass requirement is only evaluated on a run that measured the whole suite. A run narrowed by
`select` skips it, because a threshold over a subset means nothing — so **requirements do not
accumulate across narrowing retries.**

With `minPassed: 9000` over 10,000 cases: attempt 1 passes 8,800 and misses the bar, so it retries;
attempt 2 re-runs the 1,200 failures and fixes 1,150, so 9,950 have now passed overall — and the step
still fails, on the 50 that remain. Nothing carries over between attempts.

If you want totals across attempts, put the full pass and the requirement on one step and the
narrowing on another. The step log says which pass a requirement was evaluated against, or that it
was skipped as narrowed.
:::

## How far the verdict may move

```yaml
testCases:
  enforce: onFailure # onFailure (default) | always
```

`onFailure` only ever turns a failure into a pass. A zero exit code is left alone.

`always` additionally **fails** a run that exited zero but missed its pass requirement. Use it for a
tool that reports failures in its report while still exiting successfully. It is opt-in because
overriding a green exit code is surprising.

## Re-running only what failed

`select` narrows a run to specific test cases. Testkube deliberately knows no runner's filter flag —
not pytest's `-k`, not Maven's `-Dtest=` — so **the workflow has to say how the selected names reach
the tool.** That is what `as`, `collapse` and the `testCases.selected` expression are for.

### Narrowing a retry

```yaml title="narrowing-retry.yaml"
- name: Run the suite
  retry:
    count: 3
  testCases:
    report:
      paths: ["reports/out.xml"]
    mute:
      include: ["test_flaky_*"]
    select: {} # defaults to this step's own report
  run:
    command: [pytest, "--junitxml=reports/out.xml"]
    args: ["{{ testCases.selected }}"]
```

Attempt 1 finds no report yet, so the selection is empty and the whole suite runs. Attempt 2 reads
attempt 1's report **before** running the command and passes only its failures.

Nothing tracks attempts to make this work. The selection is resolved before the command and the
verdict after it, so for a tool that overwrites its report the file holds the previous attempt's
results exactly when the selection reads it, and this attempt's by the time the verdict does.

`testCases.selected` is **always a list**, empty when nothing was selected. That single property is
what removes the conditional from your YAML: the same `args:` line serves a full run and a narrowed
one, because an empty list expands to no arguments at all.

### Re-running an earlier step's failures

Point `select.paths` at the other step's report. The two steps share a file system, so this needs no
reference between them — and it keeps the file the selection reads separate from the one the verdict
judges.

```yaml title="rerun-step.yaml"
- name: First pass
  optional: true # its verdict must not stop the workflow
  testCases:
    report:
      paths: ["reports/first.xml"]
  run:
    command: [pytest, "--junitxml=reports/first.xml"]

- name: Re-run what failed
  condition: always
  testCases:
    report:
      paths: ["reports/second.xml"]
    select:
      paths: ["reports/first.xml"]
      empty: skip # nothing failed, so skip this step entirely
  run:
    command: [pytest, "--junitxml=reports/second.xml"]
    args: ["{{ testCases.selected }}"]
```

### Re-running another execution's failures

`select.from` names where the previous results come from. It defaults to `self` — this execution,
read off the pod's disk — and otherwise takes any reference
[`execution()`](/articles/test-workflows-expressions) takes:

| `from`      | Reads                                              |
| ----------- | -------------------------------------------------- |
| `self`      | this execution's own report on disk (the default)  |
| `rerun`     | the execution this one is a rerun of               |
| `parent`    | the execution that scheduled this one              |
| _reference_ | an execution id, workflow name, or `execute` alias |

Anything other than `self` reads that execution's **artifacts**, so `select.paths` has to say which
of them hold the report — a report is one artifact among many and Testkube cannot guess. A step that
names a remote source without paths is refused when the workflow is processed.

```yaml title="rerun-a-previous-execution.yaml"
- name: Re-run what the last run failed
  testCases:
    report:
      paths: ["reports/out.xml"]
    select:
      from: rerun
      paths: ["reports/out.xml"] # where to find it among that execution's artifacts
      empty: skip # nothing failed there, so there is nothing to re-run
  run:
    command: [pytest, "--junitxml=reports/out.xml"]
    args: ["{{ testCases.selected }}"]
```

A reference that does not resolve **fails the step**. Running the whole suite because Testkube could
not find the execution you named would be the wrong answer delivered confidently. The other
execution having produced no matching report is different, and is not an error: that is the same
"nothing to narrow to" as a missing local report, so `select.empty` decides.

### Shaping the selection for your runner

`as` projects each entry; `testcase.id`, `.suite`, `.classname`, `.name` and `.status` are in scope.
`collapse` folds the whole list into a single argument, with `selected` in scope.

```yaml title="pytest"
testCases:
  select:
    as: "{{ testcase.classname }}::{{ testcase.name }}"
```

```yaml title="Maven"
testCases:
  select:
    as: "{{ testcase.classname }}#{{ testcase.name }}"
    collapse: '-Dtest={{ join(selected, ",") }}'
```

```yaml title="go test"
testCases:
  select:
    as: "^{{ testcase.name }}$"
    collapse: '-run={{ join(selected, "|") }}'
```

In all three the step is invoked the same way, `args: ['{{ testCases.selected }}']`. `as` defaults to
the canonical id, so the simplest case needs neither field.

### Other selection options

| Field          | Meaning                                                          |
| -------------- | ---------------------------------------------------------------- |
| `status`       | which outcomes to take; defaults to `failed` and `errored`       |
| `include`      | narrow further, same glob form as `mute`                         |
| `exclude`      | drop matches from the selection                                  |
| `cases`        | an explicit list, instead of or alongside the report             |
| `includeMuted` | re-run the cases `mute` covers; off by default                   |
| `empty`        | what an empty selection means: `all` (default), `skip`, `fail`   |
| `write`        | write the entries to a file instead of passing them as arguments |

**Muted cases are left out of a selection by default.** A muted failure is one you have already
decided not to care about, so re-running it costs time on every attempt and can never change the
verdict. It is also what lets a narrowing retry converge: otherwise the selection can never shrink
below the muted set, and those cases burn the whole retry budget. Set `includeMuted: true` only to
find out whether a muted test has started passing again — on a periodic full run, not on every retry.

`empty: all` is right for a narrowing retry, where the first attempt has no report and must run
everything. It is usually wrong for a dedicated re-run step, which wants `skip`.

For a selection too large to pass as arguments — Linux caps a single argument at 128 KB — or a runner
that wants an arguments file natively:

```yaml
testCases:
  select:
    write:
      path: /data/selected.txt
      separator: "\n" # default
run:
  shell: pytest @/data/selected.txt
```

The path is also available as `{{ testCases.selectedFile }}`.

### Expressions in scope

| Accessor                   | Value                                          |
| -------------------------- | ---------------------------------------------- |
| `testCases.selected`       | always a list; empty when nothing was selected |
| `testCases.selected.count` | how many entries                               |
| `testCases.selecting`      | whether this run was narrowed                  |
| `testCases.selectedFile`   | the path `select.write` wrote, empty otherwise |

For a shell that would rather not write an expression, the same values arrive as environment
variables:

| Variable                  | Value                                          |
| ------------------------- | ---------------------------------------------- |
| `TK_SELECTED_TESTS`       | the selected entries, **one per line**         |
| `TK_SELECTED_TESTS_COUNT` | how many entries                               |
| `TK_SELECTED_TESTS_FILE`  | the path `select.write` wrote, empty otherwise |

The entries are newline-separated because a test case name may contain a space or a comma —
parameterized names routinely do — so any other separator would split one name in half. Read them
with `while read` or `xargs -d '\n'`:

```yaml
run:
  shell: |
    if [ "$TK_SELECTED_TESTS_COUNT" -gt 0 ]; then
      printf '%s\n' "$TK_SELECTED_TESTS" | xargs -d '\n' pytest --junitxml=reports/out.xml
    else
      pytest --junitxml=reports/out.xml
    fi
```

## Re-running from the CLI

```bash
# re-run only the test cases that did not pass
testkube rerun testworkflowexecution <execution-id> --only-failed

# re-run only the matching test cases (repeatable)
testkube rerun testworkflowexecution <execution-id> \
  --test-case 'Payments/**' --test-case 'test_flaky_*'
```

Both require the workflow to have at least one step declaring `testCases.select`, for the reason
above: without it there is nothing to tell Testkube how the selected names reach your runner, and the
whole suite would run. The request is refused rather than silently running everything.

**`--only-failed` needs no change to a workflow already written for a narrowing retry.** A step left
on the default `from: self` is seeded from the execution being rerun whenever it finds no report of
its own — which is exactly the first attempt. So the workflow from
[Narrowing a retry](#narrowing-a-retry) does the right thing on both:

- attempt 1 has no report yet, so it takes the failures of the execution you reran
- attempt 2 has attempt 1's report, and takes its failures instead

The two can never disagree, which is why neither has to be configured. Point `from` at `rerun`
explicitly only when you want the original execution's failures on _every_ attempt.

`--test-case` is different: those names are text in your runner's own shape, so they are the
selection outright. Passing both means the explicit list wins and nothing is derived from a report.

## What you see

`testkube get testworkflowexecution` reports each step's test report:

```
Test cases:
  Run the suite: 1035/1043 passed, 8 muted, 0 unexpected
```

In the dashboard, a report whose every failure was muted reads **"Only muted tests failed"** in
yellow rather than red, and does not count towards the reports that contain failures. Yellow rather
than green is deliberate: tests did fail, and the report is passing because of a decision someone
made.

Muted failures are also kept out of per-test-case flakiness and health. A muted failure is a declared
expectation, so scoring it as a failure would report a quarantined test as unhealthy for as long as
it stayed quarantined.

## Use `testCases`, not `optional`

`optional: true` looks like it solves the same problem. It does not, and it is strictly worse for
this purpose:

- It drops the step out of the workflow's success calculation entirely, so the step shows **failed**
  while the workflow shows **passed** — the classic green build with a red step inside it.
- It tolerates **any** failure, including an image pull error or a crash before any test ran.

`testCases` makes the step genuinely pass, for a bounded and named set of reasons, and still fails it
when the report is missing. Both can be set; `optional` continues to win at the workflow level.

`negative` is applied _after_ the verdict: `testCases` decides what "failed" means, and `negative`
inverts that.

`retry` needs no special handling. `retry.until` is evaluated against the post-verdict status, so a
fully muted failure does not burn retries.

## Limits and sharp edges

**Test identities are not always stable.** Parameterized names, shard-suffixed suites, timestamps in
suite names and class renames all move the address. Use the implicit name-only matching described
above, and `as` to project away the unstable part.

**A narrowed run that tested nothing fails.** If your runner spells a test differently than the report
does, the filter matches nothing, the tool runs zero tests and exits zero — and every count then looks
like a pass, because the only thing that failed is the thing that never ran. So the verdict checks the
test cases the run was narrowed to against the report it produced. If the report names none of them,
the step fails whatever the exit code said:

```
2 test cases: 0 passed, 2 failed, 2 unexpected — this run was narrowed to 2 test cases and the
report names none of them, so nothing was actually tested; check that the selection reaches your
runner in the shape it expects
```

If only _some_ are missing it is reported and not fatal, since a suite can legitimately lose a test
between runs:

```
… — 1 selected test cases did not run. Selected but absent from the report: s/c/test_deleted
```

This check applies to selections drawn from a report. An explicit `select.cases` list, or
`--test-case` from the CLI, is text in your runner's own shape, so there is no address to check it
against.

**Mute patterns that match nothing are reported.** A pattern matching no test case is dead quarantine
config, and it is named in the step log and the execution record. This is what stops mute lists
outliving the bugs they were written for.

**A report with suite-level counters but no `<testcase>` elements** carries counts and no identities.
Mute patterns cannot be applied to it; the step log says so and only the pass requirement is used.

**A test case with both `<failure>` and `<error>`** resolves to `errored`. The precedence is fixed:
errored > failed > skipped > passed.

**Put `testCases` on the step that runs the tool.** It is read by `run` and `shell`, so a policy on a
step that only groups nested `steps:`, or on a `parallel:` block, is validated and then has no effect
— it is not currently reported as a mistake. A step with both `run` and `artifacts` is fine: the
policy lands on the container that ran the tool.

**`condition` cannot filter test cases.** A step's `condition` skips the whole step. Running "only
these test cases" requires the tool to run with a filter, which is why `select` shapes arguments for
it. The only step-skipping path is `select.empty: skip`.

**Reading another execution's report needs artifact read access.** The control plane grants it; a
deployment whose control plane predates the capability says so rather than failing obscurely.
