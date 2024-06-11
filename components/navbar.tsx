"use client";
import { Button } from "./ui/button";
import { DropdownMenu } from "./ui/DropdownMenu";
import { useEffect, useState } from "react";
import debounce from "lodash/debounce";
import Image from "next/image";
import synaptumAILogo from "@/public/SynaptumAILogo.png";
import { useRouter } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Importing from Heroicons v2

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    const debouncedHandleScroll = debounce(controlNavbar, 0);
    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
      debouncedHandleScroll.cancel();
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed z-50 bg-transparent p-5 flex flex-wrap justify-between items-center w-full transition-transform ${
        isVisible ? "transform-none" : "-translate-y-full"
      } bg-black`}
    >
      <div className="flex items-center">
        <button onClick={() => router.push("/")}>
          <Image
            src={synaptumAILogo}
            alt="SynaptumAI Logo"
            width={150}
            height={50}
          />
        </button>
      </div>

      <div className="hidden sm:flex sm:space-x-2 sm:rounded-full sm:border sm:bg-[#0f310e]/50 sm:p-2">
        <Button
          onClick={() => router.push("/")}
          className="text-white hover:bg-[#0f310e] rounded-3xl shadow-sm"
          variant="ghost"
        >
          Home
        </Button>
        <DropdownMenu />
        <Button
          onClick={() => router.push("/pricing")}
          className="text-white hover:bg-[#0f310e]/50 rounded-3xl shadow-sm"
          variant="ghost"
        >
          Pricing
        </Button>
        <Button
          onClick={() => router.push("/vision")}
          className="text-white hover:bg-[#0f310e]/50 rounded-3xl shadow-sm"
          variant="ghost"
        >
          Vision
        </Button>
      </div>

      <div className="sm:hidden flex items-center">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      <Button
        onClick={() => router.push("/pricing")}
        className="hidden sm:inline-block text-white rounded-3xl border hover:bg-[#0f310e] shadow-lg"
      >
        GET STARTED
      </Button>

      {isMobileMenuOpen && (
        <div className="sm:hidden z-50 absolute top-20 left-0 right-0 bg-black bg-opacity-85 flex flex-col items-center space-y-2 py-4 px-4 border-t border-gray-700">
          <Button
            onClick={() => router.push("/")}
            className="text-white w-full hover:bg-gray-400 rounded-3xl shadow-sm"
            variant="ghost"
          >
            Home
          </Button>
          <div className="w-full flex flex-col items-center space-y-2">
            <DropdownMenu />
          </div>
          <Button
            onClick={() => router.push("/pricing")}
            className="text-white w-full hover:bg-gray-400 rounded-3xl shadow-sm"
            variant="ghost"
          >
            Pricing
          </Button>
          <Button
            onClick={() => router.push("/vision")}
            className="text-white w-full hover:bg-gray-400 rounded-3xl shadow-sm"
            variant="ghost"
          >
            Vision
          </Button>
          <Button
            onClick={() => router.push("/pricing")}
            className="text-white w-full rounded-3xl border hover:bg-gray-400 shadow-lg"
          >
            GET STARTED
          </Button>
        </div>
      )}
    </header>
  );
}
