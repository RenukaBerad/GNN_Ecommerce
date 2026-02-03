import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import ProductSearchSection from "@/components/ProductSearchSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSlider />
      <ProductSearchSection />
      <Footer />
    </div>
  );
};

export default Index;


