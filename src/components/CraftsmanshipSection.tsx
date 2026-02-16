
import React from 'react';

const CraftsmanshipSection = () => {
    return (
        <section className="bg-[#FAF7F2] py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Column - Image/Video Placeholder */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="aspect-video w-full overflow-hidden shadow-2xl relative group rounded-lg">
                            <iframe
                                className="w-full h-full object-cover"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1&controls=1&loop=1"
                                title="The Art of Craftsmanship"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Column - Text Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                        <h2 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight font-medium tracking-tight">
                            The Art of Perfect Craftsmanship
                        </h2>

                        <p className="text-xl md:text-2xl font-serif italic text-gray-700" style={{ fontFamily: 'Georgia, serif' }}>
                            By World-Class Jewellers
                        </p>

                        <div className="w-16 h-[2px] bg-maroon/30 mx-auto lg:mx-0 my-6"></div>

                        <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-xl mx-auto lg:mx-0">
                            Every gemstone is brought to life through passion, precision, and timeless craftsmanship—made to reflect your unique story.
                        </p>

                        {/* Optional CTA matching the style */}
                        <div className="pt-4">
                            <button className="text-maroon border-b border-maroon pb-1 hover:text-maroon/80 transition-colors text-sm uppercase tracking-widest font-semibold cursor-pointer">
                                Discover More
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default CraftsmanshipSection;
