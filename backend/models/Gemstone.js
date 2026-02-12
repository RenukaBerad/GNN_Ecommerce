const mongoose = require("mongoose");

const gemstoneSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        shortDescription: { type: String },
        meaning: { type: String },
        color: { type: String },
        colorClass: { type: String }, // CSS class for color styling
        glowClass: { type: String }, // CSS class for glow effect
        zodiac: { type: String },
        rarity: { type: String },
        hardness: { type: String },
        chakra: { type: String },
        image: { type: String, required: true }, // Cloudinary URL
        benefits: [String],
        whoShouldWear: [String],
        careInstructions: [String],
        price: { type: String },
        buyLink: { type: String },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Gemstone", gemstoneSchema);
