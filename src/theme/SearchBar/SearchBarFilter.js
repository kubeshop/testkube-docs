import { useMemo } from "react";
import "./SearchbarFilter.css";

export default function SearchBarFilter({
  computedFacetFilters,
  setComputedFacetFilters,
  setCurrentOption,
}) {
  const currentIndexPrefix = useMemo(() => {
    return computedFacetFilters.find((filter) => {
      return filter.startsWith("indexPrefix");
    });
  }, [computedFacetFilters]);

  const onOptionClick = (...values) => {
    setComputedFacetFilters(values);
  };

  return (
    <div className="SearchFilterContainer">
      <div className="SearchFilter">
        <SearchOption
          label="Docs"
          optionKey="indexPrefix: -reference-doc"
          currentIndexPrefix={currentIndexPrefix}
          onClick={(label) => {
            setCurrentOption(label);
            onOptionClick(
              "indexPrefix: -reference-doc",
              "indexPrefix: -legacy-doc"
            );
          }}
        />
        <SearchOption
          label="Reference"
          optionKey="indexPrefix: reference-doc"
          currentIndexPrefix={currentIndexPrefix}
          onClick={(label) => {
            setCurrentOption(label);
            onOptionClick("indexPrefix: reference-doc");
          }}
        />

        <SearchOption
          label="Legacy"
          optionKey="indexPrefix: legacy-doc"
          currentIndexPrefix={currentIndexPrefix}
          onClick={(label) => {
            setCurrentOption(label);
            onOptionClick("indexPrefix: legacy-doc");
          }}
        />
        <Tooltip />
      </div>
    </div>
  );
}

function SearchOption({ label, onClick, optionKey, currentIndexPrefix }) {
  return (
    <div
      className="SearchOption"
      style={{
        background: `${
          currentIndexPrefix === optionKey
            ? "var(--ifm-color-primary)"
            : "var(--ifm-color-third)"
        }`,
      }}
      onClick={() => {
        onClick(label);
      }}
    >
      {label}
    </div>
  );
}

function Tooltip() {
  return (
    <div className="TooltipContainer">
      <div className="Circle">?</div>
      <div className="Tooltip">
        <div>
          <b>Docs</b> - Usage and Installation documentation.
        </div>
        <div>
          <b>Reference</b> - CRD, CLI and OpenAPI reference documentation.
        </div>
        <div>
          <b>Legacy</b> - Legacy Test/Suite/Executor documentation.
        </div>
      </div>
    </div>
  );
}
