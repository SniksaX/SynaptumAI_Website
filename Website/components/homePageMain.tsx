// components/HomePageMain.tsx
"use client";
import React, { useRef } from "react";
import HomePageSection1 from "./homepageSection1";
import HomePageSection2 from "./homepageSection2";
import { HomePageSection3 } from "./homepageSection3";
import { HomePageSection4 } from "./homepageSection4";

export default function HomePageMain() {
  const section3Ref = useRef<HTMLDivElement>(null);

  const scrollToSection3 = () => {
    if (section3Ref.current) {
      section3Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <HomePageSection1 scrollToSection3={scrollToSection3} />
      <HomePageSection2 />
      <HomePageSection3 ref={section3Ref} />
      <HomePageSection4 />
    </div>
  );
}
