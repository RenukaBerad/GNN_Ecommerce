import { useState, useEffect } from "react";
import api from "@/lib/api";
import Navbar from "@/components/Navbar";
import SimpleProductForm from "@/components/admin/SimpleProductForm";
import { Trash, Edit, Plus } from "lucide-react";
import { toast } from "sonner";

const ManageBracelets = () => {
    const [bracelets, setBracelets] = useState<any[]>([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentBracelet, setCurrentBracelet] = useState<any>(null);

    const fetchBracelets = async () => {
        try {
            const { data } = await api.get("/products/bracelets");
            setBracelets(data);
        } catch (error) {
            console.error("Failed to fetch bracelets", error);
        }
    };

    useEffect(() => {
        fetchBracelets();
    }, []);

    const handleDelete = async (id: string) => {
        if (window.confirm("Are you sure you want to delete this bracelet?")) {
            try {
                await api.delete(`/products/bracelets/${id}`);
                toast.success("Bracelet deleted");
                fetchBracelets();
            } catch (error) {
                toast.error("Failed to delete bracelet");
            }
        }
    };

    const handleEdit = (bracelet: any) => {
        setCurrentBracelet(bracelet);
        setIsEditing(true);
    };

    const handleCreate = () => {
        setCurrentBracelet(null);
        setIsEditing(true);
    };

    const handleSuccess = () => {
        setIsEditing(false);
        fetchBracelets();
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold font-display">Manage Bracelets</h1>
                    {!isEditing && (
                        <button
                            onClick={handleCreate}
                            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                        >
                            <Plus className="w-4 h-4" /> Add Bracelet
                        </button>
                    )}
                </div>

                {isEditing ? (
                    <div className="glass-card p-6 mb-8">
                        <h2 className="text-xl font-bold mb-4">{currentBracelet ? "Edit Bracelet" : "Add New Bracelet"}</h2>
                        <SimpleProductForm
                            type="bracelets"
                            onSuccess={handleSuccess}
                            initialData={currentBracelet}
                            onCancel={() => setIsEditing(false)}
                        />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {bracelets.map((bracelet) => (
                            <div key={bracelet._id} className="bg-white rounded-3xl shadow-lg p-5 flex flex-col gap-4" style={{ minHeight: "520px" }}>
                                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 relative group">
                                    <img src={bracelet.image} alt={bracelet.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-xl text-gray-900">{bracelet.name}</h3>
                                    <p className="text-sm text-gray-500 line-clamp-2 mt-1">{bracelet.numerology}</p>
                                    <p className="font-bold mt-2 text-lg text-gray-900">{bracelet.price}</p>
                                </div>
                                <div className="flex gap-2 mt-auto">
                                    <button onClick={() => handleEdit(bracelet)} className="flex-1 px-3 py-2 bg-secondary text-foreground rounded-lg hover:bg-muted flex items-center justify-center gap-2 transition-colors">
                                        <Edit className="w-4 h-4" /> Edit
                                    </button>
                                    <button onClick={() => handleDelete(bracelet._id)} className="flex-1 px-3 py-2 bg-destructive/10 text-destructive rounded-lg hover:bg-destructive/20 flex items-center justify-center gap-2 transition-colors">
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

export default ManageBracelets;
