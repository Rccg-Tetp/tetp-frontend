import { useEffect, useState } from "react";

function Recent() {
  // eslint-disable-next-line no-unused-vars
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
    <section className="w-full bg-[#F5F5F5] text-[#161722]">
      <p className="text-center font-lateef pt-12 mb-[18px] font-normal text-xl">
        RECENT SERMON
      </p>
      <h2 className="text-center uppercase text-xl font-bold font-satoshi md:text-[28px]/[64px]">
        most recent post
      </h2>
      <div className="flex flex-col items-center justify-center md:flex-row md:gap-12 md:mt-[64px] md:items-start md:pb-[161px] md:px-4 lg:px-0">
        <img
          className="w-[364px] h-[365px] md:w-[400px] md:h-[300px] lg:w-[572px] lg:h-[348px]"
          src="/assets/images/sermons-2.svg"
          alt=""
        />
        <div className="md:flex md:flex-col justify-start lg:pt-[28px] md:pt-[8px]">
          <div className="flex flex-col justify-center md:align-middle md:items-start">
            <div className="flex items-center justify-center font-lateef font-normal text-base uppercase lg:gap-[269px] md:gap-[50px]">
              <p>Tuesday 13 May, 2023</p>
              <p className="hidden md:block">By Bro Tolu</p>
            </div>
            <h2 className="font-satoshi font-bold text-xl uppercase text-center mt-[26px] lg:text-[28px] md:text-lg md:mt-3 lg:mt-[26px]">
              A God you can depend on
            </h2>
            <p className="font-satoshi font-normal text-base text-center mt-[17px] text-wrap md:text-start w-[372px] md:w-[300px] lg:w-[519px] md:text-sm lg:text-base md:mt-3 lg:mt-[17px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum.
            </p>
            <div className="text-center mt-[57px] md:mt-5 lg:mt-[33px] flex justify-center mb-[64px] md:mb-0">
              <a
                href="#"
                className="bg-primary text-white py-4 px-[19.5px] font-satoshi font-medium rounded-[5px] text-lg/[24px] lg:text-lg/[24px] flex items-center justify-between gap-[1.5px] w-[152px] md:py-2 lg:py-3 md:text-base"
              >
                <p>Read More</p>
                <img
                  src="/assets/icons/arrow.svg"
                  className="pt-[4px]"
                  alt="arrow"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recent;
