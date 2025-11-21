const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(express.json());

// Conexión a Mongo usando el valor del docker-compose
const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl)
  .then(() => console.log("MongoDB connected for PRODUCT SERVICE"))
  .catch(err => console.error("Mongo connection error:", err));

// Rutas
app.use('/products', productRoutes);

// Puerto del microservicio de productos
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Product Service running on port ${PORT}`);
});
