import EventTimer from "../../components/EventTimer";
import HeroSection from "../../components/HeroSection";
import LastService from "../../components/LastService";
import PrayerSection from "../../components/PrayerSection";
import SermonsSection from "../../components/SermonsSection";
import Teams from "../../components/Teams";
import UpcomingEvents from "../../components/UpcomingEvents";

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
