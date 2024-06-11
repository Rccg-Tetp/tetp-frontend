import YouTube from "react-youtube";
import useWidth from "../hooks/useWidth";

function LastService() {
  const { width, breakpoints } = useWidth();
  const opts = {
    height: `${width < breakpoints.md ? 455 : 485}`,
    width: `${width < breakpoints.md ? 362 : 1280}`,
  };
  return (
    <section className="md:bg-gray-custom flex flex-col items-center">
      <YouTube videoId="ln7jZLfegbc" opts={opts} className="md:mt-[75px]" />
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
