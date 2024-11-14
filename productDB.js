require("dotenv").config();
const connectDB = require("./db/databse");
const Product = require("./models/Product");
const ProductJson = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log(ProductJson);

    await Product.create(ProductJson);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};
start();
