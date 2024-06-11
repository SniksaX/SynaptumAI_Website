"use client";

import React, { useEffect, useState } from "react";
import useTextScramble from "@/utils/useTextScramble";
import { useRouter } from "next/navigation";

export const ChatBotSection1: React.FC = () => {
  const [buttonVisible, setButtonVisible] = useState(false);
  const router = useRouter();
  const { displayText: introText, isComplete: isIntroComplete } =
    useTextScramble("AI-Chatbot Creation", 20);
  const { displayText: headlineText, isComplete: isHeadlineComplete } =
    useTextScramble("GET THE MOST POWERFUL CHATBOTS ON THE MARKET", 30);

  useEffect(() => {
    if (isHeadlineComplete) {
      setButtonVisible(true);
    }
  }, [isHeadlineComplete]);

  return (
    <section className="items-center shadow-2xl w-full">
      <div className="text-white py-20 px-4 md:py-40 md:px-20 xl:py-80 xl:px-40">
        <div className="font-bold">
          <p
            className={`text-base md:text-lg font-outfit text-transition ${
              isIntroComplete ? "text-transition-active" : ""
            }`}
          >
            {introText}
          </p>
          <p
            className={`text-2xl md:text-6xl font-Oswald text-[#41a53d] lg:whitespace-nowrap`}
          >
            {headlineText}
          </p>
          <div
            className={`line-transition ${
              isHeadlineComplete ? "line-transition-active" : ""
            }`}
          ></div>
        </div>
        <div className="flex justify-center md:justify-end mt-10">
          <button
            className={`bg-black bg-opacity-70 text-[#41a53d] hover:text-white hover:bg-[#173d16] hover: border rounded-t-3xl rounded-r-3xl text-lg md:text-2xl xl:text-4xl border-[#41a53d] px-6 py-2 transition-opacity duration-1000 ${
              buttonVisible ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => router.push("/pricing")}
          >
            Start now
          </button>
        </div>
      </div>
    </section>
  );
};
