import { readFileSync } from "fs";
import { dirname, relative, resolve } from "path";
import { CONFIG } from "./config";
import { shouldSkipFile } from "./walk";

const processedFiles = new Set<string>();

export function resolveFileContent(filePath: string, depth = 0): string {
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

    if (!resolvedImportPath.startsWith(CONFIG.projectRoot)) continue;
    if (shouldSkipFile(resolvedImportPath)) continue;

    const importedContent = resolveFileContent(resolvedImportPath, depth + 1);
    importReplacements[imp.importedName] = importedContent;
  }

  for (const [name, importedContent] of Object.entries(importReplacements)) {
    const tagRegex = new RegExp(`<${name}\\s*/>`, "g");
    content = content.replace(tagRegex, importedContent);
  }

  return content;
}

export function parseImports(content: string): {
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

export function buildImportsMap(allFiles: string[]): Map<string, string[]> {
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

      if (!resolvedImportPath.startsWith(CONFIG.projectRoot)) continue;

      const existing = importsMap.get(resolvedImportPath) || [];
      existing.push(filePath);
      importsMap.set(resolvedImportPath, existing);
    }
  }

  return importsMap;
}
