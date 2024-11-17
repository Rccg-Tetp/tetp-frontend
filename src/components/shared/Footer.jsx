const Footer = () => {
  return (
    <section>
      <div
        id="top-div"
        className="bg-[#F14A16CC] text-white flex flex-col font-satoshi pb-[123px] md:flex-row md:justify-center md:gap-11 lg:gap-0"
      >
        <div className="flex flex-col items-center mt-[38px] md:items-start md:mt-[40px] lg:ml-[77px] lg:pr-[121px] order-1">
          <img
            src="/assets/icons/logo-white.svg"
            alt="logo"
            height={53}
            width={53}
          />
          <h3 className="text-sm/[18.9px] font-bold mt-[15px] md:w-[164px]">
            Rccg/The Everlasting Truth Parish
          </h3>
          <p className="text-xs font-normal mt-[9px] text-center w-[267px] md:w-[211px] md:text-left">
            Havillah hall. Ground plaza, Newsworld building, Amac plaza,
            Heritage house, Wuse zone 3, Abuja.
          </p>
        </div>

        <div className="hidden md:flex flex-col items-center mt-[15px] md:mt-[48px] md:items-start lg:pr-[170px] md:order-2">
          <h3 className="text-sm/[18.9px] font-bold">About us</h3>
          <div className="text-[10px]/[13.5px] font-normal mt-[15px] text-center flex gap-8 md:flex-col md:gap-[15px] md:text-left">
            <a href="#">Home</a>
            <a href="#">Sermon</a>
            <a href="#">About </a>
            <a href="#">Events </a>
            <a href="#">Announcement </a>
            <a href="#">Donations </a>
          </div>
        </div>

        <div className="flex flex-col items-center mt-[22px] md:items-start md:mt-[48px] md:w-[183px] md:order-4 order-2 lg:mr-[158px]">
          <h3 className="text-sm/[18.9px] font-bold md:text-start">Service</h3>
          <p className="text-xs font-normal mt-[16px] text-center md:text-start">
            Digging deep (Every Tuesday, 6pm-7:30pm)
          </p>
          <p className="text-xs font-normal mt-[24px] text-center md:text-start">
            Faith clinic (Every Thursday, 6pm-7:30pm)
          </p>
          <p className="text-xs font-normal mt-[24px] text-center md:text-start">
            Celebration service (Every sunday, 8:45am-10:30am)
          </p>
        </div>

        <div
          className="flex flex-col items-center mt-[15px] md:mt-[48px] md:items-start md:order-3 order-3 lg:mr-[179px]"
          id="media"
        >
          <h3 className="text-sm/[18.9px] font-bold">Media</h3>
          <div className="text-[10px]/[13.5px] font-normal mt-[15px] text-center flex gap-8 md:flex-col md:gap-[15px] md:text-left">
            <a href="#">Watch Live</a>
            <a href="#">Youtube</a>
            <a href="#">Audiomack </a>
          </div>
        </div>

        <div className="flex flex-col items-center mt-[15px] md:mt-[48px] md:items-start order-5">
          <h3 className="text-sm/[18.9px] font-bold">Connect</h3>
          <div className="text-[10px]/[13.5px] font-normal mt-[15px] text-center flex gap-8 md:flex-col md:gap-[15px] md:text-left">
            <a href="#">Join a group</a>
            <a href="#">House fellowship</a>
            <a href="#">Instagram </a>
            <a href="#">Facebook </a>
          </div>
          <div className="text-[10px]/[13.5px] font-normal mt-[15px] text-center flex gap-8">
            <a href="#">Youtube </a>
          </div>
        </div>
      </div>
      <div
        id="bottom-nav"
        className="bg-black text-white h-[47px] text-sm flex items-center justify-center md:w-full"
      >
        <p>
          &copy; Copyright Rccg/The everlasting truth parish, All rights
          reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
