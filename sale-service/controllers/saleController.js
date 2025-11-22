const axios = require("axios");
const Venta = require("../models/Venta");


exports.getAll = async (req, res) => {
  const ventas = await Venta.find();
  res.json(ventas);
};


exports.getById = async (req, res) => {
  try {
    const venta = await Venta.findById(req.params.id);
    if (!venta) return res.status(404).json({ error: "Venta no encontrada" });
    res.json(venta);
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};


exports.create = async (req, res) => {
  const { clienteId, productoId, cantidad } = req.body;

  
  const cliente = await axios
    .get(`http://client-service:3001/clients/${clienteId}`)
    .then(r => r.data)
    .catch(() => null);

  if (!cliente) return res.status(400).json({ error: "Cliente inválido" });

  
  const producto = await axios
    .get(`http://product-service:3002/products/${productoId}`)
    .then(r => r.data)
    .catch(() => null);

  if (!producto) return res.status(400).json({ error: "Producto inválido" });

  if (producto.stock < cantidad)
    return res.status(400).json({ error: "Stock insuficiente" });

  
  const venta = new Venta({
    clienteId,
    productoId,
    cantidad,
    
  });

  await venta.save();

  res.status(201).json({ mensaje: "Venta registrada", venta });
};


exports.update = async (req, res) => {
  try {
    const actualizado = await Venta.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizado) return res.status(404).json({ error: "Venta no encontrada" });
    res.json(actualizado);
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};


exports.remove = async (req, res) => {
  try {
    const eliminado = await Venta.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ error: "Venta no encontrada" });
    res.json({ message: "Venta eliminada" });
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};
