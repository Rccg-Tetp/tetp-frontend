import Banner from "../../components/sermons/Banner";
import Recent from "../../components/sermons/Recent";
import SermonsSection from "../../components/sermons/SermonSection";

const Sermons = () => {
  return (
    <div className="w-full">
      <Banner />
      <Recent />
      <SermonsSection />
    </div>
  );
};

export default Sermons;
