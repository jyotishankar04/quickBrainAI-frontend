import React from "react";

export const RefreshBtn = ({ setChatHistory }) => {
  const refreshChat = () => {
    setChatHistory([
      { role: "model", content: "Hi, how can I help you today?" },
    ]);
  };

  return (
    <button
      onClick={refreshChat}
      className=" px-3 py-1 rounded-full text-white hover:scale-110"
    >
       <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        color="white"
        fill="none"
      >
        <path
          d="M20.5 5.5H9.5C5.78672 5.5 3 8.18503 3 12"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.5 18.5H14.5C18.2133 18.5 21 15.815 21 12"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18.5 3C18.5 3 21 4.84122 21 5.50002C21 6.15882 18.5 8 18.5 8"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.49998 16C5.49998 16 3.00001 17.8412 3 18.5C2.99999 19.1588 5.5 21 5.5 21"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
};
