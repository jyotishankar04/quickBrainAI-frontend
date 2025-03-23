/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import "/src/components/_home/_aichatbot/style.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChatBotIcon,
  ChatBotIcon2,
} from "/src/components/_home/_aichatbot/ChatBotIcon";
import { ChatForm } from "/src/components/_home/_aichatbot/ChatForm";
import { getAiResponse } from "/src/util/GeminiUtils";
import { RefreshBtn } from "/src/components/_home/_aichatbot/RefreshBtn";
import "react-resizable/css/styles.css";

const MainChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    { role: "model", content: "Hi, how can I help you today?" },
  ]);
  const chatContainerRef = useRef(null);

  const GenerateBotResponse = async (history) => {
    const formattedHistory = history.map((chat) => ({
      role: chat.role,
      content: chat.content,
    }));

    // Add a temporary loading message with a pulse animation
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { role: "model", content: "Generating...", isLoading: true },
    ]);

    try {
      const response = await getAiResponse(
        formattedHistory[formattedHistory.length - 1].content
      );

      let currentText = "";

      setChatHistory((prevHistory) => {
        const newHistory = [...prevHistory];
        newHistory[newHistory.length - 1] = { role: "model", content: "" };
        return newHistory;
      });

      response.split("").forEach((char, index) => {
        setTimeout(() => {
          setChatHistory((prevHistory) => {
            const newHistory = [...prevHistory];
            newHistory[newHistory.length - 1] = {
              role: "model",
              content: currentText + char,
            };
            return newHistory;
          });
          currentText += char;
        }, index * 10);
      });
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
    <div className="fixed bottom-4 right-4 z-50">
      {/* Completely redesigned chatbot button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.button
          onClick={toggleChatbot}
          className="group relative flex items-center justify-center shadow-lg rounded-2xl focus:outline-none overflow-hidden"
          whileHover={{ scale: 1.03 }}
          whileTap={{
            scale: 0.97,
            boxShadow: "0 0 10px 2px rgba(59, 130, 246, 0.5)",
          }}
        >
          {/* Main rectangular button with black background and highly rounded corners */}
          <motion.div
            className="bg-black rounded-2xl p-3 overflow-hidden relative flex items-center"
            initial={{ backgroundColor: "#000000" }}
            whileHover={{ backgroundColor: "#111111" }}
            whileTap={{
              backgroundColor: "#0a0a0a",
              boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative z-10 flex items-center space-x-3">
              <motion.div
                whileTap={{
                  rotate: [0, -10, 10, -5, 5, 0],
                  transition: { duration: 0.5 },
                }}
              >
                <img
                  src="../../../../public/chatBot.png"
                  alt="QuickBrain AI"
                  className="w-12 h-12 object-contain"
                />
              </motion.div>
              <div className="text-white w-32">
                <div className="h-7 relative">
                  <motion.h3
                    className="font-bold text-lg absolute"
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: [1, 0], y: [0, -10] }}
                    transition={{
                      duration: 1,
                      repeatDelay: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    Need Help?
                  </motion.h3>
                  <motion.h3
                    className="font-bold text-lg absolute"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: [0, 1], y: [10, 0] }}
                    transition={{
                      duration: 1,
                      repeatDelay: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    QuickBrain AI
                  </motion.h3>
                </div>
                <div className="flex items-center mt-1">
                  <motion.span
                    className="h-2 w-2 bg-green-400 rounded-full mr-2"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  />
                  <span className="text-xs text-white text-opacity-90">
                    We are online
                  </span>
                </div>
              </div>
            </div>

            {/* Subtle animated highlight */}
            <motion.div
              className="absolute top-0 left-0 right-0 bottom-0 z-0"
              initial={{ opacity: 0 }}
              animate={{
                background:
                  "linear-gradient(45deg, rgba(0,0,0,0) 40%, rgba(255,255,255,0.1) 50%, rgba(0,0,0,0) 60%)",
                left: ["-100%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />

            {/* Click ripple effect */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl pointer-events-none">
              {isOpen && (
                <motion.div
                  className="absolute bg-blue-500 rounded-full opacity-0"
                  initial={{
                    opacity: 0.3,
                    scale: 0,
                    x: "-50%",
                    y: "-50%",
                    top: "50%",
                    left: "50%",
                  }}
                  animate={{
                    opacity: 0,
                    scale: 4,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  onAnimationComplete={() => {}}
                />
              )}
            </div>
          </motion.div>

          {/* Active indicator dot when chat is open */}
          <motion.div
            className="absolute -top-1 -right-1 bg-blue-500 rounded-full z-20 flex items-center justify-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: isOpen ? 1 : 0,
              opacity: isOpen ? 1 : 0,
              width: isOpen ? "16px" : "0px",
              height: isOpen ? "16px" : "0px",
            }}
            transition={{ duration: 0.3 }}
          >
            {isOpen && (
              <motion.div
                className="w-2 h-2 bg-white rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, duration: 0.2 }}
              />
            )}
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-4"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="bg-white dark:bg-gray-800 w-[500px] h-[700px] shadow-xl rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div
                className="flex flex-col"
                style={{ width: "100%", height: "100%" }}
              >
                <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-4 rounded-t-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-white bg-opacity-20 p-2 aspect-square flex justify-center items-center rounded-full">
                      <img
                        src="../../../../public/chatBot.png"
                        alt="QuickBrain AI Logo"
                        className="w-10 h-auto"
                      />
                    </div>
                    <div>
                      <h1 className="text-lg font-bold">QuickBrain AI</h1>
                      <p className="text-xs text-white text-opacity-80">
                        by QuickBrain AI Team.
                      </p>
                    </div>
                  </div>
                  {/* Refresh Button */}
                  <RefreshBtn setChatHistory={setChatHistory} />
                </div>

                <div
                  ref={chatContainerRef}
                  className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900"
                >
                  {chatHistory.map((chat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: chat.role === "model" ? 0.2 : index * 0.1,
                      }}
                      className={`mb-4 flex ${
                        chat.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <motion.div
                        className={`p-3 rounded-lg max-w-[70%] ${
                          chat.role === "user"
                            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                            : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700"
                        }`}
                        initial={
                          chat.role === "model"
                            ? { scale: 0.8, opacity: 0 }
                            : {}
                        }
                        animate={
                          chat.role === "model" ? { scale: 1, opacity: 1 } : {}
                        }
                        transition={
                          chat.role === "model"
                            ? { duration: 0.3, ease: "easeOut" }
                            : {}
                        }
                      >
                        <p>{chat.content}</p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 text-white bg-white dark:bg-gray-800 p-3">
                  <ChatForm
                    setChatHistory={setChatHistory}
                    GenerateBotResponse={GenerateBotResponse}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainChatBot;
