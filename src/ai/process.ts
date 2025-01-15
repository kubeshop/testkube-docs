import { extractQandAFromFile } from "./extract";
import { buildImportsMap } from "./import";
import { resolveFileContent } from "./resolve";
import { getAllMarkdownFiles, shouldSkipFile } from "./walk";

export async function runDocsProcessor() {
  const allFiles = getAllMarkdownFiles();
  const importsMap = buildImportsMap(allFiles);
  const importedFiles = new Set(importsMap.keys());

  const topLevelFiles = allFiles.filter((file) => !importedFiles.has(file));
  const processableFiles = topLevelFiles.filter((file) => !shouldSkipFile(file));

  for (const file of processableFiles) {
    const resolvedContent = resolveFileContent(file);
    await handleResolvedContent(file, resolvedContent);
  }
}

async function handleResolvedContent(filePath: string, fileContent: string) {
  console.log("Processing file:", filePath);
  await extractQandAFromFile(filePath, fileContent);
}

runDocsProcessor();
