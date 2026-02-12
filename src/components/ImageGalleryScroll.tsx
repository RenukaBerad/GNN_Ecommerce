import React from "react";
import { Link } from "react-router-dom";

interface GalleryItem {
    id: number;
    image: string;
    title: string;
    link: string;
}

const galleryItems: GalleryItem[] = [
    {
        id: 1,
        image: "/images/Gemstone.png",
        title: "Premium Gemstones",
        link: "/collection",
    },
    {
        id: 2,
        image: "/images/Trees.png",
        title: "Spiritual Trees",
        link: "/trees",
    },
    {
        id: 3,
        image: "/images/S-TigerEye Bracelet.png",
        title: "Healing Bracelets",
        link: "/bracelets",
    },
    {
        id: 4,
        image: "/images/section2-bg.png",
        title: "Vedic Wisdom",
        link: "/about",
    },
    {
        id: 5,
        image: "/images/slider-blue.png",
        title: "Numerology",
        link: "/contact",
    },
    {
        id: 6,
        image: "/images/slider1.png",
        title: "Astrology",
        link: "/contact",
    },
];

const ImageGalleryScroll = () => {
    // Duplicate items for seamless scrolling
    const scrollItems = [...galleryItems, ...galleryItems];

    return (
        <section className="py-12 bg-white overflow-hidden">
            <div className="relative w-full">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <div className="flex w-max animate-scroll-left">
                    {scrollItems.map((item, index) => (
                        <div
                            key={`${item.id}-${index}`}
                            className="relative w-[300px] h-[350px] mx-4 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay with Text */}
                            <Link
                                to={item.link}
                                className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]"
                            >
                                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-white text-lg font-serif font-medium tracking-wide border-b border-white/50 pb-1">
                                        {item.title}
                                    </span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
};

export default ImageGalleryScroll;
