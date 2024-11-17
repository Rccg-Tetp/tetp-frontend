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
          className=" bg-opacity-35 bg-no-repeat bg-cover w-full text-black font-lateef md:h-[419px]"
          style={{
            backgroundImage: `${
              width < 768
                ? `url("/assets/images/sermon-banner.svg")`
                : `url("/assets/images/sermon-banner.svg")`
            } `,
          }}
        >
          <div className="h-full pt-[135px] flex flex-col gap-6 md:gap-[10px] uppercase font-normal text-center md:text-start items-center pb-[90px] md:items-start md:pl-[87px]">
            <p className="text-xl">SERMON</p>
            <h2 className="text-5xl/[64px] w-full md:font-normal">
              take part in OUR SERMON
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
