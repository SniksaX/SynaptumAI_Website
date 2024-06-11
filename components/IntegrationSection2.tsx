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
export function IntegrationSection2() {
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
          title="AI Consulting and Strategy"
          icon={<ArrowRightIcon />}
          description="Leverage our expertise in AI with consulting services that ensure you're using the most advanced and appropriate technologies. We stay ahead of AI trends to provide you with cutting-edge solutions tailored to your specific needs."
          aosType="flip-left"
        />

        <FeatureBoxF
          title="AI Audio Processing"
          icon={<ClockIcon />}
          description="Incorporate advanced AI to manage and improve tasks such as calling center, and automated transcription services."
          aosType="flip-right"
        />

        <FeatureBoxF
          title="AI Image Analysis"
          icon={<FingerprintIcon />}
          description="Deploy AI to automate image analysis, including object detection, image enhancement, and custom classifications tailored to specific industry needs."
          aosType="flip-left"
        />

        <FeatureBoxF
          title="AI Text Automation"
          icon={<GlobeIcon />}
          description="Utilize AI for text automation to streamline document processing, content generation, and data extraction, reducing manual effort and increasing accuracy."
          aosType="flip-right"
        />

        <FeatureBoxF
          title="AI File Integration"
          icon={<NetworkIcon />}
          description="Simplify file management and integration with AI that supports a wide range of file types, enabling efficient data handling and workflow automation."
          aosType="flip-left"
        />

        <FeatureBoxF
          title="Comprehensive AI Integration"
          icon={<ShieldCheckIcon />}
          description="Offering full-spectrum AI integration services that understand and adapt to your workflow, ensuring seamless interaction across all media and data forms."
          aosType="flip-right"
        />
      </div>
    </div>
  );
}
