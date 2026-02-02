import { motion } from "framer-motion";
import { gemstones } from "@/data/gemstones";
import GemstoneCard from "./GemstoneCard";

const GemstoneGrid = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 block">
            Collection
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Explore Our Gemstones
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Discover the beauty, meaning, and energy behind every stone.
          </p>
          <div className="divider-glow mt-8 max-w-xs mx-auto" />
        </motion.div>

        {/* Gemstone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {gemstones.map((gemstone, index) => (
            <GemstoneCard key={gemstone.id} gemstone={gemstone} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GemstoneGrid;
