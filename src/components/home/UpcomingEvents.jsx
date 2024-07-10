const UpcomingEvents = () => {
  const data = [
    { img: "/assets/images/event-1.svg", date: "", venue: "" },
    { img: "/assets/images/event-2.svg", date: "", venue: "" },
    { img: "/assets/images/event-3.svg", date: "", venue: "" },
  ];
  return (
    <section className="bg-pink-soft flex flex-col items-center pb-[58px] md:pb-[93px]">
      <p className="font-lateef text-base uppercase mt-[38px] font-normal md:mt-[65px] md:text-xl">
        Church events
      </p>
      <h2 className="font-satoshi font-bold text-xl uppercase mt-[19px] md:text-3xl">
        upcoming events
      </h2>

      <div className="flex flex-col gap-[72px] mt-[52px] md:flex-row md:mt-[58px] md:gap-[37px]">
        {data.map((item) => {
          return (
            <div key={item.img} className="relative">
              <img
                src={item.img}
                alt=""
                className="w-[353px] h-[316px] md:w-[391px]"
              />
              <div className="bg-white w-[82px] h-[75px] flex flex-col justify-center items-center absolute z-10 right-[18px] top-[30px] rounded font-bold text-xl font-satoshi md:h-[91px] md:right-[18px] md:top-[22px]">
                <p>May</p>
                <p>6</p>
              </div>
              <div className="flex mx-auto justify-center mt-[27px] gap-4 text-base font-satoshi font-normal">
                <p>9:30 AM</p>
                <p>Rccg | The everlasting truth parish</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center p-4 mt-[79px] md:mt-[73px]">
        <a
          href="#"
          className="bg-primary text-white py-4 px-[19.5px] font-satoshi font-medium rounded-[5px] text-lg/[24px] flex items-center justify-between gap-[6.5px] w-[219px]"
        >
          <p>View more events</p>
          <img src="/assets/icons/arrow.svg" className="pt-[4px]" alt="arrow" />
        </a>
      </div>
    </section>
  );
};

export default UpcomingEvents;
