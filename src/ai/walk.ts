import { readFileSync, existsSync } from "fs";
import { relative, join, resolve, dirname } from "path";
import { CONFIG } from "./config";
import { SidebarItem, SidebarsConfig } from "./types";

export function getAllMarkdownFiles(): string[] {
  const sidebarsConfig = readSidebarsConfig();
  const orderedDocIds = extractDocIds(sidebarsConfig.main);
  const processedPaths = new Set<string>();
  const orderedPaths: string[] = [];

  orderedDocIds.forEach((docId) => {
    const resolvedPath = resolveDocPath(docId);
    if (resolvedPath && !shouldIgnorePath(resolvedPath) && !shouldSkipFile(resolvedPath)) {
      processFileAndDependencies(resolvedPath, processedPaths, orderedPaths);
    }
  });

  return orderedPaths;
}

function processFileAndDependencies(filePath: string, processedPaths: Set<string>, orderedPaths: string[]): void {
  if (processedPaths.has(filePath)) {
    return;
  }

  processedPaths.add(filePath);
  orderedPaths.push(filePath);

  const linkedFiles = extractMarkdownLinks(filePath);
  linkedFiles.forEach((linkedPath) => {
    if (!shouldIgnorePath(linkedPath) && !shouldSkipFile(linkedPath)) {
      processFileAndDependencies(linkedPath, processedPaths, orderedPaths);
    }
  });
}

function extractMarkdownLinks(filePath: string): string[] {
  try {
    const content = readFileSync(filePath, "utf-8");
    const baseDir = dirname(filePath);

    const markdownLinkRegex = /\[.*?\]\((.*?\.mdx?)\)/g;
    const htmlLinkRegex = /<a[^>]*href=["'](.*?\.mdx?)["'][^>]*>/g;

    const links = new Set<string>();

    const processLink = (linkedPath: string) => {
      // Remove any URL fragments (#) and query parameters
      const cleanPath = linkedPath.split(/[#?]/)[0];
      const absolutePath = resolve(baseDir, cleanPath);
      if (!absolutePath.startsWith(CONFIG.docsRootPath)) {
        return;
      }
      if (existsSync(absolutePath)) {
        links.add(absolutePath);
      }
    };

    let match;
    while ((match = markdownLinkRegex.exec(content)) !== null) {
      processLink(match[1]);
    }
    while ((match = htmlLinkRegex.exec(content)) !== null) {
      processLink(match[1]);
    }

    return Array.from(links);
  } catch (error) {
    console.warn(`Error extracting links from ${filePath}:`, error);
    return [];
  }
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
