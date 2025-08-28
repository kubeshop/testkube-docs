// TypeScript types for the docs search component

export interface DocsSearchState {
  status: "idle" | "searching" | "streaming" | "complete" | "error";
  query: string;
  response: string;
  error: string | null;
}

export interface StreamEvent {
  token?: string;
  done?: boolean;
  error?: string;
}

export interface DocsSearchConfig {
  apiUrl?: string;
  enableAuth?: boolean;
}
