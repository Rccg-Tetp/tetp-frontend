import { useEffect, useState } from "react";
import { sermons } from "../constants";

const SermonsSection = () => {
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
    <div className="bg-[url('/assets/images/img-3.svg')] bg-no-repeat bg-center bg-cover min-h-[1465px] md:min-h-[692px] relative">
      {width < 768 && (
        <img src="/assets/images/orange-rect.svg" alt="rectangle" />
      )}
      {width >= 768 && (
        <img
          src="/assets/images/orange-rect-big.svg"
          alt="rectangle"
          className="absolute bottom-0"
        />
      )}
      <div className="absolute top-0 left-0 bottom-0 right-0 m-auto mt-[49px]">
        <div className="text-center text-white">
          <h2 className="text-[17px] font-normal m-0 font-lateef">LATEST</h2>
          <h1 className="text-xl mt-[15px] font-satoshi font-bold">SERMONS</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-[42px] md:gap-5 items-center mt-[42px] justify-center">
          {sermons.map((item, id) => {
            return (
              <div
                className="bg-white shadow-lg relative w-[300px] h-[320px] md:w-[354px] md:h-[356px]"
                key={id}
              >
                <img src={`${item.image}`} alt="Bible" />
                <div className="w-full -bottom-1 bg-white text-black pl-[22px] py-[23px] absolute font-satoshi">
                  <p className="m-0 text-xs/[24px] font-medium">{item.date}</p>
                  <p className="mt-2 text-base font-bold">{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center p-4 mt-[50px] flex justify-center items-center">
          <a
            href="#"
            className="bg-primary text-white py-4 px-[19.5px] font-satoshi font-medium rounded-[5px] text-lg/[24px] flex w-[219px] items-center justify-between gap-[6.5px]"
          >
            <p>See more sermons</p>
            <img
              src="/assets/icons/arrow.svg"
              className="pt-[4px]"
              alt="arrow"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SermonsSection;
