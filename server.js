require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const connectDB = require("./db/databse");
const productsRouter = require("./routes/routes");

app.use(express.json()); // To handle JSON payloads
app.use(express.static("./public"));
app.use("/api/products", productsRouter); // Use the router

const port = process.env.PORT || 5000;

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

// // end
