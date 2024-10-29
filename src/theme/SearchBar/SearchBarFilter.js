import { useMemo } from "react";
import "./SearchbarFilter.css";

export default function SearchBarFilter({
  computedFacetFilters,
  setComputedFacetFilters,
}) {
  const currentIndexPrefix = useMemo(() => {
    return computedFacetFilters.find((filter) =>
      filter[0].startsWith("indexPrefix")
    );
  }, [computedFacetFilters]);

  const onOptionClick = (value) => {
    setComputedFacetFilters((prev) => {
      return prev.map((filter) => {
        if (filter[0].startsWith("indexPrefix")) {
          return value;
        }
        return filter;
      });
    });
  };

  return (
    <div className="SearchFilterContainer">
      <div className="SearchFilter">
        <div style={{ fontSize: 18, lineHeight: "34px" }}>
          Select where to search?
        </div>
        <SearchOption
          label="Main"
          optionKey="indexPrefix: -reference-doc"
          currentIndexPrefix={currentIndexPrefix}
          onClick={() =>
            onOptionClick([
              "indexPrefix: -reference-doc",
              "indexPrefix: -legacy-doc",
            ])
          }
        />
        <SearchOption
          label="Reference"
          optionKey="indexPrefix: reference-doc"
          currentIndexPrefix={currentIndexPrefix}
          onClick={() => onOptionClick(["indexPrefix: reference-doc"])}
        />

        <SearchOption
          label="Legacy"
          optionKey="indexPrefix: legacy-doc"
          currentIndexPrefix={currentIndexPrefix}
          onClick={() => onOptionClick(["indexPrefix: legacy-doc"])}
        />
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
          currentIndexPrefix[0] === optionKey
            ? "var(--ifm-color-primary)"
            : "var(--ifm-color-third)"
        }`,
      }}
      onClick={onClick}
    >
      {label}
    </div>
  );
}
