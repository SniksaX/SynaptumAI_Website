"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa"; // Importing Facebook and LinkedIn icons

export default function Footer() {
  const [buttonBG, setButtonBG] = useState<String>("bg-black");
  return (
    <footer className="bg-black  text-white py-10 border-t border-t-green-500 rounded-t-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        <div className="flex">
          <div>
            <h2 className="text-3xl font-bold mb-6 pl-20">SynaptumAI</h2>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-gray-300" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="/pricing">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="/vision">
                  Vision
                </Link>
              </li>
            </ul>
          </div>
          <ul className="space-y-2 pt-[60px]">
            <li>
              <Link className="hover:text-gray-300" href="/chatbot">
                ChatBot
              </Link>
            </li>

            <li>
              <Link className="hover:text-gray-300" href="/integration">
                Integration
              </Link>
            </li>
          </ul>
        </div>
        <div className="border-r border-r-green-500"></div>
        <div>
          <p className="mb-4">Stay Connected</p>
          <Input
            className="mb-4 bg-transparent border border-gray-500 placeholder-gray-400 text-white rounded-md py-2 px-4"
            placeholder="Email"
            type="email"
          />
          <div className="flex items-center mb-4">
            <Checkbox id="newsletter" className="border-px2" />
            <label className="ml-2 text-sm text-gray-400" htmlFor="newsletter">
              Yes, subscribe me to your newsletter.
            </label>
          </div>

          <Button
            className={`${buttonBG} hover:bg-white hover:text-black border border-white rounded-md text-white py-2 px-4`}
            onClick={() =>
              setTimeout(() => {
                setButtonBG("bg-green-500");
              }, 500)
            }
          >
            Subscribe
          </Button>
        </div>
        <div className="pt-6 md:pt-0">
          <p className="text-s text-gray-400">www.synaptumAI.com</p>
          <div className="flex space-x-4 mt-4">
            <Link
              className="hover:text-gray-300"
              href="https://www.linkedin.com/company/synaptumai/"
            >
              <FaLinkedin className="h-5 w-5" /> {/* LinkedIn icon */}
            </Link>
            <Link
              className="hover:text-gray-300"
              href="https://www.facebook.com/profile.php?id=61560492525115"
            >
              <FaFacebook className="h-5 w-5" /> {/* Facebook icon */}
            </Link>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-gray-400 pt-10">
        © 2024 SynaptumAI™. All rights reserved
      </p>
    </footer>
  );
}
