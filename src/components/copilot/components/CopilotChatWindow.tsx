import * as React from "react";
import "./CopilotChatWindow.css";

interface Message {
  id: string;
  content: string;
  type: "user" | "bot";
  timestamp: Date;
}

interface CopilotChatWindowProps {
  onClose: () => void;
}

const CopilotChatWindow: React.FC<CopilotChatWindowProps> = ({ onClose }) => {
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "1",
      content: "👋 Hi! I'm your AI assistant. How can I help you with the documentation today?",
      type: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const hardcodedResponses = [
    "I'd be happy to help you with that! Let me search through the documentation for relevant information.",
    "That's a great question! Based on the Testkube documentation, here's what I can tell you...",
    "I understand you're looking for information about that topic. Here are the key points from our docs:",
    "Let me help you with that. According to our latest documentation...",
    "Great question! I can see you're trying to understand this feature better.",
    "I'm here to help! That's actually covered in several sections of our documentation.",
    "Excellent question! This is a common topic that many users ask about.",
  ];

  const getRandomResponse = () => {
    return hardcodedResponses[Math.floor(Math.random() * hardcodedResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      type: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: getRandomResponse(),
        type: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="copilot-chat">
      <div className="copilot-header">
        <h3>AI Assistant</h3>
        <button className="copilot-close" onClick={onClose} aria-label="Close AI Assistant">
          ×
        </button>
      </div>
      <div className="copilot-content">
        <div className="copilot-messages">
          {messages.map((message) => (
            <div key={message.id} className={`copilot-message ${message.type}`}>
              <p>{message.content}</p>
            </div>
          ))}
          {isTyping && (
            <div className="copilot-message bot typing">
              <p>
                <span className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                AI is thinking...
              </p>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="copilot-input-area">
          <input
            type="text"
            placeholder="Ask me anything about the docs..."
            className="copilot-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isTyping}
          />
          <button className="copilot-send" onClick={handleSendMessage} disabled={!inputValue.trim() || isTyping}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default CopilotChatWindow;
