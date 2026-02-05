import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

// Single slide enabled for the "Clone" request using the specified image
const slides = [
  {
    image: "/images/slider-blue.png", // Using the user's uploaded image (Blue Aurum)
    title: "Gaurab Nerpagar Numerologics",
    description:
      "Unlock the ancient wisdom of numerology to reveal your true potential, understand your destiny, and navigate life's journey with clarity and purpose.",
  },
];

const HeroSlider = () => {
  // Note: Carousel hook kept if needed for multiple slides later, but layout is now grid-based per request
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 40 });

  return (
    <div className="relative w-full bg-background mt-0">
      {/* Main Hero Container - 100vh constraint */}
      <div className="hero min-h-screen flex items-center relative overflow-hidden">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${slides[0].image})`, opacity: 1 }}
        />

        {/* Text Content Overlay - Centered/Left aligned matching screenshot */}
        {/* Custom Gradient Background Overlay - CSS Gradient for true transparency */}

        {/* TEXT SAFE ZONE - Restricted to Left Side with Custom Background */}
        <div className="hero-container z-10 w-full pl-0 flex items-center h-full">
          <div className="relative p-6 md:p-14 max-w-[900px] mx-auto md:mx-0">
            {/* Text Content */}
            <div className="relative z-10 space-y-4 text-center md:text-left">
              <h1
                className="font-bold tracking-tight leading-[1.1] text-white "
                style={{
                  fontFamily: "Matter, sans-serif",
                  fontSize: "clamp(32px, 2.8vw, 50px)",
                }}
              >
                {slides[0].title}
              </h1>
              <p
                className="text-white/90 leading-relaxed font-light italic max-w-[600px]"
                style={{
                  fontSize: "clamp(18px, 1.5vw, 22px)",
                }}
              >
                {slides[0].description}
              </p>
            </div>
          </div>
        </div>

        {/* Marquee - Absolute at bottom of hero section */}
        <div
          className="absolute bottom-0 left-0 right-0 w-full overflow-hidden flex items-center z-20"
          style={{
            height: "100px",
            backgroundColor: "#9B2533", // Maroon
            boxShadow: "0px -9px 9.4px 0px #00000040",
          }}
        >
          {/* Infinite Scroll Container for Seamless Loop */}
          <div className="flex w-full whitespace-nowrap">
            {[0, 1].map((i) => (
              <motion.div
                key={i}
                className="flex shrink-0 items-center justify-around gap-16 gap-x-16 min-w-full"
                animate={{ x: "-100%" }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <span
                  className="flex items-center gap-4 text-white text-[20px] font-normal uppercase tracking-wide"
                  style={{ fontFamily: "Matter, sans-serif" }}
                >
                  Book your consultation @ Rs. 499{" "}
                  <span className="line-through opacity-70">Rs. 699</span>
                </span>
                <span
                  className="flex items-center gap-4 text-white text-[20px] font-normal uppercase tracking-wide italic font-semibold"
                  style={{ fontFamily: "Matter, sans-serif" }}
                >
                  Slots are limited
                </span>
                <span
                  className="flex items-center gap-4 text-white text-[20px] font-normal uppercase tracking-wide font-bold"
                  style={{ fontFamily: "Matter, sans-serif" }}
                >
                  Reserve yours now !!
                </span>
                <span className="text-white">•</span>
                <span
                  className="flex items-center gap-4 text-white text-[20px] font-normal uppercase tracking-wide"
                  style={{ fontFamily: "Matter, sans-serif" }}
                >
                  Book your consultation @ Rs. 499{" "}
                  <span className="line-through opacity-70">Rs. 699</span>
                </span>
                <span
                  className="flex items-center gap-4 text-white text-[20px] font-normal uppercase tracking-wide italic font-semibold"
                  style={{ fontFamily: "Matter, sans-serif" }}
                >
                  Slots are limited
                </span>
                <span
                  className="flex items-center gap-4 text-white text-[20px] font-normal uppercase tracking-wide font-bold"
                  style={{ fontFamily: "Matter, sans-serif" }}
                >
                  Reserve yours now !!
                </span>
                <span className="text-white">•</span>
                <span
                  className="flex items-center gap-4 text-white text-[20px] font-normal uppercase tracking-wide"
                  style={{ fontFamily: "Matter, sans-serif" }}
                >
                  Book your consultation @ Rs. 499{" "}
                  <span className="line-through opacity-70">Rs. 699</span>
                </span>
                <span
                  className="flex items-center gap-4 text-white text-[20px] font-normal uppercase tracking-wide italic font-semibold"
                  style={{ fontFamily: "Matter, sans-serif" }}
                >
                  Slots are limited
                </span>
                <span
                  className="flex items-center gap-4 text-white text-[20px] font-normal uppercase tracking-wide font-bold"
                  style={{ fontFamily: "Matter, sans-serif" }}
                >
                  Reserve yours now !!
                </span>
                <span className="text-white pr-16">•</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
