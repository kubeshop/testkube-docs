import { extractQandAFromFile } from "./extract";
import { resolveFileContent } from "./resolve";
import { getAllMarkdownFiles } from "./walk";

export async function runDocsProcessor() {
  const orderedFiles = getAllMarkdownFiles();
  console.log("Found files:", orderedFiles);
  for (const filePath of orderedFiles) {
    console.log("Processing file:", filePath);
    const resolvedContent = resolveFileContent(filePath);
    await extractQandAFromFile(filePath, resolvedContent);
  }
}

runDocsProcessor();
