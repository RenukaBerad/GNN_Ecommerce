import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Gemstone } from "@/data/gemstones";

interface GemstoneCardProps {
  gemstone: Gemstone;
  index: number;
  onOpenPreview?: (gemstone: Gemstone) => void;
}

const GemstoneCard: React.FC<GemstoneCardProps> = ({
  gemstone,
  index,
  onOpenPreview,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      className="bg-white rounded-3xl shadow-lg p-5 flex flex-col cursor-pointer"
      style={{ minHeight: "520px" }}
      whileHover={{
        y: -5,
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
      }}
      transition={{ duration: 0.3 }}
      onClick={() => navigate(`/gemstone/${(gemstone as any)._id || gemstone.id}`)}
    >
      {/* Image */}
      <div
        className="relative mb-4 rounded-2xl overflow-hidden bg-gray-100 cursor-pointer group"
        style={{ aspectRatio: "1 / 1" }}
      >
        <img
          src={gemstone.image}
          alt={gemstone.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-white/90 text-black px-4 py-2 rounded-full text-sm font-semibold shadow-md">
            View Details
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-1">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-semibold text-xl text-gray-900">
            {gemstone.name}
          </h3>
          {/* Like */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all"
            style={{ borderColor: isLiked ? "#9B2533" : "#E5E7EB" }}
          >
            <svg
              className="w-5 h-5"
              fill={isLiked ? "#9B2533" : "none"}
              stroke={isLiked ? "#9B2533" : "#9CA3AF"}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
          {gemstone.shortDescription}
        </p>

        {/* Tags */}


        {/* Footer */}
        <div className="mt-auto">
          {gemstone.price && (
            <p className="text-3xl font-bold text-gray-900 mb-4">
              {gemstone.price}
            </p>
          )}
          <div className="flex gap-3">
            <a
              href={gemstone.buyLink || "#"}
              className="flex-1 py-3 rounded-full font-semibold text-center text-white"
              style={{ backgroundColor: "#9B2533" }}
              onClick={(e) => e.stopPropagation()}
            >
              Buy Now
            </a>
            <button
              className="flex-1 py-3 rounded-full font-semibold border-2 bg-white"
              style={{ borderColor: "#9B2533", color: "#9B2533" }}
              onClick={(e) => e.stopPropagation()}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GemstoneCard;
