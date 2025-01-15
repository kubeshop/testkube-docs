import { readFileSync } from "fs";
import { resolve } from "path";
import {
  CONFIG,
  getAllMarkdownFiles,
  sortFilesByPriority,
  shouldSkipFile,
  processFile,
  initializeOutputFile,
  appendToOutput,
} from "./combine";
import { postProcessOutput } from "./postProcess";

function main() {
  const outputPath = resolve(CONFIG.docsRootPath, "combined-docs.mdx");

  let originalOutputLength = 0;
  try {
    originalOutputLength = readFileSync(outputPath, "utf-8").length;
  } catch (err) {
    // If the file doesn't exist, it's fine; originalOutputLength stays 0
  }

  initializeOutputFile(outputPath);

  const files = getAllMarkdownFiles();
  const sortedFiles = sortFilesByPriority(files);

  let processedCount = 0;
  let skippedCount = 0;
  let skippedImportsCount = 0;

  for (const file of sortedFiles) {
    if (shouldSkipFile(file)) {
      console.log(`Skipping file due to content pattern match: ${file}`);
      skippedCount++;
      continue;
    }

    const processedContent = processFile(file);
    appendToOutput(outputPath, processedContent);
    processedCount++;

    if (processedCount % 10 === 0) {
      console.log(`Processed ${processedCount}/${sortedFiles.length} files`);
    }
  }

  console.log("Applying post-processing rules...");
  postProcessOutput(outputPath);

  const finalOutputLength = readFileSync(outputPath, "utf-8").length;

  console.log(`Completed processing ${processedCount} files`);
  console.log(`Skipped ${skippedCount} files due to content patterns`);
  console.log(`Skipped ${skippedImportsCount} imports due to patterns`);
  console.log(`Output written to: ${outputPath}`);
  console.log(`Original output length: ${originalOutputLength} characters`);
  console.log(`Final output length after post-processing: ${finalOutputLength} characters`);
  console.log(`Removed ${originalOutputLength - finalOutputLength} characters`);
}

main();
