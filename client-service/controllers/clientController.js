const Cliente = require("../models/Cliente");

// GET /clientes
exports.getAll = async (req, res) => {
  const clientes = await Cliente.find();
  res.json(clientes);
};

// GET /clientes/:id
exports.getById = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) return res.status(404).json({ error: "Cliente no encontrado" });
    res.json(cliente);
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};

// POST /clientes
exports.create = async (req, res) => {
  const nuevo = new Cliente(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};

// PUT /clientes/:id
exports.update = async (req, res) => {
  try {
    const actualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizado) return res.status(404).json({ error: "Cliente no encontrado" });
    res.json(actualizado);
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};

// DELETE /clientes/:id
exports.remove = async (req, res) => {
  try {
    const eliminado = await Cliente.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ error: "Cliente no encontrado" });
    res.json({ message: "Cliente eliminado" });
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};
