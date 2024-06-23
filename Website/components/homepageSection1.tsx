// components/HomePageSection1.tsx
"use client";
import { MessageIcon } from "@/utils/IconsSvg";
import React from "react";
import { FaLightbulb, FaDesktop, FaRobot } from "react-icons/fa";

interface HomePageSection1Props {
  scrollToSection3: () => void;
}

export default function HomePageSection1({
  scrollToSection3,
}: HomePageSection1Props) {
  return (
    <div className="relative pt-10 text-white min-h-screen overflow-hidden">
      <main className="relative z-10 flex flex-col items-center justify-center text-center py-10 sm:py-20">
        <div className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold text-black mb-4">
          UNLEASH AI POWER
        </div>
        <div className="animate-fadein">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            AI Is The <span className="text-green-500">Future</span> of Your
            Business
          </h1>
          <p className="mt-4 max-w-lg text-center mx-auto">
            Include Artificial Intelligence In Your Workflow
          </p>
          <button
            onClick={scrollToSection3}
            className="mt-8 px-6 py-2 sm:px-8 sm:py-3 bg-white text-black rounded-full hover:bg-green-500"
          >
            Learn More
          </button>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-gray-400">
            <div className="text-center items-center flex flex-col">
              <FaLightbulb className="text-6xl sm:text-7xl text-green-500 mb-4 transform hover:scale-110 transition-transform duration-300" />
              <div className="text-xl sm:text-2xl font-bold text-white">
                Smart Integration
              </div>
            </div>
            <div className="text-center items-center flex flex-col">
              <FaDesktop className="text-6xl sm:text-7xl text-green-500 mb-4 transform hover:scale-110 transition-transform duration-300" />
              <div className="text-xl sm:text-2xl font-bold text-white">
                Cutting-Edge Technology
              </div>
            </div>
            <div className="text-center items-center flex flex-col">
              <FaRobot className="text-6xl sm:text-7xl text-green-500 mb-4 transform hover:scale-110 transition-transform duration-300" />
              <div className="text-xl sm:text-2xl font-bold text-white">
                Personalized Support
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
