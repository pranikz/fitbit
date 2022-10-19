import BrandPartners from "../Components/Sections/BrandPartners/BrandPartners";
import BrowseSection from "../Components/Sections/BrowseSection/BrowseSection";
import CardSection from "../Components/Sections/CardSection/CardSection";
import VideoHero from "../Components/Sections/VideoHero/VideoHero";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <VideoHero />
      <BrandPartners />
      <BrowseSection />
      <CardSection />
    </div>
  );
};

export default Home;
