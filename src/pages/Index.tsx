import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import ProductSearchSection from "@/components/ProductSearchSection";
import Footer from "@/components/Footer";
import CollectionCard from "@/components/CollectionCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSlider />
      <ProductSearchSection />

      {/* ====== Explore Collections Section ====== */}
      <section className="py-10 px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">
            Explore Our Collections
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Discover our range of gemstones, bracelets, and spiritual trees.
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8 max-w-7xl mx-auto">
          <CollectionCard
            title="Gemstones"
            image="/images/Gemstone.png"
            description="Explore our hand-selected gemstones with unique energy."
            link="/collection"
          />
          <CollectionCard
            title="Bracelets"
            image="/images/S-TigerEye Bracelet.png"
            description="Find bracelets with numerology and spiritual significance."
            link="/bracelets"
          />
          <CollectionCard
            title="Trees"
            image="/images/Trees.png"
            description="Discover mystical trees that bring energy and harmony."
            link="/trees"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
