import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TreeGrid from "@/components/TreeGrid";

const Trees = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Trees</h1>
        <TreeGrid />
      </section>

      <Footer />
    </div>
  );
};

export default Trees;
