"use client";
import { ActivityIcon, CogIcon, LineChartIcon } from "@/utils/IconsSvg";
import React, { useEffect, useRef, useState } from "react";

export default function HomePageSection2() {
  const refContainer = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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

  return (
    <div
      key="1"
      className="flex items-center justify-center min-h-screen bg-transparent p-4 md:p-8"
    >
      <div
        ref={refContainer}
        className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 ${
          isVisible ? "animate-on-view" : "hidden-initially"
        }`}
      >
        <div className="box col-span-1 md:col-span-2">
          <div
            className="relative z-10 flex flex-col items-center text-center w-full px-4"
            style={{ maxWidth: "100%", margin: "0 auto" }}
          >
            <div className="bg-green-500 p-2 rounded-full mb-4">
              <LineChartIcon className="text-white h-10 w-10" />
            </div>
            <div className="flex flex-col items-center text-center w-full">
              <h2 className="text-white text-3xl md:text-5xl font-bold relative z-10 pt-10">
                Streamline Operations With AI
              </h2>
              <p className="text-white text-opacity-70 text-lg md:text-2xl relative z-10 w-full p-8">
                Our services blend AI technology and digital marketing to
                optimize operations and engage customers, transforming your
                business and unlocking growth opportunities.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="transform-gpu bg-[#000000] bg-opacity-80 border-green-500 border rounded-lg shadow-xl p-4 space-y-4">
            <div className="flex justify-center">
              <div className="bg-green-500 p-2 rounded-full">
                <ActivityIcon className="text-white h-6 w-6" />
              </div>
            </div>
            <h2 className="text-white text-xl md:text-2xl font-bold text-center">
              Optimize Marketing with AI
            </h2>
            <p className="text-white text-base md:text-lg text-opacity-70 text-center">
              Boost your marketing efforts with AI. Analyze data, optimize ads,
              and personalize engagements to increase reach and ROI.
            </p>
          </div>
          <div className="transform-gpu bg-[#000000] bg-opacity-80 border-green-500 border rounded-lg shadow-xl p-4 space-y-4">
            <div className="flex justify-center">
              <div className="bg-green-500 p-2 rounded-full">
                <CogIcon className=" text-white h-6 w-6" />
              </div>
            </div>
            <h2 className="text-white text-xl md:text-2xl font-bold text-center">
              Integrate AI into Workflows
            </h2>
            <p className="text-white text-base md:text-lg text-opacity-70 text-center">
              Streamline your operations with AI. Our solutions adapt to your
              processes, enhancing decision-making and efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
