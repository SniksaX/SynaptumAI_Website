//app/layout.tsx

import type { Metadata } from "next";
import "./../globals.css";
import Footer from "@/components/footer";
import MatrixEffectRaining from "@/utils/matrixEffectRain";
import { Navbar } from "@/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="relative overflow-hidden min-h-screen">
          <MatrixEffectRaining />
          <div>
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
