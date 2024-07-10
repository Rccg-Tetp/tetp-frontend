import EventTimer from "../../components/home/EventTimer";
import HeroSection from "../../components/home/HeroSection";
import LastService from "../../components/home/LastService";
import PrayerSection from "../../components/home/PrayerSection";
import SermonsSection from "../../components/home/SermonsSection";
import Teams from "../../components/home/Teams";
import UpcomingEvents from "../../components/home/UpcomingEvents";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <EventTimer />
      <SermonsSection />
      <PrayerSection />
      <UpcomingEvents />
      <Teams />
      <LastService />
    </div>
  );
};

export default Home;
