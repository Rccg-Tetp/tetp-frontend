import { useEffect, useState } from "react";
import {
  calculateTimeLeft,
  formatDate,
  getNextSunday,
} from "../../utils/helpers";

const EventTimer = () => {
  const today = new Date();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(today));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(today));
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval] < 10) {
      timerComponents.push({
        key: interval,
        value: "0" + timeLeft[interval],
      });
    } else {
      timerComponents.push({
        key: interval,
        value: timeLeft[interval],
      });
    }
  });

  return (
    <section className="flex flex-col w-full bg-black text-white pt-[61px] md:pt-[29px] items-center">
      <h3 className="font-lateef text-base md:text-xl">SUNDAY SERVICES</h3>

      <h1 className="pt-[15px] font-bold text-[18px] [line-height:44px] font-satoshi md:pt-[9px] md:text-[28px]">
        JOIN OUR CELEBRATION SERVICE
      </h1>

      <div className="text-center flex justify-center mt-[17px] md:mt-[6px]">
        <div className="flex gap-[10px] md:gap-[20px]">
          {timerComponents.map((item, id) => {
            return (
              <div key={item.key} className="flex gap-[10px] items-center">
                <div className="">
                  <h1 className="font-satoshi text-[40px] text-outline w-[56px] md:w-[160px] md:text-[100px]">
                    {item.value}
                  </h1>
                  <p className="font-satoshi text-[10px] [line-height:13.5px] md:text-xl/[27px]">
                    {item.key}
                  </p>
                </div>
                {id !== timerComponents.length - 1 && (
                  <div className="flex items-center">
                    <img
                      src="/assets/images/colon.svg"
                      alt=""
                      className="h-[34px] w-3 md:w-[20px] md:h-[75px]"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <h2 className="pt-[39px] font-satoshi font-medium text-xl/[24px] md:text-[24px] md:pt-[68px]">
        {formatDate(getNextSunday(today))} | 8:00am
      </h2>

      <p className="pt-[31px] text-center mx-[37px] pb-[59px] font-satoshi text-xl/[24px] md:pb-[123px]">
        Havillah hall. Ground plaza, Newsworld building, Amac plaza, Heritage
        house, Wuse zone 3, Abuja.
      </p>
    </section>
  );
};

export default EventTimer;
