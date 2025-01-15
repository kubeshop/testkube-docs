import { readFileSync, writeFileSync } from "fs";

type Pattern = RegExp | string;
type PatternProcessor = [Pattern, ((match: string, ...groups: string[]) => string) | string];
type LineProcessor = (line: string) => string;
type Processor = PatternProcessor | LineProcessor;

function isPatternProcessor(processor: Processor): processor is PatternProcessor {
  return Array.isArray(processor) && (processor[0] instanceof RegExp || typeof processor[0] === "string");
}

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceAll(str: string, find: string, replace: string): string {
  return str.replace(new RegExp(escapeRegExp(find), "g"), replace);
}

function processContent(content: string, processors: Processor[]): string {
  return processors.reduce((processedContent, processor) => {
    if (!isPatternProcessor(processor)) {
      return processedContent.split("\n").map(processor).join("\n");
    }

    const [pattern, transform] = processor;

    if (typeof pattern === "string" && typeof transform === "string") {
      return replaceAll(processedContent, pattern, transform);
    }

    if (pattern instanceof RegExp && typeof transform === "function") {
      return processedContent.replace(pattern, (...args) => transform(...args));
    }

    if (pattern instanceof RegExp && typeof transform === "string") {
      return processedContent.replace(pattern, transform);
    }

    return processedContent;
  }, content);
}

export function postProcessOutput(outputPath: string): void {
  const content = readFileSync(outputPath, "utf-8");

  const processors: Processor[] = [
    // Remove <TabItem> or </TabItem> lines
    (line) => (line.includes("<TabItem") ? "" : line),
    (line) => (line.includes("</TabItem>") ? "" : line),

    // Remove <Tabs> or </Tabs> lines
    (line) => (line.includes("<Tabs") ? "" : line),
    (line) => (line.includes("</Tabs>") ? "" : line),

    // Remove images ![...](...)
    [/!\[.*?\]\(.*?\)/g, ""],

    // Remove <iframe>...</iframe> content
    [/<iframe[\s\S]*?<\/iframe>/g, ""],

    // Remove <Admonition>...</Admonition> content
    [/<Admonition[\s\S]*?<\/Admonition>/g, ""],

    // Remove empty lines
    (line) => (line.trim() ? line : ""),
    [/\n\s*\n/g, "\n"],
  ];

  const processedContent = processContent(content, processors);
  writeFileSync(outputPath, processedContent);
}
