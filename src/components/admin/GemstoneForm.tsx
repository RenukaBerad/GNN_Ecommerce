import { useState } from "react";
import api from "@/lib/api";
import { toast } from "sonner";

interface GemstoneFormProps {
    onSuccess: () => void;
    initialData?: any;
    onCancel: () => void;
}

const GemstoneForm: React.FC<GemstoneFormProps> = ({
    onSuccess,
    initialData,
    onCancel,
}) => {
    const [formData, setFormData] = useState({
        name: initialData?.name || "",
        shortDescription: initialData?.shortDescription || "",
        meaning: initialData?.meaning || "",
        color: initialData?.color || "",
        colorClass: initialData?.colorClass || "",
        glowClass: initialData?.glowClass || "",
        zodiac: initialData?.zodiac || "",
        rarity: initialData?.rarity || "",
        hardness: initialData?.hardness || "",
        chakra: initialData?.chakra || "",
        price: initialData?.price || "",
        buyLink: initialData?.buyLink || "",
        image: null as File | null,
        benefits: initialData?.benefits?.join("\n") || "",
        whoShouldWear: initialData?.whoShouldWear?.join("\n") || "",
        careInstructions: initialData?.careInstructions?.join("\n") || "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData((prev) => ({ ...prev, image: e.target.files![0] }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (key === "benefits" || key === "whoShouldWear" || key === "careInstructions") {
                data.append(key, JSON.stringify(value.split("\n").filter((i: string) => i.trim() !== "")));
            } else if (key === "image" && value) {
                data.append(key, value);
            } else if (key !== "image") {
                data.append(key, value as string);
            }
        });

        try {
            if (initialData) {
                await api.put(`/products/gemstones/${initialData._id}`, data);
                toast.success("Gemstone updated successfully");
            } else {
                await api.post("/products/gemstones", data);
                toast.success("Gemstone created successfully");
            }
            onSuccess();
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 font-sans">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="input bg-secondary/50 p-2 rounded" />
                <input name="price" placeholder="Price (e.g. ₹1,25,000)" value={formData.price} onChange={handleChange} className="input bg-secondary/50 p-2 rounded" />
                <input name="color" placeholder="Color" value={formData.color} onChange={handleChange} className="input bg-secondary/50 p-2 rounded" />
                <input name="hardness" placeholder="Hardness" value={formData.hardness} onChange={handleChange} className="input bg-secondary/50 p-2 rounded" />
                <input name="zodiac" placeholder="Zodiac" value={formData.zodiac} onChange={handleChange} className="input bg-secondary/50 p-2 rounded" />
                <input name="chakra" placeholder="Chakra" value={formData.chakra} onChange={handleChange} className="input bg-secondary/50 p-2 rounded" />
                <input name="rarity" placeholder="Rarity" value={formData.rarity} onChange={handleChange} className="input bg-secondary/50 p-2 rounded" />
                <input name="buyLink" placeholder="Buy Link" value={formData.buyLink} onChange={handleChange} className="input bg-secondary/50 p-2 rounded" />
            </div>

            <textarea name="shortDescription" placeholder="Short Description" value={formData.shortDescription} onChange={handleChange} className="input w-full bg-secondary/50 p-2 rounded h-20" />
            <textarea name="meaning" placeholder="Meaning" value={formData.meaning} onChange={handleChange} className="input w-full bg-secondary/50 p-2 rounded h-32" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Technical fields for styling */}
                <input name="colorClass" placeholder="Color Class (e.g. gem-ruby)" value={formData.colorClass} onChange={handleChange} className="input bg-secondary/50 p-2 rounded" />
                <input name="glowClass" placeholder="Glow Class (e.g. glow-ruby)" value={formData.glowClass} onChange={handleChange} className="input bg-secondary/50 p-2 rounded" />
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-medium">Benefits (One per line)</label>
                <textarea name="benefits" value={formData.benefits} onChange={handleChange} className="input w-full bg-secondary/50 p-2 rounded h-24" />
            </div>
            <div className="space-y-2">
                <label className="block text-sm font-medium">Who Should Wear (One per line)</label>
                <textarea name="whoShouldWear" value={formData.whoShouldWear} onChange={handleChange} className="input w-full bg-secondary/50 p-2 rounded h-24" />
            </div>
            <div className="space-y-2">
                <label className="block text-sm font-medium">Care Instructions (One per line)</label>
                <textarea name="careInstructions" value={formData.careInstructions} onChange={handleChange} className="input w-full bg-secondary/50 p-2 rounded h-24" />
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-medium">Image</label>
                <input type="file" onChange={handleFileChange} accept="image/*" className="block w-full text-sm text-foreground file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90" />
            </div>

            <div className="flex justify-end gap-2 pt-4">
                <button type="button" onClick={onCancel} className="px-4 py-2 border rounded hover:bg-muted">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90">Save</button>
            </div>
        </form>
    );
};

export default GemstoneForm;
