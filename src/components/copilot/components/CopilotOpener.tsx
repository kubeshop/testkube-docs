import { FC } from "react";
import IconRobot from "./IconRobot";
import "./CopilotOpener.css";

interface CopilotOpenerProps {
  onClick: () => void;
}

const CopilotOpener: FC<CopilotOpenerProps> = ({ onClick }) => {
  return (
    <button className="copilot-opener" onClick={onClick} aria-label="Open Documentation Search">
      <IconRobot width={20} height={20} />
      <span className="copilot-opener-label">Ask Docs</span>
    </button>
  );
};

export default CopilotOpener;
