import * as React from "react";
import IconRobot from "./IconRobot";
import "./CopilotOpener.css";

interface CopilotOpenerProps {
  onClick: () => void;
}

const CopilotOpener: React.FC<CopilotOpenerProps> = ({ onClick }) => {
  return (
    <button className="copilot-opener" onClick={onClick} aria-label="Open AI Assistant">
      <IconRobot width={20} height={20} />
      <span className="copilot-opener-label">AI Assistant</span>
    </button>
  );
};

export default CopilotOpener;
