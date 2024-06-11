import { Button } from "@/components/ui/button";
import Link from "next/link";

interface FeatureBoxProps {
  title: string;
  description: string;
  buttonStyle?: React.CSSProperties;
  aosType: string;
  backgroundImage?: string;
  minHeight: string;
  flipY?: boolean;
  link: string;
  onClick?: () => void; // Adding onClick prop
}

export function FeatureBox({
  title,
  description,
  buttonStyle,
  aosType,
  backgroundImage,
  minHeight,
  flipY,
  link,
  onClick,
}: FeatureBoxProps): JSX.Element {
  return (
    <div
      className={`relative p-6 bg-transparent box2 overflow-hidden rounded-3xl border border-gray-700 bg-cover bg-center flex flex-col justify-between ${
        flipY ? "flip-y" : ""
      }`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        minHeight,
      }}
      data-aos={aosType}
    >
      {backgroundImage && <div className="absolute inset-0 z-0"></div>}
      <div className="z-10">
        <h3 className="text-white font-semibold text-2xl sm:text-3xl md:text-5xl uppercase ">
          {title}
        </h3>
        <p
          className={`text-lg sm:text-xl pt-10 sm:pt-20 text-${
            backgroundImage ? "gray-200" : "gray-400"
          }`}
        >
          {description}
        </p>
      </div>
      <Link href={link}>
        <Button
          style={buttonStyle}
          className={`mt-auto bg-transparent rounded-3xl border text-[#41a53d] hover:bg-[#173d16] hover:text-white`}
          onClick={onClick}
        >
          Learn More
        </Button>
      </Link>
    </div>
  );
}
