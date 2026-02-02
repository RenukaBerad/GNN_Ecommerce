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
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              Explore Our Gemstones
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Discover the beauty, meaning, and energy behind every stone. Each gemstone in our collection
              is hand-selected for its exceptional quality and unique spiritual properties.
            </p>
            <div className="divider-glow mt-8 max-w-xs mx-auto" />
          </motion.div>

          {/* Filter Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <button className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium transition-all duration-300">
              All Stones
            </button>
            <button className="px-5 py-2 rounded-full bg-card border border-border text-foreground text-sm font-medium hover:bg-secondary transition-all duration-300">
              Rare
            </button>
            <button className="px-5 py-2 rounded-full bg-card border border-border text-foreground text-sm font-medium hover:bg-secondary transition-all duration-300">
              Very Rare
            </button>
            <button className="px-5 py-2 rounded-full bg-card border border-border text-foreground text-sm font-medium hover:bg-secondary transition-all duration-300">
              Common
            </button>
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
