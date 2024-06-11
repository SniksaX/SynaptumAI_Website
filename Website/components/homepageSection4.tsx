"use client";

import React, { useEffect, useState, useRef } from "react";
import useTextScramble from "@/utils/useTextScramble";
import { useRouter } from "next/navigation";

export const HomePageSection4: React.FC = () => {
  const [introTextStarted, setIntroTextStarted] = useState(false);
  const [headlineTextStarted, setHeadlineTextStarted] = useState(false);
  const router = useRouter();
  const refContainer = useRef(null);

  const { displayText: introText, isComplete: isIntroComplete } =
    useTextScramble(introTextStarted ? "SynaptumAI " : "", 20);
  const { displayText: headlineText, isComplete: isHeadlineComplete } =
    useTextScramble(
      headlineTextStarted
        ? "GET STARTED NOW AND LAVERAGE THE POWER OF AI."
        : "",
      30
    );

  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIntroTextStarted(true);
            setHeadlineTextStarted(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (refContainer.current) {
      observer.observe(refContainer.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isHeadlineComplete) {
      setButtonVisible(true);
    }
  }, [isHeadlineComplete]);

  return (
    <section
      ref={refContainer}
      className="items-center shadow-2xl w-full pb-20 md:pb-40 xl:pb-40"
    >
      <h1 className="flex flex-col items-center text-4xl sm:text-5xl md:text-6xl lg:text-9xl pb-4 text-black font-bold">
        START NOW
      </h1>
      <div className="text-white py-10 md:py-20 xl:py-40 px-4 md:px-20 xl:px-40 ">
        <div className="font-bold text-center md:text-left">
          <p
            className={`text-base  md:text-lg text-transition ${
              isIntroComplete ? "text-transition-active" : ""
            }`}
          >
            {introText}
          </p>
          <p
            className={`text-2xl md:text-4xl xl:text-6xl font-Oswald text-[#41a53d] lg:whitespace-nowrap`}
          >
            {headlineText}
          </p>
          <div
            className={`line-transition ${
              isHeadlineComplete ? "line-transition-active" : ""
            }`}
          ></div>
        </div>
        <div className="flex justify-center  md:justify-end mt-10">
          <button
            className={`bg-black bg-opacity-70  text-[#41a53d] hover:text-white hover:bg-[#173d16] hover: border rounded-t-3xl rounded-r-3xl text-lg md:text-2xl xl:text-4xl border-[#41a53d] px-6 py-2 transition-opacity duration-1000 ${
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
