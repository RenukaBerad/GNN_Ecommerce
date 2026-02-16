import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import api from "@/lib/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

// Schema for form validation
const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    address: z.string().min(10, "Address must be at least 10 characters"),
    city: z.string().min(2, "City is required"),
    state: z.string().min(2, "State is required"),
    pincode: z.string().min(6, "Invalid Pincode"),
});

type FormValues = z.infer<typeof formSchema>;

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { product, type } = location.state || {}; // Expecting product details passed via state

    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    useEffect(() => {
        if (!product) {
            toast.error("No product selected for checkout");
            navigate("/");
        }
    }, [product, navigate]);

    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    const onSubmit = async (data: FormValues) => {
        if (!product) return;
        setLoading(true);

        const res = await loadRazorpayScript();

        if (!res) {
            toast.error("Razorpay SDK failed to load. Are you online?");
            setLoading(false);
            return;
        }

        try {
            // Parse price: Remove "₹", ",", " " and convert to number
            const parsedPrice = Number(product.price.toString().replace(/[^0-9]/g, ''));

            if (isNaN(parsedPrice) || parsedPrice <= 0) {
                toast.error("Invalid product price");
                setLoading(false);
                return;
            }

            // 1. Create Order
            const orderResponse = await api.post("/payment/create-order", {
                amount: parsedPrice,
                products: [{
                    product: product._id || product.id,
                    name: product.name,
                    qty: 1,
                    image: product.image,
                    price: parsedPrice,
                    type: type // 'Gemstone', 'Tree', 'Bracelet'
                }],
                user: {
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    address: `${data.address}, ${data.city}, ${data.state} - ${data.pincode}`
                }
            });

            if (!orderResponse.data.success) {
                toast.error("Error creating order");
                setLoading(false);
                return;
            }

            const { order } = orderResponse.data;

            // 2. Open Razorpay Options
            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID || "YOUR_KEY_ID_PLACEHOLDER",
                amount: order.amount,
                currency: order.currency,
                name: "GNN E-commerce",
                description: `Purchase of ${product.name}`,
                image: "/images/logo.png", // Add your logo path
                order_id: order.id,
                handler: async function (response: any) {
                    try {
                        // 3. Verify Payment
                        const verifyResponse = await api.post("/payment/verify-payment", {
                            razorpayOrderId: response.razorpay_order_id,
                            razorpayPaymentId: response.razorpay_payment_id,
                            razorpaySignature: response.razorpay_signature,
                            orderData: {
                                user: {
                                    name: data.name,
                                    email: data.email,
                                    phone: data.phone,
                                    address: `${data.address}, ${data.city}, ${data.state} - ${data.pincode}`
                                },
                                orderItems: [{
                                    name: product.name,
                                    qty: 1,
                                    image: product.image,
                                    price: parsedPrice,
                                    product: product._id || product.id,
                                    type: type
                                }],
                                itemsPrice: parsedPrice,
                                totalPrice: parsedPrice
                            }
                        });

                        if (verifyResponse.data.success) {
                            toast.success("Payment Successful!");
                            navigate("/payment-success", { state: { orderId: verifyResponse.data.orderId } });
                        } else {
                            toast.error("Payment Verification Failed");
                        }

                    } catch (error) {
                        console.error(error);
                        toast.error("Payment verification failed");
                    }
                },
                prefill: {
                    name: data.name,
                    email: data.email,
                    contact: data.phone,
                },
                notes: {
                    address: `${data.address}, ${data.city}, ${data.state}`,
                },
                theme: {
                    color: "#800020", // Maroon
                },
            };

            const paymentObject = new (window as any).Razorpay(options);
            paymentObject.open();
            setLoading(false);

        } catch (error) {
            console.error(error);
            toast.error("Something went wrong during checkout");
            setLoading(false);
        }
    };

    if (!product) return null;

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-serif text-center mb-8 text-foreground">Checkout</h1>

                <div className="grid lg:grid-cols-2 gap-12 text-zinc-950">
                    {/* Left: Shipping Details */}
                    <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50 shadow-sm">
                        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            Shipping Details
                        </h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input id="name" {...register("name")} placeholder="John Doe" />
                                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input id="phone" {...register("phone")} placeholder="9876543210" />
                                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" {...register("email")} placeholder="john@example.com" />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="address">Address</Label>
                                <Input id="address" {...register("address")} placeholder="123 Main St, Apt 4B" />
                                {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="city">City</Label>
                                    <Input id="city" {...register("city")} placeholder="New York" />
                                    {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="state">State</Label>
                                    <Input id="state" {...register("state")} placeholder="NY" />
                                    {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="pincode">Pincode</Label>
                                    <Input id="pincode" {...register("pincode")} placeholder="10001" />
                                    {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode.message}</p>}
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg"
                                disabled={loading}
                            >
                                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Proceed to Pay"}
                            </Button>
                        </form>
                    </div>

                    {/* Right: Order Summary */}
                    <div className="h-fit sticky top-32">
                        <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50 shadow-sm">
                            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

                            <div className="flex gap-4 mb-6">
                                <div className="w-24 h-24 rounded-lg overflow-hidden border border-border">
                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">{product.name}</h3>
                                    <p className="text-muted-foreground text-sm capitalize">{type}</p>
                                    <p className="text-primary font-bold mt-1">₹ {product.price}</p>
                                </div>
                            </div>

                            <div className="space-y-3 pt-6 border-t border-border">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Subtotal</span>
                                    <span>₹ {product.price}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Shipping</span>
                                    <span className="text-green-600">Free</span>
                                </div>
                                <div className="flex justify-between font-bold text-lg pt-3 border-t border-border">
                                    <span>Total</span>
                                    <span>₹ {product.price}</span>
                                </div>
                            </div>

                            <div className="mt-6 bg-primary/5 p-4 rounded-lg text-sm text-muted-foreground">
                                <p className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                    Secure Payment via Razorpay
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Checkout;
