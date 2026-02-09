import BraceletCard from "./BraceletCard";
import { useState, useEffect } from "react";
import api from "@/lib/api";
import { motion } from "framer-motion";

const BraceletGrid = () => {
  const [bracelets, setBracelets] = useState<any[]>([]);

  useEffect(() => {
    const fetchBracelets = async () => {
      try {
        const { data } = await api.get("/products/bracelets");
        setBracelets(data);
      } catch (error) {
        console.error("Failed to fetch bracelets", error);
      }
    };
    fetchBracelets();
  }, []);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 mb-24">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {bracelets.map((bracelet) => (
          <BraceletCard key={bracelet._id} bracelet={bracelet} />
        ))}
      </motion.div>
    </section>
  );
};

export default BraceletGrid;
