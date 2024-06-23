// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "@/utils/GoogleAnalytics";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import dynamic from "next/dynamic";

const CreateChatBotMain = dynamic(
  () => import("@/components/ChatbotAI/CreateChatBotMain"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "SynaptumAI",
  description: "An Agency that helps you build AI solutions",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics trackingId="G-XDXPCRFERY" />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=G-XDXPCRFERY"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <div className="font-nunito">
          <Navbar />
        </div>
        <div className="relative overflow-hidden min-h-screen ">{children}</div>
        <CreateChatBotMain />
      </body>
    </html>
  );
}
