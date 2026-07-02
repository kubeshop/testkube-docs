import React from "react";
import styles from "./styles.module.css";

const COMMERCIAL_CLASS = "sidebar-commercial-category";
const TOOLTIP =
  "This functionality is only available in the Testkube Commercial offering";

export function isCommercialItem(className) {
  return (
    typeof className === "string" &&
    className.split(/\s+/).includes(COMMERCIAL_CLASS)
  );
}

export default function CommercialBadge() {
  return (
    <span
      className={styles.commercialBadge}
      role="img"
      aria-label="Testkube Commercial feature"
      data-tooltip={TOOLTIP}
    />
  );
}
