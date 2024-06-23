// app/(Main)/(home)/layout.tsx
import "@/app/globals.css";
import Footer from "@/components/footer";
import MatrixEffectScanning from "@/utils/matrixEffectScanning";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <MatrixEffectScanning />
      {children}
      <Footer />
    </div>
  );
}
