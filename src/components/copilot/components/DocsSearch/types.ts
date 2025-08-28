// TypeScript types for the docs search component

export interface DocsSearchSource {
  file: string;
  lines: [number, number];
  excerpt: string;
  context: string;
}

export interface DocsSearchState {
  status: "idle" | "searching" | "streaming" | "complete" | "error";
  query: string;
  response: string;
  sources: DocsSearchSource[];
  error: string | null;
  progress?: string;
}

export interface StreamEvent {
  type?: "search_progress" | "source_found";
  token?: string;
  done?: boolean;
  file?: string;
  lines?: [number, number];
  excerpt?: string;
  context?: string;
  message?: string;
  error?: string;
}

export interface DocsSearchConfig {
  apiUrl?: string;
  enableAuth?: boolean;
}
