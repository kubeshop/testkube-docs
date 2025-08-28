import { FC, useState } from "react";
import CopilotOpener from "./CopilotOpener";
import DocsSearchWindow from "./DocsSearchWindow";
import { useResize } from "../hooks/useResize";
import "./Copilot.css";

const Copilot: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Use the custom resize hook with options for a bottom-anchored chat
  const { size: chatSize, elementRef: chatRef, handleMouseDown } = useResize({
    initialWidth: 380,
    initialHeight: 500,
    minWidth: 320,
    maxWidth: 800,
    minHeight: 300,
    maxHeight: window.innerHeight - 100,
    invertY: true, // Invert Y for bottom-anchored element
  });

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
        <div
          ref={chatRef}
          className="copilot-chat-wrapper"
          style={{
            width: `${chatSize.width}px`,
            height: `${chatSize.height}px`,
          }}
        >
          {/* Resize Handle */}
          <div
            className="copilot-resize-handle"
            onMouseDown={handleMouseDown}
            title="Drag to resize"
          />
          <DocsSearchWindow onClose={closeChat} />
        </div>
      )}
    </div>
  );
};

export default Copilot;
