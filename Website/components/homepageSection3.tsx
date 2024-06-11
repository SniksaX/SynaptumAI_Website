// components/HomePageSection3.tsx

"use client";

import { FeatureBox } from "@/utils/FeatureBox";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, forwardRef } from "react";

// Main component definition
export const HomePageSection3 = forwardRef<HTMLDivElement>((props, ref) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center min-h-screen"
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl pb-4 text-black font-extrabold">
        FEATURES
      </h2>
      <div className="flex justify-center py-12 bg-transparent w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[1800px] mx-6">
          <FeatureBox
            title="CHATBOT Creation"
            description="Create intelligent chatbots that enhance customer interactions and streamline communication with advanced AI capabilities."
            buttonStyle={{ right: "21px" }}
            aosType="flip-left"
            minHeight="400px"
            flipY={true}
            link="/chatbot"
          />

          <FeatureBox
            title="AI Integration"
            description="Leverage AI to automate and optimize processes, reducing manual effort and improving efficiency across operations."
            aosType="flip-right"
            minHeight="400px"
            link="/integration"
          />
        </div>
      </div>
    </div>
  );
});

HomePageSection3.displayName = "HomePageSection3";
