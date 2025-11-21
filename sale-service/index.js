const express = require('express');
const mongoose = require('mongoose');
const saleRoutes = require('./routes/saleRoutes');

const app = express();
app.use(express.json());

// Conexión a Mongo usando variable del docker-compose
const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl)
  .then(() => console.log("MongoDB connected for SALE SERVICE"))
  .catch(err => console.error("Mongo connection error:", err));

// Variables para comunicar con client-service y product-service
app.locals.CLIENT_SERVICE_URL = process.env.CLIENT_SERVICE_URL;
app.locals.PRODUCT_SERVICE_URL = process.env.PRODUCT_SERVICE_URL;

// Rutas
app.use('/sales', saleRoutes);

// Puerto del microservicio de ventas
const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Sale Service running on port ${PORT}`);
});
