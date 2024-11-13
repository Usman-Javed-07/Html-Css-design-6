const express = require("express");

const router = express.Router();

const Product = require("../models/Product");

router.post("/add-products", async (req, res) => {
  try {
    const products = req.body;
    const savedProducts = await Product.insertMany(products); // Insert all products at once
    res.status(201).json(savedProducts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = router;
