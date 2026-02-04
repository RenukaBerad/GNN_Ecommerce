import { useState } from "react";
import { motion } from "framer-motion";
import { Bracelet } from "@/types/collection";

interface Props {
  bracelet: Bracelet;
  onOpenPreview?: (bracelet: Bracelet) => void;
}

const BraceletCard: React.FC<Props> = ({ bracelet, onOpenPreview }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-3xl shadow-lg p-5 flex flex-col"
      style={{ minHeight: "520px" }}
      whileHover={{
        y: -5,
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <div
        className="relative mb-4 rounded-2xl overflow-hidden bg-gray-100 cursor-zoom-in group"
        style={{ aspectRatio: "1 / 1" }}
        onClick={() => onOpenPreview?.(bracelet)}
      >
        <img
          src={bracelet.image}
          alt={bracelet.name}
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
            {bracelet.name}
          </h3>

          {/* Like button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all"
            style={{ borderColor: isLiked ? "#FE7028" : "#E5E7EB" }}
          >
            <svg
              className="w-5 h-5"
              fill={isLiked ? "#FE7028" : "none"}
              stroke={isLiked ? "#FE7028" : "#9CA3AF"}
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
          {bracelet.numerology}
        </p>

        {/* Footer */}
        <div className="mt-auto">
          {bracelet.price && (
            <p className="text-3xl font-bold text-gray-900 mb-4">
              {bracelet.price}
            </p>
          )}

          <div className="flex gap-3">
            {/* Buy Now */}
            <a
              href={bracelet.buyLink}
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-3 rounded-full font-semibold text-center text-white"
              style={{ backgroundColor: "#9B2533" }}
            >
              Buy Now
            </a>

            {/* Add to Cart */}
            <button
              className="flex-1 py-3 rounded-full font-semibold border-2 bg-white"
              style={{
                borderColor: "#9B2533",
                color: "#9B2533",
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BraceletCard;
