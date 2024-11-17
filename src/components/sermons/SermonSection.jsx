import { useEffect, useState } from "react";
import { sermonsData } from "../../constants";

function SermonsSection() {
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
      <div className="flex flex-col items-center bg-[#FEF0EC] pb-[90px] md:pb-[108px]">
        <h2 className="font-satoshi font-bold text-xl/[64px] tracking-[-0.01em] mt-[11px] mb-[23px] md:mb-[35px] md:mt-[37px]">
          ALL SERMONS
        </h2>

        <div className="grid grid-cols-1 gap-[49px] font-satoshi md:grid-cols-2 lg:grid-cols-4 md:gap-6 cursor-pointer">
          {sermonsData.map((item, id) => {
            return (
              <div
                key={item.id}
                className={`bg-white h-[367px] w-[302px] flex flex-col items-start pt-[48px] pl-[32px] relative ${
                  width < 900 && id > 3 ? "hidden" : "flex"
                }`}
              >
                <p className="font-lateef uppercase text-[#F14A16] font-normal text-xs/[17.35px] tracking-[0.08em]">
                  {item.category}
                </p>
                <h2 className="text-xl/[27px] font-bold w-[218px] uppercase tracking-[-0.01em] text-[#161722] mt-[13px]">
                  {item.title}
                </h2>
                <p className="text-lg/[24px] font-normal w-[238px] text-[#161722] mt-[18px]">
                  {item.description}
                </p>
                <p className="text-lg/[24.3px] font-normal text-[#161722] mt-[24px]">
                  By {item.preacher}
                </p>
                <p className="font-light text-base text-[#161722] mt-[6px]">
                  {item.date}
                </p>
                <div
                  className={`h-4 w-full absolute bottom-0 left-0 bg-[#F14A16] self-end ${
                    id === 0 ? "block" : "hidden"
                  }`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SermonsSection;
