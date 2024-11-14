const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productID: {
    type: Number,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    required: false,
  },
  productBrand: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
