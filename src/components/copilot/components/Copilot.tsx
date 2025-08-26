import * as React from "react";
import CopilotOpener from "./CopilotOpener";
import CopilotChatWindow from "./CopilotChatWindow";
import "./Copilot.css";

const Copilot: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

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
          <CopilotChatWindow onClose={closeChat} />
        </div>
      )}
    </div>
  );
};

export default Copilot;
