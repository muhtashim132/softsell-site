// "use client";
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "SoftSellBot",
  initialMessages: [
    createChatBotMessage("Hi! How can I help you today?"),
    createChatBotMessage("You can ask things like 'How do I sell my license?'"),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#facc15",
    },
    chatButton: {
      backgroundColor: "#eab308",
    },
  },
};

export default config;
