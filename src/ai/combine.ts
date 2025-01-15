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
  } catch {
    return false;
  }
}

function parseImportStatements(content: string) {
  const importRegex = /^import\s+([\s\S]+?)\s+from\s+["']([^"']+)["'];?\s*$/gm;
  const result = { updatedContent: content, imports: [] as { importedNames: string[]; importPath: string }[] };
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    const fullImport = match[1].trim();
    const importPath = match[2].trim();
    let importedNames: string[] = [];
    if (fullImport.startsWith("{")) {
      const insideBraces = fullImport.replace(/[{}]/g, "");
      insideBraces.split(",").forEach((item) => {
        const name = item.trim().split(" as ").pop();
        if (name) importedNames.push(name);
      });
    } else if (fullImport.includes(",")) {
      const parts = fullImport.split(",");
      const defaultImport = parts[0].trim();
      const namedPart = parts[1].replace(/[{}]/g, "").trim();
      if (defaultImport) importedNames.push(defaultImport);
      namedPart.split(",").forEach((item) => {
        const name = item.trim().split(" as ").pop();
        if (name) importedNames.push(name);
      });
    } else if (fullImport.startsWith("* as")) {
      const name = fullImport.split(" as ").pop();
      if (name) importedNames.push(name);
    } else {
      importedNames.push(fullImport);
    }
    result.imports.push({ importedNames, importPath });
    result.updatedContent = result.updatedContent.replace(match[0], "");
  }
  return result;
}

export function processFile(filePath: string, depth = 0): string {
  if (depth > 10) {
    console.warn("Maximum import depth reached for file:", filePath);
    return "";
  }
  if (processedFiles.has(filePath)) {
    console.warn("Circular import detected:", filePath);
    return "";
  }
  processedFiles.add(filePath);
  let content = readFileSync(filePath, "utf-8");
  const { updatedContent, imports } = parseImportStatements(content);
  content = updatedContent;
  let importReplacements: Record<string, string> = {};
  for (const imp of imports) {
    if (CONFIG.skippedImports.includes(imp.importPath)) {
      console.log("Removing skipped import:", imp.importPath, "in", filePath);
      continue;
    }
    if (!imp.importPath.match(/\.(md|mdx)$/)) {
      continue;
    }
    const relativeFilePath = relative(CONFIG.docsRootPath, filePath);
    const currentFileDir = dirname(relativeFilePath);
    const resolvedImportPath = resolve(CONFIG.docsRootPath, currentFileDir, imp.importPath);
    if (!resolvedImportPath.startsWith(PROJECT_ROOT)) {
      console.warn("Import path", imp.importPath, "in", filePath, "resolves outside of the project root");
      continue;
    }
    if (shouldSkipFile(resolvedImportPath)) {
      console.log("Skipping import due to content pattern match:", resolvedImportPath);
      continue;
    }
    const importedContent = processFile(resolvedImportPath, depth + 1);
    for (const name of imp.importedNames) {
      importReplacements[name] = importedContent;
    }
  }
  for (const [name, importedContent] of Object.entries(importReplacements)) {
    const tagRegex = new RegExp(`<${name}\\s*/>`, "g");
    content = content.replace(tagRegex, importedContent);
  }
  return content;
}

export function initializeOutputFile(outputPath: string) {
  writeFileSync(outputPath, "");
}

export function appendToOutput(outputPath: string, content: string) {
  appendFileSync(outputPath, content + "\n\n");
}
