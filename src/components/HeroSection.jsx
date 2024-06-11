import { useEffect, useState } from "react";

const HeroSection = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="w-full">
      <div className="relative">
        <img
          src="/assets/images/pastoral-1.svg"
          className="object-cover h-[538px] w-full md:h-[730px]"
          alt=""
        />
        <div className="absolute inset-0 bg-black md:bg-opacity-70 bg-opacity-35 w-full text-white md:flex md:flex-col items-center">
          <div className="h-full pt-[183px] md:flex md:flex-col md:gap-[1px] items-center hidden">
            <p className="text-4xl">Welcome to our church</p>
            <h2 className="text-8xl md:py-[21px]">Jesus is our message</h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center pt-12 gap-[18px] md:pt-[74px]">
        <h3 className="uppercase text-base font-normal font-lateef md:text-xl">
          Welcome to our CHURCH
        </h3>
        <h3 className="uppercase font-bold text-xl font-satoshi md:text-3xl md:m-3">
          Love and compassion
        </h3>
        <p className="text-center w-[297px] h-[192px] text-base font-normal font-satoshi md:w-[768px] md:mt-1 md:h-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum.
        </p>
      </div>

      <div
        id="img-section"
        className="flex justify-center pt-[52px] md:pt-[53px]"
      >
        {width < 768 && <img src="/assets/images/prayer-3.svg" alt="gallery" />}
        {width >= 768 && (
          <img src="/assets/images/prayer-2.svg" alt="gallery" />
        )}
      </div>

      <div className="flex flex-col items-center pt-[54px] md:pt-[60px]">
        <h3 className="uppercase font-lateef text-base md:text-xl">
          our mission & vision
        </h3>
        <h3 className="uppercase font-satoshi font-bold text-xl/[27px] md:text-3xl/[44px] mt-[15px] md:[9px]">
          celebrate WITH US
        </h3>
        <h3 className="w-[315px] h-[72px] font-satoshi text-center mt-[19px] md:w-[512px] md:mt-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h3>

        <div className="flex text-orange-650 w-[99px] justify-between gap-[10px] mt-[34px] mb-[62px] md:mt-4 md:mb-[51px]">
          <h3 className="text-sm font-satoshi font-bold">Read More</h3>
          <img
            src="/assets/icons/arrow-2.svg"
            className="fill-orange-650 w-[18px] h-[10px] self-center"
            alt="arrow"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
