interface FeatureBoxProps {
  title: string;
  icon: JSX.Element;
  description: string;
  aosType: string;
}

export function FeatureBoxF({
  title,
  description,
  aosType,
  icon,
}: FeatureBoxProps): JSX.Element {
  return (
    <div
      className="relative rounded-3xl p-4 md:p-6 space-y-4 md:space-y-6 mb-10 bg-transparent overflow-hidden border border-gray-700"
      data-aos={aosType}
    >
      <div className="flex justify-between items-start z-10">
        {/* Purple box for the icon */}
        <div className="icon-container bg-green-500 p-2 rounded-full">
          {icon}
        </div>
      </div>
      <div className="pt-10 md:pt-20 z-10">
        <h3 className="text-white font-semibold text-lg md:text-xl uppercase pb-8 md:pb-14">
          {title}
        </h3>
        <p className="text-gray-200 text-sm md:text-xl pb-16 md:pb-24 mb-6 md:mb-10">
          {description}
        </p>
      </div>
    </div>
  );
}
