import { BiSend } from "react-icons/bi";

const ChatBot = () => {
  const chats = [
    {
      id: 1,
      message: "Hello, how can I help you?",
      isUser: false,
    },
    {
      id: 2,
      message: "I need help with my notes",
      isUser: true,
    },
    {
      id: 3,
      message:
        "let me see if I can find something for you lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.",
      isUser: false,
    },
    {
      id: 4,
      message: "What type of notes are you looking for?",
      isUser: true,
    },
    {
      id: 5,
      message:
        "let me see if I can find something for you lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.",
      isUser: false,
    },
    {
      id: 4,
      message: "What type of notes are you looking for?",
      isUser: true,
    },
    {
      id: 5,
      message:
        "let me see if I can find something for you lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.",
      isUser: false,
    },
    {
      id: 4,
      message: "What type of notes are you looking for?",
      isUser: true,
    },
    {
      id: 5,
      message:
        "let me see if I can find something for you lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.",
      isUser: false,
    },
    {
      id: 4,
      message: "What type of notes are you looking for?",
      isUser: true,
    },
    {
      id: 5,
      message:
        "let me see if I can find something for you lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.",
      isUser: false,
    },
    {
      id: 4,
      message: "What type of notes are you looking for?",
      isUser: true,
    },
    {
      id: 5,
      message:
        "let me see if I can find something for you lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.",
      isUser: false,
    },
    {
      id: 4,
      message: "What type of notes are you looking for?",
      isUser: true,
    },
    {
      id: 5,
      message:
        "let me see if I can find something for you lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.",
      isUser: false,
    },
    {
      id: 4,
      message: "What type of notes are you looking for?",
      isUser: true,
    },
    {
      id: 5,
      message:
        "let me see if I can find something for you lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.",
      isUser: false,
    },
    {
      id: 4,
      message: "What type of notes are you looking for?",
      isUser: true,
    },
    {
      id: 5,
      message:
        "let me see if I can find something for you lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.",
      isUser: false,
    },
    {
      id: 4,
      message: "What type of notes are you looking for?",
      isUser: true,
    },
    {
      id: 5,
      message:
        "let me see if I can find something for you lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.",
      isUser: false,
    },
  ];
  return (
    <div className="w-full 2xl:h-[82vh] xl:h-[70vh] flex flex-col items-center justify-start">
      <div className="p-2 text-white flex flex-row items-center justify-between w-full bg-primary">
        <h2 className="text-base font-semibold text-gray-200">
          QuickBrain AI Assistant
        </h2>
        <select
          name=""
          id=""
          className="select select-bordered w-fit select-sm text-primary font-bold"
        >
          <option
            value="gs"
            selected
            defaultValue={true}
            className="text-primary "
          >
            Global Search
          </option>
          <option value="pos">PDF Only Search</option>
        </select>
      </div>
      <div className="flex-1 p-6 overflow-y-auto w-full ">
        {chats.map((chat, index) => {
          return (
            <div
              key={index}
              className={`${
                chat.isUser ? "flex flex-row-reverse" : ""
              } w-full flex flex-row items-center gap-2 mb-2`}
            >
              {chat.isUser ? (
                <div className="chat chat-end">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      />
                    </div>
                  </div>
                  <div className="chat-bubble">{chat.message}</div>
                </div>
              ) : (
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      />
                    </div>
                  </div>
                  <div className="w-[70%] ">{chat.message}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="w-full flex flex-row items-center justify-between p-2">
        <input type="text" className="input input-bordered w-full" />
        <button className="btn btn-primary">
          <BiSend className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
