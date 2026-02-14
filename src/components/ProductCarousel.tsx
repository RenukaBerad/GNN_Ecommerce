import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCarouselProps<T> {
    title: string;
    products: T[];
    renderCard: (product: T) => React.ReactNode;
    viewAllLink: string;
    className?: string;
}

const ProductCarousel = <T extends { _id: string; id?: string }>({
    title,
    products,
    renderCard,
    viewAllLink,
    className = "",
}: ProductCarouselProps<T>) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        slidesToScroll: 1,
        loop: false,
    });

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const updateScrollButtons = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", updateScrollButtons);
        emblaApi.on("reInit", updateScrollButtons);
        updateScrollButtons();
    }, [emblaApi, updateScrollButtons]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    if (!products || products.length === 0) return null;

    return (
        <section className={`py-16 px-2 sm:px-4 md:px-6 lg:px-8 group ${className}`}>
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">{title}</h2>
                    </div>
                    <Link
                        to={viewAllLink}
                        className="text-maroon font-semibold hover:underline hidden sm:block"
                    >
                        View All
                    </Link>
                </div>

                <div className="relative">
                    <div className="overflow-hidden p-4 -m-4" ref={emblaRef}>
                        <div className="flex -ml-4">
                            {products.map((product) => (
                                <div
                                    key={product._id || product.id}
                                    className="pl-4 flex-[0_0_85%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] min-w-0"
                                >
                                    {renderCard(product)}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    {canScrollPrev && (
                        <button
                            onClick={scrollPrev}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-maroon hover:bg-maroon hover:text-white transition-all duration-300 border border-gray-100 opacity-0 group-hover:opacity-100"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                    )}

                    {canScrollNext && (
                        <button
                            onClick={scrollNext}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-maroon hover:bg-maroon hover:text-white transition-all duration-300 border border-gray-100 opacity-0 group-hover:opacity-100"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    )}
                </div>

                <div className="mt-8 text-center sm:hidden">
                    <Link
                        to={viewAllLink}
                        className="text-maroon font-semibold hover:underline"
                    >
                        View All {title}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductCarousel;
