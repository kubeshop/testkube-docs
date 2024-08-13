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
file
content
```
````

**Do:**

````md
```js title="file.js"
file
content
```
````

### Using Tabs

You can create tabs for structuring your content, for example as in the [CLI Installation](https://docs.testkube.io/articles/install/cli) page.

Please note that headlines inside tab content will be shown in the navigation menu to the right, but will not 
work as direct links from external sources unless they are under the default/first tab.

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

The customized markdown templates are in this repositories [src/crd-templates](src/crd-templates) folder

Follow these steps:

1. Clone/update the [testkube-operator](https://github.com/kubeshop/testkube-operator) to make sure you have the latest 
   types available locally.
2. Clone the https://github.com/kubeshop/crd-ref-docs repo
3. Make sure you have go tooling installed and run `go build` in this repo, this
   should create a `crd-ref-docs` binary in the roof folder of the repo.
4. Create a `docs` folder in the cloned repo and now run the following command (using the `crd-ref-docs` tool):

```shell
./crd-ref-docs  
  --source-path=<path to testestkube-operator project> 
  --config=config.yaml 
  --renderer=markdown 
  --output-path=./docs 
  --output-mode=group
  --templates-dir=<testkube-docs-root>/src/crd-templates
```

For example:

```shell
 ./crd-ref-docs --source-path=/Users/olensmar/GolandProjects/testkube-operator --config=config.yaml --renderer=markdown --output-path=./docs --output-mode=group --templates-dir=/Users/olensmar/WebstormProjects/testkube-docs/src/crd-templates
2024-08-05T11:44:21.019+0200    INFO    crd-ref-docs    Loading configuration   {"path": "config.yaml"}
2024-08-05T11:44:21.020+0200    INFO    crd-ref-docs    Processing source directory     {"directory": "/Users/olensmar/GolandProjects/testkube-operator", "depth": 10}
2024-08-05T11:44:22.717+0200    INFO    crd-ref-docs    Rendering output        {"path": "./docs"}
2024-08-05T11:44:22.790+0200    INFO    crd-ref-docs    CRD reference documentation generated
2024-08-05T11:44:22.790+0200    INFO    crd-ref-docs    Execution time: 1.770360541s
```

The `docs` folder should now contain the generated files:

```shell
➜  crd-ref-docs git:(master) ✗ ls -l docs
total 152
-rw-r--r-- 1 olensmar  8737 Aug  5 11:44 executor.testkube.io-v1.md
-rw-r--r-- 1 olensmar 45172 Aug  5 11:44 tests.testkube.io-v1.md
-rw-r--r-- 1 olensmar 10369 Aug  5 11:44 tests.testkube.io-v2.md
-rw-r--r-- 1 olensmar 19695 Aug  5 11:44 tests.testkube.io-v3.md
-rw-r--r-- 1 olensmar 60601 Aug  5 11:44 testworkflows.testkube.io-v1.md
```

5. Copy these files to the `/docs/articles/crds` folder in this repo
6. Make sure the links and info in `/docs/articles/crds.md` is correct/up-to-date
7. Add the deprecation warning at the top of all files containing deprecated APIs:

```markdown
import LegacyWarning from '../_legacy-warning.mdx';

<LegacyWarning />
```

8. Create a branch, commit and create a PR

