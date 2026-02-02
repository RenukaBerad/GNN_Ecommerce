import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Gemstone } from "@/data/gemstones";

interface GemstoneCardProps {
  gemstone: Gemstone;
  index: number;
}

const GemstoneCard = ({ gemstone, index }: GemstoneCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/gemstone/${gemstone.id}`);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      onClick={handleClick}
      className="group cursor-pointer"
    >
      <div
        className={`glass-card h-full transition-all duration-500 group-hover:${gemstone.glowClass}`}
        style={{
          boxShadow: "var(--shadow-card)",
        }}
      >
        {/* Hover glow overlay */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl ${gemstone.glowClass}`}
          style={{ zIndex: -1 }}
        />

        {/* Image Container */}
        <div className="relative h-56 overflow-hidden rounded-t-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 z-10" />
          <motion.img
            src={gemstone.image}
            alt={gemstone.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Floating particles effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/60 animate-float" />
            <div className="absolute top-8 right-8 w-1 h-1 rounded-full bg-primary/40 animate-float animation-delay-200" />
            <div className="absolute top-12 right-6 w-1.5 h-1.5 rounded-full bg-primary/50 animate-float animation-delay-400" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <h3 className="font-display text-2xl font-semibold tracking-wide text-foreground group-hover:text-primary transition-colors duration-300">
            {gemstone.name}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {gemstone.shortDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <span className="gem-tag">{gemstone.color}</span>
            <span className="gem-tag">{gemstone.zodiac}</span>
            <span className="gem-tag">{gemstone.rarity}</span>
          </div>

          {/* View Details Link */}
          <div className="pt-2 flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all duration-300">
            <span>View Details</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default GemstoneCard;
