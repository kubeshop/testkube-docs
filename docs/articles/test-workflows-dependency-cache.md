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

### Restore Keys

`restoreKeys` turn a miss into a partial hit:

```yaml
key: 'npm-{{ hash_files("package-lock.json") }}'
restoreKeys:
  - "npm-"
```

When the lockfile changes, the exact key misses but `npm-` matches the most recent previous entry. The install then has most of what it needs and fetches only the difference — and because a partial hit still saves under the exact key afterwards, the next run hits exactly.

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

Entries being immutable limits the damage: the first writer of a key wins, and a later run cannot swap out what it stored.

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
