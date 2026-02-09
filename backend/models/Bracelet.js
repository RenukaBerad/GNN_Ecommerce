const mongoose = require("mongoose");

const braceletSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        numerology: { type: String }, // Used as description
        image: { type: String, required: true }, // Cloudinary URL
        price: { type: String },
        buyLink: { type: String },
        // Add other specific fields if needed
    },
    { timestamps: true }
);

module.exports = mongoose.model("Bracelet", braceletSchema);
