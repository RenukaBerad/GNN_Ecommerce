import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

// Single slide enabled for the "Clone" request using the specified image
const slides = [
  {
    image: "/images/slider-blue.png",
    title: "Gaurab Nerpagar Numerologics",
    description:
      "Unlock the ancient wisdom of numerology to reveal your true potential, understand your destiny, and navigate life's journey with clarity and purpose.",
  },
  {
    image: "/images/Trees.png",
    title: "Sacred Spiritual Trees",
    description:
      "Invite harmony and positive energy into your space with our curated collection of spiritual trees, each bringing unique blessings to your home.",
  },
  {
    image: "/images/S-TigerEye Bracelet.png",
    title: "Healing Crystal Bracelets",
    description:
      "Adorn yourself with the power of nature. Our handcrafted crystal bracelets are designed to balance your energy and enhance your well-being.",
  },
];

const HeroSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative w-full bg-background mt-0 group">
      {/* Main Hero Container - 100vh constraint */}
      <div className="hero min-h-screen relative overflow-hidden">
        {/* Embla Carousel Viewport */}
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full">
            {slides.map((slide, index) => (
              <div key={index} className="relative flex-[0_0_100%] h-screen min-w-0">
                {/* Background Image Layer */}
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-700"
                  style={{ backgroundImage: `url('${slide.image}')` }}
                />
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/30 z-0" />

                {/* Text Content */}
                <div className="hero-container z-10 w-full pl-0 flex items-center h-full relative">
                  <div className="relative p-6 md:p-14 max-w-[900px] mx-auto md:mx-0">
                    <div className="relative z-10 space-y-4 text-center md:text-left">
                      <h1
                        className="font-bold tracking-tight leading-[1.1] text-white"
                        style={{
                          fontFamily: "Matter, sans-serif",
                          fontSize: "clamp(32px, 2.8vw, 50px)",
                        }}
                      >
                        {slide.title}
                      </h1>
                      <p
                        className="text-white/90 leading-relaxed font-light italic max-w-[600px] mx-auto md:mx-0"
                        style={{
                          fontSize: "clamp(18px, 1.5vw, 22px)",
                        }}
                      >
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Navigation Buttons */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-10 group-hover:translate-x-0"
          aria-label="Next slide"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

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
