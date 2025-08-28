import { FC } from "react";
import { useDocsSearch } from "./hooks/useDocsSearch";
import DocsSearchInput from "./DocsSearchInput";
import DocsSearchResults from "./DocsSearchResults";
import DocsSearchSources from "./DocsSearchSources";
import { DocsSearchConfig } from "./types";
import "./DocsSearch.css";

interface DocsSearchProps {
  config?: DocsSearchConfig;
  className?: string;
  placeholder?: string;
  showSources?: boolean;
}

const DocsSearch: FC<DocsSearchProps> = ({ config, className = "", placeholder, showSources = true }) => {
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
  } = useDocsSearch(config);

  const handleSearch = (searchQuery: string) => {
    search(searchQuery);
  };

  const handleReset = () => {
    stopSearch();
    resetState();
  };

  return (
    <div className={`docs-search ${className}`}>
      <div className="docs-search-container">
        {/* Header */}
        <div className="docs-search-header">
          <h3 className="docs-search-title">🤖 Ask Testkube Documentation</h3>
          {hasResults && (
            <button onClick={handleReset} className="docs-search-reset-button" title="Start new search">
              New Search
            </button>
          )}
        </div>

        {/* Search Input */}
        <DocsSearchInput
          onSearch={handleSearch}
          isLoading={isLoading}
          placeholder={placeholder}
          initialValue={status === "idle" ? "" : query}
        />

        {/* Results Section */}
        <div className="docs-search-content">
          <DocsSearchResults
            response={response}
            progress={progress}
            error={error}
            status={status}
            onRetry={retry}
            className="docs-search-main-results"
          />

          {/* Sources Section */}
          {showSources && sources.length > 0 && (
            <DocsSearchSources sources={sources} className="docs-search-sidebar-sources" />
          )}
        </div>

        {/* Footer */}
        {hasResults && (
          <div className="docs-search-footer">
            <p className="docs-search-disclaimer">
              AI-generated responses based on Testkube documentation. Please verify important information in the
              official docs.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocsSearch;
