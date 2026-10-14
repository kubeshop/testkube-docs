// Runs Vale on the docs a branch changes and reports only the alerts on lines it adds.
//
//   node scripts/vale-changed-lines.mjs [base]    (default base: origin/main)
//
// The existing pages carry thousands of Vale alerts, so linting whole files would fail every
// pull request on text it did not touch. The diff is taken from the merge base to the working
// tree, so uncommitted edits count too. Exits 1 when an added line has an error-level alert.
import { execFileSync, spawnSync } from "node:child_process";

// Generated pages, matching .prettierignore and _typos.toml.
const GENERATED = [
  "docs/cli/",
  "docs/legacy-cli/",
  "docs/openapi/",
  "docs/crd/",
  "docs/articles/inventory/",
  "docs/articles/crds/",
];

const base = process.argv[2] ?? "origin/main";
const git = (...args) =>
  execFileSync("git", args, { encoding: "utf8", maxBuffer: 64 << 20 });

let mergeBase;
try {
  mergeBase = git("merge-base", base, "HEAD").trim();
} catch {
  console.error(
    `Cannot find where HEAD left ${base}. Fetch it first, for example: git fetch origin main`
  );
  process.exit(2);
}
const diff = git(
  "diff",
  "-U0",
  "--no-color",
  "--diff-filter=AMR",
  mergeBase,
  "--",
  "*.md",
  "*.mdx"
);

// file -> set of added line numbers
const added = new Map();
let file = null;
for (const line of diff.split("\n")) {
  if (line.startsWith("+++ ")) {
    const path = line.slice(4).replace(/^b\//, "");
    file = GENERATED.some((dir) => path.startsWith(dir)) ? null : path;
    if (file) added.set(file, new Set());
    continue;
  }
  const hunk = /^@@ -\S+ \+(\d+)(?:,(\d+))? @@/.exec(line);
  if (hunk && file) {
    const start = Number(hunk[1]);
    const count = hunk[2] === undefined ? 1 : Number(hunk[2]);
    for (let n = start; n < start + count; n++) added.get(file).add(n);
  }
}
for (const [path, lines] of added) if (lines.size === 0) added.delete(path);

if (added.size === 0) {
  console.log(`No added Markdown lines since ${base}.`);
  process.exit(0);
}

const vale = spawnSync("vale", ["--output=JSON", ...added.keys()], {
  encoding: "utf8",
  maxBuffer: 64 << 20,
});
// Vale exits 1 when it finds an error-level alert and 2 when it cannot run.
if (vale.error || vale.status > 1) {
  console.error(vale.error?.message ?? vale.stderr);
  process.exit(2);
}

let errors = 0;
let shown = 0;
for (const [path, alerts] of Object.entries(JSON.parse(vale.stdout || "{}"))) {
  const lines = added.get(path.split("\\").join("/"));
  for (const a of alerts) {
    if (!lines?.has(a.Line) || a.Severity === "suggestion") continue;
    if (a.Severity === "error") errors++;
    shown++;
    console.log(
      `${path}:${a.Line}:${a.Span[0]} ${a.Severity} ${a.Check}: ${a.Message}`
    );
  }
}

const files = added.size;
if (errors > 0) {
  console.log(
    `\n${errors} error(s) on lines this branch adds, in ${files} file(s). Fix them, or add a ` +
      "term the project uses to .vale/styles/config/vocabularies/Testkube/accept.txt."
  );
  process.exit(1);
}
console.log(
  `No Vale errors on the lines this branch adds (${files} file(s), ${shown} warning(s)).`
);
