import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedContent from "@/components/FeaturedContent";
import NewsSection from "@/components/NewsSection";
import OptionsGrid from "@/components/OptionsGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-dota-dark text-white">
      <Navbar />
      <HeroSection />
      <NewsSection />
      <OptionsGrid />
      <Footer />
    </div>
  );
};

export default Index;