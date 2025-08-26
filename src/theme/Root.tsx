import * as React from "react";
import { Copilot } from "../components/copilot";

// Default implementation, that you can customize
export default function Root({ children }) {
  return (
    <>
      {children}
      <Copilot />
    </>
  );
}
