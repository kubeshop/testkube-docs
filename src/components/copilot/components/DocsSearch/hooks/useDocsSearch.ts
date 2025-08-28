import { useState, useCallback, useRef } from "react";
import { DocsSearchState, DocsSearchSource, DocsSearchConfig } from "../types";
import { useStreamParser } from "./useStreamParser";

const DEFAULT_CONFIG: DocsSearchConfig = {
  apiUrl: process.env.NODE_ENV === "development" ? "http://localhost:3000" : "",
  enableAuth: false,
};

export const useDocsSearch = (config: DocsSearchConfig = {}) => {
  const finalConfig = { ...DEFAULT_CONFIG, ...config };

  const [state, setState] = useState<DocsSearchState>({
    status: "idle",
    query: "",
    response: "",
    sources: [],
    error: null,
  });

  const abortControllerRef = useRef<AbortController | null>(null);

  const resetState = useCallback(() => {
    setState({
      status: "idle",
      query: "",
      response: "",
      sources: [],
      error: null,
      progress: undefined,
    });
  }, []);

  const setStatus = useCallback((status: DocsSearchState["status"]) => {
    setState((prev) => ({ ...prev, status }));
  }, []);

  const setError = useCallback((error: string) => {
    setState((prev) => ({ ...prev, error, status: "error" }));
  }, []);

  const setProgress = useCallback((progress: string) => {
    setState((prev) => ({ ...prev, progress }));
  }, []);

  const addToken = useCallback((token: string) => {
    setState((prev) => ({
      ...prev,
      response: prev.response + token,
      status: prev.status === "searching" ? "streaming" : prev.status,
    }));
  }, []);

  const addSource = useCallback((source: DocsSearchSource) => {
    setState((prev) => ({
      ...prev,
      sources: [...prev.sources, source],
    }));
  }, []);

  const complete = useCallback(() => {
    setState((prev) => ({ ...prev, status: "complete", progress: undefined }));
  }, []);

  const { parseStream } = useStreamParser({
    onToken: addToken,
    onSearchProgress: setProgress,
    onSourceFound: addSource,
    onComplete: complete,
    onError: setError,
  });

  const search = useCallback(
    async (query: string) => {
      if (!query.trim()) {
        setError("Query cannot be empty");
        return;
      }

      // Abort previous request if it exists
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      // Reset state and set initial values
      setState({
        status: "searching",
        query: query.trim(),
        response: "",
        sources: [],
        error: null,
        progress: "Starting search...",
      });

      const controller = new AbortController();
      abortControllerRef.current = controller;

      try {
        const url = `${finalConfig.apiUrl}/docs-search`;
        const headers: Record<string, string> = {
          "Content-Type": "application/json",
          Accept: "text/event-stream",
        };

        // Add auth header if enabled (though it should be disabled for docs site)
        if (finalConfig.enableAuth) {
          // In a real scenario, you'd get the token from your auth system
          headers["Authorization"] = "Bearer YOUR_TOKEN_HERE";
        }

        const response = await fetch(url, {
          method: "POST",
          headers,
          body: JSON.stringify({ query: query.trim() }),
          signal: controller.signal,
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP ${response.status}: ${errorText || response.statusText}`);
        }

        const reader = response.body?.getReader();
        if (!reader) {
          throw new Error("Failed to get response reader");
        }

        await parseStream(reader);
      } catch (error) {
        // Ignore abort errors
        if (controller.signal.aborted) {
          return;
        }

        const errorMessage = error instanceof Error ? error.message : String(error);
        setError(errorMessage);
      } finally {
        if (abortControllerRef.current === controller) {
          abortControllerRef.current = null;
        }
      }
    },
    [finalConfig, parseStream, setError]
  );

  const stopSearch = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setStatus("idle");
  }, [setStatus]);

  const retry = useCallback(() => {
    if (state.query) {
      search(state.query);
    }
  }, [state.query, search]);

  return {
    ...state,
    search,
    stopSearch,
    retry,
    resetState,
    isLoading: state.status === "searching" || state.status === "streaming",
    hasResults: state.response.length > 0 || state.sources.length > 0,
  };
};
