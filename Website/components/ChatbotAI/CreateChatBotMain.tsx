// components/ChatbotAI/CreateChatBotMain.tsx
"use client";

import { useState } from "react";
import CreateChatbot from "./CreateChatbot";
import ChatbotIcon from "./ChatBotIcon";

export default function CreateChatBotMain() {
  const [isIconClicked, setIsIconClicked] = useState(false);
  const [showLoader, setShowLoader] = useState(true); // Add state for loader

  return (
    <div className="fixed bottom-5 right-5 z-50 font-nunito">
      <CreateChatbot
        isIconClicked={isIconClicked}
        setIsIconClicked={setIsIconClicked}
        showLoader={showLoader}
      />
      <ChatbotIcon
        setIsIconClicked={setIsIconClicked}
        isIconClicked={isIconClicked}
        setShowLoader={setShowLoader}
      />
    </div>
  );
}
