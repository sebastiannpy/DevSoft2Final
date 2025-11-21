const mongoose = require("mongoose");

const ClienteSchema = new mongoose.Schema({
  nombre: String,
  email: String
});

module.exports = mongoose.model("Cliente", ClienteSchema);
