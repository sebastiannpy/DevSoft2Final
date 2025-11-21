const mongoose = require("mongoose");

const VentaSchema = new mongoose.Schema({

  clienteId: String,
  productoId: String,
  cantidad: Number,
  total: Number,
  fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Venta", VentaSchema);
