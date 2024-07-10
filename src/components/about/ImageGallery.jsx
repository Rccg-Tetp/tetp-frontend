import { useEffect, useState } from "react";

const ImageGallery = () => {
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
    <section className="flex flex-col w-full text-center">
      <div className="bg-[#F5F5F5]">
        <div className=" flex flex-col gap-[18px] justify-center items-center z-20 pt-12 text-center pb-[63px] md:gap-0 md:pb-[53px]">
          <h3 className="font-lateef font-normal text-base uppercase md:text-xl">
            Welcome to our CHURCH
          </h3>
          <h1 className="uppercase font-satoshi text-xl font-bold md:text-3xl md:mt-[9px]">
            Love and compassion
          </h1>
          <p className="font-satoshi font-normal text-base w-[297px] md:w-[768px] md:mt-[28px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </p>
        </div>
        {width < 768 ? (
          <div className="flex flex-col gap-[78px] items-center">
            <img
              className="w-[278px]"
              src="/assets/images/img-gallery-2.png"
              alt=""
            />
            <img
              className="w-[278px]"
              src="/assets/images/img-gallery-1.png"
              alt=""
            />
            <img
              className="w-[278px]"
              src="/assets/images/img-gallery-3.png"
              alt=""
            />
          </div>
        ) : (
          <div className="flex justify-center">
            <img
              className="w-[1024px] h-[512px]"
              src="/assets/images/img-gallery-full.svg"
              alt=""
            />
          </div>
        )}
        <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-6 md:mt-[101px] md:mb-[120px]">
          <div className="flex flex-col mt-[96px] gap-[23px] w-[371px] md:mt-0 md:items-start md:text-left">
            <h3 className="font-lateef font-normal text-lg uppercase">
              OUR MISSIOn & Vision
            </h3>
            <h1 className="font-bold font-satoshi text-xl md:text-2xl">
              STRIVING FOR A BETTER TOMORROW
            </h1>
            <p className="font-satoshi font-normal text-base text-center mt-1 md:text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum.
            </p>
          </div>
          <div className="flex flex-col mt-[96px] gap-[23px] w-[371px] pb-[79px] md:mt-0 md:pb-0 md:items-start md:text-left">
            <h3 className="font-lateef font-normal text-lg uppercase">
              WHAT WE DO
            </h3>
            <h1 className="font-bold font-satoshi text-xl md:text-2xl">
              BRINGING PEACE AND JOY TO THE WORLD
            </h1>
            <p className="font-satoshi font-normal text-base text-center mt-1 md:text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
