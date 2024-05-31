# Testkube docs

You can find the docs here: https://docs.testkube.io

## How to edit the docs

**System requirements:**
- [npm](https://nodejs.org/en/download)

If you're editing the docs, follow this workflow:

1. Install dependencies with `npm install`
2. Spin up local development with `npm run start`
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

## Updating the OpenAPI Docs

These docs use [redocusaurus](https://redocusaurus.vercel.app/) to generate OpenAPI documentation, but
since the Testkube OpenAPI definition is too large (resulting in _very_ long build/rendering times), there is a 
small script at `src/scripts/split-openapi.ts` that:

- retrieves the OpenAPI definition from https://raw.githubusercontent.com/kubeshop/testkube/main/api/v1/testkube.yaml
- splits it into smaller definitions into the `src/openapi` folder (one for each root path segment)
- generates corresponding mdx files into the `docs/openapi` folder
- generates a `src/opeanpi/redoc-sidebar.js` file that is included into the main `sidebar.js` config to add the 
  generated mdx files to the sidebar navigation 
- generates a `src/openapi/redoc-specs.js` file that is included into the `docusaurus.config.js` config to 
  add the generated specs to the redocusaurs configuration

This script needs to be run every time the openapi definition is updated to regenerate the docs accordingly:

```
npm run split-openapi
```

Once run, the generated/updated files need to be committed back to the repo for the automated build to publish them.
