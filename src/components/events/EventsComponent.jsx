import { useEffect, useState } from "react";
import { events } from "../../constants";

function EventsComponent() {
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
      <div className="flex flex-col items-center bg-white pb-[55px] md:pb-[113px]">
        <h3 className="mt-[30px] font-lateef text-xl/[28.92px] font-normal text-black">
          EVENTS
        </h3>
        <h2 className="text-[#161722] font-medium tracking-[-0.01em] text-[28px]/[37.8px] md:text-[28px]/[64px] md:font-bold uppercase mt-[23px] w-[279px] md:w-[514px] text-center mb-[41px] md:mt-0">
          All events for the month of JULY
        </h2>

        <div className="grid grid-cols-1 gap-[50px] font-satoshi md:grid-cols-2 lg:grid-cols-4 md:gap-x-6 md:gap-y-[57px] cursor-pointer">
          {events.map((item, id) => {
            return (
              <div
                key={item.id}
                className={`bg-[#FFF5EB] h-[454px] w-[302px] flex flex-col pt-[24px] text-[#161722] font-roboto-condensed relative ${
                  width < 900 && id > 5 ? "hidden" : "flex"
                }`}
              >
                <div className="self-end mr-[26px] text-end">
                  <p className="font-bold text-2x/[28.13px] tracking-[-0.01em]">
                    {item.date.day}
                  </p>
                  <p className="font-normal text-base/[18.75px]">
                    {item.date.month}
                  </p>
                </div>
                <div className="px-[40px] flex flex-col items-start mt-[39px]">
                  <h2 className="font-bold text-2xl/[28.13px] tracking-[-0.01em] uppercase w-[210px]">
                    {item.title}
                  </h2>
                  <p className="text-base font-normal mt-4">
                    {item.description}
                  </p>
                  <div className="mt-8 flex items-start gap-4">
                    <img src="/assets/icons/clock-icon.svg" alt="" />
                    <div className="text-base font-normal">
                      <p>{item.time.primary}</p>
                      <p>{item.time.secondary}</p>
                    </div>
                  </div>
                  <div className="text-base font-normal mt-4 flex gap-4">
                    <img
                      src="/assets/icons/location-icon.svg"
                      className="w-5 h-[25px]"
                      alt=""
                    />
                    <p>{item.location}</p>
                  </div>
                </div>

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

export default EventsComponent;
