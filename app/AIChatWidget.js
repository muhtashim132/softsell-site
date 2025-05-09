"use client";

import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import config from "./ChatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

const AIChatWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 p-4 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-yellow-400 transition-all"
      >
        Chat
      </button>

      {open && (
        <div className="fixed bottom-20 right-4 w-80">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </>
  );
};

export default AIChatWidget;
