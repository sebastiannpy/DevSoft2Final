const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL || "mongodb://productos-db:27017/productosdb");
    console.log("MongoDB Productos conectado");
  } catch (error) {
    console.error("Error conectando MongoDB Productos:", error);
  }
}

module.exports = connectDB;
