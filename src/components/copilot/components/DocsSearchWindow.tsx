import { FC } from "react";
import { useDocsSearch } from "./DocsSearch/hooks/useDocsSearch";
import DocsSearchInput from "./DocsSearch/DocsSearchInput";
import DocsSearchResults from "./DocsSearch/DocsSearchResults";
import "./DocsSearchWindow.css";

interface DocsSearchWindowProps {
  onClose: () => void;
}

const DocsSearchWindow: FC<DocsSearchWindowProps> = ({ onClose }) => {
  const {
    status,
    query,
    response,
    sources,
    error,
    progress,
    search,
    stopSearch,
    retry,
    resetState,
    isLoading,
    hasResults,
  } = useDocsSearch({
    apiUrl: process.env.NODE_ENV === "development" ? "http://localhost:9090" : "",
    enableAuth: false,
  });

  const handleSearch = (searchQuery: string) => {
    // Reset previous results and start new search
    resetState();
    search(searchQuery);
  };

  const handleNewSearch = () => {
    stopSearch();
    resetState();
  };

  return (
    <div className="docs-search-window">
      {/* Header */}
      <div className="docs-search-window-header">
        <div className="docs-search-window-title">
          <span className="docs-search-window-icon">🤖</span>
          <span>Ask Documentation</span>
        </div>
        <div className="docs-search-window-actions">
          {hasResults && (
            <button onClick={handleNewSearch} className="docs-search-window-new-button" title="New search">
              ↻
            </button>
          )}
          <button onClick={onClose} className="docs-search-window-close-button" title="Close">
            ✕
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="docs-search-window-content">
        {/* Search Input - Always visible at top */}
        <div className="docs-search-window-input-section">
          <DocsSearchInput
            onSearch={handleSearch}
            isLoading={isLoading}
            placeholder="Ask about Testkube CLI, workflows, tests..."
            initialValue={status === "idle" ? "" : query}
          />
        </div>

        {/* Results Area */}
        <div className="docs-search-window-results-section">
          <DocsSearchResults
            response={response}
            progress={progress}
            error={error}
            status={status}
            onRetry={retry}
            className="docs-search-window-results"
          />
        </div>
      </div>
    </div>
  );
};

export default DocsSearchWindow;
