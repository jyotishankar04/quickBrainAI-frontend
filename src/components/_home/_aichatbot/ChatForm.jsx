import React, { useRef } from "react";


export const ChatForm = ({ chatHistory, setChatHistory, GenerateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    inputRef.current.value = "";

    // Immediately update chat history with the user's message
    setChatHistory((history) => [
      ...history,
      { role: "user", content: userMessage },
    ]);

    // Simulate bot response
    setTimeout(() => {
      setChatHistory((history) => [
        ...history,
        { role: "model", content: "Thinking..." },
      ]);

      // calling the functiob which generate the bot response
      GenerateBotResponse([...chatHistory, { role: "user", content: userMessage }]);
    }, 600);
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
            onClick={handleFormSubmit}
            className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="white" fill="none">
    <path d="M12 8L12 16M12 8C11.2998 8 9.99153 9.9943 9.5 10.5M12 8C12.7002 8 14.0085 9.9943 14.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" />
</svg>
          </button>
        </form>
      </div>
    </div>
  );
};
