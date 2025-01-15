// combine.ts

import { readFileSync, writeFileSync, appendFileSync } from "fs";
import { resolve, relative, dirname, join } from "path";
import { globSync } from "glob";

export const PROJECT_ROOT = resolve(__dirname, "../..");

export const CONFIG = {
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
    "index.mdx",
    "articles/administration-overview.mdx",
    "articles/cli.mdx",
    "articles/reference.mdx",
    "articles/supported-tests.mdx",
    "articles/using-testkube.mdx",
  ],
  priorityPaths: ["getting-started", "index.mdx"],
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

const processedFiles = new Set<string>();

export function getAllMarkdownFiles(): string[] {
  const docsRelativePath = relative(PROJECT_ROOT, CONFIG.docsRootPath);
  const mainGlobPattern = `${docsRelativePath}/**/*.{md,mdx}`;
  const ignorePatterns = CONFIG.ignorePaths.map((path) => {
    if (path.endsWith(".md") || path.endsWith(".mdx")) {
      return join(docsRelativePath, path);
    } else {
      return join(docsRelativePath, path, "**/*.{md,mdx}");
    }
  });

  return globSync(mainGlobPattern, {
    cwd: PROJECT_ROOT,
    absolute: true,
    ignore: ignorePatterns,
  });
}

export function sortFilesByPriority(files: string[]): string[] {
  return files.sort((a, b) => {
    const aHasPriority = CONFIG.priorityPaths.some((p) => a.startsWith(resolve(CONFIG.docsRootPath, p)));
    const bHasPriority = CONFIG.priorityPaths.some((p) => b.startsWith(resolve(CONFIG.docsRootPath, p)));

    if (aHasPriority && !bHasPriority) return -1;
    if (!aHasPriority && bHasPriority) return 1;

    const aName = a.toLowerCase();
    const bName = b.toLowerCase();

    const aStartsWithNumber = /^\d/.test(aName);
    const bStartsWithNumber = /^\d/.test(bName);

    if (aStartsWithNumber && !bStartsWithNumber) return -1;
    if (!aStartsWithNumber && bStartsWithNumber) return 1;

    return aName.localeCompare(bName);
  });
}

export function shouldSkipFile(filePath: string): boolean {
  try {
    const content = readFileSync(filePath, "utf-8");
    return CONFIG.skipContentPatterns.some((pattern) => content.includes(pattern));
  } catch (error) {
    console.error(`Error reading file for content check: ${filePath}`);
    return false;
  }
}

export function processImports(content: string, filePath: string, depth = 0): string {
  if (depth > 10) {
    console.warn(`Maximum import depth reached for file: ${filePath}`);
    return content;
  }

  if (processedFiles.has(filePath)) {
    console.warn(`Circular import detected: ${filePath}`);
    return content;
  }

  processedFiles.add(filePath);

  const importRegex = /^import\s+(?:{\s*[^}]*\s*}|[^;\n]+)\s+from\s+["']([^"']+)["'];?\s*$/gm;

  return content.replace(importRegex, (_, importPath) => {
    if (CONFIG.skippedImports.includes(importPath)) {
      console.log(`Removing skipped import: ${importPath} in ${filePath}`);
      return "";
    }

    // If the import path doesn't end with .md or .mdx, remove the import line.
    if (!importPath.match(/\.(md|mdx)$/)) {
      return "";
    }

    const relativeFilePath = relative(CONFIG.docsRootPath, filePath);
    const currentFileDir = dirname(relativeFilePath);
    const resolvedImportPath = resolve(CONFIG.docsRootPath, currentFileDir, importPath);

    try {
      if (!resolvedImportPath.startsWith(PROJECT_ROOT)) {
        console.warn(`Import path ${importPath} in ${filePath} resolves outside of the project root`);
        return "";
      }

      if (shouldSkipFile(resolvedImportPath)) {
        console.log(`Skipping import due to content pattern match: ${resolvedImportPath}`);
        return "";
      }

      const importedContent = readFileSync(resolvedImportPath, "utf-8");
      return processImports(importedContent, resolvedImportPath, depth + 1);
    } catch (error) {
      console.error(`Failed to process import at ${filePath}: ${importPath}`);
      console.error(`Resolved path: ${resolvedImportPath}`);
      return "";
    }
  });
}

export function processFile(filePath: string): string {
  const content = readFileSync(filePath, "utf-8");
  processedFiles.clear();
  return processImports(content, filePath);
}

export function initializeOutputFile(outputPath: string) {
  writeFileSync(outputPath, "");
}

export function appendToOutput(outputPath: string, content: string) {
  appendFileSync(outputPath, content + "\n\n");
}
