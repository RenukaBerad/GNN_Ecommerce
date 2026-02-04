import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BraceletGrid from "@/components/BraceletGrid";

const Bracelets = () => {
  return (
    <div className="min-h-screen pb-32">
      <Navbar />

      <section className="pt-32 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Bracelets</h1>
        <BraceletGrid />
      </section>

      <Footer />
    </div>
  );
};

export default Bracelets;
