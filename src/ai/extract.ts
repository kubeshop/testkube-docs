import "dotenv/config";
import { OpenAI } from "openai";
import { QAPair } from "./types";
import { chunkifyText } from "./utils";
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

async function appendToOutput(qaPairs: QAPair[], filePath: string): Promise<void> {
  const newPairs = qaPairs
    .map((pair) => `question: ${pair.question}\nanswer: ${pair.answer}\n${QA_DELIMITER}\n`)
    .join("\n");

  await fs.appendFile(CONFIG.outputFile, newPairs);
}

function buildSystemPrompt(existingQuestions: string[]) {
  const list = existingQuestions.length
    ? existingQuestions.map((q) => `Q: ${q}`).join("\n")
    : "(No existing questions yet)";

  return `
You are an AI assistant with deep knowledge of Testkube. You have access to Testkube documentation in Markdown format.

Your objectives:
1. Read and analyze any provided documentation content carefully.
2. **Generate potential user questions** that someone might realistically ask about the content. (The documentation typically does not contain direct questions.)
3. **Answer these questions** by synthesizing the relevant information from the documentation. 
4. When you find at least one relevant question–answer pair:
   - Call "addQAPair" with "question" (the inferred question) and "answer" (the synthesized answer).
5. If you see an existing question that already matches one you would create, but you have a better or more thorough answer, call "updateQAPair" with the improved answer.
6. If you need to look up an existing Q&A pair, use "readAnswer".
7. **If you do not find any relevant or worthwhile Q&A** that can be formed from the text, return only "No usable info.".

**Critical instructions**:
- Use only these three function calls to manage the Q&A pairs (create, retrieve, or update).
- Each potential Q&A pair **must** be grounded in the provided documentation. Do not fabricate info that isn't supported by the text.
- Provide relevant code snippets (YAML, CLI commands, etc.) in your answers if helpful.
- If the user has not provided enough content or the content is irrelevant, output "No usable info."
- Return short, clear answers for each Q&A, but be as specific as the documentation allows.
- If the input doc is large, we may chunk it in multiple calls so it fits within limits.

Existing questions (if any) are listed below:
${list}
`;
}

function buildUserPrompt(fileContent: string) {
  return `
Markdown content to analyze:
${fileContent}
`;
}

async function extractQandAFromContent(
  content: string,
  filePath: string,
  chunkIndex: number,
  totalChunks: number
): Promise<boolean> {
  const openai = new OpenAI({ apiKey: CONFIG.openaiApiKey });
  if (!content || content.length < 50) return false;

  async function readAnswer(args: { question: string }) {
    const answer = existingQAPairs.find((qa) => qa.question.toLowerCase() === args.question.toLowerCase())?.answer;
    console.log(`Read answer for question: ${args.question}`);
    return `Answer: ${answer ?? "No answer found."}`;
  }

  async function addQAPair(args: { question: string; answer: string }) {
    existingQAPairs.push({ question: args.question, answer: args.answer });
    console.log(`Added Q&A pair: ${args.question}\n Answer: ${args.answer}`);
    return "Q&A pair added.";
  }

  async function updateQAPair(args: { question: string; newAnswer: string }) {
    const existing = existingQAPairs.find((qa) => qa.question.toLowerCase() === args.question.toLowerCase());
    if (!existing) return "No matching question found to update.";
    existing.answer = args.newAnswer;
    console.log(`Updated Q&A pair: ${args.question}\n New answer: ${args.newAnswer}`);
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

    let success = false;

    runner
      .on("connect", () => {
        console.log("Connected to OpenAI");
      })
      .on("message", (message) => {
        console.log("Message received:", message);
        success = true;
      })
      .on("content", (content) => {
        console.log("Content received:", content);
      })
      .on("functionCall", (props) => {
        console.log(`Function ${props.name} called with arguments:`, props.arguments);
        success = true;
      })
      .on("error", (error) => {
        console.error("Error:", error);
        success = false;
      });

    await runner.done();

    if (chunkIndex === totalChunks - 1) {
      await appendToOutput(existingQAPairs, filePath);
    }

    return success;
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
    const success = await extractQandAFromContent(chunks[i].text, filePath, i, totalChunks);

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
