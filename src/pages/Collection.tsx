import { motion } from "framer-motion";
import { gemstones } from "@/data/gemstones";
import GemstoneCard from "@/components/GemstoneCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Collection = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 block">
              Our Collection
            </span>
            <h1 className="text-4xl font-bold mb-8 text-center">
              Explore Our Gemstones
            </h1>

          </motion.div>



          {/* Gemstone Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {gemstones.map((gemstone, index) => (
              <GemstoneCard key={gemstone.id} gemstone={gemstone} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-12 text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Looking for Something Special?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Our gemstone experts can help you find the perfect stone for your needs,
              whether for jewelry, healing, or collection.
            </p>
            <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
              Book a Consultation
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collection;
