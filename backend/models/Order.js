const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        user: {
            name: { type: String, required: true },
            email: { type: String, required: true },
            phone: { type: String, required: true },
            address: { type: String, required: true },
        },
        orderItems: [
            {
                name: { type: String, required: true },
                qty: { type: Number, required: true },
                image: { type: String, required: true },
                price: { type: Number, required: true },
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    refPath: 'type'
                },
                type: {
                    type: String,
                    required: true,
                    enum: ['Gemstone', 'Tree', 'Bracelet']
                }
            },
        ],
        paymentInfo: {
            razorpayOrderId: { type: String, required: true },
            razorpayPaymentId: { type: String },
            razorpaySignature: { type: String },
        },
        itemsPrice: { type: Number, required: true },
        taxPrice: { type: Number, default: 0.0 }, // If needed
        shippingPrice: { type: Number, default: 0.0 }, // If needed
        totalPrice: { type: Number, required: true },
        isPaid: { type: Boolean, default: false },
        paidAt: { type: Date },
        isDelivered: { type: Boolean, default: false },
        deliveredAt: { type: Date },
        status: { type: String, default: "Processing" },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Order", orderSchema);
