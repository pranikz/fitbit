import Blogs from "../Components/Sections/Blogs/Blogs";
import BrandPartners from "../Components/Sections/BrandPartners/BrandPartners";
import BrowseSection from "../Components/Sections/BrowseSection/BrowseSection";
import CardSection from "../Components/Sections/CardSection/CardSection";
import NumberSection from "../Components/Sections/NumberSection/NumberSection";
import VideoHero from "../Components/Sections/VideoHero/VideoHero";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <VideoHero />
      <BrandPartners />
      {/* <BrowseSection /> */}
      <CardSection />
      <NumberSection />
      <Blogs/>
      
    </div>
  );
};

export default Home;
