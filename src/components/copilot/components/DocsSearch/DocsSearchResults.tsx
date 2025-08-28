import { FC } from "react";
import ReactMarkdown from "react-markdown";

interface DocsSearchResultsProps {
  response: string;
  progress?: string;
  error?: string | null;
  status: "idle" | "searching" | "streaming" | "complete" | "error";
  onRetry?: () => void;
  className?: string;
}

const DocsSearchResults: FC<DocsSearchResultsProps> = ({
  response,
  progress,
  error,
  status,
  onRetry,
  className = "",
}) => {
  const formatResponse = (text: string): React.ReactNode => {
    return (
      <div className="docs-search-markdown">
        <ReactMarkdown
          components={{
            // Custom components for better styling
            h1: ({ children }) => <h2 className="docs-search-h1">{children}</h2>,
            h2: ({ children }) => <h3 className="docs-search-h2">{children}</h3>,
            h3: ({ children }) => <h4 className="docs-search-h3">{children}</h4>,
            h4: ({ children }) => <h5 className="docs-search-h4">{children}</h5>,
            h5: ({ children }) => <h6 className="docs-search-h5">{children}</h6>,
            p: ({ children }) => <p className="docs-search-paragraph">{children}</p>,
            ul: ({ children }) => <ul className="docs-search-list">{children}</ul>,
            ol: ({ children }) => <ol className="docs-search-list docs-search-list-ordered">{children}</ol>,
            li: ({ children }) => <li className="docs-search-list-item">{children}</li>,
            code: ({ children, ...props }) => {
              // Check if it's inline code by looking at the props
              const isInline = !props.className?.includes("language-");
              return isInline ? (
                <code className="docs-search-inline-code">{children}</code>
              ) : (
                <pre className="docs-search-code-block">
                  <code>{children}</code>
                </pre>
              );
            },
            blockquote: ({ children }) => <blockquote className="docs-search-blockquote">{children}</blockquote>,
            strong: ({ children }) => <strong className="docs-search-bold">{children}</strong>,
            em: ({ children }) => <em className="docs-search-italic">{children}</em>,
          }}
        >
          {text}
        </ReactMarkdown>
      </div>
    );
  };

  if (status === "idle") {
    return (
      <div className={`docs-search-results docs-search-results--idle ${className}`}>
        <div className="docs-search-placeholder">
          <div className="docs-search-placeholder-icon">🔍</div>
          <p>Search the Testkube documentation</p>
          <p className="docs-search-placeholder-hint">
            Try asking: "How do I install Testkube CLI?" or "What are test workflows?"
          </p>
        </div>
      </div>
    );
  }

  if (status === "error" && error) {
    return (
      <div className={`docs-search-results docs-search-results--error ${className}`}>
        <div className="docs-search-error">
          <div className="docs-search-error-icon">⚠️</div>
          <div className="docs-search-error-content">
            <h4>Search Error</h4>
            <p>{error}</p>
            {onRetry && (
              <button onClick={onRetry} className="docs-search-retry-button">
                Try Again
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`docs-search-results docs-search-results--active ${className}`}>
      {/* Progress indicator */}
      {(status === "searching" || status === "streaming") && progress && (
        <div className="docs-search-progress">
          <div className="docs-search-progress-indicator">
            <span className="docs-search-spinner" />
            <span className="docs-search-progress-text">{progress}</span>
          </div>
        </div>
      )}

      {/* Response content */}
      {response && (
        <div className="docs-search-response">
          <div className="docs-search-response-content">{formatResponse(response)}</div>

          {/* Streaming indicator */}
          {status === "streaming" && <span className="docs-search-cursor">|</span>}
        </div>
      )}

      {/* Empty state for active search */}
      {status === "searching" && !response && !progress && (
        <div className="docs-search-searching">
          <span className="docs-search-spinner" />
          <span>Searching documentation...</span>
        </div>
      )}
    </div>
  );
};

export default DocsSearchResults;
