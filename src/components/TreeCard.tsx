import { useState } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { Tree } from "@/types/collection";

interface Props {
  tree: Tree;
  onOpenPreview?: (tree: Tree) => void;
}

const TreeCard: React.FC<Props> = ({ tree, onOpenPreview }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  return (
    <>
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
          onClick={() => onOpenPreview?.(tree)}
        >
          <img
            src={tree.image}
            alt={tree.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col px-1">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-semibold text-xl text-gray-900">{tree.name}</h3>

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

          {/* Short description */}
          <p className="text-sm text-gray-500 line-clamp-2">
            {tree.numerology}
          </p>

          {/* View More */}
          <button
            type="button"
            onClick={() => setShowDescription(true)}
            className="mt-3 self-start px-5 py-2 rounded-full text-sm font-semibold border-2"
            style={{
              borderColor: "#9B2533",
              color: "#9B2533",
            }}
          >
            View More
          </button>

          {/* Price + ACTION BUTTONS (EXACT SAME AS BRACELET) */}
          <div className="mt-auto">
            {tree.price && (
              <p className="text-3xl font-bold text-gray-900 mb-4">
                {tree.price}
              </p>
            )}

            <div className="flex gap-3">
              <a
                href={tree.buyLink || "#"}
                className="flex-1 py-3 rounded-full font-semibold text-center text-white"
                style={{ backgroundColor: "#9B2533" }}
              >
                Buy Now
              </a>

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

      {/* 🔥 PORTAL MODAL — SAME STRUCTURE AS BRACELET */}
      {showDescription &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center"
            onClick={() => setShowDescription(false)}
          >
            <div
              className="relative bg-white rounded-3xl w-[92%] max-w-5xl p-8 md:p-12"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-xl"
                onClick={() => setShowDescription(false)}
              >
                ✕
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left: Text */}
                <div>
                  <h4 className="text-2xl md:text-3xl font-semibold mb-4">
                    {tree.name}
                  </h4>

                  {tree.description?.split("\n\n").map((para, index) => (
                    <p
                      key={index}
                      className="text-gray-700 text-base leading-relaxed mb-4"
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Right: Image */}
                <div className="flex justify-center">
                  <img
                    src={tree.image}
                    alt={tree.name}
                    className="w-64 h-64 md:w-[420px] md:h-[420px] object-contain rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default TreeCard;
