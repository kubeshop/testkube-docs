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
        <div className="SearchFitlerTitle">Select documentation:</div>
        <SearchOption
          label="Latest"
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
          label="API Reference"
          optionKey="indexPrefix: reference-doc"
          currentIndexPrefix={currentIndexPrefix}
          onClick={(label) => {
            setCurrentOption(label);
            onOptionClick("indexPrefix: reference-doc");
          }}
        />

        <SearchOption
          label="v1"
          optionKey="indexPrefix: legacy-doc"
          currentIndexPrefix={currentIndexPrefix}
          onClick={(label) => {
            setCurrentOption(label);
            onOptionClick("indexPrefix: legacy-doc");
          }}
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
