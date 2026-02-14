const express = require("express");
const router = express.Router();
const {
    getGemstones,
    getGemstoneById,
    createGemstone,
    deleteGemstone,
    updateGemstone,
    getTrees,
    getTreeById,
    createTree,
    deleteTree,
    updateTree,
    getBracelets,
    getBraceletById,
    createBracelet,
    deleteBracelet,
    updateBracelet,
    searchProducts,
} = require("../controllers/productController");
const { protect, admin } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

// Search Route
router.route("/search").get(searchProducts);

// Gemstone Routes
router
    .route("/gemstones")
    .get(getGemstones)
    .post(protect, admin, upload.single("image"), createGemstone);

router
    .route("/gemstones/:id")
    .get(getGemstoneById)
    .delete(protect, admin, deleteGemstone)
    .put(protect, admin, upload.single("image"), updateGemstone);

// Tree Routes
router
    .route("/trees")
    .get(getTrees)
    .post(protect, admin, upload.single("image"), createTree);

router
    .route("/trees/:id")
    .get(getTreeById)
    .delete(protect, admin, deleteTree)
    .put(protect, admin, upload.single("image"), updateTree);

// Bracelet Routes
router
    .route("/bracelets")
    .get(getBracelets)
    .post(protect, admin, upload.single("image"), createBracelet);

router
    .route("/bracelets/:id")
    .get(getBraceletById)
    .delete(protect, admin, deleteBracelet)
    .put(protect, admin, upload.single("image"), updateBracelet);

module.exports = router;
