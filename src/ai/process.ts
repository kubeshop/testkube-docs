import { readFileSync, writeFileSync, appendFileSync } from "fs";
import { resolve, dirname, relative } from "path";
import { globSync } from "glob";

const PROJECT_ROOT = resolve(__dirname, "../..");

const CONFIG = {
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
};

function getAllMarkdownFiles(): string[] {
  const files = globSync("**/*.{md,mdx}", {
    cwd: CONFIG.docsRootPath,
    absolute: true,
    ignore: CONFIG.ignorePaths.map((path) => resolve(CONFIG.docsRootPath, path)),
  });

  return files;
}

function sortFilesByPriority(files: string[]): string[] {
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

function processImports(content: string, filePath: string): string {
  const importRegex = /^import\s+\w+\s+from\s+'([^']+)';?\s*$/gm;

  return content.replace(importRegex, (match, importPath) => {
    if (CONFIG.skippedImports.includes(importPath)) {
      return match;
    }

    // Get the relative path from the docs root to the current file
    const relativeFilePath = relative(CONFIG.docsRootPath, filePath);
    const currentFileDir = dirname(relativeFilePath);

    // Resolve the import path relative to the docs root
    const resolvedImportPath = resolve(CONFIG.docsRootPath, currentFileDir, importPath);

    try {
      // Ensure the resolved path is within the docs directory
      if (!resolvedImportPath.startsWith(CONFIG.docsRootPath)) {
        console.warn(`Import path ${importPath} in ${filePath} resolves outside docs directory`);
        return match;
      }

      return readFileSync(resolvedImportPath, "utf-8");
    } catch (error) {
      console.error(`Failed to process import at ${filePath}: ${importPath}`);
      console.error(`Resolved path: ${resolvedImportPath}`);
      return match;
    }
  });
}

function processFile(filePath: string): string {
  const content = readFileSync(filePath, "utf-8");
  return processImports(content, filePath);
}

function initializeOutputFile(outputPath: string) {
  writeFileSync(outputPath, "");
}

function appendToOutput(outputPath: string, content: string) {
  appendFileSync(outputPath, content + "\n\n");
}

function main() {
  const outputPath = resolve(CONFIG.docsRootPath, "combined-docs.mdx");
  initializeOutputFile(outputPath);

  const files = getAllMarkdownFiles();
  const sortedFiles = sortFilesByPriority(files);
  let processedCount = 0;

  for (const file of sortedFiles) {
    const processedContent = processFile(file);
    appendToOutput(outputPath, processedContent);
    processedCount++;

    if (processedCount % 10 === 0) {
      console.log(`Processed ${processedCount}/${sortedFiles.length} files`);
    }
  }

  console.log(`Completed processing ${processedCount} files`);
  console.log(`Output written to: ${outputPath}`);
}

main();
