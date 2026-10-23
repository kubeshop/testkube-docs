# Working with Testkube Documentation (testkube-docs)

The Docusaurus site for the Testkube documentation at https://docs.testkube.io: user guides, API references, CLI documentation and conceptual pages, written in Markdown and MDX (Markdown with React components).

Owner: `@kubeshop/testkube-docs` for `docs/` and every `*.md` file, per `.github/CODEOWNERS`, except under `.github/`. The last matching line wins, and the file ends with `/.github/` and `.builds-*`, both `@kubeshop/testkube-devops`: those paths, the workflows and any Markdown in them included, belong to DevOps. Everything else falls to the last `*` line, `@kubeshop/testkube-frontend`; an earlier `*` line names `@kubeshop/testkube-backend`, and the later line overrides it. The file also assigns `/assets/`, `/licenses/` and `LICENSE` to `@kubeshop/testkube-docs` and `/test/` to `@kubeshop/testkube-qa`, but none of those exist in this repository.

## 1. Verifying a change

Run these before committing:

```bash
npm run format:check   # Prettier over the whole repository, without writing; this is what docs-prettier runs
npm run lint:typos     # typos over the whole repository (needs the typos binary)
npm run lint:vale      # Vale on the lines your branch adds under docs/ (needs vale; run `vale sync` once)
npm run typecheck      # tsc
npm run build          # Docusaurus build; fails on broken in-repo links
```

- `npm run build` sets `NODE_OPTIONS="--max_old_space_size=20000"`. It is the check that catches broken links and build errors, and it is not a pull request check, so always run it, as well as the type check, locally.
- `lint:vale` compares your branch, including uncommitted edits, with `origin/main`, so fetch it first. It checks only pages under `docs/`, not contributor files such as this one. It prints warnings and fails only on errors. Existing pages carry thousands of Vale alerts, which is why it checks added lines and not whole files.
- `npm run format` is the fix, not the check: it rewrites every file Prettier would change, so run it only after `format:check` reports something.
- `docs-prettier` (section 6) runs `npm run format:check` over the whole repository, not only the files you changed. Over 11 merged pull requests between 1 and 15 October 2026 it took a median of 54 seconds (45 to 106), including `npm ci`.
- The `pre-commit` hook (`.husky/pre-commit`) runs `lint-staged`, which formats staged `js`, `jsx`, `ts`, `tsx`, `json`, `md`, `mdx`, `yml`, `yaml` and `css` files with Prettier.

## 2. Reproducing a bug

- **A page renders wrong:** start the dev server (`npm run start`, http://localhost:3000; section 7) and open the page. The docs plugin uses `routeBasePath: "/"` (`docusaurus.config.js`), so a page's URL is its path under `docs/` without the extension (`docs/articles/kargo-integration.md` is `/articles/kargo-integration`), unless its frontmatter sets `slug:` (`docs/articles/ai-test-creation.md` does). The navbar, search bar, code blocks and doc cards are overridden in `src/theme/` (section 3), so look there when every page shows the same problem.
- **A build or link error:** `npm run build`. `onBrokenLinks` is `"throw"`, so a broken page link fails the build; broken Markdown links and images (`onBrokenMarkdownLinks`, `onBrokenMarkdownImages`) only warn. `npm run serve` serves the built site, to check the production output rather than the dev server.
- **Stale output:** `npm run clear` clears the Docusaurus cache and build output.
- **A link from outside this repository is broken:** redirects in `redirects.js` are client-side. The old URL returns HTTP 200 and serves a meta-refresh stub, so a link checker that only reads status codes reports a stale slug as healthy. Check the page in a browser.
- **An API reference page is wrong:** the pages under `docs/openapi/` are generated (section 3), so the fix is in the source spec or in `src/scripts/split-openapis.ts`, not in the page.

## 3. Repository map

| Path                                 | What it owns                                                                                                                                                                                                                          |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `docs/`                              | All documentation content (MDX and Markdown files)                                                                                                                                                                                    |
| `docs/articles/`                     | Main documentation articles                                                                                                                                                                                                           |
| `docs/articles/crds/`                | Testkube CRD docs (generated)                                                                                                                                                                                                         |
| `docs/articles/examples/`            | Testkube examples in docs                                                                                                                                                                                                             |
| `docs/articles/images/`              | Image assets                                                                                                                                                                                                                          |
| `docs/articles/install/`             | Installation guides                                                                                                                                                                                                                   |
| `docs/articles/inventory/`           | Testkube Docker image inventory; `generated/` is generated                                                                                                                                                                            |
| `docs/articles/tutorial/`            | Tutorials                                                                                                                                                                                                                             |
| `docs/cli/`                          | CLI reference documentation (generated)                                                                                                                                                                                               |
| `docs/legacy-cli/`                   | Legacy CLI documentation                                                                                                                                                                                                              |
| `docs/openapi/`                      | OpenAPI reference documentation (generated)                                                                                                                                                                                           |
| `docs/test-types/`                   | Legacy Test Executor documentation                                                                                                                                                                                                    |
| `docs/workflows/`                    | Sample TestWorkflows used in the documentation                                                                                                                                                                                        |
| `docs/img/`                          | Images and assets for documentation                                                                                                                                                                                                   |
| `src/components/`                    | Reusable React components: `Card/` (documentation cards), `CardWrapper/` (card container), `CommercialBadge/`, `LegacyBanner/` (legacy content warnings), `LegacyCliBanner/` (legacy CLI warnings), `TwoColumns/` (two-column layout) |
| `src/theme/`                         | Custom Docusaurus theme components: `Navbar/` (navigation bar), `SearchBar/` (search with the index filter), `CodeBlock/` (code block with copy button), `DocCard/` (documentation card styling), `AnnouncementBar/`, `NotFound/`     |
| `src/themes/`                        | Custom Prism syntax highlighting themes (light, dark, mirage)                                                                                                                                                                         |
| `src/css/custom.css`                 | Site-wide CSS                                                                                                                                                                                                                         |
| `src/openapi/`                       | OpenAPI spec files and generated sidebar configs (generated)                                                                                                                                                                          |
| `src/scripts/`                       | Build scripts (`split-openapis.ts`)                                                                                                                                                                                                   |
| `static/`                            | Static assets (images, OpenAPI files); `static/openapi/` is generated                                                                                                                                                                 |
| `scripts/`                           | `image.sh` and its image lists (`agent_images.txt`, `cp_images.txt`), which the `update-image-inventory` workflow runs to regenerate `docs/articles/inventory/generated/`                                                             |
| `docusaurus.config.js`               | Main Docusaurus configuration                                                                                                                                                                                                         |
| `sidebars.js`                        | Sidebar navigation structure; must be updated when adding new docs. It includes the generated `src/openapi/*/redoc-sidebar.js`                                                                                                        |
| `redirects.js`                       | Client-side redirects from old slugs                                                                                                                                                                                                  |
| `config.yaml`                        | The `crd-ref-docs` configuration, including the Kubernetes version for outgoing links                                                                                                                                                 |
| `_typos.toml`, `.vale.ini`, `.vale/` | typos and Vale configuration and the Vale vocabulary                                                                                                                                                                                  |
| `package.json`                       | Dependencies and npm scripts                                                                                                                                                                                                          |
| `.env`                               | Environment variables (if needed)                                                                                                                                                                                                     |

The site is deployed automatically with Vercel.

### Generated content and how to regenerate it

Generated content is excluded from Prettier through `.prettierignore`, which lists `docs/cli/`, `docs/crd/`, `docs/openapi/`, `docs/articles/inventory/generated/` and `static/openapi/`.

| Generated                                          | From                                                                       | How                                                                                            |
| -------------------------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `docs/openapi/`, `src/openapi/`, `static/openapi/` | The Testkube agent and Control Plane OpenAPI specs                         | `npm run split-openapis`                                                                       |
| `docs/cli/`                                        | The CLI in the [testkube repository](https://github.com/kubeshop/testkube) | `make docs` there, then copy                                                                   |
| `docs/articles/crds/`                              | The Go types in the testkube repository's `api/` folder                    | `crd-ref-docs` from the [kubeshop/crd-ref-docs](https://github.com/kubeshop/crd-ref-docs) fork |
| `docs/articles/inventory/generated/`               | `scripts/image.sh` and its image lists                                     | The `update-image-inventory` GitHub Action, daily at 00:00 UTC, which commits to `main`        |

**OpenAPI reference.** `npm run split-openapis` needs the `TESTKUBE_OPENAPI_GITHUB_ACCESS_TOKEN` env var for the Control Plane API. The script:

- fetches the OpenAPI definitions from GitHub;
- splits the large specs into smaller ones in `src/openapi/`;
- generates MDX files in `docs/openapi/`;
- generates the sidebar configs (`redoc-sidebar.js`) and spec configs (`redoc-specs.js`);
- creates the aggregated OpenAPI files in `static/openapi/`.

Commit the generated files back to the repository after regeneration.

**CLI reference.**

1. Run `make docs` in the testkube repository root.
2. Clear the `docs/cli/` folder first, to remove old files.
3. Copy the generated files from `gen/docs/cli/` to `docs/cli/` in this repository.
4. Test the build: `npm run build`.
5. Fix any errors manually if needed.

**CRD reference.** The full steps are in `README.md`, "Updating the CRD Reference Docs".

1. Build `crd-ref-docs` from the fork, and pull the testkube repository's `main`.
2. Set the Kubernetes version for outgoing links in `config.yaml` (at least v1.28).
3. Run `crd-ref-docs --source-path=<testkube>/api --config=config.yaml --renderer=mdx --output-path=docs/articles/crds/ --output-mode=version`.
4. Verify the links in `docs/articles/crds.md`.
5. Add deprecation warnings to the deprecated API docs (see "Legacy content" in section 4).
6. Commit and create a PR.

## 4. Conventions reviewers enforce

### Adding a page

1. Create or edit files in `docs/`: `.mdx` for rich content with React components, `.md` for simple text-only Markdown.
2. **Update `sidebars.js`** to add the new document to navigation:
   ```js
   {
     type: "category",
     label: "Concepts",
     items: [
       "concepts/tests/tests-creating",
       "concepts/new-document"  // Add here
     ]
   }
   ```
3. Format, test locally and build (section 1), then commit and create a PR.

Keep images in `docs/img/` and reference them with relative paths.

### Renaming or removing a page

Article slugs are linked from outside this repository, so a rename is never just a file move.

1. **Add a `redirects.js` entry** mapping the old path to the new one:
   ```js
   {
     from: "/articles/old-slug",
     to: "/articles/new-slug",
   },
   ```
   These are client-side redirects (section 2).
2. **Update `sidebars.js`** to point at the new file.
3. Run `npm run build`. It catches in-repo links you missed; it cannot see links from other repositories.
4. **Consider external consumers.** [`kubeshop/testkube-skills`](https://github.com/kubeshop/testkube-skills) ships an AI agent skill containing a curated index of `docs.testkube.io` article URLs (section 7). Its `docs-index` job runs weekly and will flag the stale slug on its own, but fixing it in the same PR saves a round trip.

Deleting a page without a redirect breaks every external link to it. Prefer a redirect to a deletion.

### Styling

Follow the Docusaurus conventions for code blocks, admonitions and tabs.

- **Admonitions**: use Docusaurus [admonitions](https://docusaurus.io/docs/markdown-features/admonitions) for warnings and info messages:

  ```mdx
  :::warning
  This is a warning message
  :::
  ```

- **Code block titles**: use Docusaurus [code block titles](https://docusaurus.io/docs/markdown-features/code-blocks#code-title):

  ````mdx
  ```js title="file.js"
  // code content
  ```
  ````

  **Don't** put the filename above the code block as plain text.

- **Tabs**: use tabs for multi-option content (for example, installation methods). Headlines inside tab content appear in navigation but work as direct links only under the default (first) tab.

### Legacy content

Deprecated APIs include a legacy warning banner:

```mdx
import LegacyWarning from "../_legacy-warning.mdx";

<LegacyWarning />
```

### Search indexes

Search uses Algolia with three indexes: `Main`, `Reference` and `Legacy`. `Main` is the default and holds every page not explicitly in another index. To put a page in another index, add a meta tag after its frontmatter:

```mdx
---
title: Page Title
---

<meta name="docsearch:indexPrefix" content="Reference" />
```

### Formatting and wording

- Prettier is the repository formatter (`.prettierrc.json`). Check with `npm run format:check` before committing, and run `npm run format` to fix what it reports.
- When Vale flags a product or technology name the docs use on purpose, add the name to `.vale/styles/config/vocabularies/Testkube/accept.txt` rather than rewording. A lower-case entry there makes Vale demand lower case everywhere, so write `(?i)json` for a word that appears in both cases, as the file does.
- A false positive from typos goes in `_typos.toml`.

### Pull requests

Titles of the recent merged pull requests follow [Conventional Commits](https://www.conventionalcommits.org/) (`docs: add Kargo integration page`, `chore: 2.14.2 changelog`). No pull request check enforces the title here.

## 5. Never do these

- **Do not hand-edit generated content**: `docs/cli/`, `docs/openapi/`, `src/openapi/`, `static/openapi/` and `docs/articles/inventory/generated/`. Regenerate it as section 3 describes. The CRD pages in `docs/articles/crds/` are generated too; the only hand edits there are the deprecation warnings the CRD steps add.
- **Do not delete or rename a page without a `redirects.js` entry** (section 4).
- **Do not run `npm run deploy`** (`docusaurus deploy`). The site is deployed by Vercel.
- **Do not dispatch `update-image-inventory`.** It commits straight to `main`.

## 6. Pull request checks and the MCP tools

The pull request checks are not GitHub Actions. They are TestWorkflows in the testkube repository, in `test/testkube/oss-tests/gh-quality-loop.yaml`, and the Testkube GitHub integration starts them; they report as check runs from `testkubebot`. Each takes a `revision` config input (default `main`) and checks out this repository at that revision, so push the branch here first.

| Workflow        | What it runs                          | Time (median, 11 merged PRs, 1 to 15 October 2026) |
| --------------- | ------------------------------------- | -------------------------------------------------- |
| `docs-prettier` | `npm ci`, then `npm run format:check` | 54 s                                               |

The typos and Vale checks are not pull request checks yet: `gh-quality-loop.yaml` on `main` defines no workflow for them. Run `npm run lint:typos` and `npm run lint:vale` yourself (section 1).

Vercel also posts a `Vercel Preview Comments` check run. The build and the type check are not pull request checks (section 1).

Argo CD syncs `gh-quality-loop.yaml` from the testkube repository's `main` into the "GitHub Advanced Integration" environment of the Testkube OSS organization on Prod US (organization `tkcorg_2f14949f54f2e2d8`, environment `tkcenv_98c3a7b4da95e4e8`; testkube-deployment `envs/prd-agents/apps/testkube-runner-github-advanced-integration.yaml`), so a merged change to the workflows applies to every pull request at once. To run one yourself, use the Testkube MCP server connected to that environment (`https://api.testkube.io/organizations/tkcorg_2f14949f54f2e2d8/environments/tkcenv_98c3a7b4da95e4e8/mcp`):

1. `run_workflow` with `workflowName` and `config: {"revision": "<branch or commit SHA>"}`. It returns the execution ID.
2. `wait_for_executions` with `executionIds`.
3. On failure, `fetch_execution_logs` with `executionId`.

## 7. Skills and starting a component

### Skills

This repository has no skills of its own. The `testkube` skill in [`kubeshop/testkube-skills`](https://github.com/kubeshop/testkube-skills) (`plugins/testkube-skills/skills/testkube/SKILL.md`) carries a curated index of `docs.testkube.io` URLs, and that repository's `docs-index` workflow (`.github/workflows/docs-index.yml`) checks the index every Monday. Update the index when you rename or remove a page it lists (section 4).

### Starting the dev server

1. Install dependencies: `npm install`.
2. Install the git hooks: `npm run prepare`.
3. Start the dev server: `npm run start`. It defaults to port 3000; add `-- --port XXXX` to change it.
4. Preview at http://localhost:3000.
