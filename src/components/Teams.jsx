const Teams = () => {
  const data = [
    {
      img: "/assets/images/faithfuls.svg",
      name: "faithfuls",
      text: "The Faithfuls",
    },
    {
      img: "/assets/images/ushers.svg",
      name: "ushers",
      text: "The Ushers/Protocols",
    },
    {
      img: "/assets/images/yaya.svg",
      name: "yaya",
      text: "Chiildren/Teens/YAYA",
    },
    { img: "/assets/images/media.svg", name: "media", text: "Media/Tech" },
    {
      img: "/assets/images/welfare.svg",
      name: "welfare",
      text: "Sanitation/Welfare",
    },
    {
      img: "/assets/images/sunday-school.svg",
      name: "sunday-school",
      text: "Prayer/Sunday School",
    },
  ];

  return (
    <section className="flex flex-col items-center">
      <h4 className="uppercase font-lateef font-normal text-xl mt-[55px]">
        Divine teams
      </h4>
      <h2 className="uppercase font-bold text-xl font-satoshi mt-[11px]">
        Sanctuary squads
      </h2>

      <div className="grid grid-cols-1 mt-[90px] gap-[55px] md:grid-cols-2 md:gap-[19px] md:mt-[50px]">
        {data.map((item) => {
          return (
            <div className="relative" key={item.name}>
              <img
                src={item.img}
                alt={item.name}
                className="object-cover h-[380px] w-[353px] md:w-[630px]"
              />
              <div className="text-center text-2xl font-bold font-satoshi border-4 rounded-[5px] border-white text-white z-10 absolute bottom-[20px] left-0 right-0 mx-auto w-[292px] h-[60px] flex justify-center items-center md:w-[468px] md:h-[89px] md:bottom-[33px] hover:cursor-pointer">
                <a href="#" className="">
                  <p>{item.text}</p>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <h2 className="uppercase mt-[49px] font-satoshi font-bold text-xl">
        And amazing follow-up team
      </h2>
      <p className="font-satoshi font-normal text-base text-center text-[#161722] w-[372px] mt-[3px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex text-orange-650 w-[92px] justify-between gap-[12px] mt-[15px] mb-[59px] md:mt-8 md:mb-[92px]">
        <h3 className="text-sm font-satoshi font-bold">See More</h3>
        <img
          src="/assets/icons/arrow-2.svg"
          className="fill-orange-650 w-[18px] h-[10px] self-center"
          alt="arrow"
        />
      </div>
    </section>
  );
};

export default Teams;
