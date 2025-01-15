import "dotenv/config";
import { OpenAI } from "openai";
import { QAPair } from "./types";
import { chunkifyText } from "./chunk";
import { promises as fs } from "fs";

interface Config {
  openaiApiKey: string | undefined;
  model: string;
  temperature: number;
  outputFile: string;
  historyFile: string;
}

const CONFIG: Config = {
  openaiApiKey: process.env.OPENAI_API_KEY,
  model: "gpt-4o-mini",
  temperature: 0,
  outputFile: "ai_qa_output.txt",
  historyFile: "ai_processed_files.json",
};

const QA_DELIMITER = "----------";

interface ProcessedFile {
  filePath: string;
  timestamp: string;
  chunks: number;
  processedChunks: number;
}

let existingQAPairs: QAPair[] = [];

async function loadQAPairs(): Promise<QAPair[]> {
  try {
    const content = await fs.readFile(CONFIG.outputFile, "utf-8");
    const pairs = content
      .split(QA_DELIMITER)
      .map((block) => {
        const lines = block.trim().split("\n");
        if (lines.length < 2) return null;

        const question = lines[0].replace("question:", "").trim();
        const answer = lines.slice(1).join("\n").replace("answer:", "").trim();

        if (!question || !answer) return null;
        return { question, answer };
      })
      .filter((pair): pair is QAPair => pair !== null);

    return pairs;
  } catch (error) {
    return [];
  }
}

async function initializeQAPairs(): Promise<void> {
  existingQAPairs = await loadQAPairs();
}

async function loadProcessedFiles(): Promise<ProcessedFile[]> {
  try {
    const content = await fs.readFile(CONFIG.historyFile, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    return [];
  }
}

async function saveProcessedFiles(files: ProcessedFile[]): Promise<void> {
  await fs.writeFile(CONFIG.historyFile, JSON.stringify(files, null, 2));
}

async function saveQAPairs(qaPairs: QAPair[]): Promise<void> {
  const content = qaPairs
    .map((pair) => `question: ${pair.question}\nanswer: ${pair.answer}\n${QA_DELIMITER}`)
    .join("\n\n");

  await fs.writeFile(CONFIG.outputFile, content + "\n");
}

function buildSystemPrompt(existingQuestions: string[]) {
  const list = existingQuestions.length
    ? existingQuestions.map((q) => `Q: ${q}`).join("\n")
    : "(No existing questions yet)";

  return `
You are an AI assistant developing a comprehensive knowledge base about Testkube, a Kubernetes-native testing framework. Your goal is to create high-quality Q&A pairs that help users understand Testkube holistically.

Your objectives:
1. Analyze the provided documentation content in the context of your existing knowledge about Testkube.
2. Generate valuable questions that:
   - Focus on practical use cases and real-world scenarios
   - Address core Testkube concepts and functionality
   - Help users understand how different Testkube components work together
   - Cover common implementation challenges and solutions
   - Avoid questions that require excessive context from a specific document
3. Craft clear, self-contained answers that:
   - Synthesize information from across the documentation
   - Include relevant examples (YAML, CLI commands, etc.)
   - Explain concepts in a way that builds on fundamental Testkube knowledge
   - Link related concepts together to show the bigger picture

Q&A Quality Guidelines:
Good questions:
- "How do I set up automated test execution in Testkube?"
- "What's the difference between TestSuites and Tests in Testkube?"
- "How can I integrate Testkube with my CI/CD pipeline?"
- "What testing frameworks does Testkube support?"

Avoid questions that:
- Require specific document context to understand
- Focus on minor implementation details
- Don't contribute to overall Testkube understanding

Functions available:
- addQAPair(question, answer): Add a new Q&A pair
- updateQAPair(question, newAnswer): Update an existing answer
- readAnswer(question): Look up an existing answer

Instructions:
1. If you find opportunities for valuable Q&A pairs:
   - Create new pairs that build on existing knowledge
   - Update existing answers if you can add more context
   - Connect related concepts across documentation
2. If you can't form valuable Q&A pairs from the content:
   - Return "No usable info."
3. Always ground answers in the documentation
4. Build progressively deeper understanding

Current knowledge base questions:
${list}
`;
}

function buildUserPrompt(fileContent: string) {
  return `
Analyze this documentation content and integrate it with your existing understanding of Testkube:
${fileContent}
`;
}

async function extractQandAFromContent(content: string, chunkIndex: number, totalChunks: number): Promise<boolean> {
  const openai = new OpenAI({ apiKey: CONFIG.openaiApiKey });
  if (!content || content.length < 50) return false;

  async function readAnswer(args: { question: string }) {
    const answer = existingQAPairs.find((qa) => qa.question.toLowerCase() === args.question.toLowerCase())?.answer;
    console.log(`Read answer for question: ${args.question}\n`);
    return `Answer: ${answer ?? "No answer found."}`;
  }

  async function addQAPair(args: { question: string; answer: string }) {
    existingQAPairs.push({ question: args.question, answer: args.answer });
    console.log(`Added new Q&A pair: ${args.question}\n`);
    return "Q&A pair added.";
  }

  async function updateQAPair(args: { question: string; newAnswer: string }) {
    const existing = existingQAPairs.find((qa) => qa.question.toLowerCase() === args.question.toLowerCase());
    if (!existing) return "No matching question found to update.";
    existing.answer = args.newAnswer;
    console.log(`Updated Q&A pair: ${args.question}\n`);
    return "Q&A pair updated.";
  }

  try {
    const runner = openai.beta.chat.completions.runTools({
      model: CONFIG.model ?? "gpt-4o-mini",
      messages: [
        { role: "system", content: buildSystemPrompt(existingQAPairs.map((q) => q.question)) },
        { role: "user", content: buildUserPrompt(content) },
      ],
      tools: [
        {
          type: "function",
          function: {
            function: readAnswer,
            name: "readAnswer",
            description: "Retrieve the answer for a given question.",
            parameters: {
              type: "object",
              properties: {
                question: { type: "string" },
              },
              required: ["question"],
            },
            parse: JSON.parse,
          },
        },
        {
          type: "function",
          function: {
            function: addQAPair,
            name: "addQAPair",
            description: "Add a new Q&A pair to the existing dataset.",
            parameters: {
              type: "object",
              properties: {
                question: { type: "string" },
                answer: { type: "string" },
              },
              required: ["question", "answer"],
            },
            parse: JSON.parse,
          },
        },
        {
          type: "function",
          function: {
            function: updateQAPair,
            name: "updateQAPair",
            description: "Update the answer of an existing question.",
            parameters: {
              type: "object",
              properties: {
                question: { type: "string" },
                newAnswer: { type: "string" },
              },
              required: ["question", "newAnswer"],
            },
            parse: JSON.parse,
          },
        },
      ],
      temperature: CONFIG.temperature ?? 0,
    });

    await runner.done();

    if (chunkIndex === totalChunks - 1) {
      await saveQAPairs(existingQAPairs);
    }

    return true;
  } catch (error) {
    console.error("Error running tools:", error);
    return false;
  }
}

export async function extractQandAFromFile(filePath: string, fileContent: string) {
  await initializeQAPairs();

  const processedFiles = await loadProcessedFiles();

  const existingFile = processedFiles.find((f) => f.filePath === filePath);
  if (existingFile && existingFile.processedChunks === existingFile.chunks) {
    console.log(`Skipping already processed file: ${filePath}`);
    return;
  }

  const chunks = chunkifyText(fileContent);
  const totalChunks = chunks.length;

  const fileRecord: ProcessedFile = {
    filePath,
    timestamp: new Date().toISOString(),
    chunks: totalChunks,
    processedChunks: 0,
  };

  let allChunksProcessed = true;
  for (let i = 0; i < chunks.length; i++) {
    const success = await extractQandAFromContent(chunks[i].text, i, totalChunks);

    if (!success) {
      allChunksProcessed = false;
      break;
    }

    fileRecord.processedChunks = i + 1;
  }

  if (allChunksProcessed) {
    const index = processedFiles.findIndex((f) => f.filePath === filePath);
    if (index >= 0) {
      processedFiles[index] = fileRecord;
    } else {
      processedFiles.push(fileRecord);
    }
    await saveProcessedFiles(processedFiles);
  }
}
