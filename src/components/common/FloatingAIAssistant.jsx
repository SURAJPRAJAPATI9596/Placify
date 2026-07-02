import React, { useState, useEffect } from "react";
import {
  FaRobot,
  FaPaperPlane,
  FaTimes,
  FaMicrophone,
  FaPaperclip,
} from "react-icons/fa";

const FloatingAIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "ai",
      content:
        "Hello! I'm Placify AI. How can I help with your placement preparation today?",
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  // Auto hide tooltip after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  // Periodic tooltip animation
  useEffect(() => {
    const interval = setInterval(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
    }, 25000);
    return () => clearInterval(interval);
  }, []);

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    setMessages((prev) => [...prev, { type: "user", content: inputValue }]);
    const userMessage = inputValue;
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[100] cursor-pointer group"
      >
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-violet-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-all duration-300"></div>

          {/* Main Button */}
          <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-3xl flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 relative">
            <FaRobot className="text-white text-4xl" />

            {/* Pulse Ring */}
            <div className="absolute inset-0 border-2 border-violet-400 rounded-3xl animate-ping opacity-30"></div>
          </div>

          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-20 right-0 bg-[var(--card-bg)] text-[var(--text-primary)] text-sm px-5 py-3 rounded-2xl shadow-xl border border-[var(--border-color)] whitespace-nowrap">
              Need placement help?
              <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[var(--card-bg)] border-r border-b border-[var(--border-color)] rotate-45"></div>
            </div>
          )}
        </div>
      </div>

      {/* AI Chat Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 z-[110] flex items-end lg:items-center justify-center">
          <div className="bg-[var(--bg-primary)] w-full lg:w-[420px] lg:max-h-[85vh] lg:rounded-3xl shadow-2xl flex flex-col h-[90vh] lg:h-auto overflow-hidden">
            {/* Chat Header */}
            <div className="border-b border-[var(--border-color)] px-6 py-5 flex items-center justify-between bg-[var(--card-bg)]">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center text-3xl">
                  🤖
                </div>
                <div>
                  <div className="font-semibold text-lg text-(--text-primary)">
                    Placify AI
                  </div>
                  <div className="text-xs text-emerald-500 flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    Always Online
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-[var(--text-primary)] hover:bg-[var(--card-bg)] p-3 rounded-2xl transition"
              >
                ✕
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-(--bg-primary) text-(--text-primary)">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-5 py-4 rounded-3xl text-sm leading-relaxed ${
                      msg.type === "user"
                        ? "bg-[var(--primary-violet)] text-white rounded-br-none"
                        : "bg-[var(--card-bg)] border border-[var(--border-color)] rounded-bl-none"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-[var(--text-primary)] opacity-70">
                  <div
                    className="w-2 h-2 bg-current rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-current rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-current rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  ></div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-5 border-t border-[var(--border-color)] bg-[var(--card-bg)]">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask anything about placements..."
                  className="flex-1 bg-[var(--bg-primary)] border border-[var(--border-color)] focus:border-violet-500 rounded-3xl px-6 py-4 outline-none text-[var(--text-primary)]"
                />
                <button
                  onClick={sendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-[var(--primary-bg)] hover:bg-[var(--secondary-violet)] text-white w-14 h-14 rounded-3xl flex items-center justify-center disabled:opacity-50 transition-all active:scale-95"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingAIAssistant;

// setTimeout(() => {
//   let response = "That's a great question! Let me help you with that.";

//   if (userMessage.toLowerCase().includes("resume")) {
//     response =
//       "I can help you optimize your resume. Would you like me to analyze it for ATS compatibility?";
//   } else if (userMessage.toLowerCase().includes("interview")) {
//     response =
//       "I can simulate mock interviews. Which company or role are you preparing for?";
//   } else if (userMessage.toLowerCase().includes("roadmap")) {
//     response =
//       "Which technology roadmap would you like to explore? I recommend Frontend or DSA for most students.";
//   }

//   setMessages((prev) => [...prev, { type: "ai", content: response }]);
//   setIsTyping(false);
// }, 1200);
