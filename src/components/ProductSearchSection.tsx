import React from 'react';
import { ChevronDown } from 'lucide-react';

const ProductSearchSection = () => {
    return (
        <section className="relative w-full py-16 md:py-28 bg-cover bg-center" style={{ backgroundImage: 'url("/images/section2-bg.png")' }}>
            {/* Content Container */}
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex justify-end">

                    {/* Search Card */}
                    <div className="bg-white rounded-xl shadow-2xl p-8 md:p-10 w-full max-w-[500px]">
                        <h2
                            className="text-3xl md:text-4xl text-center text-[#1A1A1A] mb-8"
                            style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                            Find the Right Product
                        </h2>

                        <form className="space-y-6">
                            {/* Category */}
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-[#555] uppercase tracking-wide">Category</label>
                                <div className="relative">
                                    <select className="w-full p-4 pr-10 border border-gray-200 rounded-lg text-gray-500 appearance-none focus:outline-none focus:border-[#9B2533] transition-colors bg-white">
                                        <option>Select Category</option>
                                        <option>Gemstones</option>
                                        <option>Jewelry</option>
                                        <option>Numerology</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                                </div>
                            </div>

                            {/* Product Type */}
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-[#555] uppercase tracking-wide">Product Type</label>
                                <div className="relative">
                                    <select className="w-full p-4 pr-10 border border-gray-200 rounded-lg text-gray-500 appearance-none focus:outline-none focus:border-[#9B2533] transition-colors bg-white">
                                        <option>Select Product Type</option>
                                        <option>Rings</option>
                                        <option>Necklaces</option>
                                        <option>Bracelets</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                                </div>
                            </div>

                            {/* Price Range */}
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-[#555] uppercase tracking-wide">Price Range</label>
                                <div className="relative">
                                    <select className="w-full p-4 pr-10 border border-gray-200 rounded-lg text-gray-500 appearance-none focus:outline-none focus:border-[#9B2533] transition-colors bg-white">
                                        <option>Select Price</option>
                                        <option>Below ₹5000</option>
                                        <option>₹5000 - ₹20000</option>
                                        <option>Above ₹20000</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                                </div>
                            </div>

                            {/* Search Button */}
                            <button
                                type="button"
                                className="w-full bg-[#9B2533] text-white font-bold py-4 rounded-lg tracking-wider hover:bg-[#7a1c27] transition-colors mt-4"
                            >
                                SEARCH
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductSearchSection;
