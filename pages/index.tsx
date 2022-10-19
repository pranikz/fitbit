import Blogs from "../Components/Sections/Blogs/Blogs";
import BrandPartners from "../Components/Sections/BrandPartners/BrandPartners";
import BrowseSection from "../Components/Sections/BrowseSection/BrowseSection";
import CardSection from "../Components/Sections/CardSection/CardSection";
import Newsletter from "../Components/Sections/Newsletter/Newsletter";
import NumberSection from "../Components/Sections/NumberSection/NumberSection";
import ProductSection from "../Components/Sections/Productsection/ProductSection";
import VideoHero from "../Components/Sections/VideoHero/VideoHero";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <VideoHero />
      <BrandPartners />
      <BrowseSection />
      <CardSection />
      <NumberSection />
      <ProductSection/>
      <Blogs/>
      <Newsletter/>
      
    </div>
  );
};

export default Home;
