// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//   productID: {
//     type: Number,
//     required: true,
//     unique: true,
//   },
//   productName: {
//     type: String,
//     required: true,
//   },
//   productImage: {
//     type: String,
//     required: true,
//   },
//   productBrand: {
//     type: String,
//     required: true,
//   },
//   productPrice: {
//     type: Number,
//     required: true,
//   },
// });

// module.exports = mongoose.model("Product", productSchema);

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productID: {
    // Corrected field name
    type: Number,
    required: true,
    unique: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
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
