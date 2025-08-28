import { FC, useState, useRef, useEffect } from "react";

interface DocsSearchInputProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
  disabled?: boolean;
  placeholder?: string;
  initialValue?: string;
}

const DocsSearchInput: FC<DocsSearchInputProps> = ({
  onSearch,
  isLoading,
  disabled = false,
  placeholder = "Ask a question about Testkube documentation...",
  initialValue = "",
}) => {
  const [query, setQuery] = useState(initialValue);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setQuery(initialValue);
  }, [initialValue]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    if (trimmedQuery && !isLoading && !disabled) {
      onSearch(trimmedQuery);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleClear = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="docs-search-input-form">
      <div className="docs-search-input-container">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled || isLoading}
          className="docs-search-input"
          autoComplete="off"
          spellCheck="false"
        />

        {query && !isLoading && (
          <button type="button" onClick={handleClear} className="docs-search-clear-button" title="Clear search">
            ✕
          </button>
        )}

        <button type="submit" disabled={!query.trim() || isLoading || disabled} className="docs-search-submit-button">
          {isLoading ? (
            <span className="docs-search-loading-spinner" />
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="21 21l-4.35-4.35" />
            </svg>
          )}
        </button>
      </div>
    </form>
  );
};

export default DocsSearchInput;
