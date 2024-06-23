// components/ChatbotAI/CreateChatbot.tsx
"use client";

import { useState, useEffect } from "react";
import DonutLoader from "./CreateChatBotLoader"; // Import the DonutLoader
import ChatMessages from "./CreateChatBotMessages";

interface ChatbotProps {
  isIconClicked: boolean;
  setIsIconClicked: React.Dispatch<React.SetStateAction<boolean>>;
  showLoader: boolean;
}

export default function CreateChatbot({
  isIconClicked,
  showLoader,
}: ChatbotProps) {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );

  if (!isIconClicked) return null;

  return (
    <div className="w-96 min-h-[600px] border-[#4e8c3b] border max-h-[600px] h-5/6 md:h-4/5 shadow-2xl rounded-3xl flex flex-col backdrop-blur-sm relative m-12">
      <div className="bg-[#2a4223] bg-opacity-50 rounded-t-3xl">
        <div className="flex flex-col text-center justify-center font-bold text-xl mt-6 mb-6">
          AI Assistant
        </div>
        <div className="flex flex-col text-center justify-center text-sm font-bold text-gray-500"></div>
        <div className="pt-1" />
      </div>
      {showLoader && (
        <div className="flex flex-col justify-center items-center h-screen text-green-200 bg-[#3d6132] bg-opacity-50 rounded-b-3xl">
          <DonutLoader />
          Loading...
        </div>
      )}
      {!showLoader && (
        <ChatMessages messages={messages} setMessages={setMessages} />
      )}
    </div>
  );
}
