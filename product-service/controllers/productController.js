const Producto = require("../models/Producto");

// GET /productos
exports.getAll = async (req, res) => {
  const productos = await Producto.find();
  res.json(productos);
};

// GET /productos/:id
exports.getById = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) return res.status(404).json({ error: "Producto no encontrado" });
    res.json(producto);
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};

// POST /productos
exports.create = async (req, res) => {
  const nuevo = new Producto(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};

// PUT /productos/:id
exports.update = async (req, res) => {
  try {
    const actualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizado) return res.status(404).json({ error: "Producto no encontrado" });
    res.json(actualizado);
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};

// DELETE /productos/:id
exports.remove = async (req, res) => {
  try {
    const eliminado = await Producto.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ error: "Producto no encontrado" });
    res.json({ message: "Producto eliminado" });
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};
