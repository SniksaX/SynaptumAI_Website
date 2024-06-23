// components/ChatbotAI/ChatBotIcon.tsx
"use client";

import { useCookies } from "react-cookie";
import { MessageIcon } from "@/utils/IconsSvg";
import { GetSession } from "@/lib/requests";

interface ChatbotIconProps {
  setIsIconClicked: React.Dispatch<React.SetStateAction<boolean>>;
  isIconClicked: boolean;
  setShowLoader: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ChatbotIcon({
  isIconClicked,
  setIsIconClicked,
  setShowLoader,
}: ChatbotIconProps) {
  const [cookies, setCookie] = useCookies(["chatbotSessionId"]);

  const ChatSession = async () => {
    if (!cookies.chatbotSessionId) {
      setShowLoader(true);
      const response = await GetSession();

      if (response.status === 200) {
        setTimeout(() => {
          setShowLoader(false);
        }, 2000);
      } else {
        setShowLoader(false);
      }
    }
  };

  const handleClick = async () => {
    if (!isIconClicked) {
      console.log(cookies);
      await ChatSession();
    }
    setIsIconClicked(!isIconClicked);
  };

  return (
    <button
      className="fixed bottom-5 right-5 w-16 h-16 flex justify-center items-center cursor-pointer z-50 animate-pulse"
      onClick={handleClick}
    >
      <MessageIcon />
    </button>
  );
}
