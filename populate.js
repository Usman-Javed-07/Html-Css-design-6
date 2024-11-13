// require("dotenv");
// const connectDB = require("./db/databse");
// const Product = require("./models/Product");
// const jsonProduct = require("./products.json");

// const start = async () => {
//   try {
//     await connectDB(process.env.MONGO_URI);
//     await Product.deleteMany();
//     await Product.create(jsonProduct);
//   } catch (error) {
//     console.log(error);
//   }
// };
// start();

require("dotenv").config();
const connectDB = require("./db/databse");
const Product = require("./models/Product");
const jsonProduct = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    await Product.deleteMany(); // Clear existing data
    console.log("Existing products deleted");

    await Product.create(jsonProduct); // Insert new data
    console.log("Products successfully added to MongoDB");

    process.exit(0); // Exit after completion
  } catch (error) {
    console.log("Error:", error.message);
    process.exit(1); // Exit on error
  }
};

start();
