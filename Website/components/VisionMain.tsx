import Image from "next/image";

export default function VisionMain() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-10 pb-10 text-white">
      <div className="full-screen-image"></div> {/* Background Image */}
      <div className="flex flex-col pt-20 px-4 md:px-0">
        <div className="bg-black bg-opacity-80 border p-4 md:p-8 rounded-3xl shadow-lg">
          <div className="flex flex-col items-center">
            <div className="bg-[#1e1e1e] w-full max-w-[600px] h-[350px] rounded-lg overflow-hidden transition-all duration-300 ease-in-out">
              <div className="bg-[#1e1e1e] p-4 flex items-center justify-between">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full transition-all duration-300 ease-in-out" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full transition-all duration-300 ease-in-out" />
                  <div className="w-3 h-3 bg-green-500 rounded-full transition-all duration-300 ease-in-out" />
                </div>
                <div className="text-sm transition-all duration-300 ease-in-out">
                  SynaptumAI
                </div>
              </div>
              <div className="flex flex-col justify-between h-full pb-10">
                <div className=" vision-image"></div>
              </div>
            </div>
            <div className="mt-4 text-lg max-w-[600px] text-center">
              Introducing our revolutionary AI platform, where all the leading
              AI models are available in one place, accessible simultaneously.
              Whether you&apos;re a developer integrating our robust APIs or a
              non-technical user utilizing our intuitive no-code tools, our
              platform empowers everyone to leverage the power of AI
              effortlessly. Say goodbye to the hassle of visiting multiple
              websites and welcome a seamless, efficient, and user-friendly AI
              experience. Join us and transform the way you interact with AI
              today.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
