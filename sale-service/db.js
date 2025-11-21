const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL || "mongodb://ventas-db:27017/ventasdb");
    console.log("MongoDB Ventas conectado");
  } catch (error) {
    console.error("Error conectando MongoDB Ventas:", error);
  }
}

module.exports = connectDB;
