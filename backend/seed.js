const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");
const bcrypt = require("bcryptjs");

dotenv.config();

const seedAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected");

        // Check if admin exists and remove it to ensure clean slate with correct password
        await User.deleteOne({ username: "admin" });

        const adminUser = new User({
            username: "admin",
            password: "admin", // Pass plain text, pre-save hook will hash it
            isAdmin: true,
        });

        await adminUser.save();
        console.log("Admin user created successfully");
        process.exit();
    } catch (error) {
        console.error("Error seeding admin:", error);
        process.exit(1);
    }
};

seedAdmin();
