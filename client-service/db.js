const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL || "mongodb://clientes-db:27017/clientesdb");
    console.log("MongoDB Clientes conectado");
  } catch (error) {
    console.error("Error conectando MongoDB Clientes:", error);
  }
}

module.exports = connectDB;
