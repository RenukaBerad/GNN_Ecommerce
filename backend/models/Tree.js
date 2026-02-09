const mongoose = require("mongoose");

const treeSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        numerology: { type: String }, // Used as short description
        image: { type: String, required: true }, // Cloudinary URL
        price: { type: String },
        buyLink: { type: String },
        // Add other specific fields if needed
    },
    { timestamps: true }
);

module.exports = mongoose.model("Tree", treeSchema);
