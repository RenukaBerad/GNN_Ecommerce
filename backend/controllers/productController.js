const Gemstone = require("../models/Gemstone");
const Tree = require("../models/Tree");
const Bracelet = require("../models/Bracelet");
const asyncHandler = require("express-async-handler");

// --- GEMSTONES ---

// @desc    Get all gemstones
// @route   GET /api/products/gemstones
// @access  Public
const getGemstones = asyncHandler(async (req, res) => {
    const gemstones = await Gemstone.find({});
    res.json(gemstones);
});

// @desc    Create a gemstone
// @route   POST /api/products/gemstones
// @access  Private/Admin
const createGemstone = asyncHandler(async (req, res) => {
    const {
        name,
        shortDescription,
        meaning,
        color,
        colorClass,
        glowClass,
        zodiac,
        rarity,
        hardness,
        chakra,
        benefits,
        whoShouldWear,
        careInstructions,
        price,
        buyLink,
    } = req.body;

    const image = req.file ? req.file.path : null;

    if (!image) {
        res.status(400);
        throw new Error("Please upload an image");
    }

    const gemstone = await Gemstone.create({
        name,
        shortDescription,
        meaning,
        color,
        colorClass,
        glowClass,
        zodiac,
        rarity,
        hardness,
        chakra,
        image,
        benefits: benefits ? JSON.parse(benefits) : [], // Expecting JSON string array
        whoShouldWear: whoShouldWear ? JSON.parse(whoShouldWear) : [],
        careInstructions: careInstructions ? JSON.parse(careInstructions) : [],
        price,
        buyLink,
    });

    if (gemstone) {
        res.status(201).json(gemstone);
    } else {
        res.status(400);
        throw new Error("Invalid gemstone data");
    }
});

// @desc    Delete a gemstone
// @route   DELETE /api/products/gemstones/:id
// @access  Private/Admin
const deleteGemstone = asyncHandler(async (req, res) => {
    const gemstone = await Gemstone.findById(req.params.id);

    if (gemstone) {
        await gemstone.deleteOne();
        res.json({ message: "Gemstone removed" });
    } else {
        res.status(404);
        throw new Error("Gemstone not found");
    }
});

// @desc    Update a gemstone
// @route   PUT /api/products/gemstones/:id
// @access  Private/Admin
const updateGemstone = asyncHandler(async (req, res) => {
    const gemstone = await Gemstone.findById(req.params.id);

    if (gemstone) {
        gemstone.name = req.body.name || gemstone.name;
        gemstone.shortDescription =
            req.body.shortDescription || gemstone.shortDescription;
        gemstone.meaning = req.body.meaning || gemstone.meaning;
        gemstone.color = req.body.color || gemstone.color;
        gemstone.colorClass = req.body.colorClass || gemstone.colorClass;
        gemstone.glowClass = req.body.glowClass || gemstone.glowClass;
        gemstone.zodiac = req.body.zodiac || gemstone.zodiac;
        gemstone.rarity = req.body.rarity || gemstone.rarity;
        gemstone.hardness = req.body.hardness || gemstone.hardness;
        gemstone.chakra = req.body.chakra || gemstone.chakra;
        gemstone.price = req.body.price || gemstone.price;
        gemstone.buyLink = req.body.buyLink || gemstone.buyLink;

        if (req.file) {
            gemstone.image = req.file.path;
        }

        if (req.body.benefits) {
            gemstone.benefits = JSON.parse(req.body.benefits);
        }
        if (req.body.whoShouldWear) {
            gemstone.whoShouldWear = JSON.parse(req.body.whoShouldWear);
        }
        if (req.body.careInstructions) {
            gemstone.careInstructions = JSON.parse(req.body.careInstructions);
        }

        const updatedGemstone = await gemstone.save();
        res.json(updatedGemstone);
    } else {
        res.status(404);
        throw new Error("Gemstone not found");
    }
});

// --- TREES ---

// @desc    Get all trees
// @route   GET /api/products/trees
// @access  Public
const getTrees = asyncHandler(async (req, res) => {
    const trees = await Tree.find({});
    res.json(trees);
});

// @desc    Create a tree
// @route   POST /api/products/trees
// @access  Private/Admin
const createTree = asyncHandler(async (req, res) => {
    const { name, numerology, price, buyLink } = req.body;
    const image = req.file ? req.file.path : null;

    if (!image) {
        res.status(400);
        throw new Error("Please upload an image");
    }

    const tree = await Tree.create({
        name,
        numerology,
        image,
        price,
        buyLink,
    });

    if (tree) {
        res.status(201).json(tree);
    } else {
        res.status(400);
        throw new Error("Invalid tree data");
    }
});

// @desc    Delete a tree
// @route   DELETE /api/products/trees/:id
// @access  Private/Admin
const deleteTree = asyncHandler(async (req, res) => {
    const tree = await Tree.findById(req.params.id);

    if (tree) {
        await tree.deleteOne();
        res.json({ message: "Tree removed" });
    } else {
        res.status(404);
        throw new Error("Tree not found");
    }
});

// @desc    Update a tree
// @route   PUT /api/products/trees/:id
// @access  Private/Admin
const updateTree = asyncHandler(async (req, res) => {
    const tree = await Tree.findById(req.params.id);

    if (tree) {
        tree.name = req.body.name || tree.name;
        tree.numerology = req.body.numerology || tree.numerology;
        tree.price = req.body.price || tree.price;
        tree.buyLink = req.body.buyLink || tree.buyLink;

        if (req.file) {
            tree.image = req.file.path;
        }

        const updatedTree = await tree.save();
        res.json(updatedTree);
    } else {
        res.status(404);
        throw new Error("Tree not found");
    }
});

// --- BRACELETS ---

// @desc    Get all bracelets
// @route   GET /api/products/bracelets
// @access  Public
const getBracelets = asyncHandler(async (req, res) => {
    const bracelets = await Bracelet.find({});
    res.json(bracelets);
});

// @desc    Create a bracelet
// @route   POST /api/products/bracelets
// @access  Private/Admin
const createBracelet = asyncHandler(async (req, res) => {
    const { name, numerology, price, buyLink } = req.body;
    const image = req.file ? req.file.path : null;

    if (!image) {
        res.status(400);
        throw new Error("Please upload an image");
    }

    const bracelet = await Bracelet.create({
        name,
        numerology,
        image,
        price,
        buyLink,
    });

    if (bracelet) {
        res.status(201).json(bracelet);
    } else {
        res.status(400);
        throw new Error("Invalid bracelet data");
    }
});

// @desc    Delete a bracelet
// @route   DELETE /api/products/bracelets/:id
// @access  Private/Admin
const deleteBracelet = asyncHandler(async (req, res) => {
    const bracelet = await Bracelet.findById(req.params.id);

    if (bracelet) {
        await bracelet.deleteOne();
        res.json({ message: "Bracelet removed" });
    } else {
        res.status(404);
        throw new Error("Bracelet not found");
    }
});

// @desc    Update a bracelet
// @route   PUT /api/products/bracelets/:id
// @access  Private/Admin
const updateBracelet = asyncHandler(async (req, res) => {
    const bracelet = await Bracelet.findById(req.params.id);

    if (bracelet) {
        bracelet.name = req.body.name || bracelet.name;
        bracelet.numerology = req.body.numerology || bracelet.numerology;
        bracelet.price = req.body.price || bracelet.price;
        bracelet.buyLink = req.body.buyLink || bracelet.buyLink;

        if (req.file) {
            bracelet.image = req.file.path;
        }

        const updatedBracelet = await bracelet.save();
        res.json(updatedBracelet);
    } else {
        res.status(404);
        throw new Error("Bracelet not found");
    }
});

// @desc    Get a gemstone by ID
// @route   GET /api/products/gemstones/:id
// @access  Public
const getGemstoneById = asyncHandler(async (req, res) => {
    let gemstone;
    // Check if valid ObjectId
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
        gemstone = await Gemstone.findById(req.params.id);
    }

    // If not found by _id, try by custom id (slug)
    if (!gemstone) {
        gemstone = await Gemstone.findOne({ id: req.params.id });
    }

    if (gemstone) {
        res.json(gemstone);
    } else {
        res.status(404);
        throw new Error("Gemstone not found");
    }
});

// @desc    Get a tree by ID
// @route   GET /api/products/trees/:id
// @access  Public
const getTreeById = asyncHandler(async (req, res) => {
    const tree = await Tree.findById(req.params.id);
    if (tree) {
        res.json(tree);
    } else {
        res.status(404);
        throw new Error("Tree not found");
    }
});

// @desc    Get a bracelet by ID
// @route   GET /api/products/bracelets/:id
// @access  Public
const getBraceletById = asyncHandler(async (req, res) => {
    const bracelet = await Bracelet.findById(req.params.id);
    if (bracelet) {
        res.json(bracelet);
    } else {
        res.status(404);
        throw new Error("Bracelet not found");
    }
});

// @desc    Search products
// @route   GET /api/products/search
// @access  Public
const searchProducts = asyncHandler(async (req, res) => {
    const { category, query, minPrice, maxPrice } = req.query;

    let results = [];

    // Helper to build query
    const buildQuery = () => {
        let q = {};
        if (query) {
            const regex = new RegExp(query, 'i');
            q.$or = [
                { name: regex },
                { meaning: regex },
                { numerology: regex },
                { benefits: regex },
                { shortDescription: regex }
            ];
        }
        return q;
    };

    const q = buildQuery();

    if (!category || category === 'All' || category === 'Gemstones') {
        const stones = await Gemstone.find(q);
        results = [...results, ...stones.map(s => ({ ...s.toObject(), type: 'gemstone' }))];
    }

    if (!category || category === 'All' || category === 'Trees') {
        const trees = await Tree.find(q); // Trees might not have all fields, but usually name/numerology
        results = [...results, ...trees.map(t => ({ ...t.toObject(), type: 'tree' }))];
    }

    if (!category || category === 'All' || category === 'Bracelets') {
        const bracelets = await Bracelet.find(q);
        results = [...results, ...bracelets.map(b => ({ ...b.toObject(), type: 'bracelet' }))];
    }

    // Filter by Price (Basic string parsing since prices are stored as strings e.g. "₹1200")
    // Ideally prices should be numbers in DB, but for now we parse.
    if (minPrice || maxPrice) {
        results = results.filter(item => {
            const priceStr = item.price ? item.price.replace(/[^0-9]/g, '') : "0";
            const price = parseInt(priceStr);
            const min = minPrice ? parseInt(minPrice) : 0;
            const max = maxPrice ? parseInt(maxPrice) : Infinity;
            return price >= min && price <= max;
        });
    }

    res.json(results);
});

module.exports = {
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
};
