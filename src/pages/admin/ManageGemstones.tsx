import { useState, useEffect } from "react";
import api from "@/lib/api";
import Navbar from "@/components/Navbar";
import GemstoneForm from "@/components/admin/GemstoneForm";
import { Trash, Edit, Plus } from "lucide-react";
import { toast } from "sonner";

const ManageGemstones = () => {
    const [gemstones, setGemstones] = useState<any[]>([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentGemstone, setCurrentGemstone] = useState<any>(null);

    const fetchGemstones = async () => {
        try {
            const { data } = await api.get("/products/gemstones");
            setGemstones(data);
        } catch (error) {
            console.error("Failed to fetch gemstones", error);
        }
    };

    useEffect(() => {
        fetchGemstones();
    }, []);

    const handleDelete = async (id: string) => {
        if (window.confirm("Are you sure you want to delete this gemstone?")) {
            try {
                await api.delete(`/products/gemstones/${id}`);
                toast.success("Gemstone deleted");
                fetchGemstones();
            } catch (error) {
                toast.error("Failed to delete gemstone");
            }
        }
    };

    const handleEdit = (gemstone: any) => {
        setCurrentGemstone(gemstone);
        setIsEditing(true);
    };

    const handleCreate = () => {
        setCurrentGemstone(null);
        setIsEditing(true);
    };

    const handleSuccess = () => {
        setIsEditing(false);
        fetchGemstones();
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold font-display">Manage Gemstones</h1>
                    {!isEditing && (
                        <button
                            onClick={handleCreate}
                            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                        >
                            <Plus className="w-4 h-4" /> Add Gemstone
                        </button>
                    )}
                </div>

                {isEditing ? (
                    <div className="glass-card p-6 mb-8">
                        <h2 className="text-xl font-bold mb-4">{currentGemstone ? "Edit Gemstone" : "Add New Gemstone"}</h2>
                        <GemstoneForm
                            onSuccess={handleSuccess}
                            initialData={currentGemstone}
                            onCancel={() => setIsEditing(false)}
                        />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {gemstones.map((gemstone) => (
                            <div key={gemstone._id} className="glass-card p-4 flex flex-col gap-4">
                                <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                                    <img src={gemstone.image} alt={gemstone.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">{gemstone.name}</h3>
                                    <p className="text-sm text-muted-foreground line-clamp-2">{gemstone.shortDescription}</p>
                                    <p className="font-semibold mt-2">{gemstone.price}</p>
                                </div>
                                <div className="flex gap-2 mt-auto">
                                    <button onClick={() => handleEdit(gemstone)} className="flex-1 px-3 py-2 bg-secondary text-foreground rounded hover:bg-muted flex items-center justify-center gap-2">
                                        <Edit className="w-4 h-4" /> Edit
                                    </button>
                                    <button onClick={() => handleDelete(gemstone._id)} className="flex-1 px-3 py-2 bg-destructive/10 text-destructive rounded hover:bg-destructive/20 flex items-center justify-center gap-2">
                                        <Trash className="w-4 h-4" /> Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManageGemstones;
