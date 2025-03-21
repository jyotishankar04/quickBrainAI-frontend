import React, { useState, useEffect, useRef } from "react";
import "/src/components/_home/_aichatbot/style.css";
import {
  ChatBotIcon,
  ChatBotIcon2,
} from "/src/components/_home/_aichatbot/ChatBotIcon";
import { ChatForm } from "/src/components/_home/_aichatbot/ChatForm";
import { getAiResponse } from "/src/util/GeminiUtils";
import { RefreshBtn } from "/src/components/_home/_aichatbot/RefreshBtn";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

const MainChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    { role: "model", content: "Hi, how can I help you today?" },
  ]);
  const chatContainerRef = useRef(null);

  // Tracking the chat size

  const GenerateBotResponse = async (history) => {
    const formattedHistory = history.map((chat) => ({
      role: chat.role,
      content: chat.content,
    }));

    try {
      const response = await getAiResponse(
        formattedHistory[formattedHistory.length - 1].content
      );

      setChatHistory((history) =>
        history.map((chat) =>
          chat.content === "Thinking..."
            ? { role: "model", content: response }
            : chat
        )
      );
    } catch (error) {
      console.error("Error fetching bot response:", error);
    }
  };

  // Scroll to bottom when chat updates
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4">
      {/* Chatbot Toggle Button */}
      <button
        onClick={toggleChatbot}
        className="bg-emerald-500 text-white p-1 rounded-full shadow-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {isOpen ? <ChatBotIcon2 /> : <ChatBotIcon />}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-4">
          <div className="bg-white shadow-lg md:w-[500px] w-full   rounded-lg border overflow-hidden">
            <div
              className="flex flex-col"
              style={{ width: "100%", height: "100%" }}
            >
              <div className="bg-blue-500 text-white p-4 rounded-t-lg flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ChatBotIcon2 />
                  <h1 className="text-lg font-semibold">AI Chatbot</h1>
                </div>
                {/* Refresh Button */}
                <RefreshBtn setChatHistory={setChatHistory} />
              </div>

              <div
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto p-4 bg-gray-50"
              >
                {chatHistory.map((chat, index) => (
                  <div
                    key={index}
                    className={`mb-4 flex ${
                      chat.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`p-3 rounded-lg max-w-[70%] ${
                        chat.role === "user"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      <p>{chat.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <ChatForm
                setChatHistory={setChatHistory}
                chatHistory={chatHistory}
                GenerateBotResponse={GenerateBotResponse}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainChatBot;
