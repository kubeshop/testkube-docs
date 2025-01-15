import { readFileSync } from "fs";
import { relative, join } from "path";
import { globSync } from "glob";
import { CONFIG } from "./config";

export function getAllMarkdownFiles(): string[] {
  const docsRelativePath = relative(CONFIG.projectRoot, CONFIG.docsRootPath);
  const mainGlobPattern = `${docsRelativePath}/**/*.{md,mdx}`;

  const ignorePatterns = CONFIG.ignorePaths.map((path) => {
    if (path.endsWith(".md") || path.endsWith(".mdx")) {
      return join(docsRelativePath, path);
    }
    return join(docsRelativePath, path, "**/*.{md,mdx}");
  });

  return globSync(mainGlobPattern, {
    cwd: CONFIG.projectRoot,
    absolute: true,
    ignore: ignorePatterns,
  });
}

export function shouldSkipFile(filePath: string): boolean {
  let content = "";
  try {
    content = readFileSync(filePath, "utf-8");
  } catch {
    return true;
  }
  return CONFIG.skipContentPatterns.some((pattern) => content.includes(pattern));
}
