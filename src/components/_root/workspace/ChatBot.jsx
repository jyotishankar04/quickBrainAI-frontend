/* eslint-disable no-unused-vars */
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { BiSend } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { getWorkspaceGlobalAiResponse } from "../../../util/GeminiUtils.js";
import MarkdownMessage from "./MarkdownMessage";
import {
  useGetChats,
  useGetWorkspacePDFChatBotResponse,
} from "../../../lib/query/react-query.js";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const ChatMessages = ({ messages, botImage }) => {
  return (
    <>
      {messages.map((chat, index) => (
        <div
          key={index}
          className={`w-full flex items-center gap-2 mb-2 ${
            chat.sender === "USER" ? "flex-row-reverse" : ""
          }`}
        >
          <div
            className={`chat ${
              chat.sender === "USER" ? "chat-end" : "chat-start"
            }`}
          >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Avatar"
                  src={
                    chat.sender === "USER"
                      ? "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      : botImage
                  }
                />
              </div>
            </div>
            <div className={`${chat.sender == "USER" ? "chat-bubble" : ""}`}>
              <MarkdownMessage content={chat.content} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const ChatBot = () => {
  const { register, handleSubmit, reset } = useForm();
  const { noteId } = useParams();
  const queryClient = useQueryClient();
  const note = queryClient.getQueryData(["note", noteId]);
  const [searchType, setSearchType] = useState("gs");
  const [isLoading, setIsLoading] = useState(false);

  const {
    data: noteChats,
    isPending: isChatsPending,
    isError: isChatsError,
    error: chatError,
    isSuccess: isChatsSuccess,
  } = useGetChats(noteId);

  const chatContainerRef = useRef(null);
  const messagesEndRef = useRef(null);

  const {
    mutateAsync: getWorkspacePDFChatBotResponse,
    isPending: isPdfLoading,
  } = useGetWorkspacePDFChatBotResponse();

  const [globalMessages, setGlobalMessages] = useState([
    { content: "Hello, how can I help you?", sender: "AI" },
  ]);
  const [pdfMessages, setPdfMessages] = useState([]);

  useEffect(() => {
    if (isChatsSuccess) {
      if (noteChats.data?.messages?.length > 0) {
        setPdfMessages(
          noteChats.data.messages.map((chat) => ({
            content: chat.content,
            sender: chat.sender,
          }))
        );
      } else {
        setPdfMessages([
          {
            content:
              "Hey there! I am QuickBrain AI, your personal assistant. I can help you with your notes. Just ask me anything related to your notes.",
            sender: "AI",
          },
        ]);
      }
    }
  }, [isChatsSuccess, noteChats]);

  useEffect(() => {
    if (isChatsError) {
      setPdfMessages([
        {
          content:
            "Hey there! I am QuickBrain AI, your personal assistant. I can help you with your notes. Just ask me anything related to your notes.",
          sender: "AI",
        },
      ]);
    }
  }, [isChatsError, chatError]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [globalMessages, pdfMessages]);

  const handleGlobalResponse = async (input) => {
    try {
      const response = await getWorkspaceGlobalAiResponse(input);
      return response;
    } catch (error) {
      console.error("Global chat error:", error);
      throw error;
    }
  };

  const handlePdfResponse = async (input) => {
    if (!note?.data?.files?.length) {
      throw new Error("No PDF files found in this note");
    }

    try {
      const response = await getWorkspacePDFChatBotResponse({
        noteId,
        question: input,
      });
      return response.data[1].content;
    } catch (error) {
      console.error("PDF chat error:", error);
      throw error;
    }
  };

  const sendMessage = async (data) => {
    const input = data.message.trim();
    if (!input) return;

    reset();
    setIsLoading(true);

    try {
      if (searchType === "gs") {
        // Add user message
        setGlobalMessages((prev) => [
          ...prev,
          { content: input, sender: "USER" },
        ]);

        // Get and add AI response
        const response = await handleGlobalResponse(input);
        setGlobalMessages((prev) => [
          ...prev,
          { content: response, sender: "AI" },
        ]);
      } else {
        // Add user message
        setPdfMessages((prev) => [...prev, { content: input, sender: "USER" }]);

        // Get and add AI response
        const response = await handlePdfResponse(input);
        setPdfMessages((prev) => [
          ...prev,
          { content: response, sender: "AI" },
        ]);

        // Update query cache
        queryClient.setQueryData(["chats", noteId], (oldData) => {
          const existingChats = oldData?.data?.messages || [];
          return {
            ...oldData,
            data: {
              ...oldData.data,
              messages: [
                ...existingChats,
                { content: input, sender: "USER" },
                { content: response, sender: "AI" },
              ],
            },
          };
        });
      }
    } catch (error) {
      toast.error(error.message || "Failed to process your message");

      // Add error message
      const errorMessage = {
        content: "Sorry, I encountered an error. Please try again.",
        sender: "AI",
      };

      if (searchType === "gs") {
        setGlobalMessages((prev) => [...prev, errorMessage]);
      } else {
        setPdfMessages((prev) => [...prev, errorMessage]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isChatsPending) {
    return (
      <div className="flex justify-center items-center h-full">
        Loading chat history...
      </div>
    );
  }

  const currentMessages = searchType === "gs" ? globalMessages : pdfMessages;
  const hasPDFFiles = note?.data?.files?.length > 0;

  return (
    <div className="w-full 2xl:h-[82vh] xl:h-[70vh] flex flex-col bg-base-100 rounded-lg border border-base-300">
      <div className="p-2 text-white flex justify-between bg-primary rounded-t-lg">
        <h2 className="text-base font-semibold text-gray-200">
          QuickBrain AI Assistant
        </h2>
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="select select-bordered w-fit select-sm text-primary font-bold"
          disabled={isLoading}
        >
          <option value="gs">Global Search</option>
          <option value="pos" disabled={!hasPDFFiles}>
            PDF Only Search
          </option>
        </select>
      </div>

      <div
        ref={chatContainerRef}
        className="flex-1 p-6 overflow-y-auto w-full"
        style={{ maxHeight: "calc(100vh - 200px)" }}
      >
        <ChatMessages messages={currentMessages} botImage="/chatBot.png" />
        {isLoading && (
          <div className="flex justify-start items-center mt-4 gap-2">
            <span className="avatar">
              <div className="w-8 h-8 mask mask-squircle">
                <img src="/chatBot.png" alt="ChatBot" />
              </div>
            </span>
            <span className="loading loading-spinner"></span>{" "}
            <span>Thinking...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={handleSubmit(sendMessage)}
        className="w-full flex gap-2 items-center p-4 border-t border-base-300"
      >
        <input
          type="text"
          className="input input-bordered w-full"
          {...register("message")}
          placeholder="Type your message..."
          disabled={isLoading}
        />
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <BiSend className="text-2xl" />
          )}
        </button>
      </form>
    </div>
  );
};

export default ChatBot;
