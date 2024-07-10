import Banner from "../../components/about/Banner";
import Benefit from "../../components/about/Benefit";
import ImageGallery from "../../components/about/ImageGallery";

const About = () => {
  return (
    <div className="w-full">
      <Banner />
      <ImageGallery />
      <Benefit />
    </div>
  );
};

export default About;
