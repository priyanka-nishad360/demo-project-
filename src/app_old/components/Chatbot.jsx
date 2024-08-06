import { useState, useRef, useEffect } from "react";
// import { generateResponse } from "../chatbot/chatbot.js";

const SENDER = {
  USER: "user",
  BOT: "bot",
};

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      response: "Hello! How can I help you?",
      sender: SENDER.BOT,
    },
  ]);

  const messageRefs = useRef({});

  const [message, setMessage] = useState("");
  const [generating, setGenerating] = useState(false);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((open) => !open);

  const pushMessage = (message, sender = SENDER.BOT) => {
    const id = crypto.randomUUID();

    setMessages((messages) => [
      ...messages,
      {
        id,
        response: message,
        sender: sender,
      },
    ]);

    setMessage("");

    return id;
  };

  const handleGenerate = async (prompt) => {
    const id = pushMessage("...");

    try {
      setGenerating(true);
      const { message, error } = await generateResponse({ prompt });

      if (error) {
        throw new Error(error);
      }

      pushMessage(message.response);
    } catch (e) {
      console.error(e);
      pushMessage(e.message);
    } finally {
      setGenerating(false);
      setMessages((messages) => messages.filter(({ id: _id }) => _id !== id));
    }
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      pushMessage(message, SENDER.USER);

      handleGenerate(message);
    }
  };

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];

    if (lastMessage) {
      const { id, sender } = lastMessage;

      if (sender === SENDER.BOT) {
        messageRefs.current[id]?.scrollIntoView();
      }
    }
  }, [messages]);

  return (
    <div className="fixed bottom-0 right-0 z-50 md:m-4">
      <div
        className={`absolute bottom-0 right-0 z-50 bg-white shadow-lg rounded-md overflow-hidden transition-size duration-200 ${
          open ? "flex flex-col w-80 h-96" : "w-0 h-0 overflow-hidden invisible"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <h6 className="text-xl">LaxmiAI</h6>
          <button className="w-12 h-12" onClick={handleOpen}>
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path>
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto overscroll-contain">
          <ul>
            {messages.map((message) => (
              <li
                ref={(el) => {
                  messageRefs.current[message.id] = el;
                }}
                className={`px-4 py-2 ${
                  message.sender === SENDER.BOT
                    ? "bg-primary text-white rounded-bl-xl"
                    : "bg-zinc-200 text-black rounded-br-xl ml-auto"
                } w-1/2 m-4`}
                key={message.id}
              >
                {message.response}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <input
            className="w-full outline-none p-4 border-t border-solid border-gray-200"
            type="text"
            value={message}
            placeholder="Talk to LaxmiAI"
            onKeyDown={handleSubmit}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>
      <button
        onClick={handleOpen}
        className="absolute bottom-4 right-4 md:bottom-0 md:right-0 rounded-full p-4 w-16 h-16 text-white bg-primary"
        disabled={generating}
      >
        <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M2 8.99374C2 5.68349 4.67654 3 8.00066 3H15.9993C19.3134 3 22 5.69478 22 8.99374V21H8.00066C4.68659 21 2 18.3052 2 15.0063V8.99374ZM20 19V8.99374C20 6.79539 18.2049 5 15.9993 5H8.00066C5.78458 5 4 6.78458 4 8.99374V15.0063C4 17.2046 5.79512 19 8.00066 19H20ZM14 11H16V13H14V11ZM8 11H10V13H8V11Z"></path>
        </svg>
      </button>
    </div>
  );
}
