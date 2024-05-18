import { useEffect, useState } from "react";

const Home = () => {
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
          src="/assets/images/hero-bg.svg"
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
        {width < 768 && <img src="/assets/images/img-2.svg" alt="gallery" />}
        {width >= 768 && <img src="/assets/images/gallery.svg" alt="gallery" />}
      </div>

      <div className="flex flex-col">
        <h3 className="uppercase">our mission & vision</h3>
        <h3 className="uppercase">celebrate WITH US</h3>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h3>
      </div>
    </section>
  );
};

export default Home;
