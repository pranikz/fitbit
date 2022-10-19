import BrandPartners from "../Components/Sections/BrandPartners/BrandPartners";
import VideoHero from "../Components/Sections/VideoHero/VideoHero";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <VideoHero/>
      <BrandPartners/>
    </div>
  );
};

export default Home;
