# Testkube docs

You can find the docs here: https://docs.testkube.io

## How to edit the docs

**System requirements:**

- [npm](https://nodejs.org/en/download)

If you're editing the docs, follow this workflow:

1. Install dependencies with `npm install`
2. Spin up local development with `npm run start`, add `-- --port XXXX` if you need to change the default port (3000)
3. Update the docs inside the `/docs` folder
4. Make sure to add the new document in the `sidebar.json` file:

```diff
{
  type: "category",
  label: "Concepts",
  items: [
    {
      type: "category",
      label: "Tests",
      items: [
        "concepts/tests/tests-creating",
        "concepts/tests/tests-running",
        "concepts/tests/tests-getting-results",
        "concepts/tests/tests-variables",
+       "concepts/new-concept"
      ],
    },
}
```

Also make sure the documentation builds ok locally before opening a PR - this will check for broken links, etc.

```
npm run build
```

5. You can preview the changes locally in your browser: http://localhost:3000

### How to style the docs

#### Warning signs

If you want to add a warning/info message like the below, use [Docusuarus Admonitions](https://docusaurus.io/docs/markdown-features/admonitions).

![Warning signs](./docs/img/docusaurus-admonitions.png)

#### Code blocks title

If the content of the code blocks refers to a file, use Docusaurus [Code Block title](https://docusaurus.io/docs/markdown-features/code-blocks#code-title).

![Code Block title](./docs/img/docusaurus-codeblock-title.png)

**Don't:**

````md
file.js

```js
file;
content;
```
````

**Do:**

````md
```js title="file.js"
file;
content;
```
````

### Using Tabs

You can create tabs for structuring your content, for example as in the [CLI Installation](https://docs.testkube.io/articles/install/cli) page.

Please note that headlines inside tab content will be shown in the navigation menu to the right, but will not
work as direct links from external sources unless they are under the default/first tab.

## Search Indexing

For search, we've indexed all the pages into 3 distinct categories `Main`, `Reference` and `Legacy`.
By default the `Main` index is used which contains all the results which haven't been included in the other 2 indexes.
The user can switch between indexes by clicking one of the 3 options at the top for the search bar.

### Add Docs to specific index

All docs pages which haven't been explicitly included in the other indexes, are part of the `Main` index.
To add a page to a specific index, add the following meta tag in the head of the page. e.g:
`<meta name="docsearch:indexPrefix" content="YOUR_INDEX" />`

## Updating the OpenAPI Docs

These docs use [redocusaurus](https://redocusaurus.vercel.app/) to generate OpenAPI documentation, but
since the Testkube OpenAPI definitions are too large (resulting in _very_ long build/rendering times), there is a
small script at `src/scripts/split-openapis.ts` that:

- retrieves the OpenAPI definitions for both the agent and control plane APIs
- splits them into smaller definitions into the `src/openapi` folder
- generates corresponding mdx files into the `docs/openapi` folder
- generates `src/opeanpi/../redoc-sidebar.js` files that are included into the main `sidebar.js` config to add the
  generated mdx files to the sidebar navigation
- generates `src/openapi/../redoc-specs.js` files that are included into the `docusaurus.config.js` config to
  add the generated specs to the redocusaurs configuration
- generates aggregated openapi files for the agent and control plane APIs into the `static/openapi` folder

The script requires a GitHub Access Token to be provided in a TESTKUBE_OPENAPI_GITHUB_ACCESS_TOKEN environment variable
for retrieving the Control Plane OpenAPI definition from its private repo.

This script needs to be run every time the openapi definition is updated to regenerate the docs accordingly:

```
npm run split-openapis
```

Once run, the generated/updated files need to be committed back to the repo for the automated build to publish them.

## Updating the CRD Reference Docs

CRD references docs at are generated from the corresponding GoLang types using a fork of the
https://github.com/elastic/crd-ref-docs project, available at https://github.com/kubeshop/crd-ref-docs.

The customized Markdown templates are in this repositories [src/crd-templates](src/crd-templates) folder

Follow these steps:

1. Ensure you have pulled the [testkube](https://github.com/kubeshop/testkube) repository to make sure you have the latest types available locally.
2. Make sure you have go tooling installed.
3. Set the desired Kubernetes Version to use for outgoing links to reference docs in the `config.yaml` file (at least v1.28)
4. Run `go generate gen-crds.go`.
5. Make sure the links and info in `/docs/articles/crds.md` is correct and up to date
6. Add the deprecation warning after the main headline in all files containing deprecated APIs:
   ```markdown
    # Testkube API Reference
    
    import LegacyWarning from '../\_legacy-warning.mdx';
    
    <LegacyWarning />
   ```
7. Create a branch, commit and create a PR

## Updating the CLI Reference docs

The CLI docs are generated in the [Testkube Repo](https://github.com/kubeshop/testkube) by running

```
make docs
```

in the root folder and copying the generated files from the `gen/docs/cli` folder to the `/docs/cli` folder in this repo (clear the folder first so old files are removed).

:::tip
Make sure the generated docs build with `npm run build` ok before committing, and fix any errors manually as applicable.
:::
