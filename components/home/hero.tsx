import CommandSearch from "./CommandSearch";

export default function Hero() {
  return (
    <div className="flex w-full items-start mt-12">
      <div className="flex w-full flex-col px-11">
        <div className="flex flex-grow flex-col items-center text-center">
          <div className="flex items-center justify-center z-20">
            <p className="mb-16 bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 text-center font-sans font-extrabold text-transparent bg-clip-text text-6xl h-fit lg:text-9xl lg:h-40">
              Electricians
            </p>
          </div>
          <div className="flex -mt-24 lg:mt-0 lg:h-[470px] flex-shrink-0 items-end justify-center self-stretch">
            <img
              className="lg:h-[638px] w-[400px] lg:w-[748px] flex-shrink-0 object-contain z-10 animate-spin-slow"
              src="/download.png"
              loading="lazy"
            />
          </div>
        </div>
        <CommandSearch />
      </div>
    </div>
  );
}
