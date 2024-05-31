import EventTimer from "../../components/EventTimer";
import HeroSection from "../../components/HeroSection";
import PrayerSection from "../../components/PrayerSection";
import SermonsSection from "../../components/SermonsSection";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <EventTimer />
      <SermonsSection />
      <PrayerSection />
    </div>
  );
};

export default Home;
