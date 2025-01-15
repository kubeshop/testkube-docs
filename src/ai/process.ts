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

const processedFiles = new Set<string>();

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

  return globSync(mainGlobPattern, {
    cwd: PROJECT_ROOT,
    absolute: true,
    ignore: ignorePatterns,
  });
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

function processImports(content: string, filePath: string, depth = 0): string {
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

type Pattern = RegExp | string;
type PatternProcessor = [Pattern, ((match: string, ...groups: string[]) => string) | string];
type LineProcessor = (line: string) => string;
type Processor = PatternProcessor | LineProcessor;

function isPatternProcessor(processor: Processor): processor is PatternProcessor {
  return Array.isArray(processor) && (processor[0] instanceof RegExp || typeof processor[0] === "string");
}

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceAll(str: string, find: string, replace: string): string {
  return str.replace(new RegExp(escapeRegExp(find), "g"), replace);
}

function processContent(content: string, processors: Processor[]): string {
  return processors.reduce((processedContent, processor) => {
    if (!isPatternProcessor(processor)) {
      return processedContent.split("\n").map(processor).join("\n");
    }

    const [pattern, transform] = processor;

    if (typeof pattern === "string" && typeof transform === "string") {
      return replaceAll(processedContent, pattern, transform);
    }

    if (pattern instanceof RegExp && typeof transform === "function") {
      return processedContent.replace(pattern, (...args) => transform(...args));
    }

    if (pattern instanceof RegExp && typeof transform === "string") {
      return processedContent.replace(pattern, transform);
    }

    return processedContent;
  }, content);
}

function processFile(filePath: string): string {
  const content = readFileSync(filePath, "utf-8");
  processedFiles.clear();
  return processImports(content, filePath);
}

function postProcessOutput(outputPath: string): void {
  const content = readFileSync(outputPath, "utf-8");

  const processors: Processor[] = [
    (line) => (line.includes("<TabItem") ? "" : line),
    (line) => (line.includes("</TabItem>") ? "" : line),
    (line) => (line.includes("<Tabs") ? "" : line),
    (line) => (line.includes("</Tabs>") ? "" : line),
    [/!\[.*?\]\(.*?\)/g, ""],
    [/<iframe[\s\S]*?<\/iframe>/g, ""],
    [/<Admonition[\s\S]*?<\/Admonition>/g, ""],
    (line) => (line.trim() ? line : ""),
    [/\n\s*\n/g, "\n"],
  ];

  const processedContent = processContent(content, processors);
  writeFileSync(outputPath, processedContent);
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
  let skippedImportsCount = 0;

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

  console.log("Applying post-processing rules...");
  postProcessOutput(outputPath);

  const finalOutputLength = readFileSync(outputPath, "utf-8").length;

  console.log(`Completed processing ${processedCount} files`);
  console.log(`Skipped ${skippedCount} files due to content patterns`);
  console.log(`Skipped ${skippedImportsCount} imports due to patterns`);
  console.log(`Output written to: ${outputPath}`);
  console.log(`Original output length: ${originalOutputLength} characters`);
  console.log(`Final output length after post-processing: ${finalOutputLength} characters`);
  console.log(`Removed ${originalOutputLength - finalOutputLength} characters`);
}

main();
