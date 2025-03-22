import YouTube from "react-youtube";
import { useEffect, useState } from "react";

function LastService() {
  const [width, setWidth] = useState(window.innerWidth);
  const [latestVideoId, setLatestVideoId] = useState(null);

  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&order=date&part=snippet&type=video&maxResults=4`
        );
        const data = await response.json();
        let lastSundayVideo = null;
        if (data.items && data.items.length > 0) {
          console.log(data.items);
          for (let video of data.items) {
            const publishedDate = new Date(video.snippet.publishedAt);
            // Check if the video was published on a Sunday (0 represents Sunday)
            if (publishedDate.getDay() === 0) {
              // If this is the first Sunday video or a more recent one, update lastSundayVideo
              if (
                !lastSundayVideo ||
                publishedDate > new Date(lastSundayVideo.snippet.publishedAt)
              ) {
                lastSundayVideo = video;
              }
            }
          }
          if (lastSundayVideo) {
            setLatestVideoId(lastSundayVideo.id.videoId);
          } else {
            console.log("No video posted on a Sunday.");
          }
        }
      } catch (error) {
        console.error("Error fetching latest video:", error);
      }
    };

    fetchLatestVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const opts = {
    height: `${width < 768 ? 455 : 485}`,
    width: `${width < 768 ? 362 : width < 1200 ? 800 : 1280}`,
  };
  return (
    <section className="md:bg-gray-custom flex flex-col items-center">
      {latestVideoId ? (
        <YouTube videoId={latestVideoId} opts={opts} className="md:mt-[75px]" />
      ) : (
        <div className="flex justify-center mt-[44px]">
          <div className="animate-spin rounded-full h-5 w-5 border-2 border-b-[#d0d0ce3e]  border-[#F14A16CC]"></div>
        </div>
      )}
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
