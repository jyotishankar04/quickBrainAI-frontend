import React, { useRef } from "react";
import { BiSend } from "react-icons/bi";

export const ChatForm = ({ setChatHistory, GenerateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    inputRef.current.value = "";

    // Immediately update chat history with the user's message
    setChatHistory((prevHistory) => {
      const updatedHistory = [
        ...prevHistory,
        { role: "user", content: userMessage },
      ];

      // Call the function to generate the bot's response
      setTimeout(() => {
        GenerateBotResponse(updatedHistory);
      }, 600);

      return updatedHistory;
    });
  };

  return (
    <div className="p-4 border-t border-gray-200">
      <div className="flex gap-2">
        <form
          action="#"
          className="flex w-full gap-2"
          onSubmit={handleFormSubmit}
        >
          <input
            type="text"
            ref={inputRef}
            placeholder="Type your message..."
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 p-3 rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <BiSend size={20} className="text-white" />
          </button>
        </form>
      </div>
    </div>
  );
};
