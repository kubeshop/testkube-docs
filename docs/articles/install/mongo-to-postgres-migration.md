# Migrating the Agent from MongoDB to PostgreSQL

PostgreSQL is the primary database for the Testkube agent, and MongoDB is kept only for
existing deployments. Pointing an agent that has been running on MongoDB at PostgreSQL does
not carry its data across: the new database starts empty, so `testkube get
testworkflowexecution` stops returning any past Test Workflow execution, and execution
numbering restarts at 1 and collides with the names of executions you already have.

The `convert` tool moves that data. It is a one-shot job you run during the cutover, either
through the Helm chart or as a binary against the two databases directly.

:::note
This page covers the **standalone agent** and its `testkube` chart. To migrate an on-prem
Control Plane, use the separate control-plane utility described in
[Mongo to Postgres Migration (Control Plane)](/articles/convert) — it migrates organizations, environments and
credentials, none of which exist in a standalone agent.
:::

:::warning Version requirements
Requires a chart version that ships the `convert` job, and an agent image on the matching
version. If `convert.enabled` has no effect, the chart you installed predates the tool.
:::

## What the tool migrates

Only two MongoDB collections hold data worth moving.

| Source collection     | Destination                                     | Contents                         |
| --------------------- | ----------------------------------------------- | -------------------------------- |
| `testworkflowresults` | `test_workflow_executions` and its child tables | Test Workflow execution history  |
| `sequences`           | `execution_sequences`                           | Per-workflow execution numbering |

Everything else is deliberately out of scope, because MongoDB never held it:

- **Execution logs, output and artifacts** live in object storage, not the database. Only the
  references travel with the execution, so keep your MinIO or S3 configuration unchanged
  through the cutover, or migrated executions will point at storage that is no longer there.
- **Test Workflow and Template definitions** are Kubernetes custom resources.
- **Cluster configuration**, including the cluster ID and telemetry settings, lives in a ConfigMap.
- **The leader-election lease** has a one-minute lifetime and is reacquired on startup.

## Before you start

- Take a backup of the MongoDB database. The tool only reads from MongoDB, but a backup is
  what lets you retry the cutover from a known state.
- Have PostgreSQL reachable from the cluster. The tool creates the database and applies the
  schema itself if they do not exist yet.
- Know roughly how many executions you have. `db.testworkflowresults.countDocuments({})`
  against MongoDB tells you what to expect in the reports below.

## Step 1: Add PostgreSQL alongside MongoDB

Configure both databases in your values. The `convert` job reads its connection details from
the same values the agent uses, so there is nothing to configure twice.

```yaml title="values.yaml"
testkube-api:
  mongodb:
    enabled: true
    dsn: "mongodb://testkube-mongodb:27017"
  postgresql:
    # Leave disabled for now: the agent keeps writing to MongoDB until the final switch.
    enabled: false
    dsn: "postgresql://<USER>:<PASSWORD>@testkube-postgresql:5432/backend?sslmode=disable"

# Deploy the bundled PostgreSQL, or point the DSN above at your own instance.
postgresql:
  enabled: true
```

```bash
helm upgrade --install testkube kubeshop/testkube \
  --namespace testkube \
  --values values.yaml
```

## Step 2: Rehearse with a dry run

A dry run reads and converts every document without writing any data, so it reports exactly
what a real run would migrate and surfaces any document it cannot handle.

```yaml title="values.yaml"
convert:
  enabled: true
  dryRun: true
```

```bash
helm upgrade --install testkube kubeshop/testkube \
  --namespace testkube \
  --values values.yaml

kubectl logs -n testkube -l app.kubernetes.io/name=testkube-convert -f
```

:::note
A dry run writes no data, but it does create the PostgreSQL database and apply the schema —
the tool has to read its own progress table and count the target rows to report anything.
:::

## Step 3: Migrate the bulk of the history

Set `dryRun` back to `false` and run it again. The agent is still serving from MongoDB at this
point, so this pass takes no downtime however long it runs.

```yaml title="values.yaml"
convert:
  enabled: true
  dryRun: false
```

The job reports progress per batch and prints a summary when it finishes:

```text
Executions: 12000/48000 migrated (12 batches, 0 failed, 0 skipped)
...
======================================================================
EXECUTIONS MIGRATION STATISTICS
======================================================================
Total in source:      48000
Processed:            48000
Failed:               0
Skipped:              0
Batches committed:    5
Signature rows:       192000
Result rows:          48000
Duration:             1m21.043s
Records/second:       592.10
======================================================================
```

## Step 4: Stop the agent and migrate the delta

Executions created while step 3 was running are not in PostgreSQL yet. Scale the agent down,
then run the job once more to pick up the difference. This is the only part of the cutover
that needs downtime, and it is short because the second pass resumes where the first stopped
rather than starting over.

```sh
kubectl scale deployment testkube-api -n testkube --replicas=0
```

Trigger the job again — with `convert.enabled` still `true`, bump the release so a new job is
created:

```bash
helm upgrade testkube kubeshop/testkube \
  --namespace testkube \
  --values values.yaml
```

## Step 5: Switch the agent to PostgreSQL

Enable PostgreSQL, disable MongoDB, and turn the job off so it does not run again on the next
upgrade.

```yaml title="values.yaml"
mongodb:
  enabled: false # disable the bundled MongoDB subchart if you installed it via the chart

testkube-api:
  mongodb:
    enabled: false
  postgresql:
    enabled: true
    dsn: "postgresql://<USER>:<PASSWORD>@testkube-postgresql:5432/backend?sslmode=disable"

convert:
  enabled: false
```

```bash
helm upgrade testkube kubeshop/testkube \
  --namespace testkube \
  --values values.yaml

kubectl scale deployment testkube-api -n testkube --replicas=1
```

:::warning
Set only one of the two. If both DSNs are configured, the agent uses PostgreSQL but still
connects to MongoDB and applies migrations to it, which makes it look as though the cutover
did not take effect.
:::

## Step 6: Confirm the cutover

The standalone agent has no dashboard of its own, so confirm from the CLI. The agent is
reading from PostgreSQL by now, so anything it lists came across in the migration.

```bash
# Historical executions, with their statuses and durations.
testkube get testworkflowexecution --limit 10

# One execution in full, including its step tree.
testkube get testworkflowexecution <executionName>
```

Then trigger something. This is the check that tells you the `sequences` collection came
across: the new execution's name should continue the old numbering rather than ending in `-1`.

```bash
testkube run testworkflow <name>
```

To confirm logs, artifacts and JUnit reports resolve — they stayed in object storage, and only
their references were migrated — open an execution in the hosted read-only viewer:

```bash
testkube view <executionName>
```

See [Viewing Open Source Executions](/articles/viewing-oss-executions) for what that page
shows.

## Running the convert tool outside the cluster

The same binary runs outside the cluster, which is useful for rehearsing a cutover against a
copy of your data or for migrating without touching the Helm release.

```bash
kubectl port-forward -n testkube svc/testkube-mongodb 27017:27017 &
kubectl port-forward -n testkube svc/testkube-postgresql 5432:5432 &

docker run --rm --network host \
  docker.io/kubeshop/testkube-convert:<version> \
  --mongo-dsn mongodb://localhost:27017 \
  --mongo-db testkube \
  --postgres-dsn 'postgresql://<USER>:<PASSWORD>@localhost:5432/backend?sslmode=disable' \
  --dry-run
```

Drop `--dry-run` to migrate. Every flag also reads from an environment variable, so the job
and the CLI can be configured the same way.

## Re-running, resuming and starting over

The tool is built to be run more than once.

- **Interrupted runs resume.** Each batch commits its data and its progress in the same
  transaction, so a job that is killed mid-run continues from the last committed batch instead
  of starting over or writing anything twice. The job's `backoffLimit` exists for this reason.
- **Finished runs are cheap to repeat.** A second run finds nothing new and exits without
  writing, which is what makes the two-pass cutover above work.
- **Execution numbering never moves backwards.** Counters are merged, not overwritten, so
  re-running cannot hand an old number to a new execution.
- **Starting over is explicit.** `--reset` discards everything already migrated and runs from
  the beginning. It refuses to proceed without `--yes`. The job has no Helm value for it, so
  pass it through `convert.extraEnv`:

  ```yaml title="values.yaml"
  convert:
    extraEnv:
      - name: CONVERT_RESET
        value: "true"
      - name: CONVERT_RESET_CONFIRMED
        value: "true"
  ```

## Configuration reference

### Helm values

| Value                             | Default              | Description                                                                    |
| --------------------------------- | -------------------- | ------------------------------------------------------------------------------ |
| `convert.enabled`                 | `false`              | Run the conversion job                                                         |
| `convert.mongoDatabase`           | `testkube`           | MongoDB database to read from                                                  |
| `convert.batchSize`               | `10000`              | Executions committed per transaction                                           |
| `convert.readBatchSize`           | `1000`               | MongoDB cursor batch size                                                      |
| `convert.dryRun`                  | `false`              | Convert everything but write no data                                           |
| `convert.skipErrors`              | `false`              | Continue past documents that cannot be migrated                                |
| `convert.verify`                  | `true`               | Compare source and target counts afterwards                                    |
| `convert.skip`                    | `[]`                 | Tasks to leave out: `executions`, `sequences`                                  |
| `convert.backoffLimit`            | `3`                  | Retries. A retry resumes from the checkpoint                                   |
| `convert.ttlSecondsAfterFinished` | `""`                 | Delete the finished job after this many seconds; empty keeps it for inspection |
| `convert.resources`               | 200m CPU / 256Mi–1Gi | Requests and limits                                                            |

The job also accepts the usual `image`, `annotations`, `podAnnotations`, `serviceAccountName`,
`podSecurityContext`, `containerSecurityContext`, `nodeSelector`, `affinity`, `tolerations` and
`extraEnv` settings.

### Command-line flags

| Flag                 | Environment variable          | Default    | Description                                         |
| -------------------- | ----------------------------- | ---------- | --------------------------------------------------- |
| `--mongo-dsn`        | `API_MONGO_DSN`               | —          | MongoDB connection string to read from (required)   |
| `--mongo-db`         | `API_MONGO_DB`                | `testkube` | MongoDB database name                               |
| `--mongo-db-type`    | `API_MONGO_DB_TYPE`           | `mongo`    | `mongo` or `docdb`                                  |
| `--mongo-allow-tls`  | `API_MONGO_ALLOW_TLS`         | `false`    | Enable TLS to MongoDB                               |
| `--postgres-dsn`     | `API_POSTGRES_DSN`            | —          | PostgreSQL connection string to write to (required) |
| `--batch-size`       | `CONVERT_BATCH_SIZE`          | `10000`    | Executions committed per transaction                |
| `--read-batch-size`  | `CONVERT_READ_BATCH_SIZE`     | `1000`     | MongoDB cursor batch size                           |
| `--dry-run`          | `CONVERT_DRY_RUN`             | `false`    | Convert everything but write no data                |
| `--reset`            | `CONVERT_RESET`               | `false`    | Discard migrated data and start over; needs `--yes` |
| `--skip`             | `CONVERT_SKIP`                | —          | Tasks to leave out: `executions`, `sequences`       |
| `--skip-errors`      | `CONVERT_SKIP_ERRORS`         | `false`    | Continue past documents that cannot be migrated     |
| `--verify`           | `CONVERT_VERIFY`              | `true`     | Compare source and target counts afterwards         |
| `--skip-db-creation` | `SKIP_DB_CREATION`            | `false`    | Assume the PostgreSQL database already exists       |
| `--skip-migrations`  | `DISABLE_POSTGRES_MIGRATIONS` | `false`    | Do not apply the schema first                       |

For TLS to MongoDB, mount the certificate secret into the job and pass
`--mongo-ssl-client-cert-file`, `--mongo-ssl-client-cert-password` and `--mongo-ssl-ca-file`.
See [MongoDB administration][mongo-admin] for the secret layout.

## Troubleshooting

**The job exits non-zero but the summary looks complete.** Verification compares MongoDB
against PostgreSQL and reports a mismatch as a warning plus a non-zero exit, so the report
still prints. Read the `VERIFY:` lines at the end of the log.

**Documents fail to convert.** By default the run stops at the first document it cannot
migrate, so you never end up with a partial migration you believe is complete. The log names
the document and the reason. Once you have decided those executions are expendable,
`skipErrors` continues past them; they are counted, reported, and stepped over on later runs.

**The job runs again after the cutover.** The job is not a Helm hook, so it only runs when
`convert.enabled` is `true`. Set it back to `false` once the migration is done.

**Nothing happens when the job runs a second time.** That is the expected outcome of a
completed migration. To reload from scratch, see
[Re-running, resuming and starting over](#re-running-resuming-and-starting-over).

## Related topics

- [The Testkube Agent](/articles/install/standalone-agent#database)
- [Using an external MongoDB](/articles/mongodb-administration)
- [Mongo to Postgres Migration](/articles/convert) — the control-plane equivalent
- [Upgrade and Uninstall](/articles/upgrade-uninstall)

[mongo-admin]: /articles/mongodb-administration
