import YouTube from "react-youtube";
import { useEffect, useState } from "react";

function LastService() {
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
  const opts = {
    height: `${width < 768 ? 455 : 485}`,
    width: `${width < 768 ? 362 : width < 1200 ? 800 : 1280}`,
  };
  return (
    <section className="md:bg-gray-custom flex flex-col items-center">
      <YouTube videoId="pFMKEYEf7Ek" opts={opts} className="md:mt-[75px]" />
      <h2 className="uppercase font-satoshi text-xl font-bold mt-[44px] md:text-3xl">
        Watch our latest service
      </h2>
      <p className="font-satoshi font-normal text-base text-center w-[350px]  mt-2 mb-[22px] md:text-lg md:w-[512px] md:mb-[45px]">
        Missed our sunday service? don&apos;t worry we gat you covered, just
        click on the video playing above.
      </p>
    </section>
  );
}

export default LastService;
