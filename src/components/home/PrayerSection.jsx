const PrayerSection = () => {
  return (
    <section className="pb-[3.25rem] md:flex md:justify-between md:gap-[140px] lg:gap-[300px]">
      <div className="relative h-fit">
        <div className="w-[164px] h-[223px] border-orange-650/[63%] border-[3.5px] rounded-[20px] ml-[35px] mt-[50px] md:w-[260px] md:h-[446px] md:ml-[70px] lg:ml-[80px] md:mt-[114px]"></div>
        <img
          src="/assets/images/prayer-1.svg"
          alt="prayer"
          className="absolute top-[3.125rem] left-[4rem] rounded-[10px] max-w-[17.75rem] object-center z-[1] md:top-[156px] md:left-[110px] lg:max-w-[506px] lg:h-[352px] md:max-w-[320px] md:h-[352px]"
        />
      </div>

      <div className="flex flex-col mt-[100px] text-center w-[335px] mx-auto md:mx-0 md:text-left md:w-[606px] lg:mr-[122px] md:mr-[80px] md:mt-[146px] md:justify-start">
        <h4 className="uppercase font-lateef text-base font-normal text-[#161722] md:text-xl">
          Prayer
        </h4>
        <h2 className="text-xl font-bold uppercase font-satoshi text-[#161722] mt-[21px] lg:text-[28px]/[64px] md:text-2xl md:mt-[15px]">
          let us pray for you
        </h2>
        <p className="font-satoshi font-medium text-xl/[24px] mt-[29px] md:">
          It is important to invite God into your life difficulties through
          prayers, we believe in the power of prayer and know it can be life
          changing, we are always honored to pray for you.
        </p>

        <div className="flex flex-col md:flex-row lg:gap-[56px] md:mt-[39px] md:gap-[20px]">
          <div className="flex flex-col gap-[25px] items-center mt-8 md:flex-row md:mt-0 ">
            <img
              className="h-[2.5rem] w-[2.5rem] relative"
              loading="lazy"
              alt=""
              src="/assets/icons/pray-icon.svg"
            />

            <p className="font-satoshi font-normal text-base">
              Submit Prayer Request
            </p>
          </div>

          <div className="flex flex-col gap-[25px] items-center mt-8 md:flex-row md:mt-0">
            <img
              className="h-[2.5rem] w-[2.5rem] relative"
              loading="lazy"
              alt=""
              src="/assets/icons/church-icon.svg"
            />

            <p className="font-satoshi font-normal text-base">Pastoral Care</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrayerSection;
