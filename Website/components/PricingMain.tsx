"use client";

import { useState } from "react";
import React from "react";
import Link from "next/link";

import Form from "./PricingForm";
import Modal from "./Modal";

interface PricingTier {
  name: string;
  description: string;
  features: string[];
}

interface PricingCardProps {
  tier: PricingTier;
  setShowModal: any;
  onClick: () => void;
}

const pricingTiers: PricingTier[] = [
  {
    name: "CONSULTING",
    description: "Get the best AI consulting services for your company.",
    features: [
      "- AI strategy and roadmap development",
      "- Custom AI solutions tailored to business needs",
      "- Implementation and deployment support",
      "- Training and workshops for teams",
      "- Ongoing AI support and optimization",
    ],
  },
  {
    name: "CHATBOTS",
    description: "Get the fastest chatbots in the market for your company.",
    features: [
      "- Silver Tier: Basic text input and output",
      "- Gold Tier: Advanced text and file input with text output",
      "- Platinum Tier: Comprehensive text, file, and image input with text and image output",
    ],
  },
  {
    name: "INTEGRATION",
    description:
      "Integrate AI into your workflow to facilitate and automate business",
    features: [
      "- Highly scalable infrastructure",
      "- Seamless API integration",
      "- Custom AI solutions",
      "- Workflow automation",
      "- Comprehensive support and maintenance",
    ],
  },
];

const PricingCard: React.FC<PricingCardProps> = ({
  tier,
  setShowModal,
  onClick,
}) => {
  const cardClassName = `max-h-[600px] max-w-[400px] md:w-full p-6 bg-[#0f310e]  bg-opacity-65 rounded-3xl shadow-lg`;

  return (
    <div className={cardClassName} onClick={onClick}>
      <div className="mb-4 text-center">
        <span className="block text-xl font-semibold text-gray-200 pb-10">
          {tier.name}
        </span>

        <span className="block mt-2 text-2xl text-white">
          {tier.description}
        </span>
      </div>
      {tier.name === "CONSULTING" ? (
        <Link href="/book-appointment">
          <button className="block w-full border hover:bg-[#41a53d] text-white bg-[#0f310e] rounded-full py-2 mt-14">
            Select
          </button>
        </Link>
      ) : (
        <button
          className="block w-full border hover:bg-[#41a53d] text-white bg-[#0f310e] rounded-full py-2 mt-14 mb-10"
          onClick={() => setShowModal(true)}
        >
          Select
        </button>
      )}
      <div className="mt-4 text-xl text-white">
        {tier.features.map((feature, index) => (
          <p key={index}>{feature}</p>
        ))}
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const [ShowModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col pt-32 justify-center items-center min-h-screen features-background py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
        {pricingTiers.map((tier, index) => (
          <PricingCard
            key={index}
            tier={tier}
            setShowModal={setShowModal}
            onClick={() => {}}
          />
        ))}
      </div>
      <div className="z-50">
        <Modal isvisible={ShowModal} onClose={() => setShowModal(false)}>
          <Form />
        </Modal>
      </div>
    </div>
  );
};

export default Pricing;
