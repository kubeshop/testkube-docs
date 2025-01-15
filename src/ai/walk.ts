import { readFileSync, existsSync } from "fs";
import { relative, join, resolve } from "path";
import { CONFIG } from "./config";
import { SidebarItem, SidebarsConfig } from "./types";

export function getAllMarkdownFiles(): string[] {
  const sidebarsConfig = readSidebarsConfig();
  const orderedDocIds = extractDocIds(sidebarsConfig.main);

  const orderedPaths = new Map<string, string>();

  orderedDocIds.forEach((docId) => {
    const resolvedPath = resolveDocPath(docId);
    if (resolvedPath && !shouldIgnorePath(resolvedPath) && !shouldSkipFile(resolvedPath)) {
      orderedPaths.set(docId, resolvedPath);
    }
  });

  return Array.from(orderedPaths.values());
}

function readSidebarsConfig(): SidebarsConfig {
  const sidebarPath = join(CONFIG.projectRoot, "sidebars.js");
  delete require.cache[require.resolve(sidebarPath)];
  return require(sidebarPath);
}

function extractDocIds(items: (SidebarItem | string)[]): string[] {
  const docIds: string[] = [];

  items.forEach((item) => {
    if (typeof item === "string") {
      docIds.push(item);
    } else if (item.type === "doc" && item.id) {
      docIds.push(item.id);
    } else if (item.type === "category" && item.items) {
      docIds.push(...extractDocIds(item.items));
    }
  });

  return docIds;
}

function resolveDocPath(docId: string): string | null {
  const possibleExtensions = [".md", ".mdx"];

  for (const ext of possibleExtensions) {
    const fullPath = resolve(CONFIG.docsRootPath, `${docId}${ext}`);
    if (existsSync(fullPath)) {
      return fullPath;
    }
  }

  return null;
}

function shouldIgnorePath(filePath: string): boolean {
  const relativePath = relative(CONFIG.docsRootPath, filePath);

  return CONFIG.ignorePaths.some((ignorePath) => {
    if (ignorePath.endsWith(".md") || ignorePath.endsWith(".mdx")) {
      return relativePath === ignorePath;
    }
    return relativePath.startsWith(ignorePath);
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
