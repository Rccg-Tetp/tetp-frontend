import { useEffect, useState } from "react";

const Banner = () => {
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
      <div className="">
        <div
          className=" bg-opacity-35 bg-no-repeat bg-cover w-full text-black font-lateef"
          style={{
            backgroundImage: `${
              width < 768
                ? `url("/assets/images/about-banner-img.png")`
                : `url("/assets/images/about-banner-img-lg.svg")`
            } `,
          }}
        >
          <div className="h-full pt-[135px] flex flex-col gap-6 uppercase font-normal text-center items-center pb-[90px] md:items-start md:pl-[87px]">
            <p className="text-xl md:ml-5">About Us</p>
            <h2 className="text-5xl/[64px] w-[379px] md:w-[733px]">
              loving ourselves as christ intended
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
