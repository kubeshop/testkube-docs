interface ChunkOptions {
  chunkSize?: number;
  overlap?: number;
  trimChunks?: boolean;
}

interface TextChunk {
  text: string;
  startIndex: number;
  endIndex: number;
}

type BreakPoint = {
  index: number;
  priority: number;
};

function findCodeBlockEnd(text: string, startIndex: number): number {
  const codeEnd = text.indexOf("```", startIndex + 3);
  return codeEnd !== -1 ? codeEnd + 3 : -1;
}

function isWithinCodeBlock(text: string, position: number): boolean {
  let currentPos = 0;
  while (currentPos < position) {
    const startBlock = text.indexOf("```", currentPos);
    if (startBlock === -1 || startBlock > position) {
      return false;
    }
    const endBlock = findCodeBlockEnd(text, startBlock);
    if (endBlock === -1) {
      return true;
    }
    if (position > startBlock && position < endBlock) {
      return true;
    }
    currentPos = endBlock;
  }
  return false;
}

function findBreakPoint(text: string, searchStart: number, searchEnd: number): BreakPoint {
  const breakPoints = [
    { pattern: "\n\n", priority: 1 },
    { pattern: ". ", priority: 2 },
    { pattern: "! ", priority: 2 },
    { pattern: "? ", priority: 2 },
    { pattern: "\n", priority: 3 },
    { pattern: ". ", priority: 4 },
    { pattern: " ", priority: 5 },
  ];

  let bestBreak: BreakPoint = { index: searchEnd, priority: 999 };

  for (const { pattern, priority } of breakPoints) {
    let position = searchEnd;
    while (position >= searchStart) {
      position = text.lastIndexOf(pattern, position);
      if (position === -1 || position < searchStart) {
        break;
      }

      if (!isWithinCodeBlock(text, position) && priority < bestBreak.priority) {
        bestBreak = { index: position + pattern.length, priority };
        break;
      }
      position--;
    }

    if (bestBreak.priority === 1) {
      break;
    }
  }

  return bestBreak;
}

function validateOptions(options: ChunkOptions): void {
  const { chunkSize = 500000, overlap = 10000 } = options;

  if (chunkSize <= 0) {
    throw new Error("Chunk size must be positive");
  }
  if (overlap < 0) {
    throw new Error("Overlap must be non-negative");
  }
  if (overlap >= chunkSize) {
    throw new Error("Overlap must be smaller than chunk size");
  }
}

function createChunk(text: string, start: number, end: number, trimChunks: boolean): TextChunk {
  let chunkText = text.slice(start, end);
  if (trimChunks) {
    chunkText = chunkText.trim();
  }
  return {
    text: chunkText,
    startIndex: start,
    endIndex: start + chunkText.length,
  };
}

function ensureCompleteCodeBlocks(text: string, endIndex: number): number {
  const lastCodeStart = text.lastIndexOf("```", endIndex);
  if (lastCodeStart === -1 || lastCodeStart >= endIndex) {
    return endIndex;
  }

  if (isWithinCodeBlock(text, lastCodeStart)) {
    const codeEnd = findCodeBlockEnd(text, lastCodeStart);
    if (codeEnd !== -1 && codeEnd > endIndex) {
      return codeEnd;
    }
  }
  return endIndex;
}

export function chunkifyText(text: string, options: ChunkOptions = {}): TextChunk[] {
  const { chunkSize = 1000000, overlap = 1000, trimChunks = true } = options;
  validateOptions(options);

  const chunks: TextChunk[] = [];
  let currentIndex = 0;

  while (true) {
    if (currentIndex >= text.length) {
      break;
    }

    let endIndex = Math.min(currentIndex + chunkSize, text.length);

    if (endIndex < text.length) {
      const searchWindow = Math.min(200, Math.floor(chunkSize * 0.1));
      const halfChunk = Math.floor(chunkSize / 2);
      const searchStart = Math.max(endIndex - searchWindow, currentIndex + halfChunk);

      const breakPoint = findBreakPoint(text, searchStart, endIndex);
      endIndex = breakPoint.index;
    }

    endIndex = ensureCompleteCodeBlocks(text, endIndex);

    if (endIndex <= currentIndex) {
      break;
    }

    const chunk = createChunk(text, currentIndex, endIndex, trimChunks);
    chunks.push(chunk);

    currentIndex = endIndex - overlap;

    if (currentIndex <= chunk.endIndex - chunk.text.length) {
      currentIndex = endIndex;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    }
  }

  return chunks;
}
