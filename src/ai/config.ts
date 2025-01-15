import { resolve } from "path";

const PROJECT_ROOT = resolve(__dirname, "../..");

export const CONFIG = {
  projectRoot: PROJECT_ROOT,
  docsRootPath: resolve(PROJECT_ROOT, "docs"),
  ignorePaths: [
    "articles/crds",
    "articles/images",
    "articles/inventory",
    "css",
    "img",
    "old",
    "openapi",
    "test-types",
    "cli",
  ],
  skippedImports: [
    "../articles/_legacy-warning.mdx",
    "../_legacy-warning.mdx",
    "../\\_legacy-warning.mdx",
    "@site/src/components/TwoColumns",
    "@theme/Tabs",
    "@theme/TabItem",
    "@theme/Admonition",
    "@theme/ApiDocMdx",
    "@theme/Layout",
    "@theme/SearchTranslations",
  ],
  skipContentPatterns: ["legacy-warning.mdx"],
};
