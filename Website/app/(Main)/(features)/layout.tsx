// app/(Main)/(features)/layout.tsx
import "@/app/globals.css";
import Footer from "@/components/footer";
import MatrixEffectRaining from "@/utils/matrixEffectRain";

export default function FeaturesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <MatrixEffectRaining />
      {children}
      <Footer />
    </div>
  );
}
