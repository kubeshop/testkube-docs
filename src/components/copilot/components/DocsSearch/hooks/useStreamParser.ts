import { useCallback } from "react";
import { StreamEvent } from "../types";

interface UseStreamParserProps {
  onToken: (token: string) => void;
  onSearchProgress: (message: string) => void;
  onSourceFound: (source: { file: string; lines: [number, number]; excerpt: string; context: string }) => void;
  onComplete: () => void;
  onError: (error: string) => void;
}

export const useStreamParser = ({
  onToken,
  onSearchProgress,
  onSourceFound,
  onComplete,
  onError,
}: UseStreamParserProps) => {
  const parseStream = useCallback(
    async (reader: ReadableStreamDefaultReader<Uint8Array>) => {
      const decoder = new TextDecoder();
      let partial = "";

      try {
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;

          partial += decoder.decode(value, { stream: true });
          const lines = partial.split("\n\n");
          partial = lines.pop() || "";

          for (const line of lines) {
            if (!line.startsWith("data: ")) {
              continue;
            }

            const jsonStr = line.slice(6).trim();
            if (!jsonStr) continue;

            try {
              const data: StreamEvent = JSON.parse(jsonStr);

              if (data.token) {
                onToken(data.token);
              } else if (data.type === "search_progress" && data.message) {
                onSearchProgress(data.message);
              } else if (data.type === "source_found" && data.file && data.lines && data.excerpt && data.context) {
                onSourceFound({
                  file: data.file,
                  lines: data.lines,
                  excerpt: data.excerpt,
                  context: data.context,
                });
              } else if (data.done) {
                onComplete();
                return;
              } else if (data.error) {
                onError(data.error);
                return;
              }
            } catch (parseError) {
              console.warn("Failed to parse SSE event:", jsonStr, parseError);
              // Continue processing other events
            }
          }
        }
      } catch (streamError) {
        onError(streamError instanceof Error ? streamError.message : String(streamError));
      }
    },
    [onToken, onSearchProgress, onSourceFound, onComplete, onError]
  );

  return { parseStream };
};
