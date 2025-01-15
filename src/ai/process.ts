import { readFileSync } from "fs";
import { dirname, join, relative, resolve } from "path";
import { globSync } from "glob";
import { extractQandAFromContent } from "./extract";
import { QAPair } from "./types";
import { chunkifyText } from "./utils";

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

export async function runDocsProcessor() {
  const allFiles = getAllMarkdownFiles();
  const importsMap = buildImportsMap(allFiles);
  const importedFiles = new Set(importsMap.keys());

  const topLevelFiles = allFiles.filter((file) => !importedFiles.has(file));
  const processableFiles = topLevelFiles.filter((file) => !shouldSkipFile(file));

  let i = 0;

  for (const file of processableFiles) {
    i += 1;
    if (i === 5) break;
    const resolvedContent = processFile(file);

    await handleResolvedContent(file, resolvedContent);
  }
}

function getAllMarkdownFiles(): string[] {
  const docsRelativePath = relative(PROJECT_ROOT, CONFIG.docsRootPath);
  const mainGlobPattern = `${docsRelativePath}/**/*.{md,mdx}`;

  const ignorePatterns = CONFIG.ignorePaths.map((path) => {
    if (path.endsWith(".md") || path.endsWith(".mdx")) {
      return join(docsRelativePath, path);
    }
    return join(docsRelativePath, path, "**/*.{md,mdx}");
  });

  return globSync(mainGlobPattern, {
    cwd: PROJECT_ROOT,
    absolute: true,
    ignore: ignorePatterns,
  });
}

function shouldSkipFile(filePath: string): boolean {
  let content = "";
  try {
    content = readFileSync(filePath, "utf-8");
  } catch {
    return true;
  }
  return CONFIG.skipContentPatterns.some((pattern) => content.includes(pattern));
}

function buildImportsMap(allFiles: string[]): Map<string, string[]> {
  const importsMap = new Map<string, string[]>();

  for (const filePath of allFiles) {
    let content = "";
    try {
      content = readFileSync(filePath, "utf-8");
    } catch {
      continue;
    }

    const { imports } = parseImports(content);
    for (const imp of imports) {
      if (!imp.importPath.match(/\.(md|mdx)$/)) continue;
      if (CONFIG.skippedImports.includes(imp.importPath)) continue;

      const relFilePath = relative(CONFIG.docsRootPath, filePath);
      const fileDir = dirname(relFilePath);
      const resolvedImportPath = resolve(CONFIG.docsRootPath, fileDir, imp.importPath);

      if (!resolvedImportPath.startsWith(PROJECT_ROOT)) continue;

      const existing = importsMap.get(resolvedImportPath) || [];
      existing.push(filePath);
      importsMap.set(resolvedImportPath, existing);
    }
  }

  return importsMap;
}

function processFile(filePath: string, depth = 0): string {
  if (depth > 10) return "";
  if (processedFiles.has(filePath)) return "";

  processedFiles.add(filePath);

  let content = "";
  try {
    content = readFileSync(filePath, "utf-8");
  } catch {
    return "";
  }

  const { updatedContent, imports } = parseImports(content);
  content = updatedContent;

  const importReplacements: Record<string, string> = {};

  for (const imp of imports) {
    if (CONFIG.skippedImports.includes(imp.importPath)) continue;
    if (!imp.importPath.match(/\.(md|mdx)$/)) continue;

    const relFilePath = relative(CONFIG.docsRootPath, filePath);
    const fileDir = dirname(relFilePath);
    const resolvedImportPath = resolve(CONFIG.docsRootPath, fileDir, imp.importPath);

    if (!resolvedImportPath.startsWith(PROJECT_ROOT)) continue;
    if (shouldSkipFile(resolvedImportPath)) continue;

    const importedContent = processFile(resolvedImportPath, depth + 1);
    importReplacements[imp.importedName] = importedContent;
  }

  for (const [name, importedContent] of Object.entries(importReplacements)) {
    const tagRegex = new RegExp(`<${name}\\s*/>`, "g");
    content = content.replace(tagRegex, importedContent);
  }

  return content;
}

function parseImports(content: string): {
  updatedContent: string;
  imports: { importedName: string; importPath: string }[];
} {
  let updated = content;
  const results: { importedName: string; importPath: string }[] = [];

  const defaultImportRegex = /^import\s+(\w+)\s+from\s+['"]([^'"]+)['"]/gm;
  let match: RegExpExecArray | null;

  while ((match = defaultImportRegex.exec(updated)) !== null) {
    results.push({ importedName: match[1], importPath: match[2] });
    updated = updated.replace(match[0], "");
  }

  const namedImportRegex = /^import\s+{\s*(\w+)\s*}\s+from\s+['"]([^'"]+)['"]/gm;
  let match2: RegExpExecArray | null;

  while ((match2 = namedImportRegex.exec(updated)) !== null) {
    results.push({ importedName: match2[1], importPath: match2[2] });
    updated = updated.replace(match2[0], "");
  }

  return { updatedContent: updated, imports: results };
}

async function handleResolvedContent(filePath: string, content: string) {
  const qaPairs: QAPair[] = [];
  console.log("Processing file:", filePath);
  for (const chunk of chunkifyText(content)) {
    await extractQandAFromContent(chunk.text, qaPairs);
  }
}

runDocsProcessor();
