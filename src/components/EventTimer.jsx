import { useEffect, useState } from "react";

const EventTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-05-26T08:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
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

  const data = [
    {
      key: "DAYS",
      value: "05",
    },
    {
      key: "HOURS",
      value: "05",
    },
    {
      key: "MINUTES",
      value: "05",
    },
    {
      key: "SECONDS",
      value: "05",
    },
  ];

  return (
    <section className="flex flex-col w-full bg-black text-white pt-[61px] md:pt-[29px] items-center">
      <h3 className="font-lateef text-base md:text-xl">SUNDAY SERVICES</h3>

      <h1 className="pt-[15px] font-bold text-[20px] [line-height:44px] font-satoshi md:pt-[9px] md:text-[28px]">
        JOIN OUR CELEBRATION SERVICE
      </h1>

      <div className="text-center flex justify-center mt-[17px] md:mt-[6px]">
        <div className="flex gap-3 md:gap-[28px]">
          {timerComponents.map((item, id) => {
            return (
              <div
                key={item.key}
                className="flex gap-3 items-center md:gap-[28px]"
              >
                <div className="">
                  <h1 className="font-satoshi text-[48px] text-outline w-[56px] md:w-[163px] md:text-[140px]">
                    {item.value}
                  </h1>
                  <p className="font-satoshi text-[10px] [line-height:13.5px] md:text-xl/[27px]">
                    {item.key}
                  </p>
                </div>
                {id !== data.length - 1 && (
                  <img
                    src="/assets/images/colon.svg"
                    alt=""
                    className="relative h-[34px] w-3 top-[-5px] md:top-[-10px] md:w-[25px] md:h-[80px]"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <h2 className="pt-[39px] font-satoshi font-medium text-xl/[24px] md:text-[24px] md:pt-[68px]">
        Sunday, 12th May, 2024 | 9:00am
      </h2>

      <p className="pt-[31px] text-center w-[352px] md:w-[672px] mx-[37px] pb-[59px] font-satoshi text-xl/[24px] md:pb-[123px]">
        Havillah hall. Ground plaza, Newsworld building, Amac plaza, Heritage
        house, Wuse zone 3, Abuja.
      </p>
    </section>
  );
};

export default EventTimer;
