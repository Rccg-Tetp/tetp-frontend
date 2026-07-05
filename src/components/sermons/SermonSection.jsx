import { useEffect, useState, useRef } from 'react';
import { toast } from 'react-toastify';

function SermonSection() {
  const [width, setWidth] = useState(window.innerWidth);
  const [playingId, setPlayingId] = useState(null);
  const [loadingId, setLoadingId] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [sermonsData, setSermonsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const audioRefs = useRef({});

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
    const fetchAudiomackData = async () => {
      try {
        const headers = {
          'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
          'x-rapidapi-host': import.meta.env.VITE_RAPIDAPI_HOST,
          'Content-Type': 'application/json',
        };

        // First, get artist profile to get ID
        const artistResponse = await fetch(
          'https://audiomack-scraper.p.rapidapi.com/audiomack/artist/rccgtetp',
          { headers },
        );
        const artistData = await artistResponse.json();
        console.log('Artist Data:', artistData); // Log the artist data for debugging

        if (!artistData?.results?.id) {
          console.error('Could not find artist');
          setSermonsData([]);
          setLoading(false);
          return;
        }

        // Then fetch discography
        const discographyResponse = await fetch(
          `https://audiomack-scraper.p.rapidapi.com/audiomack/artist/${artistData.results.id}/discography?type=songs&sort=date&page=1`,
          { headers },
        );
        const discographyData = await discographyResponse.json();

        if (discographyData && Array.isArray(discographyData.results)) {
          const formattedData = discographyData.results
            .slice(0, 8)
            .map((item, index) => {
              // Convert Unix timestamp to readable date (DD-MM-YYYY format)
              const releaseDate = item.released
                ? new Date(parseInt(item.released) * 1000).toLocaleDateString(
                  'en-GB',
                )
                : new Date().toLocaleDateString('en-GB');

              return {
                id: item.id || index,
                category: 'Sermon',
                title: item.title || 'Untitled',
                thumbnail: '/assets/images/sermon-thumbnail.png',
                musicId: item.id,
                duration: parseInt(item.duration) || 0,
                artist: item.artist || 'RCCG TETP',
                date: releaseDate,
              };
            });
          setSermonsData(formattedData);
        }
      } catch (error) {
        console.error('Error fetching Audiomack data:', error);
        setSermonsData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAudiomackData();
  }, []);

  const formatTime = (time) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handlePlay = async (id, musicId) => {
    if (playingId === id) {
      // Currently playing → pause it
      audioRefs.current[id].pause();
      setPlayingId(null);
    } else {
      // Pause all other audios
      Object.keys(audioRefs.current).forEach((key) => {
        if (key !== String(id)) {
          audioRefs.current[key].pause();
        }
      });

      // If audio already exists for this id (was paused), just resume
      if (audioRefs.current[id]) {
        setLoadingId(id);
        audioRefs.current[id]
          .play()
          .then(() => setLoadingId(null))
          .catch((err) => {
            console.error('Play error:', err);
            setLoadingId(null);
            toast.error('Unable to play audio. Please try again.');
          });
        setPlayingId(id);
        return;
      }

      try {
        setLoadingId(id);
        const headers = {
          'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
          'x-rapidapi-host': import.meta.env.VITE_RAPIDAPI_HOST,
          'Content-Type': 'application/json',
        };

        // Fetch streaming URL from RapidAPI
        const response = await fetch(
          `https://audiomack-scraper.p.rapidapi.com/audiomack/song/${musicId}/play`,
          { headers },
        );

        const streamData = await response.json();
        const streamingUrl =
          streamData?.signedUrl || streamData?.url || streamData?.stream_url;

        if (!streamingUrl) {
          console.error('No streaming URL available');
          setLoadingId(null);
          toast.error('Unable to play audio. Please try again.');
          return;
        }

        // Create new audio element with fresh listeners
        const audio = new Audio(streamingUrl);

        audio.oncanplay = () => {
          setLoadingId(null);
        };

        audio.ontimeupdate = () => {
          setCurrentTime(audio.currentTime);
        };

        audio.onloadedmetadata = () => {
          setDuration(audio.duration);
        };

        audio.onended = () => {
          setPlayingId(null);
          setCurrentTime(0);
          // Clear the ref so next click fetches a fresh URL
          delete audioRefs.current[id];
        };

        audioRefs.current[id] = audio;
        audio.play().catch((err) => {
          console.error('Play error:', err);
          setLoadingId(null);
          toast.error('Unable to play audio. Please try again.', {
            progress: 0
          });
        });
        setPlayingId(id);
      } catch (error) {
        console.error('Error fetching streaming URL:', error);
        setLoadingId(null);
        toast.error('Unable to play audio. Please try again.', { progress: 0 });
      }
    }
  };

  const handleSeek = (id, newTime) => {
    if (audioRefs.current[id]) {
      audioRefs.current[id].currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  if (loading) {
    return (
      <section className="w-full">
        <div className="flex flex-col items-center bg-[#FEF0EC] pb-[90px] md:pb-[108px] min-h-[500px]">
          <div className="flex items-center justify-center pt-20">
            <div className="animate-spin rounded-full h-12 w-12 border-2 border-[#F14A16] border-t-transparent"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full">
      <div className="flex flex-col items-center bg-[#FEF0EC] pb-[90px] md:pb-[108px]">
        <h2 className="font-satoshi font-bold text-xl/[64px] tracking-[-0.01em] mt-[11px] mb-[23px] md:mb-[35px] md:mt-[37px]">
          ALL SERMONS
        </h2>

        <div className="grid grid-cols-1 gap-[49px] font-satoshi md:grid-cols-2 lg:grid-cols-4 md:gap-6 cursor-pointer">
          {sermonsData.map((item, id) => {
            const isPlaying = playingId === item.id;
            const isLoadingThis = loadingId === item.id;
            const progressPercent = duration
              ? (currentTime / duration) * 100
              : 0;
            return (
              <div
                key={item.id}
                className={`bg-white w-[302px] flex flex-col items-start pt-[24px] px-[16px] pb-[24px] relative transition-all duration-300 rounded-lg overflow-hidden ${width < 900 && id > 3 ? 'hidden' : 'flex'
                  } ${isPlaying ? 'border-b-[6px] border-[#F14A16]' : 'border-b-[6px] border-white'}`}
              >
                <p className="font-lateef uppercase text-[#F14A16] font-normal text-xs/[17.35px] tracking-[0.08em]">
                  {item.category}
                </p>
                <h2 className="text-lg/[24px] font-bold w-full uppercase tracking-[-0.01em] text-[#161722] mt-[13px] mb-[18px] line-clamp-2">
                  {item.title}
                </h2>

                {/* Enlarged Thumbnail */}
                <div className="w-full h-[200px] rounded-[12px] overflow-hidden mb-[16px]">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Artist and Date */}
                <div className="w-full mb-6">
                  <p className="text-sm font-normal text-[#161722]">
                    By {item.artist}
                  </p>
                  <p className="font-light text-xs text-[#161722] mt-1">
                    {item.date}
                  </p>
                </div>

                {/* Audio Controls */}
                <div className="w-full flex items-center gap-2">
                  {!isPlaying ? (
                    <>
                      <button
                        onClick={() => handlePlay(item.id, item.musicId)}
                        disabled={isLoadingThis}
                        className={`w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition flex-shrink-0 ${isLoadingThis ? 'bg-[#F14A16]' : 'bg-gray-300'
                          }`}
                        aria-label={isLoadingThis ? 'Loading audio' : 'Play audio'}
                      >
                        {isLoadingThis ? (
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="animate-spin"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="white"
                              strokeWidth="3"
                              strokeDasharray="32"
                              strokeDashoffset="12"
                              strokeLinecap="round"
                            />
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        )}
                      </button>

                      <span className="text-xs text-[#161722] font-medium min-w-[35px]">
                        00:00
                      </span>
                      <div className="flex-1 h-1 bg-gray-300 rounded-full" />
                      <span className="text-xs text-[#161722] font-medium min-w-[35px] text-right">
                        {formatTime(item.duration)}
                      </span>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handlePlay(item.id, item.musicId)}
                        className="w-10 h-10 rounded-full bg-[#F14A16] flex items-center justify-center hover:opacity-80 transition flex-shrink-0"
                        aria-label="Pause audio"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="white"
                        >
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                      </button>

                      <span className="text-xs text-[#161722] font-medium min-w-[35px]">
                        {formatTime(currentTime)}
                      </span>
                      <div className="flex-1 h-2 bg-gray-300 rounded-full overflow-hidden relative cursor-pointer group">
                        <div
                          className="h-full bg-[#F14A16] rounded-full transition-all duration-75"
                          style={{ width: `${progressPercent}%` }}
                        />
                        <input
                          type="range"
                          min="0"
                          max={duration || 0}
                          value={currentTime}
                          onChange={(e) =>
                            handleSeek(item.id, parseFloat(e.target.value))
                          }
                          className="absolute top-1/2 left-0 w-full h-3 opacity-0 cursor-pointer transform -translate-y-1/2"
                        />
                      </div>
                      <span className="text-xs text-[#161722] font-medium min-w-[35px] text-right">
                        {formatTime(item.duration)}
                      </span>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SermonSection;
