const PrayerSection = () => {
  return (
    <section>
      <div className="relative h-fit">
        <div className="w-[164px] h-[223px] border-orange-650/[63%] border-[3px] rounded-[20px] ml-[35px] mt-[50px]"></div>
        <img
          src="/assets/images/prayer-img.svg"
          alt="prayer"
          className="absolute top-[30%] left-[20%] rounded-[10px] w-[255px] h-[250x]"
        />
      </div>

      <div className="flex flex-col justify-center mt-[120px] text-center w-[335px] mx-auto">
        <h4 className="uppercase font-lateef text-base font-normal text-[#161722]">
          Prayer
        </h4>
        <h2 className="text-xl font-bold uppercase font-satoshi text-[#161722] mt-[21px]">
          let us pray for you
        </h2>
        <p className="font-satoshi font-medium text-xl/[24px] mt-[29px]">
          It is important to invite God into your life difficulties through
          prayers, we believe in the power of prayer and know it can be life
          changing, we are always honored to pray for you.
        </p>
      </div>
    </section>
  );
};

export default PrayerSection;
