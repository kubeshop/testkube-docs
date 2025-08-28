import { FC } from "react";
import { DocsSearchSource } from "./types";

interface DocsSearchSourcesProps {
  sources: DocsSearchSource[];
  className?: string;
}

const DocsSearchSources: FC<DocsSearchSourcesProps> = ({ sources, className = "" }) => {
  if (sources.length === 0) {
    return null;
  }

  const formatFileName = (filePath: string): string => {
    // Remove the 'docs/' prefix and show a clean file name
    return filePath.replace(/^docs\//, "").replace(/\.mdx?$/, "");
  };

  const createDocLink = (filePath: string, lineStart?: number): string => {
    // Convert docs file path to documentation URL
    const cleanPath = filePath
      .replace(/^docs\//, "")
      .replace(/\.mdx?$/, "")
      .replace(/\/_/, "/") // Handle _category files
      .replace(/\/index$/, ""); // Remove index from URLs

    const baseUrl = "/";
    const docUrl = `${baseUrl}${cleanPath}`;

    // Add line anchor if provided
    return lineStart ? `${docUrl}#L${lineStart}` : docUrl;
  };

  const truncateExcerpt = (text: string, maxLength: number = 120): string => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
  };

  return (
    <div className={`docs-search-sources ${className}`}>
      <h4 className="docs-search-sources-title">📚 Sources ({sources.length})</h4>

      <div className="docs-search-sources-list">
        {sources.map((source, index) => (
          <div key={index} className="docs-search-source-item">
            <div className="docs-search-source-header">
              <a
                href={createDocLink(source.file, source.lines[0])}
                className="docs-search-source-link"
                target="_blank"
                rel="noopener noreferrer"
                title={`View ${source.file}`}
              >
                <span className="docs-search-source-file">{formatFileName(source.file)}</span>
                <span className="docs-search-source-lines">
                  Lines {source.lines[0]}-{source.lines[1]}
                </span>
              </a>
            </div>

            {source.excerpt && <div className="docs-search-source-excerpt">{truncateExcerpt(source.excerpt)}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocsSearchSources;
