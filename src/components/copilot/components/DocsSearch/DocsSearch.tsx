import { FC } from "react";
import { useDocsSearch } from "./hooks/useDocsSearch";
import DocsSearchInput from "./DocsSearchInput";
import DocsSearchResults from "./DocsSearchResults";
import { DocsSearchConfig } from "./types";
import "./DocsSearch.css";

interface DocsSearchProps {
  config?: DocsSearchConfig;
  className?: string;
  placeholder?: string;
}

const DocsSearch: FC<DocsSearchProps> = ({
  config,
  className = "",
  placeholder,
}) => {
  const {
    status,
    query,
    response,
    error,
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
            <button
              onClick={handleReset}
              className="docs-search-reset-button"
              title="Start new search"
            >
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
            error={error}
            status={status}
            onRetry={retry}
            className="docs-search-main-results"
          />
        </div>

        {/* Footer */}
        {hasResults && (
          <div className="docs-search-footer">
            <p className="docs-search-disclaimer">
              AI-generated responses based on Testkube documentation. Please
              verify important information in the official docs.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocsSearch;
