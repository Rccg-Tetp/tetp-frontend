const PrayerSection = () => {
  return (
    <section>
      <div className="md:flex md:justify-between mx-[21.38px] mt-[52px] lg:gap-[66px] items-center lg:mx-[170.5px] lg:mt-[74px]">
        <div className="lg:w-[509px] lg:h-[263px] text-center items-center lg:text-left lg:items-start  font-satoshi flex flex-col gap-4">
          <p className="font-medium text-[15.12px] lg:text-xl">
            OUR DECLARATION
          </p>
          <p className="font-light lg:text-2xl text-base w-[260px] lg:w-[509px] lg:h-[263px]">
            I receive guidiance and direction by the word of the lord, I shall
            not wonder aimlessly because the light of God&apos;s word shall
            shine upon my path, I am blessed by the word, I conquer by the word
            and I shall live, walk and do the word
          </p>
          <p className="font-bold text-xs lg:text-xl ">Halleluyah!!!!</p>
        </div>
        <div className="flex items-center justify-center mt-[27px]">
          <img
            src="/assets/images/prayer-4.svg"
            alt="prayer2"
            className="md:w-[315.62px] md:h-[387.73px] lg:w-[452px] lg:h-[555px]"
          />
        </div>
      </div>

      <div className=" md:flex flex flex-col md:flex-row md:justify-between md:gap-[140px] lg:gap-[300px]">
        <div className="flex items-center justify-start order-2 md:order-0 md:mb-0">
          <div className="relative h-fit">
            <div className="w-[164px] h-[223px] border-orange-650/[63%] border-[3.5px] rounded-[20px] ml-[55px] mt-[50px] md:w-[260px] md:h-[446px] md:ml-[70px] lg:ml-[80px] md:mt-[114px]"></div>
            <img
              src="/assets/images/prayer-1.svg"
              alt="prayer"
              className="absolute top-[6.125rem] left-[4.5rem] rounded-[10px] max-w-[17.75rem] object-center z-[1] md:top-[156px] md:left-[110px] lg:max-w-[506px] lg:h-[352px] md:max-w-[320px] md:h-[352px]"
            />
          </div>
        </div>

        <div className="flex flex-col mt-[52px] text-center w-[335px] order-0 md:order-2 mx-auto md:mx-0 md:text-left md:w-[606px] lg:mr-[122px] md:mr-[80px] md:mt-[146px] md:justify-start">
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

              <p className="font-satoshi font-normal text-base">
                Pastoral Care
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex md:justify-between mx-[21.38px] mt-[52px] lg:gap-[66px] items-center lg:mx-[170.5px] lg:mt-[74px]">
        <div className="lg:w-[509px] lg:h-[263px] text-center items-center lg:text-left lg:items-start  font-satoshi flex flex-col gap-4">
          <p className="font-extrabold text-[30.66px] lg:text-[40px]/[100%] tracking-[10%] font-lateef">
            PRAYER OF THE DAY
          </p>
          <p className="font-normal lg:text-xl text-[15.33px] w-[376.41px] lg:w-[443px] lg:h-[204px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <p className="font-bold text-xs lg:text-xl">Romans 8:38-39</p>
        </div>
        <div className="flex items-center justify-center mt-[22.23px] mb-[52px]">
          <img
            src="/assets/images/prayer-5.svg"
            alt="prayer2"
            className="md:w-[351.11px] md:h-[249.92px] lg:w-[936px] lg:h-[326px]"
          />
        </div>
      </div>
    </section>
  );
};

export default PrayerSection;
