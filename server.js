require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const connectDB = require("./db/databse");
const { get } = require("http");
const Product = require("./models/Product");
// const productsRouter = require("./routes/routes");
const cors = require("cors");
app.use(express.json());
app.use(express.static("./public"));
// app.use("/api/products", productsRouter);
const corsOptions = {
  origin: "http://localhost:5173",
};
app.use(cors(corsOptions));
const port = process.env.PORT || 5000;

// getting the product form database
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Faild to fetch products" });
  }
});

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
    app.listen(port, () =>
      console.log(`CARA server is listening on port ${port}`)
    );
  } catch (error) {
    console.log("Error:", error.message);
  }
};

startServer();
