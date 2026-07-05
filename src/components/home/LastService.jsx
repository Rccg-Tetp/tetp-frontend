import YouTube from 'react-youtube';
import { useEffect, useState } from 'react';

function LastService() {
  const [width, setWidth] = useState(() => window.innerWidth);
  const [latestVideoId, setLatestVideoId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchLatestVideo = async () => {
      setIsLoading(true);

      if (!API_KEY || !CHANNEL_ID) {
        console.warn('YouTube API key or channel ID is missing.');
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&order=date&part=snippet&type=video&maxResults=5`,
        );

        if (!response.ok) {
          throw new Error(
            `YouTube API request failed with status ${response.status}`,
          );
        }

        const data = await response.json();
        const video = data.items?.find((item) => item.id?.videoId);

        if (video?.id?.videoId) {
          setLatestVideoId(video.id.videoId);
        }
      } catch (error) {
        console.error('Error fetching latest video:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLatestVideo();
  }, [API_KEY, CHANNEL_ID]);

  const opts = {
    height: `${width < 768 ? 455 : 485}`,
    width: `${width < 768 ? 362 : width < 1200 ? 800 : 1280}`,
  };
  return (
    <section className="md:bg-gray-custom flex flex-col items-center">
      {isLoading ? (
        <div className="flex justify-center mt-[44px]">
          <div className="animate-spin rounded-full h-5 w-5 border-2 border-b-[#d0d0ce3e] border-[#F14A16CC]"></div>
        </div>
      ) : latestVideoId ? (
        <YouTube videoId={latestVideoId} opts={opts} className="md:mt-[75px]" />
      ) : (
        <p className="mt-[44px] text-center text-sm text-gray-600">
          The latest service video is currently unavailable.
        </p>
      )}
      <h2 className="uppercase font-satoshi text-xl font-bold mt-[44px] md:text-3xl">
        Watch our latest service
      </h2>
      <p className="font-satoshi font-normal text-base text-center w-[350px]  mt-2 mb-[22px] md:text-lg md:w-[512px] md:mb-[45px]">
        Missed the last service? don&apos;t worry we've got you covered, just
        click on the video playing above.
      </p>
    </section>
  );
}

export default LastService;
