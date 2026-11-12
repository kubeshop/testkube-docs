import React from "react";
import Content from "@theme-original/DocItem/Content";
import PageActions from "@site/src/components/PageActions";

// Adds the "Copy page" menu to the right of the page title.
export default function ContentWrapper(props) {
  return (
    <>
      <PageActions />
      <Content {...props} />
    </>
  );
}
