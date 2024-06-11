//app/layout.tsx

import "./../globals.css";
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import MatrixEffectScanning from "@/utils/matrixEffectScanning";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <div className="relative overflow-hidden min-h-screen">
          <MatrixEffectScanning />
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
