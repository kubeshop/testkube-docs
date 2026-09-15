# Dependency Caching

A step can cache directories between executions with a `cache` block. The cache is restored before the step runs and saved again once the step passes, so a dependency install that would otherwise hit the network on every run reuses what an earlier run already fetched.

```yaml
container:
  image: node:22-alpine
  # Naming the store's location here means the path below is one this workflow
  # decided, rather than a guess about the image. See Name the Cache Location Yourself.
  env:
    - name: npm_config_cache
      value: /root/.npm
steps:
  - name: Install dependencies
    cache:
      key: 'npm-{{ hash_files("package-lock.json") }}'
      restoreKeys:
        - "npm-"
      paths:
        - /root/.npm/_cacache
    shell: npm ci --prefer-offline
```

A cache is an optimization and never a dependency. A miss, an unreachable control plane, a corrupt archive or a refused upload all leave the step to install exactly as it would with no cache configured, and none of them fail the step.

:::tip
Cache what the install **consumes**, not what it produces — npm's `_cacache` rather than `node_modules`, Go's `cache/download` rather than the whole module cache. This is the single biggest lever on cache performance, and it is explained under [Cache the store, not the tree](#cache-the-store-not-the-tree).
:::

## How It Works

Each step with a `cache` block gets two extra stages around it:

1. **Restore** runs before the step. It resolves the key, asks the control plane for a matching entry, and unpacks it into the cached paths. A miss logs `cache: miss for "<key>"` and does nothing else.
2. **Save** runs after the step passes. It packs the cached paths, and uploads the archive under the resolved key.

Both stages log a line of their own, so a cold first run and a warm second run are visible in the step logs:

```
cache: hit for "npm-6c3f…" (37 MB in 368ms)
cache: saved "npm-6c3f…" (37 MB in 665ms, 368ms packing and 286ms uploading)
```

Save runs only when the step passed. That is deliberate: publishing a half-finished install under a content-hash key would have every later run restore the broken tree, with no way for anyone to invalidate it.

## Caching Around Several Steps

A `cache` block can sit on a step that has children rather than a command of its own. The restore runs before the first child and the save after the last one, so a single cache covers an install and everything that depends on it:

```yaml
steps:
  - name: Build and test
    cache:
      key: 'mvn-{{ hash_files("pom.xml") }}'
      paths:
        - /root/.m2/repository
    steps:
      - name: Install dependencies
        shell: mvn dependency:go-offline
      - name: Test
        shell: mvn test
```

This is usually what you want. Caching each step separately packs and uploads the same tree more than once, and the restore only has to happen before the first thing that reads it.

The save still runs only if the step passed, and for a parent that means **every child passed**. A failing test leaves the previous entry in place rather than publishing the tree it produced — which matters more than it sounds, because an entry is immutable, so a tree published by a failed build could not be corrected afterwards.

Every child sees the restored paths: the volumes are mounted on the step, not on one command inside it.

## Caching in Parallel Steps

A cache caches the pod it is declared in. That is the whole rule, and it is the one thing to know before combining a cache with `parallel`, because parallel workers run in pods of their own.

Declare the cache **on** the parallel step, not around it:

```yaml
steps:
  - name: Test in parallel
    parallel:
      count: 4
      cache:
        key: 'npm-{{ hash_files("package-lock.json") }}'
        paths:
          - /root/.npm/_cacache
      shell: npm test -- --shard={{ index }}/{{ count }}
```

A cache on an ancestor of a parallel step does not reach the workers. It restores into the pod that launches them and saves from it, which is not where the work happens — a worker inherits the parent's container configuration without its volume mounts, so there is nothing there for it to find. The cache will appear to run and do nothing for the workers.

:::note
All workers share one cache scope, and it is the same scope the parent workflow uses — a worker execution is submitted under the parent's workflow name. So workers that resolve the same key share one entry.

On a cold run that means every worker misses, every worker packs, and one upload wins while the rest report `was stored by another execution first` and carry on. That is expected: the entry they were all about to store is the one that got stored. Later runs hit.
:::

## Fields

| Field         | Description                                                                                                                 |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `key`         | Required. The entry to look for and store under. Usually derived from a lockfile.                                           |
| `restoreKeys` | Key prefixes to fall back to when the exact key misses, tried in order. The most recently saved match within a prefix wins. |
| `paths`       | Required. Directories to cache. Relative paths resolve against the working directory.                                       |
| `scope`       | `workflow` (default) or `environment`. See [Scope](#scope).                                                                 |
| `workingDir`  | Overrides the base that relative `paths` resolve against.                                                                   |
| `mount`       | Defaults to true. See [Mounting](#mounting).                                                                                |

## Keys

The key is what makes an entry correct rather than merely fast. Derive it from the contents of whatever pins your dependencies:

```yaml
key: 'npm-{{ hash_files("package-lock.json") }}'
```

`hash_files()` digests the _contents_ of the matched files, so editing a dependency produces a different key and the stale tree is never restored. Prefer it over `hash(glob(...))`, which digests the matched _paths_ and therefore does not change when a file's contents do.

Keys are resolved inside the pod, after the repository is checked out — a key that hashes a lockfile cannot be computed before the file exists.

### Every Part of a Key Has to Resolve

A key is refused when any expression in it evaluates to an empty string, and the step then runs uncached:

```yaml
# Refused when package-lock.json does not exist: hash_files() matches nothing,
# the key resolves to "npm-" and identifies no particular dependency set.
key: 'npm-{{ hash_files("package-lock.json") }}'
```

This is the check that stops a whole class of silent misbehaviour. Without it the key above is a perfectly valid `npm-`, and every run in that state shares one entry — one that sits exactly where the `npm-` restore prefix points, so it becomes a candidate for runs that _do_ have a lockfile, and that can never be corrected because entries are immutable.

The usual cause is a path that does not match what you expect — a lockfile in a subdirectory while `workingDir` points elsewhere, or a checkout that did not include it. The refusal names the expression that came back empty.

`restoreKeys` are deliberately exempt. A restore key is a prefix and is meant to match broadly; the problem above is a _key_ that has become indistinguishable from one.

### Restore Keys

`restoreKeys` turn a miss into a partial hit:

```yaml
key: 'npm-{{ hash_files("package-lock.json") }}'
restoreKeys:
  - "npm-"
```

When the lockfile changes, the exact key misses but `npm-` matches the most recent previous entry. The install then has most of what it needs and fetches only the difference — and because a partial hit still saves under the exact key afterwards, the next run hits exactly.

#### Restore Keys Reach Across Git Revisions

A cache scope is one per workflow. It does not include the git revision, so every run of a workflow shares one set of entries whether it ran for the default branch, a tag, or a pull request.

:::warning
A restore key lets a run for one revision restore an entry written by a run for another. If your workflow is triggered on pull requests, a pull request's run can write an entry that a later run for your default branch restores — and the run that wrote it executed code from the pull request.
:::

The mechanism is the prefix, not the key. A pull request run stores under its own exact key; a later run for the default branch misses its exact key, the restore prefix matches the pull request's entry, and the most recently saved match wins.

Two things that look like protections and are not:

- **An exact key narrows this but does not close it.** A pull request that changes the lockfile produces a new key and stores an entry under it. When that pull request merges, the default branch's lockfile hashes to that same key and gets an exact hit on an entry a pre-merge run wrote. Merging the _code_ is reviewed; inheriting the _cache entry_ is not, and the entry's contents need not correspond to the lockfile that named it.
- **Immutability does not help.** It stops an entry being replaced, not being written first, and the attack only needs to be first. It also means a poisoned entry cannot be corrected by a later legitimate run — it stays until it expires.

#### What This Means In Practice

The exposure depends on whether the cached content is verified when it is used:

| Cache                                            | Verified on use                                                        | Risk with restore keys                                       |
| ------------------------------------------------ | ---------------------------------------------------------------------- | ------------------------------------------------------------ |
| `_cacache`, `cache/download`, `~/.m2/repository` | Yes — against the integrity hashes in the consuming run's own lockfile | Low: a substituted entry fails verification and is refetched |
| `GOCACHE`, `ccache` and other build caches       | No — compiled output is trusted on a key match                         | **High: a substituted entry is used as-is**                  |

So the rule for a workflow triggered on pull requests: **do not combine `restoreKeys` with a build cache.** Use an exact key there, or leave the build cache out of `paths` and cache only the download store, which is the larger win in any case — see [Cache the Store, Not the Tree](#cache-the-store-not-the-tree).

If that trade is not acceptable, run the cached workflow only for trusted revisions, and give pull requests a separate workflow without a cache.

### Invalidating a Key

An entry is immutable for its lifetime: once a key holds something, that is what every later run restores, and no rerun can replace it. "For its lifetime" is the operative phrase — entries expire after a day by default, after which the key is free again — but waiting on that is not a workflow. When you change _what_ a step caches without changing the inputs the key hashes, add a version segment and bump it:

```yaml
key: 'npm-v2-{{ hash_files("package-lock.json") }}'
restoreKeys:
  - "npm-v2-"
```

:::warning
Bump the `restoreKeys` prefix along with the key. Leaving it at `npm-` would keep matching entries written under the old shape, which is exactly what the bump was meant to escape.
:::

## Scope

`scope: workflow` is the default: entries are private to the workflow that wrote them, and the same key in another workflow reaches a different entry.

`scope: environment` shares entries with every workflow in the environment, so two workflows building the same dependency set download it once between them.

:::warning
`scope: environment` widens a trust boundary, not just a cache. Any workflow that may write that scope can influence what every other workflow in the environment restores, and a restored dependency tree is code that later runs. Use it where every workflow in the environment is equally trusted; keep the default otherwise.
:::

Immutability limits the damage: the first writer of a key wins, and a later run cannot swap out what it stored. Whether that holds depends on the object store — see [Immutability Depends on the Store](#immutability-depends-on-the-store), and prefer `scope: workflow` where it does not.

A scope also covers every git revision that runs the workflow, which matters most when restore keys are in play — see [Restore Keys Reach Across Git Revisions](#restore-keys-reach-across-git-revisions).

## Immutability Depends on the Store

Entries are immutable because the upload is signed with a condition the store applies only while the key is unused — so of two executions saving one key, exactly one upload lands. That is a property of the store, not of Testkube, and the stores differ:

| Store                  | Conditional upload                                                                      |
| ---------------------- | --------------------------------------------------------------------------------------- |
| MinIO (bundled)        | Applied                                                                                 |
| MinIO (self-managed)   | Applied from a recent release; older builds ignore the header                           |
| AWS S3                 | Applied                                                                                 |
| Google Cloud Storage   | **Not applied** through the S3-compatible endpoint — GCS wants a different precondition |
| An S3-compatible proxy | Depends entirely on the proxy                                                           |

A store that does not apply it accepts the second upload and overwrites. There is no error and no warning at the time, which is why the control plane **asks once at startup** and logs one of three answers — applied, ignored, or could not tell. Check that line before relying on the guarantee.

### What Degrades Without It

Less than the word "immutable" suggests, and in one specific place.

Nothing changes in ordinary operation. A save is skipped entirely when the restore was an exact hit, and the control plane checks whether the key already exists before granting an upload at all — so a second save normally never happens. The condition only decides the outcome when two executions pass both of those checks concurrently.

When they do, the later upload wins instead of being refused. Both resolved the same content-derived key, so both are storing trees built from the same inputs; usually the two are equivalent and the only cost is the wasted upload.

**Where it matters is `scope: environment`.** The guarantee there is that a workflow able to write a shared scope can only ever _seed_ a key, never replace what another workflow already stored. Without it, that workflow can replace a tree at any time by racing a save — and a restored dependency tree is code that then runs. On a store that does not apply the condition, keep the default `scope: workflow`, where the writer and the reader are the same workflow.

## Mounting

Each stage of a step is its own container, and containers in a pod share volumes but not their root filesystems. A path restored outside every volume would land in the restore container's own filesystem, where the container running the install cannot see it — so the cache would appear to work and silently do nothing.

Testkube therefore mounts a volume at every cached path that is not already inside one. A path that already sits in a shared volume — inside the repository checkout, or under `/data` — reuses it.

Set `mount: false` only for a path that is already covered. On an uncovered path it is refused at bundle time rather than accepted and quietly ignored.

## Performance

Both halves of a cache spend their time **per entry, not per byte**. Packing and unpacking a dependency tree is dominated by opening, reading and creating files, not by compressing or transferring them. That single fact drives every recommendation below.

### Cache the Store, Not the Tree

Every package manager has a content-addressed store it downloads into, and an installed tree it builds from that store. The store holds a few thousand larger, already-compressed files; the tree beside it holds tens of thousands of small ones — and it is derived from the store, so the install can always rebuild it.

Cache the store.

| Tool  | Cache this                    | Not this                      |
| ----- | ----------------------------- | ----------------------------- |
| npm   | `$npm_config_cache/_cacache`  | `node_modules`                |
| Go    | `$GOMODCACHE/cache/download`  | the rest of `$GOMODCACHE`     |
| pnpm  | the store (`pnpm store path`) | `node_modules`                |
| pip   | `~/.cache/pip`                | the site-packages directory   |
| Maven | `~/.m2/repository`            | build output such as `target` |

The npm and Go rows are measured on the Testkube repository; the rest follow the same
pattern and are worth confirming against your own project with the check under
[Verify That the Store Is Enough](#verify-that-the-store-is-enough).

Measured on a Go module cache, switching from the whole module cache to `cache/download` alone:

|         | whole cache  | `cache/download` |
| ------- | ------------ | ---------------- |
| entries | 98,370 files | **4,927 files**  |
| archive | 893 MB       | **471 MB**       |
| save    | 36.6s        | **9.2s**         |
| restore | 38.6s        | **5.2s**         |

The archive halved; the save fell fourfold and the restore sevenfold. Compression and transfer scale with the bytes, so if they had been the limit those numbers would have tracked each other. They do not, and the gap is entry count.

:::tip
For npm this is not even a trade-off. `npm ci` **removes `node_modules` before it installs**, so a restored tree is deleted before anything can read it — the cache stores and fetches it for no effect at all, while the install still goes to the registry for every tarball. Caching the installed tree only helps `npm install`, which is incremental.
:::

### Name the Cache Location Yourself

Set the store's location in the workflow rather than inheriting whatever the image chose:

```yaml
container:
  image: golang:1.26-alpine
  env:
    - name: GOMODCACHE
      value: /root/go/pkg/mod
```

Without this, the cached path is a guess about the image. The official `golang` images set `GOPATH=/go`, so a workflow that cached `$HOME/go/pkg/mod` — the Go default — would cache an empty directory, succeed, and restore nothing on every subsequent run.

### Verify That the Store Is Enough

The claim that the installed tree is derived is worth executing rather than trusting. Delete it and reinstall with the network off:

```yaml
shell: |
  set -e
  npm ci --prefer-offline
  rm -rf node_modules
  npm ci --offline
```

`--offline` fails if anything has to be fetched. `--prefer-offline` would silently fall back to the registry and pass, hiding exactly the problem the check exists to find. Go's equivalent is `GOPROXY=off go mod download all`.

### Don't Cache What the Step Never Fills

A build cache is only worth caching if the step actually compiles something. `go mod download` populates the module cache and leaves `GOCACHE` untouched, so a step that only downloads will store an empty build cache — and, because entries are immutable, that empty entry answers every later run.

Testkube refuses to store an archive with no entries for this reason, logging `cache: not saving "<key>": nothing was found under <paths>`. If you see that, the paths are wrong or the step never wrote to them.

## Configuration

Caching needs nothing configured to work — a workflow with a `cache` block caches. These settings govern how long entries survive and where they live, and they are set on the control plane rather than in a workflow.

| Helm value                             | Environment variable       | Chart default        | Description                                                                                                                          |
| -------------------------------------- | -------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `testkube-api.storage.cacheExpiration` | `STORAGE_CACHE_EXPIRATION` | `1`                  | Days a cache entry survives. `0` disables expiry and leaves entries to `expiration`.                                                 |
| `testkube-api.storage.expiration`      | `STORAGE_EXPIRATION`       | `0`                  | Days **any** object in the bucket survives, caches included. `0` disables it.                                                        |
| `testkube-api.storage.bucket`          | `STORAGE_BUCKET`           | `testkube-artifacts` | The bucket caches share with artifacts and logs. The binary's own default differs (`testkube-logs`); the chart sets this explicitly. |

Caches live under a `.tkcache/v1` prefix inside that bucket. That prefix is how the cache lifecycle rule targets them without touching artifacts, and it is what to filter on if you write a bucket policy of your own.

```yaml title="values.yaml"
testkube-api:
  storage:
    # A day. Entries are keyed on lockfile contents, so one still wanted is
    # rewritten by the next run that misses it.
    cacheExpiration: 1
```

### Cache Expiration

`cacheExpiration` defaults to one day. A cache entry is disposable by construction — it is keyed on the contents of a lockfile, so an entry that is still wanted is rewritten by the next run that misses it, and one that is not is dead weight in the bucket.

Days are the finest granularity an object store's lifecycle offers, so `1` is the shortest expiry that can be expressed. It means 24 hours, not a rounding of it.

Raise it if your workflows run less often than they expire. A nightly or weekly workflow will find its cache gone every time under a one-day expiry: it pays the packing and upload cost on every run and never collects. Set `cacheExpiration` past the longest gap between runs of the workflows you care about, or `0` to disable expiry entirely.

:::note
`expiration` is a separate setting and stays opt-in, because its rule is **unfiltered**: it governs every object in the bucket, artifacts and logs included. `cacheExpiration` is confined to the cache prefix and can only ever delete caches. That is the reason one carries a default and the other does not.
:::

### How the Two Interact

Both are implemented as bucket lifecycle rules, so when both are set the **earlier expiry wins**. A cache TTL can bring eviction forward but never postpone it past `expiration`, and the API server logs a warning at startup if you configure `cacheExpiration` longer than `expiration`.

### Lifecycle Rules You Manage Yourself

Testkube reads the bucket's existing lifecycle before applying its own rules and carries through every rule it did not write, matched by rule ID. A lifecycle managed by Terraform, a bucket policy, or a cloud console is left intact.

If that existing configuration cannot be read, Testkube writes nothing and logs an error rather than replacing what it could not see. Caches then simply are not expired, which is recoverable; a bucket whose retention silently changed is not.

Reading it needs a permission that earlier versions did not: `s3:GetLifecycleConfiguration` on S3 and MinIO, `storage.buckets.get` on GCS. Both S3 actions are bucket-scoped, so a policy whose `Resource` is only `arn:aws:s3:::your-bucket/*` does not carry them however permissive its object actions are. Note also that `cacheExpiration` defaults to `1`, so the lifecycle is read and written on every installation rather than only those that configure an expiration.

## Limitations

**Cached paths must be concrete at bundle time.** Testkube decides which volumes to mount before the pod starts, while the toolkit resolves the paths inside it. A `paths` entry — or a `workingDir` — containing an expression that can only be resolved in the pod is rejected when the workflow is built, because the two would otherwise disagree and the cache would silently do nothing. Config, workflow and execution values are fine; they are already substituted by then.

**`scope` cannot be templated.** It carries a CRD enum, and enum validation happens before expressions are resolved. Parameterize with one workflow per scope instead.

**Entries cannot be replaced.** See [Invalidating a Key](#invalidating-a-key).

**An archive is capped at 5 GiB.** A larger one is skipped with a message rather than stored.

**A key is at most 512 characters, and `restoreKeys` holds at most 10 prefixes.** At least one `paths` entry is required.

**A restore-key search looks at up to 1000 entries in the scope.** The exact key is checked directly and so can never be hidden by that limit, but in a scope that has accumulated a very large number of entries a `restoreKeys` prefix may not reach the oldest of them. This matters most under `scope: environment`, where every workflow writes into the same place.

**A restore only writes to the declared cached paths.** An entry written by another workflow under `scope: environment` cannot place files anywhere else in the container. An archive that tries is treated as a failed restore: the paths are cleared and the step reports a miss.

**A single execution cannot tell a hit from a miss.** A step's cache is saved after the step passes, so nothing in that same run can observe it, and an install rebuilds its output whether or not the restore brought anything back. Asserting that a cache actually works takes two executions of the same workflow — see the `tw-cache-roundtrip` example in the Testkube repository.

**A control plane without dependency-cache support answers every restore with a miss.** Workflows written against one that supports it still run against one that does not; the log line says which.

## Full Example

```yaml
apiVersion: testworkflows.testkube.io/v1
kind: TestWorkflow
metadata:
  name: cached-install
spec:
  content:
    git:
      uri: https://github.com/kubeshop/testkube
      revision: main
      paths:
        - js
  container:
    image: node:22-alpine
    workingDir: /data/repo/js
    env:
      - name: npm_config_cache
        value: /root/.npm
  steps:
    - name: Install dependencies
      cache:
        key: 'npm-v1-{{ hash_files("package-lock.json") }}'
        restoreKeys:
          - "npm-v1-"
        paths:
          - /root/.npm/_cacache
        scope: workflow
      shell: |
        set -e
        npm ci --prefer-offline --no-audit --fund=false

    - name: Run tests
      shell: npm test
```

## See Also

- [Content](/articles/test-workflows-content) — checking out the repository the key is usually derived from
- [Sharing Data Between Steps](/articles/test-workflows-step-sharing) — passing values and files within one execution
- [Expression Language](/articles/test-workflows-expressions) — `hash_files()` and the rest of the standard library
- [Artifacts](/articles/test-workflows-artifacts) — storing a run's output, rather than reusing its inputs
