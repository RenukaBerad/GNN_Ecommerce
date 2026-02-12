import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import api from "@/lib/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GemstoneCard from "@/components/GemstoneCard";
import TreeCard from "@/components/TreeCard";
import BraceletCard from "@/components/BraceletCard";
import { Loader2 } from "lucide-react";
import { Gemstone, Tree, Bracelet } from "@/types/collection";

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const query = searchParams.get("query");
    const category = searchParams.get("category");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");

    useEffect(() => {
        const fetchResults = async () => {
            setLoading(true);
            try {
                const params = new URLSearchParams();
                if (query) params.append("query", query);
                if (category) params.append("category", category);
                if (minPrice) params.append("minPrice", minPrice);
                if (maxPrice) params.append("maxPrice", maxPrice);

                const { data } = await api.get(`/products/search?${params.toString()}`);
                setResults(data);
            } catch (error) {
                console.error("Search failed", error);
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [query, category, minPrice, maxPrice]);

    const renderCard = (item: any, index: number) => {
        if (item.type === 'gemstone') return <GemstoneCard key={item._id} gemstone={item} index={index} />;
        if (item.type === 'tree') return <TreeCard key={item._id} tree={item} />;
        if (item.type === 'bracelet') return <BraceletCard key={item._id} bracelet={item} />;
        return null;
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-16 px-4">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold mb-8 text-center font-display">
                        Search Results
                        {query && <span className="text-muted-foreground ml-2">for "{query}"</span>}
                    </h1>

                    {loading ? (
                        <div className="flex justify-center py-20">
                            <Loader2 className="w-10 h-10 animate-spin text-primary" />
                        </div>
                    ) : results.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {results.map((item, index) => renderCard(item, index))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <h2 className="text-xl text-muted-foreground mb-4">No products found for your criteria.</h2>
                            <button
                                onClick={() => navigate('/collection')}
                                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90"
                            >
                                Browse All Collections
                            </button>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default SearchResults;
