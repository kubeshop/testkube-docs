import { useMemo, useState } from "react";

export default function SearchBarFilter({
  computedFacetFilters,
  setComputedFacetFilters,
}) {
  const currentIndexPrefix = useMemo(() => {
    return computedFacetFilters.find((filter) =>
      filter[0].startsWith("indexPrefix")
    );
  }, [computedFacetFilters]);

  return (
    <div
      style={{
        height: "60px",
        width: "100vw",
        top: 0,
        left: 0,
        position: "fixed",
        zIndex: 202,
      }}
    >
      <div
        style={{
          margin: "16px auto auto",
          maxWidth: 560,
          display: "flex",
          flexDirection: "row",
          gap: 8,
        }}
      >
        <SearchOption
          label="Reference"
          optionKey="indexPrefix: reference-doc"
          currentIndexPrefix={currentIndexPrefix}
          onClick={() => {
            setComputedFacetFilters((prev) => {
              return prev.map((filter) => {
                if (filter[0].startsWith("indexPrefix")) {
                  return ["indexPrefix: reference-doc"];
                }
                return filter;
              });
            });
          }}
        />
        <SearchOption
          label="Workflows"
          optionKey="indexPrefix: workflows-doc"
          currentIndexPrefix={currentIndexPrefix}
          onClick={() => {
            setComputedFacetFilters((prev) => {
              return prev.map((filter) => {
                if (filter[0].startsWith("indexPrefix")) {
                  return ["indexPrefix: workflows-doc"];
                }
                return filter;
              });
            });
          }}
        />
        <SearchOption
          label="Legacy"
          optionKey="indexPrefix: legacy-doc"
          currentIndexPrefix={currentIndexPrefix}
          onClick={() => {
            setComputedFacetFilters((prev) => {
              return prev.map((filter) => {
                if (filter[0].startsWith("indexPrefix")) {
                  return ["indexPrefix: legacy-doc"];
                }
                return filter;
              });
            });
          }}
        />
      </div>
    </div>
  );
}

function SearchOption({ label, onClick, optionKey, currentIndexPrefix }) {
  console.log("currentIndexPrefix", currentIndexPrefix);
  console.log("key", optionKey);
  return (
    <div
      style={{
        border: "1px solid",
        borderColor: "transparent",
        color: "rgb(226, 232, 240)",
        background: `${
          currentIndexPrefix[0] === optionKey
            ? "rgb(129, 140, 248)"
            : "rgb(30, 41, 59)"
        }`,
        borderRadius: 4,
        minWidth: 50,
        display: "flex",
        justifyContent: "center",
        padding: "4px 8px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {label}
    </div>
  );
}
