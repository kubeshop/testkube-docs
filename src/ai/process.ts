import { readFileSync, writeFileSync, appendFileSync } from "fs";
import { resolve, dirname, relative, join } from "path";
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

function getAllMarkdownFiles(): string[] {
  const docsRelativePath = relative(PROJECT_ROOT, CONFIG.docsRootPath);

  const mainGlobPattern = `${docsRelativePath}/**/*.{md,mdx}`;

  const ignorePatterns = CONFIG.ignorePaths.map((path) => {
    if (path.endsWith(".md") || path.endsWith(".mdx")) {
      return join(docsRelativePath, path);
    } else {
      return join(docsRelativePath, path, "**/*.{md,mdx}");
    }
  });

  const files = globSync(mainGlobPattern, {
    cwd: PROJECT_ROOT,
    absolute: true,
    ignore: ignorePatterns,
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

function shouldSkipFile(filePath: string): boolean {
  try {
    const content = readFileSync(filePath, "utf-8");
    return CONFIG.skipContentPatterns.some((pattern) => content.includes(pattern));
  } catch (error) {
    console.error(`Error reading file for content check: ${filePath}`);
    return false;
  }
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
  const originalOutputLength = readFileSync(outputPath, "utf-8").length;
  initializeOutputFile(outputPath);

  const files = getAllMarkdownFiles();
  const sortedFiles = sortFilesByPriority(files);
  let processedCount = 0;
  let skippedCount = 0;

  for (const file of sortedFiles) {
    if (shouldSkipFile(file)) {
      console.log(`Skipping file due to content pattern match: ${file}`);
      skippedCount++;
      continue;
    }

    const processedContent = processFile(file);
    appendToOutput(outputPath, processedContent);
    processedCount++;

    if (processedCount % 10 === 0) {
      console.log(`Processed ${processedCount}/${sortedFiles.length} files`);
    }
  }

  console.log(`Completed processing ${processedCount} files`);
  console.log(`Skipped ${skippedCount} files due to content patterns`);
  console.log(`Output written to: ${outputPath}`);
  console.log(`Original output length: ${originalOutputLength} characters`);
  const newOutputLength = readFileSync(outputPath, "utf-8").length;
  console.log(`New Output length: ${newOutputLength} characters`);
  console.log(`Removed ${originalOutputLength - newOutputLength} characters`);
}

main();
