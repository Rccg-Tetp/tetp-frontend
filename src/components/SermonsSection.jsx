const SermonsSection = () => {
  return (
    <div className="bg-[url('/assets/images/img-3.svg')] bg-no-repeat bg-center bg-cover">
      <img src="/assets/images/orange-rect.svg" alt="rectangle" />
      <div className="">
        <div className="top-[49px] left-[40%] text-center text-white">
          <h2 className="text-[17px] font-normal m-0 font-lateef">LATEST</h2>
          <h1 className="text-xl mt-[15px] font-satoshi font-bold">SERMONS</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-[42px] items-center">
          {[1, 1, 1].map((item, id) => {
            return (
              <>
                <div className="" key={id}>
                  <img
                    src="/assets/images/img-4.svg"
                    alt="Bible"
                    className=""
                  />
                  <div className="w-full bottom-0 bg-white text-black pl-[22px] py-[23px]">
                    <p className="m-0 text-xs/[24px] font-medium font-satoshi">
                      Feb 26, 2024
                    </p>
                    <p className="mt-2 text-base font-bold">The love of God</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="text-center p-4">
          <a
            href="#"
            className="bg-primary text-white py-4 px-[19.5px] font-satoshi font-medium rounded-[5px] text-lg/[24px]"
          >
            See more sermons →
          </a>
        </div>
      </div>
    </div>
  );
};

export default SermonsSection;
