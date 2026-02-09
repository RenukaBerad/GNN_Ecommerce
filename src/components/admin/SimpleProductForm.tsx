import { useState } from "react";
import api from "@/lib/api";
import { toast } from "sonner";

interface SimpleProductFormProps {
    type: "trees" | "bracelets";
    onSuccess: () => void;
    initialData?: any;
    onCancel: () => void;
}

const SimpleProductForm: React.FC<SimpleProductFormProps> = ({
    type,
    onSuccess,
    initialData,
    onCancel,
}) => {
    const [formData, setFormData] = useState({
        name: initialData?.name || "",
        numerology: initialData?.numerology || "", // Using numerology as description/subtitle
        price: initialData?.price || "",
        buyLink: initialData?.buyLink || "",
        image: null as File | null,
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
        data.append("name", formData.name);
        data.append("numerology", formData.numerology);
        data.append("price", formData.price);
        data.append("buyLink", formData.buyLink);
        if (formData.image) {
            data.append("image", formData.image);
        }

        try {
            if (initialData) {
                await api.put(`/products/${type}/${initialData._id}`, data);
                toast.success(`Product updated successfully`);
            } else {
                await api.post(`/products/${type}`, data);
                toast.success(`Product created successfully`);
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
                <input name="price" placeholder="Price (e.g. ₹1,250)" value={formData.price} onChange={handleChange} className="input bg-secondary/50 p-2 rounded" />
            </div>

            <textarea name="numerology" placeholder="Description / Numerology" value={formData.numerology} onChange={handleChange} className="input w-full bg-secondary/50 p-2 rounded h-24" />
            <input name="buyLink" placeholder="Buy Link" value={formData.buyLink} onChange={handleChange} className="input w-full bg-secondary/50 p-2 rounded" />


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

export default SimpleProductForm;
