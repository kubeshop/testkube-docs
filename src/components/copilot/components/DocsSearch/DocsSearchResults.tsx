import { FC, useState } from "react";
import ReactMarkdown from "react-markdown";

import { FINAL_ANSWER_PREFIX } from "./constants";

interface DocsSearchResultsProps {
  response: string;
  error?: string | null;
  status: "idle" | "searching" | "streaming" | "complete" | "error";
  onRetry?: () => void;
  className?: string;
}

const DocsSearchResults: FC<DocsSearchResultsProps> = ({
  response,
  error,
  status,
  onRetry,
  className = "",
}) => {
  const [isPreliminaryExpanded, setIsPreliminaryExpanded] = useState(false);

  const getCurrentSentence = (text: string, maxLength = 100): string => {
    if (!text) return "";

    // Find the last complete sentence ending with punctuation
    const sentenceEnders = [".", "!", "?"];
    let lastSentenceEnd = -1;

    for (let i = 0; i < text.length; i++) {
      if (sentenceEnders.includes(text[i])) {
        // Check if it's followed by space or end of string (not just a decimal or abbreviation)
        if (
          i === text.length - 1 ||
          text[i + 1] === " " ||
          text[i + 1] === "\n"
        ) {
          lastSentenceEnd = i;
        }
      }
    }

    let currentText = "";
    if (lastSentenceEnd !== -1) {
      // Find the start of the last complete sentence
      let sentenceStart = 0;

      // Look backwards from the last sentence end to find the previous sentence end
      for (let i = lastSentenceEnd - 1; i >= 0; i--) {
        if (sentenceEnders.includes(text[i])) {
          if (i === 0 || text[i + 1] === " " || text[i + 1] === "\n") {
            sentenceStart = i + 1;
            break;
          }
        }
      }

      // Extract just the last complete sentence
      currentText = text.substring(sentenceStart, lastSentenceEnd + 1).trim();
    } else {
      // No complete sentence found, show the current sentence being built
      // Find the start of the current sentence (after the last sentence ender)
      let currentSentenceStart = 0;
      for (let i = text.length - 1; i >= 0; i--) {
        if (sentenceEnders.includes(text[i])) {
          if (i === 0 || text[i + 1] === " " || text[i + 1] === "\n") {
            currentSentenceStart = i + 1;
            break;
          }
        }
      }

      currentText = text.substring(currentSentenceStart).trim();

      // Truncate if too long
      if (currentText.length > maxLength) {
        currentText = currentText.substring(0, maxLength).trim() + "...";
      }
    }

    return currentText;
  };

  const renderCollapsiblePreliminary = (
    preliminaryText: string
  ): React.ReactNode => {
    if (!preliminaryText) return null;

    return (
      <div className="docs-search-preliminary-container">
        <div
          className={`docs-search-preliminary-toggle ${
            isPreliminaryExpanded ? "expanded" : "collapsed"
          }`}
          onClick={() => setIsPreliminaryExpanded(!isPreliminaryExpanded)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsPreliminaryExpanded(!isPreliminaryExpanded);
            }
          }}
        >
          <div className="docs-search-preliminary-header">
            <span className="docs-search-preliminary-icon">
              {isPreliminaryExpanded ? "🤔" : "💭"}
            </span>
            <span className="docs-search-preliminary-label">
              {isPreliminaryExpanded ? "Thinking process" : "AI is thinking"}
            </span>
            <span className="docs-search-preliminary-chevron">
              {isPreliminaryExpanded ? "▼" : "▶"}
            </span>
          </div>

          {!isPreliminaryExpanded && (
            <div className="docs-search-preliminary-preview">
              {getCurrentSentence(preliminaryText)}
            </div>
          )}
        </div>

        {isPreliminaryExpanded && (
          <div className="docs-search-preliminary-expanded">
            {formatResponse(preliminaryText, true)}
          </div>
        )}
      </div>
    );
  };
  const splitResponseByConfidence = (
    text: string
  ): { preliminary: string; final: string } => {
    // Use imported constant that matches backend
    const prefixIndex = text.indexOf(FINAL_ANSWER_PREFIX);

    if (prefixIndex !== -1) {
      // Found the hardcoded prefix - split at this point
      const preliminary = text.substring(0, prefixIndex).trim();
      const final = text
        .substring(prefixIndex + FINAL_ANSWER_PREFIX.length)
        .trim();

      return {
        preliminary,
        final,
      };
    }

    // Fallback to old confidence-based logic for backwards compatibility
    const lowerContent = text.toLowerCase();
    const confidencePatterns = [
      "ready for final answer",
      "high confidence",
      "confidence level: high",
      "comprehensive information",
      "confident in this answer",
    ];

    for (const pattern of confidencePatterns) {
      const index = lowerContent.indexOf(pattern);
      if (index !== -1) {
        // Find the end of the current line or paragraph containing the confidence indicator
        const fromIndex = index + pattern.length;
        let splitIndex = text.indexOf("\n", fromIndex);
        if (splitIndex === -1) splitIndex = text.indexOf("\n\n", fromIndex);
        if (splitIndex === -1) splitIndex = fromIndex;

        return {
          preliminary: text.substring(0, splitIndex).trim(),
          final: text.substring(splitIndex).trim(),
        };
      }
    }

    // If no prefix or confidence indicator found, treat everything as preliminary during streaming
    // or as final if complete
    if (status === "streaming") {
      return { preliminary: text, final: "" };
    }
    return { preliminary: "", final: text };
  };

  const formatResponse = (
    text: string,
    isPreliminary = false
  ): React.ReactNode => {
    const markdownClassName = isPreliminary
      ? "docs-search-markdown docs-search-markdown--preliminary"
      : "docs-search-markdown";

    return (
      <div className={markdownClassName}>
        <ReactMarkdown
          components={{
            // Custom components for better styling
            h1: ({ children }) => (
              <h2 className="docs-search-h1">{children}</h2>
            ),
            h2: ({ children }) => (
              <h3 className="docs-search-h2">{children}</h3>
            ),
            h3: ({ children }) => (
              <h4 className="docs-search-h3">{children}</h4>
            ),
            h4: ({ children }) => (
              <h5 className="docs-search-h4">{children}</h5>
            ),
            h5: ({ children }) => (
              <h6 className="docs-search-h5">{children}</h6>
            ),
            p: ({ children }) => (
              <p className="docs-search-paragraph">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="docs-search-list">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="docs-search-list docs-search-list-ordered">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="docs-search-list-item">{children}</li>
            ),
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
            blockquote: ({ children }) => (
              <blockquote className="docs-search-blockquote">
                {children}
              </blockquote>
            ),
            strong: ({ children }) => (
              <strong className="docs-search-bold">{children}</strong>
            ),
            em: ({ children }) => (
              <em className="docs-search-italic">{children}</em>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="docs-search-link"
              >
                {children}
              </a>
            ),
          }}
        >
          {text}
        </ReactMarkdown>
      </div>
    );
  };

  if (status === "idle") {
    return (
      <div
        className={`docs-search-results docs-search-results--idle ${className}`}
      >
        <div className="docs-search-placeholder">
          <div className="docs-search-placeholder-icon">🔍</div>

          <p>Search the Testkube documentation</p>
          <p className="docs-search-placeholder-hint">
            Try asking: "How do I install Testkube CLI?" or "What are test
            workflows?"
          </p>
        </div>
      </div>
    );
  }

  if (status === "error" && error) {
    return (
      <div
        className={`docs-search-results docs-search-results--error ${className}`}
      >
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
    <div
      className={`docs-search-results docs-search-results--active ${className}`}
    >
      {/* Response content */}
      {response && (
        <div className="docs-search-response">
          <div className="docs-search-response-content">
            {(() => {
              const { preliminary, final } =
                splitResponseByConfidence(response);

              return (
                <>
                  {preliminary && renderCollapsiblePreliminary(preliminary)}
                  {final && formatResponse(final, false)}
                </>
              );
            })()}
          </div>

          {/* Streaming indicator */}
          {status === "streaming" && (
            <span className="docs-search-cursor">|</span>
          )}
        </div>
      )}

      {/* Loading state for active search */}
      {status === "searching" && !response && (
        <div className="docs-search-searching">
          <span className="docs-search-spinner" />
          <span>Searching documentation...</span>
        </div>
      )}
    </div>
  );
};

export default DocsSearchResults;
