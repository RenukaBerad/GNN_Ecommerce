import BraceletCard from "./BraceletCard";
import { bracelets } from "@/data/bracelet"; // your bracelet data
import { motion } from "framer-motion";

const BraceletGrid = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 mb-24">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {bracelets.map((bracelet) => (
          <BraceletCard key={bracelet.id} bracelet={bracelet} />
        ))}
      </motion.div>
    </section>
  );
};

export default BraceletGrid;
