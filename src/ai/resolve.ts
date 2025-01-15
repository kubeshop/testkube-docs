import { dirname, relative, resolve } from "path";
import { CONFIG } from "./config";
import { shouldSkipFile } from "./walk";
import { parseImports } from "./import";
import { ImportStatement } from "./types";
import { readFile } from "./file";

const processedFiles = new Set<string>();

export function resolveFileContent(filePath: string): string {
  if (processedFiles.has(filePath)) return "";
  processedFiles.add(filePath);

  const content = readFile(filePath);
  if (!content) return "";

  const { updatedContent, imports } = parseImports(content);
  if (!imports.length) return updatedContent;

  const importReplacements = getImportReplacements(imports, filePath);
  return replaceImportTags(updatedContent, importReplacements);
}

function getImportReplacements(imports: ImportStatement[], filePath: string): Record<string, string> {
  const replacements: Record<string, string> = {};
  const relFilePath = relative(CONFIG.docsRootPath, filePath);
  const fileDir = dirname(relFilePath);

  for (const imp of imports) {
    if (CONFIG.skippedImports.includes(imp.importPath)) continue;
    if (!imp.importPath.match(/\.(md|mdx)$/)) continue;

    const resolvedPath = resolve(CONFIG.docsRootPath, fileDir, imp.importPath);
    if (!resolvedPath.startsWith(CONFIG.projectRoot)) continue;
    if (shouldSkipFile(resolvedPath)) continue;

    const importedContent = readFile(resolvedPath);
    if (!importedContent) continue;

    replacements[imp.importedName] = importedContent;
  }

  return replacements;
}

function replaceImportTags(content: string, replacements: Record<string, string>): string {
  let result = content;
  for (const [name, importedContent] of Object.entries(replacements)) {
    const tagRegex = new RegExp(`<${name}\\s*/>`, "g");
    result = result.replace(tagRegex, importedContent);
  }
  return result;
}
