"use client";
import { FeatureBoxF } from "@/utils/FeatureBoxF";
import {
  ArrowRightIcon,
  ClockIcon,
  FingerprintIcon,
  GlobeIcon,
  NetworkIcon,
  ShieldCheckIcon,
} from "@/utils/IconsSvg";
// Import necessary libraries and components
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Main component definition
export function ChatBotSection2() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-black bg-opacity-30 min-h-screen flex py-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:max-w-[1500px] md:max-h-[1000px] xl:max-w-[1900px]">
        <FeatureBoxF
          title="Image Creation & Editing"
          icon={<ArrowRightIcon />}
          description="Our AI-driven tools not only generate but also edit images, enhancing visual content automatically. Perfect for streamlining design and marketing processes, creating impactful visuals effortlessly."
          aosType="flip-left"
        />

        <FeatureBoxF
          title="Voice Processing"
          icon={<ClockIcon />}
          description="Enhance support operations with AI that understands and responds to voice commands. Perfect for interactive customer service, our technology improves accessibility and efficiency."
          aosType="flip-right"
        />

        <FeatureBoxF
          title="Smart AI Chatbots"
          icon={<FingerprintIcon />}
          description="Deploy intelligent chatbots that learn from each interaction, providing instant, precise responses. A staple in modern customer support, our chatbots improve service quality and operational efficiency."
          aosType="flip-left"
        />

        <FeatureBoxF
          title="Custom AI Solutions"
          icon={<GlobeIcon />}
          description="AI solutions tailored to your specific business needs. Whether integrating with existing systems or developing unique functionalities for niche markets, our team can help innovate and implement the right AI strategies to drive your business forward"
          aosType="flip-right"
        />

        <FeatureBoxF
          title="AI for HR and Recruitment"
          icon={<NetworkIcon />}
          description="Revolutionize your HR processes with AI-powered tools designed to streamline recruitment and maintain workforce management. Automate candidate screening, optimize talent acquisition, and enhance employee engagement with our intelligent HR solutions."
          aosType="flip-left"
        />

        <FeatureBoxF
          title="Automated Compliance"
          icon={<ShieldCheckIcon />}
          description="Ensure compliance with regulations through automated AI systems that adapt to legal changes. Reduce risk and operational overhead with proactive compliance strategies."
          aosType="flip-right"
        />
      </div>
    </div>
  );
}
