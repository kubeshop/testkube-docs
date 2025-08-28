import { FC, useState } from "react";
import CopilotOpener from "./CopilotOpener";
import DocsSearchWindow from "./DocsSearchWindow";
import "./Copilot.css";

const Copilot: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  return (
    <div className="copilot-container">
      {!isOpen ? (
        <CopilotOpener onClick={toggleChat} />
      ) : (
        <div className="copilot-chat-wrapper">
          <DocsSearchWindow onClose={closeChat} />
        </div>
      )}
    </div>
  );
};

export default Copilot;
