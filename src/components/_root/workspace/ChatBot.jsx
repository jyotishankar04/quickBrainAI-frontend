import { useQueryClient } from "@tanstack/react-query";
import { useState, useEffect, useRef } from "react";
import { BiSend } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { getWorkspaceGlobalAiResponse } from "../../../util/GeminiUtils.js";
import MarkdownMessage from "./MarkdownMessage";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { id: 1, message: "Hello, how can I help you?", isUser: false },
  ]);
  const [input, setInput] = useState("");
  const [searchType, setSearchType] = useState("gs");
  const [loading, setLoading] = useState(false);
  const { noteId } = useParams();
  const queryClient = useQueryClient();
  const note = queryClient.getQueryData(["note", noteId]);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const simulateStreaming = (fullMessage) => {
    let words = fullMessage.split(" ");
    let currentMessage = "";
    let index = 0;

    const interval = setInterval(() => {
      if (index < words.length) {
        currentMessage += (index > 0 ? " " : "") + words[index];
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === prev.length ? { ...msg, message: currentMessage } : msg
          )
        );
        index++;
      } else {
        clearInterval(interval);
        setLoading(false);
      }
    }, 10); // Adjust speed for faster/slower streaming
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessage = {
      id: messages.length + 1,
      message: input,
      isUser: true,
    };
    setMessages([...messages, newMessage]);
    setInput("");
    setLoading(true);

    if (searchType === "gs") {
      try {
        setMessages((prev) => [
          ...prev,
          { id: prev.length + 1, message: "", isUser: false, isLoading: true }, // Loading state
        ]);
        const response = await getWorkspaceGlobalAiResponse(input);
        setMessages((prev) =>
          prev.map((msg) =>
            msg.isLoading ? { ...msg, message: "", isLoading: false } : msg
          )
        );
        simulateStreaming(response);
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            message: "⚠️ Error fetching AI response.",
            isUser: false,
          },
        ]);
        setLoading(false);
      }
    } else {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          message: "PDF Only Search is not available yet.",
          isUser: false,
        },
      ]);
      setLoading(false);
    }
  };

  return (
    <div className="w-full 2xl:h-[82vh] xl:h-[70vh] flex flex-col items-center justify-start">
      <div className="p-2 text-white flex flex-row items-center justify-between w-full bg-primary">
        <h2 className="text-base font-semibold text-gray-200">
          QuickBrain AI Assistant
        </h2>
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="select select-bordered w-fit select-sm text-primary font-bold"
        >
          <option value="gs">Global Search</option>
          <option value="pos" disabled={!note?.data?.files?.length}>
            PDF Only Search
          </option>
        </select>
      </div>

      <div
        ref={chatContainerRef}
        className="flex-1 p-6 overflow-y-auto w-full"
        style={{ maxHeight: "calc(100vh - 200px)" }}
      >
        {messages.map((chat) => (
          <div
            key={chat.id}
            className={`w-full flex items-center gap-2 mb-2 ${
              chat.isUser ? "flex-row-reverse" : ""
            }`}
          >
            <div
              className={`chat  ${chat.isUser ? "chat-end " : "chat-start"}`}
            >
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="User Avatar"
                    src={
                      chat.isUser
                        ? "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        : "../../../../public/chatBot.png"
                    }
                  />
                </div>
              </div>
              {chat.isLoading ? (
                <div className="flex items-center gap-2">
                  <span className="loading loading-spinner"></span>
                  <span className="italic text-gray-400">Thinking...</span>
                </div>
              ) : chat.isUser ? (
                <div className="chat-bubble chat-bubble-info">
                  {chat.message}
                </div>
              ) : (
                <MarkdownMessage content={chat.message} />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-row gap-2 items-center justify-between p-2">
        <input
          type="text"
          className="input input-bordered w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type your message..."
          disabled={loading}
        />
        <button
          className="btn btn-primary"
          onClick={sendMessage}
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <BiSend className="text-2xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
