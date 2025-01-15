import { ImportStatement } from "./types";
import { dirname, relative, resolve } from "path";
import { CONFIG } from "./config";
import { readFile } from "./file";

export function parseImports(content: string): {
  updatedContent: string;
  imports: ImportStatement[];
} {
  const imports: ImportStatement[] = [];
  let updatedContent = content;

  updatedContent = parseDefaultImports(updatedContent, imports);
  updatedContent = parseNamedImports(updatedContent, imports);

  return { updatedContent, imports };
}

function parseDefaultImports(content: string, imports: ImportStatement[]): string {
  const defaultImportRegex = /^import\s+(\w+)\s+from\s+['"]([^'"]+)['"]/gm;
  return parseImportsWithRegex(content, imports, defaultImportRegex);
}

function parseNamedImports(content: string, imports: ImportStatement[]): string {
  const namedImportRegex = /^import\s+{\s*(\w+)\s*}\s+from\s+['"]([^'"]+)['"]/gm;
  return parseImportsWithRegex(content, imports, namedImportRegex);
}

function parseImportsWithRegex(content: string, imports: ImportStatement[], regex: RegExp): string {
  let result = content;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(result)) !== null) {
    imports.push({ importedName: match[1], importPath: match[2] });
    result = result.replace(match[0], "");
  }

  return result;
}

export function buildImportsMap(allFiles: string[]): Map<string, string[]> {
  const importsMap = new Map<string, string[]>();

  for (const filePath of allFiles) {
    const content = readFile(filePath);
    if (!content) continue;

    const { imports } = parseImports(content);
    processImportsForFile(imports, filePath, importsMap);
  }

  return importsMap;
}

function processImportsForFile(imports: ImportStatement[], filePath: string, importsMap: Map<string, string[]>): void {
  const relFilePath = relative(CONFIG.docsRootPath, filePath);
  const fileDir = dirname(relFilePath);

  for (const imp of imports) {
    if (!imp.importPath.match(/\.(md|mdx)$/)) continue;
    if (CONFIG.skippedImports.includes(imp.importPath)) continue;

    const resolvedPath = resolve(CONFIG.docsRootPath, fileDir, imp.importPath);
    if (!resolvedPath.startsWith(CONFIG.projectRoot)) continue;

    const existing = importsMap.get(resolvedPath) || [];
    existing.push(filePath);
    importsMap.set(resolvedPath, existing);
  }
}
